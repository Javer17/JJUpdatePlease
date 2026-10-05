const RATING_MAGNITUDES = { Tilt: 0.0025, Lean: 0.015, Likely: 0.05, Safe: 0.1 }
// Ratings should be Averaged /100 /2 || Tilt 0.5 ; Lean 3 ; Likely 10 ; Safe 25
const FORECAST_DATE = '11/03/2026'
const PREDICTION_SOURCE_CONFIGS = {
  senate: {
    mapSourceID: "Discord-Senate-Prediction",
    rawPredictionsURL: "https://docs.google.com/spreadsheets/d/1GRaIlp8F123C1XiWESjGMgpKIDRd49H9xjAQEijcrMY/export?format=csv&gid=0",
    predictionsURL: "./csv-sources/discord-senate.csv",
    forecastDate: FORECAST_DATE
  },
  governor: {
    mapSourceID: "Discord-Governor-Prediction",
    rawPredictionsURL: "https://docs.google.com/spreadsheets/d/1GRaIlp8F123C1XiWESjGMgpKIDRd49H9xjAQEijcrMY/export?format=csv&gid=2080867918",
    predictionsURL: "./csv-sources/discord-governor.csv",
    forecastDate: FORECAST_DATE,
  }
}

function ratingToValue(rating)
{
  if (!rating) return 0
  const trimmed = rating.trim()
  if (!trimmed) return 0
  if (trimmed.toLowerCase() === 'tossup') return 0

  for (const prefix of Object.keys(RATING_MAGNITUDES))
  {
    if (trimmed.startsWith(prefix))
    {
      const magnitude = RATING_MAGNITUDES[prefix]
      const suffix = trimmed.slice(prefix.length)
      
      if (suffix === 'D' || suffix === 'DI') { return magnitude }
      if (suffix === 'R' || suffix === 'RI') { return -magnitude }
    }
  }
  throw new Error(`Unrecognized rating "${rating}" - expected e.g. "SafeD", "LeanR", "TiltID"`)
}

function parseCSV(text)
{
  const parsedRows = []
  let row = []
  let cell = ""
  let insideQuotes = false
  text = text.replace(/^\uFEFF/, '')

  for (let index = 0; index < text.length; index++)
  {
    const character = text[index]

    if (insideQuotes)
    {
      if (character == '"' && text[index+1] == '"')
      {
        cell += '"'
        index++
      }
      else if (character == '"')
      {
        insideQuotes = false
      }
      else
      {
        cell += character
      }
    }
    else if (character == '"' && cell.length == 0)
    {
      insideQuotes = true
    }
    else if (character == ',')
    {
      row.push(cell.trim())
      cell = ""
    }
    else if (character == '\n' || character == '\r')
    {
      if (character == '\r' && text[index+1] == '\n') { index++ }
      row.push(cell.trim())
      if (row.some(value => value.length > 0)) { parsedRows.push(row) }
      row = []
      cell = ""
    }
    else
    {
      cell += character
    }
  }

  if (insideQuotes) { throw new Error("Unterminated quoted field in CSV data") }
  if (cell.length > 0 || row.length > 0)
  {
    row.push(cell.trim())
    if (row.some(value => value.length > 0)) { parsedRows.push(row) }
  }
  if (parsedRows.length == 0) { throw new Error("CSV data is empty") }

  const header = parsedRows[0]
  const rows = parsedRows.slice(1).map(cells => {
    const row = {}
    header.forEach((col, i) => {
      if (col) { row[col] = cells[i] ?? '' }
    })
    return row
  })
  return { header, rows }
}

function stringifyCSV(header, rows)
{
  const escapeCell = value => {
    const text = String(value ?? '')
    return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text
  }
  const lines = [header.map(escapeCell).join(',')]
  for (const row of rows)
  {
    lines.push(header.map(col => escapeCell(row[col])).join(','))
  }
  return lines.join('\r\n') + '\r\n'
}

// Returns { [regionCode]: { democratShare, republicanShare } } for every rated region.
function computeStateForecasts(rawPredictionsText)
{
  const { header, rows } = parseCSV(rawPredictionsText)
  if (rows.length == 0) { throw new Error("No prediction ratings were found in the ratings CSV") }

  const states = header.filter(col => col.length > 0).slice(2)

  const forecasts = {}
  for (const state of states)
  {
    const ratings = rows.map(row => row[state]).filter(rating =>
      rating != null && rating.trim() !== '' && rating.trim().toLowerCase() !== 'null')
    if (ratings.length == 0) { continue }

    const values = ratings.map(ratingToValue)
    const average = values.reduce((sum, value) => sum + value, 0) / values.length
    const democratShare = Math.round((average + 0.5) * 1e10) / 1e10
    forecasts[state] = { democratShare, republicanShare: Math.round((1 - democratShare) * 1e10) / 1e10 }
  }
  return forecasts
}

// Overwrites the 2026 forecast rows' voteshare column in place, identified by date + party
// (not by whatever text is currently in voteshare) so this keeps working on every re-run.
function getForecastShareKey(party, regionCode, independentPartyByRegion)
{
  const normalizedParty = (party ?? '').trim().toLowerCase()
  if (["democratic", "democrat", "independentd"].includes(normalizedParty)) { return "democratShare" }
  if (["republican", "independentr"].includes(normalizedParty)) { return "republicanShare" }

  if (normalizedParty == "independent")
  {
    const independentSide = independentPartyByRegion?.[regionCode]?.trim().toLowerCase()
    if (["democrat", "democratic", "independentd"].includes(independentSide)) { return "democratShare" }
    if (["republican", "independentr"].includes(independentSide)) { return "republicanShare" }
  }

  return null
}

function applyForecasts(predictionsText, forecasts, config = {})
{
  const { header, rows } = parseCSV(predictionsText)
  const forecastDate = config.forecastDate ?? FORECAST_DATE
  const regionColumn = config.regionColumn ?? "state_po"
  const partyColumn = config.partyColumn ?? "party"
  let updatedCount = 0
  const rowsMissingRatings = new Set()

  for (const row of rows)
  {
    if (row.date !== forecastDate) { continue }

    const forecast = forecasts[row[regionColumn]]
    if (!forecast)
    {
      rowsMissingRatings.add(row[regionColumn])
      continue
    }

    const shareKey = getForecastShareKey(row[partyColumn], row[regionColumn], config.independentPartyByRegion)
    if (!shareKey) { continue }

    row.voteshare = String(forecast[shareKey])
    updatedCount++
  }

  return { text: stringifyCSV(header, rows), updatedCount, rowsMissingRatings: [...rowsMissingRatings] }
}

function updatePredictions(rawPredictionsText, predictionsText, config = {})
{
  const forecasts = computeStateForecasts(rawPredictionsText)
  const {text, rowsMissingRatings} = applyForecasts(predictionsText, forecasts, config)
  if (rowsMissingRatings.length)
  {
    console.warn(`No ratings found for ${rowsMissingRatings.join(", ")}; existing forecast shares were retained.`)
  }
  return text
}

async function fetchUpdatedPredictions(rawPredictionsURL, predictionsURL, config = {})
{
  const [rawPredictionsResponse, predictionsResponse] = await Promise.all([
    fetch(rawPredictionsURL),
    fetch(predictionsURL)
  ])

  if (!rawPredictionsResponse.ok || !predictionsResponse.ok)
  {
    throw new Error(`Unable to refresh predictions (${rawPredictionsResponse.status}, ${predictionsResponse.status})`)
  }

  const [rawPredictionsText, predictionsText] = await Promise.all([
    rawPredictionsResponse.text(),
    predictionsResponse.text()
  ])

  return updatePredictions(rawPredictionsText, predictionsText, config)
}

function configurePredictionMapSource(mapSource, config)
{
  if (!mapSource || !config?.rawPredictionsURL || !config?.predictionsURL)
  {
    throw new Error("A map source and prediction CSV URLs are required")
  }

  mapSource.prepareMapDataFunction = async function()
  {
    return fetchUpdatedPredictions(config.rawPredictionsURL, config.predictionsURL, config)
  }
  return mapSource
}

if (typeof globalThis !== 'undefined')
{
  globalThis.PREDICTION_SOURCE_CONFIGS = PREDICTION_SOURCE_CONFIGS
  globalThis.configurePredictionMapSource = configurePredictionMapSource
  globalThis.fetchUpdatedPredictions = fetchUpdatedPredictions
}

if (typeof module !== 'undefined' && module.exports)
{
  const fs = require('fs')
  const path = require('path')

  module.exports = {
    applyForecasts,
    computeStateForecasts,
    configurePredictionMapSource,
    fetchUpdatedPredictions,
    parseCSV,
    PREDICTION_SOURCE_CONFIGS,
    ratingToValue,
    stringifyCSV,
    updatePredictions
  }

  if (require.main === module)
  {
    // An optional source name selects a configured feed; omitted means Senate.
    const mode = process.argv[2]
    const selectedConfig = PREDICTION_SOURCE_CONFIGS[mode]
    const rawPredictionsPath = selectedConfig
      ? process.argv[3] ?? path.join(process.cwd(), 'csv-sources', `raw-discord-${mode}.csv`)
      : mode ?? path.join(process.cwd(), 'csv-sources', 'raw-discord-senate.csv')
    const predictionsPath = selectedConfig
      ? process.argv[4] ?? path.join(process.cwd(), 'csv-sources', `discord-${mode}.csv`)
      : process.argv[3] ?? path.join(process.cwd(), 'csv-sources', 'discord-senate.csv')
    const rawPredictionsText = fs.readFileSync(rawPredictionsPath, 'utf8')
    const predictionsText = fs.readFileSync(predictionsPath, 'utf8')
    const updatedText = updatePredictions(rawPredictionsText, predictionsText, selectedConfig)

    fs.writeFileSync(predictionsPath, updatedText)
    console.log(`Updated ${selectedConfig ? mode : 'senate'} predictions in ${predictionsPath}`)
  }
}
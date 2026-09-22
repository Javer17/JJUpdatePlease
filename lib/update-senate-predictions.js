const RATING_MAGNITUDES = { Tilt: 0.0025, Lean: 0.015, Likely: 0.05, Safe: 0.1 } // Ratings should be Averaged /100 /2 || Tilt 0.5 ; Lean 3 ; Likely 10 ; Safe 20
const FORECAST_DATE = '11/03/2026'

function ratingToValue(rating)
{
  if (!rating) return 0
  const trimmed = rating.trim()
  if (!trimmed) return 0

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

// Minimal CSV parsing/writing. Cleanly ignores empty header columns.
function parseCSV(text)
{
  const lines = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').split('\n').filter(line => line.length > 0)
  const header = lines[0].split(',').map(col => col.trim())
  const rows = lines.slice(1).map(line => {
    const cells = line.split(',')
    const row = {}
    header.forEach((col, i) => { 
      if (col) { row[col] = (cells[i] ?? '').trim() } 
    })
    return row
  })
  return { header, rows }
}

function stringifyCSV(header, rows)
{
  const lines = [header.join(',')]
  for (const row of rows)
  {
    lines.push(header.map(col => row[col] ?? '').join(','))
  }
  return lines.join('\r\n') + '\r\n'
}

// Returns { [statePostalCode]: { democratShare, republicanShare } } for every state column
// found in the raw ratings file.
function computeStateForecasts(rawPredictionsText)
{
  const { header, rows } = parseCSV(rawPredictionsText)
  
  // Filter out any empty headers and strictly slice from index 2 onward (ignoring columns 0 and 1)
  const states = header.filter(col => col.length > 0).slice(2)

  const forecasts = {}
  for (const state of states)
  {
    const values = rows.map(row => ratingToValue(row[state]))
    const average = values.reduce((sum, value) => sum + value, 0) / values.length
    const democratShare = Math.round((average + 0.5) * 1e10) / 1e10
    forecasts[state] = { democratShare, republicanShare: Math.round((1 - democratShare) * 1e10) / 1e10 }
  }
  return forecasts
}

// Overwrites the 2026 forecast rows' voteshare column in place, identified by date + party
// (not by whatever text is currently in voteshare) so this keeps working on every re-run.
function applyForecasts(predictionsText, forecasts)
{
  const { header, rows } = parseCSV(predictionsText)

  let updatedCount = 0
  for (const row of rows)
  {
    if (row.date !== FORECAST_DATE) { continue }

    const forecast = forecasts[row.state_po]
    if (!forecast) { continue }

    if (row.party === 'democratic' || row.party === 'independentd')
    {
      row.voteshare = String(forecast.democratShare)
      updatedCount++
    }
    else if (row.party === 'republican' || row.party === 'independentr')
    {
      row.voteshare = String(forecast.republicanShare)
      updatedCount++
    }
  }

  return { text: stringifyCSV(header, rows), updatedCount }
}

function updateSenatePredictions(rawPredictionsText, predictionsText)
{
  const forecasts = computeStateForecasts(rawPredictionsText)
  const { text, updatedCount } = applyForecasts(predictionsText, forecasts)

  const stateCount = Object.keys(forecasts).length
  if (updatedCount !== stateCount * 2)
  {
    console.warn(`Expected ${stateCount * 2} updated rows (one D + one R per state) but found ${updatedCount} - check that every state in the raw Senate predictions source has matching ${FORECAST_DATE} democrat/republican rows in the Senate predictions CSV.`)
  }

  return text
}

async function fetchUpdatedSenatePredictions(rawPredictionsURL, predictionsURL)
{
  const [rawPredictionsResponse, predictionsResponse] = await Promise.all([
    fetch(rawPredictionsURL),
    fetch(predictionsURL)
  ])

  if (!rawPredictionsResponse.ok || !predictionsResponse.ok)
  {
    throw new Error(`Unable to refresh Senate predictions (${rawPredictionsResponse.status}, ${predictionsResponse.status})`)
  }

  const [rawPredictionsText, predictionsText] = await Promise.all([
    rawPredictionsResponse.text(),
    predictionsResponse.text()
  ])

  return updateSenatePredictions(rawPredictionsText, predictionsText)
}

if (typeof globalThis !== 'undefined')
{
  globalThis.updateSenatePredictions = updateSenatePredictions
  globalThis.fetchUpdatedSenatePredictions = fetchUpdatedSenatePredictions
}

if (typeof module !== 'undefined' && module.exports)
{
  const fs = require('fs')
  const path = require('path')

  const rawPredictionsPath = process.argv[2] ?? path.join(process.cwd(), 'csv-sources', 'raw-discord-senate.csv')
  const predictionsPath = process.argv[3] ?? path.join(process.cwd(), 'csv-sources', 'discord-senate.csv')
  const rawPredictionsText = fs.readFileSync(rawPredictionsPath, 'utf8')
  const predictionsText = fs.readFileSync(predictionsPath, 'utf8')
  const updatedText = updateSenatePredictions(rawPredictionsText, predictionsText)

  fs.writeFileSync(predictionsPath, updatedText)
  console.log(`Updated Senate predictions in ${predictionsPath}`)
}
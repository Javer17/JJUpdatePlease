const submissionCountValues = {}
const submissionCountRequests = {}
const submissionCountsByDate = {}
let currentSubmissionMapSourceID = null

function updateSubmissionCountVisibility(mapSourceID, mapDate = currentSliderDate)
{
  const submissionCount = document.getElementById("submissionCount")
  const submissionCountValue = document.getElementById("submissionCountValue")
  const predictionConfig = Object.values(PREDICTION_SOURCE_CONFIGS).find(config => config.mapSourceID === mapSourceID)
  const shouldShow = predictionConfig != null
  currentSubmissionMapSourceID = shouldShow ? mapSourceID : null
  submissionCount.style.display = shouldShow ? "block" : "none"

  if (shouldShow)
  {
    updateSubmissionCountDisplay(mapSourceID, mapDate)
    updateSubmissionCount(mapSourceID, predictionConfig)
  }
}

function updateSubmissionCountDisplay(mapSourceID, mapDate = currentSliderDate)
{
  if (currentSubmissionMapSourceID !== mapSourceID) { return }
  if (submissionCountValues[mapSourceID] == null)
  {
    document.getElementById("submissionCountValue").textContent = "Loading..."
    return
  }
  if (submissionCountValues[mapSourceID] === "unavailable")
  {
    document.getElementById("submissionCountValue").textContent = "unavailable"
    return
  }

  const dateKey = mapDate instanceof Date ? new Date(mapDate).setHours(0, 0, 0, 0) : null
  document.getElementById("submissionCountValue").textContent =
    dateKey == null ? "Loading..." : (submissionCountsByDate[mapSourceID][dateKey] ?? 0).toLocaleString()
}

async function updateSubmissionCount(mapSourceID, predictionConfig)
{
  if (submissionCountValues[mapSourceID] != null)
  {
    updateSubmissionCountDisplay(mapSourceID)
    return
  }
  if (submissionCountRequests[mapSourceID]) { return }

  submissionCountRequests[mapSourceID] = fetch(predictionConfig.rawPredictionsURL, {cache: "no-store"})
    .then(response => {
      if (!response.ok)
      {
        throw new Error(`Request failed with status ${response.status}`)
      }
      return response.text()
    })
    .then(csvText => {
      const datedForecasts = computeDatedStateForecasts(csvText)
      submissionCountsByDate[mapSourceID] = Object.fromEntries(datedForecasts.map(({date, submissionCount}) => [
        new Date(date).setHours(0, 0, 0, 0),
        submissionCount
      ]))
      submissionCountValues[mapSourceID] = true
    })
    .catch(error => {
      console.error(`Unable to load ${predictionConfig.name ?? mapSourceID} submission count.`, error)
      submissionCountValues[mapSourceID] = "unavailable"
    })
    .finally(() => {
      delete submissionCountRequests[mapSourceID]
      if (currentSubmissionMapSourceID === mapSourceID)
      {
        updateSubmissionCountDisplay(mapSourceID)
      }
    })
}

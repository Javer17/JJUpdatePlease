const submissionCountValues = {}
const submissionCountRequests = {}
let currentSubmissionMapSourceID = null

function updateSubmissionCountVisibility(mapSourceID)
{
  const submissionCount = document.getElementById("submissionCount")
  const submissionCountValue = document.getElementById("submissionCountValue")
  const predictionConfig = Object.values(PREDICTION_SOURCE_CONFIGS).find(config => config.mapSourceID === mapSourceID)
  const shouldShow = predictionConfig != null
  currentSubmissionMapSourceID = shouldShow ? mapSourceID : null
  submissionCount.style.display = shouldShow ? "block" : "none"

  if (shouldShow)
  {
    submissionCountValue.textContent = submissionCountValues[mapSourceID] ?? "Loading..."
    updateSubmissionCount(mapSourceID, predictionConfig)
  }
}

async function updateSubmissionCount(mapSourceID, predictionConfig)
{
  if (submissionCountValues[mapSourceID] != null || submissionCountRequests[mapSourceID]) { return }

  submissionCountRequests[mapSourceID] = fetch(predictionConfig.rawPredictionsURL, {cache: "no-store"})
    .then(response => {
      if (!response.ok)
      {
        throw new Error(`Request failed with status ${response.status}`)
      }
      return response.text()
    })
    .then(csvText => {
      const parsedCSV = Papa.parse(csvText, {skipEmptyLines: true})
      if (parsedCSV.errors?.length)
      {
        throw new Error(parsedCSV.errors.map(error => error.message).join("; "))
      }
      const dataRowCount = Math.max(0, parsedCSV.data.length - 1)
      submissionCountValues[mapSourceID] = dataRowCount.toLocaleString()
    })
    .catch(error => {
      console.error(`Unable to load ${predictionConfig.name ?? mapSourceID} submission count.`, error)
      submissionCountValues[mapSourceID] = "unavailable"
    })
    .finally(() => {
      delete submissionCountRequests[mapSourceID]
      if (currentSubmissionMapSourceID === mapSourceID)
      {
        document.getElementById("submissionCountValue").textContent = submissionCountValues[mapSourceID]
      }
    })
}

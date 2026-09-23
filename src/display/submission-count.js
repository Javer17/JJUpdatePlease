const rawSenateSpreadsheetURL = "https://docs.google.com/spreadsheets/d/1GRaIlp8F123C1XiWESjGMgpKIDRd49H9xjAQEijcrMY/export?format=csv&gid=0"
let submissionCountLoaded = false

function updateSubmissionCountVisibility(mapSourceID)
{
  const submissionCount = document.getElementById("submissionCount")
  const shouldShow = mapSourceID === "Discord-Senate-Prediction"
  submissionCount.style.display = shouldShow ? "block" : "none"

  if (shouldShow && !submissionCountLoaded)
  {
    updateSubmissionCount()
  }
}

async function updateSubmissionCount()
{
  const submissionCountValue = document.getElementById("submissionCountValue")

  try
  {
    const response = await fetch(rawSenateSpreadsheetURL, {cache: "no-store"})
    if (!response.ok)
    {
      throw new Error(`Request failed with status ${response.status}`)
    }

    const csvText = await response.text()
    const parsedCSV = Papa.parse(csvText, {skipEmptyLines: true})
    const dataRowCount = Math.max(0, parsedCSV.data.length - 1)
    submissionCountValue.textContent = dataRowCount.toLocaleString()
    submissionCountLoaded = true
  }
  catch (error)
  {
    console.error("Unable to load Senate submission count.", error)
    submissionCountValue.textContent = "unavailable"
  }
}

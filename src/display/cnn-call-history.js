var cnnCallHistoryByYear = {}
var cnnCallHistoryFilter = "all"
var cnnMapRefreshTimer = null
var cnnMapRefreshFlashTimer = null
var cnnCallSourcesRefreshPromise = null

function stopCNNMapRefresh()
{
  if (cnnMapRefreshTimer != null)
  {
    clearTimeout(cnnMapRefreshTimer)
    cnnMapRefreshTimer = null
  }
  clearTimeout(cnnMapRefreshFlashTimer)
  cnnMapRefreshFlashTimer = null
  $("#cnnMapRefreshButton").removeClass("cnn-map-refresh-success")
}

function startCNNMapRefresh(source)
{
  stopCNNMapRefresh()
  recordCNNCalls(source, null, getCNNMapTypeForSource(source))
  scheduleCNNMapRefresh(source)
}

function scheduleCNNMapRefresh(source)
{
  const delay = 10000 - (Date.now() % 10000)
  cnnMapRefreshTimer = setTimeout(async function() {
    cnnMapRefreshTimer = null
    if (currentMapSource != source) { return }

    try
    {
      if (source.getMapData() != null)
      {
        await Promise.all([
          refreshCNNMapData(),
          loadCNNCallSourcesForYear(getCNNCallYear(source.getID()), true, source)
        ])
      }
    }
    catch (error)
    {
      console.error(`Unable to refresh CNN map data for ${source.getID()}`, error)
    }
    finally
    {
      if (currentMapSource == source)
      {
        scheduleCNNMapRefresh(source)
      }
    }
  }, delay)
}

function flashCNNMapRefreshButton()
{
  const button = $("#cnnMapRefreshButton")
  button.addClass("cnn-map-refresh-success")
  clearTimeout(cnnMapRefreshFlashTimer)
  cnnMapRefreshFlashTimer = setTimeout(() => {
    button.removeClass("cnn-map-refresh-success")
    cnnMapRefreshFlashTimer = null
  }, 500)
}

function updateCNNMapRefreshButtonVisibility()
{
  const isCNNMap = currentMapSource && currentMapSource.getID().startsWith("CNN-")
  $("#cnnMapRefreshButton").toggle(!!isCNNMap)
  $("#cnnMapUpdateButton").toggle(!!isCNNMap)
  $("#cnnCallHistory").hide()
  $("#cnnMapRefreshButton").attr("aria-expanded", "false")
}

function toggleCNNCallHistory(event)
{
  event?.preventDefault()
  event?.stopPropagation()

  const historyPanel = $("#cnnCallHistory")
  const shouldShow = !historyPanel.is(":visible")
  historyPanel.toggle(shouldShow)
  $("#cnnMapRefreshButton").attr("aria-expanded", shouldShow ? "true" : "false")
  if (shouldShow)
  {
    renderCNNCallHistory()
    if (cnnCallHistoryFilter == "all")
    {
      loadCNNCallSourcesForYear(getCNNCallYear(), false)
    }
  }
}

function getCNNCallType(mapTypeID)
{
  const normalizedMapTypeID = String(mapTypeID).toLowerCase()
  if (normalizedMapTypeID.includes("president")) { return "president" }
  if (normalizedMapTypeID.includes("senate")) { return "senate" }
  if (normalizedMapTypeID.includes("governor")) { return "governor" }
  if (normalizedMapTypeID.includes("house")) { return "house" }
  return null
}

function isCNNRaceUncalled(regionData)
{
  return currentMapSource?.getID().startsWith("CNN-") && regionData.calledPartyID == null && !regionData.isHold
}

function getCNNCallYear(sourceID = currentMapSource?.getID())
{
  return String(sourceID ?? "").match(/^CNN-(\d{4})-/)?.[1] ?? null
}

function getCNNCallHistoryForCurrentYear()
{
  const year = getCNNCallYear()
  return year ? (cnnCallHistoryByYear[year] ??= []) : []
}

function getCNNMapTypeForSource(source)
{
  return Object.values(currentMapCountry?.getMapTypes?.() ?? {}).find(mapType =>
    mapType.getMapSources()[source.getID()] == source) ?? currentMapType
}

function getCNNCallSourcesForYear(year)
{
  const sources = []
  for (const mapType of Object.values(currentMapCountry?.getMapTypes?.() ?? {}))
  {
    for (const [sourceID, source] of Object.entries(mapType.getMapSources()))
    {
      if (sourceID.startsWith(`CNN-${year}-`) && getCNNCallType(sourceID) && getCNNCallType(sourceID) != "president")
      {
        sources.push({source: source, mapType: mapType})
      }
    }
  }
  return sources
}

async function loadCNNCallSourcesForYear(year, forceRefresh, sourceAlreadyRefreshing)
{
  if (!year || cnnCallSourcesRefreshPromise) { return }

  cnnCallSourcesRefreshPromise = (async () => {
    const sources = getCNNCallSourcesForYear(year)
    await Promise.all(sources.map(async ({source, mapType}) => {
      if (source == sourceAlreadyRefreshing) { return }
      const previousMapData = source.getMapData()
      try
      {
        if (previousMapData == null || forceRefresh)
        {
          const loaded = await source.loadMap(forceRefresh)
          if (!loaded)
          {
            console.error(`Unable to load CNN call data for ${source.getID()}`)
            return
          }
        }
        recordCNNCalls(source, previousMapData, mapType)
      }
      catch (error)
      {
        console.error(`Unable to load CNN call data for ${source.getID()}`, error)
      }
    }))
  })()

  try
  {
    await cnnCallSourcesRefreshPromise
  }
  finally
  {
    cnnCallSourcesRefreshPromise = null
  }
}

function setCNNCallHistoryFilter(filter)
{
  cnnCallHistoryFilter = filter
  renderCNNCallHistory()
  document.getElementById("cnnCallHistoryList")?.scrollTo(0, 0)
  if (filter == "all")
  {
    loadCNNCallSourcesForYear(getCNNCallYear(), false)
  }
}

function getCNNRegionDataForCurrentDate(source, mapData = source.getMapData())
{
  if (!mapData) { return null }

  const latestDate = getCNNLatestMapDate(mapData)
  return latestDate != null ? mapData[latestDate] : null
}

function getCNNLatestMapDate(mapData)
{
  return Object.keys(mapData ?? {}).sort((date1, date2) => Number(date2) - Number(date1))[0] ?? null
}

function getCNNCallTimestamp(regionData)
{
  const timestampValue = regionData.voteTimestamp
  if (timestampValue == null) { return null }

  const numericTimestamp = typeof timestampValue == "number" || (typeof timestampValue == "string" && /^\d+$/.test(timestampValue))
    ? Number(timestampValue)
    : null
  const timestamp = new Date(numericTimestamp == null ? timestampValue : numericTimestamp < 1e12 ? numericTimestamp * 1000 : numericTimestamp)
  return Number.isFinite(timestamp.getTime()) ? timestamp.getTime() : null
}

function recordCNNCalls(source, previousMapData, mapType = getCNNMapTypeForSource(source))
{
  if (getCNNCallType(source.getID()) == "president") { return }

  const callHistory = cnnCallHistoryByYear[getCNNCallYear(source.getID())] ??= []
  const currentRegions = getCNNRegionDataForCurrentDate(source)
  if (!currentRegions) { return }

  let hasNewCalls = false

  for (const [regionID, regionData] of Object.entries(currentRegions))
  {
    const calledPartyID = regionData.calledPartyID
    if (calledPartyID == null || regionData.disabled == true) { continue }

    const existingCallIndex = callHistory.findIndex(call => call.sourceID == source.getID() && call.regionID == regionID)
    if (existingCallIndex >= 0 && callHistory[existingCallIndex].partyID == calledPartyID)
    {
      callHistory[existingCallIndex].isFlip = regionData.flip == true
      callHistory[existingCallIndex].raceToWatch = String(regionData.raceToWatch).toLowerCase() == "true"
      continue
    }

    const regionNames = mapType?.getRegionIDToName?.()
    const isIndividualState = /^[A-Z]{2}$/.test(regionID) && regionNames?.[regionID] != null
    let formattedRegionName = isIndividualState
      ? regionID
      : regionNames?.[regionID] ?? regionData.region ?? regionID
    const sourceRegionName = regionData.district != null
      ? source.getFormattedRegionName?.(regionID, regionData)
      : source.getFormattedRegionName?.(formattedRegionName, regionData)
    formattedRegionName = sourceRegionName ?? formattedRegionName
    const isSpecialRace = regionData.isSpecial == true || regionID.endsWith("-S")
    if (isSpecialRace)
    {
      const baseRegionName = formattedRegionName.replace(/ Special$/, "").replace(/-S$/, "")
      const specialStateID = regionID.match(/^([A-Z]{2})(?:-S)?$/)?.[1]
        ?? Object.entries(regionNames ?? {}).find(([id, name]) =>
          /^[A-Z]{2}$/.test(id) && name == baseRegionName)?.[0]
      formattedRegionName = specialStateID ? `${specialStateID}-S` : `${baseRegionName}-S`
    }
    const regionName = formattedRegionName
    const party = politicalParties[calledPartyID]
    const sourceDate = getCNNLatestMapDate(source.getMapData())
    const candidateName = (regionData.partyID == calledPartyID ? regionData.candidateName : null)
      ?? regionData.candidateMap?.[calledPartyID]
      ?? source.getCandidateNames?.(Number(sourceDate))?.[calledPartyID]
      ?? politicalParties[calledPartyID]?.getNames()[0]
    const call = {
      sourceID: source.getID(),
      regionID: regionID,
      regionName: regionName,
      mapTypeID: mapType.getID(),
      mapTypeIconURL: mapType.getIconURL(),
      partyID: calledPartyID,
      partyLogo: party?.getPartyLogo(),
      candidateName: candidateName,
      isFlip: regionData.flip == true,
      raceToWatch: String(regionData.raceToWatch).toLowerCase() == "true",
      calledAt: existingCallIndex >= 0
        ? callHistory[existingCallIndex].calledAt
        : getCNNCallTimestamp(regionData) ?? Date.now()
    }

    if (existingCallIndex >= 0)
    {
      callHistory.splice(existingCallIndex, 1)
    }
    callHistory.push(call)
    hasNewCalls = true
  }

  callHistory.sort((call1, call2) => call2.calledAt - call1.calledAt)
  if (hasNewCalls)
  {
    renderCNNCallHistory()
    document.getElementById("cnnCallHistoryList").scrollTop = 0
  }
}

function renderCNNCallHistory()
{
  const callList = document.getElementById("cnnCallHistoryList")
  const filterList = document.getElementById("cnnCallHistoryFilters")
  if (!callList || !filterList) { return }

  const callHistory = getCNNCallHistoryForCurrentYear()

  filterList.replaceChildren()
  callList.replaceChildren()
  const filterOptions = [
    {id: "all", label: "All", icon: null},
    {id: "senate", label: "Senate", icon: "./assets/usa-senate.png"},
    {id: "governor", label: "Governor", icon: "./assets/usa-governor.png"},
    {id: "house", label: "House", icon: "./assets/usa-house.png"}
  ]
  for (const option of filterOptions)
  {
    const filterButton = document.createElement("button")
    filterButton.type = "button"
    filterButton.className = "cnn-call-history-filter"
    if (cnnCallHistoryFilter == option.id) { filterButton.classList.add("cnn-call-history-filter-active") }
    filterButton.title = option.label
    filterButton.setAttribute("aria-label", option.label)
    filterButton.setAttribute("aria-pressed", cnnCallHistoryFilter == option.id ? "true" : "false")
    if (option.icon)
    {
      const filterIcon = document.createElement("img")
      filterIcon.src = option.icon
      filterIcon.alt = ""
      filterIcon.className = "cnn-call-history-filter-icon"
      filterButton.appendChild(filterIcon)
    }
    else
    {
      const allIcon = document.createElement("img")
      allIcon.className = "cnn-call-history-filter-icon"
      allIcon.src = "./assets/all.png"
      allIcon.alt = ""
      filterButton.appendChild(allIcon)
    }
    filterButton.addEventListener("click", () => setCNNCallHistoryFilter(option.id))
    filterList.appendChild(filterButton)
  }

  const filteredCalls = callHistory.filter(call =>
    cnnCallHistoryFilter == "all" || getCNNCallType(call.mapTypeID) == cnnCallHistoryFilter)
  if (filteredCalls.length == 0)
  {
    const emptyMessage = document.createElement("div")
    emptyMessage.className = "cnn-call-history-empty"
    emptyMessage.textContent = callHistory.length == 0 ? "No called races yet." : "No calls for this race type yet."
    callList.appendChild(emptyMessage)
    return
  }

  for (const call of filteredCalls)
  {
    const row = document.createElement("div")
    row.className = "cnn-call-history-row cnn-call-history-row-clickable"
    row.setAttribute("role", "button")
    row.tabIndex = 0
    row.setAttribute("aria-label", `Show ${call.regionName} on the CNN ${getCNNCallType(call.mapTypeID)} map`)

    const openCall = () => {
      openCNNCall(call).catch(error => console.error(`Unable to open called race ${call.regionName}`, error))
    }
    row.addEventListener("click", openCall)
    row.addEventListener("keydown", event => {
      if (event.key == "Enter" || event.key == " ")
      {
        event.preventDefault()
        openCall()
      }
    })

    const mapIcon = document.createElement("img")
    mapIcon.className = "cnn-call-history-icon"
    mapIcon.src = call.mapTypeIconURL
    mapIcon.alt = ""
    row.appendChild(mapIcon)

    const regionName = document.createElement("span")
    regionName.className = "cnn-call-history-region"
    regionName.textContent = call.regionName
    if (call.raceToWatch) { regionName.classList.add("cnn-call-history-watch") }
    row.appendChild(regionName)

    if (call.partyLogo)
    {
      const partyIcon = document.createElement("img")
      partyIcon.className = "cnn-call-history-icon"
      partyIcon.src = "./assets/partylogos/" + call.partyLogo
      partyIcon.alt = ""
      row.appendChild(partyIcon)
    }
    else
    {
      const partyIconPlaceholder = document.createElement("span")
      partyIconPlaceholder.className = "cnn-call-history-icon"
      partyIconPlaceholder.setAttribute("aria-hidden", "true")
      row.appendChild(partyIconPlaceholder)
    }

    const candidate = document.createElement("span")
    candidate.className = "cnn-call-history-candidate"
    candidate.textContent = call.candidateName
    if (call.isFlip) { candidate.classList.add("cnn-call-history-flip") }
    if (call.raceToWatch) { candidate.classList.add("cnn-call-history-watch") }
    row.appendChild(candidate)

    const calledTime = document.createElement("time")
    calledTime.className = "cnn-call-history-time"
    const callDate = new Date(call.calledAt)
    calledTime.dateTime = callDate.toISOString()
    const timeLabel = document.createElement("span")
    timeLabel.className = "cnn-call-history-time-label"
    const dateFormat = currentMapType.getMapSettings()["dateFormat"]
    timeLabel.textContent = dateFormat == "mdy"
      ? callDate.toLocaleTimeString([], {hour: "numeric", minute: "2-digit"})
      : zeroPadding(callDate.getHours()) + ":" + zeroPadding(callDate.getMinutes())
    calledTime.appendChild(timeLabel)
    if (callDate.toDateString() != new Date().toDateString())
    {
      const dateLabel = document.createElement("span")
      dateLabel.className = "cnn-call-history-date-label"
      dateLabel.textContent = getDateString(callDate, "/", false, true)
      calledTime.appendChild(dateLabel)
    }
    calledTime.title = callDate.toLocaleString()
    row.appendChild(calledTime)

    callList.appendChild(row)
  }
}

async function openCNNCall(call)
{
  const target = mapCountryIDs
    .map(countryID => mapCountries[countryID])
    .map(country => ({country: country, mapType: country.getMapTypes()[call.mapTypeID]}))
    .find(({mapType}) => mapType?.getMapSources()?.[call.sourceID])

  if (!target)
  {
    console.error(`Unable to find map source ${call.sourceID} for called race ${call.regionName}`)
    return
  }

  $("#cnnCallHistory").hide()
  $("#cnnMapRefreshButton").attr("aria-expanded", "false")

  if (currentMapCountry.getID() != target.country.getID())
  {
    await setMapCountry(target.country.getID(), undefined, false)
  }
  if (currentMapType.getID() != target.mapType.getID())
  {
    await setMapType(target.mapType.getID(), undefined, false)
  }

  const source = target.mapType.getMapSources()[call.sourceID]
  const sourceCycle = source.getCycleYear()
  if (sourceCycle != null && currentMapType.getCurrentMapCycle() != sourceCycle)
  {
    await setMapCycle(sourceCycle)
  }
  await setMapSource(source)
}

async function refreshCNNMapData(event)
{
  event?.preventDefault()
  event?.stopPropagation()

  const source = currentMapSource
  const button = $("#cnnMapUpdateButton")
  if (!source || !source.getID().startsWith("CNN-") || button.prop("disabled")) { return }

  const previousMapState = {
    rawMapData: source.rawMapData,
    mapData: source.mapData,
    mapDates: source.mapDates,
    candidateNameData: source.candidateNameData
  }
  const iconDivDictionary = getIconDivsToUpdateArrayForSourceID(source.getID())
  const statusDivID = Object.keys(iconDivDictionary)[0]
  const statusIcons = iconDivDictionary[statusDivID]
  button.prop("disabled", true).attr("title", "Updating map data")
  $("#cnnMapRefreshButton").attr("aria-busy", "true").css({opacity: "0.6"})
  setStatusImage(statusDivID, statusIcons.loading)

  try
  {
    const loadedSuccessfully = await source.loadMap(true)
    if (!loadedSuccessfully)
    {
      Object.assign(source, previousMapState)
      setStatusImage(statusDivID, statusIcons.error)
      return
    }

    setStatusImage(statusDivID, statusIcons.success)
    if (currentMapSource != source) { return }

    recordCNNCalls(source, previousMapState.mapData)
    setDataMapDateSliderRange(false)
    await displayDataMap(null, null, false, true)
    if (currentMapSource == source) { flashCNNMapRefreshButton() }
  }
  catch (error)
  {
    Object.assign(source, previousMapState)
    setStatusImage(statusDivID, statusIcons.error)
    console.error(`Unable to refresh CNN map data for ${source.getID()}`, error)
  }
  finally
  {
    button.prop("disabled", false).attr("title", "Update map data")
    $("#cnnMapRefreshButton").removeAttr("aria-busy").css({opacity: ""})
  }
}

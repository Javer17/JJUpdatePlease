let editMarginID = null

function createMarginEditDropdownItems(shouldSetDefault)
{
  if (shouldSetDefault)
  {
    setCookie(marginsCookieName, JSON.stringify({marginValues: marginValues, solidEnabled: solidMarginEnabled}))
  }

  $("#marginsDropdownContainer").html("")

  addMarginPresetRow()
  addSolidMarginToggleRow()
  addVoteshareCutoffRow()
  $("#marginsDropdownContainer").append("<div class='dropdown-separator-big'></div>")

  for (let marginID of getActiveMarginKeys())
  {
    if (marginID == "tilt") { continue } // Hardcoding tilt to be excluded
    $("#marginsDropdownContainer").append("<div class='dropdown-separator'></div>")
    $("#marginsDropdownContainer").append("<a id='" + marginID + "-edit' onclick='toggleMarginEditing(\"" + marginID + "\", this)'>" + marginNames[marginID] + "<span style='float: right; font-family: \"Bree5erif-Mono\"'>" + marginValues[marginID] + "</span></a>")
  }
  
  addResetMarginsRow()
}

function addMarginPresetRow()
{
  const presets = getMarginPresetCycleValues()
  const presetLabel = getMarginPresetLabel(presets[getMarginPresetIndex()])

  $("#marginsDropdownContainer").append("<a id='margin-preset' onclick='cycleMarginPreset(1)' oncontextmenu='cycleMarginPreset(-1); return false' style='display:flex; width:100%; justify-content:space-between; align-items:center; padding: 10px 10px; box-sizing:border-box; overflow:hidden; min-width:0;'>" +
    "<span style='display:inline-flex; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1 1 auto; margin-right: 1.5rem;'>🎯 Preset</span>" +
    "<span style='font-family: \"Bree5erif-Mono\"; opacity: 0.8; flex:0 0 auto; white-space:nowrap;'>" + presetLabel + "</span>" +
    "</a>")
}

function cycleMarginPreset(direction = 1)
{
  const presets = getMarginPresetCycleValues()
  const currentIndex = getMarginPresetIndex()
  const nextIndex = (currentIndex + direction + presets.length) % presets.length
  setSelectedMarginPresetIndex(nextIndex)
  const nextPreset = presets[nextIndex]
  applyMarginPreset(nextPreset)
}

function addSolidMarginToggleRow()
{
  $("#marginsDropdownContainer").append("<a id='toggle-solid-margin' onclick='toggleSolidMargin()' style='display:flex; width:100%; justify-content:space-between; align-items:center; padding: 10px 10px; box-sizing:border-box; overflow:hidden; min-width:0;'>" +
    "<span style='display:inline-flex; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1 1 auto; margin-right: 1.5rem;'>➕Solid</span>" +
    "<span style='font-family: \"Bree5erif-Mono\"; opacity: 0.8; flex:0 0 auto; white-space:nowrap;'>" + (solidMarginEnabled ? "Enabled" : "Disabled") + "</span>" +
    "</a>")
}

function addVoteshareCutoffRow()
{
  const cutoffMargin = currentMapSource.getVoteshareCutoffMargin() ?? 0
  $("#marginsDropdownContainer").append("<a id='voteshareCutoffMargin-edit' onclick='toggleMarginEditing(\"voteshareCutoffMargin\", this)'>📊Min Voteshare<span style='float: right; font-family: \"Bree5erif-Mono\"'>" + formatVoteshareCutoffMargin(cutoffMargin) + "</span></a>")
}

function formatVoteshareCutoffMargin(cutoffMargin)
{
  return Number(cutoffMargin).toLocaleString("en-US", {useGrouping: false, minimumFractionDigits: 1, maximumFractionDigits: 20})
}

function toggleMarginEditing(marginID, div)
{
  if (editMarginID == "voteshareCutoffMargin")
  {
    const cutoffInput = $("#voteshareCutoffMargin-text")
    const inputValue = cutoffInput.val()
    const previousCutoff = currentMapSource.getVoteshareCutoffMargin() ?? 0
    const requestedCutoff = typeof inputValue != "string" || inputValue.trim() == "" ? NaN : Number(inputValue)
    const cutoffMargin = Number.isFinite(requestedCutoff) ? Math.max(0, Math.min(100, requestedCutoff)) : previousCutoff

    currentMapSource.setVoteshareCutoffMarginOverride(cutoffMargin)
    $("#voteshareCutoffMargin-edit").html("📊️Min Voteshare<span style='float: right; font-family: \"Bree5erif-Mono\"'>" + formatVoteshareCutoffMargin(cutoffMargin) + "</span>")

    if (cutoffMargin != previousCutoff && showingDataMap)
    {
      downloadDataForMapSource(currentMapSource.getID(), {}, null, false, true)
    }
  }
  else if (editMarginID)
  {
    let marginValueToSet = parseFloat($("#" + editMarginID + "-text").val()) || defaultMarginValues[editMarginID]
    marginValueToSet = Math.round(marginValueToSet*Math.pow(10, 1))/Math.pow(10, 1)
    if (marginValueToSet > 100)
    {
      marginValueToSet = 100
    }

    let marginIDArray = getActiveMarginKeys()
    if (marginValueToSet < marginValues[marginIDArray[marginIDArray.indexOf(editMarginID)+1]])
    {
      marginValueToSet = marginValues[marginIDArray[marginIDArray.indexOf(editMarginID)+1]]
    }
    if (marginIDArray.indexOf(editMarginID) > 0 && marginValueToSet > marginValues[marginIDArray[marginIDArray.indexOf(editMarginID)-1]])
    {
      marginValueToSet = marginValues[marginIDArray[marginIDArray.indexOf(editMarginID)-1]]
    }

    let shouldRefreshMap = false
    if (marginValueToSet != marginValues[editMarginID])
    {
      shouldRefreshMap = true
    }

    marginValues[editMarginID] = marginValueToSet
    persistSelectedMarginPreset()
    if (shouldRefreshMap && currentMapSource.getCustomDefaultMargins() == null)
    {
      setCookie(marginsCookieName, JSON.stringify({marginValues: marginValues, solidEnabled: solidMarginEnabled}))
      defaultMarginValues = cloneObject(marginValues)
    }

    if (shouldRefreshMap && showingDataMap)
    {
      displayDataMap()
    }

    $("#" + editMarginID + "-edit").html(marginNames[editMarginID] + "<span style='float: right; font-family: \"Bree5erif-Mono\"'>" + marginValues[editMarginID] + "</span>")
  }

  if (marginID == editMarginID)
  {
    marginID = null
  }
  editMarginID = marginID

  if (marginID)
  {
    if (marginID == "voteshareCutoffMargin")
    {
      $(div).html("📊️Min Voteshare<input class='textInput' type='text' id='voteshareCutoffMargin-text' value='" + formatVoteshareCutoffMargin(currentMapSource.getVoteshareCutoffMargin() ?? 0) + "'>")
    }
    else
    {
      $(div).html(marginNames[marginID] + "<input class='textInput' type='text' id='" + marginID + "-text' value='" + marginValues[marginID] + "'>")
    }
    $("#" + marginID + "-text").focus()

    $("#marginEditButton").addClass('active')
  }
  else
  {
    $("#marginEditButton").removeClass('active')
    
    addResetMarginsRow()
  }
}

function addResetMarginsRow()
{
  const presets = getMarginPresetCycleValues()
  const selectedPreset = presets[getMarginPresetIndex()]
  const selectedPresetMargins = getMarginValuesForPreset(marginValues, selectedPreset)
  const currentMargins = fillMissingSolidMarginValues(marginValues)

  let matchesSelectedPreset = true
  for (const marginID of getActiveMarginKeys())
  {
    if (Number(currentMargins[marginID]) !== Number(selectedPresetMargins[marginID]))
    {
      matchesSelectedPreset = false
      break
    }
  }

  if (matchesSelectedPreset)
  {
    if ($("#reset-margins").length)
    {
      $("#reset-margins").remove()
    }
    return
  }

  if ($("#reset-margins").length)
  {
    return
  }

  $("#marginsDropdownContainer").append("<div class='dropdown-separator'></div>")
  $("#marginsDropdownContainer").append("<a id='reset-margins' style='padding-top: 14rem; min-height: 25rem; text-align: center;' onclick='resetMargins()'>Reset</a>")
}

function resetMargins()
{
  const presets = getMarginPresetCycleValues()
  const selectedPreset = presets[getMarginPresetIndex()]
  marginValues = getMarginValuesForPreset(marginValues, selectedPreset)
  defaultMarginValues = cloneObject(marginValues)
  persistSelectedMarginPreset()

  if (currentMapSource.getCustomDefaultMargins() == null)
  {
    setCookie(marginsCookieName, JSON.stringify({marginValues: marginValues, solidEnabled: solidMarginEnabled}))
    defaultMarginValues = cloneObject(marginValues)
  }
  
  if (showingDataMap)
  {
    displayDataMap()
  }
  
  createMarginEditDropdownItems(currentMapSource.getCustomDefaultMargins() == null)
}

function toggleSolidMargin()
{
  solidMarginEnabled = !solidMarginEnabled
  const selectedIndex = getSelectedMarginPresetIndex()

  if (currentMapSource.getCustomDefaultMargins() == null)
  {
    if (solidMarginEnabled)
    {
      defaultMarginValues = cloneObject(solidMarginValues)
    }
    else
    {
      defaultMarginValues = cloneObject(standardMarginValues)
    }

    marginValues = cloneObject(defaultMarginValues)
  }
  else
  {
    marginValues = fillMissingSolidMarginValues(currentMapSource.getCustomDefaultMargins())
  }
  const presets = getMarginPresetCycleValues()
  if (Number.isInteger(selectedIndex) && presets[selectedIndex])
  {
    marginValues = getMarginValuesForPreset(marginValues, presets[selectedIndex])
    defaultMarginValues = cloneObject(marginValues)
  }
  persistSelectedMarginPreset()
  if (currentMapSource.getCustomDefaultMargins() == null)
  {
    setCookie(marginsCookieName, JSON.stringify({marginValues: marginValues, solidEnabled: solidMarginEnabled}))
  }

  if (editMarginID === "solid")
  {
    toggleMarginEditing()
  }
  createMarginEditDropdownItems(currentMapSource.getCustomDefaultMargins() == null)
  if (showingDataMap)
  {
    displayDataMap()
  }
}

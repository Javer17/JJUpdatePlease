let editMarginID = null

function createMarginEditDropdownItems(shouldSetDefault)
{
  if (shouldSetDefault)
  {
    setCookie(marginsCookieName, JSON.stringify({ marginValues: marginValues, solidEnabled: solidMarginEnabled }))
  }

  $("#marginsDropdownContainer").html("")

  addSolidMarginToggleRow()

  for (let marginID of getActiveMarginKeys())
  {
    if (marginID == "tilt") { continue } // Hardcoding tilt to be excluded
    $("#marginsDropdownContainer").append("<div class='dropdown-separator'></div>")
    $("#marginsDropdownContainer").append("<a id='" + marginID + "-edit' onclick='toggleMarginEditing(\"" + marginID + "\", this)'>" + marginNames[marginID] + "<span style='float: right; font-family: \"Bree5erif-Mono\"'>" + marginValues[marginID] + "</span></a>")
  }
  
  addResetMarginsRow()
}

function addSolidMarginToggleRow()
{
  $("#marginsDropdownContainer").append("<a id='toggle-solid-margin' onclick='toggleSolidMargin()' style='display:flex; width:100%; justify-content:space-between; align-items:center; padding: 10px 10px; box-sizing:border-box; overflow:hidden; min-width:0;'>" +
    "<span style='display:inline-flex; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1 1 auto; margin-right: 1.5rem;'>➕Solid</span>" +
    "<span style='font-family: \"Bree5erif-Mono\"; opacity: 0.8; flex:0 0 auto; white-space:nowrap;'>" + (solidMarginEnabled ? "Enabled" : "Disabled") + "</span>" +
    "</a>")
  $("#marginsDropdownContainer").append("<div class='dropdown-separator-big'></div>")
}

function toggleMarginEditing(marginID, div)
{
  if (editMarginID)
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
    if (shouldRefreshMap && currentMapSource.getCustomDefaultMargins() == null)
    {
      setCookie(marginsCookieName, JSON.stringify({ marginValues: marginValues, solidEnabled: solidMarginEnabled }))
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
    $(div).html(marginNames[marginID] + "<input class='textInput' type='text' id='" + marginID + "-text' value='" + marginValues[marginID] + "'>")
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
  // Determine canonical defaults (respect custom source defaults).
  const sourceDefaults = currentMapSource.getCustomDefaultMargins()
  const standardMargins = fillMissingSolidMarginValues(sourceDefaults ?? (solidMarginEnabled ? solidMarginValues : standardMarginValues))

  // Compare against the current margins (ensure missing keys are filled)
  const currentMargins = fillMissingSolidMarginValues(marginValues)

  let isEqualToStandard = true
  for (const marginID of getActiveMarginKeys())
  {
    const a = Number(standardMargins[marginID])
    const b = Number(currentMargins[marginID])
    if (isNaN(a) || isNaN(b) || Math.abs(a - b) > 0.001)
    {
      isEqualToStandard = false
      break
    }
  }

  if (isEqualToStandard)
  {
    // Remove reset button if present and values already match defaults
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
  if (currentMapSource.getCustomDefaultMargins() != null)
  {
    marginValues = cloneObject(currentMapSource.getCustomDefaultMargins())
  }
  else
  {
    marginValues = solidMarginEnabled ? cloneObject(solidMarginValues) : cloneObject(standardMarginValues)
  }

  marginValues = fillMissingSolidMarginValues(marginValues)

  if (currentMapSource.getCustomDefaultMargins() == null)
  {
    setCookie(marginsCookieName, JSON.stringify({ marginValues: marginValues, solidEnabled: solidMarginEnabled }))
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
    // Persist the new solid-enabled state along with the margins
    setCookie(marginsCookieName, JSON.stringify({ marginValues: marginValues, solidEnabled: solidMarginEnabled }))
  }
  else
  {
    marginValues = fillMissingSolidMarginValues(currentMapSource.getCustomDefaultMargins())
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

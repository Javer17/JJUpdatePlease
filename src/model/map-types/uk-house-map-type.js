var UKHouseMapType = new MapType(
  "UK-House",
  "House",
  "H",
  "assets/usa-house.png",
  "svg-sources/uk-constituencies-2024.svg",
  650,
  function()
  {
    return 1
  },
  false, //ShowEVs
  2,
  true,
  true,
  false,
  true,
  UKConstituencyIDToName //Constituency IDs -> Names, derived from UKConstituencyNames (see uk-constituencies-data.js)
  ,
  [/.+-S/],
  [
    {id: "coalitions", title: "🤝 Coalitions", type: MapSettingType.optionCycle, options:
      [
        {id: "show", title: "Shown", value: true},
        {id: "hide", title: "Hidden", value: false}
      ],
      shouldShowActive: (value) => {
        return value
      },
    defaultValue: "hide", reloadType: MapSettingReloadType.data},
	  {id: "offYear", title: "🔄 Off Cycle Elections", type: MapSettingType.optionCycle, options:
	    [
		    {id: "show", title: "Shown", value: true},
		    {id: "hide", title: "Hidden", value: false}
	    ],
	    shouldShowActive: (value) => {
		    return value
	    },
	  defaultValue: "hide", reloadType: MapSettingReloadType.data},
    {id: "mapCurrentSeats", title: "🗺️ Map Held Seats", type: MapSettingType.optionCycle, options:
      [
        {id: "show", title: "Shown", value: true},
        {id: "hide", title: "Hidden", value: false}
      ],
      shouldShowActive: (value) => {
        return value
      },
    defaultValue: "hide", reloadType: MapSettingReloadType.display}
  ],
  () => {
	  const regionNameToID = { //Constituency Names -> IDs, derived from UKConstituencyNames (see uk-constituencies-data.js)
  ...UKConstituencyNameToID,
  "National Popular Vote": nationalPopularVoteID
}
  
	  let doubleLineVoteshareFilterFunction = function(rawMapData, mapDates, columnMap, _, candidateNameToPartyIDMap, regionNameToID, heldRegionMap, ____, isCustomMap, voteshareCutoffMargin)
	  {
	    let filteredMapData = {}
	    let partyNameData = {}
  
	    let regionNames = Object.keys(regionNameToID)
      
      const getConstituencies = () => [...UKConstituencyIDs] //Derived from UKConstituencyNames (see uk-constituencies-data.js)
      const regions = [...getConstituencies()]
      const regionDateRanges = [
        {
          start: new Date(1970, 1-1, 1-1).getTime(),
          regions: [
            ...getUKConstituencyLookupsForYear(1970).ids
          ]
        },
        {
          start: new Date(1980, 1-1, 1-1).getTime(),
          regions: [
            ...getUKConstituencyLookupsForYear(1980).ids
          ]
        },
        {
          start: new Date(2000, 1-1, 1-1).getTime(),
          regions: [
            ...getUKConstituencyLookupsForYear(2000).ids
          ]
        }
      ]
      const coalitionRegionID = "Coalition"
      
      const processMapDataRows = (mapDataRows, currentMapDate, regionID, currentDatePartyNameArray, coalitionPartyMap) => {
        let isSpecialElection = mapDataRows[0][columnMap.isSpecial] == "TRUE"
        let isRunoffElection = mapDataRows[0][columnMap.isRunoff] == "TRUE"
        let isOffyear = mapDataRows[0][columnMap.isOffyear] == "TRUE"
        
        let candidateData = {}
        
        for (let rowNum in mapDataRows)
        {
          let row = mapDataRows[rowNum]
        
          let candidateName = row[columnMap.candidateName]
          let candidateVotes = row[columnMap.candidateVotes] ? Math.round(parseFloat(row[columnMap.candidateVotes])) : null
          let currentVoteshare = parseFloat(row[columnMap.voteshare])
        
          let currentPartyName = row[columnMap.partyID]
          let currentCoalition = coalitionPartyMap[candidateName] ?? coalitionPartyMap[currentPartyName]
          if (currentMapType.getMapSettingValue("coalitions") && currentCoalition)
          {
            currentPartyName = currentCoalition
            if (regionID == nationalPopularVoteID) candidateName = currentPartyName
          }
          
          let foundParty = Object.values(politicalParties).find(party => {
            let partyNames = cloneObject(party.getNames()).map(partyName => partyName.toLowerCase())
            return partyNames.includes(currentPartyName ? currentPartyName.toLowerCase() : "")
          })
        
          if (!foundParty && Object.keys(politicalParties).includes(currentPartyName))
          {
            foundParty = politicalParties[currentPartyName]
          }
        
          var currentPartyID
          if (foundParty)
          {
            currentPartyID = foundParty.getID()
          }
          else
          {
            currentPartyID = IndependentGenericParty.getID()
          }
        
          if (Object.keys(candidateData).includes(candidateName))
          {
            if (currentVoteshare > candidateData[candidateName].voteshare)
            {
              candidateData[candidateName].partyID = currentPartyID
            }
        
            candidateData[candidateName].voteshare += currentVoteshare
            if (candidateData[candidateName].votes && candidateVotes)
            {
              candidateData[candidateName].votes += candidateVotes
            }
          }
          else
          {
            candidateData[candidateName] = {candidate: candidateName, partyID: currentPartyID, voteshare: currentVoteshare, votes: candidateVotes}
          }
        }
        
        let voteshareSortedCandidateData = Object.values(candidateData)
        voteshareSortedCandidateData = voteshareSortedCandidateData.filter((candData) => !isNaN(candData.voteshare))
        voteshareSortedCandidateData.sort((cand1, cand2) => cand2.voteshare - cand1.voteshare)
        if (!isCustomMap && voteshareCutoffMargin != null)
        {
          voteshareSortedCandidateData = voteshareSortedCandidateData.filter(candData => candData.voteshare >= voteshareCutoffMargin)
        }
        
        let greatestMarginPartyID
        let greatestMarginCandidateName
        let topTwoMargin
        
        if (voteshareSortedCandidateData.length > 0 && voteshareSortedCandidateData[0].voteshare != 0)
        {
          let topCandidateData = voteshareSortedCandidateData.filter(candidateData => candidateData.order == 0 || candidateData.order == 1).sort((cand1, cand2) => cand2.voteshare - cand1.voteshare)
          if (topCandidateData.length == 0)
          {
            topCandidateData = [voteshareSortedCandidateData[0]]
            if (voteshareSortedCandidateData[1])
            {
              topCandidateData.push(voteshareSortedCandidateData[1])
            }
          }
        
          greatestMarginPartyID = topCandidateData[0].partyID
          greatestMarginCandidateName = topCandidateData[0].candidate
          topTwoMargin = topCandidateData[0].voteshare - (topCandidateData[1] ? topCandidateData[1].voteshare : 0)
        }
        else
        {
          greatestMarginPartyID = TossupParty.getID()
          greatestMarginCandidateName = null
          topTwoMargin = 0
        }
        
        for (let candidateDataNum in voteshareSortedCandidateData)
        {
          let mainPartyID = voteshareSortedCandidateData[candidateDataNum].partyID
          if (mainPartyID.startsWith(customPartyIDPrefix))
          {
            currentDatePartyNameArray[mainPartyID] = politicalParties[mainPartyID].getCandidateName()
          }
          else
          {
            currentDatePartyNameArray[mainPartyID] = politicalParties[mainPartyID].getNames()[0]
          }
        }
        
        let partyIDToCandidateNames = {}
        for (let partyCandidateName in candidateData)
        {
          partyIDToCandidateNames[candidateData[partyCandidateName].partyID] = partyCandidateName
        }
        
        const mostRecentPartyID = heldRegionMap ? heldRegionMap[regionID] : mostRecentWinner(filteredMapData, currentMapDate.getTime(), regionID).partyID
        return {region: regionID, offYear: isOffyear, runoff: isRunoffElection, isSpecial: isSpecialElection, disabled: mapDataRows[0][columnMap.isDisabled] == "TRUE", margin: topTwoMargin, partyID: greatestMarginPartyID, candidateName: greatestMarginCandidateName, candidateMap: partyIDToCandidateNames, partyVotesharePercentages: voteshareSortedCandidateData, flipOverride: mapDataRows[0][columnMap.flip] == "TRUE", previousPartyID: mostRecentPartyID}
      }
  
	    for (let mapDateTime of mapDates)
	    {
		    let rawDateData = rawMapData[mapDateTime]
		    let filteredDateData = {}
    
		    let currentMapDate = new Date(mapDateTime)
		    let currentDatePartyNameArray = {}
        
        let coalitionDataRows = rawDateData.filter(row => {
          return row[columnMap.region] == coalitionRegionID
        })
        let coalitionPartyMap = {}
        for (let coalitionPartyMapping of coalitionDataRows)
        {
          coalitionPartyMap[coalitionPartyMapping[columnMap.candidateName]] = coalitionPartyMapping[columnMap.partyID]
        }
        
        const regionsForDate = [...regionDateRanges].reverse().find(r => r.start <= mapDateTime).regions
    
		    for (let regionName of regionNames)
		    {
          let regionID = regionNameToID[regionName]
		      
			    let mapDataRows = rawDateData.filter(row => {
			      return row[columnMap.region] == regionName
			    })
    
			    if (mapDataRows.length == 0)
			    {
			      if (isCustomMap && regionsForDate.includes(regionID))
			      {
			        let partyIDToCandidateNames = {}
			        for (let partyCandidateName in candidateNameToPartyIDMap)
			        {
			          partyIDToCandidateNames[candidateNameToPartyIDMap[partyCandidateName]] = partyCandidateName
			        }
        
			        filteredDateData[regionID] = {region: regionID, offYear: false, runoff: false, isSpecial: false, margin: 0, partyID: TossupParty.getID(), candidateMap: partyIDToCandidateNames}
			      }
			      continue
			    }
          
          if (mapDataRows.find(row => row[columnMap.isRunoff] == "TRUE") && mapDataRows.find(row => row[columnMap.isRunoff] != "TRUE"))
          {
            let originalMapData = processMapDataRows(mapDataRows.filter(row => row[columnMap.isRunoff] != "TRUE"), currentMapDate, regionID, currentDatePartyNameArray, coalitionPartyMap)
            originalMapData.altText = "first round"
            
            let runoffMapData = processMapDataRows(mapDataRows.filter(row => row[columnMap.isRunoff] == "TRUE"), currentMapDate, regionID, currentDatePartyNameArray, coalitionPartyMap)
            runoffMapData.altData = originalMapData
            
            filteredDateData[regionID] = runoffMapData
          }
          else
          {
            filteredDateData[regionID] = processMapDataRows(mapDataRows, currentMapDate, regionID, currentDatePartyNameArray, coalitionPartyMap)
          }
	      }
    
		    filteredMapData[mapDateTime] = filteredDateData
		    partyNameData[mapDateTime] = currentDatePartyNameArray
	    }
  
	    let fullFilteredMapData = cloneObject(filteredMapData)
      let previousMapDate = null
	    for (let mapDate in fullFilteredMapData)
	    {
		    let filteredDateData = fullFilteredMapData[mapDate]
    
		    if (Object.values(filteredDateData).length == 0) { continue }
        
        let previousDateRegionIDs = Object.keys(fullFilteredMapData[previousMapDate] ?? {})
		    let currentRegionIDs = Object.keys(filteredDateData)
    
		    let isOffyear = Object.values(filteredDateData)[0].offYear
		    let isRunoff = Object.values(filteredDateData)[0].isRunoff
        
        const regionsForDate = [...regionDateRanges].reverse().find(r => r.start <= mapDate).regions
    
		    for (let regionID of previousDateRegionIDs)
		    {
		      if (regionID == nationalPopularVoteID) { continue }
          if (!regionsForDate.includes(regionID)) { continue }
    
		      if (!currentRegionIDs.includes(regionID))
		      {
			      filteredDateData[regionID] = {region: regionID, ...mostRecentWinner(filteredMapData, mapDate, regionID), isHold: true, disabled: true, offYear: isOffyear, runoff: isRunoff}
		      }
		    }
    
		    fullFilteredMapData[mapDate] = filteredDateData
        
        previousMapDate = mapDate
	    }
      
      const listSeatRegex = /L\d+/
      const partyListSeatCounts = {}
      const getPartyListSeatCount = (date, party) => partyListSeatCounts[date][party] ?? 0
      previousMapDate = null
      for (const mapDate in fullFilteredMapData)
      {
        partyListSeatCounts[mapDate] = {}
        Object.keys(fullFilteredMapData[mapDate]).forEach(regionID => {
          if (!listSeatRegex.test(regionID)) { return }
          
          const regionData = fullFilteredMapData[mapDate][regionID]
          if (!partyListSeatCounts[mapDate][regionData.partyID])
          {
            partyListSeatCounts[mapDate][regionData.partyID] = 0
          }
          partyListSeatCounts[mapDate][regionData.partyID] += 1
        })
        
        if (previousMapDate && partyListSeatCounts[previousMapDate])
        {
          let partyIDOn = null
          let partyListSeatOn = 1
          for (const regionID in fullFilteredMapData[mapDate])
          {
            if (!listSeatRegex.test(regionID)) { continue }
            
            const regionData = fullFilteredMapData[mapDate][regionID]
            
            if (partyIDOn != regionData.partyID)
            {
              partyIDOn = regionData.partyID
              partyListSeatOn = 1
            }
            const currentDateSeats = getPartyListSeatCount(mapDate, regionData.partyID)
            const previousDateSeats = getPartyListSeatCount(previousMapDate, regionData.partyID)
            const seatDifference = currentDateSeats-(previousDateSeats + politicalParties[regionData.partyID].getAncestors().reduce((sum, p) => sum + getPartyListSeatCount(previousMapDate, p.getID()), 0));
            regionData.flip = partyListSeatOn > currentDateSeats-seatDifference
            
            partyListSeatOn += 1
          }
        }
        
        previousMapDate = mapDate
      }
      
      let offYearEnabled = currentMapType.getMapSettingValue("offYear")
	    let filteredMapDates = []
      for (let mapDate in fullFilteredMapData)
      {
        if (Object.values(fullFilteredMapData[mapDate]).length == 0) { continue }
      
        let offYear = Object.values(fullFilteredMapData[mapDate])[0].offYear
        if (offYear && !offYearEnabled) { continue }
        
        filteredMapDates.push(parseInt(mapDate))
      }
      
      mapDates = filteredMapDates
  
	    return {mapData: fullFilteredMapData, candidateNameData: partyNameData, mapDates: mapDates}
	  }
  
	  function mostRecentWinner(mapData, dateToStart, regionID)
	  {
	    let reversedMapDates = cloneObject(Object.keys(mapData)).reverse()
  
	    for (let dateNum in reversedMapDates)
	    {
		    if (reversedMapDates[dateNum] >= parseInt(dateToStart)) { continue }
    
		    let mapDataFromDate = mapData[reversedMapDates[dateNum]]
		    if (regionID in mapDataFromDate)
		    {
          return {margin: mapDataFromDate[regionID].margin, partyID: mapDataFromDate[regionID].partyID, candidateName: mapDataFromDate[regionID].candidateName, candidateMap: mapDataFromDate[regionID].candidateMap, partyVotesharePercentages: mapDataFromDate[regionID].partyVotesharePercentages, electionDate: parseInt(reversedMapDates[dateNum])}
		    }
	    }
  
	    return {margin: 0, partyID: TossupParty.getID()}
	  }
  
	  function customMapConvertMapDataToCSVFunction(columnKey, mapDateString, regionID, regionNameToID, candidateName, partyID, regionData, shouldUseVoteshare)
	  {
	    let voteshareData
	    switch (columnKey)
	    {
		    case "date":
		    return mapDateString
    
		    case "candidateName":
		    return candidateName
    
		    case "voteshare":
		    voteshareData = shouldUseVoteshare && regionData.partyVotesharePercentages ? regionData.partyVotesharePercentages.find(partyVoteshare => candidateName == partyVoteshare.candidate) : null
		    if (voteshareData)
		    {
		      return voteshareData.voteshare
		    }
		    else if (regionData.partyID == partyID)
		    {
		      return regionData.margin
		    }
		    return 0
    
		    case "region":
		    return getKeyByValue(regionNameToID, regionID)
    
		    case "partyID":
		    return partyID
    
		    case "isRunoff":
		    return (regionData.runoff ?? false).toString().toUpperCase()
    
		    case "isOffyear":
		    return (regionData.offYear ?? false).toString().toUpperCase()
    
		    case "isDisabled":
		    return (regionData.disabled ?? false).toString().toUpperCase()
		    
		    case "flip":
		    return (regionData.flip ?? false).toString().toUpperCase()
	    }
	  }
    
    function getSenateSVGByDate(dateTime)
    { //Date by end
      let mapDate = new Date(dateTime)
      
      if (mapDate < new Date(2001, 12-1, 31-1))
      {
        return "svg-sources/uk-constituencies-2024.svg"
      }
      else if (mapDate < new Date(2002, 12-1, 31-1))
      {
      return "svg-sources/uk-constituencies-2024.svg"
      }
      else
      {
      return "svg-sources/uk-constituencies-2024.svg"
      }
    }
    
    // Keeping this here just to be safe
    function getDistrictSVGByDate(dateTime)
    {
      let mapDate = new Date(dateTime)
      
      if (mapDate < new Date(2025, 1-1, 1-1))
      {
        return "svg-sources/uk-constituencies-2024.svg"
      }
      else
      {
      return "svg-sources/uk-constituencies-2024.svg"
      }
    }
    
    function getFormattedRegionName(regionName, regionData)
    {
      if (!regionData) return regionName
      
      if (regionData.isHold && regionData.electionDate)
      {
        const electionDate = new Date(regionData.electionDate)
        regionName += ` (${getMonthPrefix(electionDate.getMonth())} ${electionDate.getFullYear()})`
      }
      
      return regionName
    }
    
    var electionDateToSpreadsheetData = {
      // empty :)
    }
  
	  var PastElectionResultMapSource = new MapSource(
	    "UK-Past-House-Elections", // id
	    "Past Elections", // name
	    "./csv-sources/uk-past-house.csv", // dataURL
	    "https://docs.google.com/spreadsheets/d", // homepageURL
	    {regular: "./assets/uk-flag.png", mini: "./assets/wikipedia-large.png", getOverlayText: () => {
		  let currentYear = currentSliderDate.getFullYear()
		  return currentYear
	    }}, // iconURL
	    {
		    date: "date",
		    region: "region",
		    isSpecial: "special",
		    isRunoff: "runoff",
		    isOffyear: "offyear",
		    candidateName: "candidate",
		    partyID: "party",
		    voteshare: "voteshare",
		    candidateVotes: "candidatevotes",
		    totalVotes: "totalvotes",
        isDisabled: "disabled"
	    }, // columnMap
	    null, // cycleYear
	    null, // candidateNameToPartyIDMap
	    null, // shortCandidateNameOverride
	    regionNameToID, // regionNameToIDMap
	    null, // regionIDToLinkMap
	    null, // heldRegionMap
	    false, // shouldFilterOutDuplicateRows
	    true, // addDecimalPadding
	    doubleLineVoteshareFilterFunction, // organizeMapDataFunction
	    null, // viewingDataFunction
	    null, // zoomingDataFunction
	    null, // splitVoteDataFunction
	    null, // splitVoteDisplayOptions
	    getFormattedRegionName, // getFormattedRegionName
	    function(homepageURL, regionID, _, mapDate, __, mapData)
      {
        const regionData = mapData[mapDate.getTime()][regionID]
        if (regionData && regionData.isHold && regionData.electionDate)
        {
          mapDate = new Date(regionData.electionDate)
        }
        
        let spreadsheetLinkData = electionDateToSpreadsheetData[mapDate.getTime()]
        if (!spreadsheetLinkData) return null
        
        let linkToOpen = `${homepageURL}/${spreadsheetLinkData.id}/edit?gid=${spreadsheetLinkData.regions[regionID] ?? 0}`
      
        return linkToOpen
      }, // customOpenRegionLinkFunction
	    null, // updateCustomMapFunction
	    null, // convertMapDataRowToCSVFunction
	    null, // isCustomMap
	    null, // shouldClearDisabled
	    true, // shouldShowVoteshare
	    0, // voteshareCutoffMargin
      getSenateSVGByDate, // overrideSVGPath
      false, // shouldSetDisabledWorthToZero
      null, // shouldUseOriginalMapDataForTotalsPieChart
      null, // shouldForcePopularVoteDisplay
      {safe: 15, likely: 5, lean: 1, tilt: Number.MIN_VALUE} // customDefaultMargins
	  )
    
    /*
    var PastListElectionResultMapSource = new MapSource(
      "YAP-Past-List-Senate-Elections", // id
      "Past List Elections", // name
      "./csv-sources/yap-past-list.csv", // dataURL
      "https://docs.google.com/spreadsheets/d", // homepageURL
      {regular: "./assets/yapmeria-flag.png", mini: "./assets/wikipedia-large.png", getOverlayText: () => {
        let currentYear = currentSliderDate.getFullYear()
        return currentYear
      }}, // iconURL
      {
        date: "date",
        region: "region",
        isSpecial: "special",
        isRunoff: "runoff",
        isOffyear: "offyear",
        candidateName: "candidate",
        partyID: "party",
        voteshare: "voteshare",
        candidateVotes: "candidatevotes",
        totalVotes: "totalvotes"
      }, // columnMap
      null, // cycleYear
      null, // candidateNameToPartyIDMap
      null, // shortCandidateNameOverride
      regionNameToID, // regionNameToIDMap
      null, // regionIDToLinkMap
      null, // heldRegionMap
      false, // shouldFilterOutDuplicateRows
      true, // addDecimalPadding
      doubleLineVoteshareFilterFunction, // organizeMapDataFunction
      null, // viewingDataFunction
      null, // zoomingDataFunction
      null, // splitVoteDataFunction
      null, // splitVoteDisplayOptions
      getFormattedRegionName, // getFormattedRegionName
      function(homepageURL, regionID, _, mapDate, __, mapData)
      {
        console.log(mapData, mapDate)
        
        const regionData = mapData[mapDate.getTime()][regionID]
        if (regionData && regionData.isHold && regionData.electionDate)
        {
          mapDate = new Date(regionData.electionDate)
        }
        
        let spreadsheetLinkData = electionDateToSpreadsheetData[mapDate.getTime()]
        if (!spreadsheetLinkData) return null
        
        let linkToOpen = `${homepageURL}/${spreadsheetLinkData.id}/edit?gid=${spreadsheetLinkData.regions[regionID] ?? 0}`
      
        return linkToOpen
      }, // customOpenRegionLinkFunction
      null, // updateCustomMapFunction
      null, // convertMapDataRowToCSVFunction
      null, // isCustomMap
      null, // shouldClearDisabled
      true, // shouldShowVoteshare
      0.0, // voteshareCutoffMargin
      getSenateSVGByDate, // overrideSVGPath
      true, // shouldSetDisabledWorthToZero
      null, // shouldUseOriginalMapDataForTotalsPieChart
      null, // shouldForcePopularVoteDisplay
      {safe: 15, likely: 5, lean: 1, tilt: Number.MIN_VALUE}// customDefaultMargins
    )*/
  
	  var idsToPartyNames = {}
	  var partyNamesToIDs = {}
	  for (var partyNum in mainPoliticalPartyIDs)
	  {
	    if (mainPoliticalPartyIDs[partyNum] == TossupParty.getID()) { continue }
  
	    partyNamesToIDs[politicalParties[mainPoliticalPartyIDs[partyNum]].getNames()[0]] = mainPoliticalPartyIDs[partyNum]
	    idsToPartyNames[mainPoliticalPartyIDs[partyNum]] = politicalParties[mainPoliticalPartyIDs[partyNum]].getNames()[0]
	  }

	  var CustomMapSource = new MapSource(
	    "UK-Custom-House", // id
	    "Custom", // name
	    null, // dataURL
	    null, // homepageURL
	    null, // iconURL
	    {
		    date: "date",
		    region: "region",
		    // isSpecial: "special",
		    isRunoff: "runoff",
		    isOffyear: "offyear",
		    isDisabled: "disabled",
		    candidateName: "candidate",
		    partyID: "party",
		    voteshare: "voteshare",
		    order: "order",
		    flip: "flip"
	    }, // columnMap
	    null, // cycleYear
	    partyNamesToIDs, // candidateNameToPartyIDMap
	    idsToPartyNames, // shortCandidateNameOverride
	    regionNameToID, // regionNameToIDMap
	    null, // regionIDToLinkMap
	    null, // heldRegionMap
	    false, // shouldFilterOutDuplicateRows
	    true, // addDecimalPadding
	    doubleLineVoteshareFilterFunction, // organizeMapDataFunction
	    null, // viewingDataFunction
	    null, // zoomingDataFunction
	    null, // splitVoteDataFunction
	    null, // splitVoteDisplayOptions
	    getFormattedRegionName, // getFormattedRegionName
	    null, // customOpenRegionLinkFunction
	    null, // updateCustomMapFunction
	    customMapConvertMapDataToCSVFunction, // convertMapDataRowToCSVFunction
	    true, // isCustomMap
	    null, // shouldClearDisabled
	    null, // shouldShowVoteshare
      null, // voteshareCutoffMargin
      getSenateSVGByDate, // overrideSVGPath
      false, // shouldSetDisabledWorthToZero
      null, // shouldUseOriginalMapDataForTotalsPieChart
      null, // shouldForcePopularVoteDisplay
      {safe: 15, likely: 5, lean: 1, tilt: Number.MIN_VALUE}, // customDefaultMargins
	  )
  
	  var todayDate = new Date()
	  CustomMapSource.setTextMapData("date\n" + (todayDate.getMonth()+1) + "/" + todayDate.getDate() + "/" + todayDate.getFullYear())
  
	  var houseMapSources = {}
	  houseMapSources[PastElectionResultMapSource.getID()] = PastElectionResultMapSource
	  houseMapSources[CustomMapSource.getID()] = CustomMapSource
  
	  const houseMapSourceIDs = {
	    [allYearsCycle]: [PastElectionResultMapSource.getID(), CustomMapSource.getID()]
	  }
	  
	  const kPastElectionsVsPastElections = 1
  
	  var defaultHouseCompareSourceIDs = {}
	  defaultHouseCompareSourceIDs[kPastElectionsVsPastElections] = [PastElectionResultMapSource.getID(), PastElectionResultMapSource.getID()]
  
	  return {mapSources: houseMapSources, mapSourceIDs: houseMapSourceIDs, mapCycles: [], defaultCompareSourceIDs: defaultHouseCompareSourceIDs, customSourceID: CustomMapSource.getID()}
  }
)
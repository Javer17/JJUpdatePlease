var YAPPresidentMapType = new MapType(
  "YAP-President",
  "President",
  "P",
  "assets/usa-pres.png",
  "svg-sources/yap-presidential.svg",
  17,
  function(year, regionID, regionData, isUpdatingMapText)
  {
    if (currentMapSource.isCustom() && regionID in overrideRegionEVs) return overrideRegionEVs[regionID]
    if (currentMapSource.getShouldSetDisabledWorthToZero() && regionData && regionData.disabled) return 0
    const availableYears = Object.keys(regionEVArrayYAP).map(Number).sort((a, b) => a - b)
    const fallbackYear = availableYears[availableYears.length - 1]
    const yearEVMap = regionEVArrayYAP[year] || regionEVArrayYAP[fallbackYear]
    return (yearEVMap || {})[regionID] || 1
  },
  true,
  2,
  true,
  true,
  false,
  true,
  {"CM": "Cambria", 
    "CA": "Calleoria", 
    "KO": "Kostos", 
    "CE": "Cerbska", 
    "AC": "Acalliana",
    "AR": "Armallos", 
    "ST": "Stettigan",
    "BL": "Blesna", 
    "LA": "Larimer", 
    "ES": "Estellia", 
    "TL": "Taclima", 
    "MA": "Matatheste", 
    "OP": "Opplica", 
    "RO": "Rorcia",
    "NQ": "New Queria",
    "PR": "Porcerle",
    "DF": "Yapburgh D.F.",
    "ADD1": "Appropriation 1",
    "ADD2": "Appropriation 2",
    "ADD3": "Appropriation 3",
    "ADD4": "Appropriation 4",
  }
    ,[/.+-S/],
  [],
  () => {
      const regionNameToID = {
  "Cambria": "CM",
  "Calleoria": "CA",
  "Kostos": "KO",
  "Cerbska": "CE",
  "Armallos": "AR",
  "Stettigan": "ST",
  "Acalliana": "AC",
  "Blesna": "BL",
  "Larimer": "LA",
  "Estellia": "ES",
  "Taclima": "TL",
  "Matatheste": "MA",
  "Opplica": "OP",
  "Rorcia": "RO",
  "New Queria": "NQ",
  "Porcerle": "PR",
  "Yapburgh": "DF",
  "Appropriation 1": "ADD1",
  "Appropriation 2": "ADD2",
  "Appropriation 3": "ADD3",
  "Appropriation 4": "ADD4",
  "National Popular Vote": nationalPopularVoteID
}

    let doubleLineVoteshareFilterFunction = function(rawMapData, mapDates, columnMap, _, __, regionNameToID, heldRegionMap, ____, isCustomMap, voteshareCutoffMargin)
    {
  	    let filteredMapData = {}
	    let partyNameData = {}
  
	    let regionNames = Object.keys(regionNameToID)
      
      const getStates = () => ["CM", "CA", "KO", "CE", "AR", "ST", "AC", "BL", "LA", "ES", "TL", "MA", "OP", "RO", "NQ", "PR", "DF"]
      
      // probably should just load past election results for this
      const regionDateRanges = [
        {
          start: new Date(1000, 1-1, 1-1).getTime(),
          regions: [
            ...getStates(),
          ]
        },
        {
          start: new Date(2025, 1-1, 26-1).getTime(),
          regions: [
            ...getStates(),
          ]
        }
      ]
      
      const processMapDataRows = (mapDataRows, currentMapDate, regionID, currentDatePartyNameArray) => {
        let isSpecialElection = mapDataRows[0][columnMap.isSpecial] == "TRUE"
        let isOffyear = mapDataRows[0][columnMap.isOffyear] == "TRUE"
        let roundNumber = parseInt(mapDataRows[0][columnMap.round])
        
        let candidateData = {}
        
        for (let rowNum in mapDataRows)
        {
          let row = mapDataRows[rowNum]
        
          let candidateName = row[columnMap.candidateName]
          let candidateVotes = row[columnMap.candidateVotes] ? Math.round(parseFloat(row[columnMap.candidateVotes])) : null
          let currentVoteshare = parseFloat(row[columnMap.voteshare])
        
          let currentPartyName = row[columnMap.partyID]
          
          let foundParty = Object.values(politicalParties).find(party => {
            let partyNames = cloneObject(party.getNames()).map(partyName => partyName.toLowerCase())
            return partyNames.includes(currentPartyName)
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
        
        if (voteshareSortedCandidateData.length == 0)
        {
          console.log("No candidate data!", currentMapDate.getFullYear().toString(), regionID)
          return
        }
        
        let greatestMarginPartyID
        let topTwoMargin
        
        if (voteshareSortedCandidateData[0].voteshare != 0)
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
          topTwoMargin = topCandidateData[0].voteshare - (topCandidateData[1] ? topCandidateData[1].voteshare : 0)
        }
        else
        {
          greatestMarginPartyID = TossupParty.getID()
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
            currentDatePartyNameArray[mainPartyID] = voteshareSortedCandidateData[candidateDataNum].candidate
          }
          
          if (voteshareSortedCandidateData[candidateDataNum].partyID != IndependentGenericParty.getID())
          {
            delete voteshareSortedCandidateData[candidateDataNum].candidate
          }
        }
        
        const mostRecentPartyID = heldRegionMap ? heldRegionMap[regionID] : mostRecentWinner(filteredMapData, currentMapDate.getTime(), roundNumber, regionID).partyID
        return {region: regionID, offYear: isOffyear, round: roundNumber, isSpecial: isSpecialElection, disabled: mapDataRows[0][columnMap.isDisabled] == "TRUE", margin: topTwoMargin, partyID: greatestMarginPartyID, partyVotesharePercentages: voteshareSortedCandidateData, flipOverride: mapDataRows[0][columnMap.flip] == "TRUE", previousPartyID: mostRecentPartyID}
      }
  
      for (let mapDateTime of cloneObject(mapDates))
      {
        let rawDateData = rawMapData[mapDateTime]
        let filteredDateData = filteredMapData[mapDateTime] ?? {}
    
        let currentMapDate = new Date(mapDateTime)
        let currentDatePartyNameArray = {}
    
        for (let regionName of regionNames)
        {
          let regionID = regionNameToID[regionName]
          
          let mapDataRows = rawDateData.filter(row => {
            return row[columnMap.region] == regionName
          })
    
          if (mapDataRows.length == 0)
          {
            if (isCustomMap)
            {
              filteredDateData[regionID] = {region: regionID, offYear: false, runoff: false, isSpecial: false, margin: 0, partyID: TossupParty.getID()}
            }
            continue
          }
          
          if (mapDataRows[0][columnMap.round])
          {
            const roundDataRows = mapDataRows.reduce((rounds, row) => {
              const round = row[columnMap.round]
              if (!rounds[round]) rounds[round] = []
              rounds[round].push(row)
              return rounds
            }, {})
            
            for (const round in roundDataRows)
            {
              filteredDateData[`${regionID}-${round}`] = processMapDataRows(roundDataRows[round], currentMapDate, regionID, currentDatePartyNameArray)
            }
          }
          else
          {
            filteredDateData[regionID] = processMapDataRows(mapDataRows, currentMapDate, regionID, currentDatePartyNameArray)
          }
        }
    
        filteredMapData[mapDateTime] = filteredDateData
        partyNameData[mapDateTime] = currentDatePartyNameArray
      }
  
      return {mapData: filteredMapData, candidateNameData: partyNameData, mapDates: mapDates}
    }
  
    function mostRecentWinner(mapData, dateToStart, roundToStart, regionID)
    {
      let reversedMapDates = cloneObject(Object.keys(mapData)).map(s => parseInt(s)).sort().reverse()
  
      for (let dateNum in reversedMapDates)
      {
        if (reversedMapDates[dateNum] >= parseInt(dateToStart)) { continue }
        
        let mapDataFromDate = mapData[reversedMapDates[dateNum]]
        let regionIDToUse = regionID
        
        let roundsForDate = []
        for (let regionID in mapDataFromDate)
        {
          const round = mapDataFromDate[regionID].round
          if (round && !roundsForDate.includes(round))
          {
            roundsForDate.push(round)
          }
        }
        roundsForDate.sort()
        
        if (roundsForDate.length >= 0)
        {
          let roundToUse = roundToStart
          // if roundToUse is in roundsForDate, continue
          if (!roundsForDate.includes(roundToUse))
          {
            // if roundsForDate has a later round than roundToUse, set that
            let foundValidRound = false
            for (let round of roundsForDate)
            {
              if (roundToUse > round) continue
              
              roundToUse = round
              foundValidRound = true
            }
            
            // otherwise, set to last round in roundsForDate
            if (!foundValidRound)
            {
              roundToUse = roundsForDate[roundsForDate.length-1]
            }
          }
          
          regionIDToUse = `${regionID}-${roundToUse}`
        }
        
        if (regionIDToUse in mapDataFromDate)
        {
          return {margin: mapDataFromDate[regionIDToUse].margin, partyID: mapDataFromDate[regionIDToUse].partyID, partyVotesharePercentages: mapDataFromDate[regionIDToUse].partyVotesharePercentages}
        }
      }
  
      return {margin: 0, partyID: TossupParty.getID()}
    }
  
    function customMapConvertMapDataToCSVFunction(columnKey, mapDateString, regionID, regionNameToID, candidateName, partyID, regionData, shouldUseVoteshare, isDisabled)
    {
      let voteshareData
      switch (columnKey)
      {
        case "date":
        return mapDateString
    
        case "candidateName":
        return candidateName
    
        case "voteshare":
        voteshareData = shouldUseVoteshare && regionData.partyVotesharePercentages ? regionData.partyVotesharePercentages.find(partyVoteshare => partyID == partyVoteshare.partyID) : null
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
        return getKeyByValue(regionNameToID, regionID.split('-')[0])
    
        case "partyID":
        return partyID
    
        case "isRunoff":
        return (regionData.runoff ?? false).toString().toUpperCase()
        
        case "flip":
        return (regionData.flip ?? false).toString().toUpperCase()

        case "isDisabled":
		    return (regionData.disabled ?? false).toString().toUpperCase()
      }
    }

        function getHouseSVGByDate(dateTime){
      let mapDate = new Date(dateTime)

      if (mapDate < new Date(2025, 10-1, 11-1))
      {
        return "svg-sources/yap-presidential.svg"
      }
      else
      {
        return "svg-sources/yap-presidential.svg"
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
      "YAP-Past-Presidential-Elections", // id
      "Past Elections", // name
      "./csv-sources/yap-past-president.csv", // dataURL
      "https://docs.google.com/spreadsheets/d", // homepageURL
      {regular: "./assets/yapmeria-flag.png", mini: "./assets/wikipedia-large.png", getOverlayText: () => {
      let currentYear = currentSliderDate.getFullYear()
      return currentYear
      }}, // iconURL
      {
        date: "date",
        round: "round",
        region: "region",
        isRunoff: "runoff",
        candidateName: "candidate",
        partyID: "party",
        voteshare: "voteshare",
        candidateVotes: "candidatevotes",
        totalVotes: "totalvotes",
        electoralVotes: "ev",
        isDisabled: "disabled",
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
      function(homepageURL, regionID, _, mapDate)
      {
        let spreadsheetLinkData = electionDateToSpreadsheetData[mapDate.getTime()]
        if (!spreadsheetLinkData) return null
        
        let linkToOpen = `${homepageURL}/${spreadsheetLinkData.id}/edit?gid=${spreadsheetLinkData.regions?.[regionID] ?? spreadsheetLinkData.gid ?? 0}`
      
        return linkToOpen
      }, // customOpenRegionLinkFunction
	    null, // updateCustomMapFunction
	    null, // convertMapDataRowToCSVFunction
	    null, // isCustomMap
	    false, // shouldClearDisabled
	    true, // shouldShowVoteshare
	    0, // voteshareCutoffMargin
      getHouseSVGByDate, // overrideSVGPath
      true, // shouldSetDisabledWorthToZero
      null, // shouldUseOriginalMapDataForTotalsPieChart
      null, // shouldForcePopularVoteDisplay
      {safe: 15, likely: 5, lean: 1, tilt: Number.MIN_VALUE} // customDefaultMargins
    )
  
    var idsToPartyNames = {}
    var partyNamesToIDs = {}
    for (var partyNum in mainPoliticalPartyIDs)
    {
      if (mainPoliticalPartyIDs[partyNum] == TossupParty.getID()) { continue }
  
      partyNamesToIDs[politicalParties[mainPoliticalPartyIDs[partyNum]].getNames()[0]] = mainPoliticalPartyIDs[partyNum]
      idsToPartyNames[mainPoliticalPartyIDs[partyNum]] = politicalParties[mainPoliticalPartyIDs[partyNum]].getNames()[0]
    }
  
    var CustomMapSource = new MapSource(
      "YAP-Custom-President", // id
      "Custom", // name
      null, // dataURL
      null, // homepageURL
      null, // iconURL
      {
        date: "date",
        region: "region",
        isRunoff: "runoff",
        candidateName: "candidate",
        partyID: "party",
        voteshare: "voteshare",
        order: "order",
        flip: "flip",
        electoralVotes: "ev"
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
      false, // shouldClearDisabled
      null, // shouldShowVoteshare
      null, // voteshareCutoffMargin
      getHouseSVGByDate, // overrideSVGPath,
      true, // shouldSetDisabledWorthToZero
      null, // shouldUseOriginalMapDataForTotalsPieChart
      true, // shouldForcePopularVoteDisplay
      {safe: 15, likely: 5, lean: 1, tilt: Number.MIN_VALUE}// customDefaultMargins
    )
  
    var todayDate = new Date()
    CustomMapSource.setTextMapData("date\n" + (todayDate.getMonth()+1) + "/" + todayDate.getDate() + "/" + todayDate.getFullYear())
  
    var presidentialMapSources = {}
    presidentialMapSources[PastElectionResultMapSource.getID()] = PastElectionResultMapSource
    presidentialMapSources[CustomMapSource.getID()] = CustomMapSource
  
    const presidentialMapSourceIDs = {
      [allYearsCycle]: [PastElectionResultMapSource.getID(), CustomMapSource.getID()]
    }
    
    const kPastElectionsVsPastElections = 1
  
    var defaultPresidentCompareSourceIDs = {}
    defaultPresidentCompareSourceIDs[kPastElectionsVsPastElections] = [PastElectionResultMapSource.getID(), PastElectionResultMapSource.getID()]
  
    return {mapSources: presidentialMapSources, mapSourceIDs: presidentialMapSourceIDs, mapCycles: [], defaultCompareSourceIDs: defaultPresidentCompareSourceIDs, customSourceID: CustomMapSource.getID()}
  }
)

class MapCountry
{
  constructor(id, name, shortName, iconURL)
  {
    this.id = id
    this.name = name
    this.shortName = shortName
    this.iconURL = iconURL
  }

  getID()
  {
    return this.id
  }

  getName()
  {
    return this.name
  }

  getShortName()
  {
    return this.shortName
  }

  getIconURL()
  {
    return this.iconURL
  }
  
  setMapTypes(mapTypes)
  {
    this.mapTypes = mapTypes
    this.mapTypeIDs = Object.keys(mapTypes)
  }

  getMapTypes()
  {
    return this.mapTypes
  }
  
  getMapTypeIDs()
  {
    return this.mapTypeIDs
  }

  getDefaultMapTypeID()
  {
    return this.defaultMapTypeID ?? this.mapTypeIDs[0]
  }
  
  setDefaultMapTypeID(defaultMapTypeID)
  {
    this.defaultMapTypeID = defaultMapTypeID
  }
  
  
  setPoliticalPartyData(politicalParties, defaultDropdownPartyIDs, mainPoliticalPartyIDs, majorThirdPartyCandidateIDs)
  {
    this.politicalParties = politicalParties
    this.defaultDropdownPartyIDs = defaultDropdownPartyIDs
    this.mainPoliticalPartyIDs = mainPoliticalPartyIDs
    this.majorThirdPartyCandidateIDs = majorThirdPartyCandidateIDs
  }
  
  getPoliticalPartyData()
  {
    return {parties: this.politicalParties, dropdownIDs: this.defaultDropdownPartyIDs, mainIDs: this.mainPoliticalPartyIDs, majorThirdPartyCandidateIDs: this.majorThirdPartyCandidateIDs}
  }
  
  setCountdownTimes(countdownTimes)
  {
    this.countdownTimes = countdownTimes
  }
  
  getCountdownTimes()
  {
    return this.countdownTimes ?? {}
  }
}

let mapCountries = {}
let mapCountryIDs = []

function setMapCountries()
{
  USAMapCountry.setMapTypes({
    [USAPresidentMapType.getID()]: USAPresidentMapType,
    [USASenateMapType.getID()]: USASenateMapType,
    [USAGovernorMapType.getID()]: USAGovernorMapType,
    [USAHouseMapType.getID()]: USAHouseMapType
  })

  USAMapCountry.setDefaultMapTypeID(USASenateMapType.getID())
  
  USAMapCountry.setPoliticalPartyData(
    {
      [NullParty.getID()]: NullParty,
      [UnknownParty.getID()]: UnknownParty,
      [SocialistParty.getID()]: SocialistParty,
      [FarmerLaborParty.getID()]: FarmerLaborParty,
      [GreenParty.getID()]: GreenParty,
      [PopulistParty.getID()]: PopulistParty,
      [NonPartisanLeagueParty.getID()]: NonPartisanLeagueParty,
      [ProgressiveParty.getID()]: ProgressiveParty,
      [AntiMonopolyParty.getID()]: AntiMonopolyParty,
      [FarmersAllianceParty.getID()]: FarmersAllianceParty,
      [FreeSoilParty.getID()]: FreeSoilParty,
      [LibertyParty.getID()]: LibertyParty,
      [LiberalRepublicanParty.getID()]: LiberalRepublicanParty,
      [DemocraticRepublicanParty.getID()]: DemocraticRepublicanParty,
      [DemocraticParty.getID()]: DemocraticParty,
      [ReformParty.getID()]: ReformParty,
      [SilverParty.getID()]: SilverParty,
      [UnionParty.getID()]: UnionParty,
      [ReadjusterParty.getID()]: ReadjusterParty,
      [RepublicanParty.getID()]: RepublicanParty,
      [WhigParty.getID()]: WhigParty,
      [NationalRepublicanParty.getID()]: NationalRepublicanParty,
      [FederalistParty.getID()]: FederalistParty,
      [ConservativeParty.getID()]: ConservativeParty,
      [LibertarianParty.getID()]: LibertarianParty,
      [ConstitutionParty.getID()]: ConstitutionParty,
      [KnowNothingParty.getID()]: KnowNothingParty,

      [IndependentRNParty.getID()]: IndependentRNParty,
      [Independent1824AJParty.getID()]: Independent1824AJParty,
      [Independent1824WCParty.getID()]: Independent1824WCParty,
      [Independent1860JohnBreckenridgeParty.getID()]: Independent1860JohnBreckenridgeParty,
      [Independent1912TRParty.getID()]: Independent1912TRParty,
      [Independent1932NTParty.getID()]: Independent1932NTParty,
      [Independent1948SMParty.getID()]: Independent1948SMParty,
      [Independent1948HWParty.getID()]: Independent1948HWParty,
      [Independent1956WJParty.getID()]: Independent1956WJParty,
      [Independent1960HBParty.getID()]: Independent1960HBParty,
      [Independent1968GWParty.getID()]: Independent1968GWParty,
      [Independent1976EMParty.getID()]: Independent1976EMParty,
      [Independent1988LBParty.getID()]: Independent1988LBParty,
      [Independent2004JEParty.getID()]: Independent2004JEParty,
      [Independent2016SEParty.getID()]: Independent2016SEParty,
      [Independent2016JKParty.getID()]: Independent2016JKParty,
      [Independent2016RPParty.getID()]: Independent2016RPParty,
      [Independent2016BSParty.getID()]: Independent2016BSParty,
      [Independent2016CPParty.getID()]: Independent2016CPParty,
      [Independent2016EMParty.getID()]: Independent2016EMParty,
      [IndependentGWParty.getID()]: IndependentGWParty,
      [Independent1808GCParty.getID()]: Independent1808GCParty,
      [Independent1820JAParty.getID()]: Independent1820JAParty,
      [Independent1824HCParty.getID()]: Independent1824HCParty,
      [Independent1832JFParty.getID()]: Independent1832JFParty,
      [Independent1832WWParty.getID()]: Independent1832WWParty,
      [Independent1836WMParty.getID()]: Independent1836WMParty,
      [Independent1836DWParty.getID()]: Independent1836DWParty,
      [Independent1836HWParty.getID()]: Independent1836HWParty,
      [Independent1844JBParty.getID()]: Independent1844JBParty,
      [Independent1856MFParty.getID()]: Independent1856MFParty,
      [Independent1860JohnBellParty.getID()]: Independent1860JohnBellParty,
      [Independent1888CFParty.getID()]: Independent1888CFParty,
      [Independent1892JBParty.getID()]: Independent1892JBParty,
      [Independent1892JWParty.getID()]: Independent1892JWParty,
      [Independent1912EDParty.getID()]: Independent1912EDParty,
      [Independent1916ABParty.getID()]: Independent1916ABParty,
      [Independent1920EDParty.getID()]: Independent1920EDParty,
      [Independent1924RLParty.getID()]: Independent1924RLParty,
      [Independent1976RRParty.getID()]: Independent1976RRParty,
      [Independent1980JAParty.getID()]: Independent1980JAParty,
      [Independent2024RFKParty.getID()]: Independent2024RFKParty,
      [IndependentGenericParty.getID()]: IndependentGenericParty,
      [TossupParty.getID()]: TossupParty
    },
    [
      DemocraticParty.getID(),
      RepublicanParty.getID()
    ],
    [
      TossupParty.getID(),
      NullParty.getID(),
      UnknownParty.getID(),
      DemocraticParty.getID(),
      RepublicanParty.getID(),
      LibertarianParty.getID(),
      GreenParty.getID(),
      WhigParty.getID(),
      FreeSoilParty.getID(),
      SocialistParty.getID(),
      NationalRepublicanParty.getID(),
      DemocraticRepublicanParty.getID(),
      ConservativeParty.getID(),
      ConstitutionParty.getID(),
      FederalistParty.getID(),
      LibertyParty.getID(),
      KnowNothingParty.getID(),
      UnionParty.getID(),
      LiberalRepublicanParty.getID(),
      AntiMonopolyParty.getID(),
      PopulistParty.getID(),
      ReadjusterParty.getID(),
      FarmersAllianceParty.getID(),
      SilverParty.getID(),
      NonPartisanLeagueParty.getID(),
      FarmerLaborParty.getID(),
      ProgressiveParty.getID(),
      IndependentGenericParty.getID()
    ],
    [
      Independent2024RFKParty.getID(),
      Independent2016EMParty.getID(),
      Independent2004JEParty.getID(),
      Independent1988LBParty.getID(),
      Independent1980JAParty.getID(),
      Independent1976EMParty.getID(),
      Independent1976RRParty.getID(),
      Independent1968GWParty.getID(),
      Independent1960HBParty.getID(),
      Independent1956WJParty.getID(),
      Independent1948SMParty.getID(),
      Independent1948HWParty.getID(),
      Independent1932NTParty.getID(),
      Independent1924RLParty.getID(),
      Independent1920EDParty.getID(),
      Independent1916ABParty.getID(),
      Independent1912TRParty.getID(),
      Independent1912EDParty.getID(),
      Independent1892JWParty.getID(),
      Independent1892JBParty.getID(),
      Independent1888CFParty.getID(),
      Independent1860JohnBreckenridgeParty.getID(),
      Independent1860JohnBellParty.getID(),
      Independent1856MFParty.getID(),
      Independent1844JBParty.getID(),
      Independent1836HWParty.getID(),
      Independent1836DWParty.getID(),
      Independent1836WMParty.getID(),
      Independent1832WWParty.getID(),
      Independent1832JFParty.getID(),
      Independent1824AJParty.getID(),
      Independent1824WCParty.getID(),
      Independent1824HCParty.getID(),
      Independent1820JAParty.getID(),
      Independent1808GCParty.getID(),
      IndependentGWParty.getID()
    ]
  )
  
  USAMapCountry.setCountdownTimes({
    // "2020 Presidential Election": {time: 1604444400000, url: "https://en.wikipedia.org/wiki/2020_United_States_presidential_election"},
    // "2021 Inauguration Day": {time: 1611162000000, url: "https://en.wikipedia.org/wiki/Inauguration_of_Joe_Biden"},
    // "2022 Midterm Elections": {time: 1667948400000, url: "https://en.wikipedia.org/wiki/2022_United_States_elections"},
    "2024 Presidential Election": {time: 1730847600000, url: "https://en.wikipedia.org/wiki/2024_United_States_presidential_election"},
    "2025 Inauguration Day": {time: 1737392400000, url: null},
    "2026 Midterm Elections": {time: 1793746800000, url: "https://en.wikipedia.org/wiki/2026_United_States_elections"},
    "2028 Presidential Election": {time: 1857250800000, url: "https://en.wikipedia.org/wiki/2028_United_States_presidential_election"}
  })

  UKMapCountry.setMapTypes({
    [UKHouseMapType.getID()]: UKHouseMapType
  })


  UKMapCountry.setPoliticalPartyData(
    { //Parties
      [NullParty.getID()]: NullParty,
      [OtherParty.getID()]: OtherParty,
      [UKWorkersPartyOfBritainParty.getID()]: UKWorkersPartyOfBritainParty,
      [UKYourParty.getID()]: UKYourParty,
      [UKGreenParty.getID()]: UKGreenParty,
      [UKVoltParty.getID()]: UKVoltParty,
      [UKPlaidCymruParty.getID()]: UKPlaidCymruParty,
      [UKSinnFeinParty.getID()]: UKSinnFeinParty,
      [UKAllianceParty.getID()]: UKAllianceParty,
      [UKSocDemLabParty.getID()]: UKSocDemLabParty,
      [UKLabourParty.getID()]: UKLabourParty,
      [UKScottishNationalParty.getID()]: UKScottishNationalParty,
      [UKAlbaParty.getID()]: UKAlbaParty,
      [UKLiberalDemocratsParty.getID()]: UKLiberalDemocratsParty,
      [UKSpeaker.getID()]:UKSpeaker,
      [UKMRLPParty.getID()]: UKMRLPParty,
      [UKUlsterUnionistParty.getID()]: UKUlsterUnionistParty,
      [UKConservativeParty.getID()]: UKConservativeParty,
      [UKDemocraticUnionistParty.getID()]: UKDemocraticUnionistParty,
      [UKReformUKParty.getID()]: UKReformUKParty,
      [UKBrexitParty.getID()]: UKBrexitParty,
      [UKTUVParty.getID()]: UKTUVParty,
      [UKRestoreBritainParty.getID()]: UKRestoreBritainParty,
      [UKUKIPParty.getID()]: UKUKIPParty,
      [UKBritishNationalParty.getID()]: UKBritishNationalParty,
      [UKSDPParty.getID()]: UKSDPParty,
      [UKLiberalParty.getID()]: UKLiberalParty,
      [UKReclaimParty.getID()]: UKReclaimParty,
      [TossupParty.getID()]: TossupParty,
      [IndependentGenericParty.getID()]: IndependentGenericParty
    },
    [ //Default
      IndependentGenericParty.getID(),
      UKSpeaker.getID(),
      UKLabourParty.getID(),
      UKConservativeParty.getID(),
      UKLiberalDemocratsParty.getID(),
      UKGreenParty.getID(),
      UKReformUKParty.getID(),
      UKPlaidCymruParty.getID(),
      UKScottishNationalParty.getID(),
      UKRestoreBritainParty.getID(),
      UKSinnFeinParty.getID(),
      UKDemocraticUnionistParty.getID(),
    ],
    [ //Party IDs
      TossupParty.getID(),
      IndependentGenericParty.getID(),
      NullParty.getID(),
      OtherParty.getID(),
      UKSpeaker.getID(),
      UKLabourParty.getID(),
      UKConservativeParty.getID(),
      UKLiberalDemocratsParty.getID(),
      UKGreenParty.getID(),
      UKReformUKParty.getID(),
      UKPlaidCymruParty.getID(),
      UKScottishNationalParty.getID(),
      UKAlbaParty.getID(),
      UKSinnFeinParty.getID(),
      UKDemocraticUnionistParty.getID(),
      UKAllianceParty.getID(),
      UKSocDemLabParty.getID(),
      UKRestoreBritainParty.getID(),
      UKUlsterUnionistParty.getID(),
      UKWorkersPartyOfBritainParty.getID(),
      UKUKIPParty.getID(),
      UKTUVParty.getID(),
      UKVoltParty.getID(),
      UKMRLPParty.getID(),
      UKSDPParty.getID(),
      UKLiberalParty.getID(),
      UKYourParty.getID(),
      UKBrexitParty.getID(),
      UKReclaimParty.getID(),
      UKBritishNationalParty.getID(),
      // UKpartythingy
    ],
    []
  )

  UKMapCountry.setCountdownTimes({
    "January 2026 General Elections": {time: 1769385600000, url: null},
    "February 2026 Midterm Elections": {time: 1772326800000, url: null},
    "April 2026 General Elections": {time: 1776474000000, url: null},
    "May 2026 Midterm Elections": {time: 1780182000000, url: null}
  })
  
  JJUMapCountry.setMapTypes({
    [JJUHouseMapType.getID()]: JJUHouseMapType,
    [JJUPresidentMapType.getID()]: JJUPresidentMapType,
    [JJUGovernorMapType.getID()]: JJUGovernorMapType,
    [JJUSenateMapType.getID()]: JJUSenateMapType,
  })
  
  JJUMapCountry.setPoliticalPartyData(
    {
      [NullParty.getID()]: NullParty,
      [JJUPWPParty.getID()]: JJUPWPParty,
      [JJUSPJUParty.getID()]: JJUSPJUParty,
      [JJUUCPParty.getID()]: JJUUCPParty,
      [JJUProgressiveParty.getID()]: JJUProgressiveParty,
      [JJUGreenParty.getID()]: JJUGreenParty,
        [JJUUnitedLeftBloc.getID()]: JJUUnitedLeftBloc,
        [JJUCitrusPartyBloc.getID()]: JJUCitrusPartyBloc,
      [JJUProgressiveLabourParty.getID()]: JJUProgressiveLabourParty,
      [JJULabourParty.getID()]: JJULabourParty,
      [JJUSDPParty.getID()]: JJUSDPParty,
        [JJULabLibPartyBloc.getID()]: JJULabLibPartyBloc,
        [JJUPeacockPartyBloc.getID()]: JJUPeacockPartyBloc,
        [JJUWatermelonPartyBloc.getID()]: JJUWatermelonPartyBloc,
        [JJUTrafficLightPartyBloc.getID()]: JJUTrafficLightPartyBloc,
        [JJUBurgerPartyBloc.getID()]: JJUBurgerPartyBloc,
      [JJUSolidarityParty.getID()]: JJUSolidarityParty,
      [JJUFDPParty.getID()]: JJUFDPParty,
        [JJUUnityPartyBloc.getID()]: JJUUnityPartyBloc,
        [JJUSunsetBloc.getID()]: JJUSunsetBloc,
      [JJUReformParty.getID()]: JJUReformParty,
      [JJULiberalParty.getID()]: JJULiberalParty,
        [JJUBOBBloc.getID()]: JJUBOBBloc,
        [JJULibConPartyBloc.getID()]: JJULibConPartyBloc,
        [JJULabourConPartyBloc.getID()]: JJULabourConPartyBloc,
      [JJUConservativeParty.getID()]: JJUConservativeParty,
      [JJUAllianceParty.getID()]: JJUAllianceParty,
      [JJUWildroseParty.getID()]: JJUWildroseParty,
      [JJUNationalParty.getID()]: JJUNationalParty,
      [JJUDRParty.getID()]: JJUDRParty,
      [RedColor.getID()]: RedColor,
      [ScarletColor.getID()]: ScarletColor,
      [OrangeColor.getID()]: OrangeColor,
      [YellowColor.getID()]: YellowColor,
      [OliveColor.getID()]: OliveColor,
      [LimeColor.getID()]: LimeColor,
      [GreenColor.getID()]: GreenColor,
      [ForestColor.getID()]: ForestColor,
      [TealColor.getID()]: TealColor,
      [CyanColor.getID()]: CyanColor,
      [AquaColor.getID()]: AquaColor,
      [BlueColor.getID()]: BlueColor,
      [BlurpleColor.getID()]: BlurpleColor,
      [VioletColor.getID()]: VioletColor,
      [PurpleColor.getID()]: PurpleColor,
      [MagentaColor.getID()]: MagentaColor,
      [PinkColor.getID()]: PinkColor,
      [BrownColor.getID()]: BrownColor,
      [TanColor.getID()]: TanColor,
      [MaroonColor.getID()]: MaroonColor,
      [GrayColor.getID()]: GrayColor,
      [IndependentGenericParty.getID()]: IndependentGenericParty,
      [TossupParty.getID()]: TossupParty
    },
    [
      JJUDRParty.getID(),
      JJUAllianceParty.getID(),
      JJUFDPParty.getID(),
      JJUSDPParty.getID(),
      JJUGreenParty.getID(),
      JJUSPJUParty.getID(),
      IndependentGenericParty.getID()
    ],
    [
      TossupParty.getID(),
      NullParty.getID(),
      JJULabourParty.getID(),
      JJULiberalParty.getID(),
      JJUAllianceParty.getID(),
      JJUConservativeParty.getID(),
      JJUProgressiveParty.getID(),
      JJUWildroseParty.getID(),
      JJUFDPParty.getID(),
      JJUReformParty.getID(),
      JJUProgressiveLabourParty.getID(),
      JJUGreenParty.getID(),
      JJUSDPParty.getID(),
      JJUUCPParty.getID(),
      JJUNationalParty.getID(),
      JJUPWPParty.getID(),
      JJUSPJUParty.getID(),
      JJUSolidarityParty.getID(),
      JJUDRParty.getID(),
      JJULabLibPartyBloc.getID(),
      JJULibConPartyBloc.getID(),
      JJULabourConPartyBloc.getID(),
      JJUWatermelonPartyBloc.getID(),
      JJUCitrusPartyBloc.getID(),
      JJUTrafficLightPartyBloc.getID(),
      JJUPeacockPartyBloc.getID(),
      JJUBurgerPartyBloc.getID(),
      JJUUnitedLeftBloc.getID(),
      JJUUnityPartyBloc.getID(),
      JJUBOBBloc.getID(),
      JJUSunsetBloc.getID(),
      IndependentGenericParty.getID(),
        RedColor.getID(),
        ScarletColor.getID(),
        OrangeColor.getID(),
        YellowColor.getID(),
        OliveColor.getID(),
        LimeColor.getID(),
        GreenColor.getID(),
        ForestColor.getID(),
        TealColor.getID(),
        CyanColor.getID(),
        AquaColor.getID(),
        BlueColor.getID(),
        BlurpleColor.getID(),
        VioletColor.getID(),
        PurpleColor.getID(),
        MagentaColor.getID(),
        PinkColor.getID(),
        BrownColor.getID(),
        TanColor.getID(),
        MaroonColor.getID(),
        GrayColor.getID(),
    ],
    []
  )
  
  JJUMapCountry.setCountdownTimes({
    "January 2026 General Elections": {time: 1769385600000, url: null},
    "February 2026 Midterm Elections": {time: 1772326800000, url: null},
    "April 2026 General Elections": {time: 1776474000000, url: null},
    "May 2026 Midterm Elections": {time: 1780182000000, url: null}
  })

    YAPMapCountry.setMapTypes({
    [YAPSenateMapType.getID()]: YAPSenateMapType,
    [YAPGovernorMapType.getID()]: YAPGovernorMapType,
    [YAPPresidentMapType.getID()]: YAPPresidentMapType,
  })


  YAPMapCountry.setPoliticalPartyData(
    { //Parties
      [NullParty.getID()]: NullParty,
      [YAPSocialRadicalParty.getID()]: YAPSocialRadicalParty,
      [YAPSGPParty.getID()]: YAPSGPParty,
      [YAPSDFParty.getID()]: YAPSDFParty,
      [YAPNewSGPParty.getID()]: YAPNewSGPParty,
      [YAPLabourParty.getID()]: YAPLabourParty,
      [YAPRefLabBloc.getID()]: YAPRefLabBloc,
      [YAPLiberalFederationParty.getID()]: YAPLiberalFederationParty,
      [YAPReformParty.getID()]: YAPReformParty,
      [YAPRefLibLabBloc.getID()]: YAPRefLibLabBloc,
      [IndependentGenericParty.getID()]: IndependentGenericParty,
      [TossupParty.getID()]: TossupParty,
    },
    [ //Default
      IndependentGenericParty.getID(),
      YAPSocialRadicalParty.getID(),
      YAPLabourParty.getID(),
      YAPReformParty.getID(),
      YAPLiberalFederationParty.getID(),
      YAPNewSGPParty.getID(),
    ],
    [ //Party IDs
      TossupParty.getID(),
      NullParty.getID(),
      IndependentGenericParty.getID(),
      YAPSGPParty.getID(),
      YAPLabourParty.getID(),
      YAPSDFParty.getID(),
      YAPSocialRadicalParty.getID(),
      YAPReformParty.getID(),
      YAPLiberalFederationParty.getID(),
      YAPNewSGPParty.getID(),
      //Coalitions
      YAPRefLabBloc.getID(),
      YAPRefLibLabBloc.getID(),
    ],
    []
  )

  YAPMapCountry.setCountdownTimes({
    "January 2026 General Elections": {time: 1769385600000, url: null},
    "February 2026 Midterm Elections": {time: 1772326800000, url: null},
    "April 2026 General Elections": {time: 1776474000000, url: null},
    "May 2026 Midterm Elections": {time: 1780182000000, url: null}
  })

  
  mapCountries[USAMapCountry.getID()] = USAMapCountry
  mapCountries[JJUMapCountry.getID()] = JJUMapCountry
  mapCountries[UKMapCountry.getID()] = UKMapCountry
  mapCountries[YAPMapCountry.getID()] = YAPMapCountry

  mapCountryIDs = [USAMapCountry.getID(), JJUMapCountry.getID(), UKMapCountry.getID(), YAPMapCountry.getID()]
}

let USAMapCountry = new MapCountry(
  "USA",
  "United States",
  "USA",
  "assets/usa-flag.png"
)

let UKMapCountry = new MapCountry(
  "UK",
  "United Kingdom",
  "UK",
  "assets/uk-flag.png"
)

let JJUMapCountry = new MapCountry(
  "JJU",
  "Jacksonia",
  "JJU",
  "assets/jju-flag-10.png"
)

let YAPMapCountry = new MapCountry(
  "YAP",
  "Yapmeria",
  "YAP",
  "assets/yapmeria-flag.png"
)
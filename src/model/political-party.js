class PoliticalParty
{
  constructor(id, names, shortName, defaultCandidateName, marginColors, ancestorParties)
  {
    this.id = id
    this.names = names
    this.shortName = shortName
    this.defaultCandidateName = defaultCandidateName
    this.candidateName = defaultCandidateName
    this.marginColors = cloneObject(marginColors)
    this.ancestorParties = ancestorParties
    
    this.marginNames = defaultMarginNames
  }

  getID()
  {
    return this.id
  }

  getNames()
  {
    return this.names
  }

  getShortName()
  {
    return this.shortName
  }

  setCandidateName(newCandidateName)
  {
    if (newCandidateName != null)
    {
      this.candidateName = newCandidateName
    }
    else
    {
      this.candidateName = this.defaultCandidateName
    }
  }

  getCandidateName()
  {
    return this.candidateName
  }

  getDefaultCandidateName()
  {
    return this.defaultCandidateName
  }

  getMarginColors()
  {
    return this.marginColors
  }

  setMarginColors(marginColors)
  {
    this.marginColors = marginColors
  }

  getMarginNames()
  {
    return this.marginNames
  }
  
  getAncestors()
  {
    const direct = this.ancestorParties ?? []
    return [...new Set([...direct, ...direct.flatMap(p => p.getAncestors())])]
  }
  
  isDescendant(otherParty)
  {
    return this.getAncestors().some(p => p.getID() == otherParty.getID()) ?? false
  }
}

const defaultMarginNames = {current: "Current", solid: "Solid", safe: "Safe", likely: "Likely", lean: "Lean", tilt: "Tilt"}

const PoliticalPartyColors = {
  red: {current: "#5E0E16", solid: "#890000", safe: "#be1c29", likely: "#ff5864", lean: "#ff8b98", tilt: "#cf8980"},
  scarlet: {current: "#6D1900", solid: "#A02500", safe: "#DE3B00", likely: "#FF6B36", lean: "#FFAE85", tilt: "#C39A74"}, //Extended
  orange: {current: "#7A3300", solid: "#c64500", safe: "#ff6200", likely: "#FF9758", lean: "#FFB28B", tilt: "#CFAD80"},
  yellow: {current: "#7F4C00", solid: "#B76800", safe: "#FE9800", likely: "#e8a43e", lean: "#eab86e", tilt: "#cbb78a"},
  lime: {current: "#3D5111", solid: "#5A750A", safe: "#789c0d", likely: "#98bf21", lean: "#b9d669", tilt: "#afbb83"},
  green: {current: "#0B5307", solid: "#19770A", safe: "#24A30E", likely: "#5CC449", lean: "#91D785", tilt: "#96BA8F"}, //Extended
  teal: {current: "#0A3831", solid: "#0A5437", safe: "#0e7f59", likely: "#31af70", lean: "#6cd99f", tilt: "#84b5a3"}, //Extended
  cyan: {current: "#083232", solid: "#0c4c56", safe: "#107281", likely: "#1DB8B3", lean: "#57DECB", tilt: "#76B3B3"}, 
  aqua: {current: "#04293A", solid: "#0F3D4C", safe: "#07587d", likely: "#2ba0d6", lean: "#55cfff", tilt: "#a9caef"}, //Extended
  blue: {current: "#0d1c3d", solid: "#191F68", safe: "#1c408c", likely: "#587ccc", lean: "#8aafff", tilt: "#949bb3"},
  blurple: {current: "#1D1D3D", solid: "#252559", safe: "#3A387C", likely: "#5B5B8C", lean: "#7B7AAD", tilt: "#757481"},//Extended
  violet: {current: "#1A0B33", solid: "#2D1659", safe: "#5423A3", likely: "#8432FF", lean: "#B27FFF", tilt: "#AF9CBF"},
  purple: {current: "#300E3F", solid: "#4F1966", safe: "#7F23A3", likely: "#c928ff", lean: "#DD7FFF", tilt: "#BB9CBF"},
  magenta: {current: "#4C0024", solid: "#75043C", safe: "#AB0354", likely: "#E8026E", lean: "#fe62b5", tilt: "#B87F9C"}, //Extended
  pink: {current: "#721C3D", solid: "#A82A58", safe: "#ff3e82", likely: "#ff78b5", lean: "#ff9ce5", tilt: "#dfabd1"}, 
  brown: {current: "#351800", solid: "#4C2812", safe: "#663514", likely: "#A86234", lean: "#D88856", tilt: "#F7C2A6"},
  tan: {current: "#503B1C", solid: "#715618", safe: "#A27A38", likely: "#BA9760", lean: "#EBCC9F", tilt: "#C1B88E"}, //Extended
  maroon: {current: "#2D0A0A", solid: "#421518", safe: "#661E1F", likely: "#A04241", lean: "#AC6467", tilt: "#BA8C86"}, //Extended
  gray: {current: "#211F1A", solid: "#302D28", safe: "#474339", likely: "#77705F", lean: "#B9B4A7", tilt: "#D8D6CF"}
}

// Main Parties

var DemocraticParty = new PoliticalParty(
  "DEM",
  ["Democratic", "Democrat"],
  "Dem",
  "Democratic",
  PoliticalPartyColors.blue
)

var RepublicanParty = new PoliticalParty(
  "REP",
  ["Republican"],
  "Rep",
  "Republican",
  PoliticalPartyColors.red
)

var TossupParty = new PoliticalParty(
  "Tossup",
  ["Tossup"],
  "Tossup",
  null,
  {current: "#6c6e74", safe: "#6c6e74", likely: "#6c6e74", lean: "#6c6e74", tilt: "#6c6e74"}
)

// Historic Main Parties

var WhigParty = new PoliticalParty(
  "WIG",
  ["Whig"],
  "Whig",
  "Whig",
  PoliticalPartyColors.orange
)

var NationalRepublicanParty = new PoliticalParty(
  "NRP",
  ["National Republican"],
  "NRP",
  "National Republican",
  PoliticalPartyColors.orange
)

var DemocraticRepublicanParty = new PoliticalParty(
  "DRP",
  ["Democratic Republican", "Democratic-Republican"],
  "DRP",
  "Democratic Republican",
  PoliticalPartyColors.green
)

var FederalistParty = new PoliticalParty(
  "FED",
  ["Federalist"],
  "FED",
  "Federalist",
  PoliticalPartyColors.scarlet
)

// Third Parties

var LibertarianParty = new PoliticalParty(
  "LIB",
  ["Libertarian"],
  "Lib",
  "Libertarian",
  PoliticalPartyColors.yellow
)

var GreenParty = new PoliticalParty(
  "GRN",
  ["Green"],
  "Grn",
  "Green",
  PoliticalPartyColors.green
)

var ReformParty = new PoliticalParty(
  "REF",
  ["Reform", "Reform Party"],
  "Ref",
  "Reform",
  PoliticalPartyColors.violet
)

// Historic Third Parties

var FreeSoilParty = new PoliticalParty(
  "FS",
  ["Free Soil"],
  "FS",
  "Free Soil",
  PoliticalPartyColors.violet
)

// Independent Candidates

var IndependentRNParty = new PoliticalParty(
  "INDRN",
  ["Nader"],
  "Ind",
  "Nader",
  PoliticalPartyColors.gray
)

var Independent2024RFKParty = new PoliticalParty(
  "IND2024RFK",
  ["Kennedy"],
  "Ind",
  "Kennedy",
  PoliticalPartyColors.gray
)

var Independent2016EMParty = new PoliticalParty(
  "IND2016EM",
  ["McMullin"],
  "Ind",
  "McMullin",
  PoliticalPartyColors.gray
)

var Independent2016CPParty = new PoliticalParty(
  "IND2016CP",
  ["Powell"],
  "Ind",
  "Powell",
  PoliticalPartyColors.violet
)

var Independent2016BSParty = new PoliticalParty(
  "IND2016BS",
  ["Sanders"],
  "Ind",
  "Sanders",
  PoliticalPartyColors.gray
)

var Independent2016RPParty = new PoliticalParty(
  "IND2016RP",
  ["Paul"],
  "Ind",
  "Paul",
  PoliticalPartyColors.orange
)

var Independent2016JKParty = new PoliticalParty(
  "IND2016JK",
  ["Kasich"],
  "Ind",
  "Kasich",
  PoliticalPartyColors.yellow
)

var Independent2016SEParty = new PoliticalParty(
  "IND2016SE",
  ["Spotted Eagle"],
  "Ind",
  "Spotted Eagle",
  PoliticalPartyColors.gray
)

var Independent2004JEParty = new PoliticalParty(
  "IND2004JE",
  ["Edwards"],
  "Ind",
  "Edwards",
  PoliticalPartyColors.gray
)

var Independent1988LBParty = new PoliticalParty(
  "IND1988LB",
  ["Bentsen"],
  "Ind",
  "Bentsen",
  PoliticalPartyColors.gray
)

var Independent1980JAParty = new PoliticalParty(
  "IND1980JA",
  ["Anderson"],
  "Ind",
  "Anderson",
  PoliticalPartyColors.orange
)

var Independent1976EMParty = new PoliticalParty(
  "IND1976EM",
  ["McCarthy"],
  "Ind",
  "McCarthy",
  PoliticalPartyColors.gray
)

var Independent1976RRParty = new PoliticalParty(
  "IND1976RR",
  ["Reagan"],
  "Ind",
  "Reagan",
  PoliticalPartyColors.orange
)

var Independent1968GWParty = new PoliticalParty(
  "IND1968GW",
  ["Dixiecrat"],
  "Ind",
  "Wallace",
  PoliticalPartyColors.orange
)

var Independent1960HBParty = new PoliticalParty(
  "IND1960HB",
  ["Dixiecrat"],
  "Ind",
  "Byrd",
  PoliticalPartyColors.orange
)

var Independent1956WJParty = new PoliticalParty(
  "IND1956WJ",
  ["Dixiecrat"],
  "Ind",
  "Jones",
  PoliticalPartyColors.orange
)

var Independent1948SMParty = new PoliticalParty(
  "IND1948SM",
  ["Dixiecrat"],
  "Ind",
  "Thurmond",
  PoliticalPartyColors.orange
)

var Independent1948HWParty = new PoliticalParty(
  "IND1948HW",
  ["Progressive"],
  "Ind",
  "Wallace",
  PoliticalPartyColors.green
)

var Independent1932NTParty = new PoliticalParty(
  "IND1932NT",
  ["Socialist"],
  "Ind",
  "Thomas",
  PoliticalPartyColors.scarlet
)

var Independent1924RLParty = new PoliticalParty(
  "IND1924RL",
  ["Progressive"],
  "Ind",
  "La Follette",
  PoliticalPartyColors.green
)

var Independent1920EDParty = new PoliticalParty(
  "IND1920ED",
  ["Socialist"],
  "Ind",
  "Debs",
  PoliticalPartyColors.scarlet
)

var Independent1916ABParty = new PoliticalParty(
  "IND1916AB",
  ["Socialist"],
  "Ind",
  "Benson",
  PoliticalPartyColors.scarlet
)

var Independent1912TRParty = new PoliticalParty(
  "IND1912TR",
  ["Progressive"],
  "Ind",
  "Roosevelt",
  PoliticalPartyColors.green
)

var Independent1912EDParty = new PoliticalParty(
  "IND1912ED",
  ["Socialist"],
  "Ind",
  "Debs",
  PoliticalPartyColors.scarlet
)

var Independent1892JWParty = new PoliticalParty(
  "IND1892JW",
  ["Populist"],
  "Ind",
  "Weaver",
  PoliticalPartyColors.green
)

var Independent1892JBParty = new PoliticalParty(
  "IND1892JB",
  ["Prohibition"],
  "Ind",
  "Bidwell",
  PoliticalPartyColors.violet
)

var Independent1888CFParty = new PoliticalParty(
  "IND1888CF",
  ["Prohibition"],
  "Ind",
  "Fisk",
  PoliticalPartyColors.violet
)

var Independent1860JohnBreckenridgeParty = new PoliticalParty(
  "IND1860JohnBreckenridge",
  ["Southern Democratic"],
  "Ind",
  "Breckenridge",
  PoliticalPartyColors.green
)

var Independent1860JohnBellParty = new PoliticalParty(
  "IND1860JohnBell",
  ["Constitutional Union"],
  "Ind",
  "Bell",
  PoliticalPartyColors.orange
)

var Independent1856MFParty = new PoliticalParty(
  "IND1856MF",
  ["Know Nothing"],
  "Ind",
  "Fillmore",
  PoliticalPartyColors.violet
)

var Independent1844JBParty = new PoliticalParty(
  "IND1844JB",
  ["Liberty"],
  "Ind",
  "Birney",
  PoliticalPartyColors.violet
)

var Independent1836HWParty = new PoliticalParty(
  "IND1836HW",
  ["Whig"],
  "Ind",
  "White",
  PoliticalPartyColors.violet
)

var Independent1836DWParty = new PoliticalParty(
  "IND1836DW",
  ["Whig"],
  "Ind",
  "Webster",
  PoliticalPartyColors.scarlet
)

var Independent1836WMParty = new PoliticalParty(
  "IND1836WM",
  ["Whig"],
  "Ind",
  "Magnum",
  PoliticalPartyColors.green
)

var Independent1832WWParty = new PoliticalParty(
  "IND1832WW",
  ["Anti Masonic"],
  "Ind",
  "Wirt",
  PoliticalPartyColors.scarlet
)

var Independent1832JFParty = new PoliticalParty(
  "IND1832JF",
  ["Nullifier"],
  "Ind",
  "Floyd",
  PoliticalPartyColors.green
)

var Independent1824AJParty = new PoliticalParty(
  "IND1824AJ",
  ["Democratic Republican"],
  "Ind",
  "Jackson",
  PoliticalPartyColors.blue
)

var Independent1824WCParty = new PoliticalParty(
  "IND1824WC",
  ["Democratic Republican"],
  "Ind",
  "Crawford",
  PoliticalPartyColors.orange
)

var Independent1824HCParty = new PoliticalParty(
  "IND1824HC",
  ["Democratic Republican"],
  "Ind",
  "Clay",
  PoliticalPartyColors.scarlet
)

var Independent1820JAParty = new PoliticalParty(
  "IND1820JA",
  ["Democratic Republican", "Democratic-Republican"],
  "Ind",
  "Adams",
  PoliticalPartyColors.blue
)

var Independent1808GCParty = new PoliticalParty(
  "IND1808GC",
  ["Democratic Republican", "Democratic-Republican"],
  "Ind",
  "Clinton",
  PoliticalPartyColors.blue
)

var IndependentGWParty = new PoliticalParty(
  "INDGW",
  ["Washington"],
  "Ind",
  "Washington",
  PoliticalPartyColors.orange
)



    ///////////////////////
    //  BRITISH PARTIES  //
    ///////////////////////

var UKLabourParty = new PoliticalParty(
  "UKLAB",
  ["Labour"],
  "Lab",
  "Labour",
  PoliticalPartyColors.red
)

var UKConservativeParty = new PoliticalParty(
  "UKCON",
  ["Con", "Conservative"],
  "Con",
  "Conservative",
  PoliticalPartyColors.blue
)

var UKSpeaker = new PoliticalParty(
  "UKSPK",
  ["Speaker", "Spk"],
  "Speaker",
  "Speaker",
  {current: "#1b1922", solid: "#262231", safe: "#353045", likely: "#5a5273", lean: "#a098bb", tilt: "#bfb7db"}
)

var OtherParty = new PoliticalParty(
  "OTHER",
  ["Other"],
  "Other",
  "Other",
  {current: "#00000f", solid: "#00000f", safe: "#00000f", likely: "#00000f", lean: "#00000f", tilt: "#00000f"}
)

var UKReformUKParty = new PoliticalParty(
  "UKREF",
  ["ReformUK"],
  "Ref",
  "Reform UK",
  PoliticalPartyColors.cyan
)

var UKGreenParty = new PoliticalParty(
  "UKGRN",
  ["Green"],
  "Grn",
  "Green",
  PoliticalPartyColors.green
)

var UKLiberalDemocratsParty = new PoliticalParty(
  "UKLIB",
  ["Lib Dem", "LD", "Liberal Democrats", "Libdems"],
  "LD",
  "Liberal Democrats",
  PoliticalPartyColors.orange
)

var UKPlaidCymruParty = new PoliticalParty(
  "UKPLC",
  ["Plaid Cymru", "Plaid", "PC", "PlaidCymru"],
  "Plaid Cymru",
  "Plaid Cymru",
  PoliticalPartyColors.lime
)

var UKScottishNationalParty = new PoliticalParty(
  "UKSNP",
  ["SNP"],
  "SNP",
  "SNP",
  PoliticalPartyColors.yellow
)

var UKAlbaParty = new PoliticalParty(
  "UKALB",
  ["Alba"],
  "Alba Party",
  "Alba",
  PoliticalPartyColors.aqua
)

var UKSinnFeinParty = new PoliticalParty(
  "UKSFN",
  ["Sinn Féin", "SF", "SinnFein", "Sinn Fein"],
  "SF",
  "Sinn Féin",
  PoliticalPartyColors.teal
)

var UKDemocraticUnionistParty = new PoliticalParty(
  "UKDUP",
  ["DUP"],
  "DUP",
  "Dem Unionist Party",
  PoliticalPartyColors.maroon
)

var UKAllianceParty = new PoliticalParty(
  "UKAPNI",
  ["APNI"],
  "Alliance Party",
  "Alliance Party",
  PoliticalPartyColors.yellow
)

var UKSocDemLabParty = new PoliticalParty(
  "UKSDLP",
  ["SDLP"],
  "SDLP",
  "Social Democratic Labour Party",
  PoliticalPartyColors.magenta
)

var UKRestoreBritainParty = new PoliticalParty(
  "UKRES",
  ["Restore", "RES"],
  "Restore",
  "Restore Britain",
  PoliticalPartyColors.blurple
)

var UKUlsterUnionistParty = new PoliticalParty(
  "UKUUP",
  ["Ulster Unionist", "UU", "Ulster", "UUP"],
  "Ulster Unionist",
  "Ulster Unionist",
  PoliticalPartyColors.aqua
)

var UKWorkersPartyOfBritainParty = new PoliticalParty(
  "UKWPB",
  ["WPB"],
  "Workers Party of Britain",
  "Workers Party of Britain",
  PoliticalPartyColors.aqua
)

var UKUKIPParty = new PoliticalParty(
  "UKUKIP",
  ["UKIP"],
  "UKIP",
  "UKIP",
  PoliticalPartyColors.purple
)

var UKTUVParty = new PoliticalParty(
  "UKTUV",
  ["TUV"],
  "TUV",
  "TUV",
  PoliticalPartyColors.blurple
)

var UKVoltParty = new PoliticalParty(
  "UKVOLT",
  ["Volt"],
  "Volt",
  "Volt",
  PoliticalPartyColors.violet
)

var UKMRLPParty = new PoliticalParty(
  "UKMRLP",
  ["MRLP"],
  "MRLP",
  "MRLP",
  PoliticalPartyColors.yellow
)

    ////////////////////////
    // JACKSONIAN PARTIES //
    ////////////////////////

var JJULabourParty = new PoliticalParty(
  "JJULAB",
  ["Labour"],
  "Lab",
  "Labour",
  PoliticalPartyColors.red
)

var JJULiberalParty = new PoliticalParty(
  "JJULIB",
  ["Liberal"],
  "Lib",
  "Liberal",
  PoliticalPartyColors.yellow
)

var JJUConservativeParty = new PoliticalParty(
  "JJUCON",
  ["Conservative"],
  "Con",
  "Conservative",
  PoliticalPartyColors.blue
)

var JJUAllianceParty = new PoliticalParty(
  "JJUALL",
  ["Alliance"],
  "All",
  "Alliance",
  PoliticalPartyColors.blue,
  [JJUConservativeParty]
)

var JJUProgressiveParty = new PoliticalParty(
  "JJUPRO",
  ["Progressive"],
  "Pro",
  "Progressive",
  PoliticalPartyColors.green
)

var JJUWildroseParty = new PoliticalParty(
  "JJUWIL",
  ["Wildrose"],
  "Wil",
  "Wildrose",
  PoliticalPartyColors.magenta
)

var JJUReformParty = new PoliticalParty(
  "JJUREF",
  ["Renewal"],
  "Ren",
  "Renewal",
  PoliticalPartyColors.scarlet
)

var JJUPWPParty = new PoliticalParty(
  "JJUPWP",
  ["PWP"],
  "PWP",
  "PWP",
  PoliticalPartyColors.purple
)

var JJUUCPParty = new PoliticalParty(
  "JJUUCP",
  ["UCP"],
  "UCP",
  "UCP",
  PoliticalPartyColors.purple,
  [JJUPWPParty]
)

var JJUNationalParty = new PoliticalParty(
  "JJUNAT",
  ["National", "JNP", "Coalition", "National Coalition", "Jacksonian National Party"],
  "Nat",
  "National",
  PoliticalPartyColors.brown
)

var JJUSolidarityParty = new PoliticalParty(
  "JJUSOL",
  ["Solidarity"],
  "Sol",
  "Solidarity",
  PoliticalPartyColors.orange
)

var JJUFDPParty = new PoliticalParty(
  "JJUFDP",
  ["FDP"],
  "FDP",
  "FDP",
  PoliticalPartyColors.orange,
  [JJUSolidarityParty, JJUNationalParty]
)

var JJUProgressiveLabourParty = new PoliticalParty(
  "JJUPLU",
  ["ProgLab"],
  "PLU",
  "ProgLab",
  {current: "#600923", solid: "#660A24", safe: "#A81039", likely: "#ff3571", lean: "#f3679f", tilt: "#FFB2C9"},
  [JJULabourParty, JJUProgressiveParty]
)

var JJUGreenParty = new PoliticalParty(
  "JJUGRE",
  ["Greens", "Green"],
  "Grn",
  "Greens",
  PoliticalPartyColors.green
)

var JJUSDPParty = new PoliticalParty(
  "JJUSDP",
  ["SDP"],
  "SDP",
  "SDP",
  PoliticalPartyColors.red,
  [JJUProgressiveLabourParty]
)

var JJUDRParty = new PoliticalParty(
  "JJUDR",
  ["Democratic Rally", "Dem Rally", "DR", "DemRal"],
  "DR",
  "Dem. Rally",
  PoliticalPartyColors.brown
) 

var JJUSPJUParty = new PoliticalParty(
  "JJUSPJU",
  ["SPJU", "Union", "Socialists", "Socialist"],
  "Socialist",
  "Socialist",
  PoliticalPartyColors.magenta
) 

    ///////////////////////////
    // JACKSONIAN COALITIONS //
    ///////////////////////////

var JJULabLibPartyBloc = new PoliticalParty(
  "JJULAL",
  ["LabLib"],
  "LAL",
  "LabLib",
  PoliticalPartyColors.scarlet
)

var JJULibConPartyBloc = new PoliticalParty(
  "JJULIC",
  ["LibCon"],
  "LIC",
  "LibCon",
  PoliticalPartyColors.cyan
)

var JJULabourConPartyBloc = new PoliticalParty(
  "JJULAC",
  ["LabourCon"],
  "LAC",
  "LabourCon",
  PoliticalPartyColors.violet
)

var JJUWatermelonPartyBloc = new PoliticalParty(
  "JJUWAT",
  ["Watermelon"],
  "Wat",
  "Watermelon",
  PoliticalPartyColors.magenta
)

var JJUCitrusPartyBloc = new PoliticalParty(
  "JJUCIT",
  ["Citrus"],
  "Cit",
  "Citrus",
  PoliticalPartyColors.orange
)

var JJUTrafficLightPartyBloc = new PoliticalParty(
  "JJUTRA",
  ["Traffic Light", "Traffic"],
  "Tra",
  "Traffic",
  PoliticalPartyColors.red
)

var JJUUnityPartyBloc = new PoliticalParty(
  "JJUUTY",
  ["Unity"],
  "UTY",
  "Unity",
  PoliticalPartyColors.aqua
)

var JJUPeacockPartyBloc = new PoliticalParty(
  "JJUPEA",
  ["Peacock"],
  "PEA",
  "Peacock",
  PoliticalPartyColors.cyan
)

var JJUBurgerPartyBloc = new PoliticalParty(
  "JJUBUR",
  ["Burger"],
  "Bur",
  "Burger",
  PoliticalPartyColors.orange
)

var JJUUnitedLeftBloc = new PoliticalParty(
  "JJUUNL",
  ["United Left"],
  "UNL",
  "United Left",
  PoliticalPartyColors.magenta
)

var JJUBOBBloc = new PoliticalParty(
  "JJUBOB",
  ["BOB", "bob" ],
  "BOB",
  "BOB",
  PoliticalPartyColors.brown
)

var JJUSunsetBloc = new PoliticalParty(
  "JJUSunset",
  ["Sunset", "sunset"],
  "Sunset",
  "Sunset",
  PoliticalPartyColors.aqua
)

var IndependentGenericParty = new PoliticalParty(
  "INDGEN",
  ["Independent", "Ind", "Indy"],
  "Ind",
  "Independent",
  PoliticalPartyColors.gray
)

var politicalParties = {}
var defaultDropdownPoliticalPartyIDs = []
var mainPoliticalPartyIDs = []
var majorThirdPartyCandidates = []
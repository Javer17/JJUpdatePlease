class PoliticalParty
{
  constructor(id, names, shortName, defaultCandidateName, marginColors, partyLogo, ancestorParties)
  {
    this.id = id
    this.names = names
    this.shortName = shortName
    this.defaultCandidateName = defaultCandidateName
    this.candidateName = defaultCandidateName
    this.marginColors = cloneObject(marginColors)
    this.partyLogo = partyLogo
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

  getPartyLogo()
  {
    return this.partyLogo
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

/* ARCHIVUM COLORI
const PoliticalPartyColors = {
  red:      {current: "#541217", solid: "#880006", safe: "#be1c29", likely: "#ff5864", lean: "#ff8b98", tilt: "#cf8980"},
  scarlet:  {current: "#5D1E0B", solid: "#992100", safe: "#D33A0B", likely: "#F56A40", lean: "#F79368", tilt: "#BF9878"}, 
  orange:   {current: "#703008", solid: "#bd4301", safe: "#FF6200", likely: "#FF9E4B", lean: "#FFB682", tilt: "#D5B27A"},
  yellow:   {current: "#6f4408", solid: "#B96800", safe: "#FE9800", likely: "#F9B04F", lean: "#FFC27C", tilt: "#cbb78a"},
  olive:    {current: "#3D3504", solid: "#6B5900", safe: "#9E8900", likely: "#C2B704", lean: "#D1C64E", tilt: "#B6A764"}, 
  lime:     {current: "#364505", solid: "#4E6B00", safe: "#789c00", likely: "#98bf11", lean: "#BBD35B", tilt: "#B2BA6F"},
  green:    {current: "#103808", solid: "#066800", safe: "#24A30E", likely: "#5CC449", lean: "#91D785", tilt: "#96BA8F"},
  teal:     {current: "#083025", solid: "#005139", safe: "#0E7F5F", likely: "#31AF76", lean: "#6CD9A4", tilt: "#84B5A5"}, 
  forest:   {current: "#17291E", solid: "#153D24", safe: "#2E5B3F", likely: "#547F65", lean: "#7CAD8E", tilt: "#83938D"}, 
  cyan:     {current: "#092B30", solid: "#00454F", safe: "#107281", likely: "#1DB8B3", lean: "#57DECB", tilt: "#76B3B3"}, 
  aqua:     {current: "#072837", solid: "#003B5B", safe: "#07587d", likely: "#2ba0d6", lean: "#66c2ff", tilt: "#a9caef"}, 
  blue:     {current: "#112042", solid: "#022163", safe: "#1c408c", likely: "#587ccc", lean: "#8aafff", tilt: "#949bb3"},
  blurple:  {current: "#1C1C38", solid: "#252359", safe: "#3A387C", likely: "#655FAF", lean: "#938FC9", tilt: "#B6B5CC"},
  violet:   {current: "#2A184C", solid: "#350589", safe: "#5423A3", likely: "#8432FF", lean: "#B27FFF", tilt: "#AF9CBF"}, 
  purple:   {current: "#3A1449", solid: "#540473", safe: "#7F23A3", likely: "#c928ff", lean: "#DD7FFF", tilt: "#BB9CBF"},
  magenta:  {current: "#4B072E", solid: "#7D0040", safe: "#AB0364", likely: "#E52B94", lean: "#DB5CAE", tilt: "#D394CA"}, 
  pink:     {current: "#661836", solid: "#AD1650", safe: "#FF327D", likely: "#FF66AD", lean: "#FF89E1", tilt: "#CC7EBC"}, 
  maroon:   {current: "#2D1011", solid: "#440A0B", safe: "#661E1F", likely: "#A04241", lean: "#AC6467", tilt: "#BA8C86"}, 
  brown:    {current: "#2B1A0B", solid: "#421F09", safe: "#663514", likely: "#A86234", lean: "#D88856", tilt: "#F7C2A6"},
  tan:      {current: "#493B24", solid: "#6D5020", safe: "#A27A38", likely: "#BA9760", lean: "#d3b890", tilt: "#c2bca3"}, 
  gray:     {current: "#1A1C1C", solid: "#292A2B", safe: "#3F3F41", likely: "#696A6D", lean: "#999A9B", tilt: "#D3D3D4"} 
}
*/

// Solid is 115 Sat -40 Lightness
// Current is 87 Sat -53 Lightness
// With Customs ofc, built from the base

const PoliticalPartyColors = {                                                                                                          // Dutch Parties (WIP)
  red:      {current: "#541217", solid: "#880006", safe: "#be1c29", likely: "#ff5864", lean: "#ff8b98", tilt: "#cf8980"},   // PRO  PvdA
  scarlet:  {current: "#5D1E0B", solid: "#992100", safe: "#D33A0B", likely: "#F56A40", lean: "#F79368", tilt: "#BF9878"},   // LN   GPV
  orange:   {current: "#703008", solid: "#bd4301", safe: "#FF6200", likely: "#FF9E4B", lean: "#FFB682", tilt: "#D5B27A"},   // SGP 
  yellow:   {current: "#6f4408", solid: "#B96800", safe: "#FE9800", likely: "#F9B04F", lean: "#FFC27C", tilt: "#cbb78a"},   // NSC  BIJ1  LPF   U55
  olive:    {current: "#3D3504", solid: "#6B5900", safe: "#9E8900", likely: "#C2B704", lean: "#D1C64E", tilt: "#B6A764"},   // BBB
  lime:     {current: "#364505", solid: "#4E6B00", safe: "#789c00", likely: "#98bf11", lean: "#BBD35B", tilt: "#B2BA6F"},   // GL   BP
  green:    {current: "#103808", solid: "#066800", safe: "#24A30E", likely: "#5CC449", lean: "#91D785", tilt: "#96BA8F"},   // D66
  teal:     {current: "#083025", solid: "#005139", safe: "#0E7F5F", likely: "#31AF76", lean: "#6CD9A4", tilt: "#84B5A5"},   // CDA
  forest:   {current: "#17291E", solid: "#153D24", safe: "#2E5B3F", likely: "#547F65", lean: "#7CAD8E", tilt: "#83938D"},   // PvdD
  willow:   {current: "#0F2624", solid: "#1C403C", safe: "#2a605a", likely: "#53948C", lean: "#8ac4b8", tilt: "#aec0be"},   // DNA  PPR
  cyan:     {current: "#092B30", solid: "#00454F", safe: "#107281", likely: "#1DB8B3", lean: "#57DECB", tilt: "#76B3B3"},   // DENK
  aqua:     {current: "#072837", solid: "#003B5B", safe: "#07587d", likely: "#2ba0d6", lean: "#66c2ff", tilt: "#a9caef"},   // CU   RPF
  blue:     {current: "#112042", solid: "#022163", safe: "#1c408c", likely: "#587ccc", lean: "#8aafff", tilt: "#949bb3"},   // VVD
  blurple:  {current: "#1C1C38", solid: "#252359", safe: "#3A387C", likely: "#655FAF", lean: "#938FC9", tilt: "#B6B5CC"},   // PVV  CP
  violet:   {current: "#2A184C", solid: "#350589", safe: "#5423A3", likely: "#8432FF", lean: "#B27FFF", tilt: "#AF9CBF"},   // Volt EVP
  purple:   {current: "#3A1449", solid: "#540473", safe: "#7F23A3", likely: "#c928ff", lean: "#DD7FFF", tilt: "#BB9CBF"},   // 50+  AOV
  magenta:  {current: "#4B072E", solid: "#7D0040", safe: "#AB0364", likely: "#E52B94", lean: "#DB5CAE", tilt: "#D394CA"},   // SP   DS70
  pink:     {current: "#661836", solid: "#AD1650", safe: "#FF327D", likely: "#FF66AD", lean: "#FF89E1", tilt: "#CC7EBC"},   // CPN
  plum:     {current: "#211019", solid: "#381B2B", safe: "#5E2F4A", likely: "#945178", lean: "#BF82A5", tilt: "#E2C3D3"},   // PSP
  maroon:   {current: "#2D1011", solid: "#440A0B", safe: "#661E1F", likely: "#A04241", lean: "#AC6467", tilt: "#BA8C86"},   // FvD
  brown:    {current: "#2B1A0B", solid: "#421F09", safe: "#663514", likely: "#A86234", lean: "#D88856", tilt: "#F7C2A6"},   // CD
  tan:      {current: "#493B24", solid: "#6D5020", safe: "#A27A38", likely: "#BA9760", lean: "#d3b890", tilt: "#c2bca3"},   // 
  char:     {current: "#1A1720", solid: "#292233", safe: "#463A53", likely: "#716083", lean: "#A293B6", tilt: "#D4CDE0"},   // JA21
  gray:     {current: "#1A1C1C", solid: "#292A2B", safe: "#3f4140", likely: "#696A6D", lean: "#999A9B", tilt: "#D3D3D4"},   // ---
}

// Colors
const RedColor = new PoliticalParty("Red" , ["Red Color"], "Red", "Red", PoliticalPartyColors.red, "ColorRed.png")
const ScarletColor = new PoliticalParty("Scarlet" , ["Scarlet Color"], "Scarlet", "Scarlet", PoliticalPartyColors.scarlet, "ColorScarlet.png")
const OrangeColor = new PoliticalParty("Orange" , ["Orange Color"], "Orange", "Orange", PoliticalPartyColors.orange, "ColorOrange.png")
const YellowColor = new PoliticalParty("Yellow" , ["Yellow Color"], "Yellow", "Yellow", PoliticalPartyColors.yellow, "ColorYellow.png")
const OliveColor = new PoliticalParty("Olive" , ["Olive Color"], "Olive", "Olive", PoliticalPartyColors.olive, "ColorOlive.png")
const LimeColor = new PoliticalParty("Lime" , ["Lime Color"], "Lime", "Lime", PoliticalPartyColors.lime, "ColorLime.png")
const GreenColor = new PoliticalParty("Green" , ["Green Color"], "Green", "Green", PoliticalPartyColors.green, "ColorGreen.png")
const ForestColor = new PoliticalParty("Forest" , ["Forest Color"], "Forest", "Forest", PoliticalPartyColors.forest, "ColorForest.png")
const WillowColor = new PoliticalParty("Willow" , ["Willow Color"], "Willow", "Willow", PoliticalPartyColors.willow, "ColorWillow.png")
const TealColor = new PoliticalParty("Teal" , ["Teal Color"], "Teal", "Teal", PoliticalPartyColors.teal, "ColorTeal.png")
const CyanColor = new PoliticalParty("Cyan" , ["Cyan Color"], "Cyan", "Cyan", PoliticalPartyColors.cyan, "ColorCyan.png")
const AquaColor = new PoliticalParty("Aqua" , ["Aqua Color"], "Aqua", "Aqua", PoliticalPartyColors.aqua, "ColorAqua.png")
const BlueColor = new PoliticalParty("Blue" , ["Blue Color"], "Blue", "Blue", PoliticalPartyColors.blue, "ColorBlue.png")
const BlurpleColor = new PoliticalParty("Blurple" , ["Blurple Color"], "Blurple", "Blurple", PoliticalPartyColors.blurple, "ColorBlurple.png")
const VioletColor = new PoliticalParty("Violet" , ["Violet Color"], "Violet", "Violet", PoliticalPartyColors.violet, "ColorViolet.png")
const PurpleColor = new PoliticalParty("Purple" , ["Purple Color"], "Purple", "Purple", PoliticalPartyColors.purple, "ColorPurple.png")
const MagentaColor = new PoliticalParty("Magenta" , ["Magenta Color"], "Magenta", "Magenta", PoliticalPartyColors.magenta, "ColorMagenta.png")
const PinkColor = new PoliticalParty("Pink" , ["Pink Color"], "Pink", "Pink", PoliticalPartyColors.pink, "ColorPink.png")
const PlumColor = new PoliticalParty("Plum", ["Plum Color"], "Plum", "Plum", PoliticalPartyColors.plum, "ColorPlum.png")
const BrownColor = new PoliticalParty("Brown" , ["Brown Color"], "Brown", "Brown", PoliticalPartyColors.brown, "ColorBrown.png")
const TanColor = new PoliticalParty("Tan" , ["Tan Color"], "Tan", "Tan", PoliticalPartyColors.tan, "ColorTan.png")
const MaroonColor = new PoliticalParty("Maroon" , ["Maroon Color"], "Maroon", "Maroon", PoliticalPartyColors.maroon, "ColorMaroon.png")
const CharColor = new PoliticalParty("Char" , ["Char Color"], "Char", "Char", PoliticalPartyColors.char, "ColorChar.png")
const GrayColor = new PoliticalParty("Gray" , ["Gray Color"], "Gray", "Gray", PoliticalPartyColors.gray, "ColorGray.png")
// Main Parties

const DemocraticParty = new PoliticalParty(
  "DEM",
  ["Democratic", "Democrat"],
  "Dem",
  "Democratic",
  PoliticalPartyColors.blue,
  "DEM.png"
)

const RepublicanParty = new PoliticalParty(
  "REP",
  ["Republican"],
  "Rep",
  "Republican",
  PoliticalPartyColors.red,
  "REP.png"
)

const TossupParty = new PoliticalParty(
  "Tossup",
  ["Tossup"],
  "Tossup",
  null,
  {current: "#6c6e74", safe: "#6c6e74", likely: "#6c6e74", lean: "#6c6e74", tilt: "#6c6e74"}
)

// Historic Main Parties

const WhigParty = new PoliticalParty(
  "WIG",
  ["Whig"],
  "Whig",
  "Whig",
  PoliticalPartyColors.orange,
  "WIG.png"
)

const NationalRepublicanParty = new PoliticalParty(
  "NRP",
  ["National Republican"],
  "NRP",
  "National Republican",
  PoliticalPartyColors.orange,
  "WIG.png"
)

const DemocraticRepublicanParty = new PoliticalParty(
  "DRP",
  ["Democratic Republican", "Democratic-Republican"],
  "DRP",
  "Democratic Republican",
  PoliticalPartyColors.green,
  "DRP.png"
)

const FederalistParty = new PoliticalParty(
  "FED",
  ["Federalist"],
  "FED",
  "Federalist",
  PoliticalPartyColors.scarlet,
  "FED.png"
)

// Third Parties

const LibertarianParty = new PoliticalParty(
  "LIB",
  ["Libertarian"],
  "Lib",
  "Libertarian",
  PoliticalPartyColors.yellow,
  "LIB.png"
)

const GreenParty = new PoliticalParty(
  "GRN",
  ["Green"],
  "Grn",
  "Green",
  PoliticalPartyColors.green,
  "GRN.png"
)

const ReformParty = new PoliticalParty(
  "REF",
  ["Reform", "Reform Party"],
  "Ref",
  "Reform",
  PoliticalPartyColors.violet,
  "REF.png"
)

const SocialistParty = new PoliticalParty(
  "SOC",
  ["Socialist", "Socialist Party"],
  "Soc",
  "Socialist",
  PoliticalPartyColors.magenta,
  "SOC.png"
)

const ConservativeParty = new PoliticalParty(
  "CON",
  ["Conservative"],
  "Con",
  "Conservative",
  PoliticalPartyColors.aqua,
  "CONP.png"
)

// Historic Third Parties

const FreeSoilParty = new PoliticalParty(
  "FS",
  ["Free Soil"],
  "FS",
  "Free Soil",
  PoliticalPartyColors.violet,
  "FS.png"
)

// Independent Candidates

const IndependentRNParty = new PoliticalParty(
  "INDRN",
  ["Nader"],
  "Ind",
  "Nader",
  PoliticalPartyColors.gray,
  "IND.png"
)

const Independent2024RFKParty = new PoliticalParty(
  "IND2024RFK",
  ["Kennedy"],
  "Ind",
  "Kennedy",
  PoliticalPartyColors.gray,
  "IND.png"
)

const Independent2016EMParty = new PoliticalParty(
  "IND2016EM",
  ["McMullin"],
  "Ind",
  "McMullin",
  PoliticalPartyColors.gray,
  "IND.png"
)

const Independent2016CPParty = new PoliticalParty(
  "IND2016CP",
  ["Powell"],
  "Ind",
  "Powell",
  PoliticalPartyColors.violet,
  "IND.png"
)

const Independent2016BSParty = new PoliticalParty(
  "IND2016BS",
  ["Sanders"],
  "Ind",
  "Sanders",
  PoliticalPartyColors.gray,
  "IND.png"
)

const Independent2016RPParty = new PoliticalParty(
  "IND2016RP",
  ["Paul"],
  "Ind",
  "Paul",
  PoliticalPartyColors.orange,
  "IND.png"
)

const Independent2016JKParty = new PoliticalParty(
  "IND2016JK",
  ["Kasich"],
  "Ind",
  "Kasich",
  PoliticalPartyColors.yellow,
  "IND.png"
)

const Independent2016SEParty = new PoliticalParty(
  "IND2016SE",
  ["Spotted Eagle"],
  "Ind",
  "Spotted Eagle",
  PoliticalPartyColors.gray,
  "IND.png"
)

const Independent2004JEParty = new PoliticalParty(
  "IND2004JE",
  ["Edwards"],
  "Ind",
  "Edwards",
  PoliticalPartyColors.gray,
  "IND.png"
)

const Independent1988LBParty = new PoliticalParty(
  "IND1988LB",
  ["Bentsen"],
  "Ind",
  "Bentsen",
  PoliticalPartyColors.gray,
  "IND.png"
)

const Independent1980JAParty = new PoliticalParty(
  "IND1980JA",
  ["Anderson"],
  "Ind",
  "Anderson",
  PoliticalPartyColors.orange,
  "IND.png"
)

const Independent1976EMParty = new PoliticalParty(
  "IND1976EM",
  ["McCarthy"],
  "Ind",
  "McCarthy",
  PoliticalPartyColors.gray,
  "IND.png"
)

const Independent1976RRParty = new PoliticalParty(
  "IND1976RR",
  ["Reagan"],
  "Ind",
  "Reagan",
  PoliticalPartyColors.orange,
  "IND.png"
)

const Independent1968GWParty = new PoliticalParty(
  "IND1968GW",
  ["Dixiecrat"],
  "Ind",
  "Wallace",
  PoliticalPartyColors.orange,
  "DIX.png"
)

const Independent1960HBParty = new PoliticalParty(
  "IND1960HB",
  ["Dixiecrat"],
  "Ind",
  "Byrd",
  PoliticalPartyColors.orange,
  "DIX.png"
)

const Independent1956WJParty = new PoliticalParty(
  "IND1956WJ",
  ["Dixiecrat"],
  "Ind",
  "Jones",
  PoliticalPartyColors.orange,
  "DIX.png"
)

const Independent1948SMParty = new PoliticalParty(
  "IND1948SM",
  ["Dixiecrat"],
  "Ind",
  "Thurmond",
  PoliticalPartyColors.orange,
  "DIX.png"
)

const Independent1948HWParty = new PoliticalParty(
  "IND1948HW",
  ["Progressive"],
  "Ind",
  "Wallace",
  PoliticalPartyColors.green,
  "PROWallace.png"
)

const Independent1932NTParty = new PoliticalParty(
  "IND1932NT",
  ["Socialist"],
  "Ind",
  "Thomas",
  PoliticalPartyColors.magenta,
  "SOC.png"
)

const Independent1924RLParty = new PoliticalParty(
  "IND1924RL",
  ["Progressive"],
  "Ind",
  "La Follette",
  PoliticalPartyColors.green,
  "LaFollette.png"
)

const Independent1920EDParty = new PoliticalParty(
  "IND1920ED",
  ["Socialist"],
  "Ind",
  "Debs",
  PoliticalPartyColors.magenta,
  "SOC.png"
)

const Independent1916ABParty = new PoliticalParty(
  "IND1916AB",
  ["Socialist"],
  "Ind",
  "Benson",
  PoliticalPartyColors.magenta,
  "SOC.png"
)

const Independent1912TRParty = new PoliticalParty(
  "IND1912TR",
  ["Progressive"],
  "Ind",
  "Roosevelt",
  PoliticalPartyColors.green,
  "PRO.png"
)

const Independent1912EDParty = new PoliticalParty(
  "IND1912ED",
  ["Socialist"],
  "Ind",
  "Debs",
  PoliticalPartyColors.magenta,
  "SOC.png"
)

const Independent1892JWParty = new PoliticalParty(
  "IND1892JW",
  ["Populist"],
  "Ind",
  "Weaver",
  PoliticalPartyColors.green,
  "POP.png"
)

const Independent1892JBParty = new PoliticalParty(
  "IND1892JB",
  ["Prohibition"],
  "Ind",
  "Bidwell",
  PoliticalPartyColors.violet,
  "PROH.png"
)

const Independent1888CFParty = new PoliticalParty(
  "IND1888CF",
  ["Prohibition"],
  "Ind",
  "Fisk",
  PoliticalPartyColors.violet,
  "PROH.png"
)

const Independent1860JohnBreckenridgeParty = new PoliticalParty(
  "IND1860JohnBreckenridge",
  ["Southern Democratic"],
  "Ind",
  "Breckenridge",
  PoliticalPartyColors.green,
  "DEM2.png"
)

const Independent1860JohnBellParty = new PoliticalParty(
  "IND1860JohnBell",
  ["Constitutional Union"],
  "Ind",
  "Bell",
  PoliticalPartyColors.orange,
  "CONU.png"
)

const Independent1856MFParty = new PoliticalParty(
  "IND1856MF",
  ["Know Nothing"],
  "Ind",
  "Fillmore",
  PoliticalPartyColors.violet,
  "KNP.png"
)

const Independent1844JBParty = new PoliticalParty(
  "IND1844JB",
  ["Liberty"],
  "Ind",
  "Birney",
  PoliticalPartyColors.violet,
  "LIBY.png"
)

const Independent1836HWParty = new PoliticalParty(
  "IND1836HW",
  ["Whig"],
  "Ind",
  "White",
  PoliticalPartyColors.violet,
  "WIG.png"
)

const Independent1836DWParty = new PoliticalParty(
  "IND1836DW",
  ["Whig"],
  "Ind",
  "Webster",
  PoliticalPartyColors.scarlet,
  "WIG.png"
)

const Independent1836WMParty = new PoliticalParty(
  "IND1836WM",
  ["Whig"],
  "Ind",
  "Magnum",
  PoliticalPartyColors.green,
  "WIG.png"
)

const Independent1832WWParty = new PoliticalParty(
  "IND1832WW",
  ["Anti Masonic"],
  "Ind",
  "Wirt",
  PoliticalPartyColors.scarlet,
  "AMS.png"
)

const Independent1832JFParty = new PoliticalParty(
  "IND1832JF",
  ["Nullifier"],
  "Ind",
  "Floyd",
  PoliticalPartyColors.green,
  "NUL.png"
)

const Independent1824AJParty = new PoliticalParty(
  "IND1824AJ",
  ["Democratic Republican"],
  "Ind",
  "Jackson",
  PoliticalPartyColors.blue,
  "DRP.png"
)

const Independent1824WCParty = new PoliticalParty(
  "IND1824WC",
  ["Democratic Republican"],
  "Ind",
  "Crawford",
  PoliticalPartyColors.orange,
  "DRP.png"
)

const Independent1824HCParty = new PoliticalParty(
  "IND1824HC",
  ["Democratic Republican"],
  "Ind",
  "Clay",
  PoliticalPartyColors.scarlet,
  "DRP.png"
)

const Independent1820JAParty = new PoliticalParty(
  "IND1820JA",
  ["Democratic Republican", "Democratic-Republican"],
  "Ind",
  "Adams",
  PoliticalPartyColors.blue,
  "DRP.png"
)

const Independent1808GCParty = new PoliticalParty(
  "IND1808GC",
  ["Democratic Republican", "Democratic-Republican"],
  "Ind",
  "Clinton",
  PoliticalPartyColors.blue,
  "DRP.png"
)

const IndependentGWParty = new PoliticalParty(
  "INDGW",
  ["Washington"],
  "Ind",
  "Washington",
  PoliticalPartyColors.orange,
  "IND.png"
)



    ///////////////////////
    //  BRITISH PARTIES  //
    ///////////////////////

const UKLabourParty = new PoliticalParty(
  "UKLAB",
  ["Labour", "Lab"],
  "Lab",
  "Labour",
  PoliticalPartyColors.red,
  "UKLAB.png"
)

const UKConservativeParty = new PoliticalParty(
  "UKCON",
  ["Con", "Conservative"],
  "Con",
  "Conservative",
  PoliticalPartyColors.blue,
  "UKCON.png"
)

const UKSpeaker = new PoliticalParty(
  "UKSPK",
  ["Speaker", "Spk"],
  "Speaker",
  "Speaker",
  PoliticalPartyColors.char,
  "UKSpeaker.png"
)

const OtherParty = new PoliticalParty(
  "OTHER",
  ["Other"],
  "Other",
  "Other",
  {current: "#00000f", solid: "#00000f", safe: "#00000f", likely: "#00000f", lean: "#00000f", tilt: "#00000f"}
)

const UKBrexitParty = new PoliticalParty(
  "UKBRX",
  ["Brexit", "The Brexit Party"],
  "BRX",
  "Brexit Party",
  PoliticalPartyColors.cyan,
  "UKBRX.png"
)

const UKReformUKParty = new PoliticalParty(
  "UKREF",
  ["ReformUK", "RUK"],
  "Ref",
  "Reform UK",
  PoliticalPartyColors.cyan,
  "UKREF.png",
  [UKBrexitParty]
)

const UKGreenParty = new PoliticalParty(
  "UKGRN",
  ["Green", "Green Party", "Scottish Green Party"],
  "Grn",
  "Green",
  PoliticalPartyColors.green,
  "UKGRN.png"
)

const UKLiberalDemocratsParty = new PoliticalParty(
  "UKLIB",
  ["Lib Dem", "LD", "Liberal Democrats", "Liberal Democrat", "Libdems"],
  "LD",
  "Liberal Democrats",
  PoliticalPartyColors.orange,
  "UKLIB.png"
)

const UKPlaidCymruParty = new PoliticalParty(
  "UKPLC",
  ["Plaid Cymru", "Plaid", "PC", "PlaidCymru"],
  "Plaid Cymru",
  "Plaid Cymru",
  PoliticalPartyColors.lime,
  "UKPLC.png"
)

const UKScottishNationalParty = new PoliticalParty(
  "UKSNP",
  ["SNP","Scottish National Party"],
  "SNP",
  "SNP",
  PoliticalPartyColors.yellow,
  "UKSNP.png"
)

const UKAlbaParty = new PoliticalParty(
  "UKALB",
  ["Alba"],
  "Alba Party",
  "Alba",
  PoliticalPartyColors.aqua,
  "UKALB.png"
)

const UKSinnFeinParty = new PoliticalParty(
  "UKSFN",
  ["Sinn Féin", "SF", "SinnFein", "Sinn Fein", "Sinn Féin"],
  "SF",
  "Sinn Féin",
  PoliticalPartyColors.teal,
  "UKSFN.png"
)

const UKDemocraticUnionistParty = new PoliticalParty(
  "UKDUP",
  ["DUP","Democratic Unionist Party"],
  "DUP",
  "DUP",
  PoliticalPartyColors.maroon,
  "UKDUP.png"
)

const UKAllianceParty = new PoliticalParty(
  "UKAPNI",
  ["APNI", "Alliance"],
  "Alliance Party",
  "Alliance Party",
  PoliticalPartyColors.tan,
  "UKALL.png"
)

const UKSocDemLabParty = new PoliticalParty(
  "UKSDLP",
  ["SDLP", "Social Democratic & Labour Party"],
  "SDLP",
  "Social Democratic Labour Party",
  PoliticalPartyColors.magenta,
  "UKSDLP.png"
)

const UKRestoreBritainParty = new PoliticalParty(
  "UKRES",
  ["Restore", "RES", "RB"],
  "Restore",
  "Restore Britain",
  PoliticalPartyColors.blurple,
  "UKRES.png"
)

const UKUlsterUnionistParty = new PoliticalParty(
  "UKUUP",
  ["Ulster Unionist", "UU", "Ulster", "UUP", "Ulster Unionist Party"],
  "Ulster Unionist",
  "Ulster Unionist",
  PoliticalPartyColors.aqua,
  "UKUUP.png"
)

const UKWorkersPartyOfBritainParty = new PoliticalParty(
  "UKWPB",
  ["WPB"],
  "Workers Party of Britain",
  "Workers Party of Britain",
  PoliticalPartyColors.aqua,
  "UKWPB.png"
)

const UKUKIPParty = new PoliticalParty(
  "UKUKIP",
  ["UKIP", "UK Independence Party"],
  "UKIP",
  "UKIP",
  PoliticalPartyColors.purple,
  "UKUKIP.png"
)

const UKTUVParty = new PoliticalParty(
  "UKTUV",
  ["TUV"],
  "TUV",
  "TUV",
  PoliticalPartyColors.blurple,
  "UKTUV.png"
)

const UKVoltParty = new PoliticalParty(
  "UKVOLT",
  ["Volt"],
  "Volt",
  "Volt",
  PoliticalPartyColors.violet,
  "VOLT.png"
)

const UKSDPParty = new PoliticalParty(
  "UKSDP",
  ["SDP"],
  "SDP",
  "SDP",
  PoliticalPartyColors.red,
  "UKSDP.png"
)

const UKLiberalParty = new PoliticalParty(
  "UKLIBS",
  ["Liberal"],
  "Lib",
  "Liberal",
  PoliticalPartyColors.yellow,
  "UKLIBS.png"
)

const UKYourParty = new PoliticalParty(
  "UKYOUR",
  ["Your Party"],
  "Your",
  "Your Party",
  PoliticalPartyColors.pink,
  "UKYOUR.png"
)

const UKMRLPParty = new PoliticalParty(
  "UKMRLP",
  ["MRLP", "Official Monster Raving Loony Party"],
  "MRLP",
  "MRLP",
  PoliticalPartyColors.yellow,
  "UKMRLP.png"
)

const UKReclaimParty = new PoliticalParty(
  "UKREC",
  ["Reclaim"],
  "REC",
  "REC",
  PoliticalPartyColors.blurple,
  "UKREC.png"
)

    ////////////////////////
    // JACKSONIAN PARTIES //
    ////////////////////////

const IndependentGenericParty = new PoliticalParty(
  "INDGEN",
  ["Independent", "Ind", "Indy"],
  "Ind",
  "Independent",
  PoliticalPartyColors.gray,
  "IND.png"
)

const JJULabourParty = new PoliticalParty(
  "JJULAB",
  ["Labour"],
  "Lab",
  "Labour",
  PoliticalPartyColors.red,
  "JJULAB.png"
)

const JJULiberalParty = new PoliticalParty(
  "JJULIB",
  ["Liberal"],
  "Lib",
  "Liberal",
  PoliticalPartyColors.yellow,
  "JJULIB.png"
)

const JJUConservativeParty = new PoliticalParty(
  "JJUCON",
  ["Conservative"],
  "Con",
  "Conservative",
  PoliticalPartyColors.blue,
  "JJUCON.png"
)

const JJUAllianceParty = new PoliticalParty(
  "JJUALL",
  ["Alliance"],
  "All",
  "Alliance",
  PoliticalPartyColors.blue,
  "JJUALL.png",
  [JJUConservativeParty]
)

const JJUProgressiveParty = new PoliticalParty(
  "JJUPRO",
  ["Progressive"],
  "Pro",
  "Progressive",
  PoliticalPartyColors.green,
  "JJUPRO.png"
)

const JJUWildroseParty = new PoliticalParty(
  "JJUWIL",
  ["Wildrose"],
  "Wil",
  "Wildrose",
  PoliticalPartyColors.magenta,
  "JJUWIL.png"
)

const JJUReformParty = new PoliticalParty(
  "JJUREF",
  ["Renewal"],
  "Ren",
  "Renewal",
  PoliticalPartyColors.scarlet,
  "JJUREF.png"
)

const JJUPWPParty = new PoliticalParty(
  "JJUPWP",
  ["PWP"],
  "PWP",
  "PWP",
  PoliticalPartyColors.purple,
  "JJUPWP.png"
)

const JJUUCPParty = new PoliticalParty(
  "JJUUCP",
  ["UCP"],
  "UCP",
  "UCP",
  PoliticalPartyColors.purple,
  "JJUUCP.png",
  [JJUPWPParty]
)

const JJUNationalParty = new PoliticalParty(
  "JJUNAT",
  ["National", "JNP", "Coalition", "National Coalition", "Jacksonian National Party"],
  "Nat",
  "National",
  PoliticalPartyColors.brown,
  "JJUNAT.png"
)


const JJUSolidarityParty = new PoliticalParty(
  "JJUSOL",
  ["Solidarity"],
  "Sol",
  "Solidarity",
  PoliticalPartyColors.orange,
  "JJUSOL.png"
)

const JJUFDPParty = new PoliticalParty(
  "JJUFDP",
  ["FDP"],
  "FDP",
  "FDP",
  PoliticalPartyColors.orange,
  "JJUFDP.png",
  [JJUSolidarityParty, JJUNationalParty]
)

const JJUProgressiveLabourParty = new PoliticalParty(
  "JJUPLU",
  ["ProgLab"],
  "PLU",
  "ProgLab",
  {current: "#600923", solid: "#660A24", safe: "#A81039", likely: "#ff3571", lean: "#f3679f", tilt: "#FFB2C9"},
  "JJUPLU.png",
  [JJULabourParty, JJUProgressiveParty]
)

const JJUGreenParty = new PoliticalParty(
  "JJUGRN",
  ["Greens", "Green"],
  "Grn",
  "Greens",
  PoliticalPartyColors.green,
  "JJUGRN.png"
)

const JJUSDPParty = new PoliticalParty(
  "JJUSDP",
  ["SDP"],
  "SDP",
  "SDP",
  PoliticalPartyColors.red,
  "JJUSDP.png",
  [JJUProgressiveLabourParty]
)

const JJUDRParty = new PoliticalParty(
  "JJUDR",
  ["Democratic Rally", "Dem Rally", "DR", "DemRal"],
  "DR",
  "Dem. Rally",
  PoliticalPartyColors.brown,
  "JJUDR.png"
) 

const JJUSPJUParty = new PoliticalParty(
  "JJUSOC",
  ["Socialist", "SPJU", "Socialists"],
  "Socialist",
  "Socialist",
  PoliticalPartyColors.magenta,
  "JJUSOC.png"
) 

    ///////////////////////////
    // JACKSONIAN COALITIONS //
    ///////////////////////////

const JJULabLibPartyBloc = new PoliticalParty(
  "JJULAL",
  ["LabLib"],
  "LAL",
  "LabLib",
  PoliticalPartyColors.scarlet
)

const JJULibConPartyBloc = new PoliticalParty(
  "JJULIC",
  ["LibCon"],
  "LIC",
  "LibCon",
  PoliticalPartyColors.cyan
)

const JJULabourConPartyBloc = new PoliticalParty(
  "JJULAC",
  ["LabourCon"],
  "LAC",
  "LabourCon",
  PoliticalPartyColors.violet
)

const JJUWatermelonPartyBloc = new PoliticalParty(
  "JJUWAT",
  ["Watermelon"],
  "Wat",
  "Watermelon",
  PoliticalPartyColors.magenta
)

const JJUCitrusPartyBloc = new PoliticalParty(
  "JJUCIT",
  ["Citrus"],
  "Cit",
  "Citrus",
  PoliticalPartyColors.orange
)

const JJUTrafficLightPartyBloc = new PoliticalParty(
  "JJUTRA",
  ["Traffic Light", "Traffic"],
  "Tra",
  "Traffic",
  PoliticalPartyColors.red
)

const JJUUnityPartyBloc = new PoliticalParty(
  "JJUUTY",
  ["Unity"],
  "UTY",
  "Unity",
  PoliticalPartyColors.aqua
)

const JJUPeacockPartyBloc = new PoliticalParty(
  "JJUPEA",
  ["Peacock"],
  "PEA",
  "Peacock",
  PoliticalPartyColors.cyan
)

const JJUBurgerPartyBloc = new PoliticalParty(
  "JJUBUR",
  ["Burger"],
  "Bur",
  "Burger",
  PoliticalPartyColors.orange
)

const JJUUnitedLeftBloc = new PoliticalParty(
  "JJUUNL",
  ["United Left"],
  "UNL",
  "United Left",
  PoliticalPartyColors.magenta
)

const JJUBOBBloc = new PoliticalParty(
  "JJUBOB",
  ["BOB", "bob" ],
  "BOB",
  "BOB",
  PoliticalPartyColors.brown
)

const JJUSunsetBloc = new PoliticalParty(
  "JJUSunset",
  ["Sunset", "sunset"],
  "Sunset",
  "Sunset",
  PoliticalPartyColors.aqua
)


    ////////////////////////
    // YAPMERIAN  PARTIES //
    ////////////////////////

const YAPSGPParty = new PoliticalParty(
  "YAPSGP",
  ["SGP", "Social Gospel Party"],
  "Social Gospel Party",
  "Social Gospel Party",
  PoliticalPartyColors.red,
  "YAPSGP.png"
)

const YAPLabourParty = new PoliticalParty(
  "YAPLAB",
  ["Labour"],
  "Lab",
  "Labour",
  PoliticalPartyColors.blue,
  "YAPLAB.png"
)

const YAPSDFParty = new PoliticalParty(
  "YAPSDF",
  ["SDF", "Social Democratic Front"],
  "SDF",
  "Social Democratic Front",
  PoliticalPartyColors.teal,
  "YAPSDF.png"
)

const YAPReformParty = new PoliticalParty(
  "YAPREF",
  ["Reform"],
  "Ref",
  "Reform",
  PoliticalPartyColors.orange,
  "YAPREF.png"
)

    ///////////////////////////
    // YAPMERIAN  COALITIONS //
    ///////////////////////////

const YAPRefLabBloc = new PoliticalParty(
  "YAPREFLAB",
  ["Reform & Labour", "RefLab"],
  "RefLab",
  "Reform Labour",
  PoliticalPartyColors.lime
)

let politicalParties = {}
let defaultDropdownPoliticalPartyIDs = []
let mainPoliticalPartyIDs = []
let majorThirdPartyCandidates = []
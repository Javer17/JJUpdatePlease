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
  true,{ //Constituency Names FIRST ONE HYPHENATED
"Aberafan-Maesteg": "Aberafan Maesteg",
  "Aberdeen-North": "Aberdeen North",
  "Aberdeenshire-North-and-Moray-East": "Aberdeenshire North and Moray East",
  "Aberdeen-South": "Aberdeen South",
  "Airdrie-and-Shotts": "Airdrie and Shotts",
  "Aldershot": "Aldershot",
  "Aldridge-Brownhills": "Aldridge-Brownhills",
  "Alloa-and-Grangemouth": "Alloa and Grangemouth",
  "Altrincham-and-Sale-West": "Altrincham and Sale West",
  "Alyn-and-Deeside": "Alyn and Deeside",
  "Amber-Valley": "Amber Valley",
  "Angus-and-Perthshire-Glens": "Angus and Perthshire Glens",
  "Arbroath-and-Broughty-Ferry": "Arbroath and Broughty Ferry",
  "Argyll-Bute-and-South-Lochaber": "Argyll Bute and South Lochaber",
  "Arundel-and-South-Downs": "Arundel and South Downs",
  "Ashfield": "Ashfield",
  "Ashford": "Ashford",
  "Ashton-under-Lyne": "Ashton-under-Lyne",
  "Aylesbury": "Aylesbury",
  "Ayr-Carrick-and-Cumnock": "Ayr Carrick and Cumnock",
  "Banbury": "Banbury",
  "Bangor-Aberconwy": "Bangor Aberconwy",
  "Barking": "Barking",
  "Barnsley-North": "Barnsley North",
  "Barnsley-South": "Barnsley South",
  "Barrow-and-Furness": "Barrow and Furness",
  "Basildon-and-Billericay": "Basildon and Billericay",
  "Basingstoke": "Basingstoke",
  "Bassetlaw": "Bassetlaw",
  "Bath": "Bath",
  "Bathgate-and-Linlithgow": "Bathgate and Linlithgow",
  "Battersea": "Battersea",
  "Beaconsfield": "Beaconsfield",
  "Beckenham-and-Penge": "Beckenham and Penge",
  "Bedford": "Bedford",
  "Belfast-East": "Belfast East",
  "Belfast-North": "Belfast North",
  "Belfast-South-and-Mid-Down": "Belfast South and Mid Down",
  "Belfast-West": "Belfast West",
  "Bermondsey-and-Old-Southwark": "Bermondsey and Old Southwark",
  "Berwickshire-Roxburgh-and-Selkirk": "Berwickshire Roxburgh and Selkirk",
  "Bethnal-Green-and-Stepney": "Bethnal Green and Stepney",
  "Beverley-and-Holderness": "Beverley and Holderness",
  "Bexhill-and-Battle": "Bexhill and Battle",
  "Bexleyheath-and-Crayford": "Bexleyheath and Crayford",
  "Bicester-and-Woodstock": "Bicester and Woodstock",
  "Birkenhead": "Birkenhead",
  "Birmingham-Edgbaston": "Birmingham Edgbaston",
  "Birmingham-Erdington": "Birmingham Erdington",
  "Birmingham-Hall-Green-and-Moseley": "Birmingham Hall Green and Moseley",
  "Birmingham-Hodge-Hill-and-Solihull-North": "Birmingham Hodge Hill and Solihull North",
  "Birmingham-Ladywood": "Birmingham Ladywood",
  "Birmingham-Northfield": "Birmingham Northfield",
  "Birmingham-Perry-Barr": "Birmingham Perry Barr",
  "Birmingham-Selly-Oak": "Birmingham Selly Oak",
  "Birmingham-Yardley": "Birmingham Yardley",
  "Bishop-Auckland": "Bishop Auckland",
  "Blackburn": "Blackburn",
  "Blackley-and-Middleton-South": "Blackley and Middleton South",
  "Blackpool-North-and-Fleetwood": "Blackpool North and Fleetwood",
  "Blackpool-South": "Blackpool South",
  "Blaenau-Gwent-and-Rhymney": "Blaenau Gwent and Rhymney",
  "Blaydon-and-Consett": "Blaydon and Consett",
  "Blyth-and-Ashington": "Blyth and Ashington",
  "Bognor-Regis-and-Littlehampton": "Bognor Regis and Littlehampton",
  "Bolsover": "Bolsover",
  "Bolton-North-East": "Bolton North East",
  "Bolton-South-and-Walkden": "Bolton South and Walkden",
  "Bolton-West": "Bolton West",
  "Bootle": "Bootle",
  "Boston-and-Skegness": "Boston and Skegness",
  "Bournemouth-East": "Bournemouth East",
  "Bournemouth-West": "Bournemouth West",
  "Bracknell": "Bracknell",
  "Bradford-East": "Bradford East",
  "Bradford-South": "Bradford South",
  "Bradford-West": "Bradford West",
  "Braintree": "Braintree",
  "Brecon-Radnor-and-Cwm-Tawe": "Brecon Radnor and Cwm Tawe",
  "Brent-East": "Brent East",
  "Brentford-and-Isleworth": "Brentford and Isleworth",
  "Brent-West": "Brent West",
  "Brentwood-and-Ongar": "Brentwood and Ongar",
  "Bridgend": "Bridgend",
  "Bridgwater": "Bridgwater",
  "Bridlington-and-The-Wolds": "Bridlington and The Wolds",
  "Brigg-and-Immingham": "Brigg and Immingham",
  "Brighton-Kemptown-and-Peacehaven": "Brighton Kemptown and Peacehaven",
  "Brighton-Pavilion": "Brighton Pavilion",
  "Bristol-Central": "Bristol Central",
  "Bristol-East": "Bristol East",
  "Bristol-North-East": "Bristol North East",
  "Bristol-North-West": "Bristol North West",
  "Bristol-South": "Bristol South",
  "Broadland-and-Fakenham": "Broadland and Fakenham",
  "Bromley-and-Biggin-Hill": "Bromley and Biggin Hill",
  "Bromsgrove": "Bromsgrove",
  "Broxbourne": "Broxbourne",
  "Broxtowe": "Broxtowe",
  "Buckingham-and-Bletchley": "Buckingham and Bletchley",
  "Burnley": "Burnley",
  "Burton-and-Uttoxeter": "Burton and Uttoxeter",
  "Bury-North": "Bury North",
  "Bury-South": "Bury South",
  "Bury-St-Edmunds-and-Stowmarket": "Bury St Edmunds and Stowmarket",
  "Caerfyrddin": "Caerfyrddin",
  "Caerphilly": "Caerphilly",
  "Caithness-Sutherland-and-Easter-Ross": "Caithness Sutherland and Easter Ross",
  "Calder-Valley": "Calder Valley",
  "Camborne-and-Redruth": "Camborne and Redruth",
  "Cambridge": "Cambridge",
  "Cannock-Chase": "Cannock Chase",
  "Canterbury": "Canterbury",
  "Cardiff-East": "Cardiff East",
  "Cardiff-North": "Cardiff North",
  "Cardiff-South-and-Penarth": "Cardiff South and Penarth",
  "Cardiff-West": "Cardiff West",
  "Carlisle": "Carlisle",
  "Carshalton-and-Wallington": "Carshalton and Wallington",
  "Castle-Point": "Castle Point",
  "Central-Ayrshire": "Central Ayrshire",
  "Central-Devon": "Central Devon",
  "Central-Suffolk-and-North-Ipswich": "Central Suffolk and North Ipswich",
  "Ceredigion-Preseli": "Ceredigion Preseli",
  "Chatham-and-Aylesford": "Chatham and Aylesford",
  "Cheadle": "Cheadle",
  "Chelmsford": "Chelmsford",
  "Chelsea-and-Fulham": "Chelsea and Fulham",
  "Cheltenham": "Cheltenham",
  "Chesham-and-Amersham": "Chesham and Amersham",
  "Chesterfield": "Chesterfield",
  "Chester-North-and-Neston": "Chester North and Neston",
  "Chester-South-and-Eddisbury": "Chester South and Eddisbury",
  "Chichester": "Chichester",
  "Chingford-and-Woodford-Green": "Chingford and Woodford Green",
  "Chippenham": "Chippenham",
  "Chipping-Barnet": "Chipping Barnet",
  "Chorley": "Chorley",
  "Christchurch": "Christchurch",
  "Cities-of-London-and-Westminster": "Cities of London and Westminster",
  "City-of-Durham": "City of Durham",
  "Clacton": "Clacton",
  "Clapham-and-Brixton-Hill": "Clapham and Brixton Hill",
  "Clwyd-East": "Clwyd East",
  "Clwyd-North": "Clwyd North",
  "Coatbridge-and-Bellshill": "Coatbridge and Bellshill",
  "Colchester": "Colchester",
  "Colne-Valley": "Colne Valley",
  "Congleton": "Congleton",
  "Corby-and-East-Northamptonshire": "Corby and East Northamptonshire",
  "Coventry-East": "Coventry East",
  "Coventry-North-West": "Coventry North West",
  "Coventry-South": "Coventry South",
  "Cowdenbeath-and-Kirkcaldy": "Cowdenbeath and Kirkcaldy",
  "Cramlington-and-Killingworth": "Cramlington and Killingworth",
  "Crawley": "Crawley",
  "Crewe-and-Nantwich": "Crewe and Nantwich",
  "Croydon-East": "Croydon East",
  "Croydon-South": "Croydon South",
  "Croydon-West": "Croydon West",
  "Cumbernauld-and-Kirkintilloch": "Cumbernauld and Kirkintilloch",
  "Dagenham-and-Rainham": "Dagenham and Rainham",
  "Darlington": "Darlington",
  "Dartford": "Dartford",
  "Daventry": "Daventry",
  "Derby-North": "Derby North",
  "Derbyshire-Dales": "Derbyshire Dales",
  "Derby-South": "Derby South",
  "Dewsbury-and-Batley": "Dewsbury and Batley",
  "Didcot-and-Wantage": "Didcot and Wantage",
  "Doncaster-Central": "Doncaster Central",
  "Doncaster-East-and-the-Isle-of-Axholme": "Doncaster East and the Isle of Axholme",
  "Doncaster-North": "Doncaster North",
  "Dorking-and-Horley": "Dorking and Horley",
  "Dover-and-Deal": "Dover and Deal",
  "Droitwich-and-Evesham": "Droitwich and Evesham",
  "Dudley": "Dudley",
  "Dulwich-and-West-Norwood": "Dulwich and West Norwood",
  "Dumfries-and-Galloway": "Dumfries and Galloway",
  "Dumfriesshire-Clydesdale-and-Tweeddale": "Dumfriesshire Clydesdale and Tweeddale",
  "Dundee-Central": "Dundee Central",
  "Dunfermline-and-Dollar": "Dunfermline and Dollar",
  "Dunstable-and-Leighton-Buzzard": "Dunstable and Leighton Buzzard",
  "Dwyfor-Meirionnydd": "Dwyfor Meirionnydd",
  "Ealing-Central-and-Acton": "Ealing Central and Acton",
  "Ealing-North": "Ealing North",
  "Ealing-Southall": "Ealing Southall",
  "Earley-and-Woodley": "Earley and Woodley",
  "Easington": "Easington",
  "East-Antrim": "East Antrim",
  "Eastbourne": "Eastbourne",
  "East-Grinstead-and-Uckfield": "East Grinstead and Uckfield",
  "East-Ham": "East Ham",
  "East-Hampshire": "East Hampshire",
  "East-Kilbride-and-Strathaven": "East Kilbride and Strathaven",
  "Eastleigh": "Eastleigh",
  "East-Londonderry": "East Londonderry",
  "East-Renfrewshire": "East Renfrewshire",
  "East-Surrey": "East Surrey",
  "East-Thanet": "East Thanet",
  "East-Wiltshire": "East Wiltshire",
  "East-Worthing-and-Shoreham": "East Worthing and Shoreham",
  "Edinburgh-East-and-Musselburgh": "Edinburgh East and Musselburgh",
  "Edinburgh-North-and-Leith": "Edinburgh North and Leith",
  "Edinburgh-South": "Edinburgh South",
  "Edinburgh-South-West": "Edinburgh South West",
  "Edinburgh-West": "Edinburgh West",
  "Edmonton-and-Winchmore-Hill": "Edmonton and Winchmore Hill",
  "Ellesmere-Port-and-Bromborough": "Ellesmere Port and Bromborough",
  "Eltham-and-Chislehurst": "Eltham and Chislehurst",
  "Ely-and-East-Cambridgeshire": "Ely and East Cambridgeshire",
  "Enfield-North": "Enfield North",
  "Epping-Forest": "Epping Forest",
  "Epsom-and-Ewell": "Epsom and Ewell",
  "Erewash": "Erewash",
  "Erith-and-Thamesmead": "Erith and Thamesmead",
  "Esher-and-Walton": "Esher and Walton",
  "Exeter": "Exeter",
  "Exmouth-and-Exeter-East": "Exmouth and Exeter East",
  "Falkirk": "Falkirk",
  "Fareham-and-Waterlooville": "Fareham and Waterlooville",
  "Farnham-and-Bordon": "Farnham and Bordon",
  "Faversham-and-Mid-Kent": "Faversham and Mid Kent",
  "Feltham-and-Heston": "Feltham and Heston",
  "Fermanagh-and-South-Tyrone": "Fermanagh and South Tyrone",
  "Filton-and-Bradley-Stoke": "Filton and Bradley Stoke",
  "Finchley-and-Golders-Green": "Finchley and Golders Green",
  "Folkestone-and-Hythe": "Folkestone and Hythe",
  "Forest-of-Dean": "Forest of Dean",
  "Foyle": "Foyle",
  "Frome-and-East-Somerset": "Frome and East Somerset",
  "Fylde": "Fylde",
  "Gainsborough": "Gainsborough",
  "Gateshead-Central-and-Whickham": "Gateshead Central and Whickham",
  "Gedling": "Gedling",
  "Gillingham-and-Rainham": "Gillingham and Rainham",
  "Glasgow-East": "Glasgow East",
  "Glasgow-North": "Glasgow North",
  "Glasgow-North-East": "Glasgow North East",
  "Glasgow-South": "Glasgow South",
  "Glasgow-South-West": "Glasgow South West",
  "Glasgow-West": "Glasgow West",
  "Glastonbury-and-Somerton": "Glastonbury and Somerton",
  "Glenrothes-and-Mid-Fife": "Glenrothes and Mid Fife",
  "Gloucester": "Gloucester",
  "Godalming-and-Ash": "Godalming and Ash",
  "Goole-and-Pocklington": "Goole and Pocklington",
  "Gordon-and-Buchan": "Gordon and Buchan",
  "Gorton-and-Denton": "Gorton and Denton",
  "Gosport": "Gosport",
  "Gower": "Gower",
  "Grantham-and-Bourne": "Grantham and Bourne",
  "Gravesham": "Gravesham",
  "Great-Grimsby-and-Cleethorpes": "Great Grimsby and Cleethorpes",
  "Great-Yarmouth": "Great Yarmouth",
  "Greenwich-and-Woolwich": "Greenwich and Woolwich",
  "Guildford": "Guildford",
  "Hackney-North-and-Stoke-Newington": "Hackney North and Stoke Newington",
  "Hackney-South-and-Shoreditch": "Hackney South and Shoreditch",
  "Halesowen": "Halesowen",
  "Halifax": "Halifax",
  "Hamble-Valley": "Hamble Valley",
  "Hamilton-and-Clyde-Valley": "Hamilton and Clyde Valley",
  "Hammersmith-and-Chiswick": "Hammersmith and Chiswick",
  "Hampstead-and-Highgate": "Hampstead and Highgate",
  "Harborough-Oadby-and-Wigston": "Harborough Oadby and Wigston",
  "Harlow": "Harlow",
  "Harpenden-and-Berkhamsted": "Harpenden and Berkhamsted",
  "Harrogate-and-Knaresborough": "Harrogate and Knaresborough",
  "Harrow-East": "Harrow East",
  "Harrow-West": "Harrow West",
  "Hartlepool": "Hartlepool",
  "Harwich-and-North-Essex": "Harwich and North Essex",
  "Hastings-and-Rye": "Hastings and Rye",
  "Havant": "Havant",
  "Hayes-and-Harlington": "Hayes and Harlington",
  "Hazel-Grove": "Hazel Grove",
  "Hemel-Hempstead": "Hemel Hempstead",
  "Hendon": "Hendon",
  "Henley-and-Thame": "Henley and Thame",
  "Hereford-and-South-Herefordshire": "Hereford and South Herefordshire",
  "Herne-Bay-and-Sandwich": "Herne Bay and Sandwich",
  "Hertford-and-Stortford": "Hertford and Stortford",
  "Hertsmere": "Hertsmere",
  "Hexham": "Hexham",
  "Heywood-and-Middleton-North": "Heywood and Middleton North",
  "High-Peak": "High Peak",
  "Hinckley-and-Bosworth": "Hinckley and Bosworth",
  "Hitchin": "Hitchin",
  "Holborn-and-St-Pancras": "Holborn and St Pancras",
  "Honiton-and-Sidmouth": "Honiton and Sidmouth",
  "Hornchurch-and-Upminster": "Hornchurch and Upminster",
  "Hornsey-and-Friern-Barnet": "Hornsey and Friern Barnet",
  "Horsham": "Horsham",
  "Houghton-and-Sunderland-South": "Houghton and Sunderland South",
  "Hove-and-Portslade": "Hove and Portslade",
  "Huddersfield": "Huddersfield",
  "Huntingdon": "Huntingdon",
  "Hyndburn": "Hyndburn",
  "Ilford-North": "Ilford North",
  "Ilford-South": "Ilford South",
  "Inverclyde-and-Renfrewshire-West": "Inverclyde and Renfrewshire West",
  "Inverness-Skye-and-West-Ross-shire": "Inverness Skye and West Ross-shire",
  "Ipswich": "Ipswich",
  "Isle-of-Wight-East": "Isle of Wight East",
  "Isle-of-Wight-West": "Isle of Wight West",
  "Islington-North": "Islington North",
  "Islington-South-and-Finsbury": "Islington South and Finsbury",
  "Jarrow-and-Gateshead-East": "Jarrow and Gateshead East",
  "Keighley-and-Ilkley": "Keighley and Ilkley",
  "Kenilworth-and-Southam": "Kenilworth and Southam",
  "Kensington-and-Bayswater": "Kensington and Bayswater",
  "Kettering": "Kettering",
  "Kilmarnock-and-Loudoun": "Kilmarnock and Loudoun",
  "Kingston-and-Surbiton": "Kingston and Surbiton",
  "Kingston-upon-Hull-East": "Kingston upon Hull East",
  "Kingston-upon-Hull-North-and-Cottingham": "Kingston upon Hull North and Cottingham",
  "Kingston-upon-Hull-West-and-Haltemprice": "Kingston upon Hull West and Haltemprice",
  "Kingswinford-and-South-Staffordshire": "Kingswinford and South Staffordshire",
  "Knowsley": "Knowsley",
  "Lagan-Valley": "Lagan Valley",
  "Lancaster-and-Wyre": "Lancaster and Wyre",
  "Leeds-Central-and-Headingley": "Leeds Central and Headingley",
  "Leeds-East": "Leeds East",
  "Leeds-North-East": "Leeds North East",
  "Leeds-North-West": "Leeds North West",
  "Leeds-South": "Leeds South",
  "Leeds-South-West-and-Morley": "Leeds South West and Morley",
  "Leeds-West-and-Pudsey": "Leeds West and Pudsey",
  "Leicester-East": "Leicester East",
  "Leicester-South": "Leicester South",
  "Leicester-West": "Leicester West",
  "Leigh-and-Atherton": "Leigh and Atherton",
  "Lewes": "Lewes",
  "Lewisham-East": "Lewisham East",
  "Lewisham-North": "Lewisham North",
  "Lewisham-West-and-East-Dulwich": "Lewisham West and East Dulwich",
  "Leyton-and-Wanstead": "Leyton and Wanstead",
  "Lichfield": "Lichfield",
  "Lincoln": "Lincoln",
  "Liverpool-Garston": "Liverpool Garston",
  "Liverpool-Riverside": "Liverpool Riverside",
  "Liverpool-Walton": "Liverpool Walton",
  "Liverpool-Wavertree": "Liverpool Wavertree",
  "Liverpool-West-Derby": "Liverpool West Derby",
  "Livingston": "Livingston",
  "Llanelli": "Llanelli",
  "Lothian-East": "Lothian East",
  "Loughborough": "Loughborough",
  "Louth-and-Horncastle": "Louth and Horncastle",
  "Lowestoft": "Lowestoft",
  "Luton-North": "Luton North",
  "Luton-South-and-South-Bedfordshire": "Luton South and South Bedfordshire",
  "Macclesfield": "Macclesfield",
  "Maidenhead": "Maidenhead",
  "Maidstone-and-Malling": "Maidstone and Malling",
  "Makerfield": "Makerfield",
  "Maldon": "Maldon",
  "Manchester-Central": "Manchester Central",
  "Manchester-Rusholme": "Manchester Rusholme",
  "Manchester-Withington": "Manchester Withington",
  "Mansfield": "Mansfield",
  "Melksham-and-Devizes": "Melksham and Devizes",
  "Melton-and-Syston": "Melton and Syston",
  "Meriden-and-Solihull-East": "Meriden and Solihull East",
  "Merthyr-Tydfil-and-Aberdare": "Merthyr Tydfil and Aberdare",
  "Mid-and-South-Pembrokeshire": "Mid and South Pembrokeshire",
  "Mid-Bedfordshire": "Mid Bedfordshire",
  "Mid-Buckinghamshire": "Mid Buckinghamshire",
  "Mid-Cheshire": "Mid Cheshire",
  "Mid-Derbyshire": "Mid Derbyshire",
  "Middlesbrough-and-Thornaby-East": "Middlesbrough and Thornaby East",
  "Middlesbrough-South-and-East-Cleveland": "Middlesbrough South and East Cleveland",
  "Mid-Dorset-and-North-Poole": "Mid Dorset and North Poole",
  "Mid-Dunbartonshire": "Mid Dunbartonshire",
  "Mid-Leicestershire": "Mid Leicestershire",
  "Midlothian": "Midlothian",
  "Mid-Norfolk": "Mid Norfolk",
  "Mid-Sussex": "Mid Sussex",
  "Mid-Ulster": "Mid Ulster",
  "Milton-Keynes-Central": "Milton Keynes Central",
  "Milton-Keynes-North": "Milton Keynes North",
  "Mitcham-and-Morden": "Mitcham and Morden",
  "Monmouthshire": "Monmouthshire",
  "Montgomeryshire-and-Glyndwr": "Montgomeryshire and Glyndwr",
  "Moray-West-Nairn-and-Strathspey": "Moray West Nairn and Strathspey",
  "Morecambe-and-Lunesdale": "Morecambe and Lunesdale",
  "Motherwell-Wishaw-and-Carluke": "Motherwell Wishaw and Carluke",
  "Na-h-Eileanan-an-Iar": "Na h-Eileanan an Iar",
  "Neath-and-Swansea-East": "Neath and Swansea East",
  "Newark": "Newark",
  "Newbury": "Newbury",
  "Newcastle-under-Lyme": "Newcastle-under-Lyme",
  "Newcastle-upon-Tyne-Central-and-West": "Newcastle upon Tyne Central and West",
  "Newcastle-upon-Tyne-East-and-Wallsend": "Newcastle upon Tyne East and Wallsend",
  "Newcastle-upon-Tyne-North": "Newcastle upon Tyne North",
  "New-Forest-East": "New Forest East",
  "New-Forest-West": "New Forest West",
  "Newport-East": "Newport East",
  "Newport-West-and-Islwyn": "Newport West and Islwyn",
  "Newry-and-Armagh": "Newry and Armagh",
  "Newton-Abbot": "Newton Abbot",
  "Newton-Aycliffe-and-Spennymoor": "Newton Aycliffe and Spennymoor",
  "Normanton-and-Hemsworth": "Normanton and Hemsworth",
  "Northampton-North": "Northampton North",
  "Northampton-South": "Northampton South",
  "North-Antrim": "North Antrim",
  "North-Ayrshire-and-Arran": "North Ayrshire and Arran",
  "North-Bedfordshire": "North Bedfordshire",
  "North-Cornwall": "North Cornwall",
  "North-Cotswolds": "North Cotswolds",
  "North-Devon": "North Devon",
  "North-Dorset": "North Dorset",
  "North-Down": "North Down",
  "North-Durham": "North Durham",
  "North-East-Cambridgeshire": "North East Cambridgeshire",
  "North-East-Derbyshire": "North East Derbyshire",
  "North-East-Fife": "North East Fife",
  "North-East-Hampshire": "North East Hampshire",
  "North-East-Hertfordshire": "North East Hertfordshire",
  "North-East-Somerset-and-Hanham": "North East Somerset and Hanham",
  "North-Herefordshire": "North Herefordshire",
  "North-Norfolk": "North Norfolk",
  "North-Northumberland": "North Northumberland",
  "North-Shropshire": "North Shropshire",
  "North-Somerset": "North Somerset",
  "North-Warwickshire-and-Bedworth": "North Warwickshire and Bedworth",
  "North-West-Cambridgeshire": "North West Cambridgeshire",
  "North-West-Essex": "North West Essex",
  "North-West-Hampshire": "North West Hampshire",
  "North-West-Leicestershire": "North West Leicestershire",
  "North-West-Norfolk": "North West Norfolk",
  "Norwich-North": "Norwich North",
  "Norwich-South": "Norwich South",
  "Nottingham-East": "Nottingham East",
  "Nottingham-North-and-Kimberley": "Nottingham North and Kimberley",
  "Nottingham-South": "Nottingham South",
  "Nuneaton": "Nuneaton",
  "Old-Bexley-and-Sidcup": "Old Bexley and Sidcup",
  "Oldham-East-and-Saddleworth": "Oldham East and Saddleworth",
  "Oldham-West-Chadderton-and-Royton": "Oldham West Chadderton and Royton",
  "Orkney-and-Shetland": "Orkney and Shetland",
  "Orpington": "Orpington",
  "Ossett-and-Denby-Dale": "Ossett and Denby Dale",
  "Oxford-East": "Oxford East",
  "Oxford-West-and-Abingdon": "Oxford West and Abingdon",
  "Paisley-and-Renfrewshire-North": "Paisley and Renfrewshire North",
  "Paisley-and-Renfrewshire-South": "Paisley and Renfrewshire South",
  "Peckham": "Peckham",
  "Pendle-and-Clitheroe": "Pendle and Clitheroe",
  "Penistone-and-Stocksbridge": "Penistone and Stocksbridge",
  "Penrith-and-Solway": "Penrith and Solway",
  "Perth-and-Kinross-shire": "Perth and Kinross-shire",
  "Peterborough": "Peterborough",
  "Plymouth-Moor-View": "Plymouth Moor View",
  "Plymouth-Sutton-and-Devonport": "Plymouth Sutton and Devonport",
  "Pontefract-Castleford-and-Knottingley": "Pontefract Castleford and Knottingley",
  "Pontypridd": "Pontypridd",
  "Poole": "Poole",
  "Poplar-and-Limehouse": "Poplar and Limehouse",
  "Portsmouth-North": "Portsmouth North",
  "Portsmouth-South": "Portsmouth South",
  "Preston": "Preston",
  "Putney": "Putney",
  "Queens-Park-and-Maida-Vale": "Queens Park and Maida Vale",
  "Rawmarsh-and-Conisbrough": "Rawmarsh and Conisbrough",
  "Rayleigh-and-Wickford": "Rayleigh and Wickford",
  "Reading-Central": "Reading Central",
  "Reading-West-and-Mid-Berkshire": "Reading West and Mid Berkshire",
  "Redcar": "Redcar",
  "Redditch": "Redditch",
  "Reigate": "Reigate",
  "Rhondda-and-Ogmore": "Rhondda and Ogmore",
  "Ribble-Valley": "Ribble Valley",
  "Richmond-and-Northallerton": "Richmond and Northallerton",
  "Richmond-Park": "Richmond Park",
  "Rochdale": "Rochdale",
  "Rochester-and-Strood": "Rochester and Strood",
  "Romford": "Romford",
  "Romsey-and-Southampton-North": "Romsey and Southampton North",
  "Rossendale-and-Darwen": "Rossendale and Darwen",
  "Rotherham": "Rotherham",
  "Rother-Valley": "Rother Valley",
  "Rugby": "Rugby",
  "Ruislip-Northwood-and-Pinner": "Ruislip Northwood and Pinner",
  "Runcorn-and-Helsby": "Runcorn and Helsby",
  "Runnymede-and-Weybridge": "Runnymede and Weybridge",
  "Rushcliffe": "Rushcliffe",
  "Rutherglen": "Rutherglen",
  "Rutland-and-Stamford": "Rutland and Stamford",
  "Salford": "Salford",
  "Salisbury": "Salisbury",
  "Scarborough-and-Whitby": "Scarborough and Whitby",
  "Scunthorpe": "Scunthorpe",
  "Sefton-Central": "Sefton Central",
  "Selby": "Selby",
  "Sevenoaks": "Sevenoaks",
  "Sheffield-Brightside-and-Hillsborough": "Sheffield Brightside and Hillsborough",
  "Sheffield-Central": "Sheffield Central",
  "Sheffield-Hallam": "Sheffield Hallam",
  "Sheffield-Heeley": "Sheffield Heeley",
  "Sheffield-South-East": "Sheffield South East",
  "Sherwood-Forest": "Sherwood Forest",
  "Shipley": "Shipley",
  "Shrewsbury": "Shrewsbury",
  "Sittingbourne-and-Sheppey": "Sittingbourne and Sheppey",
  "Skipton-and-Ripon": "Skipton and Ripon",
  "Sleaford-and-North-Hykeham": "Sleaford and North Hykeham",
  "Slough": "Slough",
  "Smethwick": "Smethwick",
  "Solihull-West-and-Shirley": "Solihull West and Shirley",
  "Southampton-Itchen": "Southampton Itchen",
  "Southampton-Test": "Southampton Test",
  "South-Antrim": "South Antrim",
  "South-Basildon-and-East-Thurrock": "South Basildon and East Thurrock",
  "South-Cambridgeshire": "South Cambridgeshire",
  "South-Cotswolds": "South Cotswolds",
  "South-Derbyshire": "South Derbyshire",
  "South-Devon": "South Devon",
  "South-Dorset": "South Dorset",
  "South-Down": "South Down",
  "South-East-Cornwall": "South East Cornwall",
  "Southend-East-and-Rochford": "Southend East and Rochford",
  "Southend-West-and-Leigh": "Southend West and Leigh",
  "Southgate-and-Wood-Green": "Southgate and Wood Green",
  "South-Holland-and-The-Deepings": "South Holland and The Deepings",
  "South-Leicestershire": "South Leicestershire",
  "South-Norfolk": "South Norfolk",
  "South-Northamptonshire": "South Northamptonshire",
  "Southport": "Southport",
  "South-Ribble": "South Ribble",
  "South-Shields": "South Shields",
  "South-Shropshire": "South Shropshire",
  "South-Suffolk": "South Suffolk",
  "South-West-Devon": "South West Devon",
  "South-West-Hertfordshire": "South West Hertfordshire",
  "South-West-Norfolk": "South West Norfolk",
  "South-West-Wiltshire": "South West Wiltshire",
  "Spelthorne": "Spelthorne",
  "Spen-Valley": "Spen Valley",
  "Stafford": "Stafford",
  "Staffordshire-Moorlands": "Staffordshire Moorlands",
  "St-Albans": "St Albans",
  "Stalybridge-and-Hyde": "Stalybridge and Hyde",
  "St-Austell-and-Newquay": "St Austell and Newquay",
  "Stevenage": "Stevenage",
  "St-Helens-North": "St Helens North",
  "St-Helens-South-and-Whiston": "St Helens South and Whiston",
  "Stirling-and-Strathallan": "Stirling and Strathallan",
  "St-Ives": "St Ives",
  "St-Neots-and-Mid-Cambridgeshire": "St Neots and Mid Cambridgeshire",
  "Stockport": "Stockport",
  "Stockton-North": "Stockton North",
  "Stockton-West": "Stockton West",
  "Stoke-on-Trent-Central": "Stoke-on-Trent Central",
  "Stoke-on-Trent-North": "Stoke-on-Trent North",
  "Stoke-on-Trent-South": "Stoke-on-Trent South",
  "Stone-Great-Wyrley-and-Penkridge": "Stone Great Wyrley and Penkridge",
  "Stourbridge": "Stourbridge",
  "Strangford": "Strangford",
  "Stratford-and-Bow": "Stratford and Bow",
  "Stratford-on-Avon": "Stratford-on-Avon",
  "Streatham-and-Croydon-North": "Streatham and Croydon North",
  "Stretford-and-Urmston": "Stretford and Urmston",
  "Stroud": "Stroud",
  "Suffolk-Coastal": "Suffolk Coastal",
  "Sunderland-Central": "Sunderland Central",
  "Surrey-Heath": "Surrey Heath",
  "Sussex-Weald": "Sussex Weald",
  "Sutton-and-Cheam": "Sutton and Cheam",
  "Sutton-Coldfield": "Sutton Coldfield",
  "Swansea-West": "Swansea West",
  "Swindon-North": "Swindon North",
  "Swindon-South": "Swindon South",
  "Tamworth": "Tamworth",
  "Tatton": "Tatton",
  "Taunton-and-Wellington": "Taunton and Wellington",
  "Telford": "Telford",
  "Tewkesbury": "Tewkesbury",
  "The-Wrekin": "The Wrekin",
  "Thirsk-and-Malton": "Thirsk and Malton",
  "Thornbury-and-Yate": "Thornbury and Yate",
  "Thurrock": "Thurrock",
  "Tipton-and-Wednesbury": "Tipton and Wednesbury",
  "Tiverton-and-Minehead": "Tiverton and Minehead",
  "Tonbridge": "Tonbridge",
  "Tooting": "Tooting",
  "Torbay": "Torbay",
  "Torfaen": "Torfaen",
  "Torridge-and-Tavistock": "Torridge and Tavistock",
  "Tottenham": "Tottenham",
  "Truro-and-Falmouth": "Truro and Falmouth",
  "Tunbridge-Wells": "Tunbridge Wells",
  "Twickenham": "Twickenham",
  "Tynemouth": "Tynemouth",
  "Upper-Bann": "Upper Bann",
  "Uxbridge-and-South-Ruislip": "Uxbridge and South Ruislip",
  "Vale-of-Glamorgan": "Vale of Glamorgan",
  "Vauxhall-and-Camberwell-Green": "Vauxhall and Camberwell Green",
  "Wakefield-and-Rothwell": "Wakefield and Rothwell",
  "Wallasey": "Wallasey",
  "Walsall-and-Bloxwich": "Walsall and Bloxwich",
  "Walthamstow": "Walthamstow",
  "Warrington-North": "Warrington North",
  "Warrington-South": "Warrington South",
  "Warwick-and-Leamington": "Warwick and Leamington",
  "Washington-and-Gateshead-South": "Washington and Gateshead South",
  "Watford": "Watford",
  "Waveney-Valley": "Waveney Valley",
  "Weald-of-Kent": "Weald of Kent",
  "Wellingborough-and-Rushden": "Wellingborough and Rushden",
  "Wells-and-Mendip-Hills": "Wells and Mendip Hills",
  "Welwyn-Hatfield": "Welwyn Hatfield",
  "West-Aberdeenshire-and-Kincardine": "West Aberdeenshire and Kincardine",
  "West-Bromwich": "West Bromwich",
  "West-Dorset": "West Dorset",
  "West-Dunbartonshire": "West Dunbartonshire",
  "West-Ham-and-Beckton": "West Ham and Beckton",
  "West-Lancashire": "West Lancashire",
  "Westmorland-and-Lonsdale": "Westmorland and Lonsdale",
  "Weston-super-Mare": "Weston-super-Mare",
  "West-Suffolk": "West Suffolk",
  "West-Tyrone": "West Tyrone",
  "West-Worcestershire": "West Worcestershire",
  "Wetherby-and-Easingwold": "Wetherby and Easingwold",
  "Whitehaven-and-Workington": "Whitehaven and Workington",
  "Widnes-and-Halewood": "Widnes and Halewood",
  "Wigan": "Wigan",
  "Wimbledon": "Wimbledon",
  "Winchester": "Winchester",
  "Windsor": "Windsor",
  "Wirral-West": "Wirral West",
  "Witham": "Witham",
  "Witney": "Witney",
  "Woking": "Woking",
  "Wokingham": "Wokingham",
  "Wolverhampton-North-East": "Wolverhampton North East",
  "Wolverhampton-South-East": "Wolverhampton South East",
  "Wolverhampton-West": "Wolverhampton West",
  "Worcester": "Worcester",
  "Worsley-and-Eccles": "Worsley and Eccles",
  "Worthing-West": "Worthing West",
  "Wrexham": "Wrexham",
  "Wycombe": "Wycombe",
  "Wyre-Forest": "Wyre Forest",
  "Wythenshawe-and-Sale-East": "Wythenshawe and Sale East",
  "Yeovil": "Yeovil",
  "Ynys-Mon": "Ynys Mon",
  "York-Central": "York Central",
  "York-Outer": "York Outer"
}
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
	  const regionNameToID = { //Move Constituency Names + NPV SECOND ONE HYPENHATED
  "Aberafan Maesteg": "Aberafan-Maesteg",
  "Aberdeen North": "Aberdeen-North",
  "Aberdeenshire North and Moray East": "Aberdeenshire-North-and-Moray-East",
  "Aberdeen South": "Aberdeen-South",
  "Airdrie and Shotts": "Airdrie-and-Shotts",
  "Aldershot": "Aldershot",
  "Aldridge-Brownhills": "Aldridge-Brownhills",
  "Alloa and Grangemouth": "Alloa-and-Grangemouth",
  "Altrincham and Sale West": "Altrincham-and-Sale-West",
  "Alyn and Deeside": "Alyn-and-Deeside",
  "Amber Valley": "Amber-Valley",
  "Angus and Perthshire Glens": "Angus-and-Perthshire-Glens",
  "Arbroath and Broughty Ferry": "Arbroath-and-Broughty-Ferry",
  "Argyll Bute and South Lochaber": "Argyll-Bute-and-South-Lochaber",
  "Arundel and South Downs": "Arundel-and-South-Downs",
  "Ashfield": "Ashfield",
  "Ashford": "Ashford",
  "Ashton-under-Lyne": "Ashton-under-Lyne",
  "Aylesbury": "Aylesbury",
  "Ayr Carrick and Cumnock": "Ayr-Carrick-and-Cumnock",
  "Banbury": "Banbury",
  "Bangor Aberconwy": "Bangor-Aberconwy",
  "Barking": "Barking",
  "Barnsley North": "Barnsley-North",
  "Barnsley South": "Barnsley-South",
  "Barrow and Furness": "Barrow-and-Furness",
  "Basildon and Billericay": "Basildon-and-Billericay",
  "Basingstoke": "Basingstoke",
  "Bassetlaw": "Bassetlaw",
  "Bath": "Bath",
  "Bathgate and Linlithgow": "Bathgate-and-Linlithgow",
  "Battersea": "Battersea",
  "Beaconsfield": "Beaconsfield",
  "Beckenham and Penge": "Beckenham-and-Penge",
  "Bedford": "Bedford",
  "Belfast East": "Belfast-East",
  "Belfast North": "Belfast-North",
  "Belfast South and Mid Down": "Belfast-South-and-Mid-Down",
  "Belfast West": "Belfast-West",
  "Bermondsey and Old Southwark": "Bermondsey-and-Old-Southwark",
  "Berwickshire Roxburgh and Selkirk": "Berwickshire-Roxburgh-and-Selkirk",
  "Bethnal Green and Stepney": "Bethnal-Green-and-Stepney",
  "Beverley and Holderness": "Beverley-and-Holderness",
  "Bexhill and Battle": "Bexhill-and-Battle",
  "Bexleyheath and Crayford": "Bexleyheath-and-Crayford",
  "Bicester and Woodstock": "Bicester-and-Woodstock",
  "Birkenhead": "Birkenhead",
  "Birmingham Edgbaston": "Birmingham-Edgbaston",
  "Birmingham Erdington": "Birmingham-Erdington",
  "Birmingham Hall Green and Moseley": "Birmingham-Hall-Green-and-Moseley",
  "Birmingham Hodge Hill and Solihull North": "Birmingham-Hodge-Hill-and-Solihull-North",
  "Birmingham Ladywood": "Birmingham-Ladywood",
  "Birmingham Northfield": "Birmingham-Northfield",
  "Birmingham Perry Barr": "Birmingham-Perry-Barr",
  "Birmingham Selly Oak": "Birmingham-Selly-Oak",
  "Birmingham Yardley": "Birmingham-Yardley",
  "Bishop Auckland": "Bishop-Auckland",
  "Blackburn": "Blackburn",
  "Blackley and Middleton South": "Blackley-and-Middleton-South",
  "Blackpool North and Fleetwood": "Blackpool-North-and-Fleetwood",
  "Blackpool South": "Blackpool-South",
  "Blaenau Gwent and Rhymney": "Blaenau-Gwent-and-Rhymney",
  "Blaydon and Consett": "Blaydon-and-Consett",
  "Blyth and Ashington": "Blyth-and-Ashington",
  "Bognor Regis and Littlehampton": "Bognor-Regis-and-Littlehampton",
  "Bolsover": "Bolsover",
  "Bolton North East": "Bolton-North-East",
  "Bolton South and Walkden": "Bolton-South-and-Walkden",
  "Bolton West": "Bolton-West",
  "Bootle": "Bootle",
  "Boston and Skegness": "Boston-and-Skegness",
  "Bournemouth East": "Bournemouth-East",
  "Bournemouth West": "Bournemouth-West",
  "Bracknell": "Bracknell",
  "Bradford East": "Bradford-East",
  "Bradford South": "Bradford-South",
  "Bradford West": "Bradford-West",
  "Braintree": "Braintree",
  "Brecon Radnor and Cwm Tawe": "Brecon-Radnor-and-Cwm-Tawe",
  "Brent East": "Brent-East",
  "Brentford and Isleworth": "Brentford-and-Isleworth",
  "Brent West": "Brent-West",
  "Brentwood and Ongar": "Brentwood-and-Ongar",
  "Bridgend": "Bridgend",
  "Bridgwater": "Bridgwater",
  "Bridlington and The Wolds": "Bridlington-and-The-Wolds",
  "Brigg and Immingham": "Brigg-and-Immingham",
  "Brighton Kemptown and Peacehaven": "Brighton-Kemptown-and-Peacehaven",
  "Brighton Pavilion": "Brighton-Pavilion",
  "Bristol Central": "Bristol-Central",
  "Bristol East": "Bristol-East",
  "Bristol North East": "Bristol-North-East",
  "Bristol North West": "Bristol-North-West",
  "Bristol South": "Bristol-South",
  "Broadland and Fakenham": "Broadland-and-Fakenham",
  "Bromley and Biggin Hill": "Bromley-and-Biggin-Hill",
  "Bromsgrove": "Bromsgrove",
  "Broxbourne": "Broxbourne",
  "Broxtowe": "Broxtowe",
  "Buckingham and Bletchley": "Buckingham-and-Bletchley",
  "Burnley": "Burnley",
  "Burton and Uttoxeter": "Burton-and-Uttoxeter",
  "Bury North": "Bury-North",
  "Bury South": "Bury-South",
  "Bury St Edmunds and Stowmarket": "Bury-St-Edmunds-and-Stowmarket",
  "Caerfyrddin": "Caerfyrddin",
  "Caerphilly": "Caerphilly",
  "Caithness Sutherland and Easter Ross": "Caithness-Sutherland-and-Easter-Ross",
  "Calder Valley": "Calder-Valley",
  "Camborne and Redruth": "Camborne-and-Redruth",
  "Cambridge": "Cambridge",
  "Cannock Chase": "Cannock-Chase",
  "Canterbury": "Canterbury",
  "Cardiff East": "Cardiff-East",
  "Cardiff North": "Cardiff-North",
  "Cardiff South and Penarth": "Cardiff-South-and-Penarth",
  "Cardiff West": "Cardiff-West",
  "Carlisle": "Carlisle",
  "Carshalton and Wallington": "Carshalton-and-Wallington",
  "Castle Point": "Castle-Point",
  "Central Ayrshire": "Central-Ayrshire",
  "Central Devon": "Central-Devon",
  "Central Suffolk and North Ipswich": "Central-Suffolk-and-North-Ipswich",
  "Ceredigion Preseli": "Ceredigion-Preseli",
  "Chatham and Aylesford": "Chatham-and-Aylesford",
  "Cheadle": "Cheadle",
  "Chelmsford": "Chelmsford",
  "Chelsea and Fulham": "Chelsea-and-Fulham",
  "Cheltenham": "Cheltenham",
  "Chesham and Amersham": "Chesham-and-Amersham",
  "Chesterfield": "Chesterfield",
  "Chester North and Neston": "Chester-North-and-Neston",
  "Chester South and Eddisbury": "Chester-South-and-Eddisbury",
  "Chichester": "Chichester",
  "Chingford and Woodford Green": "Chingford-and-Woodford-Green",
  "Chippenham": "Chippenham",
  "Chipping Barnet": "Chipping-Barnet",
  "Chorley": "Chorley",
  "Christchurch": "Christchurch",
  "Cities of London and Westminster": "Cities-of-London-and-Westminster",
  "City of Durham": "City-of-Durham",
  "Clacton": "Clacton",
  "Clapham and Brixton Hill": "Clapham-and-Brixton-Hill",
  "Clwyd East": "Clwyd-East",
  "Clwyd North": "Clwyd-North",
  "Coatbridge and Bellshill": "Coatbridge-and-Bellshill",
  "Colchester": "Colchester",
  "Colne Valley": "Colne-Valley",
  "Congleton": "Congleton",
  "Corby and East Northamptonshire": "Corby-and-East-Northamptonshire",
  "Coventry East": "Coventry-East",
  "Coventry North West": "Coventry-North-West",
  "Coventry South": "Coventry-South",
  "Cowdenbeath and Kirkcaldy": "Cowdenbeath-and-Kirkcaldy",
  "Cramlington and Killingworth": "Cramlington-and-Killingworth",
  "Crawley": "Crawley",
  "Crewe and Nantwich": "Crewe-and-Nantwich",
  "Croydon East": "Croydon-East",
  "Croydon South": "Croydon-South",
  "Croydon West": "Croydon-West",
  "Cumbernauld and Kirkintilloch": "Cumbernauld-and-Kirkintilloch",
  "Dagenham and Rainham": "Dagenham-and-Rainham",
  "Darlington": "Darlington",
  "Dartford": "Dartford",
  "Daventry": "Daventry",
  "Derby North": "Derby-North",
  "Derbyshire Dales": "Derbyshire-Dales",
  "Derby South": "Derby-South",
  "Dewsbury and Batley": "Dewsbury-and-Batley",
  "Didcot and Wantage": "Didcot-and-Wantage",
  "Doncaster Central": "Doncaster-Central",
  "Doncaster East and the Isle of Axholme": "Doncaster-East-and-the-Isle-of-Axholme",
  "Doncaster North": "Doncaster-North",
  "Dorking and Horley": "Dorking-and-Horley",
  "Dover and Deal": "Dover-and-Deal",
  "Droitwich and Evesham": "Droitwich-and-Evesham",
  "Dudley": "Dudley",
  "Dulwich and West Norwood": "Dulwich-and-West-Norwood",
  "Dumfries and Galloway": "Dumfries-and-Galloway",
  "Dumfriesshire Clydesdale and Tweeddale": "Dumfriesshire-Clydesdale-and-Tweeddale",
  "Dundee Central": "Dundee-Central",
  "Dunfermline and Dollar": "Dunfermline-and-Dollar",
  "Dunstable and Leighton Buzzard": "Dunstable-and-Leighton-Buzzard",
  "Dwyfor Meirionnydd": "Dwyfor-Meirionnydd",
  "Ealing Central and Acton": "Ealing-Central-and-Acton",
  "Ealing North": "Ealing-North",
  "Ealing Southall": "Ealing-Southall",
  "Earley and Woodley": "Earley-and-Woodley",
  "Easington": "Easington",
  "East Antrim": "East-Antrim",
  "Eastbourne": "Eastbourne",
  "East Grinstead and Uckfield": "East-Grinstead-and-Uckfield",
  "East Ham": "East-Ham",
  "East Hampshire": "East-Hampshire",
  "East Kilbride and Strathaven": "East-Kilbride-and-Strathaven",
  "Eastleigh": "Eastleigh",
  "East Londonderry": "East-Londonderry",
  "East Renfrewshire": "East-Renfrewshire",
  "East Surrey": "East-Surrey",
  "East Thanet": "East-Thanet",
  "East Wiltshire": "East-Wiltshire",
  "East Worthing and Shoreham": "East-Worthing-and-Shoreham",
  "Edinburgh East and Musselburgh": "Edinburgh-East-and-Musselburgh",
  "Edinburgh North and Leith": "Edinburgh-North-and-Leith",
  "Edinburgh South": "Edinburgh-South",
  "Edinburgh South West": "Edinburgh-South-West",
  "Edinburgh West": "Edinburgh-West",
  "Edmonton and Winchmore Hill": "Edmonton-and-Winchmore-Hill",
  "Ellesmere Port and Bromborough": "Ellesmere-Port-and-Bromborough",
  "Eltham and Chislehurst": "Eltham-and-Chislehurst",
  "Ely and East Cambridgeshire": "Ely-and-East-Cambridgeshire",
  "Enfield North": "Enfield-North",
  "Epping Forest": "Epping-Forest",
  "Epsom and Ewell": "Epsom-and-Ewell",
  "Erewash": "Erewash",
  "Erith and Thamesmead": "Erith-and-Thamesmead",
  "Esher and Walton": "Esher-and-Walton",
  "Exeter": "Exeter",
  "Exmouth and Exeter East": "Exmouth-and-Exeter-East",
  "Falkirk": "Falkirk",
  "Fareham and Waterlooville": "Fareham-and-Waterlooville",
  "Farnham and Bordon": "Farnham-and-Bordon",
  "Faversham and Mid Kent": "Faversham-and-Mid-Kent",
  "Feltham and Heston": "Feltham-and-Heston",
  "Fermanagh and South Tyrone": "Fermanagh-and-South-Tyrone",
  "Filton and Bradley Stoke": "Filton-and-Bradley-Stoke",
  "Finchley and Golders Green": "Finchley-and-Golders-Green",
  "Folkestone and Hythe": "Folkestone-and-Hythe",
  "Forest of Dean": "Forest-of-Dean",
  "Foyle": "Foyle",
  "Frome and East Somerset": "Frome-and-East-Somerset",
  "Fylde": "Fylde",
  "Gainsborough": "Gainsborough",
  "Gateshead Central and Whickham": "Gateshead-Central-and-Whickham",
  "Gedling": "Gedling",
  "Gillingham and Rainham": "Gillingham-and-Rainham",
  "Glasgow East": "Glasgow-East",
  "Glasgow North": "Glasgow-North",
  "Glasgow North East": "Glasgow-North-East",
  "Glasgow South": "Glasgow-South",
  "Glasgow South West": "Glasgow-South-West",
  "Glasgow West": "Glasgow-West",
  "Glastonbury and Somerton": "Glastonbury-and-Somerton",
  "Glenrothes and Mid Fife": "Glenrothes-and-Mid-Fife",
  "Gloucester": "Gloucester",
  "Godalming and Ash": "Godalming-and-Ash",
  "Goole and Pocklington": "Goole-and-Pocklington",
  "Gordon and Buchan": "Gordon-and-Buchan",
  "Gorton and Denton": "Gorton-and-Denton",
  "Gosport": "Gosport",
  "Gower": "Gower",
  "Grantham and Bourne": "Grantham-and-Bourne",
  "Gravesham": "Gravesham",
  "Great Grimsby and Cleethorpes": "Great-Grimsby-and-Cleethorpes",
  "Great Yarmouth": "Great-Yarmouth",
  "Greenwich and Woolwich": "Greenwich-and-Woolwich",
  "Guildford": "Guildford",
  "Hackney North and Stoke Newington": "Hackney-North-and-Stoke-Newington",
  "Hackney South and Shoreditch": "Hackney-South-and-Shoreditch",
  "Halesowen": "Halesowen",
  "Halifax": "Halifax",
  "Hamble Valley": "Hamble-Valley",
  "Hamilton and Clyde Valley": "Hamilton-and-Clyde-Valley",
  "Hammersmith and Chiswick": "Hammersmith-and-Chiswick",
  "Hampstead and Highgate": "Hampstead-and-Highgate",
  "Harborough Oadby and Wigston": "Harborough-Oadby-and-Wigston",
  "Harlow": "Harlow",
  "Harpenden and Berkhamsted": "Harpenden-and-Berkhamsted",
  "Harrogate and Knaresborough": "Harrogate-and-Knaresborough",
  "Harrow East": "Harrow-East",
  "Harrow West": "Harrow-West",
  "Hartlepool": "Hartlepool",
  "Harwich and North Essex": "Harwich-and-North-Essex",
  "Hastings and Rye": "Hastings-and-Rye",
  "Havant": "Havant",
  "Hayes and Harlington": "Hayes-and-Harlington",
  "Hazel Grove": "Hazel-Grove",
  "Hemel Hempstead": "Hemel-Hempstead",
  "Hendon": "Hendon",
  "Henley and Thame": "Henley-and-Thame",
  "Hereford and South Herefordshire": "Hereford-and-South-Herefordshire",
  "Herne Bay and Sandwich": "Herne-Bay-and-Sandwich",
  "Hertford and Stortford": "Hertford-and-Stortford",
  "Hertsmere": "Hertsmere",
  "Hexham": "Hexham",
  "Heywood and Middleton North": "Heywood-and-Middleton-North",
  "High Peak": "High-Peak",
  "Hinckley and Bosworth": "Hinckley-and-Bosworth",
  "Hitchin": "Hitchin",
  "Holborn and St Pancras": "Holborn-and-St-Pancras",
  "Honiton and Sidmouth": "Honiton-and-Sidmouth",
  "Hornchurch and Upminster": "Hornchurch-and-Upminster",
  "Hornsey and Friern Barnet": "Hornsey-and-Friern-Barnet",
  "Horsham": "Horsham",
  "Houghton and Sunderland South": "Houghton-and-Sunderland-South",
  "Hove and Portslade": "Hove-and-Portslade",
  "Huddersfield": "Huddersfield",
  "Huntingdon": "Huntingdon",
  "Hyndburn": "Hyndburn",
  "Ilford North": "Ilford-North",
  "Ilford South": "Ilford-South",
  "Inverclyde and Renfrewshire West": "Inverclyde-and-Renfrewshire-West",
  "Inverness Skye and West Ross-shire": "Inverness-Skye-and-West-Ross-shire",
  "Ipswich": "Ipswich",
  "Isle of Wight East": "Isle-of-Wight-East",
  "Isle of Wight West": "Isle-of-Wight-West",
  "Islington North": "Islington-North",
  "Islington South and Finsbury": "Islington-South-and-Finsbury",
  "Jarrow and Gateshead East": "Jarrow-and-Gateshead-East",
  "Keighley and Ilkley": "Keighley-and-Ilkley",
  "Kenilworth and Southam": "Kenilworth-and-Southam",
  "Kensington and Bayswater": "Kensington-and-Bayswater",
  "Kettering": "Kettering",
  "Kilmarnock and Loudoun": "Kilmarnock-and-Loudoun",
  "Kingston and Surbiton": "Kingston-and-Surbiton",
  "Kingston upon Hull East": "Kingston-upon-Hull-East",
  "Kingston upon Hull North and Cottingham": "Kingston-upon-Hull-North-and-Cottingham",
  "Kingston upon Hull West and Haltemprice": "Kingston-upon-Hull-West-and-Haltemprice",
  "Kingswinford and South Staffordshire": "Kingswinford-and-South-Staffordshire",
  "Knowsley": "Knowsley",
  "Lagan Valley": "Lagan-Valley",
  "Lancaster and Wyre": "Lancaster-and-Wyre",
  "Leeds Central and Headingley": "Leeds-Central-and-Headingley",
  "Leeds East": "Leeds-East",
  "Leeds North East": "Leeds-North-East",
  "Leeds North West": "Leeds-North-West",
  "Leeds South": "Leeds-South",
  "Leeds South West and Morley": "Leeds-South-West-and-Morley",
  "Leeds West and Pudsey": "Leeds-West-and-Pudsey",
  "Leicester East": "Leicester-East",
  "Leicester South": "Leicester-South",
  "Leicester West": "Leicester-West",
  "Leigh and Atherton": "Leigh-and-Atherton",
  "Lewes": "Lewes",
  "Lewisham East": "Lewisham-East",
  "Lewisham North": "Lewisham-North",
  "Lewisham West and East Dulwich": "Lewisham-West-and-East-Dulwich",
  "Leyton and Wanstead": "Leyton-and-Wanstead",
  "Lichfield": "Lichfield",
  "Lincoln": "Lincoln",
  "Liverpool Garston": "Liverpool-Garston",
  "Liverpool Riverside": "Liverpool-Riverside",
  "Liverpool Walton": "Liverpool-Walton",
  "Liverpool Wavertree": "Liverpool-Wavertree",
  "Liverpool West Derby": "Liverpool-West-Derby",
  "Livingston": "Livingston",
  "Llanelli": "Llanelli",
  "Lothian East": "Lothian-East",
  "Loughborough": "Loughborough",
  "Louth and Horncastle": "Louth-and-Horncastle",
  "Lowestoft": "Lowestoft",
  "Luton North": "Luton-North",
  "Luton South and South Bedfordshire": "Luton-South-and-South-Bedfordshire",
  "Macclesfield": "Macclesfield",
  "Maidenhead": "Maidenhead",
  "Maidstone and Malling": "Maidstone-and-Malling",
  "Makerfield": "Makerfield",
  "Maldon": "Maldon",
  "Manchester Central": "Manchester-Central",
  "Manchester Rusholme": "Manchester-Rusholme",
  "Manchester Withington": "Manchester-Withington",
  "Mansfield": "Mansfield",
  "Melksham and Devizes": "Melksham-and-Devizes",
  "Melton and Syston": "Melton-and-Syston",
  "Meriden and Solihull East": "Meriden-and-Solihull-East",
  "Merthyr Tydfil and Aberdare": "Merthyr-Tydfil-and-Aberdare",
  "Mid and South Pembrokeshire": "Mid-and-South-Pembrokeshire",
  "Mid Bedfordshire": "Mid-Bedfordshire",
  "Mid Buckinghamshire": "Mid-Buckinghamshire",
  "Mid Cheshire": "Mid-Cheshire",
  "Mid Derbyshire": "Mid-Derbyshire",
  "Middlesbrough and Thornaby East": "Middlesbrough-and-Thornaby-East",
  "Middlesbrough South and East Cleveland": "Middlesbrough-South-and-East-Cleveland",
  "Mid Dorset and North Poole": "Mid-Dorset-and-North-Poole",
  "Mid Dunbartonshire": "Mid-Dunbartonshire",
  "Mid Leicestershire": "Mid-Leicestershire",
  "Midlothian": "Midlothian",
  "Mid Norfolk": "Mid-Norfolk",
  "Mid Sussex": "Mid-Sussex",
  "Mid Ulster": "Mid-Ulster",
  "Milton Keynes Central": "Milton-Keynes-Central",
  "Milton Keynes North": "Milton-Keynes-North",
  "Mitcham and Morden": "Mitcham-and-Morden",
  "Monmouthshire": "Monmouthshire",
  "Montgomeryshire and Glyndwr": "Montgomeryshire-and-Glyndwr",
  "Moray West Nairn and Strathspey": "Moray-West-Nairn-and-Strathspey",
  "Morecambe and Lunesdale": "Morecambe-and-Lunesdale",
  "Motherwell Wishaw and Carluke": "Motherwell-Wishaw-and-Carluke",
  "Na h-Eileanan an Iar": "Na-h-Eileanan-an-Iar",
  "Neath and Swansea East": "Neath-and-Swansea-East",
  "Newark": "Newark",
  "Newbury": "Newbury",
  "Newcastle-under-Lyme": "Newcastle-under-Lyme",
  "Newcastle upon Tyne Central and West": "Newcastle-upon-Tyne-Central-and-West",
  "Newcastle upon Tyne East and Wallsend": "Newcastle-upon-Tyne-East-and-Wallsend",
  "Newcastle upon Tyne North": "Newcastle-upon-Tyne-North",
  "New Forest East": "New-Forest-East",
  "New Forest West": "New-Forest-West",
  "Newport East": "Newport-East",
  "Newport West and Islwyn": "Newport-West-and-Islwyn",
  "Newry and Armagh": "Newry-and-Armagh",
  "Newton Abbot": "Newton-Abbot",
  "Newton Aycliffe and Spennymoor": "Newton-Aycliffe-and-Spennymoor",
  "Normanton and Hemsworth": "Normanton-and-Hemsworth",
  "Northampton North": "Northampton-North",
  "Northampton South": "Northampton-South",
  "North Antrim": "North-Antrim",
  "North Ayrshire and Arran": "North-Ayrshire-and-Arran",
  "North Bedfordshire": "North-Bedfordshire",
  "North Cornwall": "North-Cornwall",
  "North Cotswolds": "North-Cotswolds",
  "North Devon": "North-Devon",
  "North Dorset": "North-Dorset",
  "North Down": "North-Down",
  "North Durham": "North-Durham",
  "North East Cambridgeshire": "North-East-Cambridgeshire",
  "North East Derbyshire": "North-East-Derbyshire",
  "North East Fife": "North-East-Fife",
  "North East Hampshire": "North-East-Hampshire",
  "North East Hertfordshire": "North-East-Hertfordshire",
  "North East Somerset and Hanham": "North-East-Somerset-and-Hanham",
  "North Herefordshire": "North-Herefordshire",
  "North Norfolk": "North-Norfolk",
  "North Northumberland": "North-Northumberland",
  "North Shropshire": "North-Shropshire",
  "North Somerset": "North-Somerset",
  "North Warwickshire and Bedworth": "North-Warwickshire-and-Bedworth",
  "North West Cambridgeshire": "North-West-Cambridgeshire",
  "North West Essex": "North-West-Essex",
  "North West Hampshire": "North-West-Hampshire",
  "North West Leicestershire": "North-West-Leicestershire",
  "North West Norfolk": "North-West-Norfolk",
  "Norwich North": "Norwich-North",
  "Norwich South": "Norwich-South",
  "Nottingham East": "Nottingham-East",
  "Nottingham North and Kimberley": "Nottingham-North-and-Kimberley",
  "Nottingham South": "Nottingham-South",
  "Nuneaton": "Nuneaton",
  "Old Bexley and Sidcup": "Old-Bexley-and-Sidcup",
  "Oldham East and Saddleworth": "Oldham-East-and-Saddleworth",
  "Oldham West Chadderton and Royton": "Oldham-West-Chadderton-and-Royton",
  "Orkney and Shetland": "Orkney-and-Shetland",
  "Orpington": "Orpington",
  "Ossett and Denby Dale": "Ossett-and-Denby-Dale",
  "Oxford East": "Oxford-East",
  "Oxford West and Abingdon": "Oxford-West-and-Abingdon",
  "Paisley and Renfrewshire North": "Paisley-and-Renfrewshire-North",
  "Paisley and Renfrewshire South": "Paisley-and-Renfrewshire-South",
  "Peckham": "Peckham",
  "Pendle and Clitheroe": "Pendle-and-Clitheroe",
  "Penistone and Stocksbridge": "Penistone-and-Stocksbridge",
  "Penrith and Solway": "Penrith-and-Solway",
  "Perth and Kinross-shire": "Perth-and-Kinross-shire",
  "Peterborough": "Peterborough",
  "Plymouth Moor View": "Plymouth-Moor-View",
  "Plymouth Sutton and Devonport": "Plymouth-Sutton-and-Devonport",
  "Pontefract Castleford and Knottingley": "Pontefract-Castleford-and-Knottingley",
  "Pontypridd": "Pontypridd",
  "Poole": "Poole",
  "Poplar and Limehouse": "Poplar-and-Limehouse",
  "Portsmouth North": "Portsmouth-North",
  "Portsmouth South": "Portsmouth-South",
  "Preston": "Preston",
  "Putney": "Putney",
  "Queens Park and Maida Vale": "Queens-Park-and-Maida-Vale",
  "Rawmarsh and Conisbrough": "Rawmarsh-and-Conisbrough",
  "Rayleigh and Wickford": "Rayleigh-and-Wickford",
  "Reading Central": "Reading-Central",
  "Reading West and Mid Berkshire": "Reading-West-and-Mid-Berkshire",
  "Redcar": "Redcar",
  "Redditch": "Redditch",
  "Reigate": "Reigate",
  "Rhondda and Ogmore": "Rhondda-and-Ogmore",
  "Ribble Valley": "Ribble-Valley",
  "Richmond and Northallerton": "Richmond-and-Northallerton",
  "Richmond Park": "Richmond-Park",
  "Rochdale": "Rochdale",
  "Rochester and Strood": "Rochester-and-Strood",
  "Romford": "Romford",
  "Romsey and Southampton North": "Romsey-and-Southampton-North",
  "Rossendale and Darwen": "Rossendale-and-Darwen",
  "Rotherham": "Rotherham",
  "Rother Valley": "Rother-Valley",
  "Rugby": "Rugby",
  "Ruislip Northwood and Pinner": "Ruislip-Northwood-and-Pinner",
  "Runcorn and Helsby": "Runcorn-and-Helsby",
  "Runnymede and Weybridge": "Runnymede-and-Weybridge",
  "Rushcliffe": "Rushcliffe",
  "Rutherglen": "Rutherglen",
  "Rutland and Stamford": "Rutland-and-Stamford",
  "Salford": "Salford",
  "Salisbury": "Salisbury",
  "Scarborough and Whitby": "Scarborough-and-Whitby",
  "Scunthorpe": "Scunthorpe",
  "Sefton Central": "Sefton-Central",
  "Selby": "Selby",
  "Sevenoaks": "Sevenoaks",
  "Sheffield Brightside and Hillsborough": "Sheffield-Brightside-and-Hillsborough",
  "Sheffield Central": "Sheffield-Central",
  "Sheffield Hallam": "Sheffield-Hallam",
  "Sheffield Heeley": "Sheffield-Heeley",
  "Sheffield South East": "Sheffield-South-East",
  "Sherwood Forest": "Sherwood-Forest",
  "Shipley": "Shipley",
  "Shrewsbury": "Shrewsbury",
  "Sittingbourne and Sheppey": "Sittingbourne-and-Sheppey",
  "Skipton and Ripon": "Skipton-and-Ripon",
  "Sleaford and North Hykeham": "Sleaford-and-North-Hykeham",
  "Slough": "Slough",
  "Smethwick": "Smethwick",
  "Solihull West and Shirley": "Solihull-West-and-Shirley",
  "Southampton Itchen": "Southampton-Itchen",
  "Southampton Test": "Southampton-Test",
  "South Antrim": "South-Antrim",
  "South Basildon and East Thurrock": "South-Basildon-and-East-Thurrock",
  "South Cambridgeshire": "South-Cambridgeshire",
  "South Cotswolds": "South-Cotswolds",
  "South Derbyshire": "South-Derbyshire",
  "South Devon": "South-Devon",
  "South Dorset": "South-Dorset",
  "South Down": "South-Down",
  "South East Cornwall": "South-East-Cornwall",
  "Southend East and Rochford": "Southend-East-and-Rochford",
  "Southend West and Leigh": "Southend-West-and-Leigh",
  "Southgate and Wood Green": "Southgate-and-Wood-Green",
  "South Holland and The Deepings": "South-Holland-and-The-Deepings",
  "South Leicestershire": "South-Leicestershire",
  "South Norfolk": "South-Norfolk",
  "South Northamptonshire": "South-Northamptonshire",
  "Southport": "Southport",
  "South Ribble": "South-Ribble",
  "South Shields": "South-Shields",
  "South Shropshire": "South-Shropshire",
  "South Suffolk": "South-Suffolk",
  "South West Devon": "South-West-Devon",
  "South West Hertfordshire": "South-West-Hertfordshire",
  "South West Norfolk": "South-West-Norfolk",
  "South West Wiltshire": "South-West-Wiltshire",
  "Spelthorne": "Spelthorne",
  "Spen Valley": "Spen-Valley",
  "Stafford": "Stafford",
  "Staffordshire Moorlands": "Staffordshire-Moorlands",
  "St Albans": "St-Albans",
  "Stalybridge and Hyde": "Stalybridge-and-Hyde",
  "St Austell and Newquay": "St-Austell-and-Newquay",
  "Stevenage": "Stevenage",
  "St Helens North": "St-Helens-North",
  "St Helens South and Whiston": "St-Helens-South-and-Whiston",
  "Stirling and Strathallan": "Stirling-and-Strathallan",
  "St Ives": "St-Ives",
  "St Neots and Mid Cambridgeshire": "St-Neots-and-Mid-Cambridgeshire",
  "Stockport": "Stockport",
  "Stockton North": "Stockton-North",
  "Stockton West": "Stockton-West",
  "Stoke-on-Trent Central": "Stoke-on-Trent-Central",
  "Stoke-on-Trent North": "Stoke-on-Trent-North",
  "Stoke-on-Trent South": "Stoke-on-Trent-South",
  "Stone Great Wyrley and Penkridge": "Stone-Great-Wyrley-and-Penkridge",
  "Stourbridge": "Stourbridge",
  "Strangford": "Strangford",
  "Stratford and Bow": "Stratford-and-Bow",
  "Stratford-on-Avon": "Stratford-on-Avon",
  "Streatham and Croydon North": "Streatham-and-Croydon-North",
  "Stretford and Urmston": "Stretford-and-Urmston",
  "Stroud": "Stroud",
  "Suffolk Coastal": "Suffolk-Coastal",
  "Sunderland Central": "Sunderland-Central",
  "Surrey Heath": "Surrey-Heath",
  "Sussex Weald": "Sussex-Weald",
  "Sutton and Cheam": "Sutton-and-Cheam",
  "Sutton Coldfield": "Sutton-Coldfield",
  "Swansea West": "Swansea-West",
  "Swindon North": "Swindon-North",
  "Swindon South": "Swindon-South",
  "Tamworth": "Tamworth",
  "Tatton": "Tatton",
  "Taunton and Wellington": "Taunton-and-Wellington",
  "Telford": "Telford",
  "Tewkesbury": "Tewkesbury",
  "The Wrekin": "The-Wrekin",
  "Thirsk and Malton": "Thirsk-and-Malton",
  "Thornbury and Yate": "Thornbury-and-Yate",
  "Thurrock": "Thurrock",
  "Tipton and Wednesbury": "Tipton-and-Wednesbury",
  "Tiverton and Minehead": "Tiverton-and-Minehead",
  "Tonbridge": "Tonbridge",
  "Tooting": "Tooting",
  "Torbay": "Torbay",
  "Torfaen": "Torfaen",
  "Torridge and Tavistock": "Torridge-and-Tavistock",
  "Tottenham": "Tottenham",
  "Truro and Falmouth": "Truro-and-Falmouth",
  "Tunbridge Wells": "Tunbridge-Wells",
  "Twickenham": "Twickenham",
  "Tynemouth": "Tynemouth",
  "Upper Bann": "Upper-Bann",
  "Uxbridge and South Ruislip": "Uxbridge-and-South-Ruislip",
  "Vale of Glamorgan": "Vale-of-Glamorgan",
  "Vauxhall and Camberwell Green": "Vauxhall-and-Camberwell-Green",
  "Wakefield and Rothwell": "Wakefield-and-Rothwell",
  "Wallasey": "Wallasey",
  "Walsall and Bloxwich": "Walsall-and-Bloxwich",
  "Walthamstow": "Walthamstow",
  "Warrington North": "Warrington-North",
  "Warrington South": "Warrington-South",
  "Warwick and Leamington": "Warwick-and-Leamington",
  "Washington and Gateshead South": "Washington-and-Gateshead-South",
  "Watford": "Watford",
  "Waveney Valley": "Waveney-Valley",
  "Weald of Kent": "Weald-of-Kent",
  "Wellingborough and Rushden": "Wellingborough-and-Rushden",
  "Wells and Mendip Hills": "Wells-and-Mendip-Hills",
  "Welwyn Hatfield": "Welwyn-Hatfield",
  "West Aberdeenshire and Kincardine": "West-Aberdeenshire-and-Kincardine",
  "West Bromwich": "West-Bromwich",
  "West Dorset": "West-Dorset",
  "West Dunbartonshire": "West-Dunbartonshire",
  "West Ham and Beckton": "West-Ham-and-Beckton",
  "West Lancashire": "West-Lancashire",
  "Westmorland and Lonsdale": "Westmorland-and-Lonsdale",
  "Weston-super-Mare": "Weston-super-Mare",
  "West Suffolk": "West-Suffolk",
  "West Tyrone": "West-Tyrone",
  "West Worcestershire": "West-Worcestershire",
  "Wetherby and Easingwold": "Wetherby-and-Easingwold",
  "Whitehaven and Workington": "Whitehaven-and-Workington",
  "Widnes and Halewood": "Widnes-and-Halewood",
  "Wigan": "Wigan",
  "Wimbledon": "Wimbledon",
  "Winchester": "Winchester",
  "Windsor": "Windsor",
  "Wirral West": "Wirral-West",
  "Witham": "Witham",
  "Witney": "Witney",
  "Woking": "Woking",
  "Wokingham": "Wokingham",
  "Wolverhampton North East": "Wolverhampton-North-East",
  "Wolverhampton South East": "Wolverhampton-South-East",
  "Wolverhampton West": "Wolverhampton-West",
  "Worcester": "Worcester",
  "Worsley and Eccles": "Worsley-and-Eccles",
  "Worthing West": "Worthing-West",
  "Wrexham": "Wrexham",
  "Wycombe": "Wycombe",
  "Wyre Forest": "Wyre-Forest",
  "Wythenshawe and Sale East": "Wythenshawe-and-Sale-East",
  "Yeovil": "Yeovil",
  "Ynys Mon": "Ynys-Mon",
  "York Central": "York-Central",
  "York Outer": "York-Outer",
  "National Popular Vote": nationalPopularVoteID
}
  
	  let doubleLineVoteshareFilterFunction = function(rawMapData, mapDates, columnMap, _, candidateNameToPartyIDMap, regionNameToID, heldRegionMap, ____, isCustomMap, voteshareCutoffMargin)
	  {
	    let filteredMapData = {}
	    let partyNameData = {}
  
	    let regionNames = Object.keys(regionNameToID)
      
    const getConstituencies = () => [ //MORE CONSTITUENCIES
"Aberafan-Maesteg",
  "Aberdeen-North",
  "Aberdeenshire-North-and-Moray-East",
  "Aberdeen-South",
  "Airdrie-and-Shotts",
  "Aldershot",
  "Aldridge-Brownhills",
  "Alloa-and-Grangemouth",
  "Altrincham-and-Sale-West",
  "Alyn-and-Deeside",
  "Amber-Valley",
  "Angus-and-Perthshire-Glens",
  "Arbroath-and-Broughty-Ferry",
  "Argyll-Bute-and-South-Lochaber",
  "Arundel-and-South-Downs",
  "Ashfield",
  "Ashford",
  "Ashton-under-Lyne",
  "Aylesbury",
  "Ayr-Carrick-and-Cumnock",
  "Banbury",
  "Bangor-Aberconwy",
  "Barking",
  "Barnsley-North",
  "Barnsley-South",
  "Barrow-and-Furness",
  "Basildon-and-Billericay",
  "Basingstoke",
  "Bassetlaw",
  "Bath",
  "Bathgate-and-Linlithgow",
  "Battersea",
  "Beaconsfield",
  "Beckenham-and-Penge",
  "Bedford",
  "Belfast-East",
  "Belfast-North",
  "Belfast-South-and-Mid-Down",
  "Belfast-West",
  "Bermondsey-and-Old-Southwark",
  "Berwickshire-Roxburgh-and-Selkirk",
  "Bethnal-Green-and-Stepney",
  "Beverley-and-Holderness",
  "Bexhill-and-Battle",
  "Bexleyheath-and-Crayford",
  "Bicester-and-Woodstock",
  "Birkenhead",
  "Birmingham-Edgbaston",
  "Birmingham-Erdington",
  "Birmingham-Hall-Green-and-Moseley",
  "Birmingham-Hodge-Hill-and-Solihull-North",
  "Birmingham-Ladywood",
  "Birmingham-Northfield",
  "Birmingham-Perry-Barr",
  "Birmingham-Selly-Oak",
  "Birmingham-Yardley",
  "Bishop-Auckland",
  "Blackburn",
  "Blackley-and-Middleton-South",
  "Blackpool-North-and-Fleetwood",
  "Blackpool-South",
  "Blaenau-Gwent-and-Rhymney",
  "Blaydon-and-Consett",
  "Blyth-and-Ashington",
  "Bognor-Regis-and-Littlehampton",
  "Bolsover",
  "Bolton-North-East",
  "Bolton-South-and-Walkden",
  "Bolton-West",
  "Bootle",
  "Boston-and-Skegness",
  "Bournemouth-East",
  "Bournemouth-West",
  "Bracknell",
  "Bradford-East",
  "Bradford-South",
  "Bradford-West",
  "Braintree",
  "Brecon-Radnor-and-Cwm-Tawe",
  "Brent-East",
  "Brentford-and-Isleworth",
  "Brent-West",
  "Brentwood-and-Ongar",
  "Bridgend",
  "Bridgwater",
  "Bridlington-and-The-Wolds",
  "Brigg-and-Immingham",
  "Brighton-Kemptown-and-Peacehaven",
  "Brighton-Pavilion",
  "Bristol-Central",
  "Bristol-East",
  "Bristol-North-East",
  "Bristol-North-West",
  "Bristol-South",
  "Broadland-and-Fakenham",
  "Bromley-and-Biggin-Hill",
  "Bromsgrove",
  "Broxbourne",
  "Broxtowe",
  "Buckingham-and-Bletchley",
  "Burnley",
  "Burton-and-Uttoxeter",
  "Bury-North",
  "Bury-South",
  "Bury-St-Edmunds-and-Stowmarket",
  "Caerfyrddin",
  "Caerphilly",
  "Caithness-Sutherland-and-Easter-Ross",
  "Calder-Valley",
  "Camborne-and-Redruth",
  "Cambridge",
  "Cannock-Chase",
  "Canterbury",
  "Cardiff-East",
  "Cardiff-North",
  "Cardiff-South-and-Penarth",
  "Cardiff-West",
  "Carlisle",
  "Carshalton-and-Wallington",
  "Castle-Point",
  "Central-Ayrshire",
  "Central-Devon",
  "Central-Suffolk-and-North-Ipswich",
  "Ceredigion-Preseli",
  "Chatham-and-Aylesford",
  "Cheadle",
  "Chelmsford",
  "Chelsea-and-Fulham",
  "Cheltenham",
  "Chesham-and-Amersham",
  "Chesterfield",
  "Chester-North-and-Neston",
  "Chester-South-and-Eddisbury",
  "Chichester",
  "Chingford-and-Woodford-Green",
  "Chippenham",
  "Chipping-Barnet",
  "Chorley",
  "Christchurch",
  "Cities-of-London-and-Westminster",
  "City-of-Durham",
  "Clacton",
  "Clapham-and-Brixton-Hill",
  "Clwyd-East",
  "Clwyd-North",
  "Coatbridge-and-Bellshill",
  "Colchester",
  "Colne-Valley",
  "Congleton",
  "Corby-and-East-Northamptonshire",
  "Coventry-East",
  "Coventry-North-West",
  "Coventry-South",
  "Cowdenbeath-and-Kirkcaldy",
  "Cramlington-and-Killingworth",
  "Crawley",
  "Crewe-and-Nantwich",
  "Croydon-East",
  "Croydon-South",
  "Croydon-West",
  "Cumbernauld-and-Kirkintilloch",
  "Dagenham-and-Rainham",
  "Darlington",
  "Dartford",
  "Daventry",
  "Derby-North",
  "Derbyshire-Dales",
  "Derby-South",
  "Dewsbury-and-Batley",
  "Didcot-and-Wantage",
  "Doncaster-Central",
  "Doncaster-East-and-the-Isle-of-Axholme",
  "Doncaster-North",
  "Dorking-and-Horley",
  "Dover-and-Deal",
  "Droitwich-and-Evesham",
  "Dudley",
  "Dulwich-and-West-Norwood",
  "Dumfries-and-Galloway",
  "Dumfriesshire-Clydesdale-and-Tweeddale",
  "Dundee-Central",
  "Dunfermline-and-Dollar",
  "Dunstable-and-Leighton-Buzzard",
  "Dwyfor-Meirionnydd",
  "Ealing-Central-and-Acton",
  "Ealing-North",
  "Ealing-Southall",
  "Earley-and-Woodley",
  "Easington",
  "East-Antrim",
  "Eastbourne",
  "East-Grinstead-and-Uckfield",
  "East-Ham",
  "East-Hampshire",
  "East-Kilbride-and-Strathaven",
  "Eastleigh",
  "East-Londonderry",
  "East-Renfrewshire",
  "East-Surrey",
  "East-Thanet",
  "East-Wiltshire",
  "East-Worthing-and-Shoreham",
  "Edinburgh-East-and-Musselburgh",
  "Edinburgh-North-and-Leith",
  "Edinburgh-South",
  "Edinburgh-South-West",
  "Edinburgh-West",
  "Edmonton-and-Winchmore-Hill",
  "Ellesmere-Port-and-Bromborough",
  "Eltham-and-Chislehurst",
  "Ely-and-East-Cambridgeshire",
  "Enfield-North",
  "Epping-Forest",
  "Epsom-and-Ewell",
  "Erewash",
  "Erith-and-Thamesmead",
  "Esher-and-Walton",
  "Exeter",
  "Exmouth-and-Exeter-East",
  "Falkirk",
  "Fareham-and-Waterlooville",
  "Farnham-and-Bordon",
  "Faversham-and-Mid-Kent",
  "Feltham-and-Heston",
  "Fermanagh-and-South-Tyrone",
  "Filton-and-Bradley-Stoke",
  "Finchley-and-Golders-Green",
  "Folkestone-and-Hythe",
  "Forest-of-Dean",
  "Foyle",
  "Frome-and-East-Somerset",
  "Fylde",
  "Gainsborough",
  "Gateshead-Central-and-Whickham",
  "Gedling",
  "Gillingham-and-Rainham",
  "Glasgow-East",
  "Glasgow-North",
  "Glasgow-North-East",
  "Glasgow-South",
  "Glasgow-South-West",
  "Glasgow-West",
  "Glastonbury-and-Somerton",
  "Glenrothes-and-Mid-Fife",
  "Gloucester",
  "Godalming-and-Ash",
  "Goole-and-Pocklington",
  "Gordon-and-Buchan",
  "Gorton-and-Denton",
  "Gosport",
  "Gower",
  "Grantham-and-Bourne",
  "Gravesham",
  "Great-Grimsby-and-Cleethorpes",
  "Great-Yarmouth",
  "Greenwich-and-Woolwich",
  "Guildford",
  "Hackney-North-and-Stoke-Newington",
  "Hackney-South-and-Shoreditch",
  "Halesowen",
  "Halifax",
  "Hamble-Valley",
  "Hamilton-and-Clyde-Valley",
  "Hammersmith-and-Chiswick",
  "Hampstead-and-Highgate",
  "Harborough-Oadby-and-Wigston",
  "Harlow",
  "Harpenden-and-Berkhamsted",
  "Harrogate-and-Knaresborough",
  "Harrow-East",
  "Harrow-West",
  "Hartlepool",
  "Harwich-and-North-Essex",
  "Hastings-and-Rye",
  "Havant",
  "Hayes-and-Harlington",
  "Hazel-Grove",
  "Hemel-Hempstead",
  "Hendon",
  "Henley-and-Thame",
  "Hereford-and-South-Herefordshire",
  "Herne-Bay-and-Sandwich",
  "Hertford-and-Stortford",
  "Hertsmere",
  "Hexham",
  "Heywood-and-Middleton-North",
  "High-Peak",
  "Hinckley-and-Bosworth",
  "Hitchin",
  "Holborn-and-St-Pancras",
  "Honiton-and-Sidmouth",
  "Hornchurch-and-Upminster",
  "Hornsey-and-Friern-Barnet",
  "Horsham",
  "Houghton-and-Sunderland-South",
  "Hove-and-Portslade",
  "Huddersfield",
  "Huntingdon",
  "Hyndburn",
  "Ilford-North",
  "Ilford-South",
  "Inverclyde-and-Renfrewshire-West",
  "Inverness-Skye-and-West-Ross-shire",
  "Ipswich",
  "Isle-of-Wight-East",
  "Isle-of-Wight-West",
  "Islington-North",
  "Islington-South-and-Finsbury",
  "Jarrow-and-Gateshead-East",
  "Keighley-and-Ilkley",
  "Kenilworth-and-Southam",
  "Kensington-and-Bayswater",
  "Kettering",
  "Kilmarnock-and-Loudoun",
  "Kingston-and-Surbiton",
  "Kingston-upon-Hull-East",
  "Kingston-upon-Hull-North-and-Cottingham",
  "Kingston-upon-Hull-West-and-Haltemprice",
  "Kingswinford-and-South-Staffordshire",
  "Knowsley",
  "Lagan-Valley",
  "Lancaster-and-Wyre",
  "Leeds-Central-and-Headingley",
  "Leeds-East",
  "Leeds-North-East",
  "Leeds-North-West",
  "Leeds-South",
  "Leeds-South-West-and-Morley",
  "Leeds-West-and-Pudsey",
  "Leicester-East",
  "Leicester-South",
  "Leicester-West",
  "Leigh-and-Atherton",
  "Lewes",
  "Lewisham-East",
  "Lewisham-North",
  "Lewisham-West-and-East-Dulwich",
  "Leyton-and-Wanstead",
  "Lichfield",
  "Lincoln",
  "Liverpool-Garston",
  "Liverpool-Riverside",
  "Liverpool-Walton",
  "Liverpool-Wavertree",
  "Liverpool-West-Derby",
  "Livingston",
  "Llanelli",
  "Lothian-East",
  "Loughborough",
  "Louth-and-Horncastle",
  "Lowestoft",
  "Luton-North",
  "Luton-South-and-South-Bedfordshire",
  "Macclesfield",
  "Maidenhead",
  "Maidstone-and-Malling",
  "Makerfield",
  "Maldon",
  "Manchester-Central",
  "Manchester-Rusholme",
  "Manchester-Withington",
  "Mansfield",
  "Melksham-and-Devizes",
  "Melton-and-Syston",
  "Meriden-and-Solihull-East",
  "Merthyr-Tydfil-and-Aberdare",
  "Mid-and-South-Pembrokeshire",
  "Mid-Bedfordshire",
  "Mid-Buckinghamshire",
  "Mid-Cheshire",
  "Mid-Derbyshire",
  "Middlesbrough-and-Thornaby-East",
  "Middlesbrough-South-and-East-Cleveland",
  "Mid-Dorset-and-North-Poole",
  "Mid-Dunbartonshire",
  "Mid-Leicestershire",
  "Midlothian",
  "Mid-Norfolk",
  "Mid-Sussex",
  "Mid-Ulster",
  "Milton-Keynes-Central",
  "Milton-Keynes-North",
  "Mitcham-and-Morden",
  "Monmouthshire",
  "Montgomeryshire-and-Glyndwr",
  "Moray-West-Nairn-and-Strathspey",
  "Morecambe-and-Lunesdale",
  "Motherwell-Wishaw-and-Carluke",
  "Na-h-Eileanan-an-Iar",
  "Neath-and-Swansea-East",
  "Newark",
  "Newbury",
  "Newcastle-under-Lyme",
  "Newcastle-upon-Tyne-Central-and-West",
  "Newcastle-upon-Tyne-East-and-Wallsend",
  "Newcastle-upon-Tyne-North",
  "New-Forest-East",
  "New-Forest-West",
  "Newport-East",
  "Newport-West-and-Islwyn",
  "Newry-and-Armagh",
  "Newton-Abbot",
  "Newton-Aycliffe-and-Spennymoor",
  "Normanton-and-Hemsworth",
  "Northampton-North",
  "Northampton-South",
  "North-Antrim",
  "North-Ayrshire-and-Arran",
  "North-Bedfordshire",
  "North-Cornwall",
  "North-Cotswolds",
  "North-Devon",
  "North-Dorset",
  "North-Down",
  "North-Durham",
  "North-East-Cambridgeshire",
  "North-East-Derbyshire",
  "North-East-Fife",
  "North-East-Hampshire",
  "North-East-Hertfordshire",
  "North-East-Somerset-and-Hanham",
  "North-Herefordshire",
  "North-Norfolk",
  "North-Northumberland",
  "North-Shropshire",
  "North-Somerset",
  "North-Warwickshire-and-Bedworth",
  "North-West-Cambridgeshire",
  "North-West-Essex",
  "North-West-Hampshire",
  "North-West-Leicestershire",
  "North-West-Norfolk",
  "Norwich-North",
  "Norwich-South",
  "Nottingham-East",
  "Nottingham-North-and-Kimberley",
  "Nottingham-South",
  "Nuneaton",
  "Old-Bexley-and-Sidcup",
  "Oldham-East-and-Saddleworth",
  "Oldham-West-Chadderton-and-Royton",
  "Orkney-and-Shetland",
  "Orpington",
  "Ossett-and-Denby-Dale",
  "Oxford-East",
  "Oxford-West-and-Abingdon",
  "Paisley-and-Renfrewshire-North",
  "Paisley-and-Renfrewshire-South",
  "Peckham",
  "Pendle-and-Clitheroe",
  "Penistone-and-Stocksbridge",
  "Penrith-and-Solway",
  "Perth-and-Kinross-shire",
  "Peterborough",
  "Plymouth-Moor-View",
  "Plymouth-Sutton-and-Devonport",
  "Pontefract-Castleford-and-Knottingley",
  "Pontypridd",
  "Poole",
  "Poplar-and-Limehouse",
  "Portsmouth-North",
  "Portsmouth-South",
  "Preston",
  "Putney",
  "Queens-Park-and-Maida-Vale",
  "Rawmarsh-and-Conisbrough",
  "Rayleigh-and-Wickford",
  "Reading-Central",
  "Reading-West-and-Mid-Berkshire",
  "Redcar",
  "Redditch",
  "Reigate",
  "Rhondda-and-Ogmore",
  "Ribble-Valley",
  "Richmond-and-Northallerton",
  "Richmond-Park",
  "Rochdale",
  "Rochester-and-Strood",
  "Romford",
  "Romsey-and-Southampton-North",
  "Rossendale-and-Darwen",
  "Rotherham",
  "Rother-Valley",
  "Rugby",
  "Ruislip-Northwood-and-Pinner",
  "Runcorn-and-Helsby",
  "Runnymede-and-Weybridge",
  "Rushcliffe",
  "Rutherglen",
  "Rutland-and-Stamford",
  "Salford",
  "Salisbury",
  "Scarborough-and-Whitby",
  "Scunthorpe",
  "Sefton-Central",
  "Selby",
  "Sevenoaks",
  "Sheffield-Brightside-and-Hillsborough",
  "Sheffield-Central",
  "Sheffield-Hallam",
  "Sheffield-Heeley",
  "Sheffield-South-East",
  "Sherwood-Forest",
  "Shipley",
  "Shrewsbury",
  "Sittingbourne-and-Sheppey",
  "Skipton-and-Ripon",
  "Sleaford-and-North-Hykeham",
  "Slough",
  "Smethwick",
  "Solihull-West-and-Shirley",
  "Southampton-Itchen",
  "Southampton-Test",
  "South-Antrim",
  "South-Basildon-and-East-Thurrock",
  "South-Cambridgeshire",
  "South-Cotswolds",
  "South-Derbyshire",
  "South-Devon",
  "South-Dorset",
  "South-Down",
  "South-East-Cornwall",
  "Southend-East-and-Rochford",
  "Southend-West-and-Leigh",
  "Southgate-and-Wood-Green",
  "South-Holland-and-The-Deepings",
  "South-Leicestershire",
  "South-Norfolk",
  "South-Northamptonshire",
  "Southport",
  "South-Ribble",
  "South-Shields",
  "South-Shropshire",
  "South-Suffolk",
  "South-West-Devon",
  "South-West-Hertfordshire",
  "South-West-Norfolk",
  "South-West-Wiltshire",
  "Spelthorne",
  "Spen-Valley",
  "Stafford",
  "Staffordshire-Moorlands",
  "St-Albans",
  "Stalybridge-and-Hyde",
  "St-Austell-and-Newquay",
  "Stevenage",
  "St-Helens-North",
  "St-Helens-South-and-Whiston",
  "Stirling-and-Strathallan",
  "St-Ives",
  "St-Neots-and-Mid-Cambridgeshire",
  "Stockport",
  "Stockton-North",
  "Stockton-West",
  "Stoke-on-Trent-Central",
  "Stoke-on-Trent-North",
  "Stoke-on-Trent-South",
  "Stone-Great-Wyrley-and-Penkridge",
  "Stourbridge",
  "Strangford",
  "Stratford-and-Bow",
  "Stratford-on-Avon",
  "Streatham-and-Croydon-North",
  "Stretford-and-Urmston",
  "Stroud",
  "Suffolk-Coastal",
  "Sunderland-Central",
  "Surrey-Heath",
  "Sussex-Weald",
  "Sutton-and-Cheam",
  "Sutton-Coldfield",
  "Swansea-West",
  "Swindon-North",
  "Swindon-South",
  "Tamworth",
  "Tatton",
  "Taunton-and-Wellington",
  "Telford",
  "Tewkesbury",
  "The-Wrekin",
  "Thirsk-and-Malton",
  "Thornbury-and-Yate",
  "Thurrock",
  "Tipton-and-Wednesbury",
  "Tiverton-and-Minehead",
  "Tonbridge",
  "Tooting",
  "Torbay",
  "Torfaen",
  "Torridge-and-Tavistock",
  "Tottenham",
  "Truro-and-Falmouth",
  "Tunbridge-Wells",
  "Twickenham",
  "Tynemouth",
  "Upper-Bann",
  "Uxbridge-and-South-Ruislip",
  "Vale-of-Glamorgan",
  "Vauxhall-and-Camberwell-Green",
  "Wakefield-and-Rothwell",
  "Wallasey",
  "Walsall-and-Bloxwich",
  "Walthamstow",
  "Warrington-North",
  "Warrington-South",
  "Warwick-and-Leamington",
  "Washington-and-Gateshead-South",
  "Watford",
  "Waveney-Valley",
  "Weald-of-Kent",
  "Wellingborough-and-Rushden",
  "Wells-and-Mendip-Hills",
  "Welwyn-Hatfield",
  "West-Aberdeenshire-and-Kincardine",
  "West-Bromwich",
  "West-Dorset",
  "West-Dunbartonshire",
  "West-Ham-and-Beckton",
  "West-Lancashire",
  "Westmorland-and-Lonsdale",
  "Weston-super-Mare",
  "West-Suffolk",
  "West-Tyrone",
  "West-Worcestershire",
  "Wetherby-and-Easingwold",
  "Whitehaven-and-Workington",
  "Widnes-and-Halewood",
  "Wigan",
  "Wimbledon",
  "Winchester",
  "Windsor",
  "Wirral-West",
  "Witham",
  "Witney",
  "Woking",
  "Wokingham",
  "Wolverhampton-North-East",
  "Wolverhampton-South-East",
  "Wolverhampton-West",
  "Worcester",
  "Worsley-and-Eccles",
  "Worthing-West",
  "Wrexham",
  "Wycombe",
  "Wyre-Forest",
  "Wythenshawe-and-Sale-East",
  "Yeovil",
  "Ynys-Mon",
  "York-Central",
  "York-Outer",
]
      const regions = [...getConstituencies()]
      const regionDateRanges = [
        {
          start: new Date(1970, 1-1, 1-1).getTime(),
          regions: [
            ...getConstituencies()
          ]
        },
        {
          start: new Date(1980, 1-1, 1-1).getTime(),
          regions: [
            ...getConstituencies()
          ]
        },
        {
          start: new Date(2000, 1-1, 1-1).getTime(),
          regions: [
            ...getConstituencies()
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
      true, // shouldSetDisabledWorthToZero
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
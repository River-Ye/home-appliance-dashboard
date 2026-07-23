const EXPECTED_CATEGORY_COUNT = 26;
const EXPECTED_PRODUCT_COUNT = 688;
const MIN_PRODUCTS_PER_CATEGORY = 20;
const DATE_PATTERN = /^(找不到|\d{4}(?:[-/.]\d{1,2}(?:[-/.]\d{1,2})?)?)$/;
const WASHER_DRYER_CAPACITY_PATTERN = /^洗\/乾容量：\d+(?:\.\d+)?kg \/ \d+(?:\.\d+)?kg$/;
const DIMENSION_CATEGORY_COUNTS = new Map([
  ["washer", 23],
  ["dryer", 21],
  ["washerdryer", 25],
  ["refrigerator", 23],
  ["garmentcare", 20],
]);
const DIMENSION_CATEGORIES = new Set(DIMENSION_CATEGORY_COUNTS.keys());
const EXPECTED_DIMENSION_PRODUCT_COUNT = [...DIMENSION_CATEGORY_COUNTS.values()]
  .reduce((sum, count) => sum + count, 0);
const DIMENSION_PATTERN = /^尺寸：(未標示|寬 \d+(?:\.\d+)? x 深 \d+(?:\.\d+)? x 高 \d+(?:\.\d+)? cm)$/;
const DIMENSION_CONFIDENCE_VALUES = new Set(["high", "medium", "low", "not_found"]);
const HISTORICAL_LOW_STATUSES = new Set(["found", "not_found"]);
const HISTORICAL_LOW_SOURCE_KINDS = new Set([
  "price_history",
  "retailer_promo",
  "retailer_page",
  "official_sale",
  "not_found",
]);
const HISTORICAL_LOW_CONFIDENCE_VALUES = new Set(["high", "medium", "low", "not_found"]);
const ISSUE_RESEARCH_STATUSES = new Set(["common_issue", "no_common_issue"]);
const ISSUE_RESEARCH_MIN_REPORTERS = 6;
const ISSUE_RESEARCH_MIN_PLATFORMS = 2;
const NO_COMMON_ISSUE_SUMMARY = "截至查核日，查無達門檻的集中負評／災情";
const REQUIRED_CATEGORY_TERMS = new Map([
  ["robot", ["Roborock", "Ecovacs", "Dreame", "Narwal", "iRobot", "eufy", "MOVA", "LG", "Shark", "Dyson"]],
  ["smartlock", ["Yale", "Philips", "Kaadas", "Aqara", "Lockin", "dormakaba", "HITACHI", "WAFERLOCK"]],
  ["wifi", ["ASUS", "TP-Link", "D-Link", "NETGEAR", "Linksys", "Synology", "Aruba", "UniFi", "Zyxel", "Mercusys", "Acer", "QNAP"]],
  ["monitor", ["ASUS", "Acer", "BenQ", "LG", "Dell", "Samsung", "MSI", "GIGABYTE", "ViewSonic", "AOC", "Philips", "EIZO", "Xiaomi"]],
  ["cookware", ["Tefal", "Buffalo", "WMF", "Fissler", "Le Creuset", "Staub"]],
  ["knife", ["TOJIRO", "GLOBAL", "Victorinox", "Kai", "Kyocera", "Wusthof"]],
  ["waterdispenser", ["3M", "EVERPURE", "Coway", "Panasonic", "BWT", "BRITA", "賀眾牌"]],
  ["dishwasher", ["Panasonic", "TECO", "Toshiba", "Bosch", "Electrolux", "LG", "Miele"]],
  ["standingdesk", ["Loctek", "iRocks", "NITORI", "COUGAR"]],
  ["chair", ["iRocks", "Ergohuman", "Razer", "Herman Miller", "Steelcase"]],
  ["monitorarm", ["Raymii", "Happy Tech", "Loctek", "Ergotron", "j5create"]],
  ["garmentcare", ["LG", "Samsung", "Panasonic"]],
]);
const CATEGORY_TEXT_MATCH_COUNTS = [
  { category: "soundbar", term: "Marshall", exact: 2 },
  { category: "fan", term: "Philips", min: 5 },
  { category: "purifier", term: "POIEMA", min: 2 },
  { category: "wifi", term: "Mesh", min: 20 },
  { category: "monitor", term: "OLED", min: 8 },
  { category: "monitor", term: "寬螢幕", min: 15 },
  { category: "monitorarm", term: "57吋", min: 5 },
  { category: "monitorarm", term: "30kg", min: 1 },
  { category: "tv", term: "Chromecast", min: 10 },
  { category: "monitor", term: "3.93 kg", min: 1 },
  { category: "standingdesk", term: "2.5cm", min: 3 },
  { category: "robot", term: "Saros", min: 3 },
];

const REQUIRED_FIELDS = [
  "id",
  "category",
  "rank",
  "budget",
  "channel",
  "brand",
  "model",
  "name",
  "price",
  "image",
  "buyUrl",
  "buyLabel",
  "specs",
  "description",
  "pros",
  "cons",
  "bestFor",
  "recommendation",
  "releaseDate",
  "historicalLow",
  "issueResearch",
  "score",
  "voltage",
  "warranty",
  "tags",
];

const GARMENTCARE_MODELS = new Set([
  "R723MB",
  "R723SB",
  "R723MG",
  "R723WG",
  "E523MW",
  "E523MR",
  "E523IR",
  "SC5GMR80H",
  "SC5MAR4G",
  "S3WFBN",
  "S3MFBN",
  "S3RFBN",
  "DF90H24R5C",
  "DF90H24R4D",
  "DF90H24R4P",
  "DF90H24R4B",
  "DF80H24R1C",
  "DF80H24R1D",
  "HCC-R600AL-X",
  "HCC-R600AR-X",
]);
const GARMENTCARE_BRAND_COUNTS = new Map([
  ["LG", 12],
  ["Samsung", 6],
  ["Panasonic", 2],
]);
const GARMENTCARE_CHANNEL_COUNTS = new Map([
  ["tw", 7],
  ["global", 13],
]);
const GARMENTCARE_SPEC_PREFIXES = [
  "容量：",
  "護理技術：",
  "行程：",
  "乾燥方式：",
  "尺寸：",
  "重量：",
  "水箱／給排水：",
  "電壓／頻率：",
  "耗電：",
  "噪音：",
  "連線功能：",
  "門向：",
  "安裝間距：",
  "材質限制：",
];
const GARMENTCARE_TOP_PICK_MODEL = "R723WG";

module.exports = {
  EXPECTED_CATEGORY_COUNT,
  EXPECTED_PRODUCT_COUNT,
  MIN_PRODUCTS_PER_CATEGORY,
  DATE_PATTERN,
  WASHER_DRYER_CAPACITY_PATTERN,
  DIMENSION_CATEGORY_COUNTS,
  DIMENSION_CATEGORIES,
  EXPECTED_DIMENSION_PRODUCT_COUNT,
  DIMENSION_PATTERN,
  DIMENSION_CONFIDENCE_VALUES,
  HISTORICAL_LOW_STATUSES,
  HISTORICAL_LOW_SOURCE_KINDS,
  HISTORICAL_LOW_CONFIDENCE_VALUES,
  ISSUE_RESEARCH_STATUSES,
  ISSUE_RESEARCH_MIN_REPORTERS,
  ISSUE_RESEARCH_MIN_PLATFORMS,
  NO_COMMON_ISSUE_SUMMARY,
  REQUIRED_CATEGORY_TERMS,
  CATEGORY_TEXT_MATCH_COUNTS,
  REQUIRED_FIELDS,
  GARMENTCARE_MODELS,
  GARMENTCARE_BRAND_COUNTS,
  GARMENTCARE_CHANNEL_COUNTS,
  GARMENTCARE_SPEC_PREFIXES,
  GARMENTCARE_TOP_PICK_MODEL,
};

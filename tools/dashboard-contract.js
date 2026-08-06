const EXPECTED_CATEGORY_COUNT = 27;
const EXPECTED_PRODUCT_COUNT = 750;
const MIN_PRODUCTS_PER_CATEGORY = 20;
const EXPECTED_CATEGORY_PRODUCT_COUNTS = new Map([
  ["tv", 34],
  ["soundbar", 27],
  ["fan", 22],
  ["circulator", 24],
  ["dehumidifier", 24],
  ["purifier", 24],
  ["robot", 34],
  ["vacuum", 26],
  ["washer", 24],
  ["dryer", 21],
  ["washerdryer", 28],
  ["garmentcare", 20],
  ["refrigerator", 24],
  ["cookware", 26],
  ["knife", 22],
  ["blender", 24],
  ["coffee", 24],
  ["oven", 25],
  ["waterdispenser", 23],
  ["dishwasher", 25],
  ["bidet", 20],
  ["smartlock", 48],
  ["wifi", 51],
  ["standingdesk", 25],
  ["chair", 26],
  ["monitor", 56],
  ["monitorarm", 23],
]);
const DATE_PATTERN = /^(找不到|\d{4}(?:[-/.]\d{1,2}(?:[-/.]\d{1,2})?)?)$/;
const WASHER_DRYER_CAPACITY_PATTERN = /^洗\/乾容量：\d+(?:\.\d+)?kg \/ \d+(?:\.\d+)?kg$/;
const DIMENSION_CATEGORY_COUNTS = new Map([
  ["tv", 34],
  ["soundbar", 27],
  ["washer", 24],
  ["dryer", 21],
  ["washerdryer", 28],
  ["garmentcare", 20],
  ["refrigerator", 24],
  ["coffee", 24],
  ["oven", 25],
  ["dishwasher", 25],
  ["bidet", 20],
]);
const DIMENSION_CATEGORIES = new Set(DIMENSION_CATEGORY_COUNTS.keys());
const EXPECTED_DIMENSION_PRODUCT_COUNT = [...DIMENSION_CATEGORY_COUNTS.values()]
  .reduce((sum, count) => sum + count, 0);
const NEW_DIMENSION_CATEGORIES = new Set(["tv", "soundbar", "coffee", "oven", "dishwasher", "bidet"]);
const MEASUREMENT_PRIORITY_CATEGORIES = new Set(["tv", "soundbar", "garmentcare", "coffee", "oven", "dishwasher", "bidet"]);
const MEASUREMENT_VALUE_PATTERN = "\\d+(?:\\.\\d+)?(?:[-–／/]\\d+(?:\\.\\d+)?)?";
const DIMENSION_SEGMENT_PATTERN = `(?:[^；]+ )?寬 ${MEASUREMENT_VALUE_PATTERN} x 深 ${MEASUREMENT_VALUE_PATTERN} x 高 ${MEASUREMENT_VALUE_PATTERN} cm`;
const FORBIDDEN_MEASUREMENT_LABEL_PATTERN = "(?!.*(?:包裝|外箱|紙箱|毛重|gross|carton))";
const DIMENSION_PATTERN = new RegExp(`^尺寸：${FORBIDDEN_MEASUREMENT_LABEL_PATTERN}(未標示|查不到|${DIMENSION_SEGMENT_PATTERN}(?:；${DIMENSION_SEGMENT_PATTERN})*)$`, "i");
const DIMENSION_CONFIDENCE_VALUES = new Set(["high", "medium", "low", "not_found"]);
const WEIGHT_CATEGORY_COUNTS = new Map([
  ["tv", 34],
  ["soundbar", 27],
  ["coffee", 24],
  ["oven", 25],
]);
const WEIGHT_CATEGORIES = new Set(WEIGHT_CATEGORY_COUNTS.keys());
const EXPECTED_WEIGHT_PRODUCT_COUNT = [...WEIGHT_CATEGORY_COUNTS.values()]
  .reduce((sum, count) => sum + count, 0);
const WEIGHT_SEGMENT_PATTERN = `(?:[^；]+ )?(?:約 )?${MEASUREMENT_VALUE_PATTERN} kg`;
const WEIGHT_PATTERN = new RegExp(`^重量：${FORBIDDEN_MEASUREMENT_LABEL_PATTERN}(未標示|查不到|${WEIGHT_SEGMENT_PATTERN}(?:；${WEIGHT_SEGMENT_PATTERN})*)$`, "i");
const WEIGHT_CONFIDENCE_VALUES = new Set(["high", "medium", "low", "not_found"]);
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
const COFFEE_TYPE_COUNTS = new Map([
  ["全自動", 12],
  ["半自動", 12],
]);
const COFFEE_BUDGET_COUNTS = new Map([
  ["value", 8],
  ["mid", 8],
  ["premium", 8],
]);
const COFFEE_TYPE_BUDGET_COUNT = 4;
const COFFEE_SEMI_AUTO_GRINDER_COUNTS = new Map([
  ["built_in", 6],
  ["external", 6],
]);
const COFFEE_MIN_BRAND_COUNT = 6;
const COFFEE_MAX_PRODUCTS_PER_BRAND = 6;
const COFFEE_SPEC_PREFIXES = [
  "類型：",
  "使用原料：",
  "研磨系統：",
  "萃取／沖煮：",
  "奶泡：",
  "容量：",
  "尺寸：",
  "重量：",
  "電壓／頻率：",
  "功率：",
  "清潔維護：",
  "耗材／配件相容性：",
];
const COFFEE_RECOMMENDATION_TAGS = new Set(["全自動推薦", "半自動推薦", "入門推薦"]);
const COFFEE_EXCLUDED_NAME_TERMS = new Set([
  "膠囊",
  "滴濾",
  "商用",
  "嵌入式",
  "獨立磨豆機",
  "獨立奶泡機",
  "除鈣劑",
  "濾芯",
  "配件",
]);

module.exports = {
  EXPECTED_CATEGORY_COUNT,
  EXPECTED_PRODUCT_COUNT,
  MIN_PRODUCTS_PER_CATEGORY,
  EXPECTED_CATEGORY_PRODUCT_COUNTS,
  DATE_PATTERN,
  WASHER_DRYER_CAPACITY_PATTERN,
  DIMENSION_CATEGORY_COUNTS,
  DIMENSION_CATEGORIES,
  EXPECTED_DIMENSION_PRODUCT_COUNT,
  NEW_DIMENSION_CATEGORIES,
  MEASUREMENT_PRIORITY_CATEGORIES,
  DIMENSION_PATTERN,
  DIMENSION_CONFIDENCE_VALUES,
  WEIGHT_CATEGORY_COUNTS,
  WEIGHT_CATEGORIES,
  EXPECTED_WEIGHT_PRODUCT_COUNT,
  WEIGHT_PATTERN,
  WEIGHT_CONFIDENCE_VALUES,
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
  COFFEE_TYPE_COUNTS,
  COFFEE_BUDGET_COUNTS,
  COFFEE_TYPE_BUDGET_COUNT,
  COFFEE_SEMI_AUTO_GRINDER_COUNTS,
  COFFEE_MIN_BRAND_COUNT,
  COFFEE_MAX_PRODUCTS_PER_BRAND,
  COFFEE_SPEC_PREFIXES,
  COFFEE_RECOMMENDATION_TAGS,
  COFFEE_EXCLUDED_NAME_TERMS,
};

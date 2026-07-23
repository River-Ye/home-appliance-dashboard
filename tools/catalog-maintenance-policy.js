const IDENTITY_SEPARATOR_PATTERN = /[^\p{L}\p{N}]+/gu;
const MODEL_SEPARATOR_PATTERN = "[\\s\\p{P}\\p{S}_]*";
const RELATED_MODEL_SUFFIX_PATTERN = /^(?:[\s\p{P}\p{S}_]*)(?:pro|plus|max|ultra|mini|lite|air|v(?:ersion)?\s*\d+|mk\s*\d+|gen(?:eration)?\s*\d+)(?=$|[^\p{L}\p{N}])/iu;

const EXCLUDED_LISTING_PATTERNS = [
  /(?:二手(?:品)?|中古(?:品)?|福利品|展示(?:機|品)|樣品機|拆封品|開箱品|整新品|翻新品|瑕疵品|箱損品)/iu,
  /(?:配件(?:專用)?|耗材(?:組)?|替換(?:用)?(?:濾心|濾網)|(?:濾心|濾網)(?:組|耗材|替換)|刀架|磨刀器|底座|疊架)/iu,
  /\b(?:used|pre[\s-]?owned|refurbished|renewed|open[\s-]?box|accessor(?:y|ies)|consumables?)\b/iu,
  /\b(?:display|floor|demo)\s+(?:model|unit)\b/iu,
  /\b(?:replacement\s+(?:filter|cartridge|part)|spare\s+parts?|parts?\s+only)\b/iu,
];

const UNCERTAIN_DISCONTINUATION_PATTERNS = [
  /(?:是否|可能|疑似|猜測|傳聞|恐怕|請問)[^。.!?]{0,24}(?:停產|停止生產|終止生產)/iu,
  /(?:停產|停止生產|終止生產)[^。.!?]{0,8}(?:嗎|呢|[?？])/iu,
  /\b(?:not|isn't|is\s+not|wasn't|was\s+not|hasn't|has\s+not)\s+(?:been\s+)?discontinued\b/iu,
  /\b(?:may|might|could|possibly|rumou?red\s+to)\s+(?:be\s+)?discontinued\b/iu,
  /\bno\s+(?:current\s+)?plans?\s+to\s+discontinue\b/iu,
];

const EXPLICIT_DISCONTINUATION_PATTERNS = [
  /(?:本|此|該)(?:產品|商品|機型|型號|款式)\s*(?:已經|已|正式)\s*停產/iu,
  /(?:原廠|製造商|品牌)\s*(?:已經|已|正式)?\s*停產(?:此|該)?(?:產品|商品|機型|型號|款式)?/iu,
  /(?:原廠|製造商|品牌)\s*(?:已經|已|正式)?\s*(?:停止|終止)\s*(?:生產|製造)(?:此|該)?(?:產品|商品|機型|型號|款式)?/iu,
  /^\s*(?:本產品)?\s*已停產[。.!]?\s*$/iu,
  /\b(?:this|the)\s+(?:product|model|item)\s+(?:has\s+been|is|was)\s+discontinued\b/iu,
  /\b(?:this|the)\s+(?:product|model|item)\s+(?:is|was)\s+no\s+longer\s+(?:manufactured|produced|in\s+production)\b/iu,
  /\b(?:product|model|item)\s+(?:has\s+been|was|is)?\s*discontinued\s+by\s+(?:the\s+)?(?:manufacturer|brand)\b/iu,
  /\b(?:manufacturer|brand)\s+(?:has\s+)?(?:discontinued|stopped\s+(?:making|manufacturing|producing))\s+(?:this|the)\s+(?:product|model|item)\b/iu,
];

const REVIEWED_PCHOME_BINDINGS = new Map([
  ["dishwasher-haier-h500", "DMBR25-A900IUNDB"],
  ["garmentcare-lg-r723wg", "DPAI1L-A900HWRUQ"],
  ["monitor-dell-aw3225qf", "DSABOK-A900HB1B5"],
  ["monitor-lg-45gx90sa", "DSBC1Z-A900J732D"],
  ["robot-ecovacs-t50-pro", "DMBL0L-A900IDIPA"],
  ["robot-ecovacs-t80-omni", "DMBL0L-A900IT3IU"],
  ["robot-ecovacs-t90-pro", "DMBL0L-A900JWVON"],
  ["robot-ecovacs-x11-pro", "DMBL0L-A900J5HJ0"],
  ["robot-ecovacs-x12-pro", "DMBL0L-A900JS61Y"],
  ["waterdispenser--uw-2262hw-1", "DMAWEM-A900GDIXH"],
  ["waterdispenser-extra-16-dsbe1fa900gsoln", "DMCI17-A900I6OFW"],
]);

function foldIdentity(value) {
  if (value === null || value === undefined) return "";
  return String(value).normalize("NFKC").toLocaleLowerCase("en-US");
}

function normalizeIdentity(value) {
  return foldIdentity(value).replace(IDENTITY_SEPARATOR_PATTERN, "");
}

function tokenizedIdentity(value) {
  const folded = foldIdentity(value);
  return folded.match(/[\p{L}\p{N}]+/gu) || [];
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function exactModelMatch(text, model) {
  const modelTokens = tokenizedIdentity(model);
  if (modelTokens.length === 0) return false;

  const foldedText = foldIdentity(text);
  if (!foldedText) return false;

  const modelPattern = modelTokens.map(escapeRegExp).join(MODEL_SEPARATOR_PATTERN);
  const pattern = new RegExp(
    `(?:^|[^\\p{L}\\p{N}])${modelPattern}(?=$|[^\\p{L}\\p{N}])`,
    "giu",
  );

  for (const match of foldedText.matchAll(pattern)) {
    const remainder = foldedText.slice(match.index + match[0].length);
    if (!RELATED_MODEL_SUFFIX_PATTERN.test(remainder)) return true;
  }

  return false;
}

function listingIdentityText(listing) {
  if (listing === null || listing === undefined) return "";
  if (typeof listing !== "object") return String(listing);
  if (Array.isArray(listing)) return listing.map(listingIdentityText).join(" ");

  return ["title", "name", "label", "subtitle", "condition"]
    .map((field) => listing[field])
    .filter((value) => value !== null && value !== undefined)
    .join(" ");
}

function isExcludedListing(listing) {
  const text = foldIdentity(listingIdentityText(listing))
    .replace(/(?:無|免|不需|不用|不含)耗材/gu, "")
    .replace(/(?:no|without)\s+consumables?/gu, "");
  return text !== "" && EXCLUDED_LISTING_PATTERNS.some((pattern) => pattern.test(text));
}

function isExplicitlyDiscontinued(statement) {
  const text = foldIdentity(statement).replace(/\s+/g, " ").trim();
  if (!text) return false;
  if (UNCERTAIN_DISCONTINUATION_PATTERNS.some((pattern) => pattern.test(text))) return false;
  return EXPLICIT_DISCONTINUATION_PATTERNS.some((pattern) => pattern.test(text));
}

function isReviewedPchomeBinding(productId, pchomeProductId) {
  return REVIEWED_PCHOME_BINDINGS.get(productId) === pchomeProductId;
}

module.exports = {
  exactModelMatch,
  isExcludedListing,
  isExplicitlyDiscontinued,
  isReviewedPchomeBinding,
  normalizeIdentity,
  tokenizedIdentity,
};

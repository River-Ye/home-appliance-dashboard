const IDENTITY_SEPARATOR_PATTERN = /[^\p{L}\p{N}]+/gu;
const MODEL_SEPARATOR_PATTERN = "[\\s\\p{P}\\p{S}_]*";
const RELATED_MODEL_SUFFIX_PATTERN = /^(?:[\s\p{P}\p{S}_]*)(?:pro|plus|max|ultra|mini|lite|air|v(?:ersion)?\s*\d+|mk\s*\d+|gen(?:eration)?\s*\d+)(?=$|[^\p{L}\p{N}])/iu;
const { OFFICIAL_SUGGESTED_PRICE_HOSTS } = require("./dashboard-contract");

const EXCLUDED_LISTING_PATTERNS = [
  /(?:二手(?:品)?|中古(?:品)?|福利品|展示(?:機|品)|樣品機|拆封品|開箱品|整新品|翻新品|瑕疵品|箱損品)/iu,
  /(?:配件(?:專用)?|耗材(?:組)?|替換(?:用)?(?:濾心|濾網)|(?:濾心|濾網)(?:組|耗材|替換)|刀架|磨刀器|疊架)/iu,
  /(?:(?:專用|替換(?:用)?|另購|加購|單售|另售|增高|移動|萬用)\s*底座|(?:洗衣機|烘衣機|冰箱|電視|螢幕|顯示器|家電)\s*(?:原廠|專用|增高|移動|萬用)?\s*底座|底座\s*(?:配件|專用|替換(?:用)?|另購|加購|單售|另售|組))/iu,
  /\b(?:used|pre[\s-]?owned|refurbished|renewed|open[\s-]?box|accessor(?:y|ies)|consumables?)\b/iu,
  /\b(?:display|floor|demo)\s+(?:model|unit)\b/iu,
  /\b(?:replacement\s+(?:filter|cartridge|part)|spare\s+parts?|parts?\s+only)\b/iu,
];

const EXPLICIT_UNAVAILABLE_LISTING_PATTERNS = [
  /已停售/u,
  /已售完/u,
  /\bnot available for sale\b/iu,
  /\bout of stock,?\s*coming soon\b/iu,
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
  ["blender-extra-8-dmay0g-a900agmd8", "DMAY0G-A900AGMD8"],
  ["blender-extra-9-qbao0f-a900as2dj", "QBAO0F-A900AS2DJ"],
  ["blender-extra-16-dmay01a900gfjco", "DMAY01-A900GFJCO"],
  ["chair-irocks-t05-plus", "QABD80-A900AS2SD"],
  ["coffee-delonghi-ecam350-25-sb", "DMAT03-A900J0QWV"],
  ["coffee-gaggia-anima-cmf", "DMAT01-A900GG8P0"],
  ["coffee-jura-e8-15646", "DMAT3G-A900JFELW"],
  ["coffee-jura-ena-4-15344", "DMAT00-A900BQG97"],
  ["chair-cougar-stryder", "DQBJ0A-A900JCVY5"],
  ["cookware-extra-17-deawmja900jmza5", "DEAWMJ-A900JMZA5"],
  ["cookware-extra-19-dees01a900iq6x3", "DEES01-A900IQ6X3"],
  ["cookware-fissler-levital-28cm", "DEAWED-A900HZZIP"],
  ["cookware-fissler-cianmic-28cm", "DEAWN3-A900JSN52"],
  ["cookware-sambonet-titan-28cm", "DEAW03-A900BSUA7"],
  ["cookware-tefal-daisy-28cm-ih", "DEES01-A900ILXUX"],
  ["cookware-thermos-kfm-030d-r-30cm", "DEAWMW-A900JMZB6"],
  ["cookware-wmf-astoria-20cm-2-5l", "DEAWMJ-A900JN626"],
  ["cookware-wmf-durado-24cm", "DEAWMW-A900JCBKJ"],
  ["cookware-zwilling-joy-plus-24cm", "DEAWMW-A900J5MY9"],
  ["dishwasher-asko-dbi544id-w-tw", "DMBR16-A900HZZEG"],
  ["dishwasher-extra-17-dmbr17a900ihtz3", "DMBR17-A900IHTZ3"],
  ["dishwasher-haier-h500", "DMBR25-A900IUNDB"],
  ["dehumidifier-extra-9-dmbq00-a900jb38a", "DMBQ00-A900JB38A"],
  ["dryer-panasonic-nh-80rz-w", "DPAI1H-A900I7ZB7"],
  ["fan-extra-8-dmablm-a900eorp0", "DMABLM-A900EORP0"],
  ["fan-extra-10-dmab30-a900eoq5x", "DMAB30-A900EOQ5X"],
  ["garmentcare-lg-r723wg", "DPAI1L-A900HWRUQ"],
  ["knife-extra-17-debm2ca900j9cyp", "DEBM2C-A900J9CYP"],
  ["knife-kai-16-5cm", "DEAGRW-A900JUUQL"],
  ["knife-kai-18cm", "DEAGRW-A900GMT17"],
  ["knife-tefal-ice-force-15cm", "DEES09-A900HK440"],
  ["knife-wmf-18cm", "DEAWRU-A900HDL2T"],
  ["monitor-dell-aw3225qf", "DSABOK-A900HB1B5"],
  ["monitor-lg-45gx90sa", "DSBC1Z-A900J732D"],
  ["monitor-samsung-s32hg806es", "DSABSK-A900K0G32"],
  ["network-switch-qnap-qsw-l2110-2s8t", "DRAF9S-A900K8WTX"],
  ["network-switch-qnap-qsw-3216r-8s8t", "DRAFE2-A900JCMNO"],
  ["oven-extra-6-dmbj02-a900i9lq2", "DMBJ02-A900I9LQ2"],
  ["ap-blueair-3450i", "DMAUE4-A900I5SSZ"],
  ["purifier-extra-6-dmaue4-a900ijcap", "DMAUE4-A900IJCAP"],
  ["purifier-extra-7-dmaue4-a900j9knk", "DMAUE4-A900J9KNK"],
  ["purifier-extra-8-dmaue4-a900i7dj1", "DMAUE4-A900I7DJ1"],
  ["purifier-extra-9-dmaue4-a900i7dn1", "DMAUE4-A900I7DN1"],
  ["purifier-extra-10-dmaue4-a900j40ne", "DMAUE4-A900J40NE"],
  ["refrigerator-hitachi-hrbn5366df", "DPAC95-A900HE4RJ"],
  ["refrigerator-hitachi-rv469", "DPACGV-A900BFMHM"],
  ["robot-ecovacs-t50-pro", "DMBL0L-A900IDIPA"],
  ["robot-ecovacs-t80-omni", "DMBL0L-A900IT3IU"],
  ["robot-ecovacs-t90-pro", "DMBL0L-A900JWVON"],
  ["robot-ecovacs-x11-pro", "DMBL0L-A900J5HJ0"],
  ["robot-ecovacs-x12-pro", "DMBL0L-A900JS61Y"],
  ["robot-roborock-qrevo-edge-2-flow", "DMBL1C-A900K7R6R"],
  ["robot-narwal-freo-z-ultra", "DMBL4U-A900JA072"],
  ["robot-xiaomi-vacuum-6-pro-pv21gl", "DMBL53-A900KAFL2"],
  ["smartlock-aqara-a100", "DQBS4N-A900I8573"],
  ["smartlock-fibre-fb90", "DQBS4N-A900J43AP"],
  ["smartlock-panasonic-g11", "DQBS4N-A900K1WBU"],
  ["standingdesk-irocks-d01-120", "DQBJ4C-A900I9XVY"],
  ["standingdesk-irocks-d01-150", "DQBJ4C-A900HUG3C"],
  ["standingdesk-irocks-d01-160", "DQBJ4C-A900ITV12"],
  ["standingdesk-irocks-d01-180", "DQBJ4C-A900HUGSO"],
  ["tv-extra-8-dpad09-a900j9faz", "DPAD09-A900J9FAZ"],
  ["tv-extra-18-dpadtoa900jne73", "DPADTO-A900JNMOP"],
  ["tv-jvc-70tg2", "DPADK9-A900HY2CU"],
  ["tv-philips-70pqt8159", "DPADIK-A900K0GIF"],
  ["vac-lg-a9x", "DMAX8K-A900HLX9W"],
  ["vacuum-extra-10-dmax8k-a900hlxaq", "DMAX8K-A900HLXAQ"],
  ["waterdispenser--uw-2262hw-1", "DMAWEM-A900GDIXH"],
  ["waterdispenser-extra-16-dsbe1fa900gsoln", "DMCI17-A900I6OFW"],
  ["waterdispenser-sakura-p0532", "DMCI0O-A900K3T62"],
  ["waterdispenser-acuo-ur-3902aw-1", "DMAWI0-A900ITF3M"],
  ["waterdispenser-haier-hr-wf-4tcro600", "DSBE1F-A900IHRME"],
  ["washer-heran-hwm-1061v", "DPAIB6-A900IM3H3"],
  ["washer-panasonic-na-90eb-w", "DPAI1H-A900ALPGU"],
  ["washerdryer-lg-wd-s2220b", "DPAI1L-A900IXKBU"],
  ["washerdryer-panasonic-na-sd10tb", "DPAI1H-A900JXCDB"],
  ["wifi-asus-zenwifi-bd5-2pack", "DSBC0Z-A900I6OJ2"],
  ["wifi-mercusys-halo-h25be-2pack", "DRAFLT-A900K123M"],
  ["wifi-mercusys-halo-h80x-3pack", "DRAFEM-A900F9H1Y"],
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

function exactProductModelMatch(text, product) {
  if (product?.category === "aircon" && product.modelPair) {
    return exactModelMatch(text, product.modelPair.indoor)
      && exactModelMatch(text, product.modelPair.outdoor);
  }
  if (
    product?.category === "waterheater"
    && product?.type === "heat_pump"
    && Array.isArray(product.componentModels)
    && product.componentModels.length > 1
  ) {
    return product.componentModels.every((model) => exactModelMatch(text, model));
  }
  return exactModelMatch(text, product?.model);
}

function hasOfficialSuggestedPriceSource(product) {
  if (product?.price?.basis !== "official_suggested") return true;
  try {
    const hostname = new URL(product.buyUrl).hostname.toLowerCase();
    return [...OFFICIAL_SUGGESTED_PRICE_HOSTS].some((allowed) => (
      hostname === allowed || hostname.endsWith(`.${allowed}`)
    ));
  } catch (_error) {
    return false;
  }
}

function hasCompleteCompositeSystemIdentityAndPrice(product) {
  const componentModels = Array.isArray(product?.componentModels) ? product.componentModels : [];
  const normalizedComponentModels = componentModels.map((model) => normalizeIdentity(model));
  const composite = product?.category === "waterheater"
    && product?.type === "heat_pump"
    && (componentModels.length > 1 || /[+＋]/u.test(String(product.model || "")));
  if (!composite) return true;
  return componentModels.length > 1
    && new Set(normalizedComponentModels).size === componentModels.length
    && componentModels.every((model) => typeof model === "string" && model.trim() && exactModelMatch(product.model, model))
    && product.price?.scope === "complete_system";
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

function isExplicitlyUnavailable(listing) {
  const text = foldIdentity(listingIdentityText(listing));
  return text !== "" && EXPLICIT_UNAVAILABLE_LISTING_PATTERNS.some((pattern) => pattern.test(text));
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
  exactProductModelMatch,
  hasCompleteCompositeSystemIdentityAndPrice,
  hasOfficialSuggestedPriceSource,
  isExcludedListing,
  isExplicitlyDiscontinued,
  isExplicitlyUnavailable,
  isReviewedPchomeBinding,
  normalizeIdentity,
  tokenizedIdentity,
};

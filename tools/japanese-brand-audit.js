const {
  JAPANESE_BRAND_ROSTER,
} = require("./dashboard-contract");

const BRAND_CATALOGS = new Map([
  ["Sony", "https://www.sony.com.tw/zh/all-products"],
  ["Panasonic", "https://www.panasonic.com/tw/consumer.html"],
  ["HITACHI", "https://hitachi-homeappliances.com.tw/products/"],
  ["Mitsubishi Electric", "https://www.mitsubishielectric.com.tw/home/"],
  ["Daikin", "https://www.hotaidev.com.tw/web/"],
  ["GENERAL", "https://www.fujitsu-general.com/tw/products/"],
  ["Rinnai", "https://www.rinnai.tw/"],
  ["Noritz", "https://www.noritz.co.jp/product/"],
  ["TOTO", "https://www.twtoto.com.tw/"],
]);

// This is the manually reviewed Taiwan-relevant line map. A category in the
// map can still resolve to no_eligible_taiwan_model when no exact model meets
// the catalog's price, voltage, warranty, channel, and evidence contracts.
const RELEVANT_CATEGORY_IDS = new Map([
  ["Sony", new Set(["tv", "soundbar", "monitor"])],
  ["Panasonic", new Set([
    "tv", "soundbar", "fan", "circulator", "dehumidifier", "purifier", "aircon",
    "vacuum", "washer", "dryer", "washerdryer", "garmentcare", "refrigerator",
    "blender", "coffee", "oven", "waterdispenser", "dishwasher", "waterheater",
    "bidet", "smartlock", "monitor",
  ])],
  ["HITACHI", new Set([
    "dehumidifier", "aircon", "robot", "vacuum", "washer", "dryer",
    "washerdryer", "refrigerator", "oven", "dishwasher", "smartlock", "waterheater",
  ])],
  ["Mitsubishi Electric", new Set(["fan", "dehumidifier", "aircon", "refrigerator"])],
  ["Daikin", new Set(["dehumidifier", "purifier", "aircon", "waterheater"])],
  ["GENERAL", new Set(["aircon"])],
  ["Rinnai", new Set(["dryer", "cookware", "oven", "waterdispenser", "dishwasher", "waterheater"])],
  ["Noritz", new Set(["waterheater"])],
  ["TOTO", new Set(["bidet"])],
]);

const CATEGORY_SOURCES = new Map([
  ["Sony:tv", "https://www.sony.com.tw/zh/bravia"],
  ["Sony:soundbar", "https://www.sony.com.tw/zh/home-theatre-sound-bars"],
  ["Sony:monitor", "https://www.sony.com.tw/zh/gaming-gear"],
  ["Panasonic:monitor", "https://www.panasonic.com/tw/consumer/digital-av/monitor/ts-27gf40ctk.html"],
  ["Panasonic:coffee", "https://pstw.panasonic.com.tw/Shop/Product/coffee"],
  ["Panasonic:waterheater", "https://www.panasonic.com/tw/consumer/all-products.html"],
  ["HITACHI:dishwasher", "https://hitachi-homeappliances.com.tw/products/products_03.php?pid=HDFF168CV"],
  ["HITACHI:robot", "https://hitachi-homeappliances.com.tw/products/products_compare.php?gid=B05&prod=RVX20DPA"],
  ["HITACHI:waterheater", "https://www.jci-hitachi.tw/service/download/RoHS.aspx/download.aspx"],
  ["Daikin:aircon", "https://www.hotaidev.com.tw/web/product-home-dm.html"],
  ["Daikin:purifier", "https://www.hotaidev.com.tw/web/product/4.html"],
  ["Daikin:waterheater", "https://www.hotaidev.com.tw/web/seven-core-tech.html"],
  ["GENERAL:aircon", "https://www.fujitsu-general.com/tw/products/split/wall/"],
  ["Rinnai:waterheater", "https://www.rinnai.tw/"],
  ["Noritz:waterheater", "https://www.hosun.com.tw/tw/html/faq/show.aspx?id=2911&kid=6"],
]);

const NO_ELIGIBLE_REASONS = new Map([
  ["HITACHI:robot", "台灣官方有 RV-X20DPA 掃拖機器人產品線，但本次即時查核 Yahoo 售完、PChome 舊 SKU 無資料，momo 候選頁亦已下架；未確認可購新品通路前保留追蹤，不以官方產品頁或搜尋快取推定現售。"],
  ["Panasonic:coffee", "台灣官方商城有 NC-EA801 全自動義式咖啡機，但本次查核顯示售完、貨到通知；未完成可信現售與等額替換評估前保留追蹤。NC-A701 為美式機，不以相近型態補數。"],
  ["Panasonic:waterheater", "Panasonic 台灣官方全部商品目錄沒有住宅熱水器分類或現售型號，故不以海外型號、熱水瓶或溫水便座誤補。"],
  ["Daikin:waterheater", "和泰興業台灣官方技術頁提及熱泵熱水解決方案，但未找到同時符合本分類住宅邊界、台灣現售 exact model、公開整套數字價格與台灣保固的機種。"],
  ["Rinnai:oven", "台灣官方相關機型以嵌入式廚房設備為主，不符合本分類以家電櫃多功能檯面機為主的收錄邊界。"],
  ["Noritz:waterheater", "日本官方仍有熱水器產品線，但原台灣代理豪山的官方 FAQ 明載 2013 年底終止代理且不再供應維修零件；未找到具現行台灣官方銷售、台灣保固及公開數字價格的 exact model。"],
]);

function canonicalJapaneseBrand(value) {
  const normalized = String(value || "").trim().toLowerCase().replace(/[\s_-]+/g, "");
  return {
    sony: "Sony",
    panasonic: "Panasonic",
    hitachi: "HITACHI",
    mitsubishielectric: "Mitsubishi Electric",
    daikin: "Daikin",
    general: "GENERAL",
    fujitsugeneral: "GENERAL",
    rinnai: "Rinnai",
    noritz: "Noritz",
    toto: "TOTO",
  }[normalized] || null;
}

function normalizedModelIdentity(value) {
  return String(value || "")
    .normalize("NFKC")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, " ");
}

function productIdentity(product) {
  const brand = canonicalJapaneseBrand(product?.brand) || String(product?.brand || "").trim();
  let modelIdentity = normalizedModelIdentity(product?.model);
  if (product?.category === "aircon" && product.modelPair) {
    modelIdentity = [product.modelPair.indoor, product.modelPair.outdoor]
      .map(normalizedModelIdentity)
      .join(" + ");
  } else if (Array.isArray(product?.componentModels) && product.componentModels.length > 1) {
    modelIdentity = product.componentModels.map(normalizedModelIdentity).join(" + ");
  }
  return `${product?.category || ""}\n${brand}\n${modelIdentity}`;
}

function sameCatalogIdentity(product, baselineProduct) {
  if (!baselineProduct || product?.category !== baselineProduct?.category) return false;
  const currentModel = productIdentity({ ...product, brand: "" });
  const baselineModel = productIdentity({ ...baselineProduct, brand: "" });
  if (currentModel !== baselineModel) return false;
  const currentBrand = canonicalJapaneseBrand(product?.brand) || String(product?.brand || "").normalize("NFKC").trim();
  const baselineBrand = canonicalJapaneseBrand(baselineProduct?.brand) || String(baselineProduct?.brand || "").normalize("NFKC").trim();
  if (currentBrand === baselineBrand) return true;
  const brandMigration = new Set([currentBrand, baselineBrand]);
  return brandMigration.size === 2
    && brandMigration.has("Mitsubishi")
    && brandMigration.has("Mitsubishi Electric");
}

function sortProducts(products) {
  return [...products].sort((left, right) => (
    Number(left.rank || Number.MAX_SAFE_INTEGER) - Number(right.rank || Number.MAX_SAFE_INTEGER)
      || left.id.localeCompare(right.id)
  ));
}

function hasTaiwanCompatiblePower(product) {
  const voltage = String(product?.voltage || "");
  const explicitMainsVoltage = /(?:\b(?:110|120|220|230|240)\s*V\b|\b100\s*(?:[-–—~～]|至)\s*240\s*V\b|電池|非電器|市電不適用)/iu.test(voltage);
  const certifiedExternalAdapter = /(?:BSMI|驗證登錄)/iu.test(voltage)
    && /(?:適配器|變壓器)/u.test(voltage)
    && /\b(?:DC\s*)?\d+(?:\.\d+)?\s*V\b/iu.test(voltage);
  const ratedUsbPower = /USB/iu.test(voltage)
    && /(?:\bDC\s*5\s*V\b|\b5\s*V\s*DC\b)/iu.test(voltage)
    && [...voltage.matchAll(/\b(\d+(?:\.\d+)?)\s*(?:m?A|W)\b/giu)].some((match) => Number(match[1]) > 0);
  return explicitMainsVoltage || certifiedExternalAdapter || ratedUsbPower;
}

function isEligibleTaiwanCoverageProduct(product, options = {}) {
  const price = product?.price || {};
  const marketRisk = `${product?.voltage || ""} ${product?.warranty || ""}`;
  const baselineEligible = product?.channel === "tw"
    && price.currency === "TWD"
    && Number.isFinite(price.converted)
    && price.converted > 0
    && !/(?:50\s*Hz(?![^；,，]*60\s*Hz)|日本地區保固|無台灣保固|不提供台灣|海外通路|跨境)/iu.test(marketRisk);
  if (!baselineEligible || !options.requireNewContract) return baselineEligible;
  return Number.isFinite(price.amount)
    && price.amount > 0
    && price.amount === price.converted
    && ["retailer_current", "official_suggested"].includes(price.basis)
    && product.installation
    && ["included_basic", "excluded", "not_stated"].includes(product.installation.status)
    && typeof product.installation.note === "string"
    && product.installation.note.trim()
    && hasTaiwanCompatiblePower(product)
    && /(?:台灣|公司貨)/u.test(String(product.warranty || ""));
}

function representativeIds(existingProducts, addedProducts) {
  if (existingProducts.length > 0 && addedProducts.length > 0) {
    return {
      existingProductIds: sortProducts(existingProducts).slice(0, 2).map((product) => product.id),
      addedProductIds: sortProducts(addedProducts).slice(0, 1).map((product) => product.id),
    };
  }
  return {
    existingProductIds: sortProducts(existingProducts).slice(0, 3).map((product) => product.id),
    addedProductIds: sortProducts(addedProducts).slice(0, 3).map((product) => product.id),
  };
}

function coverageStatus(existingProducts, addedProducts) {
  if (existingProducts.length > 0 && addedProducts.length > 0) return "covered_supplemented";
  if (addedProducts.length > 0) return "covered_added";
  if (existingProducts.length > 0) return "covered_existing";
  return null;
}

function productComparisonLabel(product) {
  const traits = [
    product.model,
    product.type,
    product.capacityBand,
    Number.isFinite(product.roomSizeUpperPing) ? `上限 ${product.roomSizeUpperPing} 坪` : "",
  ].filter(Boolean);
  return `${product.id}（${traits.join("／")}）`;
}

function reviewReason({ brand, categoryId, categoryLabel, status, existingProducts, addedProducts, checkedAt }) {
  const label = categoryLabel || categoryId;
  const existingCount = existingProducts.length;
  const addedCount = addedProducts.length;
  if (status === "covered_existing") {
    const representatives = existingProducts.slice(0, 3).map(productComparisonLabel).join("、");
    return `${checkedAt} 核對 ${brand} 官方產品目錄；${label} 已有 ${existingCount} 款台灣通路、TWD 公開數字價格的合格 exact model，代表款為 ${representatives}；不因超過 3 款而刪除既有商品。`;
  }
  if (status === "covered_added") {
    const additions = addedProducts.slice(0, 3).map(productComparisonLabel).join("、");
    return `${checkedAt} 核對 ${brand} 官方產品目錄；${label} 原為零覆蓋，本次新增 ${additions}，且逐款具台灣現售、公開數字價格、適用電壓與台灣保固。`;
  }
  if (status === "covered_supplemented") {
    const additions = addedProducts.slice(0, 3).map(productComparisonLabel).join("、");
    const baseline = existingProducts.slice(0, 2).map(productComparisonLabel).join("、");
    return `${checkedAt} 核對 ${brand} 官方產品目錄；${label} 在既有代表 ${baseline} 外，新增 ${additions}，以 exact model、型態／能力帶或公開價位差異補強比較。`;
  }
  if (status === "no_eligible_taiwan_model") {
    return NO_ELIGIBLE_REASONS.get(`${brand}:${categoryId}`)
      || `${checkedAt} 核對 ${brand} 官方產品目錄；雖有與${label}相關的產品線，但未找到同時符合台灣現售 exact model、新品公開數字價格、適用電壓、台灣保固與證據完整度的機種。`;
  }
  return `${checkedAt} 核對 ${brand} 官方產品目錄；未見與${label}收錄邊界相符的台灣產品線，因此不以相近品、配件或海外型號補數。`;
}

function buildJapaneseBrandReview({ category, products, baselineById, checkedAt }) {
  if (!category?.id || !/^\d{4}-\d{2}-\d{2}$/.test(checkedAt)) {
    throw new Error("Japanese-brand review requires a category and checkedAt=YYYY-MM-DD");
  }
  const categoryProducts = products.filter((product) => product.category === category.id);
  return JAPANESE_BRAND_ROSTER.map((brand) => {
    const covered = categoryProducts.filter((product) => canonicalJapaneseBrand(product.brand) === brand);
    const existing = covered.filter((product) => (
      sameCatalogIdentity(product, baselineById.get(product.id))
        && isEligibleTaiwanCoverageProduct(product)
    ));
    const added = covered.filter((product) => (
      !sameCatalogIdentity(product, baselineById.get(product.id))
        && isEligibleTaiwanCoverageProduct(product, { requireNewContract: true })
    ));
    const status = coverageStatus(existing, added)
      || (RELEVANT_CATEGORY_IDS.get(brand)?.has(category.id)
        ? "no_eligible_taiwan_model"
        : "no_relevant_line");
    const ids = representativeIds(existing, added);
    return {
      brand,
      status,
      checkedAt,
      officialSources: [...new Set([
        CATEGORY_SOURCES.get(`${brand}:${category.id}`),
        BRAND_CATALOGS.get(brand),
      ].filter(Boolean))],
      ...ids,
      reason: reviewReason({
        brand,
        categoryId: category.id,
        categoryLabel: category.label,
        status,
        existingProducts: sortProducts(existing),
        addedProducts: sortProducts(added),
        checkedAt,
      }),
    };
  });
}

module.exports = {
  BRAND_CATALOGS,
  RELEVANT_CATEGORY_IDS,
  buildJapaneseBrandReview,
  canonicalJapaneseBrand,
  hasTaiwanCompatiblePower,
  isEligibleTaiwanCoverageProduct,
  sameCatalogIdentity,
};

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
  ["Sony", new Set(["tv", "soundbar", "monitor", "mouse", "keyboard", "mousepad"])],
  ["Panasonic", new Set([
    "tv", "soundbar", "fan", "circulator", "dehumidifier", "purifier", "aircon",
    "vacuum", "washer", "dryer", "washerdryer", "garmentcare", "refrigerator",
    "blender", "coffee", "oven", "waterdispenser", "dishwasher", "waterheater",
    "bidet", "smartlock", "monitor",
  ])],
  ["HITACHI", new Set([
    "dehumidifier", "aircon", "robot", "vacuum", "washer", "dryer",
    "washerdryer", "refrigerator", "oven", "dishwasher", "smartlock", "purifier", "waterheater",
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
  ["Sony:mouse", "https://store.sony.com.tw/product/MSE-G500/B"],
  ["Sony:keyboard", "https://store.sony.com.tw/product/KBD-G900/B"],
  ["Sony:mousepad", "https://store.sony.com.tw/product/MPD-F900/B"],
  ["Panasonic:monitor", "https://www.panasonic.com/tw/consumer/digital-av/monitor/ts-27gf40ctk.html"],
  ["Panasonic:coffee", "https://pstw.panasonic.com.tw/Shop/Product/coffee"],
  ["Panasonic:waterheater", "https://www.panasonic.com/tw/consumer/all-products.html"],
  ["HITACHI:dishwasher", "https://hitachi-homeappliances.com.tw/products/products_03.php?pid=HDFF168CV"],
  ["HITACHI:purifier", "https://www.jci-hitachi.tw/products/products_level2.aspx?pid=11"],
  ["HITACHI:robot", "https://hitachi-homeappliances.com.tw/products/products_compare.php?gid=B05&prod=RVX20DPA"],
  ["HITACHI:waterheater", "https://www.jci-hitachi.tw/service/download/RoHS.aspx/download.aspx"],
  ["Daikin:aircon", "https://www.hotaidev.com.tw/web/product-home-dm.html"],
  ["Daikin:purifier", "https://www.hotaidev.com.tw/web/product/4.html"],
  ["Daikin:waterheater", "https://www.hotaidev.com.tw/web/seven-core-tech.html"],
  ["GENERAL:aircon", "https://www.fujitsu-general.com/tw/products/split/wall/"],
  ["Rinnai:waterheater", "https://www.rinnai.tw/"],
  ["Noritz:waterheater", "https://www.hosun.com.tw/tw/html/faq/show.aspx?id=2911&kid=6"],
]);

// Manually read on 2026-09-01 for all three peripheral categories; not inferred
// from absence in RELEVANT_CATEGORY_IDS. Recheck these catalogs before a full audit.
const PERIPHERAL_CATALOG_REVIEWS = new Map([
  ["Sony", { source: "https://www.sony.com.tw/corporate/home/NewsCenter/Detail/INZONESERIES", note: "官方台灣公告明列 INZONE Mouse-A、KBD-H75、Mat-F 與 Mat-D，屬正式鍵鼠周邊產品線。" }],
  ["Panasonic", { source: "https://www.panasonic.com/tw/consumer/all-products.html", note: "已讀台灣全部商品目錄，列影音通訊、空調、大家電、廚房、美容及住宅用品，未見獨立成品滑鼠、鍵盤或滑鼠墊；電視說明書的 USB／藍牙輸入支援不是販售鍵鼠。" }],
  ["HITACHI", { source: "https://hitachi-homeappliances.com.tw/products/", note: "已讀台灣產品情報，現列冰箱、洗衣機、吸塵器、多功能料理爐與洗碗機，未見本次三類獨立鍵鼠周邊。" }],
  ["Mitsubishi Electric", { source: "https://www.mitsubishielectric.com.tw/home/", note: "已讀台灣家電全產品選單，列冰箱／冷凍櫃、除濕機、風扇、烘被機與空調；CNC 文件的螢幕軟體鍵盤不是完整實體電腦鍵盤，亦非滑鼠或滑鼠墊。" }],
  ["Daikin", { source: "https://www.hotaidev.com.tw/web/product/3.html", note: "已讀和泰大金完整家用／商用產品選單，涵蓋空調、清淨、除濕、冰水機、換氣及智能控制；控制器不是電腦鍵鼠，未見本次三類產品線。" }],
  ["GENERAL", { source: "https://www.generalww.com/tw/products/index.html", note: "已讀將軍台灣產品目錄，只有變頻分離式、一對多與 VRF 空調；排除富士通電腦的鍵鼠保固文件，不能以不同企業的 Fujitsu 電腦周邊當 GENERAL 空調品牌。" }],
  ["Rinnai", { source: "https://www.rinnai.tw/", note: "已讀台灣產品入口，列熱水器、瓦斯爐、排油煙機、烘碗機、洗碗機、無水鍋、乾衣機及商用設備，未見獨立電腦鍵鼠或滑鼠墊。" }],
  ["Noritz", { source: "https://www.noritz.co.jp/product/", note: "已讀日本官方商品目錄，涵蓋給湯、浴室、廚房與暖房；面板按鍵及遙控器不屬本次完整電腦鍵盤，也未見滑鼠或滑鼠墊產品線。" }],
  ["TOTO", { source: "https://www.twtoto.com.tw/", note: "已讀台灣全商品分類，涵蓋馬桶、便座、臉盆、龍頭、浴缸、暖房、烘手機及浴室配件，未見本次電腦鍵鼠周邊；不把 TOTOLINK 視為 TOTO。" }],
]);

// Manually read on 2026-09-01 for bedsheet, comforter, and pillow. These notes
// are shared because the same official catalog boundary was checked for all three.
const BEDDING_CATALOG_REVIEWS = new Map([
  ["Sony", "Chrome 人工逐項檢視台灣官方全產品目錄；現列影音、相機、行動與遊戲等電子產品，未見成人床包、完整被芯或睡眠枕產品線。"],
  ["Panasonic", "Chrome 人工逐項檢視台灣官方家電、美容健康與住宅設備目錄，未見成人床包、完整被芯或睡眠枕產品線。"],
  ["HITACHI", "Chrome 人工逐項檢視台灣官方冰箱、洗衣、吸塵、料理爐與洗碗機目錄，未見成人床包、完整被芯或睡眠枕產品線。"],
  ["Mitsubishi Electric", "Chrome 人工逐項檢視官方家電目錄；烘被機屬電器而非寢具，未見成人床包、完整被芯或睡眠枕產品線。"],
  ["Daikin", "Chrome 人工逐項檢視和泰大金官方空調、空氣與冷凍系統目錄，未見成人床包、完整被芯或睡眠枕產品線。"],
  ["GENERAL", "Chrome 人工逐項檢視台灣官方分離式、多聯式與 VRF 空調目錄，未見成人床包、完整被芯或睡眠枕產品線。"],
  ["Rinnai", "Chrome 人工逐項檢視台灣官方熱水、廚房與乾衣設備目錄，未見成人床包、完整被芯或睡眠枕產品線。"],
  ["Noritz", "Chrome 人工逐項檢視日本官方給湯、浴室、廚房與住宅設備目錄，未見成人床包、完整被芯或睡眠枕產品線。"],
  ["TOTO", "Chrome 人工逐項檢視台灣官方衛浴與住宅設備目錄，未見成人床包、完整被芯或睡眠枕產品線。"],
]);

const NO_ELIGIBLE_REASONS = new Map([
  ["Sony:keyboard", "台灣 Sony Store 現售 KBD-G900/B 完整成品鍵盤，具公開新台幣售價及台灣保固；官方資料確認 USB 有線供電但未明示電壓／電流，不推定額定值，因此可收錄比較，尚不列為符合嚴格供電查核的日系覆蓋代表。"],
  ["Sony:mousepad", "台灣 Sony Store 有 MPD-F900/B 與 MPD-D700/Z 正式新品滑鼠墊，但原商品頁明示本商品無保固；可作無保固比較參考，不冒充具台灣保固的日系覆蓋代表或 Top Pick。"],
  ["HITACHI:robot", "台灣官方有 RV-X20DPA 掃拖機器人產品線，但本次即時查核 Yahoo 售完、PChome 舊 SKU 無資料，momo 候選頁亦已下架；未確認可購新品通路前保留追蹤，不以官方產品頁或搜尋快取推定現售。"],
  ["HITACHI:purifier", "台灣日立江森官方空氣清淨機分類仍列 exact model UDP-J60，但本次查核可信大型通路僅見蝦皮商城已售罄，另 UDP-PF120J 於 Yahoo 購物中心已停售；未找到同時符合台灣現售新品、公開數字價格與台灣保固的 exact model。"],
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
  const explicitMainsVoltage = /(?:\b(?:110|120|220|230|240)\s*V\b|\b100\s*(?:[-–—~～]|至)\s*240\s*V\b|電池|非電器|市電不適用|[不無]需供電)/iu.test(voltage);
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
  return !/無(?:台灣)?保固|不提供保固|no warranty/iu.test(String(product.warranty || ""))
    && Number.isFinite(price.amount)
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
  const peripheralNote = ["mouse", "keyboard", "mousepad"].includes(categoryId) ? PERIPHERAL_CATALOG_REVIEWS.get(brand)?.note : "";
  const beddingNote = ["bedsheet", "comforter", "pillow"].includes(categoryId) ? BEDDING_CATALOG_REVIEWS.get(brand) : "";
  return `${checkedAt} 核對 ${brand} 官方產品目錄；${peripheralNote || beddingNote || `未見與${label}收錄邊界相符的台灣產品線，因此不以相近品、配件或海外型號補數。`}`;
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
        ...(["mouse", "keyboard", "mousepad"].includes(category.id) ? [PERIPHERAL_CATALOG_REVIEWS.get(brand)?.source] : []),
        ...(["mouse", "keyboard", "mousepad"].includes(category.id) ? [] : [BRAND_CATALOGS.get(brand)]),
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

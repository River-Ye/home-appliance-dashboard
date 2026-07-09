const fs = require("fs");
const path = require("path");
const { readDashboardProducts } = require("./read-dashboard-products");

const CHECKED_AT = "2026-07-09";
const CONCURRENCY = Number(process.env.HISTORICAL_LOW_CONCURRENCY || 6);
const QUERY_LIMIT = Number(process.env.HISTORICAL_LOW_QUERY_LIMIT || 2);
const HISTORY_LIMIT_PER_SOURCE = Number(process.env.HISTORICAL_LOW_HISTORY_LIMIT || 3);
const FETCH_TIMEOUT_MS = Number(process.env.HISTORICAL_LOW_FETCH_TIMEOUT_MS || 12000);
const BIGGO_SEARCH_ORIGIN = "https://biggo.com.tw";
const BIGGO_API_ORIGIN = "https://biggo.com.tw/api/v1/spa";
const USD_TWD = 32.127508;

const trustedStoreNamePattern = /PChome|PCHome|momo|Momo|Yahoo購物中心|東森|fri?day|myfone|神腦|小米|Xiaomi|環球|Costco|好市多|燦坤|全國電子|家樂福|特力|7-ELEVEN|i預購|信源|小蔡電器|LG官方|Samsung|Sony|BenQ|Dyson|Philips|Panasonic|TOTO|Yale|ASUS|Acer|Dell|Apple/i;
const trustedNindexPattern = /^(tw_(pec|ec)_|tw_mall_shopeemall$)/;
const auctionStorePattern = /拍賣|露天|蝦皮購物|iOPEN Mall|旋轉拍賣/i;
const officialShopPattern = /官方|旗艦|原廠|品牌館|品牌旗艦|官方旗艦|公司貨/i;
const excludedTitlePattern = /二手|中古|福利品|展示品|展示機|拆封|整新|箱損|瑕疵|零件|配件|耗材|濾心|保護貼|保護鏡|外殼|外套|收納|維修|租賃|空機|聊聊|詢價|議價|來電|訂金|預購訂金|贈品|清倉出清|分期|月繳|每期|月付|專案價|申辦|續約|搭門號/i;
const weakModelPattern = /^(桌上型洗碗機|空氣清淨機|循環扇|電風扇|免治馬桶|電子鎖|破壁調理機|全營養調理機)$/i;

const agentVerifiedHistoricalLows = new Map([
  ["tv-extra-13-dpadbu-1900jc97w", {
    historicalLow: {
      status: "found",
      amount: 20999,
      currency: "TWD",
      converted: 20999,
      sourceUrl: "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1262452291&cgp=25999",
      sourceTitle: "LBJ 比價撿便宜歷史價格：Xiaomi 小米 S Pro Mini LED 2026 65 型智慧顯示器",
      evidenceSnippet: "LBJ price_data contains 2026-03-03 at NT$20,999 for the exact-match Yahoo購物中心 product.",
      sourceKind: "price_history",
      confidence: "high",
      checkedAt: CHECKED_AT,
      note: "已由 worker 查核 BigGo、FindPrice、LBJ、Yahoo 與 PChome；採 LBJ Yahoo購物中心 exact-match 商品歷史低點 2026-03-03 NT$20,999。排除會員券、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。",
    },
    checkedSources: [
      "https://www.lbj.tw/BJ/Query.aspx?k=S%20Pro%20Mini%2065%202026",
      "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1262452291&cgp=25999",
      "https://www.findprice.com.tw/fg/Xiaomi%20%E6%99%BA%E6%85%A7%E9%A1%AF%E7%A4%BA%E5%99%A8%20S%20Pro%20Mini%20LED%202026%2065%E5%9E%8B",
      "https://biggo.com.tw/s/%E5%B0%8F%E7%B1%B3%20S%20Pro%20Mini%20LED%2065%202026",
      "https://24h.pchome.com.tw/prod/DPADBU-1900JC97W",
    ],
    rejectedCandidates: [
      "低於 NT$20,999 的蝦皮/拍賣候選多為非官方、私訊價、多尺寸混列或非 exact-match，未採用。",
      "myfone 專案價需搭配電信申辦/續約，不是單品直接購買價，未採用。",
      "S Mini 2025、A Pro 或其他非 S Pro Mini LED 2026 65 型候選未採用。",
    ],
  }],
  ["blender-xiaomi-mjpbj01demtw", {
    historicalLow: {
      status: "found",
      amount: 1860,
      currency: "TWD",
      converted: 1860,
      sourceUrl: "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1260248195&cgp=2149",
      sourceTitle: "LBJ 比價撿便宜歷史價格：Yahoo購物中心 Xiaomi 小米破壁調理機官方旗艦館",
      evidenceSnippet: "LBJ pid=1260248195 price_data shows NT$1,860 on 2025-07-09, 2025-09-17, and 2025-09-24.",
      sourceKind: "price_history",
      confidence: "high",
      checkedAt: CHECKED_AT,
      note: "已由 worker 查核 BigGo、FindPrice、LBJ 與 Xiaomi 官方規格；採 LBJ Yahoo 官方旗艦館歷史最低 NT$1,860。低於此價的福利品、二手、再生工場或非 MJPBJ01DEMTW 候選均排除。",
    },
    checkedSources: [
      "https://www.lbj.tw/BJ/Query.aspx?k=%E7%A0%B4%E5%A3%81%E8%AA%BF%E7%90%86%E6%A9%9F",
      "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1260248195&cgp=2149",
      "https://biggo.com.tw/s/Xiaomi%20%E7%A0%B4%E5%A3%81%E8%AA%BF%E7%90%86%E6%A9%9F",
      "https://www.findprice.com.tw/g/xiaomi%20%E7%A0%B4%E5%A3%81%E8%AA%BF%E7%90%86%E6%A9%9F",
      "https://www.mi.com/tw/product/xiaomi-blender-pro/specs/",
    ],
    rejectedCandidates: [
      "NT$1,450、NT$1,300、NT$1,080 低價候選含福利品、二手或外觀九成新，未採用。",
      "NT$1,479 候選未能確認為 MJPBJ01DEMTW，未採用。",
      "momo NT$1,888 與小米台灣 NT$1,949 為可信候選但高於 NT$1,860。",
    ],
  }],
  ["dishwasher-extra-20-dmbr24a900jfsr7", {
    historicalLow: {
      status: "found",
      amount: 11874,
      currency: "TWD",
      converted: 11874,
      sourceUrl: "https://biggo.com.tw/s/%E5%B0%8F%E7%B1%B3%20%E6%A1%8C%E4%B8%8A%E5%9E%8B%20%E6%B4%97%E7%A2%97%E6%A9%9F",
      sourceTitle: "BigGo 搜尋：小米 桌上型 洗碗機",
      evidenceSnippet: "BigGo displayed the same PChome item at NT$12,999 with a NT$1,125 increase, and the same search snapshot showed NT$11,874.",
      sourceKind: "price_history",
      confidence: "medium",
      checkedAt: CHECKED_AT,
      note: "已由 worker 查核 BigGo、FindPrice、LBJ 與 PChome；採 BigGo 對同一 PChome 商品追蹤到的前低 NT$11,874。低價訂金、詢價、不同型號或無法確認新品官方保固候選均排除。",
    },
    checkedSources: [
      "https://biggo.com.tw/s/%E5%B0%8F%E7%B1%B3%20%E6%A1%8C%E4%B8%8A%E5%9E%8B%20%E6%B4%97%E7%A2%97%E6%A9%9F",
      "https://www.findprice.com.tw/g/%E5%B0%8F%E7%B1%B3%20%E6%A1%8C%E4%B8%8A%E5%9E%8B%20%E6%B4%97%E7%A2%97%E6%A9%9F",
      "https://www.lbj.tw/BJ/Query.aspx?k=%E5%B0%8F%E7%B1%B3%20%E6%A1%8C%E4%B8%8A%E5%9E%8B%20%E6%B4%97%E7%A2%97%E6%A9%9F",
      "https://24h.pchome.com.tw/prod/DMBR24-A900JFSR7",
    ],
    rejectedCandidates: [
      "NT$998-1,999 候選多為訂金、詢價、客服或不同 S10/S1/S2 型號，未採用。",
      "NT$9,999 與 NT$11,114 蝦皮第三方/已下架項目無法確認可購買新品與官方保固，未採用。",
      "券、回饋、信用卡、P 幣或點數未折入史低。",
    ],
  }],
  ["wifi-xiaomi-ax3000-2pack", {
    historicalLow: {
      status: "found",
      amount: 1839,
      currency: "TWD",
      converted: 1839,
      sourceUrl: "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1250667476&cgp=2159",
      sourceTitle: "LBJ 比價撿便宜歷史價格：Xiaomi AX3000 Mesh 路由器兩件裝",
      evidenceSnippet: "LBJ history for the Xiaomi Taiwan official two-pack contains 2026-06-19 at NT$1,839.",
      sourceKind: "price_history",
      confidence: "medium",
      checkedAt: CHECKED_AT,
      note: "已由 worker 查核 BigGo、FindPrice、LBJ 與 PChome/小米官方；採 LBJ 小米台灣官方同款兩件裝 2026-06-19 NT$1,839。低於此價的不同型號、單件裝、福利品、二手或個人賣場候選均排除。",
    },
    checkedSources: [
      "https://www.lbj.tw/BJ/Query.aspx?k=%E5%B0%8F%E7%B1%B3%20AX3000%20Mesh%20%E8%B7%AF%E7%94%B1%E5%99%A8%20%E5%85%A9%E4%BB%B6%E8%A3%9D",
      "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1250667476&cgp=2159",
      "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1228524216&cgp=2159",
      "https://biggo.com.tw/s/%E5%B0%8F%E7%B1%B3%20mesh%20ax3000",
      "https://www.findprice.com.tw/g/ax3000%20mesh",
      "https://24h.pchome.com.tw/prod/DYANAI-A900HNEUP",
    ],
    rejectedCandidates: [
      "CR8809/其他路由器、單件裝、福利品、二手、旋轉拍賣或個人賣場候選未採用。",
      "PChome/Yahoo/momo NT$1,995 與蝦皮官方 NT$1,899 均高於 NT$1,839。",
    ],
  }],
  ["wifi-xiaomi-ax3000-1pack", {
    historicalLow: {
      status: "found",
      amount: 1095,
      currency: "TWD",
      converted: 1095,
      sourceUrl: "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1228402219&cgp=1199",
      sourceTitle: "LBJ 比價撿便宜歷史價格：PChome Xiaomi AX3000 Mesh 路由器一件裝",
      evidenceSnippet: "LBJ PChome history shows NT$1,095 on 2025-07-09, 2024-08-05, and 2024-07-09 for the one-pack.",
      sourceKind: "price_history",
      confidence: "high",
      checkedAt: CHECKED_AT,
      note: "已由 worker 查核 PChome、LBJ、BigGo 與 FindPrice；採 LBJ PChome 同品一件裝歷史低點 NT$1,095。低於此價的福利品、二手、已下架、非 AX3000 Mesh 一件裝或拍賣非官方來源均排除。",
    },
    checkedSources: [
      "https://24h.pchome.com.tw/prod/DYANAI-A900HNETW",
      "https://www.lbj.tw/BJ/Query.aspx?k=Xiaomi%20AX3000%20Mesh%20%E8%B7%AF%E7%94%B1%E5%99%A8%20%28%E4%B8%80%E4%BB%B6%E8%A3%9D%29",
      "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1228402219&cgp=1199",
      "https://biggo.com.tw/s/%E5%B0%8F%E7%B1%B3%20ax3000%20mesh%20%E8%B7%AF%E7%94%B1%E5%99%A8",
      "https://www.findprice.com.tw/fg/xiaomi%20ax3000%20mesh%20%E8%B7%AF%E7%94%B1%E5%99%A8%20%28%E4%B8%80%E4%BB%B6%E8%A3%9D%29%E3%80%90%E5%B0%8F%E7%B1%B3%E5%AE%98%E6%96%B9%E6%97%97%E8%89%A6%E5%BA%97%E3%80%91",
    ],
    rejectedCandidates: [
      "NT$760、NT$850、NT$990 候選為福利品、非官方個人賣場、已下架或九成新，未採用。",
      "CR8808/CR8809 或其他配置不是 Xiaomi AX3000 Mesh 一件裝，未採用。",
    ],
  }],
  ["monitor-xiaomi-a27qi-2026", {
    historicalLow: {
      status: "found",
      amount: 3499,
      currency: "TWD",
      converted: 3499,
      sourceUrl: "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1268930064&cgp=3699",
      sourceTitle: "LBJ 比價撿便宜歷史價格：PChome Xiaomi A27Qi 2026",
      evidenceSnippet: "LBJ PChome history shows NT$3,499 on 2026-01-09 and 2026-01-17 for Xiaomi A27Qi 2026.",
      sourceKind: "price_history",
      confidence: "high",
      checkedAt: CHECKED_AT,
      note: "已由 worker 查核 LBJ、BigGo 與 FindPrice；採 LBJ PChome 同型號歷史低點 NT$3,499。低於此價的福利品、拍賣混列或非可信新品通路候選均排除。",
    },
    checkedSources: [
      "https://www.lbj.tw/BJ/Query.aspx?k=A27Qi%202026",
      "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1268930064&cgp=3699",
      "https://biggo.com.tw/s/A27Qi%202026",
      "https://www.findprice.com.tw/g/a27qi%202026",
    ],
    rejectedCandidates: [
      "NT$3,145 蝦皮商品標題含福利品，未採用。",
      "約 NT$3,180-3,360 的拍賣達人項目混列多個型號，未採用。",
      "BigGo PChome 推回約 NT$3,514 高於 LBJ exact history NT$3,499，未採用。",
    ],
  }],
]);

const verifiedHistoricalLows = new Map([
  ["tv-lg-c5-65", {
    status: "found",
    amount: 1096,
    currency: "USD",
    converted: 35212,
    sourceUrl: "https://www.tomsguide.com/tvs/oled-tvs/not-a-typo-the-65-inch-lg-c5-oled-tv-just-crashed-to-usd1-099-on-the-last-day-of-prime-day",
    sourceTitle: "Not a typo! The 65-inch LG C5 OLED TV just crashed to $1,099 on the last day of Prime Day | Tom's Guide",
    evidenceSnippet: "Tom's Guide reported the 65-inch LG C5 at Amazon for $1,099 and its deal card showed now US$1,096, calling it the cheapest the 65-inch C5 had ever been.",
    sourceKind: "retailer_promo",
    confidence: "medium",
    checkedAt: CHECKED_AT,
    note: "Overseas Amazon US 65-inch LG C5 equivalent. Converted using USD_TWD 32.127508; excludes shipping, import tax, plug/voltage differences, and Taiwan warranty risk.",
  }],
  ["tv-samsung-s90f-65", {
    status: "found",
    amount: 1197.99,
    currency: "USD",
    converted: 38488,
    sourceUrl: "https://www.androidcentral.com/streaming-tv/samsung-s90f-oled-tv-deal-prime-day-2026-gta6-preorders",
    sourceTitle: "This 'best gaming TV' has crashed to a record low price during Prime Day - just in time for your GTA 6 preorder | Android Central",
    evidenceSnippet: "Android Central reported the 65-inch Samsung Class OLED S90F at $1,197.99 during Prime Day and described it as a record-low price.",
    sourceKind: "retailer_promo",
    confidence: "medium",
    checkedAt: CHECKED_AT,
    note: "Overseas US equivalent 65-inch S90F; regional SKU may differ from Taiwan QA65S90FAEXZW. Converted using USD_TWD 32.127508; excludes shipping, import tax, and Taiwan warranty risk.",
  }],
  ["robot-roborock-qrevo-curv-2-flow", {
    status: "found",
    amount: 715,
    currency: "USD",
    converted: 22971,
    sourceUrl: "https://www.wired.com/story/amazon-prime-day-roborock-deals-2026/",
    sourceTitle: "This Is the Roborock Vacuum to Buy During Prime Day | WIRED",
    evidenceSnippet: "WIRED listed Roborock Qrevo Curv 2 Flow at $1,000 reduced to $715 (28% off) during Prime Day.",
    sourceKind: "retailer_promo",
    confidence: "medium",
    checkedAt: CHECKED_AT,
    note: "Converted using USD_TWD 32.127508. Repo current PChome price is lower, but the current retailer page is not used as historical-low evidence because it does not explicitly claim a historical low.",
  }],
  ["monitor-samsung-s57cg952nc", {
    status: "found",
    amount: 1499,
    currency: "USD",
    converted: 48159,
    sourceUrl: "https://www.tomsguide.com/gaming/gaming-peripherals/act-fast-this-57-inch-samsung-gaming-monitor-is-now-usd800-off-at-amazon",
    sourceTitle: "Act fast! This 57-inch Samsung gaming monitor is now $800 off at Amazon | Tom's Guide",
    evidenceSnippet: "Tom's Guide reported Amazon selling the 57-inch Samsung Odyssey Neo G9 for $1,499, $800 off $2,299.",
    sourceKind: "retailer_promo",
    confidence: "medium",
    checkedAt: CHECKED_AT,
    note: "Overseas historical promo for the same 57-inch Odyssey Neo G9/G95NC class. Converted using USD_TWD 32.127508; excludes shipping, import tax, and Taiwan warranty risk. Source does not explicitly call it all-time low.",
  }],
]);

function normalize(value) {
  return String(value || "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function compactCode(value) {
  return normalize(value).replace(/\s+/g, "");
}

function decodeHtml(value) {
  return String(value || "")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)));
}

function stripTags(value) {
  return decodeHtml(String(value || "").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function priceNumber(value) {
  const text = String(value || "").replace(/[^\d.]/g, "");
  const number = Number(text);
  return Number.isFinite(number) ? number : null;
}

function productCodeFromUrl(url) {
  const match = String(url || "").match(/\/prod\/([A-Z0-9-]+)/i);
  return match ? match[1].toUpperCase() : "";
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function modelTokens(product) {
  const raw = [
    product.model,
    product.name,
    ...((product.specs || []).slice(0, 4)),
  ].join(" ");
  const tokens = [];
  const compactModel = compactCode(product.model);
  if (compactModel.length >= 4 && !weakModelPattern.test(product.model)) tokens.push(compactModel);

  for (const match of raw.matchAll(/[A-Z]{1,6}[-/]?\d[A-Z0-9][-A-Z0-9/]{1,18}/gi)) {
    const token = compactCode(match[0]);
    if (token.length >= 4) tokens.push(token);
  }
  for (const match of raw.matchAll(/\d+(?:\.\d+)?\s?(?:吋|型|kg|l|公升|cm|mm|hz|k|入|件裝)/gi)) {
    tokens.push(compactCode(match[0]));
  }

  const pchomeCode = productCodeFromUrl(product.buyUrl);
  if (pchomeCode) tokens.push(compactCode(pchomeCode));

  return unique(tokens).slice(0, 10);
}

function searchQueries(product) {
  const pchomeCode = productCodeFromUrl(product.buyUrl);
  return unique([
    pchomeCode,
    `${product.brand} ${product.model}`,
    `${product.model}`,
    `${product.brand} ${product.name}`,
    `${product.brand} ${product.model} ${product.name}`,
  ]).slice(0, QUERY_LIMIT);
}

function makeNotFound(product, note) {
  return {
    status: "not_found",
    amount: null,
    currency: product.price.currency,
    converted: null,
    sourceUrl: "",
    sourceTitle: "",
    evidenceSnippet: "",
    sourceKind: "not_found",
    confidence: "not_found",
    checkedAt: CHECKED_AT,
    note,
  };
}

function plausibleHistoricalLow(product, amount) {
  const current = product.price?.converted;
  if (typeof amount !== "number" || amount <= 0 || typeof current !== "number" || current <= 0) return false;
  const ratio = amount / current;
  if (current >= 10000) return ratio >= 0.45;
  if (current >= 3000) return ratio >= 0.35;
  if (current >= 1000) return ratio >= 0.30;
  return ratio >= 0.20;
}

function candidateIsTrusted(item) {
  const nindex = item.nindex || "";
  const storeName = item.store?.name || item.nindex_name || "";
  const shopName = item.shop?.name || "";
  const title = item.title || "";
  if (auctionStorePattern.test(`${storeName} ${nindex}`)) return false;
  if (excludedTitlePattern.test(`${title} ${shopName}`)) return false;
  if (trustedNindexPattern.test(nindex) && trustedStoreNamePattern.test(storeName)) return true;
  if (nindex === "tw_mall_shopeemall") return officialShopPattern.test(`${shopName} ${title}`);
  return trustedStoreNamePattern.test(storeName) && !auctionStorePattern.test(storeName);
}

function lbjCandidateIsTrusted(item) {
  const site = item.site || "";
  const title = item.title || "";
  if (auctionStorePattern.test(site)) return false;
  if (excludedTitlePattern.test(`${title} ${site}`)) return false;
  if (/蝦皮商城/i.test(site)) return officialShopPattern.test(title) || trustedStoreNamePattern.test(title);
  return trustedStoreNamePattern.test(site);
}

function candidateMatchesProduct(product, item) {
  const title = compactCode(`${item.title || ""} ${item.multiple_top_title || ""}`);
  const brand = compactCode(product.brand);
  const tokens = modelTokens(product);
  const codeTokens = tokens.filter((token) => /[a-z]/i.test(token) && /\d/.test(token) && token.length >= 4);
  const sizeTokens = tokens.filter((token) => /\d/.test(token) && /(吋|型|kg|l|公升|cm|mm|hz|k|入|件裝)/i.test(token));
  const hasBrand = !brand || title.includes(brand) || /小米/.test(item.title || "") && brand === "xiaomi";
  const hasCode = codeTokens.some((token) => title.includes(token));
  const sizeMatches = sizeTokens.length === 0 || sizeTokens.some((token) => title.includes(token));

  if (!hasBrand && !hasCode) return false;
  if (hasCode) return sizeMatches;

  const nameWords = normalize(product.name).split(" ").filter((word) => word.length >= 2).slice(0, 5);
  const matchedWords = nameWords.filter((word) => normalize(item.title).includes(word)).length;
  return matchedWords >= Math.min(3, nameWords.length);
}

function lbjCandidateMatchesProduct(product, item) {
  if (!candidateMatchesProduct(product, item)) return false;
  const title = compactCode(item.title);
  const code = compactCode(productCodeFromUrl(product.buyUrl));
  if (code && title.includes(code)) return true;
  const tokens = modelTokens(product);
  const codeTokens = tokens.filter((token) => /[a-z]/i.test(token) && /\d/.test(token) && token.length >= 4);
  const exactCode = codeTokens.some((token) => title.includes(token));
  if (exactCode) return true;

  const specTokens = tokens.filter((token) => /\d/.test(token) && /(吋|型|kg|l|公升|hz|入|件裝)/i.test(token));
  if (specTokens.length && !specTokens.some((token) => title.includes(token))) return false;

  const productWords = normalize(`${product.brand} ${product.model} ${product.name}`)
    .split(" ")
    .filter((word) => word.length >= 2 && !/^\d+$/.test(word));
  const matched = productWords.filter((word) => normalize(item.title).includes(word)).length;
  return matched >= Math.min(4, productWords.length);
}

async function fetchText(url, init = {}) {
  const response = await fetch(url, {
    ...init,
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    headers: {
      "Accept": "text/html,application/json",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      ...(init.headers || {}),
    },
  });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.text();
}

async function fetchJson(url, init = {}) {
  const text = await fetchText(url, {
    ...init,
    headers: {
      Accept: "application/json",
      ...(init.headers || {}),
    },
  });
  return JSON.parse(text);
}

async function fetchBigGoSearch(query) {
  const url = `${BIGGO_API_ORIGIN}/search/${encodeURIComponent(query)}/product?p=1`;
  const data = await fetchJson(url, {
    headers: {
      Site: "biggo.com.tw",
      Region: "tw",
    },
  });
  const list = Array.isArray(data.list) ? data.list : [];
  return {
    query,
    sourceUrl: `${BIGGO_SEARCH_ORIGIN}/s/${encodeURIComponent(query)}/`,
    total: data.total || 0,
    list,
  };
}

async function fetchBigGoHistory(historyId) {
  const data = await fetchJson(`${BIGGO_API_ORIGIN}/product/history`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Site: "biggo.com.tw",
      Region: "tw",
    },
    body: JSON.stringify({ history_id: historyId, days: 730 }),
  });
  if (!data.result) return null;
  return data;
}

async function fetchFindPriceSignal(query) {
  const url = `https://www.findprice.com.tw/g/${encodeURIComponent(query)}`;
  try {
    const text = await fetchText(url);
    const hasResults = /divGoods|divPromoGoods|rec-price|價格/.test(text);
    const hasHistorical = /歷史最低|歷史低價|價格走勢|歷史價格/.test(text);
    return { url, ok: true, hasResults, hasHistorical };
  } catch (error) {
    return { url, ok: false, error: error.message };
  }
}

async function fetchLbjSignal(query) {
  const url = `https://www.lbj.tw/BJ/Query.aspx?k=${encodeURIComponent(query)}`;
  try {
    const text = await fetchText(url);
    const hasResults = /pdsContent|查看歷史價格|價格推薦/.test(text);
    const hasHistoryButton = /查看歷史價格|priceHis/.test(text);
    return { url, ok: true, hasResults, hasHistoryButton };
  } catch (error) {
    return { url, ok: false, error: error.message };
  }
}

function parseLbjCandidates(html) {
  const blocks = String(html || "").split(/<div id="card/).slice(1);
  return blocks.map((block) => {
    const pid = block.match(/data-pid="([^"]+)"/)?.[1] || block.match(/^(\d+)"/)?.[1] || "";
    const title = decodeHtml(block.match(/data-gn="([^"]*)"/)?.[1] || block.match(/title="([^"]*)"/)?.[1] || "");
    const site = decodeHtml(block.match(/data-site="([^"]*)"/)?.[1] || "");
    const price = priceNumber(block.match(/data-price="([^"]*)"/)?.[1] || block.match(/<span class="dollar">([^<]*)<\/span>/)?.[1]);
    return { pid, title: stripTags(title), site: stripTags(site), price };
  }).filter((item) => item.pid && item.title && item.price);
}

function parseLbjHistory(html) {
  const points = [...String(html || "").matchAll(/\{x:moment\('([^']+)'\),y:(\d+)\}/g)]
    .map((match) => ({ date: match[1], price: Number(match[2]) }))
    .filter((point) => Number.isFinite(point.price) && point.price > 0);
  if (!points.length) return null;
  const min = points.reduce((lowest, point) => (point.price < lowest.price ? point : lowest), points[0]);
  return { points, min };
}

async function fetchLbjHistory(pid, currentPrice) {
  const url = `https://www.lbj.tw/BJ/getPriceHis.aspx?pid=${encodeURIComponent(pid)}&cgp=${encodeURIComponent(currentPrice)}`;
  const html = await fetchText(url);
  const history = parseLbjHistory(html);
  return history ? { ...history, url } : null;
}

async function researchLbj(product) {
  const queries = searchQueries(product);
  const checked = [];
  const rejected = [];
  const accepted = [];

  for (const query of queries) {
    const url = `https://www.lbj.tw/BJ/Query.aspx?k=${encodeURIComponent(query)}`;
    let html;
    try {
      html = await fetchText(url);
      checked.push(url);
    } catch (error) {
      rejected.push(`LBJ ${query}: 查詢失敗 ${error.message}`);
      continue;
    }

    let historiesRead = 0;
    const candidates = parseLbjCandidates(html).slice(0, 8);
    for (const item of candidates) {
      if (historiesRead >= HISTORY_LIMIT_PER_SOURCE) break;
      const summary = `${item.site} ${item.title}`.trim();
      if (!lbjCandidateMatchesProduct(product, item)) {
        rejected.push(`LBJ ${query}: ${summary} 型號/規格不相符`);
        continue;
      }
      if (!lbjCandidateIsTrusted(item)) {
        rejected.push(`LBJ ${query}: ${summary} 非採用通路或含排除條件`);
        continue;
      }

      let history;
      try {
        historiesRead += 1;
        history = await fetchLbjHistory(item.pid, item.price);
      } catch (error) {
        rejected.push(`LBJ ${query}: ${summary} 歷史價格讀取失敗 ${error.message}`);
        continue;
      }
      if (!history?.min) {
        rejected.push(`LBJ ${query}: ${summary} 無可用歷史價格`);
        continue;
      }
      if (!plausibleHistoricalLow(product, history.min.price)) {
        rejected.push(`LBJ ${query}: ${summary} 最低價 NT$${history.min.price.toLocaleString("en-US")} 低於現價合理比例，疑似月付/配件/錯類`);
        continue;
      }

      checked.push(history.url);
      accepted.push({
        query,
        sourceUrl: history.url,
        title: item.title,
        storeName: item.site,
        amount: history.min.price,
        currency: "TWD",
        converted: history.min.price,
        date: history.min.date,
        points: history.points.length,
        currentPrice: item.price,
      });
    }
  }

  accepted.sort((a, b) => a.converted - b.converted || b.points - a.points);
  return { accepted, rejected: rejected.slice(0, 8), checked: unique(checked) };
}

async function researchBigGo(product) {
  const queries = searchQueries(product);
  const rejected = [];
  const accepted = [];
  const checked = [];

  for (const query of queries) {
    let search;
    try {
      search = await fetchBigGoSearch(query);
      checked.push(search.sourceUrl);
    } catch (error) {
      rejected.push(`BigGo ${query}: 查詢失敗 ${error.message}`);
      continue;
    }

    let historiesRead = 0;
    for (const item of search.list.slice(0, 8)) {
      if (historiesRead >= HISTORY_LIMIT_PER_SOURCE) break;
      const title = item.title || "";
      const storeName = item.store?.name || "";
      const summary = `${storeName} ${title}`.trim();
      if (!item.history_id) {
        rejected.push(`BigGo ${query}: ${summary} 無 history_id`);
        continue;
      }
      if (!candidateMatchesProduct(product, item)) {
        rejected.push(`BigGo ${query}: ${summary} 型號/規格不相符`);
        continue;
      }
      if (!candidateIsTrusted(item)) {
        rejected.push(`BigGo ${query}: ${summary} 非採用通路或含排除條件`);
        continue;
      }
      if (item.is_multiple_product) {
        rejected.push(`BigGo ${query}: ${summary} 多規格商品，避免誤採`);
        continue;
      }

      let history;
      try {
        historiesRead += 1;
        history = await fetchBigGoHistory(item.history_id);
      } catch (error) {
        rejected.push(`BigGo ${query}: ${summary} 歷史價格讀取失敗 ${error.message}`);
        continue;
      }
      const minPrice = history?.statistics?.days730?.min_price;
      if (typeof minPrice !== "number" || minPrice <= 0) {
        rejected.push(`BigGo ${query}: ${summary} 無可用 730 天最低價`);
        continue;
      }
      if (!plausibleHistoricalLow(product, minPrice)) {
        rejected.push(`BigGo ${query}: ${summary} 最低價 NT$${minPrice.toLocaleString("en-US")} 低於現價合理比例，疑似月付/配件/錯類`);
        continue;
      }

      accepted.push({
        query,
        sourceUrl: search.sourceUrl,
        title: history.title || item.title,
        storeName: history.nindex_name || storeName,
        amount: minPrice,
        currency: history.currency || item.currency || "TWD",
        converted: minPrice,
        historyId: item.history_id,
        currentPrice: history.current_price || item.price,
        points: Array.isArray(history.price_history) ? history.price_history.length : 0,
        sourceProductUrl: history.purl || item.purl || "",
      });
    }
  }

  accepted.sort((a, b) => a.converted - b.converted || b.points - a.points);
  return { accepted, rejected: rejected.slice(0, 8), checked: unique(checked) };
}

async function researchProduct(product) {
  const agentVerified = agentVerifiedHistoricalLows.get(product.id);
  if (agentVerified) return agentVerified;

  const existingFound = verifiedHistoricalLows.get(product.id) || (product.historicalLow?.status === "found" ? product.historicalLow : null);
  const [biggo, lbj, findPriceSignal] = await Promise.all([
    researchBigGo(product),
    researchLbj(product),
    fetchFindPriceSignal(`${product.brand} ${product.model}`),
  ]);

  let chosen = [
    ...lbj.accepted.map((item) => ({ ...item, source: "lbj" })),
    ...biggo.accepted.map((item) => ({ ...item, source: "biggo" })),
  ].sort((a, b) => a.converted - b.converted || b.points - a.points)[0] || null;
  if (existingFound && (!chosen || existingFound.converted <= chosen.converted)) {
    return {
      historicalLow: existingFound,
      checkedSources: [...lbj.checked, ...biggo.checked, findPriceSignal.url],
      rejectedCandidates: [...lbj.rejected, ...biggo.rejected].slice(0, 8),
    };
  }

  if (chosen) {
    const confidence = chosen.points >= 8 ? "high" : "medium";
    const sourceName = chosen.source === "lbj" ? "LBJ 比價撿便宜" : "BigGo";
    const dateText = chosen.date ? `，最低點日期 ${chosen.date}` : "";
    return {
      historicalLow: {
        status: "found",
        amount: chosen.amount,
        currency: chosen.currency,
        converted: Math.round(chosen.converted),
        sourceUrl: chosen.sourceUrl,
        sourceTitle: `${sourceName} 歷史價格：${chosen.title}`,
        evidenceSnippet: `${sourceName} 歷史價格顯示「${chosen.storeName} / ${chosen.title}」最低價為 NT$${Math.round(chosen.amount).toLocaleString("en-US")}${dateText}。`,
        sourceKind: "price_history",
        confidence,
        checkedAt: CHECKED_AT,
        note: `採用 ${sourceName} 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。${chosen.sourceProductUrl ? `原商品頁：${chosen.sourceProductUrl}` : ""}`,
      },
      checkedSources: [...lbj.checked, ...biggo.checked, findPriceSignal.url],
      rejectedCandidates: [...lbj.rejected, ...biggo.rejected].slice(0, 8),
    };
  }

  const findPriceText = findPriceSignal.ok
    ? `FindPrice${findPriceSignal.hasHistorical ? "有歷史價格字樣但未取得同型號可信史低" : "僅作現價/比價查核"}`
    : `FindPrice 查詢失敗`;
  const lbjText = lbj.checked.length
    ? "LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低"
    : "LBJ 查詢失敗或沒有可用結果";
  const rejections = [...lbj.rejected, ...biggo.rejected].slice(0, 6);
  const rejectionSummary = rejections.length
    ? `；排除候選：${rejections.slice(0, 3).join("；")}`
    : "";
  return {
    historicalLow: makeNotFound(
      product,
      `已逐筆查 BigGo 730 天價格歷史、${findPriceText}、${lbjText}；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價${rejectionSummary}。`,
    ),
    checkedSources: [...lbj.checked, ...biggo.checked, findPriceSignal.url],
    rejectedCandidates: rejections,
  };
}

function productWithHistoricalLow(product, historicalLow) {
  const { historicalLow: _historicalLow, ...rest } = product;
  return { ...rest, historicalLow };
}

function productFileMarkup(categoryId, products) {
  return `(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts(${JSON.stringify(categoryId)}, ${JSON.stringify(products, null, 2)});
})();
`;
}

function researchRow(product, details) {
  return {
    id: product.id,
    category: product.category,
    brand: product.brand,
    model: product.model,
    name: product.name,
    currentPrice: product.price.converted,
    currentCurrency: product.price.currency,
    currentBuyUrl: product.buyUrl,
    currentBuyLabel: product.buyLabel,
    historicalLow: product.historicalLow,
    checkedSources: details?.checkedSources || [],
    rejectedCandidates: details?.rejectedCandidates || [],
  };
}

async function mapLimit(items, limit, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;
  async function worker(workerIndex) {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await mapper(items[currentIndex], currentIndex, workerIndex);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, (_, index) => worker(index)));
  return results;
}

function parseArgs() {
  const args = process.argv.slice(2);
  const idsArg = args.find((arg) => arg.startsWith("--ids="));
  const limitArg = args.find((arg) => arg.startsWith("--limit="));
  return {
    write: args.includes("--write"),
    ids: idsArg ? new Set(idsArg.slice("--ids=".length).split(",").map((id) => id.trim()).filter(Boolean)) : null,
    limit: limitArg ? Number(limitArg.slice("--limit=".length)) : null,
  };
}

async function main() {
  const root = path.resolve(__dirname, "..");
  const args = parseArgs();
  const { categories, products } = readDashboardProducts(root);
  const selectedProducts = products
    .filter((product) => !args.ids || args.ids.has(product.id))
    .slice(0, args.limit || products.length);
  const detailById = new Map();

  console.error(JSON.stringify({
    status: "research-start",
    selected: selectedProducts.length,
    total: products.length,
    concurrency: CONCURRENCY,
  }));

  const researched = await mapLimit(selectedProducts, CONCURRENCY, async (product, index, workerIndex) => {
    const details = await researchProduct(product);
    detailById.set(product.id, details);
    console.error(JSON.stringify({
      worker: workerIndex + 1,
      index: index + 1,
      total: selectedProducts.length,
      id: product.id,
      status: details.historicalLow.status,
      amount: details.historicalLow.converted,
    }));
    return productWithHistoricalLow(product, details.historicalLow);
  });

  const researchedById = new Map(researched.map((product) => [product.id, product]));
  const updatedProducts = products.map((product) => researchedById.get(product.id) || product);
  const productsByCategory = new Map(categories.map((category) => [category.id, []]));
  for (const product of updatedProducts) productsByCategory.get(product.category).push(product);

  const results = updatedProducts.map((product) => researchRow(product, detailById.get(product.id)));
  const found = results.filter((row) => row.historicalLow.status === "found");
  const missing = results.filter((row) => row.historicalLow.status === "not_found");
  const byConfidence = results.reduce((counts, row) => {
    const confidence = row.historicalLow.confidence;
    counts[confidence] = (counts[confidence] || 0) + 1;
    return counts;
  }, {});

  const research = {
    summary: {
      checkedAt: `${CHECKED_AT}T00:00:00.000+08:00`,
      sourcePolicy: "同型號、同尺寸/容量/規格的可信新品通路；優先 BigGo 可公開查核 730 天價格歷史，並以 FindPrice、LBJ 比價撿便宜作查核補充；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。當前通路頁未明確提供價格歷史時，不單獨推定為歷史最低價。",
      total: results.length,
      researchedThisRun: selectedProducts.length,
      found: found.length,
      missing: missing.length,
      byConfidence,
      exchange: {
        USD_TWD,
      },
    },
    results,
  };

  if (args.write) {
    for (const category of categories) {
      const file = path.join(root, "products", `${category.id}.js`);
      fs.writeFileSync(file, productFileMarkup(category.id, productsByCategory.get(category.id)), "utf8");
    }
    fs.writeFileSync(path.join(root, "historical_price_research.json"), `${JSON.stringify(research, null, 2)}\n`, "utf8");
  }

  console.log(JSON.stringify({
    status: args.write ? "updated" : "dry-run",
    selected: selectedProducts.length,
    products: updatedProducts.length,
    found: found.length,
    missing: missing.length,
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

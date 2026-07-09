(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("tv", [
  {
    "id": "tv-lg-c5-65",
    "category": "tv",
    "rank": 1,
    "topPick": true,
    "budget": "premium",
    "channel": "tw",
    "brand": "LG",
    "model": "OLED65C5PTA",
    "name": "65 型 OLED evo C5 4K 智慧顯示器",
    "price": {
      "currency": "TWD",
      "amount": 49618,
      "converted": 49618,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADYE1900JG394/000001_1762971547.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADYE-1900JG394",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED evo",
      "4K 120Hz",
      "webOS",
      "HDMI 2.1 / VRR",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "OLED 黑位、遊戲規格與串流支援都完整，是客廳主電視的穩健高階選擇。",
    "pros": [
      "畫質與遊戲支援完整",
      "台灣通路與保固清楚"
    ],
    "cons": [
      "明亮客廳抗反光不如高階 Mini LED",
      "價格高於 QLED/Mini LED"
    ],
    "bestFor": "重視電影、遊戲與長期保固的主客廳。",
    "recommendation": "綜合推薦：LG C5 評測口碑穩，OLED 畫質、遊戲功能、台灣售後與價格落點最均衡。",
    "score": 94,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "OLED",
      "遊戲",
      "電影"
    ],
    "releaseDate": "2025-03-11",
    "historicalLow": {
      "status": "found",
      "amount": 1096,
      "currency": "USD",
      "converted": 35181,
      "sourceUrl": "https://www.tomsguide.com/tvs/oled-tvs/not-a-typo-the-65-inch-lg-c5-oled-tv-just-crashed-to-usd1-099-on-the-last-day-of-prime-day",
      "sourceTitle": "Not a typo! The 65-inch LG C5 OLED TV just crashed to $1,099 on the last day of Prime Day | Tom's Guide",
      "evidenceSnippet": "Tom's Guide reported the 65-inch LG C5 at Amazon for $1,099 and its deal card showed now US$1,096, calling it the cheapest the 65-inch C5 had ever been.",
      "sourceKind": "retailer_promo",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "Overseas Amazon US 65-inch LG C5 equivalent. Converted using USD_TWD 32.099057; excludes shipping, import tax, plug/voltage differences, and Taiwan warranty risk."
    }
  },
  {
    "id": "tv-samsung-s90f-65",
    "category": "tv",
    "rank": 2,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "QA65S90FAEXZW",
    "name": "65 型 S90F OLED 4K 智慧顯示器",
    "price": {
      "currency": "TWD",
      "amount": 51900,
      "converted": 51900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADEW1900K4WRT/000001_1782056882.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADEW-1900K4WRT",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED",
      "4K 144Hz",
      "Tizen",
      "四組 HDMI 2.1",
      "手機投影：AirPlay / SmartThings/Tap View"
    ],
    "description": "以同級 OLED 來看售價很有攻擊性，遊戲與亮度表現強，但不支援 Dolby Vision。",
    "pros": [
      "OLED 價格漂亮",
      "遊戲規格強"
    ],
    "cons": [
      "無 Dolby Vision",
      "內建音響仍建議搭 Soundbar"
    ],
    "bestFor": "遊戲玩家與偏好 Samsung 生態系的人。",
    "recommendation": "若預算有限又想進 OLED，這台比多數同尺寸 OLED 更有 CP 值。",
    "score": 92,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "OLED",
      "CP 值",
      "遊戲"
    ],
    "releaseDate": "2025",
    "historicalLow": {
      "status": "found",
      "amount": 1197.99,
      "currency": "USD",
      "converted": 38454,
      "sourceUrl": "https://www.androidcentral.com/streaming-tv/samsung-s90f-oled-tv-deal-prime-day-2026-gta6-preorders",
      "sourceTitle": "This 'best gaming TV' has crashed to a record low price during Prime Day - just in time for your GTA 6 preorder | Android Central",
      "evidenceSnippet": "Android Central reported the 65-inch Samsung Class OLED S90F at $1,197.99 during Prime Day and described it as a record-low price.",
      "sourceKind": "retailer_promo",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "Overseas US equivalent 65-inch S90F; regional SKU may differ from Taiwan QA65S90FAEXZW. Converted using USD_TWD 32.099057; excludes shipping, import tax, and Taiwan warranty risk."
    }
  },
  {
    "id": "tv-sony-bravia7-65",
    "category": "tv",
    "rank": 3,
    "budget": "premium",
    "channel": "tw",
    "brand": "Sony",
    "model": "Y-65XR70",
    "name": "BRAVIA 7 65 型 Mini LED 4K Google TV + 2.1 聲霸組合",
    "price": {
      "currency": "TWD",
      "amount": 53910,
      "converted": 53910,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD061900IUE3W/000001_1779815988.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD06-1900IUE3W",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 Mini LED",
      "XR 處理器",
      "Google TV",
      "含 2.1 聲霸組合",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "Sony 影像處理與動態補償穩定，這筆採 PChome 同型號搭 2.1 聲霸的組合低價。",
    "pros": [
      "影像處理自然",
      "Mini LED 亮度適合明亮空間"
    ],
    "cons": [
      "價格高於同尺寸國產/中階品牌",
      "遊戲規格不如 OLED 激進"
    ],
    "bestFor": "看電影、運動賽事與串流內容多的家庭。",
    "recommendation": "想避開 OLED 烙印疑慮、又要高階影像處理時可優先看這台。",
    "score": 90,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "Mini LED",
      "電影",
      "組合價"
    ],
    "releaseDate": "2024",
    "historicalLow": {
      "status": "found",
      "amount": 51970,
      "currency": "TWD",
      "converted": 51970,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1271767502&cgp=51970",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【SONY 索尼】Y-65XR70 65吋 Mini LED Google TV 液晶顯示器(含基本安裝)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【SONY 索尼】Y-65XR70 65吋 Mini LED Google TV 液晶顯示器(含基本安裝)」最低價為 NT$51,970，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-hisense-u7n-65",
    "category": "tv",
    "rank": 4,
    "budget": "mid",
    "channel": "tw",
    "brand": "Hisense",
    "model": "65U7N",
    "name": "65 型 U7 Mini LED ULED 4K Google TV",
    "price": {
      "currency": "TWD",
      "amount": 31999,
      "converted": 31999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD98A900I5166/000001_1733391621.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD98-A900I5166",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 Mini LED",
      "4K 144Hz",
      "Google TV",
      "雙杜比",
      "手機投影：AirPlay"
    ],
    "description": "Mini LED、144Hz 與 Google TV 以三萬出頭入手，CP 值很突出。",
    "pros": [
      "規格對價格很滿",
      "適合明亮客廳"
    ],
    "cons": [
      "品牌售後與調校口碑不如日韓高階",
      "音質普通"
    ],
    "bestFor": "預算三萬上下、想要大尺寸與高亮度的人。",
    "recommendation": "本類 CP 值推薦：畫面規格給得足，省下預算可補 Soundbar。",
    "score": 88,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "Mini LED",
      "CP 值",
      "144Hz"
    ],
    "releaseDate": "2024",
    "historicalLow": {
      "status": "found",
      "amount": 28159,
      "currency": "TWD",
      "converted": 28159,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1261089769&cgp=31999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Hisense】65型 4K 原生144Hz QD MiniLED AirPlay2 雙杜比連網液晶電視(65U7N)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Hisense】65型 4K 原生144Hz QD MiniLED AirPlay2 雙杜比連網液晶電視(65U7N)」最低價為 NT$28,159，最低點日期 2026-04-11。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-benq-e65-760",
    "category": "tv",
    "rank": 5,
    "budget": "value",
    "channel": "tw",
    "brand": "BenQ",
    "model": "E65-760",
    "name": "65 型 4K 120Hz 量子點護眼 Google TV",
    "price": {
      "currency": "TWD",
      "amount": 24900,
      "converted": 24900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD0O1900IEK5W/000001_1761401167.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD0O-1900IEK5W",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 QLED",
      "4K 120Hz DLG",
      "Google TV",
      "護眼模式",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "台灣品牌、價格好入手，適合非發燒級的家庭客廳或主臥。",
    "pros": [
      "價格親民",
      "護眼與本地品牌售後加分"
    ],
    "cons": [
      "不是 Mini LED/OLED",
      "極暗或 HDR 場景層次有限"
    ],
    "bestFor": "預算有限、重視大尺寸與基本智慧功能。",
    "recommendation": "若預算要壓在 2.5 萬左右，這台是穩健的大尺寸選擇。",
    "score": 84,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "QLED",
      "大尺寸",
      "本地品牌"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 21900,
      "currency": "TWD",
      "converted": 21900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1242121677&cgp=22900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：BenQ明基65吋QLED 4K連網智慧顯示器E65-760 無安裝",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / BenQ明基65吋QLED 4K連網智慧顯示器E65-760 無安裝」最低價為 NT$21,900，最低點日期 2026-06-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-extra-6-dpad06-a900hlbjo",
    "category": "tv",
    "rank": 6,
    "budget": "premium",
    "channel": "tw",
    "brand": "Sony",
    "model": "Y-65XR80",
    "name": "BRAVIA 8 65 型 XR OLED 4K HDR Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 84510,
      "converted": 84510,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD06A900HLBJO/000001_1776334113.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD06-A900HLBJO",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED",
      "4K HDR Google TV",
      "XR 影像處理",
      "高階 OLED",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "Sony Y-65XR80 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "電影",
      "旗艦"
    ],
    "releaseDate": "2024",
    "historicalLow": {
      "status": "found",
      "amount": 80500,
      "currency": "TWD",
      "converted": 80500,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1260955857&cgp=83710",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【SONY 索尼】Y-65XR80 65吋 BRAVIA 8 4K HDR OLED 智慧液晶顯示器 (含基本安裝)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【SONY 索尼】Y-65XR80 65吋 BRAVIA 8 4K HDR OLED 智慧液晶顯示器 (含基本安裝)」最低價為 NT$80,500，最低點日期 2026-01-30。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-extra-7-dpadye-1900jgoya",
    "category": "tv",
    "rank": 7,
    "budget": "premium",
    "channel": "tw",
    "brand": "LG",
    "model": "OLED65G5PTA",
    "name": "65 型 OLED evo G5 零間隙藝廊系列 4K 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 71910,
      "converted": 71910,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADYE1900JGOYA/000001_1778348657.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADYE-1900JGOYA",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED evo",
      "4K 120Hz",
      "零間隙藝廊設計",
      "AI 物聯網智慧顯示器",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "LG OLED65G5PTA 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "藝廊",
      "旗艦"
    ],
    "releaseDate": "2025-01",
    "historicalLow": {
      "status": "found",
      "amount": 62521,
      "currency": "TWD",
      "converted": 62521,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1250629133&cgp=69618",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：LG樂金 OLED65G5PTA 65 吋 OLED evo AI 4K 智慧顯示器",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / LG樂金 OLED65G5PTA 65 吋 OLED evo AI 4K 智慧顯示器」最低價為 NT$62,521，最低點日期 2026-04-15。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-extra-8-dpad09-a900j9faz",
    "category": "tv",
    "rank": 8,
    "budget": "premium",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "TV-65Z90BGT",
    "name": "65 型 OLED 智慧聯網顯示器",
    "price": {
      "currency": "TWD",
      "amount": 72072,
      "converted": 72072,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD09A900J9FAZ/000001_1761888394.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD09-A900J9FAZ",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED",
      "智慧聯網",
      "4K",
      "日本品牌調校",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "Panasonic TV-65Z90BGT 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "電影",
      "均衡"
    ],
    "releaseDate": "2025",
    "historicalLow": {
      "status": "found",
      "amount": 65032,
      "currency": "TWD",
      "converted": 65032,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1274320953&cgp=71010",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Panasonic 國際牌】65型OLED 4K連網智慧顯示器不含視訊盒(TV-65Z90BGT)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Panasonic 國際牌】65型OLED 4K連網智慧顯示器不含視訊盒(TV-65Z90BGT)」最低價為 NT$65,032，最低點日期 2026-05-24。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-extra-9-dpadik-a900hjgf2",
    "category": "tv",
    "rank": 9,
    "budget": "premium",
    "channel": "tw",
    "brand": "Philips",
    "model": "65OLED809",
    "name": "65 型 4K 144Hz VRR OLED Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 79900,
      "converted": 79900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADIKA900HJGF2/000001_1782900149.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADIK-A900HJGF2",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED",
      "4K 144Hz",
      "VRR",
      "Google TV",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "Philips 65OLED809 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "遊戲",
      "Google TV"
    ],
    "releaseDate": "2024",
    "historicalLow": {
      "status": "found",
      "amount": 74900,
      "currency": "TWD",
      "converted": 74900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1250838362&cgp=74900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)飛利浦65吋OLED連網智慧顯示器65OLED809 無安裝",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)飛利浦65吋OLED連網智慧顯示器65OLED809 無安裝」最低價為 NT$74,900，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-extra-10-dmbm10-a900ixjzg",
    "category": "tv",
    "rank": 10,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "QA65S95FAXXZW",
    "name": "65 型 OLED 4K Vision AI 智慧顯示器",
    "price": {
      "currency": "TWD",
      "amount": 94900,
      "converted": 94900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM10A900IXJZG/000001_1772871053.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM10-A900IXJZG",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 OLED",
      "Vision AI",
      "4K",
      "高階 S95F 系列",
      "手機投影：AirPlay / SmartThings/Tap View"
    ],
    "description": "Samsung QA65S95FAXXZW 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "OLED",
      "高亮度",
      "旗艦"
    ],
    "releaseDate": "2025-04-10",
    "historicalLow": {
      "status": "found",
      "amount": 79360,
      "currency": "TWD",
      "converted": 79360,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1272035063&cgp=94900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【Samsung 三星】QA65S95FAXXZW 65 吋 OLED 4K AI 智慧顯示器 (含基本桌上安裝)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【Samsung 三星】QA65S95FAXXZW 65 吋 OLED 4K AI 智慧顯示器 (含基本桌上安裝)」最低價為 NT$79,360，最低點日期 2026-03-24。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-extra-11-dpadzm-a900k3904",
    "category": "tv",
    "rank": 11,
    "budget": "mid",
    "channel": "tw",
    "brand": "TCL",
    "model": "65C8L",
    "name": "65 型 4K SQD-Mini LED Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 56990,
      "converted": 56990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADZMA900K3904/000001_1780907613.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADZM-A900K3904",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 Mini LED",
      "4K",
      "Google TV",
      "量子點背光",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "TCL 65C8L 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mini LED",
      "Google TV",
      "客廳"
    ],
    "releaseDate": "2026-05-05",
    "historicalLow": {
      "status": "found",
      "amount": 52000,
      "currency": "TWD",
      "converted": 52000,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282918688&cgp=52000",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【TCL】65C8L 65吋miniLED 4K連網智慧顯示器 (含基本安裝)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【TCL】65C8L 65吋miniLED 4K連網智慧顯示器 (含基本安裝)」最低價為 NT$52,000，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-extra-12-dpadzm-a900k2rgj",
    "category": "tv",
    "rank": 12,
    "budget": "value",
    "channel": "tw",
    "brand": "TCL",
    "model": "65A400M",
    "name": "65 型 4K QD-Mini LED Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 30990,
      "converted": 30990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADZMA900K2RGJ/000001_1780552782.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADZM-A900K2RGJ",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 QD-Mini LED",
      "4K",
      "Google TV",
      "中階價格帶",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "TCL 65A400M 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 81,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mini LED",
      "CP 值",
      "串流"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 28600,
      "currency": "TWD",
      "converted": 28600,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282835720&cgp=28600",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【TCL】65A400M 65吋miniLED 4K超薄連網智慧顯示器 (含基本安裝)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【TCL】65A400M 65吋miniLED 4K超薄連網智慧顯示器 (含基本安裝)」最低價為 NT$28,600，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-extra-13-dpadbu-1900jc97w",
    "category": "tv",
    "rank": 13,
    "budget": "value",
    "channel": "tw",
    "brand": "Xiaomi",
    "model": "S Pro Mini 65 2026",
    "name": "65 型 4K Mini LED 144Hz Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 26999,
      "converted": 26999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADBU1900JC97W/000001_1761379704.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADBU-1900JC97W",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 Mini LED",
      "4K 144Hz",
      "Google TV",
      "智慧聯網",
      "手機投影：AirPlay / Chromecast / Miracast"
    ],
    "description": "Xiaomi S Pro Mini 65 2026 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mini LED",
      "遊戲",
      "CP 值"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 20999,
      "currency": "TWD",
      "converted": 20999,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1262452291&cgp=25999",
      "sourceTitle": "LBJ 比價撿便宜歷史價格：Xiaomi 小米 S Pro Mini LED 2026 65 型智慧顯示器",
      "evidenceSnippet": "LBJ price_data contains 2026-03-03 at NT$20,999 for the exact-match Yahoo購物中心 product.",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "已由 worker 查核 BigGo、FindPrice、LBJ、Yahoo 與 PChome；採 LBJ Yahoo購物中心 exact-match 商品歷史低點 2026-03-03 NT$20,999。排除會員券、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-extra-14-dpadew-1900jpy1s",
    "category": "tv",
    "rank": 14,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "QA65QN900FXXZW",
    "name": "65 型 8K Neo QLED 165Hz Mini LED AI 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 89910,
      "converted": 89910,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADEW1900JPY1S/000001_1770558909.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADEW-1900JPY1S",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 8K Neo QLED",
      "Mini LED",
      "165Hz",
      "AI 智慧顯示器",
      "手機投影：AirPlay / SmartThings/Tap View"
    ],
    "description": "Samsung QA65QN900FXXZW 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 79,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "8K",
      "Mini LED",
      "旗艦"
    ],
    "releaseDate": "2025",
    "historicalLow": {
      "status": "found",
      "amount": 59800,
      "currency": "TWD",
      "converted": 59800,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1260955760&cgp=89910",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【Samsung 三星】原廠控價 私訊我更便宜 QA65QN900FXXZW 65型Neo QLED 8K AI智慧顯示器(含基本安裝)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【Samsung 三星】原廠控價 私訊我更便宜 QA65QN900FXXZW 65型Neo QLED 8K AI智慧顯示器(含基本安裝)」最低價為 NT$59,800，最低點日期 2026-03-24。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-extra-15-dpad0o-1900jl0z8",
    "category": "tv",
    "rank": 15,
    "budget": "value",
    "channel": "tw",
    "brand": "BenQ",
    "model": "J65-770",
    "name": "65 型 4K 144Hz Mini LED 量子點遊戲 Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 32899,
      "converted": 32899,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD0O1900JL0Z8/000001_1766513999.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD0O-1900JL0Z8",
    "buyLabel": "PChome",
    "specs": [
      "65 吋 Mini LED",
      "4K 144Hz",
      "Google TV",
      "內建重低音",
      "手機投影：AirPlay / Chromecast / Miracast"
    ],
    "description": "BenQ J65-770 是電視類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "同尺寸規格可直接比價",
      "台灣通路資訊與圖片完整"
    ],
    "cons": [
      "套組贈品與活動價波動大",
      "內建音響仍建議另搭 Soundbar"
    ],
    "bestFor": "想把綜合推薦之外的同尺寸或同級顯示器一起列入比價的人。",
    "recommendation": "同類推薦：可用來橫向比較面板技術、刷新率、系統與套組價格。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mini LED",
      "遊戲",
      "CP 值"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 29900,
      "currency": "TWD",
      "converted": 29900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1265781651&cgp=29900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：BenQ明基65吋miniLED 4K連網智慧顯示器J65-770 無安裝",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / BenQ明基65吋miniLED 4K連網智慧顯示器J65-770 無安裝」最低價為 NT$29,900，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-extra-16-dpadb2a900jgkqb",
    "category": "tv",
    "rank": 16,
    "budget": "mid",
    "channel": "tw",
    "brand": "AOC",
    "model": "65U8040",
    "name": "65型 4K QLED Google TV 智慧顯示器",
    "price": {
      "currency": "TWD",
      "amount": 13999,
      "converted": 13999,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADB2A900JGKQB/000001_1764820202.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADB2-A900JGKQB",
    "buyLabel": "PChome",
    "specs": [
      "65 吋",
      "4K",
      "QLED",
      "Google TV",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "AOC 65U8040 補進本分類比較池，重點是65 吋、4K、QLED，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "價格很有競爭力",
      "QLED 與 Google TV 規格完整"
    ],
    "cons": [
      "品牌高階畫質口碑不如日韓旗艦",
      "安裝另計需確認"
    ],
    "bestFor": "以 65 吋客廳主力電視為主，想看 QLED、Google TV 與品牌售後的人。",
    "recommendation": "補充推薦：65型 4K QLED Google TV 智慧顯示器 的優勢在價格很有競爭力，但仍建議把品牌高階畫質口碑不如日韓旗艦納入取捨。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "65吋",
      "QLED",
      "CP 值"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 13511,
      "currency": "TWD",
      "converted": 13511,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1283740096&cgp=13511",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【AOC】特價B品 65型 4K QLED Google TV 智慧顯示器(65U8040)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【AOC】特價B品 65型 4K QLED Google TV 智慧顯示器(65U8040)」最低價為 NT$13,511，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-extra-17-dpado5a900ie3y5",
    "category": "tv",
    "rank": 17,
    "budget": "mid",
    "channel": "tw",
    "brand": "Toshiba",
    "model": "65M450NT",
    "name": "REGZA 65型 4K QLED Google TV",
    "price": {
      "currency": "TWD",
      "amount": 17999,
      "converted": 17999,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADBHA900HWJZ7/000001_1780076528.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADBH-A900HWJZ7",
    "buyLabel": "PChome",
    "specs": [
      "65 吋",
      "4K",
      "QLED",
      "Google TV",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "Toshiba 65M450NT 補進本分類比較池，重點是65 吋、4K、QLED，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "REGZA 品牌調校有口碑",
      "含壁掛安裝方案可參考"
    ],
    "cons": [
      "非 Mini LED/OLED",
      "同型號不同方案需比價"
    ],
    "bestFor": "以 65 吋客廳主力電視為主，想看 QLED、Google TV 與品牌售後的人。",
    "recommendation": "補充推薦：REGZA 65型 4K QLED Google TV 的優勢在REGZA 品牌調校有口碑，但仍建議把非 Mini LED/OLED納入取捨。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "65吋",
      "QLED",
      "REGZA"
    ],
    "releaseDate": "2026-06-02",
    "historicalLow": {
      "status": "found",
      "amount": 17900,
      "currency": "TWD",
      "converted": 17900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1247818286&cgp=17900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：TOSHIBA東芝 65吋4K QLED連網智慧顯示器65M450NT 無安裝",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / TOSHIBA東芝 65吋4K QLED連網智慧顯示器65M450NT 無安裝」最低價為 NT$17,900，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-extra-18-dpadtoa900jne73",
    "category": "tv",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "brand": "CHiQ",
    "model": "CQ-65QX250",
    "name": "65型 4K QLED 120Hz Google TV",
    "price": {
      "currency": "TWD",
      "amount": 13990,
      "converted": 13990,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADTOA900JNE73/000001_1768523868.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADTO-A900JNE73",
    "buyLabel": "PChome",
    "specs": [
      "65 吋",
      "4K",
      "QLED",
      "120Hz",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "CHiQ CQ-65QX250 補進本分類比較池，重點是65 吋、4K、QLED，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "120Hz 規格價格漂亮",
      "適合預算型客廳"
    ],
    "cons": [
      "品牌售後與調校需斟酌",
      "HDR 表現不如高階款"
    ],
    "bestFor": "以 65 吋客廳主力電視為主，想看 QLED、Google TV 與品牌售後的人。",
    "recommendation": "補充推薦：65型 4K QLED 120Hz Google TV 的優勢在120Hz 規格價格漂亮，但仍建議把品牌售後與調校需斟酌納入取捨。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "65吋",
      "120Hz",
      "預算"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 12591,
      "currency": "TWD",
      "converted": 12591,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1269040312&cgp=13990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：CHiQ啟客 65型4K QLED google TV智慧聯網液晶顯示器 不含視訊盒 CQ-65QX250 含基本安裝+舊機回收",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / CHiQ啟客 65型4K QLED google TV智慧聯網液晶顯示器 不含視訊盒 CQ-65QX250 含基本安裝+舊機回收」最低價為 NT$12,591，最低點日期 2026-06-20。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-extra-19-dmbm10a900ifxk7",
    "category": "tv",
    "rank": 19,
    "budget": "mid",
    "channel": "tw",
    "brand": "TECO",
    "model": "TL65QU1TRE",
    "name": "65型 4K QLED Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 21411,
      "converted": 21411,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAD0WA900I9LNS/000001_1769648262.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAD0W-A900I9LNS",
    "buyLabel": "PChome",
    "specs": [
      "65 吋",
      "4K",
      "QLED",
      "Google TV",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "TECO TL65QU1TRE 補進本分類比較池，重點是65 吋、4K、QLED，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "台灣品牌、維修點較安心",
      "價格與規格平衡"
    ],
    "cons": [
      "影像處理不如高階國際品牌",
      "外型與聲音較基本"
    ],
    "bestFor": "以 65 吋客廳主力電視為主，想看 QLED、Google TV 與品牌售後的人。",
    "recommendation": "補充推薦：65型 4K QLED Google TV 顯示器 的優勢在台灣品牌、維修點較安心，但仍建議把影像處理不如高階國際品牌納入取捨。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "65吋",
      "台灣品牌",
      "QLED"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 16489,
      "currency": "TWD",
      "converted": 16489,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1237729736&cgp=20000",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：TECO東元 65吋4K連網智慧顯示器TL65QU1TRE 無安裝",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / TECO東元 65吋4K連網智慧顯示器TL65QU1TRE 無安裝」最低價為 NT$16,489，最低點日期 2026-01-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-extra-20-dpadw5a900k1qa7",
    "category": "tv",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "SAMPO",
    "model": "QM-65SF620",
    "name": "65型 QLED Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 19710,
      "converted": 19710,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DPADW5A900K1QA7/000001_1782888863.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPADW5-A900K1QA7",
    "buyLabel": "PChome",
    "specs": [
      "65 吋",
      "QLED",
      "Google TV",
      "量子點",
      "手機投影：AirPlay / Chromecast"
    ],
    "description": "SAMPO QM-65SF620 補進本分類比較池，重點是65 吋、QLED、Google TV，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "台灣通路與售後友善",
      "價格常有組合優惠"
    ],
    "cons": [
      "贈品方案需看是否真的需要",
      "高階畫質非主打"
    ],
    "bestFor": "以 65 吋客廳主力電視為主，想看 QLED、Google TV 與品牌售後的人。",
    "recommendation": "補充推薦：65型 QLED Google TV 顯示器 的優勢在台灣通路與售後友善，但仍建議把贈品方案需看是否真的需要納入取捨。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "65吋",
      "QLED",
      "台灣通路"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 16930,
      "currency": "TWD",
      "converted": 16930,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1273302585&cgp=19710",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【SAMPO 聲寶】原廠控價 私訊我更便宜 QM-65SF620 65吋QLED 4K聯網液晶顯示器(含基本安裝)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【SAMPO 聲寶】原廠控價 私訊我更便宜 QM-65SF620 65吋QLED 4K聯網液晶顯示器(含基本安裝)」最低價為 NT$16,930，最低點日期 2026-05-13。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-costco-toshiba-75z670nt",
    "category": "tv",
    "rank": 21,
    "budget": "mid",
    "channel": "tw",
    "brand": "Toshiba",
    "model": "75Z670NT",
    "name": "Regza 75型 4K QLED 144Hz 全陣列背光智慧顯示器",
    "price": {
      "currency": "TWD",
      "amount": 31999,
      "converted": 31999,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/hfe/ha8/438072160518174.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/TV-Home-Entertainment/Televisions-TV-Accessories/70-79-TVs/Toshiba-Regza-75-inch-Full-Array-4K-QLED-144Hz-Smart-Monitor-75Z670NT/p/152535",
    "buyLabel": "Costco 好市多",
    "specs": [
      "75 吋 4K QLED",
      "全陣列背光",
      "144Hz",
      "手機投影：通路頁未標示",
      "Costco 評價 4.8 / 50 則"
    ],
    "description": "Costco 75 吋大尺寸 QLED 高評價候選，適合想用較低預算取得大畫面、144Hz 與全陣列背光的人。",
    "pros": [
      "Costco 評價與評論數都漂亮",
      "75 吋大尺寸價格有競爭力"
    ],
    "cons": [
      "通路頁未標示手機投影能力",
      "大尺寸需先確認電梯、門寬與安裝動線"
    ],
    "bestFor": "客廳距離較長、想在 Costco 買大尺寸 4K QLED 的家庭。",
    "recommendation": "好市多補充推薦：75Z670NT 在 Costco 有 4.8 分與 50 則評論，適合和既有 65/75 吋候選比大尺寸 CP 值。",
    "score": 86,
    "voltage": "110V 台灣通路；大型家電需確認配送、安裝與舊機處理",
    "warranty": "依 Costco 好市多商品頁、品牌保固與退貨政策",
    "tags": [
      "Costco",
      "75吋",
      "QLED"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 31999,
      "currency": "TWD",
      "converted": 31999,
      "sourceUrl": "https://www.costco.com.tw/Televisions-Appliances/TV-Home-Entertainment/Televisions-TV-Accessories/70-79-TVs/Toshiba-Regza-75-inch-Full-Array-4K-QLED-144Hz-Smart-Monitor-75Z670NT/p/152535",
      "sourceTitle": "Costco 商品頁：東芝 Regza 75型 4K QLED 144Hz 全陣列背光智慧顯示器 75Z670NT | Costco 好市多",
      "evidenceSnippet": "Costco 商品頁 於 2026-07-10 回傳同一商品頁「東芝 Regza 75型 4K QLED 144Hz 全陣列背光智慧顯示器 75Z670NT | Costco 好市多」查核價 NT$31,999，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-10",
      "note": "採用可信通路同一商品頁可公開查核現價作為本次觀測到的最低價；同型號/規格並排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-costco-tcl-65c8k",
    "category": "tv",
    "rank": 22,
    "budget": "premium",
    "channel": "tw",
    "brand": "TCL",
    "model": "65C8K",
    "name": "65 吋 C8K QD-Mini LED Google TV 顯示器",
    "price": {
      "currency": "TWD",
      "amount": 45999,
      "converted": 45999,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h2d/ha5/438072223236126.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/TV-Home-Entertainment/Televisions-TV-Accessories/60-69-TVs/TCL-65-inch-premium-QD-Mini-LED-Google-TV-Smart-Monitor-without-STB-65C8K/p/154789",
    "buyLabel": "Costco 好市多",
    "specs": [
      "65 吋 QD-Mini LED",
      "4K / Google TV",
      "Dolby Atmos",
      "重量：30.6公斤",
      "手機投影：通路頁未標示",
      "Costco 評價 4.8 / 32 則"
    ],
    "description": "Costco 評價不錯的大尺寸顯示器候選，補進既有電視比較池但不取代 Top Pick。",
    "pros": [
      "Costco 評分與評論數具參考性",
      "好市多正常新品頁"
    ],
    "cons": [
      "大尺寸需確認擺放、壁掛與搬運",
      "手機投影能力若未標示則不猜測"
    ],
    "bestFor": "想從好市多挑大尺寸電視並和既有高階款比較的人",
    "recommendation": "好市多補充推薦：65 吋 C8K QD-Mini LED Google TV 顯示器 評價不錯，補進電視分類作為 Costco 候選比較。",
    "score": 89,
    "voltage": "100-240V；台灣好市多通路",
    "warranty": "依 Costco 好市多商品頁與品牌 3 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "Mini LED",
      "Google TV",
      "65吋"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 39900,
      "currency": "TWD",
      "converted": 39900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1269573974&cgp=49990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【TCL】家電快配★65型 頂級QD-Mini LED Google TV 144HZ 量子智能連網液晶顯示器 -基本安裝(65C8K)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【TCL】家電快配★65型 頂級QD-Mini LED Google TV 144HZ 量子智能連網液晶顯示器 -基本安裝(65C8K)」最低價為 NT$39,900，最低點日期 2026-06-26。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "tv-costco-hisense-75q7n",
    "category": "tv",
    "rank": 23,
    "budget": "premium",
    "channel": "tw",
    "brand": "Hisense",
    "model": "75Q7N",
    "name": "75 吋 Q7N 4K 144Hz QLED 智慧顯示器",
    "price": {
      "currency": "TWD",
      "amount": 37799,
      "converted": 37799,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h4e/h03/438072156979230.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/TV-Home-Entertainment/Televisions-TV-Accessories/70-79-TVs/Hisense-75-inch-4K-144Hz-HSR240-Full-Array-QLED-with-Dolby-VisionDolby-Atmos-VIDDA-Smart-Monitor-75Q7N/p/151005",
    "buyLabel": "Costco 好市多",
    "specs": [
      "75 吋 QLED",
      "4K 144Hz / VIDDA",
      "Dolby Vision / Dolby Atmos",
      "重量：28.9公斤（不含底座）",
      "手機投影：通路頁未標示",
      "Costco 評價 5 / 10 則"
    ],
    "description": "Costco 評價不錯的大尺寸顯示器候選，補進既有電視比較池但不取代 Top Pick。",
    "pros": [
      "Costco 評分與評論數具參考性",
      "好市多正常新品頁"
    ],
    "cons": [
      "大尺寸需確認擺放、壁掛與搬運",
      "手機投影能力若未標示則不猜測"
    ],
    "bestFor": "想從好市多挑大尺寸電視並和既有高階款比較的人",
    "recommendation": "好市多補充推薦：75 吋 Q7N 4K 144Hz QLED 智慧顯示器 評價不錯，補進電視分類作為 Costco 候選比較。",
    "score": 86,
    "voltage": "110V / 50-60Hz；台灣好市多通路",
    "warranty": "依 Costco 好市多商品頁與品牌 2 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "75吋",
      "QLED",
      "大尺寸"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 34704,
      "currency": "TWD",
      "converted": 34704,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1260718332&cgp=38560",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Hisense海信 75型 4K QLED 144HZ雙杜比連網液晶顯示器 75Q7N 送桌上安裝",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / Hisense海信 75型 4K QLED 144HZ雙杜比連網液晶顯示器 75Q7N 送桌上安裝」最低價為 NT$34,704，最低點日期 2026-06-24。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  }
]);
})();

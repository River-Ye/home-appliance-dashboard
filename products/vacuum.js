(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("vacuum", [
  {
    "id": "vac-dyson-v12",
    "category": "vacuum",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "Dyson",
    "model": "V12 Detect Slim Fluffy SV46",
    "name": "輕量智能無線吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 16888,
      "converted": 16888,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAX001900JVQDR/000001_1775552057.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAX00-1900JVQDR",
    "buyLabel": "PChome",
    "specs": [
      "輕量無線",
      "雷射顯塵",
      "HEPA 過濾",
      "多吸頭"
    ],
    "description": "重量、吸力、顯塵與維修支援平衡，是多數家庭乾吸主力機。",
    "pros": [
      "輕巧好拿",
      "顯塵很實用"
    ],
    "cons": [
      "價格高",
      "集塵筒容量較小"
    ],
    "bestFor": "日常灰塵、毛髮、地板與床墊快速清潔。",
    "recommendation": "綜合推薦：Dyson V12 輕量、雷射偵測與清潔評價穩，台灣通路售後清楚，比更大機種更常被拿起來用。",
    "score": 93,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "輕量",
      "顯塵",
      "乾吸"
    ],
    "releaseDate": "2022-06-22",
    "historicalLow": {
      "status": "found",
      "amount": 15900,
      "currency": "TWD",
      "converted": 15900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1272732921&cgp=17900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【dyson 戴森】V12 Detect Slim Fluffy SV46 強勁輕量智慧無線吸塵器 光學偵測(升級HEPA過濾)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【dyson 戴森】V12 Detect Slim Fluffy SV46 強勁輕量智慧無線吸塵器 光學偵測(升級HEPA過濾)」最低價為 NT$15,900，最低點日期 2026-03-28。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "vac-lg-a9x",
    "category": "vacuum",
    "rank": 2,
    "budget": "mid",
    "channel": "tw",
    "brand": "LG",
    "model": "CordZero A9X-AUTO",
    "name": "自動集塵無線吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 17900,
      "converted": 17900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAX8KA900HLX9W/000001_1744871467.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAX8K-A900HLX9W",
    "buyLabel": "PChome",
    "specs": [
      "280W 吸力",
      "自動集塵",
      "LCD 螢幕",
      "除蟎吸頭"
    ],
    "description": "自動集塵減少倒灰粉塵，對過敏家庭更友善。",
    "pros": [
      "自動集塵方便",
      "配件收納完整"
    ],
    "cons": [
      "基站占空間",
      "手持重量感比輕量機明顯"
    ],
    "bestFor": "過敏家庭、重視倒灰便利的人。",
    "recommendation": "若討厭倒灰，LG 的自動集塵比單純高吸力更有感。",
    "score": 90,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "自動集塵",
      "除蟎",
      "乾吸"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-09",
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ LG CordZero A9X-AUTO: 博客來 【限時優惠】LG 樂金 A9X系列 A9X-AUTO CordZero A9 X系列 All-in-One 快清式無線吸塵器-永夜灰 (自動集塵) 馬達保固10年 型號/規格不相符；LBJ LG CordZero A9X-AUTO: Yahoo購物中心 LG 樂金 CordZero A9 X系列 All-in-One 快清式無線吸塵器 永夜灰 A9X-AUTO 型號/規格不相符；LBJ LG CordZero A9X-AUTO: Momo富邦購物 【LG 樂金】CordZero A9X自動集塵無線吸塵器/吸頭收納x除蟎x輕量化(A9X-AUTO 永夜灰) 型號/規格不相符。"
    }
  },
  {
    "id": "vac-lg-a9k",
    "category": "vacuum",
    "rank": 3,
    "budget": "value",
    "channel": "tw",
    "brand": "LG",
    "model": "CordZero A9K-MOP3",
    "name": "寵物家庭濕拖無線吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 11900,
      "converted": 11900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAX8KA900JI8XJ/000001_1764582934.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAX8K-A900JI8XJ",
    "buyLabel": "PChome",
    "specs": [
      "無線吸塵",
      "濕拖吸頭",
      "寵物家庭",
      "多配件"
    ],
    "description": "價格比 A9X 低，仍保有 LG CordZero 基本優勢與濕拖配件。",
    "pros": [
      "價格合理",
      "可吸可拖"
    ],
    "cons": [
      "無自動集塵",
      "濕拖不是洗地機等級"
    ],
    "bestFor": "小家庭、寵物毛與輕度濕拖。",
    "recommendation": "想要 LG 品牌但預算有限，A9K 系列比旗艦更實際。",
    "score": 86,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "CP 值",
      "寵物",
      "濕拖"
    ],
    "releaseDate": "2020-11-27",
    "historicalLow": {
      "status": "found",
      "amount": 10790,
      "currency": "TWD",
      "converted": 10790,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1272634381&cgp=12740",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【LG 樂金】CordZero A9K+ 濕拖無線吸塵器 | 永夜灰｜A9K-MOP3",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【LG 樂金】CordZero A9K+ 濕拖無線吸塵器 | 永夜灰｜A9K-MOP3」最低價為 NT$10,790，最低點日期 2026-04-15。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "vac-tineco-s7",
    "category": "vacuum",
    "rank": 4,
    "budget": "premium",
    "channel": "tw",
    "brand": "Tineco",
    "model": "Switch S7 Stretch",
    "name": "無線多工平躺速乾洗地吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 18880,
      "converted": 18880,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAXB5A900JFCJP/000001_1762402803.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAXB5-A900JFCJP",
    "buyLabel": "PChome",
    "specs": [
      "22000Pa",
      "平躺洗地",
      "85 度熱水洗",
      "5 分鐘速乾"
    ],
    "description": "偏洗地機定位，對廚房油污、毛髮與硬地板濕拖更強。",
    "pros": [
      "洗地能力強",
      "自清潔便利"
    ],
    "cons": [
      "不適合取代輕量乾吸",
      "機身與基站較大"
    ],
    "bestFor": "硬地板、廚房、寵物腳印與濕污。",
    "recommendation": "若你痛點是拖地不是吸灰，Tineco 比 Dyson 類乾吸更對題。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依通路",
    "tags": [
      "洗地",
      "熱水洗",
      "寵物"
    ],
    "releaseDate": "2024",
    "historicalLow": {
      "status": "found",
      "amount": 17559,
      "currency": "TWD",
      "converted": 17559,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1269933553&cgp=17936",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Tineco 添可】Switch S7 Stretch多工平躺洗地吸塵器 (22000Pa/5分鐘速乾/85度熱水洗/電解水除菌)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / 【Tineco 添可】Switch S7 Stretch多工平躺洗地吸塵器 (22000Pa/5分鐘速乾/85度熱水洗/電解水除菌)」最低價為 NT$17,559，最低點日期 2026-06-18。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "vac-dyson-submarine",
    "category": "vacuum",
    "rank": 5,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dyson",
    "model": "V12s Detect Slim Submarine",
    "name": "乾濕全能洗地吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 24900,
      "converted": 24900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBF05A900GCL8W/000001_1780460543.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBF05-A900GCL8W",
    "buyLabel": "PChome",
    "specs": [
      "乾吸 + 濕拖",
      "Submarine 洗地頭",
      "顯塵",
      "雙主吸頭"
    ],
    "description": "把 Dyson 乾吸優勢與洗地頭整合，適合想一套系統解決的人。",
    "pros": [
      "乾吸能力強",
      "一套配件完整"
    ],
    "cons": [
      "價格高",
      "洗地便利性不如專門洗地機"
    ],
    "bestFor": "已鎖定 Dyson 生態、想補濕拖功能。",
    "recommendation": "若乾吸仍是主需求，Submarine 比純洗地機更通用。",
    "score": 85,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "乾濕",
      "顯塵",
      "旗艦"
    ],
    "releaseDate": "2023-06-28",
    "historicalLow": {
      "status": "found",
      "amount": 19437,
      "currency": "TWD",
      "converted": 19437,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1272397485&cgp=20900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【dyson 戴森】V12s Detect Slim Submarine SV46 乾溼全能洗地吸塵器(雙主吸頭 全新升級版 洗地機)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【dyson 戴森】V12s Detect Slim Submarine SV46 乾溼全能洗地吸塵器(雙主吸頭 全新升級版 洗地機)」最低價為 NT$19,437，最低點日期 2026-07-02。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "vacuum-extra-6-dmax00-1900i2dsh",
    "category": "vacuum",
    "rank": 6,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dyson",
    "model": "V12 Fluffy SV46",
    "name": "V12 Fluffy 智慧輕量吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 18900,
      "converted": 18900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAX001900I2DSH/000001_1780465775.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAX00-1900I2DSH",
    "buyLabel": "PChome",
    "specs": [
      "輕量無線",
      "智慧感測",
      "Fluffy 吸頭",
      "SV46"
    ],
    "description": "Dyson V12 Fluffy SV46 是吸塵器類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "從手持到洗地機價差清楚",
      "可依重量與吸頭配置挑選"
    ],
    "cons": [
      "電池衰退與耗材需留意",
      "濕拖/洗地款維護時間較高"
    ],
    "bestFor": "重視毛髮、除螨、洗地或輕量日常清潔的人。",
    "recommendation": "同類推薦：補齊旗艦、洗地、除螨與入門無線吸塵器價格帶。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Dyson",
      "輕量",
      "無線"
    ],
    "releaseDate": "2021-05",
    "historicalLow": {
      "status": "found",
      "amount": 16044,
      "currency": "TWD",
      "converted": 16044,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1274420256&cgp=16382",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Dyson V12 Fluffy SV46 輕量智慧無線吸塵器 贈副廠架+自動摺疊傘",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / Dyson V12 Fluffy SV46 輕量智慧無線吸塵器 贈副廠架+自動摺疊傘」最低價為 NT$16,044，最低點日期 2026-06-18。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "vacuum-extra-7-dmax00-1900jra9w",
    "category": "vacuum",
    "rank": 7,
    "budget": "mid",
    "channel": "tw",
    "brand": "Dyson",
    "model": "V12s Origin Submarine SV49",
    "name": "V12s Origin Submarine 乾濕全能洗地吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 17900,
      "converted": 17900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAX001900JRA9W/000001_1780465600.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAX00-1900JRA9W",
    "buyLabel": "PChome",
    "specs": [
      "乾濕全能",
      "Submarine 洗地",
      "雙主吸頭",
      "SV49"
    ],
    "description": "Dyson V12s Origin Submarine SV49 是吸塵器類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "從手持到洗地機價差清楚",
      "可依重量與吸頭配置挑選"
    ],
    "cons": [
      "電池衰退與耗材需留意",
      "濕拖/洗地款維護時間較高"
    ],
    "bestFor": "重視毛髮、除螨、洗地或輕量日常清潔的人。",
    "recommendation": "同類推薦：補齊旗艦、洗地、除螨與入門無線吸塵器價格帶。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "洗地",
      "Dyson",
      "寵物"
    ],
    "releaseDate": "2025-11",
    "historicalLow": {
      "status": "found",
      "amount": 15888,
      "currency": "TWD",
      "converted": 15888,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=530872976&cgp=16900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Dyson SV49 V12s Origin Submarine 乾濕洗地吸塵器/洗地/除蟎機 三機一體 公司貨 2年保",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - dyson戴森｜恆隆行官方旗艦館 / Dyson SV49 V12s Origin Submarine 乾濕洗地吸塵器/洗地/除蟎機 三機一體 公司貨 2年保」最低價為 NT$15,888，最低點日期 2026-04-29。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "vacuum-extra-8-dmax00-a900hc7b6",
    "category": "vacuum",
    "rank": 8,
    "budget": "mid",
    "channel": "tw",
    "brand": "Dyson",
    "model": "V15 Detect Fluffy SV47",
    "name": "V15 Detect Fluffy 智慧無線吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 17900,
      "converted": 17900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAX00A900HC7B6/000001_1782183523.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAX00-A900HC7B6",
    "buyLabel": "PChome",
    "specs": [
      "無線吸塵",
      "Detect 顯塵",
      "除螨",
      "SV47"
    ],
    "description": "Dyson V15 Detect Fluffy SV47 是吸塵器類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "從手持到洗地機價差清楚",
      "可依重量與吸頭配置挑選"
    ],
    "cons": [
      "電池衰退與耗材需留意",
      "濕拖/洗地款維護時間較高"
    ],
    "bestFor": "重視毛髮、除螨、洗地或輕量日常清潔的人。",
    "recommendation": "同類推薦：補齊旗艦、洗地、除螨與入門無線吸塵器價格帶。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "顯塵",
      "Dyson",
      "高吸力"
    ],
    "releaseDate": "2021",
    "historicalLow": {
      "status": "found",
      "amount": 17900,
      "currency": "TWD",
      "converted": 17900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1274300369&cgp=17900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【dyson 戴森】V15 Detect Fluffy SV47 智慧無線吸塵器 光學偵測/除螨機(升級HEPA過濾旗艦款)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【dyson 戴森】V15 Detect Fluffy SV47 智慧無線吸塵器 光學偵測/除螨機(升級HEPA過濾旗艦款)」最低價為 NT$17,900，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "vacuum-extra-9-dmax00-a900hc5bz",
    "category": "vacuum",
    "rank": 9,
    "budget": "value",
    "channel": "tw",
    "brand": "Dyson",
    "model": "V8 Focus Mattress HH15",
    "name": "V8 Focus Mattress origin 強勁無線除塵螨機",
    "price": {
      "currency": "TWD",
      "amount": 7990,
      "converted": 7990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAX00A900HC5BZ/000001_1780458569.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAX00-A900HC5BZ",
    "buyLabel": "PChome",
    "specs": [
      "除塵螨",
      "手持無線",
      "床墊清潔",
      "HH15"
    ],
    "description": "Dyson V8 Focus Mattress HH15 是吸塵器類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "從手持到洗地機價差清楚",
      "可依重量與吸頭配置挑選"
    ],
    "cons": [
      "電池衰退與耗材需留意",
      "濕拖/洗地款維護時間較高"
    ],
    "bestFor": "重視毛髮、除螨、洗地或輕量日常清潔的人。",
    "recommendation": "同類推薦：補齊旗艦、洗地、除螨與入門無線吸塵器價格帶。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "除螨",
      "手持",
      "CP 值"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 4618,
      "currency": "TWD",
      "converted": 4618,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=554664694&cgp=4618",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Dyson V8 Focus Mattress HH15 除塵蟎手持吸塵器 神腦生活",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - 神腦生活 Senaonline / Dyson V8 Focus Mattress HH15 除塵蟎手持吸塵器 神腦生活」最低價為 NT$4,618，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "vacuum-extra-10-dmax8k-a900hlxaq",
    "category": "vacuum",
    "rank": 10,
    "budget": "premium",
    "channel": "tw",
    "brand": "LG",
    "model": "CordZero A9X-STEAM",
    "name": "CordZero A9X 蒸氣濕拖自動集塵無線吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 26900,
      "converted": 26900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAX8KA900HLXAQ/000001_1744871444.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAX8K-A900HLXAQ",
    "buyLabel": "PChome",
    "specs": [
      "280W 吸力",
      "蒸氣濕拖",
      "自動集塵",
      "LCD 螢幕"
    ],
    "description": "LG CordZero A9X-STEAM 是吸塵器類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "從手持到洗地機價差清楚",
      "可依重量與吸頭配置挑選"
    ],
    "cons": [
      "電池衰退與耗材需留意",
      "濕拖/洗地款維護時間較高"
    ],
    "bestFor": "重視毛髮、除螨、洗地或輕量日常清潔的人。",
    "recommendation": "同類推薦：補齊旗艦、洗地、除螨與入門無線吸塵器價格帶。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "自動集塵",
      "蒸氣",
      "LG"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-09",
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ LG CordZero A9X-STEAM: Momo富邦購物 (店+)【LG 樂金】A9X-STEAM 拆封新品 CordZero A9 X 蒸氣濕拖無線吸塵器 雪霧白 (吸拖洗地機/自動集塵) 型號/規格不相符；LBJ LG CordZero A9X-STEAM: Momo富邦購物 【LG 樂金】CordZero A9X蒸氣濕拖自動集塵無線吸塵器/吸頭收納x除蟎(A9X-STEAM 雪霧白) 型號/規格不相符；LBJ LG CordZero A9X-STEAM: 博客來 【限時優惠】LG 樂金 A9X系列 A9X-STEAM CordZero A9 X系列 All-in-One 蒸氣濕拖無線吸塵器-雪霧白 (自動集塵) 馬達保固10年 型號/規格不相符。"
    }
  },
  {
    "id": "vacuum-extra-11-dmbm2z-a900iukmi",
    "category": "vacuum",
    "rank": 11,
    "budget": "value",
    "channel": "tw",
    "brand": "LG",
    "model": "CordZero A9 Air A7-LITE",
    "name": "CordZero A9 Air 快清式無線吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 7990,
      "converted": 7990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM2ZA900IUKMI/000001_1768459978.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM2Z-A900IUKMI",
    "buyLabel": "PChome",
    "specs": [
      "無線吸塵",
      "輕量",
      "快清式",
      "A7-LITE"
    ],
    "description": "LG CordZero A9 Air A7-LITE 是吸塵器類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "從手持到洗地機價差清楚",
      "可依重量與吸頭配置挑選"
    ],
    "cons": [
      "電池衰退與耗材需留意",
      "濕拖/洗地款維護時間較高"
    ],
    "bestFor": "重視毛髮、除螨、洗地或輕量日常清潔的人。",
    "recommendation": "同類推薦：補齊旗艦、洗地、除螨與入門無線吸塵器價格帶。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "LG",
      "輕量",
      "低價"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-09",
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ LG CordZero A9 Air A7-LITE: Momo富邦購物 【LG 樂金】CordZero A9 Air濕拖無線吸塵器/乾吸濕拖x超輕盈x超美型xmomo獨家(A7-LITEMOP 雲朵白) 型號/規格不相符；LBJ LG CordZero A9 Air A7-LITE: Momo富邦購物 (店+)【LG 樂金】下殺促銷!! CordZero™ A9 Air快清式無線吸塵器 A7-LITE 型號/規格不相符；LBJ LG CordZero A9 Air A7-LITE: Yahoo購物中心 【LG樂金】CordZero A9 Air快清式無線吸塵器 A7-LITE 型號/規格不相符。"
    }
  },
  {
    "id": "vacuum-extra-12-dmax6f-a900k2nsv",
    "category": "vacuum",
    "rank": 12,
    "budget": "value",
    "channel": "tw",
    "brand": "LG",
    "model": "CordZero A9 Air",
    "name": "CordZero A9 Air 輕量美型無線吸塵器雪霧白",
    "price": {
      "currency": "TWD",
      "amount": 7190,
      "converted": 7190,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAX6FA900K2NSV/000001_1780464185.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAX6F-A900K2NSV",
    "buyLabel": "PChome",
    "specs": [
      "無線吸塵",
      "輕量",
      "雪霧白",
      "A9 Air"
    ],
    "description": "LG CordZero A9 Air 是吸塵器類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "從手持到洗地機價差清楚",
      "可依重量與吸頭配置挑選"
    ],
    "cons": [
      "電池衰退與耗材需留意",
      "濕拖/洗地款維護時間較高"
    ],
    "bestFor": "重視毛髮、除螨、洗地或輕量日常清潔的人。",
    "recommendation": "同類推薦：補齊旗艦、洗地、除螨與入門無線吸塵器價格帶。",
    "score": 81,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "LG",
      "輕量",
      "均衡"
    ],
    "releaseDate": "2018-12-18",
    "historicalLow": {
      "status": "found",
      "amount": 7071,
      "currency": "TWD",
      "converted": 7071,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1250878390&cgp=7111",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【LG 樂金】下殺促銷!! CordZero™ A9 Air快清式無線吸塵器 A7-LITE",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【LG 樂金】下殺促銷!! CordZero™ A9 Air快清式無線吸塵器 A7-LITE」最低價為 NT$7,071，最低點日期 2025-08-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "vacuum-extra-13-dsbe1a-a900jj4lu",
    "category": "vacuum",
    "rank": 13,
    "budget": "value",
    "channel": "tw",
    "brand": "Siroca",
    "model": "SV-SP3710",
    "name": "超輕量無線吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 3280,
      "converted": 3280,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBE1AA900JJ4LU/000001_1765270758.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBE1A-A900JJ4LU",
    "buyLabel": "PChome",
    "specs": [
      "超輕量",
      "無線吸塵",
      "小空間",
      "入門價位"
    ],
    "description": "Siroca SV-SP3710 是吸塵器類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "從手持到洗地機價差清楚",
      "可依重量與吸頭配置挑選"
    ],
    "cons": [
      "電池衰退與耗材需留意",
      "濕拖/洗地款維護時間較高"
    ],
    "bestFor": "重視毛髮、除螨、洗地或輕量日常清潔的人。",
    "recommendation": "同類推薦：補齊旗艦、洗地、除螨與入門無線吸塵器價格帶。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "輕量",
      "低價",
      "小宅"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-09",
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Siroca SV-SP3710: 博客來 日本 Siroca 超輕量無線吸塵器 SV-SP3710 白 型號/規格不相符；LBJ Siroca SV-SP3710: Momo富邦購物 【Siroca】官方直營 SV-SP3710超輕量無線吸塵器(無線吸塵器) 型號/規格不相符；LBJ Siroca SV-SP3710: Momo富邦購物 (店+)【Siroca】超輕量無線吸塵器 SV-SP3710 型號/規格不相符。"
    }
  },
  {
    "id": "vacuum-extra-14-dsbe1a-a900j8h81",
    "category": "vacuum",
    "rank": 14,
    "budget": "value",
    "channel": "tw",
    "brand": "Plus Minus Zero",
    "model": "XJC-Y011",
    "name": "正負零 XJC-Y011 無線手持吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 3990,
      "converted": 3990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBE1AA900J8H81/000001_1757576197.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBE1A-A900J8H81",
    "buyLabel": "PChome",
    "specs": [
      "無線手持",
      "輕量",
      "簡約設計",
      "入門價格"
    ],
    "description": "Plus Minus Zero XJC-Y011 是吸塵器類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "從手持到洗地機價差清楚",
      "可依重量與吸頭配置挑選"
    ],
    "cons": [
      "電池衰退與耗材需留意",
      "濕拖/洗地款維護時間較高"
    ],
    "bestFor": "重視毛髮、除螨、洗地或輕量日常清潔的人。",
    "recommendation": "同類推薦：補齊旗艦、洗地、除螨與入門無線吸塵器價格帶。",
    "score": 79,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "低價",
      "手持",
      "設計"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-09",
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：BigGo DSBE1A-A900J8H81: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DSBE1A-A900J8H81/product?p=1；BigGo Plus Minus Zero XJC-Y011: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/Plus%20Minus%20Zero%20XJC-Y011/product?p=1。"
    }
  },
  {
    "id": "vacuum-extra-15-dsbe1a-a900ha30v",
    "category": "vacuum",
    "rank": 15,
    "budget": "value",
    "channel": "tw",
    "brand": "HERAN",
    "model": "HVC-35SC050",
    "name": "旗艦吸力智能感應高效率吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 3990,
      "converted": 3990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBE1AA900HA30V/000001_1709535798.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBE1A-A900HA30V",
    "buyLabel": "PChome",
    "specs": [
      "智能感應",
      "高效率吸塵",
      "無線",
      "入門價位"
    ],
    "description": "HERAN HVC-35SC050 是吸塵器類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "從手持到洗地機價差清楚",
      "可依重量與吸頭配置挑選"
    ],
    "cons": [
      "電池衰退與耗材需留意",
      "濕拖/洗地款維護時間較高"
    ],
    "bestFor": "重視毛髮、除螨、洗地或輕量日常清潔的人。",
    "recommendation": "同類推薦：補齊旗艦、洗地、除螨與入門無線吸塵器價格帶。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "HERAN",
      "低價",
      "家用"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 3686,
      "currency": "TWD",
      "converted": 3686,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1262115056&cgp=3791",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：禾聯HERAN 無線手持吸塵器 HVC-35SC050",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / 禾聯HERAN 無線手持吸塵器 HVC-35SC050」最低價為 NT$3,686，最低點日期 2026-02-07。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "vacuum-extra-16-dmaxb5a900jp6tz",
    "category": "vacuum",
    "rank": 16,
    "budget": "mid",
    "channel": "tw",
    "brand": "Tineco",
    "model": "S7 Stretch Steam",
    "name": "蒸氣旗艦洗地機",
    "price": {
      "currency": "TWD",
      "amount": 15488,
      "converted": 15488,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAXB5A900JP6TZ/000001_1770084365.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAXB5-A900JP6TZ",
    "buyLabel": "PChome",
    "specs": [
      "160度蒸氣",
      "80min 續航",
      "5分鐘速烘",
      "洗地機"
    ],
    "description": "Tineco S7 Stretch Steam 補進本分類比較池，重點是160度蒸氣、80min 續航、5分鐘速烘，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "硬污與地板清潔能力強",
      "自清潔與速烘完整"
    ],
    "cons": [
      "比一般吸塵器重",
      "主要適合硬地板"
    ],
    "bestFor": "想依照吸塵、洗地、自動集塵與輕量需求比較的人。",
    "recommendation": "補充推薦：蒸氣旗艦洗地機 的優勢在硬污與地板清潔能力強，但仍建議把比一般吸塵器重納入取捨。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "洗地機",
      "蒸氣",
      "旗艦"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 13880,
      "currency": "TWD",
      "converted": 13880,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=542839592&cgp=13880",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Tineco 添可】S7 Stretch Steam 蒸氣旗艦洗地機 160°C蒸氣除菌 80分鐘長續航 5分鐘速烘乾",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - 尋覓3C影音 / 【Tineco 添可】S7 Stretch Steam 蒸氣旗艦洗地機 160°C蒸氣除菌 80分鐘長續航 5分鐘速烘乾」最低價為 NT$13,880，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "vacuum-extra-17-dmax00a900jpj7h",
    "category": "vacuum",
    "rank": 17,
    "budget": "mid",
    "channel": "tw",
    "brand": "Dyson",
    "model": "SV50",
    "name": "PencilVac Fluffycones 筆型吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 19900,
      "converted": 19900,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAX00A900JPJ7H/000001_1777291832.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAX00-A900JPJ7H",
    "buyLabel": "PChome",
    "specs": [
      "筆型",
      "Fluffycones",
      "輕量",
      "無線"
    ],
    "description": "Dyson SV50 補進本分類比較池，重點是筆型、Fluffycones、輕量，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "極輕巧、日常隨手吸很方便",
      "Dyson 售後與耗材成熟"
    ],
    "cons": [
      "集塵容量較小",
      "不適合一次清大坪數"
    ],
    "bestFor": "想依照吸塵、洗地、自動集塵與輕量需求比較的人。",
    "recommendation": "補充推薦：PencilVac Fluffycones 筆型吸塵器 的優勢在極輕巧、日常隨手吸很方便，但仍建議把集塵容量較小納入取捨。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "Dyson",
      "輕量",
      "筆型"
    ],
    "releaseDate": "2025",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-09",
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Dyson SV50: 蝦皮商城 - 瘋旅遊 Crazy Travel 適用Dyson吸塵器 Pencilvac Fluffycones SV50 濾網 鉛筆濾網 濾網 過濾芯 戴森濾網 最低價 NT$285 低於現價合理比例，疑似月付/配件/錯類；LBJ Dyson SV50: 蝦皮商城 - 愛濾屋-清淨專家 濾網領航 台灣製造 品質出眾 適用Dyson戴森Pencilvac Fluffycones SV50 SV50FF筆型/鉛筆吸塵器HEPA集塵濾網芯 最低價 NT$325 低於現價合理比例，疑似月付/配件/錯類；LBJ Dyson SV50: Momo富邦購物 (店+)適用Dyson戴森Pencilvac Fluffycones SV50 SV50FF筆型吸塵器HEPA集塵濾網芯 最低價 NT$350 低於現價合理比例，疑似月付/配件/錯類。"
    }
  },
  {
    "id": "vacuum-extra-18-dmaxb5a900jcn6g",
    "category": "vacuum",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "brand": "Tineco",
    "model": "S9 Artist Pro",
    "name": "AI 美型長續航平躺速乾洗地機",
    "price": {
      "currency": "TWD",
      "amount": 15988,
      "converted": 15988,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAXB5A900JCN6G/000001_1760586651.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAXB5-A900JCN6G",
    "buyLabel": "PChome",
    "specs": [
      "22000Pa",
      "AI 助航",
      "平躺",
      "5分鐘速乾"
    ],
    "description": "Tineco S9 Artist Pro 補進本分類比較池，重點是22000Pa、AI 助航、平躺，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "規格高、平躺清潔方便",
      "外型與自清潔完整"
    ],
    "cons": [
      "價格高",
      "水箱維護比吸塵器麻煩"
    ],
    "bestFor": "想依照吸塵、洗地、自動集塵與輕量需求比較的人。",
    "recommendation": "補充推薦：AI 美型長續航平躺速乾洗地機 的優勢在規格高、平躺清潔方便，但仍建議把價格高納入取捨。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "洗地機",
      "AI",
      "平躺"
    ],
    "releaseDate": "2025",
    "historicalLow": {
      "status": "found",
      "amount": 13618,
      "currency": "TWD",
      "converted": 13618,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1261476801&cgp=14777",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Tineco 添可】MOMO獨家限定-S9 Artist Pro平躺速烘吸塵洗地機(AI助航/5分鐘速乾/85度熱水洗/電解水除菌)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Tineco 添可】MOMO獨家限定-S9 Artist Pro平躺速烘吸塵洗地機(AI助航/5分鐘速乾/85度熱水洗/電解水除菌)」最低價為 NT$13,618，最低點日期 2026-06-15。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "vacuum-extra-19-dmax0za900higmz",
    "category": "vacuum",
    "rank": 19,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "MC-KC1W",
    "name": "One Box 自動集塵吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 9310,
      "converted": 9310,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAX0ZA900HIGMZ/000001_1716798929.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAX0Z-A900HIGMZ",
    "buyLabel": "PChome",
    "specs": [
      "自動集塵",
      "無線",
      "One Box",
      "Panasonic"
    ],
    "description": "Panasonic MC-KC1W 補進本分類比較池，重點是自動集塵、無線、One Box，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "自動集塵降低倒塵頻率",
      "日系品牌售後穩"
    ],
    "cons": [
      "主機與集塵座占空間",
      "價格高於一般手持吸塵器"
    ],
    "bestFor": "想依照吸塵、洗地、自動集塵與輕量需求比較的人。",
    "recommendation": "補充推薦：One Box 自動集塵吸塵器 的優勢在自動集塵降低倒塵頻率，但仍建議把主機與集塵座占空間納入取捨。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "自動集塵",
      "Panasonic",
      "無線"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 9292,
      "currency": "TWD",
      "converted": 9292,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1222509812&cgp=9595",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Panasonic國際牌 自動集塵吸塵器MC-KC1W",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / Panasonic國際牌 自動集塵吸塵器MC-KC1W」最低價為 NT$9,292，最低點日期 2026-06-28。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "vacuum-extra-20-dmax0za900k4iqz",
    "category": "vacuum",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "MC-SBR70",
    "name": "微塵感知極淨光無線吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 12000,
      "converted": 12000,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAX0ZA900K4IQZ/000001_1781668428.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAX0Z-A900K4IQZ",
    "buyLabel": "PChome",
    "specs": [
      "無線直立/手持",
      "微塵感知",
      "極淨光",
      "Panasonic"
    ],
    "description": "Panasonic MC-SBR70 補進本分類比較池，重點是無線直立/手持、微塵感知、極淨光，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "偵測灰塵讓清潔更有感",
      "品牌維修較安心"
    ],
    "cons": [
      "沒有自動集塵",
      "同價位需比較 Dyson/LG"
    ],
    "bestFor": "想依照吸塵、洗地、自動集塵與輕量需求比較的人。",
    "recommendation": "補充推薦：微塵感知極淨光無線吸塵器 的優勢在偵測灰塵讓清潔更有感，但仍建議把沒有自動集塵納入取捨。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "微塵感知",
      "無線",
      "Panasonic"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-09",
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Panasonic MC-SBR70: 樂天市場 - Panasonic授權台北中山佳麗寶電器 Panasonic授權台北中山佳麗寶電器 【Panasonic】極淨光吸塵器 (MC-SBR70) 型號/規格不相符；LBJ Panasonic MC-SBR70: 樂天市場 - Panasonic授權新店達澄電器行 Panasonic授權新店達澄電器行 【Panasonic】極淨光吸塵器 (MC-SBR70) 型號/規格不相符；LBJ Panasonic MC-SBR70: 樂天市場 - Panasonic授權高雄梓官協福電器 Panasonic授權高雄梓官協福電器 【Panasonic】極淨光吸塵器 (MC-SBR70) 型號/規格不相符。"
    }
  },
  {
    "id": "vacuum-costco-electrolux-wq71-2bswf",
    "category": "vacuum",
    "rank": 21,
    "budget": "mid",
    "channel": "tw",
    "brand": "Electrolux",
    "model": "WQ71-2BSWF",
    "name": "無線吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 6999,
      "converted": 6999,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h52/h5d/351316137377822.jpg",
    "buyUrl": "https://www.costco.com.tw/p/153289",
    "buyLabel": "Costco 好市多",
    "specs": [
      "無線吸塵器",
      "直立/手持使用",
      "Costco 評價 4.4 / 83 則"
    ],
    "description": "Electrolux WQ71-2BSWF 是 Costco 評論數足夠的無線吸塵器，價格落在中階。",
    "pros": [
      "Costco 83 則評論、4.4 分",
      "無線機型收納與日常清潔便利"
    ],
    "cons": [
      "續航與吸力需依實際模式取捨",
      "不一定適合大量濕污或粗重清潔"
    ],
    "bestFor": "一般家庭日常地板、毛髮與局部清潔。",
    "recommendation": "好市多補充推薦：WQ71-2BSWF 可作為 Costco 通路中階無線吸塵器代表。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 Costco 好市多商品頁、品牌保固與退貨政策",
    "tags": [
      "Costco",
      "無線",
      "中階"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 7777,
      "currency": "TWD",
      "converted": 7777,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1236881880&cgp=8888",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Electrolux 伊萊克斯】Well Q7無線吸塵器(WQ71-2BSWF 冰雪白)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Electrolux 伊萊克斯】Well Q7無線吸塵器(WQ71-2BSWF 冰雪白)」最低價為 NT$7,777，最低點日期 2025-07-24。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    }
  },
  {
    "id": "vacuum-costco-iris-ic-h50",
    "category": "vacuum",
    "rank": 22,
    "budget": "value",
    "channel": "tw",
    "brand": "IRIS OHYAMA",
    "model": "IC-H50",
    "name": "手持式充電吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 1959,
      "converted": 1959,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/videos/h7d/h27/242857399779358.mp4",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Small-Appliances/Vacuums-Floor-Care/IRIS-OHYAMA-Handy-Rechargeable-Cleaner-IC-H50/p/144463",
    "buyLabel": "Costco 好市多",
    "specs": [
      "手持充電式",
      "重量：約500公克",
      "110V 充電",
      "含充電座與縫隙吸頭",
      "Costco 評價 4.8 / 94 則"
    ],
    "description": "Costco 評價不錯的吸塵器候選，補進手持與輕量清潔比較池。",
    "pros": [
      "價格親民",
      "小空間與局部清潔方便"
    ],
    "cons": [
      "不適合作為大坪數主力機",
      "續航與吸力需依小型機期待"
    ],
    "bestFor": "租屋、車內、桌面或局部快速清潔的人",
    "recommendation": "好市多補充推薦：手持式充電吸塵器 評價不錯，補進吸塵器分類作為 Costco 候選比較。",
    "score": 87,
    "voltage": "110V 充電",
    "warranty": "依 Costco 好市多商品頁與品牌 1 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "手持",
      "輕量",
      "小空間"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-09",
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ IRIS OHYAMA IC-H50: Momo富邦購物 (店+)【D+ 滴家】IRIS Ohyama IC-H50 無線車用手持式 吸塵器 HEPA 濾網 濾心 IC-HH50 ICH50 (副廠) 非採用通路或含排除條件；LBJ IRIS OHYAMA IC-H50: 蝦皮商城 - Renza Filtration 濾網專家 適用 IRIS OHYAMA 愛麗思歐雅瑪 IC-H50 攜帶式充電吸塵器 HEPA濾網 濾芯 濾心 非採用通路或含排除條件；LBJ IRIS OHYAMA IC-H50: 蝦皮商城 - 淨博-外銷歐美日專業空氣清淨濾網 適用Iris Ohyama 無線車用手持式吸塵器IC-H50 (costco款)替換用HEPA微塵濾網濾心IC-HH50 非採用通路或含排除條件。"
    }
  },
  {
    "id": "vacuum-costco-iris-hcd-22mw",
    "category": "vacuum",
    "rank": 23,
    "budget": "value",
    "channel": "tw",
    "brand": "IRIS OHYAMA",
    "model": "HCD-22MW",
    "name": "手持式充電吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 2359,
      "converted": 2359,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/hdb/h8a/363834870693918.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Small-Appliances/Vacuums-Floor-Care/IRIS-OHYAMA-Handy-Rechargeable-Cleaner-HCD-22MW/p/151572",
    "buyLabel": "Costco 好市多",
    "specs": [
      "手持充電式",
      "可接延長管",
      "110V / 60Hz",
      "重量：約800公克",
      "Costco 評價 4.4 / 28 則"
    ],
    "description": "Costco 評價不錯的吸塵器候選，補進手持與輕量清潔比較池。",
    "pros": [
      "價格親民",
      "小空間與局部清潔方便"
    ],
    "cons": [
      "不適合作為大坪數主力機",
      "續航與吸力需依小型機期待"
    ],
    "bestFor": "租屋、車內、桌面或局部快速清潔的人",
    "recommendation": "好市多補充推薦：手持式充電吸塵器 評價不錯，補進吸塵器分類作為 Costco 候選比較。",
    "score": 84,
    "voltage": "110V / 60Hz",
    "warranty": "依 Costco 好市多商品頁與品牌 1 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "手持",
      "延長管",
      "輕量"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "TWD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-09",
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ IRIS OHYAMA HCD-22MW: 鈴木太太 【鈴木太太】IRIS OHYAMA 超輕量多合一手持無線吸塵器 HCD-22MW 型號/規格不相符；LBJ IRIS OHYAMA HCD-22MW: 樂天市場 - 及時雨 高壓恢復選品 及時雨 高壓恢復選品 IRIS OHYAMA 手持式充電吸塵器 HCD-22MW 型號/規格不相符；LBJ IRIS OHYAMA HCD-22MW: 樂天市場 - 玉山最低比價網 玉山最低比價網 [COSCO代購6] D151572 IRIS OHYAMA 手持式充電吸塵器 HCD-22MW 型號/規格不相符。"
    }
  }
]);
})();

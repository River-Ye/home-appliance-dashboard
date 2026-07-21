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
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAX001900JVQDR/000001_1775552057.jpg",
    "buyUrl": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=11182207",
    "buyLabel": "momo購物",
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
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson V12 Detect Slim Fluffy SV46\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20V12%20Detect%20Slim%20Fluffy%20SV46%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson V12 Detect Slim Fluffy SV46\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20V12%20Detect%20Slim%20Fluffy%20SV46%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "confidence": "PChome 2026-07-16 API 公開價"
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
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG CordZero A9X-AUTO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20CordZero%20A9X-AUTO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG CordZero A9X-AUTO\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20CordZero%20A9X-AUTO%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "confidence": "PChome 2026-07-11 API 查核價"
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
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG CordZero A9K-MOP3\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20CordZero%20A9K-MOP3%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG CordZero A9K-MOP3\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20CordZero%20A9K-MOP3%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "amount": 17936,
      "converted": 17936,
      "confidence": "Yahoo購物中心 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAXB5A900JFCJP/000001_1762402803.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Tineco-%E6%B7%BB%E5%8F%AF-Switch-S7-Stretch%E5%A4%9A%E5%B7%A5%E5%B9%B3%E8%BA%BA%E6%B4%97%E5%9C%B0%E5%90%B8%E5%A1%B5%E5%99%A8-22000Pa-5%E5%88%86%E9%90%98%E9%80%9F%E4%B9%BE-11979820.html",
    "buyLabel": "Yahoo購物中心",
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
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Tineco Switch S7 Stretch\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Tineco%20Switch%20S7%20Stretch%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Tineco Switch S7 Stretch\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Tineco%20Switch%20S7%20Stretch%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "amount": 20900,
      "converted": 20900,
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBF05A900GCL8W/000001_1780460543.jpg",
    "buyUrl": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=11408347",
    "buyLabel": "momo購物",
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
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson V12s Detect Slim Submarine\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20V12s%20Detect%20Slim%20Submarine%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson V12s Detect Slim Submarine\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20V12s%20Detect%20Slim%20Submarine%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson V12 Fluffy SV46\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20V12%20Fluffy%20SV46%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson V12 Fluffy SV46\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20V12%20Fluffy%20SV46%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAX001900JRA9W/000001_1780465600.jpg",
    "buyUrl": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=11954009",
    "buyLabel": "momo購物",
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
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson V12s Origin Submarine SV49\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20V12s%20Origin%20Submarine%20SV49%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson V12s Origin Submarine SV49\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20V12s%20Origin%20Submarine%20SV49%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "confidence": "PChome 2026-07-14 API 查核價"
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
    "description": "Dyson V15 Detect Fluffy SV47 是吸塵器類的補充比較型號，依 2026-07-14 通路頁面整理售價、圖片與核心規格。",
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
      "amount": 17363,
      "currency": "TWD",
      "converted": 17363,
      "sourceUrl": "https://tw.buy.yahoo.com/gdsale/Dyson-%E6%88%B4%E6%A3%AEV15-Detect-Fluffy-SV47-%E5%BC%B7%E5%8B%81%E6%99%BA%E6%85%A7%E7%84%A1%E7%B7%9A%E5%90%B8%E5%A1%B5%E5%99%A8-%E9%9B%99%E4%B8%BB%E5%90%B8%E9%A0%AD%E7%B5%84-11097062.html",
      "sourceTitle": "Yahoo購物中心 商品頁：Dyson 戴森V15 Detect Fluffy SV47 強勁智慧無線吸塵器 | 無線吸塵器 | Yahoo購物中心",
      "evidenceSnippet": "Yahoo購物中心 原始商品頁／API 於 2026-07-11 顯示同型號新品公開價 17363 TWD，低於既有可驗證史低。",
      "sourceKind": "retailer_page",
      "confidence": "high",
      "checkedAt": "2026-07-11",
      "note": "採用同型號、同尺寸／容量／規格的可信新品公開價；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson V15 Detect Fluffy SV47\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20V15%20Detect%20Fluffy%20SV47%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson V15 Detect Fluffy SV47\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20V15%20Detect%20Fluffy%20SV47%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "confidence": "PChome 2026-07-22 API 查核價"
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
    "description": "Dyson V8 Focus Mattress HH15 是吸塵器類的補充比較型號，依 2026-07-11 通路頁面整理售價、圖片與核心規格。",
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
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson V8 Focus Mattress HH15\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20V8%20Focus%20Mattress%20HH15%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson V8 Focus Mattress HH15\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20V8%20Focus%20Mattress%20HH15%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "confidence": "PChome 2026-07-16 API 公開價"
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
    "description": "LG CordZero A9X-STEAM 是吸塵器類的補充比較型號，依 2026-07-11 通路頁面整理售價、圖片與核心規格。",
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
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG CordZero A9X-STEAM\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20CordZero%20A9X-STEAM%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG CordZero A9X-STEAM\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20CordZero%20A9X-STEAM%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "confidence": "PChome 2026-07-11 API 查核價"
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
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG CordZero A9 Air A7-LITE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20CordZero%20A9%20Air%20A7-LITE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG CordZero A9 Air A7-LITE\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20CordZero%20A9%20Air%20A7-LITE%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "amount": 6999,
      "converted": 6999,
      "confidence": "momo購物 2026-07-16 商品頁公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAX6FA900K2NSV/000001_1780464185.jpg",
    "buyUrl": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=9861645",
    "buyLabel": "momo購物",
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
      "amount": 6966,
      "currency": "TWD",
      "converted": 6966,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1269083531&cgp=7116",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：LG CordZero A9 Air A7-LITE",
      "evidenceSnippet": "LBJ 比價撿便宜歷史價格顯示 Yahoo購物中心同型號新品最低價為 NT$6,966，最低點日期 2026-06-18。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-18",
      "note": "採用 LBJ 比價撿便宜可公開查核的價格歷史；同型號／規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG CordZero A9 Air\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20CordZero%20A9%20Air%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG CordZero A9 Air\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20CordZero%20A9%20Air%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "amount": 2841,
      "converted": 2841,
      "confidence": "Yahoo購物中心 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBE1AA900JJ4LU/000001_1765270758.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/siroca-%E8%B6%85%E8%BC%95%E9%87%8F%E7%84%A1%E7%B7%9A%E5%90%B8%E5%A1%B5%E5%99%A8SV-SP3710-11742436.html",
    "buyLabel": "Yahoo購物中心",
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
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Siroca SV-SP3710\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Siroca%20SV-SP3710%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Siroca SV-SP3710\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Siroca%20SV-SP3710%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "confidence": "正負零台灣官網 2026-07-14 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBE1AA900J8H81/000001_1757576197.jpg",
    "buyUrl": "https://plusminuszero.com.tw/shop-d.php?Key=1&W=Index",
    "buyLabel": "正負零台灣官網",
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
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Plus Minus Zero XJC-Y011\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Plus%20Minus%20Zero%20XJC-Y011%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Plus Minus Zero XJC-Y011\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Plus%20Minus%20Zero%20XJC-Y011%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "amount": 3490,
      "converted": 3490,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBE1AA900HA30V/000001_1709535798.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAX3T-A900GYQP6",
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
      "amount": 3490,
      "currency": "TWD",
      "converted": 3490,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMAX3T-A900GYQP6",
      "sourceTitle": "PChome 商品頁：【HERAN 禾聯】旗艦吸力 智能感應高效率吸塵器 (HVC-35SC050) / 【HERAN 禾聯】旗艦吸力 智能感應高效率吸塵器 (HVC-35SC050)",
      "evidenceSnippet": "PChome 原始商品頁／API 於 2026-07-11 顯示同型號新品公開價 3490 TWD，低於既有可驗證史低。",
      "sourceKind": "retailer_page",
      "confidence": "high",
      "checkedAt": "2026-07-11",
      "note": "採用同型號、同尺寸／容量／規格的可信新品公開價；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HERAN HVC-35SC050\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HERAN%20HVC-35SC050%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HERAN HVC-35SC050\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HERAN%20HVC-35SC050%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "amount": 15189,
      "converted": 15189,
      "confidence": "Yahoo購物中心 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAXB5A900JP6TZ/000001_1770084365.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Tineco-%E6%B7%BB%E5%8F%AF-S7-Stretch-Steam-%E8%92%B8%E6%B0%A3%E6%97%97%E8%89%A6%E6%B4%97%E5%9C%B0%E6%A9%9F-160%E5%BA%A6%E8%92%B8%E6%B0%A3%E7%A1%AC%E6%B1%A1%E6%B8%85%E6%BD%94-80mi-12078414.html",
    "buyLabel": "Yahoo購物中心",
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
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Tineco S7 Stretch Steam\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Tineco%20S7%20Stretch%20Steam%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Tineco S7 Stretch Steam\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Tineco%20S7%20Stretch%20Steam%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "amount": 21900,
      "converted": 21900,
      "confidence": "Dyson 台灣官網 2026-07-15 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAX00A900JPJ7H/000001_1777291832.jpg",
    "buyUrl": "https://shop.dyson.tw/vacuums/cordless-vacuums/dyson-pencilvac-fluffycones-black-sale-492694-01",
    "buyLabel": "Dyson 台灣官網",
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
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson SV50\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20SV50%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson SV50\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20SV50%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "amount": 14999,
      "converted": 14999,
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAXB5A900JCN6G/000001_1760586651.jpg",
    "buyUrl": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=14509178",
    "buyLabel": "momo購物",
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
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Tineco S9 Artist Pro\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Tineco%20S9%20Artist%20Pro%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Tineco S9 Artist Pro\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Tineco%20S9%20Artist%20Pro%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "amount": 8988,
      "converted": 8988,
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAX0ZA900HIGMZ/000001_1716798929.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0005634/goodsDetail/TP00056340005189",
    "buyLabel": "momo購物",
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
      "amount": 8988,
      "currency": "TWD",
      "converted": 8988,
      "sourceUrl": "https://www.momoshop.com.tw/TP/TP0005634/goodsDetail/TP00056340005189",
      "sourceTitle": "momo購物 商品頁：【Panasonic 國際牌】MC-KC1W 自動集塵One Box吸塵器",
      "evidenceSnippet": "momo購物 原始商品頁／API 於 2026-07-11 顯示同型號新品公開價 8988 TWD，低於既有可驗證史低。",
      "sourceKind": "retailer_page",
      "confidence": "high",
      "checkedAt": "2026-07-11",
      "note": "採用同型號、同尺寸／容量／規格的可信新品公開價；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic MC-KC1W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20MC-KC1W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic MC-KC1W\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20MC-KC1W%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "amount": 11815,
      "converted": 11815,
      "confidence": "Yahoo購物中心 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAX0ZA900K4IQZ/000001_1781668428.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Panasonic-%E5%9C%8B%E9%9A%9B%E7%89%8C-%E7%84%A1%E7%B7%9A%E7%9B%B4%E7%AB%8B-%E6%89%8B%E6%8C%81%E5%BC%8F%E5%BE%AE%E5%A1%B5%E6%84%9F%E7%9F%A5%E6%A5%B5%E6%B7%A8%E5%85%89%E5%90%B8%E5%A1%B5%E5%99%A8-MC-SBR70-12134025.html",
    "buyLabel": "Yahoo購物中心",
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
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic MC-SBR70\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20MC-SBR70%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic MC-SBR70\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20MC-SBR70%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "amount": 10900,
      "converted": 10900,
      "confidence": "momo購物 2026-07-13 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h52/h5d/351316137377822.jpg",
    "buyUrl": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=13546308",
    "buyLabel": "momo購物",
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
      "amount": 6999,
      "currency": "TWD",
      "converted": 6999,
      "sourceUrl": "https://www.costco.com.tw/p/153289",
      "sourceTitle": "Costco 商品頁：伊萊克斯 無線吸塵器 WQ71-2BSWF | Costco 好市多",
      "evidenceSnippet": "Costco 商品頁 於 2026-07-10 回傳同一商品頁「伊萊克斯 無線吸塵器 WQ71-2BSWF | Costco 好市多」查核價 NT$6,999，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-10",
      "note": "採用可信通路同一商品頁可公開查核現價作為本次觀測到的最低價；同型號/規格並排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Electrolux WQ71-2BSWF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Electrolux%20WQ71-2BSWF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Electrolux WQ71-2BSWF\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Electrolux%20WQ71-2BSWF%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h13/he5/220050298077214.jpg",
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
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"IRIS OHYAMA IC-H50\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22IRIS%20OHYAMA%20IC-H50%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"IRIS OHYAMA IC-H50\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22IRIS%20OHYAMA%20IC-H50%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
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
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
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
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"IRIS OHYAMA HCD-22MW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22IRIS%20OHYAMA%20HCD-22MW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"IRIS OHYAMA HCD-22MW\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22IRIS%20OHYAMA%20HCD-22MW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "vacuum-dreame-aero-ultra-steam",
    "category": "vacuum",
    "rank": 24,
    "budget": "premium",
    "channel": "global",
    "brand": "Dreame",
    "model": "HHR32F",
    "name": "Aero Ultra Steam 蒸氣濕乾洗地機",
    "price": {
      "currency": "USD",
      "amount": 679.99,
      "converted": 21983,
      "confidence": "Dreame Vacuum Mop US 2026-07-21 原廠公開特價；ExchangeRate-API 2026-07-20 匯率換算"
    },
    "image": "https://cdn.shopify.com/s/files/1/1006/5474/3895/files/0_-02_c3ee1e28-25e4-4458-921a-a6b34cecb723.png?v=1784095443",
    "buyUrl": "https://vacuummop.dreametech.com/products/aero-ultra-steam-wet-dry-vacuum",
    "buyLabel": "Dreame Vacuum Mop US",
    "specs": [
      "蒸氣／熱水／Smart／Eco／吸水／FoamWash 濕乾洗地模式",
      "30,000Pa 吸力；主機額定功率 400W",
      "392°F 蒸氣清潔／194°F 熱水除油／203°F 熱風烘乾",
      "Eco 最長 100 分鐘；蒸氣／熱水模式最長 30 分鐘",
      "180° 躺平、最低 3.88 吋；主機 6.5kg",
      "尺寸：275 x 265 x 1,180 mm；充電約 4 小時",
      "官方型號 HHR32F；充電座 HCBBT，120V / 60Hz、350W"
    ],
    "description": "Dreame 北美旗艦濕乾洗地機，結合蒸氣、熱水與 FoamWash；本筆僅作海外參考，換算價未含國際運費與進口稅。",
    "pros": [
      "蒸氣、熱水與泡沫三種深層清潔整合於單機",
      "30,000Pa 吸力、180° 躺平與最長 100 分鐘 Eco 續航"
    ],
    "cons": [
      "充電座為美規 120V / 60Hz，台灣使用仍須確認插頭、供電與原廠支援",
      "海外直購未含國際運費、進口稅，且沒有台灣原廠保固"
    ],
    "bestFor": "願意承擔海外採購與售後風險，並需要硬地板蒸氣、熱水與寵物氣味清潔的人。",
    "recommendation": "海外新品參考：功能差異明確，但 120V / 60Hz 與台灣保固風險使它不適合列為 Top Pick。",
    "score": 86,
    "voltage": "充電座 120V / 60Hz（美規）；主機 21.6V，台灣使用前仍需確認插頭與供電條件",
    "warranty": "Dreame 美國原廠頁標示 2 年保固；海外購買通常不等同台灣保固",
    "tags": [
      "蒸氣洗地",
      "濕乾兩用",
      "30,000Pa",
      "海外參考"
    ],
    "releaseDate": "2026-04-28",
    "historicalLow": {
      "status": "found",
      "amount": 679.99,
      "currency": "USD",
      "converted": 21983,
      "sourceUrl": "https://vacuummop.dreametech.com/products/aero-ultra-steam-wet-dry-vacuum",
      "sourceTitle": "Dreame Aero Ultra Steam Wet Dry Vacuum – Dreame Vacuum Mop",
      "evidenceSnippet": "Dreame 原廠美國商品頁於 2026-07-16 公開顯示特價 US$679.99、原價 US$799.99，且可 Add to Cart / Buy It Now。",
      "sourceKind": "official_sale",
      "confidence": "high",
      "checkedAt": "2026-07-16",
      "note": "新上市商品目前可公開驗證的最低售價；未套用會員碼、信用卡、點數或個人化折扣，且未含國際運費、進口稅、插頭／供電與台灣保固風險。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-16",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dreame HHR32F\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dreame%20HHR32F%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dreame HHR32F\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dreame%20HHR32F%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  }
]);
})();

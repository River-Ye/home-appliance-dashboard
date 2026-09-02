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
    "releaseDate": "2024-04-10",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson V12 Detect Slim Fluffy SV46\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20V12%20Detect%20Slim%20Fluffy%20SV46%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson V12 Detect Slim Fluffy SV46\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20V12%20Detect%20Slim%20Fluffy%20SV46%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Dyson V12 Detect Slim Fluffy SV46\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Dyson%20V12%20Detect%20Slim%20Fluffy%20SV46%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Dyson V12 Detect Slim Fluffy SV46\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Dyson%20V12%20Detect%20Slim%20Fluffy%20SV46%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Dyson V12 Detect Slim Fluffy SV46\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Dyson%20V12%20Detect%20Slim%20Fluffy%20SV46%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "confidence": "PChome 2026-09-01 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG CordZero A9X-AUTO\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20CordZero%20A9X-AUTO%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG CordZero A9X-AUTO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20CordZero%20A9X-AUTO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG CordZero A9X-AUTO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%20CordZero%20A9X-AUTO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG CordZero A9X-AUTO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%20CordZero%20A9X-AUTO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG CordZero A9X-AUTO\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%20CordZero%20A9X-AUTO%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG CordZero A9K-MOP3\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20CordZero%20A9K-MOP3%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG CordZero A9K-MOP3\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20CordZero%20A9K-MOP3%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG CordZero A9K-MOP3\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%20CordZero%20A9K-MOP3%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG CordZero A9K-MOP3\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%20CordZero%20A9K-MOP3%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG CordZero A9K-MOP3\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%20CordZero%20A9K-MOP3%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
    "releaseDate": "2025",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Tineco Switch S7 Stretch\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Tineco%20Switch%20S7%20Stretch%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Tineco Switch S7 Stretch\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Tineco%20Switch%20S7%20Stretch%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Tineco Switch S7 Stretch\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Tineco%20Switch%20S7%20Stretch%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Tineco Switch S7 Stretch\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Tineco%20Switch%20S7%20Stretch%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Tineco Switch S7 Stretch\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Tineco%20Switch%20S7%20Stretch%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "amount": 22900,
      "converted": 22900,
      "confidence": "2026-08-31 人工查核：V12s Detect Slim Submarine SV46 雙主吸頭整機 NT$22,900、2 年保固，直接購買／購物車可用；贈品價值、點數及加購不抵減現價。",
      "basis": "retailer_current"
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
      "checkedAt": "2026-09-01",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson V12s Detect Slim Submarine\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20V12s%20Detect%20Slim%20Submarine%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson V12s Detect Slim Submarine\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20V12s%20Detect%20Slim%20Submarine%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Dyson V12s Detect Slim Submarine\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Dyson%20V12s%20Detect%20Slim%20Submarine%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Dyson V12s Detect Slim Submarine\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Dyson%20V12s%20Detect%20Slim%20Submarine%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Dyson V12s Detect Slim Submarine\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Dyson%20V12s%20Detect%20Slim%20Submarine%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
    "releaseDate": "2024-04-10",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson V12 Fluffy SV46\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20V12%20Fluffy%20SV46%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson V12 Fluffy SV46\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20V12%20Fluffy%20SV46%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Dyson V12 Fluffy SV46\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Dyson%20V12%20Fluffy%20SV46%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Dyson V12 Fluffy SV46\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Dyson%20V12%20Fluffy%20SV46%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Dyson V12 Fluffy SV46\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Dyson%20V12%20Fluffy%20SV46%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
    "releaseDate": "找不到",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson V12s Origin Submarine SV49\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20V12s%20Origin%20Submarine%20SV49%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson V12s Origin Submarine SV49\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20V12s%20Origin%20Submarine%20SV49%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Dyson V12s Origin Submarine SV49\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Dyson%20V12s%20Origin%20Submarine%20SV49%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Dyson V12s Origin Submarine SV49\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Dyson%20V12s%20Origin%20Submarine%20SV49%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Dyson V12s Origin Submarine SV49\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Dyson%20V12s%20Origin%20Submarine%20SV49%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "amount": 18900,
      "converted": 18900,
      "confidence": "PChome 2026-09-02 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
    "releaseDate": "找不到",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson V15 Detect Fluffy SV47\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20V15%20Detect%20Fluffy%20SV47%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson V15 Detect Fluffy SV47\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20V15%20Detect%20Fluffy%20SV47%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Dyson V15 Detect Fluffy SV47\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Dyson%20V15%20Detect%20Fluffy%20SV47%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Dyson V15 Detect Fluffy SV47\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Dyson%20V15%20Detect%20Fluffy%20SV47%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Dyson V15 Detect Fluffy SV47\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Dyson%20V15%20Detect%20Fluffy%20SV47%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "amount": 6999,
      "converted": 6999,
      "confidence": "PChome 2026-07-11 API 查核價"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson V8 Focus Mattress HH15\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20V8%20Focus%20Mattress%20HH15%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson V8 Focus Mattress HH15\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20V8%20Focus%20Mattress%20HH15%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Dyson V8 Focus Mattress HH15\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Dyson%20V8%20Focus%20Mattress%20HH15%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Dyson V8 Focus Mattress HH15\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Dyson%20V8%20Focus%20Mattress%20HH15%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Dyson V8 Focus Mattress HH15\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Dyson%20V8%20Focus%20Mattress%20HH15%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "confidence": "PChome 2026-09-01 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
    "releaseDate": "2024-06-11",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG CordZero A9X-STEAM\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20CordZero%20A9X-STEAM%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG CordZero A9X-STEAM\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20CordZero%20A9X-STEAM%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG CordZero A9X-STEAM\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%20CordZero%20A9X-STEAM%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG CordZero A9X-STEAM\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%20CordZero%20A9X-STEAM%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG CordZero A9X-STEAM\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%20CordZero%20A9X-STEAM%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
    "releaseDate": "2024-06-11",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG CordZero A9 Air A7-LITE\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20CordZero%20A9%20Air%20A7-LITE%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG CordZero A9 Air A7-LITE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20CordZero%20A9%20Air%20A7-LITE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG CordZero A9 Air A7-LITE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%20CordZero%20A9%20Air%20A7-LITE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG CordZero A9 Air A7-LITE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%20CordZero%20A9%20Air%20A7-LITE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG CordZero A9 Air A7-LITE\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%20CordZero%20A9%20Air%20A7-LITE%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
    "releaseDate": "2024-06-11",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG CordZero A9 Air\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20CordZero%20A9%20Air%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG CordZero A9 Air\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20CordZero%20A9%20Air%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG CordZero A9 Air\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%20CordZero%20A9%20Air%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG CordZero A9 Air\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%20CordZero%20A9%20Air%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG CordZero A9 Air\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%20CordZero%20A9%20Air%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Siroca SV-SP3710\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Siroca%20SV-SP3710%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Siroca SV-SP3710\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Siroca%20SV-SP3710%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Siroca SV-SP3710\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Siroca%20SV-SP3710%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Siroca SV-SP3710\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Siroca%20SV-SP3710%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Siroca SV-SP3710\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Siroca%20SV-SP3710%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Plus Minus Zero XJC-Y011\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Plus%20Minus%20Zero%20XJC-Y011%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Plus Minus Zero XJC-Y011\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Plus%20Minus%20Zero%20XJC-Y011%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Plus Minus Zero XJC-Y011\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Plus%20Minus%20Zero%20XJC-Y011%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Plus Minus Zero XJC-Y011\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Plus%20Minus%20Zero%20XJC-Y011%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Plus Minus Zero XJC-Y011\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Plus%20Minus%20Zero%20XJC-Y011%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HERAN HVC-35SC050\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HERAN%20HVC-35SC050%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HERAN HVC-35SC050\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HERAN%20HVC-35SC050%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HERAN HVC-35SC050\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HERAN%20HVC-35SC050%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HERAN HVC-35SC050\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HERAN%20HVC-35SC050%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HERAN HVC-35SC050\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HERAN%20HVC-35SC050%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Tineco S7 Stretch Steam\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Tineco%20S7%20Stretch%20Steam%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Tineco S7 Stretch Steam\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Tineco%20S7%20Stretch%20Steam%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Tineco S7 Stretch Steam\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Tineco%20S7%20Stretch%20Steam%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Tineco S7 Stretch Steam\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Tineco%20S7%20Stretch%20Steam%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Tineco S7 Stretch Steam\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Tineco%20S7%20Stretch%20Steam%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson SV50\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20SV50%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson SV50\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20SV50%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Dyson SV50\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Dyson%20SV50%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Dyson SV50\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Dyson%20SV50%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Dyson SV50\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Dyson%20SV50%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
    "releaseDate": "2025-07-17",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Tineco S9 Artist Pro\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Tineco%20S9%20Artist%20Pro%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Tineco S9 Artist Pro\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Tineco%20S9%20Artist%20Pro%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Tineco S9 Artist Pro\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Tineco%20S9%20Artist%20Pro%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Tineco S9 Artist Pro\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Tineco%20S9%20Artist%20Pro%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Tineco S9 Artist Pro\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Tineco%20S9%20Artist%20Pro%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic MC-KC1W\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20MC-KC1W%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic MC-KC1W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20MC-KC1W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Panasonic MC-KC1W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Panasonic%20MC-KC1W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Panasonic MC-KC1W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Panasonic%20MC-KC1W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Panasonic MC-KC1W\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Panasonic%20MC-KC1W%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "amount": 11713,
      "converted": 11713,
      "confidence": "Yahoo購物中心 2026-08-21 exact-model 公開結構化價格"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic MC-SBR70\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20MC-SBR70%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic MC-SBR70\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20MC-SBR70%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Panasonic MC-SBR70\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Panasonic%20MC-SBR70%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Panasonic MC-SBR70\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Panasonic%20MC-SBR70%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Panasonic MC-SBR70\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Panasonic%20MC-SBR70%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "confidence": "2026-08-31 人工查核：Well Q7 WQ71-2BSWF 冰雪白主價 NT$10,900，2 年保固、直接購買／購物車可用；濾網加購 NT$840 為配件，不是主價。",
      "basis": "retailer_current"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Electrolux WQ71-2BSWF\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Electrolux%20WQ71-2BSWF%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Electrolux WQ71-2BSWF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Electrolux%20WQ71-2BSWF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Electrolux WQ71-2BSWF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Electrolux%20WQ71-2BSWF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Electrolux WQ71-2BSWF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Electrolux%20WQ71-2BSWF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Electrolux WQ71-2BSWF\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Electrolux%20WQ71-2BSWF%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "vacuum-dyson-v8-cyclone-sv55",
    "category": "vacuum",
    "rank": 22,
    "topPick": false,
    "budget": "balanced",
    "channel": "tw",
    "brand": "Dyson",
    "model": "V8 Cyclone SV55",
    "name": "V8 Cyclone 無線吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 9900,
      "converted": 9900,
      "confidence": "Dyson 台灣官方商城 2026-09-01 exact-model SV55／商品 SKU 630933-01 頁面顯示原價 NT$14,900、特價 NT$9,900、InStock 並可加入購物車；贈品價值不抵減現價",
      "basis": "retailer_current"
    },
    "image": "https://dysonshop.blob.core.windows.net/products/dyson-v8-cyclone-sv55-vacuum-sale/hero-1787682803-480x480.jpg",
    "buyUrl": "https://shop.dyson.tw/vacuums/cordless-vacuums/dyson-v8-cyclone-sv55-vacuum-sale-630933-01",
    "buyLabel": "Dyson 台灣官方商城",
    "installation": {
      "status": "not_stated",
      "note": "官方商城未列到府安裝；本品為無線直立／手持吸塵器，使用者需依說明書裝妥吸頭、壁掛充電座並定期清潔集塵筒與濾網。"
    },
    "specs": [
      "類型：乾式無線直立／手持吸塵器；台灣 exact model SV55、Dyson 商品 SKU 630933-01",
      "最大吸力 150AW；節能／中／強效三段吸力；單鍵電源控制",
      "最長約 60 分鐘續航；充電最長約 4 小時；電池可拆換",
      "全機密封過濾系統可捕捉 99.99% 小至 0.3 微米微塵；15 個雙層多圓錐氣旋",
      "集塵筒 0.54L；機身尺寸 1,150 x 250 x 210mm；淨重 2.37kg",
      "包裝含 Fluffy 軟絨毛滾筒吸頭、迷你電動吸頭、隙縫清潔吸頭、壁掛架與充電器；2026-09-01 官方頁另贈多功能置物架"
    ],
    "description": "V8 Cyclone SV55 是新版 V8 乾式無線主力，將吸力提升至 150AW、續航延長至最長 60 分鐘，並改為單鍵啟動與可換電池；台灣官方現售 Fluffy 組適合想壓在萬元內兼顧硬地板、床墊與寵物毛髮的人。",
    "pros": [
      "150AW、最長 60 分鐘與三段模式，比舊 V8 更適合完整居家乾吸",
      "2.37kg 機身、單鍵啟動與可換電池兼顧操作負擔和續航彈性",
      "Fluffy 主吸頭與迷你電動吸頭可分別處理硬地板、床墊與寵物毛髮",
      "台灣官方現貨、110–220V 電力標示、BSMI 與原廠 2 年保固證據完整"
    ],
    "cons": [
      "沒有雷射顯塵、灰塵數量顯示或自動吸力調節等 V12／V15 智慧功能",
      "官方 NT$9,900 組合只有 Fluffy 主吸頭，沒有電動碳纖維地毯主吸頭",
      "0.54L 集塵筒仍需手動倒塵，壁掛座也沒有自動集塵",
      "強效模式續航遠短於 60 分鐘標稱值，實際時間會隨吸頭與地面類型變動",
      "官網贈品與組合內容可能隨檔期變動，購買前需重新核對"
    ],
    "bestFor": "預算約一萬元、以硬地板乾式清潔為主，想要 Dyson 吸力、可換電池與床墊用迷你電動吸頭，但不需要雷射顯塵或自動集塵的家庭。",
    "recommendation": "萬元內乾吸補強：SV55 以 150AW、最長 60 分鐘和 Fluffy 組補上舊 V8 與 V12 之間的價位帶；沒有地毯主吸頭、智慧偵測與自動集塵，因此不取代目前綜合 Top Pick。",
    "score": 88,
    "voltage": "Yahoo購物中心 exact-model SV55 台灣新品頁明示 110–220V、BSMI R31692；以台灣公司貨隨附充電器銘牌為準",
    "warranty": "Dyson 台灣原廠 2 年保固，官方商城明示包含零件與人工；Yahoo exact-model 新品頁亦標示原廠 2 年保固",
    "tags": [
      "150AW",
      "60 分鐘",
      "可換電池",
      "Fluffy 吸頭",
      "台灣公司貨"
    ],
    "releaseDate": "2025-09-05",
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
      "checkedAt": "2026-09-01",
      "note": "已查 Dyson 台灣官方商城、momo、PChome、Yahoo購物中心、LINE 購物與飛比 exact-model SV55；官方 Fluffy 組只能確認本輪 NT$9,900 公開特價，頁面未列可重現的最低點日期。排除 momo 滿件折 NT$1,000、Yahoo 券／會員價、遠傳門號方案價、福利品 NT$8,999 與不同吸頭／贈品組，現價不得直接推定為史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-09-01",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson V8 Cyclone SV55\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20V8%20Cyclone%20SV55%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson V8 Cyclone SV55\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20V8%20Cyclone%20SV55%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
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
    "releaseDate": "2023-09-29",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"IRIS OHYAMA HCD-22MW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22IRIS%20OHYAMA%20HCD-22MW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"IRIS OHYAMA HCD-22MW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22IRIS%20OHYAMA%20HCD-22MW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"IRIS OHYAMA HCD-22MW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22IRIS%20OHYAMA%20HCD-22MW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"IRIS OHYAMA HCD-22MW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22IRIS%20OHYAMA%20HCD-22MW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"IRIS OHYAMA HCD-22MW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22IRIS%20OHYAMA%20HCD-22MW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "converted": 21568,
      "confidence": "Dreame Vacuum Mop US 2026-07-21 原廠公開特價；ExchangeRate-API 2026-09-02 匯率換算"
    },
    "image": "https://m.media-amazon.com/images/I/61Yuy5vtWFL._AC_SL1500_.jpg",
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
      "converted": 21568,
      "sourceUrl": "https://vacuummop.dreametech.com/products/aero-ultra-steam-wet-dry-vacuum",
      "sourceTitle": "Dreame Aero Ultra Steam Wet Dry Vacuum – Dreame Vacuum Mop",
      "evidenceSnippet": "Dreame 原廠美國商品頁於 2026-07-16 公開顯示特價 US$679.99、原價 US$799.99，且可 Add to Cart / Buy It Now。",
      "sourceKind": "official_sale",
      "confidence": "high",
      "checkedAt": "2026-07-16",
      "note": "新上市商品目前可公開驗證的最低售價；未套用會員碼、信用卡、點數或個人化折扣，且未含國際運費、進口稅、插頭／供電與台灣保固風險；依 2026-09-02 USD/TWD 匯率換算。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dreame HHR32F\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dreame%20HHR32F%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dreame HHR32F\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dreame%20HHR32F%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Dreame HHR32F\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Dreame%20HHR32F%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Dreame HHR32F\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Dreame%20HHR32F%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Dreame HHR32F\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Dreame%20HHR32F%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "vacuum-dyson-v16-sv53-a",
    "category": "vacuum",
    "rank": 25,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dyson",
    "model": "SV53-A",
    "name": "V16 Piston Animal 強勁雙錐吸塵器（雙主吸頭組）",
    "price": {
      "currency": "TWD",
      "amount": 30900,
      "converted": 30900,
      "confidence": "PChome 24h 2026-07-30 exact-model API 公開價；Price.Low 無正值時採 Price.P，Qty 19"
    },
    "image": "https://dysonshop.blob.core.windows.net/products/dyson-v16-piston-animal-black-copper/hero-1781626080-480x480.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAX00-A900K78B0",
    "buyLabel": "PChome",
    "specs": [
      "315AW Hyperdymium 900W 馬達",
      "最長 70 分鐘續航",
      "All Floor Cones 雙錐無纏結＋Fluffy Optic 雙主吸頭",
      "CleanCompaktor 壓縮式集塵筒 1.89L／最高 30 天免傾倒",
      "全機密封 HEPA 過濾",
      "重量 3.50kg；尺寸：25.9 x 25 x 129.8 cm",
      "充電最長 4.5 小時；BSMI R31692／NCC CCAM25LP0960T8"
    ],
    "description": "Dyson 最新旗艦無線吸塵器，以 315AW、雙錐無纏結吸頭、Fluffy Optic 光學吸頭與壓縮集塵筒，補足現有目錄缺少的最新 V16 寵物／長髮清潔選項。",
    "pros": [
      "315AW 與地板／灰塵偵測，硬地板與地毯可自動調整",
      "雙錐防纏結＋壓縮集塵筒，長髮／寵物家庭維護較省事"
    ],
    "cons": [
      "3.5kg 且 NT$30,900，長時間手持與價格負擔明顯",
      "新吸頭／配件相容性有限，且新品長期可靠度仍需觀察"
    ],
    "bestFor": "長髮或寵物家庭、需一次完成硬地板／地毯深度清潔且接受旗艦預算者。",
    "recommendation": "值得納入但不列高 CP Top Pick；315AW、防纏結與壓縮集塵差異化強，應與 V15／V12 的重量與價格一起比較。",
    "score": 89,
    "voltage": "110V 台灣公司貨；品牌頁未公開充電器輸入細節",
    "warranty": "Dyson 台灣無線手持吸塵器原廠保固 2 年",
    "tags": [
      "Dyson",
      "SV53-A",
      "315AW",
      "雙錐無纏結",
      "Fluffy Optic",
      "寵物家庭"
    ],
    "releaseDate": "2026",
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
      "checkedAt": "2026-07-30",
      "note": "已查 Dyson 官方、PChome exact-model、BigGo、FindPrice、Feebee 與 LBJ；只取得上市後現價／比價快照，沒有可重現的 exact-model 可信新品歷史曲線與明確最低點日期，現價不得推定為史低。Feebee 曾列全國電子 NT$27,900 與一般蝦皮 NT$28,800，但前者缺可重現原頁／最低點日期、後者非可信通路，均不採。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson SV53-A\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20SV53-A%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson SV53-A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20SV53-A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Dyson SV53-A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Dyson%20SV53-A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Dyson SV53-A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Dyson%20SV53-A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Dyson SV53-A\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Dyson%20SV53-A%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "vacuum-roborock-h60-h10a3a",
    "category": "vacuum",
    "rank": 26,
    "budget": "value",
    "channel": "tw",
    "brand": "Roborock",
    "model": "H10A3A",
    "name": "H60 掃震地刷無線吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 3999,
      "converted": 3999,
      "confidence": "Roborock 台灣官網 2026-08-05 exact-model H10A3A 公開價；available=true 且可加入購物車"
    },
    "image": "https://i2.momoshop.com.tw/1781023801/goodsimg/0014/440/294/14440294_R_m.webp",
    "buyUrl": "https://taiwan.roborock.com/products/roborock-h60",
    "buyLabel": "Roborock 台灣官網",
    "specs": [
      "115AW 最大吸力；9 錐氣旋除塵",
      "90° 活動式彎折握桿；可深入 5.6cm 家具底部",
      "JawScrapers 防纏地板／地毯兩用主刷；7,200 次／分鐘拍打",
      "140° 綠光顯塵；五重過濾可捕捉 0.3μm 微塵 99.95%",
      "地刷續航：約 45／25／8 分鐘（持久／強力／超強）；縫隙刷最長 60 分鐘",
      "可拆電池 21.6V／2500mAh；約 3.5 小時充電",
      "集塵桶 0.5L；尺寸：29.3 x 25 x 116.2 cm；淨重 3.0kg",
      "BSMI R38795；附二合一縫隙刷、壁掛架與轉接器"
    ],
    "description": "以四千元內價格提供彎折握桿、綠光顯塵、防纏主刷與可拆電池，補足目錄缺少的 Roborock 入門乾式無線吸塵器。",
    "pros": [
      "四千元內即有 115AW、彎折握桿與綠光顯塵，規格相對完整",
      "台灣官網可購原廠替換電池與濾網，並有手持品項售後維修中心"
    ],
    "cons": [
      "基本款沒有自動集塵座與電動迷你刷，床墊／布面清潔配件較少",
      "搭地刷持久檔約 45 分鐘、超強檔約 8 分鐘，且原廠保固僅 1 年"
    ],
    "bestFor": "預算四千元左右、以硬地板與短毛地毯為主，重視家具底部與毛髮清潔的小宅或寵物家庭。",
    "recommendation": "值得納入但不列 Top Pick；H60 以入門價補上彎折、綠光顯塵與防纏組合，需接受基本配件與一年保固。",
    "score": 89,
    "voltage": "H10A3A 主機 21.6V DC／15.3A；轉接器輸入 100-240V~ 50-60Hz 0.8A，台灣官網公司貨",
    "warranty": "Roborock 台灣原廠保固 1 年；手持品項售後維修中心 (02) 2610-0806",
    "tags": [
      "CP 值",
      "彎折",
      "綠光顯塵",
      "防纏",
      "可拆電池"
    ],
    "releaseDate": "2025-09-04",
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
      "checkedAt": "2026-08-05",
      "note": "已查 Roborock 台灣官網、momo、BigGo、FindPrice、飛比、LBJ 與 Coupang exact-model H10A3A；只取得 NT$3,899 至 NT$4,688 的現價／比價快照，沒有可重現的可信新品歷史曲線與明確最低點日期。Coupang 原頁本輪回應 403，現價不得推定為史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Roborock H10A3A\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Roborock%20H10A3A%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Roborock H10A3A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Roborock%20H10A3A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Roborock H10A3A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Roborock%20H10A3A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Roborock H10A3A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Roborock%20H10A3A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Roborock H10A3A\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Roborock%20H10A3A%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "vacuum-hitachi-pv-xh4p",
    "category": "vacuum",
    "rank": 27,
    "topPick": false,
    "budget": "premium",
    "channel": "tw",
    "brand": "HITACHI",
    "model": "PV-XH4P",
    "name": "225AW 輕量無線吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 9990,
      "converted": 9990,
      "confidence": "Jarvis 家電 2026-08-14 exact-model 台灣新品頁公開售價",
      "basis": "retailer_current"
    },
    "image": "https://www.hitachi-homeappliances.com.tw/products/image/PVXH4P/0.jpg",
    "buyUrl": "https://www.jarvis.com.tw/appliances/hitachi/vacuum-hitachi/hitachi-pvxh4p/",
    "buyLabel": "Jarvis 家電",
    "installation": {
      "status": "not_stated",
      "note": "通路頁未列到府安裝；本品為手持／直立無線吸塵器，充電座擺放與配件收納由使用者依說明書完成。"
    },
    "specs": [
      "最大吸力 225AW；HEPA H13 過濾",
      "整機約 1.95kg、手持約 1.5kg；集塵盒 0.4L",
      "尺寸：寬 25 x 深 23 x 高 122.2 cm",
      "續航：約 60 分鐘（手持）／低速 45／中速 20／強力 8 分鐘",
      "充電約 3 小時、可拆式電池、自走式 LED 吸頭、毛髮防纏"
    ],
    "description": "HITACHI PV-XH4P 以 225AW、可拆電池與 1.95kg 機身，補進日系高吸力輕量無線吸塵器。",
    "pros": [
      "225AW 與 HEPA H13 規格完整",
      "1.95kg 整機兼顧吸力與操作負擔",
      "可拆電池、LED 自走吸頭及防纏功能實用"
    ],
    "cons": [
      "強力模式續航約 8 分鐘",
      "0.4L 集塵盒需較頻繁倒塵",
      "替換電池與濾網成本需另查"
    ],
    "bestFor": "重視日系售後、高吸力與輕量操控，家中有毛髮清潔需求的人。",
    "recommendation": "HITACHI 日系吸塵器補強：吸力與重量亮眼，但應用實際常用檔位續航而非最大標稱時間比較。",
    "score": 89,
    "voltage": "充電器輸入 AC 100–240V、50/60Hz、1.0A；輸出 DC 29.9V、0.9A；台灣公司貨",
    "warranty": "HITACHI 台灣公司貨；依原廠與通路保固條款",
    "tags": [
      "225AW",
      "1.95kg",
      "HEPA H13",
      "可拆電池",
      "防纏"
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
      "checkedAt": "2026-08-14",
      "note": "已查 HITACHI 台灣官方 exact-model 頁、Jarvis 現售頁及 exact-model 價格搜尋；無具日期且可重現的可信新品史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HITACHI PV-XH4P\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HITACHI%20PV-XH4P%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HITACHI PV-XH4P\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HITACHI%20PV-XH4P%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HITACHI PV-XH4P\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HITACHI%20PV-XH4P%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HITACHI PV-XH4P\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HITACHI%20PV-XH4P%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HITACHI PV-XH4P\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HITACHI%20PV-XH4P%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "vacuum-samsung-vs70h18gzg-tw",
    "category": "vacuum",
    "rank": 28,
    "topPick": false,
    "budget": "balanced",
    "channel": "tw",
    "brand": "Samsung",
    "model": "VS70H18GZG/TW",
    "name": "Jet Fit 180W 輕量無線吸塵器",
    "price": {
      "currency": "TWD",
      "amount": 13900,
      "converted": 13900,
      "confidence": "新光三越 skm online 2026-08-20 exact-model 台灣新品頁公開售價",
      "basis": "retailer_current"
    },
    "image": "https://images.samsung.com/is/image/samsung/p6pim/tw/vs70h18gzg-tw/gallery/tw-jet-fit-stick-vs70h18gzg-tw-550961394?$624_468_PNG$",
    "buyUrl": "https://online.skm.com.tw/product/863012300004104123",
    "buyLabel": "新光三越 skm online",
    "installation": {
      "status": "not_stated",
      "note": "通路未列到府安裝；本品為無線直立／手持吸塵器，充電座、配件與充電位置由使用者依原廠說明完成。"
    },
    "specs": [
      "最大吸力 180W；HexaJet Motor",
      "最長約 50 分鐘（最低功率搭配非電動工具）；Jet 模式約 6 分鐘",
      "整機 1.96kg、手持 1.18kg；集塵容量 0.35L",
      "尺寸：本體寬 25 x 深 18.1 x 高 104 cm；含集塵筒寬 28.2 x 深 26.9 x 高 108.5 cm",
      "18V、2400mAh 可拆電池；充電約 210 分鐘",
      "99.999% 多層過濾、可水洗集塵筒、LCD 顯示與智慧待機"
    ],
    "description": "Samsung VS70H18GZG/TW 以 1.96kg、180W 與可拆電池，補進韓系輕量無線吸塵器帶。",
    "pros": [
      "1.96kg 整機與 1.18kg 手持重量適合樓梯及高處清潔",
      "180W 吸力、99.999% 多層過濾與可水洗集塵筒規格完整",
      "可拆式電池、LCD 與智慧待機便於日常管理"
    ],
    "cons": [
      "Jet 模式續航約 6 分鐘，50 分鐘是最低功率條件",
      "0.35L 集塵筒清理頻率較高",
      "替換電池、濾網與電動吸頭價格需另查"
    ],
    "bestFor": "重視輕量操控、韓系售後與可拆電池，主要清潔中小坪數硬地板的家庭。",
    "recommendation": "Samsung 品牌補強：重量、吸力與台灣公司貨平衡，但續航比較要使用相同檔位與吸頭條件。",
    "score": 88,
    "voltage": "18V 電池系統；原廠充電設備供台灣公司貨使用",
    "warranty": "Samsung 台灣公司貨；電池依原廠條款 2 年，HexaJet Motor 零件依條款 10 年（不含工資）",
    "tags": [
      "180W",
      "1.96kg",
      "可拆電池",
      "多層過濾",
      "LCD"
    ],
    "releaseDate": "2026-01",
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
      "checkedAt": "2026-08-20",
      "note": "已查 Samsung 台灣官方、skm online 與 exact-model 價格搜尋；只能確認本輪 NT$13,900 新品現價，未找到具日期且可重現的可信新品史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung VS70H18GZG/TW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20VS70H18GZG%2FTW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung VS70H18GZG/TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20VS70H18GZG%2FTW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        }
      ]
    }
  },
  {
    "id": "vacuum-roborock-f25-ace-pro-wd5m14a",
    "category": "vacuum",
    "rank": 29,
    "topPick": false,
    "budget": "premium",
    "channel": "tw",
    "brand": "Roborock",
    "model": "WD5M14A",
    "name": "F25 ACE Pro 石沫吸泡沫洗地機",
    "price": {
      "currency": "TWD",
      "amount": 14888,
      "converted": 14888,
      "confidence": "Roborock 台灣官網 2026-08-26 exact-model Shopify SKU WD5M14A 公開價；available=true 且可立即購買",
      "basis": "retailer_current"
    },
    "image": "https://taiwan.roborock.com/cdn/shop/files/F25_ACE_Pro_1_1200x1200.jpg?v=1787311249",
    "buyUrl": "https://taiwan.roborock.com/products/roborock-f25-ace-pro",
    "buyLabel": "Roborock 台灣官網",
    "installation": {
      "status": "not_stated",
      "note": "台灣官方與通路未列到府安裝；本品為手持洗地機，使用者需依原廠說明放置充電座、注水並清潔污水箱。"
    },
    "specs": [
      "JetFoaming 超微能量泡沫洗；1ml 清潔液可產生 1.67 億個微米級泡沫",
      "25,000Pa 吸力、30N 對地壓力、430RPM 滾刷；三側 0mm 貼邊",
      "180° FlatReach 2.0 平躺；平躺機身高度 12.5cm；SlideTech 2.0 雙輪助力",
      "95°C 滾刷高溫自清潔；95°C 熱風 5 分鐘速烘或 30 分鐘靜音烘乾",
      "Eco 模式最長約 60 分鐘；4000mAh 電池；清水箱 1,000ml、污水箱 720ml",
      "尺寸：主機寬 26.5 x 深 25 x 高 110cm；含充電座寬 31.6 x 深 35.3 x 高 116.5cm；淨重 5.1kg",
      "Roborock App、語音提示、自動清潔液投放；配件含充電座、滾刷、濾網與泡沫清潔液"
    ],
    "description": "台灣正式上市的泡沫洗地旗艦款，以 JetFoaming、25,000Pa、三側貼邊與 95°C 洗烘補足既有洗地機缺少的定點泡沫去污方案。",
    "pros": [
      "泡沫可先包覆油污與食物殘渣，和蒸氣／單純清水洗地形成明確差異",
      "25,000Pa、三側貼邊、180° 平躺與雙輪助力兼顧吸洗效率和低處操控",
      "1L 清水箱、最長 60 分鐘續航與 95°C 洗烘，適合較大硬地板空間"
    ],
    "cons": [
      "5.1kg 機身與含座 116.5cm 高度需要固定收納空間，搬樓層不算輕巧",
      "泡沫清潔液與滾刷屬持續耗材，使用後仍需倒污水並清理固液分離件",
      "台灣通路標 110V／60Hz，原廠 FCC 手冊的 MDS29LRR 座充標 120V／60Hz；到貨後應核對銘牌"
    ],
    "bestFor": "硬地板油污、寵物或幼兒食物污漬較多，重視泡沫去污、平躺貼邊與高溫洗烘的家庭。",
    "recommendation": "值得納入但不取代乾式吸塵器；差異化在泡沫去污與 95°C 自清潔／烘乾，購買前要確認 5.1kg 重量、耗材與座充銘牌。",
    "score": 91,
    "voltage": "台灣燦坤 exact-model WD5M14A 頁標 110V／60Hz、400W；Roborock FCC 手冊將 WD5M14A 配對 MDS29LRR 並標座充 120V／60Hz，實際以台灣公司貨銘牌為準",
    "warranty": "Roborock 台灣原廠保固 1 年；台灣官方商城與燦坤 exact-model 頁均有公開保固資訊",
    "tags": [
      "JetFoaming",
      "25,000Pa",
      "95°C 洗烘",
      "180° 平躺",
      "三側貼邊"
    ],
    "releaseDate": "2026",
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
      "checkedAt": "2026-08-26",
      "note": "已查 Roborock 台灣官網、燦坤、FindPrice 與飛比 exact-model WD5M14A；只能確認現價／比價快照，沒有具日期且可重現的可信新品歷史曲線。飛比的 Coupang NT$14,788 候選未在原頁同時核對 exact model 與最低點日期，現價也不直接推定為史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Roborock WD5M14A\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Roborock%20WD5M14A%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Roborock WD5M14A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Roborock%20WD5M14A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        }
      ]
    }
  },
  {
    "id": "vacuum-xiaomi-mijia-wet-dry-vacuum-5-pro-f302hw",
    "category": "vacuum",
    "rank": 30,
    "topPick": false,
    "budget": "balanced",
    "channel": "tw",
    "brand": "Xiaomi",
    "model": "F302HW",
    "name": "米家無線洗地機 5 Pro",
    "price": {
      "currency": "TWD",
      "amount": 11499,
      "converted": 11499,
      "confidence": "Xiaomi 台灣官方規格頁將米家無線洗地機 5 Pro 綁定 F302HW；momo 小米官方旗艦館同名台灣新品頁於 2026-08-29 顯示 NT$11,499、in stock，通路原頁未明示型號",
      "basis": "retailer_current"
    },
    "image": "https://i4.momoshop.com.tw/1786613003/goodsimg/0015/540/464/15540464_R_m.webp",
    "buyUrl": "https://www.momoshop.com.tw/product/15540464",
    "buyLabel": "momo購物（小米官方旗艦館）",
    "installation": {
      "status": "not_stated",
      "note": "官方與通路未列到府安裝；本品為手持洗地機，使用者需依原廠說明放置 F302HW-JZ 清潔基座、注水，並於每次使用後清理污水箱與固液分離件。"
    },
    "specs": [
      "類型：無線乾濕兩用蒸氣洗地機",
      "26,000Pa 吸力、400RPM 滾刷；鍋爐出口蒸氣最高 160°C",
      "標準／蒸氣／吸水／強勁四模式；吸水模式最長約 40 分鐘",
      "100°C 熱水自清潔；5 分鐘快速高溫烘乾；標準烘乾噪音不高於 45dB(A)",
      "清水箱 1,000mL、污水箱 700mL；固液分離、雙側貼邊與 PPA 防纏繞",
      "180° 平躺；機身尺寸 292 x 265 x 1,140mm；淨重 6.1kg",
      "主機 F302HW 額定功率 400W；清潔基座 F302HW-JZ 輸入 110–120V、50/60Hz，額定功率 1,000W"
    ],
    "description": "米家台灣正式款蒸氣洗地機，以 26,000Pa、160°C 鍋爐出口蒸氣、100°C 熱洗與快速烘乾，補進現有目錄缺少的萬元級高規格蒸氣洗地選項。",
    "pros": [
      "NT$11,499 即有 26,000Pa、蒸氣、100°C 熱水自清潔與快速烘乾，規格價格比突出",
      "1L 清水箱、最長 40 分鐘、雙側貼邊與防纏設計適合較大硬地板空間",
      "台灣官方規格明示 110–120V／50–60Hz，並有台灣售後保固"
    ],
    "cons": [
      "主機 6.1kg、基座 2.3kg，搬樓層與固定收納負擔明顯",
      "官方 FAQ 說明蒸氣約需 40 秒預熱且輸出會逐步減少，較適合局部頑垢而非全屋連續蒸氣",
      "污水箱、固液分離件與滾刷仍需每次清理；滾刷、濾網屬持續耗材",
      "台灣主機／清潔基座保固僅 1 年，且新品尚缺長期價格與使用者口碑"
    ],
    "bestFor": "硬地板比例高、家有寵物或幼兒、常處理油污與黏性污漬，且能接受較重機身與每次清潔維護的家庭。",
    "recommendation": "蒸氣洗地 CP 值推薦：NT$11,499 提供 26,000Pa、160°C 蒸氣、100°C 熱洗與快速烘乾；但 6.1kg、1 年保固與新機長期口碑空白，先不列 Top Pick。",
    "score": 88,
    "voltage": "清潔基座 F302HW-JZ 輸入 110–120V、50/60Hz；台灣官方規格與公司貨通路均可核對",
    "warranty": "Xiaomi 台灣保固：主機 F302HW／清潔基座 F302HW-JZ 1 年、電源線 6 個月；滾刷與濾網等耗材不保固",
    "tags": [
      "26,000Pa",
      "160°C 蒸氣",
      "100°C 熱洗",
      "快速烘乾",
      "180° 平躺"
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
      "checkedAt": "2026-08-29",
      "note": "已查 Xiaomi 台灣 F302HW 官方規格頁、momo 官方旗艦館同名現售頁、LBJ exact-model 查詢、FindPrice 與 Yahoo 購物；只能以官方型號頁與同名通路頁交叉確認 NT$11,499 當期公開價，沒有具日期且可重現的可信新品歷史曲線。momo 先前標示的 2026-08-26 是預計出貨日，不是價格最低點日期，現價不得推定為史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Xiaomi F302HW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Xiaomi%20F302HW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Xiaomi F302HW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Xiaomi%20F302HW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        }
      ]
    }
  },
  {
    "id": "vacuum-dyson-pencilwash-wr04-a",
    "category": "vacuum",
    "rank": 31,
    "topPick": false,
    "budget": "balanced",
    "channel": "tw",
    "brand": "Dyson",
    "model": "WR04-A",
    "name": "PencilWash 鉛筆洗地機",
    "price": {
      "currency": "TWD",
      "amount": 12900,
      "converted": 12900,
      "confidence": "Dyson 台灣官方商城 2026-08-29 exact product/SKU 637244-01 顯示單購 NT$12,900、全新現貨並可加入購物車",
      "basis": "retailer_current"
    },
    "image": "https://dysonshop.blob.core.windows.net/products/dyson-pencilwash/hero-1780482874-480x480.jpg",
    "buyUrl": "https://shop.dyson.tw/vacuums/wet-and-dry-vacuums/dyson-pencilwash-637244-01",
    "buyLabel": "Dyson 台灣官方商城",
    "installation": {
      "status": "not_stated",
      "note": "官方商城未列到府安裝；本品為手持硬地板洗地機，使用者需依說明書組裝握把、放置充電座，並於每次使用後清洗水箱、吸頭與滾筒。"
    },
    "specs": [
      "類型：硬質地板乾濕洗地機；以滾筒帶走髒污，不是乾式真空吸塵器",
      "每平方公分 64,000 根高密度纖維滾筒；自動／強效兩種供水模式",
      "最長約 30 分鐘；清水箱 300mL、污水箱 340mL；單箱約可清潔 100m²（約 30 坪）",
      "38mm 窄握把、可 170° 平躺；手持負重約 380g",
      "機身尺寸 267 x 198 x 1,155mm；淨重 2.2kg；充電約 3.5 小時",
      "台灣 exact model WR04-A（通路完整標示 WR04-A 970A TW/PH Co）；110V、BSMI R31692"
    ],
    "description": "Dyson 台灣正式款超輕量硬地板洗地機，以 2.2kg、約 380g 手持負重、38mm 窄握把與 170° 平躺，補進現有洗地機缺少的低操作負擔專用選項。",
    "pros": [
      "2.2kg 機身、約 380g 手持負重，和現有 5–6kg 洗地機形成明確差異",
      "38mm 窄握把與 170° 平躺適合小宅、低矮家具與窄小收納",
      "台灣官方現貨、110V exact model 與 2 年原廠服務資料完整",
      "清水持續供應滾筒，可同時處理硬地板上的輕量乾濕髒污"
    ],
    "cons": [
      "不是有真空吸力的乾式吸塵器，僅適用硬質地板，不能取代家中乾吸主力機",
      "未提供自清潔或熱風烘乾行程，使用後需拆洗吸頭、滾筒並充分風乾",
      "300／340mL 水箱與 30 分鐘續航較適合日常小範圍清潔，不是大坪數深度清潔首選"
    ],
    "bestFor": "已擁有乾式吸塵器、硬地板為主的小宅，重視低手持負擔與窄小收納，並願意每次手動清洗滾筒的人。",
    "recommendation": "輕量專用洗地推薦：適合已有乾式吸塵器、把低手持負擔與窄小收納擺第一順位的家庭；它不是有吸力的全能洗地吸塵器，也沒有自清潔烘乾，因此不列 Top Pick。",
    "score": 83,
    "voltage": "110V 台灣公司貨；中華電信 exact-model 頁明示 WR04-A 970A TW/PH Co、110V 與 BSMI R31692",
    "warranty": "Dyson 台灣原廠 2 年服務保固，官方條款明示包含零件與人工",
    "tags": [
      "2.2kg",
      "380g 手持負重",
      "170° 平躺",
      "硬地板洗地",
      "小宅收納"
    ],
    "releaseDate": "2026-02-19",
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
      "checkedAt": "2026-08-29",
      "note": "已查 Dyson 台灣官方商城、momo exact product/SKU、LBJ exact-model 與 FindPrice；Dyson、momo 與可信比價只證明本輪 NT$12,900 現價，沒有可重現的最低點日期。排除一般個人賣場 NT$9,800 與中華電信綁約方案價，現價不得推定為史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson WR04-A\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20WR04-A%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson WR04-A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20WR04-A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        }
      ]
    }
  }
]);
})();

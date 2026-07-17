(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("fan", [
  {
    "id": "fan-panasonic-fh16",
    "category": "fan",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-H16GND",
    "name": "16 吋 DC 微電腦定時電風扇",
    "price": {
      "currency": "TWD",
      "amount": 3272,
      "converted": 3272,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAB30A900EOQ24/000001_1753338098.png",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAB30-A900EOQ24",
    "buyLabel": "PChome",
    "specs": [
      "16 吋",
      "DC 變頻",
      "負離子",
      "ECO 溫控"
    ],
    "description": "功能、靜音、耗電與品牌售後都均衡，是不容易踩雷的主力立扇。",
    "pros": [
      "穩定耐用",
      "風量與靜音平衡"
    ],
    "cons": [
      "造型保守",
      "價格比入門 DC 扇高"
    ],
    "bestFor": "客廳、臥室日常長時間使用。",
    "recommendation": "綜合推薦：Panasonic 售後維修穩，三千多元有 DC、遙控與足夠風量，長期使用 CP 最好。",
    "score": 92,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "DC",
      "靜音",
      "溫控"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 3272,
      "currency": "TWD",
      "converted": 3272,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMAB30-A900EOQ24",
      "sourceTitle": "PChome 商品頁：Panasonic國際牌16吋DC變頻旗艦型負離子溫感立扇F-H16GND / Panasonic國際牌16吋DC微電腦定時立扇(負離子/ECO溫控)F-H16GND",
      "evidenceSnippet": "PChome 商品 API 於 2026-07-10 回傳同一商品頁「Panasonic國際牌16吋DC變頻旗艦型負離子溫感立扇F-H16GND / Panasonic國際牌16吋DC微電腦定時立扇(負離子/ECO溫控)F-H16GND」查核價 NT$3,272，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-10",
      "note": "採用 PChome 24h 同一商品頁可公開查核現價作為本次觀測到的最低價；同型號/規格並排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic F-H16GND\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20F-H16GND%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic F-H16GND\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20F-H16GND%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-sharp-pv16",
    "category": "fan",
    "rank": 2,
    "budget": "mid",
    "channel": "tw",
    "brand": "SHARP",
    "model": "PJ-PV16AT-W",
    "name": "16 吋自動除菌離子 DC 電風扇",
    "price": {
      "currency": "TWD",
      "amount": 3125,
      "converted": 3125,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABPEA900JYOWP/000001_1779868844.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABPM-A900K2ITT",
    "buyLabel": "PChome",
    "specs": [
      "16 吋",
      "DC 馬達",
      "Plasmacluster",
      "遙控"
    ],
    "description": "主打除菌離子與節能 DC，適合想兼顧風扇與空氣感受的人。",
    "pros": [
      "附加空氣淨化概念",
      "價格合理"
    ],
    "cons": [
      "除菌離子效果不等於空氣清淨機",
      "風感偏傳統"
    ],
    "bestFor": "臥室、書房與有 SHARP 偏好的使用者。",
    "recommendation": "比入門扇多一些空氣循環附加功能，價差仍可接受。",
    "score": 88,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "DC",
      "除菌離子",
      "中價位"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 3125,
      "currency": "TWD",
      "converted": 3125,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1281898456&cgp=3125",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【SHARP 夏普】16吋 自動除菌離子變頻DC電風扇(PJ-PV16AT-W)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【SHARP 夏普】16吋 自動除菌離子變頻DC電風扇(PJ-PV16AT-W)」最低價為 NT$3,125，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"SHARP PJ-PV16AT-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SHARP%20PJ-PV16AT-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SHARP PJ-PV16AT-W\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SHARP%20PJ-PV16AT-W%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-dyson-am12",
    "category": "fan",
    "rank": 3,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dyson",
    "model": "AM12",
    "name": "Cool CF1 智能涼風扇",
    "price": {
      "currency": "TWD",
      "amount": 9990,
      "converted": 9990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU3CA900J971J/000001_1767758265.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAU3C-A900J971J",
    "buyLabel": "PChome",
    "specs": [
      "無葉片",
      "智慧控制",
      "擺頭",
      "易清潔"
    ],
    "description": "外型與安全性佳，適合有小孩、寵物或重視空間美感的家庭。",
    "pros": [
      "安全好清潔",
      "外型俐落"
    ],
    "cons": [
      "價格高",
      "同價位風量 CP 不如傳統扇"
    ],
    "bestFor": "重視安全、設計與清潔便利。",
    "recommendation": "若風量不是唯一優先，Dyson 的設計與易清潔值得考慮。",
    "score": 84,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "無葉片",
      "設計",
      "安全"
    ],
    "releaseDate": "2025-05-28",
    "historicalLow": {
      "status": "found",
      "amount": 8900,
      "currency": "TWD",
      "converted": 8900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1283250660&cgp=8900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Dyson Cool™ CF1 智能涼風扇 AM12 (銀白色)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「7-ELEVEN線上購物 / Dyson Cool™ CF1 智能涼風扇 AM12 (銀白色)」最低價為 NT$8,900，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"Dyson AM12\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20AM12%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson AM12\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20AM12%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-heran-hdf16",
    "category": "fan",
    "rank": 4,
    "budget": "value",
    "channel": "tw",
    "brand": "HERAN",
    "model": "HDF-16S6",
    "name": "16 吋 ECO 溫控智能變頻 DC 風扇",
    "price": {
      "currency": "TWD",
      "amount": 1480,
      "converted": 1480,
      "confidence": "PChome 2026-07-13 售罄追蹤價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABKUA900F4MB2/000001_1760585255.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABKU-A900F4MB2",
    "buyLabel": "PChome（售罄追蹤）",
    "specs": [
      "16 吋",
      "DC 變頻",
      "ECO 溫控",
      "遙控"
    ],
    "description": "低價位就有 DC 變頻與溫控，適合租屋或多房間配置。",
    "pros": [
      "價格低",
      "功能給得完整"
    ],
    "cons": [
      "質感與耐用口碑不如日系",
      "風切聲控制普通"
    ],
    "bestFor": "租屋、多房間補扇、預算優先。",
    "recommendation": "CP 值入門款：花小錢補齊 DC 與遙控。",
    "score": 82,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "CP 值",
      "DC",
      "租屋"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1280,
      "currency": "TWD",
      "converted": 1280,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1243853975&cgp=1480",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：HERAN 禾聯 16吋ECO溫控智能變頻DC風扇 (HDF-16S6(S)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / HERAN 禾聯 16吋ECO溫控智能變頻DC風扇 (HDF-16S6(S)」最低價為 NT$1,280，最低點日期 2025-09-18。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-13",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HDF-16S6\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com+%22HDF-16S6%22+%28%E7%81%BD%E6%83%85+OR+%E5%95%8F%E9%A1%8C+OR+%E6%95%85%E9%9A%9C+OR+%E8%B2%A0%E8%A9%95%29",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HDF-16S6\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.google.com/search?q=site%3Areddit.com+%22HDF-16S6%22+%28problem+OR+issue+OR+defect+OR+%22negative+review%22%29",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-nwt-wpf16",
    "category": "fan",
    "rank": 5,
    "budget": "value",
    "channel": "tw",
    "brand": "NWT",
    "model": "WPF-16S7",
    "name": "16 吋 DC 變頻直流電風扇",
    "price": {
      "currency": "TWD",
      "amount": 1299,
      "converted": 1299,
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABP5A900HDZSK/000001_1760322125.jpg",
    "buyUrl": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=12781787",
    "buyLabel": "momo購物",
    "specs": [
      "16 吋",
      "DC 馬達",
      "多段風量",
      "基本遙控"
    ],
    "description": "價格壓得很低，適合把風扇當消耗型家電的人。",
    "pros": [
      "便宜",
      "基本功能齊"
    ],
    "cons": [
      "品牌與售後能見度較低",
      "質感普通"
    ],
    "bestFor": "預算極限、備用扇或短期租屋。",
    "recommendation": "若只想要便宜 DC 立扇，這台很有價格優勢。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依通路",
    "tags": [
      "低價",
      "DC",
      "備用"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1288,
      "currency": "TWD",
      "converted": 1288,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1218910755&cgp=1290",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：NWT 威技 NWT 16吋DC變頻直流電風扇WPF-16S7",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / NWT 威技 NWT 16吋DC變頻直流電風扇WPF-16S7」最低價為 NT$1,288，最低點日期 2026-05-14。",
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
          "query": "site:mobile01.com \"NWT WPF-16S7\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22NWT%20WPF-16S7%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"NWT WPF-16S7\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22NWT%20WPF-16S7%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-extra-6-dmablm-a900eorov",
    "category": "fan",
    "rank": 6,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-S16LMD",
    "name": "16 吋 DC 變頻電風扇",
    "price": {
      "currency": "TWD",
      "amount": 2472,
      "converted": 2472,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABLMA900EOROV/000001_1757038312.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABLM-A900EOROV",
    "buyLabel": "PChome",
    "specs": [
      "16 吋",
      "DC 變頻",
      "立扇",
      "節能"
    ],
    "description": "Panasonic F-S16LMD 是電風扇類的補充比較型號，依 2026-07-11 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "DC",
      "16 吋",
      "CP 值"
    ],
    "releaseDate": "2025-05-13",
    "historicalLow": {
      "status": "found",
      "amount": 2111,
      "currency": "TWD",
      "converted": 2111,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=531595480&cgp=2911",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Panasonic 國際 F-S16LMD 16吋 DC 直流 經典型 電風扇 神腦生活",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - 神腦生活 Senaonline / Panasonic 國際 F-S16LMD 16吋 DC 直流 經典型 電風扇 神腦生活」最低價為 NT$2,111，最低點日期 2026-02-25。",
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
          "query": "site:mobile01.com \"Panasonic F-S16LMD\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20F-S16LMD%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic F-S16LMD\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20F-S16LMD%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-extra-7-dmablm-a900eoq12",
    "category": "fan",
    "rank": 7,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-H14GND-K",
    "name": "14 吋 DC 微電腦定時電風扇",
    "price": {
      "currency": "TWD",
      "amount": 2990,
      "converted": 2990,
      "confidence": "PChome 2026-07-17 API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABLMA900EOQ12/000001_1695005225.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABLM-A900EOQ12",
    "buyLabel": "PChome",
    "specs": [
      "14 吋",
      "DC 馬達",
      "負離子",
      "ECO 溫控"
    ],
    "description": "Panasonic F-H14GND-K 是電風扇類的補充比較型號，依 2026-07-17 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "DC",
      "負離子",
      "臥室"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2990,
      "currency": "TWD",
      "converted": 2990,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMABLM-A900EOQ12",
      "sourceTitle": "PChome 24h：Panasonic F-H14GND-K 14 吋 DC 微電腦定時電風扇",
      "evidenceSnippet": "PChome 商品頁與商品 API 於 2026-07-17 顯示同型號新品公開價 NT$2,990、Qty 20，並可加入購物車及立即購買。",
      "sourceKind": "retailer_page",
      "confidence": "high",
      "checkedAt": "2026-07-17",
      "note": "採用同型號、同尺寸與同規格的可信新品公開價；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、拆封品與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic F-H14GND-K\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20F-H14GND-K%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic F-H14GND-K\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20F-H14GND-K%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-extra-8-dmablm-a900eorp0",
    "category": "fan",
    "rank": 8,
    "budget": "premium",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-H14LXD-K",
    "name": "14 吋 DC 微電腦定時電風扇",
    "price": {
      "currency": "TWD",
      "amount": 4460,
      "converted": 4460,
      "confidence": "PChome 2026-07-13 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABLMA900EORP0/000001_1697161466.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABLM-A900EORP0",
    "buyLabel": "PChome",
    "specs": [
      "14 吋",
      "DC 馬達",
      "定時",
      "遙控"
    ],
    "description": "Panasonic F-H14LXD-K 是電風扇類的補充比較型號，依 2026-07-11 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "DC",
      "高階",
      "臥室"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 3920,
      "currency": "TWD",
      "converted": 3920,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMABLM-A900EORP0",
      "sourceTitle": "PChome 商品頁：Panasonic國際牌14吋DC微電腦定時立扇F-H14LXD-K / Panasonic國際牌14吋DC微電腦定時立扇F-H14LXD-K",
      "evidenceSnippet": "PChome 商品 API 於 2026-07-10 回傳同一商品頁「Panasonic國際牌14吋DC微電腦定時立扇F-H14LXD-K / Panasonic國際牌14吋DC微電腦定時立扇F-H14LXD-K」查核價 NT$3,920，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-10",
      "note": "採用 PChome 24h 同一商品頁可公開查核現價作為本次觀測到的最低價；同型號/規格並排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic F-H14LXD-K\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20F-H14LXD-K%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic F-H14LXD-K\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20F-H14LXD-K%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-extra-9-dmab1f-a900b4sp0",
    "category": "fan",
    "rank": 9,
    "budget": "value",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-S14KM",
    "name": "14 吋微電腦 DC 直流電風扇",
    "price": {
      "currency": "TWD",
      "amount": 1444,
      "converted": 1444,
      "confidence": "PChome 2026-07-13 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAB1FA900EZLVB/000001_1685607577.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAB1F-A900EZLVB",
    "buyLabel": "PChome",
    "specs": [
      "14 吋",
      "DC 直流",
      "微電腦",
      "台灣製造"
    ],
    "description": "Panasonic F-S14KM 是電風扇類的補充比較型號，依 2026-07-13 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "DC",
      "低價",
      "租屋"
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
      "checkedAt": "2026-07-16",
      "note": "原 momo 史低頁已不再呈現 F-S14KM 商品與價格，逐型號重查 LBJ、FindPrice、PChome、Yahoo 與 momo 後仍找不到可公開重現的同型號可信新品史低；因此撤銷原 NT$1,319 證據，不以現價推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic F-S14KM\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20F-S14KM%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic F-S14KM\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20F-S14KM%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-extra-10-dmab30-a900eoq5x",
    "category": "fan",
    "rank": 10,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-L16GMD",
    "name": "16 吋 DC 變頻高級型溫感遙控電風扇",
    "price": {
      "currency": "TWD",
      "amount": 3231,
      "converted": 3231,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAB30A900EOQ5X/000001_1693793932.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAB30-A900EOQ5X",
    "buyLabel": "PChome",
    "specs": [
      "16 吋",
      "DC 變頻",
      "溫感",
      "遙控"
    ],
    "description": "Panasonic F-L16GMD 是電風扇類的補充比較型號，依 2026-07-11 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "DC",
      "溫控",
      "客廳"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 3231,
      "currency": "TWD",
      "converted": 3231,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMAB30-A900EOQ5X",
      "sourceTitle": "PChome 商品頁：Panasonic國際牌 16吋DC變頻高級型溫感遙控立扇F-L16GMD / Panasonic國際牌 16吋DC變頻高級型溫感遙控立扇F-L16GMD",
      "evidenceSnippet": "PChome 商品 API 於 2026-07-10 回傳同一商品頁「Panasonic國際牌 16吋DC變頻高級型溫感遙控立扇F-L16GMD / Panasonic國際牌 16吋DC變頻高級型溫感遙控立扇F-L16GMD」查核價 NT$3,231，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-10",
      "note": "採用 PChome 24h 同一商品頁可公開查核現價作為本次觀測到的最低價；同型號/規格並排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic F-L16GMD\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20F-L16GMD%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic F-L16GMD\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20F-L16GMD%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-extra-11-dmab1f-a900jxknn",
    "category": "fan",
    "rank": 11,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-S14QT",
    "name": "14 吋五片扇葉 ECO 溫度感知 DC 馬達電風扇",
    "price": {
      "currency": "TWD",
      "amount": 2071,
      "converted": 2071,
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAB1FA900JXKNN/000001_1776674767.jpg",
    "buyUrl": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=15180635",
    "buyLabel": "momo購物",
    "specs": [
      "14 吋",
      "五片扇葉",
      "ECO 溫度感知",
      "附遙控器"
    ],
    "description": "Panasonic F-S14QT 是電風扇類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "DC",
      "溫控",
      "CP 值"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2071,
      "currency": "TWD",
      "converted": 2071,
      "sourceUrl": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=15180635",
      "sourceTitle": "momo購物 商品頁：【Panasonic 國際牌】14吋DC立扇 (F-S14QT)",
      "evidenceSnippet": "momo購物 原始商品頁／API 於 2026-07-11 顯示同型號新品公開價 2071 TWD，低於既有可驗證史低。",
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
          "query": "site:mobile01.com \"Panasonic F-S14QT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20F-S14QT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic F-S14QT\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20F-S14QT%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-extra-12-dmab1f-a900jx6mj",
    "category": "fan",
    "rank": 12,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-S12QT",
    "name": "12 吋五片扇葉 ECO 溫度感知 DC 馬達電風扇",
    "price": {
      "currency": "TWD",
      "amount": 1840,
      "converted": 1840,
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAB1FA900JX6MJ/000001_1776674604.jpg",
    "buyUrl": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=15180637",
    "buyLabel": "momo購物",
    "specs": [
      "12 吋",
      "五片扇葉",
      "ECO 溫控",
      "附遙控器"
    ],
    "description": "Panasonic F-S12QT 是電風扇類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 81,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "小空間",
      "DC",
      "臥室"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1840,
      "currency": "TWD",
      "converted": 1840,
      "sourceUrl": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=15180637",
      "sourceTitle": "momo購物 商品頁：【Panasonic 國際牌】12吋DC立扇 (F-S12QT)",
      "evidenceSnippet": "momo購物 原始商品頁／API 於 2026-07-11 顯示同型號新品公開價 1840 TWD，低於既有可驗證史低。",
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
          "query": "site:mobile01.com \"Panasonic F-S12QT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20F-S12QT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic F-S12QT\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20F-S12QT%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-extra-13-dmabpe-a900jzz0q",
    "category": "fan",
    "rank": 13,
    "budget": "mid",
    "channel": "tw",
    "brand": "SHARP",
    "model": "PJ-DC16VT-W",
    "name": "16 吋 DC 節能直流馬達立扇",
    "price": {
      "currency": "TWD",
      "amount": 2961,
      "converted": 2961,
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABPEA900JZZ0Q/000001_1778477239.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0001524/goodsDetail/TP00015240000436",
    "buyLabel": "momo購物",
    "specs": [
      "16 吋",
      "DC 馬達",
      "節能",
      "立扇"
    ],
    "description": "SHARP PJ-DC16VT-W 是電風扇類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "SHARP",
      "DC",
      "客廳"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2961,
      "currency": "TWD",
      "converted": 2961,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1274027962&cgp=2961",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【SHARP 夏普】16吋 高級型變頻 DC 立扇 電風扇 PJ-DC16VT-W",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【SHARP 夏普】16吋 高級型變頻 DC 立扇 電風扇 PJ-DC16VT-W」最低價為 NT$2,961，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"SHARP PJ-DC16VT-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SHARP%20PJ-DC16VT-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SHARP PJ-DC16VT-W\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SHARP%20PJ-DC16VT-W%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-extra-14-dmabpm-a900k2j9e",
    "category": "fan",
    "rank": 14,
    "budget": "value",
    "channel": "tw",
    "brand": "SHARP",
    "model": "PJ-V14A-W",
    "name": "14 吋 DC 直流馬達伸縮立扇",
    "price": {
      "currency": "TWD",
      "amount": 1861,
      "converted": 1861,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABPMA900K2J9E/000001_1780381094.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABPM-A900K2J9E",
    "buyLabel": "PChome",
    "specs": [
      "14 吋",
      "DC 直流",
      "伸縮立扇",
      "入門價位"
    ],
    "description": "SHARP PJ-V14A-W 是電風扇類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 79,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "SHARP",
      "低價",
      "小空間"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1861,
      "currency": "TWD",
      "converted": 1861,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282083446&cgp=1861",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【SHARP 夏普】14吋 DC直流馬達伸縮立扇(PJ-V14A-W)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【SHARP 夏普】14吋 DC直流馬達伸縮立扇(PJ-V14A-W)」最低價為 NT$1,861，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"SHARP PJ-V14A-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SHARP%20PJ-V14A-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SHARP PJ-V14A-W\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SHARP%20PJ-V14A-W%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-extra-15-dmabpm-a900j334p",
    "category": "fan",
    "rank": 15,
    "budget": "value",
    "channel": "tw",
    "brand": "SHARP",
    "model": "PJ-E14GE",
    "name": "14 吋 DC 直流馬達遙控立扇",
    "price": {
      "currency": "TWD",
      "amount": 1407,
      "converted": 1407,
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABPMA900J334P/000001_1753932662.jpg",
    "buyUrl": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=14266032",
    "buyLabel": "momo購物",
    "specs": [
      "14 吋",
      "DC 馬達",
      "遙控",
      "立扇"
    ],
    "description": "SHARP PJ-E14GE 是電風扇類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "SHARP",
      "低價",
      "遙控"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1320,
      "currency": "TWD",
      "converted": 1320,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1248767794&cgp=1510",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【SHARP 夏普】14吋 DC直流馬達遙控立扇(PJ-E14GE)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【SHARP 夏普】14吋 DC直流馬達遙控立扇(PJ-E14GE)」最低價為 NT$1,320，最低點日期 2026-04-17。",
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
          "query": "site:mobile01.com \"SHARP PJ-E14GE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SHARP%20PJ-E14GE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SHARP PJ-E14GE\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SHARP%20PJ-E14GE%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-extra-16-dmacaka900g4vtv",
    "category": "fan",
    "rank": 16,
    "budget": "value",
    "channel": "tw",
    "brand": "Philips",
    "model": "ACR2142SF",
    "name": "窄邊框時尚美型風扇",
    "price": {
      "currency": "TWD",
      "amount": 1341,
      "converted": 1341,
      "confidence": "momo購物 2026-07-13 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMACAKA900G4VTV/000001_1779763282.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0006456/goodsDetail/TP00064560000408",
    "buyLabel": "momo購物",
    "specs": [
      "時尚外型",
      "窄邊框",
      "家用風扇",
      "110V"
    ],
    "description": "Philips ACR2142SF 補進本分類比較池，重點是時尚外型、窄邊框、家用風扇，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "Philips 品牌與外型加分",
      "價格親民"
    ],
    "cons": [
      "規格不如 DC 高階立扇明確",
      "風量需看實際空間"
    ],
    "bestFor": "想補進 Philips 風扇，並比較傳統立扇、塔扇、循環扇與無葉片的人。",
    "recommendation": "補充推薦：窄邊框時尚美型風扇 的優勢在Philips 品牌與外型加分，但仍建議把規格不如 DC 高階立扇明確納入取捨。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "Philips",
      "美型",
      "預算"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Philips ACR2142SF: Momo富邦購物 (店+)【Philips 飛利浦】PHILIPS 12吋 窄邊框時尚風扇 【百年匠心系列】 電風扇 涼風扇 遙控風扇 循環扇 循環風扇 ACR2142SF 型號/規格不相符；LBJ Philips ACR2142SF: 蝦皮商城 - 萬家福線上購物 PHILIPS 12吋時尚美型風扇ACR2142SF 1台【萬家福】 型號/規格不相符；LBJ Philips ACR2142SF: 家樂福線上購物網 【Philips 飛利浦】12吋時尚美型風扇 ACR2142SF 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips ACR2142SF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20ACR2142SF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips ACR2142SF\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20ACR2142SF%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-extra-17-dmab2za900exoh3",
    "category": "fan",
    "rank": 17,
    "budget": "mid",
    "channel": "tw",
    "brand": "Philips",
    "model": "ACR3142CF",
    "name": "DC 立式循環扇",
    "price": {
      "currency": "TWD",
      "amount": 2691,
      "converted": 2691,
      "confidence": "momo購物 2026-07-13 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMACAKA900G0BE8/000001_1779955873.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0006456/goodsDetail/TP00064560000754",
    "buyLabel": "momo購物",
    "specs": [
      "DC",
      "立式",
      "循環扇",
      "節能"
    ],
    "description": "Philips ACR3142CF 補進本分類比較池，重點是DC、立式、循環扇，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "兼具風扇與循環扇定位",
      "DC 節能"
    ],
    "cons": [
      "價格比入門立扇高",
      "循環效果需看擺放"
    ],
    "bestFor": "想補進 Philips 風扇，並比較傳統立扇、塔扇、循環扇與無葉片的人。",
    "recommendation": "補充推薦：DC 立式循環扇 的優勢在兼具風扇與循環扇定位，但仍建議把價格比入門立扇高納入取捨。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "Philips",
      "DC",
      "循環"
    ],
    "releaseDate": "2026-03-17",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Philips ACR3142CF: Momo富邦購物 (店+)【Philips 飛利浦】【PHILIPS飛利浦】ACR3142CF-DC立式循環扇 型號/規格不相符；LBJ Philips ACR3142CF: Momo富邦購物 (店+)【Philips 飛利浦】【PHILIPS 飛利浦】ACR3142CF PHILIPS 飛利浦 DC 立式循環扇 型號/規格不相符；LBJ Philips ACR3142CF: HOTAI購 【HOTAI購】【PHILIPS飛利浦】ACR3142CF-DC立式循環扇 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips ACR3142CF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20ACR3142CF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips ACR3142CF\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20ACR3142CF%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-extra-18-dmacbua900iudv9",
    "category": "fan",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "brand": "Philips",
    "model": "ACR3342CFD",
    "name": "全方位渦輪 DC 循環扇",
    "price": {
      "currency": "TWD",
      "amount": 2961,
      "converted": 2961,
      "confidence": "momo購物 2026-07-13 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABOWA900IUZ7V/000001_1780022324.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0006456/goodsDetail/TP00064560000573",
    "buyLabel": "momo購物",
    "specs": [
      "DC",
      "渦輪循環",
      "全方位",
      "遙控"
    ],
    "description": "Philips ACR3342CFD 補進本分類比較池，重點是DC、渦輪循環、全方位，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "風道集中、循環效率好",
      "適合搭配冷氣"
    ],
    "cons": [
      "不一定有傳統立扇的柔風感",
      "價格較高"
    ],
    "bestFor": "想補進 Philips 風扇，並比較傳統立扇、塔扇、循環扇與無葉片的人。",
    "recommendation": "補充推薦：全方位渦輪 DC 循環扇 的優勢在風道集中、循環效率好，但仍建議把不一定有傳統立扇的柔風感納入取捨。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "Philips",
      "DC",
      "冷氣搭配"
    ],
    "releaseDate": "2026-03-17",
    "historicalLow": {
      "status": "found",
      "amount": 2138,
      "currency": "TWD",
      "converted": 2138,
      "sourceUrl": "https://www.momoshop.com.tw/TP/TP0006456/goodsDetail/TP00064560000573",
      "sourceTitle": "momo購物 商品頁：【Philips 飛利浦】PHILIPS 飛利浦 全方位渦輪循環扇 【百年匠心系列】 循環扇 電風扇 風扇 電扇 ACR3342CFD",
      "evidenceSnippet": "momo購物 原始商品頁／API 於 2026-07-11 顯示同型號新品公開價 2138 TWD，低於既有可驗證史低。",
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
          "query": "site:mobile01.com \"Philips ACR3342CFD\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20ACR3342CFD%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips ACR3342CFD\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20ACR3342CFD%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-extra-19-dmacaka900g0bb4",
    "category": "fan",
    "rank": 19,
    "budget": "mid",
    "channel": "tw",
    "brand": "Philips",
    "model": "ACR3144WTF",
    "name": "DC 塔式風扇",
    "price": {
      "currency": "TWD",
      "amount": 3681,
      "converted": 3681,
      "confidence": "momo購物 2026-07-13 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMACAKA900G0BB4/000001_1778646103.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0006456/goodsDetail/TP00064560000457",
    "buyLabel": "momo購物",
    "specs": [
      "塔扇",
      "DC",
      "省空間",
      "擺頭"
    ],
    "description": "Philips ACR3144WTF 補進本分類比較池，重點是塔扇、DC、省空間，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "占地小、外型俐落",
      "適合臥室角落"
    ],
    "cons": [
      "清潔比傳統扇麻煩",
      "風量不如大葉片立扇"
    ],
    "bestFor": "想補進 Philips 風扇，並比較傳統立扇、塔扇、循環扇與無葉片的人。",
    "recommendation": "補充推薦：DC 塔式風扇 的優勢在占地小、外型俐落，但仍建議把清潔比傳統扇麻煩納入取捨。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "Philips",
      "塔扇",
      "省空間"
    ],
    "releaseDate": "2026-03-17",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Philips ACR3144WTF: Momo富邦購物 【Philips 飛利浦】負離子淨化DC直流塔式風扇 定時大廈扇 液晶觸控顯示-可遙控(ACR3144WTF) 型號/規格不相符；LBJ Philips ACR3144WTF: 蝦皮商城 - 綠風潮網路商城 飛利浦ACR3144WTF DC塔式風扇- 綠風潮 型號/規格不相符；LBJ Philips ACR3144WTF: Yahoo購物中心 【PHILIPS 飛利浦】DC塔式風扇 LED顯示 24H 定時調節 低噪音 遠距離遙控-ACR3144WTF 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips ACR3144WTF\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20ACR3144WTF%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips ACR3144WTF\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20ACR3144WTF%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-extra-20-dmab6za900flc55",
    "category": "fan",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "Philips",
    "model": "AHR5164FD",
    "name": "DC 冷暖兩用無扇葉風扇",
    "price": {
      "currency": "TWD",
      "amount": 8910,
      "converted": 8910,
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAB6ZA900FLC55/000001_1780151316.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0003952/goodsDetail/TP00039520004981",
    "buyLabel": "momo購物",
    "specs": [
      "無扇葉",
      "冷暖兩用",
      "DC",
      "安全"
    ],
    "description": "Philips AHR5164FD 補進本分類比較池，重點是無扇葉、冷暖兩用、DC，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "四季可用",
      "無葉片安全好清潔"
    ],
    "cons": [
      "價格高",
      "暖風功能耗電需留意"
    ],
    "bestFor": "想補進 Philips 風扇，並比較傳統立扇、塔扇、循環扇與無葉片的人。",
    "recommendation": "補充推薦：DC 冷暖兩用無扇葉風扇 的優勢在四季可用，但仍建議把價格高納入取捨。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "Philips",
      "無葉片",
      "冷暖"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Philips AHR5164FD: 百利市購物中心 【百利市購物中心】飛利浦 DC冷暖兩用無扇葉風扇冷暖風扇無葉風扇電暖器【AHR5164FD】 型號/規格不相符；LBJ Philips AHR5164FD: HOTAI購 【HOTAI購】飛利浦【AHR5164FD】DC冷暖兩用無扇葉風扇冷暖風扇無葉風扇電暖器 型號/規格不相符；LBJ Philips AHR5164FD: 樂天市場 - 兆眾 兆眾 【APP 4%點數】【Philips 飛利浦】 DC冷暖兩用無扇葉風扇AHR5164FD 全新未拆封 台灣公司貨 此商品沒有7天鑑賞期 沒有辦法退貨 都是走維修保固 您可以在下單 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips AHR5164FD\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20AHR5164FD%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips AHR5164FD\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20AHR5164FD%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-costco-airmate-ft89r",
    "category": "fan",
    "rank": 21,
    "budget": "value",
    "channel": "tw",
    "brand": "Airmate",
    "model": "FT89R",
    "name": "DC 遙控大廈扇",
    "price": {
      "currency": "TWD",
      "amount": 2999,
      "converted": 2999,
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/ha1/h9a/361109992439838.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Cooling-Heating-Air-Treatment/Heating-Cooling/Airmate-DC-Remote-Control-Tower-Fan-FT89R/p/150625",
    "buyLabel": "Costco 好市多",
    "specs": [
      "DC 直流馬達",
      "遙控塔扇",
      "直立窄身",
      "Costco 評價 4.6 / 93 則"
    ],
    "description": "窄身塔扇不佔地，Costco 評價與評論數都比一般新品頁可靠，適合補進風扇類比較池。",
    "pros": [
      "塔扇形式省空間",
      "Costco 93 則評論、4.6 分"
    ],
    "cons": [
      "送風距離通常不如大扇葉循環扇",
      "需定期清理進風口灰塵"
    ],
    "bestFor": "臥室、書房或走道旁需要窄身直立風扇的人。",
    "recommendation": "好市多補充推薦：FT89R 評價穩且價格中等，是 Costco 可買的塔扇型代表。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 Costco 好市多商品頁、品牌保固與退貨政策",
    "tags": [
      "Costco",
      "塔扇",
      "DC"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2389,
      "currency": "TWD",
      "converted": 2389,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1253336034&cgp=2999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Costco好市多】艾美特 DC 遙控大廈扇 FT89R Airmate DC Remote Control Tower Fan FT89R",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Costco好市多 / 【Costco好市多】艾美特 DC 遙控大廈扇 FT89R Airmate DC Remote Control Tower Fan FT89R」最低價為 NT$2,389，最低點日期 2026-04-13。",
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
          "query": "site:mobile01.com \"Airmate FT89R\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Airmate%20FT89R%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Airmate FT89R\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Airmate%20FT89R%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-costco-dewalt-dxf1645a",
    "category": "fan",
    "rank": 22,
    "budget": "value",
    "channel": "tw",
    "brand": "DeWALT",
    "model": "DXF1645A",
    "name": "40 公分鼓風扇",
    "price": {
      "currency": "TWD",
      "amount": 2999,
      "converted": 2999,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/hc9/h49/348867521806366.webp",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Cooling-Heating-Air-Treatment/Heating-Cooling/DeWALT-40-cm-Drum-Fan/p/9631000",
    "buyLabel": "Costco 好市多",
    "specs": [
      "40 公分鼓風扇",
      "重量：約7.05公斤",
      "工業風格金屬/PP 結構",
      "適合車庫、工作間或大空間循環",
      "Costco 評價 4.8 / 71 則"
    ],
    "description": "Costco 評價不錯的電風扇候選，依風量、噪音、收納與空間需求補進比較。",
    "pros": [
      "好市多正常新品頁",
      "價格與評價具參考性"
    ],
    "cons": [
      "需依擺放空間選尺寸",
      "低價款功能較單純"
    ],
    "bestFor": "想在好市多買風扇並重視退貨保障的人",
    "recommendation": "好市多補充推薦：40 公分鼓風扇 評價不錯，補進電風扇分類作為 Costco 候選比較。",
    "score": 88,
    "voltage": "通路頁未標示；購買前確認台灣 110V/60Hz 適用性",
    "warranty": "依 Costco 好市多商品頁與品牌保固標示",
    "tags": [
      "Costco",
      "好市多",
      "鼓風扇",
      "強風量",
      "工作間"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ DeWALT DXF1645A: 蝦皮購物 - vk110501 DeWALT得偉 40公分 Drum Fan風扇 DXF1645A渦流扇循環扇 工業電扇可直立掛勾、壁掛#9631000 非採用通路或含排除條件；LBJ DXF1645A: 蝦皮購物 - vk110501 DeWALT得偉 40公分 Drum Fan風扇 DXF1645A渦流扇循環扇 工業電扇可直立掛勾、壁掛#9631000 非採用通路或含排除條件；BigGo DeWALT DXF1645A: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DeWALT%20DXF1645A/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"DeWALT DXF1645A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22DeWALT%20DXF1645A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"DeWALT DXF1645A\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22DeWALT%20DXF1645A%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "fan-costco-airmate-fs35150r",
    "category": "fan",
    "rank": 23,
    "budget": "value",
    "channel": "tw",
    "brand": "Airmate",
    "model": "FS35150R",
    "name": "14 吋 DC 直流遙控立扇",
    "price": {
      "currency": "TWD",
      "amount": 2099,
      "converted": 2099,
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h33/h32/333377590099998.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Cooling-Heating-Air-Treatment/Heating-Cooling/Airmate-14-inch-DC-Inverter-Stand-Fan-FS35150R/p/149335",
    "buyLabel": "Costco 好市多",
    "specs": [
      "14 吋 DC 立扇",
      "110V / 60Hz",
      "32W",
      "重量：約5.32公斤",
      "Costco 評價 4.6 / 43 則"
    ],
    "description": "Costco 評價不錯的電風扇候選，依風量、噪音、收納與空間需求補進比較。",
    "pros": [
      "好市多正常新品頁",
      "價格與評價具參考性"
    ],
    "cons": [
      "需依擺放空間選尺寸",
      "低價款功能較單純"
    ],
    "bestFor": "想在好市多買風扇並重視退貨保障的人",
    "recommendation": "好市多補充推薦：14 吋 DC 直流遙控立扇 評價不錯，補進電風扇分類作為 Costco 候選比較。",
    "score": 87,
    "voltage": "110V / 60Hz",
    "warranty": "依 Costco 好市多商品頁與品牌 1 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "DC",
      "立扇",
      "遙控"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1679,
      "currency": "TWD",
      "converted": 1679,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1250880568&cgp=2099",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Costco好市多】艾美特 14吋DC 直流遙控立扇 FS35150R Airmate 14 inch DC Inverter Stand Fan FS35150R",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Costco好市多 / 【Costco好市多】艾美特 14吋DC 直流遙控立扇 FS35150R Airmate 14 inch DC Inverter Stand Fan FS35150R」最低價為 NT$1,679，最低點日期 2025-07-21。",
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
          "query": "site:mobile01.com \"Airmate FS35150R\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Airmate%20FS35150R%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Airmate FS35150R\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Airmate%20FS35150R%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  }
]);
})();

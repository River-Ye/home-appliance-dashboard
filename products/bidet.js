(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("bidet", [
  {
    "id": "bidet-toto-s2",
    "category": "bidet",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "TOTO",
    "model": "TCF8342TW S2",
    "name": "WASHLET 溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 9900,
      "converted": 9900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAL2NA900HYYVV/000001_1732173829.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAL2N-A900HYYVV",
    "buyLabel": "PChome",
    "specs": [
      "溫水洗淨",
      "溫熱無縫便座",
      "噴嘴自潔",
      "基本安裝需確認"
    ],
    "description": "TOTO 口碑與維修能見度高，中階價格已具備日常所需功能。",
    "pros": [
      "品牌與維修安心",
      "功能完整不過度昂貴"
    ],
    "cons": [
      "需確認馬桶尺寸",
      "安裝與插座可能另計"
    ],
    "bestFor": "首次安裝免治、重視品牌安心。",
    "recommendation": "綜合推薦：TOTO S2 安裝尺寸、零件與售後最安心，價格比高階款親民，長期使用風險最低。",
    "score": 93,
    "voltage": "110V 台灣公司貨，浴廁需有安全插座",
    "warranty": "台灣保固",
    "tags": [
      "WASHLET",
      "中階",
      "安心牌"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ TOTO TCF8342TW S2: 樂天市場 - 洗樂適衛浴 洗樂適衛浴 【TOTO東陶】S2瞬熱型溫水洗淨便座 /電壓110V/噴嘴自潔/溫熱便座/新上市 TCF8342TW 型號/規格不相符；LBJ TOTO TCF8342TW S2: Momo富邦購物 【TOTO】S2 基本款 溫水洗淨便座 TCF8342TW(智慧洗淨/溫熱無縫便座/WASHLET/免治馬桶座) 型號/規格不相符；LBJ TOTO TCF8342TW S2: PCHome購物 TOTO TCF8342TW S2 WASHLET 溫水洗淨便座(智慧洗淨/溫熱無縫便座/免治馬桶座/S2) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TOTO TCF8342TW S2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22TOTO%20TCF8342TW%20S2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TOTO TCF8342TW S2\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22TOTO%20TCF8342TW%20S2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-toto-c2",
    "category": "bidet",
    "rank": 2,
    "budget": "value",
    "channel": "tw",
    "brand": "TOTO",
    "model": "TCF23710ATW C2",
    "name": "WASHLET 溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 8990,
      "converted": 8990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DEDW0RA900I2TTG/000001_1764912449.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEDW0R-A900I2TTG",
    "buyLabel": "PChome",
    "specs": [
      "溫水洗淨",
      "噴嘴自潔",
      "溫熱便座",
      "標準款"
    ],
    "description": "TOTO 入門到中階的實用款，價格比高階 WASHLET 容易下手。",
    "pros": [
      "價格較低",
      "TOTO 品牌安心"
    ],
    "cons": [
      "高階除臭/遙控功能較少",
      "仍需確認安裝條件"
    ],
    "bestFor": "預算一萬元內、想要 TOTO 基本款。",
    "recommendation": "小預算選 TOTO 時，C2 是務實入口。",
    "score": 89,
    "voltage": "110V 台灣公司貨，浴廁需有安全插座",
    "warranty": "台灣保固",
    "tags": [
      "入門",
      "WASHLET",
      "CP 值"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 7980,
      "currency": "TWD",
      "converted": 7980,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1132502153&cgp=8990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【TOTO】C2 基本款 溫水洗淨便座 TCF23710ATW(噴嘴自潔/智慧洗淨/溫熱便座/WASHLET/免治馬桶座)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【TOTO】C2 基本款 溫水洗淨便座 TCF23710ATW(噴嘴自潔/智慧洗淨/溫熱便座/WASHLET/免治馬桶座)」最低價為 NT$7,980，最低點日期 2025-11-14。",
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
          "query": "site:mobile01.com \"TOTO TCF23710ATW C2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22TOTO%20TCF23710ATW%20C2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TOTO TCF23710ATW C2\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22TOTO%20TCF23710ATW%20C2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-panasonic-pstk09",
    "category": "bidet",
    "rank": 3,
    "budget": "value",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "DL-PSTK09TWW",
    "name": "瞬熱式溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 8090,
      "converted": 8090,
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL8LA900H03A0/000001_1760407099.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0005935/goodsDetail/TP00059350002059",
    "buyLabel": "momo購物",
    "specs": [
      "瞬熱式",
      "溫水洗淨",
      "基本安裝",
      "省電"
    ],
    "description": "瞬熱式不用長時間保溫，適合重視節能與基本清潔的人。",
    "pros": [
      "瞬熱省電",
      "Panasonic 售後普及"
    ],
    "cons": [
      "設計感普通",
      "高階功能較少"
    ],
    "bestFor": "一萬元內、重視瞬熱與品牌售後。",
    "recommendation": "若偏好家電品牌售後，Panasonic 瞬熱款很有 CP 值。",
    "score": 88,
    "voltage": "110V 台灣公司貨，浴廁需有安全插座",
    "warranty": "台灣保固",
    "tags": [
      "瞬熱",
      "節能",
      "CP 值"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 7990,
      "currency": "TWD",
      "converted": 7990,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=589539302&cgp=7990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Panasonic 國際牌 微電腦瞬熱便座 DL-PSTK09TWW-TW 含標準安裝 大型配送",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - 蝦皮直營 - 3C家電館 / Panasonic 國際牌 微電腦瞬熱便座 DL-PSTK09TWW-TW 含標準安裝 大型配送」最低價為 NT$7,990，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"Panasonic DL-PSTK09TWW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20DL-PSTK09TWW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic DL-PSTK09TWW\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20DL-PSTK09TWW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-kohler-c3430",
    "category": "bidet",
    "rank": 4,
    "budget": "mid",
    "channel": "tw",
    "brand": "KOHLER",
    "model": "C3-430",
    "name": "瞬熱式電腦免治馬桶蓋",
    "price": {
      "currency": "TWD",
      "amount": 12900,
      "converted": 12900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DEDW1HA900FW2KD/000001_1672380333.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEDW1H-A900FW2KD",
    "buyLabel": "PChome",
    "specs": [
      "瞬熱式",
      "UV 除菌",
      "三檔溫控",
      "不鏽鋼噴嘴"
    ],
    "description": "衛浴品牌質感好，UV 除菌與不鏽鋼噴嘴是差異化重點。",
    "pros": [
      "質感佳",
      "UV 除菌加分"
    ],
    "cons": [
      "價格高於入門",
      "需確認座型相容"
    ],
    "bestFor": "重視衛浴品牌與外觀質感。",
    "recommendation": "衛浴整體質感優先，KOHLER 比家電品牌更搭配裝潢。",
    "score": 86,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依通路",
    "tags": [
      "UV",
      "衛浴品牌",
      "瞬熱"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ KOHLER C3-430: Yahoo購物中心 【 麗室衛浴】美國KOHLER C3-430 電腦馬桶蓋 K-22445TW-0 型號/規格不相符；LBJ KOHLER C3-430: Momo富邦購物 (店+)【KOHLER】美國品牌 電腦馬桶便座 免治馬桶 馬桶蓋 電腦便座 C3-430 C3-520 C3-150 型號/規格不相符；LBJ KOHLER C3-430: Yahoo拍賣 - 光伸廚衛居家生活館 (439個評價) KOHLER K-22445TW-0 電腦馬桶蓋-C3™-430 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"KOHLER C3-430\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22KOHLER%20C3-430%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"KOHLER C3-430\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22KOHLER%20C3-430%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-extra-6-dmal6w-a900jnqf2",
    "category": "bidet",
    "rank": 6,
    "budget": "premium",
    "channel": "tw",
    "brand": "TOTO",
    "model": "TCF47160GTW S7",
    "name": "S7 輕奢款 WASHLET 溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 23900,
      "converted": 23900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900JNQF2/000001_1783412715.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900JNQF2",
    "buyLabel": "PChome",
    "specs": [
      "WASHLET",
      "電解除菌水",
      "溫熱便座",
      "S7 輕奢款"
    ],
    "description": "TOTO TCF47160GTW S7 是免治馬桶類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 87,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "TOTO",
      "除菌",
      "高階"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ TOTO TCF47160GTW S7: Momo富邦購物 【TOTO】S7 輕奢款 除菌溫水洗淨便座 TCF47160GTW(電解除菌水/智慧洗淨/溫熱無縫便座/WASHLET/免治馬桶座) 型號/規格不相符；LBJ TOTO TCF47160GTW S7: PCHome購物 TOTO TCF47160GTW S7輕奢款 WASHLET 溫水洗淨便座(噴嘴自潔/智慧洗淨/溫熱便座/S7) 型號/規格不相符；LBJ TOTO TCF47160GTW S7: 蝦皮購物 - 簡單賣生活館 〈原廠保固〉TOTO TCF47160GTW S7系列 輕奢款 附發票 除菌溫水洗淨便座 免治馬桶 溫熱便座 無線遙控 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TOTO TCF47160GTW S7\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22TOTO%20TCF47160GTW%20S7%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TOTO TCF47160GTW S7\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22TOTO%20TCF47160GTW%20S7%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-extra-7-dmal6i-a900jewps",
    "category": "bidet",
    "rank": 7,
    "budget": "mid",
    "channel": "tw",
    "brand": "TOTO",
    "model": "TCF24460ATW C5",
    "name": "C5 藏線式 WASHLET 溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 14300,
      "converted": 14300,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6IA900JEWPS/000001_1765348841.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6I-A900JEWPS",
    "buyLabel": "PChome",
    "specs": [
      "WASHLET",
      "噴嘴自潔",
      "溫熱便座",
      "藏線式"
    ],
    "description": "TOTO TCF24460ATW C5 是免治馬桶類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 86,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "TOTO",
      "藏線",
      "均衡"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ TOTO TCF24460ATW C5: PCHome購物 TOTO TCF24460ATW C5-藏線式 WASHLET 溫水洗淨便座(噴嘴自潔/智慧洗淨/溫熱便座/C5) 型號/規格不相符；LBJ TOTO TCF24460ATW C5: Yahoo拍賣 - DIY居家生活館 (1901個評價) 【超值精選】TOTO 馬桶蓋 TCF24460ATW C5 WASHLET 電腦免治馬桶座|抗菌|溫水|溫座|遙控款 型號/規格不相符；LBJ TOTO TCF24460ATW C5: Yahoo拍賣 - 鑫欣廚房衛浴精品專賣店 (48個評價) 鑫欣◎廚具衛浴第一選擇◎TOTO原廠衛洗麗免治馬桶座C5系列-TCF24410ATW/TCF24460ATW 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TOTO TCF24460ATW C5\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22TOTO%20TCF24460ATW%20C5%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TOTO TCF24460ATW C5\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22TOTO%20TCF24460ATW%20C5%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-extra-8-dmal6w-a900jvx5o",
    "category": "bidet",
    "rank": 8,
    "budget": "mid",
    "channel": "tw",
    "brand": "TOTO",
    "model": "TCF34461GTW S5",
    "name": "S5 除菌溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 17900,
      "converted": 17900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900JVX5O/000001_1775638184.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900JVX5O",
    "buyLabel": "PChome",
    "specs": [
      "電解除菌水",
      "強力除臭",
      "無線遙控",
      "WASHLET"
    ],
    "description": "TOTO TCF34461GTW S5 是免治馬桶類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 85,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "TOTO",
      "除臭",
      "遙控"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ TOTO TCF34461GTW S5: Momo富邦購物 【TOTO】S5 除菌溫水洗淨便座 TCF34461GTW(電解除菌水/強力除臭/無線遙控/WASHLET/免治馬桶座) 型號/規格不相符；LBJ TOTO TCF34461GTW S5: PCHome購物 TOTO S5 除菌溫水洗淨便座 TCF34461GTW(電解除菌水/強力除臭/無線遙控/WASHLET/免治馬桶座) 型號/規格不相符；LBJ TOTO TCF34461GTW S5: Homebox好博家 【Homebox 好博家】TOTO瞬熱式遙控型免治馬桶座S5 電解除菌水/TCF34461GTW 桃竹苗提供安裝服務 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TOTO TCF34461GTW S5\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22TOTO%20TCF34461GTW%20S5%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TOTO TCF34461GTW S5\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22TOTO%20TCF34461GTW%20S5%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-extra-9-dmal6w-a900jw0lw",
    "category": "bidet",
    "rank": 9,
    "budget": "mid",
    "channel": "tw",
    "brand": "TOTO",
    "model": "TCF33161GTW S2",
    "name": "S2 標準款除菌溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 11900,
      "converted": 11900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900JW0LW/000001_1775705407.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900JW0LW",
    "buyLabel": "PChome",
    "specs": [
      "電解除菌水",
      "智慧洗淨",
      "溫熱便座",
      "標準款"
    ],
    "description": "TOTO TCF33161GTW S2 是免治馬桶類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 84,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "TOTO",
      "標準",
      "CP 值"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ TOTO TCF33161GTW S2: Momo富邦購物 【TOTO】S2 標準款 除菌溫水洗淨便座 TCF33161GTW(電解除菌水/智慧洗淨/溫熱便座/WASHLET/免治馬桶座) 型號/規格不相符；LBJ TOTO TCF33161GTW S2: 蝦皮購物 - 張媽媽衛浴 原廠保固有開發票 TOTO S2 瞬熱式 除菌水 TCF33161GTW 溫水洗淨便座 免治馬桶蓋 實體店面 馬桶蓋 型號/規格不相符；LBJ TOTO TCF33161GTW S2: 蝦皮購物 - 簡單賣生活館 〈原廠保固〉TOTO TCF33161GTW S2 標準款 附發票 除菌溫水洗淨便座 免治馬桶 溫熱便座 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TOTO TCF33161GTW S2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22TOTO%20TCF33161GTW%20S2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TOTO TCF33161GTW S2\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22TOTO%20TCF33161GTW%20S2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-extra-10-dmal6i-a900jekad",
    "category": "bidet",
    "rank": 10,
    "budget": "premium",
    "channel": "tw",
    "brand": "TOTO",
    "model": "TCF47360GTW S7",
    "name": "S7 旗艦款 WASHLET 溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 34900,
      "converted": 34900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6IA900JEKAD/000001_1783410655.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6I-A900JEKAD",
    "buyLabel": "PChome",
    "specs": [
      "WASHLET",
      "噴嘴自潔",
      "溫熱便座",
      "旗艦款"
    ],
    "description": "TOTO TCF47360GTW S7 是免治馬桶類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 83,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "TOTO",
      "旗艦",
      "除菌"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ TOTO TCF47360GTW S7: Momo富邦購物 【TOTO】S7 旗艦款 除菌溫水洗淨便座 TCF47360GTW(電解除菌水/智慧洗淨/自動掀蓋/WASHLET/免治馬桶座) 型號/規格不相符；LBJ TOTO TCF47360GTW S7: PCHome購物 TOTO TCF47360GTW S7旗艦款 WASHLET 溫水洗淨便座(噴嘴自潔/智慧洗淨/溫熱便座/S7) 型號/規格不相符；LBJ TOTO TCF47360GTW S7: 蝦皮購物 - 簡單賣生活館 〈原廠保固〉TOTO TCF47360GTW S7系列 旗艦款 附發票 除菌溫水洗淨便座 免治馬桶 溫熱便座 無線遙控 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TOTO TCF47360GTW S7\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22TOTO%20TCF47360GTW%20S7%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TOTO TCF47360GTW S7\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22TOTO%20TCF47360GTW%20S7%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-extra-11-dmal6w-a900jvwi8",
    "category": "bidet",
    "rank": 11,
    "budget": "mid",
    "channel": "tw",
    "brand": "TOTO",
    "model": "TCF33461GTW S2",
    "name": "S2 進階款除菌溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 14900,
      "converted": 14900,
      "confidence": "momo購物 2026-07-14 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900JVWI8/000001_1775634174.jpg",
    "buyUrl": "https://www.momoshop.com.tw/product/14834662",
    "buyLabel": "momo購物",
    "specs": [
      "電解除菌水",
      "強力除臭",
      "暖風烘乾",
      "WASHLET"
    ],
    "description": "TOTO TCF33461GTW S2 是免治馬桶類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 82,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "TOTO",
      "暖風",
      "除臭"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ TOTO TCF33461GTW S2: Momo富邦購物 【TOTO】S2 進階款 除菌溫水洗淨便座 TCF33461GTW(電解除菌水/強力除臭/暖風烘乾/WASHLET/免治馬桶座) 型號/規格不相符；LBJ TOTO TCF33461GTW S2: Homebox好博家 【Homebox 好博家】TOTO瞬熱式免治馬桶座 暖風烘乾 電解除菌水 S2/TCF33461GTW 桃竹苗提供安裝服務 型號/規格不相符；LBJ TOTO TCF33461GTW S2: PCHome購物 TOTO S2 進階款 除菌溫水洗淨便座 TCF33461GTW(電解除菌水/強力除臭/暖風烘乾/WASHLET/免治馬桶座) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TOTO TCF33461GTW S2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22TOTO%20TCF33461GTW%20S2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TOTO TCF33461GTW S2\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22TOTO%20TCF33461GTW%20S2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-extra-12-dmal8l-a900gh6f4",
    "category": "bidet",
    "rank": 12,
    "budget": "value",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "DL-F610RTWS",
    "name": "儲熱式溫水洗淨便座含原廠基本安裝",
    "price": {
      "currency": "TWD",
      "amount": 6990,
      "converted": 6990,
      "confidence": "PChome 2026-07-21 API exact-model 現貨公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL8LA900GH6F4/000001_1724400418.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL8L-A900GH6F4",
    "buyLabel": "PChome",
    "specs": [
      "儲熱式",
      "溫水洗淨",
      "含基本安裝",
      "入門價位"
    ],
    "description": "Panasonic DL-F610RTWS 是免治馬桶類的補充比較型號，依 2026-07-11 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 81,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Panasonic",
      "低價",
      "安裝"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 5911,
      "currency": "TWD",
      "converted": 5911,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1239831169&cgp=6190",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Panasonic 國際牌】儲熱式免治馬桶座．含基本安裝(DL-F610RTWS-TW)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Panasonic 國際牌】儲熱式免治馬桶座．含基本安裝(DL-F610RTWS-TW)」最低價為 NT$5,911，最低點日期 2025-12-21。",
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
          "query": "site:mobile01.com \"Panasonic DL-F610RTWS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20DL-F610RTWS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic DL-F610RTWS\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20DL-F610RTWS%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-extra-13-dmal6w-a900i0l73",
    "category": "bidet",
    "rank": 13,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "DL-RT30TWWS",
    "name": "纖薄美型瞬熱式溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 17900,
      "converted": 17900,
      "confidence": "PChome 2026-07-21 API exact-model 現貨公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900I0L73/000001_1729761324.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900I0L73",
    "buyLabel": "PChome",
    "specs": [
      "瞬熱式",
      "纖薄設計",
      "溫水洗淨",
      "美型"
    ],
    "description": "Panasonic DL-RT30TWWS 是免治馬桶類的補充比較型號，依 2026-07-11 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 80,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Panasonic",
      "瞬熱",
      "設計"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 15111,
      "currency": "TWD",
      "converted": 15111,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=600661263&cgp=15752",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Panasonic 國際牌 微電腦瞬熱洗淨便座DL-RT30TWWS-TW 含標準安裝 大型配送",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - 蝦皮直營 - 3C家電館 / Panasonic 國際牌 微電腦瞬熱洗淨便座DL-RT30TWWS-TW 含標準安裝 大型配送」最低價為 NT$15,111，最低點日期 2025-11-10。",
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
          "query": "site:mobile01.com \"Panasonic DL-RT30TWWS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20DL-RT30TWWS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic DL-RT30TWWS\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20DL-RT30TWWS%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-extra-14-dmal6w-a900jeeze",
    "category": "bidet",
    "rank": 14,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "DL-PU30TWWS",
    "name": "瞬熱式溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 13900,
      "converted": 13900,
      "confidence": "PChome 2026-07-21 API exact-model 現貨公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900JEEZE/000001_1776140283.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900JEEZE",
    "buyLabel": "PChome",
    "specs": [
      "瞬熱式",
      "溫水洗淨",
      "溫控",
      "家用"
    ],
    "description": "Panasonic DL-PU30TWWS 是免治馬桶類的補充比較型號，依 2026-07-11 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 79,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Panasonic",
      "瞬熱",
      "均衡"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 11954,
      "currency": "TWD",
      "converted": 11954,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900JEEZE",
      "sourceTitle": "PChome 商品頁：Panasonic 國際牌 瞬熱式免治馬桶 洗淨便座 DL-PU30TWWS / Panasonic 國際牌 瞬熱式免治馬桶 洗淨便座 DL-PU30TWWS",
      "evidenceSnippet": "PChome 商品 API 於 2026-07-10 回傳同一商品頁「Panasonic 國際牌 瞬熱式免治馬桶 洗淨便座 DL-PU30TWWS / Panasonic 國際牌 瞬熱式免治馬桶 洗淨便座 DL-PU30TWWS」查核價 NT$11,954，低於原先記錄史低。",
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
          "query": "site:mobile01.com \"Panasonic DL-PU30TWWS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20DL-PU30TWWS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic DL-PU30TWWS\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20DL-PU30TWWS%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-extra-15-dmale4-a900fw2kj",
    "category": "bidet",
    "rank": 15,
    "budget": "mid",
    "channel": "tw",
    "brand": "KOHLER",
    "model": "C3-150",
    "name": "C3-150 電腦免治馬桶蓋",
    "price": {
      "currency": "TWD",
      "amount": 14900,
      "converted": 14900,
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMALE4A900FW2KJ/000001_1752829867.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0007866/goodsDetail/TP00078660000269",
    "buyLabel": "momo購物",
    "specs": [
      "瞬熱出水",
      "五檔溫控",
      "不鏽鋼噴嘴",
      "KOHLER"
    ],
    "description": "KOHLER C3-150 是免治馬桶類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 78,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "KOHLER",
      "瞬熱",
      "衛浴品牌"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ KOHLER C3-150: Yahoo購物中心 【麗室衛浴】美國 KOHLER K8297 C3-150 電腦馬桶蓋專用零件固定板1240758-SP 型號/規格不相符；LBJ KOHLER C3-150: Momo富邦購物 (店+)【KOHLER】✦築昂✦美國KOHLER C3-150電腦馬桶蓋 K-8297TW-0 型號/規格不相符；LBJ KOHLER C3-150: Yahoo購物中心 【 麗室衛浴】美國 KOHLER K-8297 電腦馬桶蓋 C3-150 (110V/60HZ) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"KOHLER C3-150\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22KOHLER%20C3-150%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"KOHLER C3-150\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22KOHLER%20C3-150%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-extra-16-dmbm0ma900g29jm",
    "category": "bidet",
    "rank": 16,
    "budget": "value",
    "channel": "tw",
    "brand": "JTAccord",
    "model": "JT-261C",
    "name": "儲熱式省電溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 7088,
      "converted": 7088,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM0MA900G29JM/000001_1676948545.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM0M-A900G29JM",
    "buyLabel": "PChome",
    "specs": [
      "儲熱式",
      "標準版型",
      "省電模式",
      "基本安裝需確認"
    ],
    "description": "JTAccord JT-261C 補進本分類比較池，重點是儲熱式、標準版型、省電模式，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "價格比日系高階款低",
      "功能簡單好上手"
    ],
    "cons": [
      "品牌能見度較低",
      "功能不如瞬熱高階款"
    ],
    "bestFor": "想把免治馬桶比較池補齊，並優先看台灣通路新品與售後的人。",
    "recommendation": "補充推薦：儲熱式省電溫水洗淨便座 的優勢在價格比日系高階款低，但仍建議把品牌能見度較低納入取捨。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "儲熱式",
      "CP 值",
      "免治"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 5670,
      "currency": "TWD",
      "converted": 5670,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1112735689&cgp=5670",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【JTAccord 台灣吉田】儲熱式省電溫水洗淨免治馬桶便座JT-261C(標準版型/未含安裝)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【JTAccord 台灣吉田】儲熱式省電溫水洗淨免治馬桶便座JT-261C(標準版型/未含安裝)」最低價為 NT$5,670，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"JTAccord JT-261C\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22JTAccord%20JT-261C%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"JTAccord JT-261C\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22JTAccord%20JT-261C%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-extra-17-dmal6wa900iz8tm",
    "category": "bidet",
    "rank": 17,
    "budget": "mid",
    "channel": "tw",
    "brand": "HEGLL",
    "model": "HE-0535",
    "name": "遙控型微電腦免治馬桶蓋",
    "price": {
      "currency": "TWD",
      "amount": 9903,
      "converted": 9903,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900IZ8TM/000001_1750927262.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900IZ8TM",
    "buyLabel": "PChome",
    "specs": [
      "遙控型",
      "微電腦控制",
      "溫水洗淨",
      "不含安裝"
    ],
    "description": "HEGLL HE-0535 補進本分類比較池，重點是遙控型、微電腦控制、溫水洗淨，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "遙控操作方便",
      "價格落在萬元內"
    ],
    "cons": [
      "需另評估安裝費",
      "售後口碑需看通路"
    ],
    "bestFor": "想把免治馬桶比較池補齊，並優先看台灣通路新品與售後的人。",
    "recommendation": "補充推薦：遙控型微電腦免治馬桶蓋 的優勢在遙控操作方便，但仍建議把需另評估安裝費納入取捨。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "遙控",
      "免治",
      "中價位"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ HEGLL HE-0535: Momo富邦購物 【HEGLL 恒潔】遙控型微電腦免治馬桶蓋(HE-0535 不含安裝) 型號/規格不相符；LBJ HEGLL HE-0535: PCHome購物 【HEGLL 恒潔】遙控型微電腦免治馬桶蓋(HE-0535 不含安裝) 型號/規格不相符；BigGo DMAL6W-A900IZ8TM: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DMAL6W-A900IZ8TM/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HEGLL HE-0535\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HEGLL%20HE-0535%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HEGLL HE-0535\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HEGLL%20HE-0535%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-extra-18-dmalcca900j0ybz",
    "category": "bidet",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "brand": "HCG",
    "model": "AF830",
    "name": "儲熱式免治沖洗馬桶座",
    "price": {
      "currency": "TWD",
      "amount": 8145,
      "converted": 8145,
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMALCCA900J0YBZ/000001_1752215704.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0009253/goodsDetail/TP00092530000302",
    "buyLabel": "momo購物",
    "specs": [
      "47cm",
      "儲熱式",
      "沖洗馬桶座",
      "不含安裝"
    ],
    "description": "HCG AF830 補進本分類比較池，重點是47cm、儲熱式、沖洗馬桶座，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "台灣衛浴品牌維修相對好找",
      "尺寸與安裝資訊清楚"
    ],
    "cons": [
      "儲熱式較占電",
      "功能偏基本"
    ],
    "bestFor": "想把免治馬桶比較池補齊，並優先看台灣通路新品與售後的人。",
    "recommendation": "補充推薦：儲熱式免治沖洗馬桶座 的優勢在台灣衛浴品牌維修相對好找，但仍建議把儲熱式較占電納入取捨。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "台灣售後",
      "儲熱式",
      "免治"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 8145,
      "currency": "TWD",
      "converted": 8145,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1267545185&cgp=8145",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【HCG 和成】AF830 儲熱式 免治沖洗馬桶座 47cm AW白色 110V 不含安裝",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【HCG 和成】AF830 儲熱式 免治沖洗馬桶座 47cm AW白色 110V 不含安裝」最低價為 NT$8,145，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"HCG AF830\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HCG%20AF830%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HCG AF830\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HCG%20AF830%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-extra-19-dmal6wa900iz94o",
    "category": "bidet",
    "rank": 19,
    "budget": "mid",
    "channel": "tw",
    "brand": "HEGLL",
    "model": "HE-0625",
    "name": "按鍵型微電腦免治馬桶蓋",
    "price": {
      "currency": "TWD",
      "amount": 15991,
      "converted": 15991,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900IZ94O/000001_1750930491.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900IZ94O",
    "buyLabel": "PChome",
    "specs": [
      "按鍵型",
      "微電腦控制",
      "溫水洗淨",
      "不含安裝"
    ],
    "description": "HEGLL HE-0625 補進本分類比較池，重點是按鍵型、微電腦控制、溫水洗淨，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "按鍵直覺",
      "價位可控"
    ],
    "cons": [
      "少了遙控便利性",
      "安裝條件需自行確認"
    ],
    "bestFor": "想把免治馬桶比較池補齊，並優先看台灣通路新品與售後的人。",
    "recommendation": "補充推薦：按鍵型微電腦免治馬桶蓋 的優勢在按鍵直覺，但仍建議把少了遙控便利性納入取捨。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "按鍵",
      "免治",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ HEGLL HE-0625: Momo富邦購物 【HEGLL 恒潔】按鍵型微電腦免治馬桶蓋(HE-0625 不含安裝) 型號/規格不相符；LBJ HEGLL HE-0625: PCHome購物 【HEGLL 恒潔】按鍵型微電腦免治馬桶蓋(HE-0625 不含安裝) 型號/規格不相符；BigGo DMAL6W-A900IZ94O: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DMAL6W-A900IZ94O/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HEGLL HE-0625\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HEGLL%20HE-0625%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HEGLL HE-0625\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HEGLL%20HE-0625%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-extra-20-dmal6wa900iz8yl",
    "category": "bidet",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "HEGLL",
    "model": "HE-0635",
    "name": "遙控型微電腦免治馬桶蓋",
    "price": {
      "currency": "TWD",
      "amount": 17490,
      "converted": 17490,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900IZ8YL/000001_1750929762.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900IZ8YL",
    "buyLabel": "PChome",
    "specs": [
      "遙控型",
      "微電腦控制",
      "溫水洗淨",
      "不含安裝"
    ],
    "description": "HEGLL HE-0635 補進本分類比較池，重點是遙控型、微電腦控制、溫水洗淨，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "遙控和基本洗淨功能完整",
      "價格仍低於多數旗艦款"
    ],
    "cons": [
      "通路保固條款需確認",
      "質感不如 TOTO/Panasonic 高階款"
    ],
    "bestFor": "想把免治馬桶比較池補齊，並優先看台灣通路新品與售後的人。",
    "recommendation": "補充推薦：遙控型微電腦免治馬桶蓋 的優勢在遙控和基本洗淨功能完整，但仍建議把通路保固條款需確認納入取捨。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "遙控",
      "免治",
      "中價位"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ HEGLL HE-0635: Momo富邦購物 【HEGLL 恒潔】遙控型微電腦免治馬桶蓋(HE-0635 不含安裝) 型號/規格不相符；LBJ HEGLL HE-0635: PCHome購物 【HEGLL 恒潔】遙控型微電腦免治馬桶蓋(HE-0635 不含安裝) 型號/規格不相符；BigGo DMAL6W-A900IZ8YL: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DMAL6W-A900IZ8YL/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HEGLL HE-0635\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HEGLL%20HE-0635%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HEGLL HE-0635\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HEGLL%20HE-0635%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "bidet-costco-us-brondell-cl1700",
    "category": "bidet",
    "rank": 21,
    "budget": "mid",
    "channel": "global",
    "brand": "Brondell",
    "model": "Swash CL1700",
    "name": "Bidet Toilet Seat",
    "price": {
      "currency": "USD",
      "amount": 399.99,
      "converted": 12931,
      "confidence": "Costco US 2026-07-21 來源價；ExchangeRate-API 2026-07-21 匯率換算"
    },
    "image": "https://bfasset.costco-static.com/U447IH35/as/k83n76pfjhvqcf9gfrz74sx/1432187-847__1?auto=webp&format=jpg",
    "buyUrl": "https://www.costco.com/brondell-swash-cl1700-bidet-toilet-seat.product.100648788.html",
    "buyLabel": "Costco US",
    "specs": [
      "溫水洗淨便座",
      "遙控/電動式",
      "美規 elongated 座型",
      "Costco US 3,994 則評論",
      "需確認 120V、馬桶尺寸與安裝"
    ],
    "description": "台灣 Costco 未找到明確免治馬桶新品頁，故補入 Costco US 高評論的 Brondell Swash CL1700 作海外參考。",
    "pros": [
      "Costco US 評論量非常高",
      "價格相對 TOTO 高階款低"
    ],
    "cons": [
      "美規 120V 與 elongated 尺寸不一定適合台灣馬桶",
      "未含國際運費、進口稅與台灣保固"
    ],
    "bestFor": "可自行確認尺寸、電壓與保固風險的海外採購使用者。",
    "recommendation": "好市多海外補充：CL1700 評論量高，可作為 Costco US 免治便座價格參考，不建議未確認尺寸就直接下單。",
    "score": 84,
    "voltage": "美規 120V；需確認台灣插座、接地與馬桶尺寸",
    "warranty": "Costco US / 海外通路，可能無台灣保固",
    "tags": [
      "Costco US",
      "免治",
      "海外參考"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "USD",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-09",
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：BigGo Brondell Swash CL1700: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/Brondell%20Swash%20CL1700/product?p=1；BigGo Swash CL1700: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/Swash%20CL1700/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Brondell Swash CL1700\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Brondell%20Swash%20CL1700%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Brondell Swash CL1700\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Brondell%20Swash%20CL1700%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  }
]);
})();

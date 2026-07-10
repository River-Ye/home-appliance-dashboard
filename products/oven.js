(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("oven", [
  {
    "id": "oven-panasonic-bs607",
    "category": "oven",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "NN-BS607",
    "name": "27L 蒸烘烤微波爐",
    "price": {
      "currency": "TWD",
      "amount": 12490,
      "converted": 12490,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ021900HFATV/000001_1779702402.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ02-1900HFATV",
    "buyLabel": "PChome",
    "specs": [
      "27L",
      "微波 + 蒸氣 + 烘烤",
      "平台式",
      "變頻"
    ],
    "description": "一台整合微波、蒸、烤，對家電櫃空間有限的人最實用。",
    "pros": [
      "功能完整",
      "尺寸比 30L 旗艦友善"
    ],
    "cons": [
      "氣炸效果不如專門氣炸鍋",
      "內腔清潔需勤快"
    ],
    "bestFor": "小家庭、家電櫃有限、需要微波與蒸烤合一。",
    "recommendation": "綜合推薦：Panasonic NN-BS607 價格中段、蒸烤微波功能完整且售後穩，小家電櫃一台抵多台最均衡。",
    "score": 92,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "多合一",
      "蒸烤",
      "變頻"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 12490,
      "currency": "TWD",
      "converted": 12490,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMBJ02-1900HFATV",
      "sourceTitle": "PChome 商品 API：Panasonic 國際牌 27L蒸烘烤微波爐 NN-BS607 / Panasonic 國際牌 27L蒸烘烤微波爐 NN-BS607",
      "evidenceSnippet": "PChome 商品 API 於 2026-07-10 回傳同一商品頁「Panasonic 國際牌 27L蒸烘烤微波爐 NN-BS607 / Panasonic 國際牌 27L蒸烘烤微波爐 NN-BS607」查核價 NT$12,490，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-10",
      "note": "採用可信通路同一商品頁可公開查核現價作為本次觀測到的最低價；同型號/規格並排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic NN-BS607\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Panasonic%20NN-BS607%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Panasonic NN-BS607\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Panasonic%20NN-BS607%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-whirlpool-mwp269",
    "category": "oven",
    "rank": 2,
    "budget": "mid",
    "channel": "tw",
    "brand": "Whirlpool",
    "model": "MWP269TMT",
    "name": "26L 8 合 1 變頻氣炸蒸烤微波爐",
    "price": {
      "currency": "TWD",
      "amount": 19502,
      "converted": 19502,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ02A900J1WEX/000001_1753093870.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ02-A900J1WEX",
    "buyLabel": "PChome",
    "specs": [
      "26L",
      "微波/氣炸/蒸烤",
      "8 合 1",
      "變頻"
    ],
    "description": "功能名單很完整，特別適合明確想把氣炸鍋也整併掉的人。",
    "pros": [
      "氣炸整合",
      "容量與價格均衡"
    ],
    "cons": [
      "操作學習成本較高",
      "氣炸大量食材不如專用機"
    ],
    "bestFor": "想省掉微波爐、烤箱、氣炸鍋三台設備。",
    "recommendation": "若你最在意多合一功能，Whirlpool 比純蒸烘烤機更貼近需求。",
    "score": 90,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "氣炸",
      "多合一",
      "變頻"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 16900,
      "currency": "TWD",
      "converted": 16900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1256872026&cgp=16900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Whirlpool惠而浦 26L 8合1變頻氣炸蒸烤微波爐 MWP269TMT(雲霧白)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / Whirlpool惠而浦 26L 8合1變頻氣炸蒸烤微波爐 MWP269TMT(雲霧白)」最低價為 NT$16,900，最低點日期 2026-07-03。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Whirlpool MWP269TMT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Whirlpool%20MWP269TMT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Whirlpool MWP269TMT\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Whirlpool%20MWP269TMT%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-panasonic-bs807",
    "category": "oven",
    "rank": 3,
    "budget": "premium",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "NN-BS807",
    "name": "30L 蒸氣烘烤微波爐",
    "price": {
      "currency": "TWD",
      "amount": 19399,
      "converted": 19399,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ02A900IXED0/000001_1749708993.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ02-A900IXED0",
    "buyLabel": "PChome",
    "specs": [
      "30L",
      "蒸氣烘烤",
      "微波",
      "平台式"
    ],
    "description": "容量更大、烹調彈性更高，適合常備餐或一次料理較多份量。",
    "pros": [
      "容量與火力更充裕",
      "Panasonic 食譜資源多"
    ],
    "cons": [
      "價格高",
      "家電櫃需確認散熱與尺寸"
    ],
    "bestFor": "常下廚、備餐、需要 30L 容量。",
    "recommendation": "若櫃體放得下，BS807 比 27L 更適合長期主力使用。",
    "score": 89,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "30L",
      "蒸烤",
      "主力機"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 19399,
      "currency": "TWD",
      "converted": 19399,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1237928674&cgp=19399",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Panasonic 國際牌】30L蒸烘烤微波爐(NN-BS807)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Panasonic 國際牌】30L蒸烘烤微波爐(NN-BS807)」最低價為 NT$19,399，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic NN-BS807\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Panasonic%20NN-BS807%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Panasonic NN-BS807\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Panasonic%20NN-BS807%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-sharp-xp10",
    "category": "oven",
    "rank": 4,
    "budget": "premium",
    "channel": "tw",
    "brand": "SHARP",
    "model": "AX-XP10T",
    "name": "30L Healsio 炙燒水波爐",
    "price": {
      "currency": "TWD",
      "amount": 28800,
      "converted": 28800,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ021900I5KFC/000001_1779346148.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ02-1900I5KFC",
    "buyLabel": "PChome",
    "specs": [
      "30L",
      "水波爐",
      "蒸氣烘烤微波",
      "炙燒"
    ],
    "description": "水波爐在蒸烤與減油料理上有特色，適合重視健康烹調的人。",
    "pros": [
      "蒸氣料理強",
      "烤色與水波特色明顯"
    ],
    "cons": [
      "價格高",
      "清潔與水箱維護較費心"
    ],
    "bestFor": "健康蒸烤、減油料理與多樣食譜。",
    "recommendation": "喜歡蒸氣烹調與水波爐料理邏輯，SHARP 很有代表性。",
    "score": 87,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "水波爐",
      "蒸氣",
      "健康料理"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 26618,
      "currency": "TWD",
      "converted": 26618,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1113850119&cgp=27600",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【SHARP 夏普】30L Healsio炙燒水波爐-番茄紅(AX-XP10T-R)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【SHARP 夏普】30L Healsio炙燒水波爐-番茄紅(AX-XP10T-R)」最低價為 NT$26,618，最低點日期 2026-06-22。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SHARP AX-XP10T\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22SHARP%20AX-XP10T%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"SHARP AX-XP10T\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22SHARP%20AX-XP10T%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-breville-joule",
    "category": "oven",
    "rank": 5,
    "budget": "premium",
    "channel": "global",
    "brand": "Breville",
    "model": "Joule Oven Air Fryer Pro",
    "name": "智慧氣炸烤箱",
    "price": {
      "currency": "USD",
      "amount": 499.95,
      "converted": 16048,
      "confidence": "海外可信通路參考價"
    },
    "image": "https://cdn11.bigcommerce.com/s-ihwnd7z21q/images/stencil/640w/products/1251/4666/212814_JouleOvenAirFryer1__10534.1724079466.jpg?c=1",
    "buyUrl": "https://www.breville.com/us/en/products/ovens/bov950.html",
    "buyLabel": "Breville 官方",
    "specs": [
      "氣炸/烘烤",
      "智慧食譜",
      "大容量",
      "App 輔助"
    ],
    "description": "海外評價高的智慧烤箱，但不是微波爐，且 120V/保固風險需確認。",
    "pros": [
      "烤箱與氣炸能力強",
      "智慧食譜體驗佳"
    ],
    "cons": [
      "不能微波",
      "海外運稅與保固風險"
    ],
    "bestFor": "已經有微波爐、想升級高階氣炸烤箱的人。",
    "recommendation": "海外參考：烤箱能力強，但不符合一台取代微波爐的需求時要小心。",
    "score": 80,
    "voltage": "海外 120V，需確認插頭與保固",
    "warranty": "可能無台灣保固",
    "tags": [
      "海外",
      "氣炸",
      "智慧"
    ],
    "releaseDate": "2022-03-29",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：BigGo Breville Joule Oven Air Fryer Pro: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/Breville%20Joule%20Oven%20Air%20Fryer%20Pro/product?p=1；BigGo Joule Oven Air Fryer Pro: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/Joule%20Oven%20Air%20Fryer%20Pro/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Breville Joule Oven Air Fryer Pro\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Breville%20Joule%20Oven%20Air%20Fryer%20Pro%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Breville Joule Oven Air Fryer Pro\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Breville%20Joule%20Oven%20Air%20Fryer%20Pro%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-extra-6-dmbj02-a900i9lq2",
    "category": "oven",
    "rank": 6,
    "budget": "value",
    "channel": "tw",
    "brand": "only",
    "model": "OM27-M54",
    "name": "微波大師 27L 氣炸烤箱微波爐",
    "price": {
      "currency": "TWD",
      "amount": 8990,
      "converted": 8990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ02A900I9LQ2/000001_1782379010.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ02-A900I9LQ2",
    "buyLabel": "PChome",
    "specs": [
      "27L",
      "微波/烤箱/氣炸",
      "乾果/舒肥/優格",
      "質感黑"
    ],
    "description": "only OM27-M54 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "多合一",
      "CP 值",
      "小家庭"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 6810,
      "currency": "TWD",
      "converted": 6810,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1237709323&cgp=8990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【only這夏不煩了~省電又優惠！】only微波大師27L氣炸烤箱微波爐OM27-M54質感黑(節能標章27公升/乾果/舒肥/優格/氣炸鍋)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「東森購物 / 【only這夏不煩了~省電又優惠！】only微波大師27L氣炸烤箱微波爐OM27-M54質感黑(節能標章27公升/乾果/舒肥/優格/氣炸鍋)」最低價為 NT$6,810，最低點日期 2026-01-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"only OM27-M54\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22only%20OM27-M54%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"only OM27-M54\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22only%20OM27-M54%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-extra-7-dmbj6g-a900j947g",
    "category": "oven",
    "rank": 7,
    "budget": "value",
    "channel": "tw",
    "brand": "Cuisinart",
    "model": "AMW-90TW",
    "name": "25.5L 旗艦級三合一多功能微波氣炸烤箱",
    "price": {
      "currency": "TWD",
      "amount": 9999,
      "converted": 9999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ6GA900J947G/000001_1757918714.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ6G-A900J947G",
    "buyLabel": "PChome",
    "specs": [
      "25.5L",
      "微波",
      "氣炸",
      "烤箱"
    ],
    "description": "Cuisinart AMW-90TW 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Cuisinart",
      "多合一",
      "CP 值"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 7618,
      "currency": "TWD",
      "converted": 7618,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1198493665&cgp=8699",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Cuisinart 美膳雅】25.5L三合一微波氣炸烤箱/微波爐(AMW-90TW)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Cuisinart 美膳雅】25.5L三合一微波氣炸烤箱/微波爐(AMW-90TW)」最低價為 NT$7,618，最低點日期 2026-06-17。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Cuisinart AMW-90TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Cuisinart%20AMW-90TW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Cuisinart AMW-90TW\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Cuisinart%20AMW-90TW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-extra-8-dmbj7p-1900hci3e",
    "category": "oven",
    "rank": 8,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "NN-BS1700",
    "name": "30L 蒸氣烘烤微波爐",
    "price": {
      "currency": "TWD",
      "amount": 26900,
      "converted": 26900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ7P1900HCI3E/000001_1782972848.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ7P-1900HCI3E",
    "buyLabel": "PChome",
    "specs": [
      "30L",
      "蒸氣烘烤",
      "微波",
      "高階水波爐"
    ],
    "description": "Panasonic NN-BS1700 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Panasonic",
      "蒸烤",
      "旗艦"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 26200,
      "currency": "TWD",
      "converted": 26200,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1248393152&cgp=27900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Panasonic 國際牌】30L蒸烘烤微波爐(NN-BS1700)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Panasonic 國際牌】30L蒸烘烤微波爐(NN-BS1700)」最低價為 NT$26,200，最低點日期 2025-11-11。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic NN-BS1700\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Panasonic%20NN-BS1700%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Panasonic NN-BS1700\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Panasonic%20NN-BS1700%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-extra-9-dmbj03-a900iyx0l",
    "category": "oven",
    "rank": 9,
    "budget": "mid",
    "channel": "tw",
    "brand": "Whirlpool",
    "model": "MWP329TST",
    "name": "Coloris 系列 32L 8 合 1 變頻氣炸蒸烤微波爐",
    "price": {
      "currency": "TWD",
      "amount": 26362,
      "converted": 26362,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ03A900IYX0L/000001_1750758530.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ03-A900IYX0L",
    "buyLabel": "PChome",
    "specs": [
      "32L",
      "8 合 1",
      "變頻",
      "氣炸蒸烤微波"
    ],
    "description": "Whirlpool MWP329TST 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Whirlpool",
      "32L",
      "多合一"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 22900,
      "currency": "TWD",
      "converted": 22900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1256717462&cgp=22900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Whirlpool惠而浦 32L 8合1變頻氣炸蒸烤微波爐 MWP329TST (大地棕)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / Whirlpool惠而浦 32L 8合1變頻氣炸蒸烤微波爐 MWP329TST (大地棕)」最低價為 NT$22,900，最低點日期 2026-07-03。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Whirlpool MWP329TST\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Whirlpool%20MWP329TST%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Whirlpool MWP329TST\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Whirlpool%20MWP329TST%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-extra-10-dmbm0g-a900hf91a",
    "category": "oven",
    "rank": 10,
    "budget": "value",
    "channel": "tw",
    "brand": "Cuisinart",
    "model": "CSO-500TW",
    "name": "20L 多功能蒸氣氣炸烤箱",
    "price": {
      "currency": "TWD",
      "amount": 10260,
      "converted": 10260,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM0GA900HF91A/000001_1768545220.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM0G-A900HF91A",
    "buyLabel": "PChome",
    "specs": [
      "20L",
      "蒸氣",
      "氣炸",
      "烘焙"
    ],
    "description": "Cuisinart CSO-500TW 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Cuisinart",
      "氣炸",
      "蒸氣"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 9999,
      "currency": "TWD",
      "converted": 9999,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1214254926&cgp=9999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Cuisinart 美膳雅】20L多功能蒸氣氣炸烤箱(CSO-500TW)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Cuisinart 美膳雅】20L多功能蒸氣氣炸烤箱(CSO-500TW)」最低價為 NT$9,999，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Cuisinart CSO-500TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Cuisinart%20CSO-500TW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Cuisinart CSO-500TW\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Cuisinart%20CSO-500TW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-extra-11-dmbj6q-a900eo5dh",
    "category": "oven",
    "rank": 11,
    "budget": "value",
    "channel": "tw",
    "brand": "Whirlpool",
    "model": "WSO2500B",
    "name": "25 公升獨立式蒸烤爐",
    "price": {
      "currency": "TWD",
      "amount": 9999,
      "converted": 9999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ6QA900EO5DH/000001_1704094465.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ6Q-A900EO5DH",
    "buyLabel": "PChome",
    "specs": [
      "25L",
      "蒸烤",
      "舒肥",
      "低溫發酵"
    ],
    "description": "Whirlpool WSO2500B 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Whirlpool",
      "蒸烤",
      "小家庭"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 8699,
      "currency": "TWD",
      "converted": 8699,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1115702197&cgp=9999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Whirlpool 惠而浦】☆25公升獨立萬用式蒸烤爐WSO2500B(蒸氣.烘烤.旋風.發酵.烘培.附食譜)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Whirlpool 惠而浦】☆25公升獨立萬用式蒸烤爐WSO2500B(蒸氣.烘烤.旋風.發酵.烘培.附食譜)」最低價為 NT$8,699，最低點日期 2023-12-10。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Whirlpool WSO2500B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Whirlpool%20WSO2500B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Whirlpool WSO2500B\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Whirlpool%20WSO2500B%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-extra-12-dmbm0g-a900g41cw",
    "category": "oven",
    "rank": 12,
    "budget": "premium",
    "channel": "tw",
    "brand": "SHARP",
    "model": "AX-XW10T",
    "name": "AIoT 智慧連網 30L 水波爐蒸氣烘烤微波爐",
    "price": {
      "currency": "TWD",
      "amount": 36860,
      "converted": 36860,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM0GA900G41CW/000001_1780306175.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM0G-A900G41CW",
    "buyLabel": "PChome",
    "specs": [
      "30L",
      "水波爐",
      "AIoT",
      "蒸氣烘烤微波"
    ],
    "description": "SHARP AX-XW10T 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 81,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "SHARP",
      "水波爐",
      "旗艦"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 35550,
      "currency": "TWD",
      "converted": 35550,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1258356320&cgp=38800",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【SHARP 夏普】30L Healsio AIoT智慧連網水波爐-星燦銀(AX-XW10T-S)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【SHARP 夏普】30L Healsio AIoT智慧連網水波爐-星燦銀(AX-XW10T-S)」最低價為 NT$35,550，最低點日期 2026-06-27。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SHARP AX-XW10T\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22SHARP%20AX-XW10T%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"SHARP AX-XW10T\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22SHARP%20AX-XW10T%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-extra-13-dmbj7p-1900hcm99",
    "category": "oven",
    "rank": 13,
    "budget": "value",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "NU-SC180B",
    "name": "20L 蒸氣烘烤爐",
    "price": {
      "currency": "TWD",
      "amount": 9990,
      "converted": 9990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ7P1900HCM99/000001_1780393215.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ7P-1900HCM99",
    "buyLabel": "PChome",
    "specs": [
      "20L",
      "蒸氣烘烤",
      "18 項自動菜單",
      "120 度快速蒸"
    ],
    "description": "Panasonic NU-SC180B 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Panasonic",
      "蒸氣",
      "省空間"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Panasonic NU-SC180B: 樂天市場 - Panasonic授權新北新莊淯麒電器 Panasonic授權新北新莊淯麒電器 現貨領券獨家最高9折 Panasonic 蒸氣烘烤爐NU-SC180B 型號/規格不相符；LBJ Panasonic NU-SC180B: Momo富邦購物 (店+)【Panasonic 國際牌】Panasonic國際牌20公升蒸氣烘烤爐NU-SC180B 型號/規格不相符；LBJ Panasonic NU-SC180B: 樂天市場 - Panasonic授權新竹東區誼鴻電器 Panasonic授權新竹東區誼鴻電器 Panasonic 蒸氣烘烤爐NU-SC180B 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic NU-SC180B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Panasonic%20NU-SC180B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Panasonic NU-SC180B\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Panasonic%20NU-SC180B%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-extra-14-dmbj0r-a900jt4zv",
    "category": "oven",
    "rank": 14,
    "budget": "mid",
    "channel": "tw",
    "brand": "SHARP",
    "model": "AX-XS10T",
    "name": "31L 極智烘烤系列水波爐",
    "price": {
      "currency": "TWD",
      "amount": 24900,
      "converted": 24900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ0RA900JT4ZV/000001_1781238451.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ0R-A900JT4ZV",
    "buyLabel": "PChome",
    "specs": [
      "31L",
      "極智烘烤",
      "水波爐",
      "黑/白"
    ],
    "description": "SHARP AX-XS10T 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 79,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "SHARP",
      "31L",
      "均衡"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 22900,
      "currency": "TWD",
      "converted": 22900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=543539465&cgp=23900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【77限時優惠】SHARP夏普 AX-XS10T 31L 極智烘烤系列 水波爐 全新公司貨",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - 集盛電器旗艦館 / 【77限時優惠】SHARP夏普 AX-XS10T 31L 極智烘烤系列 水波爐 全新公司貨」最低價為 NT$22,900，最低點日期 2026-06-26。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SHARP AX-XS10T\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22SHARP%20AX-XS10T%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"SHARP AX-XS10T\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22SHARP%20AX-XS10T%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-extra-15-dmbj6q-a900eo9m8",
    "category": "oven",
    "rank": 15,
    "budget": "value",
    "channel": "tw",
    "brand": "Whirlpool",
    "model": "WSO322EB",
    "name": "32 公升獨立式萬用蒸烤爐",
    "price": {
      "currency": "TWD",
      "amount": 15484,
      "converted": 15484,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ6QA900EO9M8/000001_1716271473.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ6Q-A900EO9M8",
    "buyLabel": "PChome",
    "specs": [
      "32L",
      "蒸氣",
      "烘烤",
      "旋風"
    ],
    "description": "Whirlpool WSO322EB 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Whirlpool",
      "32L",
      "蒸烤"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 13800,
      "currency": "TWD",
      "converted": 13800,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1220958919&cgp=14800",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Whirlpool 惠而浦】32公升獨立式萬用蒸烤爐WSO322EB(蒸氣.烘烤.旋風.發酵.烘培.附食譜)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Whirlpool 惠而浦】32公升獨立式萬用蒸烤爐WSO322EB(蒸氣.烘烤.旋風.發酵.烘培.附食譜)」最低價為 NT$13,800，最低點日期 2026-06-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Whirlpool WSO322EB\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Whirlpool%20WSO322EB%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Whirlpool WSO322EB\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Whirlpool%20WSO322EB%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-extra-16-dmbj8ja900h3u40",
    "category": "oven",
    "rank": 16,
    "budget": "mid",
    "channel": "tw",
    "brand": "LG",
    "model": "MJ3965BCP",
    "name": "39L 智慧變頻蒸烘烤微波爐",
    "price": {
      "currency": "TWD",
      "amount": 15900,
      "converted": 15900,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ8JA900H3U40/000001_1749176905.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ8J-A900H3U40",
    "buyLabel": "PChome",
    "specs": [
      "39L",
      "變頻微波",
      "蒸烘烤",
      "大容量"
    ],
    "description": "LG MJ3965BCP 補進本分類比較池，重點是39L、變頻微波、蒸烘烤，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "容量大、功能整合高",
      "適合取代微波爐與小烤箱"
    ],
    "cons": [
      "機身較大",
      "價格高於一般微波爐"
    ],
    "bestFor": "家電櫃空間有限，希望一台整合微波、蒸、烤、氣炸的人。",
    "recommendation": "補充推薦：39L 智慧變頻蒸烘烤微波爐 的優勢在容量大、功能整合高，但仍建議把機身較大納入取捨。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "蒸烘烤",
      "大容量",
      "變頻"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 14900,
      "currency": "TWD",
      "converted": 14900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1237158192&cgp=14900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【LG 樂金】39L智慧變頻蒸烘烤微波爐(MJ3965BCP)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【LG 樂金】39L智慧變頻蒸烘烤微波爐(MJ3965BCP)」最低價為 NT$14,900，最低點日期 2026-07-03。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG MJ3965BCP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22LG%20MJ3965BCP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"LG MJ3965BCP\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22LG%20MJ3965BCP%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-extra-17-dmbj0fa900aex9t",
    "category": "oven",
    "rank": 17,
    "budget": "mid",
    "channel": "tw",
    "brand": "HITACHI",
    "model": "MRO-VS700T",
    "name": "22L 過熱水蒸氣烘烤微波爐",
    "price": {
      "currency": "TWD",
      "amount": 14900,
      "converted": 14900,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ0FA900AEX9T/000001_1765349539.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ0F-A900AEX9T",
    "buyLabel": "PChome",
    "specs": [
      "22L",
      "過熱水蒸氣",
      "微波/烘烤",
      "日系"
    ],
    "description": "HITACHI MRO-VS700T 補進本分類比較池，重點是22L、過熱水蒸氣、微波/烘烤，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "水蒸氣料理彈性好",
      "體積比 30L 旗艦更好擺"
    ],
    "cons": [
      "容量有限",
      "操作學習成本較高"
    ],
    "bestFor": "家電櫃空間有限，希望一台整合微波、蒸、烤、氣炸的人。",
    "recommendation": "補充推薦：22L 過熱水蒸氣烘烤微波爐 的優勢在水蒸氣料理彈性好，但仍建議把容量有限納入取捨。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "水蒸氣",
      "日系",
      "22L"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 14900,
      "currency": "TWD",
      "converted": 14900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1257411117&cgp=14900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【HITACHI 日立】22L過熱水蒸氣烘烤微波爐MRO-VS700T-R(預購)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【HITACHI 日立】22L過熱水蒸氣烘烤微波爐MRO-VS700T-R(預購)」最低價為 NT$14,900，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HITACHI MRO-VS700T\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22HITACHI%20MRO-VS700T%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"HITACHI MRO-VS700T\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22HITACHI%20MRO-VS700T%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-extra-18-dmbm1pa900garya",
    "category": "oven",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "brand": "HITACHI",
    "model": "MROS800AT",
    "name": "過熱水蒸氣烘烤微波爐",
    "price": {
      "currency": "TWD",
      "amount": 21900,
      "converted": 21900,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ031900I80DM/000001_1778655849.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ03-1900I80DM",
    "buyLabel": "PChome",
    "specs": [
      "過熱水蒸氣",
      "烘烤微波",
      "高階日系",
      "多功能"
    ],
    "description": "HITACHI MROS800AT 補進本分類比較池，重點是過熱水蒸氣、烘烤微波、高階日系，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "功能比入門水波爐完整",
      "適合常做烤蒸料理"
    ],
    "cons": [
      "價格不低",
      "需要時間熟悉菜單"
    ],
    "bestFor": "家電櫃空間有限，希望一台整合微波、蒸、烤、氣炸的人。",
    "recommendation": "補充推薦：過熱水蒸氣烘烤微波爐 的優勢在功能比入門水波爐完整，但仍建議把價格不低納入取捨。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "水波爐",
      "高階",
      "日系"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 21900,
      "currency": "TWD",
      "converted": 21900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1257517653&cgp=21900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【HITACHI 日立】HITACHI 日立 31L 過熱水蒸氣烘烤微波爐 泰國製 MROS800AT / MRO-S800AT",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【HITACHI 日立】HITACHI 日立 31L 過熱水蒸氣烘烤微波爐 泰國製 MROS800AT / MRO-S800AT」最低價為 NT$21,900，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HITACHI MROS800AT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22HITACHI%20MROS800AT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"HITACHI MROS800AT\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22HITACHI%20MROS800AT%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-extra-19-dmbj5pa900gn8pm",
    "category": "oven",
    "rank": 19,
    "budget": "premium",
    "channel": "tw",
    "brand": "HITACHI",
    "model": "MROBK5000AT",
    "name": "過熱水蒸氣烘烤微波爐",
    "price": {
      "currency": "TWD",
      "amount": 48668,
      "converted": 48668,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ5PA900GN8PM/000001_1750840663.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ5P-A900GN8PM",
    "buyLabel": "PChome",
    "specs": [
      "旗艦水波爐",
      "過熱水蒸氣",
      "烘烤微波",
      "多功能"
    ],
    "description": "HITACHI MROBK5000AT 補進本分類比較池，重點是旗艦水波爐、過熱水蒸氣、烘烤微波，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "規格完整、適合重度料理",
      "可整合多台小家電"
    ],
    "cons": [
      "價格高",
      "尺寸與散熱空間要先量"
    ],
    "bestFor": "家電櫃空間有限，希望一台整合微波、蒸、烤、氣炸的人。",
    "recommendation": "補充推薦：過熱水蒸氣烘烤微波爐 的優勢在規格完整、適合重度料理，但仍建議把價格高納入取捨。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "旗艦",
      "水波爐",
      "多合一"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 45748,
      "currency": "TWD",
      "converted": 45748,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1270572353&cgp=46722",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：HITACHI 日立 過熱水蒸氣烘烤微波爐 MROBK5000AT",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / HITACHI 日立 過熱水蒸氣烘烤微波爐 MROBK5000AT」最低價為 NT$45,748，最低點日期 2026-06-10。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HITACHI MROBK5000AT\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22HITACHI%20MROBK5000AT%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"HITACHI MROBK5000AT\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22HITACHI%20MROBK5000AT%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-extra-20-dmbm0ga900h5125",
    "category": "oven",
    "rank": 20,
    "budget": "premium",
    "channel": "tw",
    "brand": "Svago",
    "model": "VE8966",
    "name": "蒸烘烤變頻微波爐",
    "price": {
      "currency": "TWD",
      "amount": 41724,
      "converted": 41724,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM0GA900H5125/000001_1783054719.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM0G-A900H5125",
    "buyLabel": "PChome",
    "specs": [
      "蒸烘烤",
      "變頻微波",
      "嵌入式風格",
      "多功能"
    ],
    "description": "Svago VE8966 補進本分類比較池，重點是蒸烘烤、變頻微波、嵌入式風格，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "多合一且外型較整合",
      "適合規劃家電櫃"
    ],
    "cons": [
      "安裝尺寸要精準",
      "售後需確認通路"
    ],
    "bestFor": "家電櫃空間有限，希望一台整合微波、蒸、烤、氣炸的人。",
    "recommendation": "補充推薦：蒸烘烤變頻微波爐 的優勢在多合一且外型較整合，但仍建議把安裝尺寸要精準納入取捨。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "蒸烘烤",
      "變頻",
      "家電櫃"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 36453,
      "currency": "TWD",
      "converted": 36453,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1158734616&cgp=43920",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【SVAGO】全省安裝 蒸烘烤變頻微波爐(VE8966)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【SVAGO】全省安裝 蒸烘烤變頻微波爐(VE8966)」最低價為 NT$36,453，最低點日期 2025-10-25。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Svago VE8966\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Svago%20VE8966%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Svago VE8966\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Svago%20VE8966%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-costco-bruno-bxm301",
    "category": "oven",
    "rank": 21,
    "budget": "value",
    "channel": "tw",
    "brand": "BRUNO",
    "model": "BXM301-IV-KE",
    "name": "多功能氣炸烤箱",
    "price": {
      "currency": "TWD",
      "amount": 2999,
      "converted": 2999,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h5f/h94/382254135640094.jpg",
    "buyUrl": "https://www.costco.com.tw/p/153079",
    "buyLabel": "Costco 好市多",
    "specs": [
      "多功能氣炸烤箱",
      "烘烤/氣炸",
      "家電櫃友善小型機",
      "Costco 評價 4.7 / 21 則"
    ],
    "description": "BRUNO BXM301 是 Costco 可買的多功能氣炸烤箱，適合家電櫃空間有限、想取代單一氣炸鍋的人。",
    "pros": [
      "價格低、體積較好安排",
      "Costco 評價 4.7"
    ],
    "cons": [
      "容量與火力不如大型蒸烤爐",
      "不含微波功能"
    ],
    "bestFor": "小家庭、租屋族或想用一台小烤箱兼顧氣炸與烘烤的人。",
    "recommendation": "好市多補充推薦：BXM301 可作為 Costco 多功能小烤箱代表，補足大型水波爐之外的低價選項。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 Costco 好市多商品頁、品牌保固與退貨政策",
    "tags": [
      "Costco",
      "氣炸烤箱",
      "小型"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2999,
      "currency": "TWD",
      "converted": 2999,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1260489680&cgp=2999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Costco好市多】BRUNO 多功能氣炸烤箱 BXM301-IV-KE BRUNO Air Fryer Oven BXM301-IV-KE",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Costco好市多 / 【Costco好市多】BRUNO 多功能氣炸烤箱 BXM301-IV-KE BRUNO Air Fryer Oven BXM301-IV-KE」最低價為 NT$2,999，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"BRUNO BXM301-IV-KE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22BRUNO%20BXM301-IV-KE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"BRUNO BXM301-IV-KE\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22BRUNO%20BXM301-IV-KE%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-costco-gourmia-gaf858",
    "category": "oven",
    "rank": 22,
    "budget": "value",
    "channel": "tw",
    "brand": "Gourmia",
    "model": "GAF858",
    "name": "數位氣炸鍋",
    "price": {
      "currency": "TWD",
      "amount": 1749,
      "converted": 1749,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/hd8/h30/308063201099806.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Kitchen-Appliances/Cookers-Oven-Microwaves-Food-Waste-Machine/Gourmia-Digital-Air-Fryer-GAF858/p/6232432",
    "buyLabel": "Costco 好市多",
    "specs": [
      "8qt / 7.5L",
      "110V / 60Hz",
      "1650W",
      "含蒸烤架與酥脆烤盤",
      "Costco 評價 4.7 / 160 則"
    ],
    "description": "Costco 評價不錯的多功能烹調家電候選，依容量、功能與檯面空間補進比較。",
    "pros": [
      "評價與評論數達標",
      "功能定位清楚"
    ],
    "cons": [
      "需要預留散熱與清潔空間",
      "多功能機學習成本較高"
    ],
    "bestFor": "家電櫃有限、想整合氣炸、烘烤或蒸烤的人",
    "recommendation": "好市多補充推薦：數位氣炸鍋 評價不錯，補進多功能氣炸烤箱/微波爐分類作為 Costco 候選比較。",
    "score": 87,
    "voltage": "110V / 60Hz",
    "warranty": "依 Costco 好市多商品頁與品牌保固標示",
    "tags": [
      "Costco",
      "好市多",
      "氣炸鍋",
      "7.5L",
      "平價"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Gourmia GAF858: 樂天市場 - 玉山最低比價網 玉山最低比價網 [COSCO代購6] C6232432 Gourmia 數位氣炸鍋 GAF858 型號/規格不相符；LBJ Gourmia GAF858: 樂天市場 - 及時雨 高壓恢復選品 及時雨 高壓恢復選品 Gourmia 數位氣炸鍋 GAF858 型號/規格不相符；LBJ Gourmia GAF858: 樂天市場 - 玉山最低比價網 玉山最低比價網 [COSCO代購6] D6232432 Gourmia 數位氣炸鍋 GAF858 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Gourmia GAF858\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Gourmia%20GAF858%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Gourmia GAF858\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Gourmia%20GAF858%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "oven-costco-sharp-ax-as10t",
    "category": "oven",
    "rank": 23,
    "budget": "premium",
    "channel": "tw",
    "brand": "SHARP",
    "model": "AX-AS10T(W)",
    "name": "26 公升水波爐",
    "price": {
      "currency": "TWD",
      "amount": 19999,
      "converted": 19999,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h0f/hf9/206736935813150.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Kitchen-Appliances/Cookers-Oven-Microwaves-Food-Waste-Machine/SHARP-26-L-Healsio-Water-Oven-AX-AS10TW/p/143973",
    "buyLabel": "Costco 好市多",
    "specs": [
      "26L",
      "水波爐 / 蒸烤",
      "110V / 60Hz",
      "800-1430W",
      "Costco 評價 4.7 / 45 則"
    ],
    "description": "Costco 評價不錯的多功能烹調家電候選，依容量、功能與檯面空間補進比較。",
    "pros": [
      "評價與評論數達標",
      "功能定位清楚"
    ],
    "cons": [
      "需要預留散熱與清潔空間",
      "多功能機學習成本較高"
    ],
    "bestFor": "家電櫃有限、想整合氣炸、烘烤或蒸烤的人",
    "recommendation": "好市多補充推薦：26 公升水波爐 評價不錯，補進多功能氣炸烤箱/微波爐分類作為 Costco 候選比較。",
    "score": 88,
    "voltage": "110V / 60Hz",
    "warranty": "依 Costco 好市多商品頁與品牌全機 1 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "水波爐",
      "蒸烤",
      "26L"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 15899,
      "currency": "TWD",
      "converted": 15899,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1212821458&cgp=19999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Costco好市多】夏普 26公升水波爐 AX-AS10T(W) SHARP 26 L Healsio Water Oven AX-AS10T(W)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Costco好市多 / 【Costco好市多】夏普 26公升水波爐 AX-AS10T(W) SHARP 26 L Healsio Water Oven AX-AS10T(W)」最低價為 NT$15,899，最低點日期 2026-04-13。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SHARP AX-AS10T(W)\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22SHARP%20AX-AS10T(W)%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"SHARP AX-AS10T(W)\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22SHARP%20AX-AS10T(W)%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  }
]);
})();

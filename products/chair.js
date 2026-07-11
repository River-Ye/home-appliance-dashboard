(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("chair", [
  {
    "id": "chair-irocks-t07-plus",
    "category": "chair",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRocks",
    "model": "T07 Plus",
    "name": "T07 Plus 人體工學電腦椅",
    "price": {
      "currency": "TWD",
      "amount": 12500,
      "converted": 12500,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBJ4CA900JM0HG/000001_1783562693.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBJ4C-A900JM0HG",
    "buyLabel": "PChome",
    "specs": [
      "人體工學",
      "BIFMA X5.1",
      "透氣椅面",
      "可調支撐"
    ],
    "description": "iRocks T07 Plus 是台灣通路中售後、價格與人體工學口碑都很均衡的長坐型電腦椅。",
    "pros": [
      "台灣品牌售後好溝通",
      "規格與價格均衡",
      "適合長時間辦公"
    ],
    "cons": [
      "不是最便宜",
      "顏色與庫存可能變動"
    ],
    "bestFor": "每天久坐、重視售後與 CP 值的工作者。",
    "recommendation": "本類 Top Pick：價格未到高奢椅，但人體工學、售後與口碑最均衡。",
    "score": 93,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "人體工學",
      "台灣品牌",
      "CP 值"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 10350,
      "currency": "TWD",
      "converted": 10350,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1136687394&cgp=12500",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：irocks T07 Plus 人體工學椅",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / irocks T07 Plus 人體工學椅」最低價為 NT$10,350，最低點日期 2026-06-21。",
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
          "query": "site:mobile01.com \"iRocks T07 Plus\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22iRocks%20T07%20Plus%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"iRocks T07 Plus\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22iRocks%20T07%20Plus%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-ergohuman-special-20",
    "category": "chair",
    "rank": 2,
    "budget": "mid",
    "channel": "tw",
    "brand": "Ergohuman",
    "model": "特仕版 2.0",
    "name": "特仕版 2.0 人體工學椅",
    "price": {
      "currency": "TWD",
      "amount": 11900,
      "converted": 11900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCAKHPA900HEQ4H/000001_1760581993.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCAKHP-A900HEQ4H",
    "buyLabel": "PChome",
    "specs": [
      "人體工學",
      "3D 扶手",
      "美製黑網",
      "辦公椅"
    ],
    "description": "Ergohuman 在人體工學椅市場口碑成熟，特仕版 2.0 價格比高階款更容易入手。",
    "pros": [
      "人體工學口碑佳",
      "網椅透氣",
      "價格低於旗艦款"
    ],
    "cons": [
      "型號版本較多需核對",
      "售後依供應商頁面"
    ],
    "bestFor": "想買成熟工學椅品牌、但不想直接上高價旗艦的人。",
    "recommendation": "工學椅品牌推薦：名牌光環、價格與功能折衷不錯。",
    "score": 90,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "人體工學",
      "網椅",
      "長坐"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 8999,
      "currency": "TWD",
      "converted": 8999,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1222202345&cgp=11900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Ergohuman 特仕版 2.0 (3D扶手) 人體工學椅(辦公椅/電腦椅)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / Ergohuman 特仕版 2.0 (3D扶手) 人體工學椅(辦公椅/電腦椅)」最低價為 NT$8,999，最低點日期 2025-04-14。",
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
          "query": "site:mobile01.com \"Ergohuman 特仕版 2.0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Ergohuman%20%E7%89%B9%E4%BB%95%E7%89%88%202.0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Ergohuman 特仕版 2.0\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Ergohuman%20%E7%89%B9%E4%BB%95%E7%89%88%202.0%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-irocks-t08-plus",
    "category": "chair",
    "rank": 3,
    "budget": "value",
    "channel": "tw",
    "brand": "iRocks",
    "model": "T08 Plus",
    "name": "T08 Plus 高階電腦椅",
    "price": {
      "currency": "TWD",
      "amount": 6990,
      "converted": 6990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCAKFHA900B12OU/000001_1773127491.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCAKFH-A900B12OU",
    "buyLabel": "PChome",
    "specs": [
      "高階電腦椅",
      "腰枕頸枕",
      "入門價位",
      "台灣品牌"
    ],
    "description": "T08 Plus 比工學網椅便宜，仍保留 iRocks 品牌與較完整的電腦椅支撐。",
    "pros": [
      "價格相對低",
      "品牌售後加分",
      "適合一般桌機使用"
    ],
    "cons": [
      "人體工學調整不如 T07/T05",
      "長時間悶熱感需留意"
    ],
    "bestFor": "預算七千左右、想買品牌椅的人。",
    "recommendation": "入門品牌推薦：比無名椅安心，價格又不會一下跳到萬元級。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "入門",
      "台灣品牌",
      "電腦椅"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 6291,
      "currency": "TWD",
      "converted": 6291,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1237508984&cgp=6990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：irocks T08 Plus 高階電腦椅",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / irocks T08 Plus 高階電腦椅」最低價為 NT$6,291，最低點日期 2026-06-21。",
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
          "query": "site:mobile01.com \"iRocks T08 Plus\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22iRocks%20T08%20Plus%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"iRocks T08 Plus\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22iRocks%20T08%20Plus%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-irocks-t03-neo",
    "category": "chair",
    "rank": 4,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRocks",
    "model": "T03 NEO",
    "name": "T03 NEO 人體工學椅",
    "price": {
      "currency": "TWD",
      "amount": 8990,
      "converted": 8990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBJ4CA900HS19G/000001_1773036067.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBJ4C-A900HS19G",
    "buyLabel": "PChome",
    "specs": [
      "人體工學",
      "透氣網椅",
      "辦公椅",
      "白色"
    ],
    "description": "T03 NEO 偏輕量辦公網椅，適合不想要厚重電競椅的人。",
    "pros": [
      "網椅透氣",
      "外型清爽",
      "價格低於 T07 Plus"
    ],
    "cons": [
      "支撐調整少於高階款",
      "白色椅面需保養"
    ],
    "bestFor": "居家辦公、重視透氣與清爽外型的人。",
    "recommendation": "透氣網椅推薦：想避開皮革電競椅悶熱感，可優先看這台。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "網椅",
      "透氣",
      "白色"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ iRocks T03 NEO: 蝦皮商城 - irocks 艾芮克官方授權網路旗艦店 irocks T03 NEO 人體工學椅 專用保潔墊 C03N 深灰色 非採用通路或含排除條件；LBJ iRocks T03 NEO: 樂天市場 - 良興EcLife購物網 良興EcLife購物網 iRocks 艾芮克 C03N 專用保潔椅墊布套 岩墨灰 (T03 Neo專用) 非採用通路或含排除條件；LBJ iRocks T03 NEO: 蝦皮商城 - irocks 艾芮克官方授權網路旗艦店 irocks T03 NEO 人體工學椅 專用保潔墊 C03N 淺灰色 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"iRocks T03 NEO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22iRocks%20T03%20NEO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"iRocks T03 NEO\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22iRocks%20T03%20NEO%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-irocks-t05-plus",
    "category": "chair",
    "rank": 5,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRocks",
    "model": "T05 Plus",
    "name": "T05 PLUS 人體工學辦公椅",
    "price": {
      "currency": "TWD",
      "amount": 15800,
      "converted": 15800,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/QABD80A900AS2SD/000001_1773039881.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/QABD80-A900AS2SD",
    "buyLabel": "PChome",
    "specs": [
      "人體工學",
      "台灣製造",
      "五年保固",
      "辦公椅"
    ],
    "description": "T05 Plus 走更高階的長時間辦公椅定位，適合把椅子視為工作設備的人。",
    "pros": [
      "台灣製造與保固明確",
      "長坐支撐更完整",
      "售後可信度高"
    ],
    "cons": [
      "價格高於 T07/T03",
      "外型較辦公取向"
    ],
    "bestFor": "一週長時間在家辦公、願意加預算買保固的人。",
    "recommendation": "售後服務推薦：價格較高，但保固與本地服務是它的主要價值。",
    "score": 89,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "五年保固",
      "台灣製造",
      "長坐"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 12510,
      "currency": "TWD",
      "converted": 12510,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1105168968&cgp=15800",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：irocks T05 Plus 人體工學 辦公椅",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / irocks T05 Plus 人體工學 辦公椅」最低價為 NT$12,510，最低點日期 2026-04-29。",
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
          "query": "site:mobile01.com \"iRocks T05 Plus\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22iRocks%20T05%20Plus%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"iRocks T05 Plus\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22iRocks%20T05%20Plus%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-irocks-t27",
    "category": "chair",
    "rank": 6,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRocks",
    "model": "T27",
    "name": "T27 雲岩網人體工學電腦椅",
    "price": {
      "currency": "TWD",
      "amount": 14500,
      "converted": 14500,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBE2LA900HA2WP/000001_1783563647.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBE2L-A900HA2WP",
    "buyLabel": "PChome",
    "specs": [
      "人體工學",
      "雲岩網",
      "台灣製造",
      "透氣"
    ],
    "description": "T27 用網布與人體工學支撐切入，定位比入門椅更適合長坐。",
    "pros": [
      "透氣支撐較完整",
      "台灣品牌",
      "外型比傳統辦公椅新"
    ],
    "cons": [
      "價格接近高階 iRocks",
      "庫存較少"
    ],
    "bestFor": "想要透氣網椅，但又要較完整支撐的人。",
    "recommendation": "透氣長坐推薦：若不想買皮革或電競椅，T27 很值得比較。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "網椅",
      "人體工學",
      "台灣品牌"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ iRocks T27: 樂天市場 - 良興EcLife購物網 良興EcLife購物網 iRocks 艾芮克 T27 雲岩網人體工學椅 隕石灰 型號/規格不相符；LBJ iRocks T27: 蝦皮商城 - irocks 艾芮克官方授權網路旗艦店 irocks T27 雲岩網 體工學椅 電腦椅 灰白色 型號/規格不相符；LBJ iRocks T27: 蝦皮商城 - irocks 艾芮克官方授權網路旗艦店 irocks T27 雲岩網 人體工學椅 電腦椅 椅子 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"iRocks T27\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22iRocks%20T27%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"iRocks T27\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22iRocks%20T27%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-razer-fujin",
    "category": "chair",
    "rank": 7,
    "budget": "mid",
    "channel": "tw",
    "brand": "Razer",
    "model": "Fujin",
    "name": "Fujin 風靈網狀人體工學電競椅",
    "price": {
      "currency": "TWD",
      "amount": 12990,
      "converted": 12990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBT0KA900GSDTK/000001_1762771347.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBT0K-A900GSDTK",
    "buyLabel": "PChome",
    "specs": [
      "網狀椅背",
      "人體工學",
      "電競椅",
      "自行組裝"
    ],
    "description": "Razer Fujin 比傳統賽車椅更像辦公網椅，兼顧遊戲品牌與透氣性。",
    "pros": [
      "網椅透氣",
      "Razer 品牌辨識高",
      "價格低於 Fujin Pro"
    ],
    "cons": [
      "自行組裝",
      "售後與零件需依通路"
    ],
    "bestFor": "想要電競品牌但不喜歡厚重皮革椅的人。",
    "recommendation": "電競網椅推薦：比一般賽車椅更適合久坐辦公。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Razer",
      "網椅",
      "電競"
    ],
    "releaseDate": "2023-09-21",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Razer Fujin: Momo富邦購物 (店+)【Razer 雷蛇】Razer 雷蛇 Fujin/Fujin Pro 風靈 人體工學電競椅 透氣網布 3D軟墊扶手 電競椅 電腦椅 辦公椅 型號/規格不相符；LBJ Razer Fujin: Momo富邦購物 (店+)【Razer 雷蛇】Razer 雷蛇 Fujin/Fujin Pro 風靈 人體工學電競椅 3D軟墊扶手 透氣網布 辦公椅 電腦椅 電競椅 型號/規格不相符；LBJ Razer Fujin: 蝦皮商城 - PCHOT 線上電競 | 3C旗艦店 Razer 雷蛇 Fujin Headrest 風靈頭枕 透氣立體支撐 人體工學 頭枕 透氣網布 3D曲線設計 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Razer Fujin\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Razer%20Fujin%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Razer Fujin\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Razer%20Fujin%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-razer-iskur-v2",
    "category": "chair",
    "rank": 8,
    "budget": "mid",
    "channel": "tw",
    "brand": "Razer",
    "model": "Iskur V2",
    "name": "Iskur V2 電競椅",
    "price": {
      "currency": "TWD",
      "amount": 17990,
      "converted": 17990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBE2LA900HBXCK/000001_1783562976.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBE2L-A900HBXCK",
    "buyLabel": "PChome",
    "specs": [
      "電競椅",
      "腰部支撐",
      "高背",
      "黑綠配色"
    ],
    "description": "Iskur V2 是 Razer 代表電競椅，適合重視包覆與遊戲房一致風格的人。",
    "pros": [
      "品牌與外觀強",
      "腰部支撐取向",
      "適合遊戲房"
    ],
    "cons": [
      "價格高",
      "皮革/泡棉久坐透氣性不如網椅"
    ],
    "bestFor": "Razer 生態系、電競房或偏好包覆坐感的人。",
    "recommendation": "電競椅代表款：品牌、造型、支撐都到位，但純辦公久坐可先看網椅。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Razer",
      "電競",
      "包覆"
    ],
    "releaseDate": "2024-01-08",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Razer Iskur V2: Momo富邦購物 【Razer 雷蛇】ISKUR V2 X 人體工學 電競椅/電腦椅/椅子(黑綠/需自行組裝) 最低價 NT$6,990 低於現價合理比例，疑似月付/配件/錯類；LBJ Razer Iskur V2: 蝦皮商城 - Razer雷蛇｜官方旗艦店 Razer 雷蛇 Iskur V2 X 電競椅 加寬座墊 2D扶手 高密度泡棉 電腦椅 雷蛇電競椅 辦公椅 賽車椅 非採用通路或含排除條件；LBJ Razer Iskur V2: 順發線上購物 【順發線上購物】RaZER Iskur V2 X 黑綠/電競椅(宅配不組) 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 Iskur V2 使用者反映座墊明顯偏硬或緩衝不足，部分使用者久坐後出現臀部、髖部疼痛或因此退貨。",
      "issues": [
        {
          "title": "座墊過硬、緩衝不足",
          "detail": "回報皆為 Iskur V2，包含坐數小時後疼痛、近似坐在硬物上，以及因下座墊填充不足而退貨；對座墊硬度敏感者應先試坐或保留退換貨期。",
          "reportCount": 7,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Is the Iskur V2 supposed to be hard as a brick?",
              "url": "https://www.reddit.com/r/razer/comments/1nnmw57/is_the_iskur_v2_supposed_to_be_hard_as_a_brick/"
            },
            {
              "platform": "Reddit",
              "title": "Iskur v2 arrived!",
              "url": "https://www.reddit.com/r/razer/comments/1akcksp/iskur_v2_arrived/"
            },
            {
              "platform": "Best Buy",
              "title": "Customer Reviews: Razer Iskur V2 Gaming Chair Black",
              "url": "https://www.bestbuy.com/site/reviews/razer-iskur-v2-gaming-chair-black/6605863?page=6"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "chair-razer-enki",
    "category": "chair",
    "rank": 9,
    "budget": "mid",
    "channel": "tw",
    "brand": "Razer",
    "model": "Enki",
    "name": "Enki 電競椅",
    "price": {
      "currency": "TWD",
      "amount": 14900,
      "converted": 14900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCAKFOA900BWWGS/000001_1755481797.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCAKFO-A900BWWGS",
    "buyLabel": "PChome",
    "specs": [
      "電競椅",
      "高背",
      "黑色",
      "Razer"
    ],
    "description": "Razer Enki 價格比 Iskur V2 低，適合想要 Razer 電競椅但控制預算的人。",
    "pros": [
      "Razer 價格較好入手",
      "外型低調",
      "通路庫存較足"
    ],
    "cons": [
      "調整與腰撐不如高階款",
      "久坐透氣性普通"
    ],
    "bestFor": "想買 Razer 品牌、但預算約一萬元的人。",
    "recommendation": "Razer CP 推薦：品牌加成仍在，價格比旗艦款好下手。",
    "score": 81,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Razer",
      "CP 值",
      "電競"
    ],
    "releaseDate": "2021-10-21",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Razer Enki: Momo富邦購物 【Razer 雷蛇】Enki X人體工學設計電競椅/電腦椅/(黑/綠/RZ38-R3U1) 最低價 NT$6,430 低於現價合理比例，疑似月付/配件/錯類；LBJ Razer Enki: 蝦皮商城 - 雷蛇 PRO-X 電競專門店｜授權經銷 雷蛇Razer Enki X 電競椅【需自行組裝、超大型商品僅提供本島配送】 非採用通路或含排除條件；LBJ Razer Enki: 順發線上購物 【順發線上購物】Razer Enki 電競椅4D扶手(粉色)(免費宅配不含組裝) 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 Razer Enki 使用者反映氣壓棒失效、漏壓、無法維持高度或需更換氣壓棒。",
      "issues": [
        {
          "title": "氣壓棒故障或漏壓，座面自行下沉",
          "detail": "案例從購入一天到使用一年多後出現，包含座面無法維持高度、隨機緩慢下沉及氣壓棒沉到底部；若退換貨期內出現高度變化，應立即錄影並向原廠報修。",
          "reportCount": 7,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Razer Enki cylinder replacement",
              "url": "https://www.reddit.com/r/razer/comments/1awxmid/razer_enki_cylinder_replacement/"
            },
            {
              "platform": "Reddit",
              "title": "Enki Replacement Cylinder",
              "url": "https://www.reddit.com/r/razer/comments/1koewb4/enki_replacement_cylinder/"
            },
            {
              "platform": "Best Buy",
              "title": "Customer Reviews: Razer Enki Gaming Chair",
              "url": "https://www.bestbuy.com/site/reviews/razer-enki-gaming-chair-with-synthetic-leather-for-all-day-comfort-black-green/6554668?page=9"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "chair-herman-miller-aeron-c",
    "category": "chair",
    "rank": 10,
    "budget": "premium",
    "channel": "tw",
    "brand": "Herman Miller",
    "model": "Aeron C Size",
    "name": "Aeron 全功能人體工學椅 C Size",
    "price": {
      "currency": "TWD",
      "amount": 38900,
      "converted": 38900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBV09A900IUC3Q/000001_1754552553.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBV09-A900IUC3Q",
    "buyLabel": "PChome",
    "specs": [
      "人體工學",
      "C Size",
      "全功能",
      "原廠授權代理"
    ],
    "description": "Aeron 是高階人體工學椅標竿，這筆選授權代理通路，售後可信度優先於最低價。",
    "pros": [
      "經典高階椅",
      "授權代理較安心",
      "長期使用口碑強"
    ],
    "cons": [
      "價格高",
      "尺寸需確認身形"
    ],
    "bestFor": "把椅子當長期工作投資、願意為售後付費的人。",
    "recommendation": "高階長期推薦：不追最低價，但保固與可維修性是關鍵價值。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "高階",
      "授權代理",
      "人體工學"
    ],
    "releaseDate": "1994",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Herman Miller Aeron C Size: Momo富邦購物 【Herman Miller】Aeron 2.0 人體工學椅 全功能 一般腳座 石墨黑 DW扶手 C size(平行輸入) 型號/規格不相符；LBJ Herman Miller Aeron C Size: Momo富邦購物 【Herman Miller】Aeron 2.0 人體工學椅 全功能 金屬腳座 鋁合金材質 碳灰色 DW扶手 C size(平行輸入) 型號/規格不相符；LBJ Herman Miller Aeron C Size: Momo富邦購物 【Herman Miller】Aeron 全功能 - 石墨黑｜C SIZE｜世代家具｜原廠授權代理商(人體工學椅/電腦椅/辦公椅) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Herman Miller Aeron C Size\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Herman%20Miller%20Aeron%20C%20Size%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Herman Miller Aeron C Size\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Herman%20Miller%20Aeron%20C%20Size%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-steelcase-karman",
    "category": "chair",
    "rank": 11,
    "budget": "premium",
    "channel": "tw",
    "brand": "Steelcase",
    "model": "Karman",
    "name": "Karman Chair 人體工學辦公椅",
    "price": {
      "currency": "TWD",
      "amount": 65900,
      "converted": 65900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBJ1HA900ICP8J/000001_1739333373.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBJ1H-A900ICP8J",
    "buyLabel": "PChome",
    "specs": [
      "人體工學",
      "全透網",
      "高階辦公椅",
      "Steelcase"
    ],
    "description": "Steelcase Karman 是高階辦公椅選項，價格高但品牌與長期辦公口碑很強。",
    "pros": [
      "國際高階品牌",
      "長時間辦公定位",
      "材質與支撐成熟"
    ],
    "cons": [
      "價格非常高",
      "需親坐確認是否合身"
    ],
    "bestFor": "公司採購、高階工作室或追求長期耐用的人。",
    "recommendation": "高階品牌推薦：預算充足時可和 Aeron 一起試坐比較。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "高階",
      "Steelcase",
      "辦公椅"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 65900,
      "currency": "TWD",
      "converted": 65900,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1260348877&cgp=65900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Steelcase Karman Chair 人體工學辦公椅｜深夜黑黑五爪全透網",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / Steelcase Karman Chair 人體工學辦公椅｜深夜黑黑五爪全透網」最低價為 NT$65,900，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"Steelcase Karman\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Steelcase%20Karman%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Steelcase Karman\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Steelcase%20Karman%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-backbone-kangaroo-pro",
    "category": "chair",
    "rank": 12,
    "budget": "mid",
    "channel": "tw",
    "brand": "Backbone",
    "model": "Kangaroo Pro",
    "name": "Kangaroo Pro 人體工學椅",
    "price": {
      "currency": "TWD",
      "amount": 8930,
      "converted": 8930,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBJ0AA900IGLW6/000001_1759990112.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBJ0A-A900IGLW6",
    "buyLabel": "PChome",
    "specs": [
      "人體工學",
      "透氣網椅",
      "升級款",
      "辦公椅"
    ],
    "description": "Backbone Kangaroo Pro 以萬元內人體工學椅切入，是 iRocks 以外的中價位選項。",
    "pros": [
      "價格不到萬元",
      "網椅取向",
      "品牌在工學椅市場有辨識度"
    ],
    "cons": [
      "售後需看供應商",
      "實際坐感建議試坐"
    ],
    "bestFor": "想找萬元內網椅、但不只看 iRocks 的人。",
    "recommendation": "中價位備選：適合和 T03 NEO、T08 Plus 放在同一組比較。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "網椅",
      "萬元內",
      "人體工學"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Backbone Kangaroo Pro: 蝦皮商城 - 臺灣高空旗艦館 Backbone Kangaroo Pro™ & Punch｜人體工學椅 型號/規格不相符；LBJ Backbone Kangaroo Pro: Momo富邦購物 【Backbone】Kangaroo Pro™人體工學椅 升級款(袋鼠椅/電腦椅/辦公椅/透氣網椅) 型號/規格不相符；LBJ Backbone Kangaroo Pro: PCHome購物 Backbone Kangaroo Pro人體工學椅｜升級款｜袋鼠椅/電腦椅/辦公椅/透氣網椅 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Backbone Kangaroo Pro\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Backbone%20Kangaroo%20Pro%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Backbone Kangaroo Pro\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Backbone%20Kangaroo%20Pro%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-aotto-3d-mesh",
    "category": "chair",
    "rank": 13,
    "budget": "value",
    "channel": "tw",
    "brand": "AOTTO",
    "model": "3D 透氣網布",
    "name": "3D 透氣網布可調節人體工學電腦椅",
    "price": {
      "currency": "TWD",
      "amount": 1699,
      "converted": 1699,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBJ4TA900HIGB4/000001_1777429228.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBJ4T-A900HIGB4",
    "buyLabel": "PChome",
    "specs": [
      "人體工學",
      "透氣網布",
      "入門價位",
      "辦公椅"
    ],
    "description": "AOTTO 這款是低預算入門椅，適合臨時工作位或不想先投入太多的人。",
    "pros": [
      "價格非常低",
      "網布透氣",
      "庫存充足"
    ],
    "cons": [
      "支撐與耐用性不能和萬元椅相比",
      "售後與材質需降低期待"
    ],
    "bestFor": "短期使用、學生租屋或備用工作位。",
    "recommendation": "低預算推薦：不是長期久坐首選，但 CP 值高、入門門檻低。",
    "score": 73,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "低價",
      "入門",
      "網布"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1599,
      "currency": "TWD",
      "converted": 1599,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1234249813&cgp=1699",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【AOTTO】3D透氣網布可調節人體工學電腦椅(電腦椅 辦公椅 老闆椅 工學椅)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【AOTTO】3D透氣網布可調節人體工學電腦椅(電腦椅 辦公椅 老闆椅 工學椅)」最低價為 NT$1,599，最低點日期 2025-09-16。",
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
          "query": "site:mobile01.com \"AOTTO 3D 透氣網布\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22AOTTO%203D%20%E9%80%8F%E6%B0%A3%E7%B6%B2%E5%B8%83%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"AOTTO 3D 透氣網布\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22AOTTO%203D%20%E9%80%8F%E6%B0%A3%E7%B6%B2%E5%B8%83%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-ionrax-oc2",
    "category": "chair",
    "rank": 14,
    "budget": "value",
    "channel": "tw",
    "brand": "IONRAX",
    "model": "OC2",
    "name": "OC2 SEAT SET 坐躺兩用電腦椅",
    "price": {
      "currency": "TWD",
      "amount": 3499,
      "converted": 3499,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DEBHA6A9007ZPEF/000001_1768553712.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEBHA6-A9007ZPEF",
    "buyLabel": "PChome",
    "specs": [
      "坐躺兩用",
      "電腦椅",
      "電競椅",
      "入門價位"
    ],
    "description": "IONRAX OC2 偏入門電競椅，價格低，適合預算有限但想要躺椅結構的人。",
    "pros": [
      "價格低",
      "坐躺兩用",
      "遊戲用途友善"
    ],
    "cons": [
      "人體工學細緻度有限",
      "長期耐用性需觀察"
    ],
    "bestFor": "偶爾遊戲、預算三四千的入門需求。",
    "recommendation": "入門電競推薦：比無名椅可靠一些，但長時間工作仍建議升級網椅。",
    "score": 74,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "入門",
      "電競",
      "坐躺"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2719,
      "currency": "TWD",
      "converted": 2719,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1269865113&cgp=3499",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【DEPE 德邁國際】OC2 SEAT SET 坐/躺兩用(辦公椅/電腦椅/電競椅 IONRAX.co.ltd)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【DEPE 德邁國際】OC2 SEAT SET 坐/躺兩用(辦公椅/電腦椅/電競椅 IONRAX.co.ltd)」最低價為 NT$2,719，最低點日期 2026-06-09。",
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
          "query": "site:mobile01.com \"IONRAX OC2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22IONRAX%20OC2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"IONRAX OC2\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22IONRAX%20OC2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-cougar-titan-pro-v2",
    "category": "chair",
    "rank": 15,
    "budget": "mid",
    "channel": "tw",
    "brand": "COUGAR",
    "model": "TITAN PRO V2",
    "name": "TITAN PRO V2 電競椅",
    "price": {
      "currency": "TWD",
      "amount": 15990,
      "converted": 15990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBJ6ZA900JIKKR/000001_1782824760.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBJ6Z-A900JIKKR",
    "buyLabel": "PChome",
    "specs": [
      "電競椅",
      "高背",
      "COUGAR",
      "大型椅身"
    ],
    "description": "COUGAR TITAN PRO V2 是偏傳統電競椅的大型選擇，適合喜歡包覆與遊戲風格的人。",
    "pros": [
      "電競品牌成熟",
      "椅身大",
      "適合遊戲房風格"
    ],
    "cons": [
      "透氣性不如網椅",
      "價格接近更好的工學椅"
    ],
    "bestFor": "偏好大型電競椅、遊戲時間多的人。",
    "recommendation": "大型電競椅推薦：視覺與包覆感強，但純辦公 CP 不如 iRocks。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "COUGAR",
      "電競",
      "大型"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ COUGAR TITAN PRO V2: 蝦皮商城 - COUGAR 美洲獅官方授權旗艦店 Cougar 美洲獅 TITAN PRO V2 電競椅 進階腰靠支撐 磁吸記憶頭枕 4D可調扶手 電腦椅 主管椅 辦公椅 型號/規格不相符；LBJ COUGAR TITAN PRO V2: Momo富邦購物 【COUGAR 美洲獅】TITAN PRO V2電競椅(大尺寸/自行組裝) 型號/規格不相符；LBJ COUGAR TITAN PRO V2: Momo富邦購物 (店+)【COUGAR 美洲獅】Cougar 美洲獅 TITAN PRO V2 電競椅 進階腰靠支撐 磁吸記憶頭枕 4D可調扶手 電腦椅 主管椅 辦公椅 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"COUGAR TITAN PRO V2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22COUGAR%20TITAN%20PRO%20V2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"COUGAR TITAN PRO V2\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22COUGAR%20TITAN%20PRO%20V2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-extra-16-dqbj0aa900jsbyx",
    "category": "chair",
    "rank": 16,
    "budget": "value",
    "channel": "tw",
    "brand": "MARSRHINO",
    "model": "CORSA",
    "name": "高彈力人體工學網椅",
    "price": {
      "currency": "TWD",
      "amount": 5890,
      "converted": 5890,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBJ0AA900JSBYX/000001_1780972580.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBJ0A-A900JSBYX",
    "buyLabel": "PChome",
    "specs": [
      "高彈力椅背",
      "3D 扶手",
      "2D 頭枕",
      "網椅"
    ],
    "description": "MARSRHINO CORSA 補進本分類比較池，重點是高彈力椅背、3D 扶手、2D 頭枕，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "規格完整",
      "價格低於進口人體工學椅"
    ],
    "cons": [
      "品牌長期耐用口碑較少",
      "調整精細度需實坐確認"
    ],
    "bestFor": "長時間坐在電腦前，想在人體工學、預算與外型之間比較的人。",
    "recommendation": "補充推薦：高彈力人體工學網椅 的優勢在規格完整，但仍建議把品牌長期耐用口碑較少納入取捨。",
    "score": 86,
    "voltage": "無需用電",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "人體工學",
      "網椅",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ MARSRHINO CORSA: Momo富邦購物 (店+)【MARSRHINO 火星犀牛】CORSA 極速 人體工學椅 網椅 高彈力椅背 透氣紓壓椅座 3D扶手 2D頭枕 需組裝 型號/規格不相符；LBJ MARSRHINO CORSA: 蝦皮商城 - 易飛電腦 3Cplay MARSRHINO火星犀牛 CORSA 極速 超跑人體工學椅 電競椅 五年保固 承重150kg 易飛電腦 型號/規格不相符；LBJ MARSRHINO CORSA: Momo富邦購物 【MARSRHINO 火星犀牛】CORSA 極速超跑人體工學椅(CORSA) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"MARSRHINO CORSA\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22MARSRHINO%20CORSA%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"MARSRHINO CORSA\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22MARSRHINO%20CORSA%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-extra-17-dcaki5a900haaza",
    "category": "chair",
    "rank": 17,
    "budget": "value",
    "channel": "tw",
    "brand": "Artso",
    "model": "ARC Chair",
    "name": "仿生曲線人體工學椅",
    "price": {
      "currency": "TWD",
      "amount": 5688,
      "converted": 5688,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DCAKI5A900HAAZA/000001_1734059628.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCAKI5-A900HAAZA",
    "buyLabel": "PChome",
    "specs": [
      "仿生曲線",
      "辦公椅",
      "電腦椅",
      "人體工學"
    ],
    "description": "Artso ARC Chair 補進本分類比較池，重點是仿生曲線、辦公椅、電腦椅，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "外型比一般網椅柔和",
      "適合居家辦公"
    ],
    "cons": [
      "調整項目需看個人身形",
      "椅面支撐偏好需試坐"
    ],
    "bestFor": "長時間坐在電腦前，想在人體工學、預算與外型之間比較的人。",
    "recommendation": "補充推薦：仿生曲線人體工學椅 的優勢在外型比一般網椅柔和，但仍建議把調整項目需看個人身形納入取捨。",
    "score": 85,
    "voltage": "無需用電",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "人體工學",
      "居家辦公",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Artso ARC Chair: 蝦皮商城 - 亞梭傢俬官方旗艦館 Artso 亞梭 ARC Chair(電腦椅/人體工學椅/辦公椅/椅子/免運) 型號/規格不相符；LBJ Artso ARC Chair: Momo富邦購物 【Artso 亞梭】ARC Chair(電腦椅/人體工學椅/辦公椅/椅子) 型號/規格不相符；LBJ Artso ARC Chair: 誠品線上 Artso 亞梭 ARC Chair(電腦椅/人體工學椅/辦公椅/椅子) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Artso ARC Chair\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Artso%20ARC%20Chair%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Artso ARC Chair\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Artso%20ARC%20Chair%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-extra-18-dqbj6za900hndmy",
    "category": "chair",
    "rank": 18,
    "budget": "value",
    "channel": "tw",
    "brand": "AOTTO",
    "model": "訂製款",
    "name": "透氣皮革工學賽車電競椅",
    "price": {
      "currency": "TWD",
      "amount": 3280,
      "converted": 3280,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBJ6ZA900HNDMY/000001_1720591564.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBJ6Z-A900HNDMY",
    "buyLabel": "PChome",
    "specs": [
      "電競椅",
      "透氣皮革",
      "升降",
      "後仰"
    ],
    "description": "AOTTO 訂製款 補進本分類比較池，重點是電競椅、透氣皮革、升降，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "價格親民",
      "包覆感比網椅強"
    ],
    "cons": [
      "夏天久坐較悶",
      "人體工學調整較有限"
    ],
    "bestFor": "長時間坐在電腦前，想在人體工學、預算與外型之間比較的人。",
    "recommendation": "補充推薦：透氣皮革工學賽車電競椅 的優勢在價格親民，但仍建議把夏天久坐較悶納入取捨。",
    "score": 84,
    "voltage": "無需用電",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "電競椅",
      "預算",
      "包覆"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2955,
      "currency": "TWD",
      "converted": 2955,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1226281206&cgp=3280",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【AOTTO】訂製款-透氣皮革工學賽車電競椅(電腦椅 辦公椅 老闆椅 工學椅 賽車椅)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【AOTTO】訂製款-透氣皮革工學賽車電競椅(電腦椅 辦公椅 老闆椅 工學椅 賽車椅)」最低價為 NT$2,955，最低點日期 2025-10-25。",
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
          "query": "site:mobile01.com \"AOTTO 訂製款\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22AOTTO%20%E8%A8%82%E8%A3%BD%E6%AC%BE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"AOTTO 訂製款\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22AOTTO%20%E8%A8%82%E8%A3%BD%E6%AC%BE%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-extra-19-dqbj2xa900k3i6a",
    "category": "chair",
    "rank": 19,
    "budget": "value",
    "channel": "tw",
    "brand": "IDEA",
    "model": "享愜",
    "name": "護腰多調整透氣辦公椅",
    "price": {
      "currency": "TWD",
      "amount": 3880,
      "converted": 3880,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBJ2XA900K3I6A/000001_1781062288.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBJ2X-A900K3I6A",
    "buyLabel": "PChome",
    "specs": [
      "護腰",
      "多段調整",
      "透氣",
      "辦公椅"
    ],
    "description": "IDEA 享愜 補進本分類比較池，重點是護腰、多段調整、透氣，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "護腰與透氣性兼顧",
      "價格適合入門升級"
    ],
    "cons": [
      "品牌售後需看通路",
      "乘坐感仍建議實測"
    ],
    "bestFor": "長時間坐在電腦前，想在人體工學、預算與外型之間比較的人。",
    "recommendation": "補充推薦：護腰多調整透氣辦公椅 的優勢在護腰與透氣性兼顧，但仍建議把品牌售後需看通路納入取捨。",
    "score": 83,
    "voltage": "無需用電",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "護腰",
      "辦公椅",
      "透氣"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ IDEA 享愜: PCHome購物 IDEA 享愜護腰人體工學多調整透氣辦公椅 型號/規格不相符；LBJ IDEA 享愜: 露天拍賣 - 宅配滿$490免運｜ PC24h購物 露天旗艦店 (71076個評價) 【PChome 24h購物】IDEA-享愜護腰人體工學多調整透氣辦公椅 R99N 型號/規格不相符；BigGo DQBJ2X-A900K3I6A: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DQBJ2X-A900K3I6A/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"IDEA 享愜\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22IDEA%20%E4%BA%AB%E6%84%9C%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"IDEA 享愜\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22IDEA%20%E4%BA%AB%E6%84%9C%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-extra-20-dqbj0ra900ja4sv",
    "category": "chair",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "Artso",
    "model": "巴哈椅",
    "name": "人體工學辦公椅",
    "price": {
      "currency": "TWD",
      "amount": 17888,
      "converted": 17888,
      "confidence": "可信通路查核價，擷取 2026-07-09"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBJ0RA900JA4SV/000001_1758791091.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBJ0R-A900JA4SV",
    "buyLabel": "PChome",
    "specs": [
      "人體工學",
      "辦公椅",
      "高支撐",
      "中高階"
    ],
    "description": "Artso 巴哈椅 補進本分類比較池，重點是人體工學、辦公椅、高支撐，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "支撐感比入門椅好",
      "適合長時間辦公"
    ],
    "cons": [
      "價格進入中高階",
      "需要確認座深與身形"
    ],
    "bestFor": "長時間坐在電腦前，想在人體工學、預算與外型之間比較的人。",
    "recommendation": "補充推薦：人體工學辦公椅 的優勢在支撐感比入門椅好，但仍建議把價格進入中高階納入取捨。",
    "score": 82,
    "voltage": "無需用電",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "人體工學",
      "長時間",
      "支撐"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Artso 巴哈椅: Momo富邦購物 【Artso 亞梭】巴哈椅(電腦椅/人體工學椅/辦公椅/椅子) 型號/規格不相符；LBJ Artso 巴哈椅: 蝦皮商城 - 亞梭傢俬官方旗艦館 Artso 亞梭 巴哈椅(電腦椅/人體工學椅/辦公椅/椅子) 型號/規格不相符；LBJ Artso 巴哈椅: Artso亞梭傢俬 【Artso 亞梭傢俬】巴哈椅 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Artso 巴哈椅\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Artso%20%E5%B7%B4%E5%93%88%E6%A4%85%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Artso 巴哈椅\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Artso%20%E5%B7%B4%E5%93%88%E6%A4%85%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-costco-ergoking-171-s-plus",
    "category": "chair",
    "rank": 21,
    "budget": "mid",
    "channel": "tw",
    "brand": "Ergoking",
    "model": "171 S Plus",
    "name": "網布人體工學椅 171 S Plus系列",
    "price": {
      "currency": "TWD",
      "amount": 8899,
      "converted": 8899,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h31/haa/69411991388190.jpg",
    "buyUrl": "https://www.costco.com.tw/p/132324",
    "buyLabel": "Costco 好市多",
    "specs": [
      "網布人體工學椅",
      "頭枕/腰靠取向",
      "辦公椅",
      "Costco 評價 4.7 / 425 則"
    ],
    "description": "Ergoking 171 S Plus 是 Costco 評論數很高的人體工學椅，適合想要台灣通路售後與退貨保障的人。",
    "pros": [
      "Costco 425 則評論、4.7 分",
      "網布椅背適合長時間辦公"
    ],
    "cons": [
      "人體工學椅仍建議試坐",
      "扶手、坐深與腰靠適配因人而異"
    ],
    "bestFor": "在家工作、想從基本辦公椅升級的人。",
    "recommendation": "好市多補充推薦：171 S Plus 評論量高，是 Costco 電腦椅分類裡很值得列入比較的款式。",
    "score": 87,
    "voltage": "椅子無電壓需求",
    "warranty": "依 Costco 好市多商品頁、品牌保固與退貨政策",
    "tags": [
      "Costco",
      "人體工學",
      "網布"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 7099,
      "currency": "TWD",
      "converted": 7099,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1141217481&cgp=8899",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Costco好市多】Ergoking 網布人體工學椅 171 S Plus系列 Ergoking Mesh Chair 171 S Plus",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Costco好市多 / 【Costco好市多】Ergoking 網布人體工學椅 171 S Plus系列 Ergoking Mesh Chair 171 S Plus」最低價為 NT$7,099，最低點日期 2025-10-27。",
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
          "query": "site:mobile01.com \"Ergoking 171 S Plus\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Ergoking%20171%20S%20Plus%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Ergoking 171 S Plus\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Ergoking%20171%20S%20Plus%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-costco-dps-insight",
    "category": "chair",
    "rank": 22,
    "budget": "value",
    "channel": "tw",
    "brand": "DPS",
    "model": "Insight #52851-BLKRED",
    "name": "Insight 電競椅 黑紅",
    "price": {
      "currency": "TWD",
      "amount": 4389,
      "converted": 4389,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h6a/hd8/384789238284318.jpg",
    "buyUrl": "https://www.costco.com.tw/Furniture-Kitchen/Furniture/Computer-Desk-Chair-Sets/True-Innovations-Insight-Gaming-Chair-Black-Red/p/1861987",
    "buyLabel": "Costco 好市多",
    "specs": [
      "電競椅",
      "高度 116-126 公分",
      "重量：26.34公斤",
      "PU / 聚酯 / 金屬結構",
      "Costco 評價 4.8 / 13 則"
    ],
    "description": "Costco 評價不錯的電腦椅候選，補進電競椅價位帶比較。",
    "pros": [
      "價格比高階人體工學椅低",
      "好市多正常新品頁"
    ],
    "cons": [
      "電競椅坐感不一定適合長工時",
      "尺寸與身形相容性需確認"
    ],
    "bestFor": "偏好電競椅包覆感、預算有限的人",
    "recommendation": "好市多補充推薦：Insight 電競椅 黑紅 評價不錯，補進電腦椅分類作為 Costco 候選比較。",
    "score": 83,
    "voltage": "不適用；需確認身高、坐深、扶手與腰靠是否合身",
    "warranty": "依 Costco 好市多商品頁與品牌保固標示",
    "tags": [
      "Costco",
      "好市多",
      "電競椅",
      "平價",
      "包覆"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：BigGo DPS Insight #52851-BLKRED: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DPS%20Insight%20%2352851-BLKRED/product?p=1；BigGo Insight #52851-BLKRED: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/Insight%20%2352851-BLKRED/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"DPS Insight #52851-BLKRED\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22DPS%20Insight%20%2352851-BLKRED%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"DPS Insight #52851-BLKRED\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22DPS%20Insight%20%2352851-BLKRED%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "chair-costco-andaseat-phantom3-gray",
    "category": "chair",
    "rank": 23,
    "budget": "mid",
    "channel": "tw",
    "brand": "Anda Seat",
    "model": "PHANTOM 3 PRO Gray",
    "name": "PHANTOM 3 PRO 布面電競椅 灰",
    "price": {
      "currency": "TWD",
      "amount": 5199,
      "converted": 5199,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/hd2/h2a/344500471693342.jpg",
    "buyUrl": "https://www.costco.com.tw/Furniture-Kitchen/Furniture/Computer-Desk-Chair-Sets/Anda-Seat-Fabric-Gaming-Chair-Gray/p/151433",
    "buyLabel": "Costco 好市多",
    "specs": [
      "布面電競椅",
      "高約 140 公分",
      "重量：約31公斤",
      "鋼 / PVC / PU 結構",
      "Costco 評價 4.8 / 5 則"
    ],
    "description": "Costco 評價不錯的電腦椅候選，補進電競椅價位帶比較。",
    "pros": [
      "價格比高階人體工學椅低",
      "好市多正常新品頁"
    ],
    "cons": [
      "電競椅坐感不一定適合長工時",
      "尺寸與身形相容性需確認"
    ],
    "bestFor": "偏好電競椅包覆感、預算有限的人",
    "recommendation": "好市多補充推薦：PHANTOM 3 PRO 布面電競椅 灰 評價不錯，補進電腦椅分類作為 Costco 候選比較。",
    "score": 84,
    "voltage": "不適用；需確認身高、坐深、扶手與腰靠是否合身",
    "warranty": "依 Costco 好市多商品頁與品牌保固標示",
    "tags": [
      "Costco",
      "好市多",
      "電競椅",
      "布面",
      "中價"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：BigGo Anda Seat PHANTOM 3 PRO Gray: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/Anda%20Seat%20PHANTOM%203%20PRO%20Gray/product?p=1；BigGo PHANTOM 3 PRO Gray: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/PHANTOM%203%20PRO%20Gray/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Anda Seat PHANTOM 3 PRO Gray\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Anda%20Seat%20PHANTOM%203%20PRO%20Gray%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Anda Seat PHANTOM 3 PRO Gray\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Anda%20Seat%20PHANTOM%203%20PRO%20Gray%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  }
]);
})();

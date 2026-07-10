(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("wifi", [
  {
    "id": "wifi-asus-zenwifi-bd5-2pack",
    "category": "wifi",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "ASUS",
    "model": "ZenWiFi BD5 2入",
    "name": "BE5000 雙頻 Wi-Fi 7 AiMesh 網狀路由器二入組",
    "price": {
      "currency": "TWD",
      "amount": 5999,
      "converted": 5999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAF01A900I3ETA/000001_1759801067.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAF01-A900I3ETA",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE5000 雙頻",
      "Mesh：支援 AiMesh，二入組可直接全屋串接",
      "Gigabit 有線埠"
    ],
    "description": "ASUS ZenWiFi BD5 2入 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想買 2 台起步串接、重視台灣售後與設定穩定的一般家庭。",
    "recommendation": "綜合推薦：二入價格接近單顆中高階路由器，AiMesh 擴充彈性與 ASUS 台灣售後都成熟，最符合 2-3 台串接需求。",
    "score": 94,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "綜合推薦",
      "Mesh",
      "二入組",
      "ASUS"
    ],
    "releaseDate": "2025-01",
    "historicalLow": {
      "status": "found",
      "amount": 4111,
      "currency": "TWD",
      "converted": 4111,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1256976430&cgp=5999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【ASUS 華碩】ZenWiFi BD5 BE5000 網狀路由器 (白 -2入) 四核心 WIFI7 AiMesh 隱藏天線x4",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【ASUS 華碩】ZenWiFi BD5 BE5000 網狀路由器 (白 -2入) 四核心 WIFI7 AiMesh 隱藏天線x4」最低價為 NT$4,111，最低點日期 2025-11-07。",
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
          "query": "site:mobile01.com \"ASUS ZenWiFi BD5 2入\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22ASUS%20ZenWiFi%20BD5%202%E5%85%A5%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"ASUS ZenWiFi BD5 2入\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22ASUS%20ZenWiFi%20BD5%202%E5%85%A5%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-tplink-deco-be25-2pack",
    "category": "wifi",
    "rank": 2,
    "budget": "mid",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Deco BE25 2入",
    "name": "BE5000 雙頻 Wi-Fi 7 真 Mesh 網狀路由器二入組",
    "price": {
      "currency": "TWD",
      "amount": 5699,
      "converted": 5699,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBC1TA900I6ACS/000001_1771826403.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBC1T-A900I6ACS",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE5000 雙頻",
      "Mesh：支援 Deco Mesh，二入組",
      "2.5G/Gigabit 依商品頁"
    ],
    "description": "TP-Link Deco BE25 2入 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想用 Deco App 快速完成全屋 Mesh、預算希望壓在中階的人。",
    "recommendation": "Mesh CP 推薦：Deco 系列設定門檻低，二入組價格漂亮，適合公寓或中小透天先買 2 台測覆蓋。",
    "score": 92,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "二入組",
      "CP 值",
      "TP-Link"
    ],
    "releaseDate": "2024-08-30",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ TP-Link Deco BE25 2入: 樂天市場 - 米特3C數位 米特3C數位–TP-Link Deco BE25 BE5000 wifi7 雙頻 wifi分享器/2入 非採用通路或含排除條件；LBJ TP-Link Deco BE25 2入: 樂天市場 - 良興EcLife購物網 良興EcLife購物網 TP-LINK Deco BE25 (2入) BE5000 完整家庭 Mesh WiFi 7 系統 非採用通路或含排除條件；LBJ TP-Link Deco BE25 2入: 蝦皮商城 - 順發3C SUNFAR TP-LINK Deco BE25 2入組 雙頻 無線網路 wifi-7 MESH 路由器 分享器 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TP-Link Deco BE25 2入\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22TP-Link%20Deco%20BE25%202%E5%85%A5%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"TP-Link Deco BE25 2入\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22TP-Link%20Deco%20BE25%202%E5%85%A5%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-dlink-m36-3pack",
    "category": "wifi",
    "rank": 3,
    "budget": "mid",
    "channel": "tw",
    "brand": "D-Link",
    "model": "M36 3入",
    "name": "BE3600 Wi-Fi 7 無線 Mesh 路由器三入組",
    "price": {
      "currency": "TWD",
      "amount": 7499,
      "converted": 7499,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJ6A900JL8Q9/000001_1766717579.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJ6-A900JL8Q9",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：支援 AQUILA PRO AI Mesh，三入組",
      "2.5G + Gigabit"
    ],
    "description": "D-Link M36 3入 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "一開始就確定要買 3 台、需要跨樓層或多隔間覆蓋的人。",
    "recommendation": "三入推薦：台灣通路常見，三入組不用再分次加購，適合你提到的 2-3 台串接情境。",
    "score": 90,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "三入組",
      "D-Link",
      "全屋"
    ],
    "releaseDate": "2025-09-26",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ D-Link M36 3入: Yahoo拍賣 - 風和網通 (4492個評價) D-Link M36 BE3600 Wi-Fi 7 無線Mesh路由器(3入)【風和網通】 非採用通路或含排除條件；BigGo DRAFJ6-A900JL8Q9: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DRAFJ6-A900JL8Q9/product?p=1；BigGo D-Link M36 3入: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/D-Link%20M36%203%E5%85%A5/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"D-Link M36 3入\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22D-Link%20M36%203%E5%85%A5%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"D-Link M36 3入\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22D-Link%20M36%203%E5%85%A5%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-asus-rt-be58u-v2",
    "category": "wifi",
    "rank": 4,
    "budget": "mid",
    "channel": "tw",
    "brand": "ASUS",
    "model": "RT-BE58U V2",
    "name": "BE3600 雙頻 Wi-Fi 7 AiMesh 可擴充路由器",
    "price": {
      "currency": "TWD",
      "amount": 3499,
      "converted": 3499,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFLPA900JKWXK/000001_1783555436.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFLP-A900JKWXK",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：支援 AiMesh，可日後加購節點",
      "Gigabit 有線埠"
    ],
    "description": "ASUS RT-BE58U V2 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "小家庭先買單台，之後視訊號再補 ASUS AiMesh 節點。",
    "recommendation": "單台 CP 推薦：價格低、韌體成熟、可 AiMesh 擴充，比不能串接的入門款更有長期彈性。",
    "score": 89,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "AiMesh",
      "單台",
      "CP 值",
      "ASUS"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ ASUS RT-BE58U V2: Momo富邦購物 (店+)【ASUS 華碩】RT-BE58U V2 BE3600 雙頻 Wi-Fi 7 可擴充式路由器 型號/規格不相符；LBJ ASUS RT-BE58U V2: 蝦皮商城 - 三井3C購物網 【ASUS 華碩】RT-BE58U V2 BE3600 雙頻 Wi-Fi 7 可擴充式路由器 型號/規格不相符；LBJ ASUS RT-BE58U V2: 百利市購物中心 【百利市購物中心】【ASUS 華碩】RT-BE58U V2 BE3600 雙頻 Wi-Fi 7 可擴充式路由器 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"ASUS RT-BE58U V2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22ASUS%20RT-BE58U%20V2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"ASUS RT-BE58U V2\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22ASUS%20RT-BE58U%20V2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-tplink-deco-be65-2pack",
    "category": "wifi",
    "rank": 5,
    "budget": "premium",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Deco BE65 2入",
    "name": "BE11000 三頻 2.5G 真 Mesh 路由器二入組",
    "price": {
      "currency": "TWD",
      "amount": 11999,
      "converted": 11999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAN08A900H851Z/000001_1782099268.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAN08-A900H851Z",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE11000 三頻",
      "Mesh：支援 Deco Mesh，二入組",
      "全 2.5G"
    ],
    "description": "TP-Link Deco BE65 2入 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "家中網路已到 1G/2G 以上、想要更穩 Mesh 回程的人。",
    "recommendation": "高階 Mesh 推薦：三頻與 2.5G 埠更適合高速寬頻和多節點回程，比入門雙頻 Mesh 更耐用。",
    "score": 88,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "三頻",
      "2.5G",
      "高階"
    ],
    "releaseDate": "2024-05-16",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ TP-Link Deco BE65 2入: 蝦皮商城 - 順發3C SUNFAR TP-LINK Deco BE65 BE11000 無線網路 WIFI MESH 三頻 路由器 分享器 2入組 非採用通路或含排除條件；LBJ TP-Link Deco BE65 2入: 樂天市場 - JT3C JT3C TP-LINK Deco BE65 Wi-Fi 7 BE11000 三頻 2.5G 真Mesh無線網路網狀路由器(Wi-Fi7 分享器/支援VPN) - 2入組 非採用通路或含排除條件；LBJ TP-Link Deco BE65 2入: 樂天市場 - 良興EcLife購物網 良興EcLife購物網 TP-LINK Deco BE65 (2入) BE11000 完整家庭 Mesh WiFi 7系統原價 12600 (省 601) 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TP-Link Deco BE65 2入\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22TP-Link%20Deco%20BE65%202%E5%85%A5%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"TP-Link Deco BE65 2入\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22TP-Link%20Deco%20BE65%202%E5%85%A5%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-netgear-orbi-rbe373",
    "category": "wifi",
    "rank": 6,
    "budget": "premium",
    "channel": "tw",
    "brand": "NETGEAR",
    "model": "Orbi RBE373",
    "name": "BE5000 Wi-Fi 7 Mesh 延伸系統路由器+2衛星",
    "price": {
      "currency": "TWD",
      "amount": 9900,
      "converted": 9900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJAA900JG5AK/000001_1763014538.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJA-A900JG5AK",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE5000 雙頻",
      "Mesh：支援 Orbi Mesh，路由器+2衛星",
      "Gigabit 有線埠"
    ],
    "description": "NETGEAR Orbi RBE373 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想一次買 3 顆、偏好 NETGEAR Orbi 全屋系統的人。",
    "recommendation": "Orbi 入門推薦：三件式對大坪數友善，但訂閱功能與後續衛星成本要先評估。",
    "score": 87,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "三件式",
      "NETGEAR",
      "Orbi"
    ],
    "releaseDate": "2025-07-29",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ NETGEAR Orbi RBE373: PCHome購物 Netgear 網件 Orbi RBE370 BE5000 雙頻WiFi 7Mesh延伸衛星 此設備無法單獨使用 需先購買RBE373(Orbi RBE370) 型號/規格不相符；LBJ NETGEAR Orbi RBE373: 蝦皮購物 - NETGEAR 官方旗艦店 / Arlo官方旗艦店 【NETGEAR】Orbi RBE373 BE5000 雙頻WiFi 7Mesh延伸系統 路由器+2衛星1.5GHz四核 型號/規格不相符；LBJ NETGEAR Orbi RBE373: PCHome購物 Netgear 網件 【NETGEAR】Orbi RBE373 BE5000 雙頻WiFi 7Mesh延伸系統 路由器+2衛星1.5GHz四核+1GB RAM(Orbi RBE373) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"NETGEAR Orbi RBE373\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22NETGEAR%20Orbi%20RBE373%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"NETGEAR Orbi RBE373\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22NETGEAR%20Orbi%20RBE373%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-linksys-velop-pro-axe5400",
    "category": "wifi",
    "rank": 7,
    "budget": "value",
    "channel": "tw",
    "brand": "Linksys",
    "model": "Velop Pro AXE5400",
    "name": "Wi-Fi 6E 三頻無線網狀路由器一入",
    "price": {
      "currency": "TWD",
      "amount": 2990,
      "converted": 2990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFL7A900IJMF6/000001_1744352670.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFL7-A900IJMF6",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6E",
      "AXE5400 三頻",
      "Mesh：支援 Velop Mesh，可加購節點",
      "Gigabit 有線埠"
    ],
    "description": "Linksys Velop Pro AXE5400 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想用較低單顆價格進 Wi-Fi 6E Mesh 生態的人。",
    "recommendation": "低價 6E Mesh：有 6GHz 頻段，適合先買一顆試訊號，再逐步補節點。",
    "score": 86,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "Wi-Fi 6E",
      "Linksys",
      "三頻"
    ],
    "releaseDate": "2023-07-16",
    "historicalLow": {
      "status": "found",
      "amount": 2990,
      "currency": "TWD",
      "converted": 2990,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DRAFL7-A900IJMF6",
      "sourceTitle": "PChome 商品 API：Linksys Velop Pro AXE5400 WiFi 6E 三頻 無線網狀路由器(一入) / 原廠貨，品質有保障 _ Linksys 知名美國品牌 網路安保的最佳選擇 MX6201-AH",
      "evidenceSnippet": "PChome 商品 API 於 2026-07-10 回傳同一商品頁「Linksys Velop Pro AXE5400 WiFi 6E 三頻 無線網狀路由器(一入) / 原廠貨，品質有保障 _ Linksys 知名美國品牌 網路安保的最佳選擇 MX6201-AH」查核價 NT$2,990，低於原先記錄史低。",
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
          "query": "site:mobile01.com \"Linksys Velop Pro AXE5400\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Linksys%20Velop%20Pro%20AXE5400%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Linksys Velop Pro AXE5400\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Linksys%20Velop%20Pro%20AXE5400%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-synology-wrx560",
    "category": "wifi",
    "rank": 8,
    "budget": "mid",
    "channel": "tw",
    "brand": "Synology",
    "model": "WRX560",
    "name": "AX3000 雙頻 Wi-Fi 6 Mesh 路由器",
    "price": {
      "currency": "TWD",
      "amount": 6699,
      "converted": 6699,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAGCMA900FQ3JZ/000001_1681110575.png",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAGCM-A900FQ3JZ",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX3000 雙頻",
      "Mesh：支援 Synology Mesh",
      "2.5G + Gigabit"
    ],
    "description": "Synology WRX560 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "重視家長控管、VPN、SRM 管理介面與穩定性的進階家庭。",
    "recommendation": "管理功能推薦：不是最便宜，但 SRM 口碑好，適合想細控網路規則的人。",
    "score": 86,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "管理",
      "Synology",
      "2.5G"
    ],
    "releaseDate": "2022-11-02",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Synology WRX560: Momo富邦購物 【Synology 群暉科技】WRX560 雙頻 WiFi 6 Mesh 路由器/分享器 型號/規格不相符；LBJ Synology WRX560: 樂天市場 - 昌運監視器官方旗艦店 昌運監視器 Synology群暉 WRX560路由器 5.9GHz 雙頻 Wi-Fi 6 2.5GbE高速傳輸 型號/規格不相符；LBJ Synology WRX560: 家樂福線上購物網 昌運監視器 Synology群暉 WRX560路由器 5.9GHz 雙頻 Wi-Fi 6 2.5GbE高速傳輸 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 WRX560 使用者回報單機或 Mesh 節點會讓用戶端掉線、拒絕重連或誤報密碼錯誤；切換 Wi-Fi radio 或重啟只能暫時恢復。",
      "issues": [
        {
          "title": "Wi-Fi 用戶端反覆斷線或拒絕重新連接",
          "detail": "回報包含換機後仍發生、成批裝置離線，以及有線 Mesh 的規律斷線；建議更新穩定韌體、保留事件紀錄，並在退換貨期內長時間測試。",
          "reportCount": 7,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Disconnect wireless troubles with brand new WRX560",
              "url": "https://www.reddit.com/r/synology/comments/165qepa/disconnect_wireless_troubles_with_brand_new/"
            },
            {
              "platform": "Reddit",
              "title": "WRX560 randomly dropping devices",
              "url": "https://www.reddit.com/r/synology/comments/1jhuf7r/wrx560_randomly_dropping_devices/"
            },
            {
              "platform": "Reddit",
              "title": "Connectivity issues with WRX560 router",
              "url": "https://www.reddit.com/r/synology/comments/1e7xl5k/connectivity_issues_with_router/"
            },
            {
              "platform": "Synology Community",
              "title": "WRX560 disconnecting devices and reporting wrong password",
              "url": "https://community.synology.com/enu/forum/2/post/163298"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "wifi-unifi-u7-pro",
    "category": "wifi",
    "budget": "premium",
    "channel": "global",
    "brand": "UniFi",
    "model": "U7 Pro",
    "name": "Wi-Fi 7 6GHz Ceiling AP",
    "price": {
      "currency": "USD",
      "amount": 189,
      "converted": 6067,
      "confidence": "Ubiquiti 官方美國售價"
    },
    "image": "https://cdn.ecomm.ui.com/products/fa8dd4e4-36c8-4c79-a928-22c7bff2ce29/ab5bc8a4-6135-402e-a695-e3ea5e16d3e6.png",
    "buyUrl": "https://store.ui.com/us/en/category/all-wifi/products/u7-pro",
    "buyLabel": "Ubiquiti Store",
    "specs": [
      "Wi-Fi 7",
      "6 spatial streams，支援 6GHz",
      "Mesh：UniFi AP 可做無線 uplink/漫遊，需 UniFi Network 管理",
      "2.5GbE PoE+ uplink"
    ],
    "description": "UniFi U7 Pro 是商用/Prosumer Wi-Fi 7 AP，不是單台家用分享器；適合已準備 UniFi Gateway、PoE Switch 或控制器的環境。",
    "pros": [
      "UniFi 生態系完整，適合 gateway、switch、AP 一起管理",
      "官方美國通路售價清楚，規格與產品線更新快"
    ],
    "cons": [
      "多數 AP 需 PoE 交換器或 PoE Injector，部分配件另購",
      "海外官方價未含國際運費、進口稅與台灣保固"
    ],
    "bestFor": "想用 UniFi 生態佈建 2-3 顆 AP，並重視集中管理、VLAN、漫遊與後續擴充的人。",
    "recommendation": "UniFi 綜合推薦：U7 Pro 價格仍在可接受範圍，已支援 Wi-Fi 7 與 6GHz，是現在切入 UniFi AP 的均衡款。",
    "score": 86,
    "voltage": "PoE+ 供電；海外官方通路，需確認 PoE 交換器/Injector、插頭與台灣保固",
    "warranty": "Ubiquiti 官方美國通路；海外運費、進口稅與台灣保固另計",
    "tags": [
      "UniFi",
      "Ubiquiti",
      "Wi-Fi 7",
      "PoE",
      "商用 AP"
    ],
    "rank": 9,
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ UniFi U7 Pro: 蝦皮購物 - NE Technologies UniFi U6 Lite/PLUS/Pro/LR/U7 PRO XGS倒置AP托架桌面支架收納架 非採用通路或含排除條件；LBJ UniFi U7 Pro: iOPEN Mall - MikroTik 台灣代理 (284人次購買) UniFi U6+ U6-Pro U7-Pro 專用造型檯燈座 非採用通路或含排除條件；LBJ UniFi U7 Pro: 蝦皮購物 - MikroTik 台灣代理 UniFi U6+ U6-Pro U7-Pro 專用造型檯燈座 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位同型號使用者回報 2.4GHz IoT 裝置會頻繁斷線、無法連網或反覆重連。",
      "issues": [
        {
          "title": "2.4GHz IoT 裝置斷線與相容性不穩",
          "detail": "問題常集中在 2.4GHz 智慧家電，且可能受韌體版本影響；部署前應先更新穩定韌體，並用實際 IoT 裝置測試連線與漫遊。",
          "reportCount": 9,
          "sources": [
            {
              "platform": "Ubiquiti Community",
              "title": "U7-Pro 2.4ghz issues",
              "url": "https://community.ui.com/questions/U7-Pro-2-4ghz-issues/4dff7816-5c14-4686-9f9a-ab99f9b93700"
            },
            {
              "platform": "Reddit",
              "title": "U7 pro iot issue explained",
              "url": "https://www.reddit.com/r/Ubiquiti/comments/1g1funp/u7_pro_iot_issue_explained/"
            },
            {
              "platform": "Reddit",
              "title": "2.4GHz IoT device constant disconnect",
              "url": "https://www.reddit.com/r/Ubiquiti/comments/1h600kz/24ghz_iot_device_constant_disconnect_5_6ghz_wifi/"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "wifi-unifi-u6-pro",
    "category": "wifi",
    "budget": "mid",
    "channel": "global",
    "brand": "UniFi",
    "model": "U6 Pro",
    "name": "Wi-Fi 6 6-stream Ceiling AP",
    "price": {
      "currency": "USD",
      "amount": 159,
      "converted": 5104,
      "confidence": "Ubiquiti 官方美國售價"
    },
    "image": "https://cdn.ecomm.ui.com/products/8e88b222-7a55-4cf0-8677-ae9b6347fe84/e16aa122-b5e5-4ffb-9f1a-27ee14d9ab3d.png",
    "buyUrl": "https://store.ui.com/us/en/category/all-wifi/products/u6-pro",
    "buyLabel": "Ubiquiti Store",
    "specs": [
      "Wi-Fi 6",
      "6 spatial streams",
      "Mesh：UniFi AP 可做無線 uplink/漫遊，需 UniFi Network 管理",
      "Gigabit PoE uplink"
    ],
    "description": "UniFi U6 Pro 是成熟的 Wi-Fi 6 商用 AP，適合不急著上 6GHz、但希望穩定佈建 UniFi 多 AP 的環境。",
    "pros": [
      "UniFi 生態系完整，適合 gateway、switch、AP 一起管理",
      "官方美國通路售價清楚，規格與產品線更新快"
    ],
    "cons": [
      "多數 AP 需 PoE 交換器或 PoE Injector，部分配件另購",
      "海外官方價未含國際運費、進口稅與台灣保固"
    ],
    "bestFor": "已經有 PoE 交換器、想用較穩定成熟的 Wi-Fi 6 AP 做多點漫遊的人。",
    "recommendation": "UniFi Wi-Fi 6 推薦：U6 Pro 口碑成熟，價格比 Wi-Fi 7 款更好控制，適合重視穩定勝過追新規格的使用者。",
    "score": 84,
    "voltage": "PoE 供電；海外官方通路，需確認 PoE 交換器/Injector、插頭與台灣保固",
    "warranty": "Ubiquiti 官方美國通路；海外運費、進口稅與台灣保固另計",
    "tags": [
      "UniFi",
      "Ubiquiti",
      "Wi-Fi 6",
      "PoE",
      "商用 AP"
    ],
    "rank": 10,
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ UniFi U6 Pro: iOPEN Mall - MikroTik 台灣代理 (284人次購買) UniFi U6+ U6-Pro U7-Pro 專用造型檯燈座 非採用通路或含排除條件；LBJ UniFi U6 Pro: 蝦皮購物 - MikroTik 台灣代理 UniFi U6+ U6-Pro U7-Pro 專用造型檯燈座 非採用通路或含排除條件；LBJ UniFi U6 Pro: 露天拍賣 - 慧敏小鋪【滿300發貨】 (998個評價) 【VLK】UBNT UniFi U6-PRO企業家用5G千兆雙頻AP吸頂式全屋覆蓋[1110529] 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"UniFi U6 Pro\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22UniFi%20U6%20Pro%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"UniFi U6 Pro\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22UniFi%20U6%20Pro%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-unifi-u7-lite",
    "category": "wifi",
    "budget": "mid",
    "channel": "global",
    "brand": "UniFi",
    "model": "U7 Lite",
    "name": "Compact Wi-Fi 7 AP",
    "price": {
      "currency": "USD",
      "amount": 99,
      "converted": 3178,
      "confidence": "Ubiquiti 官方美國售價"
    },
    "image": "https://cdn.ecomm.ui.com/products/253cc208-4b09-4b2e-9d1a-7aa1e8f93507/49241c96-878f-4e40-8541-c2e89c1c5e6e.png",
    "buyUrl": "https://store.ui.com/us/en/category/all-wifi/products/u7-lite",
    "buyLabel": "Ubiquiti Store",
    "specs": [
      "Wi-Fi 7",
      "4 spatial streams",
      "Mesh：UniFi AP 可做無線 uplink/漫遊，需 UniFi Network 管理",
      "2.5GbE PoE uplink"
    ],
    "description": "UniFi U7 Lite 是入門 Wi-Fi 7 AP，適合想用較低單價鋪 2-3 顆 UniFi AP 的家庭工作室或小型辦公室。",
    "pros": [
      "UniFi 生態系完整，適合 gateway、switch、AP 一起管理",
      "官方美國通路售價清楚，規格與產品線更新快"
    ],
    "cons": [
      "多數 AP 需 PoE 交換器或 PoE Injector，部分配件另購",
      "海外官方價未含國際運費、進口稅與台灣保固"
    ],
    "bestFor": "想控制單顆成本，又希望直接進 Wi-Fi 7 與 UniFi 管理生態的人。",
    "recommendation": "UniFi 低價 Wi-Fi 7 候選：官方售價低，買 2-3 顆的總成本好控制，但仍要把 PoE 與 Gateway 成本算進去。",
    "score": 83,
    "voltage": "PoE 供電；海外官方通路，需確認 PoE 交換器/Injector、插頭與台灣保固",
    "warranty": "Ubiquiti 官方美國通路；海外運費、進口稅與台灣保固另計",
    "tags": [
      "UniFi",
      "Ubiquiti",
      "Wi-Fi 7",
      "PoE",
      "低價 AP"
    ],
    "rank": 11,
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ UniFi U7 Lite: 蝦皮購物 - RackIdea RACKIDEA - UniFi AP 桌面／壁掛支架（適用 UniFi U7-Lite ） 非採用通路或含排除條件；LBJ UniFi U7 Lite: 蝦皮購物 - NE Technologies UniFi U6 Lite/PLUS/Pro/LR/U7 PRO XGS倒置AP托架桌面支架收納架 型號/規格不相符；LBJ UniFi U7 Lite: 露天拍賣 - 聚豐企業+瀨:@ys8869/可急件/统编發票/可刷卡 (43個評價) 【量大可優惠】回收 ubnt Unifi U6-LR U6-Pro U6-Lite U7-Pro U7-LR ProU 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"UniFi U7 Lite\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22UniFi%20U7%20Lite%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"UniFi U7 Lite\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22UniFi%20U7%20Lite%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-aruba-ap22",
    "category": "wifi",
    "budget": "premium",
    "channel": "tw",
    "brand": "Aruba",
    "model": "Instant On AP22",
    "name": "HPE Aruba Instant On Wi-Fi 6 室內 AP",
    "price": {
      "currency": "TWD",
      "amount": 14112,
      "converted": 14112,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJRA900JB5WP/000001_1759461654.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJR-A900JB5WP",
    "buyLabel": "PChome",
    "specs": [
      "Wi‑Fi 6",
      "室內型 AP",
      "Mesh：Instant On 多 AP/Smart Mesh 與漫遊，需同系統管理",
      "需 PoE 或相容電源方案"
    ],
    "description": "Aruba Instant On AP22 是國際商用網路品牌的 Wi-Fi 6 AP，適合想把家用分享器升級成多 AP 漫遊架構的人。",
    "pros": [
      "國際商用網路品牌，適合多 AP 漫遊與集中管理",
      "台灣 PChome 可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "屬商用無線基地台，不是家用一體式 NAT 路由器",
      "通常需既有閘道器/路由器與 PoE 或電源供應規劃"
    ],
    "bestFor": "願意用商用 AP 佈建、重視穩定漫遊與品牌售後的小型辦公室或大坪數住宅。",
    "recommendation": "Aruba 綜合推薦：AP22 是 Instant On Wi-Fi 6 的主流均衡款，比 AP25 便宜、比 AP21 更有餘裕。",
    "score": 82,
    "voltage": "多為 PoE/外接電源；台灣 PChome 通路，需確認是否含變壓器與安裝條件",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Aruba",
      "HPE",
      "Instant On",
      "Wi‑Fi 6",
      "商用 AP"
    ],
    "rank": 12,
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Aruba Instant On AP22: 露天拍賣 - ONGOOD的賣場 (2210個評價) Aruba Aruba Instant On AP22 Aruba Instant [全新免運][編號 W59221] 非採用通路或含排除條件；LBJ Aruba Instant On AP22: Yahoo拍賣 - 藍鯨網通--下標前務必先問庫存 (4001個評價) Aruba AP22 Instant On AP22 WiFi6室內型AP( R4W02A ) 非採用通路或含排除條件；LBJ Aruba Instant On AP22: 蝦皮購物 - 網通設備銷售-光華實體門市 【全新，含稅可開統編】Aruba Instant On AP22 (R4W02A) WiFi6室內型AP 無線基地台 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 AP22 使用者回報舊版 3.0.0 韌體會使 iPhone 或 Android 掉線、拒絕重連或顯示密碼錯誤；後續 hotfix 已針對此問題修正。",
      "issues": [
        {
          "title": "舊版 3.0.0 韌體造成行動裝置斷線與錯誤密碼",
          "detail": "這是 2024 年 3.0.0 版本的歷史韌體災情；HPE 已於 2024-08-23 發布 3.0.0.1 hotfix。購買或部署後應先確認已升級修正版，不代表目前最新版仍必然發生。",
          "reportCount": 6,
          "sources": [
            {
              "platform": "HPE Instant On Community",
              "title": "After update to 3.0.0 firmware: connection problems with iPhones to AP22",
              "url": "https://community.instant-on.hpe.com/discussion/after-update-to-300-firmware-connection-problems-with-iphones-to-ap22"
            },
            {
              "platform": "Reddit",
              "title": "Issues since firmware 3.0.0",
              "url": "https://www.reddit.com/r/ArubaInstantOn/comments/1eiarrp/issues_since_firmware_300/"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "wifi-aruba-ap25",
    "category": "wifi",
    "budget": "premium",
    "channel": "tw",
    "brand": "Aruba",
    "model": "Instant On AP25",
    "name": "HPE Aruba Instant On 4x4 Wi-Fi 6 室內 AP",
    "price": {
      "currency": "TWD",
      "amount": 21112,
      "converted": 21112,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJRA900JB5QX/000001_1759459286.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJR-A900JB5QX",
    "buyLabel": "PChome",
    "specs": [
      "Wi‑Fi 6",
      "4x4 室內型 AP",
      "Mesh：Instant On 多 AP/Smart Mesh 與漫遊，需同系統管理",
      "需 PoE 或相容電源方案"
    ],
    "description": "Aruba Instant On AP25 是更高規的 Wi-Fi 6 室內 AP，適合裝置數多、同時連線壓力較高的場域。",
    "pros": [
      "國際商用網路品牌，適合多 AP 漫遊與集中管理",
      "台灣 PChome 可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "屬商用無線基地台，不是家用一體式 NAT 路由器",
      "通常需既有閘道器/路由器與 PoE 或電源供應規劃"
    ],
    "bestFor": "多人辦公室、工作室、餐飲門店或高裝置密度家庭。",
    "recommendation": "Aruba 高密度推薦：AP25 價格較高，但 4x4 規格更適合多人同時連線與商用場景。",
    "score": 81,
    "voltage": "多為 PoE/外接電源；台灣 PChome 通路，需確認是否含變壓器與安裝條件",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Aruba",
      "HPE",
      "Instant On",
      "Wi‑Fi 6",
      "高密度"
    ],
    "rank": 13,
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 21112,
      "currency": "TWD",
      "converted": 21112,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DRAFJR-A900JB5QX",
      "sourceTitle": "PChome 商品頁：Aruba HPE IOn 無線基地台AP25 室內型4x4 Wi-Fi 6 AP (R9B28A) / Aruba HPE IOn 無線基地台AP25 室內型4x4 Wi-Fi 6 AP (R9B28A)",
      "evidenceSnippet": "PChome 商品 API 於 2026-07-10 回傳同一商品頁「Aruba HPE IOn 無線基地台AP25 室內型4x4 Wi-Fi 6 AP (R9B28A) / Aruba HPE IOn 無線基地台AP25 室內型4x4 Wi-Fi 6 AP (R9B28A)」查核價 NT$21,112，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-10",
      "note": "採用 PChome 24h 同一商品頁可公開查核現價作為本次觀測到的最低價；同型號/規格並排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Aruba Instant On AP25\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Aruba%20Instant%20On%20AP25%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Aruba Instant On AP25\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Aruba%20Instant%20On%20AP25%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-aruba-ap32",
    "category": "wifi",
    "budget": "premium",
    "channel": "tw",
    "brand": "Aruba",
    "model": "Instant On AP32",
    "name": "HPE Aruba Instant On Wi-Fi 6E 三頻 AP",
    "price": {
      "currency": "TWD",
      "amount": 19111,
      "converted": 19111,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJRA900JB5RW/000001_1759459789.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJR-A900JB5RW",
    "buyLabel": "PChome",
    "specs": [
      "Wi‑Fi 6E",
      "三頻室內型 AP",
      "Mesh：Instant On 多 AP/Smart Mesh 與漫遊，需同系統管理",
      "6GHz 使用需終端與地區規範支援"
    ],
    "description": "Aruba Instant On AP32 是 Wi-Fi 6E 三頻 AP，適合想要 6GHz 頻段、但仍偏好 Aruba Instant On 管理生態的人。",
    "pros": [
      "國際商用網路品牌，適合多 AP 漫遊與集中管理",
      "台灣 PChome 可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "屬商用無線基地台，不是家用一體式 NAT 路由器",
      "通常需既有閘道器/路由器與 PoE 或電源供應規劃"
    ],
    "bestFor": "有 Wi-Fi 6E 終端、想降低 5GHz 壅塞並使用商用 AP 管理的人。",
    "recommendation": "Aruba 6E 推薦：AP32 比 AP25 便宜一些且有 6GHz，但要確認終端支援與佈建條件。",
    "score": 80,
    "voltage": "多為 PoE/外接電源；台灣 PChome 通路，需確認是否含變壓器與安裝條件",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Aruba",
      "HPE",
      "Instant On",
      "Wi‑Fi 6E",
      "6GHz"
    ],
    "rank": 14,
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Aruba Instant On AP32: 露天拍賣 - ONGOOD的賣場 (2210個評價) Aruba HPE Networking Instant On AP32 (RW) [全新免運][編號 W90132] 非採用通路或含排除條件；LBJ Aruba Instant On AP32: 露天拍賣 - 恩尚名閣 (212個評價) 【新品】Aruba HPE Networking instant On AP32(S1T23A)WiFi6E 三頻企業級 非採用通路或含排除條件；LBJ Aruba Instant On AP32: 露天拍賣 - 風和資訊 (3631個評價) HPE Aruba Instant On AP32 2x2 11ax WiFi 6E企業型三頻無線基地台(S1T23A) 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Aruba Instant On AP32\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Aruba%20Instant%20On%20AP32%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Aruba Instant On AP32\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Aruba%20Instant%20On%20AP32%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-aruba-ap21",
    "category": "wifi",
    "budget": "premium",
    "channel": "tw",
    "brand": "Aruba",
    "model": "Instant On AP21",
    "name": "HPE Aruba Instant On Wi-Fi 6 室內 AP",
    "price": {
      "currency": "TWD",
      "amount": 9912,
      "converted": 9912,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJRA900JB6BU/000001_1759470005.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJR-A900JB6BU",
    "buyLabel": "PChome",
    "specs": [
      "Wi‑Fi 6",
      "室內型 AP",
      "Mesh：Instant On 多 AP/Smart Mesh 與漫遊，需同系統管理",
      "需 PoE 或相容電源方案"
    ],
    "description": "Aruba Instant On AP21 是較入門的 Wi-Fi 6 商用 AP，適合想用 Aruba 生態但先控制單顆成本的人。",
    "pros": [
      "國際商用網路品牌，適合多 AP 漫遊與集中管理",
      "台灣 PChome 可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "屬商用無線基地台，不是家用一體式 NAT 路由器",
      "通常需既有閘道器/路由器與 PoE 或電源供應規劃"
    ],
    "bestFor": "小坪數辦公室、工作室或想用 Aruba AP 先試佈建的人。",
    "recommendation": "Aruba 入門候選：價格是 Aruba Instant On 這批裡最低，適合先買 1-2 顆測覆蓋。",
    "score": 79,
    "voltage": "多為 PoE/外接電源；台灣 PChome 通路，需確認是否含變壓器與安裝條件",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Aruba",
      "HPE",
      "Instant On",
      "Wi‑Fi 6",
      "入門 AP"
    ],
    "rank": 15,
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 9504,
      "currency": "TWD",
      "converted": 9504,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1251189728&cgp=10800",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Aruba HPE Networking Instant On 無線基地台AP21 室內型 Wi‑Fi 6 AP (S1T09A) 含變壓器",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / Aruba HPE Networking Instant On 無線基地台AP21 室內型 Wi‑Fi 6 AP (S1T09A) 含變壓器」最低價為 NT$9,504，最低點日期 2026-03-16。",
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
          "query": "site:mobile01.com \"Aruba Instant On AP21\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Aruba%20Instant%20On%20AP21%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Aruba Instant On AP21\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Aruba%20Instant%20On%20AP21%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-unifi-u6-plus",
    "category": "wifi",
    "budget": "mid",
    "channel": "global",
    "brand": "UniFi",
    "model": "U6+",
    "name": "Compact Wi-Fi 6 AP",
    "price": {
      "currency": "USD",
      "amount": 129,
      "converted": 4141,
      "confidence": "Ubiquiti 官方美國售價"
    },
    "image": "https://cdn.ecomm.ui.com/products/6d5c6141-e2e9-416a-b789-53e59416bb1a/853bc73b-f65b-4e59-a171-75c9a4a4615e.png",
    "buyUrl": "https://store.ui.com/us/en/category/all-wifi/products/u6-plus",
    "buyLabel": "Ubiquiti Store",
    "specs": [
      "Wi-Fi 6",
      "4 spatial streams",
      "Mesh：UniFi AP 可做無線 uplink/漫遊，需 UniFi Network 管理",
      "Gigabit PoE uplink"
    ],
    "description": "UniFi U6+ 是較低價的 Wi-Fi 6 AP，適合小型空間或想用多顆低單價 AP 做覆蓋的人。",
    "pros": [
      "UniFi 生態系完整，適合 gateway、switch、AP 一起管理",
      "官方美國通路售價清楚，規格與產品線更新快"
    ],
    "cons": [
      "多數 AP 需 PoE 交換器或 PoE Injector，部分配件另購",
      "海外官方價未含國際運費、進口稅與台灣保固"
    ],
    "bestFor": "想用 UniFi 管理，但不需要高規 6GHz 或高密度吞吐的人。",
    "recommendation": "UniFi 入門 AP 推薦：單價低、容易鋪多顆，但若裝置數很多可上 U6 Pro/U7 Pro。",
    "score": 78,
    "voltage": "PoE 供電；海外官方通路，需確認 PoE 交換器/Injector、插頭與台灣保固",
    "warranty": "Ubiquiti 官方美國通路；海外運費、進口稅與台灣保固另計",
    "tags": [
      "UniFi",
      "Ubiquiti",
      "Wi-Fi 6",
      "PoE",
      "入門 AP"
    ],
    "rank": 16,
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ UniFi U6+: iOPEN Mall - MikroTik 台灣代理 (284人次購買) UniFi U6+ U6-Pro U7-Pro 專用造型檯燈座 型號/規格不相符；LBJ UniFi U6+: 蝦皮購物 - MikroTik 台灣代理 UniFi U6+ U6-Pro U7-Pro 專用造型檯燈座 型號/規格不相符；LBJ UniFi U6+: 露天拍賣 - MikroTik台灣代理 (5001個評價) UniFi U6+ U6-Pro U7-Pro 專用造型檯燈座 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 U6+ 使用者回報 Wi-Fi 用戶端整批斷線、拒絕重新連接，或 SSID 停止廣播；重啟通常只能暫時恢復。",
      "issues": [
        {
          "title": "用戶端整批斷線或 SSID 停止服務",
          "detail": "回報涵蓋不同 PoE 來源與交換器，部分每天多次發生；部署後應以目前穩定韌體長時間測試，並保留控制器事件與 AP 重啟紀錄。",
          "reportCount": 6,
          "sources": [
            {
              "platform": "Reddit",
              "title": "U6+ dropping all clients",
              "url": "https://www.reddit.com/r/Ubiquiti/comments/1s37bw2/u6_dropping_all_clients/"
            },
            {
              "platform": "Reddit",
              "title": "Fix to U6+ forcing disconnect of some or all clients",
              "url": "https://www.reddit.com/r/Ubiquiti/comments/1fdk2bu/fix_to_u6_and_pro_forcing_disconnect_of_some_or/"
            },
            {
              "platform": "Reddit",
              "title": "AP U6+ keeps on disconnecting",
              "url": "https://www.reddit.com/r/Ubiquiti/comments/1csgcd5/ap_u6_plus_keeps_on_disconnecting/"
            },
            {
              "platform": "Reddit",
              "title": "U6+ connection issues",
              "url": "https://www.reddit.com/r/Ubiquiti/comments/191w281/u6_has_anyone_had_issues_with_this/"
            },
            {
              "platform": "Ubiquiti Community",
              "title": "All Wi-Fi devices disconnect after five minutes",
              "url": "https://community.ui.com/questions/All-wifi-devices-disconnects-after-5min/a70cf799-6c87-4724-8906-41bb4e83cafc"
            },
            {
              "platform": "Ubiquiti Community",
              "title": "U6+ keeps disconnecting",
              "url": "https://community.ui.com/questions/U6-keeps-disconnecting/3619ee47-3fac-4efb-b149-36c9d01b2f94"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "wifi-unifi-u7-pro-max",
    "category": "wifi",
    "budget": "premium",
    "channel": "global",
    "brand": "UniFi",
    "model": "U7 Pro Max",
    "name": "Wi-Fi 7 8-stream Ceiling AP",
    "price": {
      "currency": "USD",
      "amount": 279,
      "converted": 8956,
      "confidence": "Ubiquiti 官方美國售價"
    },
    "image": "https://cdn.ecomm.ui.com/products/350070a0-ae43-431b-b052-8e849c3b0a75/bad94693-bc54-4ab4-b060-9b972401941c.png",
    "buyUrl": "https://store.ui.com/us/en/category/all-wifi/products/u7-pro-max",
    "buyLabel": "Ubiquiti Store",
    "specs": [
      "Wi-Fi 7",
      "8 spatial streams，支援 6GHz",
      "Mesh：UniFi AP 可做無線 uplink/漫遊，需 UniFi Network 管理",
      "2.5GbE PoE+ uplink"
    ],
    "description": "UniFi U7 Pro Max 是更高階的 Wi-Fi 7 AP，適合高密度、重視頻譜掃描與長期規格餘裕的場域。",
    "pros": [
      "UniFi 生態系完整，適合 gateway、switch、AP 一起管理",
      "官方美國通路售價清楚，規格與產品線更新快"
    ],
    "cons": [
      "多數 AP 需 PoE 交換器或 PoE Injector，部分配件另購",
      "海外官方價未含國際運費、進口稅與台灣保固"
    ],
    "bestFor": "高裝置密度、小型辦公室或想一步到位買 UniFi 旗艦 AP 的人。",
    "recommendation": "UniFi 旗艦候選：規格最完整但價格高，除非環境很吃無線容量，否則 U7 Pro 通常更均衡。",
    "score": 77,
    "voltage": "PoE+ 供電；海外官方通路，需確認 PoE 交換器/Injector、插頭與台灣保固",
    "warranty": "Ubiquiti 官方美國通路；海外運費、進口稅與台灣保固另計",
    "tags": [
      "UniFi",
      "Ubiquiti",
      "Wi-Fi 7",
      "PoE",
      "旗艦 AP"
    ],
    "rank": 17,
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ UniFi U7 Pro Max: 露天拍賣 - 小新優選 (1373個評價) 【小新嚴選】優倍快ubnt U7-Pro-Max 2.5G WiFi7無線UniFi吸頂AP，原裝拆機下來的，支持6G無 非採用通路或含排除條件；LBJ UniFi U7 Pro Max: 露天拍賣 - gadgetpapa的賣場 (63個評價) 代購全新未拆 新品 Ubiquiti UNIFI U7 Pro Max Wi-Fi 7 旗艦基地台 非採用通路或含排除條件；LBJ UniFi U7 Pro Max: 露天拍賣 - 風行嚴選 (2933個評價) 【風行嚴選】UBNT優倍快U7-PRO-MAX wifi7大戶型企業級吸頂無線AP 2.5G UniFi【公司貨】 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位同型號使用者回報 2.4GHz IoT 裝置會出現 DHCP／DNS timeout、高封包遺失或斷線重連。",
      "issues": [
        {
          "title": "2.4GHz IoT 連線、DHCP／DNS 與封包遺失問題",
          "detail": "智慧家電可能在連上後很快掉線，或出現嚴重封包遺失；建議先以目前穩定韌體及獨立 IoT SSID 實測，再決定大量部署。",
          "reportCount": 8,
          "sources": [
            {
              "platform": "Ubiquiti Community",
              "title": "U7 Pro Max connection issues with IoT devices",
              "url": "https://community.ui.com/questions/U7-Pro-Max-connection-issues-with-IoT-devices/79f46435-0180-4216-b19a-524ddf92ba11"
            },
            {
              "platform": "Reddit",
              "title": "IoT 2GHz issues on new U7 Pro Max",
              "url": "https://www.reddit.com/r/Ubiquiti/comments/1d9peae/iot_2ghz_issues_on_new_u7_pro_max/"
            },
            {
              "platform": "Reddit",
              "title": "IoT devices won't connect to WiFi",
              "url": "https://www.reddit.com/r/Ubiquiti/comments/1fnsctj/new_and_some_old_iot_devices_wont_connect_to_wifi/"
            },
            {
              "platform": "Reddit",
              "title": "All devices disconnecting from 2.4GHz band",
              "url": "https://www.reddit.com/r/Ubiquiti/comments/1gra06l/all_devices_disconnecting_from_24ghz_band/"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "wifi-asus-rt-be82u",
    "category": "wifi",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "brand": "ASUS",
    "model": "RT-BE82U",
    "name": "BE6500 雙頻 Wi-Fi 7 路由器",
    "price": {
      "currency": "TWD",
      "amount": 4999,
      "converted": 4999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFLPA900IV4B6/000001_1783556530.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFLP-A900IV4B6",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE6500 雙頻",
      "Mesh：支援 AiMesh",
      "2.5G/Gigabit 依商品頁"
    ],
    "description": "ASUS RT-BE82U 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想比 RT-BE58U 再上一步、仍保留 AiMesh 擴充的人。",
    "recommendation": "ASUS 中階推薦：價格和規格落在甜蜜點，適合單台主路由或 AiMesh 主節點。",
    "score": 85,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "AiMesh",
      "ASUS",
      "中階",
      "Wi-Fi 7"
    ],
    "releaseDate": "2025-04-30",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ ASUS RT-BE82U: Momo富邦購物 (店+)【ASUS 華碩】RT-BE82U BE6500 雙頻 WiFi 7 AiMesh 路由器 分享器 型號/規格不相符；LBJ ASUS RT-BE82U: 蝦皮商城 - 蝦皮直營 - 3C家電館 ASUS 華碩 RT-BE82U 路由器 WiFi 7 Ai Mesh 6500Mbps 分享器 廠商直送 型號/規格不相符；LBJ ASUS RT-BE82U: 蝦皮商城 - ROG 華碩授權店 | 電競周邊館 ASUS 華碩 RT-BE82U 路由器 WiFi 7 雙頻 AiMesh 分享器 Wifi分享器 網路交換器 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"ASUS RT-BE82U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22ASUS%20RT-BE82U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"ASUS RT-BE82U\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22ASUS%20RT-BE82U%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-tplink-archer-be700",
    "category": "wifi",
    "rank": 19,
    "budget": "mid",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Archer BE700",
    "name": "BE15000 三頻 Wi-Fi 7 10G 路由器",
    "price": {
      "currency": "TWD",
      "amount": 7999,
      "converted": 7999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJBA900I4F5A/000001_1780372394.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJB-A900I4F5A",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE15000 三頻",
      "Mesh：支援 EasyMesh",
      "10G + 多 Gigabit"
    ],
    "description": "TP-Link Archer BE700 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "有 NAS、2G/10G 內網或高階遊戲需求，但不一定要 Mesh 套組的人。",
    "recommendation": "高階單機 CP：比頂規 BE805/BE900 便宜不少，仍有三頻與 10G 能力。",
    "score": 85,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "EasyMesh",
      "10G",
      "三頻",
      "高階"
    ],
    "releaseDate": "2025-01-20",
    "historicalLow": {
      "status": "found",
      "amount": 5618,
      "currency": "TWD",
      "converted": 5618,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1239005452&cgp=7999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【TP-Link】Wi-Fi 7 BE15000三頻8串流10G無線網路路由器 分享器(支援AI筆電/EasyMesh/VPN/Archer BE700)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【TP-Link】Wi-Fi 7 BE15000三頻8串流10G無線網路路由器 分享器(支援AI筆電/EasyMesh/VPN/Archer BE700)」最低價為 NT$5,618，最低點日期 2026-06-25。",
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
          "query": "site:mobile01.com \"TP-Link Archer BE700\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22TP-Link%20Archer%20BE700%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"TP-Link Archer BE700\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22TP-Link%20Archer%20BE700%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-dlink-r95",
    "category": "wifi",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "D-Link",
    "model": "R95",
    "name": "BE9500 Wi-Fi 7 三頻 2.5G Mesh 路由器",
    "price": {
      "currency": "TWD",
      "amount": 5299,
      "converted": 5299,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJ6A900IZ71A/000001_1755490950.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJ6-A900IZ71A",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE9500 三頻",
      "Mesh：支援 AQUILA PRO AI Mesh",
      "2.5G + Gigabit"
    ],
    "description": "D-Link R95 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想買 D-Link 三頻 Wi-Fi 7 主路由，並保留 Mesh 擴充的人。",
    "recommendation": "D-Link 高規推薦：三頻與 2.5G 價格不高，台灣品牌通路與維修辨識度佳。",
    "score": 84,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "三頻",
      "D-Link",
      "2.5G"
    ],
    "releaseDate": "2026-04-16",
    "historicalLow": {
      "status": "found",
      "amount": 4599,
      "currency": "TWD",
      "converted": 4599,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1271123704&cgp=45995299",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【D-Link】R95 BE9500 Wi-Fi 7 無線網路 路由器 分享器 台灣製造",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【D-Link】R95 BE9500 Wi-Fi 7 無線網路 路由器 分享器 台灣製造」最低價為 NT$4,599，最低點日期 2026-06-09。",
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
          "query": "site:mobile01.com \"D-Link R95\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22D-Link%20R95%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"D-Link R95\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22D-Link%20R95%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-acer-predator-t7",
    "category": "wifi",
    "rank": 21,
    "budget": "mid",
    "channel": "tw",
    "brand": "Acer",
    "model": "Predator Connect T7",
    "name": "BE11000 Mesh Wi-Fi 7 電競路由器",
    "price": {
      "currency": "TWD",
      "amount": 5290,
      "converted": 5290,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAF02A900I473A/000001_1732699929.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAF02-A900I473A",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE11000 三頻",
      "Mesh：支援 Mesh",
      "2.5G/Gigabit 依商品頁"
    ],
    "description": "Acer Predator Connect T7 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "Acer/Predator 使用者、想要電競外型和三頻 Wi-Fi 7 的人。",
    "recommendation": "電競特色款：價格相對友善且支援 Mesh，但管理生態成熟度仍可和 ASUS/TP-Link 比較。",
    "score": 83,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "電競",
      "Acer",
      "三頻"
    ],
    "releaseDate": "2024-01-08",
    "historicalLow": {
      "status": "found",
      "amount": 5290,
      "currency": "TWD",
      "converted": 5290,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DRAF02-A900I473A",
      "sourceTitle": "PChome 商品頁：Acer 宏碁 Predator Connect T7 BE11000 Mesh Wi-Fi 7 電競路由器 / Acer 宏碁 Predator Connect T7 BE11000 Mesh Wi-Fi 7 電競路由器",
      "evidenceSnippet": "PChome 商品 API 於 2026-07-10 回傳同一商品頁「Acer 宏碁 Predator Connect T7 BE11000 Mesh Wi-Fi 7 電競路由器 / Acer 宏碁 Predator Connect T7 BE11000 Mesh Wi-Fi 7 電競路由器」查核價 NT$5,290，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-10",
      "note": "採用 PChome 24h 同一商品頁可公開查核現價作為本次觀測到的最低價；同型號/規格並排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Acer Predator Connect T7\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Acer%20Predator%20Connect%20T7%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Acer Predator Connect T7\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Acer%20Predator%20Connect%20T7%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-mercusys-halo-h80x-3pack",
    "category": "wifi",
    "rank": 22,
    "budget": "mid",
    "channel": "tw",
    "brand": "Mercusys",
    "model": "Halo H80X 3入",
    "name": "AX3000 Wi-Fi 6 Mesh 網狀路由器三入組",
    "price": {
      "currency": "TWD",
      "amount": 4199,
      "converted": 4199,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFEMA900F9H1Y/000001_1774858877.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFEM-A900F9H1Y",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX3000 雙頻",
      "Mesh：支援 Halo Mesh，三入組",
      "Gigabit 有線埠"
    ],
    "description": "Mercusys Halo H80X 3入 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想用低預算一次鋪 3 顆，網速需求不追求 Wi-Fi 7 的家庭。",
    "recommendation": "低價三入 Mesh：價格非常漂亮，適合先解決死角，但長期韌體與售後可排在 TP-Link/ASUS 之後。",
    "score": 82,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "三入組",
      "Wi-Fi 6",
      "低價"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2799,
      "currency": "TWD",
      "converted": 2799,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1229757201&cgp=4199",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Mercusys 水星 (3入組) Halo H80X Wi-Fi 6 AX3000 雙頻 全Gigabit 真Mesh路由器 wifi分享器 全屋網狀",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / Mercusys 水星 (3入組) Halo H80X Wi-Fi 6 AX3000 雙頻 全Gigabit 真Mesh路由器 wifi分享器 全屋網狀」最低價為 NT$2,799，最低點日期 2024-08-21。",
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
          "query": "site:mobile01.com \"Mercusys Halo H80X 3入\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Mercusys%20Halo%20H80X%203%E5%85%A5%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Mercusys Halo H80X 3入\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Mercusys%20Halo%20H80X%203%E5%85%A5%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-xiaomi-ax3000-2pack",
    "category": "wifi",
    "rank": 23,
    "budget": "value",
    "channel": "tw",
    "brand": "Xiaomi",
    "model": "AX3000 2入",
    "name": "AX3000 Mesh 路由器兩件裝",
    "price": {
      "currency": "TWD",
      "amount": 2159,
      "converted": 2159,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DYANAIA900HNEUP/000001_1730700224.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DYANAI-A900HNEUP",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX3000 雙頻",
      "Mesh：支援 Xiaomi Mesh，兩件裝",
      "Gigabit 有線埠"
    ],
    "description": "Xiaomi AX3000 2入 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "預算很低、裝置數不多、只想改善基本覆蓋的小家庭。",
    "recommendation": "超低價 Mesh：兩件裝價格非常低，但若重視售後與長期韌體，ASUS/TP-Link 仍更安心。",
    "score": 81,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "二入組",
      "低價",
      "Xiaomi"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1839,
      "currency": "TWD",
      "converted": 1839,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1250667476&cgp=2159",
      "sourceTitle": "LBJ 比價撿便宜歷史價格：Xiaomi AX3000 Mesh 路由器兩件裝",
      "evidenceSnippet": "LBJ history for the Xiaomi Taiwan official two-pack contains 2026-06-19 at NT$1,839.",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "已由 worker 查核 BigGo、FindPrice、LBJ 與 PChome/小米官方；採 LBJ 小米台灣官方同款兩件裝 2026-06-19 NT$1,839。低於此價的不同型號、單件裝、福利品、二手或個人賣場候選均排除。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 Xiaomi AX3000 使用者回報多層 Mesh 節點常只連主路由器，不能穩定串接較近的 AX3000，造成遠端節點訊號或速度不佳。",
      "issues": [
        {
          "title": "無線 Mesh 節點偏向星狀連回主機，無法指定較近上游",
          "detail": "問題只影響多節點無線 Mesh 情境；兩入組與單入硬體皆為相同 AX3000。若需要跨樓層多跳串接，建議優先規劃有線回程，並在退換貨期內確認節點實際拓樸。",
          "reportCount": 8,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Problem with Mesh on AX3000 — all nodes connecting to main router",
              "url": "https://www.reddit.com/r/Xiaomi/comments/13ijs0u/problem_with_mesh_on_ax3000_all_nodes_connecting/"
            },
            {
              "platform": "Lowyat Forum",
              "title": "Xiaomi AX3000 Mesh satellite ignores nearer node",
              "url": "https://forum.lowyat.net/topic/5441492"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "wifi-tplink-archer-be220",
    "category": "wifi",
    "rank": 24,
    "budget": "value",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Archer BE220",
    "name": "BE3600 雙頻 Gigabit Wi-Fi 7 路由器",
    "price": {
      "currency": "TWD",
      "amount": 2290,
      "converted": 2290,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFLVA900K13CR/000001_1779257487.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFLV-A900K13CR",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：未特別標示 Mesh",
      "Gigabit 有線埠"
    ],
    "description": "TP-Link Archer BE220 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "小坪數、只需要單台便宜 Wi-Fi 7 主路由的人。",
    "recommendation": "單台低價推薦：價格低但不是 Mesh 首選，若要 2-3 台串接建議改 Deco 系列。",
    "score": 80,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "單台",
      "低價",
      "TP-Link",
      "Wi-Fi 7"
    ],
    "releaseDate": "2024-11-07",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ TP-Link Archer BE220: HOTAI購 【HOTAI購】【TP-Link】Archer BE220 Wi-Fi 7 BE3600 雙頻 Gigabit 無線網路路由器 型號/規格不相符；LBJ TP-Link Archer BE220: 蝦皮商城 - 愛買線上購物 TP-Link Archer BE220 BE3600雙頻 Wi-Fi 7路由器【愛買】 型號/規格不相符；LBJ TP-Link Archer BE220: 蝦皮商城 - 綠風潮網路商城 TP-LINK Archer BE220 BE3600 雙頻Wi-Fi 7路由器 綠風潮 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TP-Link Archer BE220\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22TP-Link%20Archer%20BE220%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"TP-Link Archer BE220\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22TP-Link%20Archer%20BE220%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-mercusys-mr27be",
    "category": "wifi",
    "rank": 25,
    "budget": "value",
    "channel": "tw",
    "brand": "Mercusys",
    "model": "MR27BE",
    "name": "BE3600 雙頻 2.5G Wi-Fi 7 路由器",
    "price": {
      "currency": "TWD",
      "amount": 1890,
      "converted": 1890,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBC1TA900IR9CO/000001_1746532107.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBC1T-A900IR9CO",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：未特別標示 Mesh",
      "2.5G + Gigabit"
    ],
    "description": "Mercusys MR27BE 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想最低成本進 Wi-Fi 7 與 2.5G 的小空間使用者。",
    "recommendation": "入門價位很強，但若要全屋 Mesh 串接，請優先看 Halo/Deco/ZenWiFi。",
    "score": 79,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "低價",
      "2.5G",
      "單台",
      "Mercusys"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1399,
      "currency": "TWD",
      "converted": 1399,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1233322413&cgp=2208",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Mercusys 水星 MR27BE WiFi 7 BE3600 雙頻 2.5 Gigabit 無線網路路由器(Wi-Fi 7 分享器/MOD/VPN)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / Mercusys 水星 MR27BE WiFi 7 BE3600 雙頻 2.5 Gigabit 無線網路路由器(Wi-Fi 7 分享器/MOD/VPN)」最低價為 NT$1,399，最低點日期 2025-11-07。",
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
          "query": "site:mobile01.com \"Mercusys MR27BE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Mercusys%20MR27BE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Mercusys MR27BE\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Mercusys%20MR27BE%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-totolink-be5",
    "category": "wifi",
    "rank": 26,
    "budget": "value",
    "channel": "tw",
    "brand": "TOTOLINK",
    "model": "BE5",
    "name": "BE5100 Wi-Fi 7 Mesh 網狀路由器系統",
    "price": {
      "currency": "TWD",
      "amount": 1990,
      "converted": 1990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJDA900JJ4D4/000001_1765268990.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJD-A900JJ4D4",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE5100 雙頻",
      "Mesh：支援 Mesh",
      "Gigabit 有線埠"
    ],
    "description": "TOTOLINK BE5 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想找低價 Wi-Fi 7 Mesh 單顆，再慢慢補同品牌節點的人。",
    "recommendation": "低價 Mesh 候選：規格吸引人，但品牌售後與韌體體驗建議保守看待。",
    "score": 79,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "低價",
      "TOTOLINK",
      "Wi-Fi 7"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1791,
      "currency": "TWD",
      "converted": 1791,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1259422159&cgp=17995307",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【TOTOLINK】BE5 BE5100 Wi-Fi7 Mesh 網狀路由器",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【TOTOLINK】BE5 BE5100 Wi-Fi7 Mesh 網狀路由器」最低價為 NT$1,791，最低點日期 2026-02-18。",
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
          "query": "site:mobile01.com \"TOTOLINK BE5\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22TOTOLINK%20BE5%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"TOTOLINK BE5\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22TOTOLINK%20BE5%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-dlink-m36",
    "category": "wifi",
    "rank": 27,
    "budget": "value",
    "channel": "tw",
    "brand": "D-Link",
    "model": "M36",
    "name": "BE3600 Wi-Fi 7 2.5G 無線 Mesh 路由器",
    "price": {
      "currency": "TWD",
      "amount": 2599,
      "converted": 2599,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJ6A900JFC98/000001_1782210759.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJ6-A900JFC98",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：支援 AQUILA PRO AI Mesh",
      "2.5G + Gigabit"
    ],
    "description": "D-Link M36 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "偏好 D-Link、想先買單顆 Mesh 節點再擴充的人。",
    "recommendation": "D-Link 入門 Mesh：價格低、通路清楚，適合先買一顆測試覆蓋。",
    "score": 79,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "D-Link",
      "2.5G",
      "入門"
    ],
    "releaseDate": "2025-09-26",
    "historicalLow": {
      "status": "found",
      "amount": 2304,
      "currency": "TWD",
      "converted": 2304,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1273967154&cgp=2496",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：D-Link友訊 M36 BE3600 Wi-Fi 7無線路由器",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / D-Link友訊 M36 BE3600 Wi-Fi 7無線路由器」最低價為 NT$2,304，最低點日期 2026-06-21。",
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
          "query": "site:mobile01.com \"D-Link M36\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22D-Link%20M36%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"D-Link M36\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22D-Link%20M36%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-netgear-rs100",
    "category": "wifi",
    "rank": 28,
    "budget": "mid",
    "channel": "tw",
    "brand": "NETGEAR",
    "model": "Nighthawk RS100",
    "name": "BE3600 雙頻 Wi-Fi 7 路由器",
    "price": {
      "currency": "TWD",
      "amount": 4095,
      "converted": 4095,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJAA900JUQYP/000001_1774520642.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJA-A900JUQYP",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：未特別標示 Mesh",
      "Gigabit 有線埠"
    ],
    "description": "NETGEAR Nighthawk RS100 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "偏好 NETGEAR Nighthawk 單機路由器的人。",
    "recommendation": "品牌單機候選：NETGEAR 口碑佳，但若要 Mesh 應改看 Orbi 系列。",
    "score": 78,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "NETGEAR",
      "單台",
      "Wi-Fi 7",
      "Nighthawk"
    ],
    "releaseDate": "2025",
    "historicalLow": {
      "status": "found",
      "amount": 3599,
      "currency": "TWD",
      "converted": 3599,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1273531591&cgp=4095",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Netgear 網件 夜鷹 NIGHTHAWK RS100 BE3600 雙頻 WiFi 7 分享器/路由器",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / Netgear 網件 夜鷹 NIGHTHAWK RS100 BE3600 雙頻 WiFi 7 分享器/路由器」最低價為 NT$3,599，最低點日期 2026-07-02。",
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
          "query": "site:mobile01.com \"NETGEAR Nighthawk RS100\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22NETGEAR%20Nighthawk%20RS100%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"NETGEAR Nighthawk RS100\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22NETGEAR%20Nighthawk%20RS100%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-linksys-mx5502-3pack",
    "category": "wifi",
    "rank": 29,
    "budget": "premium",
    "channel": "tw",
    "brand": "Linksys",
    "model": "MX5502-AH 3入",
    "name": "AX5400 Velop Mesh Wi-Fi 6 三入組",
    "price": {
      "currency": "TWD",
      "amount": 10990,
      "converted": 10990,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFE5A900JUA8C/000001_1774227439.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFE5-A900JUA8C",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX5400 雙頻",
      "Mesh：支援 Velop Mesh，三入組",
      "Gigabit 有線埠"
    ],
    "description": "Linksys MX5502-AH 3入 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "偏好 Linksys Velop，且家中需要三顆覆蓋的人。",
    "recommendation": "Velop 三入候選：覆蓋完整，但以 Wi-Fi 6 規格來看價格偏高。",
    "score": 78,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "三入組",
      "Linksys",
      "Wi-Fi 6"
    ],
    "releaseDate": "2021-12",
    "historicalLow": {
      "status": "found",
      "amount": 9680,
      "currency": "TWD",
      "converted": 9680,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1272070343&cgp=10010",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：昌運監視器Linksys MX5502-AH AX5400 Velop Mesh WiFi 6雙頻網狀路由器三入(3入)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「東森購物 / 昌運監視器Linksys MX5502-AH AX5400 Velop Mesh WiFi 6雙頻網狀路由器三入(3入)」最低價為 NT$9,680，最低點日期 2026-04-10。",
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
          "query": "site:mobile01.com \"Linksys MX5502-AH 3入\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Linksys%20MX5502-AH%203%E5%85%A5%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Linksys MX5502-AH 3入\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Linksys%20MX5502-AH%203%E5%85%A5%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-synology-rt6600ax",
    "category": "wifi",
    "rank": 30,
    "budget": "premium",
    "channel": "tw",
    "brand": "Synology",
    "model": "RT6600ax",
    "name": "三頻 Wi-Fi 6 Router 無線路由器",
    "price": {
      "currency": "TWD",
      "amount": 9999,
      "converted": 9999,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBS4VA900JIQU0/000001_1764896894.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBS4V-A900JIQU0",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX6600 三頻",
      "Mesh：未特別標示 Mesh",
      "2.5G + Gigabit"
    ],
    "description": "Synology RT6600ax 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想要 Synology SRM、安全控管與三頻 Wi-Fi 6 的進階家庭。",
    "recommendation": "進階管理推薦：適合懂網路設定的人，純 Mesh 覆蓋則 WRX560 更直覺。",
    "score": 78,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "三頻",
      "Synology",
      "管理",
      "Wi-Fi 6"
    ],
    "releaseDate": "2022-05-11",
    "historicalLow": {
      "status": "found",
      "amount": 9499,
      "currency": "TWD",
      "converted": 9499,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1138069196&cgp=9999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Synology 群暉科技】RT6600ax 三頻 WiFi 6 路由器/分享器",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Synology 群暉科技】RT6600ax 三頻 WiFi 6 路由器/分享器」最低價為 NT$9,499，最低點日期 2024-12-04。",
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
          "query": "site:mobile01.com \"Synology RT6600ax\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Synology%20RT6600ax%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Synology RT6600ax\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Synology%20RT6600ax%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-asus-rt-be88u",
    "category": "wifi",
    "rank": 31,
    "budget": "premium",
    "channel": "tw",
    "brand": "ASUS",
    "model": "RT-BE88U",
    "name": "BE7200 Wi-Fi 7 AiMesh 雙頻電競路由器",
    "price": {
      "currency": "TWD",
      "amount": 9999,
      "converted": 9999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJ5A900HRBD9/000001_1760580708.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJ5-A900HRBD9",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE7200 雙頻",
      "Mesh：支援 AiMesh",
      "多 Gigabit / 10G 依商品頁"
    ],
    "description": "ASUS RT-BE88U 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "有多台有線設備、NAS、遊戲主機，並想保留 AiMesh 的進階使用者。",
    "recommendation": "高階 ASUS 推薦：有線擴充與韌體功能強，但一般家庭可先看 ZenWiFi/RT-BE58U。",
    "score": 77,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "AiMesh",
      "高階",
      "ASUS",
      "多埠"
    ],
    "releaseDate": "2024-03-27",
    "historicalLow": {
      "status": "found",
      "amount": 8111,
      "currency": "TWD",
      "converted": 8111,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1237717540&cgp=8488",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：ASUS 華碩 ROG Rapture RT-BE88U BE7200 WiFi 7 雙頻電競路由器",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / ASUS 華碩 ROG Rapture RT-BE88U BE7200 WiFi 7 雙頻電競路由器」最低價為 NT$8,111，最低點日期 2025-11-01。",
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
          "query": "site:mobile01.com \"ASUS RT-BE88U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22ASUS%20RT-BE88U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"ASUS RT-BE88U\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22ASUS%20RT-BE88U%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-tplink-archer-be805",
    "category": "wifi",
    "rank": 32,
    "budget": "premium",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Archer BE805",
    "name": "BE19000 三頻 10G Wi-Fi 7 路由器",
    "price": {
      "currency": "TWD",
      "amount": 12999,
      "converted": 12999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAN5BA900HQT2A/000001_1780372414.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAN5B-A900HQT2A",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE19000 三頻",
      "Mesh：未特別標示 Mesh",
      "雙 10G"
    ],
    "description": "TP-Link Archer BE805 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "追求單台高吞吐、雙 10G、有線內網與高速 NAS 的玩家。",
    "recommendation": "高吞吐單機：規格漂亮，但若主要需求是全屋覆蓋，Deco Mesh 更適合。",
    "score": 77,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "10G",
      "三頻",
      "TP-Link",
      "旗艦"
    ],
    "releaseDate": "2024-08-30",
    "historicalLow": {
      "status": "found",
      "amount": 8388,
      "currency": "TWD",
      "converted": 8388,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1232197980&cgp=12999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【TP-Link】Wi-Fi 7 BE19000三頻12串流10G無線網路路由器 分享器(支援AI筆電/EasyMesh/VPN/Archer BE805)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【TP-Link】Wi-Fi 7 BE19000三頻12串流10G無線網路路由器 分享器(支援AI筆電/EasyMesh/VPN/Archer BE805)」最低價為 NT$8,388，最低點日期 2025-08-18。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 Archer BE805 使用者回報 2.4／5GHz SSID 或全部 Wi-Fi 用戶端會隨機消失或斷線，通常需重新啟動。",
      "issues": [
        {
          "title": "Wi-Fi SSID 消失或全部用戶端斷線",
          "detail": "回報可能受韌體版本影響，但後續版本仍有人遇到；建議確認硬體版本與穩定韌體，並在多頻段、多用戶端負載下測試。",
          "reportCount": 7,
          "sources": [
            {
              "platform": "TP-Link Community",
              "title": "Archer BE805 keep dropping",
              "url": "https://community.tp-link.com/en/home/forum/topic/703524"
            },
            {
              "platform": "TP-Link Community",
              "title": "2.4G/5GHz Wi-Fi function stops after a while",
              "url": "https://community.tp-link.com/en/home/forum/topic/741120?moduleId=40"
            },
            {
              "platform": "Reddit",
              "title": "How is the BE11000 as far as wireless speed and range?",
              "url": "https://www.reddit.com/r/TpLink/comments/1gqs7z8/how_is_the_be11000_as_far_as_wireless_speed_and/"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "wifi-tplink-archer-be900",
    "category": "wifi",
    "rank": 33,
    "budget": "premium",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Archer BE900",
    "name": "BE24000 四頻 10G Wi-Fi 7 路由器",
    "price": {
      "currency": "TWD",
      "amount": 16999,
      "converted": 16999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAN5BA900HF2LS/000001_1782099036.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAN5B-A900HF2LS",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE24000 四頻",
      "Mesh：未特別標示 Mesh",
      "雙 10G"
    ],
    "description": "TP-Link Archer BE900 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想看 TP-Link 單機天花板、家中有大量高階裝置的人。",
    "recommendation": "旗艦規格參考：性能上限高，但價格也高，不是多數家庭 CP 首選。",
    "score": 76,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "10G",
      "四頻",
      "旗艦",
      "TP-Link"
    ],
    "releaseDate": "2022-12-31",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ TP-Link Archer BE900: 蝦皮商城 - 順發3C SUNFAR TP-LINK Archer BE900 BE24000四頻Wi-Fi 7 路由器 型號/規格不相符；LBJ TP-Link Archer BE900: 蝦皮商城 - TP-Link官方旗艦店 TP-Link Archer BE900 BE24000 wifi分享器 wifi7 四頻10G 路由器 型號/規格不相符；LBJ TP-Link Archer BE900: Momo富邦購物 【TP-Link】Wi-Fi 7 BE24000四頻16串流10G無線網路路由器 分享器(支援AI筆電/EasyMesh/VPN/Archer BE900) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 Archer BE900 使用者回報路由器會不定時自行重新啟動或完全凍結，造成所有裝置斷線。",
      "issues": [
        {
          "title": "自行重啟或完全凍結",
          "detail": "部分回報可能與特定韌體版本有關，官方後續版本曾修正重啟問題；仍建議先更新、重設後測試，並避免在確認穩定前承擔關鍵網路。",
          "reportCount": 6,
          "sources": [
            {
              "platform": "TP-Link Community",
              "title": "Archer BE900 v2.6 restarts by itself",
              "url": "https://community.tp-link.com/en/home/forum/topic/745810"
            },
            {
              "platform": "TP-Link Community",
              "title": "BE900 restarts suddenly",
              "url": "https://community.tp-link.com/en/home/forum/topic/744458"
            },
            {
              "platform": "TP-Link Community",
              "title": "Router completely Freezes",
              "url": "https://community.tp-link.com/us/home/forum/topic/732228?replyId=1483126"
            },
            {
              "platform": "TP-Link Community",
              "title": "Keeps rebooting and factory reset does not work",
              "url": "https://community.tp-link.com/en/home/forum/topic/731430"
            },
            {
              "platform": "Reddit",
              "title": "Finally got my hands on Archer BE900",
              "url": "https://www.reddit.com/r/TpLink/comments/12mkbeb/finally_got_my_hands_on_this_one_archer_be900/"
            },
            {
              "platform": "Reddit",
              "title": "BE900 latest firmware looking brighter",
              "url": "https://www.reddit.com/r/TpLink/comments/193iy1g/be900_latest_firmware_looking_brighter/"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "wifi-netgear-rs300",
    "category": "wifi",
    "rank": 34,
    "budget": "mid",
    "channel": "tw",
    "brand": "NETGEAR",
    "model": "Nighthawk RS300",
    "name": "BE9300 三頻 Wi-Fi 7 旗艦路由器",
    "price": {
      "currency": "TWD",
      "amount": 8700,
      "converted": 8700,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJAA900IFBVA/000001_1780997121.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJA-A900IFBVA",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE9300 三頻",
      "Mesh：未特別標示 Mesh",
      "2.5G/Gigabit 依商品頁"
    ],
    "description": "NETGEAR Nighthawk RS300 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "偏好 NETGEAR Nighthawk，想要三頻 Wi-Fi 7 單台主路由的人。",
    "recommendation": "NETGEAR 高階單機：品牌與硬體口碑不錯，但 Mesh 串接應選 Orbi。",
    "score": 76,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "NETGEAR",
      "三頻",
      "單台",
      "高階"
    ],
    "releaseDate": "2024-06-19",
    "historicalLow": {
      "status": "found",
      "amount": 6818,
      "currency": "TWD",
      "converted": 6818,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1244553087&cgp=8700",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Netgear 網件 夜鷹 Nighthawk RS300 BE9300 6串流 三頻 WiFi 7 旗艦級分享器/路由器",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / Netgear 網件 夜鷹 Nighthawk RS300 BE9300 6串流 三頻 WiFi 7 旗艦級分享器/路由器」最低價為 NT$6,818，最低點日期 2026-06-29。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 RS300 使用者回報路由器會隨機讓有線或無線裝置失去 Internet，部分情況必須斷電重啟。",
      "issues": [
        {
          "title": "有線與無線裝置隨機失去網路",
          "detail": "案例包含升級韌體後 Wi-Fi 隨機斷線、新機每數分鐘失網，以及重啟後很快復發；建議保留退換貨期並同時測試有線與無線長時間負載。",
          "reportCount": 6,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Nighthawk RS300 driving me insane",
              "url": "https://www.reddit.com/r/NETGEAR/comments/1h2ynvi/nighthawk_rs300_driving_me_insane/"
            },
            {
              "platform": "NETGEAR Community",
              "title": "Nighthawk RS300 randomly fails, requires power reset",
              "url": "https://community.netgear.com/discussions/nighthawk-wifi-7-be/nighthawk-rs300-wireless-router-randomly-fails-requires-power-reset/2449770"
            },
            {
              "platform": "NETGEAR Community",
              "title": "NETGEAR Nighthawk RS300 disconnects after firmware update",
              "url": "https://community.netgear.com/discussions/nighthawk-wifi-7-be/re-netgear-nighthawk-rs300/2416061"
            },
            {
              "platform": "NETGEAR Community",
              "title": "RS300 random disconnect from the Internet",
              "url": "https://community.netgear.com/discussions/nighthawk-wifi-7-be/re-rs300-random-disconnect-from-the-internet/2450511"
            },
            {
              "platform": "NETGEAR Community",
              "title": "RS300 reply in Nighthawk Wi-Fi discussion",
              "url": "https://community.netgear.com/discussions/nighthawk-wifi-7-be/rif--nighthawk-rs200---no-wifi-after-reboot---internet-via-lan-ok/2437053/replies/2437074"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "wifi-zyxel-usg-lite-60ax",
    "category": "wifi",
    "rank": 35,
    "budget": "mid",
    "channel": "tw",
    "brand": "Zyxel",
    "model": "USG LITE 60AX",
    "name": "AX6000 Wi-Fi 6 雲端安全路由器",
    "price": {
      "currency": "TWD",
      "amount": 6480,
      "converted": 6480,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAF0IA900HO2DR/000001_1777023675.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAF0I-A900HO2DR",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX6000 雙頻",
      "Mesh：未特別標示 Mesh",
      "Gigabit 有線埠"
    ],
    "description": "Zyxel USG LITE 60AX 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "重視資安防護、雲端管理或小型辦公室的人。",
    "recommendation": "資安管理候選：功能取向和一般家用 Mesh 不同，適合需要防護/控管的人。",
    "score": 76,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "資安",
      "Zyxel",
      "小辦公",
      "Wi-Fi 6"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 5661,
      "currency": "TWD",
      "converted": 5661,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1235454560&cgp=6480",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Zyxel 合勤 USG LITE 60AX AX6000 WiFi6 免費資安防護雲端安全路由器",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / Zyxel 合勤 USG LITE 60AX AX6000 WiFi6 免費資安防護雲端安全路由器」最低價為 NT$5,661，最低點日期 2025-06-16。",
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
          "query": "site:mobile01.com \"Zyxel USG LITE 60AX\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Zyxel%20USG%20LITE%2060AX%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Zyxel USG LITE 60AX\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Zyxel%20USG%20LITE%2060AX%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-msi-radix-axe6600",
    "category": "wifi",
    "rank": 36,
    "budget": "mid",
    "channel": "tw",
    "brand": "MSI",
    "model": "RadiX AXE6600",
    "name": "Wi-Fi 6E 三頻電競路由器",
    "price": {
      "currency": "TWD",
      "amount": 7790,
      "converted": 7790,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFKSA900HEQVN/000001_1713512948.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFKS-A900HEQVN",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6E",
      "AXE6600 三頻",
      "Mesh：未特別標示 Mesh",
      "2.5G/Gigabit 依商品頁"
    ],
    "description": "MSI RadiX AXE6600 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "MSI 電競設備使用者，想要 Wi-Fi 6E 三頻單台路由。",
    "recommendation": "電競單機候選：有 6GHz 頻段，但 Mesh 串接與售後成熟度可和 ASUS/TP-Link 比較。",
    "score": 75,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Wi-Fi 6E",
      "電競",
      "MSI",
      "三頻"
    ],
    "releaseDate": "2023-02-16",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ MSI RadiX AXE6600: 欣亞購物網 [欣亞購物網] MSI 微星 RadiX AXE6600 WiFi 6E Tri-Band Gaming Router 三頻電競路由器 型號/規格不相符；LBJ MSI RadiX AXE6600: Autobuy購物中心 【Autobuy購物中心】MSI 微星 RadiX AXE6600 WiFi 6E Tri-Band Gaming Router 三頻電競路由器 型號/規格不相符；LBJ MSI RadiX AXE6600: PCHome購物 MSI 微星 RadiX AXE6600 WiFi 6E Tri-Band Gaming Router 三頻電競路由器 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"MSI RadiX AXE6600\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22MSI%20RadiX%20AXE6600%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"MSI RadiX AXE6600\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22MSI%20RadiX%20AXE6600%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-acer-ovia-t360",
    "category": "wifi",
    "rank": 37,
    "budget": "value",
    "channel": "tw",
    "brand": "Acer",
    "model": "Connect Ovia T360",
    "name": "Wi-Fi 7 路由器",
    "price": {
      "currency": "TWD",
      "amount": 2990,
      "converted": 2990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJ8A900JSZV4/000001_1773200906.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJ8-A900JSZV4",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：支援 Mesh",
      "Gigabit 有線埠"
    ],
    "description": "Acer Connect Ovia T360 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想試 Acer Wi-Fi 7 入門 Mesh 生態的人。",
    "recommendation": "Acer 入門候選：價格低且標示 Mesh，但品牌網通生態仍不如傳統網通大廠完整。",
    "score": 75,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "Acer",
      "低價",
      "Wi-Fi 7"
    ],
    "releaseDate": "2026-03",
    "historicalLow": {
      "status": "found",
      "amount": 2590,
      "currency": "TWD",
      "converted": 2590,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1270863201&cgp=2590",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【燦坤線上購物】Acer Connect Ovia T360 Wi-Fi 7雙頻路由器",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「燦坤線上購物 / 【燦坤線上購物】Acer Connect Ovia T360 Wi-Fi 7雙頻路由器」最低價為 NT$2,590，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"Acer Connect Ovia T360\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Acer%20Connect%20Ovia%20T360%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Acer Connect Ovia T360\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Acer%20Connect%20Ovia%20T360%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-xiaomi-ax3000-1pack",
    "category": "wifi",
    "rank": 38,
    "budget": "value",
    "channel": "tw",
    "brand": "Xiaomi",
    "model": "AX3000 1入",
    "name": "AX3000 Mesh 路由器一件裝",
    "price": {
      "currency": "TWD",
      "amount": 1199,
      "converted": 1199,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DYANAIA900HNETW/000001_1730700267.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DYANAI-A900HNETW",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX3000 雙頻",
      "Mesh：支援 Xiaomi Mesh",
      "Gigabit 有線埠"
    ],
    "description": "Xiaomi AX3000 1入 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "預算極低的小宅或租屋族。",
    "recommendation": "低價單顆 Mesh：價格很低，可加購節點，但重視售後者仍建議上 ASUS/TP-Link。",
    "score": 74,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "低價",
      "Xiaomi",
      "Wi-Fi 6"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1095,
      "currency": "TWD",
      "converted": 1095,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1228402219&cgp=1199",
      "sourceTitle": "LBJ 比價撿便宜歷史價格：PChome Xiaomi AX3000 Mesh 路由器一件裝",
      "evidenceSnippet": "LBJ PChome history shows NT$1,095 on 2025-07-09, 2024-08-05, and 2024-07-09 for the one-pack.",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "已由 worker 查核 PChome、LBJ、BigGo 與 FindPrice；採 LBJ PChome 同品一件裝歷史低點 NT$1,095。低於此價的福利品、二手、已下架、非 AX3000 Mesh 一件裝或拍賣非官方來源均排除。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 Xiaomi AX3000 使用者回報多層 Mesh 節點常只連主路由器，不能穩定串接較近的 AX3000，造成遠端節點訊號或速度不佳。",
      "issues": [
        {
          "title": "無線 Mesh 節點偏向星狀連回主機，無法指定較近上游",
          "detail": "問題只影響多節點無線 Mesh 情境；單入與兩入組硬體皆為相同 AX3000。若需要跨樓層多跳串接，建議優先規劃有線回程，並在退換貨期內確認節點實際拓樸。",
          "reportCount": 8,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Problem with Mesh on AX3000 — all nodes connecting to main router",
              "url": "https://www.reddit.com/r/Xiaomi/comments/13ijs0u/problem_with_mesh_on_ax3000_all_nodes_connecting/"
            },
            {
              "platform": "Lowyat Forum",
              "title": "Xiaomi AX3000 Mesh satellite ignores nearer node",
              "url": "https://forum.lowyat.net/topic/5441492"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "wifi-totolink-x30-se",
    "category": "wifi",
    "rank": 39,
    "budget": "value",
    "channel": "tw",
    "brand": "TOTOLINK",
    "model": "X30 SE",
    "name": "AX3000 Wi-Fi 6 Mesh 網狀路由器系統",
    "price": {
      "currency": "TWD",
      "amount": 891,
      "converted": 891,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJ8A900JNW9S/000001_1768979044.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJ8-A900JNW9S",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX3000 雙頻",
      "Mesh：支援 Mesh",
      "Gigabit 有線埠"
    ],
    "description": "TOTOLINK X30 SE 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "只想用最低成本補 Wi-Fi 6 Mesh 覆蓋的人。",
    "recommendation": "最低價參考：價格很殺，但不作為主要推薦，適合預算優先且能接受售後風險的人。",
    "score": 73,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "最低價",
      "TOTOLINK",
      "Wi-Fi 6"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 849,
      "currency": "TWD",
      "converted": 849,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=535695770&cgp=8492501",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：TOTOLINK X30 SE AX3000 WiFi-6 雙頻無線路由器 WIFI 路由器 Wifi分享器 MESH",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - 阿義電腦｜義展科技 / TOTOLINK X30 SE AX3000 WiFi-6 雙頻無線路由器 WIFI 路由器 Wifi分享器 MESH」最低價為 NT$849，最低點日期 2026-06-09。",
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
          "query": "site:mobile01.com \"TOTOLINK X30 SE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22TOTOLINK%20X30%20SE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"TOTOLINK X30 SE\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22TOTOLINK%20X30%20SE%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-qnap-qhora-301w",
    "category": "wifi",
    "rank": 40,
    "budget": "mid",
    "channel": "tw",
    "brand": "QNAP",
    "model": "QHora-301W",
    "name": "Wi-Fi 6 雙 10GbE SD-WAN 路由器",
    "price": {
      "currency": "TWD",
      "amount": 7790,
      "converted": 7790,
      "confidence": "PChome 2026-07-10 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAG6JA900AUW3D/000001_1626400932.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAG6J-A900AUW3D",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX3600 雙頻",
      "Mesh：未特別標示 Mesh",
      "雙 10GbE"
    ],
    "description": "QNAP QHora-301W 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "單機路由規格清楚、適合集中式擺放",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "未特別標示 Mesh，不建議作為 2-3 台串接首選",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "有 QNAP NAS、10GbE 內網或 SD-WAN 需求的進階使用者。",
    "recommendation": "專業用途候選：雙 10G 很少見，但一般家庭 Mesh 覆蓋不是它的主場。",
    "score": 73,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "10G",
      "QNAP",
      "SD-WAN",
      "進階"
    ],
    "releaseDate": "2020-11-06",
    "historicalLow": {
      "status": "found",
      "amount": 7790,
      "currency": "TWD",
      "converted": 7790,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DRAG6J-A900AUW3D",
      "sourceTitle": "PChome 商品頁：QNAP 威聯通 QHora-301W 新世代 Wi-Fi 6 雙 10GbE SD-WAN 路由器 / QNAP 威聯通 QHora-301W 新世代 Wi-Fi 6 雙 10GbE SD-WAN 路由器",
      "evidenceSnippet": "PChome 商品 API 於 2026-07-10 回傳同一商品頁「QNAP 威聯通 QHora-301W 新世代 Wi-Fi 6 雙 10GbE SD-WAN 路由器 / QNAP 威聯通 QHora-301W 新世代 Wi-Fi 6 雙 10GbE SD-WAN 路由器」查核價 NT$7,790，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-10",
      "note": "採用 PChome 24h 同一商品頁可公開查核現價作為本次觀測到的最低價；同型號/規格並排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"QNAP QHora-301W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22QNAP%20QHora-301W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"QNAP QHora-301W\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22QNAP%20QHora-301W%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-cudy-ax3000-mesh",
    "category": "wifi",
    "rank": 41,
    "budget": "value",
    "channel": "tw",
    "brand": "Cudy",
    "model": "AX3000 2.5G Mesh",
    "name": "AX3000 2.5Gbps Mesh Wi-Fi 6 路由器",
    "price": {
      "currency": "TWD",
      "amount": 1720,
      "converted": 1720,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJ8A900JX7UY/000001_1776333176.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJ8-A900JX7UY",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 6",
      "AX3000 雙頻",
      "Mesh：支援 Mesh",
      "2.5G + Gigabit"
    ],
    "description": "Cudy AX3000 2.5G Mesh 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想要低價 2.5G + Wi-Fi 6 Mesh 的進階玩家。",
    "recommendation": "規格低價候選：硬體規格漂亮，但品牌售後與韌體口碑要自行斟酌。",
    "score": 72,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "2.5G",
      "低價",
      "Cudy"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1690,
      "currency": "TWD",
      "converted": 1690,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1274278799&cgp=16903290",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)cudy M3000 AX3000 MESH WIFI6 無線網狀路由器 2.5Gbps 大坪數及電競玩家適用",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)cudy M3000 AX3000 MESH WIFI6 無線網狀路由器 2.5Gbps 大坪數及電競玩家適用」最低價為 NT$1,690，最低點日期 2026-06-09。",
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
          "query": "site:mobile01.com \"Cudy AX3000 2.5G Mesh\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Cudy%20AX3000%202.5G%20Mesh%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Cudy AX3000 2.5G Mesh\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Cudy%20AX3000%202.5G%20Mesh%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-cudy-be3600",
    "category": "wifi",
    "rank": 42,
    "budget": "value",
    "channel": "tw",
    "brand": "Cudy",
    "model": "WR3600 BE3600",
    "name": "BE3600 Wi-Fi 7 雙頻無線網狀路由器",
    "price": {
      "currency": "TWD",
      "amount": 1790,
      "converted": 1790,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFLTA900JMCU4/000001_1776166910.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFLT-A900JMCU4",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：標示網狀路由器，需確認同型號 Mesh 串接",
      "Gigabit 有線埠"
    ],
    "description": "Cudy WR3600 BE3600 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想低價嘗試 Wi-Fi 7 單台路由的人。",
    "recommendation": "低價 Wi-Fi 7 參考：價格漂亮，但 Mesh 串接與售後成熟度仍建議保守看待。",
    "score": 72,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "低價",
      "Mesh",
      "Cudy",
      "Wi-Fi 7"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Cudy WR3600 BE3600: 蝦皮商城 - 蝦皮直營 - 3C家電館 【蝦皮直營】cudy WR3600 WiFi7 雙頻無線路由器 Gigabit BE3600 支援Mesh 型號/規格不相符；LBJ Cudy WR3600 BE3600: Yahoo購物中心 cudy BE3600 Wi-Fi 7 雙頻無線網狀路由器 (WR3600) 型號/規格不相符；LBJ Cudy WR3600 BE3600: Yahoo購物中心 cudy BE3600 Wi-Fi 7 雙頻無線網狀路由器 (WR3600) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Cudy WR3600 BE3600\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Cudy%20WR3600%20BE3600%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Cudy WR3600 BE3600\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Cudy%20WR3600%20BE3600%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-asus-rt-be3600hp",
    "category": "wifi",
    "rank": 43,
    "budget": "mid",
    "channel": "tw",
    "brand": "ASUS",
    "model": "RT-BE3600HP",
    "name": "BE3600 Wi-Fi 7 AiMesh 雙頻可擴充路由器",
    "price": {
      "currency": "TWD",
      "amount": 3299,
      "converted": 3299,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJ5A900K6OV8/000001_1783069758.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJ5-A900K6OV8",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：支援 AiMesh",
      "Gigabit 有線埠"
    ],
    "description": "ASUS RT-BE3600HP 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想買 ASUS 入門可擴充路由器，且偏好外接天線造型的人。",
    "recommendation": "ASUS 入門替代：和 RT-BE58U 接近，可依價格與外型挑選。",
    "score": 72,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "AiMesh",
      "ASUS",
      "入門",
      "Wi-Fi 7"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ ASUS RT-BE3600HP: PCHome購物 ASUS 華碩 RT-BE3600HP WiFi 7 AiMesh 雙頻可擴充路由器 型號/規格不相符；LBJ ASUS RT-BE3600HP: iOPEN Mall - 光華商場 德寶資訊有限公司 (可刷卡) (813人次購買) ASUS 華碩 RT-BE3600HP－Wi-Fi 7 無線路由器 高功率天線 分享器 路由器 公司貨 光華 型號/規格不相符；LBJ ASUS RT-BE3600HP: iOPEN Mall - 光華商場 3C專賣店 (1219人次購買) ASUS 華碩 RT-BE3600HP－Wi-Fi 7 無線路由器 高功率天線 分享器 路由器 公司貨 光華 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"ASUS RT-BE3600HP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22ASUS%20RT-BE3600HP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"ASUS RT-BE3600HP\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22ASUS%20RT-BE3600HP%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-tplink-deco-be22",
    "category": "wifi",
    "rank": 44,
    "budget": "value",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Deco BE22",
    "name": "BE3600 Wi-Fi 7 真 Mesh 無線路由器一入組",
    "price": {
      "currency": "TWD",
      "amount": 2699,
      "converted": 2699,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBC5UA900J0QSL/000001_1779184048.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBC5U-A900J0QSL",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：支援 Deco Mesh，單入可擴充",
      "Gigabit 有線埠"
    ],
    "description": "TP-Link Deco BE22 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想先買一顆 Deco，再逐步加到 2-3 顆的人。",
    "recommendation": "Deco 單顆擴充候選：適合先測家中死角，再按需求補同系列節點。",
    "score": 72,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "單入",
      "TP-Link",
      "可擴充"
    ],
    "releaseDate": "2025-08-27",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ TP-Link Deco BE22: 蝦皮商城 - 綠風潮網路商城 TP-LINK Deco BE22(2-pack)BE3600 Mesh 網狀路由器 綠風潮 型號/規格不相符；LBJ TP-Link Deco BE22: 蝦皮商城 - TP-Link官方旗艦店 (Wi-Fi7)TP-Link Deco BE22 BE3600 Wi-Fi7 雙頻 wifi分享器 MLO 1G 型號/規格不相符；LBJ TP-Link Deco BE22: 蝦皮商城 - QD 酷弟3C TP-LINK Deco BE22(2-pack)BE3600 Mesh 網狀路由器 酷弟3C 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-10",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TP-Link Deco BE22\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22TP-Link%20Deco%20BE22%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"TP-Link Deco BE22\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22TP-Link%20Deco%20BE22%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-mercusys-halo-h25be-2pack",
    "category": "wifi",
    "rank": 45,
    "budget": "mid",
    "channel": "tw",
    "brand": "Mercusys",
    "model": "Halo H25BE 2入",
    "name": "BE3600 雙頻真 Mesh Wi-Fi 7 路由器二入組",
    "price": {
      "currency": "TWD",
      "amount": 4699,
      "converted": 4699,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DRAFJ9A900IZ7Y3/000001_1753463373.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DRAFJ9-A900IZ7Y3",
    "buyLabel": "PChome",
    "specs": [
      "Wi-Fi 7",
      "BE3600 雙頻",
      "Mesh：支援 Halo Mesh，二入組",
      "Gigabit 有線埠"
    ],
    "description": "Mercusys Halo H25BE 2入 是 Wi-Fi 6 以上無線路由器，已排除網卡、延伸器、交換器與福利/展示/拆封品。",
    "pros": [
      "可作為多台串接/全屋覆蓋候選",
      "台灣可信通路新品，價格與圖片可查核"
    ],
    "cons": [
      "Mesh 效果仍受擺位、牆面與回程頻段影響",
      "多 Gigabit 或 Wi-Fi 7 效益需終端裝置與網路速率配合"
    ],
    "bestFor": "想用比 Deco/ZenWiFi 更低的預算買 Wi-Fi 7 二入 Mesh。",
    "recommendation": "低價二入 Wi-Fi 7 Mesh：價格漂亮，但品牌售後與 App 體驗仍建議和 TP-Link/ASUS 比較後再決定。",
    "score": 71,
    "voltage": "110V 台灣通路；多數使用外接變壓器",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Mesh",
      "二入組",
      "低價",
      "Mercusys"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2999,
      "currency": "TWD",
      "converted": 2999,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1257969359&cgp=46996699",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【Mercusys 水星】Halo H25BE BE3600 Mesh網狀路由器 2入/3入",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【Mercusys 水星】Halo H25BE BE3600 Mesh網狀路由器 2入/3入」最低價為 NT$2,999，最低點日期 2026-01-09。",
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
          "query": "site:mobile01.com \"Mercusys Halo H25BE 2入\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Mercusys%20Halo%20H25BE%202%E5%85%A5%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Mercusys Halo H25BE 2入\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Mercusys%20Halo%20H25BE%202%E5%85%A5%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-costco-tplink-deco-x55",
    "category": "wifi",
    "rank": 46,
    "budget": "value",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Deco X55",
    "name": "AX3000 Wi-Fi 6 雙頻 Mesh 路由器",
    "price": {
      "currency": "TWD",
      "amount": 1999,
      "converted": 1999,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h3e/h7d/98612380598302.webp",
    "buyUrl": "https://www.costco.com.tw/Digital-Mobile/Laptops-Computers/Keyboards-Mice-Computer-Accessories/TP-Link-AX3000-Mesh-Wi-Fi-6-System-Deco-X55/p/134457",
    "buyLabel": "Costco 好市多",
    "specs": [
      "Wi-Fi 6 / AX3000",
      "Deco Mesh",
      "雙頻",
      "可做 Mesh 擴充節點",
      "Costco 評價 4.7 / 107 則"
    ],
    "description": "Deco X55 是 Costco 評價穩定的 Wi-Fi 6 Mesh 路由器，適合買 2-3 台延伸全屋覆蓋。",
    "pros": [
      "Costco 107 則評論、4.7 分",
      "Deco Mesh 生態成熟"
    ],
    "cons": [
      "不是 Wi-Fi 7",
      "實際速度受回程、牆面與擺位影響"
    ],
    "bestFor": "需要 2-3 台 Mesh 串接、重視設定簡單與價格的人。",
    "recommendation": "好市多補充推薦：Deco X55 是 Costco Wi-Fi 類中評論量足的 Mesh 入門候選。",
    "score": 85,
    "voltage": "台灣通路；需確認電源變壓器與網路拓樸",
    "warranty": "依 Costco 好市多商品頁、品牌保固與退貨政策",
    "tags": [
      "Costco",
      "Wi-Fi 6",
      "Mesh"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1999,
      "currency": "TWD",
      "converted": 1999,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1141226908&cgp=1999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Costco好市多】TP-Link AX3000 Wi-Fi 6 雙頻Mesh路由器 Deco X55 TP-Link AX3000 Mesh Wi-Fi 6 System Deco X55",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Costco好市多 / 【Costco好市多】TP-Link AX3000 Wi-Fi 6 雙頻Mesh路由器 Deco X55 TP-Link AX3000 Mesh Wi-Fi 6 System Deco X55」最低價為 NT$1,999，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 Deco X55 使用者回報網路會隨機凍結、節點紅燈或自行重啟，常需手動重開才能恢復。",
      "issues": [
        {
          "title": "隨機斷線、凍結或自行重啟",
          "detail": "回報包含整體網路鎖死、主節點失聯與每日多次重啟；建議保留退換貨期、先更新韌體並觀察多節點環境至少數日。",
          "reportCount": 7,
          "sources": [
            {
              "platform": "TP-Link Community",
              "title": "Deco X55 Internet randomly freezes or drops",
              "url": "https://community.tp-link.com/en/home/forum/topic/584302"
            },
            {
              "platform": "TP-Link Community",
              "title": "X55 main Deco disconnects after reboot",
              "url": "https://community.tp-link.com/us/home/forum/topic/651792?moduleId=2424"
            },
            {
              "platform": "TP-Link Community",
              "title": "TP-Link Deco X55 Keeps Rebooting",
              "url": "https://community.tp-link.com/en/home/threads/topic/821828"
            },
            {
              "platform": "TP-Link Community",
              "title": "Deco X55 Reboots 2-3 times a day",
              "url": "https://community.tp-link.com/us/home/forum/topic/591250"
            },
            {
              "platform": "Reddit",
              "title": "Avoid TP-Link Deco X55",
              "url": "https://www.reddit.com/r/TpLink/comments/1eietd4/avoid_tplink_deco_x55_like_the_plague_it_is/"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "wifi-costco-tplink-archer-be3600",
    "category": "wifi",
    "rank": 47,
    "budget": "value",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Archer BE3600",
    "name": "BE3600 雙頻 Wi-Fi 7 路由器",
    "price": {
      "currency": "TWD",
      "amount": 2049,
      "converted": 2049,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h75/h55/366793139191838.jpg",
    "buyUrl": "https://www.costco.com.tw/Digital-Mobile/Laptops-Computers/Keyboards-Mice-Computer-Accessories/TP-Link-BE3600-Dual-Band-Wi-Fi-7-Router-Archer-BE3600/p/154268",
    "buyLabel": "Costco 好市多",
    "specs": [
      "Wi-Fi 7 / BE3600",
      "雙頻",
      "110V",
      "單台路由器；非 Mesh 套組",
      "Costco 評價 4.9 / 22 則"
    ],
    "description": "Costco 評價不錯的 Wi-Fi 7 路由器候選，補進單台主路由比較。",
    "pros": [
      "Wi-Fi 7 規格新",
      "價格與評價具參考性"
    ],
    "cons": [
      "非完整 Mesh 套組",
      "多 AP 或商用管理需另規劃"
    ],
    "bestFor": "想升級 Wi-Fi 7 並從好市多購買的人",
    "recommendation": "好市多補充推薦：BE3600 雙頻 Wi-Fi 7 路由器 評價不錯，補進無線路由器分類作為 Costco 候選比較。",
    "score": 87,
    "voltage": "110V；需確認家中數據機、NAT 與擺位",
    "warranty": "依 Costco 好市多商品頁與品牌 3 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "Wi-Fi 7",
      "BE3600",
      "單台路由器"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2049,
      "currency": "TWD",
      "converted": 2049,
      "sourceUrl": "https://www.costco.com.tw/Digital-Mobile/Laptops-Computers/Keyboards-Mice-Computer-Accessories/TP-Link-BE3600-Dual-Band-Wi-Fi-7-Router-Archer-BE3600/p/154268",
      "sourceTitle": "Costco 商品頁：TP-Link BE3600 雙頻 Wi-Fi 7 路由器 Archer BE3600 | Costco 好市多",
      "evidenceSnippet": "Costco 商品頁 於 2026-07-10 回傳同一商品頁「TP-Link BE3600 雙頻 Wi-Fi 7 路由器 Archer BE3600 | Costco 好市多」查核價 NT$2,049，低於原先記錄史低。",
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
          "query": "site:mobile01.com \"TP-Link Archer BE3600\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22TP-Link%20Archer%20BE3600%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"TP-Link Archer BE3600\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22TP-Link%20Archer%20BE3600%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "wifi-costco-tplink-archer-be550",
    "category": "wifi",
    "rank": 48,
    "budget": "mid",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Archer BE550",
    "name": "BE9300 三頻 Wi-Fi 7 路由器",
    "price": {
      "currency": "TWD",
      "amount": 4699,
      "converted": 4699,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h31/h45/366793143058462.jpg",
    "buyUrl": "https://www.costco.com.tw/Digital-Mobile/Laptops-Computers/Keyboards-Mice-Computer-Accessories/TP-Link-BE9300-Tri-Band-Wi-Fi-7-Router-Archer-BE550/p/154270",
    "buyLabel": "Costco 好市多",
    "specs": [
      "Wi-Fi 7 / BE9300",
      "三頻",
      "110V",
      "單台路由器；可搭配相容 Mesh 規劃",
      "Costco 評價 4.8 / 35 則"
    ],
    "description": "Costco 評價不錯的 Wi-Fi 7 路由器候選，補進單台主路由比較。",
    "pros": [
      "Wi-Fi 7 規格新",
      "價格與評價具參考性"
    ],
    "cons": [
      "非完整 Mesh 套組",
      "多 AP 或商用管理需另規劃"
    ],
    "bestFor": "想升級 Wi-Fi 7 並從好市多購買的人",
    "recommendation": "好市多補充推薦：BE9300 三頻 Wi-Fi 7 路由器 評價不錯，補進無線路由器分類作為 Costco 候選比較。",
    "score": 89,
    "voltage": "110V；需確認家中數據機、NAT 與擺位",
    "warranty": "依 Costco 好市多商品頁與品牌 3 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "Wi-Fi 7",
      "BE9300",
      "三頻"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 3999,
      "currency": "TWD",
      "converted": 3999,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1212202092&cgp=5999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【TP-Link】Wi-Fi 7 BE9300三頻6串流2.5G無線網路路由器 分享器(支援AI筆電/EasyMesh/VPN/Archer BE550)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【TP-Link】Wi-Fi 7 BE9300三頻6串流2.5G無線網路路由器 分享器(支援AI筆電/EasyMesh/VPN/Archer BE550)」最低價為 NT$3,999，最低點日期 2025-06-16。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 Archer BE550 使用者回報路由器或 Wi-Fi 用戶端會隨機短暫斷線，數秒後才重新連上。",
      "issues": [
        {
          "title": "隨機短暫斷線與延遲不穩",
          "detail": "回報包含多個裝置一起斷線、替換機仍發生或遊戲延遲突增；購買後應更新韌體並持續壓力測試有線與無線連線。",
          "reportCount": 7,
          "sources": [
            {
              "platform": "TP-Link Community",
              "title": "New Archer BE550 constant disconnects",
              "url": "https://community.tp-link.com/us/home/forum/topic/623566?moduleId=2414"
            },
            {
              "platform": "Reddit",
              "title": "Tossing Archer BE550 — too many lagging issues",
              "url": "https://www.reddit.com/r/TpLink/comments/1gkcbca/top_routers_tossing_archer_be550_too_many_lagging/"
            }
          ]
        }
      ]
    }
  }
]);
})();

(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("robot", [
  {
    "id": "robot-roborock-saros-z70",
    "category": "robot",
    "rank": 2,
    "budget": "premium",
    "channel": "tw",
    "brand": "Roborock",
    "model": "Saros Z70",
    "name": "全能機械手臂旗艦掃拖王者",
    "price": {
      "currency": "TWD",
      "amount": 39980,
      "converted": 39980,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL1CA900IGHHM/000001_1782870336.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL1C-A900IGHHM",
    "buyLabel": "PChome",
    "specs": [
      "機械手臂",
      "22000Pa",
      "7.98cm 超薄",
      "80 度熱洗"
    ],
    "description": "Roborock Saros Z70 是旗艦級掃拖機器人，這筆以 2026-07-11 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "旗艦展示型：機械手臂與超薄設計很吸睛，但價格高，綜合 CP 不如 Qrevo Curv 2 Flow。",
    "score": 94,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "機械手臂",
      "零纏繞"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Roborock Saros Z70: 蝦皮商城 - Renza Filtration 濾網專家 適用 Roborock 石頭科技 Saros Z70 掃拖機器人 耗材 配件 HEPA濾網 主刷 邊刷 拖布 集塵 型號/規格不相符；LBJ Roborock Saros Z70: Momo富邦購物 (店+)石頭掃地機 配件耗材 roborock Saros Z70 型號/規格不相符；LBJ Roborock Saros Z70: 蝦皮商城 - Roborock 石頭科技官方旗艦店 Roborock石頭科技 G20S Ultra 、 Saros Z70 旋轉拖布 2入 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Roborock Saros Z70\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Roborock%20Saros%20Z70%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Roborock Saros Z70\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Roborock%20Saros%20Z70%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-roborock-saros-20-aqua",
    "category": "robot",
    "rank": 3,
    "budget": "premium",
    "channel": "tw",
    "brand": "Roborock",
    "model": "Saros 20 水立方",
    "name": "跨越奇兵旗艦掃拖王者水立方版",
    "price": {
      "currency": "TWD",
      "amount": 36980,
      "converted": 36980,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL1CA900JNELR/000001_1769062030.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL1C-A900JNELR",
    "buyLabel": "PChome",
    "specs": [
      "36000Pa",
      "100 度熱水洗",
      "雙門檻越障",
      "旗艦水立方基站"
    ],
    "description": "Roborock Saros 20 水立方 是旗艦級掃拖機器人，這筆以 2026-07-11 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "Roborock 旗艦補強：如果不需要 Z70 機械手臂，Saros 20 水立方是清潔、越障與熱水洗拖更務實的旗艦選項。",
    "score": 95,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "熱水洗拖",
      "越障"
    ],
    "releaseDate": "2026-04-06",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Roborock Saros 20 水立方: Momo富邦購物 【Roborock 石頭科技】旗艦新品上市! Saros 20跨越奇兵掃拖機-水立方(100度熱水/8.8公分越障/3.6萬大吸力) 型號/規格不相符；LBJ Roborock Saros 20 水立方: 蝦皮商城 - GSIR家電生活館 Roborock 石頭科技 Saros 20 水立方【10%蝦幣回饋】 跨越奇兵 旗艦越障掃拖王者 掃地機器人 公司貨 型號/規格不相符；LBJ Roborock Saros 20 水立方: 蝦皮商城 - Roborock 石頭科技官方旗艦店 Roborock 石頭科技 Saros 20 跨越奇兵 水立方 (100度熱水洗/雙門檻越障/36000pa) 預購 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Roborock Saros 20 水立方\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Roborock%20Saros%2020%20%E6%B0%B4%E7%AB%8B%E6%96%B9%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Roborock Saros 20 水立方\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Roborock%20Saros%2020%20%E6%B0%B4%E7%AB%8B%E6%96%B9%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-roborock-saros-20",
    "category": "robot",
    "rank": 4,
    "budget": "premium",
    "channel": "tw",
    "brand": "Roborock",
    "model": "Saros 20",
    "name": "跨越奇兵旗艦越障掃拖王者",
    "price": {
      "currency": "TWD",
      "amount": 34980,
      "converted": 34980,
      "confidence": "PChome 2026-07-13 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL1CA900JMMCO/000001_1769061975.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL1C-A900JMMCO",
    "buyLabel": "PChome",
    "specs": [
      "36000Pa",
      "8.8cm 雙門檻越障",
      "300+ 障礙物識別",
      "雙重防纏繞"
    ],
    "description": "Roborock Saros 20 是旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "Roborock 當代旗艦代表：比 Z70 更聚焦吸力、越障與日常穩定性，適合家中門檻多的人。",
    "score": 94,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "越障",
      "寵物毛"
    ],
    "releaseDate": "2026-01-06",
    "historicalLow": {
      "status": "found",
      "amount": 32980,
      "currency": "TWD",
      "converted": 32980,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMBL1C-A900JMMCO",
      "sourceTitle": "PChome 商品 API：Roborock 石頭科技掃地機器人Saros 20 / Roborock 石頭科技 Saros 20 跨越奇兵旗艦越障掃拖王者(雙門檻越障8.8cm/36000Pa/障礙物識別300+)",
      "evidenceSnippet": "PChome 商品 API 於 2026-07-10 回傳同一商品頁「Roborock 石頭科技掃地機器人Saros 20 / Roborock 石頭科技 Saros 20 跨越奇兵旗艦越障掃拖王者(雙門檻越障8.8cm/36000Pa/障礙物識別300+)」查核價 NT$32,980，低於原先記錄史低。",
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
          "query": "site:mobile01.com \"Roborock Saros 20\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Roborock%20Saros%2020%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Roborock Saros 20\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Roborock%20Saros%2020%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-roborock-qrevo-edge-2-pro",
    "category": "robot",
    "rank": 5,
    "budget": "mid",
    "channel": "tw",
    "brand": "Roborock",
    "model": "Qrevo Edge 2 Pro",
    "name": "雙越野高智商旗艦級掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 28980,
      "converted": 28980,
      "confidence": "PChome 2026-07-13 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL1CA900JPHOP/000001_1782870240.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL1C-A900JPHOP",
    "buyLabel": "PChome",
    "specs": [
      "25000Pa",
      "7.98cm 超薄",
      "100 度熱水洗",
      "雙門檻越障"
    ],
    "description": "Roborock Qrevo Edge 2 Pro 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "同類推薦：列入 Roborock 次旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 92,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "超薄",
      "熱水洗拖"
    ],
    "releaseDate": "2026-02-17",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Roborock Qrevo Edge 2 Pro: 蝦皮商城 - Roborock 石頭科技官方旗艦店 Roborock石頭科技Saros 20、G20S Ultra、Qrevo Edge 2 Pro 水洗濾網 型號/規格不相符；LBJ Roborock Qrevo Edge 2 Pro: Momo富邦購物 【Roborock 石頭科技】Qrevo Edge 2 Pro白馬王子 (100度熱水洗/3+1cm越障/25000Pa/7.98超薄機身/零纏繞) 型號/規格不相符；LBJ Roborock Qrevo Edge 2 Pro: Momo富邦購物 【Roborock 石頭科技】Qrevo Edge 2 Pro白馬王子-清潔組(100度熱水洗/3+1cm越障/2.5萬Pa/零纏繞) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Roborock Qrevo Edge 2 Pro\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Roborock%20Qrevo%20Edge%202%20Pro%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Roborock Qrevo Edge 2 Pro\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Roborock%20Qrevo%20Edge%202%20Pro%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-roborock-qrevo-curv-2-flow",
    "category": "robot",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "Roborock",
    "model": "Qrevo Curv 2 Flow",
    "name": "滾筒全自動洗拖烘掃地機器人",
    "price": {
      "currency": "TWD",
      "amount": 22888,
      "converted": 22888,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL1CA900JA04J/000001_1783562731.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL1C-A900JA04J",
    "buyLabel": "PChome",
    "specs": [
      "滾筒拖地",
      "20000Pa",
      "自動洗烘",
      "全能基站"
    ],
    "description": "Roborock Qrevo Curv 2 Flow 是次旗艦級掃拖機器人，這筆以 2026-07-11 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "綜合推薦：價格約頂級旗艦一半，仍有滾筒拖地、全能基站與 Roborock 口碑，CP/功能/售後最均衡。",
    "score": 95,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "滾筒拖地",
      "自動洗烘"
    ],
    "releaseDate": "2026-01-06",
    "historicalLow": {
      "status": "found",
      "amount": 18398,
      "currency": "TWD",
      "converted": 18398,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1261753972&cgp=19999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Roborock 石頭科技】限量熱燒新品! Qrevo Curv 2 Flow搖滾巨星滾筒掃拖機器人(滾筒拖地/熱水洗烘/零纏繞)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Roborock 石頭科技】限量熱燒新品! Qrevo Curv 2 Flow搖滾巨星滾筒掃拖機器人(滾筒拖地/熱水洗烘/零纏繞)」最低價為 NT$18,398，最低點日期 2025-11-11。",
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
          "query": "site:mobile01.com \"Roborock Qrevo Curv 2 Flow\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Roborock%20Qrevo%20Curv%202%20Flow%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Roborock Qrevo Curv 2 Flow\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Roborock%20Qrevo%20Curv%202%20Flow%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-ecovacs-x11-pro-plumbed",
    "category": "robot",
    "rank": 6,
    "budget": "premium",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT X11 PRO 上下水款",
    "name": "無限續航滾筒洗地機器人上下水款",
    "price": {
      "currency": "TWD",
      "amount": 24700,
      "converted": 24700,
      "confidence": "Yahoo購物中心 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0LA900JRDAS/000001_1771917633.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/ECOVACS-%E7%A7%91%E6%B2%83%E6%96%AF-DEEBOT-X11-PRO%E7%84%A1%E9%99%90%E7%BA%8C%E8%88%AA%E6%BB%BE%E7%AD%92%E6%B4%97%E5%9C%B0%E6%A9%9F%E5%99%A8%E4%BA%BA-%E6%8E%83%E5%9C%B0%E6%A9%9F%E5%99%A8%E4%BA%BA-11797803.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "滾筒洗地",
      "自動上下水",
      "氮化鎵瞬時閃充",
      "全能基站"
    ],
    "description": "Ecovacs DEEBOT X11 PRO 上下水款 是旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "ECOVACS 旗艦補強：若可安裝上下水，這台比一般水箱版更接近真正免維護。",
    "score": 95,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "上下水",
      "滾筒洗地"
    ],
    "releaseDate": "2025-09",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Ecovacs DEEBOT X11 PRO 上下水款: Yahoo購物中心 【ECOVACS 科沃斯】DEEBOT X11 PRO 上下水款 無限續航滾筒洗地機器人(滾筒恆壓洗地/超能基站/掃地機器人/自動上下水) 型號/規格不相符；LBJ Ecovacs DEEBOT X11 PRO 上下水款: 蝦皮商城 - 蝦皮直營 - 3C家電館 ECOVACS 科沃斯 DEEBOT X11 PRO 上下水款 無限續航滾筒洗地機器人 廠商直送 型號/規格不相符；LBJ Ecovacs DEEBOT X11 PRO 上下水款: 蝦皮商城 - Beutii質感家電選品 ECOVACS 科沃斯 DEEBOT X11 PRO 上下水款 無限續航滾筒洗地機器人 超能基站 Beutii 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Ecovacs DEEBOT X11 PRO 上下水款\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Ecovacs%20DEEBOT%20X11%20PRO%20%E4%B8%8A%E4%B8%8B%E6%B0%B4%E6%AC%BE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Ecovacs DEEBOT X11 PRO 上下水款\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Ecovacs%20DEEBOT%20X11%20PRO%20%E4%B8%8A%E4%B8%8B%E6%B0%B4%E6%AC%BE%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-ecovacs-x11-pro",
    "category": "robot",
    "rank": 7,
    "budget": "premium",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT X11 PRO",
    "name": "無限續航滾筒洗地機器人",
    "price": {
      "currency": "TWD",
      "amount": 22999,
      "converted": 22999,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0LA900J5HJ0/000001_1766715791.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0L-A900J5HJ0",
    "buyLabel": "PChome",
    "specs": [
      "滾筒洗地",
      "氮化鎵瞬時閃充",
      "GPT 級語音",
      "全能基站"
    ],
    "description": "Ecovacs DEEBOT X11 PRO 是旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "同類推薦：列入 Ecovacs 旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 94,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "滾筒洗地",
      "快速回充"
    ],
    "releaseDate": "2025-09",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Ecovacs DEEBOT X11 PRO: Momo富邦購物 (店+)【ECOVACS 科沃斯】[福利品] DEEBOT X11 PRO 無限續航滾筒洗地機器人(PowerBoost瞬充/四驅越障) 型號/規格不相符；LBJ Ecovacs DEEBOT X11 PRO: Momo富邦購物 【ECOVACS 科沃斯】DEEBOT X11 PRO 無限續航滾筒洗地機器人_福利品(TruEdge 3.0/PowerBoost瞬充/四驅越障) 型號/規格不相符；LBJ Ecovacs DEEBOT X11 PRO: 蝦皮商城 - 尋覓3C影音 【Ecovacs 科沃斯 福利品】DEEBOT X11 PRO 無限續航滾筒洗地機器人 智慧清潔 AI避障 充電快充 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Ecovacs DEEBOT X11 PRO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Ecovacs%20DEEBOT%20X11%20PRO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Ecovacs DEEBOT X11 PRO\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Ecovacs%20DEEBOT%20X11%20PRO%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-ecovacs-t80-omni",
    "category": "robot",
    "rank": 10,
    "budget": "mid",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT T80 OMNI",
    "name": "滾筒活水洗地掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 16999,
      "converted": 16999,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0LA900IT3IU/000001_1763087795.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0L-A900IT3IU",
    "buyLabel": "PChome",
    "specs": [
      "滾筒活水洗地",
      "16 倍壓強",
      "無縫貼邊",
      "全能基站"
    ],
    "description": "Ecovacs DEEBOT T80 OMNI 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "同類推薦：列入 Ecovacs 次旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 91,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "滾筒洗地",
      "貼邊清潔"
    ],
    "releaseDate": "2025-05",
    "historicalLow": {
      "status": "found",
      "amount": 15299,
      "currency": "TWD",
      "converted": 15299,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMBL0L-A900IT3IU",
      "sourceTitle": "PChome 24h：ECOVACS DEEBOT T80 OMNI 限時 9 折",
      "evidenceSnippet": "同一新品商品頁公開活動顯示「限時下殺 07/09–07/10 任選1件享9折」、「折扣價 $15,299」與「網路價 $16,999」。",
      "sourceKind": "retailer_promo",
      "confidence": "high",
      "checkedAt": "2026-07-11",
      "note": "同型號新品通路的公開任選一件 9 折活動，非會員個人化折扣、信用卡回饋或點數；2026-07-11 PChome API 已回到 NT$16,999，故保留 NT$15,299 為已結束、可驗證的入手價。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-11",
      "summary": "多位 DEEBOT T80 OMNI 使用者跨站回報，拖地後滾筒、機內污水箱或水路容易產生明顯異味，需要頻繁清洗與晾乾。",
      "issues": [
        {
          "title": "拖地後滾筒／污水路徑異味",
          "detail": "回報涵蓋滾筒拖布、機內污水箱與清潔縫隙；部分可藉由清洗、晾乾或清潔錠暫時改善，也有污水未正常排空而送修仍未解決的案例。若對異味敏感，應在退換貨期內連續測試拖地、基站排水與烘乾，並依原廠方式清潔水路。",
          "reportCount": 6,
          "sources": [
            {
              "platform": "Reddit",
              "title": "T80 dirt water Tank Always full",
              "url": "https://www.reddit.com/r/ecovacs/comments/1pgc172/t80_dirt_water_tank_always_full/"
            },
            {
              "platform": "Reddit",
              "title": "Is the T80S Omni worth it?",
              "url": "https://www.reddit.com/r/ecovacs/comments/1ue7oax/is_the_t80s_omni_worth_it/"
            },
            {
              "platform": "Reddit",
              "title": "I will always avoid Ecovacs like the plague.",
              "url": "https://www.reddit.com/r/RobotVacuums/comments/1un38ek/i_will_always_avoid_ecovacs_like_the_plague/"
            },
            {
              "platform": "Reddit",
              "title": "Which robot vacuum needs the least amount of maintenance?",
              "url": "https://www.reddit.com/r/RobotVacuums/comments/1rugldo/which_robot_vacuum_needs_the_least_amount_of/"
            },
            {
              "platform": "Mobile01",
              "title": "第一次買掃拖機器人，科沃斯T80 OMNI推薦嗎~",
              "url": "https://www.mobile01.com/topicdetail.php?f=728&t=7248442"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "robot-ecovacs-t50-pro",
    "category": "robot",
    "rank": 11,
    "budget": "mid",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT T50 PRO OMNI",
    "name": "超薄全覆蓋全能旗艦掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 14999,
      "converted": 14999,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0LA900IDIPA/000001_1763087835.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0L-A900IDIPA",
    "buyLabel": "PChome",
    "specs": [
      "81mm 超薄",
      "高溫洗烘",
      "萬物沿邊",
      "OMNI 基站"
    ],
    "description": "Ecovacs DEEBOT T50 PRO OMNI 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "同類推薦：列入 Ecovacs 次旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 89,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "超薄",
      "沿邊清潔"
    ],
    "releaseDate": "2025-03-19",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Ecovacs DEEBOT T50 PRO OMNI: Momo富邦購物 【ECOVACS 科沃斯】DEEBOT T50 PRO OMNI豪華耗材禮盒 型號/規格不相符；LBJ Ecovacs DEEBOT T50 PRO OMNI: Momo富邦購物 (店+)【ECOVACS 科沃斯】DEEBOT T50 PRO OMNI 超薄全覆蓋全能旗艦掃拖機器人 型號/規格不相符；LBJ Ecovacs DEEBOT T50 PRO OMNI: 蝦皮購物 - zhi cheng 科沃斯Ecovacs Deebot T30S T30 N30 N30 Pro Omni T50 Pro 拖把架備用2件 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Ecovacs DEEBOT T50 PRO OMNI\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Ecovacs%20DEEBOT%20T50%20PRO%20OMNI%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Ecovacs DEEBOT T50 PRO OMNI\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Ecovacs%20DEEBOT%20T50%20PRO%20OMNI%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-ecovacs-n50",
    "category": "robot",
    "rank": 12,
    "budget": "mid",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT N50",
    "name": "強清潔全能掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 12999,
      "converted": 12999,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0LA900J0KF3/000001_1765762606.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0L-A900J0KF3",
    "buyLabel": "PChome",
    "specs": [
      "20000Pa",
      "雙恆貼邊",
      "全能基站",
      "強清潔定位"
    ],
    "description": "Ecovacs DEEBOT N50 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "ECOVACS 次旗艦/高 CP 補位：想要 OMNI 基站但預算不想上 X/T 旗艦線時可看。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "CP 值",
      "全能基站"
    ],
    "releaseDate": "2026-03-05",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Ecovacs DEEBOT N50: Momo富邦購物 【ECOVACS 科沃斯】掃地機器人專用_原廠豪華耗材配件禮盒(DEEBOT T50/N50系列 專用) 型號/規格不相符；LBJ Ecovacs DEEBOT N50: 蝦皮商城 - ECOVACS 科沃斯 官方旗艦店 ECOVACS 科沃斯 DEEBOT T50/N50系列 豪華耗材禮盒 型號/規格不相符；LBJ Ecovacs DEEBOT N50: HOTAI購 【HOTAI購】【ECOVACS 科沃斯】DEEBOT T50/N50系列 豪華耗材禮盒 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Ecovacs DEEBOT N50\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Ecovacs%20DEEBOT%20N50%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Ecovacs DEEBOT N50\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Ecovacs%20DEEBOT%20N50%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-dreame-x60-master",
    "category": "robot",
    "rank": 13,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dreame",
    "model": "X60 Master",
    "name": "AI 藍光辨識超薄掃拖旗艦機低矮版",
    "price": {
      "currency": "TWD",
      "amount": 31980,
      "converted": 31980,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL3EA900JZ3SP/000001_1780033309.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL3E-A900JZ3SP",
    "buyLabel": "PChome",
    "specs": [
      "7.95cm 超薄",
      "36000Pa",
      "AI 藍光辨識",
      "低矮版旗艦"
    ],
    "description": "Dreame X60 Master 是旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "同類推薦：列入 Dreame 旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 95,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "超薄",
      "AI 辨識"
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
      "checkedAt": "2026-07-09",
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Dreame X60 Master: Momo富邦購物 【Dreame 追覓科技】X60 Master AI藍光辨識超薄掃拖旗艦機（低矮版）AI藍光髒污檢測/7.95公分超薄機身 型號/規格不相符；LBJ Dreame X60 Master: 蝦皮商城 - Dreame 追覓台灣 【Dreame追覓】X60 Master AI藍光辨識超薄掃拖旗艦機（低矮版）｜台灣公司貨 型號/規格不相符；LBJ Dreame X60 Master: 蝦皮商城 - Dreame 追覓台灣 【Dreame追覓】X60 Master AI藍光辨識超薄掃拖旗艦機（低矮版） Complete｜一年份耗材 台灣公司貨 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dreame X60 Master\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dreame%20X60%20Master%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dreame X60 Master\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dreame%20X60%20Master%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-dreame-d30-ultra-ce",
    "category": "robot",
    "rank": 14,
    "budget": "mid",
    "channel": "tw",
    "brand": "Dreame",
    "model": "D30 Ultra CE",
    "name": "全能掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 9999,
      "converted": 9999,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL3EA900JY4G0/000001_1780033612.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL3E-A900JY4G0",
    "buyLabel": "PChome",
    "specs": [
      "全能基站",
      "掃拖一體",
      "自動清潔",
      "入門旗艦功能"
    ],
    "description": "Dreame D30 Ultra CE 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "同類推薦：列入 Dreame 次旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "全能基站",
      "CP 值"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 8999,
      "currency": "TWD",
      "converted": 8999,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMBL3E-A900JY4G0",
      "sourceTitle": "PChome 商品頁：【Dreame 追覓科技】D30 Ultra CE 全能掃拖機器人 / 【Dreame 追覓科技】D30 Ultra CE 全能掃拖機器人",
      "evidenceSnippet": "PChome 商品 API 於 2026-07-10 回傳同一商品頁「【Dreame 追覓科技】D30 Ultra CE 全能掃拖機器人 / 【Dreame 追覓科技】D30 Ultra CE 全能掃拖機器人」查核價 NT$8,999，低於原先記錄史低。",
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
          "query": "site:mobile01.com \"Dreame D30 Ultra CE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dreame%20D30%20Ultra%20CE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dreame D30 Ultra CE\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dreame%20D30%20Ultra%20CE%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-narwal-freo-z-ultra",
    "category": "robot",
    "rank": 15,
    "budget": "premium",
    "channel": "tw",
    "brand": "Narwal",
    "model": "Freo Z Ultra",
    "name": "真雙目 AI 掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 23888,
      "converted": 23888,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL4UA900JA072/000001_1766479545.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL4U-A900JA072",
    "buyLabel": "PChome",
    "specs": [
      "真雙目 AI",
      "熱水熱烘",
      "零纏繞 2.0",
      "自動集塵"
    ],
    "description": "Narwal Freo Z Ultra 是旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "同類推薦：列入 Narwal 旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 92,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "AI 避障",
      "熱水熱烘"
    ],
    "releaseDate": "2024-09-06",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Narwal Freo Z Ultra: 蝦皮商城 - Narwal 雲鯨台灣 Narwal 雲鯨掃地機機器人專用邊刷一對（Freo X Ultra/Freo X Plus/Freo Z Ultra） 型號/規格不相符；LBJ Narwal Freo Z Ultra: 蝦皮商城 - Narwal 雲鯨台灣 Narwal 雲鯨掃地機專用銀離子抗菌拖布2入(Freo X Ultra/Freo Z Ultra/ Freo Z10) 型號/規格不相符；LBJ Narwal Freo Z Ultra: 蝦皮商城 - Narwal 雲鯨台灣 Narwal 雲鯨 Freo Z Ultra專用一次性塵袋二入 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Narwal Freo Z Ultra\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Narwal%20Freo%20Z%20Ultra%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Narwal Freo Z Ultra\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Narwal%20Freo%20Z%20Ultra%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-narwal-flow-2",
    "category": "robot",
    "rank": 16,
    "budget": "premium",
    "channel": "global",
    "brand": "Narwal",
    "model": "Flow 2",
    "name": "滾筒洗地旗艦掃拖機器人",
    "price": {
      "currency": "EUR",
      "amount": 999,
      "converted": 36946,
      "confidence": "Boulanger 2026-07-20 來源價；ExchangeRate-API 2026-07-19 匯率換算"
    },
    "image": "https://boulanger.scene7.com/is/image/Boulanger/6972075738536_h_f_l_0?fmt=png-alpha&wid=640&hei=640",
    "buyUrl": "https://www.boulanger.com/ref/1238998",
    "buyLabel": "Boulanger",
    "specs": [
      "31000Pa",
      "60 度熱水洗",
      "4cm 越障",
      "滾筒刷洗地"
    ],
    "description": "Narwal Flow 2 是旗艦級海外參考機型，換算 TWD 僅供比較，未含國際運費、進口稅與台灣保固。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "海外購買價格波動大",
      "需確認電壓、插頭、耗材與台灣保固"
    ],
    "bestFor": "想追新款、可接受海外購買與保固風險，並願意自行確認電壓與耗材的人。",
    "recommendation": "海外參考：用來對照 Narwal 台灣上市機種與同級旗艦功能差異。",
    "score": 90,
    "voltage": "海外版本，需確認 100-240V、插頭與變壓器需求",
    "warranty": "可能無台灣保固，購買前需向通路確認",
    "tags": [
      "旗艦",
      "海外參考",
      "滾筒洗地"
    ],
    "releaseDate": "2026",
    "historicalLow": {
      "status": "not_found",
      "amount": null,
      "currency": "EUR",
      "converted": null,
      "sourceUrl": "",
      "sourceTitle": "",
      "evidenceSnippet": "",
      "sourceKind": "not_found",
      "confidence": "not_found",
      "checkedAt": "2026-07-09",
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Flow 2: iHerb 【iHerb】WishGarden Herbs, Flow Stopper Lingering Cycle，2 液量盎司（59 毫升） 型號/規格不相符；LBJ Flow 2: iHerb 【iHerb】WishGarden Herbs, Happy Ducts Free The Flow，2 液量盎司（59 毫升） 非採用通路或含排除條件；LBJ Flow 2: Momo富邦購物 【Insta360】Flow 2 Pro / Flow 2 收納包(原廠公司貨) 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Narwal Flow 2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Narwal%20Flow%202%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Narwal Flow 2\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Narwal%20Flow%202%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-narwal-freo-z10-ultra",
    "category": "robot",
    "rank": 17,
    "budget": "mid",
    "channel": "global",
    "brand": "Narwal",
    "model": "Freo Z10 Ultra",
    "name": "18,000Pa AI 視覺全能掃拖機器人",
    "price": {
      "currency": "USD",
      "amount": 551.69,
      "converted": 17842,
      "confidence": "Geekbuying 2026-07-20 來源價；ExchangeRate-API 2026-07-19 匯率換算"
    },
    "image": "https://img.gkbcdn.com/p/2025-04-11/Narwal-Freo-Z10-Ultra-Robot-Vacuum-with-Base-Station-Gray-528438-0._w315_.jpg",
    "buyUrl": "https://www.geekbuying.com/item/Narwal-Freo-Z10-Ultra-Robot-Vacuum-with-Base-Station-Gray-528438.html",
    "buyLabel": "Geekbuying",
    "specs": [
      "18000Pa",
      "AI 視覺避障",
      "45-75 度熱水洗",
      "All-in-One Dock"
    ],
    "description": "Narwal Freo Z10 Ultra 是次旗艦級海外參考機型，換算 TWD 僅供比較，未含國際運費、進口稅與台灣保固。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "海外購買價格波動大",
      "需確認電壓、插頭、耗材與台灣保固"
    ],
    "bestFor": "想追新款、可接受海外購買與保固風險，並願意自行確認電壓與耗材的人。",
    "recommendation": "海外參考：用來對照 Narwal 台灣上市機種與同級旗艦功能差異。",
    "score": 87,
    "voltage": "海外版本，需確認 100-240V、插頭與變壓器需求",
    "warranty": "可能無台灣保固，購買前需向通路確認",
    "tags": [
      "次旗艦",
      "海外參考",
      "熱水洗拖"
    ],
    "releaseDate": "2026-05-12",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Narwal Freo Z10 Ultra: 蝦皮商城 - Narwal 雲鯨台灣 Narwal 雲鯨掃地機專用銀離子抗菌拖布2入(Freo X Ultra/Freo Z Ultra/ Freo Z10) 型號/規格不相符；LBJ Narwal Freo Z10 Ultra: 蝦皮商城 - Narwal 雲鯨台灣 Narwal 雲鯨一次性集塵袋1組3入 (適用於Freo X Ultra/Freo X Plus/Freo Z10) 型號/規格不相符；LBJ Narwal Freo Z10 Ultra: 蝦皮商城 - Narwal 雲鯨台灣 Narwal 雲鯨專用集塵盒1入（Freo X Ultra/Freo X Plus/Freo Z10) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Narwal Freo Z10 Ultra\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Narwal%20Freo%20Z10%20Ultra%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Narwal Freo Z10 Ultra\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Narwal%20Freo%20Z10%20Ultra%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-irobot-max-705",
    "category": "robot",
    "rank": 18,
    "budget": "premium",
    "channel": "tw",
    "brand": "iRobot",
    "model": "Roomba Max 705 Combo",
    "name": "全能滾筒旗艦機皇掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 29380,
      "converted": 29380,
      "confidence": "PChome 2026-07-12 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0JA900JCCJT/000001_1782802020.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0J-A900JCCJT",
    "buyLabel": "PChome",
    "specs": [
      "滾筒旗艦",
      "全能掃拖",
      "自動基站",
      "Combo 系列"
    ],
    "description": "iRobot Roomba Max 705 Combo 是旗艦級掃拖機器人，這筆以 2026-07-11 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "同類推薦：列入 iRobot 旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 90,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "滾筒",
      "Roomba"
    ],
    "releaseDate": "2025-07-22",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ iRobot Roomba Max 705 Combo: Yahoo購物中心 美國iRobot Roomba Max 705 Combo 掃拖機器人原廠濾網3片 型號/規格不相符；LBJ iRobot Roomba Max 705 Combo: Momo富邦購物 【iRobot】Roomba Max 705 Vac 掃地機器人專用原廠濾網3片(原廠公司貨 Max 705 Combo不能使用) 型號/規格不相符；LBJ iRobot Roomba Max 705 Combo: 蝦皮商城 - 美國iRobot & 加拿大Spärkel官方旗艦店(來思比科技集團) 領券9折-美國iRobot Roomba Max 705 Vac掃地機器人原廠濾網3片(705 Combo 不能用) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 Roomba Max 705 Combo 使用者回報 AutoWash 基站排水或密封異常，造成髒水滯留、滴漏或基站淹水。",
      "issues": [
        {
          "title": "AutoWash 基站排水／密封異常與漏水",
          "detail": "回報包含拖地時滴出髒水、基站積水與「清潔基站／污水箱」錯誤；部分使用者安裝官方橡膠密封件後仍復發，建議收到後先更新基站韌體並在退換貨期內反覆測試洗拖、排水與密封。",
          "reportCount": 8,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Roomba max 705 combo dripping while mopping",
              "url": "https://www.reddit.com/r/roomba/comments/1qed9m7/roomba_max_705_combo_dripping_while_mopping/"
            },
            {
              "platform": "Reddit",
              "title": "Received an email identifying an issue with some units",
              "url": "https://www.reddit.com/r/roomba/comments/1syg74a/received_an_email_identifying_an_issue_with_some/"
            },
            {
              "platform": "Reddit",
              "title": "New Roomba Max 705 Combo + Base AutoWash Owner",
              "url": "https://www.reddit.com/r/roomba/comments/1p4794b/new_roomba_max_705_combo_base_autowash_owner/"
            },
            {
              "platform": "Reddit",
              "title": "705 combo made a mass in the dock",
              "url": "https://www.reddit.com/r/roomba/comments/1on7j42/705_combo_made_a_mass_in_the_dock/"
            },
            {
              "platform": "BBB",
              "title": "iRobot Corporation | BBB Complaints",
              "url": "https://www.bbb.org/us/ma/bedford/profile/vacuum-cleaning-systems/irobot-corporation-0021-91391/complaints?page=5"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "robot-irobot-plus-505",
    "category": "robot",
    "rank": 19,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRobot",
    "model": "Roomba Plus 505 Combo",
    "name": "熱旋風延邊避障全能掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 19880,
      "converted": 19880,
      "confidence": "PChome 2026-07-12 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0JA900ITF7U/000001_1782802931.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0J-A900ITF7U",
    "buyLabel": "PChome",
    "specs": [
      "熱旋風",
      "延邊避障",
      "全能掃拖",
      "自動基站"
    ],
    "description": "iRobot Roomba Plus 505 Combo 是次旗艦級掃拖機器人，這筆以 2026-07-11 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "同類推薦：列入 iRobot 次旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "延邊清潔",
      "Roomba"
    ],
    "releaseDate": "2025-03-23",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ iRobot Roomba Plus 505 Combo: 樂天市場 - 玉山最低比價網 玉山最低比價網 [4美國直購] iRobot Roomba Plus 505 405 205 105 Combo Essential 原廠 掃拖機器人 邊刷 3入 #4837322 _TD44 型號/規格不相符；LBJ iRobot Roomba Plus 505 Combo: 樂天市場 - 玉山最低比價網 玉山最低比價網 [5美國直購] iRobot Roomba 原廠 集塵袋 3入 Plus 705 505 405 105 Combo 掃拖機器人 (TG1)#4849916 型號/規格不相符；LBJ iRobot Roomba Plus 505 Combo: 蝦皮商城 - 玉山最低比價網 iRobot Roomba 原廠 集塵袋 3入 適 Plus 705 505 405 105 Combo 掃拖機器人 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 Roomba Plus 505 Combo 使用者回報基站雖啟動自動集塵，機器內集塵盒仍未排空，必須手動倒垃圾。",
      "issues": [
        {
          "title": "自動集塵無法排空機器集塵盒",
          "detail": "回報包含原機、替換主機與替換基站都只在第一次或完全無法排空；購買後應以有毛髮與灰塵的實際清掃測試多次自動集塵，並確認退換貨期。",
          "reportCount": 6,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Roomba 505 Plus not emptying dust bin",
              "url": "https://www.reddit.com/r/roomba/comments/1srz7jm/roomba_505_plus_not_emptying_dust_bin/"
            },
            {
              "platform": "Best Buy",
              "title": "Decent navigation but plagued with issues",
              "url": "https://www.bestbuy.com/site/reviews/irobot-roomba-505-combo-vacuum-mop-autowash-dock-extending-spinning-mop-pads-self-empties-pad-wash-heated-dry-lidar-black/10187359?page=5"
            },
            {
              "platform": "Best Buy",
              "title": "Questions and Answers: iRobot Roomba 505 Combo",
              "url": "https://www.bestbuy.com/site/questions/irobot-roomba-505-combo-vacuum-mop-autowash-dock-extending-spinning-mop-pads-self-empties-pad-wash-heated-dry-lidar-black/10747590?includeAiContent=true&page=2&pageSize=20&sku=10747590"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "robot-irobot-plus-405",
    "category": "robot",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRobot",
    "model": "Roomba Plus 405 Combo",
    "name": "旋風全能掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 16880,
      "converted": 16880,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0JA900ITF88/000001_1782803241.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0J-A900ITF88",
    "buyLabel": "PChome",
    "specs": [
      "旋風清潔",
      "全能掃拖",
      "自動基站",
      "Combo 系列"
    ],
    "description": "iRobot Roomba Plus 405 Combo 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "同類推薦：列入 iRobot 次旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "Roomba",
      "均衡"
    ],
    "releaseDate": "2025-03",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ iRobot Roomba Plus 405 Combo: Momo富邦購物 (店+)寵愛淨 副廠 IROBOT Roomba Plus 405 505 Combo 主刷 邊刷 濾網 塵袋 拖布 配件 耗材 型號/規格不相符；LBJ iRobot Roomba Plus 405 Combo: 樂天市場 - 全球優品匯 【全球優品匯】適配irobot Roomba Plus 405 505 Combo 主刷 邊刷 濾網 塵袋 拖布 抺布 耗材 配件 型號/規格不相符；LBJ iRobot Roomba Plus 405 Combo: 蝦皮商城 - 玉山最低比價網 iRobot Roomba 原廠 集塵袋 3入 適 Plus 705 505 405 105 Combo 掃拖機器人 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"iRobot Roomba Plus 405 Combo\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22iRobot%20Roomba%20Plus%20405%20Combo%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"iRobot Roomba Plus 405 Combo\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22iRobot%20Roomba%20Plus%20405%20Combo%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-irobot-205-combo",
    "category": "robot",
    "rank": 21,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRobot",
    "model": "Roomba 205 Combo",
    "name": "自動壓縮集塵掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 13380,
      "converted": 13380,
      "confidence": "PChome 2026-07-12 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0JA900J02LR/000001_1782803287.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0J-A900J02LR",
    "buyLabel": "PChome",
    "specs": [
      "自動壓縮集塵",
      "掃拖一體",
      "Combo 系列",
      "極夜黑"
    ],
    "description": "iRobot Roomba 205 Combo 是次旗艦級掃拖機器人，這筆以 2026-07-11 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "iRobot 次旗艦補位：比 Plus/Max 便宜，仍保留 Roomba Combo 掃拖與自動集塵核心體驗。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "自動集塵",
      "Roomba"
    ],
    "releaseDate": "2025-03-23",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ iRobot Roomba 205 Combo: Momo富邦購物 (店+)寵愛淨 副廠 IROBOT Roomba 105 / 205 Combo 集塵 主刷 邊刷 濾網 塵袋 拖布 配件 耗材 型號/規格不相符；LBJ iRobot Roomba 205 Combo: Momo富邦購物 (店+)3入邊刷 適用iRobot Roomba Combo Essential 105 205 405 505 705 Vac 型號/規格不相符；LBJ iRobot Roomba 205 Combo: Momo富邦購物 【iRobot】Roomba Combo Essential 105 205 405 505 705 Vac 原廠專用三腳邊刷3支(原廠公司貨) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"iRobot Roomba 205 Combo\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22iRobot%20Roomba%20205%20Combo%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"iRobot Roomba 205 Combo\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22iRobot%20Roomba%20205%20Combo%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-eufy-omni-s2",
    "category": "robot",
    "rank": 22,
    "budget": "premium",
    "channel": "tw",
    "brand": "eufy",
    "model": "Omni S2",
    "name": "12 合 1 自清潔 AI 掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 29990,
      "converted": 29990,
      "confidence": "PChome 2026-07-18 API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL2DA900JOEN3/000001_1782120334.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL2D-A900JOEN3",
    "buyLabel": "PChome",
    "specs": [
      "12 合 1 基站",
      "AI 掃拖",
      "自清潔",
      "全能機器人"
    ],
    "description": "eufy Omni S2 是旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "eufy 旗艦代表：Anker 生態系品牌的高階全能款，適合重視自清潔與簡潔 App 體驗的人。",
    "score": 90,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "AI 掃拖",
      "自清潔"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ eufy Omni S2: Momo富邦購物 (店+)[可藍] 集塵袋6入 eufy Omni S2 12合1自清潔AI滾筒掃拖機器人 Eufy 自清潔掃拖一體全能機器人S1 型號/規格不相符；LBJ eufy Omni S2: 博客來 【限時優惠】eufy Omni S2 自清潔掃拖一體全能機器人(活水洗地/防纏繞設計/30000PA大吸力) 台灣公司貨保固 型號/規格不相符；LBJ eufy Omni S2: 蝦皮商城 - GSIR家電生活館 eufy S2【聊聊再折】 Omni 自清潔掃拖一體 全能機器⼈ 活水洗地 掃地機器人 拖地機 Omni S2 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"eufy Omni S2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22eufy%20Omni%20S2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"eufy Omni S2\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22eufy%20Omni%20S2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-eufy-omni-e25",
    "category": "robot",
    "rank": 23,
    "budget": "mid",
    "channel": "tw",
    "brand": "eufy",
    "model": "Omni E25",
    "name": "自清潔掃拖一體全能機器人",
    "price": {
      "currency": "TWD",
      "amount": 15990,
      "converted": 15990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL2DA900IUBA2/000001_1782120226.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL2D-A900IUBA2",
    "buyLabel": "PChome",
    "specs": [
      "20000Pa",
      "活水洗地",
      "零纏繞伸縮滾刷",
      "自清潔基站"
    ],
    "description": "eufy Omni E25 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "eufy 次旗艦甜點：用不到 S2 高階完整包時，E25 的吸力、活水洗地與價格更均衡。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "活水洗地",
      "零纏繞"
    ],
    "releaseDate": "2025-11-13",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ eufy Omni E25: 蝦皮商城 - eufy 台灣官方旗艦店 eufy Omni E25 自清潔掃拖一體全能機器人-黑 型號/規格不相符；LBJ eufy Omni E25: Momo富邦購物 【eufy】Omni E25 自清潔掃拖一體全能機器人(活水洗地/零纏繞伸縮滾刷/20000PA大吸力) 型號/規格不相符；LBJ eufy Omni E25: Momo富邦購物 【eufy】Omni E25 自清潔掃拖一體全能機器人(活水洗地/零纏繞伸縮滾刷/20000PA大吸力) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"eufy Omni E25\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22eufy%20Omni%20E25%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"eufy Omni E25\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22eufy%20Omni%20E25%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-eufy-omni-c28",
    "category": "robot",
    "rank": 24,
    "budget": "mid",
    "channel": "tw",
    "brand": "eufy",
    "model": "Omni C28",
    "name": "自清潔掃拖一體全能機器人",
    "price": {
      "currency": "TWD",
      "amount": 13291,
      "converted": 13291,
      "confidence": "Yahoo購物中心 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL2DA900K13C9/000001_1782120164.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/eufy-Omni-C28-%E8%87%AA%E6%B8%85%E6%BD%94%E6%8E%83%E6%8B%96%E4%B8%80%E9%AB%94%E5%85%A8%E8%83%BD%E6%A9%9F%E5%99%A8%E4%BA%BA-%E9%BB%91-11990604.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "自清潔基站",
      "掃拖一體",
      "白色機身",
      "全能入門定位"
    ],
    "description": "eufy Omni C28 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "eufy 高 CP 補位：價格低於 E25/S2，適合先上自清潔基站但不追最高規格的人。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "CP 值",
      "自清潔"
    ],
    "releaseDate": "2026-02-06",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ eufy Omni C28: 蝦皮商城 - Renza Filtration 濾網專家 適用 eufy 悠飛 Omni C28 自清潔掃拖一體全能機器人 掃拖機器人 耗材 配件 主刷 邊刷 集塵 型號/規格不相符；LBJ eufy Omni C28: Yahoo購物中心 eufy Omni C28全能機器人配件包 型號/規格不相符；LBJ eufy Omni C28: Momo富邦購物 【eufy】Omni C28全能機器人配件包 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"eufy Omni C28\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22eufy%20Omni%20C28%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"eufy Omni C28\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22eufy%20Omni%20C28%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-mova-s70-ultra-roller",
    "category": "robot",
    "rank": 25,
    "budget": "premium",
    "channel": "tw",
    "brand": "MOVA",
    "model": "S70 Ultra Roller",
    "name": "極薄滾筒掃拖機器人旗艦版",
    "price": {
      "currency": "TWD",
      "amount": 26980,
      "converted": 26980,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL5WA900JXBY3/000001_1776393356.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL5W-A900JXBY3",
    "buyLabel": "PChome",
    "specs": [
      "極薄機身",
      "滾筒洗地",
      "旗艦版",
      "全能基站"
    ],
    "description": "MOVA S70 Ultra Roller 是旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "MOVA 旗艦代表：把極薄機身與滾筒拖地放在同一台，適合家具底部低又重視拖地的人。",
    "score": 89,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "極薄",
      "滾筒洗地"
    ],
    "releaseDate": "2026-04-08",
    "historicalLow": {
      "status": "found",
      "amount": 26980,
      "currency": "TWD",
      "converted": 26980,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=545105490&cgp=26980",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【MOVA】S70 Ultra Roller 極薄滾筒掃拖機器人-旗艦版",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - MOVA | 恆隆行官方旗艦館 / 【MOVA】S70 Ultra Roller 極薄滾筒掃拖機器人-旗艦版」最低價為 NT$26,980，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"MOVA S70 Ultra Roller\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22MOVA%20S70%20Ultra%20Roller%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"MOVA S70 Ultra Roller\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22MOVA%20S70%20Ultra%20Roller%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-mova-s70-roller",
    "category": "robot",
    "rank": 26,
    "budget": "mid",
    "channel": "tw",
    "brand": "MOVA",
    "model": "S70 Roller",
    "name": "極薄滾筒掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 15990,
      "converted": 15990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL5WA900K13VT/000001_1779264098.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL5W-A900K13VT",
    "buyLabel": "PChome",
    "specs": [
      "極薄機身",
      "滾筒掃拖",
      "全能基站",
      "貼邊清潔"
    ],
    "description": "MOVA S70 Roller 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "MOVA 次旗艦補位：想要 S70 系列滾筒拖地，但預算不想上 Ultra 時更有 CP 值。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "極薄",
      "滾筒洗地"
    ],
    "releaseDate": "2026-03-10",
    "historicalLow": {
      "status": "found",
      "amount": 15990,
      "currency": "TWD",
      "converted": 15990,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1273664303&cgp=15990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【MOVA TW】S70 Roller 極薄滾筒掃拖機器人(滾筒超薄機身/28000PA/AI外擴貼邊/活水洗地/熱洗熱烘)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【MOVA TW】S70 Roller 極薄滾筒掃拖機器人(滾筒超薄機身/28000PA/AI外擴貼邊/活水洗地/熱洗熱烘)」最低價為 NT$15,990，最低點日期 2026-07-08。",
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
          "query": "site:mobile01.com \"MOVA S70 Roller\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22MOVA%20S70%20Roller%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"MOVA S70 Roller\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22MOVA%20S70%20Roller%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-lg-r5t-ultimate",
    "category": "robot",
    "rank": 27,
    "budget": "mid",
    "channel": "tw",
    "brand": "LG",
    "model": "R5-ULTIMATE1",
    "name": "R5T 變頻濕拖掃地機器人",
    "price": {
      "currency": "TWD",
      "amount": 13490,
      "converted": 13490,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM2ZA900IUC17/000001_1778123320.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM2Z-A900IUC17",
    "buyLabel": "PChome",
    "specs": [
      "變頻濕拖",
      "掃地機器人",
      "LG ThinQ 生態",
      "R5T 系列"
    ],
    "description": "LG R5-ULTIMATE1 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "LG 代表機：規格不追中系旗艦，但品牌售後與家電生態明確，適合偏好 LG 的家庭。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "LG 生態",
      "濕拖"
    ],
    "releaseDate": "2025",
    "historicalLow": {
      "status": "found",
      "amount": 12816,
      "currency": "TWD",
      "converted": 12816,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1267908675&cgp=13086",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【LG樂金】R5T變頻濕拖掃地機器人 R5-ULTIMATE1",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / 【LG樂金】R5T變頻濕拖掃地機器人 R5-ULTIMATE1」最低價為 NT$12,816，最低點日期 2026-06-18。",
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
          "query": "site:mobile01.com \"LG R5-ULTIMATE1\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20R5-ULTIMATE1%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG R5-ULTIMATE1\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20R5-ULTIMATE1%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-lg-r5-proplus",
    "category": "robot",
    "rank": 28,
    "budget": "mid",
    "channel": "tw",
    "brand": "LG",
    "model": "R5-PROPLUS1",
    "name": "R5 變頻濕拖掃地機器人",
    "price": {
      "currency": "TWD",
      "amount": 9490,
      "converted": 9490,
      "confidence": "PChome 2026-07-12 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM2ZA900IUC1E/000001_1768835646.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM2Z-A900IUC1E",
    "buyLabel": "PChome",
    "specs": [
      "變頻濕拖",
      "掃地機器人",
      "入門 R5 系列",
      "台灣通路"
    ],
    "description": "LG R5-PROPLUS1 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "LG 高 CP 補位：若只需要基礎掃拖與品牌售後，這台比追旗艦更省預算。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "CP 值",
      "濕拖"
    ],
    "releaseDate": "2025-03-11",
    "historicalLow": {
      "status": "found",
      "amount": 7999,
      "currency": "TWD",
      "converted": 7999,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1272992626&cgp=7999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：LG樂金 CordZero™ R5 濕拖掃地機器人 R5-PROPLUS1",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / LG樂金 CordZero™ R5 濕拖掃地機器人 R5-PROPLUS1」最低價為 NT$7,999，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"LG R5-PROPLUS1\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20R5-PROPLUS1%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG R5-PROPLUS1\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20R5-PROPLUS1%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-shark-powerdetect-nevertouch-pro",
    "category": "robot",
    "rank": 29,
    "budget": "premium",
    "channel": "global",
    "brand": "Shark",
    "model": "PowerDetect NeverTouch Pro RV2820ZE",
    "name": "自動補水洗烘拖布掃拖機器人",
    "price": {
      "currency": "USD",
      "amount": 999.99,
      "converted": 32341,
      "confidence": "SharkNinja US 2026-07-20 來源價；ExchangeRate-API 2026-07-19 匯率換算"
    },
    "image": "https://assets.sharkninja.com/image/upload/f_auto/q_auto/SharkNinja-NA/RV2820ZE_01.jpg",
    "buyUrl": "https://www.sharkninja.com/shark-powerdetect-2-in-1-robot-vacuum-and-mop-with-nevertouch-pro-base/RV2820ZE.html",
    "buyLabel": "SharkNinja US",
    "specs": [
      "NeverTouch Pro 基站",
      "自動補水",
      "自動洗烘拖布",
      "官網標示 In Stock"
    ],
    "description": "Shark PowerDetect NeverTouch Pro RV2820ZE 是旗艦級海外參考機型，換算 TWD 僅供比較，未含國際運費、進口稅與台灣保固。",
    "pros": [
      "官方頁目前有明確折扣價與庫存",
      "基站維護自動化程度高"
    ],
    "cons": [
      "海外版需確認電壓/保固/耗材",
      "台灣購買便利性不如本地通路"
    ],
    "bestFor": "想比較美系旗艦掃拖機器人，且可接受海外購買與保固風險的人。",
    "recommendation": "Shark 海外旗艦代表：用來補足台灣通路較少見的美系自動維護基站方案。",
    "score": 86,
    "voltage": "海外版本，需確認 100-240V、插頭與變壓器需求",
    "warranty": "可能無台灣保固，購買前需向通路確認",
    "tags": [
      "旗艦",
      "海外參考",
      "自動洗烘"
    ],
    "releaseDate": "2024-10-05",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：BigGo Shark PowerDetect NeverTouch Pro RV2820ZE: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/Shark%20PowerDetect%20NeverTouch%20Pro%20RV2820ZE/product?p=1；BigGo PowerDetect NeverTouch Pro RV2820ZE: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/PowerDetect%20NeverTouch%20Pro%20RV2820ZE/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Shark PowerDetect NeverTouch Pro RV2820ZE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Shark%20PowerDetect%20NeverTouch%20Pro%20RV2820ZE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Shark PowerDetect NeverTouch Pro RV2820ZE\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Shark%20PowerDetect%20NeverTouch%20Pro%20RV2820ZE%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-dyson-spot-scrub-ai",
    "category": "robot",
    "rank": 30,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dyson",
    "model": "Spot+Scrub Ai",
    "name": "AI 汙漬偵測濕乾掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 24900,
      "converted": 24900,
      "confidence": "Dyson 台灣官網 2026-07-16 公開價"
    },
    "image": "https://dysonshop.blob.core.windows.net/products/dyson-spot-scrub-ai-black/hero-1780338742-480x480.jpg",
    "buyUrl": "https://shop.dyson.tw/robot-vacuums/robot/dyson-spot-scrub-ai-black-217994-01",
    "buyLabel": "Dyson 台灣官網",
    "specs": [
      "RB05／DR30",
      "18000Pa",
      "AI 汙漬辨識",
      "自清潔滾筒",
      "Cyclonic dock"
    ],
    "description": "Dyson Spot+Scrub Ai 已由台灣官網正式販售，主打 AI 汙漬偵測、濕乾掃拖、自清潔滾筒與無集塵袋基站。",
    "pros": [
      "台灣官方現貨與售後管道較明確",
      "濕拖、汙漬偵測與無集塵袋基站有特色"
    ],
    "cons": [
      "新機上市時間較短，長期耐用度仍待觀察",
      "高階耗材與維修成本需一併評估"
    ],
    "bestFor": "想買台灣公司貨、重視定點汙漬處理與無集塵袋基站的人。",
    "recommendation": "Dyson 台灣旗艦候選：官方現貨價已低於原海外參考換算價，適合與同價位全能基站機種比較。",
    "score": 88,
    "voltage": "台灣官方販售版本；電壓與插座條件依原廠商品頁及安裝環境確認",
    "warranty": "Dyson 台灣官方保固；年限與登錄條件依商品頁",
    "tags": [
      "旗艦",
      "台灣公司貨",
      "AI 汙漬偵測",
      "現貨查核"
    ],
    "releaseDate": "2026-03-12",
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
      "note": "已查 Dyson 台灣官網、LBJ、FindPrice 與可信新品通路；目前僅能確認台灣官方現價 NT$24,900，未找到同型號、同規格且排除會員／信用卡／點數優惠的可公開重現歷史價格曲線，因此不以現價推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson Spot+Scrub Ai\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20Spot%2BScrub%20Ai%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson Spot+Scrub Ai\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20Spot%2BScrub%20Ai%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-costco-us-roborock-qx-revo",
    "category": "robot",
    "rank": 31,
    "budget": "mid",
    "channel": "global",
    "brand": "Roborock",
    "model": "QX Revo",
    "name": "Robot Vacuum and Mop with Multifunctional Dock",
    "price": {
      "currency": "USD",
      "amount": 399.99,
      "converted": 12936,
      "confidence": "Costco US 2026-07-20 來源價；ExchangeRate-API 2026-07-19 匯率換算"
    },
    "image": "https://bfasset.costco-static.com/U447IH35/as/tkj772p4357mmh3bwz8kcq/1791272-847__1?auto=webp&format=jpg",
    "buyUrl": "https://www.costco.com/roborock-qx-revo-robot-vacuum-and-mop-with-multifunctional-dock.product.4000233271.html",
    "buyLabel": "Costco US",
    "specs": [
      "掃拖機器人",
      "多功能基站",
      "Costco US 2,885 則評論",
      "海外購買需確認電壓、耗材與保固"
    ],
    "description": "Costco US 上評論量很高的 Roborock 掃拖機器人，適合作為海外價格與同級台灣機種的比較參考。",
    "pros": [
      "Costco US 評論數高，市場口碑基礎厚",
      "掃拖與基站自動化完整"
    ],
    "cons": [
      "未含國際運費、進口稅與台灣保固",
      "需自行確認電壓、插頭、耗材與 App 區域支援"
    ],
    "bestFor": "可接受海外採購風險，想比較 Roborock Costco 特規價格的人。",
    "recommendation": "好市多海外補充：QX Revo 在 Costco US 評論量高，適合對照台灣 Roborock、Dreame、Narwal 機種。",
    "score": 86,
    "voltage": "海外版本，需確認 100-240V、插頭與變壓器需求",
    "warranty": "Costco US / 海外通路，可能無台灣保固",
    "tags": [
      "Costco US",
      "Roborock",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Roborock QX Revo: 蝦皮購物 - 恒潔智能家電配件『服務之上の售後無憂の品質保證』 🏆超人氣🏆配石頭Roborock QX Revo Ultra掃地機器人配件主邊刷濾網拖布塵袋 型號/規格不相符；LBJ Roborock QX Revo: 蝦皮購物 - 恒潔智能家電配件『服務之上の售後無憂の品質保證』 🏆超人氣🏆配石頭Roborock QX Revo Arc掃地機器人配件主邊刷濾網拖布集塵袋 型號/規格不相符；LBJ Roborock QX Revo: 蝦皮購物 - 恒潔智能家電配件『服務之上の售後無憂の品質保證』 🌺臺南出貨🌺適用Roborock QX Revo Plus石頭掃地機配件主邊刷濾網塵袋拖抹布💕💕💕💕 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 QX Revo 使用者回報使用一段時間或清洗拖布時，基站或機器會漏水至底盤或地板。",
      "issues": [
        {
          "title": "基站或機器漏水",
          "detail": "部分案例換新後再次發生；收到商品後應反覆測試拖布清洗、排水與回充底盤，並確認清水箱、污水箱與密封件安裝正常。",
          "reportCount": 7,
          "sources": [
            {
              "platform": "Costco",
              "title": "Roborock QX Revo Robot Vacuum and Mop with Multifunctional Dock",
              "url": "https://www.costco.com/roborock-qx-revo-robot-vacuum-and-mop-with-multifunctional-dock.product.4000233271.html"
            },
            {
              "platform": "Reddit",
              "title": "QX Revo leaking onto lower tray after cycle",
              "url": "https://old.reddit.com/r/Roborock/comments/1l61vlx/qx_revo_leaking_onto_lower_tray_after_cycle/"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "robot-costco-eufy-e20",
    "category": "robot",
    "rank": 32,
    "budget": "mid",
    "channel": "tw",
    "brand": "eufy",
    "model": "E20",
    "name": "三合一掃地機器人",
    "price": {
      "currency": "TWD",
      "amount": 9889,
      "converted": 9889,
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h21/heb/400747429363742.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Small-Appliances/Vacuums-Floor-Care/Eufy-3-in-1-Robot-Vacuum-E20/p/157135",
    "buyLabel": "Costco 好市多",
    "specs": [
      "三合一掃地機器人",
      "100-120V / 50-60Hz",
      "集塵基站",
      "Costco 稀少分類例外候選",
      "Costco 評價 4.1 / 14 則"
    ],
    "description": "Costco Taiwan 少數可買的掃地機器人候選，補進海外 Costco 與台灣通路比較。",
    "pros": [
      "台灣好市多正常新品頁",
      "價格低於多數旗艦掃拖機"
    ],
    "cons": [
      "評分不如高階旗艦",
      "功能與避障需和主流旗艦比較"
    ],
    "bestFor": "想在好市多買掃地機器人、並可接受中階定位的人",
    "recommendation": "好市多補充推薦：三合一掃地機器人 評價不錯，補進掃拖機器人分類作為 Costco 候選比較。",
    "score": 82,
    "voltage": "100-120V / 50-60Hz",
    "warranty": "依 Costco 好市多商品頁與品牌 1 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "eufy",
      "集塵",
      "中階"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ eufy E20: Momo富邦購物 【eufy】E20 三合一掃地機器人-高性能濾網+過濾海綿(吸塵器/掃地機器人) 型號/規格不相符；LBJ eufy E20: Momo富邦購物 (店+)3入濾網 適用 eufy E20 三合一掃地機器人 吸塵器 塵筒濾網 型號/規格不相符；LBJ eufy E20: Momo富邦購物 【eufy】E20 三合一掃地機器人-集塵袋(吸塵器/掃地機器人) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"eufy E20\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22eufy%20E20%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"eufy E20\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22eufy%20E20%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-xiaomi-vacuum-6-max",
    "category": "robot",
    "rank": 33,
    "budget": "premium",
    "channel": "tw",
    "brand": "Xiaomi",
    "model": "6 Max",
    "name": "Xiaomi 掃拖機器人 6 Max",
    "price": {
      "currency": "TWD",
      "amount": 22800,
      "converted": 22800,
      "confidence": "Yahoo購物中心 2026-07-18 商品頁公開價"
    },
    "image": "https://img.yec.tw/zp/MerchandiseImages/5A801ABE6A-SP-22823743.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/%E5%B0%8F%E7%B1%B3-Xiaomi-%E6%8E%83%E6%8B%96%E6%A9%9F%E5%99%A8%E4%BA%BA-6-Max-%E5%AE%98%E6%96%B9%E6%97%97%E8%89%A6%E9%A4%A8-12134974.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "35,000Pa 吸力",
      "滾刷活水洗地、貼邊拖布與外擴邊刷",
      "三攝 AI 避障，可辨識 320+ 種物品與污漬",
      "6cm 單台階越障；最低可進入 9.3cm 空間",
      "85°C 洗拖布、50°C 烘乾與自動集塵",
      "6400mAh 電池；全方位工作站"
    ],
    "description": "Xiaomi 2026 年新款台灣旗艦掃拖機器人，主打三重外擴清掃、滾刷活水洗地、35,000Pa 吸力、三攝 AI 避障與 6cm 越障。",
    "pros": [
      "台灣官方規格與可信通路新品頁完整",
      "吸力、貼邊覆蓋、越障與低矮空間清潔規格突出",
      "基站具熱水洗拖布、熱風烘乾與自動集塵"
    ],
    "cons": [
      "新機上市，長期可靠度與耗材成本仍需觀察",
      "AI 攝影功能涉及居家隱私，預設雖關閉仍應確認設定",
      "工作站體積大，購買前需確認進排水箱操作與擺放空間"
    ],
    "bestFor": "想比較台灣可購買新一代滾刷掃拖旗艦，重視越障、貼邊與基站自清潔的人。",
    "recommendation": "新品補充：6 Max 規格完整且台灣通路已可購買，但上市時間短，先列入旗艦比較池並持續追蹤實際口碑與價格。",
    "score": 92,
    "voltage": "工作站 100-120V、50/60Hz；台灣規格頁標示",
    "warranty": "依小米台灣與 PChome/供應商頁面",
    "tags": [
      "Xiaomi",
      "滾刷洗地",
      "AI 避障",
      "35,000Pa",
      "6cm 越障"
    ],
    "releaseDate": "2026-06-16",
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
      "checkedAt": "2026-07-11",
      "note": "已查 BigGo、FindPrice 與 LBJ 的完整型號；新品公開頁僅能驗證目前售價，未找到同型號可信新品通路可公開驗證的歷史價格序列，因此不以現價推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Xiaomi 6 Max\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Xiaomi%206%20Max%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Xiaomi 6 Max\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Xiaomi%206%20Max%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-ecovacs-t90-pro",
    "category": "robot",
    "rank": 9,
    "budget": "premium",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT T90 PRO OMNI",
    "name": "ECOVACS DEEBOT T90 PRO OMNI",
    "price": {
      "currency": "TWD",
      "amount": 20999,
      "converted": 20999,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0LA900JWVON/000001_1776138874.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0L-A900JWVON",
    "buyLabel": "PChome",
    "specs": [
      "27cm OZMO Roller 3.0；32 孔活水、200rpm",
      "30,000Pa 吸力；16L/s 風量",
      "TruEdge 3.0 貼邊、ZeroTangle 4.0 防纏繞",
      "AIVI 3D 4.0 避障；機身高度 95mm",
      "單階 2.4cm／連續門檻 4cm",
      "75°C 熱水洗滾筒；PowerBoost 快充"
    ],
    "description": "ECOVACS 2026 年高階滾筒掃拖款，補入 T80 OMNI 之上的 30,000Pa、AIVI 3D 4.0 與 75°C 洗滾筒比較位置。",
    "pros": [
      "台灣官方規格與可信通路新品頁完整",
      "滾筒、貼邊、防纏繞與避障規格全面",
      "20K 級價格可和其他品牌旗艦比較"
    ],
    "cons": [
      "新品長期可靠度與耗材成本仍需追蹤",
      "Reddit 同站已有多位使用者反映 App／建圖、跳區與導航不穩；尚未跨第二原始網站達災情門檻",
      "全能基站需預留散熱與維護空間"
    ],
    "bestFor": "想升級高吸力滾筒掃拖、重視貼邊與避障，但預算不想突破三萬元的人。",
    "recommendation": "新品補充：T90 PRO OMNI 是 T80 之上的直接升級比較款；目前規格與台灣售價有競爭力，但單站 App／導航回報較集中，建議保留退換貨期完整測試。",
    "score": 92,
    "voltage": "110V 台灣官方通路；基站請使用穩定插座",
    "warranty": "依 ECOVACS 台灣與 PChome/供應商頁面",
    "tags": [
      "ECOVACS",
      "滾筒洗地",
      "30,000Pa",
      "AIVI 3D 4.0",
      "75°C 洗滾筒"
    ],
    "releaseDate": "2026-02-20",
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
      "checkedAt": "2026-07-11",
      "note": "已查 BigGo、FindPrice 與 LBJ 的完整型號 ECOVACS DEEBOT T90 PRO OMNI；可信新品頁只足以驗證目前售價，未找到同型號可公開驗證的歷史價格序列，因此不以現價推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"ECOVACS DEEBOT T90 PRO OMNI\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22ECOVACS%20DEEBOT%20T90%20PRO%20OMNI%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"ECOVACS DEEBOT T90 PRO OMNI\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22ECOVACS%20DEEBOT%20T90%20PRO%20OMNI%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-ecovacs-x12-pro",
    "category": "robot",
    "rank": 8,
    "budget": "premium",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT X12 PRO OMNI",
    "name": "ECOVACS DEEBOT X12 PRO OMNI",
    "price": {
      "currency": "TWD",
      "amount": 29999,
      "converted": 29999,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0LA900JS61Y/000001_1772592930.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0L-A900JS61Y",
    "buyLabel": "PChome",
    "specs": [
      "FocusJet 定點增壓洗地",
      "27cm OZMO Roller 3.0；32 路活水",
      "22,000Pa 吸力；22L/s 風量",
      "滾筒遮罩、15mm 抬升與 TruEdge 2.58cm 外擴",
      "ZeroTangle 4.0；AIVI 3D 4.0 避障",
      "單階 2.4cm／連續門檻 4cm；PowerBoost"
    ],
    "description": "ECOVACS 2026 年台灣旗艦滾筒掃拖機，主打 FocusJet 定點增壓、滾筒遮罩與抬升、AIVI 3D 4.0 與高風量。",
    "pros": [
      "台灣官方旗艦規格與可信新品通路齊全",
      "滾筒遮罩、抬升與定點增壓適合混合地面",
      "基站與避障規格完整"
    ],
    "cons": [
      "接近三萬元，需和 T90 PRO 及他牌旗艦衡量價差",
      "搜尋到的 X12 相近型號頁未完整明示 PRO OMNI，不能直接當成同型號負評",
      "新機長期可靠度仍需觀察"
    ],
    "bestFor": "重視滾筒洗地、地毯隔離、污漬定點增壓與完整旗艦基站的人。",
    "recommendation": "新品補充：X12 PRO OMNI 是 X11 系列之後的台灣旗艦比較款；功能完整，但價差與新品長期可靠度仍值得保留觀察期。",
    "score": 93,
    "voltage": "110V 台灣官方通路；基站請使用穩定插座",
    "warranty": "依 ECOVACS 台灣與 PChome/供應商頁面",
    "tags": [
      "ECOVACS",
      "FocusJet",
      "滾筒洗地",
      "AIVI 3D 4.0",
      "旗艦"
    ],
    "releaseDate": "2026-04-02",
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
      "checkedAt": "2026-07-11",
      "note": "已查 BigGo、FindPrice 與 LBJ 的完整型號 ECOVACS DEEBOT X12 PRO OMNI；可信新品頁只足以驗證目前售價，未找到同型號可公開驗證的歷史價格序列，因此不以現價推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Ecovacs DEEBOT X12 PRO OMNI\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Ecovacs%20DEEBOT%20X12%20PRO%20OMNI%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Ecovacs DEEBOT X12 PRO OMNI\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Ecovacs%20DEEBOT%20X12%20PRO%20OMNI%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "robot-xiaomi-h50-pro",
    "category": "robot",
    "rank": 34,
    "budget": "mid",
    "channel": "tw",
    "brand": "Xiaomi",
    "model": "H50 Pro",
    "name": "Xiaomi 掃拖機器人 H50 Pro",
    "price": {
      "currency": "TWD",
      "amount": 10450,
      "converted": 10450,
      "confidence": "Yahoo購物中心 2026-07-18 商品頁公開價"
    },
    "image": "https://img.yec.tw/zp/MerchandiseImages/DBA14833A1-SP-22450109.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/%E5%B0%8F%E7%B1%B3-Xiaomi-%E6%8E%83%E6%8B%96%E6%A9%9F%E5%99%A8%E4%BA%BA-H50-Pro-12052496.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "15,000Pa 吸力",
      "掃／拖雙機械臂；主刷與邊刷雙抗纏繞",
      "129° 結構光避障",
      "雙旋轉拖布；地毯拖布抬升",
      "5200mAh 電池",
      "全能基站：洗烘、集塵與底盤清潔"
    ],
    "description": "Xiaomi 2026 年台灣中階全能基站款，以約萬元價格提供 15,000Pa、結構光避障、雙機械臂與自動洗烘集塵。",
    "pros": [
      "台灣官方型號與可信自營通路可買",
      "萬元級具全能基站、結構光與雙機械臂",
      "官方規格標示 100–120V，台灣適用"
    ],
    "cons": [
      "已有少量污水箱偵測、抗纏繞與邊角清潔回報，未達集中災情門檻",
      "避障與貼邊表現仍不等同兩萬元以上旗艦",
      "水箱與底盤仍需定期人工清潔"
    ],
    "bestFor": "預算約一萬元、想要台灣公司貨全能基站與基本避障的人。",
    "recommendation": "新品補充：H50 Pro 不是 6 Max 後繼，而是更平價的中階全能基站選擇；CP 值突出，但建議保留退換貨期實測基站感測與邊角清潔。",
    "score": 89,
    "voltage": "工作站 100–120V、50/60Hz；台灣官方規格",
    "warranty": "依 Xiaomi 台灣與 Yahoo 購物中心頁面",
    "tags": [
      "Xiaomi",
      "15,000Pa",
      "全能基站",
      "結構光避障",
      "中階 CP 值"
    ],
    "releaseDate": "2026-03-06",
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
      "checkedAt": "2026-07-11",
      "note": "已查 BigGo、FindPrice 與 LBJ 的完整型號 Xiaomi H50 Pro；可信新品頁只足以驗證目前售價，未找到同型號可公開驗證的歷史價格序列，因此不以現價推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Xiaomi H50 Pro\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.google.com/search?q=site%3Amobile01.com%20%22Xiaomi%20H50%20Pro%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "\"Xiaomi H50 Pro\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.reddit.com/search/?q=%22Xiaomi%20H50%20Pro%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  }
]);
})();

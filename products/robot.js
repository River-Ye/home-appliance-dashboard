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
      "confidence": "PChome 2026-08-26 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
    "releaseDate": "2025-05-09",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Roborock Saros Z70\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Roborock%20Saros%20Z70%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Roborock Saros Z70\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Roborock%20Saros%20Z70%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Roborock Saros Z70\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Roborock%20Saros%20Z70%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Roborock Saros Z70\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Roborock%20Saros%20Z70%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Roborock Saros Z70\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Roborock%20Saros%20Z70%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "confidence": "PChome 2026-08-26 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Roborock Saros 20 水立方: Momo富邦購物 【Roborock 石頭科技】旗艦新品上市! Saros 20跨越奇兵掃拖機-水立方(100度熱水/8.8公分越障/3.6萬大吸力) 型號/規格不相符；LBJ Roborock Saros 20 水立方: 蝦皮商城 - GSIR家電生活館 Roborock 石頭科技 Saros 20 水立方【10%蝦幣回饋】 跨越奇兵 旗艦越障掃拖王者 掃地機器人 公司貨 型號/規格不相符；LBJ Roborock Saros 20 水立方: 蝦皮商城 - Roborock 石頭科技官方旗艦店 Roborock 石頭科技 Saros 20 跨越奇兵 水立方 (100度熱水洗/雙門檻越障/36000pa) 預購 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Roborock Saros 20 水立方\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Roborock%20Saros%2020%20%E6%B0%B4%E7%AB%8B%E6%96%B9%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Roborock Saros 20 水立方\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Roborock%20Saros%2020%20%E6%B0%B4%E7%AB%8B%E6%96%B9%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Roborock Saros 20 水立方\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Roborock%20Saros%2020%20%E6%B0%B4%E7%AB%8B%E6%96%B9%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Roborock Saros 20 水立方\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Roborock%20Saros%2020%20%E6%B0%B4%E7%AB%8B%E6%96%B9%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Roborock Saros 20 水立方\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Roborock%20Saros%2020%20%E6%B0%B4%E7%AB%8B%E6%96%B9%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-roborock-saros-20-sonic",
    "category": "robot",
    "rank": 4,
    "budget": "premium",
    "channel": "tw",
    "brand": "Roborock",
    "model": "Saros 20 Sonic",
    "name": "Saros 20 Sonic 聲波拖地旗艦掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 34980,
      "converted": 34980,
      "confidence": "Momo 2026-08-25 exact-model 台灣公司貨新品公開價",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "excluded",
      "note": "通路價格只含機器人與基站，不含到府網路設定、家具移動、門檻改造、固定給排水或電源施工。"
    },
    "image": "https://taiwan.roborock.com/cdn/shop/files/Saros20_Sonic_album_pic1_asia_web.jpg",
    "buyUrl": "https://www.momoshop.com.tw/product/15103194",
    "buyLabel": "Momo 購物網",
    "specs": [
      "36000Pa HyperForce 吸力",
      "VibraRise 5.0 聲波拖地：每分鐘 4000 次、14N 下壓力",
      "100°C 熱水洗拖布、55°C 暖風烘乾",
      "最小通過高度 7.95 cm（本體高 7.98 cm）；最高跨越 8.8 cm 雙層門檻",
      "機器人尺寸：寬 35 x 深 35.3 x 高 7.98 cm",
      "基站尺寸：寬 44 x 深 40.9 x 高 47 cm"
    ],
    "description": "Roborock Saros 20 Sonic 是台灣現售的聲波拖地旗艦，與採旋轉拖布／水立方基站的 Saros 20 變體不同；主打 36000Pa、VibraRise 5.0 與高溫洗烘基站。",
    "pros": [
      "聲波拖布可升降與伸縮，較適合需要反覆刷洗的硬質地板",
      "最小通過高度 7.95 cm 與 8.8 cm 雙門檻越障兼顧低矮家具與複雜動線",
      "台灣官方、通路、120V／60Hz 手冊與一年保固資料完整"
    ],
    "cons": [
      "旗艦價格高，耗材與大型基站空間仍需預留",
      "聲波拖布和旋轉拖布手感不同，建議依地板材質選擇",
      "Reddit 有少量無回應、錯誤碼與拖地痕跡個案，但尚未達跨站集中災情門檻"
    ],
    "bestFor": "想要高吸力、超薄機身與聲波擦洗，且家中有多層門檻或低矮家具的使用者。",
    "recommendation": "聲波拖地旗艦候選：與 Saros 20 水立方版形成不同拖地路線；重視硬地刷洗可優先比較此款。",
    "score": 94,
    "voltage": "台灣公司貨；官方 FCC 手冊明載 120V AC、60Hz",
    "warranty": "台灣公司貨 1 年保固；範圍與送修方式依 Roborock 台灣及 Momo 購買憑證",
    "tags": [
      "旗艦",
      "聲波拖地",
      "36000Pa",
      "超薄越障"
    ],
    "releaseDate": "2026-04-15",
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
      "checkedAt": "2026-08-25",
      "note": "已查 Roborock 台灣官方、Momo exact-model 現售頁及公開比價／價格搜尋；可確認查核日通路價，但找不到具日期、可重現且排除個人化優惠的 exact-model 歷史價格曲線，因此不以現價推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com/r/Roborock \"Saros 20 Sonic\" (problem OR issue OR error OR unresponsive)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%2Fr%2FRoborock%20%22Saros%2020%20Sonic%22%20%28problem%20OR%20issue%20OR%20error%20OR%20unresponsive%29",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Saros 20 Sonic\" (問題 OR 災情 OR 使用)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Saros%2020%20Sonic%22%20%28%E5%95%8F%E9%A1%8C%20OR%20%E7%81%BD%E6%83%85%20OR%20%E4%BD%BF%E7%94%A8%29",
          "targetHost": "mobile01.com"
        }
      ]
    }
  },
  {
    "id": "robot-roborock-saros-20",
    "category": "robot",
    "rank": 5,
    "budget": "premium",
    "channel": "tw",
    "brand": "Roborock",
    "model": "Saros 20",
    "name": "跨越奇兵旗艦越障掃拖王者",
    "price": {
      "currency": "TWD",
      "amount": 34980,
      "converted": 34980,
      "confidence": "PChome 2026-08-26 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
    "releaseDate": "2026-03-23",
    "historicalLow": {
      "status": "found",
      "amount": 29682,
      "currency": "TWD",
      "converted": 29682,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMBL1C-A900JMMCO",
      "sourceTitle": "PChome 24h 購物：Roborock 石頭科技掃地機器人Saros 20",
      "evidenceSnippet": "PChome 24h 購物於 2026-07-27 顯示同型號可信新品公開價 NT$29,682，低於既有史低 NT$32,980。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-27",
      "note": "採用 PChome 24h 購物當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Roborock Saros 20\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Roborock%20Saros%2020%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Roborock Saros 20\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Roborock%20Saros%2020%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Roborock Saros 20\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Roborock%20Saros%2020%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Roborock Saros 20\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Roborock%20Saros%2020%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Roborock Saros 20\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Roborock%20Saros%2020%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-roborock-qrevo-edge-2-pro",
    "category": "robot",
    "rank": 6,
    "budget": "mid",
    "channel": "tw",
    "brand": "Roborock",
    "model": "Qrevo Edge 2 Pro",
    "name": "雙越野高智商旗艦級掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 28980,
      "converted": 28980,
      "confidence": "PChome 2026-08-26 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Roborock Qrevo Edge 2 Pro\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Roborock%20Qrevo%20Edge%202%20Pro%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Roborock Qrevo Edge 2 Pro\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Roborock%20Qrevo%20Edge%202%20Pro%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Roborock Qrevo Edge 2 Pro\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Roborock%20Qrevo%20Edge%202%20Pro%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Roborock Qrevo Edge 2 Pro\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Roborock%20Qrevo%20Edge%202%20Pro%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Roborock Qrevo Edge 2 Pro\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Roborock%20Qrevo%20Edge%202%20Pro%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
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
      "confidence": "PChome 2026-08-26 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
    "releaseDate": "2026-01-19",
    "historicalLow": {
      "status": "found",
      "amount": 18388,
      "currency": "TWD",
      "converted": 18388,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMBL1C-A900JA04J",
      "sourceTitle": "PChome 24h 購物：Roborock 石頭科技 掃地機器人Qrevo Curv2 Flow",
      "evidenceSnippet": "PChome 24h 購物於 2026-08-07 顯示同型號可信新品公開價 NT$18,388，低於既有史低 NT$18,398。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-08-07",
      "note": "採用 PChome 24h 購物當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Roborock Qrevo Curv 2 Flow\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Roborock%20Qrevo%20Curv%202%20Flow%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Roborock Qrevo Curv 2 Flow\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Roborock%20Qrevo%20Curv%202%20Flow%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Roborock Qrevo Curv 2 Flow\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Roborock%20Qrevo%20Curv%202%20Flow%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Roborock Qrevo Curv 2 Flow\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Roborock%20Qrevo%20Curv%202%20Flow%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Roborock Qrevo Curv 2 Flow\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Roborock%20Qrevo%20Curv%202%20Flow%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-ecovacs-x11-pro-plumbed",
    "category": "robot",
    "rank": 7,
    "budget": "premium",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT X11 PRO 上下水款",
    "name": "無限續航滾筒洗地機器人上下水款",
    "price": {
      "currency": "TWD",
      "amount": 25999,
      "converted": 25999,
      "confidence": "Yahoo購物中心 2026-08-19 exact-model 公開結構化價格"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Ecovacs DEEBOT X11 PRO 上下水款: Yahoo購物中心 【ECOVACS 科沃斯】DEEBOT X11 PRO 上下水款 無限續航滾筒洗地機器人(滾筒恆壓洗地/超能基站/掃地機器人/自動上下水) 型號/規格不相符；LBJ Ecovacs DEEBOT X11 PRO 上下水款: 蝦皮商城 - 蝦皮直營 - 3C家電館 ECOVACS 科沃斯 DEEBOT X11 PRO 上下水款 無限續航滾筒洗地機器人 廠商直送 型號/規格不相符；LBJ Ecovacs DEEBOT X11 PRO 上下水款: 蝦皮商城 - Beutii質感家電選品 ECOVACS 科沃斯 DEEBOT X11 PRO 上下水款 無限續航滾筒洗地機器人 超能基站 Beutii 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Ecovacs DEEBOT X11 PRO 上下水款\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Ecovacs%20DEEBOT%20X11%20PRO%20%E4%B8%8A%E4%B8%8B%E6%B0%B4%E6%AC%BE%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Ecovacs DEEBOT X11 PRO 上下水款\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Ecovacs%20DEEBOT%20X11%20PRO%20%E4%B8%8A%E4%B8%8B%E6%B0%B4%E6%AC%BE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Ecovacs DEEBOT X11 PRO 上下水款\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Ecovacs%20DEEBOT%20X11%20PRO%20%E4%B8%8A%E4%B8%8B%E6%B0%B4%E6%AC%BE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Ecovacs DEEBOT X11 PRO 上下水款\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Ecovacs%20DEEBOT%20X11%20PRO%20%E4%B8%8A%E4%B8%8B%E6%B0%B4%E6%AC%BE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Ecovacs DEEBOT X11 PRO 上下水款\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Ecovacs%20DEEBOT%20X11%20PRO%20%E4%B8%8A%E4%B8%8B%E6%B0%B4%E6%AC%BE%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-ecovacs-x11-pro",
    "category": "robot",
    "rank": 8,
    "budget": "premium",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT X11 PRO",
    "name": "無限續航滾筒洗地機器人",
    "price": {
      "currency": "TWD",
      "amount": 19999,
      "converted": 19999,
      "confidence": "PChome 2026-08-06 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Ecovacs DEEBOT X11 PRO\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Ecovacs%20DEEBOT%20X11%20PRO%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Ecovacs DEEBOT X11 PRO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Ecovacs%20DEEBOT%20X11%20PRO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Ecovacs DEEBOT X11 PRO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Ecovacs%20DEEBOT%20X11%20PRO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Ecovacs DEEBOT X11 PRO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Ecovacs%20DEEBOT%20X11%20PRO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Ecovacs DEEBOT X11 PRO\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Ecovacs%20DEEBOT%20X11%20PRO%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-ecovacs-t80-omni",
    "category": "robot",
    "rank": 11,
    "budget": "mid",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT T80 OMNI",
    "name": "滾筒活水洗地掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 14999,
      "converted": 14999,
      "confidence": "momo 2026-07-31 exact-model 公開折後價（活動至 2026-07-31）"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0LA900IT3IU/000001_1763087795.jpg",
    "buyUrl": "https://www.momoshop.com.tw/product/14001201",
    "buyLabel": "momo",
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
    "warranty": "momo 頁面標示 1 年保固",
    "tags": [
      "次旗艦",
      "滾筒洗地",
      "貼邊清潔"
    ],
    "releaseDate": "2025-05",
    "historicalLow": {
      "status": "found",
      "amount": 14999,
      "currency": "TWD",
      "converted": 14999,
      "sourceUrl": "https://www.momoshop.com.tw/product/14001201",
      "sourceTitle": "momo 購物網：ECOVACS DEEBOT T80 OMNI 7 月公開特價",
      "evidenceSnippet": "momo 同型號新品頁於 2026-07-31 顯示「07/01~07/31 科沃斯 T80 特價 14999」及「限時折後價 14,999 元」。",
      "sourceKind": "retailer_promo",
      "confidence": "high",
      "checkedAt": "2026-07-31",
      "note": "同型號新品通路的公開單件折價活動，非會員個人化折扣、信用卡回饋、點數、福利品或展示品。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-08-29",
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
    "rank": 12,
    "budget": "mid",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT T50 PRO OMNI",
    "name": "超薄全覆蓋全能旗艦掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 14999,
      "converted": 14999,
      "confidence": "PChome 2026-08-14 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Ecovacs DEEBOT T50 PRO OMNI: Momo富邦購物 【ECOVACS 科沃斯】DEEBOT T50 PRO OMNI豪華耗材禮盒 型號/規格不相符；LBJ Ecovacs DEEBOT T50 PRO OMNI: Momo富邦購物 (店+)【ECOVACS 科沃斯】DEEBOT T50 PRO OMNI 超薄全覆蓋全能旗艦掃拖機器人 型號/規格不相符；LBJ Ecovacs DEEBOT T50 PRO OMNI: 蝦皮購物 - zhi cheng 科沃斯Ecovacs Deebot T30S T30 N30 N30 Pro Omni T50 Pro 拖把架備用2件 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Ecovacs DEEBOT T50 PRO OMNI\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Ecovacs%20DEEBOT%20T50%20PRO%20OMNI%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Ecovacs DEEBOT T50 PRO OMNI\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Ecovacs%20DEEBOT%20T50%20PRO%20OMNI%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Ecovacs DEEBOT T50 PRO OMNI\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Ecovacs%20DEEBOT%20T50%20PRO%20OMNI%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Ecovacs DEEBOT T50 PRO OMNI\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Ecovacs%20DEEBOT%20T50%20PRO%20OMNI%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Ecovacs DEEBOT T50 PRO OMNI\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Ecovacs%20DEEBOT%20T50%20PRO%20OMNI%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-ecovacs-n50",
    "category": "robot",
    "rank": 13,
    "budget": "mid",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT N50",
    "name": "強清潔全能掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 12999,
      "converted": 12999,
      "confidence": "PChome 2026-08-14 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Ecovacs DEEBOT N50: Momo富邦購物 【ECOVACS 科沃斯】掃地機器人專用_原廠豪華耗材配件禮盒(DEEBOT T50/N50系列 專用) 型號/規格不相符；LBJ Ecovacs DEEBOT N50: 蝦皮商城 - ECOVACS 科沃斯 官方旗艦店 ECOVACS 科沃斯 DEEBOT T50/N50系列 豪華耗材禮盒 型號/規格不相符；LBJ Ecovacs DEEBOT N50: HOTAI購 【HOTAI購】【ECOVACS 科沃斯】DEEBOT T50/N50系列 豪華耗材禮盒 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Ecovacs DEEBOT N50\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Ecovacs%20DEEBOT%20N50%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Ecovacs DEEBOT N50\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Ecovacs%20DEEBOT%20N50%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Ecovacs DEEBOT N50\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Ecovacs%20DEEBOT%20N50%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Ecovacs DEEBOT N50\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Ecovacs%20DEEBOT%20N50%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Ecovacs DEEBOT N50\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Ecovacs%20DEEBOT%20N50%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-dreame-x60-master",
    "category": "robot",
    "rank": 14,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dreame",
    "model": "X60 Master",
    "name": "AI 藍光辨識超薄掃拖旗艦機低矮版",
    "price": {
      "currency": "TWD",
      "amount": 31980,
      "converted": 31980,
      "confidence": "PChome 2026-08-31 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Dreame X60 Master: Momo富邦購物 【Dreame 追覓科技】X60 Master AI藍光辨識超薄掃拖旗艦機（低矮版）AI藍光髒污檢測/7.95公分超薄機身 型號/規格不相符；LBJ Dreame X60 Master: 蝦皮商城 - Dreame 追覓台灣 【Dreame追覓】X60 Master AI藍光辨識超薄掃拖旗艦機（低矮版）｜台灣公司貨 型號/規格不相符；LBJ Dreame X60 Master: 蝦皮商城 - Dreame 追覓台灣 【Dreame追覓】X60 Master AI藍光辨識超薄掃拖旗艦機（低矮版） Complete｜一年份耗材 台灣公司貨 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dreame X60 Master\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dreame%20X60%20Master%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dreame X60 Master\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dreame%20X60%20Master%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Dreame X60 Master\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Dreame%20X60%20Master%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Dreame X60 Master\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Dreame%20X60%20Master%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Dreame X60 Master\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Dreame%20X60%20Master%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-dreame-d30-ultra-ce",
    "category": "robot",
    "rank": 15,
    "budget": "mid",
    "channel": "tw",
    "brand": "Dreame",
    "model": "D30 Ultra CE",
    "name": "全能掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 9999,
      "converted": 9999,
      "confidence": "PChome 2026-08-31 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
      "amount": 8982,
      "currency": "TWD",
      "converted": 8982,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMBL3E-A900JY4G0",
      "sourceTitle": "PChome 24h 購物：【Dreame 追覓科技】D30 Ultra CE 全能掃拖機器人",
      "evidenceSnippet": "PChome 24h 購物於 2026-08-28 顯示同型號可信新品公開價 NT$8,982，低於既有史低 NT$8,999。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-08-28",
      "note": "採用 PChome 24h 購物當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dreame D30 Ultra CE\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dreame%20D30%20Ultra%20CE%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dreame D30 Ultra CE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dreame%20D30%20Ultra%20CE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Dreame D30 Ultra CE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Dreame%20D30%20Ultra%20CE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Dreame D30 Ultra CE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Dreame%20D30%20Ultra%20CE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Dreame D30 Ultra CE\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Dreame%20D30%20Ultra%20CE%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-narwal-freo-z-ultra",
    "category": "robot",
    "rank": 16,
    "budget": "premium",
    "channel": "tw",
    "brand": "Narwal",
    "model": "Freo Z Ultra",
    "name": "真雙目 AI 掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 15900,
      "converted": 15900,
      "confidence": "PChome 2026-08-23 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Narwal Freo Z Ultra\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Narwal%20Freo%20Z%20Ultra%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Narwal Freo Z Ultra\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Narwal%20Freo%20Z%20Ultra%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Narwal Freo Z Ultra\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Narwal%20Freo%20Z%20Ultra%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Narwal Freo Z Ultra\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Narwal%20Freo%20Z%20Ultra%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Narwal Freo Z Ultra\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Narwal%20Freo%20Z%20Ultra%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-narwal-flow-2",
    "category": "robot",
    "rank": 17,
    "budget": "premium",
    "channel": "global",
    "brand": "Narwal",
    "model": "Flow 2",
    "name": "滾筒洗地旗艦掃拖機器人",
    "price": {
      "currency": "EUR",
      "amount": 1099,
      "converted": 40389,
      "confidence": "Narwal 德國官方 2026-08-28 exact-model 標準套裝公開價 €1,099，目前所有變體售罄；ExchangeRate-API 2026-08-30 匯率換算"
    },
    "image": "https://de.narwal.com/cdn/shop/files/narwal-flow-2-saugroboter-mit-selbstreinigung-9224922_1200x1200.png?v=1781597108",
    "buyUrl": "https://de.narwal.com/products/narwal-flow-2-saugroboter-mit-selbstreinigung?variant=52366680523028",
    "buyLabel": "Narwal 德國官方 exact-model 標準套裝（目前售罄）",
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
      "官方頁目前所有變體售罄，無法立即購買",
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
    "releaseDate": "2026-04-20",
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
      "checkedAt": "2026-08-28",
      "note": "已查 Narwal 德國官方 exact-model 標準套裝、BigGo、FindPrice 與 LBJ；官方頁可重現本輪 €1,099 標價，但所有變體目前售罄，且未取得帶日期的可信新品歷史低點，未以現價推定史低。原 Boulanger 頁現已改由第三方 techzedeal 販售且價格 €1,299.99，故不再作現價來源。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Narwal Flow 2\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Narwal%20Flow%202%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Narwal Flow 2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Narwal%20Flow%202%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Narwal Flow 2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Narwal%20Flow%202%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Narwal Flow 2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Narwal%20Flow%202%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Narwal Flow 2\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Narwal%20Flow%202%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-narwal-freo-z10-ultra",
    "category": "robot",
    "rank": 18,
    "budget": "mid",
    "channel": "global",
    "brand": "Narwal",
    "model": "Freo Z10 Ultra",
    "name": "18,000Pa AI 視覺全能掃拖機器人",
    "price": {
      "currency": "USD",
      "amount": 551.69,
      "converted": 17468,
      "confidence": "Geekbuying 2026-07-21 來源價；ExchangeRate-API 2026-08-30 匯率換算"
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
    "releaseDate": "2025-04-15",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Narwal Freo Z10 Ultra\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Narwal%20Freo%20Z10%20Ultra%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Narwal Freo Z10 Ultra\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Narwal%20Freo%20Z10%20Ultra%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Narwal Freo Z10 Ultra\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Narwal%20Freo%20Z10%20Ultra%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Narwal Freo Z10 Ultra\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Narwal%20Freo%20Z10%20Ultra%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Narwal Freo Z10 Ultra\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Narwal%20Freo%20Z10%20Ultra%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-irobot-max-705",
    "category": "robot",
    "rank": 19,
    "budget": "premium",
    "channel": "tw",
    "brand": "iRobot",
    "model": "Roomba Max 705 Combo",
    "name": "全能滾筒旗艦機皇掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 29292,
      "converted": 29292,
      "confidence": "PChome 2026-08-31 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ iRobot Roomba Max 705 Combo: Yahoo購物中心 美國iRobot Roomba Max 705 Combo 掃拖機器人原廠濾網3片 型號/規格不相符；LBJ iRobot Roomba Max 705 Combo: Momo富邦購物 【iRobot】Roomba Max 705 Vac 掃地機器人專用原廠濾網3片(原廠公司貨 Max 705 Combo不能使用) 型號/規格不相符；LBJ iRobot Roomba Max 705 Combo: 蝦皮商城 - 美國iRobot & 加拿大Spärkel官方旗艦店(來思比科技集團) 領券9折-美國iRobot Roomba Max 705 Vac掃地機器人原廠濾網3片(705 Combo 不能用) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-08-29",
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
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRobot",
    "model": "Roomba Plus 505 Combo",
    "name": "熱旋風延邊避障全能掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 19692,
      "converted": 19692,
      "confidence": "PChome 2026-08-01 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
      "checkedAt": "2026-08-29",
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
    "rank": 21,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRobot",
    "model": "Roomba Plus 405 Combo",
    "name": "旋風全能掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 15292,
      "converted": 15292,
      "confidence": "PChome 2026-08-31 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ iRobot Roomba Plus 405 Combo: Momo富邦購物 (店+)寵愛淨 副廠 IROBOT Roomba Plus 405 505 Combo 主刷 邊刷 濾網 塵袋 拖布 配件 耗材 型號/規格不相符；LBJ iRobot Roomba Plus 405 Combo: 樂天市場 - 全球優品匯 【全球優品匯】適配irobot Roomba Plus 405 505 Combo 主刷 邊刷 濾網 塵袋 拖布 抺布 耗材 配件 型號/規格不相符；LBJ iRobot Roomba Plus 405 Combo: 蝦皮商城 - 玉山最低比價網 iRobot Roomba 原廠 集塵袋 3入 適 Plus 705 505 405 105 Combo 掃拖機器人 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"iRobot Roomba Plus 405 Combo\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22iRobot%20Roomba%20Plus%20405%20Combo%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"iRobot Roomba Plus 405 Combo\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22iRobot%20Roomba%20Plus%20405%20Combo%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"iRobot Roomba Plus 405 Combo\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22iRobot%20Roomba%20Plus%20405%20Combo%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"iRobot Roomba Plus 405 Combo\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22iRobot%20Roomba%20Plus%20405%20Combo%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"iRobot Roomba Plus 405 Combo\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22iRobot%20Roomba%20Plus%20405%20Combo%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-irobot-205-combo",
    "category": "robot",
    "rank": 22,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRobot",
    "model": "Roomba 205 Combo",
    "name": "自動壓縮集塵掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 12780,
      "converted": 12780,
      "confidence": "PChome 2026-08-19 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"iRobot Roomba 205 Combo\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22iRobot%20Roomba%20205%20Combo%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"iRobot Roomba 205 Combo\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22iRobot%20Roomba%20205%20Combo%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"iRobot Roomba 205 Combo\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22iRobot%20Roomba%20205%20Combo%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"iRobot Roomba 205 Combo\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22iRobot%20Roomba%20205%20Combo%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"iRobot Roomba 205 Combo\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22iRobot%20Roomba%20205%20Combo%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-eufy-omni-s2",
    "category": "robot",
    "rank": 23,
    "budget": "premium",
    "channel": "tw",
    "brand": "eufy",
    "model": "Omni S2",
    "name": "12 合 1 自清潔 AI 掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 31990,
      "converted": 31990,
      "confidence": "PChome 2026-08-26 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ eufy Omni S2: Momo富邦購物 (店+)[可藍] 集塵袋6入 eufy Omni S2 12合1自清潔AI滾筒掃拖機器人 Eufy 自清潔掃拖一體全能機器人S1 型號/規格不相符；LBJ eufy Omni S2: 博客來 【限時優惠】eufy Omni S2 自清潔掃拖一體全能機器人(活水洗地/防纏繞設計/30000PA大吸力) 台灣公司貨保固 型號/規格不相符；LBJ eufy Omni S2: 蝦皮商城 - GSIR家電生活館 eufy S2【聊聊再折】 Omni 自清潔掃拖一體 全能機器⼈ 活水洗地 掃地機器人 拖地機 Omni S2 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"eufy Omni S2\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22eufy%20Omni%20S2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"eufy Omni S2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22eufy%20Omni%20S2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"eufy Omni S2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22eufy%20Omni%20S2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"eufy Omni S2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22eufy%20Omni%20S2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"eufy Omni S2\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22eufy%20Omni%20S2%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-eufy-omni-e25",
    "category": "robot",
    "rank": 24,
    "budget": "mid",
    "channel": "tw",
    "brand": "eufy",
    "model": "Omni E25",
    "name": "自清潔掃拖一體全能機器人",
    "price": {
      "currency": "TWD",
      "amount": 15990,
      "converted": 15990,
      "confidence": "PChome 2026-08-26 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
    "releaseDate": "2025-05-27",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"eufy Omni E25\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22eufy%20Omni%20E25%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"eufy Omni E25\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22eufy%20Omni%20E25%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"eufy Omni E25\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22eufy%20Omni%20E25%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"eufy Omni E25\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22eufy%20Omni%20E25%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"eufy Omni E25\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22eufy%20Omni%20E25%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-eufy-omni-c28",
    "category": "robot",
    "rank": 25,
    "budget": "mid",
    "channel": "tw",
    "brand": "eufy",
    "model": "Omni C28",
    "name": "自清潔掃拖一體全能機器人",
    "price": {
      "currency": "TWD",
      "amount": 13990,
      "converted": 13990,
      "confidence": "Yahoo購物中心 2026-08-26 exact-model 公開結構化價格"
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
    "releaseDate": "2026-02",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"eufy Omni C28\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22eufy%20Omni%20C28%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"eufy Omni C28\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22eufy%20Omni%20C28%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"eufy Omni C28\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22eufy%20Omni%20C28%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"eufy Omni C28\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22eufy%20Omni%20C28%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"eufy Omni C28\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22eufy%20Omni%20C28%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-mova-s70-ultra-roller",
    "category": "robot",
    "rank": 26,
    "budget": "premium",
    "channel": "tw",
    "brand": "MOVA",
    "model": "S70 Ultra Roller",
    "name": "極薄滾筒掃拖機器人旗艦版",
    "price": {
      "currency": "TWD",
      "amount": 25980,
      "converted": 25980,
      "confidence": "PChome 2026-08-31 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 24681,
      "currency": "TWD",
      "converted": 24681,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMBL5W-A900JXBY3",
      "sourceTitle": "PChome 24h 購物：MOAV S70 Ultra Roller 極薄滾筒掃拖機器人(旗艦版)",
      "evidenceSnippet": "PChome 24h 購物於 2026-08-11 07:47（台灣時間）回傳同型號新品公開折扣價 NT$24,681，低於既有史低 NT$26,980；API 商品編號 DMBL5W-A900JXBY3、Qty 20，型號文字為 S70 Ultra Roller。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-08-11",
      "note": "採用 PChome 24h 購物當日可購商品的同型號新品公開價；有正值 Price.Low 時優先於 Price.P，並排除會員券、點數、信用卡回饋、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"MOVA S70 Ultra Roller\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22MOVA%20S70%20Ultra%20Roller%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"MOVA S70 Ultra Roller\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22MOVA%20S70%20Ultra%20Roller%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"MOVA S70 Ultra Roller\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22MOVA%20S70%20Ultra%20Roller%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"MOVA S70 Ultra Roller\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22MOVA%20S70%20Ultra%20Roller%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"MOVA S70 Ultra Roller\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22MOVA%20S70%20Ultra%20Roller%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-mova-s70-roller",
    "category": "robot",
    "rank": 27,
    "budget": "mid",
    "channel": "tw",
    "brand": "MOVA",
    "model": "S70 Roller",
    "name": "極薄滾筒掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 16140,
      "converted": 16140,
      "confidence": "PChome 2026-08-18 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"MOVA S70 Roller\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22MOVA%20S70%20Roller%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"MOVA S70 Roller\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22MOVA%20S70%20Roller%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"MOVA S70 Roller\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22MOVA%20S70%20Roller%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"MOVA S70 Roller\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22MOVA%20S70%20Roller%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"MOVA S70 Roller\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22MOVA%20S70%20Roller%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-lg-r5t-ultimate",
    "category": "robot",
    "rank": 28,
    "budget": "mid",
    "channel": "tw",
    "brand": "LG",
    "model": "R5-ULTIMATE1",
    "name": "R5T 變頻濕拖掃地機器人",
    "price": {
      "currency": "TWD",
      "amount": 13490,
      "converted": 13490,
      "confidence": "PChome 2026-07-29 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
    "releaseDate": "找不到",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG R5-ULTIMATE1\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20R5-ULTIMATE1%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG R5-ULTIMATE1\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20R5-ULTIMATE1%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG R5-ULTIMATE1\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%20R5-ULTIMATE1%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG R5-ULTIMATE1\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%20R5-ULTIMATE1%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG R5-ULTIMATE1\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%20R5-ULTIMATE1%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-lg-r5-proplus",
    "category": "robot",
    "rank": 29,
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
    "releaseDate": "找不到",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG R5-PROPLUS1\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20R5-PROPLUS1%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG R5-PROPLUS1\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20R5-PROPLUS1%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG R5-PROPLUS1\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%20R5-PROPLUS1%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG R5-PROPLUS1\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%20R5-PROPLUS1%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG R5-PROPLUS1\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%20R5-PROPLUS1%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-shark-powerdetect-nevertouch-pro",
    "category": "robot",
    "rank": 30,
    "budget": "premium",
    "channel": "global",
    "brand": "Shark",
    "model": "PowerDetect NeverTouch Pro RV2820ZE",
    "name": "自動補水洗烘拖布掃拖機器人",
    "price": {
      "currency": "USD",
      "amount": 999.99,
      "converted": 31662,
      "confidence": "SharkNinja US 2026-07-21 來源價；ExchangeRate-API 2026-08-30 匯率換算"
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
    "releaseDate": "2024",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Shark PowerDetect NeverTouch Pro RV2820ZE\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Shark%20PowerDetect%20NeverTouch%20Pro%20RV2820ZE%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Shark PowerDetect NeverTouch Pro RV2820ZE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Shark%20PowerDetect%20NeverTouch%20Pro%20RV2820ZE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Shark PowerDetect NeverTouch Pro RV2820ZE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Shark%20PowerDetect%20NeverTouch%20Pro%20RV2820ZE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Shark PowerDetect NeverTouch Pro RV2820ZE\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Shark%20PowerDetect%20NeverTouch%20Pro%20RV2820ZE%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Shark PowerDetect NeverTouch Pro RV2820ZE\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Shark%20PowerDetect%20NeverTouch%20Pro%20RV2820ZE%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-dyson-spot-scrub-ai",
    "category": "robot",
    "rank": 31,
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson Spot+Scrub Ai\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20Spot%2BScrub%20Ai%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson Spot+Scrub Ai\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20Spot%2BScrub%20Ai%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Dyson Spot+Scrub Ai\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Dyson%20Spot%2BScrub%20Ai%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Dyson Spot+Scrub Ai\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Dyson%20Spot%2BScrub%20Ai%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Dyson Spot+Scrub Ai\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Dyson%20Spot%2BScrub%20Ai%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-costco-us-roborock-qx-revo",
    "category": "robot",
    "rank": 32,
    "budget": "mid",
    "channel": "global",
    "brand": "Roborock",
    "model": "QX Revo",
    "name": "Robot Vacuum and Mop with Multifunctional Dock",
    "price": {
      "currency": "USD",
      "amount": 399.99,
      "converted": 12665,
      "confidence": "Costco US 2026-07-21 最後可驗證價；2026-08-15 exact-model 頁顯示 Unavailable；ExchangeRate-API 2026-08-30 匯率換算"
    },
    "image": "https://bfasset.costco-static.com/U447IH35/as/tkj772p4357mmh3bwz8kcq/1791272-847__1?auto=webp&format=jpg",
    "buyUrl": "https://www.costco.com/p/-/roborock-qx-revo-robot-vacuum-and-mop-with-multifunctional-dock/4000233271",
    "buyLabel": "Costco US（目前無法購買）",
    "specs": [
      "掃拖機器人",
      "多功能基站",
      "Costco US exact-model 頁目前顯示 Unavailable",
      "海外購買需確認電壓、耗材與保固"
    ],
    "description": "Roborock QX Revo 具掃拖與多功能基站；Costco US exact-model 頁目前無法購買，僅保留作海外規格與最後可驗證價格參考。",
    "pros": [
      "5500Pa、雙旋轉拖布與多功能基站規格完整",
      "掃拖與基站自動化完整"
    ],
    "cons": [
      "未含國際運費、進口稅與台灣保固",
      "需自行確認電壓、插頭、耗材與 App 區域支援",
      "Costco US exact-model 頁目前無法購買"
    ],
    "bestFor": "可接受海外採購風險，想比較 Roborock Costco 特規價格的人。",
    "recommendation": "海外規格參考：目前無可購新品來源，不列為台灣優先選擇；待 Costco US 或原廠恢復供貨再更新。",
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
      "checkedAt": "2026-08-29",
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
    "rank": 33,
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
    "releaseDate": "2025-02",
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"eufy E20\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22eufy%20E20%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"eufy E20\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22eufy%20E20%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"eufy E20\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22eufy%20E20%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"eufy E20\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22eufy%20E20%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"eufy E20\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22eufy%20E20%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-xiaomi-vacuum-6-max",
    "category": "robot",
    "rank": 34,
    "budget": "premium",
    "channel": "tw",
    "brand": "Xiaomi",
    "model": "6 Max",
    "name": "Xiaomi 掃拖機器人 6 Max",
    "price": {
      "currency": "TWD",
      "amount": 23999,
      "converted": 23999,
      "confidence": "Yahoo購物中心 2026-08-04 exact-model 公開結構化價格"
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
      "checkedAt": "2026-07-11",
      "note": "已查 BigGo、FindPrice 與 LBJ 的完整型號；新品公開頁僅能驗證目前售價，未找到同型號可信新品通路可公開驗證的歷史價格序列，因此不以現價推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Xiaomi 6 Max\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Xiaomi%206%20Max%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Xiaomi 6 Max\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Xiaomi%206%20Max%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Xiaomi 6 Max\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Xiaomi%206%20Max%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Xiaomi 6 Max\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Xiaomi%206%20Max%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Xiaomi 6 Max\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Xiaomi%206%20Max%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-ecovacs-t90-pro",
    "category": "robot",
    "rank": 10,
    "budget": "premium",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT T90 PRO OMNI",
    "name": "ECOVACS DEEBOT T90 PRO OMNI",
    "price": {
      "currency": "TWD",
      "amount": 20999,
      "converted": 20999,
      "confidence": "PChome 2026-08-14 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
      "Reddit 與 YouTube 已有達門檻的同型號導航／避障漏掃回報，部分需調整 AIVI、另建區域或重新建圖",
      "全能基站需預留散熱與維護空間"
    ],
    "bestFor": "想升級高吸力滾筒掃拖、重視貼邊與避障，但預算不想突破三萬元的人。",
    "recommendation": "新品補充：T90 PRO OMNI 是 T80 之上的直接升級比較款；目前規格與台灣售價有競爭力，但導航／避障漏掃已達跨站災情門檻，建議保留退換貨期完整測試。",
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
      "status": "common_issue",
      "checkedAt": "2026-08-29",
      "summary": "多位 DEEBOT T90 PRO OMNI 使用者跨站回報，導航／避障會跳過或拒絕清掃實際可到達的區域。",
      "issues": [
        {
          "title": "導航／避障跳過可到達區域",
          "detail": "回報包含漏掃房間邊緣、整塊地毯、局部區域與可通過的家具兩側，也有物件移走後仍繞開舊位置的情況；部分可透過調整 AIVI、另建區域或重新建圖改善。建議在退換貨期內以全屋不同地面連續測試，確認地圖與實際覆蓋範圍。",
          "reportCount": 10,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Ecovacs Deebot T90 Pro Omni skipping a lot of places",
              "url": "https://www.reddit.com/r/ecovacs/comments/1uo11zp/ecovacs_deebot_t90_pro_omni_skipping_a_lot_of/"
            },
            {
              "platform": "Reddit",
              "title": "Qrevo Master vs T90 Pro Omni",
              "url": "https://www.reddit.com/r/RobotVacuums/comments/1udvtrz/qrevo_master_vs_t90_pro_omni/"
            },
            {
              "platform": "Reddit",
              "title": "First time owner - any tips/tricks/info I should know",
              "url": "https://www.reddit.com/r/RobotVacuums/comments/1us8voq/first_time_owner_any_tipstricksinfo_i_should_know/"
            },
            {
              "platform": "Reddit",
              "title": "Deebot t90 pro omni - what is this madness?",
              "url": "https://www.reddit.com/r/ecovacs/comments/1uio4qj/deebot_t90_pro_omni_what_is_this_madness/"
            },
            {
              "platform": "Reddit",
              "title": "Please be mindful if buying a T90 Pro Omni",
              "url": "https://www.reddit.com/r/ecovacs/comments/1ureiz8/please_be_mindful_if_buying_a_t90_pro_omni/"
            },
            {
              "platform": "YouTube",
              "title": "3 Months with a Robot Vacuum! ECOVACS T90 PRO OMNI Review",
              "url": "https://www.youtube.com/watch?v=sprhcYrQYfI"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "robot-ecovacs-x12-pro",
    "category": "robot",
    "rank": 9,
    "budget": "premium",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT X12 PRO OMNI",
    "name": "ECOVACS DEEBOT X12 PRO OMNI",
    "price": {
      "currency": "TWD",
      "amount": 26999,
      "converted": 26999,
      "confidence": "PChome 2026-08-14 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Ecovacs DEEBOT X12 PRO OMNI\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Ecovacs%20DEEBOT%20X12%20PRO%20OMNI%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Ecovacs DEEBOT X12 PRO OMNI\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Ecovacs%20DEEBOT%20X12%20PRO%20OMNI%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Ecovacs DEEBOT X12 PRO OMNI\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Ecovacs%20DEEBOT%20X12%20PRO%20OMNI%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Ecovacs DEEBOT X12 PRO OMNI\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Ecovacs%20DEEBOT%20X12%20PRO%20OMNI%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Ecovacs DEEBOT X12 PRO OMNI\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Ecovacs%20DEEBOT%20X12%20PRO%20OMNI%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-xiaomi-h50-pro",
    "category": "robot",
    "rank": 35,
    "budget": "mid",
    "channel": "tw",
    "brand": "Xiaomi",
    "model": "H50 Pro",
    "name": "Xiaomi 掃拖機器人 H50 Pro",
    "price": {
      "currency": "TWD",
      "amount": 9975,
      "converted": 9975,
      "confidence": "Yahoo購物中心 2026-08-18 exact-model 公開結構化價格"
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
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Xiaomi H50 Pro\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Xiaomi%20H50%20Pro%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Xiaomi H50 Pro\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Xiaomi%20H50%20Pro%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Xiaomi H50 Pro\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Xiaomi%20H50%20Pro%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Xiaomi H50 Pro\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Xiaomi%20H50%20Pro%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Xiaomi H50 Pro\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Xiaomi%20H50%20Pro%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-hobot-legee-q10-pro",
    "category": "robot",
    "rank": 36,
    "topPick": false,
    "budget": "premium",
    "channel": "tw",
    "brand": "HOBOT",
    "model": "LEGEE-Q10 PRO",
    "name": "LEGEE-Q10 PRO 雷姬掃拖地機器人＋LuLu 洗布座",
    "price": {
      "currency": "TWD",
      "amount": 19800,
      "converted": 19800,
      "confidence": "PChome 24h 2026-08-14 exact-model 新品頁公開價；建議售價 NT$29,800",
      "basis": "retailer_current"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0PA900IW7Y7/yt000001_1749100214.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0P-A900IW7Y7",
    "buyLabel": "PChome 24h購物",
    "installation": {
      "status": "not_stated",
      "note": "PChome exact-model 頁僅列廠商出貨與宅配到府，未標示安裝服務；LuLu 洗布座為水箱式自動清洗／補水／烘乾／充電座，應依原廠說明置於平坦乾燥處並預留插座與含導板深 48.6cm 的空間。"
    },
    "specs": [
      "四合一吸塵、清掃、噴水、拖地；LEGEE SLAM 10.0 導航",
      "7,000Pa 吸力；無纏繞吸口、ECO Compactor 五倍集塵壓縮",
      "每分鐘 1,300 次往復拖地、8mm 振幅、600g 下壓力",
      "拖布抬升 10mm；Corner Killer 伸縮邊拖；越障最高 20mm",
      "主機尺寸：長 35 x 寬 35 x 高 9.75 cm；5200mAh 電池",
      "塵盒 500ml、清水箱 320ml；最多儲存 5 張地圖",
      "LuLu 洗布座 40°C 熱風烘乾；清水 3.2L／污水 2.8L；含導板尺寸 41 x 48.6 x 39 cm",
      "主機變壓器與洗布座皆支援 100–240V、50/60Hz 輸入"
    ],
    "description": "台灣 HOBOT 旗艦掃拖組合，以高頻往復擦地、7,000Pa 吸力、伸縮邊拖和水箱式 LuLu 洗布座，提供免集塵袋的完整洗烘補水體驗。",
    "pros": [
      "每分鐘 1,300 次往復拖地與 600g 下壓力，硬地板擦拭特色明確",
      "洗布座整合清洗、補水、40°C 烘乾與充電，不需安裝進排水",
      "無纏繞吸口、五倍壓縮塵盒免集塵袋，降低耗材支出"
    ],
    "cons": [
      "仍需人工倒塵盒與清污水箱，並定期清潔洗布座",
      "Mobile01 有少數 exact-model 使用者回報水箱感測、未噴水、滴水、洗布座震動或中斷續掃問題，但作者與平台數均未達集中災情門檻",
      "含導板深 48.6cm，擺放前需預留基座前方進出空間"
    ],
    "bestFor": "重視硬地板高頻擦拭、想避開集塵袋耗材，且願意自行倒塵與維護清污水箱的家庭。",
    "recommendation": "HOBOT 台灣旗艦補強：Q10 Pro 的往復拖布和免集塵袋設計有明確差異；購買後建議在退換貨期內實測噴水、水箱偵測與中斷續掃。",
    "score": 90,
    "voltage": "主機與 LuLu 洗布座皆為 100–240V、50/60Hz 輸入；台灣適用",
    "warranty": "HOBOT 台灣總代理和康生技提供 1 年保固（依原廠／總代理條款）",
    "tags": [
      "HOBOT",
      "7,000Pa",
      "往復拖地",
      "LuLu洗布座",
      "免集塵袋",
      "台灣公司貨"
    ],
    "releaseDate": "2025-07-11",
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
      "note": "已查 HOBOT 台灣官方規格、和康總代理上市與 exact-model 商品頁、PChome 及 exact-model 價格搜尋；PChome NT$19,800 與官方商城 NT$20,800 都是本輪現價，未找到可公開重現且具日期的可信新品歷史曲線，因此不推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HOBOT LEGEE-Q10 PRO\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HOBOT%20LEGEE-Q10%20PRO%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HOBOT LEGEE-Q10 PRO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HOBOT%20LEGEE-Q10%20PRO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HOBOT LEGEE-Q10 PRO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HOBOT%20LEGEE-Q10%20PRO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HOBOT LEGEE-Q10 PRO\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HOBOT%20LEGEE-Q10%20PRO%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HOBOT LEGEE-Q10 PRO\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HOBOT%20LEGEE-Q10%20PRO%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-roborock-qrevo-edge-2-flow",
    "category": "robot",
    "rank": 37,
    "topPick": false,
    "budget": "premium",
    "channel": "tw",
    "brand": "Roborock",
    "model": "Qrevo Edge 2 Flow",
    "name": "搖滾天王超薄活水滾筒掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 26980,
      "converted": 26980,
      "confidence": "PChome 2026-08-26 exact-model 公開價；有正值 Price.Low 時優先於 Price.P",
      "basis": "retailer_current"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL1CA900K7R6R/000001_1785985365.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL1C-A900K7R6R",
    "buyLabel": "PChome 24h購物",
    "installation": {
      "status": "not_stated",
      "note": "PChome exact-model 頁未標示到府安裝；一體式基座需放在平坦乾燥處、靠近插座並預留主機進出與清污水箱維護空間。"
    },
    "specs": [
      "SpiraFlow 2.0 活水強壓滾筒；16 個出水孔、240RPM",
      "35,000Pa；DuoDivide 雙懸臂零纏繞主刷",
      "8.98cm 超薄機身；RetractSense 升降 LDS",
      "Reactive AI 可辨識超過 280 種障礙物",
      "63°C 熱風烘乾；最長 65 天自動集塵",
      "主機 35.2 x 35.3 x 8.98 cm；基座 40.2 x 47 x 45.1 cm"
    ],
    "description": "Roborock Qrevo Edge 2 Flow 以 8.98cm 超薄機身、35,000Pa 吸力與持續清洗的活水滾筒，補強低矮家具與濕黏髒污的清潔能力。",
    "pros": [
      "35,000Pa 與活水滾筒兼顧吸塵、濕拖",
      "升降 LDS 讓 8.98cm 機身可深入低矮家具",
      "台灣可信新品通路可下單，保固與 BSMI 資訊清楚"
    ],
    "cons": [
      "價格高於現有 Qrevo Curv 2 Flow Top Pick",
      "基座與污水箱仍需定期清潔",
      "通路未標示基座輸入電壓／頻率，使用前需依銘牌確認"
    ],
    "bestFor": "家中低矮家具多、常有毛髮或濕黏髒污，並重視滾筒即時清洗的人。",
    "recommendation": "新品補充：超薄升降 LDS、35,000Pa 與 SpiraFlow 2.0 是明確升級；現價仍高，重視 CP 值可優先比較既有 Top Pick。",
    "score": 93,
    "voltage": "5200mAh 鋰電池式主機；台灣通路列 BSMI R3C433，輸入電壓／頻率未標示，使用前依機身銘牌",
    "warranty": "PChome 台灣新品通路標示 1 年保固",
    "tags": [
      "次旗艦",
      "活水滾筒",
      "超薄",
      "零纏繞",
      "台灣公司貨"
    ],
    "releaseDate": "2026-07-22",
    "historicalLow": {
      "status": "found",
      "amount": 25980,
      "currency": "TWD",
      "converted": 25980,
      "sourceUrl": "https://3c.ltn.com.tw/news/66905",
      "sourceTitle": "新一代超薄滾筒活水掃拖機器人登場 深入床底、沙發下不留死角",
      "evidenceSnippet": "自由時報 3C 科技於 2026-07-21 報導 exact model 推出，並明示限時優惠價 NT$25,980。",
      "sourceKind": "retailer_promo",
      "confidence": "medium",
      "checkedAt": "2026-08-16",
      "note": "採用 2026-07-21 過往 exact-model 公開限時新品價，不以本次現價推定史低；未包含會員券、信用卡、點數或非新品條件。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Roborock Qrevo Edge 2 Flow\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Roborock%20Qrevo%20Edge%202%20Flow%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Roborock Qrevo Edge 2 Flow\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Roborock%20Qrevo%20Edge%202%20Flow%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Roborock Qrevo Edge 2 Flow\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Roborock%20Qrevo%20Edge%202%20Flow%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Roborock Qrevo Edge 2 Flow\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Roborock%20Qrevo%20Edge%202%20Flow%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Roborock Qrevo Edge 2 Flow\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Roborock%20Qrevo%20Edge%202%20Flow%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-tplink-tapo-rv30-max-plus",
    "category": "robot",
    "rank": 38,
    "topPick": false,
    "budget": "value",
    "channel": "tw",
    "brand": "TP-Link",
    "model": "Tapo RV30 Max Plus",
    "name": "5300Pa LiDAR 自動集塵掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 6888,
      "converted": 6888,
      "confidence": "momo 購物網於 2026-08-20 的 exact-model 台灣公司貨新品頁公開價 NT$6,888",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "not_stated",
      "note": "momo 商品價含掃拖主機與 Plus 自動集塵座，未標示含到府設定；需自行安置集塵座、連接 Tapo App、整理地面線材並建立地圖。"
    },
    "image": "https://i4.momoshop.com.tw/1769046836/goodsimg/0013/838/076/13838076_R_m.webp",
    "buyUrl": "https://www.momoshop.com.tw/product/13838076",
    "buyLabel": "momo exact-model 台灣公司貨新品",
    "specs": [
      "最大吸力 5300Pa；LiDAR + IMU 導航",
      "Plus 自動集塵座 3L 集塵袋；集塵吸力 17000Pa",
      "機器人集塵盒 300ml；水箱 300ml；H11 濾網",
      "機身尺寸：直徑 33 x 高 10 cm；集塵座：寬 22.8 x 深 16.4 x 高 33 cm",
      "2600mAh 電池；最長約 150 分鐘；充電約 4 小時",
      "機器人最大功率 45W；集塵座最大功率 650W",
      "支援 Tapo App、多樓層地圖、禁區、房間與排程清掃"
    ],
    "description": "不到七千元把 5300Pa、LiDAR 與 3L 自動集塵帶進比較，補上 TP-Link／Tapo 智慧家庭生態系與高 CP 入門自集塵路線。",
    "pros": [
      "5300Pa、LiDAR 與自動集塵在價格帶內規格突出",
      "3L 集塵袋減少日常倒塵頻率",
      "可與既有 Tapo 智慧家庭 App 共用，台灣官方保固政策明確"
    ],
    "cons": [
      "沒有洗拖布、烘乾或自動補排水等高階基座功能",
      "避障以 LiDAR／感測器為主，線材、襪子與窗簾仍應先整理",
      "Reddit exact-model 曾出現少數地圖、拖地導航或回座候選，但同症狀未達 6 人且只集中單一網站；建議到貨後完整測試地圖與回座"
    ],
    "bestFor": "想用入門預算取得 LiDAR 與自動集塵，家中已有 Tapo 裝置且願意自行整理線材、定期清洗拖布的使用者。",
    "recommendation": "自動集塵 CP 推薦：用低價補上 5300Pa、LiDAR 與 3L 集塵，適合和高階全能基座清楚比較功能取捨。",
    "releaseDate": "2024-11-14",
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
      "note": "已查 momo exact-model 台灣新品頁、TP-Link 台灣 2025 公開促銷頁與比價入口；現價 NT$6,888 低於舊促銷價不等同已驗證史低，未找到完整價格時間軸，故不推定。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TP-Link Tapo RV30 Max Plus\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22TP-Link%20Tapo%20RV30%20Max%20Plus%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TP-Link Tapo RV30 Max Plus\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22TP-Link%20Tapo%20RV30%20Max%20Plus%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"TP-Link Tapo RV30 Max Plus\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22TP-Link%20Tapo%20RV30%20Max%20Plus%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"TP-Link Tapo RV30 Max Plus\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22TP-Link%20Tapo%20RV30%20Max%20Plus%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"TP-Link Tapo RV30 Max Plus\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22TP-Link%20Tapo%20RV30%20Max%20Plus%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 87,
    "voltage": "台灣授權通路版本集塵座 AC 100–120V／50–60Hz；不可與 220–240V 海外版集塵座跨區混用",
    "warranty": "TP-Link 台灣公司貨；Tapo 掃地機器人主機 1 年、電源供應器 3 個月，耗材不保固，依台灣官方政策",
    "tags": [
      "5300Pa",
      "LiDAR",
      "自動集塵",
      "3L集塵袋",
      "Tapo App"
    ]
  },
  {
    "id": "robot-electrolux-efr81223",
    "category": "robot",
    "rank": 39,
    "topPick": false,
    "budget": "mid",
    "channel": "tw",
    "brand": "Electrolux",
    "model": "EFR81223",
    "name": "安心管家 800 全能掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 16900,
      "converted": 16900,
      "confidence": "PChome 24h 於 2026-08-24 的 exact-model 台灣新品頁公開價 NT$16,900，結構化資料標示 InStock，API 顯示 Qty 20",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "not_stated",
      "note": "PChome 與伊萊克斯官方頁均未標示含到府設定；水箱式基座不需固定給排水，但仍須預留平坦乾燥位置、110V 接地插座與基座前方回充空間。"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL5XA900K8CTK/000001_1787109949.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL5X-A900K8CTK",
    "buyLabel": "PChome 24h exact-model 現貨新品",
    "specs": [
      "一體式基座：自動集塵、自動補水、自動添加清潔劑與污水回收",
      "ThermoWash 65°C 熱水洗拖布；60°C 熱風烘乾",
      "LiDAR、雙線雷射與 AI 攝影鏡頭避障；多樓層地圖；最高跨越 20mm 門檻",
      "雙旋轉拖布 180rpm；地毯感應抬升 10mm；FlexReach 延伸拖布",
      "機器人尺寸：寬 35 x 深 35.2 x 高 11 cm；基座：寬 31 x 深 46.8 x 高 60.1 cm",
      "機器人集塵盒 0.3L、水箱 0.1L；110V / 60Hz、CNS 690 接地插頭"
    ],
    "description": "EFR81223 是 Electrolux 台灣 2026 年推出的全能基座代表款，以 65°C 熱水洗布、60°C 烘乾、AI 避障與延伸拖布，補上不同於既有中國掃拖品牌的台灣官方售後比較。",
    "pros": [
      "官方現貨、110V / 60Hz 與掃地機器人 2 年保固均有明確台灣證據",
      "自動集塵、補水、加清潔劑、洗布與烘乾整合完整",
      "LiDAR、雙線雷射、AI 攝影鏡頭與 20mm 越障兼顧導航和避障"
    ],
    "cons": [
      "11cm 機身與 60.1cm 高基座需要先核對床底、櫃下與擺放空間",
      "只有水箱式基座，仍須人工換清水、倒污水與補充耗材",
      "官方評論 feed 有 5 位 exact-model 作者提到拖布／集水盤積水或誤報，但只在單一原始評論網站；App 候選亦不足 6 位且症狀不完全相同，未達跨站集中災情門檻，仍建議到貨優先驗收"
    ],
    "bestFor": "重視台灣官方售後、想要完整自清潔基座與 AI 避障，又不打算施作固定給排水的家庭。",
    "recommendation": "台灣售後差異化推薦：功能完整且有 110V 與 2 年保固證據；到貨後應優先驗收 App 連線、地圖、排程與清掃紀錄。",
    "score": 89,
    "voltage": "台灣官方規格 110V / 60Hz；CNS 690 C4012、12A 125V 雙極接地插頭",
    "warranty": "伊萊克斯台灣官方保固資訊：掃地機器人全機 2 年；耗材與非正常使用依原廠條款",
    "tags": [
      "65°C熱水洗布",
      "60°C熱風烘乾",
      "AI避障",
      "自動集塵補水",
      "台灣2年保固"
    ],
    "releaseDate": "2026-03",
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
      "checkedAt": "2026-08-24",
      "note": "已查伊萊克斯官方 exact-model 現價 NT$21,900、PChome 24h exact-model 現價 NT$16,900，以及嘖嘖 2026-03-05 至 2026-06-08 的 NT$16,900 預購回饋；嘖嘖方案包含 EFR81223＋ERK7 耗材組，商品內容不同，未找到單機同條件的可重現歷史價格時間軸，故不推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Electrolux EFR81223\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Electrolux%20EFR81223%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Electrolux EFR81223\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Electrolux%20EFR81223%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Electrolux EFR81223\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Electrolux%20EFR81223%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Electrolux EFR81223\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Electrolux%20EFR81223%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Electrolux EFR81223\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Electrolux%20EFR81223%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "robot-xiaomi-vacuum-6-pv32gl",
    "category": "robot",
    "rank": 40,
    "topPick": false,
    "budget": "balanced",
    "channel": "tw",
    "brand": "Xiaomi",
    "model": "PV32GL",
    "name": "Xiaomi 掃拖機器人 6",
    "price": {
      "currency": "TWD",
      "amount": 15999,
      "converted": 15999,
      "confidence": "PChome 24h 於 2026-08-28 的 exact-model 新品公開價",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "not_stated",
      "note": "台灣通路未標示含到府設定；水箱式全功能底座不需固定給排水，仍須預留平坦乾燥位置、100–120V／50–60Hz 接地插座與基座前方回充空間。"
    },
    "image": "https://i02.appmifile.com/518_operatorx_operatorx_xm/01/06/2026/2f6dd7e2204db8a3e0090a511888fff7.png",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL53-A900KAFM1",
    "buyLabel": "PChome 24h exact-model 新品",
    "specs": [
      "吸力：30,000Pa；主動活水滾筒拖布",
      "AI 避障可辨識 220 種以上物體；機身高度 9cm",
      "雙段式越障最高 4cm；基座 80°C 熱水洗布、45°C 熱風烘乾",
      "機器人尺寸：直徑 35 x 高 9 cm；淨重 5.2 kg",
      "基座尺寸：寬 34.7 x 深 28.8 x 高 55 cm；含延伸板深 47 cm",
      "電池額定 4,800mAh、標稱 5,200mAh；最長約 75 天免倒垃圾",
      "基座輸入 100–120V／50–60Hz；集塵 600W、熱水洗布 1,250W、烘乾充電 145W"
    ],
    "description": "Xiaomi 2026 年台灣現售的次旗艦滾筒掃拖款，以 30,000Pa、活水滾筒、9cm 薄型機身與 4cm 越障補進較低於 Pro 的完整基座價位帶。",
    "pros": [
      "活水滾筒持續刮洗，比傳統旋轉拖布更強調污水即時分離",
      "9cm 薄型機身與 4cm 雙段越障兼顧低矮家具和門檻",
      "台灣官方 exact-model 規格、110V 相容電力與可信通路現貨均可核對"
    ],
    "cons": [
      "不含 Pro 的污漬辨識、遠端鏡頭與更高溫基座洗烘",
      "水箱式基座仍須人工補清水、倒污水與更換集塵袋",
      "新上市型號的長期耗材成本與可靠度仍待累積"
    ],
    "bestFor": "想以約一萬六千元取得活水滾筒、熱水洗烘與超薄越障機身，但不需要遠端看家鏡頭的家庭。",
    "recommendation": "活水滾筒均衡推薦：相較同系列 Pro 保留主要清潔與越障能力，以較低價格提供清楚的功能分層。",
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
      "checkedAt": "2026-08-28",
      "note": "已查 PChome、Momo 小米官方旗艦店、LBJ 與 FindPrice 的 exact-model PV32GL；PChome 與 Momo 的 NT$15,999 只能證明本輪現價，LBJ 結果為相容耗材而非主機，未找到具日期且可重現的可信新品歷史價格曲線，故不以現價推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Xiaomi PV32GL\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Xiaomi%20PV32GL%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Xiaomi PV32GL\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Xiaomi%20PV32GL%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 92,
    "voltage": "機器人 14.4V DC；基座輸入 100–120V／50–60Hz，適用台灣 110V／60Hz",
    "warranty": "台灣公司貨；Momo 小米官方旗艦店 exact-model 頁標示主機 1 年保固，耗材不在保固範圍",
    "tags": [
      "30,000Pa",
      "活水滾筒",
      "9cm薄型",
      "4cm越障",
      "80°C熱水洗布"
    ]
  },
  {
    "id": "robot-xiaomi-vacuum-6-pro-pv21gl",
    "category": "robot",
    "rank": 41,
    "topPick": false,
    "budget": "premium",
    "channel": "tw",
    "brand": "Xiaomi",
    "model": "PV21GL",
    "name": "Xiaomi 掃拖機器人 6 Pro",
    "price": {
      "currency": "TWD",
      "amount": 20999,
      "converted": 20999,
      "confidence": "PChome 2026-08-31 exact-model 公開價；有正值 Price.Low 時優先於 Price.P",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "not_stated",
      "note": "台灣通路未標示含到府設定；水箱式全功能底座不需固定給排水，仍須預留平坦乾燥位置、100–120V／50–60Hz 接地插座與基座前方回充空間。"
    },
    "image": "https://img.pchome.com.tw/cs/items/DMBL53A900KAFL2/000001_1786094362.png",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL53-A900KAFL2",
    "buyLabel": "PChome 24h exact-model 新品",
    "specs": [
      "吸力：30,000Pa；主動活水滾筒拖布",
      "AI 可辨識 47 種污漬與 280 種以上障礙物，支援污漬複拖與遠端鏡頭",
      "升降式雷達收起後機身高度 9cm；雙段式越障最高 4cm",
      "基座 85°C 熱水洗布、50°C 熱風烘乾與自動集塵",
      "機器人尺寸：直徑 35 x 高 9 cm；官方只列含配件總淨重 15 kg，未列機器人單機淨重",
      "基座尺寸：寬 36 x 深 28.9 x 高 58.2 cm；含延伸板深 47 cm",
      "基座輸入 100–120V／50–60Hz；集塵 650W、熱水洗布 1,200W、烘乾充電 120W"
    ],
    "description": "Xiaomi 2026 年台灣現售高階滾筒掃拖款，以污漬辨識、主動複拖、遠端鏡頭和升降雷達，形成介於標準版 6 與既有 6 Max 間的功能比較。",
    "pros": [
      "可辨識污漬並決定複拖，讓滾筒洗地不只依固定路徑運作",
      "升降雷達維持 9cm 薄型機身，並保留 4cm 雙段越障",
      "85°C 洗布、50°C 烘乾與遠端鏡頭補足標準版 6 的功能缺口"
    ],
    "cons": [
      "遠端鏡頭涉及居家隱私，應設定帳號安全與依需求關閉",
      "官方未分列機器人單機淨重，只能保守標示含配件總淨重",
      "新上市型號的長期維修、耗材成本與可靠度仍待累積"
    ],
    "bestFor": "有寵物、餐桌污漬或複雜低矮家具，重視主動污漬處理、遠端查看與完整熱水洗烘的家庭。",
    "recommendation": "污漬辨識進階推薦：用約兩萬元補上主動複拖、鏡頭與升降雷達，和標準版及 6 Max 形成清楚的三級比較。",
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
      "checkedAt": "2026-08-28",
      "note": "已查 PChome、Momo、小米蝦皮官方旗艦店、LBJ 與 FindPrice 的 exact-model PV21GL；NT$19,949／20,999 均只證明本輪現價，LBJ 結果為相容耗材而非主機，未找到具日期且可重現的可信新品歷史價格曲線，故不以現價推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Xiaomi PV21GL\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Xiaomi%20PV21GL%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Xiaomi PV21GL\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Xiaomi%20PV21GL%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 94,
    "voltage": "機器人 14.4V DC；基座輸入 100–120V／50–60Hz，適用台灣 110V／60Hz",
    "warranty": "台灣公司貨；小米蝦皮官方旗艦店 exact-model 頁標示主機與充電座 1 年保固，耗材不在保固範圍",
    "tags": [
      "污漬辨識",
      "活水滾筒",
      "遠端鏡頭",
      "4cm越障",
      "85°C熱水洗布"
    ]
  }
]);
})();

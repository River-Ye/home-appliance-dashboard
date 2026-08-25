(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("dryer", [
  {
    "id": "dryer-panasonic-nh-80rz-w",
    "rank": 1,
    "topPick": true,
    "brand": "Panasonic",
    "model": "NH-80RZ-W",
    "name": "Panasonic NH-80RZ-W",
    "image": "https://img.yec.tw/zp/MerchandiseImages/AC7DC27581-SP-22704432.jpg",
    "price": {
      "currency": "TWD",
      "amount": 9351,
      "converted": 9351,
      "confidence": "PChome 2026-08-21 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "channel": "tw",
    "buyLabel": "PChome",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAI1H-A900I7ZB7",
    "specs": [
      "烘衣機：Panasonic國際牌8公斤乾衣機NH-80RZ-W",
      "容量：8kg",
      "尺寸：寬 59.5 x 深 60 x 高 74 cm",
      "乾衣方式：依商品頁標示",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "綜合推薦：Panasonic NH-80RZ-W 在烘乾效率、可信通路價格、品牌售後與安裝條件之間最均衡。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 96,
    "budget": "value",
    "tags": [
      "容量：8kg",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Panasonic NH-80RZ-W: Momo富邦購物 【Panasonic 國際牌】8公斤電子式乾衣機-釉光白(NH-80RZ-W) 型號/規格不相符；LBJ Panasonic NH-80RZ-W: Momo富邦購物 【Panasonic 國際牌】8公斤電子式乾衣機 (NH-80RZ-W) 型號/規格不相符；LBJ Panasonic NH-80RZ-W: Momo富邦購物 【Panasonic 國際牌】家電快配★8公斤乾衣機-釉光白(NH-80RZ-W) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic NH-80RZ-W\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20NH-80RZ-W%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic NH-80RZ-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20NH-80RZ-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Panasonic NH-80RZ-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Panasonic%20NH-80RZ-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Panasonic NH-80RZ-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Panasonic%20NH-80RZ-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Panasonic NH-80RZ-W\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Panasonic%20NH-80RZ-W%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-panasonic-nh-70g-l",
    "rank": 2,
    "topPick": false,
    "brand": "Panasonic",
    "model": "NH-70G-L",
    "name": "Panasonic NH-70G-L",
    "image": "https://img.yec.tw/zp/MerchandiseImages/4249C08B3A-SP-8970385.jpg",
    "price": {
      "currency": "TWD",
      "amount": 7731,
      "converted": 7731,
      "confidence": "Yahoo購物中心 2026-08-18 exact-model 公開結構化價格"
    },
    "channel": "tw",
    "buyLabel": "Yahoo購物中心",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Panasonic%E5%9C%8B%E9%9A%9B%E7%89%8C-7%E5%85%AC%E6%96%A4-%E8%90%BD%E5%9C%B0%E5%9E%8B%E4%B9%BE%E8%A1%A3%E6%A9%9F-NH-70G-9194341.html",
    "specs": [
      "烘衣機：Panasonic國際牌 7公斤 落地型乾衣機 NH-70G-L",
      "容量：7kg",
      "尺寸：寬 60 x 深 54.5 x 高 80 cm",
      "乾衣方式：電熱",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 2 推薦：Panasonic NH-70G-L 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 95,
    "budget": "value",
    "tags": [
      "容量：7kg",
      "電熱",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 7114,
      "currency": "TWD",
      "converted": 7114,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1270890541&cgp=7560",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Panasonic國際牌 7公斤 落地型乾衣機 NH-70G-L",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / Panasonic國際牌 7公斤 落地型乾衣機 NH-70G-L」最低價為 NT$7,114，最低點日期 2026-06-11。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic NH-70G-L\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20NH-70G-L%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic NH-70G-L\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20NH-70G-L%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Panasonic NH-70G-L\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Panasonic%20NH-70G-L%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Panasonic NH-70G-L\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Panasonic%20NH-70G-L%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Panasonic NH-70G-L\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Panasonic%20NH-70G-L%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-whirlpool-8twgd5010pw",
    "rank": 3,
    "topPick": false,
    "brand": "Whirlpool",
    "model": "8TWGD5010PW",
    "name": "Whirlpool 8TWGD5010PW",
    "image": "https://img.yec.tw/cl/api/res/1.2/iFm9i1b_52efUsXGHSir.Q--/YXBwaWQ9eXR3bWFsbDtoPTYwMDtxPTEwMDt3PTYwMA--/https://img.yec.tw/fy/dcbb/item/p0214264894319-item-d588xf4x1000x1000-m.jpg",
    "price": {
      "currency": "TWD",
      "amount": 21900,
      "converted": 21900,
      "confidence": "momo 2026-07-21 頁面公開價"
    },
    "channel": "tw",
    "buyLabel": "momo購物",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0003952/goodsDetail/TP00039520000382",
    "specs": [
      "烘衣機：Whirlpool惠而浦 12公斤 快烘瓦斯型乾衣機 8TWGD5010PW 含基本安裝",
      "容量：12kg",
      "尺寸：寬 73.7 x 深 72.1 x 高 102.9 cm",
      "乾衣方式：瓦斯",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 3 推薦：Whirlpool 8TWGD5010PW 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 94,
    "budget": "mid",
    "tags": [
      "容量：12kg",
      "瓦斯",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Whirlpool 8TWGD5010PW: 誠品線上 【Whirlpool 惠而浦】12公斤 快烘瓦斯型乾衣機_典雅白 8TWGD5010PW 型號/規格不相符；LBJ Whirlpool 8TWGD5010PW: 生活市集 【生活市集】【Whirlpool 惠而浦】8TWGD5010PW 12公斤瓦斯型下拉門烘衣機 型號/規格不相符；LBJ Whirlpool 8TWGD5010PW: 樂天市場 - 簡單生活館 簡單生活館 【Whirlpool 惠而浦】12公斤快烘瓦斯型乾衣機 8TWGD5010PW (含標準安裝/舊機回收) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Whirlpool 8TWGD5010PW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Whirlpool%208TWGD5010PW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Whirlpool 8TWGD5010PW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Whirlpool%208TWGD5010PW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Whirlpool 8TWGD5010PW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Whirlpool%208TWGD5010PW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Whirlpool 8TWGD5010PW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Whirlpool%208TWGD5010PW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Whirlpool 8TWGD5010PW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Whirlpool%208TWGD5010PW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-whirlpool-8twgd5050pw",
    "rank": 4,
    "topPick": false,
    "brand": "Whirlpool",
    "model": "8TWGD5050PW",
    "name": "Whirlpool 8TWGD5050PW",
    "image": "https://img.yec.tw/cl/api/res/1.2/dTQkRZMaDozHzQpNUgXVHg--/YXBwaWQ9eXR3bWFsbDtoPTYwMDtxPTEwMDt3PTYwMA--/https://img.yec.tw/fy/e17f/item/p0214264894336-item-8fcdxf4x1000x1000-m.jpg",
    "price": {
      "currency": "TWD",
      "amount": 20599,
      "converted": 20599,
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
    },
    "channel": "tw",
    "buyLabel": "Costco 好市多",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Large-Appliances/Washers-Dryers/Dryer-Size-11-13-kg/Whirlpool-12-kg-Gas-Dryer-8TWGD5050PW/p/159758",
    "specs": [
      "烘衣機：Whirlpool惠而浦 12公斤 快烘瓦斯型乾衣機 8TWGD5050PW 含基本安裝",
      "容量：12kg",
      "尺寸：寬 73.7 x 深 72.1 x 高 102.9 cm",
      "乾衣方式：瓦斯",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 4 推薦：Whirlpool 8TWGD5050PW 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 93,
    "budget": "mid",
    "tags": [
      "容量：12kg",
      "瓦斯",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Whirlpool 8TWGD5050PW: 誠品線上 惠而浦【8TWGD5050PW】12公斤快烘瓦斯型乾衣機(含標準安裝) 型號/規格不相符；LBJ Whirlpool 8TWGD5050PW: HOTAI購 【HOTAI購】【Whirlpool惠而浦】Essential Dry 12公斤 快烘瓦斯型乾衣機 8TWGD5050PW 型號/規格不相符；LBJ Whirlpool 8TWGD5050PW: Yahoo購物中心 Whirlpool惠而浦 12公斤 美國原裝瓦斯型滾筒乾衣機 8TWGD5050PW-天然瓦斯 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Whirlpool 8TWGD5050PW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Whirlpool%208TWGD5050PW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Whirlpool 8TWGD5050PW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Whirlpool%208TWGD5050PW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Whirlpool 8TWGD5050PW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Whirlpool%208TWGD5050PW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Whirlpool 8TWGD5050PW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Whirlpool%208TWGD5050PW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Whirlpool 8TWGD5050PW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Whirlpool%208TWGD5050PW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-whirlpool-8twgd8620hw",
    "rank": 5,
    "topPick": false,
    "brand": "Whirlpool",
    "model": "8TWGD8620HW",
    "name": "Whirlpool 8TWGD8620HW",
    "image": "https://img.yec.tw/cl/api/res/1.2/PzojK6OzaumcZWkHDQO.hg--/YXBwaWQ9eXR3bWFsbDtoPTYwMDtxPTEwMDt3PTYwMA--/https://img.yec.tw/fy/5c46/item/p0214264895249-item-61b0xf4x1000x1000-m.jpg",
    "price": {
      "currency": "TWD",
      "amount": 37636,
      "converted": 37636,
      "confidence": "momo 2026-07-18 商品頁公開價"
    },
    "channel": "tw",
    "buyLabel": "momo購物",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0001568/goodsDetail/TP00015680001715",
    "specs": [
      "烘衣機：Whirlpool惠而浦 16公斤 快烘瓦斯型滾筒乾衣機 8TWGD8620HW 含基本安裝",
      "容量：16kg",
      "尺寸：寬 68.6 x 深 78.7 x 高 96.8 cm",
      "乾衣方式：瓦斯",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 5 推薦：Whirlpool 8TWGD8620HW 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 92,
    "budget": "mid",
    "tags": [
      "容量：16kg",
      "瓦斯",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Whirlpool 8TWGD8620HW: 蝦皮商城 - Whirlpool 惠而浦旗艦館 Whirlpool惠而浦 8TWGD8620HW 天然氣滾筒乾衣機 16公斤【福利品】 型號/規格不相符；LBJ Whirlpool 8TWGD8620HW: 蝦皮商城 - Whirlpool 惠而浦旗艦館 Whirlpool惠而浦 8TWGD8620HW 桶裝瓦斯滾筒乾衣機 16公斤【福利品】 型號/規格不相符；LBJ Whirlpool 8TWGD8620HW: 樂天市場 - 得意專業家電音響 得意專業家電音響 【瓦斯乾衣機】Whirlpool 惠而浦 8TWGD8620HW W Collection 快烘 瓦斯型 滾筒乾衣機(16kg) ~ 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Whirlpool 8TWGD8620HW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Whirlpool%208TWGD8620HW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Whirlpool 8TWGD8620HW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Whirlpool%208TWGD8620HW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Whirlpool 8TWGD8620HW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Whirlpool%208TWGD8620HW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Whirlpool 8TWGD8620HW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Whirlpool%208TWGD8620HW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Whirlpool 8TWGD8620HW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Whirlpool%208TWGD8620HW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-whirlpool-8twgd5620hw",
    "rank": 6,
    "topPick": false,
    "brand": "Whirlpool",
    "model": "8TWGD5620HW",
    "name": "Whirlpool 8TWGD5620HW",
    "image": "https://img.yec.tw/zp/MerchandiseImages/1178FF80D6-SP-21903027.jpg",
    "price": {
      "currency": "TWD",
      "amount": 31865,
      "converted": 31865,
      "confidence": "Yahoo購物中心 2026-08-26 exact-model 公開結構化價格"
    },
    "channel": "tw",
    "buyLabel": "Yahoo購物中心",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Whirlpool%E6%83%A0%E8%80%8C%E6%B5%A6-16%E5%85%AC%E6%96%A4-%E5%BF%AB%E7%83%98%E7%93%A6%E6%96%AF%E5%9E%8B%E6%BB%BE%E7%AD%92%E4%B9%BE%E8%A1%A3%E6%A9%9F-8TWGD5620HW-%E6%A1%B6%E8%A3%9D%E7%93%A6%E6%96%AF-10509173.html",
    "specs": [
      "烘衣機：Whirlpool 惠而浦16公斤快烘瓦斯型滾筒乾衣機8TWGD5620HW(桶裝瓦斯)",
      "容量：16kg",
      "尺寸：寬 68.6 x 深 78.7 x 高 96.8 cm",
      "乾衣方式：瓦斯",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 6 推薦：Whirlpool 8TWGD5620HW 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 91,
    "budget": "mid",
    "tags": [
      "容量：16kg",
      "瓦斯",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Whirlpool 8TWGD5620HW: 蝦皮商城 - Whirlpool 惠而浦旗艦館 Whirlpool惠而浦 8TWGD5620HW 天然氣 瓦斯滾筒乾衣機 16公斤【福利品】 型號/規格不相符；LBJ Whirlpool 8TWGD5620HW: 生活市集 【生活市集】【Whirlpool 惠而浦】8TWGD5620HW 16公斤快烘瓦斯型滾筒乾衣 型號/規格不相符；LBJ Whirlpool 8TWGD5620HW: 博客來 Whirlpool 惠而浦 16公斤 8TWGD5620HW 快烘瓦斯型滾筒乾衣機 含標準安裝 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Whirlpool 8TWGD5620HW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Whirlpool%208TWGD5620HW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Whirlpool 8TWGD5620HW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Whirlpool%208TWGD5620HW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Whirlpool 8TWGD5620HW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Whirlpool%208TWGD5620HW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Whirlpool 8TWGD5620HW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Whirlpool%208TWGD5620HW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Whirlpool 8TWGD5620HW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Whirlpool%208TWGD5620HW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-sanlux-sd-66u8a",
    "rank": 7,
    "topPick": false,
    "brand": "SANLUX",
    "model": "SD-66U8A",
    "name": "SANLUX SD-66U8A",
    "image": "https://img.yec.tw/zp/MerchandiseImages/2618755F67-Product-24570513.jpg",
    "price": {
      "currency": "TWD",
      "amount": 7120,
      "converted": 7120,
      "confidence": "PChome 2026-08-24 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "channel": "tw",
    "buyLabel": "PChome",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAI1J-A900BZ07A",
    "specs": [
      "烘衣機：【SANLUX 台灣三洋】5KG PTC加熱式乾衣機 SD-66U8A",
      "容量：5kg",
      "尺寸：寬 60 x 深 47.3 x 高 83.4 cm",
      "乾衣方式：依商品頁標示",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 7 推薦：SANLUX SD-66U8A 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 90,
    "budget": "value",
    "tags": [
      "容量：5kg",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 6250,
      "currency": "TWD",
      "converted": 6250,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1259567367&cgp=7120",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【SANLUX 台灣三洋】台灣製◆5KG乾衣機(SD-66U8A)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【SANLUX 台灣三洋】台灣製◆5KG乾衣機(SD-66U8A)」最低價為 NT$6,250，最低點日期 2025-10-01。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SANLUX SD-66U8A\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SANLUX%20SD-66U8A%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SANLUX SD-66U8A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SANLUX%20SD-66U8A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SANLUX SD-66U8A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SANLUX%20SD-66U8A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SANLUX SD-66U8A\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SANLUX%20SD-66U8A%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SANLUX SD-66U8A\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SANLUX%20SD-66U8A%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-sanlux-sd-85ua",
    "rank": 8,
    "topPick": false,
    "brand": "SANLUX",
    "model": "SD-85UA",
    "name": "SANLUX SD-85UA",
    "image": "https://img.yec.tw/zp/MerchandiseImages/669B0285B7-Product-24570512.jpg",
    "price": {
      "currency": "TWD",
      "amount": 8210,
      "converted": 8210,
      "confidence": "momo購物 2026-07-15 晚間頁面查核價"
    },
    "channel": "tw",
    "buyLabel": "momo購物",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0007894/goodsDetail/TP00078940000990",
    "specs": [
      "烘衣機：【SANLUX 台灣三洋】7.5KG PTC加熱式乾衣機 SD-85UA",
      "容量：7.5kg",
      "尺寸：寬 66 x 深 59 x 高 74 cm",
      "乾衣方式：依商品頁標示",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 8 推薦：SANLUX SD-85UA 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 89,
    "budget": "value",
    "tags": [
      "容量：7.5kg",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 8170,
      "currency": "TWD",
      "converted": 8170,
      "sourceUrl": "https://www.momoshop.com.tw/TP/TP0007894/goodsDetail/TP00078940000990",
      "sourceTitle": "momo購物 商品頁：【SANLUX 台灣三洋】SD-85UA 7.5公斤 乾衣機 (含基本安裝)",
      "evidenceSnippet": "momo購物 原始商品頁／API 於 2026-07-11 顯示同型號新品公開價 8170 TWD，低於既有可驗證史低。",
      "sourceKind": "retailer_page",
      "confidence": "high",
      "checkedAt": "2026-07-11",
      "note": "採用同型號、同尺寸／容量／規格的可信新品公開價；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SANLUX SD-85UA\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SANLUX%20SD-85UA%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SANLUX SD-85UA\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SANLUX%20SD-85UA%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SANLUX SD-85UA\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SANLUX%20SD-85UA%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SANLUX SD-85UA\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SANLUX%20SD-85UA%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SANLUX SD-85UA\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SANLUX%20SD-85UA%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-sanlux-sd-88u",
    "rank": 9,
    "topPick": false,
    "brand": "SANLUX",
    "model": "SD-88U",
    "name": "SANLUX SD-88U",
    "image": "https://img.yec.tw/zp/MerchandiseImages/ddde675d26-Gd-7010187.jpg",
    "price": {
      "currency": "TWD",
      "amount": 7990,
      "converted": 7990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "channel": "tw",
    "buyLabel": "PChome",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAI1J-A900AI7JB",
    "specs": [
      "烘衣機：【SANLUX 台灣三洋】7.5KG 電子式乾衣機 SD-88U",
      "容量：7.5kg",
      "尺寸：寬 66 x 深 59 x 高 74 cm",
      "乾衣方式：依商品頁標示",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 9 推薦：SANLUX SD-88U 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 88,
    "budget": "value",
    "tags": [
      "容量：7.5kg",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 7990,
      "currency": "TWD",
      "converted": 7990,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1275478746&cgp=7990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【SANLUX 台灣三洋】家電快配◆台灣製7.5KG電子式乾衣機(SD-88U)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【SANLUX 台灣三洋】家電快配◆台灣製7.5KG電子式乾衣機(SD-88U)」最低價為 NT$7,990，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SANLUX SD-88U\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SANLUX%20SD-88U%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SANLUX SD-88U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SANLUX%20SD-88U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SANLUX SD-88U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SANLUX%20SD-88U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SANLUX SD-88U\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SANLUX%20SD-88U%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SANLUX SD-88U\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SANLUX%20SD-88U%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-panasonic-nh-vs100hp",
    "rank": 10,
    "topPick": false,
    "brand": "Panasonic",
    "model": "NH-VS100HP",
    "name": "Panasonic NH-VS100HP",
    "image": "https://img.yec.tw/zp/MerchandiseImages/D9F56C9991-SP-21442967.jpg",
    "price": {
      "currency": "TWD",
      "amount": 35900,
      "converted": 35900,
      "confidence": "Yahoo購物中心 2026-07-14 頁面查核價"
    },
    "channel": "tw",
    "buyLabel": "Yahoo購物中心",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Panasonic-%E5%9C%8B%E9%9A%9B%E7%89%8C-10kg%E6%B7%A8%E8%AD%B7%E5%AE%8C%E7%BE%8E%E4%B9%BE%E8%A1%A3%E6%A9%9FNH-VS100HP-%E5%90%AB%E5%9F%BA%E6%9C%AC%E5%AE%89%E8%A3%9D-11874057.html",
    "specs": [
      "烘衣機：Panasonic 國際牌 10kg淨護完美乾衣機NH-VS100HP 含基本安裝",
      "容量：10kg",
      "尺寸：寬 59.6 x 深 66.7 x 高 84.5 cm",
      "乾衣方式：依商品頁標示",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 10 推薦：Panasonic NH-VS100HP 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 87,
    "budget": "mid",
    "tags": [
      "容量：10kg",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 31920,
      "currency": "TWD",
      "converted": 31920,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1281361673&cgp=32310",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Panasonic NH-VS100HP-B淨護熱泵乾衣機10kg(銀河藍)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「家樂福線上購物網 / Panasonic NH-VS100HP-B淨護熱泵乾衣機10kg(銀河藍)」最低價為 NT$31,920，最低點日期 2026-05-24。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic NH-VS100HP\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20NH-VS100HP%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic NH-VS100HP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20NH-VS100HP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Panasonic NH-VS100HP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Panasonic%20NH-VS100HP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Panasonic NH-VS100HP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Panasonic%20NH-VS100HP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Panasonic NH-VS100HP\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Panasonic%20NH-VS100HP%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-whirlpool-8twgd6622hw",
    "rank": 11,
    "topPick": false,
    "brand": "Whirlpool",
    "model": "8TWGD6622HW",
    "name": "Whirlpool 8TWGD6622HW",
    "image": "https://img.yec.tw/cl/api/res/1.2/X7GJL4yRaZyv2b4Q.mOxyQ--/YXBwaWQ9eXR3bWFsbDtoPTYwMDtxPTEwMDt3PTYwMA--/https://img.yec.tw/fy/5f70/item/p0214264895227-item-7edaxf4x1000x1000-m.jpg",
    "price": {
      "currency": "TWD",
      "amount": 38999,
      "converted": 38999,
      "confidence": "Costco 好市多 2026-07-12 頁面查核價"
    },
    "channel": "tw",
    "buyLabel": "Costco 好市多",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Large-Appliances/Washers-Dryers/Whirlpool-16-kg-Gas-Dryer-8TWGD6622HW/p/125469",
    "specs": [
      "烘衣機：Whirlpool惠而浦 16公斤 快烘瓦斯型滾筒乾衣機 8TWGD6622HW 含基本安裝",
      "容量：16kg",
      "尺寸：寬 68.6 x 深 78.7 x 高 96.8 cm",
      "乾衣方式：瓦斯",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Costco 好市多可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 11 推薦：Whirlpool 8TWGD6622HW 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 86,
    "budget": "premium",
    "tags": [
      "容量：16kg",
      "瓦斯",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Whirlpool 8TWGD6622HW: 誠品線上 惠而浦【8TWGD6622HW】16公斤 快烘瓦斯型滾筒乾衣機-典雅白(含標準安裝)(含標準安裝) 型號/規格不相符；LBJ Whirlpool 8TWGD6622HW: 樂天市場 - 秀翔電器SS3C 秀翔電器SS3C Whirlpool 惠而浦 16公斤 8TWGD6622HW 快烘瓦斯型滾筒乾衣機 含標準安裝 型號/規格不相符；LBJ Whirlpool 8TWGD6622HW: 樂天市場 - 秀翔電器SS3C 秀翔電器SS3C 領券現折 Whirlpool 惠而浦 16公斤 8TWGD6622HW 快烘瓦斯型滾筒乾衣機 限期送標準安裝 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Whirlpool 8TWGD6622HW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Whirlpool%208TWGD6622HW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Whirlpool 8TWGD6622HW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Whirlpool%208TWGD6622HW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Whirlpool 8TWGD6622HW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Whirlpool%208TWGD6622HW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Whirlpool 8TWGD6622HW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Whirlpool%208TWGD6622HW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Whirlpool 8TWGD6622HW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Whirlpool%208TWGD6622HW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-sampo-sd-7c",
    "rank": 12,
    "topPick": false,
    "brand": "SAMPO",
    "model": "SD-7C",
    "name": "SAMPO SD-7C",
    "image": "https://img.yec.tw/zp/MerchandiseImages/9c77970c6d-Gd-9971420.jpg",
    "price": {
      "currency": "TWD",
      "amount": 7990,
      "converted": 7990,
      "confidence": "Yahoo購物中心 2026-08-04 exact-model 公開結構化價格"
    },
    "channel": "tw",
    "buyLabel": "Yahoo購物中心",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/SAMPO%E8%81%B2%E5%AF%B6-7%E5%85%AC%E6%96%A4%E4%B9%BE%E8%A1%A3%E6%A9%9F-SD-7C-%E5%90%AB%E5%9F%BA%E6%9C%AC%E5%AE%89%E8%A3%9D-%E9%81%8B%E9%80%81%E5%88%B0%E5%BA%9C-9971420.html",
    "specs": [
      "烘衣機：SAMPO聲寶 7公斤乾衣機SD-7C 含基本安裝+運送到府",
      "容量：7kg",
      "尺寸：寬 59.5 x 深 51 x 高 68.5 cm",
      "乾衣方式：依商品頁標示",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 12 推薦：SAMPO SD-7C 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 85,
    "budget": "value",
    "tags": [
      "容量：7kg",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 7690,
      "currency": "TWD",
      "converted": 7690,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1257379067&cgp=7690",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【SAMPO 聲寶】( SD-7C ) 7KG 智慧觸控式乾衣機",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【SAMPO 聲寶】( SD-7C ) 7KG 智慧觸控式乾衣機」最低價為 NT$7,690，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SAMPO SD-7C\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SAMPO%20SD-7C%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SAMPO SD-7C\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SAMPO%20SD-7C%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SAMPO SD-7C\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SAMPO%20SD-7C%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SAMPO SD-7C\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SAMPO%20SD-7C%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SAMPO SD-7C\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SAMPO%20SD-7C%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-hitachi-td120xfvem",
    "rank": 13,
    "topPick": false,
    "brand": "HITACHI",
    "model": "TD120XFVEM",
    "name": "HITACHI TD120XFVEM",
    "image": "https://img.yec.tw/zp/MerchandiseImages/CD1017EA73-SP-22144611.jpg",
    "price": {
      "currency": "TWD",
      "amount": 35788,
      "converted": 35788,
      "confidence": "Yahoo購物中心 2026-07-11 頁面查核價"
    },
    "channel": "tw",
    "buyLabel": "Yahoo購物中心",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/HITACHI%E6%97%A5%E7%AB%8B12%E5%85%AC%E6%96%A4%E7%86%B1%E6%B3%B5%E6%BB%BE%E7%AD%92%E4%B9%BE%E8%A1%A3%E6%A9%9FTD120XFVEM-11999506.html",
    "specs": [
      "烘衣機：HITACHI日立12公斤熱泵滾筒乾衣機TD120XFVEM",
      "容量：12kg",
      "尺寸：寬 59.8 x 深 67.4 x 高 86.6 cm",
      "乾衣方式：熱泵",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 13 推薦：HITACHI TD120XFVEM 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 84,
    "budget": "mid",
    "tags": [
      "容量：12kg",
      "熱泵",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 35788,
      "currency": "TWD",
      "converted": 35788,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1268900195&cgp=35788",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【HITACHI 日立】TD120XFVEM 熱泵滾筒乾衣機 12kg 變頻馬達 220V HITACHI 日立",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【HITACHI 日立】TD120XFVEM 熱泵滾筒乾衣機 12kg 變頻馬達 220V HITACHI 日立」最低價為 NT$35,788，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HITACHI TD120XFVEM\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HITACHI%20TD120XFVEM%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HITACHI TD120XFVEM\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HITACHI%20TD120XFVEM%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HITACHI TD120XFVEM\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HITACHI%20TD120XFVEM%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HITACHI TD120XFVEM\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HITACHI%20TD120XFVEM%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HITACHI TD120XFVEM\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HITACHI%20TD120XFVEM%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-panasonic-nh-l70g-l",
    "rank": 14,
    "topPick": false,
    "brand": "Panasonic",
    "model": "NH-L70G-L",
    "name": "Panasonic NH-L70G-L",
    "image": "https://img.yec.tw/zp/MerchandiseImages/3db887ef39-Gd-10746995.jpg",
    "price": {
      "currency": "TWD",
      "amount": 8248,
      "converted": 8248,
      "confidence": "Yahoo購物中心 2026-08-01 exact-model 公開結構化價格"
    },
    "channel": "tw",
    "buyLabel": "Yahoo購物中心",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Panasonic%E5%9C%8B%E9%9A%9B%E7%89%8C-7%E5%85%AC%E6%96%A4-%E6%9E%B6%E4%B8%8A%E5%9E%8B%E4%B9%BE%E8%A1%A3%E6%A9%9F-NH-L70G-L-%E5%85%89%E6%9B%9C%E7%81%B0-9325579.html",
    "specs": [
      "烘衣機：Panasonic 國際牌 NH-L70G-L 架上型7kg乾衣機",
      "容量：7kg",
      "尺寸：寬 60 x 深 54.5 x 高 68 cm",
      "乾衣方式：電熱",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 14 推薦：Panasonic NH-L70G-L 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 83,
    "budget": "value",
    "tags": [
      "容量：7kg",
      "電熱",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 8248,
      "currency": "TWD",
      "converted": 8248,
      "sourceUrl": "https://tw.buy.yahoo.com/gdsale/Panasonic%E5%9C%8B%E9%9A%9B%E7%89%8C-7%E5%85%AC%E6%96%A4-%E6%9E%B6%E4%B8%8A%E5%9E%8B%E4%B9%BE%E8%A1%A3%E6%A9%9F-NH-L70G-L-%E5%85%89%E6%9B%9C%E7%81%B0-9325579.html",
      "sourceTitle": "Yahoo購物中心 商品頁：Panasonic國際牌 7公斤 架上型乾衣機 NH-L70G-L 光曜灰 | 脫水/乾衣機 | Yahoo購物中心",
      "evidenceSnippet": "Yahoo購物中心 原始商品頁／API 於 2026-07-11 顯示同型號新品公開價 8248 TWD，低於既有可驗證史低。",
      "sourceKind": "retailer_page",
      "confidence": "high",
      "checkedAt": "2026-07-11",
      "note": "採用同型號、同尺寸／容量／規格的可信新品公開價；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic NH-L70G-L\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20NH-L70G-L%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic NH-L70G-L\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20NH-L70G-L%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Panasonic NH-L70G-L\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Panasonic%20NH-L70G-L%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Panasonic NH-L70G-L\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Panasonic%20NH-L70G-L%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Panasonic NH-L70G-L\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Panasonic%20NH-L70G-L%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-sampo-sd-7b",
    "rank": 15,
    "topPick": false,
    "brand": "SAMPO",
    "model": "SD-7B",
    "name": "SAMPO SD-7B",
    "image": "https://img.yec.tw/zp/MerchandiseImages/bb1d22c62a-Gd-9237299.jpg",
    "price": {
      "currency": "TWD",
      "amount": 8490,
      "converted": 8490,
      "confidence": "Yahoo購物中心 2026-07-11 頁面查核價"
    },
    "channel": "tw",
    "buyLabel": "Yahoo購物中心",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/SAMPO%E8%81%B2%E5%AF%B6-7%E5%85%AC%E6%96%A4-%E4%B9%BE%E8%A1%A3%E6%A9%9F-SD-7B-9237299.html",
    "specs": [
      "烘衣機：SAMPO聲寶 7公斤乾衣機SD-7B 含基本安裝+運送到府",
      "容量：7kg",
      "尺寸：寬 60 x 深 54.5 x 高 82 cm",
      "乾衣方式：依商品頁標示",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 15 推薦：SAMPO SD-7B 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 82,
    "budget": "value",
    "tags": [
      "容量：7kg",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 8411,
      "currency": "TWD",
      "converted": 8411,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1257379066&cgp=8490",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【SAMPO 聲寶】( SD-7B ) 7KG 乾衣機",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【SAMPO 聲寶】( SD-7B ) 7KG 乾衣機」最低價為 NT$8,411，最低點日期 2025-11-01。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SAMPO SD-7B\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SAMPO%20SD-7B%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SAMPO SD-7B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SAMPO%20SD-7B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SAMPO SD-7B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SAMPO%20SD-7B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SAMPO SD-7B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SAMPO%20SD-7B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SAMPO SD-7B\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SAMPO%20SD-7B%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-tatung-taw-d60t",
    "rank": 16,
    "topPick": false,
    "brand": "TATUNG",
    "model": "TAW-D60T",
    "name": "TATUNG TAW-D60T",
    "image": "https://img.yec.tw/zp/MerchandiseImages/7F32C23042-SP-16513735.jpg",
    "price": {
      "currency": "TWD",
      "amount": 6460,
      "converted": 6460,
      "confidence": "Yahoo購物中心 2026-07-11 頁面查核價"
    },
    "channel": "tw",
    "buyLabel": "Yahoo購物中心",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/TATUNG%E5%A4%A7%E5%90%8C-6KG%E4%B9%BE%E8%A1%A3%E6%A9%9F-TAW-D60T-11014360.html",
    "specs": [
      "烘衣機：TATUNG大同 6KG乾衣機(TAW-D60T)",
      "容量：6kg",
      "尺寸：寬 60 x 深 48 x 高 69 cm",
      "乾衣方式：電熱",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 16 推薦：TATUNG TAW-D60T 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 81,
    "budget": "value",
    "tags": [
      "容量：6kg",
      "電熱",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 6256,
      "currency": "TWD",
      "converted": 6256,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1262965919&cgp=6460",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：TATUNG大同 6KG乾衣機(TAW-D60T)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / TATUNG大同 6KG乾衣機(TAW-D60T)」最低價為 NT$6,256，最低點日期 2026-06-28。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TATUNG TAW-D60T\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22TATUNG%20TAW-D60T%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TATUNG TAW-D60T\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22TATUNG%20TAW-D60T%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"TATUNG TAW-D60T\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22TATUNG%20TAW-D60T%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"TATUNG TAW-D60T\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22TATUNG%20TAW-D60T%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"TATUNG TAW-D60T\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22TATUNG%20TAW-D60T%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-heran-hdm-0841",
    "rank": 17,
    "topPick": false,
    "brand": "HERAN",
    "model": "HDM-0841",
    "name": "HERAN HDM-0841",
    "image": "https://img.yec.tw/zp/MerchandiseImages/C0FA586EC4-SP-18495887.jpg",
    "price": {
      "currency": "TWD",
      "amount": 7591,
      "converted": 7591,
      "confidence": "Yahoo購物中心 2026-08-26 exact-model 公開結構化價格"
    },
    "channel": "tw",
    "buyLabel": "Yahoo購物中心",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/HERAN%E7%A6%BE%E8%81%AF-8KG-%E4%B9%BE%E8%A1%A3%E6%A9%9F-HDM-0841-11396347.html",
    "specs": [
      "烘衣機：HERAN禾聯 8KG 乾衣機 HDM-0841",
      "容量：8kg",
      "尺寸：寬 59.8 x 深 55.5 x 高 84.9 cm",
      "乾衣方式：依商品頁標示",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 17 推薦：HERAN HDM-0841 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 80,
    "budget": "value",
    "tags": [
      "容量：8kg",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 6876,
      "currency": "TWD",
      "converted": 6876,
      "sourceUrl": "https://tw.buy.yahoo.com/gdsale/HERAN%E7%A6%BE%E8%81%AF-8KG-%E4%B9%BE%E8%A1%A3%E6%A9%9F-HDM-0841-11396347.html",
      "sourceTitle": "Yahoo購物中心：HERAN禾聯 8KG 乾衣機 HDM-0841 | 脫水/乾衣機 | Yahoo購物中心",
      "evidenceSnippet": "Yahoo購物中心於 2026-07-22 顯示同型號可信新品公開價 NT$6,876，低於既有史低 NT$7,031。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-22",
      "note": "採用 Yahoo購物中心當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HERAN HDM-0841\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HERAN%20HDM-0841%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HERAN HDM-0841\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HERAN%20HDM-0841%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HERAN HDM-0841\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HERAN%20HDM-0841%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HERAN HDM-0841\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HERAN%20HDM-0841%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HERAN HDM-0841\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HERAN%20HDM-0841%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-sanlux-asd-80ua",
    "rank": 18,
    "topPick": false,
    "brand": "SANLUX",
    "model": "ASD-80UA",
    "name": "SANLUX ASD-80UA",
    "image": "https://img.yec.tw/zp/MerchandiseImages/14DC623476-SP-22670878.jpg",
    "price": {
      "currency": "TWD",
      "amount": 9170,
      "converted": 9170,
      "confidence": "momo購物 2026-07-15 晚間頁面查核價"
    },
    "channel": "tw",
    "buyLabel": "momo購物",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0007894/goodsDetail/TP00078940002822",
    "specs": [
      "烘衣機：SANLUX台灣三洋8公斤乾衣機ASD-80UA",
      "容量：8kg",
      "尺寸：未標示",
      "乾衣方式：依商品頁標示",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 18 推薦：SANLUX ASD-80UA 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 79,
    "budget": "value",
    "tags": [
      "容量：8kg",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 9080,
      "currency": "TWD",
      "converted": 9080,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282722193&cgp=9080",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【SANLUX 台灣三洋】ASD-80UA 8KG 電子式乾衣機 (含基本安裝)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【SANLUX 台灣三洋】ASD-80UA 8KG 電子式乾衣機 (含基本安裝)」最低價為 NT$9,080，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SANLUX ASD-80UA\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SANLUX%20ASD-80UA%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SANLUX ASD-80UA\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SANLUX%20ASD-80UA%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SANLUX ASD-80UA\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SANLUX%20ASD-80UA%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SANLUX ASD-80UA\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SANLUX%20ASD-80UA%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SANLUX ASD-80UA\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SANLUX%20ASD-80UA%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-samsung-dv10db7440gb-dv10db7440gw",
    "rank": 19,
    "topPick": false,
    "brand": "Samsung",
    "model": "DV10DB7440GB/DV10DB7440GW",
    "name": "Samsung DV10DB7440GB/DV10DB7440GW",
    "image": "https://img.yec.tw/zp/MerchandiseImages/04F73DE2ED-SP-21351939.jpg",
    "price": {
      "currency": "TWD",
      "amount": 35055,
      "converted": 35055,
      "confidence": "Yahoo購物中心 2026-08-26 exact-model 公開結構化價格"
    },
    "channel": "tw",
    "buyLabel": "Yahoo購物中心",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/SAMSUNG-%E4%B8%89%E6%98%9F-10KG-%E6%99%BA%E6%85%A7%E7%86%B1%E6%B3%B5%E4%B9%BE%E8%A1%A3%E6%A9%9F-DV10DB7440GB-DV10DB7440GW-11854932.html",
    "specs": [
      "烘衣機：SAMSUNG 三星 10KG 智慧熱泵乾衣機 DV10DB7440GB/DV10DB7440GW 黑白",
      "容量：10kg",
      "尺寸：寬 60 x 深 60 x 高 85 cm",
      "乾衣方式：熱泵",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 19 推薦：Samsung DV10DB7440GB/DV10DB7440GW 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 78,
    "budget": "premium",
    "tags": [
      "容量：10kg",
      "熱泵",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 35055,
      "currency": "TWD",
      "converted": 35055,
      "sourceUrl": "https://tw.buy.yahoo.com/gdsale/SAMSUNG-%E4%B8%89%E6%98%9F-10KG-%E6%99%BA%E6%85%A7%E7%86%B1%E6%B3%B5%E4%B9%BE%E8%A1%A3%E6%A9%9F-DV10DB7440GB-DV10DB7440GW-11854932.html",
      "sourceTitle": "Yahoo購物中心：SAMSUNG 三星 10KG 智慧熱泵乾衣機 DV10DB7440GB/DV10DB7440GW 黑白 | 脫水/乾衣機 | Yahoo購物中心",
      "evidenceSnippet": "Yahoo購物中心於 2026-08-05 顯示同型號可信新品公開價 NT$35,055，低於既有史低 NT$36,810。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-08-05",
      "note": "採用 Yahoo購物中心當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung DV10DB7440GB/DV10DB7440GW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20DV10DB7440GB%2FDV10DB7440GW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung DV10DB7440GB/DV10DB7440GW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20DV10DB7440GB%2FDV10DB7440GW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Samsung DV10DB7440GB/DV10DB7440GW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Samsung%20DV10DB7440GB%2FDV10DB7440GW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Samsung DV10DB7440GB/DV10DB7440GW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Samsung%20DV10DB7440GB%2FDV10DB7440GW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Samsung DV10DB7440GB/DV10DB7440GW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Samsung%20DV10DB7440GB%2FDV10DB7440GW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-bosch-wqb245a0tc",
    "rank": 20,
    "topPick": false,
    "brand": "Bosch",
    "model": "WQB245A0TC",
    "name": "Bosch WQB245A0TC",
    "image": "https://img.yec.tw/zp/MerchandiseImages/254DF81A1E-SP-20893325.jpg",
    "price": {
      "currency": "TWD",
      "amount": 45908,
      "converted": 45908,
      "confidence": "Yahoo購物中心 2026-07-11 頁面查核價"
    },
    "channel": "tw",
    "buyLabel": "Yahoo購物中心",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/BOSCH%E5%8D%9A%E4%B8%96-9%E5%85%AC%E6%96%A4%E9%99%A4%E7%9A%BA%E6%B8%85%E6%96%B0%E7%86%B1%E6%B3%B5%E5%BC%8F%E4%B9%BE%E8%A1%A3%E6%A9%9F-%E5%90%AB%E5%9F%BA%E6%9C%AC%E5%AE%89%E8%A3%9D-220V%E6%8B%89%E9%9B%BB-WQB245A0TC-11757116.html",
    "specs": [
      "烘衣機：BOSCH博世 9公斤除皺清新熱泵式乾衣機 含基本安裝+220V拉電 (WQB245A0TC)",
      "容量：9kg",
      "尺寸：寬 59.8 x 深 61.3 x 高 84.2 cm",
      "乾衣方式：熱泵",
      "需確認排風/排水、瓦斯或專用迴路；疊放需另查同品牌疊架",
      "Yahoo購物 可信通路低價；排除洗脫烘、福利品、展示機、底座與配件頁"
    ],
    "description": "聚焦獨立烘衣/乾衣機，依熱泵節能、瓦斯效率、容量、安裝條件、品牌售後與耗材維護排序。",
    "pros": [
      "獨立烘乾效率通常優於洗脫烘二合一",
      "熱泵、瓦斯與電熱不同需求可比較",
      "安裝條件與售後風險納入排序"
    ],
    "cons": [
      "需確認排風、排水、瓦斯或專用迴路",
      "疊放時需另查同品牌疊架與重量限制",
      "高階熱泵機價格明顯較高"
    ],
    "bestFor": "希望縮短曬衣等待時間，或沒有陽台、常洗寢具與大量衣物的家庭。",
    "recommendation": "烘衣機第 20 推薦：Bosch WQB245A0TC 以容量、乾衣方式、價格與售後服務綜合評估，適合依空間與管線條件比較。",
    "voltage": "電壓依機型不同，瓦斯/電熱/熱泵需分開確認；需注意排風、排水、疊放與專用迴路",
    "warranty": "依可信通路與品牌/供應商頁面標示；安裝、瓦斯管線、疊放架與搬運費依通路方案",
    "score": 77,
    "budget": "premium",
    "tags": [
      "容量：9kg",
      "熱泵",
      "烘衣機",
      "洗衣家務"
    ],
    "category": "dryer",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 45908,
      "currency": "TWD",
      "converted": 45908,
      "sourceUrl": "https://tw.buy.yahoo.com/gdsale/BOSCH博世-9公斤除皺清新熱泵式乾衣機-含基本安裝-220V拉電-WQB245A0TC-11757116.html",
      "sourceTitle": "Yahoo購物中心 JSON-LD：BOSCH博世 9公斤除皺清新熱泵式乾衣機 含基本安裝+220V拉電 (WQB245A0TC) | 脫水/乾衣機 | Yahoo購物中心",
      "evidenceSnippet": "Yahoo購物中心 JSON-LD 於 2026-07-10 回傳同一商品頁「BOSCH博世 9公斤除皺清新熱泵式乾衣機 含基本安裝+220V拉電 (WQB245A0TC) | 脫水/乾衣機 | Yahoo購物中心」查核價 NT$45,908，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-10",
      "note": "採用可信通路同一商品頁可公開查核現價作為本次觀測到的最低價；同型號/規格並排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Bosch WQB245A0TC\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Bosch%20WQB245A0TC%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Bosch WQB245A0TC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Bosch%20WQB245A0TC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Bosch WQB245A0TC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Bosch%20WQB245A0TC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Bosch WQB245A0TC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Bosch%20WQB245A0TC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Bosch WQB245A0TC\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Bosch%20WQB245A0TC%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-costco-samsung-dvg16cg8600wtw",
    "category": "dryer",
    "rank": 21,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "DVG16CG8600WTW",
    "name": "16公斤 蒸本事瓦斯型乾衣機",
    "price": {
      "currency": "TWD",
      "amount": 30999,
      "converted": 30999,
      "confidence": "Costco 好市多 2026-08-01 exact-model 公開結構化價格"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h6d/h02/208447528140830.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Large-Appliances/Washers-Dryers/Samsung-16-kg-Smart-Dial-Gas-Dryer-DVG16CG8600WTW/p/144425",
    "buyLabel": "Costco 好市多",
    "specs": [
      "16 公斤乾衣容量",
      "瓦斯型",
      "尺寸：寬 68.6 x 深 79.4 x 高 98.4 cm",
      "蒸氣功能",
      "Costco 評價 4.4 / 14 則"
    ],
    "description": "Samsung 16 公斤瓦斯乾衣機適合大量衣物與重視乾衣速度的家庭，但安裝條件需先確認。",
    "pros": [
      "16 公斤大容量",
      "瓦斯型乾衣速度通常較快"
    ],
    "cons": [
      "需瓦斯管線與排風條件",
      "安裝與疊放條件需先確認"
    ],
    "bestFor": "有瓦斯與排風條件、衣物量大的家庭。",
    "recommendation": "好市多補充推薦：DVG16CG8600WTW 是 Costco 可買的大容量瓦斯乾衣候選，評價 4.4 分。",
    "score": 84,
    "voltage": "台灣通路；瓦斯型需確認瓦斯、排風、插座與安裝空間",
    "warranty": "依 Costco 好市多商品頁、品牌保固與退貨政策",
    "tags": [
      "Costco",
      "瓦斯",
      "16公斤"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Samsung DVG16CG8600WTW: 樂天市場 - 秀翔電器SS3C 秀翔電器SS3C SAMSUNG三星 BESPOKE 設計品味系列 蒸本事瓦斯型乾衣機 冰原白 DVG16CG8600WTW DVG16CG8600W 型號/規格不相符；LBJ Samsung DVG16CG8600WTW: 樂天市場 - 集雅社影音家電旗艦館 集雅社影音家電旗艦館 【滿萬折千+全館領券再折】SAMSUNG三星 DVG16CG8600WTW 16KG 蒸本事瓦斯型乾衣機 原廠公司貨 型號/規格不相符；LBJ Samsung DVG16CG8600WTW: Momo富邦購物 【Samsung 三星】16KG AI智慧控制蒸本事瓦斯型乾衣機(DVG16CG8600WTW) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung DVG16CG8600WTW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20DVG16CG8600WTW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung DVG16CG8600WTW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20DVG16CG8600WTW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Samsung DVG16CG8600WTW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Samsung%20DVG16CG8600WTW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Samsung DVG16CG8600WTW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Samsung%20DVG16CG8600WTW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Samsung DVG16CG8600WTW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Samsung%20DVG16CG8600WTW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-samsung-dv90f20cdstw",
    "category": "dryer",
    "rank": 22,
    "budget": "premium",
    "channel": "tw",
    "brand": "Samsung",
    "model": "DV90F20CDSTW",
    "name": "20公斤 Bespoke AI 智慧熱泵乾衣機",
    "price": {
      "currency": "TWD",
      "amount": 49900,
      "converted": 49900,
      "confidence": "樂天市場秀翔電器 SS3C 2026-08-08 exact-model JSON-LD InStock 公開價"
    },
    "image": "https://img.pchome.com.tw/cs/items/DPAI1NA900JUUYX/000001_1774598663.jpg",
    "buyUrl": "https://www.rakuten.com.tw/shop/ss3c/product/eig6gzaxq/",
    "buyLabel": "樂天市場－秀翔電器 SS3C",
    "specs": [
      "20 公斤乾衣容量",
      "智慧熱泵乾衣",
      "尺寸：寬 68.6 x 深 84 x 高 98.4 cm",
      "淨重：77 kg",
      "AI Home 觸控螢幕、AI Dry 與 SmartThings",
      "110 V / 60 Hz、800 W"
    ],
    "description": "Samsung 20 公斤熱泵旗艦以大容量、AI Home 操作與低溫熱泵乾衣為核心，適合大量衣物、寢具與重視節能的家庭。",
    "pros": [
      "20 公斤大容量，適合大家庭與大型寢具",
      "熱泵乾衣搭配 AI Dry 與 SmartThings",
      "110 V / 60 Hz 台灣電力規格"
    ],
    "cons": [
      "機身深 84 cm、重 77 kg，搬運與安裝空間需先確認",
      "高階熱泵機價格較高",
      "疊放、排水與門片開啟空間需依現場條件確認"
    ],
    "bestFor": "衣物量大、常烘寢具，且希望兼顧熱泵節能與智慧操作的台灣家庭。",
    "recommendation": "大容量熱泵旗艦推薦：DV90F20CDSTW 提供現有清單少見的 20 公斤台灣熱泵容量帶，購買前先量測深度、門寬與搬運動線。",
    "score": 89,
    "voltage": "110 V / 60 Hz、800 W；需使用有接地三孔插座，並依手冊確認排水、散熱與安裝間距",
    "warranty": "台灣公司貨整機 1 年；數位變頻馬達與壓縮機 10 年僅零件（依 Samsung 官方與通路保固說明）",
    "tags": [
      "20公斤",
      "熱泵",
      "AI Home",
      "110V"
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
      "checkedAt": "2026-08-08",
      "note": "已查樂天市場秀翔電器 SS3C、momo、PChome、FindPrice 與 LBJ；樂天 NT$49,900 只能證明 2026-08-08 同日現價，momo 頁面另含「領券再折」條件，PChome 未提供可重現價格，FindPrice 與 LBJ 未取得同型號可採用的歷史價格紀錄，因此不以現價推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Samsung DV90F20CDSTW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Samsung%20DV90F20CDSTW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Samsung DV90F20CDSTW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Samsung%20DV90F20CDSTW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Samsung DV90F20CDSTW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Samsung%20DV90F20CDSTW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Samsung DV90F20CDSTW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Samsung%20DV90F20CDSTW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Samsung DV90F20CDSTW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Samsung%20DV90F20CDSTW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-rinnai-rdt-90-tr-w",
    "category": "dryer",
    "rank": 23,
    "topPick": false,
    "budget": "premium",
    "channel": "tw",
    "brand": "Rinnai",
    "model": "RDT-90-TR-W",
    "name": "9kg 日製瓦斯乾衣機",
    "price": {
      "currency": "TWD",
      "amount": 38200,
      "converted": 38200,
      "confidence": "PChome 24h 2026-08-14 exact-model 台灣新品頁公開售價",
      "basis": "retailer_current"
    },
    "image": "https://www.rinnai.com.tw/storage/product/1616144753_0001_RDT-90-%E6%AD%A3%E9%9D%A2.png",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM5L-A900FRSMX",
    "buyLabel": "PChome 24h購物",
    "installation": {
      "status": "not_stated",
      "note": "PChome 頁說明由安裝單位聯繫並可能另收跨區、樓層與特殊施工費，但未清楚界定現價包含的基本工料；瓦斯種類、排氣管、壁掛／層架、通風與管線須先由合格人員場勘。"
    },
    "specs": [
      "乾衣容量 9kg；日製瓦斯型",
      "約 80°C 高溫乾衣、一般／厚衣／床單毛毯／節能等行程",
      "尺寸：寬 65 x 深 64.1 x 高 68.4 cm",
      "本體重量 33 kg",
      "110V / 60Hz、耗電 300W",
      "瓦斯消耗：LPG 4.47kW／天然氣 4.65kW；接續口 φ9.5mm"
    ],
    "description": "Rinnai RDT-90-TR-W 是小於美系機身的 9kg 日製瓦斯乾衣機，以快速高溫乾衣與架上操作為主。",
    "pros": [
      "9kg 容量與 65cm 寬機身兼顧家庭使用和空間",
      "瓦斯高溫乾衣速度快，床單與厚衣行程完整",
      "官方尺寸、重量、電力與瓦斯規格齊全"
    ],
    "cons": [
      "必須有正確瓦斯種類、排氣與通風施工",
      "不能像部分美系機種自由選多段溫度，衣物洗標要先確認",
      "層架、壁掛、管線與特殊施工可能另計"
    ],
    "bestFor": "陽台具合法瓦斯與排氣條件、想縮短大量衣物乾燥時間的家庭。",
    "recommendation": "Rinnai 日系乾衣補強：乾衣效率高，但安裝安全條件比售價更重要；務必由合格人員場勘。",
    "score": 88,
    "voltage": "110V / 60Hz、300W；另需符合瓦斯種類及排氣規範",
    "warranty": "台灣林內官方 3 年保固（依原廠登錄與條款）",
    "tags": [
      "9kg",
      "瓦斯乾衣",
      "日本製",
      "80°C",
      "110V"
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
      "note": "已查台灣林內官方、PChome 與 exact-model 價格搜尋；論壇中的推估價與含不同安裝範圍報價不可直接比較，故不推定史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Rinnai RDT-90-TR-W\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Rinnai%20RDT-90-TR-W%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Rinnai RDT-90-TR-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Rinnai%20RDT-90-TR-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Rinnai RDT-90-TR-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Rinnai%20RDT-90-TR-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Rinnai RDT-90-TR-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Rinnai%20RDT-90-TR-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Rinnai RDT-90-TR-W\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Rinnai%20RDT-90-TR-W%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dryer-lg-wr-20dw",
    "category": "dryer",
    "rank": 24,
    "topPick": false,
    "budget": "premium",
    "channel": "tw",
    "brand": "LG",
    "model": "WR-20DW",
    "name": "20kg AI Heat Pump 免曬衣乾衣機",
    "price": {
      "currency": "TWD",
      "amount": 42900,
      "converted": 42900,
      "confidence": "PChome 24h 2026-08-20 exact-model SKU API 公開價 NT$42,900，Qty 6",
      "basis": "retailer_current"
    },
    "image": "https://img.pchome.com.tw/cs/items/DPAI1LA900HQ772/000001_1762826049.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAI1L-A900HQ772",
    "buyLabel": "PChome 24h購物",
    "installation": {
      "status": "included_basic",
      "note": "PChome 大型家電服務包含運送與定位；本機為 110V Heat Pump 冷凝式，可手動倒水箱而不必固定排水。疊放、無電梯樓層、特殊搬運、另接排水與現場改電仍可能加價。"
    },
    "specs": [
      "乾衣容量 20kg；Heat Pump 冷凝式",
      "AI Dry、6 Motion、5 段乾燥程度與 99.9% 抑菌除蟎行程",
      "雙層細緻濾網、自動洗淨冷凝器、ThinQ Wi-Fi",
      "尺寸：寬 70 x 深 82 x 高 99 cm",
      "本體重量 75kg；開門後總深度約 134cm",
      "110V 插電；無瓦斯、排風與明火需求，可使用水箱免固定排水"
    ],
    "description": "LG WR-20DW 是 20kg 大容量 Heat Pump 乾衣機，以 110V、AI Dry 與免固定排水補強高容量獨立乾衣帶。",
    "pros": [
      "20kg 容量適合大家庭、寢具與大量衣物",
      "Heat Pump 低溫乾衣、AI Dry 與自動洗淨冷凝器功能完整",
      "110V 且可倒水箱，不需瓦斯、排風或固定排水"
    ],
    "cons": [
      "82cm 深、開門後約 134cm，洗衣陽台需先量搬運與操作空間",
      "75kg 搬運與疊放應由專業人員處理",
      "20kg 大容量採水箱時需定期倒水與清潔濾網，疊放另須核對相容套件"
    ],
    "bestFor": "需要 20kg 大容量獨立乾衣、偏好 110V Heat Pump 且現場不便接瓦斯或固定排水的家庭。",
    "recommendation": "LG 大容量補強：安裝門檻低於瓦斯機，但機身深度、開門空間、疊放相容性與水箱清理仍要先確認。",
    "score": 90,
    "voltage": "110V 台灣公司貨；需獨立接地插座並依現場決定水箱或排水管方式",
    "warranty": "LG 台灣公司貨；通路明列全機 1 年，其他零組件延長保固依 LG 原廠當期條款",
    "tags": [
      "20kg",
      "Heat Pump",
      "110V",
      "AI Dry",
      "ThinQ",
      "免固定排水"
    ],
    "releaseDate": "2024-09-12",
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
      "note": "已查 LG 台灣官方、PChome exact-model SKU API 與價格搜尋；只能確認本輪 NT$42,900 新品現價，未找到具日期且可重現的可信新品史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-20",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG WR-20DW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20WR-20DW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG WR-20DW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20WR-20DW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        }
      ]
    }
  }
]);
})();

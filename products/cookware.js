(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("cookware", [
  {
    "id": "cookware-tefal-daisy-28cm-ih",
    "rank": 1,
    "topPick": true,
    "brand": "Tefal",
    "model": "Daisy 28cm IH",
    "name": "Tefal Daisy 28cm IH",
    "image": "https://cs-a.ecimg.tw/items/DEES01A900ILXUX/000001_1779237227.jpg",
    "price": {
      "currency": "TWD",
      "amount": 999,
      "converted": 999,
      "confidence": "PChome 2026-07-13 頁面與 API 查核價"
    },
    "channel": "tw",
    "buyLabel": "PChome",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEES01-A900ILXUX",
    "specs": [
      "鍋具：Tefal法國特福 Daisy系列28CM不沾小炒鍋(適用電磁爐)",
      "尺寸與材質依商品頁標示",
      "PChome 24h 可信通路低價",
      "排除福利品/配件/旋鈕"
    ],
    "description": "以台灣家庭常見瓦斯爐、IH 與日常煎炒煮燉需求篩選，優先保留品牌穩定、價格合理、容易補買或維修的鍋具。",
    "pros": [
      "品牌知名度與通路穩定",
      "涵蓋入門不沾到高階不鏽鋼/鑄鐵",
      "同類低價以可信通路查核"
    ],
    "cons": [
      "需確認自家爐具是否支援 IH",
      "不沾鍋需避免高溫空燒與金屬鏟",
      "鑄鐵/不鏽鋼款重量與保養門檻較高"
    ],
    "bestFor": "想一次比較日常不沾鍋、湯鍋、不鏽鋼鍋與鑄鐵鍋的家庭。",
    "recommendation": "本類 Top Pick：價格漂亮、品牌售後成熟，28cm IH 不沾小炒鍋最適合多數家庭日常煎炒。",
    "voltage": "無電壓需求；IH/電磁爐相容性依商品頁與鍋底標示",
    "warranty": "依 PChome 24h 與品牌/供應商頁面標示",
    "score": 94,
    "budget": "value",
    "tags": [
      "不沾鍋",
      "IH",
      "CP 值",
      "鍋具",
      "廚房",
      "台灣通路"
    ],
    "category": "cookware",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 699,
      "currency": "TWD",
      "converted": 699,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1246188884&cgp=899",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Tefal 特福】Daisy系列28CM不沾鍋平底鍋(IH爐可用鍋/電磁爐適用)",
      "evidenceSnippet": "LBJ 比價撿便宜同一商品 pid=1246188884 的公開價格曲線明列「Tefal 特福 Daisy 系列 28CM IH 不沾平底鍋」於 2026-07-18 降至 NT$699，2026-07-19 已回到 NT$899。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-19",
      "note": "採用 LBJ 比價撿便宜可公開重現的同一商品價格曲線；同型號／尺寸／IH 規格，並排除會員個人化折扣、信用卡回饋、點數、二手、福利、展示、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Tefal Daisy 28cm IH\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Tefal%20Daisy%2028cm%20IH%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Tefal Daisy 28cm IH\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Tefal%20Daisy%2028cm%20IH%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Tefal Daisy 28cm IH\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Tefal%20Daisy%2028cm%20IH%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Tefal Daisy 28cm IH\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Tefal%20Daisy%2028cm%20IH%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Tefal Daisy 28cm IH\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Tefal%20Daisy%2028cm%20IH%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-buffalo-26cm",
    "rank": 2,
    "topPick": false,
    "brand": "Buffalo",
    "model": "小牛石英陶瓷 26cm",
    "name": "Buffalo 小牛石英陶瓷 26cm",
    "image": "https://cs-a.ecimg.tw/items/DEAWN3A900JOVE3/000001_1783576740.jpg",
    "price": {
      "currency": "TWD",
      "amount": 759,
      "converted": 759,
      "confidence": "PChome 2026-07-18 API 公開價"
    },
    "channel": "tw",
    "buyLabel": "PChome",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEAWN3-A900JOVE3",
    "specs": [
      "鍋具：牛頭牌 小牛石英陶瓷不沾平圓炒鍋26cm",
      "小牛石英陶不沾鍋炒鍋26cm (雙導角/不含PFOA,PFAS/ 塑化劑檢測通過 / 瓦斯爐 . IH爐適用/不沾鍋)",
      "尺寸與材質依商品頁標示",
      "PChome 24h 可信通路低價",
      "排除福利品/配件/旋鈕"
    ],
    "description": "以台灣家庭常見瓦斯爐、IH 與日常煎炒煮燉需求篩選，優先保留品牌穩定、價格合理、容易補買或維修的鍋具。",
    "pros": [
      "品牌知名度與通路穩定",
      "涵蓋入門不沾到高階不鏽鋼/鑄鐵",
      "同類低價以可信通路查核"
    ],
    "cons": [
      "需確認自家爐具是否支援 IH",
      "不沾鍋需避免高溫空燒與金屬鏟",
      "鑄鐵/不鏽鋼款重量與保養門檻較高"
    ],
    "bestFor": "想一次比較日常不沾鍋、湯鍋、不鏽鋼鍋與鑄鐵鍋的家庭。",
    "recommendation": "鍋具第 2 推薦：Buffalo 小牛石英陶瓷 26cm 在價格、評價、品牌通路與售後取得性之間表現均衡，適合納入同類比較。",
    "voltage": "無電壓需求；IH/電磁爐相容性依商品頁與鍋底標示",
    "warranty": "依 PChome 24h 與品牌/供應商頁面標示",
    "score": 93,
    "budget": "value",
    "tags": [
      "不沾鍋",
      "陶瓷塗層",
      "鍋具",
      "廚房",
      "台灣通路"
    ],
    "category": "cookware",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：BigGo DEAWN3-A900JOVE3: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DEAWN3-A900JOVE3/product?p=1；BigGo Buffalo 小牛石英陶瓷 26cm: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/Buffalo%20%E5%B0%8F%E7%89%9B%E7%9F%B3%E8%8B%B1%E9%99%B6%E7%93%B7%2026cm/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Buffalo 小牛石英陶瓷 26cm\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Buffalo%20%E5%B0%8F%E7%89%9B%E7%9F%B3%E8%8B%B1%E9%99%B6%E7%93%B7%2026cm%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Buffalo 小牛石英陶瓷 26cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Buffalo%20%E5%B0%8F%E7%89%9B%E7%9F%B3%E8%8B%B1%E9%99%B6%E7%93%B7%2026cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Buffalo 小牛石英陶瓷 26cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Buffalo%20%E5%B0%8F%E7%89%9B%E7%9F%B3%E8%8B%B1%E9%99%B6%E7%93%B7%2026cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Buffalo 小牛石英陶瓷 26cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Buffalo%20%E5%B0%8F%E7%89%9B%E7%9F%B3%E8%8B%B1%E9%99%B6%E7%93%B7%2026cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Buffalo 小牛石英陶瓷 26cm\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Buffalo%20%E5%B0%8F%E7%89%9B%E7%9F%B3%E8%8B%B1%E9%99%B6%E7%93%B7%2026cm%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-thermos-kfm-030d-r-30cm",
    "rank": 3,
    "topPick": false,
    "brand": "THERMOS",
    "model": "KFM-030D-R 30cm",
    "name": "THERMOS KFM-030D-R 30cm",
    "image": "https://cs-a.ecimg.tw/items/DEAWMWA900JMZB6/000001_1768290450.jpg",
    "price": {
      "currency": "TWD",
      "amount": 1399,
      "converted": 1399,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "channel": "tw",
    "buyLabel": "PChome",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEAWMW-A900JMZB6",
    "specs": [
      "鍋具：膳魔師新一代厚鑄耐摩不沾鍋單柄深煎鍋30cm(KFH-030D-R)",
      "新一代厚鑄耐摩不沾鍋單柄深煎鍋30cm(KFM-030D-R)",
      "尺寸與材質依商品頁標示",
      "PChome 24h 可信通路低價",
      "排除福利品/配件/旋鈕"
    ],
    "description": "以台灣家庭常見瓦斯爐、IH 與日常煎炒煮燉需求篩選，優先保留品牌穩定、價格合理、容易補買或維修的鍋具。",
    "pros": [
      "品牌知名度與通路穩定",
      "涵蓋入門不沾到高階不鏽鋼/鑄鐵",
      "同類低價以可信通路查核"
    ],
    "cons": [
      "需確認自家爐具是否支援 IH",
      "不沾鍋需避免高溫空燒與金屬鏟",
      "鑄鐵/不鏽鋼款重量與保養門檻較高"
    ],
    "bestFor": "想一次比較日常不沾鍋、湯鍋、不鏽鋼鍋與鑄鐵鍋的家庭。",
    "recommendation": "鍋具第 3 推薦：THERMOS KFM-030D-R 30cm 在價格、評價、品牌通路與售後取得性之間表現均衡，適合納入同類比較。",
    "voltage": "無電壓需求；IH/電磁爐相容性依商品頁與鍋底標示",
    "warranty": "依 PChome 24h 與品牌/供應商頁面標示",
    "score": 92,
    "budget": "value",
    "tags": [
      "深煎鍋",
      "不沾",
      "鍋具",
      "廚房",
      "台灣通路"
    ],
    "category": "cookware",
    "releaseDate": "2023",
    "historicalLow": {
      "status": "found",
      "amount": 1299,
      "currency": "TWD",
      "converted": 1299,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1268723556&cgp=1299",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【THERMOS 膳魔師】新一代厚鑄耐摩不沾鍋單柄深煎鍋30cm(KFM-030D R)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【THERMOS 膳魔師】新一代厚鑄耐摩不沾鍋單柄深煎鍋30cm(KFM-030D R)」最低價為 NT$1,299，最低點日期 2026-07-09。",
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
          "query": "site:reddit.com \"THERMOS KFM-030D-R 30cm\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22THERMOS%20KFM-030D-R%2030cm%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"THERMOS KFM-030D-R 30cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22THERMOS%20KFM-030D-R%2030cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"THERMOS KFM-030D-R 30cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22THERMOS%20KFM-030D-R%2030cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"THERMOS KFM-030D-R 30cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22THERMOS%20KFM-030D-R%2030cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"THERMOS KFM-030D-R 30cm\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22THERMOS%20KFM-030D-R%2030cm%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-wmf-durado-24cm",
    "rank": 4,
    "topPick": false,
    "brand": "WMF",
    "model": "Durado 24cm",
    "name": "WMF Durado 24cm",
    "image": "https://cs-a.ecimg.tw/items/DEAWMWA900JCBKJ/000001_1760418137.jpg",
    "price": {
      "currency": "TWD",
      "amount": 2690,
      "converted": 2690,
      "confidence": "PChome 2026-08-11 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "channel": "tw",
    "buyLabel": "PChome",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEAWMW-A900JCBKJ",
    "specs": [
      "鍋具：WMF Durado 陶瓷不沾平底鍋 24cm",
      "尺寸與材質依商品頁標示",
      "PChome 24h 可信通路低價",
      "排除福利品/配件/旋鈕"
    ],
    "description": "以台灣家庭常見瓦斯爐、IH 與日常煎炒煮燉需求篩選，優先保留品牌穩定、價格合理、容易補買或維修的鍋具。",
    "pros": [
      "品牌知名度與通路穩定",
      "涵蓋入門不沾到高階不鏽鋼/鑄鐵",
      "同類低價以可信通路查核"
    ],
    "cons": [
      "需確認自家爐具是否支援 IH",
      "不沾鍋需避免高溫空燒與金屬鏟",
      "鑄鐵/不鏽鋼款重量與保養門檻較高"
    ],
    "bestFor": "想一次比較日常不沾鍋、湯鍋、不鏽鋼鍋與鑄鐵鍋的家庭。",
    "recommendation": "鍋具第 4 推薦：WMF Durado 24cm 在價格、評價、品牌通路與售後取得性之間表現均衡，適合納入同類比較。",
    "voltage": "無電壓需求；IH/電磁爐相容性依商品頁與鍋底標示",
    "warranty": "依 PChome 24h 與品牌/供應商頁面標示",
    "score": 91,
    "budget": "mid",
    "tags": [
      "陶瓷不沾",
      "德系",
      "鍋具",
      "廚房",
      "台灣通路"
    ],
    "category": "cookware",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1199,
      "currency": "TWD",
      "converted": 1199,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1258306016&cgp=1399",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：WMF Durado 陶瓷不沾平底鍋 24cm",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / WMF Durado 陶瓷不沾平底鍋 24cm」最低價為 NT$1,199，最低點日期 2025-12-18。",
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
          "query": "site:reddit.com \"WMF Durado 24cm\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22WMF%20Durado%2024cm%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"WMF Durado 24cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22WMF%20Durado%2024cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"WMF Durado 24cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22WMF%20Durado%2024cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"WMF Durado 24cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22WMF%20Durado%2024cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"WMF Durado 24cm\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22WMF%20Durado%2024cm%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-fissler-cianmic-28cm",
    "rank": 5,
    "topPick": false,
    "brand": "Fissler",
    "model": "Cianmic 28cm",
    "name": "Fissler Cianmic 28cm",
    "image": "https://cs-a.ecimg.tw/items/DEAWN3A900JSN52/000001_1772965996.jpg",
    "price": {
      "currency": "TWD",
      "amount": 2490,
      "converted": 2490,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "channel": "tw",
    "buyLabel": "PChome",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEAWN3-A900JSN52",
    "specs": [
      "鍋具：Fissler 瓷安系列 Cianmic 28cm不沾單柄炒鍋(含蓋)-柔桃色",
      "尺寸與材質依商品頁標示",
      "PChome 24h 可信通路低價",
      "排除福利品/配件/旋鈕"
    ],
    "description": "以台灣家庭常見瓦斯爐、IH 與日常煎炒煮燉需求篩選，優先保留品牌穩定、價格合理、容易補買或維修的鍋具。",
    "pros": [
      "品牌知名度與通路穩定",
      "涵蓋入門不沾到高階不鏽鋼/鑄鐵",
      "同類低價以可信通路查核"
    ],
    "cons": [
      "需確認自家爐具是否支援 IH",
      "不沾鍋需避免高溫空燒與金屬鏟",
      "鑄鐵/不鏽鋼款重量與保養門檻較高"
    ],
    "bestFor": "想一次比較日常不沾鍋、湯鍋、不鏽鋼鍋與鑄鐵鍋的家庭。",
    "recommendation": "鍋具第 5 推薦：Fissler Cianmic 28cm 在價格、評價、品牌通路與售後取得性之間表現均衡，適合納入同類比較。",
    "voltage": "無電壓需求；IH/電磁爐相容性依商品頁與鍋底標示",
    "warranty": "依 PChome 24h 與品牌/供應商頁面標示",
    "score": 90,
    "budget": "mid",
    "tags": [
      "不沾炒鍋",
      "德系",
      "鍋具",
      "廚房",
      "台灣通路"
    ],
    "category": "cookware",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Fissler Cianmic 28cm: 露天拍賣 - 宅配滿$490免運｜ PC24h購物 露天旗艦店 (71076個評價) 【PChome 24h購物】Fissler 瓷安系列 Cianmic 28cm不沾單柄炒鍋(含蓋)-柔桃色 非採用通路或含排除條件；BigGo DEAWN3-A900JSN52: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DEAWN3-A900JSN52/product?p=1；BigGo Fissler Cianmic 28cm: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/Fissler%20Cianmic%2028cm/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Fissler Cianmic 28cm\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Fissler%20Cianmic%2028cm%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Fissler Cianmic 28cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Fissler%20Cianmic%2028cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Fissler Cianmic 28cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Fissler%20Cianmic%2028cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Fissler Cianmic 28cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Fissler%20Cianmic%2028cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Fissler Cianmic 28cm\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Fissler%20Cianmic%2028cm%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-zwilling-joy-plus-24cm",
    "rank": 6,
    "topPick": false,
    "brand": "ZWILLING",
    "model": "Joy Plus 24cm",
    "name": "ZWILLING Joy Plus 24cm",
    "image": "https://cs-a.ecimg.tw/items/DEAWMWA900J5MY9/000001_1756189443.jpg",
    "price": {
      "currency": "TWD",
      "amount": 2499,
      "converted": 2499,
      "confidence": "PChome 2026-08-06 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "channel": "tw",
    "buyLabel": "PChome",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEAWMW-A900J5MY9",
    "specs": [
      "鍋具：Zwilling 雙人牌 Joy Plus 不鏽鋼不沾深鍋 24cm (電磁爐 IH爐可用)",
      "Zwilling 雙人牌 Joy Plus 不鏽鋼深鍋 24cm 不鏽鋼鍋 平底鍋 炒鍋 (電磁爐 IH爐可用)",
      "尺寸與材質依商品頁標示",
      "PChome 24h 可信通路低價",
      "排除福利品/配件/旋鈕"
    ],
    "description": "以台灣家庭常見瓦斯爐、IH 與日常煎炒煮燉需求篩選，優先保留品牌穩定、價格合理、容易補買或維修的鍋具。",
    "pros": [
      "品牌知名度與通路穩定",
      "涵蓋入門不沾到高階不鏽鋼/鑄鐵",
      "同類低價以可信通路查核"
    ],
    "cons": [
      "需確認自家爐具是否支援 IH",
      "不沾鍋需避免高溫空燒與金屬鏟",
      "鑄鐵/不鏽鋼款重量與保養門檻較高"
    ],
    "bestFor": "想一次比較日常不沾鍋、湯鍋、不鏽鋼鍋與鑄鐵鍋的家庭。",
    "recommendation": "鍋具第 6 推薦：ZWILLING Joy Plus 24cm 在價格、評價、品牌通路與售後取得性之間表現均衡，適合納入同類比較。",
    "voltage": "無電壓需求；IH/電磁爐相容性依商品頁與鍋底標示",
    "warranty": "依 PChome 24h 與品牌/供應商頁面標示",
    "score": 89,
    "budget": "mid",
    "tags": [
      "不鏽鋼",
      "IH",
      "鍋具",
      "廚房",
      "台灣通路"
    ],
    "category": "cookware",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2374,
      "currency": "TWD",
      "converted": 2374,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DEAWMW-A900J5MY9",
      "sourceTitle": "PChome 24h 購物：Zwilling 雙人牌 Joy Plus 不鏽鋼不沾深鍋 24cm (電磁爐 IH爐可用)",
      "evidenceSnippet": "PChome 24h 購物於 2026-07-26 顯示同型號可信新品公開價 NT$2,374，低於既有史低 NT$2,499。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-26",
      "note": "採用 PChome 24h 購物當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ZWILLING Joy Plus 24cm\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ZWILLING%20Joy%20Plus%2024cm%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"ZWILLING Joy Plus 24cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ZWILLING%20Joy%20Plus%2024cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"ZWILLING Joy Plus 24cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22ZWILLING%20Joy%20Plus%2024cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"ZWILLING Joy Plus 24cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22ZWILLING%20Joy%20Plus%2024cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"ZWILLING Joy Plus 24cm\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22ZWILLING%20Joy%20Plus%2024cm%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-le-creuset-tns-28cm",
    "rank": 7,
    "topPick": false,
    "brand": "Le Creuset",
    "model": "TNS 28cm",
    "name": "Le Creuset TNS 28cm",
    "image": "https://cs-a.ecimg.tw/items/DEAWTGA900FCFJC/000001_1692859840.jpg",
    "price": {
      "currency": "TWD",
      "amount": 4490,
      "converted": 4490,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "channel": "tw",
    "buyLabel": "PChome",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEAWTG-A900FCFJC",
    "specs": [
      "鍋具：LE CREUSET-超完美不沾鍋系列-TNS 單柄單耳煎鍋 28cm",
      "尺寸與材質依商品頁標示",
      "PChome 24h 可信通路低價",
      "排除福利品/配件/旋鈕"
    ],
    "description": "以台灣家庭常見瓦斯爐、IH 與日常煎炒煮燉需求篩選，優先保留品牌穩定、價格合理、容易補買或維修的鍋具。",
    "pros": [
      "品牌知名度與通路穩定",
      "涵蓋入門不沾到高階不鏽鋼/鑄鐵",
      "同類低價以可信通路查核"
    ],
    "cons": [
      "需確認自家爐具是否支援 IH",
      "不沾鍋需避免高溫空燒與金屬鏟",
      "鑄鐵/不鏽鋼款重量與保養門檻較高"
    ],
    "bestFor": "想一次比較日常不沾鍋、湯鍋、不鏽鋼鍋與鑄鐵鍋的家庭。",
    "recommendation": "鍋具第 7 推薦：Le Creuset TNS 28cm 在價格、評價、品牌通路與售後取得性之間表現均衡，適合納入同類比較。",
    "voltage": "無電壓需求；IH/電磁爐相容性依商品頁與鍋底標示",
    "warranty": "依 PChome 24h 與品牌/供應商頁面標示",
    "score": 88,
    "budget": "mid",
    "tags": [
      "高階不沾",
      "法系",
      "鍋具",
      "廚房",
      "台灣通路"
    ],
    "category": "cookware",
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
      "note": "未找到 TNS 單柄單耳煎鍋 28cm 可公開驗證的可信新品史低；已排除雙耳深煎鍋附蓋 28cm，因鍋型與套裝不同。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Le Creuset TNS 28cm\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Le%20Creuset%20TNS%2028cm%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Le Creuset TNS 28cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Le%20Creuset%20TNS%2028cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Le Creuset TNS 28cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Le%20Creuset%20TNS%2028cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Le Creuset TNS 28cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Le%20Creuset%20TNS%2028cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Le Creuset TNS 28cm\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Le%20Creuset%20TNS%2028cm%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-staub-26cm",
    "rank": 8,
    "topPick": false,
    "brand": "Staub",
    "model": "圓形鑄鐵鍋 26cm",
    "name": "Staub 圓形鑄鐵鍋 26cm",
    "image": "https://cs-a.ecimg.tw/items/DEAWMQA900JO5Y3/000001_1769140380.jpg",
    "price": {
      "currency": "TWD",
      "amount": 8999,
      "converted": 8999,
      "confidence": "Yahoo購物中心 2026-07-28 exact-model 公開結構化價格"
    },
    "channel": "tw",
    "buyLabel": "Yahoo購物中心",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Staub-%E5%9C%93%E5%BD%A2%E7%90%BA%E7%91%AF%E9%91%84%E9%90%B5%E9%8D%8B-26cm-5-2L-%E7%9F%B3-7909398.html",
    "specs": [
      "鍋具：Staub 圓形鑄鐵鍋 26cm 全色系 湯鍋 燉鍋 法國製 (電磁爐 IH爐可用)",
      "尺寸與材質依商品頁標示",
      "PChome 24h 可信通路低價",
      "排除福利品/配件/旋鈕"
    ],
    "description": "以台灣家庭常見瓦斯爐、IH 與日常煎炒煮燉需求篩選，優先保留品牌穩定、價格合理、容易補買或維修的鍋具。",
    "pros": [
      "品牌知名度與通路穩定",
      "涵蓋入門不沾到高階不鏽鋼/鑄鐵",
      "同類低價以可信通路查核"
    ],
    "cons": [
      "需確認自家爐具是否支援 IH",
      "不沾鍋需避免高溫空燒與金屬鏟",
      "鑄鐵/不鏽鋼款重量與保養門檻較高"
    ],
    "bestFor": "想一次比較日常不沾鍋、湯鍋、不鏽鋼鍋與鑄鐵鍋的家庭。",
    "recommendation": "鍋具第 8 推薦：Staub 圓形鑄鐵鍋 26cm 在價格、評價、品牌通路與售後取得性之間表現均衡，適合納入同類比較。",
    "voltage": "無電壓需求；IH/電磁爐相容性依商品頁與鍋底標示",
    "warranty": "依 PChome 24h 與品牌/供應商頁面標示",
    "score": 87,
    "budget": "premium",
    "tags": [
      "鑄鐵鍋",
      "IH",
      "鍋具",
      "廚房",
      "台灣通路"
    ],
    "category": "cookware",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 5582,
      "currency": "TWD",
      "converted": 5582,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1256591263&cgp=8120",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【STAUB】圓形琺瑯鑄鐵鍋淺鍋26cm-亞麻色/3.8L(德國雙人牌集團官方直營)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【STAUB】圓形琺瑯鑄鐵鍋淺鍋26cm-亞麻色/3.8L(德國雙人牌集團官方直營)」最低價為 NT$5,582，最低點日期 2026-06-18。",
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
          "query": "site:reddit.com \"Staub 圓形鑄鐵鍋 26cm\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Staub%20%E5%9C%93%E5%BD%A2%E9%91%84%E9%90%B5%E9%8D%8B%2026cm%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Staub 圓形鑄鐵鍋 26cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Staub%20%E5%9C%93%E5%BD%A2%E9%91%84%E9%90%B5%E9%8D%8B%2026cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Staub 圓形鑄鐵鍋 26cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Staub%20%E5%9C%93%E5%BD%A2%E9%91%84%E9%90%B5%E9%8D%8B%2026cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Staub 圓形鑄鐵鍋 26cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Staub%20%E5%9C%93%E5%BD%A2%E9%91%84%E9%90%B5%E9%8D%8B%2026cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Staub 圓形鑄鐵鍋 26cm\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Staub%20%E5%9C%93%E5%BD%A2%E9%91%84%E9%90%B5%E9%8D%8B%2026cm%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-wmf-astoria-20cm-2-5l",
    "rank": 9,
    "topPick": false,
    "brand": "WMF",
    "model": "Astoria 20cm 2.5L",
    "name": "WMF Astoria 20cm 2.5L",
    "image": "https://cs-a.ecimg.tw/items/DEAWMJA900JN626/000001_1768377713.jpg",
    "price": {
      "currency": "TWD",
      "amount": 1980,
      "converted": 1980,
      "confidence": "Yahoo 購物中心 2026-08-07 exact-model 公開價"
    },
    "channel": "tw",
    "buyLabel": "Yahoo 購物中心",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/gdsale.asp?gdid=11965999",
    "specs": [
      "鍋具：WMF ASTORIA 低身湯鍋 20cm 2.5L",
      "尺寸與材質依商品頁標示",
      "可信台灣新品通路公開價",
      "排除福利品/配件/旋鈕"
    ],
    "description": "以台灣家庭常見瓦斯爐、IH 與日常煎炒煮燉需求篩選，優先保留品牌穩定、價格合理、容易補買或維修的鍋具。",
    "pros": [
      "品牌知名度與通路穩定",
      "涵蓋入門不沾到高階不鏽鋼/鑄鐵",
      "同類低價以可信通路查核"
    ],
    "cons": [
      "需確認自家爐具是否支援 IH",
      "不沾鍋需避免高溫空燒與金屬鏟",
      "鑄鐵/不鏽鋼款重量與保養門檻較高"
    ],
    "bestFor": "想一次比較日常不沾鍋、湯鍋、不鏽鋼鍋與鑄鐵鍋的家庭。",
    "recommendation": "鍋具第 9 推薦：WMF Astoria 20cm 2.5L 在價格、評價、品牌通路與售後取得性之間表現均衡，適合納入同類比較。",
    "voltage": "無電壓需求；IH/電磁爐相容性依商品頁與鍋底標示",
    "warranty": "依品牌、供應商與購買頁面標示",
    "score": 86,
    "budget": "value",
    "tags": [
      "湯鍋",
      "不鏽鋼",
      "鍋具",
      "廚房",
      "台灣通路"
    ],
    "category": "cookware",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1349,
      "currency": "TWD",
      "converted": 1349,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282465160&cgp=1349",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Costco好市多】WMF Astoria 不鏽鋼低身湯鍋 含玻璃上蓋 20公分 2.5公升 WMF Astoria Stainless Steel Stock Pot with Glass Lid 20 cm 2.5 L",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Costco好市多 / 【Costco好市多】WMF Astoria 不鏽鋼低身湯鍋 含玻璃上蓋 20公分 2.5公升 WMF Astoria Stainless Steel Stock Pot with Glass Lid 20 cm 2.5 L」最低價為 NT$1,349，最低點日期 2026-07-09。",
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
          "query": "site:reddit.com \"WMF Astoria 20cm 2.5L\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22WMF%20Astoria%2020cm%202.5L%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"WMF Astoria 20cm 2.5L\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22WMF%20Astoria%2020cm%202.5L%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"WMF Astoria 20cm 2.5L\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22WMF%20Astoria%2020cm%202.5L%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"WMF Astoria 20cm 2.5L\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22WMF%20Astoria%2020cm%202.5L%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"WMF Astoria 20cm 2.5L\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22WMF%20Astoria%2020cm%202.5L%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-fissler-levital-28cm",
    "rank": 10,
    "topPick": false,
    "brand": "Fissler",
    "model": "Levital 28cm",
    "name": "Fissler Levital 28cm",
    "image": "https://img.yec.tw/zp/MerchandiseImages/2693875B21-SP-18128306.jpg",
    "price": {
      "currency": "TWD",
      "amount": 2860,
      "converted": 2860,
      "confidence": "Yahoo購物中心 2026-08-15 exact-model 自營新品公開價"
    },
    "channel": "tw",
    "buyLabel": "Yahoo購物中心",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Fissler-Levital-%E7%B6%93%E5%85%B8%E4%B8%8D%E6%B2%BE%E5%B9%B3%E5%BA%95%E9%8D%8B-28cm-%E4%B8%8D%E6%B2%BE%E9%8D%8B-%E7%85%8E%E9%8D%8B-%E9%9B%BB%E7%A3%81%E7%88%90-IH%E7%88%90%E5%8F%AF%E7%94%A8-11325415.html",
    "specs": [
      "鍋具：Fissler Levital 經典不沾平底鍋 28cm 不沾鍋 煎鍋 (電磁爐 IH爐可用)",
      "尺寸與材質依商品頁標示",
      "Yahoo購物中心自營新品",
      "排除福利品/配件/旋鈕"
    ],
    "description": "以台灣家庭常見瓦斯爐、IH 與日常煎炒煮燉需求篩選，優先保留品牌穩定、價格合理、容易補買或維修的鍋具。",
    "pros": [
      "品牌知名度與通路穩定",
      "涵蓋入門不沾到高階不鏽鋼/鑄鐵",
      "同類低價以可信通路查核"
    ],
    "cons": [
      "需確認自家爐具是否支援 IH",
      "不沾鍋需避免高溫空燒與金屬鏟",
      "鑄鐵/不鏽鋼款重量與保養門檻較高"
    ],
    "bestFor": "想一次比較日常不沾鍋、湯鍋、不鏽鋼鍋與鑄鐵鍋的家庭。",
    "recommendation": "鍋具第 10 推薦：Fissler Levital 28cm 在價格、評價、品牌通路與售後取得性之間表現均衡，適合納入同類比較。",
    "voltage": "無電壓需求；IH/電磁爐相容性依商品頁與鍋底標示",
    "warranty": "依 Yahoo購物中心與品牌/供應商頁面標示",
    "score": 85,
    "budget": "mid",
    "tags": [
      "不沾平底鍋",
      "IH",
      "鍋具",
      "廚房",
      "台灣通路"
    ],
    "category": "cookware",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2231,
      "currency": "TWD",
      "converted": 2231,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1233826604&cgp=2775",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Fissler Levital 經典不沾平底鍋 28cm 不沾鍋 煎鍋 (電磁爐 IH爐可用)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / Fissler Levital 經典不沾平底鍋 28cm 不沾鍋 煎鍋 (電磁爐 IH爐可用)」最低價為 NT$2,231，最低點日期 2026-04-30。",
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
          "query": "site:reddit.com \"Fissler Levital 28cm\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Fissler%20Levital%2028cm%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Fissler Levital 28cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Fissler%20Levital%2028cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Fissler Levital 28cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Fissler%20Levital%2028cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Fissler Levital 28cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Fissler%20Levital%2028cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Fissler Levital 28cm\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Fissler%20Levital%2028cm%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-tefal-4",
    "rank": 11,
    "topPick": false,
    "brand": "Tefal",
    "model": "饗樂系列不沾鍋具4件組",
    "name": "Tefal 饗樂系列不沾鍋具4件組",
    "image": "https://cs-a.ecimg.tw/items/DEDG3BA900GQDVZ/000001_1776769920.jpg",
    "price": {
      "currency": "TWD",
      "amount": 1099,
      "converted": 1099,
      "confidence": "Yahoo購物中心 2026-08-19 exact-model 公開結構化價格"
    },
    "channel": "tw",
    "buyLabel": "Yahoo購物中心",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Tefal%E6%B3%95%E5%9C%8B%E7%89%B9%E7%A6%8F-%E9%A5%97%E6%A8%82%E7%B3%BB%E5%88%97%E4%B8%8D%E6%B2%BE%E9%8D%8B%E5%85%B74%E4%BB%B6%E7%B5%84-28cm%E7%82%92%E9%8D%8B-16cm%E6%B9%AF%E9%8D%8B-16cm%E9%8D%8B%E8%93%8B-%E9%8D%8B%E9%8F%9F-10238240.html",
    "specs": [
      "鍋具：Tefal法國特福 饗樂系列不沾鍋具4件組",
      "【南紡購物中心】 Tefal法國特福 饗樂系列不沾鍋具4件組",
      "尺寸與材質依商品頁標示",
      "PChome 24h 可信通路低價",
      "排除福利品/配件/旋鈕"
    ],
    "description": "以台灣家庭常見瓦斯爐、IH 與日常煎炒煮燉需求篩選，優先保留品牌穩定、價格合理、容易補買或維修的鍋具。",
    "pros": [
      "品牌知名度與通路穩定",
      "涵蓋入門不沾到高階不鏽鋼/鑄鐵",
      "同類低價以可信通路查核"
    ],
    "cons": [
      "需確認自家爐具是否支援 IH",
      "不沾鍋需避免高溫空燒與金屬鏟",
      "鑄鐵/不鏽鋼款重量與保養門檻較高"
    ],
    "bestFor": "想一次比較日常不沾鍋、湯鍋、不鏽鋼鍋與鑄鐵鍋的家庭。",
    "recommendation": "鍋具第 11 推薦：Tefal 饗樂系列不沾鍋具4件組 在價格、評價、品牌通路與售後取得性之間表現均衡，適合納入同類比較。",
    "voltage": "無電壓需求；IH/電磁爐相容性依商品頁與鍋底標示",
    "warranty": "依 PChome 24h 與品牌/供應商頁面標示",
    "score": 84,
    "budget": "value",
    "tags": [
      "鍋具組",
      "入門",
      "鍋具",
      "廚房",
      "台灣通路"
    ],
    "category": "cookware",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 890,
      "currency": "TWD",
      "converted": 890,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1150621104&cgp=990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Tefal法國特福 饗樂系列不沾鍋具4件組(28cm炒鍋+16cm湯鍋+16cm鍋蓋+鍋鏟)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / Tefal法國特福 饗樂系列不沾鍋具4件組(28cm炒鍋+16cm湯鍋+16cm鍋蓋+鍋鏟)」最低價為 NT$890，最低點日期 2025-11-08。",
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
          "query": "site:reddit.com \"Tefal 饗樂系列不沾鍋具4件組\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Tefal%20%E9%A5%97%E6%A8%82%E7%B3%BB%E5%88%97%E4%B8%8D%E6%B2%BE%E9%8D%8B%E5%85%B74%E4%BB%B6%E7%B5%84%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Tefal 饗樂系列不沾鍋具4件組\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Tefal%20%E9%A5%97%E6%A8%82%E7%B3%BB%E5%88%97%E4%B8%8D%E6%B2%BE%E9%8D%8B%E5%85%B74%E4%BB%B6%E7%B5%84%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Tefal 饗樂系列不沾鍋具4件組\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Tefal%20%E9%A5%97%E6%A8%82%E7%B3%BB%E5%88%97%E4%B8%8D%E6%B2%BE%E9%8D%8B%E5%85%B74%E4%BB%B6%E7%B5%84%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Tefal 饗樂系列不沾鍋具4件組\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Tefal%20%E9%A5%97%E6%A8%82%E7%B3%BB%E5%88%97%E4%B8%8D%E6%B2%BE%E9%8D%8B%E5%85%B74%E4%BB%B6%E7%B5%84%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Tefal 饗樂系列不沾鍋具4件組\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Tefal%20%E9%A5%97%E6%A8%82%E7%B3%BB%E5%88%97%E4%B8%8D%E6%B2%BE%E9%8D%8B%E5%85%B74%E4%BB%B6%E7%B5%84%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-buffalo-18cm",
    "rank": 12,
    "topPick": false,
    "brand": "Buffalo",
    "model": "雅登雙鍋組 18cm",
    "name": "Buffalo 雅登雙鍋組 18cm",
    "image": "https://cs-a.ecimg.tw/items/DEAWMJA900I0PS9/000001_1763364607.jpg",
    "price": {
      "currency": "TWD",
      "amount": 1350,
      "converted": 1350,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "channel": "tw",
    "buyLabel": "PChome",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEAWMJ-A900I0PS9",
    "specs": [
      "鍋具：【牛頭牌】雅登雙鍋組18cm(提把調理鍋+單把湯鍋)",
      "【buffalo_牛頭牌】雅登不鏽鋼湯鍋組18cm_單柄湯鍋調理鍋複合蓋(304不鏽鋼/露營鍋/泡麵鍋/IH/電磁爐適用/雙鍋組)",
      "尺寸與材質依商品頁標示",
      "PChome 24h 可信通路低價",
      "排除福利品/配件/旋鈕"
    ],
    "description": "以台灣家庭常見瓦斯爐、IH 與日常煎炒煮燉需求篩選，優先保留品牌穩定、價格合理、容易補買或維修的鍋具。",
    "pros": [
      "品牌知名度與通路穩定",
      "涵蓋入門不沾到高階不鏽鋼/鑄鐵",
      "同類低價以可信通路查核"
    ],
    "cons": [
      "需確認自家爐具是否支援 IH",
      "不沾鍋需避免高溫空燒與金屬鏟",
      "鑄鐵/不鏽鋼款重量與保養門檻較高"
    ],
    "bestFor": "想一次比較日常不沾鍋、湯鍋、不鏽鋼鍋與鑄鐵鍋的家庭。",
    "recommendation": "鍋具第 12 推薦：Buffalo 雅登雙鍋組 18cm 在價格、評價、品牌通路與售後取得性之間表現均衡，適合納入同類比較。",
    "voltage": "無電壓需求；IH/電磁爐相容性依商品頁與鍋底標示",
    "warranty": "依 PChome 24h 與品牌/供應商頁面標示",
    "score": 83,
    "budget": "value",
    "tags": [
      "鍋具組",
      "不鏽鋼",
      "鍋具",
      "廚房",
      "台灣通路"
    ],
    "category": "cookware",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1283,
      "currency": "TWD",
      "converted": 1283,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1262216455&cgp=1799",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Buffalo牛頭牌】雅登不鏽鋼湯鍋組18cm_單柄湯鍋調理鍋+複合蓋(304不銹鋼/IH爐/電磁爐適用/雙鍋組/露營鍋/泡麵鍋)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / 【Buffalo牛頭牌】雅登不鏽鋼湯鍋組18cm_單柄湯鍋調理鍋+複合蓋(304不銹鋼/IH爐/電磁爐適用/雙鍋組/露營鍋/泡麵鍋)」最低價為 NT$1,283，最低點日期 2025-11-11。",
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
          "query": "site:reddit.com \"Buffalo 雅登雙鍋組 18cm\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Buffalo%20%E9%9B%85%E7%99%BB%E9%9B%99%E9%8D%8B%E7%B5%84%2018cm%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Buffalo 雅登雙鍋組 18cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Buffalo%20%E9%9B%85%E7%99%BB%E9%9B%99%E9%8D%8B%E7%B5%84%2018cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Buffalo 雅登雙鍋組 18cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Buffalo%20%E9%9B%85%E7%99%BB%E9%9B%99%E9%8D%8B%E7%B5%84%2018cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Buffalo 雅登雙鍋組 18cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Buffalo%20%E9%9B%85%E7%99%BB%E9%9B%99%E9%8D%8B%E7%B5%84%2018cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Buffalo 雅登雙鍋組 18cm\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Buffalo%20%E9%9B%85%E7%99%BB%E9%9B%99%E9%8D%8B%E7%B5%84%2018cm%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-sambonet-titan-28cm",
    "rank": 13,
    "topPick": false,
    "brand": "Sambonet",
    "model": "Titan 28cm",
    "name": "Sambonet Titan 28cm",
    "image": "https://cs-a.ecimg.tw/items/DEAW03A900BSUA7/000001_1632301011.jpg",
    "price": {
      "currency": "TWD",
      "amount": 6042,
      "converted": 6042,
      "confidence": "PChome 2026-07-18 API 公開價"
    },
    "channel": "tw",
    "buyLabel": "PChome",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEAW03-A900BSUA7",
    "specs": [
      "鍋具：【Sambonet】Titan/雙耳平底鍋附蓋/28cm",
      "尺寸與材質依商品頁標示",
      "PChome 24h 可信通路低價",
      "排除福利品/配件/旋鈕"
    ],
    "description": "以台灣家庭常見瓦斯爐、IH 與日常煎炒煮燉需求篩選，優先保留品牌穩定、價格合理、容易補買或維修的鍋具。",
    "pros": [
      "品牌知名度與通路穩定",
      "涵蓋入門不沾到高階不鏽鋼/鑄鐵",
      "同類低價以可信通路查核"
    ],
    "cons": [
      "需確認自家爐具是否支援 IH",
      "不沾鍋需避免高溫空燒與金屬鏟",
      "鑄鐵/不鏽鋼款重量與保養門檻較高"
    ],
    "bestFor": "想一次比較日常不沾鍋、湯鍋、不鏽鋼鍋與鑄鐵鍋的家庭。",
    "recommendation": "鍋具第 13 推薦：Sambonet Titan 28cm 在價格、評價、品牌通路與售後取得性之間表現均衡，適合納入同類比較。",
    "voltage": "無電壓需求；IH/電磁爐相容性依商品頁與鍋底標示",
    "warranty": "依 PChome 24h 與品牌/供應商頁面標示",
    "score": 82,
    "budget": "premium",
    "tags": [
      "雙耳平底鍋",
      "義系",
      "鍋具",
      "廚房",
      "台灣通路"
    ],
    "category": "cookware",
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
      "note": "未找到 Sambonet Titan 雙耳平底鍋附蓋 28cm 可公開驗證的可信新品史低；已排除 Pro Green 單柄平底鍋，因系列、把手與套裝不同。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Sambonet Titan 28cm\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Sambonet%20Titan%2028cm%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Sambonet Titan 28cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Sambonet%20Titan%2028cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Sambonet Titan 28cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Sambonet%20Titan%2028cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Sambonet Titan 28cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Sambonet%20Titan%2028cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Sambonet Titan 28cm\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Sambonet%20Titan%2028cm%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-cookpower-og-42bk",
    "rank": 14,
    "topPick": false,
    "brand": "CookPower",
    "model": "OG-42BK",
    "name": "CookPower OG-42BK",
    "image": "https://cs-a.ecimg.tw/items/DEAWGAA900B4V1I/000001_1670815636.jpg",
    "price": {
      "currency": "TWD",
      "amount": 1490,
      "converted": 1490,
      "confidence": "PChome 2026-08-06 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "channel": "tw",
    "buyLabel": "PChome",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEAWGA-A900B4V1I",
    "specs": [
      "鍋具：【CookPower鍋寶】微晶透明湯鍋(黑底) OG-42BK",
      "尺寸與材質依商品頁標示",
      "PChome 24h 可信通路低價",
      "排除福利品/配件/旋鈕"
    ],
    "description": "以台灣家庭常見瓦斯爐、IH 與日常煎炒煮燉需求篩選，優先保留品牌穩定、價格合理、容易補買或維修的鍋具。",
    "pros": [
      "品牌知名度與通路穩定",
      "涵蓋入門不沾到高階不鏽鋼/鑄鐵",
      "同類低價以可信通路查核"
    ],
    "cons": [
      "需確認自家爐具是否支援 IH",
      "不沾鍋需避免高溫空燒與金屬鏟",
      "鑄鐵/不鏽鋼款重量與保養門檻較高"
    ],
    "bestFor": "想一次比較日常不沾鍋、湯鍋、不鏽鋼鍋與鑄鐵鍋的家庭。",
    "recommendation": "鍋具第 14 推薦：CookPower OG-42BK 在價格、評價、品牌通路與售後取得性之間表現均衡，適合納入同類比較。",
    "voltage": "無電壓需求；IH/電磁爐相容性依商品頁與鍋底標示",
    "warranty": "依 PChome 24h 與品牌/供應商頁面標示",
    "score": 81,
    "budget": "value",
    "tags": [
      "湯鍋",
      "透明鍋",
      "鍋具",
      "廚房",
      "台灣通路"
    ],
    "category": "cookware",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1415,
      "currency": "TWD",
      "converted": 1415,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DEAWGA-A900B4V1I",
      "sourceTitle": "PChome 商品頁：【CookPower鍋寶】微晶透明湯鍋(黑底) OG-42BK / 【CookPower鍋寶】微晶透明湯鍋(黑底) OG-42BK",
      "evidenceSnippet": "PChome 商品 API 於 2026-07-10 回傳同一商品頁「【CookPower鍋寶】微晶透明湯鍋(黑底) OG-42BK / 【CookPower鍋寶】微晶透明湯鍋(黑底) OG-42BK」查核價 NT$1,415，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-10",
      "note": "採用 PChome 24h 同一商品頁可公開查核現價作為本次觀測到的最低價；同型號/規格並排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"CookPower OG-42BK\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22CookPower%20OG-42BK%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"CookPower OG-42BK\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22CookPower%20OG-42BK%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"CookPower OG-42BK\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22CookPower%20OG-42BK%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"CookPower OG-42BK\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22CookPower%20OG-42BK%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"CookPower OG-42BK\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22CookPower%20OG-42BK%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-le-creuset-16cm",
    "rank": 15,
    "topPick": false,
    "brand": "Le Creuset",
    "model": "琺瑯鑄鐵圓鍋 16cm",
    "name": "Le Creuset 琺瑯鑄鐵圓鍋 16cm",
    "image": "https://cs-a.ecimg.tw/items/DEER19A900GPL2R/000001_1696456300.jpg",
    "price": {
      "currency": "TWD",
      "amount": 5125,
      "converted": 5125,
      "confidence": "PChome 2026-07-12 API 查核價"
    },
    "channel": "tw",
    "buyLabel": "PChome",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEER19-A900GPL2R",
    "specs": [
      "鍋具：LE CREUSET-典藏琺瑯鑄鐵鍋圓鍋16cm(醇酒紅-金頭-內鍋白)",
      "尺寸與材質依商品頁標示",
      "PChome 24h 可信通路低價",
      "排除福利品/配件/旋鈕"
    ],
    "description": "以台灣家庭常見瓦斯爐、IH 與日常煎炒煮燉需求篩選，優先保留品牌穩定、價格合理、容易補買或維修的鍋具。",
    "pros": [
      "品牌知名度與通路穩定",
      "涵蓋入門不沾到高階不鏽鋼/鑄鐵",
      "同類低價以可信通路查核"
    ],
    "cons": [
      "需確認自家爐具是否支援 IH",
      "不沾鍋需避免高溫空燒與金屬鏟",
      "鑄鐵/不鏽鋼款重量與保養門檻較高"
    ],
    "bestFor": "想一次比較日常不沾鍋、湯鍋、不鏽鋼鍋與鑄鐵鍋的家庭。",
    "recommendation": "鍋具第 15 推薦：Le Creuset 琺瑯鑄鐵圓鍋 16cm 在價格、評價、品牌通路與售後取得性之間表現均衡，適合納入同類比較。",
    "voltage": "無電壓需求；IH/電磁爐相容性依商品頁與鍋底標示",
    "warranty": "依 PChome 24h 與品牌/供應商頁面標示",
    "score": 80,
    "budget": "premium",
    "tags": [
      "鑄鐵鍋",
      "琺瑯",
      "鍋具",
      "廚房",
      "台灣通路"
    ],
    "category": "cookware",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 5125,
      "currency": "TWD",
      "converted": 5125,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DEER19-A900GPL2R",
      "sourceTitle": "PChome 商品頁：LE CREUSET-典藏琺瑯鑄鐵鍋圓鍋16cm(醇酒紅-金頭-內鍋白) / LE CREUSET-典藏琺瑯鑄鐵鍋圓鍋16cm(醇酒紅-金頭-內鍋白)",
      "evidenceSnippet": "PChome 商品 API 於 2026-07-10 回傳同一商品頁「LE CREUSET-典藏琺瑯鑄鐵鍋圓鍋16cm(醇酒紅-金頭-內鍋白) / LE CREUSET-典藏琺瑯鑄鐵鍋圓鍋16cm(醇酒紅-金頭-內鍋白)」查核價 NT$5,125，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-10",
      "note": "採用 PChome 24h 同一商品頁可公開查核現價作為本次觀測到的最低價；同型號/規格並排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Le Creuset 琺瑯鑄鐵圓鍋 16cm\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Le%20Creuset%20%E7%90%BA%E7%91%AF%E9%91%84%E9%90%B5%E5%9C%93%E9%8D%8B%2016cm%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Le Creuset 琺瑯鑄鐵圓鍋 16cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Le%20Creuset%20%E7%90%BA%E7%91%AF%E9%91%84%E9%90%B5%E5%9C%93%E9%8D%8B%2016cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Le Creuset 琺瑯鑄鐵圓鍋 16cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Le%20Creuset%20%E7%90%BA%E7%91%AF%E9%91%84%E9%90%B5%E5%9C%93%E9%8D%8B%2016cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Le Creuset 琺瑯鑄鐵圓鍋 16cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Le%20Creuset%20%E7%90%BA%E7%91%AF%E9%91%84%E9%90%B5%E5%9C%93%E9%8D%8B%2016cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Le Creuset 琺瑯鑄鐵圓鍋 16cm\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Le%20Creuset%20%E7%90%BA%E7%91%AF%E9%91%84%E9%90%B5%E5%9C%93%E9%8D%8B%2016cm%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-extra-16-deawmja900j9bir",
    "category": "cookware",
    "rank": 16,
    "budget": "value",
    "channel": "tw",
    "brand": "WMF",
    "model": "Belmonte 20cm",
    "name": "低身湯鍋 2.5L",
    "price": {
      "currency": "TWD",
      "amount": 2288,
      "converted": 2288,
      "confidence": "PChome 2026-07-16 API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DEAWMJA900J9BIR/000001_1758078020.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEAWMJ-A900J9BIR",
    "buyLabel": "PChome",
    "specs": [
      "20cm",
      "2.5L",
      "不鏽鋼",
      "湯鍋"
    ],
    "description": "WMF Belmonte 20cm 補進本分類比較池，重點是20cm、2.5L、不鏽鋼，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "尺寸適合小家庭",
      "WMF 售後與質感穩"
    ],
    "cons": [
      "不是大容量湯鍋",
      "單鍋價格高於國產款"
    ],
    "bestFor": "想補齊日常鍋具尺寸與材質，並比較不沾、不鏽鋼與琺瑯鍋的人。",
    "recommendation": "補充推薦：低身湯鍋 2.5L 的優勢在尺寸適合小家庭，但仍建議把不是大容量湯鍋納入取捨。",
    "score": 86,
    "voltage": "無需用電",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "不鏽鋼",
      "湯鍋",
      "小家庭"
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
      "note": "未找到 WMF Belmonte 低身湯鍋 20cm 2.5L 可公開驗證的可信新品史低；已排除高身湯鍋 20cm 3.3L，因容量與鍋型不同。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"WMF Belmonte 20cm\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22WMF%20Belmonte%2020cm%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"WMF Belmonte 20cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22WMF%20Belmonte%2020cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"WMF Belmonte 20cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22WMF%20Belmonte%2020cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"WMF Belmonte 20cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22WMF%20Belmonte%2020cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"WMF Belmonte 20cm\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22WMF%20Belmonte%2020cm%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-extra-17-deawmja900jmza5",
    "category": "cookware",
    "rank": 17,
    "budget": "mid",
    "channel": "tw",
    "brand": "WMF",
    "model": "Fusiontec Mineral 12.5cm",
    "name": "陶晶壺型鍋 1.7L",
    "price": {
      "currency": "TWD",
      "amount": 6630,
      "converted": 6630,
      "confidence": "PChome 2026-08-11 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DEAWMJA900JMZA5/000001_1768290148.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEAWMJ-A900JMZA5",
    "buyLabel": "PChome",
    "specs": [
      "12.5cm",
      "1.7L",
      "Fusiontec",
      "陶晶鍋"
    ],
    "description": "WMF Fusiontec Mineral 12.5cm 補進本分類比較池，重點是12.5cm、1.7L、Fusiontec，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "材質耐用且好清潔",
      "適合單人小鍋"
    ],
    "cons": [
      "容量偏小",
      "價格高於一般泡麵鍋"
    ],
    "bestFor": "想補齊日常鍋具尺寸與材質，並比較不沾、不鏽鋼與琺瑯鍋的人。",
    "recommendation": "補充推薦：陶晶壺型鍋 1.7L 的優勢在材質耐用且好清潔，但仍建議把容量偏小納入取捨。",
    "score": 85,
    "voltage": "無需用電",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "Fusiontec",
      "小鍋",
      "耐用"
    ],
    "releaseDate": "2021-10-30",
    "historicalLow": {
      "status": "found",
      "amount": 6240,
      "currency": "TWD",
      "converted": 6240,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DEAWMJ-A900JMZA5",
      "sourceTitle": "PChome 商品頁：WMF 德國製Fusiontec Mineral 壺型鍋 12.5cm 1.7L (鉑金色)陶晶鍋 單人鍋 泡麵鍋 / WMF 德國製Fusiontec Mineral 壺型鍋 12.5cm 1.7L (銅金色) 陶晶鍋 單人鍋 泡麵鍋",
      "evidenceSnippet": "PChome 商品 API 於 2026-07-10 回傳同一商品頁「WMF 德國製Fusiontec Mineral 壺型鍋 12.5cm 1.7L (鉑金色)陶晶鍋 單人鍋 泡麵鍋 / WMF 德國製Fusiontec Mineral 壺型鍋 12.5cm 1.7L (銅金色) 陶晶鍋 單人鍋 泡麵鍋」查核價 NT$6,240，低於原先記錄史低。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-10",
      "note": "採用 PChome 24h 同一商品頁可公開查核現價作為本次觀測到的最低價；同型號/規格並排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"WMF Fusiontec Mineral 12.5cm\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22WMF%20Fusiontec%20Mineral%2012.5cm%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"WMF Fusiontec Mineral 12.5cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22WMF%20Fusiontec%20Mineral%2012.5cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"WMF Fusiontec Mineral 12.5cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22WMF%20Fusiontec%20Mineral%2012.5cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"WMF Fusiontec Mineral 12.5cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22WMF%20Fusiontec%20Mineral%2012.5cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"WMF Fusiontec Mineral 12.5cm\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22WMF%20Fusiontec%20Mineral%2012.5cm%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-extra-18-deawtga900fchlz",
    "category": "cookware",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "brand": "Le Creuset",
    "model": "TNS 雙耳醬汁鍋 28cm",
    "name": "TNS 雙耳醬汁鍋 28cm",
    "price": {
      "currency": "TWD",
      "amount": 6850,
      "converted": 6850,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DEAWTGA900FCHLZ/000001_1745980849.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEAWTG-A900FCHLZ",
    "buyLabel": "PChome",
    "specs": [
      "28cm",
      "不沾鍋",
      "雙耳",
      "附蓋"
    ],
    "description": "Le Creuset TNS 雙耳醬汁鍋 28cm 補進本分類比較池，重點是 28cm、不沾鍋、雙耳與附蓋，和單柄煎鍋是不同鍋型。",
    "pros": [
      "不沾塗層與設計感佳",
      "適合煎炒燉混用"
    ],
    "cons": [
      "價格高",
      "塗層鍋仍需溫柔使用"
    ],
    "bestFor": "想補齊日常鍋具尺寸與材質，並比較不沾、不鏽鋼與琺瑯鍋的人。",
    "recommendation": "補充推薦：TNS 雙耳醬汁鍋 28cm 的優勢在雙耳附蓋與不沾塗層，但價格高，適合需要煎煮燉混用的人。",
    "score": 84,
    "voltage": "無需用電",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "不沾",
      "設計",
      "中大尺寸"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Le Creuset TNS 雙耳醬汁鍋 28cm: PCHome購物 LE CREUSET -TNS 雙耳湯鍋/醬汁鍋 28cm (附蓋) 最低價 NT$3,840 低於現價合理比例，疑似月付/配件/錯類；LBJ Le Creuset TNS 雙耳醬汁鍋 28cm: 露天拍賣 - 宅配滿$490免運｜ PC24h購物 露天旗艦店 (71076個評價) 【PChome 24h購物】LE CREUSET-不沾鍋系列-TNS 雙耳醬汁鍋 (附蓋) 28cm R99N 非採用通路或含排除條件；BigGo DEAWTG-A900FCHLZ: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DEAWTG-A900FCHLZ/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Le Creuset TNS 雙耳醬汁鍋 28cm\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Le%20Creuset%20TNS%20%E9%9B%99%E8%80%B3%E9%86%AC%E6%B1%81%E9%8D%8B%2028cm%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Le Creuset TNS 雙耳醬汁鍋 28cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Le%20Creuset%20TNS%20%E9%9B%99%E8%80%B3%E9%86%AC%E6%B1%81%E9%8D%8B%2028cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Le Creuset TNS 雙耳醬汁鍋 28cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Le%20Creuset%20TNS%20%E9%9B%99%E8%80%B3%E9%86%AC%E6%B1%81%E9%8D%8B%2028cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Le Creuset TNS 雙耳醬汁鍋 28cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Le%20Creuset%20TNS%20%E9%9B%99%E8%80%B3%E9%86%AC%E6%B1%81%E9%8D%8B%2028cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Le Creuset TNS 雙耳醬汁鍋 28cm\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Le%20Creuset%20TNS%20%E9%9B%99%E8%80%B3%E9%86%AC%E6%B1%81%E9%8D%8B%2028cm%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-extra-19-dees01a900iq6x3",
    "category": "cookware",
    "rank": 19,
    "budget": "value",
    "channel": "tw",
    "brand": "Tefal",
    "model": "Espresso 34cm",
    "name": "醇火系列不沾炒鍋",
    "price": {
      "currency": "TWD",
      "amount": 1519,
      "converted": 1519,
      "confidence": "PChome 2026-08-13 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DEES01A900IQ6X3/000001_1764832269.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEES01-A900IQ6X3",
    "buyLabel": "PChome",
    "specs": [
      "34cm",
      "不沾炒鍋",
      "玻璃蓋",
      "大尺寸"
    ],
    "description": "Tefal Espresso 34cm 補進本分類比較池，重點是34cm、不沾炒鍋、玻璃蓋，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "價格實惠",
      "34cm 適合家庭快炒"
    ],
    "cons": [
      "大鍋收納較占空間",
      "塗層壽命看使用方式"
    ],
    "bestFor": "想補齊日常鍋具尺寸與材質，並比較不沾、不鏽鋼與琺瑯鍋的人。",
    "recommendation": "補充推薦：醇火系列不沾炒鍋 的優勢在價格實惠，但仍建議把大鍋收納較占空間納入取捨。",
    "score": 83,
    "voltage": "無需用電",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "不沾",
      "炒鍋",
      "CP 值"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1259,
      "currency": "TWD",
      "converted": 1259,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DEES01-A900IQ6X3",
      "sourceTitle": "PChome 24h 購物：Tefal法國特福 Espresso醇火系列34CM不沾炒鍋(加蓋)",
      "evidenceSnippet": "PChome 24h 購物於 2026-07-29 顯示同型號可信新品公開價 NT$1,259，低於既有史低 NT$1,260。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-07-29",
      "note": "採用 PChome 24h 購物當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Tefal Espresso 34cm\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Tefal%20Espresso%2034cm%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Tefal Espresso 34cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Tefal%20Espresso%2034cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Tefal Espresso 34cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Tefal%20Espresso%2034cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Tefal Espresso 34cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Tefal%20Espresso%2034cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Tefal Espresso 34cm\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Tefal%20Espresso%2034cm%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-extra-20-deawmla900jsti6",
    "category": "cookware",
    "rank": 20,
    "budget": "value",
    "channel": "tw",
    "brand": "Fissler",
    "model": "Cianmic",
    "name": "瓷安系列不沾單柄牛奶鍋",
    "price": {
      "currency": "TWD",
      "amount": 1946,
      "converted": 1946,
      "confidence": "PChome 2026-08-11 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DEAWMLA900JSTI6/000001_1773108785.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEAWML-A900JSTI6",
    "buyLabel": "PChome",
    "specs": [
      "不沾塗層",
      "單柄",
      "牛奶鍋",
      "小鍋"
    ],
    "description": "Fissler Cianmic 補進本分類比較池，重點是不沾塗層、單柄、牛奶鍋，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "適合少量加熱與副食品",
      "Fissler 品牌質感佳"
    ],
    "cons": [
      "容量偏小",
      "單柄鍋不適合大份量"
    ],
    "bestFor": "想補齊日常鍋具尺寸與材質，並比較不沾、不鏽鋼與琺瑯鍋的人。",
    "recommendation": "補充推薦：瓷安系列不沾單柄牛奶鍋 的優勢在適合少量加熱與副食品，但仍建議把容量偏小納入取捨。",
    "score": 82,
    "voltage": "無需用電",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "小鍋",
      "不沾",
      "德系"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Fissler Cianmic: 露天拍賣 - 宅配滿$490免運｜ PC24h購物 露天旗艦店 (71076個評價) 【PChome 24h購物】Fissler 瓷安系列 Cianmic 不沾單柄牛奶鍋-柔桃色 型號/規格不相符；LBJ Fissler Cianmic: 露天拍賣 - 宅配滿$490免運｜ PC24h購物 露天旗艦店 (71076個評價) 【PChome 24h購物】Fissler 瓷安系列 Cianmic 28cm不沾單柄炒鍋(含蓋)-柔桃色 型號/規格不相符；BigGo DEAWML-A900JSTI6: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DEAWML-A900JSTI6/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Fissler Cianmic\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Fissler%20Cianmic%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Fissler Cianmic\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Fissler%20Cianmic%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Fissler Cianmic\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Fissler%20Cianmic%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Fissler Cianmic\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Fissler%20Cianmic%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Fissler Cianmic\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Fissler%20Cianmic%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-costco-tetsu-30cm",
    "category": "cookware",
    "rank": 21,
    "budget": "value",
    "channel": "tw",
    "brand": "TETSU",
    "model": "Nitriding Iron Wok 30 cm",
    "name": "窒化鐵製炒鍋 30公分",
    "price": {
      "currency": "TWD",
      "amount": 2289,
      "converted": 2289,
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h44/hef/114625982267422.jpg",
    "buyUrl": "https://www.costco.com.tw/Furniture-Kitchen/Kitchen-Dining/Cookware-Cutlery-Cutting-Boards/TETSU-Nitriding-Iron-Wok-30-cm/p/136446",
    "buyLabel": "Costco 好市多",
    "specs": [
      "30 公分炒鍋",
      "窒化鐵",
      "非配件/非鍋蓋",
      "Costco 評價 4.3 / 369 則"
    ],
    "description": "TETSU 窒化鐵炒鍋在 Costco 評論數高，適合想從不沾鍋轉向鐵鍋的人。",
    "pros": [
      "369 則評論，評價基礎厚",
      "鐵鍋耐用度與火力適應性佳"
    ],
    "cons": [
      "需要開鍋、養鍋與清潔習慣",
      "重量與保養門檻高於不沾鍋"
    ],
    "bestFor": "常開火、願意養鍋並想買 Costco 評價款炒鍋的人。",
    "recommendation": "好市多補充推薦：TETSU 30cm 是 Costco 鍋具中評論數高的實用炒鍋候選。",
    "score": 84,
    "voltage": "鍋具無電壓需求",
    "warranty": "依 Costco 好市多商品頁、品牌保固與退貨政策",
    "tags": [
      "Costco",
      "炒鍋",
      "鐵鍋"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1699,
      "currency": "TWD",
      "converted": 1699,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1182094537&cgp=2289",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Costco好市多】TETSU 窒化鐵製炒鍋 30公分 TETSU Nitriding Iron Wok 30 cm",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Costco好市多 / 【Costco好市多】TETSU 窒化鐵製炒鍋 30公分 TETSU Nitriding Iron Wok 30 cm」最低價為 NT$1,699，最低點日期 2023-10-23。",
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
          "query": "site:reddit.com \"TETSU Nitriding Iron Wok 30 cm\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22TETSU%20Nitriding%20Iron%20Wok%2030%20cm%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"TETSU Nitriding Iron Wok 30 cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22TETSU%20Nitriding%20Iron%20Wok%2030%20cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"TETSU Nitriding Iron Wok 30 cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22TETSU%20Nitriding%20Iron%20Wok%2030%20cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"TETSU Nitriding Iron Wok 30 cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22TETSU%20Nitriding%20Iron%20Wok%2030%20cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"TETSU Nitriding Iron Wok 30 cm\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22TETSU%20Nitriding%20Iron%20Wok%2030%20cm%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-costco-circulon-a1-26cm",
    "category": "cookware",
    "rank": 22,
    "budget": "value",
    "channel": "tw",
    "brand": "Circulon",
    "model": "A1 Saute Pan 26cm",
    "name": "A1 極致抗刮不沾單柄深煎鍋 26 公分",
    "price": {
      "currency": "TWD",
      "amount": 2159,
      "converted": 2159,
      "confidence": "Costco 好市多 2026-07-20 頁面公開價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h82/h10/325943411802142.jpg",
    "buyUrl": "https://www.costco.com.tw/Furniture-Kitchen/Kitchen-Dining/Cookware-Cutlery-Cutting-Boards/Circulon-A1-Non-Stick-Saute-Pan-With-Glass-Lid-26-cm/p/151585",
    "buyLabel": "Costco 好市多",
    "specs": [
      "26 公分深煎鍋",
      "約 4.35 公升",
      "含玻璃上蓋",
      "適用多種爐具",
      "Costco 評價 5 / 32 則"
    ],
    "description": "Costco 評價不錯的鍋具候選，排除配件與耗材，只補正常新品鍋具。",
    "pros": [
      "用途明確",
      "價格與評價具參考性"
    ],
    "cons": [
      "不沾塗層需按說明保養",
      "爐具相容性需確認"
    ],
    "bestFor": "想從好市多補鍋具並重視實用性的人",
    "recommendation": "好市多補充推薦：A1 極致抗刮不沾單柄深煎鍋 26 公分 評價不錯，補進鍋具分類作為 Costco 候選比較。",
    "score": 87,
    "voltage": "不適用；需確認瓦斯爐、電陶爐、IH 等爐具相容性",
    "warranty": "依 Costco 好市多商品頁與品牌保固標示",
    "tags": [
      "Costco",
      "好市多",
      "不沾鍋",
      "26cm",
      "深煎鍋"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2159,
      "currency": "TWD",
      "converted": 2159,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1242269443&cgp=2699",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Costco好市多】Circulon A1 極致抗刮不沾單柄深煎鍋 含玻璃上蓋 26公分 Circulon A1 Non-Stick Saute Pan With Glass Lid 26 cm",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Costco好市多 / 【Costco好市多】Circulon A1 極致抗刮不沾單柄深煎鍋 含玻璃上蓋 26公分 Circulon A1 Non-Stick Saute Pan With Glass Lid 26 cm」最低價為 NT$2,159，最低點日期 2025-11-05。",
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
          "query": "site:reddit.com \"Circulon A1 Saute Pan 26cm\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Circulon%20A1%20Saute%20Pan%2026cm%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Circulon A1 Saute Pan 26cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Circulon%20A1%20Saute%20Pan%2026cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Circulon A1 Saute Pan 26cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Circulon%20A1%20Saute%20Pan%2026cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Circulon A1 Saute Pan 26cm\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Circulon%20A1%20Saute%20Pan%2026cm%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Circulon A1 Saute Pan 26cm\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Circulon%20A1%20Saute%20Pan%2026cm%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-costco-tefal-ingenio-6pc",
    "category": "cookware",
    "rank": 23,
    "budget": "mid",
    "channel": "tw",
    "brand": "Tefal",
    "model": "Ingenio 6-Piece Set",
    "name": "巧變精靈系列鍋具含蓋 6 件組",
    "price": {
      "currency": "TWD",
      "amount": 3999,
      "converted": 3999,
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h61/h4b/367883333861406.jpg",
    "buyUrl": "https://www.costco.com.tw/Furniture-Kitchen/Kitchen-Dining/Cookware-Cutlery-Cutting-Boards/Tefal-Ingenio-Non-Stick-Cookware-with-Lid-6-Piece-Set-Milk-Tea-Pink/p/141472",
    "buyLabel": "Costco 好市多",
    "specs": [
      "28cm 平底鍋",
      "26cm 炒鍋",
      "18cm 湯鍋",
      "可拆式把手",
      "Costco 評價 5 / 6 則"
    ],
    "description": "Costco 評價不錯的鍋具候選，排除配件與耗材，只補正常新品鍋具。",
    "pros": [
      "用途明確",
      "價格與評價具參考性"
    ],
    "cons": [
      "不沾塗層需按說明保養",
      "爐具相容性需確認"
    ],
    "bestFor": "想從好市多補鍋具並重視實用性的人",
    "recommendation": "好市多補充推薦：巧變精靈系列鍋具含蓋 6 件組 評價不錯，補進鍋具分類作為 Costco 候選比較。",
    "score": 84,
    "voltage": "不適用；適用爐具需依 Costco 商品頁標示確認",
    "warranty": "依 Costco 好市多商品頁與品牌保固標示",
    "tags": [
      "Costco",
      "好市多",
      "鍋具組",
      "可拆把手",
      "不沾"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Tefal Ingenio 6-Piece Set: Costco好市多 【Costco好市多】Tefal 法國特福 巧變精靈系列鍋具 含蓋6件組 奶茶粉 Tefal Ingenio Non-Stick Cookware with Lid 6-Piece Set Milk Tea Pink 型號/規格不相符；LBJ Tefal Ingenio 6-Piece Set: Costco好市多 【Costco好市多】Tefal 法國特福 巧變精靈系列鍋具 6件組 Tefal Ingenio Non-Stick Cookware 6-Piece Set 型號/規格不相符；LBJ Ingenio 6-Piece Set: Costco好市多 【Costco好市多】Tefal 法國特福 巧變精靈系列鍋具 6件組 Tefal Ingenio Non-Stick Cookware 6-Piece Set 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Tefal Ingenio 6-Piece Set\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Tefal%20Ingenio%206-Piece%20Set%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Tefal Ingenio 6-Piece Set\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Tefal%20Ingenio%206-Piece%20Set%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Tefal Ingenio 6-Piece Set\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Tefal%20Ingenio%206-Piece%20Set%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Tefal Ingenio 6-Piece Set\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Tefal%20Ingenio%206-Piece%20Set%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Tefal Ingenio 6-Piece Set\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Tefal%20Ingenio%206-Piece%20Set%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-zwilling-unlock-1034435",
    "category": "cookware",
    "rank": 24,
    "topPick": false,
    "budget": "mid",
    "channel": "tw",
    "brand": "ZWILLING",
    "model": "UNLOCK 1034435",
    "name": "UNLOCK 可拆式不鏽鋼湯鍋 5 件組",
    "price": {
      "currency": "TWD",
      "amount": 4399,
      "converted": 4399,
      "confidence": "ZWILLING 台灣官方 2026-07-17 商品頁公開現貨價"
    },
    "image": "https://cdn-general.cybassets.com/media/W1siZiIsIjI5NjAzL3Byb2R1Y3RzLzY2NzY4OTM5LzE3NzQyNDc2OTVfYzA5NWI2ZTE5OTlkMDRiOGI3ZTAuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=9fa2e8a058d23cc1",
    "buyUrl": "https://www.zwilling.com.tw/products/1034435",
    "buyLabel": "ZWILLING 台灣官方",
    "specs": [
      "16cm / 1.5L 與 20cm / 3L 湯鍋",
      "5 件組：兩只湯鍋、可拆手柄與玻璃鍋蓋",
      "歐規 18/10 不鏽鋼；鋼鋁鋼三層結構",
      "可堆疊收納；全爐具含電磁爐適用",
      "整組重量 2.683kg；中國製"
    ],
    "description": "ZWILLING 7 月新品把 16cm、20cm 兩種湯鍋做成可堆疊、共用可拆手柄的 5 件組，適合小宅或露營收納；18/10 不鏽鋼三層鍋身可用於各式爐具。",
    "pros": [
      "可拆手柄與堆疊設計節省空間",
      "兩種容量兼顧小份與家庭料理",
      "全爐具含電磁爐適用"
    ],
    "cons": [
      "兩只鍋共享手柄，連續料理需調度",
      "使用前必須確認手柄完全鎖定",
      "不鏽鋼鍋不是不沾鍋，需掌握預熱與油量"
    ],
    "bestFor": "小宅、露營或收納空間有限，想用兩種尺寸共用可拆手柄的人。",
    "recommendation": "台灣新品推薦：官方現貨、尺寸與材質證據完整，可拆堆疊有明確差異化；但共享手柄與不鏽鋼烹調習慣要先評估。",
    "score": 86,
    "voltage": "不適用（非電器；全爐具含電磁爐適用）",
    "warranty": "依 ZWILLING 台灣官方保固政策與商品頁標示",
    "tags": [
      "新品",
      "可拆手柄",
      "可堆疊",
      "18/10不鏽鋼",
      "電磁爐"
    ],
    "releaseDate": "2026-07-17",
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
      "checkedAt": "2026-07-17",
      "note": "UNLOCK 1034435 於 2026-07-17 新上市；只找到台灣官方上市現價 NT$4,399 與刪除牌價 NT$6,880，未找到可公開驗證的可信新品歷史最低價。上市促銷現價不得直接推定為史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"ZWILLING UNLOCK 1034435\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22ZWILLING%20UNLOCK%201034435%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"ZWILLING UNLOCK 1034435\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22ZWILLING%20UNLOCK%201034435%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"ZWILLING UNLOCK 1034435\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22ZWILLING%20UNLOCK%201034435%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"ZWILLING UNLOCK 1034435\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22ZWILLING%20UNLOCK%201034435%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"ZWILLING UNLOCK 1034435\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22ZWILLING%20UNLOCK%201034435%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-ballarini-ledro-1027801",
    "category": "cookware",
    "rank": 25,
    "topPick": false,
    "budget": "mid",
    "channel": "tw",
    "brand": "BALLARINI",
    "model": "LEDRO 1027801",
    "name": "LEDRO 義大利製陶瓷不沾炒鍋 28cm",
    "price": {
      "currency": "TWD",
      "amount": 3680,
      "converted": 3680,
      "confidence": "ZWILLING 台灣官方 2026-07-24 exact-SKU 公開現貨價"
    },
    "image": "https://cdn-general.cybassets.com/media/W1siZiIsIjI5NjAzL3Byb2R1Y3RzLzY3NjAyNjc1LzE3Nzk2OTE2NDdfYzA4M2RlYzExYmIzMDgzNmVkOTMuanBlZyJdLFsicCIsInRodW1iIiwiMTAyNHgxMDI0Il1d.jpeg?sha=cdda42555954fd10",
    "buyUrl": "https://www.zwilling.com.tw/products/1027801",
    "buyLabel": "ZWILLING 台灣官方",
    "specs": [
      "直徑 28cm（不含把手）",
      "鋁合金鍋身、CERAFORCE 陶瓷不沾塗層",
      "鍋身採 100% 再生鋁材；手柄含 37% 生物基材質",
      "不含 PFAS 與重金屬",
      "Thermopoint 紅綠聰明感溫點",
      "瓦斯爐、電磁爐等爐具適用",
      "重量 1.28kg；義大利製；環保吊卡包裝無外盒"
    ],
    "description": "BALLARINI 2026 年 7 月 LEDRO 新品以義大利製、再生鋁鍋身、無 PFAS 陶瓷塗層與 Thermopoint 感溫點，補上現有鍋具中偏永續材質的 28cm 電磁爐炒鍋。",
    "pros": [
      "28cm 炒鍋用途廣，瓦斯爐與電磁爐皆可使用",
      "100% 再生鋁鍋身與不含 PFAS、重金屬的陶瓷塗層有明確差異",
      "Thermopoint 感溫點可協助掌握預熱與降溫時機"
    ],
    "cons": [
      "陶瓷不沾塗層仍需避免空燒、金屬鍋鏟與高溫急冷",
      "1.28kg 且為長柄 28cm 炒鍋，單手翻炒負擔高於輕量款",
      "官方非電器類商品目前不提供保固"
    ],
    "bestFor": "想找義大利製、電磁爐可用、重視無 PFAS 陶瓷塗層與再生材質的家庭。",
    "recommendation": "永續陶瓷不沾補強：LEDRO 1027801 的 28cm 尺寸、義大利產地、材質、爐具相容與官方現貨均可核對；適合和現有不沾鍋比較塗層照護與價格。",
    "score": 87,
    "voltage": "不適用（非電器；瓦斯爐、電磁爐等爐具適用）",
    "warranty": "非電器類商品目前無保固；產品問題可聯繫台灣雙人客服（依 ZWILLING 台灣官方政策）",
    "tags": [
      "新品",
      "28cm炒鍋",
      "陶瓷不沾",
      "無PFAS",
      "再生鋁",
      "電磁爐"
    ],
    "releaseDate": "2026-07",
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
      "checkedAt": "2026-07-24",
      "note": "LEDRO 1027801 為 2026 年 7 月新品；已查 ZWILLING 台灣官方、BigGo、FindPrice、LBJ 與 exact-SKU 搜尋，僅找到官方定價與當期組合促銷，未找到可公開重現的同 SKU／同尺寸可信新品歷史最低價。未把未落入商品欄位的組合折扣自行換算成史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"BALLARINI LEDRO 1027801\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22BALLARINI%20LEDRO%201027801%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"BALLARINI LEDRO 1027801\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22BALLARINI%20LEDRO%201027801%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"BALLARINI LEDRO 1027801\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22BALLARINI%20LEDRO%201027801%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"BALLARINI LEDRO 1027801\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22BALLARINI%20LEDRO%201027801%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"BALLARINI LEDRO 1027801\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22BALLARINI%20LEDRO%201027801%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-ikea-hemkomst-60580100",
    "category": "cookware",
    "rank": 26,
    "topPick": false,
    "budget": "value",
    "channel": "tw",
    "brand": "IKEA",
    "model": "HEMKOMST 605.801.00",
    "name": "HEMKOMST 陶瓷不沾平底煎鍋 28cm",
    "price": {
      "currency": "TWD",
      "amount": 899,
      "converted": 899,
      "confidence": "IKEA 台灣官方 2026-07-30 exact-article 公開價；線上庫存 20"
    },
    "image": "https://www.ikea.com.tw/dairyfarm/tw/images/573/1257342_PE925736_S4.jpg",
    "buyUrl": "https://www.ikea.com.tw/zh/products/cookware/pans/hemkomst-art-60580100",
    "buyLabel": "IKEA 台灣官方",
    "specs": [
      "尺寸：高 5 x 直徑 28 cm；含把手長 48 cm",
      "淨重 1.12 kg",
      "鍋身：不鏽鋼、鋁質、Sol-gel 陶瓷不沾塗層；把手：不鏽鋼",
      "不沾塗層未使用 PTFE 或其他 PFAS",
      "瓦斯爐、電磁爐、電陶爐、鑄鐵爐與烤箱適用",
      "只能手洗"
    ],
    "description": "28cm 三層金屬鍋身搭配 Sol-gel 陶瓷不沾塗層，以 NT$899 補入 IKEA 平價官方通路選擇；適用電磁爐及烤箱。",
    "pros": [
      "官方台灣通路價格低且線上有貨",
      "不鏽鋼夾鋁有助快速均勻傳熱",
      "不含 PTFE／PFAS，且支援多種爐具與烤箱"
    ],
    "cons": [
      "只能手洗，陶瓷不沾層仍需避免尖銳金屬器具、空鍋急熱與高溫急冷",
      "官方 exact page 未標示保固；IKEA 15 年鍋具保固只涵蓋無不沾塗層鍋具",
      "官方資料顯示 2025-04-01 已開始販售，不是本輪新上市品"
    ],
    "bestFor": "想用千元內預算購買 28cm、電磁爐與烤箱皆可用、無 PTFE／PFAS 陶瓷不沾鍋的家庭。",
    "recommendation": "平價官方通路補充選擇；材質、尺寸與爐具相容性完整，但需接受手洗、不沾層耗損與無明示長期保固。",
    "score": 86,
    "voltage": "不適用（非電器；適用瓦斯爐、電磁爐、電陶爐、鑄鐵爐與烤箱）",
    "warranty": "官方 exact-model 商品頁未標示；IKEA 15 年鍋具保固不涵蓋有不沾塗層的本款",
    "tags": [
      "28cm平底鍋",
      "陶瓷不沾",
      "無PTFE/PFAS",
      "電磁爐",
      "烤箱適用",
      "IKEA官方"
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
      "checkedAt": "2026-07-30",
      "note": "已查 IKEA 台灣官方 exact-article 頁、BigGo、FindPrice 與 LBJ；只取得現價或上架後快照，未找到同 article number 可公開重現的可信新品歷史最低價與最低點日期，現價不得推定為史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"IKEA HEMKOMST 605.801.00\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22IKEA%20HEMKOMST%20605.801.00%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"IKEA HEMKOMST 605.801.00\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22IKEA%20HEMKOMST%20605.801.00%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"IKEA HEMKOMST 605.801.00\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22IKEA%20HEMKOMST%20605.801.00%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"IKEA HEMKOMST 605.801.00\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22IKEA%20HEMKOMST%20605.801.00%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"IKEA HEMKOMST 605.801.00\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22IKEA%20HEMKOMST%20605.801.00%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "cookware-rinnai-rbo-mn22-wh",
    "category": "cookware",
    "rank": 27,
    "topPick": false,
    "budget": "value",
    "channel": "tw",
    "brand": "Rinnai",
    "model": "RBO-MN22(WH)",
    "name": "22cm 無水調理鍋",
    "price": {
      "currency": "TWD",
      "amount": 7900,
      "converted": 7900,
      "confidence": "台灣林內官方 exact-model 頁公開建議售價 NT$7,900",
      "basis": "official_suggested"
    },
    "image": "https://www.rinnai.com.tw/storage/product/1673338909_RBO-MN22_WH_.png",
    "buyUrl": "https://www.rinnai.com.tw/Product/V3/378",
    "buyLabel": "台灣林內官方資料（建議售價）",
    "installation": {
      "status": "not_stated",
      "note": "鍋具不需到府安裝；官方頁未提供安裝服務，首次使用與清潔保養應依說明書。"
    },
    "specs": [
      "22cm、容量 3.4L；本體直徑 22cm",
      "尺寸：寬 28.7 x 深 10 x 高 12.6 cm；重量 1.7kg",
      "鑄鋁鍋體、陶瓷不沾塗層",
      "適用瓦斯爐、電陶爐與烤箱；不適用 IH",
      "隨附蒸架與食譜"
    ],
    "description": "Rinnai RBO-MN22(WH) 是 3.4L 無水調理鍋，可在瓦斯、電陶爐與烤箱間使用，但不支援 IH。",
    "pros": [
      "1.7kg 比鑄鐵鍋輕，仍可做無水與燉煮料理",
      "官方明列容量、尺寸、材質及適用熱源",
      "含蒸架與食譜，料理用途多"
    ],
    "cons": [
      "不支援 IH 電磁爐",
      "陶瓷塗層需避免金屬器具與急冷急熱",
      "官方頁是建議售價，實際成交價需另向經銷商確認"
    ],
    "bestFor": "使用瓦斯或電陶爐、想要較輕的無水調理鍋，且不需要 IH 相容性的人。",
    "recommendation": "Rinnai 日系鍋具補強：不可把官方建議售價當通路現價；最大選購邊界是本款不支援 IH。",
    "score": 84,
    "voltage": "非電器；不適用 IH 電磁爐",
    "warranty": "依台灣林內官方鍋具保固與使用條款",
    "tags": [
      "22cm",
      "3.4L",
      "無水調理",
      "鑄鋁",
      "不適用IH"
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
      "note": "官方只能驗證建議售價 NT$7,900；已查 exact-model 新品價格，未找到具日期且可重現的可信通路史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-18",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Rinnai RBO-MN22(WH)\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Rinnai%20RBO-MN22(WH)%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Rinnai RBO-MN22(WH)\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Rinnai%20RBO-MN22(WH)%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Rinnai RBO-MN22(WH)\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Rinnai%20RBO-MN22(WH)%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Rinnai RBO-MN22(WH)\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Rinnai%20RBO-MN22(WH)%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Rinnai RBO-MN22(WH)\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Rinnai%20RBO-MN22(WH)%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  }
]);
})();

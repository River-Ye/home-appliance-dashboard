(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("dehumidifier", [
  {
    "id": "dh-panasonic-yv32nn",
    "category": "dehumidifier",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-YV32NN",
    "name": "16 公升高效型變頻除濕機",
    "price": {
      "currency": "TWD",
      "amount": 14872,
      "converted": 14872,
      "confidence": "PChome 2026-09-01 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ3PA900J0L88/000001_1776323540.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ3P-A900J0L88",
    "buyLabel": "PChome",
    "specs": [
      "16L 級",
      "變頻",
      "高效除濕",
      "連續排水"
    ],
    "description": "台灣潮濕環境常見安心牌，除濕效率、耗電與售後都平衡。",
    "pros": [
      "變頻節能",
      "品牌維修方便"
    ],
    "cons": [
      "無清淨複合功能",
      "價格高於基本款"
    ],
    "bestFor": "客廳、主臥與日常長時間除濕。",
    "recommendation": "綜合推薦：Panasonic 容量、能效、台灣售後與價格最均衡；除濕機長期穩定比最低價更重要。",
    "score": 92,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "變頻",
      "節能",
      "主力款"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 13520,
      "currency": "TWD",
      "converted": 13520,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1252306013&cgp=13858",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Panasonic國際牌 16L nanoe清淨二合一雙變頻微電腦除濕機 F-YV32NN",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / Panasonic國際牌 16L nanoe清淨二合一雙變頻微電腦除濕機 F-YV32NN」最低價為 NT$13,520，最低點日期 2026-02-13。",
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
          "query": "site:reddit.com \"Panasonic F-YV32NN\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20F-YV32NN%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic F-YV32NN\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20F-YV32NN%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Panasonic F-YV32NN\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Panasonic%20F-YV32NN%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Panasonic F-YV32NN\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Panasonic%20F-YV32NN%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Panasonic F-YV32NN\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Panasonic%20F-YV32NN%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dh-lg-de221",
    "category": "dehumidifier",
    "rank": 2,
    "budget": "premium",
    "channel": "tw",
    "brand": "LG",
    "model": "DE221MWE0",
    "name": "22 公升 PuriCare 雙變頻除濕機",
    "price": {
      "currency": "TWD",
      "amount": 19999,
      "converted": 19999,
      "confidence": "PChome 2026-08-13 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ4NA900JMY77/000001_1783337653.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ4N-A900JMY77",
    "buyLabel": "PChome",
    "specs": [
      "22L 級",
      "雙變頻",
      "一級能效",
      "PuriCare"
    ],
    "description": "大坪數與高濕環境更合適，外型與智慧功能也比傳統除濕機漂亮。",
    "pros": [
      "除濕量大",
      "能效與外型佳"
    ],
    "cons": [
      "價格高",
      "機身較大"
    ],
    "bestFor": "大坪數客廳、連續高濕環境。",
    "recommendation": "坪數較大或常曬衣，LG 大容量款會更從容。",
    "score": 91,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "大容量",
      "變頻",
      "智慧"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 19999,
      "currency": "TWD",
      "converted": 19999,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMBQ4N-A900JMY77",
      "sourceTitle": "PChome 24h 購物：LG 樂金 22公升 一級能效 PuriCare™ 雙變頻除濕機 DE221MWE0",
      "evidenceSnippet": "PChome 24h 購物於 2026-08-13 顯示同型號可信新品公開價 NT$19,999，低於既有史低 NT$20,900。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-08-13",
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
          "query": "site:reddit.com \"LG DE221MWE0\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20DE221MWE0%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG DE221MWE0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20DE221MWE0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG DE221MWE0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%20DE221MWE0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG DE221MWE0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%20DE221MWE0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG DE221MWE0\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%20DE221MWE0%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dh-mitsubishi-ehv220",
    "category": "dehumidifier",
    "rank": 3,
    "budget": "premium",
    "channel": "tw",
    "brand": "Mitsubishi Electric",
    "model": "MJ-EHV220KX-TW",
    "name": "22.5L 日製變頻空氣清淨除濕機",
    "price": {
      "currency": "TWD",
      "amount": 27810,
      "converted": 27810,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ3FA900JUOT6/000001_1774490302.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ3F-A900JUOT6",
    "buyLabel": "PChome",
    "specs": [
      "22.5L 級",
      "日製",
      "HEPA 清淨",
      "變頻"
    ],
    "description": "兼具清淨與除濕，價格高但用料與口碑強。",
    "pros": [
      "日製質感",
      "清淨除濕二合一"
    ],
    "cons": [
      "價格最高",
      "濾網耗材需納入成本"
    ],
    "bestFor": "預算充足、希望一機兼顧清淨與除濕。",
    "recommendation": "旗艦推薦：高濕又有過敏需求時可以一次解決。",
    "score": 90,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "日製",
      "清淨",
      "旗艦"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 26116,
      "currency": "TWD",
      "converted": 26116,
      "sourceUrl": "https://tw.buy.yahoo.com/gdsale/MITSUBISHI%E4%B8%89%E8%8F%B1-22L%E8%AE%8A%E9%A0%BB%E7%A9%BA%E6%B0%A3%E6%B8%85%E6%B7%A8%E9%99%A4%E6%BF%95%E6%A9%9F-MJ-EHV220KX-TW-11926713.html",
      "sourceTitle": "Yahoo購物中心 商品頁：MITSUBISHI三菱 22L變頻空氣清淨除濕機 MJ-EHV220KX-TW | 14.1L以上 | Yahoo購物中心",
      "evidenceSnippet": "Yahoo購物中心 原始商品頁／API 於 2026-07-11 顯示同型號新品公開價 26116 TWD，低於既有可驗證史低。",
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
          "query": "site:reddit.com \"Mitsubishi Electric MJ-EHV220KX-TW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Mitsubishi%20Electric%20MJ-EHV220KX-TW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Mitsubishi Electric MJ-EHV220KX-TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Mitsubishi%20Electric%20MJ-EHV220KX-TW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Mitsubishi Electric MJ-EHV220KX-TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Mitsubishi%20Electric%20MJ-EHV220KX-TW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Mitsubishi Electric MJ-EHV220KX-TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Mitsubishi%20Electric%20MJ-EHV220KX-TW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Mitsubishi Electric MJ-EHV220KX-TW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Mitsubishi%20Electric%20MJ-EHV220KX-TW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dh-lg-dd201",
    "category": "dehumidifier",
    "rank": 4,
    "budget": "mid",
    "channel": "tw",
    "brand": "LG",
    "model": "DD201MEE0",
    "name": "19.6 公升 PuriCare 雙變頻除濕機",
    "price": {
      "currency": "TWD",
      "amount": 19499,
      "converted": 19499,
      "confidence": "Yahoo購物中心 2026-08-28 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ4OA900JX7GH/000001_1783563034.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/LG%E6%A8%82%E9%87%91-DD201MEE0-19-6%E5%85%AC%E5%8D%87-PuriCare-%E9%9B%99%E8%AE%8A%E9%A0%BB%E9%99%A4%E6%BF%95%E6%A9%9F-11884613.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "19.6L 級",
      "雙變頻",
      "一級能效",
      "Wi-Fi"
    ],
    "description": "比 22L 款省一些預算，仍保有 LG 變頻與智慧功能。",
    "pros": [
      "容量足夠多數家庭",
      "外型與操作友善"
    ],
    "cons": [
      "售價接近大容量款",
      "清淨能力非主打"
    ],
    "bestFor": "中大坪數、重視外型與智慧控制。",
    "recommendation": "不需要最大容量時，這台是 LG 系列中較均衡的選擇。",
    "score": 87,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "變頻",
      "智慧",
      "中大坪數"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 19458,
      "currency": "TWD",
      "converted": 19458,
      "sourceUrl": "https://tw.buy.yahoo.com/gdsale/LG%E6%A8%82%E9%87%91-DD201MEE0-19-6%E5%85%AC%E5%8D%87-PuriCare-%E9%9B%99%E8%AE%8A%E9%A0%BB%E9%99%A4%E6%BF%95%E6%A9%9F-11884613.html",
      "sourceTitle": "Yahoo購物中心：LG樂金 DD201MEE0 19.6公升 PuriCare 雙變頻除濕機 | 14.1L以上 | Yahoo購物中心",
      "evidenceSnippet": "Yahoo購物中心於 2026-08-04 顯示同型號可信新品公開價 NT$19,458，低於既有史低 NT$19,665。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-08-04",
      "note": "採用 Yahoo購物中心當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG DD201MEE0\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20DD201MEE0%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG DD201MEE0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20DD201MEE0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG DD201MEE0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%20DD201MEE0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG DD201MEE0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%20DD201MEE0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG DD201MEE0\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%20DD201MEE0%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dh-whirlpool-wdee10",
    "category": "dehumidifier",
    "rank": 5,
    "budget": "value",
    "channel": "tw",
    "brand": "Whirlpool",
    "model": "WDEE10TW",
    "name": "10L 第六感智能除濕機",
    "price": {
      "currency": "TWD",
      "amount": 5690,
      "converted": 5690,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ34A900HD2SP/000001_1767074559.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ34-A900HD2SP",
    "buyLabel": "PChome",
    "specs": [
      "10L 級",
      "第六感智能",
      "小坪數",
      "基本除濕"
    ],
    "description": "價格漂亮，適合小房間或不需要全屋大除濕能力的使用情境。",
    "pros": [
      "便宜",
      "小坪數夠用"
    ],
    "cons": [
      "容量較小",
      "高濕連續除濕較吃力"
    ],
    "bestFor": "臥室、書房、衣櫃附近補除濕。",
    "recommendation": "小坪數 CP 值推薦，大坪數請往 16L 以上看。",
    "score": 82,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "小坪數",
      "低價",
      "CP 值"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 5690,
      "currency": "TWD",
      "converted": 5690,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1254037624&cgp=5690",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Whirlpool惠而浦 10L 高效除濕機 WDEE10TW",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / Whirlpool惠而浦 10L 高效除濕機 WDEE10TW」最低價為 NT$5,690，最低點日期 2026-07-01。",
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
          "query": "site:reddit.com \"Whirlpool WDEE10TW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Whirlpool%20WDEE10TW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Whirlpool WDEE10TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Whirlpool%20WDEE10TW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Whirlpool WDEE10TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Whirlpool%20WDEE10TW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Whirlpool WDEE10TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Whirlpool%20WDEE10TW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Whirlpool WDEE10TW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Whirlpool%20WDEE10TW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-extra-6-dmbq4y-a900ikocc",
    "category": "dehumidifier",
    "rank": 6,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-YV32NXK",
    "name": "16 公升變頻高效型除濕機磁石黑",
    "price": {
      "currency": "TWD",
      "amount": 15251,
      "converted": 15251,
      "confidence": "Yahoo購物中心 2026-08-04 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ4YA900IKOCC/000001_1744795213.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Panasonic-%E5%9C%8B%E9%9A%9B%E7%89%8C-16L-nanoe%E8%AE%8A%E9%A0%BB%E5%BE%AE%E9%9B%BB%E8%85%A6%E9%99%A4%E6%BF%95%E6%A9%9F-F-YV32NX-11427351.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "16 公升",
      "變頻",
      "一級能效",
      "磁石黑"
    ],
    "description": "Panasonic F-YV32NXK 是除濕機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "容量選擇更完整",
      "多數台灣通路售後明確"
    ],
    "cons": [
      "實際除濕量受室溫影響",
      "水箱容量與噪音需現場確認"
    ],
    "bestFor": "台灣潮濕環境、衣物乾燥與長時間居家除濕需求。",
    "recommendation": "同類推薦：補入不同公升數與清淨除濕款，方便依坪數和耗能取捨。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "16L",
      "變頻",
      "節能"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 14747,
      "currency": "TWD",
      "converted": 14747,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1266214541&cgp=16427",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Panasonic 16L nanoe 變頻除濕機 F-YV32NXK",
      "evidenceSnippet": "LBJ 比價撿便宜歷史價格顯示 Yahoo購物中心同型號新品最低價為 NT$14,747，最低點日期 2026-03-31。",
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
          "query": "site:reddit.com \"Panasonic F-YV32NXK\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20F-YV32NXK%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic F-YV32NXK\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20F-YV32NXK%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Panasonic F-YV32NXK\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Panasonic%20F-YV32NXK%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Panasonic F-YV32NXK\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Panasonic%20F-YV32NXK%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Panasonic F-YV32NXK\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Panasonic%20F-YV32NXK%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-extra-7-dmbq3p-a900gtphc",
    "category": "dehumidifier",
    "rank": 7,
    "budget": "premium",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-YV32MH",
    "name": "16 公升變頻高效型清淨除濕機",
    "price": {
      "currency": "TWD",
      "amount": 19097,
      "converted": 19097,
      "confidence": "Yahoo購物中心 2026-08-04 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ3PA900GTPHC/000001_1699597155.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Panasonic-%E5%9C%8B%E9%9A%9B%E7%89%8C-16L-W-HEXS%E9%AB%98%E6%95%88%E5%BE%AE%E9%9B%BB%E8%85%A6%E9%99%A4%E6%BF%95%E6%A9%9F-F-YV32MH-10762034.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "16 公升",
      "變頻",
      "清淨除濕",
      "高效型"
    ],
    "description": "Panasonic F-YV32MH 是除濕機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "容量選擇更完整",
      "多數台灣通路售後明確"
    ],
    "cons": [
      "實際除濕量受室溫影響",
      "水箱容量與噪音需現場確認"
    ],
    "bestFor": "台灣潮濕環境、衣物乾燥與長時間居家除濕需求。",
    "recommendation": "同類推薦：補入不同公升數與清淨除濕款，方便依坪數和耗能取捨。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "清淨",
      "16L",
      "高階"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 18618,
      "currency": "TWD",
      "converted": 18618,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1222730122&cgp=20495",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Panasonic 國際牌】16公升全彩液晶觸控螢幕變頻除濕機(F-YV32MH)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Panasonic 國際牌】16公升全彩液晶觸控螢幕變頻除濕機(F-YV32MH)」最低價為 NT$18,618，最低點日期 2025-07-09。",
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
          "query": "site:reddit.com \"Panasonic F-YV32MH\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20F-YV32MH%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic F-YV32MH\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20F-YV32MH%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Panasonic F-YV32MH\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Panasonic%20F-YV32MH%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Panasonic F-YV32MH\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Panasonic%20F-YV32MH%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Panasonic F-YV32MH\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Panasonic%20F-YV32MH%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-extra-8-dmau0f-a900b1hpu",
    "category": "dehumidifier",
    "rank": 8,
    "budget": "value",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-Y16FH",
    "name": "8 公升清淨除濕機",
    "price": {
      "currency": "TWD",
      "amount": 10899,
      "converted": 10899,
      "confidence": "Yahoo購物中心 2026-08-29 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU0FA900B1HPU/000001_1782813379.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Panasonic-%E5%9C%8B%E9%9A%9B%E7%89%8C-8L-HEPA%E6%B8%85%E6%B7%A8%E9%99%A4%E6%BF%95-7996517.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "8 公升",
      "清淨除濕",
      "小坪數",
      "省空間"
    ],
    "description": "Panasonic F-Y16FH 是除濕機類的補充比較型號，依 2026-07-11 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "容量選擇更完整",
      "多數台灣通路售後明確"
    ],
    "cons": [
      "實際除濕量受室溫影響",
      "水箱容量與噪音需現場確認"
    ],
    "bestFor": "台灣潮濕環境、衣物乾燥與長時間居家除濕需求。",
    "recommendation": "同類推薦：補入不同公升數與清淨除濕款，方便依坪數和耗能取捨。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "8L",
      "小坪數",
      "清淨"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Panasonic F-Y16FH: 蝦皮商城 - 愛濾屋-清淨專家 濾網領航 台灣製造 品質出眾 HEPA抗菌濾網 適用國際牌除濕機F-Y20DHW F-Y26DHW F-Y20FH Y16FH Y20EH Y26EH 型號/規格不相符；LBJ Panasonic F-Y16FH: 蝦皮商城 - 淨博-外銷歐美日專業空氣清淨濾網 適用國際牌除濕機F-Y20DHW，F-Y26DHW ，F-Y20FH，Y16FH，Y20EH，Y26EH脫臭HEPA濾網 型號/規格不相符；LBJ Panasonic F-Y16FH: 蝦皮商城 - 蟎著媽專業濾網 適 國際牌 F-Y16EH Y16FH Y20EH Y20FH Y20DHW Y26EH Y26FH 除濕機 濾網 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Panasonic F-Y16FH\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20F-Y16FH%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic F-Y16FH\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20F-Y16FH%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Panasonic F-Y16FH\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Panasonic%20F-Y16FH%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Panasonic F-Y16FH\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Panasonic%20F-Y16FH%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Panasonic F-Y16FH\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Panasonic%20F-Y16FH%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-extra-9-dmbq00-a900jb38a",
    "category": "dehumidifier",
    "rank": 9,
    "budget": "value",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-Y18PN",
    "name": "9 公升除濕機",
    "price": {
      "currency": "TWD",
      "amount": 8263,
      "converted": 8263,
      "confidence": "PChome 2026-09-01 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ00A900JB38A/000001_1776329911.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ00-A900JB38A",
    "buyLabel": "PChome",
    "specs": [
      "9 公升",
      "DC 低噪音馬達",
      "一級能效",
      "多項安全保護"
    ],
    "description": "Panasonic F-Y18PN 是除濕機類的補充比較型號，依 2026-07-14 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "容量選擇更完整",
      "多數台灣通路售後明確"
    ],
    "cons": [
      "實際除濕量受室溫影響",
      "水箱容量與噪音需現場確認"
    ],
    "bestFor": "台灣潮濕環境、衣物乾燥與長時間居家除濕需求。",
    "recommendation": "同類推薦：補入不同公升數與清淨除濕款，方便依坪數和耗能取捨。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "9L",
      "節能",
      "臥室"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 7269,
      "currency": "TWD",
      "converted": 7269,
      "sourceUrl": "https://tw.buy.yahoo.com/gdsale/Panasonic-%E5%9C%8B%E9%9A%9B%E7%89%8C-9L-nanoeX-%E9%99%A4%E6%BF%95%E6%A9%9F-F-Y18PN-11819123.html",
      "sourceTitle": "Yahoo購物中心 商品頁：Panasonic國際牌 9L nanoeX 除濕機 F-Y18PN | 6.1-10L | Yahoo購物中心",
      "evidenceSnippet": "Yahoo購物中心 原始商品頁／API 於 2026-07-11 顯示同型號新品公開價 7269 TWD，低於既有可驗證史低。",
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
          "query": "site:reddit.com \"Panasonic F-Y18PN\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20F-Y18PN%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic F-Y18PN\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20F-Y18PN%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Panasonic F-Y18PN\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Panasonic%20F-Y18PN%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Panasonic F-Y18PN\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Panasonic%20F-Y18PN%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Panasonic F-Y18PN\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Panasonic%20F-Y18PN%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-extra-10-dmbq07-a900hq3l5",
    "category": "dehumidifier",
    "rank": 10,
    "budget": "mid",
    "channel": "tw",
    "brand": "LG",
    "model": "MD161QPK3",
    "name": "PuriCare WiFi 變頻除濕機粉紅 16 公升",
    "price": {
      "currency": "TWD",
      "amount": 14900,
      "converted": 14900,
      "confidence": "PChome 2026-08-30 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ07A900HQ3L5/000001_1761827365.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ07-A900HQ3L5",
    "buyLabel": "PChome",
    "specs": [
      "16 公升",
      "WiFi",
      "變頻",
      "PuriCare"
    ],
    "description": "LG MD161QPK3 是除濕機類的補充比較型號，依 2026-07-14 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "容量選擇更完整",
      "多數台灣通路售後明確"
    ],
    "cons": [
      "實際除濕量受室溫影響",
      "水箱容量與噪音需現場確認"
    ],
    "bestFor": "台灣潮濕環境、衣物乾燥與長時間居家除濕需求。",
    "recommendation": "同類推薦：補入不同公升數與清淨除濕款，方便依坪數和耗能取捨。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "LG",
      "WiFi",
      "16L"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ LG MD161QPK3: Momo富邦購物 【Have Green Days 綠綠好日】6片組_適用 LG 除濕機 MD161QBK3 MD161QPK3 MD171QPK3 HEPA抗菌濾網*6(濾芯) 最低價 NT$443 低於現價合理比例，疑似月付/配件/錯類；LBJ LG MD161QPK3: Momo富邦購物 【綠綠好日】6片組_適用 LG 除濕機 MD161QBK3 MD161QPK3 MD171QPK3 HEPA抗菌濾網(濾芯) 最低價 NT$502 低於現價合理比例，疑似月付/配件/錯類；LBJ LG MD161QPK3: Momo富邦購物 (店+)【Mitewithmom 著媽】適用 LG 樂金 除濕機 MD161QBK3 MD161QPK3 MD181QWE0 外掛框 濾網 空氣清淨 蟎著媽 最低價 NT$580 低於現價合理比例，疑似月付/配件/錯類。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG MD161QPK3\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20MD161QPK3%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG MD161QPK3\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20MD161QPK3%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG MD161QPK3\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%20MD161QPK3%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG MD161QPK3\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%20MD161QPK3%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG MD161QPK3\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%20MD161QPK3%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-extra-11-dmbq4n-a900jf9hp",
    "category": "dehumidifier",
    "rank": 11,
    "budget": "value",
    "channel": "tw",
    "brand": "LG",
    "model": "DD121QWE0",
    "name": "PuriCare 12 公升雙變頻除濕機",
    "price": {
      "currency": "TWD",
      "amount": 12730,
      "converted": 12730,
      "confidence": "Yahoo購物中心 2026-08-27 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ4NA900JF9HP/000001_1778165423.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/LG%E6%A8%82%E9%87%91-12%E5%85%AC%E5%8D%87-%E6%97%A5UV%E6%AE%BA%E8%8F%8C%E9%9B%99%E8%AE%8A%E9%A0%BB%E9%99%A4%E6%BF%95%E6%A9%9FDD121QWE0-11864251.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "12 公升",
      "雙變頻",
      "PuriCare",
      "ThinQ 遠端控制"
    ],
    "description": "LG DD121QWE0 是除濕機類的補充比較型號，依 2026-07-17 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "容量選擇更完整",
      "多數台灣通路售後明確"
    ],
    "cons": [
      "實際除濕量受室溫影響",
      "水箱容量與噪音需現場確認"
    ],
    "bestFor": "台灣潮濕環境、衣物乾燥與長時間居家除濕需求。",
    "recommendation": "同類推薦：補入不同公升數與清淨除濕款，方便依坪數和耗能取捨。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "LG",
      "12L",
      "變頻"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 11656,
      "currency": "TWD",
      "converted": 11656,
      "sourceUrl": "https://tw.buy.yahoo.com/gdsale/LG%E6%A8%82%E9%87%91-12%E5%85%AC%E5%8D%87-%E6%97%A5UV%E6%AE%BA%E8%8F%8C%E9%9B%99%E8%AE%8A%E9%A0%BB%E9%99%A4%E6%BF%95%E6%A9%9FDD121QWE0-11864251.html",
      "sourceTitle": "Yahoo購物中心：LG樂金 12公升/日UV殺菌雙變頻除濕機DD121QWE0 | 10.1-14L | Yahoo購物中心",
      "evidenceSnippet": "Yahoo購物中心於 2026-08-04 顯示同型號可信新品公開價 NT$11,656，低於既有史低 NT$11,780。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-08-04",
      "note": "採用 Yahoo購物中心當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG DD121QWE0\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20DD121QWE0%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG DD121QWE0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20DD121QWE0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG DD121QWE0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%20DD121QWE0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG DD121QWE0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%20DD121QWE0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG DD121QWE0\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%20DD121QWE0%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-extra-12-dmbq4y-a900jbqp2",
    "category": "dehumidifier",
    "rank": 12,
    "budget": "mid",
    "channel": "tw",
    "brand": "LG",
    "model": "DD141QWE0",
    "name": "PuriCare 雙變頻除濕機經典款白",
    "price": {
      "currency": "TWD",
      "amount": 15500,
      "converted": 15500,
      "confidence": "PChome 2026-07-29 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ4YA900JBQP2/000001_1759892926.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ4Y-A900JBQP2",
    "buyLabel": "PChome",
    "specs": [
      "14 公升級",
      "雙變頻",
      "經典白",
      "PuriCare"
    ],
    "description": "LG DD141QWE0 是除濕機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "容量選擇更完整",
      "多數台灣通路售後明確"
    ],
    "cons": [
      "實際除濕量受室溫影響",
      "水箱容量與噪音需現場確認"
    ],
    "bestFor": "台灣潮濕環境、衣物乾燥與長時間居家除濕需求。",
    "recommendation": "同類推薦：補入不同公升數與清淨除濕款，方便依坪數和耗能取捨。",
    "score": 81,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "LG",
      "變頻",
      "均衡"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 14220,
      "currency": "TWD",
      "converted": 14220,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1263692968&cgp=15800",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：LG樂金 DD141QWE0 14公升 PuriCare 雙變頻除濕機",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / LG樂金 DD141QWE0 14公升 PuriCare 雙變頻除濕機」最低價為 NT$14,220，最低點日期 2026-06-20。",
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
          "query": "site:reddit.com \"LG DD141QWE0\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20DD141QWE0%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG DD141QWE0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20DD141QWE0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG DD141QWE0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%20DD141QWE0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG DD141QWE0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%20DD141QWE0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG DD141QWE0\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%20DD141QWE0%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-extra-13-dmbq07-a900gfbvp",
    "category": "dehumidifier",
    "rank": 13,
    "budget": "premium",
    "channel": "tw",
    "brand": "LG",
    "model": "WD261VKF0",
    "name": "PuriCare 雙變頻除濕機 25.6 公升曜黑",
    "price": {
      "currency": "TWD",
      "amount": 18522,
      "converted": 18522,
      "confidence": "Yahoo購物中心 2026-08-18 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ07A900GFBVP/000001_1767340170.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/LG%E6%A8%82%E9%87%91-PuriCare-%E9%9B%99%E8%AE%8A%E9%A0%BB%E9%99%A4%E6%BF%95%E6%A9%9F-25-6%E5%85%AC%E5%8D%87-%E6%9B%9C%E9%BB%91-WD261VKF0-11970685.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "25.6 公升",
      "雙變頻",
      "曜黑",
      "大坪數"
    ],
    "description": "LG WD261VKF0 是除濕機類的補充比較型號，依 2026-07-17 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "容量選擇更完整",
      "多數台灣通路售後明確"
    ],
    "cons": [
      "實際除濕量受室溫影響",
      "水箱容量與噪音需現場確認"
    ],
    "bestFor": "台灣潮濕環境、衣物乾燥與長時間居家除濕需求。",
    "recommendation": "同類推薦：補入不同公升數與清淨除濕款，方便依坪數和耗能取捨。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "LG",
      "大容量",
      "高階"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 17955,
      "currency": "TWD",
      "converted": 17955,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1269683437&cgp=18900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：LG 樂金 PuriCare 雙變頻除濕機 25.6公升 曜黑 WD261VKF0",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / LG 樂金 PuriCare 雙變頻除濕機 25.6公升 曜黑 WD261VKF0」最低價為 NT$17,955，最低點日期 2026-06-13。",
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
          "query": "site:reddit.com \"LG WD261VKF0\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20WD261VKF0%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG WD261VKF0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20WD261VKF0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG WD261VKF0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%20WD261VKF0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG WD261VKF0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%20WD261VKF0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG WD261VKF0\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%20WD261VKF0%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-extra-14-dmbq4n-a900jchfz",
    "category": "dehumidifier",
    "rank": 14,
    "budget": "mid",
    "channel": "tw",
    "brand": "LG",
    "model": "DD181MWE0",
    "name": "18 公升一級能效 PuriCare 雙變頻除濕機",
    "price": {
      "currency": "TWD",
      "amount": 17542,
      "converted": 17542,
      "confidence": "Yahoo購物中心 2026-08-25 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ4NA900JCHFZ/000001_1783342859.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/LG%E6%A8%82%E9%87%91-PuriCare-18%E5%85%AC%E5%8D%87%E9%9B%99%E8%AE%8A%E9%A0%BB%E9%99%A4%E6%BF%95%E6%A9%9F-%E7%99%BD%E8%89%B2-DD181MWE0-11971018.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "18 公升",
      "雙變頻",
      "一級能效",
      "PuriCare"
    ],
    "description": "LG DD181MWE0 是 18 公升雙變頻除濕機，依 2026-07-17 Yahoo 公開活動價、官方發表資料與台灣通路規格整理。",
    "pros": [
      "容量選擇更完整",
      "多數台灣通路售後明確"
    ],
    "cons": [
      "實際除濕量受室溫影響",
      "少數同型號使用者反映高濕全速時聲音較明顯"
    ],
    "bestFor": "台灣潮濕環境、衣物乾燥與長時間居家除濕需求。",
    "recommendation": "同類推薦：補入不同公升數與清淨除濕款，方便依坪數和耗能取捨。",
    "score": 79,
    "voltage": "110V 台灣通路",
    "warranty": "依 Yahoo 購物中心與 LG 台灣原廠保固",
    "tags": [
      "LG",
      "18L",
      "節能"
    ],
    "releaseDate": "2025-10-29",
    "historicalLow": {
      "status": "found",
      "amount": 16856,
      "currency": "TWD",
      "converted": 16856,
      "sourceUrl": "https://tw.buy.yahoo.com/gdsale/LG%E6%A8%82%E9%87%91-PuriCare-18%E5%85%AC%E5%8D%87%E9%9B%99%E8%AE%8A%E9%A0%BB%E9%99%A4%E6%BF%95%E6%A9%9F-%E7%99%BD%E8%89%B2-DD181MWE0-11971018.html",
      "sourceTitle": "Yahoo購物中心：LG 樂金 PuriCare 18公升雙變頻除濕機 白色 DD181MWE0 | 14.1L以上 | Yahoo購物中心",
      "evidenceSnippet": "Yahoo購物中心於 2026-08-21 顯示同型號可信新品公開價 NT$16,856，低於既有史低 NT$17,005。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-08-21",
      "note": "採用 Yahoo購物中心當日可購商品的同型號新品公開價；不含會員券、點數、信用卡回饋、二手、福利、展示、拆封或整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG DD181MWE0\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20DD181MWE0%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG DD181MWE0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20DD181MWE0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"LG DD181MWE0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22LG%20DD181MWE0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"LG DD181MWE0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22LG%20DD181MWE0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"LG DD181MWE0\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22LG%20DD181MWE0%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-extra-15-dmbq3s-a900k13zr",
    "category": "dehumidifier",
    "rank": 17,
    "budget": "value",
    "channel": "tw",
    "brand": "Whirlpool",
    "model": "WDEE20TW",
    "name": "20L 第六感智能除濕機",
    "price": {
      "currency": "TWD",
      "amount": 9191,
      "converted": 9191,
      "confidence": "Yahoo購物中心 2026-08-26 exact-model 公開結構化價格"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ3SA900K13ZR/000001_1779265654.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Whirlpool%E6%83%A0%E8%80%8C%E6%B5%A6-WDEE20TW-20L-%E7%AC%AC%E5%85%AD%E6%84%9F%E6%99%BA%E8%83%BD%E9%99%A4%E6%BF%95%E6%A9%9F-12132430.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "20 公升",
      "第六感智能",
      "30-80% 濕度設定",
      "廣口上吹"
    ],
    "description": "Whirlpool WDEE20TW 是除濕機類的補充比較型號，依 2026-07-17 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "容量選擇更完整",
      "多數台灣通路售後明確"
    ],
    "cons": [
      "實際除濕量受室溫影響",
      "水箱容量與噪音需現場確認"
    ],
    "bestFor": "台灣潮濕環境、衣物乾燥與長時間居家除濕需求。",
    "recommendation": "同類推薦：補入不同公升數與清淨除濕款，方便依坪數和耗能取捨。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Whirlpool",
      "20L",
      "高 CP"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Whirlpool WDEE20TW: Yahoo購物中心 (福利品)Whirlpool惠而浦 20L 第六感智能除濕機 WDEE20TW 高效除濕型 能效3級 非採用通路或含排除條件；LBJ Whirlpool WDEE20TW: Yahoo購物中心 Whirlpool惠而浦 福利品 20公升/日 WDEE20TW 除濕機 WDEE20TW-D 非採用通路或含排除條件；LBJ Whirlpool WDEE20TW: 樂天市場 - 北霸天 北霸天 (福利品)Whirlpool惠而浦 20L 第六感智能除濕機 WDEE20TW 高效除濕型 能效3級 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Whirlpool WDEE20TW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Whirlpool%20WDEE20TW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Whirlpool WDEE20TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Whirlpool%20WDEE20TW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Whirlpool WDEE20TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Whirlpool%20WDEE20TW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Whirlpool WDEE20TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Whirlpool%20WDEE20TW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Whirlpool WDEE20TW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Whirlpool%20WDEE20TW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-extra-16-dmbq3sa900i7nsn",
    "category": "dehumidifier",
    "rank": 16,
    "budget": "value",
    "channel": "tw",
    "brand": "Whirlpool",
    "model": "WDEE06TW",
    "name": "6公升節能除濕機",
    "price": {
      "currency": "TWD",
      "amount": 3790,
      "converted": 3790,
      "confidence": "PChome 2026-07-22 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ3SA900I7NSN/000001_1767929673.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ3S-A900I7NSN",
    "buyLabel": "PChome",
    "specs": [
      "6L",
      "二級能效",
      "節能",
      "小坪數"
    ],
    "description": "Whirlpool WDEE06TW 補進本分類比較池，重點是6L、二級能效、節能，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "價格低、適合小房間",
      "品牌通路穩"
    ],
    "cons": [
      "除濕量不適合大客廳",
      "功能較基本"
    ],
    "bestFor": "想依照房間坪數、除濕量與品牌售後挑除濕機的人。",
    "recommendation": "補充推薦：6公升節能除濕機 的優勢在價格低、適合小房間，但仍建議把除濕量不適合大客廳納入取捨。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "小坪數",
      "節能",
      "預算"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 3511,
      "currency": "TWD",
      "converted": 3511,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1237488911&cgp=4480",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Whirlpool 惠而浦 6公升高效除濕機WDEE06TW",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / Whirlpool 惠而浦 6公升高效除濕機WDEE06TW」最低價為 NT$3,511，最低點日期 2025-11-04。",
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
          "query": "site:reddit.com \"Whirlpool WDEE06TW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Whirlpool%20WDEE06TW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Whirlpool WDEE06TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Whirlpool%20WDEE06TW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Whirlpool WDEE06TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Whirlpool%20WDEE06TW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Whirlpool WDEE06TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Whirlpool%20WDEE06TW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Whirlpool WDEE06TW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Whirlpool%20WDEE06TW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-extra-17-dmbq08a900ixl3k",
    "category": "dehumidifier",
    "rank": 18,
    "budget": "value",
    "channel": "tw",
    "brand": "SHARP",
    "model": "DW-WL6NT-W",
    "name": "6公升高效除濕機",
    "price": {
      "currency": "TWD",
      "amount": 4390,
      "converted": 4390,
      "confidence": "PChome 2026-07-22 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ08A900IXL3K/000001_1753349026.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ08-A900IXL3K",
    "buyLabel": "PChome",
    "specs": [
      "6L",
      "高效除濕",
      "小坪數",
      "衣物乾燥"
    ],
    "description": "SHARP DW-WL6NT-W 補進本分類比較池，重點是6L、高效除濕、小坪數，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "體積小、好擺放",
      "SHARP 品牌能見度高"
    ],
    "cons": [
      "水箱與除濕量有限",
      "大空間需要更高公升數"
    ],
    "bestFor": "想依照房間坪數、除濕量與品牌售後挑除濕機的人。",
    "recommendation": "補充推薦：6公升高效除濕機 的優勢在體積小、好擺放，但仍建議把水箱與除濕量有限納入取捨。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "小坪數",
      "衣物乾燥",
      "SHARP"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 3990,
      "currency": "TWD",
      "converted": 3990,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1262940037&cgp=4390",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【SHARP 夏普】6公升 高效除濕機(DW-WL6NT-W)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【SHARP 夏普】6公升 高效除濕機(DW-WL6NT-W)」最低價為 NT$3,990，最低點日期 2026-06-26。",
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
          "query": "site:reddit.com \"SHARP DW-WL6NT-W\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SHARP%20DW-WL6NT-W%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SHARP DW-WL6NT-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SHARP%20DW-WL6NT-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SHARP DW-WL6NT-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SHARP%20DW-WL6NT-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SHARP DW-WL6NT-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SHARP%20DW-WL6NT-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SHARP DW-WL6NT-W\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SHARP%20DW-WL6NT-W%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-extra-18-dmbq3pa900j9fh9",
    "category": "dehumidifier",
    "rank": 19,
    "budget": "value",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-Y12PS",
    "name": "6L 除濕機",
    "price": {
      "currency": "TWD",
      "amount": 5095,
      "converted": 5095,
      "confidence": "PChome 2026-09-01 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ3PA900J9FH9/000001_1776325410.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ3P-A900J9FH9",
    "buyLabel": "PChome",
    "specs": [
      "6L",
      "Panasonic",
      "小房間",
      "基本除濕"
    ],
    "description": "Panasonic F-Y12PS 補進本分類比較池，重點是6L、Panasonic、小房間，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "品牌售後穩",
      "入門房間用夠用"
    ],
    "cons": [
      "功能較基本",
      "除濕速度不如變頻大容量"
    ],
    "bestFor": "想依照房間坪數、除濕量與品牌售後挑除濕機的人。",
    "recommendation": "補充推薦：6L 除濕機 的優勢在品牌售後穩，但仍建議把功能較基本納入取捨。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "Panasonic",
      "小房間",
      "入門"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 4805,
      "currency": "TWD",
      "converted": 4805,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMBQ3P-A900J9FH9",
      "sourceTitle": "PChome 24h 購物：Panasonic 國際牌 6L 除濕機 F-Y12PS",
      "evidenceSnippet": "PChome 24h 購物於 2026-08-07 顯示同型號可信新品公開價 NT$4,805，低於既有史低 NT$4,888。",
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
          "query": "site:reddit.com \"Panasonic F-Y12PS\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Panasonic%20F-Y12PS%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Panasonic F-Y12PS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Panasonic%20F-Y12PS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Panasonic F-Y12PS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Panasonic%20F-Y12PS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Panasonic F-Y12PS\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Panasonic%20F-Y12PS%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Panasonic F-Y12PS\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Panasonic%20F-Y12PS%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-extra-19-dmbq08a900jpcl1",
    "category": "dehumidifier",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "SHARP",
    "model": "DW-PT12HT-W",
    "name": "12公升 PCI 自動除菌離子除濕機",
    "price": {
      "currency": "TWD",
      "amount": 8990,
      "converted": 8990,
      "confidence": "PChome 2026-09-01 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ08A900JPCL1/000001_1770962000.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ08-A900JPCL1",
    "buyLabel": "PChome",
    "specs": [
      "12L",
      "PCI 除菌離子",
      "衣物乾燥",
      "中坪數"
    ],
    "description": "SHARP DW-PT12HT-W 補進本分類比較池，重點是12L、PCI 除菌離子、衣物乾燥，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "除濕量比 6L 款實用",
      "附加除菌離子功能"
    ],
    "cons": [
      "價格較入門高",
      "離子功能非空氣清淨替代"
    ],
    "bestFor": "想依照房間坪數、除濕量與品牌售後挑除濕機的人。",
    "recommendation": "補充推薦：12公升 PCI 自動除菌離子除濕機 的優勢在除濕量比 6L 款實用，但仍建議把價格較入門高納入取捨。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "12L",
      "PCI",
      "中坪數"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 7999,
      "currency": "TWD",
      "converted": 7999,
      "sourceUrl": "https://24h.pchome.com.tw/prod/DMBQ08-A900JPCL1",
      "sourceTitle": "PChome 24h 購物：【SHARP 夏普】12公升PCI自動除菌離子除濕機(DW-PT12HT-W)",
      "evidenceSnippet": "PChome 24h 購物於 2026-08-19 顯示同型號可信新品公開價 NT$7,999，低於既有史低 NT$8,990。",
      "sourceKind": "retailer_page",
      "confidence": "medium",
      "checkedAt": "2026-08-19",
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
          "query": "site:reddit.com \"SHARP DW-PT12HT-W\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SHARP%20DW-PT12HT-W%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SHARP DW-PT12HT-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SHARP%20DW-PT12HT-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"SHARP DW-PT12HT-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22SHARP%20DW-PT12HT-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"SHARP DW-PT12HT-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22SHARP%20DW-PT12HT-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"SHARP DW-PT12HT-W\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22SHARP%20DW-PT12HT-W%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-extra-20-dmbq01a900gsfgx",
    "category": "dehumidifier",
    "rank": 21,
    "budget": "mid",
    "channel": "tw",
    "brand": "HITACHI",
    "model": "RD-22FC",
    "name": "11公升清淨型除濕機",
    "price": {
      "currency": "TWD",
      "amount": 9500,
      "converted": 9500,
      "confidence": "momo購物 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ01A900GSFGX/000001_1767322095.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0003952/goodsDetail/TP00039520005942",
    "buyLabel": "momo購物",
    "specs": [
      "11L",
      "清淨型",
      "衣物乾燥",
      "節電"
    ],
    "description": "HITACHI RD-22FC 補進本分類比較池，重點是11L、清淨型、衣物乾燥，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "日系品牌與穩定性佳",
      "除濕兼清淨概念"
    ],
    "cons": [
      "價格比純除濕款高",
      "濾網維護需留意"
    ],
    "bestFor": "想依照房間坪數、除濕量與品牌售後挑除濕機的人。",
    "recommendation": "補充推薦：11公升清淨型除濕機 的優勢在日系品牌與穩定性佳，但仍建議把價格比純除濕款高納入取捨。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "清淨型",
      "日系",
      "11L"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ HITACHI RD-22FC: Momo富邦購物 (店+)適用Hitachi日立RD-18FC RD-22FC空氣清淨除濕機替換用HEPA濾網濾芯 型號/規格不相符；LBJ HITACHI RD-22FC: 蝦皮商城 - 怡悅健康生活館 怡悅 HEPA濾網 適用 日立除濕機 RD-18FC RD-22FC RD-14FJ RD-18FJ RD-22FJ 型號/規格不相符；LBJ HITACHI RD-22FC: 蝦皮商城 - 淨博-外銷歐美日專業空氣清淨濾網 適用Hitachi日立RD-18FC RD-22FC空氣清淨除濕機替換用HEPA濾網濾芯 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"HITACHI RD-22FC\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HITACHI%20RD-22FC%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HITACHI RD-22FC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HITACHI%20RD-22FC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HITACHI RD-22FC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HITACHI%20RD-22FC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HITACHI RD-22FC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HITACHI%20RD-22FC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HITACHI RD-22FC\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HITACHI%20RD-22FC%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-costco-hitachi-rd380vc",
    "category": "dehumidifier",
    "rank": 22,
    "budget": "premium",
    "channel": "tw",
    "brand": "HITACHI",
    "model": "RD-380VC",
    "name": "19公升 超變頻清淨除濕機",
    "price": {
      "currency": "TWD",
      "amount": 20597,
      "converted": 20597,
      "confidence": "momo 2026-07-18 商品頁公開價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h5d/ha9/421140861976606.jpg",
    "buyUrl": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=13553689",
    "buyLabel": "momo購物",
    "specs": [
      "19 公升級",
      "超變頻",
      "清淨除濕",
      "政府減稅補助標示",
      "Costco 評價 4.7 / 46 則"
    ],
    "description": "日立 RD-380VC 在 Costco 評價高，適合想買清淨除濕二合一且重視品牌售後的人。",
    "pros": [
      "清淨除濕二合一",
      "Costco 評價 4.7 分"
    ],
    "cons": [
      "價格高於純除濕入門款",
      "大型機身需預留擺放與排水空間"
    ],
    "bestFor": "潮濕住家、衣物乾燥與客廳除濕需求較高的家庭。",
    "recommendation": "好市多補充推薦：RD-380VC 是 Costco 上評價漂亮的高階清淨除濕候選。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 Costco 好市多商品頁、品牌保固與退貨政策",
    "tags": [
      "Costco",
      "變頻",
      "清淨除濕"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 18920,
      "currency": "TWD",
      "converted": 18920,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1237887197&cgp=20357",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【HITACHI 日立】一級能效19公升變頻清淨除濕機(RD-380VC)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【HITACHI 日立】一級能效19公升變頻清淨除濕機(RD-380VC)」最低價為 NT$18,920，最低點日期 2026-02-06。",
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
          "query": "site:reddit.com \"HITACHI RD-380VC\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HITACHI%20RD-380VC%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HITACHI RD-380VC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HITACHI%20RD-380VC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HITACHI RD-380VC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HITACHI%20RD-380VC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HITACHI RD-380VC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HITACHI%20RD-380VC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HITACHI RD-380VC\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HITACHI%20RD-380VC%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-costco-3m-fd-y200l",
    "category": "dehumidifier",
    "rank": 23,
    "budget": "mid",
    "channel": "tw",
    "brand": "3M",
    "model": "FD-Y200L",
    "name": "20 公升雙效空氣清淨除濕機",
    "price": {
      "currency": "TWD",
      "amount": 16989,
      "converted": 16989,
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/hf8/hd0/64882598379550.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Cooling-Heating-Air-Treatment/Dehumidifiers-Dry-Cabinets/3M-Filtrete-20-L-Air-Purifier-Dehumidifier-FD-Y200L/p/133200",
    "buyLabel": "Costco 好市多",
    "specs": [
      "20 公升/日",
      "水箱 6.2 公升",
      "110V / 60Hz",
      "能源因數 2.67 L/kWh",
      "Costco 評價 4.6 / 284 則"
    ],
    "description": "Costco 評價不錯的除濕機候選，依除濕量、坪數、能效與水箱容量補進比較。",
    "pros": [
      "除濕量與電壓資訊清楚",
      "Costco 評論數具參考性"
    ],
    "cons": [
      "機身重量與排水要確認",
      "清淨複合款需注意濾材成本"
    ],
    "bestFor": "潮濕住家、衣物乾燥或大坪數除濕需求的人",
    "recommendation": "好市多補充推薦：20 公升雙效空氣清淨除濕機 評價不錯，補進除濕機分類作為 Costco 候選比較。",
    "score": 89,
    "voltage": "110V / 60Hz",
    "warranty": "依 Costco 好市多商品頁與品牌 1 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "20L",
      "空氣清淨",
      "高評論數"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ 3M FD-Y200L: 蝦皮商城 - 怡悅健康生活館 怡悅 HEPA濾網 適用 適用 3M FD-Y160L FD-Y180L FD-Y200L 深呼吸 空氣清淨除濕機 非採用通路或含排除條件；LBJ 3M FD-Y200L: Momo富邦購物 【RENZA】適用3M FD-Y160L FD-Y180L FD-Y200L 深呼吸空氣清淨除濕機(HEPA濾網 濾芯) 最低價 NT$417 低於現價合理比例，疑似月付/配件/錯類；LBJ 3M FD-Y200L: 蝦皮商城 - 蟎著媽專業濾網 蟎著媽 濾網 適用 3M FD-Y160L FD-Y180L FD-Y200L 空氣清淨機 Y200-F 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"3M FD-Y200L\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%223M%20FD-Y200L%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"3M FD-Y200L\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%223M%20FD-Y200L%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"3M FD-Y200L\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%223M%20FD-Y200L%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"3M FD-Y200L\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%223M%20FD-Y200L%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"3M FD-Y200L\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%223M%20FD-Y200L%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-costco-hitachi-rd460vc",
    "category": "dehumidifier",
    "rank": 24,
    "budget": "premium",
    "channel": "tw",
    "brand": "HITACHI",
    "model": "RD-460VC",
    "name": "23 公升超變頻清淨除濕機",
    "price": {
      "currency": "TWD",
      "amount": 23039,
      "converted": 23039,
      "confidence": "PChome 2026-08-08 exact-model 公開價；有正值 Price.Low 時優先於 Price.P"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h2d/h02/421140862271518.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ4K-A900I752Z",
    "buyLabel": "PChome",
    "specs": [
      "23 公升/日",
      "約 19-21 坪",
      "110V / 60Hz",
      "一級能效",
      "Costco 評價 4.5 / 33 則"
    ],
    "description": "Costco 評價不錯的除濕機候選，依除濕量、坪數、能效與水箱容量補進比較。",
    "pros": [
      "除濕量與電壓資訊清楚",
      "Costco 評論數具參考性"
    ],
    "cons": [
      "機身重量與排水要確認",
      "清淨複合款需注意濾材成本"
    ],
    "bestFor": "潮濕住家、衣物乾燥或大坪數除濕需求的人",
    "recommendation": "好市多補充推薦：23 公升超變頻清淨除濕機 評價不錯，補進除濕機分類作為 Costco 候選比較。",
    "score": 88,
    "voltage": "110V / 60Hz",
    "warranty": "依 Costco 好市多商品頁與品牌 3 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "23L",
      "變頻",
      "一級能效"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 22039,
      "currency": "TWD",
      "converted": 22039,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=512329242&cgp=22618",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：HITACHI日立 RD-460VC 23公升超變頻清淨型除濕機 極光鈦 神腦生活",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - 神腦生活 Senaonline / HITACHI日立 RD-460VC 23公升超變頻清淨型除濕機 極光鈦 神腦生活」最低價為 NT$22,039，最低點日期 2026-04-09。",
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
          "query": "site:reddit.com \"HITACHI RD-460VC\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22HITACHI%20RD-460VC%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"HITACHI RD-460VC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22HITACHI%20RD-460VC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"HITACHI RD-460VC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22HITACHI%20RD-460VC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"HITACHI RD-460VC\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22HITACHI%20RD-460VC%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"HITACHI RD-460VC\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22HITACHI%20RD-460VC%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-whirlpool-wdee1200tw",
    "category": "dehumidifier",
    "rank": 15,
    "budget": "value",
    "channel": "tw",
    "brand": "Whirlpool",
    "model": "WDEE1200TW",
    "name": "12L 一級能效極致薄型清新淨味除濕機",
    "price": {
      "currency": "TWD",
      "amount": 7990,
      "converted": 7990,
      "confidence": "momo購物網 2026-07-18 UTC 商品頁公開現貨價"
    },
    "image": "https://i2.momoshop.com.tw/1781626760/goodsimg/0015/034/893/15034893_R_m.webp",
    "buyUrl": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=15034893",
    "buyLabel": "momo購物",
    "specs": [
      "除濕能力：12L／日",
      "適用坪數：15 坪",
      "一級能效；能源因數標示 2.77L/kWh、實測 2.92L/kWh",
      "消耗功率 180W；年耗電量 97kWh",
      "尺寸：寬 37 x 深 21 x 高 60 cm；重量 12.5kg",
      "濕度設定 30–80%；負離子與第六感智能",
      "6L 大容量封閉式水箱；無 HEPA",
      "節能標章證書 1150094"
    ],
    "description": "Whirlpool 12L 薄型一級能效除濕機，主打 6L 封閉式水箱與淨味功能，補入小至中坪數的節能比較位置。",
    "pros": [
      "能源署一級能效與 12L 能力資料可查",
      "薄型機身搭配 6L 大水箱",
      "可信台灣新品通路可立即購買"
    ],
    "cons": [
      "momo 同一評論站已有多位使用者反映運轉、馬達或共振聲偏大，雖未跨第二原始網站達災情門檻仍應優先留意",
      "目前未找到合規的 exact-model 上市日",
      "無 HEPA；購買前應確認擺放空間與夜間噪音接受度"
    ],
    "bestFor": "想找 12L、一級能效、薄型機身與大水箱，且能接受先實測運轉聲的人。",
    "recommendation": "新品補充：WDEE1200TW 的能效、水箱與價格有吸引力；但單一零售站的噪音回報集中，建議保留退換貨期並在夜間環境實測。",
    "score": 88,
    "voltage": "110V、60Hz；台灣官方規格",
    "warranty": "momo 頁面標示 1 年保固；實際依 Whirlpool 台灣與供應商",
    "tags": [
      "Whirlpool",
      "12L",
      "一級能效",
      "薄型",
      "6L 水箱"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 7690,
      "currency": "TWD",
      "converted": 7690,
      "sourceUrl": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=15034893",
      "sourceTitle": "momo購物網：Whirlpool WDEE1200TW 12 公升極致薄型清新淨味除濕機",
      "evidenceSnippet": "momo 同型號新品頁於 2026-07-16 UTC 顯示公開售價 NT$7,690、goodsStock 1、goodsNum 20，低於原記錄史低 NT$7,990。",
      "sourceKind": "retailer_page",
      "confidence": "high",
      "checkedAt": "2026-07-17",
      "note": "採用可信通路同型號新品頁可公開查核售價；排除會員個人化折扣、信用卡回饋、點數、二手、福利品、展示機、拆封品與整新品。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Whirlpool WDEE1200TW\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Whirlpool%20WDEE1200TW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Whirlpool WDEE1200TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Whirlpool%20WDEE1200TW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Whirlpool WDEE1200TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Whirlpool%20WDEE1200TW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Whirlpool WDEE1200TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Whirlpool%20WDEE1200TW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Whirlpool WDEE1200TW\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Whirlpool%20WDEE1200TW%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-daikin-jp33asct-w",
    "category": "dehumidifier",
    "rank": 25,
    "topPick": false,
    "budget": "balanced",
    "channel": "tw",
    "brand": "DAIKIN",
    "model": "JP33ASCT-W",
    "name": "16.5L 智慧乾衣電眼除濕機",
    "price": {
      "currency": "TWD",
      "amount": 13800,
      "converted": 13800,
      "confidence": "PChome 24h 2026-08-14 exact-model 新品頁公開售價，標示 InStock",
      "basis": "retailer_current"
    },
    "image": "https://img.pchome.com.tw/cs/items/DMAU9HA900C8PS4/000001_1641275711.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAU9H-A900C8PS4",
    "buyLabel": "PChome 24h購物",
    "installation": {
      "status": "not_stated",
      "note": "PChome exact-model 頁未列安裝服務；本品為移動式除濕機，連續排水如需打孔或配管須另行處理。"
    },
    "specs": [
      "日除濕量 16.5L（27°C／60%RH）",
      "智慧乾衣電眼、上下左右擺葉、濕度 40–70% 設定",
      "4L 水箱、額定耗電約 272W、一級能效",
      "尺寸：寬 52.6 x 深 31 x 高 45.4 cm；重量 15.8kg",
      "110V / 60Hz；冷媒 R134a"
    ],
    "description": "Daikin JP33ASCT-W 以 16.5L 除濕量與乾衣電眼，自動偵測衣物濕區並調整送風。",
    "pros": [
      "16.5L 與 4L 水箱適合中型空間及乾衣",
      "上下左右擺風與電眼針對衣物乾燥",
      "一級能效、110V 台灣規格"
    ],
    "cons": [
      "15.8kg，跨樓層搬運不輕",
      "機身橫向 52.6cm，收納占寬較大",
      "沒有 Wi-Fi 遠端控制"
    ],
    "bestFor": "北部潮濕環境、需要室內乾衣，並希望機器自動追蹤較濕衣物的人。",
    "recommendation": "Daikin 日系除濕補強：乾衣導向清楚；選購仍要以標準測試條件下的 16.5L 與空間坪數比較。",
    "score": 86,
    "voltage": "110V / 60Hz；額定耗電約 272W",
    "warranty": "台灣大金公司貨；依原廠與 PChome 保固條款",
    "tags": [
      "16.5L",
      "乾衣電眼",
      "4L水箱",
      "一級能效",
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
      "note": "已查台灣大金型錄、PChome 與 exact-model 價格搜尋；只重現本輪 NT$13,800，未找到具日期且可公開驗證的可信新品史低。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"DAIKIN JP33ASCT-W\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22DAIKIN%20JP33ASCT-W%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"DAIKIN JP33ASCT-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22DAIKIN%20JP33ASCT-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"DAIKIN JP33ASCT-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22DAIKIN%20JP33ASCT-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"DAIKIN JP33ASCT-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22DAIKIN%20JP33ASCT-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"DAIKIN JP33ASCT-W\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22DAIKIN%20JP33ASCT-W%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    }
  },
  {
    "id": "dehumidifier-electrolux-ed1031wd",
    "category": "dehumidifier",
    "rank": 26,
    "topPick": false,
    "budget": "balanced",
    "channel": "tw",
    "brand": "Electrolux",
    "model": "ED1031WD",
    "name": "UltimateHome 300 10L 清淨除濕機",
    "price": {
      "currency": "TWD",
      "amount": 12900,
      "converted": 12900,
      "confidence": "2026-08-31 人工查核：Electrolux 台灣官方 ED1031WD 晨曦白主價 NT$12,900，明示『有現貨』『加到購物車』；排除相似產品 PA91-606GY 與其他除濕機。",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "not_stated",
      "note": "台灣官方商城價格為直立式除濕機商品價，未標示含到府安裝；一般水箱使用可自行就位，連續排水需另備合適排水管與落差。"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBH1IA900JEGA9/000001_1766458713.jpg",
    "buyUrl": "https://www.electrolux.com.tw/appliances/dehumidifier/ed1031wd/",
    "buyLabel": "Electrolux 台灣官方商城 exact-model 新品",
    "specs": [
      "除濕能力：10 L／日；除濕適用約 13 坪",
      "清淨適用約 12 坪；搭配濾網空氣清淨",
      "水箱 4.8L；能源因數值 2.74 L/kWh；能源效率第 1 級",
      "運轉音 35–39 dB；R290 環保冷媒",
      "尺寸：寬 37 x 深 27.6 x 高 60 cm",
      "淨重：16.6 kg；額定消耗功率 152W",
      "支援連續排水，排水管與場地落差需自行確認"
    ],
    "description": "10L／日除濕結合約 12 坪空氣清淨與 4.8L 水箱，補上 Electrolux 在中小宅清淨除濕二合一的品牌與功能帶。",
    "pros": [
      "一級能效、2.74 L/kWh，規格透明",
      "35–39 dB 與 4.8L 水箱兼顧臥室和日常減少倒水",
      "台灣官方 exact-model 頁、規格 PDF、說明書與新品現售可交叉驗證"
    ],
    "cons": [
      "16.6 kg 機身跨樓層搬動仍吃力",
      "空氣清淨濾網屬後續耗材成本",
      "找到的 exact-model 原始討論為購前詢問或系列泛稱，沒有形成同症狀 6 人且跨 2 站的災情"
    ],
    "bestFor": "約 6–13 坪房間，希望一台兼顧梅雨除濕、衣物乾燥與基礎空氣清淨的家庭。",
    "recommendation": "清淨除濕平衡推薦：以一級能效、大水箱和低速運轉音形成比較價值，適合不想另擺一台清淨機的小宅。",
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
      "checkedAt": "2026-08-20",
      "note": "已查 Electrolux 台灣官方商城、PChome exact-model 新品頁、BigGo 與 FindPrice；未取得可公開重現、帶日期且排除會員券、點數與福利展示品的可信新品史低，未以查核日現價推定。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Electrolux ED1031WD\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Electrolux%20ED1031WD%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Electrolux ED1031WD\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Electrolux%20ED1031WD%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "PTT",
          "query": "site:ptt.cc \"Electrolux ED1031WD\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Aptt.cc%20%22Electrolux%20ED1031WD%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "ptt.cc"
        },
        {
          "platform": "Dcard",
          "query": "site:dcard.tw \"Electrolux ED1031WD\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Adcard.tw%20%22Electrolux%20ED1031WD%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "dcard.tw"
        },
        {
          "platform": "YouTube",
          "query": "\"Electrolux ED1031WD\" problem issue defect failure broken 災情 故障 異常",
          "queryUrl": "https://www.youtube.com/results?search_query=%22Electrolux%20ED1031WD%22%20problem%20issue%20defect%20failure%20broken%20%E7%81%BD%E6%83%85%20%E6%95%85%E9%9A%9C%20%E7%95%B0%E5%B8%B8",
          "targetHost": "youtube.com"
        }
      ]
    },
    "score": 88,
    "voltage": "110V／60Hz 台灣公司貨；額定消耗功率 152W",
    "warranty": "Electrolux 台灣公司貨；全機 3 年、壓縮機 5 年保固，依原廠登錄與保證書條件",
    "tags": [
      "10L",
      "一級能效",
      "清淨除濕",
      "4.8L水箱",
      "低噪音"
    ]
  },
  {
    "id": "dehumidifier-sharp-dw-uw25ht-w",
    "category": "dehumidifier",
    "rank": 27,
    "topPick": false,
    "budget": "premium",
    "channel": "tw",
    "brand": "SHARP",
    "model": "DW-UW25HT-W",
    "name": "乾淨方 Pro 雙氣流變頻美學 25L 除濕機",
    "price": {
      "currency": "TWD",
      "amount": 20700,
      "converted": 20700,
      "confidence": "HOTAI購於 2026-08-28 的 exact-model 現貨公開價",
      "basis": "retailer_current"
    },
    "installation": {
      "status": "not_stated",
      "note": "HOTAI購未標示含到府安裝；水箱使用可自行就位於平坦乾燥處，連續排水需另備合適排水管並確認向下坡度與排水位置。"
    },
    "image": "https://tw.sharp/sites/default/files/2026-04/DW-UW25HT-W_1.png",
    "buyUrl": "https://www.hotaigo.com.tw/productdetail/hotai1785980593-4550556198233.html",
    "buyLabel": "HOTAI購 exact-model 現貨新品",
    "specs": [
      "除濕能力：25 L／日；官方標示適用約 31 坪",
      "雙變頻壓縮機與風扇；Plasmacluster PCI 25000 淨化離子",
      "水箱 5.8L；支援連續排水；四輪萬向移動",
      "能源效率第 1 級（2026）；能源因數值 3.06 L/kWh、年耗電量 184 kWh",
      "尺寸：寬 37.4 x 深 31.5 x 高 69.3 cm；淨重 18.8 kg",
      "弱運轉音 38 dB；額定消耗功率 340W",
      "電源：110V／60Hz"
    ],
    "description": "SHARP 2026 年台灣現售的大坪數乾淨方 Pro，以 25L、雙變頻、5.8L 水箱、PCI 25000 與一級能效，補上 20L 以上客廳／全室除濕的日系旗艦比較。",
    "pros": [
      "25L、約 31 坪與 5.8L 大水箱適合大客廳或連續梅雨",
      "雙變頻、一級能效與 38dB 弱運轉兼顧效率和低速噪音",
      "台灣官方 exact-model 尺寸、淨重、110V／60Hz 與延長保固條件均可核對"
    ],
    "cons": [
      "18.8 kg 且高度 69.3 cm，跨樓層搬動與收納負擔較大",
      "PCI 淨化不等同完整 HEPA 空氣清淨機，過敏需求仍需另評估",
      "本輪只找到 2026 新品陣容與促銷活動，未找到 exact-model 正式上市日期"
    ],
    "bestFor": "約 15–31 坪客餐廳、開放式空間或梅雨期需大量除濕，並偏好日系公司貨長保固的家庭。",
    "recommendation": "大坪數日系變頻推薦：25L、高能源因數與大水箱提供明確比較價值；若只用於小臥室，可改選體積與價格更低的 10–14L 機型。",
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 20700,
      "currency": "TWD",
      "converted": 20700,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1286065599&cgp=20700",
      "sourceTitle": "LBJ 歷史價格：HOTAI購 SHARP DW-UW25HT-W 25L 除濕機",
      "evidenceSnippet": "LBJ 的 HOTAI購 exact-model 新品價格歷史於 2026-07-28、08-06 與 08-28 均記錄 NT$20,700。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-08-28",
      "note": "採完全相同台灣型號、HOTAI購現貨新品的公開歷史曲線；未扣除信用卡、點數或會員個人化回饋。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-08-29",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SHARP DW-UW25HT-W\" (problem OR issue OR defect OR failure)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SHARP%20DW-UW25HT-W%22%20(problem%20OR%20issue%20OR%20defect%20OR%20failure)",
          "targetHost": "reddit.com"
        },
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SHARP DW-UW25HT-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SHARP%20DW-UW25HT-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        }
      ]
    },
    "score": 91,
    "voltage": "110V／60Hz 台灣公司貨；額定消耗功率 340W",
    "warranty": "SHARP 台灣公司貨；本體 3 年、壓縮機 5 年，DW-UW25HT-W 完成官方登錄後壓縮機可延長至 10 年，依活動條款",
    "tags": [
      "25L",
      "雙變頻",
      "一級能效",
      "5.8L水箱",
      "PCI 25000"
    ]
  }
]);
})();

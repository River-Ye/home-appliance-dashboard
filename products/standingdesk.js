(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("standingdesk", [
  {
    "id": "standingdesk-loctek-f2-120",
    "category": "standingdesk",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "Loctek",
    "model": "F2",
    "name": "智慧記憶電動升降桌 120x60",
    "price": {
      "currency": "TWD",
      "amount": 9999,
      "converted": 9999,
      "confidence": "momo購物 2026-07-16 商品頁公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBC1TA900HSZZ8/000001_1738574919.jpg",
    "buyUrl": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=12281947",
    "buyLabel": "momo購物",
    "specs": [
      "電動升降",
      "高度記憶",
      "120x60cm",
      "小宅友善",
      "桌板厚度：未標示"
    ],
    "description": "Loctek F2 是萬元上下最容易入手的完整電動升降桌，適合家用與租屋族先建立坐站工作流。",
    "pros": [
      "價格落在甜蜜點",
      "品牌辨識度高",
      "尺寸不佔空間"
    ],
    "cons": [
      "120x60cm 桌面較緊湊",
      "穩定性不如高階四腳款"
    ],
    "bestFor": "小書房、租屋處或第一次買升降桌的人。",
    "recommendation": "本類 Top Pick：價格、品牌、記憶升降與小宅尺寸最均衡，先買它通常不容易踩雷。",
    "score": 91,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "CP 值",
      "記憶高度",
      "小宅"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 6918,
      "currency": "TWD",
      "converted": 6918,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1216798602&cgp=9999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Loctek 樂歌 F2 120x60cm 智慧記憶電動升降桌/弧形桌面設計/可加裝抽屜/滾輪/螢幕支架",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / Loctek 樂歌 F2 120x60cm 智慧記憶電動升降桌/弧形桌面設計/可加裝抽屜/滾輪/螢幕支架」最低價為 NT$6,918，最低點日期 2026-06-21。",
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
          "query": "site:mobile01.com \"Loctek F2\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Loctek%20F2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Loctek F2\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Loctek%20F2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-irocks-d01-120",
    "category": "standingdesk",
    "rank": 2,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRocks",
    "model": "D01-SL-DX 120x80",
    "name": "D01-SL-DX 電動升降桌 120x80",
    "price": {
      "currency": "TWD",
      "amount": 14790,
      "converted": 14790,
      "confidence": "PChome 2026-07-16 UTC API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBJ4CA900I9XVY/000001_1773043590.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBJ4C-A900I9XVY",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "120x80cm",
      "台灣製造",
      "不含組裝",
      "桌板厚度：2.5cm"
    ],
    "description": "iRocks D01-SL-DX 強項是台灣品牌與較深的 80cm 桌面，適合螢幕、鍵盤與筆電一起擺。",
    "pros": [
      "台灣品牌售後較好溝通",
      "80cm 深度好用",
      "桌面尺寸適合雙螢幕"
    ],
    "cons": [
      "價格高於入門款",
      "不含組裝需自行評估"
    ],
    "bestFor": "想買台灣品牌、桌深要夠的人。",
    "recommendation": "售後穩定推薦：比低價款貴，但桌面深度與本地服務更安心。",
    "score": 90,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "台灣品牌",
      "120x80",
      "雙螢幕"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 12861,
      "currency": "TWD",
      "converted": 12861,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1242226968&cgp=14790",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：irocks D01-SL-DX 電動升降桌 菸草橡木紋 120x80 cm 不含組裝",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / irocks D01-SL-DX 電動升降桌 菸草橡木紋 120x80 cm 不含組裝」最低價為 NT$12,861，最低點日期 2026-05-31。",
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
          "query": "site:mobile01.com \"iRocks D01-SL-DX 120x80\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22iRocks%20D01-SL-DX%20120x80%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"iRocks D01-SL-DX 120x80\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22iRocks%20D01-SL-DX%20120x80%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-irocks-d01-150",
    "category": "standingdesk",
    "rank": 3,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRocks",
    "model": "D01-SL-DX 150x80",
    "name": "D01-SL-DX 電動升降桌 150x80",
    "price": {
      "currency": "TWD",
      "amount": 15490,
      "converted": 15490,
      "confidence": "PChome 2026-07-16 UTC API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBJ4CA900HUG3C/000001_1773043903.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBJ4C-A900HUG3C",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "150x80cm",
      "台灣製造",
      "不含組裝",
      "桌板厚度：2.5cm"
    ],
    "description": "150cm 桌寬明顯比 120cm 舒展，對雙螢幕、麥克風或手寫區更友善。",
    "pros": [
      "桌面寬裕",
      "保留 iRocks 售後優勢",
      "適合長期工作站"
    ],
    "cons": [
      "需要較大房間",
      "自行組裝門檻較高"
    ],
    "bestFor": "雙螢幕、桌面設備較多的工作者。",
    "recommendation": "尺寸升級推薦：只比 120cm 款多一些預算，使用彈性提升很多。",
    "score": 89,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "150x80",
      "工作站",
      "台灣品牌"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 13491,
      "currency": "TWD",
      "converted": 13491,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1232845200&cgp=15490",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：irocks D01-SL-DX 電動升降桌 菸草橡木紋 150x80 cm 不含組裝",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / irocks D01-SL-DX 電動升降桌 菸草橡木紋 150x80 cm 不含組裝」最低價為 NT$13,491，最低點日期 2026-05-31。",
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
          "query": "site:mobile01.com \"iRocks D01-SL-DX 150x80\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22iRocks%20D01-SL-DX%20150x80%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"iRocks D01-SL-DX 150x80\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22iRocks%20D01-SL-DX%20150x80%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-irocks-d01-160",
    "category": "standingdesk",
    "rank": 4,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRocks",
    "model": "D01-SL-DX 160x80",
    "name": "D01-SL-DX 電動升降桌 160x80",
    "price": {
      "currency": "TWD",
      "amount": 15990,
      "converted": 15990,
      "confidence": "PChome 2026-07-16 UTC API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBJ4CA900ITV12/000001_1773043461.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBJ4C-A900ITV12",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "160x80cm",
      "台灣製造",
      "不含組裝",
      "桌板厚度：2.5cm"
    ],
    "description": "160cm 是大型單人工作桌的甜蜜尺寸，能同時放雙螢幕、筆電架與喇叭。",
    "pros": [
      "桌寬非常夠用",
      "桌深 80cm 對姿勢友善",
      "同系列規格成熟"
    ],
    "cons": [
      "空間需求高",
      "搬運與組裝較費力"
    ],
    "bestFor": "需要大型桌面但還不想上 180cm 的人。",
    "recommendation": "大桌面推薦：想一次買到長期使用尺寸，160x80 是合理上限。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "160x80",
      "大型桌面",
      "雙螢幕"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ iRocks D01-SL-DX 160x80: 蝦皮商城 - irocks 艾芮克官方授權網路旗艦店 irocks 160*80 公分 電動升降桌 北歐雲杉 D01-SL-DX 非採用通路或含排除條件；LBJ iRocks D01-SL-DX 160x80: 誠品線上 irocks D01-SL-DX 電動升降桌 北歐雲杉 160*80 公分 非採用通路或含排除條件；BigGo DQBJ4C-A900ITV12: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DQBJ4C-A900ITV12/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"iRocks D01-SL-DX 160x80\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22iRocks%20D01-SL-DX%20160x80%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"iRocks D01-SL-DX 160x80\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22iRocks%20D01-SL-DX%20160x80%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-irocks-d01-180",
    "category": "standingdesk",
    "rank": 5,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRocks",
    "model": "D01-SL-DX 180x80",
    "name": "D01-SL-DX 電動升降桌 180x80",
    "price": {
      "currency": "TWD",
      "amount": 16490,
      "converted": 16490,
      "confidence": "PChome 2026-07-16 UTC API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBJ4CA900HUGSO/000001_1773043706.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBJ4C-A900HUGSO",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "180x80cm",
      "台灣製造",
      "不含組裝",
      "桌板厚度：2.5cm"
    ],
    "description": "180cm 適合把完整桌機、雙螢幕、音響與文件區全放上桌，是真正的大工作台。",
    "pros": [
      "桌面最大",
      "多人/多設備也夠用",
      "同系列價格差距不大"
    ],
    "cons": [
      "需要確認房間動線",
      "桌面越大晃動感越要留意"
    ],
    "bestFor": "有固定書房、設備很多的工作者或創作者。",
    "recommendation": "大型工作台推薦：如果空間足夠，單位桌面價格比小尺寸划算。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "180x80",
      "大型工作台",
      "創作者"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 14391,
      "currency": "TWD",
      "converted": 14391,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1232845201&cgp=16490",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：irocks D01-SL-DX 電動升降桌 菸草橡木紋 180x80 cm 不含組裝",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / irocks D01-SL-DX 電動升降桌 菸草橡木紋 180x80 cm 不含組裝」最低價為 NT$14,391，最低點日期 2026-05-31。",
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
          "query": "site:mobile01.com \"iRocks D01-SL-DX 180x80\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22iRocks%20D01-SL-DX%20180x80%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"iRocks D01-SL-DX 180x80\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22iRocks%20D01-SL-DX%20180x80%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-logis-kg11",
    "category": "standingdesk",
    "rank": 6,
    "budget": "value",
    "channel": "tw",
    "brand": "LOGIS",
    "model": "KG11-1165",
    "name": "智慧碳纖電動升降桌",
    "price": {
      "currency": "TWD",
      "amount": 7486,
      "converted": 7486,
      "confidence": "Yahoo購物中心 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBAGMA900FN1YH/000001_1665647044.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/%E9%82%8F%E7%88%B5LOGIS-i%E6%99%BA%E6%85%A7%E7%A2%B3%E7%BA%96%E9%9B%BB%E5%8B%95%E5%8D%87%E9%99%8D%E6%A1%8C-%E7%AB%99%E7%AB%8B%E6%A1%8C-%E9%9B%BB%E8%85%A6%E6%A1%8C%E9%BB%9E%E8%85%A6%E6%A1%8C-KG11-1165-10257781.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "電動升降",
      "電腦桌",
      "辦公桌",
      "入門價位",
      "桌板厚度：未標示"
    ],
    "description": "LOGIS KG11-1165 價格低於多數知名品牌電動桌，是預算優先的入門選項。",
    "pros": [
      "價格親民",
      "通路庫存明確",
      "適合先試坐站工作"
    ],
    "cons": [
      "品牌售後與穩定口碑不如 iRocks/Loctek",
      "規格細節需看頁面確認"
    ],
    "bestFor": "預算有限、想先體驗升降桌的人。",
    "recommendation": "入門 CP 推薦：價格壓得低，但建議對照承重與組裝條件後再下單。",
    "score": 81,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "入門",
      "低價",
      "辦公桌"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 5914,
      "currency": "TWD",
      "converted": 5914,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1150846299&cgp=7486",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：LOGIS邏爵家具 i智慧碳纖電動升降桌 站立桌 電腦桌點腦桌【 KG11-1165】",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / LOGIS邏爵家具 i智慧碳纖電動升降桌 站立桌 電腦桌點腦桌【 KG11-1165】」最低價為 NT$5,914，最低點日期 2024-04-16。",
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
          "query": "site:mobile01.com \"LOGIS KG11-1165\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LOGIS%20KG11-1165%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LOGIS KG11-1165\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LOGIS%20KG11-1165%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-nitori-up002",
    "category": "standingdesk",
    "rank": 7,
    "budget": "value",
    "channel": "tw",
    "brand": "NITORI",
    "model": "UP002",
    "name": "電動升降桌 UP002 WH",
    "price": {
      "currency": "TWD",
      "amount": 7191,
      "converted": 7191,
      "confidence": "momo購物網 2026-07-18 UTC 商品頁公開現貨價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQCI0AA900IW7RS/000001_1768543932.jpg",
    "buyUrl": "https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=14070530",
    "buyLabel": "momo購物",
    "specs": [
      "電動升降",
      "白色桌面",
      "家居通路",
      "小空間",
      "桌板厚度：未標示"
    ],
    "description": "NITORI UP002 適合想在家居通路買到簡潔外型與基本電動升降的人。",
    "pros": [
      "價格好入手",
      "外型簡潔",
      "家居品牌容易搭配家具"
    ],
    "cons": [
      "高階穩定與承重資料需再確認",
      "擴充性較少"
    ],
    "bestFor": "偏好簡潔白色家具、預算在八千上下的人。",
    "recommendation": "家居通路推薦：不追求電競外觀，想要乾淨工作桌可看這台。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "NITORI",
      "白色",
      "小空間"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 6831,
      "currency": "TWD",
      "converted": 6831,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1250873365&cgp=7690",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【NITORI 宜得利家居】◎電腦桌 辦公桌 工作桌 電動升降桌 UP002 MBR/BK",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【NITORI 宜得利家居】◎電腦桌 辦公桌 工作桌 電動升降桌 UP002 MBR/BK」最低價為 NT$6,831，最低點日期 2026-03-01。",
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
          "query": "site:mobile01.com \"NITORI UP002\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22NITORI%20UP002%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"NITORI UP002\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22NITORI%20UP002%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-nitori-up006-1260",
    "category": "standingdesk",
    "rank": 8,
    "budget": "value",
    "channel": "tw",
    "brand": "NITORI",
    "model": "UP006 1260",
    "name": "電動升降桌 UP006 1260WH/WH",
    "price": {
      "currency": "TWD",
      "amount": 8490,
      "converted": 8490,
      "confidence": "PChome 2026-07-16 API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQCI0AA900K15SP/000001_1779286467.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQCI0A-A900K15SP",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "126cm 級桌面",
      "白色",
      "家居風格",
      "桌板厚度：未標示"
    ],
    "description": "UP006 1260 比入門小桌再寬一些，仍維持家居感與較低預算。",
    "pros": [
      "尺寸比 120cm 更舒服",
      "價格仍親民",
      "外型乾淨"
    ],
    "cons": [
      "非重度設備工作站取向",
      "高負載穩定性需現場評估"
    ],
    "bestFor": "一般筆電加一台外接螢幕的居家辦公。",
    "recommendation": "小升級推薦：比 UP002 多一點寬度，日常工作更好用。",
    "score": 79,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "NITORI",
      "126cm",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：BigGo DQCI0A-A900K15SP: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DQCI0A-A900K15SP/product?p=1；BigGo NITORI UP006 1260: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/NITORI%20UP006%201260/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"NITORI UP006 1260\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22NITORI%20UP006%201260%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"NITORI UP006 1260\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22NITORI%20UP006%201260%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-nitori-up006-1460",
    "category": "standingdesk",
    "rank": 9,
    "budget": "mid",
    "channel": "tw",
    "brand": "NITORI",
    "model": "UP006 1460",
    "name": "電動升降桌 UP006 1460WH/WH",
    "price": {
      "currency": "TWD",
      "amount": 9490,
      "converted": 9490,
      "confidence": "PChome 2026-07-16 API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQCI0AA900K15T1/000001_1779269416.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQCI0A-A900K15T1",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "146cm 級桌面",
      "白色",
      "家居風格",
      "桌板厚度：未標示"
    ],
    "description": "146cm 寬度更接近主力工作桌，適合一台 27 吋螢幕加筆電或雙螢幕。",
    "pros": [
      "桌寬更實用",
      "價格仍在一萬元內",
      "適合家居配置"
    ],
    "cons": [
      "承重與線材管理需另查",
      "不是電競或重設備定位"
    ],
    "bestFor": "想要白色大桌面、但預算仍想壓在萬元左右的人。",
    "recommendation": "大尺寸 CP 推薦：家用大桌面價格漂亮，適合重視外觀整潔的人。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "146cm",
      "NITORI",
      "大桌面"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：BigGo DQCI0A-A900K15T1: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DQCI0A-A900K15T1/product?p=1；BigGo NITORI UP006 1460: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/NITORI%20UP006%201460/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"NITORI UP006 1460\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22NITORI%20UP006%201460%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"NITORI UP006 1460\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22NITORI%20UP006%201460%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-cougar-royal-mossa",
    "category": "standingdesk",
    "rank": 10,
    "budget": "mid",
    "channel": "tw",
    "brand": "COUGAR",
    "model": "ROYAL MOSSA 150",
    "name": "ROYAL MOSSA 150 加大電動升降桌",
    "price": {
      "currency": "TWD",
      "amount": 10990,
      "converted": 10990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBB6OA900HZWA5/000001_1783085629.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBB6O-A900HZWA5",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "150cm 級桌面",
      "白色",
      "電競品牌",
      "桌板厚度：1.8cm"
    ],
    "description": "COUGAR ROYAL MOSSA 150 用電競品牌外觀切入，價格比高階桌親民。",
    "pros": [
      "150cm 大桌面",
      "外型較有設計感",
      "價格中段"
    ],
    "cons": [
      "品牌長期桌類口碑少於椅/周邊",
      "庫存較少"
    ],
    "bestFor": "想搭白色或電競風工作桌的人。",
    "recommendation": "外型取向推薦：兼顧大桌面與視覺風格，適合遊戲工作混用。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "電競",
      "150cm",
      "白色"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 10990,
      "currency": "TWD",
      "converted": 10990,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1255690471&cgp=10990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【COUGAR 美洲獅】Royal Mossa 150 電動升降桌(白色/ 自行組裝/桌面寬度150公分)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【COUGAR 美洲獅】Royal Mossa 150 電動升降桌(白色/ 自行組裝/桌面寬度150公分)」最低價為 NT$10,990，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"COUGAR ROYAL MOSSA 150\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22COUGAR%20ROYAL%20MOSSA%20150%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"COUGAR ROYAL MOSSA 150\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22COUGAR%20ROYAL%20MOSSA%20150%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-cougar-e-ares",
    "category": "standingdesk",
    "rank": 11,
    "budget": "mid",
    "channel": "tw",
    "brand": "COUGAR",
    "model": "E-Ares 120 RGB",
    "name": "E-Ares 120 RGB 電動升降桌",
    "price": {
      "currency": "TWD",
      "amount": 12990,
      "converted": 12990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBB6OA900JPZTQ/000001_1774958562.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBB6O-A900JPZTQ",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "120cm 級桌面",
      "RGB",
      "電競桌",
      "桌板厚度：1.8cm"
    ],
    "description": "E-Ares 120 RGB 偏電競桌定位，對外觀、燈效與桌機氛圍有加分。",
    "pros": [
      "電競風格完整",
      "120cm 較好擺放",
      "品牌辨識度高"
    ],
    "cons": [
      "RGB 不是必要功能",
      "同價位可買較大一般桌"
    ],
    "bestFor": "偏電競房、RGB 佈置或桌機玩家。",
    "recommendation": "電競桌推薦：想要升降功能又保留遊戲房風格，可列入比較。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "RGB",
      "電競",
      "120cm"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ COUGAR E-Ares 120 RGB: 光華商場3C專賣店 【光華商場3C專賣店】COUGAR 美洲獅 E-Ares 120 RGB 120x60cm 電動升降電競桌 型號/規格不相符；LBJ COUGAR E-Ares 120 RGB: 原價屋 【原價屋】Cougar E-Ares 120 電競桌-電動升降/四組高度記憶/安全防護設計/承載80公斤/Rgb 非採用通路或含排除條件；LBJ COUGAR E-Ares 120 RGB: PCHome購物 COUGAR 美洲獅 E-Ares 120 RGB 電動升降桌 電競桌 電腦桌 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"COUGAR E-Ares 120 RGB\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22COUGAR%20E-Ares%20120%20RGB%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"COUGAR E-Ares 120 RGB\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22COUGAR%20E-Ares%20120%20RGB%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-cougar-e-grav",
    "category": "standingdesk",
    "rank": 12,
    "budget": "mid",
    "channel": "tw",
    "brand": "COUGAR",
    "model": "E-GRAV 160",
    "name": "E-GRAV 160 雙馬達電動升降桌",
    "price": {
      "currency": "TWD",
      "amount": 14990,
      "converted": 14990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBB6OA900JHYFV/000001_1764230649.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBB6O-A900JHYFV",
    "buyLabel": "PChome",
    "specs": [
      "雙馬達",
      "160cm 級桌面",
      "電競桌",
      "電動升降",
      "桌板厚度：1.5cm"
    ],
    "description": "E-GRAV 160 把桌寬拉到 160cm 並標示雙馬達，適合桌面設備較多的玩家。",
    "pros": [
      "雙馬達規格",
      "160cm 大桌面",
      "適合多螢幕"
    ],
    "cons": [
      "價格接近 iRocks",
      "需確認組裝與保固細節"
    ],
    "bestFor": "遊戲與工作混用、桌面設備多的人。",
    "recommendation": "電競大桌推薦：如果想要大桌面與雙馬達，這台比 RGB 小桌更務實。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "雙馬達",
      "160cm",
      "電競"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ COUGAR E-GRAV 160: Momo富邦購物 (店+)【COUGAR 美洲獅】E-GRAV 160 電動升降電競桌(自行組裝/雙馬達/兩組高度記憶) 型號/規格不相符；LBJ COUGAR E-GRAV 160: Momo富邦購物 【COUGAR 美洲獅】E-GRAV 160 電動升降電競桌(自行組裝/雙馬達/兩組高度記憶) 型號/規格不相符；LBJ COUGAR E-GRAV 160: 樂天市場 - 米特3C數位 米特3C數位–Cougar 美洲獅 E-GRAV 160/180 升降電競桌 E-GRAV 180/E-GRAV 160 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"COUGAR E-GRAV 160\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22COUGAR%20E-GRAV%20160%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"COUGAR E-GRAV 160\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22COUGAR%20E-GRAV%20160%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-apexgaming-lumi-white",
    "category": "standingdesk",
    "rank": 13,
    "budget": "mid",
    "channel": "tw",
    "brand": "Apexgaming",
    "model": "LUMI 白色",
    "name": "LUMI 落地型鋼化玻璃電動升降桌 白色",
    "price": {
      "currency": "TWD",
      "amount": 14990,
      "converted": 14990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQCBEMA900GJUOI/000001_1691116279.png",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQCBEM-A900GJUOI",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "鋼化玻璃桌面",
      "白色",
      "落地型",
      "桌板厚度：未標示"
    ],
    "description": "Apexgaming LUMI 用鋼化玻璃桌面與白色外觀做差異化，視覺效果比一般木紋桌突出。",
    "pros": [
      "外型精緻",
      "玻璃桌面好清潔",
      "白色系桌搭友善"
    ],
    "cons": [
      "玻璃桌面怕敲擊與指紋",
      "重量與搬運需留意"
    ],
    "bestFor": "重視桌面外觀、想做白色系桌搭的人。",
    "recommendation": "設計感推薦：不是純 CP 選項，但視覺質感明顯有差。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "玻璃桌面",
      "白色",
      "桌搭"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Apexgaming LUMI 白色: 露天拍賣 - 宅配滿$490免運｜ PC24h購物 露天旗艦店 (71076個評價) 【PChome 24h購物】美商艾湃 Apexgaming LUMI 落地型 時尚鋼化玻璃版 電動升降桌 白色 R99N 型號/規格不相符；BigGo DQCBEM-A900GJUOI: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DQCBEM-A900GJUOI/product?p=1；BigGo Apexgaming LUMI 白色: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/Apexgaming%20LUMI%20%E7%99%BD%E8%89%B2/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Apexgaming LUMI 白色\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Apexgaming%20LUMI%20%E7%99%BD%E8%89%B2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Apexgaming LUMI 白色\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Apexgaming%20LUMI%20%E7%99%BD%E8%89%B2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-apexgaming-lumi",
    "category": "standingdesk",
    "rank": 14,
    "budget": "mid",
    "channel": "tw",
    "brand": "Apexgaming",
    "model": "LUMI 深色",
    "name": "LUMI 落地型鋼化玻璃電動升降桌 深色",
    "price": {
      "currency": "TWD",
      "amount": 14990,
      "converted": 14990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DEDD8CA900FK2JV/000001_1663900736.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEDD8C-A900FK2JV",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "鋼化玻璃桌面",
      "落地型",
      "電競風格",
      "桌板厚度：未標示"
    ],
    "description": "Apexgaming LUMI 深色款採鋼化玻璃桌面，色系偏沉穩，適合黑灰桌機與電競週邊。",
    "pros": [
      "視覺辨識度高",
      "適合桌機展示",
      "鋼化玻璃桌面"
    ],
    "cons": [
      "CP 值不如一般木紋升降桌",
      "需留意玻璃桌使用習慣"
    ],
    "bestFor": "想要展示型桌面與電競房氛圍的人。",
    "recommendation": "桌搭推薦：LUMI 深色款外觀是主要賣點，重視實用 CP 可先看 Loctek/iRocks。",
    "score": 76,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "玻璃桌面",
      "電競",
      "桌搭"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：BigGo DEDD8C-A900FK2JV: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DEDD8C-A900FK2JV/product?p=1；BigGo Apexgaming LUMI 深色: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/Apexgaming%20LUMI%20%E6%B7%B1%E8%89%B2/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Apexgaming LUMI 深色\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Apexgaming%20LUMI%20%E6%B7%B1%E8%89%B2%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Apexgaming LUMI 深色\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Apexgaming%20LUMI%20%E6%B7%B1%E8%89%B2%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-cougar-e-grav-180",
    "category": "standingdesk",
    "rank": 15,
    "budget": "mid",
    "channel": "tw",
    "brand": "COUGAR",
    "model": "E-GRAV 180",
    "name": "E-GRAV 180 雙馬達電動升降桌",
    "price": {
      "currency": "TWD",
      "amount": 15990,
      "converted": 15990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBB6OA900JHYGC/000001_1764230983.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBB6O-A900JHYGC",
    "buyLabel": "PChome",
    "specs": [
      "雙馬達",
      "180cm 級桌面",
      "電競桌",
      "電動升降",
      "桌板厚度：1.5cm"
    ],
    "description": "E-GRAV 180 是更大的 COUGAR 雙馬達升降桌，適合需要完整大桌面的玩家或創作者。",
    "pros": [
      "180cm 大桌面",
      "雙馬達規格",
      "適合多螢幕與桌機"
    ],
    "cons": [
      "房間空間需求高",
      "價格已接近中高階工作桌"
    ],
    "bestFor": "固定書房、多螢幕、桌機與周邊設備很多的人。",
    "recommendation": "電競大桌推薦：想要 180cm 完整桌體與雙馬達，可取代配件型套組。",
    "score": 79,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "雙馬達",
      "180cm",
      "電競"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ COUGAR E-GRAV 180: 樂天市場 - 米特3C數位 米特3C數位–Cougar 美洲獅 E-GRAV 160/180 升降電競桌 E-GRAV 180/E-GRAV 160 型號/規格不相符；LBJ COUGAR E-GRAV 180: Momo富邦購物 【COUGAR 美洲獅】E-GRAV 180 電動升降電競桌(自行組裝/雙馬達/兩組高度記憶) 型號/規格不相符；LBJ COUGAR E-GRAV 180: 原價屋 【原價屋】Cougar E-GRAV 180 電競桌-電動升降 (黑色)/雙馬達/碳纖維紋理桌面/承載120公斤/180x80 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"COUGAR E-GRAV 180\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22COUGAR%20E-GRAV%20180%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"COUGAR E-GRAV 180\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22COUGAR%20E-GRAV%20180%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-extra-16-dsbc8ra900huota",
    "category": "standingdesk",
    "rank": 16,
    "budget": "mid",
    "channel": "tw",
    "brand": "Water3F",
    "model": "快裝安全版 F1",
    "name": "智慧記憶電動升降桌 120x60",
    "price": {
      "currency": "TWD",
      "amount": 8999,
      "converted": 8999,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBC8RA900HUOTA/000001_1728700090.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBC8R-A900HUOTA",
    "buyLabel": "PChome",
    "specs": [
      "120x60cm",
      "記憶高度",
      "快裝",
      "電動升降",
      "桌板厚度：未標示"
    ],
    "description": "Water3F 快裝安全版 F1 補進本分類比較池，重點是120x60cm、記憶高度、快裝，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "價格低於多數品牌桌",
      "附桌板即可直接比較"
    ],
    "cons": [
      "承重與穩定度需看使用重量",
      "品牌售後需確認"
    ],
    "bestFor": "居家辦公、雙螢幕或想久坐久站切換的人。",
    "recommendation": "補充推薦：智慧記憶電動升降桌 120x60 的優勢在價格低於多數品牌桌，但仍建議把承重與穩定度需看使用重量納入取捨。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "120x60",
      "記憶高度",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Water3F 快裝安全版 F1: Yahoo拍賣 - 耀偉實業有限公司 (731個評價) 【耀偉】樂歌Water3F 智慧記憶電動升降桌 快裝安全版 F1-100X60(原木色桌板+白色桌腳) 新北市 型號/規格不相符；LBJ Water3F 快裝安全版 F1: Yahoo拍賣 - 耀偉實業有限公司 (731個評價) 【耀偉】樂歌Water3F 智慧記憶電動升降桌 快裝安全版 F1-120X60 新北市 型號/規格不相符；LBJ Water3F 快裝安全版 F1: 露天拍賣 - 耀偉實業有限公司 (167個評價) 【耀偉】樂歌Water3F 智慧記憶電動升降桌 快裝安全版 F1 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Water3F 快裝安全版 F1\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Water3F%20%E5%BF%AB%E8%A3%9D%E5%AE%89%E5%85%A8%E7%89%88%20F1%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Water3F 快裝安全版 F1\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Water3F%20%E5%BF%AB%E8%A3%9D%E5%AE%89%E5%85%A8%E7%89%88%20F1%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-extra-17-debhcta900bw2x6",
    "category": "standingdesk",
    "rank": 17,
    "budget": "value",
    "channel": "tw",
    "brand": "Kraftdale",
    "model": "人體工學電動升降桌",
    "name": "柚木色電動升降桌",
    "price": {
      "currency": "TWD",
      "amount": 6890,
      "converted": 6890,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DEBHCTA900BW2X6/000001_1634603420.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEBHCT-A900BW2X6",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "柚木色",
      "辦公桌",
      "人體工學",
      "桌板厚度：未標示"
    ],
    "description": "Kraftdale 人體工學電動升降桌 補進本分類比較池，重點是電動升降、柚木色、辦公桌，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "價格親民",
      "桌面風格適合居家"
    ],
    "cons": [
      "規格資訊需以頁面為準",
      "長期穩定度口碑較少"
    ],
    "bestFor": "居家辦公、雙螢幕或想久坐久站切換的人。",
    "recommendation": "補充推薦：柚木色電動升降桌 的優勢在價格親民，但仍建議把規格資訊需以頁面為準納入取捨。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "居家辦公",
      "電動",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Kraftdale 人體工學電動升降桌: Momo富邦購物 【Kraftdale】ERGOEZ LIGHT 電動升降桌(人體工學書桌 升降桌 成長書桌 電腦桌 電競桌) 型號/規格不相符；LBJ Kraftdale 人體工學電動升降桌: PCHome購物 美國Kraftdale 人體工學電動升降桌-柚木色 型號/規格不相符；BigGo DEBHCT-A900BW2X6: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/DEBHCT-A900BW2X6/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Kraftdale 人體工學電動升降桌\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Kraftdale%20%E4%BA%BA%E9%AB%94%E5%B7%A5%E5%AD%B8%E9%9B%BB%E5%8B%95%E5%8D%87%E9%99%8D%E6%A1%8C%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Kraftdale 人體工學電動升降桌\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Kraftdale%20%E4%BA%BA%E9%AB%94%E5%B7%A5%E5%AD%B8%E9%9B%BB%E5%8B%95%E5%8D%87%E9%99%8D%E6%A1%8C%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-extra-18-dsbc1ta900ht0du",
    "category": "standingdesk",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "brand": "Loctek",
    "model": "F2 智慧記憶電動升降桌",
    "name": "120x60 黑色電動升降桌",
    "price": {
      "currency": "TWD",
      "amount": 9999,
      "converted": 9999,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBC1TA900HT0DU/000001_1738574875.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBC1T-A900HT0DU",
    "buyLabel": "PChome",
    "specs": [
      "120x60cm",
      "智慧記憶",
      "黑色",
      "電動升降",
      "桌板厚度：未標示"
    ],
    "description": "Loctek F2 智慧記憶電動升降桌 補進本分類比較池，重點是120x60cm、智慧記憶、黑色，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "Loctek 類型成熟",
      "小桌面適合有限空間"
    ],
    "cons": [
      "120x60 對多螢幕偏小",
      "黑色較顯灰塵"
    ],
    "bestFor": "居家辦公、雙螢幕或想久坐久站切換的人。",
    "recommendation": "補充推薦：120x60 黑色電動升降桌 的優勢在Loctek 類型成熟，但仍建議把120x60 對多螢幕偏小納入取捨。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "Loctek",
      "120x60",
      "記憶高度"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 6918,
      "currency": "TWD",
      "converted": 6918,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1216798602&cgp=9999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Loctek 樂歌 F2 120x60cm 智慧記憶電動升降桌/弧形桌面設計/可加裝抽屜/滾輪/螢幕支架",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / Loctek 樂歌 F2 120x60cm 智慧記憶電動升降桌/弧形桌面設計/可加裝抽屜/滾輪/螢幕支架」最低價為 NT$6,918，最低點日期 2026-06-21。",
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
          "query": "site:mobile01.com \"Loctek F2 智慧記憶電動升降桌\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Loctek%20F2%20%E6%99%BA%E6%85%A7%E8%A8%98%E6%86%B6%E9%9B%BB%E5%8B%95%E5%8D%87%E9%99%8D%E6%A1%8C%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Loctek F2 智慧記憶電動升降桌\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Loctek%20F2%20%E6%99%BA%E6%85%A7%E8%A8%98%E6%86%B6%E9%9B%BB%E5%8B%95%E5%8D%87%E9%99%8D%E6%A1%8C%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-extra-19-dcbb6oa900hsvt2",
    "category": "standingdesk",
    "rank": 19,
    "budget": "mid",
    "channel": "tw",
    "brand": "COUGAR",
    "model": "E-STAR 140",
    "name": "電競電動升降桌",
    "price": {
      "currency": "TWD",
      "amount": 13990,
      "converted": 13990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBB6OA900HSVT2/000001_1782822944.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBB6O-A900HSVT2",
    "buyLabel": "PChome",
    "specs": [
      "140cm",
      "電競桌",
      "電動升降",
      "寬桌面",
      "桌板厚度：1.5cm"
    ],
    "description": "COUGAR E-STAR 140 補進本分類比較池，重點是140cm、電競桌、電動升降，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "桌寬適合多螢幕",
      "品牌電競定位明確"
    ],
    "cons": [
      "造型較電競",
      "不一定適合極簡辦公室"
    ],
    "bestFor": "居家辦公、雙螢幕或想久坐久站切換的人。",
    "recommendation": "補充推薦：電競電動升降桌 的優勢在桌寬適合多螢幕，但仍建議把造型較電競納入取捨。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "140cm",
      "電競",
      "多螢幕"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ COUGAR E-STAR 140: 蝦皮商城 - 原價屋Coolpc Cougar美洲獅 E-STAR 120 / 140 電動升降桌/仿碳纖維桌面/線材收納槽/原價屋 型號/規格不相符；LBJ COUGAR E-STAR 140: Momo富邦購物 (店+)【COUGAR 美洲獅】Cougar 美洲獅 E-STAR 120/140 電動升降桌 電競桌 升降桌 獨立螢幕支架 高度記憶 理線槽 耳機掛架 型號/規格不相符；LBJ COUGAR E-STAR 140: 蝦皮商城 - COUGAR 美洲獅官方授權旗艦店 Cougar 美洲獅 E-STAR 120/140 電動升降桌 電競桌 升降桌 獨立螢幕支架 高度記憶 理線槽 耳機掛架 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"COUGAR E-STAR 140\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22COUGAR%20E-STAR%20140%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"COUGAR E-STAR 140\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22COUGAR%20E-STAR%20140%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-extra-20-dcbb6oa900frsk6",
    "category": "standingdesk",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "E-home",
    "model": "一片式鴨嘴斜沿雙節USB電動記憶升降桌",
    "name": "120cm USB 電動記憶升降桌",
    "price": {
      "currency": "TWD",
      "amount": 6755,
      "converted": 6755,
      "confidence": "Yahoo購物中心 2026-07-11 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBB6OA900FRSK6/000001_1669107568.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/E-home-%E4%B8%80%E7%89%87%E5%BC%8F%E9%B4%A8%E5%98%B4%E6%96%9C%E6%B2%BF%E9%9B%99%E7%AF%80USB%E9%9B%BB%E5%8B%95%E8%A8%98%E6%86%B6%E5%8D%87%E9%99%8D%E6%A1%8C-%E5%AF%AC120cm-%E5%85%A9%E8%89%B2%E5%8F%AF%E9%81%B8-10247534.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "120cm",
      "USB",
      "記憶升降",
      "一片式桌面",
      "桌板厚度：未標示"
    ],
    "description": "E-home 一片式鴨嘴斜沿雙節USB電動記憶升降桌 補進本分類比較池，重點是120cm、USB、記憶升降，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "桌面與升降一起到位",
      "USB 與記憶高度方便"
    ],
    "cons": [
      "桌板規格需看頁面",
      "承重不如高階雙馬達款明確"
    ],
    "bestFor": "居家辦公、雙螢幕或想久坐久站切換的人。",
    "recommendation": "補充推薦：120cm USB 電動記憶升降桌 的優勢在桌面與升降一起到位，但仍建議把桌板規格需看頁面納入取捨。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "USB",
      "120cm",
      "記憶高度"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 6384,
      "currency": "TWD",
      "converted": 6384,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1150138910&cgp=6755",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：E-home 一片式鴨嘴斜沿雙節USB電動記憶升降桌-寬120cm-兩色可選",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / E-home 一片式鴨嘴斜沿雙節USB電動記憶升降桌-寬120cm-兩色可選」最低價為 NT$6,384，最低點日期 2026-04-01。",
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
          "query": "site:mobile01.com \"E-home 一片式鴨嘴斜沿雙節USB電動記憶升降桌\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22E-home%20%E4%B8%80%E7%89%87%E5%BC%8F%E9%B4%A8%E5%98%B4%E6%96%9C%E6%B2%BF%E9%9B%99%E7%AF%80USB%E9%9B%BB%E5%8B%95%E8%A8%98%E6%86%B6%E5%8D%87%E9%99%8D%E6%A1%8C%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"E-home 一片式鴨嘴斜沿雙節USB電動記憶升降桌\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22E-home%20%E4%B8%80%E7%89%87%E5%BC%8F%E9%B4%A8%E5%98%B4%E6%96%9C%E6%B2%BF%E9%9B%99%E7%AF%80USB%E9%9B%BB%E5%8B%95%E8%A8%98%E6%86%B6%E5%8D%87%E9%99%8D%E6%A1%8C%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-costco-loctek-et200",
    "category": "standingdesk",
    "rank": 21,
    "budget": "mid",
    "channel": "tw",
    "brand": "Loctek",
    "model": "ET200",
    "name": "電動升降桌 白色",
    "price": {
      "currency": "TWD",
      "amount": 8999,
      "converted": 8999,
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/hc9/hb9/261465662193694.jpg",
    "buyUrl": "https://www.costco.com.tw/Furniture-Kitchen/Furniture/Computer-Desk-Chair-Sets/Loctek-Adjustable-Desk-ET200-White/p/141578",
    "buyLabel": "Costco 好市多",
    "specs": [
      "桌面 120 x 60 公分",
      "升降範圍 71-121 公分",
      "承重 50 公斤",
      "桌板厚度：6mm 加厚鋼化玻璃",
      "Costco 評價 4.8 / 58 則"
    ],
    "description": "Loctek ET200 是 Costco 評價高的玻璃桌面電動升降桌，帶 USB/Type-C 與抽屜設計。",
    "pros": [
      "Costco 58 則評論、4.8 分",
      "桌板厚度與承重資訊清楚"
    ],
    "cons": [
      "玻璃桌面較重，搬運與組裝要留意",
      "大型物件不含安裝/組裝服務"
    ],
    "bestFor": "想在 Costco 買一張完整桌面、不是單買桌腳的升降桌。",
    "recommendation": "好市多補充推薦：ET200 規格資訊完整，6mm 玻璃桌板與 50kg 承重都適合納入比較。",
    "score": 87,
    "voltage": "110V 台灣通路；需確認擺放空間與插座位置",
    "warranty": "依 Costco 好市多商品頁、品牌保固與退貨政策",
    "tags": [
      "Costco",
      "電動升降",
      "玻璃桌面"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Loctek ET200: 蝦皮商城 - 樂歌 Loctek 官方旗艦店｜全球電動升降桌領導品牌 【樂歌Loctek】ET200電動升降桌｜二節單馬達｜人體工學書桌 電腦桌｜鋼化玻璃桌面｜台灣出貨｜免費安裝 型號/規格不相符；LBJ Loctek ET200: Momo富邦購物 【Loctek 樂歌】ET200 二節式電動升降桌 120*60 原木色桌面抽屜款(免費安裝/書桌/工作桌/辦公桌/電腦桌) 型號/規格不相符；LBJ Loctek ET200: 蝦皮商城 - 易禾Water3F官方旗艦店 【樂歌Loctek】ET200電動升降桌｜二節單馬達｜人體工學桌｜鋼化玻璃桌面｜台灣出貨｜免費安裝【Water3F】 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Loctek ET200\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Loctek%20ET200%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Loctek ET200\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Loctek%20ET200%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-costco-backbone-dyback-lite",
    "category": "standingdesk",
    "rank": 22,
    "budget": "mid",
    "channel": "tw",
    "brand": "Backbone",
    "model": "Dyback Lite 100x60",
    "name": "Dyback Lite 電動升降桌 100 x 60 公分",
    "price": {
      "currency": "TWD",
      "amount": 6699,
      "converted": 6699,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h73/h6d/345529950470174.jpg",
    "buyUrl": "https://www.costco.com.tw/Furniture-Kitchen/Furniture/Computer-Desk-Chair-Sets/Backbone-Dyback-Lite-Adjustable-Desk-100-cm-X-60-cm/p/149174",
    "buyLabel": "Costco 好市多",
    "specs": [
      "100 x 60 公分",
      "升降 72-118 公分",
      "桌板厚度：未標示",
      "重量：約16.8公斤",
      "Costco 評價 5 / 14 則"
    ],
    "description": "Costco 評價不錯的升降桌候選，補進桌面尺寸、承重與桌板厚度比較。",
    "pros": [
      "完整桌面方案",
      "好市多正常新品頁"
    ],
    "cons": [
      "桌板厚度未標示需確認",
      "夾螢幕支架前要看承重與厚度"
    ],
    "bestFor": "想從好市多買完整電動升降桌的人",
    "recommendation": "好市多補充推薦：Dyback Lite 電動升降桌 100 x 60 公分 評價不錯，補進升降桌分類作為 Costco 候選比較。",
    "score": 84,
    "voltage": "通路頁未標示；升降桌需確認電源線、承重與插座位置",
    "warranty": "依 Costco 好市多商品頁與品牌保固標示",
    "tags": [
      "Costco",
      "好市多",
      "100x60",
      "小空間",
      "桌板厚度未標示"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：BigGo Backbone Dyback Lite 100x60: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/Backbone%20Dyback%20Lite%20100x60/product?p=1；BigGo Dyback Lite 100x60: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/Dyback%20Lite%20100x60/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Backbone Dyback Lite 100x60\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Backbone%20Dyback%20Lite%20100x60%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Backbone Dyback Lite 100x60\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Backbone%20Dyback%20Lite%20100x60%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "standingdesk-costco-flexispot-get156e",
    "category": "standingdesk",
    "rank": 23,
    "budget": "mid",
    "channel": "tw",
    "brand": "FlexiSpot",
    "model": "GET156E-14070",
    "name": "GET156E 140 x 70 公分電動升降桌",
    "price": {
      "currency": "TWD",
      "amount": 5489,
      "converted": 5489,
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h8a/h61/386020263100446.jpg",
    "buyUrl": "https://www.costco.com.tw/Furniture-Kitchen/Furniture/Computer-Desk-Chair-Sets/FlexiSpot-Adjustable-Desk-GET156E-14070/p/156015",
    "buyLabel": "Costco 好市多",
    "specs": [
      "140 x 70 公分",
      "升降 73.5-117 公分",
      "承重 50 公斤",
      "桌板厚度：未標示",
      "Costco 評價 4.9 / 16 則"
    ],
    "description": "Costco 評價不錯的升降桌候選，補進桌面尺寸、承重與桌板厚度比較。",
    "pros": [
      "完整桌面方案",
      "好市多正常新品頁"
    ],
    "cons": [
      "桌板厚度未標示需確認",
      "夾螢幕支架前要看承重與厚度"
    ],
    "bestFor": "想從好市多買完整電動升降桌的人",
    "recommendation": "好市多補充推薦：GET156E 140 x 70 公分電動升降桌 評價不錯，補進升降桌分類作為 Costco 候選比較。",
    "score": 85,
    "voltage": "100-240V / 50-60Hz",
    "warranty": "依 Costco 好市多商品頁與品牌保固標示",
    "tags": [
      "Costco",
      "好市多",
      "140x70",
      "50kg承重",
      "桌板厚度未標示"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 5489,
      "currency": "TWD",
      "converted": 5489,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1283941175&cgp=5489",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Costco好市多】FlexiSpot 電動升降桌 GET156E-14070 FlexiSpot Adjustable Desk GET156E-14070",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Costco好市多 / 【Costco好市多】FlexiSpot 電動升降桌 GET156E-14070 FlexiSpot Adjustable Desk GET156E-14070」最低價為 NT$5,489，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"FlexiSpot GET156E-14070\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22FlexiSpot%20GET156E-14070%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"FlexiSpot GET156E-14070\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22FlexiSpot%20GET156E-14070%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  }
]);
})();

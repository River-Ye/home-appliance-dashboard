(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("blender", [
  {
    "id": "blender-vitamix-a3500i",
    "category": "blender",
    "rank": 2,
    "budget": "premium",
    "channel": "tw",
    "brand": "Vitamix",
    "model": "A3500i",
    "name": "Ascent 領航者全食物調理機",
    "price": {
      "currency": "TWD",
      "amount": 39800,
      "converted": 39800,
      "confidence": "PChome 2026-07-16 API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAYE8A900BKOKK/000001_1782889462.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAYE8-A900BKOKK",
    "buyLabel": "PChome",
    "specs": [
      "高效馬達",
      "智慧偵測杯",
      "預設程式",
      "全食物調理"
    ],
    "description": "破壁機標竿品牌，耐用、口感細緻、售後與配件完整。",
    "pros": [
      "攪打細緻",
      "耐用口碑強"
    ],
    "cons": [
      "價格高",
      "聲音大"
    ],
    "bestFor": "綠拿鐵、濃湯、堅果醬與高頻使用。",
    "recommendation": "旗艦推薦：A3500i 介面與預設程式更完整，但若看 CP 值，A2500i 更值得先選。",
    "score": 91,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "旗艦",
      "耐用",
      "全食物"
    ],
    "releaseDate": "2017-01-04",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Vitamix A3500i: 蝦皮商城 - 點點蜜│點亮你的健康新生活 美國Vitamix Ascent 調理杯/磨粉杯1.4L-A2500i/A3500i專用-台灣官方公司貨 型號/規格不相符；LBJ Vitamix A3500i: Momo富邦購物 美國Vitamix Ascent 調理杯/磨粉杯1.4L-A2500i/A3500i專用(台灣官方公司貨) 型號/規格不相符；LBJ Vitamix A3500i: 蝦皮商城 - 美國Vitamix 台灣館 美國Vitamix Ascent 調理杯/磨粉杯1.4L-A2500i/A3500i專用-台灣官方公司貨 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 A3500i 使用者回報 SELF-DETECT 無法辨識原廠杯壺，會顯示三點或禁止符號、途中停止，部分更換杯壺後仍反覆發生。",
      "issues": [
        {
          "title": "SELF-DETECT 杯壺偵測失效，顯示三點或禁止運轉",
          "detail": "問題可能在少量使用後出現，重新校正或更換原廠杯壺也可能只短暫改善；購買後應以所有預計使用的原廠杯壺反覆測試辨識與完整程式運轉。",
          "reportCount": 6,
          "sources": [
            {
              "platform": "ProductReview.com.au",
              "title": "Vitamix A3500i Ascent reviews",
              "url": "https://www.productreview.com.au/listings/vitamix-a3500i"
            },
            {
              "platform": "Reddit",
              "title": "Multiple container replacements for Ascent",
              "url": "https://www.reddit.com/r/Vitamix/comments/1rkhs0c/multiple_container_replacements_for_ascent/"
            },
            {
              "platform": "Reddit",
              "title": "Is there anyone who regrets buying their Vitamix?",
              "url": "https://www.reddit.com/r/Vitamix/comments/1r274z/is_there_anyone_and_i_mean_anyone_who_regrets/"
            },
            {
              "platform": "Manuals",
              "title": "Vitamix Ascent A3500i manual Q&A",
              "url": "https://www.manua.ls/vitamix/ascent-a3500i/manual"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "blender-vitamix-a2500i",
    "category": "blender",
    "rank": 1,
    "topPick": true,
    "budget": "premium",
    "channel": "tw",
    "brand": "Vitamix",
    "model": "A2500i",
    "name": "Ascent 領航者全食物調理機",
    "price": {
      "currency": "TWD",
      "amount": 29600,
      "converted": 29600,
      "confidence": "PChome 2026-07-16 API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/QBAO0FA900AS2G7/000001_1782460590.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/QBAO0F-A900AS2G7",
    "buyLabel": "PChome",
    "specs": [
      "高效馬達",
      "智慧杯",
      "手動控制",
      "2L 容杯"
    ],
    "description": "保留 Vitamix 核心攪打能力，價格比 A3500i 低。",
    "pros": [
      "核心性能強",
      "比 A3500i 划算"
    ],
    "cons": [
      "介面與預設較少",
      "仍屬高價"
    ],
    "bestFor": "重視性能、不太需要觸控與完整預設程式。",
    "recommendation": "綜合推薦：保留 Vitamix 核心馬達、容杯與售後，價格比 A3500i 低很多，日常果昔/濃湯 CP 最好。",
    "score": 93,
    "voltage": "110V 台灣通路",
    "warranty": "依通路",
    "tags": [
      "性能",
      "均衡",
      "全食物"
    ],
    "releaseDate": "2017-01-04",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Vitamix A2500i: 蝦皮商城 - 點點蜜│點亮你的健康新生活 美國Vitamix Ascent 調理杯/磨粉杯1.4L-A2500i/A3500i專用-台灣官方公司貨 型號/規格不相符；LBJ Vitamix A2500i: Momo富邦購物 美國Vitamix Ascent 調理杯/磨粉杯1.4L-A2500i/A3500i專用(台灣官方公司貨) 型號/規格不相符；LBJ Vitamix A2500i: 蝦皮商城 - 美國Vitamix 台灣館 美國Vitamix Ascent 調理杯/磨粉杯1.4L-A2500i/A3500i專用-台灣官方公司貨 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Vitamix A2500i\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Vitamix%20A2500i%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Vitamix A2500i\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Vitamix%20A2500i%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-joyoung-k8s",
    "category": "blender",
    "rank": 3,
    "budget": "mid",
    "channel": "tw",
    "brand": "Joyoung",
    "model": "DJ12M-K8S",
    "name": "免清洗多功能破壁調理機",
    "price": {
      "currency": "TWD",
      "amount": 10115,
      "converted": 10115,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAY4YA900HB8CN/000001_1780309793.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAY4Y-A900HB8CN",
    "buyLabel": "PChome",
    "specs": [
      "冷熱調理",
      "豆漿/濃湯",
      "自動清洗",
      "預約"
    ],
    "description": "適合豆漿、米糊、熱飲，免清洗功能對日常使用很加分。",
    "pros": [
      "自清潔便利",
      "冷熱料理多"
    ],
    "cons": [
      "攪打口感不如高階 Vitamix",
      "體積較大"
    ],
    "bestFor": "豆漿、米糊、濃湯與早餐熱飲。",
    "recommendation": "若需求是熱飲與豆漿，Joyoung 比純果汁型更對題。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依通路",
    "tags": [
      "豆漿",
      "自清潔",
      "冷熱"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 10115,
      "currency": "TWD",
      "converted": 10115,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1236955180&cgp=10115",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【JOYOUNG 九陽】免清洗多功能破壁調理機(DJ12M-K8S)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【JOYOUNG 九陽】免清洗多功能破壁調理機(DJ12M-K8S)」最低價為 NT$10,115，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"Joyoung DJ12M-K8S\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Joyoung%20DJ12M-K8S%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Joyoung DJ12M-K8S\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Joyoung%20DJ12M-K8S%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-philips-hr2038",
    "category": "blender",
    "rank": 4,
    "budget": "value",
    "channel": "tw",
    "brand": "Philips",
    "model": "HR2038/30",
    "name": "營養冷熱調理機 / 豆漿機 / 破壁機",
    "price": {
      "currency": "TWD",
      "amount": 2488,
      "converted": 2488,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAY51A900JCIJ6/000001_1776160163.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAY51-A900JCIJ6",
    "buyLabel": "PChome",
    "specs": [
      "冷熱調理",
      "豆漿",
      "小家庭容量",
      "預設行程"
    ],
    "description": "價格親民，適合嘗試冷熱調理與豆漿，不適合高強度商用攪打。",
    "pros": [
      "便宜",
      "品牌與售後較安心"
    ],
    "cons": [
      "馬達與細緻度有限",
      "容量與耐用度非旗艦"
    ],
    "bestFor": "入門、偶爾豆漿與小份量料理。",
    "recommendation": "入門 CP 值推薦：先確認自己會不會常用破壁機。",
    "score": 82,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "入門",
      "冷熱",
      "低價"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2240,
      "currency": "TWD",
      "converted": 2240,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1242227025&cgp=2473",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Philips 飛利浦】破壁營養冷熱豆漿調理機_HR2038/30",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / 【Philips 飛利浦】破壁營養冷熱豆漿調理機_HR2038/30」最低價為 NT$2,240，最低點日期 2025-11-11。",
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
          "query": "site:mobile01.com \"Philips HR2038/30\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Philips%20HR2038%2F30%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips HR2038/30\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Philips%20HR2038%2F30%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-ninja-bn701",
    "category": "blender",
    "rank": 5,
    "budget": "value",
    "channel": "global",
    "brand": "Ninja",
    "model": "BN701",
    "name": "Professional Plus Blender",
    "price": {
      "currency": "USD",
      "amount": 119.99,
      "converted": 3863,
      "confidence": "SharkNinja 官方 2026-07-16 來源價；ExchangeRate-API 2026-07-16 匯率換算"
    },
    "image": "https://ak1.ostkcdn.com/images/products/is/images/direct/d1c25153baa2aa99eae7831be826d2a51d87c485/Ninja-BN701-Professional-Plus-Blender-with-Auto-iQ.jpg",
    "buyUrl": "https://www.sharkninja.com/ninja-professional-plus-blender-with-auto-iq/BN701.html",
    "buyLabel": "SharkNinja 官方",
    "specs": [
      "1400W 級",
      "72oz 容杯",
      "Auto-iQ",
      "冰沙/果昔"
    ],
    "description": "海外 CP 值很高的果汁冰沙機，但 120V 與保固風險需自行確認。",
    "pros": [
      "海外價格低",
      "冰沙與果昔強"
    ],
    "cons": [
      "可能無台灣保固",
      "不主打熱飲/豆漿"
    ],
    "bestFor": "冰沙、果昔、冷飲為主且可接受海外購買風險。",
    "recommendation": "海外參考：價格漂亮，但若要熱豆漿請改看 Joyoung 或 Philips。",
    "score": 80,
    "voltage": "海外 120V，台灣可用但需確認插頭與保固",
    "warranty": "可能無台灣保固",
    "tags": [
      "海外",
      "冰沙",
      "CP 值"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Ninja BN701: 露天拍賣 - 代世電子~~無低消！可開發票！可刷卡！ (12860個評價) Ninja BL610 BN701 Blender XL Ninja BL710WM 72oz Pitcher 的 的 非採用通路或含排除條件；LBJ Ninja BN701: 露天拍賣 - 世代電子商行~~可開發票/報價單/可刷卡 (42094個評價) Ninja BL610 BN701 Blender XL Ninja BL710WM 72oz Pitcher 的 的 非採用通路或含排除條件；LBJ BN701: 蝦皮商城 - B.V.D. D&G 襪子專賣 【BVD】超低襪口男隱形襪-BN701 男襪 低口襪 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 BN701 使用者回報塑膠調理壺在一次至數月使用後，底部或刀座周圍產生裂紋，部分進一步漏液；替換壺也可能在相同位置再裂。",
      "issues": [
        {
          "title": "塑膠調理壺底部或刀座周圍龜裂並漏液",
          "detail": "案例包含到貨即有微裂、第一次使用後裂開，以及正常製作 smoothie 數月後壺底裂漏；到貨後應立即檢查壺體與刀座周圍，並在退換貨期內反覆測試。",
          "reportCount": 6,
          "sources": [
            {
              "platform": "Best Buy",
              "title": "Ninja Professional Plus Blender with Auto-IQ Gray, Model BN701",
              "url": "https://www.bestbuy.com/product/ninja-professional-plus-blender-with-auto-iq-gray/JXJVXGKV7Y/sku/12371988/reviews?ratings=1"
            },
            {
              "platform": "Best Buy",
              "title": "Ninja Professional Plus Blender with Auto-IQ reviews",
              "url": "https://www.bestbuy.com/site/reviews/ninja-professional-plus-blender-with-auto-iq-gray/6395885?page=3"
            },
            {
              "platform": "BITcom Electronics",
              "title": "Ninja BN701 Professional Plus Blender customer review",
              "url": "https://bitcomelectronics.com/product/ninja-bn701-professional-plus-blender-1400-peak-watts-3-functions-for-smoothies-frozen-drinks-ice-cream-with-auto-iq-72-oz-total-crushing-pitcher-lid-dark-grey/"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "blender-extra-6-qbao0f-a9008qmg3",
    "category": "blender",
    "rank": 6,
    "budget": "mid",
    "channel": "tw",
    "brand": "Vitamix",
    "model": "VITA PREP",
    "name": "VITA PREP 2.3 匹馬力生機調理機",
    "price": {
      "currency": "TWD",
      "amount": 24500,
      "converted": 24500,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/QBAO0FA9008QMG3/000001_1782719707.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/QBAO0F-A9008QMG3",
    "buyLabel": "PChome",
    "specs": [
      "2.3 匹馬力",
      "2L 杯",
      "美國原廠貨",
      "商家用"
    ],
    "description": "Vitamix VITA PREP 是破壁機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "高階馬力與杯體選擇多",
      "可依加熱/冷打需求分流"
    ],
    "cons": [
      "高轉速機種噪音明顯",
      "入門款耐用度與售後需確認"
    ],
    "bestFor": "常做豆漿、堅果飲、濃湯、冰沙或全食物料理的人。",
    "recommendation": "同類推薦：補入 Vitamix、Blendtec 與加熱破壁機，方便比較馬力、容量與保固。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Vitamix",
      "高馬力",
      "耐用"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Vitamix VITA PREP: 露天拍賣 - chen_rumi的賣場 (2355個評價) 便宜賣全新 Vitamix Vita Prep 3 紅 型號/規格不相符；LBJ Vitamix VITA PREP: PCHome購物 Vitamix 維他美仕 美國製維他美仕最新款獨立電源開關生機調理機果汁機冰沙機 VITA PREP(2.3匹馬力)美國原廠貨 型號/規格不相符；LBJ Vitamix VITA PREP: Yahoo拍賣 - 鑫和小舖 (262個評價) 維他美仕VITAMIX全新VITA-PREP 3超強三匹馬力vitamix vita prep 3 全營養調理機專業商用 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Vitamix VITA PREP\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Vitamix%20VITA%20PREP%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Vitamix VITA PREP\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Vitamix%20VITA%20PREP%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-extra-7-dmay9t-a900g068x",
    "category": "blender",
    "rank": 7,
    "budget": "mid",
    "channel": "tw",
    "brand": "Vitamix",
    "model": "VITA PREP 3",
    "name": "VITA PREP3 多功能營養調理機",
    "price": {
      "currency": "TWD",
      "amount": 26500,
      "converted": 26500,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAY9TA900G068X/000001_1782790517.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAY9T-A900G068X",
    "buyLabel": "PChome",
    "specs": [
      "3 匹馬力",
      "高轉速",
      "美國原廠貨",
      "商家用"
    ],
    "description": "Vitamix VITA PREP 3 是破壁機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "高階馬力與杯體選擇多",
      "可依加熱/冷打需求分流"
    ],
    "cons": [
      "高轉速機種噪音明顯",
      "入門款耐用度與售後需確認"
    ],
    "bestFor": "常做豆漿、堅果飲、濃湯、冰沙或全食物料理的人。",
    "recommendation": "同類推薦：補入 Vitamix、Blendtec 與加熱破壁機，方便比較馬力、容量與保固。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Vitamix",
      "旗艦",
      "高馬力"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Vitamix VITA PREP 3: PCHome購物 Vitamix 維他美仕 美國製維他美仕最新款獨立電源開關生機調理機果汁機冰沙機 VITA PREP(2.3匹馬力)美國原廠貨 型號/規格不相符；LBJ Vitamix VITA PREP 3: Yahoo拍賣 - 鑫和小舖 (262個評價) 維他美仕VITAMIX全新VITA-PREP 3超強三匹馬力vitamix vita prep 3 全營養調理機專業商用 非採用通路或含排除條件；LBJ Vitamix VITA PREP 3: 露天拍賣 - chen_rumi的賣場 (2355個評價) 便宜賣全新 Vitamix Vita Prep 3 紅 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Vitamix VITA PREP 3\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Vitamix%20VITA%20PREP%203%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Vitamix VITA PREP 3\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Vitamix%20VITA%20PREP%203%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-extra-8-dmay0g-a900agmd8",
    "category": "blender",
    "rank": 8,
    "budget": "mid",
    "channel": "tw",
    "brand": "Vitamix",
    "model": "E320 Explorian",
    "name": "E320 Explorian 探索者調理機雙杯組黑色",
    "price": {
      "currency": "TWD",
      "amount": 24700,
      "converted": 24700,
      "confidence": "PChome 2026-07-16 API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAY0GA900AGMD8/000001_1782460348.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAY0G-A900AGMD8",
    "buyLabel": "PChome",
    "specs": [
      "2.0L + 1.4L",
      "美國原裝",
      "Explorian 系列",
      "雙杯組"
    ],
    "description": "Vitamix E320 Explorian 是破壁機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "高階馬力與杯體選擇多",
      "可依加熱/冷打需求分流"
    ],
    "cons": [
      "高轉速機種噪音明顯",
      "入門款耐用度與售後需確認"
    ],
    "bestFor": "常做豆漿、堅果飲、濃湯、冰沙或全食物料理的人。",
    "recommendation": "同類推薦：補入 Vitamix、Blendtec 與加熱破壁機，方便比較馬力、容量與保固。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Vitamix",
      "雙杯",
      "家用"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 21736,
      "currency": "TWD",
      "converted": 21736,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1213128054&cgp=22230",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【美國Vitamix】全食物調理機E320 Explorian探索者-白-台灣官方公司貨-陳月卿推薦(送工具組)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【美國Vitamix】全食物調理機E320 Explorian探索者-白-台灣官方公司貨-陳月卿推薦(送工具組)」最低價為 NT$21,736，最低點日期 2026-06-26。",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 E320 使用者形容高轉速噪音刺耳或震耳，量測約 90 dB、手錶發出高分貝警告，部分因此使用聽力防護或退貨。",
      "issues": [
        {
          "title": "運轉噪音刺耳，部分使用者需聽力防護",
          "detail": "回報集中在中高轉速，包含耳朵疼痛、穿戴降噪耳機及因噪音退貨；若對噪音敏感，建議在退換貨期內以實際食材測試常用轉速。",
          "reportCount": 6,
          "sources": [
            {
              "platform": "Reddit",
              "title": "5200 significantly quieter than E320?",
              "url": "https://www.reddit.com/r/Vitamix/comments/w1orgt/5200_significantly_quieter_than_e320/"
            },
            {
              "platform": "Reddit",
              "title": "Sound dampening suggestions",
              "url": "https://www.reddit.com/r/Vitamix/comments/qedauh/sound_dampening_suggestions/"
            },
            {
              "platform": "Reddit",
              "title": "New Vitamix Question",
              "url": "https://www.reddit.com/r/Vitamix/comments/1j1efxl/new_vitamix_question/"
            },
            {
              "platform": "Reddit",
              "title": "Can an E320 blend fibrous food just as smoothly as an A3500i?",
              "url": "https://www.reddit.com/r/Vitamix/comments/17l89l1/can_an_e320_blend_fibrous_food_just_as_smoothly/"
            },
            {
              "platform": "Reddit",
              "title": "E320 ($300) vs E5200 ($370)",
              "url": "https://www.reddit.com/r/Vitamix/comments/r8y68l/e320_300_vs_e5200_370/"
            },
            {
              "platform": "Konesso",
              "title": "Blender Vitamix Explorian E320 opinions",
              "url": "https://www.konesso.pl/product-opinions-pol-22517-Blender-Vitamix-Explorian-E320.html"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "blender-extra-9-qbao0f-a900as2dj",
    "category": "blender",
    "rank": 9,
    "budget": "premium",
    "channel": "tw",
    "brand": "Vitamix",
    "model": "A2500i White",
    "name": "Ascent A2500i 全食物調理機白色",
    "price": {
      "currency": "TWD",
      "amount": 29600,
      "converted": 29600,
      "confidence": "PChome 2026-07-16 API 公開價"
    },
    "image": "https://cs-a.ecimg.tw/items/QBAO0FA900AS2DJ/000001_1782460671.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/QBAO0F-A900AS2DJ",
    "buyLabel": "PChome",
    "specs": [
      "Ascent 系列",
      "智能杯偵測",
      "全食物調理",
      "白色"
    ],
    "description": "Vitamix A2500i White 是破壁機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "高階馬力與杯體選擇多",
      "可依加熱/冷打需求分流"
    ],
    "cons": [
      "高轉速機種噪音明顯",
      "入門款耐用度與售後需確認"
    ],
    "bestFor": "常做豆漿、堅果飲、濃湯、冰沙或全食物料理的人。",
    "recommendation": "同類推薦：補入 Vitamix、Blendtec 與加熱破壁機，方便比較馬力、容量與保固。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Vitamix",
      "智能",
      "家用"
    ],
    "releaseDate": "2017-01-04",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：BigGo QBAO0F-A900AS2DJ: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/QBAO0F-A900AS2DJ/product?p=1；BigGo Vitamix A2500i White: 查詢失敗 429 https://biggo.com.tw/api/v1/spa/search/Vitamix%20A2500i%20White/product?p=1。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Vitamix A2500i White\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Vitamix%20A2500i%20White%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Vitamix A2500i White\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Vitamix%20A2500i%20White%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-extra-10-dmay0h-a9009qnf5",
    "category": "blender",
    "rank": 10,
    "budget": "premium",
    "channel": "tw",
    "brand": "Blendtec",
    "model": "Professional 800",
    "name": "Professional 800 高效能食物調理機尊爵黑",
    "price": {
      "currency": "TWD",
      "amount": 49500,
      "converted": 49500,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAY0HA9009QNF5/000001_1782873831.png",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAY0H-A9009QNF5",
    "buyLabel": "PChome",
    "specs": [
      "高效能馬達",
      "隔音罩",
      "專業 800",
      "尊爵黑"
    ],
    "description": "Blendtec Professional 800 是破壁機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "高階馬力與杯體選擇多",
      "可依加熱/冷打需求分流"
    ],
    "cons": [
      "高轉速機種噪音明顯",
      "入門款耐用度與售後需確認"
    ],
    "bestFor": "常做豆漿、堅果飲、濃湯、冰沙或全食物料理的人。",
    "recommendation": "同類推薦：補入 Vitamix、Blendtec 與加熱破壁機，方便比較馬力、容量與保固。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Blendtec",
      "隔音",
      "旗艦"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 42075,
      "currency": "TWD",
      "converted": 42075,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1255651585&cgp=49500",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Blendtec】高效能食物調理機 專業800-尊爵黑(Professional 800公司貨)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Blendtec】高效能食物調理機 專業800-尊爵黑(Professional 800公司貨)」最低價為 NT$42,075，最低點日期 2025-11-13。",
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
          "query": "site:mobile01.com \"Blendtec Professional 800\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Blendtec%20Professional%20800%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Blendtec Professional 800\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Blendtec%20Professional%20800%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-extra-11-qbao0g-a900a6dwk",
    "category": "blender",
    "rank": 11,
    "budget": "premium",
    "channel": "tw",
    "brand": "Blendtec",
    "model": "Connoisseur 825",
    "name": "CONNOISSEUR 825 SpaceSaver 數位全能調理機",
    "price": {
      "currency": "TWD",
      "amount": 30800,
      "converted": 30800,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/QBAO0GA900A6DWK/000001_1782719457.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/QBAO0G-A900A6DWK",
    "buyLabel": "PChome",
    "specs": [
      "3.8 匹",
      "數位控制",
      "SpaceSaver",
      "美國原廠貨"
    ],
    "description": "Blendtec Connoisseur 825 是破壁機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "高階馬力與杯體選擇多",
      "可依加熱/冷打需求分流"
    ],
    "cons": [
      "高轉速機種噪音明顯",
      "入門款耐用度與售後需確認"
    ],
    "bestFor": "常做豆漿、堅果飲、濃湯、冰沙或全食物料理的人。",
    "recommendation": "同類推薦：補入 Vitamix、Blendtec 與加熱破壁機，方便比較馬力、容量與保固。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Blendtec",
      "商用",
      "高馬力"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Blendtec Connoisseur 825: Momo富邦購物 【Blendtec】美國製3.8匹數位調理機果汁機冰沙機(CONNOISSEUR 825 SPACESAVER) 型號/規格不相符；LBJ Blendtec Connoisseur 825: Momo富邦購物 【Blendtec】高效能食物調理機 鑑賞家825-尊爵黑(CONNOISSEUR825公司貨附5角容杯x1) 型號/規格不相符；LBJ Blendtec Connoisseur 825: Yahoo購物中心 【Blendtec】 高效能食物調理機 鑑賞家825-尊爵黑(CONNOISSEUR825公司貨附5角容杯x1) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Blendtec Connoisseur 825\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Blendtec%20Connoisseur%20825%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Blendtec Connoisseur 825\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Blendtec%20Connoisseur%20825%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-extra-12-dmaybb-a900k6vsy",
    "category": "blender",
    "rank": 12,
    "budget": "mid",
    "channel": "tw",
    "brand": "Blendtec",
    "model": "Designer 650",
    "name": "Designer 650 高效能食物調理機寶石紅",
    "price": {
      "currency": "TWD",
      "amount": 26800,
      "converted": 26800,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAYBBA900K6VSY/000001_1783390508.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAYBB-A900K6VSY",
    "buyLabel": "PChome",
    "specs": [
      "設計師 650",
      "高效能馬達",
      "預設行程",
      "寶石紅"
    ],
    "description": "Blendtec Designer 650 是破壁機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "高階馬力與杯體選擇多",
      "可依加熱/冷打需求分流"
    ],
    "cons": [
      "高轉速機種噪音明顯",
      "入門款耐用度與售後需確認"
    ],
    "bestFor": "常做豆漿、堅果飲、濃湯、冰沙或全食物料理的人。",
    "recommendation": "同類推薦：補入 Vitamix、Blendtec 與加熱破壁機，方便比較馬力、容量與保固。",
    "score": 81,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Blendtec",
      "設計",
      "家用"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Blendtec Designer 650: 露天拍賣 - Wowlook 玩路客美國專業代買代購 (6897個評價) 【Wowlook】 Blendtec Designer 650 調理機 整新 2104 型號/規格不相符；LBJ Blendtec Designer 650: Yahoo拍賣 - 蔣克史塔夫 JUNKSTUFF (349個評價) Blendtec Designer 650 故障 維修 服務 零件 配件 代購 全新盒裝 果汁機 型號/規格不相符；LBJ Blendtec Designer 650: citiesocial找好東西 【citiesocial找好東西】【Blendtec】高效能食物調理機 Designer650 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Blendtec Designer 650\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Blendtec%20Designer%20650%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Blendtec Designer 650\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Blendtec%20Designer%20650%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-extra-13-dmaybb-a900k3czm",
    "category": "blender",
    "rank": 13,
    "budget": "premium",
    "channel": "tw",
    "brand": "Blendtec",
    "model": "Total Blender",
    "name": "Total Blender 數位三匹馬力生機調理機",
    "price": {
      "currency": "TWD",
      "amount": 28000,
      "converted": 28000,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAYBBA900K3CZM/000001_1780982111.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAYBB-A900K3CZM",
    "buyLabel": "PChome",
    "specs": [
      "3 匹馬力",
      "數位控制",
      "台灣公司貨",
      "全食物調理"
    ],
    "description": "Blendtec Total Blender 是破壁機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "高階馬力與杯體選擇多",
      "可依加熱/冷打需求分流"
    ],
    "cons": [
      "高轉速機種噪音明顯",
      "入門款耐用度與售後需確認"
    ],
    "bestFor": "常做豆漿、堅果飲、濃湯、冰沙或全食物料理的人。",
    "recommendation": "同類推薦：補入 Vitamix、Blendtec 與加熱破壁機，方便比較馬力、容量與保固。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Blendtec",
      "公司貨",
      "高馬力"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 21800,
      "currency": "TWD",
      "converted": 21800,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1282602325&cgp=21800",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【Blendtec】數位三匹馬力生機調理機 Total Blender-台灣公司貨(送TONTON 吸管隨行杯)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【Blendtec】數位三匹馬力生機調理機 Total Blender-台灣公司貨(送TONTON 吸管隨行杯)」最低價為 NT$21,800，最低點日期 2026-07-09。",
      "sourceKind": "price_history",
      "confidence": "medium",
      "checkedAt": "2026-07-09",
      "note": "採用 LBJ 比價撿便宜 可公開查核的價格歷史；同型號/規格並排除會員券、點數、信用卡回饋、二手、福利品、展示、箱損、拆封與整新品。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位 Blendtec Total Blender 使用者回報調理壺漏液；多數案例指向壺底刀軸、墊圈、密封或軸承劣化。",
      "issues": [
        {
          "title": "調理壺漏液",
          "detail": "漏點回報多集中在壺底刀座、墊圈或壺體接合處，但也有使用者只確認壺體漏液；問題可能在長期使用後出現，發現滲液、異常噪音或墊圈碎裂時應立即停用並洽詢原廠。",
          "reportCount": 6,
          "sources": [
            {
              "platform": "Reddit",
              "title": "Blender recommendations?",
              "url": "https://www.reddit.com/r/BuyItForLife/comments/rrav71/blender_recommendations/"
            },
            {
              "platform": "iFixit",
              "title": "How is a leaky blender jar fixed?",
              "url": "https://www.ifixit.com/Answers/View/703754/How+is+a+leaky+blender+jar+fixed"
            },
            {
              "platform": "iFixit",
              "title": "Can a leak at the bottom of Wideside jar (blade seal) be repaired?",
              "url": "https://www.ifixit.com/Answers/View/757556/Can+a+leak+at+the+bottom+of+Wideside+jar+(blade+seal)+be+repaired"
            },
            {
              "platform": "iFixit",
              "title": "How do I fix a leak at the bottom of the plastic container (blade)",
              "url": "https://www.ifixit.com/Answers/View/413038/How+do+I+fix+a+leak+at+the+bottom+of+the+plastic+container+(blade)"
            },
            {
              "platform": "Best Buy",
              "title": "Blendtec Total Blender 10-Speed Blender reviews",
              "url": "https://www.bestbuy.com/site/reviews/blendtec-total-blender-10-speed-blender-black/6405679?page=2"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "blender-extra-14-dmay7k-a900jxotj",
    "category": "blender",
    "rank": 14,
    "budget": "value",
    "channel": "tw",
    "brand": "Joyoung",
    "model": "L19N-Y1W",
    "name": "1.2L 高速調理果汁機",
    "price": {
      "currency": "TWD",
      "amount": 1290,
      "converted": 1290,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAY7KA900JXOTJ/000001_1779933584.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAY7K-A900JXOTJ",
    "buyLabel": "PChome",
    "specs": [
      "1.2L",
      "高速調理",
      "果汁/冰沙",
      "入門價位"
    ],
    "description": "Joyoung L19N-Y1W 是破壁機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "高階馬力與杯體選擇多",
      "可依加熱/冷打需求分流"
    ],
    "cons": [
      "高轉速機種噪音明顯",
      "入門款耐用度與售後需確認"
    ],
    "bestFor": "常做豆漿、堅果飲、濃湯、冰沙或全食物料理的人。",
    "recommendation": "同類推薦：補入 Vitamix、Blendtec 與加熱破壁機，方便比較馬力、容量與保固。",
    "score": 79,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Joyoung",
      "低價",
      "小家庭"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1090,
      "currency": "TWD",
      "converted": 1090,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1270272762&cgp=1290",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【JOYOUNG 九陽】高速調理果汁機(L19N-Y1W)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【JOYOUNG 九陽】高速調理果汁機(L19N-Y1W)」最低價為 NT$1,090，最低點日期 2026-06-09。",
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
          "query": "site:mobile01.com \"Joyoung L19N-Y1W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Joyoung%20L19N-Y1W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Joyoung L19N-Y1W\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Joyoung%20L19N-Y1W%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-extra-15-dmay4y-a900j7nyf",
    "category": "blender",
    "rank": 15,
    "budget": "value",
    "channel": "tw",
    "brand": "XD",
    "model": "XD-A08",
    "name": "豆漿機 XD-A08",
    "price": {
      "currency": "TWD",
      "amount": 3793,
      "converted": 3793,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAY4YA900J7NYF/000001_1757141350.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAY4Y-A900J7NYF",
    "buyLabel": "PChome",
    "specs": [
      "加熱豆漿",
      "破壁料理",
      "多功能料理",
      "家用"
    ],
    "description": "XD XD-A08 是破壁機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "高階馬力與杯體選擇多",
      "可依加熱/冷打需求分流"
    ],
    "cons": [
      "高轉速機種噪音明顯",
      "入門款耐用度與售後需確認"
    ],
    "bestFor": "常做豆漿、堅果飲、濃湯、冰沙或全食物料理的人。",
    "recommendation": "同類推薦：補入 Vitamix、Blendtec 與加熱破壁機，方便比較馬力、容量與保固。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "加熱",
      "豆漿",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ XD XD-A08: 露天拍賣 - 宅配滿$490免運｜ PC24h購物 露天旗艦店 (71076個評價) 【PChome 24h購物】豆漿機XD-A08 R99N 非採用通路或含排除條件；LBJ XD XD-A08: 露天拍賣 - 宅配滿$490免運｜ PC24h購物 露天旗艦店 (71076個評價) 【PChome 24h購物】豆漿機XD-A08 R99N 非採用通路或含排除條件；LBJ XD XD-A08: 露天拍賣 - 宅配滿$490免運｜ PC24h購物 露天旗艦店 (71076個評價) 【PChome 24h購物】豆漿機XD-A08 高級黑普通款防糊底+磨粉杯110V R99N 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"XD XD-A08\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22XD%20XD-A08%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"XD XD-A08\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22XD%20XD-A08%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-extra-16-dmay01a900gfjco",
    "category": "blender",
    "rank": 16,
    "budget": "mid",
    "channel": "tw",
    "brand": "Joyoung",
    "model": "DJ10M-K96G",
    "name": "免清洗多功能破壁豆漿機",
    "price": {
      "currency": "TWD",
      "amount": 9480,
      "converted": 9480,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAY01A900GFJCO/000001_1780310319.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAY01-A900GFJCO",
    "buyLabel": "PChome",
    "specs": [
      "免清洗",
      "破壁豆漿",
      "多功能熱飲",
      "預約"
    ],
    "description": "Joyoung DJ10M-K96G 補進本分類比較池，重點是免清洗、破壁豆漿、多功能熱飲，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "自動清洗省事",
      "豆漿與濃湯流程完整"
    ],
    "cons": [
      "體積較大",
      "高速細緻度不如 Vitamix"
    ],
    "bestFor": "常做豆漿、果昔、濃湯或副食品，想比較不同清潔與馬力取向的人。",
    "recommendation": "補充推薦：免清洗多功能破壁豆漿機 的優勢在自動清洗省事，但仍建議把體積較大納入取捨。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "免清洗",
      "豆漿",
      "破壁"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 8722,
      "currency": "TWD",
      "converted": 8722,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1273838610&cgp=8912",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：Joyoung九陽免清洗多功能破壁豆漿機DJ10M-K96G(遠航灰)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Yahoo購物中心 / Joyoung九陽免清洗多功能破壁豆漿機DJ10M-K96G(遠航灰)」最低價為 NT$8,722，最低點日期 2026-06-10。",
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
          "query": "site:mobile01.com \"Joyoung DJ10M-K96G\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Joyoung%20DJ10M-K96G%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Joyoung DJ10M-K96G\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Joyoung%20DJ10M-K96G%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-extra-17-dmaye4a900jtmqr",
    "category": "blender",
    "rank": 17,
    "budget": "value",
    "channel": "tw",
    "brand": "Tefal",
    "model": "SP21",
    "name": "高速熱能營養調理機",
    "price": {
      "currency": "TWD",
      "amount": 3290,
      "converted": 3290,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAYE4A900JTMQR/000001_1773730782.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAYE4-A900JTMQR",
    "buyLabel": "PChome",
    "specs": [
      "冷熱雙全",
      "一鍵清洗",
      "豆漿機",
      "副食品"
    ],
    "description": "Tefal SP21 補進本分類比較池，重點是冷熱雙全、一鍵清洗、豆漿機，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "冷熱料理彈性大",
      "品牌售後比雜牌安心"
    ],
    "cons": [
      "杯體清潔仍需習慣",
      "不是商用等級馬力"
    ],
    "bestFor": "常做豆漿、果昔、濃湯或副食品，想比較不同清潔與馬力取向的人。",
    "recommendation": "補充推薦：高速熱能營養調理機 的優勢在冷熱料理彈性大，但仍建議把杯體清潔仍需習慣納入取捨。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "冷熱",
      "一鍵清洗",
      "副食品"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2750,
      "currency": "TWD",
      "converted": 2750,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1240547130&cgp=3290",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Tefal 特福】高速熱能營養調理機/寶寶副食品/豆漿機/養身料理SP21(BL961570)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Tefal 特福】高速熱能營養調理機/寶寶副食品/豆漿機/養身料理SP21(BL961570)」最低價為 NT$2,750，最低點日期 2026-04-20。",
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
          "query": "site:mobile01.com \"Tefal SP21\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Tefal%20SP21%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Tefal SP21\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Tefal%20SP21%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-extra-18-dmaydla900ih6gz",
    "category": "blender",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "brand": "Bosch",
    "model": "MMBH6P6BTW",
    "name": "超高速全營養調理機",
    "price": {
      "currency": "TWD",
      "amount": 12900,
      "converted": 12900,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAYDLA900IH6GZ/000001_1782875037.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAYDL-A900IH6GZ",
    "buyLabel": "PChome",
    "specs": [
      "超高速",
      "全營養調理",
      "大容量",
      "歐系品牌"
    ],
    "description": "Bosch MMBH6P6BTW 補進本分類比較池，重點是超高速、全營養調理、大容量，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "品牌與做工穩",
      "適合果昔與濃湯"
    ],
    "cons": [
      "價格高於入門豆漿機",
      "耗材取得需留意"
    ],
    "bestFor": "常做豆漿、果昔、濃湯或副食品，想比較不同清潔與馬力取向的人。",
    "recommendation": "補充推薦：超高速全營養調理機 的優勢在品牌與做工穩，但仍建議把價格高於入門豆漿機納入取捨。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "高速",
      "歐系",
      "調理機"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 11692,
      "currency": "TWD",
      "converted": 11692,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1248803523&cgp=12900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【BOSCH 博世】超高速全營養調理機(MMBH6P6BTW)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【BOSCH 博世】超高速全營養調理機(MMBH6P6BTW)」最低價為 NT$11,692，最低點日期 2025-10-09。",
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
          "query": "site:mobile01.com \"Bosch MMBH6P6BTW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Bosch%20MMBH6P6BTW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Bosch MMBH6P6BTW\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Bosch%20MMBH6P6BTW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-extra-19-dmay4ya900i3ild",
    "category": "blender",
    "rank": 19,
    "budget": "mid",
    "channel": "tw",
    "brand": "Joyoung",
    "model": "L18M-Y6G",
    "name": "多功能變頻輕音冷熱調理機",
    "price": {
      "currency": "TWD",
      "amount": 11490,
      "converted": 11490,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAY4YA900I3ILD/000001_1783328441.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAY4Y-A900I3ILD",
    "buyLabel": "PChome",
    "specs": [
      "變頻",
      "輕音設計",
      "冷熱調理",
      "豆漿機"
    ],
    "description": "Joyoung L18M-Y6G 補進本分類比較池，重點是變頻、輕音設計、冷熱調理，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "噪音控制比傳統破壁機友善",
      "功能完整"
    ],
    "cons": [
      "價位高於入門九陽款",
      "仍需預留清洗空間"
    ],
    "bestFor": "常做豆漿、果昔、濃湯或副食品，想比較不同清潔與馬力取向的人。",
    "recommendation": "補充推薦：多功能變頻輕音冷熱調理機 的優勢在噪音控制比傳統破壁機友善，但仍建議把價位高於入門九陽款納入取捨。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "輕音",
      "冷熱",
      "豆漿"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 10699,
      "currency": "TWD",
      "converted": 10699,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1283774544&cgp=10699",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：(店+)【JOYOUNG 九陽】(宅配免運) 多功能變頻輕音冷熱調理機L18M-Y6G 豆漿機 果汁機 破壁機 副食品 調理機",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / (店+)【JOYOUNG 九陽】(宅配免運) 多功能變頻輕音冷熱調理機L18M-Y6G 豆漿機 果汁機 破壁機 副食品 調理機」最低價為 NT$10,699，最低點日期 2026-07-09。",
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
          "query": "site:mobile01.com \"Joyoung L18M-Y6G\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Joyoung%20L18M-Y6G%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Joyoung L18M-Y6G\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Joyoung%20L18M-Y6G%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-extra-20-dmaygba900iw311",
    "category": "blender",
    "rank": 20,
    "budget": "value",
    "channel": "tw",
    "brand": "Joyoung",
    "model": "SMM55",
    "name": "多功能營養調理機",
    "price": {
      "currency": "TWD",
      "amount": 3380,
      "converted": 3380,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAYGBA900IW311/000001_1767836506.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAYGB-A900IW311",
    "buyLabel": "PChome",
    "specs": [
      "多功能",
      "營養調理",
      "豆漿/果汁",
      "家用"
    ],
    "description": "Joyoung SMM55 補進本分類比較池，重點是多功能、營養調理、豆漿/果汁，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "價格較親民",
      "基本調理需求足夠"
    ],
    "cons": [
      "自動化不如免清洗款",
      "外型與質感較普通"
    ],
    "bestFor": "常做豆漿、果昔、濃湯或副食品，想比較不同清潔與馬力取向的人。",
    "recommendation": "補充推薦：多功能營養調理機 的優勢在價格較親民，但仍建議把自動化不如免清洗款納入取捨。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "入門",
      "營養調理",
      "家用"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 2349,
      "currency": "TWD",
      "converted": 2349,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1244678411&cgp=2959",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Costco好市多】九陽 多功能豆漿機 SMM55 Joyoung Multifunctional Soymilk Machine SMM55",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Costco好市多 / 【Costco好市多】九陽 多功能豆漿機 SMM55 Joyoung Multifunctional Soymilk Machine SMM55」最低價為 NT$2,349，最低點日期 2026-04-09。",
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
          "query": "site:mobile01.com \"Joyoung SMM55\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Joyoung%20SMM55%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Joyoung SMM55\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Joyoung%20SMM55%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-xiaomi-mjpbj01demtw",
    "category": "blender",
    "rank": 21,
    "budget": "value",
    "channel": "tw",
    "brand": "Xiaomi",
    "model": "MJPBJ01DEMTW",
    "name": "破壁調理機 冷熱調理機",
    "price": {
      "currency": "TWD",
      "amount": 2149,
      "converted": 2149,
      "confidence": "PChome 小米官方旗艦館 2026-07-09 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAYFGA900IXDP8/000001_1749698286.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAYFG-A900IXDP8",
    "buyLabel": "PChome 小米官方旗艦館",
    "specs": [
      "1.75L 冷飲 / 1.4L 熱飲",
      "混拌 500W / 加熱 800W",
      "110V / 60Hz",
      "6 種冷熱飲品選項",
      "2 種自清潔模式"
    ],
    "description": "小米官方旗艦館新品頁的冷熱破壁調理機，價格低、容量完整，適合補進入門冷熱調理比較。",
    "pros": [
      "價格低且為小米官方旗艦館新品頁",
      "冷熱飲、豆漿與自清潔功能完整"
    ],
    "cons": [
      "馬達與耐用口碑不如高階 Vitamix/Blendtec",
      "PChome 詳情標示米家 App 不支援此產品"
    ],
    "bestFor": "想低價嘗試豆漿、米糊、冰沙與日常冷熱飲的小家庭。",
    "recommendation": "小米補充推薦：價格接近入門款但具冷熱調理、自清潔與 110V 台灣規格，適合作為低預算小家庭候選。",
    "score": 84,
    "voltage": "110V / 60Hz",
    "warranty": "PChome 小米官方旗艦館標示原廠 1 年保固",
    "tags": [
      "小米",
      "冷熱",
      "豆漿",
      "入門"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1860,
      "currency": "TWD",
      "converted": 1860,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1260248195&cgp=2149",
      "sourceTitle": "LBJ 比價撿便宜歷史價格：Yahoo購物中心 Xiaomi 小米破壁調理機官方旗艦館",
      "evidenceSnippet": "LBJ pid=1260248195 price_data shows NT$1,860 on 2025-07-09, 2025-09-17, and 2025-09-24.",
      "sourceKind": "price_history",
      "confidence": "high",
      "checkedAt": "2026-07-09",
      "note": "已由 worker 查核 BigGo、FindPrice、LBJ 與 Xiaomi 官方規格；採 LBJ Yahoo 官方旗艦館歷史最低 NT$1,860。低於此價的福利品、二手、再生工場或非 MJPBJ01DEMTW 候選均排除。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Xiaomi MJPBJ01DEMTW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Xiaomi%20MJPBJ01DEMTW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Xiaomi MJPBJ01DEMTW\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Xiaomi%20MJPBJ01DEMTW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-costco-teco-xyfys007w",
    "category": "blender",
    "rank": 22,
    "budget": "value",
    "channel": "tw",
    "brand": "TECO",
    "model": "XYFYS007W",
    "name": "多功能蔬果破壁冷熱調理豆漿機",
    "price": {
      "currency": "TWD",
      "amount": 1999,
      "converted": 1999,
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/hcd/he8/292858303643678.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Kitchen-Appliances/Coffee-Machines-Blenders-Juicers/TECO-Blender-With-Variable-Speeds-XYFYS007W/p/149225",
    "buyLabel": "Costco 好市多",
    "specs": [
      "破壁調理",
      "冷熱調理/豆漿",
      "蔬果飲",
      "Costco 評價 4.1 / 120 則"
    ],
    "description": "東元 XYFYS007W 是 Costco 評論數足夠的低價冷熱破壁調理豆漿機，適合入門比較。",
    "pros": [
      "價格低",
      "Costco 120 則評論具參考性"
    ],
    "cons": [
      "評分 4.1，需查看噪音與清潔評價",
      "不適合和高階 Vitamix/Blendtec 直接比馬力"
    ],
    "bestFor": "想低價嘗試豆漿、濃湯與蔬果調理的人。",
    "recommendation": "好市多補充推薦：XYFYS007W 評論數足，適合作為 Costco 入門破壁機候選。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 Costco 好市多商品頁、品牌保固與退貨政策",
    "tags": [
      "Costco",
      "破壁",
      "冷熱"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 1599,
      "currency": "TWD",
      "converted": 1599,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1236296146&cgp=1999",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Costco好市多】東元 多功能蔬果破壁冷熱調理豆漿機 XYFYS007W TECO Blender With Variable Speeds XYFYS007W",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Costco好市多 / 【Costco好市多】東元 多功能蔬果破壁冷熱調理豆漿機 XYFYS007W TECO Blender With Variable Speeds XYFYS007W」最低價為 NT$1,599，最低點日期 2025-11-12。",
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
          "query": "site:mobile01.com \"TECO XYFYS007W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22TECO%20XYFYS007W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"TECO XYFYS007W\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22TECO%20XYFYS007W%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-costco-ninja-tb401tw",
    "category": "blender",
    "rank": 23,
    "budget": "value",
    "channel": "tw",
    "brand": "Ninja",
    "model": "TB401TW",
    "name": "Detect 多功能調理機",
    "price": {
      "currency": "TWD",
      "amount": 9999,
      "converted": 9999,
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/he0/hb8/400499548815390.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Kitchen-Appliances/Coffee-Machines-Blenders-Juicers/Ninja-Detect-Food-Processor-TB401TW/p/156889",
    "buyLabel": "Costco 好市多",
    "specs": [
      "2.1L 調理壺 / 1.9L 調理碗 / 700ml 隨行杯",
      "1200W",
      "110V / 60Hz",
      "重量：約6.5公斤",
      "Costco 評價 4.8 / 6 則"
    ],
    "description": "Costco 評價不錯的多功能調理機候選，兼具大容量調理壺、調理碗與隨行杯，補進高馬力食物處理比較。",
    "pros": [
      "1200W 與多容器配置用途彈性高",
      "好市多正常新品頁且評分高"
    ],
    "cons": [
      "評論數未達標準門檻，屬稀少候選",
      "體積與配件收納需預留空間"
    ],
    "bestFor": "想同時處理冰沙、醬料、切碎與隨行杯飲品的人。",
    "recommendation": "好市多補充推薦：Detect 多功能調理機 評價不錯，補進破壁機分類作為 Costco 候選比較。",
    "score": 87,
    "voltage": "110V / 60Hz",
    "warranty": "依 Costco 好市多商品頁與品牌 1 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "Ninja",
      "多功能調理",
      "1200W"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Ninja TB401TW: Momo富邦購物 【NINJA】TB401TW Detect 忍者三層快刀調理機(調理機/果汁機/攪拌機/烘焙) 型號/規格不相符；LBJ Ninja TB401TW: 樂天市場 - 及時雨 高壓恢復選品 及時雨 高壓恢復選品 Ninja Detect 多功能調理機 TB401TW 型號/規格不相符；LBJ Ninja TB401TW: Yahoo購物中心 【NINJA】Detect TB401TW忍者三層快刀智能調理機(調理機、果汁機、攪拌機、烘焙) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Ninja TB401TW\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Ninja%20TB401TW%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Ninja TB401TW\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Ninja%20TB401TW%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "blender-costco-vitamix-e310",
    "category": "blender",
    "rank": 24,
    "budget": "premium",
    "channel": "tw",
    "brand": "Vitamix",
    "model": "E310",
    "name": "全營養調理機",
    "price": {
      "currency": "TWD",
      "amount": 15999,
      "converted": 15999,
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h7b/ha9/363704945115166.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Kitchen-Appliances/Coffee-Machines-Blenders-Juicers/Vitamix-Blender-E310/p/153290",
    "buyLabel": "Costco 好市多",
    "specs": [
      "1.4L 容杯",
      "1200W",
      "110V / 50-60Hz",
      "美國製",
      "Costco 評價 4.7 / 18 則"
    ],
    "description": "Costco 評價不錯的調理機候選，依容量、馬力與用途補進比較。",
    "pros": [
      "品牌與用途明確",
      "通路與價格清楚"
    ],
    "cons": [
      "容量與功能取向差異大",
      "耗材與保固需確認"
    ],
    "bestFor": "想做豆漿、冰沙、濃湯或高馬力調理的人",
    "recommendation": "好市多補充推薦：全營養調理機 評價不錯，補進破壁機分類作為 Costco 候選比較。",
    "score": 88,
    "voltage": "110V / 50-60Hz",
    "warranty": "依 Costco 好市多商品頁與品牌 5 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "Vitamix",
      "破壁機",
      "高馬力"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Vitamix E310: 樂天市場 - 貓與鼠百貨店 貓與鼠百貨店 48oz兼容Vitamix750 5300 5200 500 7500 6300 Vm0102 E310攪拌杯 型號/規格不相符；LBJ Vitamix E310: 樂天市場 - 玉山最低比價網 玉山最低比價網 [3美國直購] Vitamix 65421 48oz 食物調理機量杯 Aer Disc Container 適 E320 E310_B07CY3SDC9 型號/規格不相符；LBJ Vitamix E310: 樂天市場 - 及時雨 高壓恢復選品 及時雨 高壓恢復選品 Vitamix 全營養調理機 E310 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Vitamix E310\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Amobile01.com%20%22Vitamix%20E310%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Vitamix E310\" (problem OR issue OR defect OR negative review)",
          "queryUrl": "https://search.yahoo.com/search?q=site%3Areddit.com%20%22Vitamix%20E310%22%20(problem%20OR%20issue%20OR%20defect%20OR%20negative%20review)",
          "targetHost": "reddit.com"
        }
      ]
    }
  }
]);
})();

(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("purifier", [
  {
    "id": "ap-coway-ap1019",
    "category": "purifier",
    "rank": 1,
    "topPick": true,
    "budget": "value",
    "channel": "tw",
    "brand": "Coway",
    "model": "AP-1019C",
    "name": "5-10 坪綠淨力玩美雙禦空氣清淨機",
    "price": {
      "currency": "TWD",
      "amount": 5900,
      "converted": 5900,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU3EA900AU9PA/000001_1782107657.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAU3E-A900AU9PA",
    "buyLabel": "PChome",
    "specs": [
      "5-10 坪",
      "HEPA/活性碳",
      "雙禦濾網",
      "小中坪數"
    ],
    "description": "價格、濾網取得與品牌口碑平衡，是小家庭最不容易買錯的清淨機。",
    "pros": [
      "耗材好找",
      "價格合理"
    ],
    "cons": [
      "大客廳不夠力",
      "智慧功能較少"
    ],
    "bestFor": "臥室、書房與中小坪數空間。",
    "recommendation": "綜合推薦：Coway AP-1019C 價格低、濾網成本可控、通路與口碑穩，小中坪數最有 CP。",
    "score": 91,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "CP 值",
      "耗材",
      "小中坪數"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Coway AP-1019C: 蝦皮商城 - Coway 台灣官方商店 Coway 濾網 原廠耗材 蜂巢式活性碳濾網 適用 AP 1019 C 空氣清淨機 AP-1019C 免運 非採用通路或含排除條件；LBJ Coway AP-1019C: Momo富邦購物 【RENZA】適用Coway AP-1019C 積木機 白/粉/綠/海軍藍/龜背葉 完美雙禦空氣清淨機(抗菌HEPA性碳濾網 濾芯) 最低價 NT$924 低於現價合理比例，疑似月付/配件/錯類；LBJ Coway AP-1019C: Momo富邦購物 【蟎著媽】濾網(適用 Coway 格威 AP-1019c 白色 粉色 綠色 積木機 完美雙禦 空氣清淨機 AP 1019) 最低價 NT$936 低於現價合理比例，疑似月付/配件/錯類。"
    },
    "issueResearch": {
      "status": "common_issue",
      "checkedAt": "2026-07-10",
      "summary": "多位同型號使用者反映，AP-1019C 在靜音／夜間或最低風量運轉時仍會出現規律低頻共鳴、嗡嗡聲或馬達振動，可能影響睡眠。",
      "issues": [
        {
          "title": "靜音／低速模式下的低頻共鳴與馬達振動",
          "detail": "問題集中在靜音、夜間或最低風量：有使用者形容規律共振、嗡嗡低頻與機身／馬達振動，甚至無法放在臥室；防震墊或凝膠可減輕但不一定完全消除。對聲音敏感者建議保留退換貨期，並在夜間實測。",
          "reportCount": 6,
          "sources": [
            {
              "platform": "Mobile01",
              "title": "Coway AP-1019C 使用問題",
              "url": "https://www.mobile01.com/topicdetail.php?f=731&t=6754163"
            },
            {
              "platform": "Kakaku.com",
              "title": "AIRMEGA 150 AP-1019C レビュー・評価",
              "url": "https://review.kakaku.com/review/J0000033647/"
            },
            {
              "platform": "Kakaku.com",
              "title": "フィルターが臭い",
              "url": "https://bbs.kakaku.com/bbs/J0000033647/SortID=26493796/"
            },
            {
              "platform": "Yahoo!ショッピング",
              "title": "COWAY AP-1019C 商品レビュー",
              "url": "https://shopping.yahoo.co.jp/products/p/156b159ec6#tab"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "ap-blueair-3450i",
    "category": "purifier",
    "rank": 2,
    "budget": "mid",
    "channel": "tw",
    "brand": "Blueair",
    "model": "BlueMax 3450i",
    "name": "14-29 坪智能 Wi-Fi 空氣清淨機",
    "price": {
      "currency": "TWD",
      "amount": 12990,
      "converted": 12990,
      "confidence": "PChome 2026-07-13 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAUE4A900I5SSZ/000001_1780654673.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAUE4-A900I5SSZ",
    "buyLabel": "PChome",
    "specs": [
      "14-29 坪",
      "Wi-Fi",
      "HEPASilent",
      "低噪"
    ],
    "description": "Blueair 強項是大風量與低噪，適合客廳或開放式空間。",
    "pros": [
      "大坪數效率好",
      "運轉安靜"
    ],
    "cons": [
      "耗材成本較高",
      "外型較家電感"
    ],
    "bestFor": "客廳、開放式餐廚與過敏家庭。",
    "recommendation": "大坪數中價位推薦，比小型清淨機更能有效換氣。",
    "score": 90,
    "voltage": "110V 台灣通路",
    "warranty": "依通路",
    "tags": [
      "大坪數",
      "低噪",
      "Wi-Fi"
    ],
    "releaseDate": "2023-09-25",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Blueair BlueMax 3450i: Momo富邦購物 (店+)【Blueair】(A級福利品僅盒微損 商品全新)BlueMax 智能wifi 空氣清淨機 3450i (最大適用29坪) 型號/規格不相符；LBJ Blueair BlueMax 3450i: 蝦皮商城 - Blueair | 恆隆行官方旗艦館 Blueair BlueMax空氣清淨機3450i(最大適用29坪)福利品 型號/規格不相符；LBJ Blueair BlueMax 3450i: Yahoo購物中心 Blueair BlueMax空氣清淨機 3450i 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Blueair BlueMax 3450i\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Blueair%20BlueMax%203450i%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Blueair BlueMax 3450i\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Blueair%20BlueMax%203450i%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "ap-dyson-tp11",
    "category": "purifier",
    "rank": 3,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dyson",
    "model": "TP11",
    "name": "Purifier Cool 二合一涼風智能空氣清淨機",
    "price": {
      "currency": "TWD",
      "amount": 11900,
      "converted": 11900,
      "confidence": "Yahoo購物中心 2026-07-15 晚間頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU3CA900K0T3T/000001_1779087672.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Dyson-%E6%88%B4%E6%A3%AE-Purifier-Cool-%E4%BA%8C%E5%90%88%E4%B8%80%E6%B6%BC%E9%A2%A8%E6%99%BA%E8%83%BD%E7%A9%BA%E6%B0%A3%E6%B8%85%E6%B7%A8%E6%A9%9FTP11-%E7%99%BD%E8%89%B2-12000846.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "清淨 + 涼風",
      "智慧偵測",
      "無葉片",
      "App 控制"
    ],
    "description": "清淨與風扇二合一，空間有限時比多擺一台風扇更清爽。",
    "pros": [
      "一機兩用",
      "外型與易清潔佳"
    ],
    "cons": [
      "清淨 CP 值不如方盒型",
      "濾網成本較高"
    ],
    "bestFor": "臥室、書房與重視設計感的人。",
    "recommendation": "不是最便宜的清淨方案，但空間整潔與使用體驗加分。",
    "score": 86,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "二合一",
      "無葉片",
      "設計"
    ],
    "releaseDate": "2025-03-12",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Dyson TP11: Momo富邦購物 【dyson 戴森】限量福利品 TP11 Purifier Cool 二合一涼風智能空氣清淨機(新機上市) 型號/規格不相符；LBJ Dyson TP11: 誠品線上 【超值福利品】dyson Purifier Cool 二合一涼風智能空氣清淨機TP11 型號/規格不相符；LBJ Dyson TP11: Momo富邦購物 【dyson 戴森】TP11 Purifier Cool 二合一涼風智能空氣清淨機(黑色) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson TP11\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20TP11%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson TP11\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20TP11%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "ap-philips-ac2936",
    "category": "purifier",
    "rank": 4,
    "budget": "mid",
    "channel": "tw",
    "brand": "Philips",
    "model": "AC2936",
    "name": "17 坪 360 度高效過濾空氣清淨機",
    "price": {
      "currency": "TWD",
      "amount": 8265,
      "converted": 8265,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAC2OA900GH5RL/000001_1781800112.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAC2O-A900GH5RL",
    "buyLabel": "PChome",
    "specs": [
      "17 坪",
      "360 度進風",
      "奈米級濾網",
      "空氣品質顯示"
    ],
    "description": "常見品牌、價位合理、坪數覆蓋實用，適合中型房間。",
    "pros": [
      "價格與覆蓋坪數平衡",
      "操作直覺"
    ],
    "cons": [
      "耗材需定期更換",
      "外型占地較大"
    ],
    "bestFor": "主臥、中型客廳或兒童房。",
    "recommendation": "想要國際品牌與合理價格，AC2936 是安全牌。",
    "score": 85,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "中坪數",
      "360 度",
      "安全牌"
    ],
    "releaseDate": "2021-12-16",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Philips AC2936: Momo富邦購物 【RENZA】適用PHILIPS 飛利浦 AC2936 AC2936/83 空氣清淨機(2合1HEPA+活性碳濾網 濾芯) 型號/規格不相符；LBJ Philips AC2936: Momo富邦購物 (店+)【MIKOCA】適用 Philips 飛利浦 AC2936/83 空氣清淨機 HEPA 活性碳濾網 FY2180/30 奈米級 濾芯 型號/規格不相符；LBJ Philips AC2936: 蝦皮商城 - 怡悅健康生活館 怡悅 HEPA 濾心 濾網 適用 PHILIPS 飛利浦 AC2936 AC2936/86 空氣清淨機 FY2180 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Philips AC2936\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20AC2936%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips AC2936\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20AC2936%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "ap-coway-noble",
    "category": "purifier",
    "rank": 5,
    "budget": "premium",
    "channel": "tw",
    "brand": "Coway",
    "model": "AP-2023K",
    "name": "Noble 4D 美學空氣清淨機",
    "price": {
      "currency": "TWD",
      "amount": 29800,
      "converted": 29800,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU3EA900I6ITM/000001_1782876939.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAU3E-A900I6ITM",
    "buyLabel": "PChome",
    "specs": [
      "15-25 坪",
      "4D 進出風",
      "美型設計",
      "高階濾網"
    ],
    "description": "外型與大坪數兼顧，適合放在客廳而不想破壞裝潢。",
    "pros": [
      "外型高級",
      "大坪數與偵測能力強"
    ],
    "cons": [
      "價格高",
      "耗材成本需預留"
    ],
    "bestFor": "大客廳、開放式空間與重視裝潢一致性。",
    "recommendation": "高階推薦：外型與性能都要，Noble 比一般方盒更好融入空間。",
    "score": 87,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "大坪數",
      "美型",
      "旗艦"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Coway AP-2023K: Momo富邦購物 【Coway】專用客製化強化濾網(適用AP-2023K) 最低價 NT$900 低於現價合理比例，疑似月付/配件/錯類；LBJ Coway AP-2023K: 蝦皮商城 - Coway 台灣官方商店 Coway 濾網 原廠耗材 客製強化濾網 適用 AP 2023 K AP-2023K 免運 非採用通路或含排除條件；LBJ Coway AP-2023K: Momo富邦購物 【PUREBURG】適用Coway格威AP-2023K Noble 4D 清淨機除臭活性碳HEPA濾網濾芯(贈:除臭濾棉X2+全效濾棉X2) 最低價 NT$2,926 低於現價合理比例，疑似月付/配件/錯類。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Coway AP-2023K\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Coway%20AP-2023K%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Coway AP-2023K\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Coway%20AP-2023K%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "purifier-extra-6-dmaue4-a900ijcap",
    "category": "purifier",
    "rank": 6,
    "budget": "premium",
    "channel": "tw",
    "brand": "Blueair",
    "model": "ClassicPro CP9i",
    "name": "ClassicPro CP9i 空氣清淨機",
    "price": {
      "currency": "TWD",
      "amount": 26990,
      "converted": 26990,
      "confidence": "PChome 2026-07-13 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAUE4A900IJCAP/000001_1780654528.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAUE4-A900IJCAP",
    "buyLabel": "PChome",
    "specs": [
      "最大適用 41 坪",
      "高效濾淨",
      "智慧清淨",
      "大坪數"
    ],
    "description": "Blueair ClassicPro CP9i 是空氣清淨機類的補充比較型號，依 2026-07-11 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "坪數帶涵蓋更完整",
      "HEPA/活性碳濾網資訊易比較"
    ],
    "cons": [
      "耗材價格差異大",
      "標示適用坪數需和實際空間打折看待"
    ],
    "bestFor": "過敏、寵物、開放式客廳或想補強臥室空氣品質的人。",
    "recommendation": "同類推薦：補入不同坪數、涼暖合一與抑菌機種，方便比濾網與適用面積。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "大坪數",
      "Blueair",
      "高階"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Blueair ClassicPro CP9i: 蝦皮商城 - 淨博-外銷歐美日專業空氣清淨濾網 適用Blueair ClassicPro CP7i 6700i CP9i 6900i空氣清淨機替換用高效HEPA濾網濾芯 型號/規格不相符；LBJ Blueair ClassicPro CP9i: Momo富邦購物 (店+)【Blueair】ClassicPro 空氣清淨機 CP9i(最大適用44坪) 型號/規格不相符；LBJ Blueair ClassicPro CP9i: 樂天市場 - 歐洲精品家電團購生活館 歐洲精品家電團購生活館 Blueair ClassicPro空氣清淨機 CP9i 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Blueair ClassicPro CP9i\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Blueair%20ClassicPro%20CP9i%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Blueair ClassicPro CP9i\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Blueair%20ClassicPro%20CP9i%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "purifier-extra-7-dmaue4-a900j9knk",
    "category": "purifier",
    "rank": 7,
    "budget": "premium",
    "channel": "tw",
    "brand": "Blueair",
    "model": "Blue Signature SP4i",
    "name": "Blue Signature SP4i 極夜藍空氣清淨機",
    "price": {
      "currency": "TWD",
      "amount": 19990,
      "converted": 19990,
      "confidence": "PChome 2026-07-13 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAUE4A900J9KNK/000001_1780654611.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAUE4-A900J9KNK",
    "buyLabel": "PChome",
    "specs": [
      "22-39 坪",
      "智慧清淨",
      "大坪數",
      "極夜藍"
    ],
    "description": "Blueair Blue Signature SP4i 是空氣清淨機類的補充比較型號，依 2026-07-11 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "坪數帶涵蓋更完整",
      "HEPA/活性碳濾網資訊易比較"
    ],
    "cons": [
      "耗材價格差異大",
      "標示適用坪數需和實際空間打折看待"
    ],
    "bestFor": "過敏、寵物、開放式客廳或想補強臥室空氣品質的人。",
    "recommendation": "同類推薦：補入不同坪數、涼暖合一與抑菌機種，方便比濾網與適用面積。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "大坪數",
      "Blueair",
      "設計"
    ],
    "releaseDate": "2025-06-26",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Blueair Blue Signature SP4i: 蝦皮商城 - Blueair | 恆隆行官方旗艦館 【Blueair】Blue Signature空氣清淨機SP4i前置濾網-六色可選(不含主機) 型號/規格不相符；LBJ Blueair Blue Signature SP4i: Momo富邦購物 【Blueair】Blue Signature空氣清淨機SP4i前置濾網(六色可選) 型號/規格不相符；LBJ Blueair Blue Signature SP4i: 蝦皮商城 - Blueair | 恆隆行官方旗艦館 【Blueair】Blue Signature空氣清淨機SP4i配件-蠟樹實木腳座(不含主機) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Blueair Blue Signature SP4i\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Blueair%20Blue%20Signature%20SP4i%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Blueair Blue Signature SP4i\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Blueair%20Blue%20Signature%20SP4i%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "purifier-extra-8-dmaue4-a900i7dj1",
    "category": "purifier",
    "rank": 8,
    "budget": "value",
    "channel": "tw",
    "brand": "Blueair",
    "model": "BlueMax 3250i",
    "name": "BlueMax 智能 WiFi 空氣清淨機 3250i",
    "price": {
      "currency": "TWD",
      "amount": 4990,
      "converted": 4990,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAUE4A900I7DJ1/000001_1780654701.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAUE4-A900I7DJ1",
    "buyLabel": "PChome",
    "specs": [
      "8-12 坪",
      "WiFi",
      "輕巧",
      "除異味"
    ],
    "description": "Blueair BlueMax 3250i 是空氣清淨機類的補充比較型號，依 2026-07-11 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "坪數帶涵蓋更完整",
      "HEPA/活性碳濾網資訊易比較"
    ],
    "cons": [
      "耗材價格差異大",
      "標示適用坪數需和實際空間打折看待"
    ],
    "bestFor": "過敏、寵物、開放式客廳或想補強臥室空氣品質的人。",
    "recommendation": "同類推薦：補入不同坪數、涼暖合一與抑菌機種，方便比濾網與適用面積。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "小坪數",
      "WiFi",
      "CP 值"
    ],
    "releaseDate": "2023-09-25",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Blueair BlueMax 3250i: 蝦皮商城 - Blueair | 恆隆行官方旗艦館 Blueair BlueMax空氣清淨機3250i(最大適用10坪)福利品 型號/規格不相符；LBJ Blueair BlueMax 3250i: Momo富邦購物 (店+)【Blueair】(A級福利品僅盒微損 商品全新)BlueMax 智能 wifi 空氣清淨機 3250i (最大適用12坪) 型號/規格不相符；LBJ Blueair BlueMax 3250i: Momo富邦購物 【Blueair】BlueMax智能wifi空氣清淨機3250i(輕巧/安靜/除異味/適用8-12坪) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Blueair BlueMax 3250i\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Blueair%20BlueMax%203250i%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Blueair BlueMax 3250i\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Blueair%20BlueMax%203250i%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "purifier-extra-9-dmaue4-a900i7dn1",
    "category": "purifier",
    "rank": 9,
    "budget": "value",
    "channel": "tw",
    "brand": "Blueair",
    "model": "BlueMax 3350i",
    "name": "BlueMax 智能 WiFi 空氣清淨機 3350i",
    "price": {
      "currency": "TWD",
      "amount": 7990,
      "converted": 7990,
      "confidence": "PChome 2026-07-13 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAUE4A900I7DN1/000001_1780654653.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAUE4-A900I7DN1",
    "buyLabel": "PChome",
    "specs": [
      "15-24 坪",
      "WiFi",
      "輕巧",
      "除異味"
    ],
    "description": "Blueair BlueMax 3350i 是空氣清淨機類的補充比較型號，依 2026-07-11 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "坪數帶涵蓋更完整",
      "HEPA/活性碳濾網資訊易比較"
    ],
    "cons": [
      "耗材價格差異大",
      "標示適用坪數需和實際空間打折看待"
    ],
    "bestFor": "過敏、寵物、開放式客廳或想補強臥室空氣品質的人。",
    "recommendation": "同類推薦：補入不同坪數、涼暖合一與抑菌機種，方便比濾網與適用面積。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "中坪數",
      "WiFi",
      "均衡"
    ],
    "releaseDate": "2023-09-25",
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Blueair BlueMax 3350i: 蝦皮商城 - All Sale電器共和國 【Blueair】BlueMax空氣清淨機3350i【最大適用18坪】 型號/規格不相符；LBJ Blueair BlueMax 3350i: Momo富邦購物 (店+)【Blueair】(免運)BlueMax 智能wifi 空氣清淨機 3350i(最大適用24坪) 型號/規格不相符；LBJ Blueair BlueMax 3350i: Yahoo購物中心 Blueair BlueMax空氣清淨機 3350i 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Blueair BlueMax 3350i\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Blueair%20BlueMax%203350i%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Blueair BlueMax 3350i\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Blueair%20BlueMax%203350i%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "purifier-extra-10-dmaue4-a900j40ne",
    "category": "purifier",
    "rank": 10,
    "budget": "mid",
    "channel": "tw",
    "brand": "Blueair",
    "model": "ComfortPure T20i",
    "name": "ComfortPure 智能三合一涼暖空氣清淨機",
    "price": {
      "currency": "TWD",
      "amount": 17990,
      "converted": 17990,
      "confidence": "PChome 2026-07-13 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAUE4A900J40NE/000001_1780654570.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAUE4-A900J40NE",
    "buyLabel": "PChome",
    "specs": [
      "15-19 坪",
      "涼暖三合一",
      "智慧控制",
      "空氣清淨"
    ],
    "description": "Blueair ComfortPure T20i 是空氣清淨機類的補充比較型號，依 2026-07-11 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "坪數帶涵蓋更完整",
      "HEPA/活性碳濾網資訊易比較"
    ],
    "cons": [
      "耗材價格差異大",
      "標示適用坪數需和實際空間打折看待"
    ],
    "bestFor": "過敏、寵物、開放式客廳或想補強臥室空氣品質的人。",
    "recommendation": "同類推薦：補入不同坪數、涼暖合一與抑菌機種，方便比濾網與適用面積。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "涼暖",
      "三合一",
      "臥室"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 15500,
      "currency": "TWD",
      "converted": 15500,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1258269048&cgp=16550",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【Blueair】ComfortPure智能三合一涼暖空氣清淨機T20i(適用15-19坪)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【Blueair】ComfortPure智能三合一涼暖空氣清淨機T20i(適用15-19坪)」最低價為 NT$15,500，最低點日期 2026-06-03。",
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
          "query": "site:mobile01.com \"Blueair ComfortPure T20i\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Blueair%20ComfortPure%20T20i%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Blueair ComfortPure T20i\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Blueair%20ComfortPure%20T20i%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "purifier-extra-11-dmau1f-a900ijca6",
    "category": "purifier",
    "rank": 11,
    "budget": "premium",
    "channel": "tw",
    "brand": "Blueair",
    "model": "ClassicPro CP7i",
    "name": "ClassicPro CP7i 空氣清淨機",
    "price": {
      "currency": "TWD",
      "amount": 22900,
      "converted": 22900,
      "confidence": "momo購物 2026-07-14 頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU1FA900IJCA6/000001_1780654549.jpg",
    "buyUrl": "https://www.momoshop.com.tw/TP/TP0004905/goodsDetail/TP00049050000130",
    "buyLabel": "momo購物",
    "specs": [
      "最大適用 31 坪",
      "高效濾淨",
      "中大坪數",
      "智慧清淨"
    ],
    "description": "Blueair ClassicPro CP7i 是空氣清淨機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "坪數帶涵蓋更完整",
      "HEPA/活性碳濾網資訊易比較"
    ],
    "cons": [
      "耗材價格差異大",
      "標示適用坪數需和實際空間打折看待"
    ],
    "bestFor": "過敏、寵物、開放式客廳或想補強臥室空氣品質的人。",
    "recommendation": "同類推薦：補入不同坪數、涼暖合一與抑菌機種，方便比濾網與適用面積。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Blueair",
      "中大坪數",
      "高效"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Blueair ClassicPro CP7i: 蝦皮商城 - 淨博-外銷歐美日專業空氣清淨濾網 適用Blueair ClassicPro CP7i 6700i CP9i 6900i空氣清淨機替換用高效HEPA濾網濾芯 非採用通路或含排除條件；LBJ Blueair ClassicPro CP7i: 誠品線上 Blueair ClassicPro空氣清淨機CP7i(16-33坪) 型號/規格不相符；LBJ Blueair ClassicPro CP7i: Momo富邦購物 (店+)【Blueair】ClassicPro 高效抑菌空氣清淨機CP7i (適用坪數16-33坪) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Blueair ClassicPro CP7i\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Blueair%20ClassicPro%20CP7i%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Blueair ClassicPro CP7i\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Blueair%20ClassicPro%20CP7i%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "purifier-extra-12-dmau3c-a900i7ork",
    "category": "purifier",
    "rank": 12,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dyson",
    "model": "HP12",
    "name": "Purifier Hot+Cool De-NOx 甲醛 NOx 偵測涼暖空氣清淨機",
    "price": {
      "currency": "TWD",
      "amount": 25900,
      "converted": 25900,
      "confidence": "Yahoo購物中心 2026-07-15 晚間頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU3CA900I7ORK/000001_1782810487.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Dyson-Purifier-Hot-Cool-De-NOx-%E7%94%B2%E9%86%9BNOx-%E5%81%B5%E6%B8%AC%E6%B6%BC%E6%9A%96%E7%A9%BA%E6%B0%A3%E6%B8%85%E6%B7%A8%E6%A9%9F-HP1-12000848.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "涼暖二合一",
      "甲醛/NOx 偵測",
      "空氣清淨",
      "Dyson app"
    ],
    "description": "Dyson HP12 是空氣清淨機類的補充比較型號，依 2026-07-11 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "坪數帶涵蓋更完整",
      "HEPA/活性碳濾網資訊易比較"
    ],
    "cons": [
      "耗材價格差異大",
      "標示適用坪數需和實際空間打折看待"
    ],
    "bestFor": "過敏、寵物、開放式客廳或想補強臥室空氣品質的人。",
    "recommendation": "同類推薦：補入不同坪數、涼暖合一與抑菌機種，方便比濾網與適用面積。",
    "score": 81,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "涼暖",
      "偵測",
      "旗艦"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Dyson HP12: Momo富邦購物 【dyson 戴森】限量福利品 HP12 Purifier Hot+Cool De-NOx三合一甲醛NOx偵測涼暖空氣清淨機(白金色) 型號/規格不相符；LBJ Dyson HP12: 蝦皮商城 - dyson戴森｜恆隆行官方旗艦館 Dyson Purifier Hot+Cool HP12 De-NOx 甲醛NOx偵測涼暖清淨機【限量福利品】1年保固 型號/規格不相符；LBJ Dyson HP12: 誠品線上 【超值福利品】dyson Purifier Hot+Cool De-NOx​甲醛NOx偵測涼暖空氣清淨機HP12​ 白金色 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson HP12\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20HP12%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson HP12\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20HP12%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "purifier-extra-13-dmau3c-a900j2mv6",
    "category": "purifier",
    "rank": 13,
    "budget": "mid",
    "channel": "tw",
    "brand": "Dyson",
    "model": "HP11",
    "name": "Purifier Hot+Cool 三合一涼暖智能空氣清淨機",
    "price": {
      "currency": "TWD",
      "amount": 14900,
      "converted": 14900,
      "confidence": "Yahoo購物中心 2026-07-15 晚間頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU3CA900J2MV6/000001_1767758338.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Dyson%E6%88%B4%E6%A3%AE-Purifier-Hot-Cool-%E4%B8%89%E5%90%88%E4%B8%80%E6%B6%BC%E6%9A%96%E6%99%BA%E8%83%BD%E7%A9%BA%E6%B0%A3%E6%B8%85%E6%B7%A8%E6%A9%9F-HP11-%E7%99%BD%E8%89%B2-%E8%B4%88%E7%BE%8E%E9%AB%AE-11937837.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "涼暖三合一",
      "空氣清淨",
      "智能偵測",
      "白色"
    ],
    "description": "Dyson HP11 是空氣清淨機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "坪數帶涵蓋更完整",
      "HEPA/活性碳濾網資訊易比較"
    ],
    "cons": [
      "耗材價格差異大",
      "標示適用坪數需和實際空間打折看待"
    ],
    "bestFor": "過敏、寵物、開放式客廳或想補強臥室空氣品質的人。",
    "recommendation": "同類推薦：補入不同坪數、涼暖合一與抑菌機種，方便比濾網與適用面積。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "涼暖",
      "Dyson",
      "均衡"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 13857,
      "currency": "TWD",
      "converted": 13857,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1273291026&cgp=14900",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【dyson 戴森】HP11 Purifier Hot+Cool 三合一涼暖智能空氣清淨機(黑色)",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「Momo富邦購物 / 【dyson 戴森】HP11 Purifier Hot+Cool 三合一涼暖智能空氣清淨機(黑色)」最低價為 NT$13,857，最低點日期 2026-07-02。",
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
          "query": "site:mobile01.com \"Dyson HP11\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20HP11%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson HP11\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20HP11%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "purifier-extra-14-dmau3c-a900htkrg",
    "category": "purifier",
    "rank": 14,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dyson",
    "model": "TP12",
    "name": "Purifier Cool De-NOx 甲醛 NOx 偵測涼風空氣清淨機",
    "price": {
      "currency": "TWD",
      "amount": 20900,
      "converted": 20900,
      "confidence": "Yahoo購物中心 2026-07-15 晚間頁面查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU3CA900HTKRG/000001_1767758629.jpg",
    "buyUrl": "https://tw.buy.yahoo.com/gdsale/Dyson-%E6%88%B4%E6%A3%AE-Purifier-Cool-%E7%94%B2%E9%86%9BNOx-%E5%81%B5%E6%B8%AC%E6%B6%BC%E9%A2%A8%E7%A9%BA%E6%B0%A3%E6%B8%85%E6%B7%A8%E6%A9%9FTP12-%E4%BA%8C%E8%89%B2%E5%8F%AF%E9%81%B8-11903396.html",
    "buyLabel": "Yahoo購物中心",
    "specs": [
      "涼風清淨",
      "甲醛/NOx 偵測",
      "塔扇型",
      "白金色"
    ],
    "description": "Dyson TP12 是空氣清淨機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "坪數帶涵蓋更完整",
      "HEPA/活性碳濾網資訊易比較"
    ],
    "cons": [
      "耗材價格差異大",
      "標示適用坪數需和實際空間打折看待"
    ],
    "bestFor": "過敏、寵物、開放式客廳或想補強臥室空氣品質的人。",
    "recommendation": "同類推薦：補入不同坪數、涼暖合一與抑菌機種，方便比濾網與適用面積。",
    "score": 79,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "涼風",
      "偵測",
      "客廳"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Dyson TP12: 蝦皮商城 - dyson戴森｜恆隆行官方旗艦館 Dyson Purifier Cool TP12 De-NOx 甲醛NOx偵測涼風空氣清淨機 原廠公司2年保固 型號/規格不相符；LBJ Dyson TP12: Momo富邦購物 【dyson 戴森】TP12 Purifier Cool De-NOx 二合一甲醛NOx偵測涼風空氣清淨機(鎳金色) 型號/規格不相符；LBJ Dyson TP12: Momo富邦購物 【dyson 戴森】TP12 Purifier Cool De-NOx 二合一甲醛NOx偵測涼風空氣清淨機(白金色) 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson TP12\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20TP12%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson TP12\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20TP12%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "purifier-extra-15-dmac2o-a900gd1zv",
    "category": "purifier",
    "rank": 15,
    "budget": "value",
    "channel": "tw",
    "brand": "Philips",
    "model": "MUJI AC0650",
    "name": "奈米級空氣清淨機 MUJI AC0650",
    "price": {
      "currency": "TWD",
      "amount": 4640,
      "converted": 4640,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAC2OA900GD1ZV/000001_1781800174.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAC2O-A900GD1ZV",
    "buyLabel": "PChome",
    "specs": [
      "奈米級濾淨",
      "簡約外型",
      "小坪數",
      "入門價位"
    ],
    "description": "Philips MUJI AC0650 是空氣清淨機類的補充比較型號，依 2026-07-11 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "坪數帶涵蓋更完整",
      "HEPA/活性碳濾網資訊易比較"
    ],
    "cons": [
      "耗材價格差異大",
      "標示適用坪數需和實際空間打折看待"
    ],
    "bestFor": "過敏、寵物、開放式客廳或想補強臥室空氣品質的人。",
    "recommendation": "同類推薦：補入不同坪數、涼暖合一與抑菌機種，方便比濾網與適用面積。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "小坪數",
      "低價",
      "簡約"
    ],
    "releaseDate": "2023-04-20",
    "historicalLow": {
      "status": "found",
      "amount": 4111,
      "currency": "TWD",
      "converted": 4111,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=1212613433&cgp=4990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：PHILIPS 飛利浦 奈米級空氣清淨機-MUJI AC0650",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「PCHome購物 / PHILIPS 飛利浦 奈米級空氣清淨機-MUJI AC0650」最低價為 NT$4,111，最低點日期 2024-11-11。",
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
          "query": "site:mobile01.com \"Philips MUJI AC0650\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20MUJI%20AC0650%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips MUJI AC0650\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20MUJI%20AC0650%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "purifier-extra-16-dmau5ea900jyg1w",
    "category": "purifier",
    "rank": 16,
    "budget": "mid",
    "channel": "tw",
    "brand": "POIEMA",
    "model": "P50",
    "name": "新氣几 UV 抑菌空氣清淨機",
    "price": {
      "currency": "TWD",
      "amount": 15990,
      "converted": 15990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU5EA900JYG1W/000001_1782872854.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAU5E-A900JYG1W",
    "buyLabel": "PChome",
    "specs": [
      "CADR 300",
      "UV 抑菌",
      "無耗材",
      "水洗濾網"
    ],
    "description": "POIEMA P50 補進本分類比較池，重點是CADR 300、UV 抑菌、無耗材，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "無耗材降低長期成本",
      "寵物毛屑情境訴求明確"
    ],
    "cons": [
      "機身價格高於入門 HEPA",
      "水洗濾網需定期維護"
    ],
    "bestFor": "想比較 HEPA、無耗材、水洗濾網與寵物抗敏取向的人。",
    "recommendation": "補充推薦：新氣几 UV 抑菌空氣清淨機 的優勢在無耗材降低長期成本，但仍建議把機身價格高於入門 HEPA納入取捨。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "POIEMA",
      "無耗材",
      "寵物"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ POIEMA P50: Momo富邦購物 【POIEMA】新氣几 空氣清淨機 (UV抑菌/無耗材/CADR 300水洗濾網/寵物家庭推薦/P50) 型號/規格不相符；LBJ POIEMA P50: Momo富邦購物 【POIEMA】新氣几 空氣清淨機(P50) + Fan智能電扇(SGT-F12W) 超值組 型號/規格不相符；LBJ POIEMA P50: Momo富邦購物 【POIEMA】新氣几 空氣清淨機(P50)＋AirDry 柔衣烘乾機(DRX01)超值組 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"POIEMA P50\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22POIEMA%20P50%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"POIEMA P50\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22POIEMA%20P50%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "purifier-extra-17-dmau5ea900jyg87",
    "category": "purifier",
    "rank": 17,
    "budget": "mid",
    "channel": "tw",
    "brand": "POIEMA",
    "model": "P50B",
    "name": "新氣几 Lite 抑菌除臭空氣清淨機",
    "price": {
      "currency": "TWD",
      "amount": 13990,
      "converted": 13990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU5EA900JYG87/000001_1782872232.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAU5E-A900JYG87",
    "buyLabel": "PChome",
    "specs": [
      "CADR 300",
      "抑菌除臭",
      "無耗材",
      "水洗濾網"
    ],
    "description": "POIEMA P50B 補進本分類比較池，重點是CADR 300、抑菌除臭、無耗材，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "比 UV 版便宜",
      "適合重視低耗材成本的人"
    ],
    "cons": [
      "不是傳統 HEPA 濾網路線",
      "除臭效果需看空間與維護"
    ],
    "bestFor": "想比較 HEPA、無耗材、水洗濾網與寵物抗敏取向的人。",
    "recommendation": "補充推薦：新氣几 Lite 抑菌除臭空氣清淨機 的優勢在比 UV 版便宜，但仍建議把不是傳統 HEPA 濾網路線納入取捨。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "POIEMA",
      "Lite",
      "無耗材"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ POIEMA P50B: Momo富邦購物 【POIEMA】新氣几 Lite 空氣清淨機 (抑菌除臭/無耗材/CADR 300/水洗濾網/抗敏首選/P50B) 非採用通路或含排除條件；LBJ POIEMA P50B: Momo富邦購物 【POIEMA】新氣几 空氣清淨機 Lite版 二入組 (抑菌除臭/無耗材/CADR 300/水洗濾網/抗敏首選/P50B) 非採用通路或含排除條件；LBJ POIEMA P50B: PCHome購物 POIEMA 新氣几 Lite 空氣清淨機 (抑菌除臭/無耗材/CADR 300/水洗濾網/抗敏首選/P50B) 非採用通路或含排除條件。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"POIEMA P50B\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22POIEMA%20P50B%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"POIEMA P50B\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22POIEMA%20P50B%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "purifier-extra-18-dmau6ta900ivwe0",
    "category": "purifier",
    "rank": 18,
    "budget": "value",
    "channel": "tw",
    "brand": "SHARP",
    "model": "FU-J41T-W",
    "name": "10坪圓嘟嘟空氣清淨機",
    "price": {
      "currency": "TWD",
      "amount": 5990,
      "converted": 5990,
      "confidence": "PChome 2026-07-11 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU25A900IK1F2/000001_1744651718.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAU25-A900IK1F2",
    "buyLabel": "PChome",
    "specs": [
      "10 坪",
      "空氣清淨",
      "小中坪數",
      "SHARP"
    ],
    "description": "SHARP FU-J41T-W 補進本分類比較池，重點是10 坪、空氣清淨、小中坪數，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "價格與坪數平衡",
      "品牌售後成熟"
    ],
    "cons": [
      "大客廳不夠力",
      "智慧功能較少"
    ],
    "bestFor": "想比較 HEPA、無耗材、水洗濾網與寵物抗敏取向的人。",
    "recommendation": "補充推薦：10坪圓嘟嘟空氣清淨機 的優勢在價格與坪數平衡，但仍建議把大客廳不夠力納入取捨。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "10坪",
      "中價位",
      "SHARP"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ SHARP FU-J41T-W: Momo富邦購物 (店+)【SHARP 夏普】FU-J41T-W 圓嘟嘟空氣清淨機 雞蛋白 型號/規格不相符；LBJ SHARP FU-J41T-W: 百利市購物中心 【百利市購物中心】【SHARP 夏普】FU-J41T-W 圓嘟嘟空氣清淨機 雞蛋白 型號/規格不相符；LBJ SHARP FU-J41T-W: 三井3C購物網 【三井3C購物網】【SHARP 夏普】FU-J41T-W 圓嘟嘟空氣清淨機 雞蛋白 型號/規格不相符。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"SHARP FU-J41T-W\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22SHARP%20FU-J41T-W%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"SHARP FU-J41T-W\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22SHARP%20FU-J41T-W%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "purifier-extra-19-dmac2oa900j7sbo",
    "category": "purifier",
    "rank": 19,
    "budget": "mid",
    "channel": "tw",
    "brand": "Philips",
    "model": "AC3360/80",
    "name": "寵物抗敏空氣清淨機輕量版",
    "price": {
      "currency": "TWD",
      "amount": 10220,
      "converted": 10220,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAC2OA900J7SBO/000001_1781799851.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAC2O-A900J7SBO",
    "buyLabel": "PChome",
    "specs": [
      "寵物抗敏",
      "空氣品質偵測",
      "中大坪數",
      "Philips"
    ],
    "description": "Philips AC3360/80 補進本分類比較池，重點是寵物抗敏、空氣品質偵測、中大坪數，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "寵物家庭定位明確",
      "Philips 濾材取得較安心"
    ],
    "cons": [
      "耗材成本需列入",
      "價格高於入門機"
    ],
    "bestFor": "想比較 HEPA、無耗材、水洗濾網與寵物抗敏取向的人。",
    "recommendation": "補充推薦：寵物抗敏空氣清淨機輕量版 的優勢在寵物家庭定位明確，但仍建議把耗材成本需列入納入取捨。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "寵物",
      "抗敏",
      "Philips"
    ],
    "releaseDate": "找不到",
    "historicalLow": {
      "status": "found",
      "amount": 9618,
      "currency": "TWD",
      "converted": 9618,
      "sourceUrl": "https://www.lbj.tw/BJ/getPriceHis.aspx?pid=643293860&cgp=10990",
      "sourceTitle": "LBJ 比價撿便宜 歷史價格：【PHILIPS 飛利浦】毛小奈Lite空氣清淨機★適用13-15坪(AC3360/80)+贈濾網 | 清淨",
      "evidenceSnippet": "LBJ 比價撿便宜 歷史價格顯示「蝦皮商城 - Philips 飛利浦家電旗艦館 / 【PHILIPS 飛利浦】毛小奈Lite空氣清淨機★適用13-15坪(AC3360/80)+贈濾網 | 清淨」最低價為 NT$9,618，最低點日期 2026-06-10。",
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
          "query": "site:mobile01.com \"Philips AC3360/80\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Philips%20AC3360%2F80%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Philips AC3360/80\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Philips%20AC3360%2F80%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "purifier-extra-20-dmbm0ka900id5xp",
    "category": "purifier",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "LG",
    "model": "AS601HWG0",
    "name": "PuriCare 超淨化大白空氣清淨機",
    "price": {
      "currency": "TWD",
      "amount": 7399,
      "converted": 7399,
      "confidence": "PChome 2026-07-14 API 查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU0BA900GI0Q1/000001_1763349087.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAU0B-A900GI0Q1",
    "buyLabel": "PChome",
    "specs": [
      "PuriCare",
      "空氣清淨",
      "中坪數",
      "LG"
    ],
    "description": "LG AS601HWG0 補進本分類比較池，重點是PuriCare、空氣清淨、中坪數，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "外型簡潔、品牌售後佳",
      "適合客廳或主臥"
    ],
    "cons": [
      "耗材成本需留意",
      "坪數不如 360 大型款"
    ],
    "bestFor": "想比較 HEPA、無耗材、水洗濾網與寵物抗敏取向的人。",
    "recommendation": "補充推薦：PuriCare 超淨化大白空氣清淨機 的優勢在外型簡潔、品牌售後佳，但仍建議把耗材成本需留意納入取捨。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "LG",
      "PuriCare",
      "中坪數"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ LG AS601HWG0: 蝦皮商城 - 愛濾屋-清淨專家 濾網領航 台灣製造 品質出眾 HEPA 抗病毒 除臭濾網 適用 LG 超級大白 AS601HWG0/101DWH0/651DWH0/651DSS0 非採用通路或含排除條件；LBJ LG AS601HWG0: Momo富邦購物 (店+)LG 抗病毒HEPA除臭濾網濾芯濾心 適用LG超級大白AS601HWG0/101DWH0/651DWH0/651DSS0 非採用通路或含排除條件；LBJ LG AS601HWG0: Yahoo購物中心 LG樂金 超級大白 PuriCare 360空氣清淨機 複合一體過濾網/濾芯(副廠) AS651DSS0 AS651DWH0 AS601HWG0 AS651DBY0 最低價 NT$748 低於現價合理比例，疑似月付/配件/錯類。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG AS601HWG0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20AS601HWG0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG AS601HWG0\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20AS601HWG0%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "purifier-costco-lg-as651dwh0",
    "category": "purifier",
    "rank": 21,
    "budget": "premium",
    "channel": "tw",
    "brand": "LG",
    "model": "AS651DWH0",
    "name": "PuriCare 360° 空氣清淨機",
    "price": {
      "currency": "TWD",
      "amount": 17999,
      "converted": 17999,
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/hfb/h8d/115203619782686.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Cooling-Heating-Air-Treatment/Air-Purifiers-Filters-Accessories/LG-PuriCare-360-Air-Purifier-AS651DWH0/p/136662",
    "buyLabel": "Costco 好市多",
    "specs": [
      "360° 進風",
      "PuriCare 系列",
      "大坪數取向",
      "Costco 評價 4.6 / 37 則"
    ],
    "description": "LG PuriCare 360° 是 Costco 上評價穩定的高階空氣清淨機，適合客廳與開放空間。",
    "pros": [
      "360° 進風設計",
      "Costco 評論數與評分都具參考性"
    ],
    "cons": [
      "機身較大",
      "耗材成本需另估"
    ],
    "bestFor": "客廳、開放式餐廚或想集中處理空氣品質的家庭。",
    "recommendation": "好市多補充推薦：AS651DWH0 可和 Philips、POIEMA 與 Dyson 候選比較大坪數清淨效率。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 Costco 好市多商品頁、品牌保固與退貨政策",
    "tags": [
      "Costco",
      "大坪數",
      "360進風"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ LG AS651DWH0: Yahoo購物中心 LG樂金 超級大白 PuriCare 360空氣清淨機 複合一體過濾網/濾芯(副廠) AS651DSS0 AS651DWH0 AS601HWG0 AS651DBY0 最低價 NT$748 低於現價合理比例，疑似月付/配件/錯類；LBJ LG AS651DWH0: 蝦皮商城 - Renza Filtration 濾網專家 適用LG樂金 超級大白 AS651DBY0 AS651DWH0 AS601HWG0 空氣清淨機 抗菌HEPA活性碳 濾網 非採用通路或含排除條件；LBJ LG AS651DWH0: Momo富邦購物 【PUREBURG】適用 LG樂金 超級大白空氣清淨機AS601DPT0 AS951DPT0 AS651DWH0 副廠濾網組 最低價 NT$760 低於現價合理比例，疑似月付/配件/錯類。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"LG AS651DWH0\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22LG%20AS651DWH0%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"LG AS651DWH0\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22LG%20AS651DWH0%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  },
  {
    "id": "purifier-costco-dyson-bp02",
    "category": "purifier",
    "rank": 22,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dyson",
    "model": "BP02",
    "name": "Big+Quiet 強效極靜抗敏空氣清淨機濾網組",
    "price": {
      "currency": "TWD",
      "amount": 21999,
      "converted": 21999,
      "confidence": "Costco 好市多 2026-07-11 頁面查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h88/h75/382511683305502.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Cooling-Heating-Air-Treatment/Air-Purifiers-Filters-Accessories/Dyson-Purifier-BigQuiet-BP02-Filter-X-3-Pack/p/156487",
    "buyLabel": "Costco 好市多",
    "specs": [
      "適用約 30 坪",
      "110V",
      "一級能效",
      "含 HEPA 與活性碳濾網組",
      "Costco 評價 5 / 11 則"
    ],
    "description": "Costco 評價不錯的空氣清淨機候選，補進高階大坪數比較池。",
    "pros": [
      "品牌與規格辨識度高",
      "含濾網組可降低初期耗材壓力"
    ],
    "cons": [
      "價格高",
      "評論數屬稀少候選，需搭配其他評價"
    ],
    "bestFor": "重視大坪數、低噪音與品牌售後的人",
    "recommendation": "好市多補充推薦：Big+Quiet 強效極靜抗敏空氣清淨機濾網組 評價不錯，補進空氣清淨機分類作為 Costco 候選比較。",
    "score": 86,
    "voltage": "110V",
    "warranty": "依 Costco 好市多商品頁與品牌 2 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "Dyson",
      "大坪數",
      "濾網組"
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
      "note": "已逐筆查 BigGo 730 天價格歷史、FindPrice僅作現價/比價查核、LBJ 有查詢並嘗試讀取歷史價格但未取得可採用同型號可信新品史低；未找到同型號/同尺寸/同規格且屬可信新品通路的可公開驗證歷史最低價；排除候選：LBJ Dyson BP02: 蝦皮商城 - 怡悅健康生活館 怡悅 適用 Dyson 戴森 BP02 BP03 BP04 BP06 甲醛 空氣清淨機 抗病毒 HEPA 活性碳 濾網 最低價 NT$1,850 低於現價合理比例，疑似月付/配件/錯類；LBJ Dyson BP02: 蝦皮商城 - 淨博-外銷歐美日專業空氣清淨濾網 適用Dyson戴森Big+Quiet BP03 BP04 BP06 BP02甲醛偵測空氣清淨機HEPA&活性碳濾網濾芯 最低價 NT$2,080 低於現價合理比例，疑似月付/配件/錯類；LBJ Dyson BP02: 蝦皮商城 - Renza Filtration 濾網專家 適用 Dyson 戴森 BP02 BP03 BP04 BP06 強效極靜甲醛偵測空氣清淨機 HEPA+活性碳 濾網 濾芯 最低價 NT$1,980 低於現價合理比例，疑似月付/配件/錯類。"
    },
    "issueResearch": {
      "status": "no_common_issue",
      "checkedAt": "2026-07-11",
      "summary": "截至查核日，查無達門檻的集中負評／災情",
      "issues": [],
      "checkedSources": [
        {
          "platform": "Mobile01",
          "query": "site:mobile01.com \"Dyson BP02\" (災情 OR 問題 OR 故障 OR 負評)",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Amobile01.com%20%22Dyson%20BP02%22%20(%E7%81%BD%E6%83%85%20OR%20%E5%95%8F%E9%A1%8C%20OR%20%E6%95%85%E9%9A%9C%20OR%20%E8%B2%A0%E8%A9%95)",
          "targetHost": "mobile01.com"
        },
        {
          "platform": "Reddit",
          "query": "site:reddit.com \"Dyson BP02\" (problem OR issue OR defect OR \"negative review\")",
          "queryUrl": "https://www.bing.com/search?format=rss&q=site%3Areddit.com%20%22Dyson%20BP02%22%20(problem%20OR%20issue%20OR%20defect%20OR%20%22negative%20review%22)",
          "targetHost": "reddit.com"
        }
      ]
    }
  }
]);
})();

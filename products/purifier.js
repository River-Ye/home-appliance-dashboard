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
      "confidence": "可信通路查核價"
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "confidence": "可信通路查核價"
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU3CA900K0T3T/000001_1779087672.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAU3C-A900K0T3T",
    "buyLabel": "PChome",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "amount": 7999,
      "converted": 7999,
      "confidence": "可信通路查核價"
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "amount": 27416,
      "converted": 27416,
      "confidence": "可信通路查核價"
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "confidence": "可信通路查核價"
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
    "description": "Blueair ClassicPro CP9i 是空氣清淨機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "confidence": "可信通路查核價"
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
    "description": "Blueair Blue Signature SP4i 是空氣清淨機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "confidence": "可信通路查核價"
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
    "description": "Blueair BlueMax 3250i 是空氣清淨機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "confidence": "可信通路查核價"
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
    "description": "Blueair BlueMax 3350i 是空氣清淨機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "confidence": "可信通路查核價"
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
    "description": "Blueair ComfortPure T20i 是空氣清淨機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "amount": 21150,
      "converted": 21150,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU1FA900IJCA6/000001_1780654549.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAU1F-A900IJCA6",
    "buyLabel": "PChome",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "amount": 26900,
      "converted": 26900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU3CA900I7ORK/000001_1782810487.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAU3C-A900I7ORK",
    "buyLabel": "PChome",
    "specs": [
      "涼暖二合一",
      "甲醛/NOx 偵測",
      "空氣清淨",
      "Dyson app"
    ],
    "description": "Dyson HP12 是空氣清淨機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU3CA900J2MV6/000001_1767758338.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAU3C-A900J2MV6",
    "buyLabel": "PChome",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU3CA900HTKRG/000001_1767758629.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAU3C-A900HTKRG",
    "buyLabel": "PChome",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "amount": 4990,
      "converted": 4990,
      "confidence": "可信通路查核價"
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
    "description": "Philips MUJI AC0650 是空氣清淨機類的補充比較型號，依 2026-07-09 通路頁面整理售價、圖片與核心規格。",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "confidence": "可信通路查核價，擷取 2026-07-09"
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "confidence": "可信通路查核價，擷取 2026-07-09"
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "confidence": "可信通路查核價，擷取 2026-07-09"
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "amount": 10990,
      "converted": 10990,
      "confidence": "可信通路查核價，擷取 2026-07-09"
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "amount": 12900,
      "converted": 12900,
      "confidence": "可信通路查核價，擷取 2026-07-09"
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h92/h40/115203622731806.webp",
    "buyUrl": "https://www.costco.com.tw/Cooling-Heating-Air-Treatment/Air-Purifiers-Filters-Accessories/p/136662",
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
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
      "confidence": "Costco 好市多 2026-07-09 查核價"
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
      "note": "找不到可公開驗證、且明確對應同型號/同尺寸/同規格新品的歷史最低價來源；目前售價只作為現價參考，不推定為史低。"
    }
  }
]);
})();

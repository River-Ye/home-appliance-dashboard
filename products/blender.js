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
      "confidence": "可信通路查核價"
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
    ]
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
      "confidence": "可信通路查核價"
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
    ]
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
      "confidence": "可信通路查核價"
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
    ]
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
      "confidence": "可信通路查核價"
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
    ]
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
      "amount": 79.99,
      "converted": 2566,
      "confidence": "海外可信通路參考價"
    },
    "image": "https://ak1.ostkcdn.com/images/products/is/images/direct/d1c25153baa2aa99eae7831be826d2a51d87c485/Ninja-BN701-Professional-Plus-Blender-with-Auto-iQ.jpg",
    "buyUrl": "https://www.sharkninja.com/ninja-professional-plus-blender-with-auto-iq/BN701.html",
    "buyLabel": "Ninja 官方",
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
    ]
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
      "confidence": "可信通路查核價"
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
    "description": "Vitamix VITA PREP 是破壁機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
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
      "confidence": "可信通路查核價"
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
    "description": "Vitamix VITA PREP 3 是破壁機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
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
      "confidence": "可信通路查核價"
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
    "description": "Vitamix E320 Explorian 是破壁機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
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
      "confidence": "可信通路查核價"
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
    "description": "Vitamix A2500i White 是破壁機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
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
      "confidence": "可信通路查核價"
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
    "description": "Blendtec Professional 800 是破壁機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
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
      "confidence": "可信通路查核價"
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
    "description": "Blendtec Connoisseur 825 是破壁機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
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
      "confidence": "可信通路查核價"
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
    "description": "Blendtec Designer 650 是破壁機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
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
      "confidence": "可信通路查核價"
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
    "description": "Blendtec Total Blender 是破壁機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
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
      "confidence": "可信通路查核價"
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
    "description": "Joyoung L19N-Y1W 是破壁機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
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
    "description": "XD XD-A08 是破壁機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
  }
]);
})();

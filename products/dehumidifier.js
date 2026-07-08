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
      "confidence": "可信通路查核價"
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
    ]
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
      "amount": 20900,
      "converted": 20900,
      "confidence": "可信通路查核價"
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
    ]
  },
  {
    "id": "dh-mitsubishi-ehv220",
    "category": "dehumidifier",
    "rank": 3,
    "budget": "premium",
    "channel": "tw",
    "brand": "Mitsubishi",
    "model": "MJ-EHV220KX-TW",
    "name": "22.5L 日製變頻空氣清淨除濕機",
    "price": {
      "currency": "TWD",
      "amount": 27810,
      "converted": 27810,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ02A900JO0NA/000001_1769056503.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ02-A900JO0NA",
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
    ]
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
      "amount": 21300,
      "converted": 21300,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ4OA900JX7GH/000001_1782957608.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ4O-A900JX7GH",
    "buyLabel": "PChome",
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
    ]
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
      "confidence": "可信通路查核價"
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
    ]
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
      "amount": 16800,
      "converted": 16800,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ4YA900IKOCC/000001_1744795213.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ4Y-A900IKOCC",
    "buyLabel": "PChome",
    "specs": [
      "16 公升",
      "變頻",
      "一級能效",
      "磁石黑"
    ],
    "description": "Panasonic F-YV32NXK 是除濕機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
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
      "amount": 20961,
      "converted": 20961,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ3PA900GTPHC/000001_1699597155.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ3P-A900GTPHC",
    "buyLabel": "PChome",
    "specs": [
      "16 公升",
      "變頻",
      "清淨除濕",
      "高效型"
    ],
    "description": "Panasonic F-YV32MH 是除濕機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
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
      "amount": 11030,
      "converted": 11030,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU0FA900B1HPU/000001_1782813379.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAU0F-A900B1HPU",
    "buyLabel": "PChome",
    "specs": [
      "8 公升",
      "清淨除濕",
      "小坪數",
      "省空間"
    ],
    "description": "Panasonic F-Y16FH 是除濕機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
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
      "confidence": "可信通路查核價"
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
    "description": "Panasonic F-Y18PN 是除濕機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
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
      "confidence": "可信通路查核價"
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
    "description": "LG MD161QPK3 是除濕機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
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
      "amount": 12600,
      "converted": 12600,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ4NA900JF9HP/000001_1778165423.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ4N-A900JF9HP",
    "buyLabel": "PChome",
    "specs": [
      "12 公升",
      "雙變頻",
      "PuriCare",
      "ThinQ 遠端控制"
    ],
    "description": "LG DD121QWE0 是除濕機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
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
      "amount": 15800,
      "converted": 15800,
      "confidence": "可信通路查核價"
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
    "description": "LG DD141QWE0 是除濕機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
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
      "amount": 20900,
      "converted": 20900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ07A900GFBVP/000001_1767340170.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ07-A900GFBVP",
    "buyLabel": "PChome",
    "specs": [
      "25.6 公升",
      "雙變頻",
      "曜黑",
      "大坪數"
    ],
    "description": "LG WD261VKF0 是除濕機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
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
      "amount": 17900,
      "converted": 17900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ4NA900JCHFZ/000001_1783342859.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ4N-A900JCHFZ",
    "buyLabel": "PChome",
    "specs": [
      "18 公升",
      "雙變頻",
      "一級能效",
      "PuriCare"
    ],
    "description": "LG DD181MWE0 是除濕機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    "score": 79,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "LG",
      "18L",
      "節能"
    ]
  },
  {
    "id": "dehumidifier-extra-15-dmbq3s-a900k13zr",
    "category": "dehumidifier",
    "rank": 15,
    "budget": "value",
    "channel": "tw",
    "brand": "Whirlpool",
    "model": "WDEE20TW",
    "name": "20L 第六感智能除濕機",
    "price": {
      "currency": "TWD",
      "amount": 9999,
      "converted": 9999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBQ3SA900K13ZR/000001_1779265654.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBQ3S-A900K13ZR",
    "buyLabel": "PChome",
    "specs": [
      "20 公升",
      "第六感智能",
      "30-80% 濕度設定",
      "廣口上吹"
    ],
    "description": "Whirlpool WDEE20TW 是除濕機類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
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
    ]
  }
]);
})();

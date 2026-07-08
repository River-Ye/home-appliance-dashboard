(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("oven", [
  {
    "id": "oven-panasonic-bs607",
    "category": "oven",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "NN-BS607",
    "name": "27L 蒸烘烤微波爐",
    "price": {
      "currency": "TWD",
      "amount": 12490,
      "converted": 12490,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ021900HFATV/000001_1779702402.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ02-1900HFATV",
    "buyLabel": "PChome",
    "specs": [
      "27L",
      "微波 + 蒸氣 + 烘烤",
      "平台式",
      "變頻"
    ],
    "description": "一台整合微波、蒸、烤，對家電櫃空間有限的人最實用。",
    "pros": [
      "功能完整",
      "尺寸比 30L 旗艦友善"
    ],
    "cons": [
      "氣炸效果不如專門氣炸鍋",
      "內腔清潔需勤快"
    ],
    "bestFor": "小家庭、家電櫃有限、需要微波與蒸烤合一。",
    "recommendation": "綜合推薦：Panasonic NN-BS607 價格中段、蒸烤微波功能完整且售後穩，小家電櫃一台抵多台最均衡。",
    "score": 92,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "多合一",
      "蒸烤",
      "變頻"
    ]
  },
  {
    "id": "oven-whirlpool-mwp269",
    "category": "oven",
    "rank": 2,
    "budget": "mid",
    "channel": "tw",
    "brand": "Whirlpool",
    "model": "MWP269TMT",
    "name": "26L 8 合 1 變頻氣炸蒸烤微波爐",
    "price": {
      "currency": "TWD",
      "amount": 16900,
      "converted": 16900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ02A900J1WEX/000001_1753093870.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ02-A900J1WEX",
    "buyLabel": "PChome",
    "specs": [
      "26L",
      "微波/氣炸/蒸烤",
      "8 合 1",
      "變頻"
    ],
    "description": "功能名單很完整，特別適合明確想把氣炸鍋也整併掉的人。",
    "pros": [
      "氣炸整合",
      "容量與價格均衡"
    ],
    "cons": [
      "操作學習成本較高",
      "氣炸大量食材不如專用機"
    ],
    "bestFor": "想省掉微波爐、烤箱、氣炸鍋三台設備。",
    "recommendation": "若你最在意多合一功能，Whirlpool 比純蒸烘烤機更貼近需求。",
    "score": 90,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "氣炸",
      "多合一",
      "變頻"
    ]
  },
  {
    "id": "oven-panasonic-bs807",
    "category": "oven",
    "rank": 3,
    "budget": "premium",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "NN-BS807",
    "name": "30L 蒸氣烘烤微波爐",
    "price": {
      "currency": "TWD",
      "amount": 19399,
      "converted": 19399,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ02A900IXED0/000001_1749708993.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ02-A900IXED0",
    "buyLabel": "PChome",
    "specs": [
      "30L",
      "蒸氣烘烤",
      "微波",
      "平台式"
    ],
    "description": "容量更大、烹調彈性更高，適合常備餐或一次料理較多份量。",
    "pros": [
      "容量與火力更充裕",
      "Panasonic 食譜資源多"
    ],
    "cons": [
      "價格高",
      "家電櫃需確認散熱與尺寸"
    ],
    "bestFor": "常下廚、備餐、需要 30L 容量。",
    "recommendation": "若櫃體放得下，BS807 比 27L 更適合長期主力使用。",
    "score": 89,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "30L",
      "蒸烤",
      "主力機"
    ]
  },
  {
    "id": "oven-sharp-xp10",
    "category": "oven",
    "rank": 4,
    "budget": "premium",
    "channel": "tw",
    "brand": "SHARP",
    "model": "AX-XP10T",
    "name": "30L Healsio 炙燒水波爐",
    "price": {
      "currency": "TWD",
      "amount": 28800,
      "converted": 28800,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ021900I5KFC/000001_1779346148.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ02-1900I5KFC",
    "buyLabel": "PChome",
    "specs": [
      "30L",
      "水波爐",
      "蒸氣烘烤微波",
      "炙燒"
    ],
    "description": "水波爐在蒸烤與減油料理上有特色，適合重視健康烹調的人。",
    "pros": [
      "蒸氣料理強",
      "烤色與水波特色明顯"
    ],
    "cons": [
      "價格高",
      "清潔與水箱維護較費心"
    ],
    "bestFor": "健康蒸烤、減油料理與多樣食譜。",
    "recommendation": "喜歡蒸氣烹調與水波爐料理邏輯，SHARP 很有代表性。",
    "score": 87,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "水波爐",
      "蒸氣",
      "健康料理"
    ]
  },
  {
    "id": "oven-breville-joule",
    "category": "oven",
    "rank": 5,
    "budget": "premium",
    "channel": "global",
    "brand": "Breville",
    "model": "Joule Oven Air Fryer Pro",
    "name": "智慧氣炸烤箱",
    "price": {
      "currency": "USD",
      "amount": 549.95,
      "converted": 17642,
      "confidence": "海外可信通路參考價"
    },
    "image": "https://cdn11.bigcommerce.com/s-ihwnd7z21q/images/stencil/640w/products/1251/4666/212814_JouleOvenAirFryer1__10534.1724079466.jpg?c=1",
    "buyUrl": "https://www.breville.com/us/en/products/ovens/bov950.html",
    "buyLabel": "Breville 官方",
    "specs": [
      "氣炸/烘烤",
      "智慧食譜",
      "大容量",
      "App 輔助"
    ],
    "description": "海外評價高的智慧烤箱，但不是微波爐，且 120V/保固風險需確認。",
    "pros": [
      "烤箱與氣炸能力強",
      "智慧食譜體驗佳"
    ],
    "cons": [
      "不能微波",
      "海外運稅與保固風險"
    ],
    "bestFor": "已經有微波爐、想升級高階氣炸烤箱的人。",
    "recommendation": "海外參考：烤箱能力強，但不符合一台取代微波爐的需求時要小心。",
    "score": 80,
    "voltage": "海外 120V，需確認插頭與保固",
    "warranty": "可能無台灣保固",
    "tags": [
      "海外",
      "氣炸",
      "智慧"
    ]
  },
  {
    "id": "oven-extra-6-dmbj02-a900i9lq2",
    "category": "oven",
    "rank": 6,
    "budget": "value",
    "channel": "tw",
    "brand": "only",
    "model": "OM27-M54",
    "name": "微波大師 27L 氣炸烤箱微波爐",
    "price": {
      "currency": "TWD",
      "amount": 8990,
      "converted": 8990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ02A900I9LQ2/000001_1782379010.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ02-A900I9LQ2",
    "buyLabel": "PChome",
    "specs": [
      "27L",
      "微波/烤箱/氣炸",
      "乾果/舒肥/優格",
      "質感黑"
    ],
    "description": "only OM27-M54 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "多合一",
      "CP 值",
      "小家庭"
    ]
  },
  {
    "id": "oven-extra-7-dmbj6g-a900j947g",
    "category": "oven",
    "rank": 7,
    "budget": "value",
    "channel": "tw",
    "brand": "Cuisinart",
    "model": "AMW-90TW",
    "name": "25.5L 旗艦級三合一多功能微波氣炸烤箱",
    "price": {
      "currency": "TWD",
      "amount": 9999,
      "converted": 9999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ6GA900J947G/000001_1757918714.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ6G-A900J947G",
    "buyLabel": "PChome",
    "specs": [
      "25.5L",
      "微波",
      "氣炸",
      "烤箱"
    ],
    "description": "Cuisinart AMW-90TW 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Cuisinart",
      "多合一",
      "CP 值"
    ]
  },
  {
    "id": "oven-extra-8-dmbj7p-1900hci3e",
    "category": "oven",
    "rank": 8,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "NN-BS1700",
    "name": "30L 蒸氣烘烤微波爐",
    "price": {
      "currency": "TWD",
      "amount": 26900,
      "converted": 26900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ7P1900HCI3E/000001_1782972848.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ7P-1900HCI3E",
    "buyLabel": "PChome",
    "specs": [
      "30L",
      "蒸氣烘烤",
      "微波",
      "高階水波爐"
    ],
    "description": "Panasonic NN-BS1700 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Panasonic",
      "蒸烤",
      "旗艦"
    ]
  },
  {
    "id": "oven-extra-9-dmbj03-a900iyx0l",
    "category": "oven",
    "rank": 9,
    "budget": "mid",
    "channel": "tw",
    "brand": "Whirlpool",
    "model": "MWP329TST",
    "name": "Coloris 系列 32L 8 合 1 變頻氣炸蒸烤微波爐",
    "price": {
      "currency": "TWD",
      "amount": 22900,
      "converted": 22900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ03A900IYX0L/000001_1750758530.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ03-A900IYX0L",
    "buyLabel": "PChome",
    "specs": [
      "32L",
      "8 合 1",
      "變頻",
      "氣炸蒸烤微波"
    ],
    "description": "Whirlpool MWP329TST 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Whirlpool",
      "32L",
      "多合一"
    ]
  },
  {
    "id": "oven-extra-10-dmbm0g-a900hf91a",
    "category": "oven",
    "rank": 10,
    "budget": "value",
    "channel": "tw",
    "brand": "Cuisinart",
    "model": "CSO-500TW",
    "name": "20L 多功能蒸氣氣炸烤箱",
    "price": {
      "currency": "TWD",
      "amount": 10800,
      "converted": 10800,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM0GA900HF91A/000001_1768545220.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM0G-A900HF91A",
    "buyLabel": "PChome",
    "specs": [
      "20L",
      "蒸氣",
      "氣炸",
      "烘焙"
    ],
    "description": "Cuisinart CSO-500TW 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Cuisinart",
      "氣炸",
      "蒸氣"
    ]
  },
  {
    "id": "oven-extra-11-dmbj6q-a900eo5dh",
    "category": "oven",
    "rank": 11,
    "budget": "value",
    "channel": "tw",
    "brand": "Whirlpool",
    "model": "WSO2500B",
    "name": "25 公升獨立式蒸烤爐",
    "price": {
      "currency": "TWD",
      "amount": 9999,
      "converted": 9999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ6QA900EO5DH/000001_1704094465.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ6Q-A900EO5DH",
    "buyLabel": "PChome",
    "specs": [
      "25L",
      "蒸烤",
      "舒肥",
      "低溫發酵"
    ],
    "description": "Whirlpool WSO2500B 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Whirlpool",
      "蒸烤",
      "小家庭"
    ]
  },
  {
    "id": "oven-extra-12-dmbm0g-a900g41cw",
    "category": "oven",
    "rank": 12,
    "budget": "premium",
    "channel": "tw",
    "brand": "SHARP",
    "model": "AX-XW10T",
    "name": "AIoT 智慧連網 30L 水波爐蒸氣烘烤微波爐",
    "price": {
      "currency": "TWD",
      "amount": 38800,
      "converted": 38800,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM0GA900G41CW/000001_1780306175.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM0G-A900G41CW",
    "buyLabel": "PChome",
    "specs": [
      "30L",
      "水波爐",
      "AIoT",
      "蒸氣烘烤微波"
    ],
    "description": "SHARP AX-XW10T 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 81,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "SHARP",
      "水波爐",
      "旗艦"
    ]
  },
  {
    "id": "oven-extra-13-dmbj7p-1900hcm99",
    "category": "oven",
    "rank": 13,
    "budget": "value",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "NU-SC180B",
    "name": "20L 蒸氣烘烤爐",
    "price": {
      "currency": "TWD",
      "amount": 9990,
      "converted": 9990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ7P1900HCM99/000001_1780393215.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ7P-1900HCM99",
    "buyLabel": "PChome",
    "specs": [
      "20L",
      "蒸氣烘烤",
      "18 項自動菜單",
      "120 度快速蒸"
    ],
    "description": "Panasonic NU-SC180B 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Panasonic",
      "蒸氣",
      "省空間"
    ]
  },
  {
    "id": "oven-extra-14-dmbj0r-a900jt4zv",
    "category": "oven",
    "rank": 14,
    "budget": "mid",
    "channel": "tw",
    "brand": "SHARP",
    "model": "AX-XS10T",
    "name": "31L 極智烘烤系列水波爐",
    "price": {
      "currency": "TWD",
      "amount": 24900,
      "converted": 24900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ0RA900JT4ZV/000001_1781238451.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ0R-A900JT4ZV",
    "buyLabel": "PChome",
    "specs": [
      "31L",
      "極智烘烤",
      "水波爐",
      "黑/白"
    ],
    "description": "SHARP AX-XS10T 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 79,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "SHARP",
      "31L",
      "均衡"
    ]
  },
  {
    "id": "oven-extra-15-dmbj6q-a900eo9m8",
    "category": "oven",
    "rank": 15,
    "budget": "value",
    "channel": "tw",
    "brand": "Whirlpool",
    "model": "WSO322EB",
    "name": "32 公升獨立式萬用蒸烤爐",
    "price": {
      "currency": "TWD",
      "amount": 14800,
      "converted": 14800,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBJ6QA900EO9M8/000001_1716271473.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBJ6Q-A900EO9M8",
    "buyLabel": "PChome",
    "specs": [
      "32L",
      "蒸氣",
      "烘烤",
      "旋風"
    ],
    "description": "Whirlpool WSO322EB 是多功能氣炸烤箱/微波爐類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "一機多用節省檯面",
      "高階款蒸烤與微波整合度高"
    ],
    "cons": [
      "腔體清潔與散熱空間要預留",
      "多功能機價格高且學習成本較大"
    ],
    "bestFor": "家電櫃空間有限，想一台整合微波、烤箱、氣炸或蒸烤的人。",
    "recommendation": "同類推薦：補入水波爐、氣炸微波與多合一款，方便依容量和烹調功能取捨。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Whirlpool",
      "32L",
      "蒸烤"
    ]
  }
]);
})();

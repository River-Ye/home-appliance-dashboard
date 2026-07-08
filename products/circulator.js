(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("circulator", [
  {
    "id": "circ-vornado-660",
    "category": "circulator",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "Vornado",
    "model": "660",
    "name": "渦流空氣循環機",
    "price": {
      "currency": "TWD",
      "amount": 4480,
      "converted": 4480,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/QBAF31A9008YQOZ/000001_1765269816.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/QBAF31-A9008YQOZ",
    "buyLabel": "PChome",
    "specs": [
      "渦流循環",
      "四段風速",
      "適合中大空間",
      "機械旋鈕"
    ],
    "description": "經典強力循環扇，搭冷氣能快速打散室內溫差。",
    "pros": [
      "循環距離強",
      "耐用口碑好"
    ],
    "cons": [
      "無遙控",
      "低速仍有存在感"
    ],
    "bestFor": "客廳、餐廳或開放式空間搭配冷氣。",
    "recommendation": "綜合推薦：Vornado 660 循環口碑與耐用度穩，價格高於小扇但效果明顯，售後與耗材風險低。",
    "score": 92,
    "voltage": "110V 台灣通路",
    "warranty": "依通路",
    "tags": [
      "強循環",
      "冷氣搭配",
      "經典"
    ],
    "releaseDate": "2010-04-13"
  },
  {
    "id": "circ-iris-sc15t",
    "category": "circulator",
    "rank": 2,
    "budget": "value",
    "channel": "tw",
    "brand": "IRIS OHYAMA",
    "model": "PCF-SC15T",
    "name": "遙控空氣循環扇",
    "price": {
      "currency": "TWD",
      "amount": 1990,
      "converted": 1990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBE18A900J27XM/000001_1754619793.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBE18-A900J27XM",
    "buyLabel": "PChome",
    "specs": [
      "桌上型",
      "遙控",
      "上下左右擺頭",
      "小坪數"
    ],
    "description": "小型空間很好用，遙控與擺頭讓使用便利性高。",
    "pros": [
      "體積小",
      "價格合理且有遙控"
    ],
    "cons": [
      "大客廳推送距離有限",
      "清潔拆洗普通"
    ],
    "bestFor": "臥室、書房、小坪數循環。",
    "recommendation": "小房間 CP 值推薦，不需要 Vornado 那種強推力時更好用。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依通路",
    "tags": [
      "小空間",
      "遙控",
      "CP 值"
    ],
    "releaseDate": "2018-03-01"
  },
  {
    "id": "circ-panasonic-fe10",
    "category": "circulator",
    "rank": 3,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-E10HMD",
    "name": "10 吋 DC 直流遙控空氣循環扇",
    "price": {
      "currency": "TWD",
      "amount": 3990,
      "converted": 3990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABLYA900EV5DV/000001_1649666306.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABLY-A900EV5DV",
    "buyLabel": "PChome",
    "specs": [
      "10 吋",
      "DC 馬達",
      "遙控",
      "立體擺頭"
    ],
    "description": "日系品牌與 DC 靜音優勢，適合臥室與長時間低速循環。",
    "pros": [
      "安靜穩定",
      "品牌售後佳"
    ],
    "cons": [
      "價格偏高",
      "強循環不如 Vornado"
    ],
    "bestFor": "重視靜音、品牌與保固。",
    "recommendation": "臥室用比強力型更合適，低速循環舒服。",
    "score": 86,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "DC",
      "靜音",
      "遙控"
    ],
    "releaseDate": "2026-05-12"
  },
  {
    "id": "circ-balmuda-cirq",
    "category": "circulator",
    "rank": 4,
    "budget": "premium",
    "channel": "tw",
    "brand": "BALMUDA",
    "model": "EGF-3300",
    "name": "GreenFan Cirq 空氣循環扇",
    "price": {
      "currency": "TWD",
      "amount": 6990,
      "converted": 6990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBE18A900J154H/000001_1754540295.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBE18-A900J154H",
    "buyLabel": "PChome",
    "specs": [
      "渦輪循環",
      "低噪設計",
      "大角度俯仰",
      "設計家電"
    ],
    "description": "價格高但設計感強，風感與擺放質感優於一般循環扇。",
    "pros": [
      "外型好看",
      "風感細膩"
    ],
    "cons": [
      "價格高",
      "純推力 CP 值不如 Vornado"
    ],
    "bestFor": "開放空間、客廳與重視家電美感的人。",
    "recommendation": "願意為設計感付費時可選，功能與外觀都不突兀。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依通路",
    "tags": [
      "設計",
      "低噪",
      "高質感"
    ],
    "releaseDate": "2017"
  },
  {
    "id": "circ-iris-hd15",
    "category": "circulator",
    "rank": 5,
    "budget": "value",
    "channel": "tw",
    "brand": "IRIS OHYAMA",
    "model": "PCF-HD15",
    "name": "強力氣流循環扇",
    "price": {
      "currency": "TWD",
      "amount": 990,
      "converted": 990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DEEO01A900GCMTC/000001_1723452738.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEEO01-A900GCMTC",
    "buyLabel": "PChome",
    "specs": [
      "15cm 級",
      "手動調整",
      "強力氣流",
      "小坪數"
    ],
    "description": "低價、簡單、風量夠，適合冷氣旁補循環。",
    "pros": [
      "便宜",
      "小巧好移動"
    ],
    "cons": [
      "功能簡單",
      "無智慧/遙控便利性"
    ],
    "bestFor": "預算有限的小房間與租屋。",
    "recommendation": "千元內補冷氣循環，很難要求更多。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依通路",
    "tags": [
      "低價",
      "小巧",
      "租屋"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "circulator-extra-6-dmab3x-a900jwrup",
    "category": "circulator",
    "rank": 6,
    "budget": "mid",
    "channel": "tw",
    "brand": "Vornado",
    "model": "52-TW",
    "name": "52-TW 黑色渦流空氣循環扇",
    "price": {
      "currency": "TWD",
      "amount": 2730,
      "converted": 2730,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAB3XA900JWRUP/000001_1776066916.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAB3X-A900JWRUP",
    "buyLabel": "PChome",
    "specs": [
      "渦流循環",
      "桌上/地面",
      "黑色",
      "小坪數"
    ],
    "description": "Vornado 52-TW 是循環扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "體積小、移動容易",
      "搭配冷氣可改善溫度分布"
    ],
    "cons": [
      "直吹舒適度不如電風扇",
      "高風量款噪音需留意"
    ],
    "bestFor": "需要冷氣輔助循環、跨房間送風或小坪數空氣流動的人。",
    "recommendation": "同類推薦：補入桌上、渦流、復古與直立型，方便依擺放位置篩選。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "渦流",
      "小空間",
      "Vornado"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "circulator-extra-7-dmab3x-a900iigo1",
    "category": "circulator",
    "rank": 7,
    "budget": "mid",
    "channel": "tw",
    "brand": "Vornado",
    "model": "62-TW",
    "name": "62-TW 黑色渦流空氣循環扇",
    "price": {
      "currency": "TWD",
      "amount": 3492,
      "converted": 3492,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAB3XA900IIGO1/000001_1765272569.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAB3X-A900IIGO1",
    "buyLabel": "PChome",
    "specs": [
      "渦流循環",
      "中坪數",
      "黑色",
      "強風量"
    ],
    "description": "Vornado 62-TW 是循環扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "體積小、移動容易",
      "搭配冷氣可改善溫度分布"
    ],
    "cons": [
      "直吹舒適度不如電風扇",
      "高風量款噪音需留意"
    ],
    "bestFor": "需要冷氣輔助循環、跨房間送風或小坪數空氣流動的人。",
    "recommendation": "同類推薦：補入桌上、渦流、復古與直立型，方便依擺放位置篩選。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "渦流",
      "客廳",
      "Vornado"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "circulator-extra-8-qbaf31-a900arwxh",
    "category": "circulator",
    "rank": 8,
    "budget": "premium",
    "channel": "tw",
    "brand": "Vornado",
    "model": "V-FAN",
    "name": "7.5 吋經典復古循環扇綠色",
    "price": {
      "currency": "TWD",
      "amount": 5895,
      "converted": 5895,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/QBAF31A900ARWXH/000001_1765269049.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/QBAF31-A900ARWXH",
    "buyLabel": "PChome",
    "specs": [
      "7.5 吋",
      "復古外型",
      "金屬風格",
      "循環扇"
    ],
    "description": "Vornado V-FAN 是循環扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "體積小、移動容易",
      "搭配冷氣可改善溫度分布"
    ],
    "cons": [
      "直吹舒適度不如電風扇",
      "高風量款噪音需留意"
    ],
    "bestFor": "需要冷氣輔助循環、跨房間送風或小坪數空氣流動的人。",
    "recommendation": "同類推薦：補入桌上、渦流、復古與直立型，方便依擺放位置篩選。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "復古",
      "設計",
      "小空間"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "circulator-extra-9-dmab3x-a900hnewa",
    "category": "circulator",
    "rank": 9,
    "budget": "mid",
    "channel": "tw",
    "brand": "Vornado",
    "model": "RTRHD-TW",
    "name": "RTRHD-TW 渦流空氣循環機",
    "price": {
      "currency": "TWD",
      "amount": 5020,
      "converted": 5020,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAB3XA900HNEWA/000001_1782713198.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAB3X-A900HNEWA",
    "buyLabel": "PChome",
    "specs": [
      "渦流循環",
      "高風量",
      "循環機",
      "客廳用"
    ],
    "description": "Vornado RTRHD-TW 是循環扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "體積小、移動容易",
      "搭配冷氣可改善溫度分布"
    ],
    "cons": [
      "直吹舒適度不如電風扇",
      "高風量款噪音需留意"
    ],
    "bestFor": "需要冷氣輔助循環、跨房間送風或小坪數空氣流動的人。",
    "recommendation": "同類推薦：補入桌上、渦流、復古與直立型，方便依擺放位置篩選。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "渦流",
      "高風量",
      "客廳"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "circulator-extra-10-dmab3x-a900jy5i9",
    "category": "circulator",
    "rank": 10,
    "budget": "premium",
    "channel": "tw",
    "brand": "Vornado",
    "model": "FLYMAX-TW",
    "name": "FLYMAX-TW 破風渦流空氣循環扇",
    "price": {
      "currency": "TWD",
      "amount": 5922,
      "converted": 5922,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAB3XA900JY5I9/000001_1777019492.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAB3X-A900JY5I9",
    "buyLabel": "PChome",
    "specs": [
      "破風渦流",
      "高風量",
      "循環扇",
      "美國品牌"
    ],
    "description": "Vornado FLYMAX-TW 是循環扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "體積小、移動容易",
      "搭配冷氣可改善溫度分布"
    ],
    "cons": [
      "直吹舒適度不如電風扇",
      "高風量款噪音需留意"
    ],
    "bestFor": "需要冷氣輔助循環、跨房間送風或小坪數空氣流動的人。",
    "recommendation": "同類推薦：補入桌上、渦流、復古與直立型，方便依擺放位置篩選。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "渦流",
      "高風量",
      "旗艦"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "circulator-extra-11-dmab1o-a900eq6z4",
    "category": "circulator",
    "rank": 11,
    "budget": "premium",
    "channel": "tw",
    "brand": "Vornado",
    "model": "735B",
    "name": "美國渦流空氣循環機 735B",
    "price": {
      "currency": "TWD",
      "amount": 6190,
      "converted": 6190,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAB1OA900EQ6Z4/000001_1765275011.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAB1O-A900EQ6Z4",
    "buyLabel": "PChome",
    "specs": [
      "大型渦流",
      "高風量",
      "黑色",
      "空氣循環機"
    ],
    "description": "Vornado 735B 是循環扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "體積小、移動容易",
      "搭配冷氣可改善溫度分布"
    ],
    "cons": [
      "直吹舒適度不如電風扇",
      "高風量款噪音需留意"
    ],
    "bestFor": "需要冷氣輔助循環、跨房間送風或小坪數空氣流動的人。",
    "recommendation": "同類推薦：補入桌上、渦流、復古與直立型，方便依擺放位置篩選。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "大坪數",
      "渦流",
      "Vornado"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "circulator-extra-12-qbaf31-a9008ybed",
    "category": "circulator",
    "rank": 12,
    "budget": "premium",
    "channel": "tw",
    "brand": "Vornado",
    "model": "6303DC",
    "name": "6303DC 白色渦流空氣循環機",
    "price": {
      "currency": "TWD",
      "amount": 6282,
      "converted": 6282,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/QBAF31A9008YBED/000001_1765269212.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/QBAF31-A9008YBED",
    "buyLabel": "PChome",
    "specs": [
      "DC 馬達",
      "白色",
      "渦流循環",
      "中大坪數"
    ],
    "description": "Vornado 6303DC 是循環扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "體積小、移動容易",
      "搭配冷氣可改善溫度分布"
    ],
    "cons": [
      "直吹舒適度不如電風扇",
      "高風量款噪音需留意"
    ],
    "bestFor": "需要冷氣輔助循環、跨房間送風或小坪數空氣流動的人。",
    "recommendation": "同類推薦：補入桌上、渦流、復古與直立型，方便依擺放位置篩選。",
    "score": 81,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "DC",
      "渦流",
      "高階"
    ],
    "releaseDate": "2017-05-26"
  },
  {
    "id": "circulator-extra-13-dmab3x-a900hn9w0",
    "category": "circulator",
    "rank": 13,
    "budget": "mid",
    "channel": "tw",
    "brand": "Vornado",
    "model": "EXO61HD-TW",
    "name": "EXO61HD-TW 渦流空氣循環機",
    "price": {
      "currency": "TWD",
      "amount": 4482,
      "converted": 4482,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAB3XA900HN9W0/000001_1782713517.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAB3X-A900HN9W0",
    "buyLabel": "PChome",
    "specs": [
      "渦流循環",
      "中階價位",
      "循環機",
      "耐用取向"
    ],
    "description": "Vornado EXO61HD-TW 是循環扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "體積小、移動容易",
      "搭配冷氣可改善溫度分布"
    ],
    "cons": [
      "直吹舒適度不如電風扇",
      "高風量款噪音需留意"
    ],
    "bestFor": "需要冷氣輔助循環、跨房間送風或小坪數空氣流動的人。",
    "recommendation": "同類推薦：補入桌上、渦流、復古與直立型，方便依擺放位置篩選。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "渦流",
      "均衡",
      "客廳"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "circulator-extra-14-dmabll-a900ij6jp",
    "category": "circulator",
    "rank": 14,
    "budget": "value",
    "channel": "tw",
    "brand": "IRIS OHYAMA",
    "model": "TAF-MKM10",
    "name": "極靜音自動擺動空氣循環扇",
    "price": {
      "currency": "TWD",
      "amount": 799,
      "converted": 799,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABLLA900IJ6JP/000001_1744101771.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABLL-A900IJ6JP",
    "buyLabel": "PChome",
    "specs": [
      "桌上扇",
      "自動擺動",
      "極靜音",
      "小坪數"
    ],
    "description": "IRIS OHYAMA TAF-MKM10 是循環扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "體積小、移動容易",
      "搭配冷氣可改善溫度分布"
    ],
    "cons": [
      "直吹舒適度不如電風扇",
      "高風量款噪音需留意"
    ],
    "bestFor": "需要冷氣輔助循環、跨房間送風或小坪數空氣流動的人。",
    "recommendation": "同類推薦：補入桌上、渦流、復古與直立型，方便依擺放位置篩選。",
    "score": 79,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "低價",
      "桌上",
      "臥室"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "circulator-extra-15-dmbm3g-a900fhkj2",
    "category": "circulator",
    "rank": 15,
    "budget": "value",
    "channel": "tw",
    "brand": "IRIS OHYAMA",
    "model": "PCF-HM23W",
    "name": "擺動式循環扇 10 坪專用",
    "price": {
      "currency": "TWD",
      "amount": 1990,
      "converted": 1990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM3GA900FHKJ2/000001_1773203478.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM3G-A900FHKJ2",
    "buyLabel": "PChome",
    "specs": [
      "10 坪",
      "擺動式",
      "循環扇",
      "家用"
    ],
    "description": "IRIS OHYAMA PCF-HM23W 是循環扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "體積小、移動容易",
      "搭配冷氣可改善溫度分布"
    ],
    "cons": [
      "直吹舒適度不如電風扇",
      "高風量款噪音需留意"
    ],
    "bestFor": "需要冷氣輔助循環、跨房間送風或小坪數空氣流動的人。",
    "recommendation": "同類推薦：補入桌上、渦流、復古與直立型，方便依擺放位置篩選。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "IRIS",
      "10 坪",
      "均衡"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "circulator-extra-16-dmablya900jx0yj",
    "category": "circulator",
    "rank": 16,
    "budget": "value",
    "channel": "tw",
    "brand": "TECO",
    "model": "XYFXA1101CB",
    "name": "11吋智能聲控 DC 3D 循環扇",
    "price": {
      "currency": "TWD",
      "amount": 2111,
      "converted": 2111,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBE18A900K5EJK/000001_1782367256.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBE18-A900K5EJK",
    "buyLabel": "PChome",
    "specs": [
      "11 吋",
      "DC 馬達",
      "3D 擺頭",
      "聲控"
    ],
    "description": "TECO XYFXA1101CB 補進本分類比較池，重點是11 吋、DC 馬達、3D 擺頭，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "聲控與 DC 規格完整",
      "台灣品牌維修較安心"
    ],
    "cons": [
      "聲控實用性看使用習慣",
      "風量不如大尺寸款"
    ],
    "bestFor": "需要搭配冷氣或跨房間循環，並比較 DC、聲控、吸頂與大風量的人。",
    "recommendation": "補充推薦：11吋智能聲控 DC 3D 循環扇 的優勢在聲控與 DC 規格完整，但仍建議把聲控實用性看使用習慣納入取捨。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "DC",
      "聲控",
      "3D"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "circulator-extra-17-dmablxa900gds4d",
    "category": "circulator",
    "rank": 17,
    "budget": "mid",
    "channel": "tw",
    "brand": "I-COOL",
    "model": "MYDC-8877",
    "name": "18吋微電腦 360 度 DC 節能循環扇",
    "price": {
      "currency": "TWD",
      "amount": 2888,
      "converted": 2888,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABLXA900GDS4D/000001_1685677114.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABLX-A900GDS4D",
    "buyLabel": "PChome",
    "specs": [
      "18 吋",
      "DC 節能",
      "360 度",
      "微電腦"
    ],
    "description": "I-COOL MYDC-8877 補進本分類比較池，重點是18 吋、DC 節能、360 度，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "大尺寸覆蓋廣",
      "360 度循環彈性高"
    ],
    "cons": [
      "占地較大",
      "品牌能見度較低"
    ],
    "bestFor": "需要搭配冷氣或跨房間循環，並比較 DC、聲控、吸頂與大風量的人。",
    "recommendation": "補充推薦：18吋微電腦 360 度 DC 節能循環扇 的優勢在大尺寸覆蓋廣，但仍建議把占地較大納入取捨。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "大風量",
      "DC",
      "360 度"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "circulator-extra-18-dmablxa900hi682",
    "category": "circulator",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "brand": "日虎",
    "model": "AI語音循環扇",
    "name": "DC 語音循環扇",
    "price": {
      "currency": "TWD",
      "amount": 3680,
      "converted": 3680,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABLXA900HI682/000001_1716457070.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABLX-A900HI682",
    "buyLabel": "PChome",
    "specs": [
      "DC",
      "AI 語音",
      "循環扇",
      "多段風量"
    ],
    "description": "日虎 AI語音循環扇 補進本分類比較池，重點是DC、AI 語音、循環扇，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "語音控制方便",
      "價格比進口高階款低"
    ],
    "cons": [
      "語音辨識體驗需實測",
      "品牌售後需看通路"
    ],
    "bestFor": "需要搭配冷氣或跨房間循環，並比較 DC、聲控、吸頂與大風量的人。",
    "recommendation": "補充推薦：DC 語音循環扇 的優勢在語音控制方便，但仍建議把語音辨識體驗需實測納入取捨。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "語音",
      "DC",
      "預算"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "circulator-extra-19-dmablya900k3cs7",
    "category": "circulator",
    "rank": 19,
    "budget": "mid",
    "channel": "tw",
    "brand": "SAMPO",
    "model": "SK-S24181WL",
    "name": "18吋 DC 直流馬達循環吸頂扇",
    "price": {
      "currency": "TWD",
      "amount": 2980,
      "converted": 2980,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM3GA900IUV09/000001_1777977008.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM3G-A900IUV09",
    "buyLabel": "PChome",
    "specs": [
      "18 吋",
      "DC 馬達",
      "吸頂",
      "循環"
    ],
    "description": "SAMPO SK-S24181WL 補進本分類比較池，重點是18 吋、DC 馬達、吸頂，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "不占地面空間",
      "適合固定房間循環"
    ],
    "cons": [
      "安裝條件較受限",
      "不適合租屋隨搬"
    ],
    "bestFor": "需要搭配冷氣或跨房間循環，並比較 DC、聲控、吸頂與大風量的人。",
    "recommendation": "補充推薦：18吋 DC 直流馬達循環吸頂扇 的優勢在不占地面空間，但仍建議把安裝條件較受限納入取捨。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "吸頂",
      "DC",
      "固定式"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "circulator-extra-20-dmablya900h2h5c",
    "category": "circulator",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "DELTA",
    "model": "雙渦輪多向循環扇",
    "name": "DC 直流雙渦輪多向循環扇",
    "price": {
      "currency": "TWD",
      "amount": 6400,
      "converted": 6400,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABLYA900H2H5C/000001_1782200669.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABLY-A900H2H5C",
    "buyLabel": "PChome",
    "specs": [
      "DC",
      "雙渦輪",
      "多向循環",
      "節能"
    ],
    "description": "DELTA 雙渦輪多向循環扇 補進本分類比較池，重點是DC、雙渦輪、多向循環，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "台達馬達與節能口碑好",
      "多向循環適合大空間"
    ],
    "cons": [
      "價格比入門循環扇高",
      "外型偏機能"
    ],
    "bestFor": "需要搭配冷氣或跨房間循環，並比較 DC、聲控、吸頂與大風量的人。",
    "recommendation": "補充推薦：DC 直流雙渦輪多向循環扇 的優勢在台達馬達與節能口碑好，但仍建議把價格比入門循環扇高納入取捨。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "雙渦輪",
      "DC",
      "大空間"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "circulator-costco-airmate-fb2393dr",
    "category": "circulator",
    "rank": 21,
    "budget": "mid",
    "channel": "tw",
    "brand": "Airmate",
    "model": "FB2393DR",
    "name": "9吋 DC 直流馬達空氣循環扇",
    "price": {
      "currency": "TWD",
      "amount": 3799,
      "converted": 3799,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h2a/h39/333377588363294.webp",
    "buyUrl": "https://www.costco.com.tw/Cooling-Heating-Air-Treatment/Heating-Cooling/p/149328",
    "buyLabel": "Costco 好市多",
    "specs": [
      "9 吋循環扇",
      "DC 直流馬達",
      "遙控操作",
      "Costco 評價 4.4 / 118 則"
    ],
    "description": "FB2393DR 是 Costco 評論數較多的循環扇，適合搭配冷氣讓室內氣流更平均。",
    "pros": [
      "評論數 118 則，評價基礎較厚",
      "DC 馬達適合長時間使用"
    ],
    "cons": [
      "售價高於入門循環扇",
      "規格細節仍以好市多頁面為準"
    ],
    "bestFor": "想在 Costco 買一台搭冷氣、除濕機使用的循環扇。",
    "recommendation": "好市多補充推薦：比小型入門款更完整，評價資料也比無評分新品可靠。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 Costco 好市多商品頁、品牌保固與退貨政策",
    "tags": [
      "Costco",
      "循環扇",
      "DC"
    ],
    "releaseDate": "找不到"
  }
]);
})();

(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("fan", [
  {
    "id": "fan-panasonic-fh16",
    "category": "fan",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-H16GND",
    "name": "16 吋 DC 微電腦定時電風扇",
    "price": {
      "currency": "TWD",
      "amount": 3272,
      "converted": 3272,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAB30A900EOQ24/000001_1753338098.png",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAB30-A900EOQ24",
    "buyLabel": "PChome",
    "specs": [
      "16 吋",
      "DC 變頻",
      "負離子",
      "ECO 溫控"
    ],
    "description": "功能、靜音、耗電與品牌售後都均衡，是不容易踩雷的主力立扇。",
    "pros": [
      "穩定耐用",
      "風量與靜音平衡"
    ],
    "cons": [
      "造型保守",
      "價格比入門 DC 扇高"
    ],
    "bestFor": "客廳、臥室日常長時間使用。",
    "recommendation": "綜合推薦：Panasonic 售後維修穩，三千多元有 DC、遙控與足夠風量，長期使用 CP 最好。",
    "score": 92,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "DC",
      "靜音",
      "溫控"
    ]
  },
  {
    "id": "fan-sharp-pv16",
    "category": "fan",
    "rank": 2,
    "budget": "mid",
    "channel": "tw",
    "brand": "SHARP",
    "model": "PJ-PV16AT-W",
    "name": "16 吋自動除菌離子 DC 電風扇",
    "price": {
      "currency": "TWD",
      "amount": 3890,
      "converted": 3890,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABPEA900JYOWP/000001_1779868844.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABPE-A900JYOWP",
    "buyLabel": "PChome",
    "specs": [
      "16 吋",
      "DC 馬達",
      "Plasmacluster",
      "遙控"
    ],
    "description": "主打除菌離子與節能 DC，適合想兼顧風扇與空氣感受的人。",
    "pros": [
      "附加空氣淨化概念",
      "價格合理"
    ],
    "cons": [
      "除菌離子效果不等於空氣清淨機",
      "風感偏傳統"
    ],
    "bestFor": "臥室、書房與有 SHARP 偏好的使用者。",
    "recommendation": "比入門扇多一些空氣循環附加功能，價差仍可接受。",
    "score": 88,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "DC",
      "除菌離子",
      "中價位"
    ]
  },
  {
    "id": "fan-dyson-am12",
    "category": "fan",
    "rank": 3,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dyson",
    "model": "AM12",
    "name": "Cool CF1 智能涼風扇",
    "price": {
      "currency": "TWD",
      "amount": 9990,
      "converted": 9990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAU3CA900J971J/000001_1767758265.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAU3C-A900J971J",
    "buyLabel": "PChome",
    "specs": [
      "無葉片",
      "智慧控制",
      "擺頭",
      "易清潔"
    ],
    "description": "外型與安全性佳，適合有小孩、寵物或重視空間美感的家庭。",
    "pros": [
      "安全好清潔",
      "外型俐落"
    ],
    "cons": [
      "價格高",
      "同價位風量 CP 不如傳統扇"
    ],
    "bestFor": "重視安全、設計與清潔便利。",
    "recommendation": "若風量不是唯一優先，Dyson 的設計與易清潔值得考慮。",
    "score": 84,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "無葉片",
      "設計",
      "安全"
    ]
  },
  {
    "id": "fan-heran-hdf16",
    "category": "fan",
    "rank": 4,
    "budget": "value",
    "channel": "tw",
    "brand": "HERAN",
    "model": "HDF-16S6",
    "name": "16 吋 ECO 溫控智能變頻 DC 風扇",
    "price": {
      "currency": "TWD",
      "amount": 1480,
      "converted": 1480,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABKUA900F4MB2/000001_1760585255.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABKU-A900F4MB2",
    "buyLabel": "PChome",
    "specs": [
      "16 吋",
      "DC 變頻",
      "ECO 溫控",
      "遙控"
    ],
    "description": "低價位就有 DC 變頻與溫控，適合租屋或多房間配置。",
    "pros": [
      "價格低",
      "功能給得完整"
    ],
    "cons": [
      "質感與耐用口碑不如日系",
      "風切聲控制普通"
    ],
    "bestFor": "租屋、多房間補扇、預算優先。",
    "recommendation": "CP 值入門款：花小錢補齊 DC 與遙控。",
    "score": 82,
    "voltage": "110V 台灣公司貨",
    "warranty": "台灣保固",
    "tags": [
      "CP 值",
      "DC",
      "租屋"
    ]
  },
  {
    "id": "fan-nwt-wpf16",
    "category": "fan",
    "rank": 5,
    "budget": "value",
    "channel": "tw",
    "brand": "NWT",
    "model": "WPF-16S7",
    "name": "16 吋 DC 變頻直流電風扇",
    "price": {
      "currency": "TWD",
      "amount": 1290,
      "converted": 1290,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABP5A900HDZSK/000001_1760322125.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABP5-A900HDZSK",
    "buyLabel": "PChome",
    "specs": [
      "16 吋",
      "DC 馬達",
      "多段風量",
      "基本遙控"
    ],
    "description": "價格壓得很低，適合把風扇當消耗型家電的人。",
    "pros": [
      "便宜",
      "基本功能齊"
    ],
    "cons": [
      "品牌與售後能見度較低",
      "質感普通"
    ],
    "bestFor": "預算極限、備用扇或短期租屋。",
    "recommendation": "若只想要便宜 DC 立扇，這台很有價格優勢。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依通路",
    "tags": [
      "低價",
      "DC",
      "備用"
    ]
  },
  {
    "id": "fan-extra-6-dmablm-a900eorov",
    "category": "fan",
    "rank": 6,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-S16LMD",
    "name": "16 吋 DC 變頻電風扇",
    "price": {
      "currency": "TWD",
      "amount": 2472,
      "converted": 2472,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABLMA900EOROV/000001_1757038312.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABLM-A900EOROV",
    "buyLabel": "PChome",
    "specs": [
      "16 吋",
      "DC 變頻",
      "立扇",
      "節能"
    ],
    "description": "Panasonic F-S16LMD 是電風扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "DC",
      "16 吋",
      "CP 值"
    ]
  },
  {
    "id": "fan-extra-7-dmablm-a900eoq12",
    "category": "fan",
    "rank": 7,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-H14GND-K",
    "name": "14 吋 DC 微電腦定時電風扇",
    "price": {
      "currency": "TWD",
      "amount": 3112,
      "converted": 3112,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABLMA900EOQ12/000001_1695005225.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABLM-A900EOQ12",
    "buyLabel": "PChome",
    "specs": [
      "14 吋",
      "DC 馬達",
      "負離子",
      "ECO 溫控"
    ],
    "description": "Panasonic F-H14GND-K 是電風扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "DC",
      "負離子",
      "臥室"
    ]
  },
  {
    "id": "fan-extra-8-dmablm-a900eorp0",
    "category": "fan",
    "rank": 8,
    "budget": "premium",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-H14LXD-K",
    "name": "14 吋 DC 微電腦定時電風扇",
    "price": {
      "currency": "TWD",
      "amount": 3920,
      "converted": 3920,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABLMA900EORP0/000001_1697161466.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABLM-A900EORP0",
    "buyLabel": "PChome",
    "specs": [
      "14 吋",
      "DC 馬達",
      "定時",
      "遙控"
    ],
    "description": "Panasonic F-H14LXD-K 是電風扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "DC",
      "高階",
      "臥室"
    ]
  },
  {
    "id": "fan-extra-9-dmab1f-a900b4sp0",
    "category": "fan",
    "rank": 9,
    "budget": "value",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-S14KM",
    "name": "14 吋微電腦 DC 直流電風扇",
    "price": {
      "currency": "TWD",
      "amount": 1444,
      "converted": 1444,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAB1FA900B4SP0/000001_1612233290.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAB1F-A900B4SP0",
    "buyLabel": "PChome",
    "specs": [
      "14 吋",
      "DC 直流",
      "微電腦",
      "台灣製造"
    ],
    "description": "Panasonic F-S14KM 是電風扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "DC",
      "低價",
      "租屋"
    ]
  },
  {
    "id": "fan-extra-10-dmab30-a900eoq5x",
    "category": "fan",
    "rank": 10,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-L16GMD",
    "name": "16 吋 DC 變頻高級型溫感遙控電風扇",
    "price": {
      "currency": "TWD",
      "amount": 3231,
      "converted": 3231,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAB30A900EOQ5X/000001_1693793932.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAB30-A900EOQ5X",
    "buyLabel": "PChome",
    "specs": [
      "16 吋",
      "DC 變頻",
      "溫感",
      "遙控"
    ],
    "description": "Panasonic F-L16GMD 是電風扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "DC",
      "溫控",
      "客廳"
    ]
  },
  {
    "id": "fan-extra-11-dmab1f-a900jxknn",
    "category": "fan",
    "rank": 11,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-S14QT",
    "name": "14 吋五片扇葉 ECO 溫度感知 DC 馬達電風扇",
    "price": {
      "currency": "TWD",
      "amount": 2380,
      "converted": 2380,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAB1FA900JXKNN/000001_1776674767.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAB1F-A900JXKNN",
    "buyLabel": "PChome",
    "specs": [
      "14 吋",
      "五片扇葉",
      "ECO 溫度感知",
      "附遙控器"
    ],
    "description": "Panasonic F-S14QT 是電風扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "DC",
      "溫控",
      "CP 值"
    ]
  },
  {
    "id": "fan-extra-12-dmab1f-a900jx6mj",
    "category": "fan",
    "rank": 12,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "F-S12QT",
    "name": "12 吋五片扇葉 ECO 溫度感知 DC 馬達電風扇",
    "price": {
      "currency": "TWD",
      "amount": 2079,
      "converted": 2079,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAB1FA900JX6MJ/000001_1776674604.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAB1F-A900JX6MJ",
    "buyLabel": "PChome",
    "specs": [
      "12 吋",
      "五片扇葉",
      "ECO 溫控",
      "附遙控器"
    ],
    "description": "Panasonic F-S12QT 是電風扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 81,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "小空間",
      "DC",
      "臥室"
    ]
  },
  {
    "id": "fan-extra-13-dmabpe-a900jzz0q",
    "category": "fan",
    "rank": 13,
    "budget": "mid",
    "channel": "tw",
    "brand": "SHARP",
    "model": "PJ-DC16VT-W",
    "name": "16 吋 DC 節能直流馬達立扇",
    "price": {
      "currency": "TWD",
      "amount": 3290,
      "converted": 3290,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABPEA900JZZ0Q/000001_1778477239.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABPE-A900JZZ0Q",
    "buyLabel": "PChome",
    "specs": [
      "16 吋",
      "DC 馬達",
      "節能",
      "立扇"
    ],
    "description": "SHARP PJ-DC16VT-W 是電風扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "SHARP",
      "DC",
      "客廳"
    ]
  },
  {
    "id": "fan-extra-14-dmabpm-a900k2j9e",
    "category": "fan",
    "rank": 14,
    "budget": "value",
    "channel": "tw",
    "brand": "SHARP",
    "model": "PJ-V14A-W",
    "name": "14 吋 DC 直流馬達伸縮立扇",
    "price": {
      "currency": "TWD",
      "amount": 1861,
      "converted": 1861,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABPMA900K2J9E/000001_1780381094.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABPM-A900K2J9E",
    "buyLabel": "PChome",
    "specs": [
      "14 吋",
      "DC 直流",
      "伸縮立扇",
      "入門價位"
    ],
    "description": "SHARP PJ-V14A-W 是電風扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 79,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "SHARP",
      "低價",
      "小空間"
    ]
  },
  {
    "id": "fan-extra-15-dmabpm-a900j334p",
    "category": "fan",
    "rank": 15,
    "budget": "value",
    "channel": "tw",
    "brand": "SHARP",
    "model": "PJ-E14GE",
    "name": "14 吋 DC 直流馬達遙控立扇",
    "price": {
      "currency": "TWD",
      "amount": 1706,
      "converted": 1706,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMABPMA900J334P/000001_1753932662.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMABPM-A900J334P",
    "buyLabel": "PChome",
    "specs": [
      "14 吋",
      "DC 馬達",
      "遙控",
      "立扇"
    ],
    "description": "SHARP PJ-E14GE 是電風扇類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "DC 機種普遍省電",
      "台灣夏季替代冷氣循環很實用"
    ],
    "cons": [
      "平價款塑料感較明顯",
      "部分功能款清潔拆裝較麻煩"
    ],
    "bestFor": "在臥室、客廳或租屋處找省電、安靜直流扇的人。",
    "recommendation": "同類推薦：用不同尺寸、DC 馬達與遙控/溫控功能做價格帶比較。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "SHARP",
      "低價",
      "遙控"
    ]
  }
]);
})();

(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("bidet", [
  {
    "id": "bidet-toto-s2",
    "category": "bidet",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "TOTO",
    "model": "TCF8342TW S2",
    "name": "WASHLET 溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 9900,
      "converted": 9900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DPAL2NA900HYYVV/000001_1732173829.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DPAL2N-A900HYYVV",
    "buyLabel": "PChome",
    "specs": [
      "溫水洗淨",
      "溫熱無縫便座",
      "噴嘴自潔",
      "基本安裝需確認"
    ],
    "description": "TOTO 口碑與維修能見度高，中階價格已具備日常所需功能。",
    "pros": [
      "品牌與維修安心",
      "功能完整不過度昂貴"
    ],
    "cons": [
      "需確認馬桶尺寸",
      "安裝與插座可能另計"
    ],
    "bestFor": "首次安裝免治、重視品牌安心。",
    "recommendation": "綜合推薦：TOTO S2 安裝尺寸、零件與售後最安心，價格比高階款親民，長期使用風險最低。",
    "score": 93,
    "voltage": "110V 台灣公司貨，浴廁需有安全插座",
    "warranty": "台灣保固",
    "tags": [
      "WASHLET",
      "中階",
      "安心牌"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-toto-c2",
    "category": "bidet",
    "rank": 2,
    "budget": "value",
    "channel": "tw",
    "brand": "TOTO",
    "model": "TCF23710ATW C2",
    "name": "WASHLET 溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 8990,
      "converted": 8990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DEDW0RA900I2TTG/000001_1764912449.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEDW0R-A900I2TTG",
    "buyLabel": "PChome",
    "specs": [
      "溫水洗淨",
      "噴嘴自潔",
      "溫熱便座",
      "標準款"
    ],
    "description": "TOTO 入門到中階的實用款，價格比高階 WASHLET 容易下手。",
    "pros": [
      "價格較低",
      "TOTO 品牌安心"
    ],
    "cons": [
      "高階除臭/遙控功能較少",
      "仍需確認安裝條件"
    ],
    "bestFor": "預算一萬元內、想要 TOTO 基本款。",
    "recommendation": "小預算選 TOTO 時，C2 是務實入口。",
    "score": 89,
    "voltage": "110V 台灣公司貨，浴廁需有安全插座",
    "warranty": "台灣保固",
    "tags": [
      "入門",
      "WASHLET",
      "CP 值"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-panasonic-pstk09",
    "category": "bidet",
    "rank": 3,
    "budget": "value",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "DL-PSTK09TWW",
    "name": "瞬熱式溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 8990,
      "converted": 8990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL8LA900H03A0/000001_1760407099.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL8L-A900H03A0",
    "buyLabel": "PChome",
    "specs": [
      "瞬熱式",
      "溫水洗淨",
      "基本安裝",
      "省電"
    ],
    "description": "瞬熱式不用長時間保溫，適合重視節能與基本清潔的人。",
    "pros": [
      "瞬熱省電",
      "Panasonic 售後普及"
    ],
    "cons": [
      "設計感普通",
      "高階功能較少"
    ],
    "bestFor": "一萬元內、重視瞬熱與品牌售後。",
    "recommendation": "若偏好家電品牌售後，Panasonic 瞬熱款很有 CP 值。",
    "score": 88,
    "voltage": "110V 台灣公司貨，浴廁需有安全插座",
    "warranty": "台灣保固",
    "tags": [
      "瞬熱",
      "節能",
      "CP 值"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-kohler-c3430",
    "category": "bidet",
    "rank": 4,
    "budget": "mid",
    "channel": "tw",
    "brand": "KOHLER",
    "model": "C3-430",
    "name": "瞬熱式電腦免治馬桶蓋",
    "price": {
      "currency": "TWD",
      "amount": 12900,
      "converted": 12900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DEDW1HA900FW2KD/000001_1672380333.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEDW1H-A900FW2KD",
    "buyLabel": "PChome",
    "specs": [
      "瞬熱式",
      "UV 除菌",
      "三檔溫控",
      "不鏽鋼噴嘴"
    ],
    "description": "衛浴品牌質感好，UV 除菌與不鏽鋼噴嘴是差異化重點。",
    "pros": [
      "質感佳",
      "UV 除菌加分"
    ],
    "cons": [
      "價格高於入門",
      "需確認座型相容"
    ],
    "bestFor": "重視衛浴品牌與外觀質感。",
    "recommendation": "衛浴整體質感優先，KOHLER 比家電品牌更搭配裝潢。",
    "score": 86,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依通路",
    "tags": [
      "UV",
      "衛浴品牌",
      "瞬熱"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-hcg-af890",
    "category": "bidet",
    "rank": 5,
    "budget": "value",
    "channel": "tw",
    "brand": "HCG",
    "model": "AF890AW",
    "name": "免治沖洗馬桶座",
    "price": {
      "currency": "TWD",
      "amount": 8537,
      "converted": 8537,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900IYWWR/000001_1750758652.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900IYWWR",
    "buyLabel": "PChome",
    "specs": [
      "44/47cm",
      "免治沖洗",
      "台灣衛浴品牌",
      "不含安裝"
    ],
    "description": "本地衛浴品牌，價格與維修可得性不錯，但需另外確認安裝費。",
    "pros": [
      "本地品牌",
      "價格合理"
    ],
    "cons": [
      "頁面標示不含安裝",
      "功能不如高階 TOTO/Panasonic"
    ],
    "bestFor": "預算有限、偏好台灣衛浴品牌。",
    "recommendation": "若已有 HCG 馬桶或偏好本地維修，可列為務實選項。",
    "score": 82,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依通路",
    "tags": [
      "本地品牌",
      "低價",
      "需安裝"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-extra-6-dmal6w-a900jnqf2",
    "category": "bidet",
    "rank": 6,
    "budget": "premium",
    "channel": "tw",
    "brand": "TOTO",
    "model": "TCF47160GTW S7",
    "name": "S7 輕奢款 WASHLET 溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 23900,
      "converted": 23900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900JNQF2/000001_1783412715.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900JNQF2",
    "buyLabel": "PChome",
    "specs": [
      "WASHLET",
      "電解除菌水",
      "溫熱便座",
      "S7 輕奢款"
    ],
    "description": "TOTO TCF47160GTW S7 是免治馬桶類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 87,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "TOTO",
      "除菌",
      "高階"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-extra-7-dmal6i-a900jewps",
    "category": "bidet",
    "rank": 7,
    "budget": "mid",
    "channel": "tw",
    "brand": "TOTO",
    "model": "TCF24460ATW C5",
    "name": "C5 藏線式 WASHLET 溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 14300,
      "converted": 14300,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6IA900JEWPS/000001_1765348841.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6I-A900JEWPS",
    "buyLabel": "PChome",
    "specs": [
      "WASHLET",
      "噴嘴自潔",
      "溫熱便座",
      "藏線式"
    ],
    "description": "TOTO TCF24460ATW C5 是免治馬桶類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 86,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "TOTO",
      "藏線",
      "均衡"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-extra-8-dmal6w-a900jvx5o",
    "category": "bidet",
    "rank": 8,
    "budget": "mid",
    "channel": "tw",
    "brand": "TOTO",
    "model": "TCF34461GTW S5",
    "name": "S5 除菌溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 17900,
      "converted": 17900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900JVX5O/000001_1775638184.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900JVX5O",
    "buyLabel": "PChome",
    "specs": [
      "電解除菌水",
      "強力除臭",
      "無線遙控",
      "WASHLET"
    ],
    "description": "TOTO TCF34461GTW S5 是免治馬桶類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 85,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "TOTO",
      "除臭",
      "遙控"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-extra-9-dmal6w-a900jw0lw",
    "category": "bidet",
    "rank": 9,
    "budget": "mid",
    "channel": "tw",
    "brand": "TOTO",
    "model": "TCF33161GTW S2",
    "name": "S2 標準款除菌溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 11900,
      "converted": 11900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900JW0LW/000001_1775705407.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900JW0LW",
    "buyLabel": "PChome",
    "specs": [
      "電解除菌水",
      "智慧洗淨",
      "溫熱便座",
      "標準款"
    ],
    "description": "TOTO TCF33161GTW S2 是免治馬桶類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 84,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "TOTO",
      "標準",
      "CP 值"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-extra-10-dmal6i-a900jekad",
    "category": "bidet",
    "rank": 10,
    "budget": "premium",
    "channel": "tw",
    "brand": "TOTO",
    "model": "TCF47360GTW S7",
    "name": "S7 旗艦款 WASHLET 溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 34900,
      "converted": 34900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6IA900JEKAD/000001_1783410655.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6I-A900JEKAD",
    "buyLabel": "PChome",
    "specs": [
      "WASHLET",
      "噴嘴自潔",
      "溫熱便座",
      "旗艦款"
    ],
    "description": "TOTO TCF47360GTW S7 是免治馬桶類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 83,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "TOTO",
      "旗艦",
      "除菌"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-extra-11-dmal6w-a900jvwi8",
    "category": "bidet",
    "rank": 11,
    "budget": "mid",
    "channel": "tw",
    "brand": "TOTO",
    "model": "TCF33461GTW S2",
    "name": "S2 進階款除菌溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 14900,
      "converted": 14900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900JVWI8/000001_1775634174.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900JVWI8",
    "buyLabel": "PChome",
    "specs": [
      "電解除菌水",
      "強力除臭",
      "暖風烘乾",
      "WASHLET"
    ],
    "description": "TOTO TCF33461GTW S2 是免治馬桶類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 82,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "TOTO",
      "暖風",
      "除臭"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-extra-12-dmal8l-a900gh6f4",
    "category": "bidet",
    "rank": 12,
    "budget": "value",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "DL-F610RTWS",
    "name": "儲熱式溫水洗淨便座含原廠基本安裝",
    "price": {
      "currency": "TWD",
      "amount": 6190,
      "converted": 6190,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL8LA900GH6F4/000001_1724400418.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL8L-A900GH6F4",
    "buyLabel": "PChome",
    "specs": [
      "儲熱式",
      "溫水洗淨",
      "含基本安裝",
      "入門價位"
    ],
    "description": "Panasonic DL-F610RTWS 是免治馬桶類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 81,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Panasonic",
      "低價",
      "安裝"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-extra-13-dmal6w-a900i0l73",
    "category": "bidet",
    "rank": 13,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "DL-RT30TWWS",
    "name": "纖薄美型瞬熱式溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 15752,
      "converted": 15752,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900I0L73/000001_1729761324.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900I0L73",
    "buyLabel": "PChome",
    "specs": [
      "瞬熱式",
      "纖薄設計",
      "溫水洗淨",
      "美型"
    ],
    "description": "Panasonic DL-RT30TWWS 是免治馬桶類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 80,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Panasonic",
      "瞬熱",
      "設計"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-extra-14-dmal6w-a900jeeze",
    "category": "bidet",
    "rank": 14,
    "budget": "mid",
    "channel": "tw",
    "brand": "Panasonic",
    "model": "DL-PU30TWWS",
    "name": "瞬熱式溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 11954,
      "converted": 11954,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900JEEZE/000001_1776140283.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900JEEZE",
    "buyLabel": "PChome",
    "specs": [
      "瞬熱式",
      "溫水洗淨",
      "溫控",
      "家用"
    ],
    "description": "Panasonic DL-PU30TWWS 是免治馬桶類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 79,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "Panasonic",
      "瞬熱",
      "均衡"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-extra-15-dmale4-a900fw2kj",
    "category": "bidet",
    "rank": 15,
    "budget": "mid",
    "channel": "tw",
    "brand": "KOHLER",
    "model": "C3-150",
    "name": "C3-150 電腦免治馬桶蓋",
    "price": {
      "currency": "TWD",
      "amount": 14900,
      "converted": 14900,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMALE4A900FW2KJ/000001_1752829867.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMALE4-A900FW2KJ",
    "buyLabel": "PChome",
    "specs": [
      "瞬熱出水",
      "五檔溫控",
      "不鏽鋼噴嘴",
      "KOHLER"
    ],
    "description": "KOHLER C3-150 是免治馬桶類的補充比較型號，依 2026-07-08 通路頁面整理售價、圖片與核心規格。",
    "pros": [
      "舒適度升級明顯",
      "高階款除菌、除臭與遙控功能完整"
    ],
    "cons": [
      "需確認馬桶尺寸與插座位置",
      "安裝費與基本安裝範圍需看通路"
    ],
    "bestFor": "浴廁已有安全插座，想升級溫水洗淨、除臭或暖風烘乾的人。",
    "recommendation": "同類推薦：補入 TOTO、Panasonic、KOHLER 不同功能帶，方便看安裝與保固。",
    "score": 78,
    "voltage": "110V 台灣通路，浴廁需有安全插座",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "KOHLER",
      "瞬熱",
      "衛浴品牌"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-extra-16-dmbm0ma900g29jm",
    "category": "bidet",
    "rank": 16,
    "budget": "value",
    "channel": "tw",
    "brand": "JTAccord",
    "model": "JT-261C",
    "name": "儲熱式省電溫水洗淨便座",
    "price": {
      "currency": "TWD",
      "amount": 7088,
      "converted": 7088,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM0MA900G29JM/000001_1676948545.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM0M-A900G29JM",
    "buyLabel": "PChome",
    "specs": [
      "儲熱式",
      "標準版型",
      "省電模式",
      "基本安裝需確認"
    ],
    "description": "JTAccord JT-261C 補進本分類比較池，重點是儲熱式、標準版型、省電模式，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "價格比日系高階款低",
      "功能簡單好上手"
    ],
    "cons": [
      "品牌能見度較低",
      "功能不如瞬熱高階款"
    ],
    "bestFor": "想把免治馬桶比較池補齊，並優先看台灣通路新品與售後的人。",
    "recommendation": "補充推薦：儲熱式省電溫水洗淨便座 的優勢在價格比日系高階款低，但仍建議把品牌能見度較低納入取捨。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "儲熱式",
      "CP 值",
      "免治"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-extra-17-dmal6wa900iz8tm",
    "category": "bidet",
    "rank": 17,
    "budget": "mid",
    "channel": "tw",
    "brand": "HEGLL",
    "model": "HE-0535",
    "name": "遙控型微電腦免治馬桶蓋",
    "price": {
      "currency": "TWD",
      "amount": 9903,
      "converted": 9903,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900IZ8TM/000001_1750927262.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900IZ8TM",
    "buyLabel": "PChome",
    "specs": [
      "遙控型",
      "微電腦控制",
      "溫水洗淨",
      "不含安裝"
    ],
    "description": "HEGLL HE-0535 補進本分類比較池，重點是遙控型、微電腦控制、溫水洗淨，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "遙控操作方便",
      "價格落在萬元內"
    ],
    "cons": [
      "需另評估安裝費",
      "售後口碑需看通路"
    ],
    "bestFor": "想把免治馬桶比較池補齊，並優先看台灣通路新品與售後的人。",
    "recommendation": "補充推薦：遙控型微電腦免治馬桶蓋 的優勢在遙控操作方便，但仍建議把需另評估安裝費納入取捨。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "遙控",
      "免治",
      "中價位"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-extra-18-dmalcca900j0ybz",
    "category": "bidet",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "brand": "HCG",
    "model": "AF830",
    "name": "儲熱式免治沖洗馬桶座",
    "price": {
      "currency": "TWD",
      "amount": 10375,
      "converted": 10375,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DMALCCA900J0YBZ/000001_1752215704.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMALCC-A900J0YBZ",
    "buyLabel": "PChome",
    "specs": [
      "47cm",
      "儲熱式",
      "沖洗馬桶座",
      "不含安裝"
    ],
    "description": "HCG AF830 補進本分類比較池，重點是47cm、儲熱式、沖洗馬桶座，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "台灣衛浴品牌維修相對好找",
      "尺寸與安裝資訊清楚"
    ],
    "cons": [
      "儲熱式較占電",
      "功能偏基本"
    ],
    "bestFor": "想把免治馬桶比較池補齊，並優先看台灣通路新品與售後的人。",
    "recommendation": "補充推薦：儲熱式免治沖洗馬桶座 的優勢在台灣衛浴品牌維修相對好找，但仍建議把儲熱式較占電納入取捨。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "台灣售後",
      "儲熱式",
      "免治"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-extra-19-dmal6wa900iz94o",
    "category": "bidet",
    "rank": 19,
    "budget": "mid",
    "channel": "tw",
    "brand": "HEGLL",
    "model": "HE-0625",
    "name": "按鍵型微電腦免治馬桶蓋",
    "price": {
      "currency": "TWD",
      "amount": 15991,
      "converted": 15991,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900IZ94O/000001_1750930491.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900IZ94O",
    "buyLabel": "PChome",
    "specs": [
      "按鍵型",
      "微電腦控制",
      "溫水洗淨",
      "不含安裝"
    ],
    "description": "HEGLL HE-0625 補進本分類比較池，重點是按鍵型、微電腦控制、溫水洗淨，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "按鍵直覺",
      "價位可控"
    ],
    "cons": [
      "少了遙控便利性",
      "安裝條件需自行確認"
    ],
    "bestFor": "想把免治馬桶比較池補齊，並優先看台灣通路新品與售後的人。",
    "recommendation": "補充推薦：按鍵型微電腦免治馬桶蓋 的優勢在按鍵直覺，但仍建議把少了遙控便利性納入取捨。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "按鍵",
      "免治",
      "預算"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-extra-20-dmal6wa900iz8yl",
    "category": "bidet",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "HEGLL",
    "model": "HE-0635",
    "name": "遙控型微電腦免治馬桶蓋",
    "price": {
      "currency": "TWD",
      "amount": 17490,
      "converted": 17490,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DMAL6WA900IZ8YL/000001_1750929762.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMAL6W-A900IZ8YL",
    "buyLabel": "PChome",
    "specs": [
      "遙控型",
      "微電腦控制",
      "溫水洗淨",
      "不含安裝"
    ],
    "description": "HEGLL HE-0635 補進本分類比較池，重點是遙控型、微電腦控制、溫水洗淨，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "遙控和基本洗淨功能完整",
      "價格仍低於多數旗艦款"
    ],
    "cons": [
      "通路保固條款需確認",
      "質感不如 TOTO/Panasonic 高階款"
    ],
    "bestFor": "想把免治馬桶比較池補齊，並優先看台灣通路新品與售後的人。",
    "recommendation": "補充推薦：遙控型微電腦免治馬桶蓋 的優勢在遙控和基本洗淨功能完整，但仍建議把通路保固條款需確認納入取捨。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "遙控",
      "免治",
      "中價位"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "bidet-costco-us-brondell-cl1700",
    "category": "bidet",
    "rank": 21,
    "budget": "mid",
    "channel": "global",
    "brand": "Brondell",
    "model": "Swash CL1700",
    "name": "Bidet Toilet Seat",
    "price": {
      "currency": "USD",
      "amount": 249.99,
      "converted": 8032,
      "confidence": "Costco US 2026-07-09 參考價，TWD 依現有儀表板匯率換算"
    },
    "image": "https://bfasset.costco-static.com/U447IH35/as/k83n76pfjhvqcf9gfrz74sx/1432187-847__1?auto=webp&format=jpg",
    "buyUrl": "https://www.costco.com/brondell-swash-cl1700-bidet-toilet-seat.product.100648788.html",
    "buyLabel": "Costco US",
    "specs": [
      "溫水洗淨便座",
      "遙控/電動式",
      "美規 elongated 座型",
      "Costco US 3,989 則評論",
      "需確認 120V、馬桶尺寸與安裝"
    ],
    "description": "台灣 Costco 未找到明確免治馬桶新品頁，故補入 Costco US 高評論的 Brondell Swash CL1700 作海外參考。",
    "pros": [
      "Costco US 評論量非常高",
      "價格相對 TOTO 高階款低"
    ],
    "cons": [
      "美規 120V 與 elongated 尺寸不一定適合台灣馬桶",
      "未含國際運費、進口稅與台灣保固"
    ],
    "bestFor": "可自行確認尺寸、電壓與保固風險的海外採購使用者。",
    "recommendation": "好市多海外補充：CL1700 評論量高，可作為 Costco US 免治便座價格參考，不建議未確認尺寸就直接下單。",
    "score": 84,
    "voltage": "美規 120V；需確認台灣插座、接地與馬桶尺寸",
    "warranty": "Costco US / 海外通路，可能無台灣保固",
    "tags": [
      "Costco US",
      "免治",
      "海外參考"
    ],
    "releaseDate": "找不到"
  }
  ]);
})();

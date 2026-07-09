(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("robot", [
  {
    "id": "robot-roborock-saros-z70",
    "category": "robot",
    "rank": 2,
    "budget": "premium",
    "channel": "tw",
    "brand": "Roborock",
    "model": "Saros Z70",
    "name": "全能機械手臂旗艦掃拖王者",
    "price": {
      "currency": "TWD",
      "amount": 36980,
      "converted": 36980,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL1CA900IGHHM/000001_1782870336.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL1C-A900IGHHM",
    "buyLabel": "PChome",
    "specs": [
      "機械手臂",
      "22000Pa",
      "7.98cm 超薄",
      "80 度熱洗"
    ],
    "description": "Roborock Saros Z70 是旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "旗艦展示型：機械手臂與超薄設計很吸睛，但價格高，綜合 CP 不如 Qrevo Curv 2 Flow。",
    "score": 94,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "機械手臂",
      "零纏繞"
    ],
    "releaseDate": "2025"
  },
  {
    "id": "robot-roborock-saros-20-aqua",
    "category": "robot",
    "rank": 3,
    "budget": "premium",
    "channel": "tw",
    "brand": "Roborock",
    "model": "Saros 20 水立方",
    "name": "跨越奇兵旗艦掃拖王者水立方版",
    "price": {
      "currency": "TWD",
      "amount": 34980,
      "converted": 34980,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL1CA900JNELR/000001_1769062030.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL1C-A900JNELR",
    "buyLabel": "PChome",
    "specs": [
      "36000Pa",
      "100 度熱水洗",
      "雙門檻越障",
      "旗艦水立方基站"
    ],
    "description": "Roborock Saros 20 水立方 是旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "Roborock 旗艦補強：如果不需要 Z70 機械手臂，Saros 20 水立方是清潔、越障與熱水洗拖更務實的旗艦選項。",
    "score": 95,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "熱水洗拖",
      "越障"
    ],
    "releaseDate": "2026-04-06"
  },
  {
    "id": "robot-roborock-saros-20",
    "category": "robot",
    "rank": 4,
    "budget": "premium",
    "channel": "tw",
    "brand": "Roborock",
    "model": "Saros 20",
    "name": "跨越奇兵旗艦越障掃拖王者",
    "price": {
      "currency": "TWD",
      "amount": 32980,
      "converted": 32980,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL1CA900JMMCO/000001_1769061975.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL1C-A900JMMCO",
    "buyLabel": "PChome",
    "specs": [
      "36000Pa",
      "8.8cm 雙門檻越障",
      "300+ 障礙物識別",
      "雙重防纏繞"
    ],
    "description": "Roborock Saros 20 是旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "Roborock 當代旗艦代表：比 Z70 更聚焦吸力、越障與日常穩定性，適合家中門檻多的人。",
    "score": 94,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "越障",
      "寵物毛"
    ],
    "releaseDate": "2026-01-06"
  },
  {
    "id": "robot-roborock-qrevo-edge-2-pro",
    "category": "robot",
    "rank": 5,
    "budget": "mid",
    "channel": "tw",
    "brand": "Roborock",
    "model": "Qrevo Edge 2 Pro",
    "name": "雙越野高智商旗艦級掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 26980,
      "converted": 26980,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL1CA900JPHOP/000001_1782870240.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL1C-A900JPHOP",
    "buyLabel": "PChome",
    "specs": [
      "25000Pa",
      "7.98cm 超薄",
      "100 度熱水洗",
      "雙門檻越障"
    ],
    "description": "Roborock Qrevo Edge 2 Pro 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "同類推薦：列入 Roborock 次旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 92,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "超薄",
      "熱水洗拖"
    ],
    "releaseDate": "2026-02-17"
  },
  {
    "id": "robot-roborock-qrevo-curv-2-flow",
    "category": "robot",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "Roborock",
    "model": "Qrevo Curv 2 Flow",
    "name": "滾筒全自動洗拖烘掃地機器人",
    "price": {
      "currency": "TWD",
      "amount": 18999,
      "converted": 18999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL1CA900JA04J/000001_1783491598.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL1C-A900JA04J",
    "buyLabel": "PChome",
    "specs": [
      "滾筒拖地",
      "20000Pa",
      "自動洗烘",
      "全能基站"
    ],
    "description": "Roborock Qrevo Curv 2 Flow 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "綜合推薦：價格約頂級旗艦一半，仍有滾筒拖地、全能基站與 Roborock 口碑，CP/功能/售後最均衡。",
    "score": 95,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "滾筒拖地",
      "自動洗烘"
    ],
    "releaseDate": "2026-01-06"
  },
  {
    "id": "robot-ecovacs-x11-pro-plumbed",
    "category": "robot",
    "rank": 6,
    "budget": "premium",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT X11 PRO 上下水款",
    "name": "無限續航滾筒洗地機器人上下水款",
    "price": {
      "currency": "TWD",
      "amount": 25999,
      "converted": 25999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0LA900JRDAS/000001_1771917633.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0L-A900JRDAS",
    "buyLabel": "PChome",
    "specs": [
      "滾筒洗地",
      "自動上下水",
      "氮化鎵瞬時閃充",
      "全能基站"
    ],
    "description": "Ecovacs DEEBOT X11 PRO 上下水款 是旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "ECOVACS 旗艦補強：若可安裝上下水，這台比一般水箱版更接近真正免維護。",
    "score": 95,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "上下水",
      "滾筒洗地"
    ],
    "releaseDate": "2025-09"
  },
  {
    "id": "robot-ecovacs-x11-pro",
    "category": "robot",
    "rank": 7,
    "budget": "premium",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT X11 PRO",
    "name": "無限續航滾筒洗地機器人",
    "price": {
      "currency": "TWD",
      "amount": 22999,
      "converted": 22999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0LA900J5HJ0/000001_1766715791.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0L-A900J5HJ0",
    "buyLabel": "PChome",
    "specs": [
      "滾筒洗地",
      "氮化鎵瞬時閃充",
      "GPT 級語音",
      "全能基站"
    ],
    "description": "Ecovacs DEEBOT X11 PRO 是旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "同類推薦：列入 Ecovacs 旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 94,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "滾筒洗地",
      "快速回充"
    ],
    "releaseDate": "2025-09"
  },
  {
    "id": "robot-ecovacs-t80-omni",
    "category": "robot",
    "rank": 8,
    "budget": "mid",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT T80 OMNI",
    "name": "滾筒活水洗地掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 16999,
      "converted": 16999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0LA900IT3IU/000001_1763087795.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0L-A900IT3IU",
    "buyLabel": "PChome",
    "specs": [
      "滾筒活水洗地",
      "16 倍壓強",
      "無縫貼邊",
      "全能基站"
    ],
    "description": "Ecovacs DEEBOT T80 OMNI 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "同類推薦：列入 Ecovacs 次旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 91,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "滾筒洗地",
      "貼邊清潔"
    ],
    "releaseDate": "2026-06-19"
  },
  {
    "id": "robot-ecovacs-t50-pro",
    "category": "robot",
    "rank": 9,
    "budget": "mid",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT T50 PRO OMNI",
    "name": "超薄全覆蓋全能旗艦掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 14999,
      "converted": 14999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0LA900IDIPA/000001_1763087835.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0L-A900IDIPA",
    "buyLabel": "PChome",
    "specs": [
      "81mm 超薄",
      "高溫洗烘",
      "萬物沿邊",
      "OMNI 基站"
    ],
    "description": "Ecovacs DEEBOT T50 PRO OMNI 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "同類推薦：列入 Ecovacs 次旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 89,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "超薄",
      "沿邊清潔"
    ],
    "releaseDate": "2025-03-19"
  },
  {
    "id": "robot-ecovacs-n50",
    "category": "robot",
    "rank": 10,
    "budget": "mid",
    "channel": "tw",
    "brand": "Ecovacs",
    "model": "DEEBOT N50",
    "name": "強清潔全能掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 12999,
      "converted": 12999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0LA900J0KF3/000001_1765762606.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0L-A900J0KF3",
    "buyLabel": "PChome",
    "specs": [
      "20000Pa",
      "雙恆貼邊",
      "全能基站",
      "強清潔定位"
    ],
    "description": "Ecovacs DEEBOT N50 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "ECOVACS 次旗艦/高 CP 補位：想要 OMNI 基站但預算不想上 X/T 旗艦線時可看。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "CP 值",
      "全能基站"
    ],
    "releaseDate": "2026-03-05"
  },
  {
    "id": "robot-dreame-x60-master",
    "category": "robot",
    "rank": 11,
    "budget": "premium",
    "channel": "tw",
    "brand": "Dreame",
    "model": "X60 Master",
    "name": "AI 藍光辨識超薄掃拖旗艦機低矮版",
    "price": {
      "currency": "TWD",
      "amount": 31980,
      "converted": 31980,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL3EA900JZ3SP/000001_1780033309.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL3E-A900JZ3SP",
    "buyLabel": "PChome",
    "specs": [
      "7.95cm 超薄",
      "36000Pa",
      "AI 藍光辨識",
      "低矮版旗艦"
    ],
    "description": "Dreame X60 Master 是旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "同類推薦：列入 Dreame 旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 95,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "超薄",
      "AI 辨識"
    ],
    "releaseDate": "2026"
  },
  {
    "id": "robot-dreame-d30-ultra-ce",
    "category": "robot",
    "rank": 12,
    "budget": "mid",
    "channel": "tw",
    "brand": "Dreame",
    "model": "D30 Ultra CE",
    "name": "全能掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 9999,
      "converted": 9999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL3EA900JY4G0/000001_1780033612.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL3E-A900JY4G0",
    "buyLabel": "PChome",
    "specs": [
      "全能基站",
      "掃拖一體",
      "自動清潔",
      "入門旗艦功能"
    ],
    "description": "Dreame D30 Ultra CE 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "同類推薦：列入 Dreame 次旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "全能基站",
      "CP 值"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "robot-narwal-freo-z-ultra",
    "category": "robot",
    "rank": 13,
    "budget": "premium",
    "channel": "tw",
    "brand": "Narwal",
    "model": "Freo Z Ultra",
    "name": "真雙目 AI 掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 23888,
      "converted": 23888,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL4UA900JA072/000001_1766479545.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL4U-A900JA072",
    "buyLabel": "PChome",
    "specs": [
      "真雙目 AI",
      "熱水熱烘",
      "零纏繞 2.0",
      "自動集塵"
    ],
    "description": "Narwal Freo Z Ultra 是旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "同類推薦：列入 Narwal 旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 92,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "AI 避障",
      "熱水熱烘"
    ],
    "releaseDate": "2024-09-06"
  },
  {
    "id": "robot-narwal-flow-2",
    "category": "robot",
    "rank": 14,
    "budget": "premium",
    "channel": "global",
    "brand": "Narwal",
    "model": "Flow 2",
    "name": "滾筒洗地旗艦掃拖機器人",
    "price": {
      "currency": "EUR",
      "amount": 999,
      "converted": 36647,
      "confidence": "海外可信通路參考價"
    },
    "image": "https://boulanger.scene7.com/is/image/Boulanger/6972075738536_h_f_l_0?fmt=png-alpha&wid=640&hei=640",
    "buyUrl": "https://www.boulanger.com/ref/1238998",
    "buyLabel": "Boulanger",
    "specs": [
      "31000Pa",
      "60 度熱水洗",
      "4cm 越障",
      "滾筒刷洗地"
    ],
    "description": "Narwal Flow 2 是旗艦級海外參考機型，換算 TWD 僅供比較，未含國際運費、進口稅與台灣保固。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "海外購買價格波動大",
      "需確認電壓、插頭、耗材與台灣保固"
    ],
    "bestFor": "想追新款、可接受海外購買與保固風險，並願意自行確認電壓與耗材的人。",
    "recommendation": "海外參考：用來對照 Narwal 台灣上市機種與同級旗艦功能差異。",
    "score": 90,
    "voltage": "海外版本，需確認 100-240V、插頭與變壓器需求",
    "warranty": "可能無台灣保固，購買前需向通路確認",
    "tags": [
      "旗艦",
      "海外參考",
      "滾筒洗地"
    ],
    "releaseDate": "2026"
  },
  {
    "id": "robot-narwal-freo-z10-ultra",
    "category": "robot",
    "rank": 15,
    "budget": "mid",
    "channel": "global",
    "brand": "Narwal",
    "model": "Freo Z10 Ultra",
    "name": "18,000Pa AI 視覺全能掃拖機器人",
    "price": {
      "currency": "USD",
      "amount": 553.09,
      "converted": 17769,
      "confidence": "海外可信通路參考價"
    },
    "image": "https://img.gkbcdn.com/p/2025-04-11/Narwal-Freo-Z10-Ultra-Robot-Vacuum-with-Base-Station-Gray-528438-0._w315_.jpg",
    "buyUrl": "https://www.geekbuying.com/item/Narwal-Freo-Z10-Ultra-Robot-Vacuum-with-Base-Station-Gray-528438.html",
    "buyLabel": "Geekbuying",
    "specs": [
      "18000Pa",
      "AI 視覺避障",
      "45-75 度熱水洗",
      "All-in-One Dock"
    ],
    "description": "Narwal Freo Z10 Ultra 是次旗艦級海外參考機型，換算 TWD 僅供比較，未含國際運費、進口稅與台灣保固。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "海外購買價格波動大",
      "需確認電壓、插頭、耗材與台灣保固"
    ],
    "bestFor": "想追新款、可接受海外購買與保固風險，並願意自行確認電壓與耗材的人。",
    "recommendation": "海外參考：用來對照 Narwal 台灣上市機種與同級旗艦功能差異。",
    "score": 87,
    "voltage": "海外版本，需確認 100-240V、插頭與變壓器需求",
    "warranty": "可能無台灣保固，購買前需向通路確認",
    "tags": [
      "次旗艦",
      "海外參考",
      "熱水洗拖"
    ],
    "releaseDate": "2026-05-12"
  },
  {
    "id": "robot-irobot-max-705",
    "category": "robot",
    "rank": 16,
    "budget": "premium",
    "channel": "tw",
    "brand": "iRobot",
    "model": "Roomba Max 705 Combo",
    "name": "全能滾筒旗艦機皇掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 31880,
      "converted": 31880,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0JA900JCCJT/000001_1782802020.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0J-A900JCCJT",
    "buyLabel": "PChome",
    "specs": [
      "滾筒旗艦",
      "全能掃拖",
      "自動基站",
      "Combo 系列"
    ],
    "description": "iRobot Roomba Max 705 Combo 是旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "同類推薦：列入 iRobot 旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 90,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "滾筒",
      "Roomba"
    ],
    "releaseDate": "2025-07-22"
  },
  {
    "id": "robot-irobot-plus-505",
    "category": "robot",
    "rank": 17,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRobot",
    "model": "Roomba Plus 505 Combo",
    "name": "熱旋風延邊避障全能掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 21880,
      "converted": 21880,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0JA900ITF7U/000001_1782802931.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0J-A900ITF7U",
    "buyLabel": "PChome",
    "specs": [
      "熱旋風",
      "延邊避障",
      "全能掃拖",
      "自動基站"
    ],
    "description": "iRobot Roomba Plus 505 Combo 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "同類推薦：列入 iRobot 次旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 87,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "延邊清潔",
      "Roomba"
    ],
    "releaseDate": "2025-03-23"
  },
  {
    "id": "robot-irobot-plus-405",
    "category": "robot",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRobot",
    "model": "Roomba Plus 405 Combo",
    "name": "旋風全能掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 16880,
      "converted": 16880,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0JA900ITF88/000001_1782803241.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0J-A900ITF88",
    "buyLabel": "PChome",
    "specs": [
      "旋風清潔",
      "全能掃拖",
      "自動基站",
      "Combo 系列"
    ],
    "description": "iRobot Roomba Plus 405 Combo 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "同類推薦：列入 iRobot 次旗艦代表機種，適合和同品牌下一階機型一起比較。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "Roomba",
      "均衡"
    ],
    "releaseDate": "2025-03"
  },
  {
    "id": "robot-irobot-205-combo",
    "category": "robot",
    "rank": 19,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRobot",
    "model": "Roomba 205 Combo",
    "name": "自動壓縮集塵掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 14880,
      "converted": 14880,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL0JA900J02LR/000001_1782803287.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL0J-A900J02LR",
    "buyLabel": "PChome",
    "specs": [
      "自動壓縮集塵",
      "掃拖一體",
      "Combo 系列",
      "極夜黑"
    ],
    "description": "iRobot Roomba 205 Combo 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "iRobot 次旗艦補位：比 Plus/Max 便宜，仍保留 Roomba Combo 掃拖與自動集塵核心體驗。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "自動集塵",
      "Roomba"
    ],
    "releaseDate": "2025-03-23"
  },
  {
    "id": "robot-eufy-omni-s2",
    "category": "robot",
    "rank": 20,
    "budget": "premium",
    "channel": "tw",
    "brand": "eufy",
    "model": "Omni S2",
    "name": "12 合 1 自清潔 AI 掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 31990,
      "converted": 31990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL2DA900JOEN3/000001_1782120334.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL2D-A900JOEN3",
    "buyLabel": "PChome",
    "specs": [
      "12 合 1 基站",
      "AI 掃拖",
      "自清潔",
      "全能機器人"
    ],
    "description": "eufy Omni S2 是旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "eufy 旗艦代表：Anker 生態系品牌的高階全能款，適合重視自清潔與簡潔 App 體驗的人。",
    "score": 90,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "AI 掃拖",
      "自清潔"
    ],
    "releaseDate": "2025"
  },
  {
    "id": "robot-eufy-omni-e25",
    "category": "robot",
    "rank": 21,
    "budget": "mid",
    "channel": "tw",
    "brand": "eufy",
    "model": "Omni E25",
    "name": "自清潔掃拖一體全能機器人",
    "price": {
      "currency": "TWD",
      "amount": 15990,
      "converted": 15990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL2DA900IUBA2/000001_1782120226.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL2D-A900IUBA2",
    "buyLabel": "PChome",
    "specs": [
      "20000Pa",
      "活水洗地",
      "零纏繞伸縮滾刷",
      "自清潔基站"
    ],
    "description": "eufy Omni E25 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "eufy 次旗艦甜點：用不到 S2 高階完整包時，E25 的吸力、活水洗地與價格更均衡。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "活水洗地",
      "零纏繞"
    ],
    "releaseDate": "2025-11-13"
  },
  {
    "id": "robot-eufy-omni-c28",
    "category": "robot",
    "rank": 22,
    "budget": "mid",
    "channel": "tw",
    "brand": "eufy",
    "model": "Omni C28",
    "name": "自清潔掃拖一體全能機器人",
    "price": {
      "currency": "TWD",
      "amount": 13990,
      "converted": 13990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL2DA900K13C9/000001_1782120164.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL2D-A900K13C9",
    "buyLabel": "PChome",
    "specs": [
      "自清潔基站",
      "掃拖一體",
      "白色機身",
      "全能入門定位"
    ],
    "description": "eufy Omni C28 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "eufy 高 CP 補位：價格低於 E25/S2，適合先上自清潔基站但不追最高規格的人。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "CP 值",
      "自清潔"
    ],
    "releaseDate": "2026-02-06"
  },
  {
    "id": "robot-mova-s70-ultra-roller",
    "category": "robot",
    "rank": 23,
    "budget": "premium",
    "channel": "tw",
    "brand": "MOVA",
    "model": "S70 Ultra Roller",
    "name": "極薄滾筒掃拖機器人旗艦版",
    "price": {
      "currency": "TWD",
      "amount": 26980,
      "converted": 26980,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL5WA900JXBY3/000001_1776393356.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL5W-A900JXBY3",
    "buyLabel": "PChome",
    "specs": [
      "極薄機身",
      "滾筒洗地",
      "旗艦版",
      "全能基站"
    ],
    "description": "MOVA S70 Ultra Roller 是旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "規格完整、清潔自動化程度高",
      "避障、拖地或基站通常是品牌當代主力"
    ],
    "cons": [
      "價格高、耗材成本需預留",
      "大型基站需要確認家中擺放空間"
    ],
    "bestFor": "想一次買到品牌最高階掃拖體驗、家中面積較大或有毛髮與拖地需求的人。",
    "recommendation": "MOVA 旗艦代表：把極薄機身與滾筒拖地放在同一台，適合家具底部低又重視拖地的人。",
    "score": 89,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "旗艦",
      "極薄",
      "滾筒洗地"
    ],
    "releaseDate": "2026-04-08"
  },
  {
    "id": "robot-mova-s70-roller",
    "category": "robot",
    "rank": 24,
    "budget": "mid",
    "channel": "tw",
    "brand": "MOVA",
    "model": "S70 Roller",
    "name": "極薄滾筒掃拖機器人",
    "price": {
      "currency": "TWD",
      "amount": 15990,
      "converted": 15990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBL5WA900K13VT/000001_1779264098.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBL5W-A900K13VT",
    "buyLabel": "PChome",
    "specs": [
      "極薄機身",
      "滾筒掃拖",
      "全能基站",
      "貼邊清潔"
    ],
    "description": "MOVA S70 Roller 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "MOVA 次旗艦補位：想要 S70 系列滾筒拖地，但預算不想上 Ultra 時更有 CP 值。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "極薄",
      "滾筒洗地"
    ],
    "releaseDate": "2026-03-10"
  },
  {
    "id": "robot-lg-r5t-ultimate",
    "category": "robot",
    "rank": 25,
    "budget": "mid",
    "channel": "tw",
    "brand": "LG",
    "model": "R5-ULTIMATE1",
    "name": "R5T 變頻濕拖掃地機器人",
    "price": {
      "currency": "TWD",
      "amount": 13490,
      "converted": 13490,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM2ZA900IUC17/000001_1778123320.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM2Z-A900IUC17",
    "buyLabel": "PChome",
    "specs": [
      "變頻濕拖",
      "掃地機器人",
      "LG ThinQ 生態",
      "R5T 系列"
    ],
    "description": "LG R5-ULTIMATE1 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "LG 代表機：規格不追中系旗艦，但品牌售後與家電生態明確，適合偏好 LG 的家庭。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "LG 生態",
      "濕拖"
    ],
    "releaseDate": "2025"
  },
  {
    "id": "robot-lg-r5-proplus",
    "category": "robot",
    "rank": 26,
    "budget": "mid",
    "channel": "tw",
    "brand": "LG",
    "model": "R5-PROPLUS1",
    "name": "R5 變頻濕拖掃地機器人",
    "price": {
      "currency": "TWD",
      "amount": 9490,
      "converted": 9490,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DMBM2ZA900IUC1E/000001_1768835646.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DMBM2Z-A900IUC1E",
    "buyLabel": "PChome",
    "specs": [
      "變頻濕拖",
      "掃地機器人",
      "入門 R5 系列",
      "台灣通路"
    ],
    "description": "LG R5-PROPLUS1 是次旗艦級掃拖機器人，這筆以 2026-07-09 台灣通路可查售價與規格整理。",
    "pros": [
      "保留多數高階功能",
      "價格通常比旗艦更容易入手"
    ],
    "cons": [
      "避障、越障或拖地細節可能少一階",
      "部分新功能會留給旗艦款"
    ],
    "bestFor": "想要全能基站與高階清潔體驗，但不想把預算推到最高的人。",
    "recommendation": "LG 高 CP 補位：若只需要基礎掃拖與品牌售後，這台比追旗艦更省預算。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "次旗艦",
      "CP 值",
      "濕拖"
    ],
    "releaseDate": "2025-03-11"
  },
  {
    "id": "robot-shark-powerdetect-nevertouch-pro",
    "category": "robot",
    "rank": 27,
    "budget": "premium",
    "channel": "global",
    "brand": "Shark",
    "model": "PowerDetect NeverTouch Pro RV2820ZE",
    "name": "自動補水洗烘拖布掃拖機器人",
    "price": {
      "currency": "USD",
      "amount": 499.99,
      "converted": 16063,
      "confidence": "海外可信通路參考價"
    },
    "image": "https://assets.sharkninja.com/image/upload/f_auto/q_auto/SharkNinja-NA/RV2820ZE_01.jpg",
    "buyUrl": "https://www.sharkninja.com/shark-powerdetect-2-in-1-robot-vacuum-and-mop-with-nevertouch-pro-base/RV2820ZE.html",
    "buyLabel": "SharkNinja US",
    "specs": [
      "NeverTouch Pro 基站",
      "自動補水",
      "自動洗烘拖布",
      "官網標示 In Stock"
    ],
    "description": "Shark PowerDetect NeverTouch Pro RV2820ZE 是旗艦級海外參考機型，換算 TWD 僅供比較，未含國際運費、進口稅與台灣保固。",
    "pros": [
      "官方頁目前有明確折扣價與庫存",
      "基站維護自動化程度高"
    ],
    "cons": [
      "海外版需確認電壓/保固/耗材",
      "台灣購買便利性不如本地通路"
    ],
    "bestFor": "想比較美系旗艦掃拖機器人，且可接受海外購買與保固風險的人。",
    "recommendation": "Shark 海外旗艦代表：用來補足台灣通路較少見的美系自動維護基站方案。",
    "score": 86,
    "voltage": "海外版本，需確認 100-240V、插頭與變壓器需求",
    "warranty": "可能無台灣保固，購買前需向通路確認",
    "tags": [
      "旗艦",
      "海外參考",
      "自動洗烘"
    ],
    "releaseDate": "2024-10-05"
  },
  {
    "id": "robot-dyson-spot-scrub-ai",
    "category": "robot",
    "rank": 28,
    "budget": "premium",
    "channel": "global",
    "brand": "Dyson",
    "model": "Spot+Scrub Ai",
    "name": "AI 汙漬偵測濕乾掃拖機器人",
    "price": {
      "currency": "USD",
      "amount": 1199,
      "converted": 38521,
      "confidence": "海外可信通路參考價"
    },
    "image": "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/products/home/floorcare/robot/spot-scrub-ai/rcc/Web-804A-Category-Page-Module1.jpg?$responsive$&fmt=pjpeg&wid=640",
    "buyUrl": "https://www.dyson.com/vacuum-cleaners/robot/spot-scrub-ai",
    "buyLabel": "Dyson US",
    "specs": [
      "18000Pa",
      "AI 汙漬辨識",
      "自清潔滾筒",
      "Cyclonic dock"
    ],
    "description": "Dyson Spot+Scrub Ai 是旗艦級海外參考機型，換算 TWD 僅供比較，未含國際運費、進口稅與台灣保固。",
    "pros": [
      "Dyson 官方頁可查規格與評論",
      "濕拖、汙漬偵測與無集塵袋基站有特色"
    ],
    "cons": [
      "官方頁目前顯示 Notify me，供貨需確認",
      "海外版需確認電壓、插頭與台灣保固"
    ],
    "bestFor": "想追 Dyson 最新掃拖機器人，且能等待供貨、接受海外版風險的人。",
    "recommendation": "Dyson 海外旗艦參考：品牌辨識度高，但供貨與價格不穩，不列為台灣綜合推薦。",
    "score": 84,
    "voltage": "海外版本，需確認 100-240V、插頭與變壓器需求",
    "warranty": "可能無台灣保固，購買前需向通路確認",
    "tags": [
      "旗艦",
      "海外參考",
      "供貨待確認"
    ],
    "releaseDate": "2026-03-12"
  },
  {
    "id": "robot-costco-us-roborock-qx-revo",
    "category": "robot",
    "rank": 29,
    "budget": "mid",
    "channel": "global",
    "brand": "Roborock",
    "model": "QX Revo",
    "name": "Robot Vacuum and Mop with Multifunctional Dock",
    "price": {
      "currency": "USD",
      "amount": 399.99,
      "converted": 12851,
      "confidence": "Costco US 2026-07-09 參考價，TWD 依現有儀表板匯率換算"
    },
    "image": "https://bfasset.costco-static.com/U447IH35/as/tkj772p4357mmh3bwz8kcq/1791272-847__1?auto=webp&format=jpg",
    "buyUrl": "https://www.costco.com/roborock-qx-revo-robot-vacuum-and-mop-with-multifunctional-dock.product.4000233271.html",
    "buyLabel": "Costco US",
    "specs": [
      "掃拖機器人",
      "多功能基站",
      "Costco US 2,885 則評論",
      "海外購買需確認電壓、耗材與保固"
    ],
    "description": "Costco US 上評論量很高的 Roborock 掃拖機器人，適合作為海外價格與同級台灣機種的比較參考。",
    "pros": [
      "Costco US 評論數高，市場口碑基礎厚",
      "掃拖與基站自動化完整"
    ],
    "cons": [
      "未含國際運費、進口稅與台灣保固",
      "需自行確認電壓、插頭、耗材與 App 區域支援"
    ],
    "bestFor": "可接受海外採購風險，想比較 Roborock Costco 特規價格的人。",
    "recommendation": "好市多海外補充：QX Revo 在 Costco US 評論量高，適合對照台灣 Roborock、Dreame、Narwal 機種。",
    "score": 86,
    "voltage": "海外版本，需確認 100-240V、插頭與變壓器需求",
    "warranty": "Costco US / 海外通路，可能無台灣保固",
    "tags": [
      "Costco US",
      "Roborock",
      "海外參考"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "robot-costco-eufy-e20",
    "category": "robot",
    "rank": 30,
    "budget": "mid",
    "channel": "tw",
    "brand": "eufy",
    "model": "E20",
    "name": "三合一掃地機器人",
    "price": {
      "currency": "TWD",
      "amount": 9889,
      "converted": 9889,
      "confidence": "Costco 好市多 2026-07-09 查核價"
    },
    "image": "https://www.costco.com.tw/medias/sys_master/images/h21/heb/400747429363742.jpg",
    "buyUrl": "https://www.costco.com.tw/Televisions-Appliances/Small-Appliances/Vacuums-Floor-Care/Eufy-3-in-1-Robot-Vacuum-E20/p/157135",
    "buyLabel": "Costco 好市多",
    "specs": [
      "三合一掃地機器人",
      "100-120V / 50-60Hz",
      "集塵基站",
      "Costco 稀少分類例外候選",
      "Costco 評價 4.1 / 14 則"
    ],
    "description": "Costco Taiwan 少數可買的掃地機器人候選，補進海外 Costco 與台灣通路比較。",
    "pros": [
      "台灣好市多正常新品頁",
      "價格低於多數旗艦掃拖機"
    ],
    "cons": [
      "評分不如高階旗艦",
      "功能與避障需和主流旗艦比較"
    ],
    "bestFor": "想在好市多買掃地機器人、並可接受中階定位的人",
    "recommendation": "好市多補充推薦：三合一掃地機器人 評價不錯，補進掃拖機器人分類作為 Costco 候選比較。",
    "score": 82,
    "voltage": "100-120V / 50-60Hz",
    "warranty": "依 Costco 好市多商品頁與品牌 1 年保固標示",
    "tags": [
      "Costco",
      "好市多",
      "eufy",
      "集塵",
      "中階"
    ],
    "releaseDate": "找不到"
  }
]);
})();

(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  dashboard.registerProducts("standingdesk", [
  {
    "id": "standingdesk-loctek-f2-120",
    "category": "standingdesk",
    "rank": 1,
    "topPick": true,
    "budget": "mid",
    "channel": "tw",
    "brand": "Loctek",
    "model": "F2",
    "name": "智慧記憶電動升降桌 120x60",
    "price": {
      "currency": "TWD",
      "amount": 9999,
      "converted": 9999,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBC1TA900HSZZ8/000001_1738574919.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBC1T-A900HSZZ8",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "高度記憶",
      "120x60cm",
      "小宅友善",
      "桌板厚度：未標示"
    ],
    "description": "Loctek F2 是萬元上下最容易入手的完整電動升降桌，適合家用與租屋族先建立坐站工作流。",
    "pros": [
      "價格落在甜蜜點",
      "品牌辨識度高",
      "尺寸不佔空間"
    ],
    "cons": [
      "120x60cm 桌面較緊湊",
      "穩定性不如高階四腳款"
    ],
    "bestFor": "小書房、租屋處或第一次買升降桌的人。",
    "recommendation": "本類 Top Pick：價格、品牌、記憶升降與小宅尺寸最均衡，先買它通常不容易踩雷。",
    "score": 91,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "CP 值",
      "記憶高度",
      "小宅"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-irocks-d01-120",
    "category": "standingdesk",
    "rank": 2,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRocks",
    "model": "D01-SL-DX 120x80",
    "name": "D01-SL-DX 電動升降桌 120x80",
    "price": {
      "currency": "TWD",
      "amount": 14790,
      "converted": 14790,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBJ4CA900I9XVY/000001_1773043590.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBJ4C-A900I9XVY",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "120x80cm",
      "台灣製造",
      "不含組裝",
      "桌板厚度：2.5cm"
    ],
    "description": "iRocks D01-SL-DX 強項是台灣品牌與較深的 80cm 桌面，適合螢幕、鍵盤與筆電一起擺。",
    "pros": [
      "台灣品牌售後較好溝通",
      "80cm 深度好用",
      "桌面尺寸適合雙螢幕"
    ],
    "cons": [
      "價格高於入門款",
      "不含組裝需自行評估"
    ],
    "bestFor": "想買台灣品牌、桌深要夠的人。",
    "recommendation": "售後穩定推薦：比低價款貴，但桌面深度與本地服務更安心。",
    "score": 90,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "台灣品牌",
      "120x80",
      "雙螢幕"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-irocks-d01-150",
    "category": "standingdesk",
    "rank": 3,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRocks",
    "model": "D01-SL-DX 150x80",
    "name": "D01-SL-DX 電動升降桌 150x80",
    "price": {
      "currency": "TWD",
      "amount": 15490,
      "converted": 15490,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBJ4CA900HUG3C/000001_1773043903.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBJ4C-A900HUG3C",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "150x80cm",
      "台灣製造",
      "不含組裝",
      "桌板厚度：2.5cm"
    ],
    "description": "150cm 桌寬明顯比 120cm 舒展，對雙螢幕、麥克風或手寫區更友善。",
    "pros": [
      "桌面寬裕",
      "保留 iRocks 售後優勢",
      "適合長期工作站"
    ],
    "cons": [
      "需要較大房間",
      "自行組裝門檻較高"
    ],
    "bestFor": "雙螢幕、桌面設備較多的工作者。",
    "recommendation": "尺寸升級推薦：只比 120cm 款多一些預算，使用彈性提升很多。",
    "score": 89,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "150x80",
      "工作站",
      "台灣品牌"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-irocks-d01-160",
    "category": "standingdesk",
    "rank": 4,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRocks",
    "model": "D01-SL-DX 160x80",
    "name": "D01-SL-DX 電動升降桌 160x80",
    "price": {
      "currency": "TWD",
      "amount": 15990,
      "converted": 15990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBJ4CA900ITV12/000001_1773043461.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBJ4C-A900ITV12",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "160x80cm",
      "台灣製造",
      "不含組裝",
      "桌板厚度：2.5cm"
    ],
    "description": "160cm 是大型單人工作桌的甜蜜尺寸，能同時放雙螢幕、筆電架與喇叭。",
    "pros": [
      "桌寬非常夠用",
      "桌深 80cm 對姿勢友善",
      "同系列規格成熟"
    ],
    "cons": [
      "空間需求高",
      "搬運與組裝較費力"
    ],
    "bestFor": "需要大型桌面但還不想上 180cm 的人。",
    "recommendation": "大桌面推薦：想一次買到長期使用尺寸，160x80 是合理上限。",
    "score": 88,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "160x80",
      "大型桌面",
      "雙螢幕"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-irocks-d01-180",
    "category": "standingdesk",
    "rank": 5,
    "budget": "mid",
    "channel": "tw",
    "brand": "iRocks",
    "model": "D01-SL-DX 180x80",
    "name": "D01-SL-DX 電動升降桌 180x80",
    "price": {
      "currency": "TWD",
      "amount": 16490,
      "converted": 16490,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQBJ4CA900HUGSO/000001_1773043706.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQBJ4C-A900HUGSO",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "180x80cm",
      "台灣製造",
      "不含組裝",
      "桌板厚度：未標示"
    ],
    "description": "180cm 適合把完整桌機、雙螢幕、音響與文件區全放上桌，是真正的大工作台。",
    "pros": [
      "桌面最大",
      "多人/多設備也夠用",
      "同系列價格差距不大"
    ],
    "cons": [
      "需要確認房間動線",
      "桌面越大晃動感越要留意"
    ],
    "bestFor": "有固定書房、設備很多的工作者或創作者。",
    "recommendation": "大型工作台推薦：如果空間足夠，單位桌面價格比小尺寸划算。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "180x80",
      "大型工作台",
      "創作者"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-logis-kg11",
    "category": "standingdesk",
    "rank": 6,
    "budget": "value",
    "channel": "tw",
    "brand": "LOGIS",
    "model": "KG11-1165",
    "name": "智慧碳纖電動升降桌",
    "price": {
      "currency": "TWD",
      "amount": 7644,
      "converted": 7644,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBAGMA900FN1YH/000001_1665647044.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBAGM-A900FN1YH",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "電腦桌",
      "辦公桌",
      "入門價位",
      "桌板厚度：未標示"
    ],
    "description": "LOGIS KG11-1165 價格低於多數知名品牌電動桌，是預算優先的入門選項。",
    "pros": [
      "價格親民",
      "通路庫存明確",
      "適合先試坐站工作"
    ],
    "cons": [
      "品牌售後與穩定口碑不如 iRocks/Loctek",
      "規格細節需看頁面確認"
    ],
    "bestFor": "預算有限、想先體驗升降桌的人。",
    "recommendation": "入門 CP 推薦：價格壓得低，但建議對照承重與組裝條件後再下單。",
    "score": 81,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "入門",
      "低價",
      "辦公桌"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-nitori-up002",
    "category": "standingdesk",
    "rank": 7,
    "budget": "value",
    "channel": "tw",
    "brand": "NITORI",
    "model": "UP002",
    "name": "電動升降桌 UP002 WH",
    "price": {
      "currency": "TWD",
      "amount": 7990,
      "converted": 7990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQCI0AA900IW7RS/000001_1768543932.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQCI0A-A900IW7RS",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "白色桌面",
      "家居通路",
      "小空間",
      "桌板厚度：未標示"
    ],
    "description": "NITORI UP002 適合想在家居通路買到簡潔外型與基本電動升降的人。",
    "pros": [
      "價格好入手",
      "外型簡潔",
      "家居品牌容易搭配家具"
    ],
    "cons": [
      "高階穩定與承重資料需再確認",
      "擴充性較少"
    ],
    "bestFor": "偏好簡潔白色家具、預算在八千上下的人。",
    "recommendation": "家居通路推薦：不追求電競外觀，想要乾淨工作桌可看這台。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "NITORI",
      "白色",
      "小空間"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-nitori-up006-1260",
    "category": "standingdesk",
    "rank": 8,
    "budget": "value",
    "channel": "tw",
    "brand": "NITORI",
    "model": "UP006 1260",
    "name": "電動升降桌 UP006 1260WH/WH",
    "price": {
      "currency": "TWD",
      "amount": 8490,
      "converted": 8490,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQCI0AA900K15SP/000001_1779286467.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQCI0A-A900K15SP",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "126cm 級桌面",
      "白色",
      "家居風格",
      "桌板厚度：未標示"
    ],
    "description": "UP006 1260 比入門小桌再寬一些，仍維持家居感與較低預算。",
    "pros": [
      "尺寸比 120cm 更舒服",
      "價格仍親民",
      "外型乾淨"
    ],
    "cons": [
      "非重度設備工作站取向",
      "高負載穩定性需現場評估"
    ],
    "bestFor": "一般筆電加一台外接螢幕的居家辦公。",
    "recommendation": "小升級推薦：比 UP002 多一點寬度，日常工作更好用。",
    "score": 79,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "NITORI",
      "126cm",
      "白色"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-nitori-up006-1460",
    "category": "standingdesk",
    "rank": 9,
    "budget": "mid",
    "channel": "tw",
    "brand": "NITORI",
    "model": "UP006 1460",
    "name": "電動升降桌 UP006 1460WH/WH",
    "price": {
      "currency": "TWD",
      "amount": 9490,
      "converted": 9490,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQCI0AA900K15T1/000001_1779269416.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQCI0A-A900K15T1",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "146cm 級桌面",
      "白色",
      "家居風格",
      "桌板厚度：未標示"
    ],
    "description": "146cm 寬度更接近主力工作桌，適合一台 27 吋螢幕加筆電或雙螢幕。",
    "pros": [
      "桌寬更實用",
      "價格仍在一萬元內",
      "適合家居配置"
    ],
    "cons": [
      "承重與線材管理需另查",
      "不是電競或重設備定位"
    ],
    "bestFor": "想要白色大桌面、但預算仍想壓在萬元左右的人。",
    "recommendation": "大尺寸 CP 推薦：家用大桌面價格漂亮，適合重視外觀整潔的人。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "146cm",
      "NITORI",
      "大桌面"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-cougar-royal-mossa",
    "category": "standingdesk",
    "rank": 10,
    "budget": "mid",
    "channel": "tw",
    "brand": "COUGAR",
    "model": "ROYAL MOSSA 150",
    "name": "ROYAL MOSSA 150 加大電動升降桌",
    "price": {
      "currency": "TWD",
      "amount": 10990,
      "converted": 10990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBB6OA900HZWA5/000001_1783085629.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBB6O-A900HZWA5",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "150cm 級桌面",
      "白色",
      "電競品牌",
      "桌板厚度：未標示"
    ],
    "description": "COUGAR ROYAL MOSSA 150 用電競品牌外觀切入，價格比高階桌親民。",
    "pros": [
      "150cm 大桌面",
      "外型較有設計感",
      "價格中段"
    ],
    "cons": [
      "品牌長期桌類口碑少於椅/周邊",
      "庫存較少"
    ],
    "bestFor": "想搭白色或電競風工作桌的人。",
    "recommendation": "外型取向推薦：兼顧大桌面與視覺風格，適合遊戲工作混用。",
    "score": 80,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "電競",
      "150cm",
      "白色"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-cougar-e-ares",
    "category": "standingdesk",
    "rank": 11,
    "budget": "mid",
    "channel": "tw",
    "brand": "COUGAR",
    "model": "E-Ares 120 RGB",
    "name": "E-Ares 120 RGB 電動升降桌",
    "price": {
      "currency": "TWD",
      "amount": 12990,
      "converted": 12990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBB6OA900JPZTQ/000001_1774958562.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBB6O-A900JPZTQ",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "120cm 級桌面",
      "RGB",
      "電競桌",
      "桌板厚度：未標示"
    ],
    "description": "E-Ares 120 RGB 偏電競桌定位，對外觀、燈效與桌機氛圍有加分。",
    "pros": [
      "電競風格完整",
      "120cm 較好擺放",
      "品牌辨識度高"
    ],
    "cons": [
      "RGB 不是必要功能",
      "同價位可買較大一般桌"
    ],
    "bestFor": "偏電競房、RGB 佈置或桌機玩家。",
    "recommendation": "電競桌推薦：想要升降功能又保留遊戲房風格，可列入比較。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "RGB",
      "電競",
      "120cm"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-cougar-e-grav",
    "category": "standingdesk",
    "rank": 12,
    "budget": "mid",
    "channel": "tw",
    "brand": "COUGAR",
    "model": "E-GRAV 160",
    "name": "E-GRAV 160 雙馬達電動升降桌",
    "price": {
      "currency": "TWD",
      "amount": 14990,
      "converted": 14990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBB6OA900JHYFV/000001_1764230649.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBB6O-A900JHYFV",
    "buyLabel": "PChome",
    "specs": [
      "雙馬達",
      "160cm 級桌面",
      "電競桌",
      "電動升降",
      "桌板厚度：未標示"
    ],
    "description": "E-GRAV 160 把桌寬拉到 160cm 並標示雙馬達，適合桌面設備較多的玩家。",
    "pros": [
      "雙馬達規格",
      "160cm 大桌面",
      "適合多螢幕"
    ],
    "cons": [
      "價格接近 iRocks",
      "需確認組裝與保固細節"
    ],
    "bestFor": "遊戲與工作混用、桌面設備多的人。",
    "recommendation": "電競大桌推薦：如果想要大桌面與雙馬達，這台比 RGB 小桌更務實。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "雙馬達",
      "160cm",
      "電競"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-apexgaming-lumi-white",
    "category": "standingdesk",
    "rank": 13,
    "budget": "mid",
    "channel": "tw",
    "brand": "Apexgaming",
    "model": "LUMI 白色",
    "name": "LUMI 落地型鋼化玻璃電動升降桌 白色",
    "price": {
      "currency": "TWD",
      "amount": 14990,
      "converted": 14990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DQCBEMA900GJUOI/000001_1691116279.png",
    "buyUrl": "https://24h.pchome.com.tw/prod/DQCBEM-A900GJUOI",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "鋼化玻璃桌面",
      "白色",
      "落地型",
      "桌板厚度：未標示"
    ],
    "description": "Apexgaming LUMI 用鋼化玻璃桌面與白色外觀做差異化，視覺效果比一般木紋桌突出。",
    "pros": [
      "外型精緻",
      "玻璃桌面好清潔",
      "白色系桌搭友善"
    ],
    "cons": [
      "玻璃桌面怕敲擊與指紋",
      "重量與搬運需留意"
    ],
    "bestFor": "重視桌面外觀、想做白色系桌搭的人。",
    "recommendation": "設計感推薦：不是純 CP 選項，但視覺質感明顯有差。",
    "score": 78,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "玻璃桌面",
      "白色",
      "桌搭"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-apexgaming-lumi",
    "category": "standingdesk",
    "rank": 14,
    "budget": "mid",
    "channel": "tw",
    "brand": "Apexgaming",
    "model": "LUMI 深色",
    "name": "LUMI 落地型鋼化玻璃電動升降桌 深色",
    "price": {
      "currency": "TWD",
      "amount": 14990,
      "converted": 14990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DEDD8CA900FK2JV/000001_1663900736.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEDD8C-A900FK2JV",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "鋼化玻璃桌面",
      "落地型",
      "電競風格",
      "桌板厚度：未標示"
    ],
    "description": "Apexgaming LUMI 深色款採鋼化玻璃桌面，色系偏沉穩，適合黑灰桌機與電競週邊。",
    "pros": [
      "視覺辨識度高",
      "適合桌機展示",
      "鋼化玻璃桌面"
    ],
    "cons": [
      "CP 值不如一般木紋升降桌",
      "需留意玻璃桌使用習慣"
    ],
    "bestFor": "想要展示型桌面與電競房氛圍的人。",
    "recommendation": "桌搭推薦：LUMI 深色款外觀是主要賣點，重視實用 CP 可先看 Loctek/iRocks。",
    "score": 76,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "玻璃桌面",
      "電競",
      "桌搭"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-cougar-e-grav-180",
    "category": "standingdesk",
    "rank": 15,
    "budget": "mid",
    "channel": "tw",
    "brand": "COUGAR",
    "model": "E-GRAV 180",
    "name": "E-GRAV 180 雙馬達電動升降桌",
    "price": {
      "currency": "TWD",
      "amount": 15990,
      "converted": 15990,
      "confidence": "可信通路查核價"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBB6OA900JHYGC/000001_1764230983.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBB6O-A900JHYGC",
    "buyLabel": "PChome",
    "specs": [
      "雙馬達",
      "180cm 級桌面",
      "電競桌",
      "電動升降",
      "桌板厚度：未標示"
    ],
    "description": "E-GRAV 180 是更大的 COUGAR 雙馬達升降桌，適合需要完整大桌面的玩家或創作者。",
    "pros": [
      "180cm 大桌面",
      "雙馬達規格",
      "適合多螢幕與桌機"
    ],
    "cons": [
      "房間空間需求高",
      "價格已接近中高階工作桌"
    ],
    "bestFor": "固定書房、多螢幕、桌機與周邊設備很多的人。",
    "recommendation": "電競大桌推薦：想要 180cm 完整桌體與雙馬達，可取代配件型套組。",
    "score": 79,
    "voltage": "110V 台灣通路",
    "warranty": "依 PChome/供應商頁面",
    "tags": [
      "雙馬達",
      "180cm",
      "電競"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-extra-16-dsbc8ra900huota",
    "category": "standingdesk",
    "rank": 16,
    "budget": "mid",
    "channel": "tw",
    "brand": "Water3F",
    "model": "快裝安全版 F1",
    "name": "智慧記憶電動升降桌 120x60",
    "price": {
      "currency": "TWD",
      "amount": 8999,
      "converted": 8999,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBC8RA900HUOTA/000001_1728700090.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBC8R-A900HUOTA",
    "buyLabel": "PChome",
    "specs": [
      "120x60cm",
      "記憶高度",
      "快裝",
      "電動升降",
      "桌板厚度：未標示"
    ],
    "description": "Water3F 快裝安全版 F1 補進本分類比較池，重點是120x60cm、記憶高度、快裝，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "價格低於多數品牌桌",
      "附桌板即可直接比較"
    ],
    "cons": [
      "承重與穩定度需看使用重量",
      "品牌售後需確認"
    ],
    "bestFor": "居家辦公、雙螢幕或想久坐久站切換的人。",
    "recommendation": "補充推薦：智慧記憶電動升降桌 120x60 的優勢在價格低於多數品牌桌，但仍建議把承重與穩定度需看使用重量納入取捨。",
    "score": 86,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "120x60",
      "記憶高度",
      "CP 值"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-extra-17-debhcta900bw2x6",
    "category": "standingdesk",
    "rank": 17,
    "budget": "value",
    "channel": "tw",
    "brand": "Kraftdale",
    "model": "人體工學電動升降桌",
    "name": "柚木色電動升降桌",
    "price": {
      "currency": "TWD",
      "amount": 6890,
      "converted": 6890,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DEBHCTA900BW2X6/000001_1634603420.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DEBHCT-A900BW2X6",
    "buyLabel": "PChome",
    "specs": [
      "電動升降",
      "柚木色",
      "辦公桌",
      "人體工學",
      "桌板厚度：未標示"
    ],
    "description": "Kraftdale 人體工學電動升降桌 補進本分類比較池，重點是電動升降、柚木色、辦公桌，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "價格親民",
      "桌面風格適合居家"
    ],
    "cons": [
      "規格資訊需以頁面為準",
      "長期穩定度口碑較少"
    ],
    "bestFor": "居家辦公、雙螢幕或想久坐久站切換的人。",
    "recommendation": "補充推薦：柚木色電動升降桌 的優勢在價格親民，但仍建議把規格資訊需以頁面為準納入取捨。",
    "score": 85,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "居家辦公",
      "電動",
      "預算"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-extra-18-dsbc1ta900ht0du",
    "category": "standingdesk",
    "rank": 18,
    "budget": "mid",
    "channel": "tw",
    "brand": "Loctek",
    "model": "F2 智慧記憶電動升降桌",
    "name": "120x60 黑色電動升降桌",
    "price": {
      "currency": "TWD",
      "amount": 9999,
      "converted": 9999,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DSBC1TA900HT0DU/000001_1738574875.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DSBC1T-A900HT0DU",
    "buyLabel": "PChome",
    "specs": [
      "120x60cm",
      "智慧記憶",
      "黑色",
      "電動升降",
      "桌板厚度：未標示"
    ],
    "description": "Loctek F2 智慧記憶電動升降桌 補進本分類比較池，重點是120x60cm、智慧記憶、黑色，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "Loctek 類型成熟",
      "小桌面適合有限空間"
    ],
    "cons": [
      "120x60 對多螢幕偏小",
      "黑色較顯灰塵"
    ],
    "bestFor": "居家辦公、雙螢幕或想久坐久站切換的人。",
    "recommendation": "補充推薦：120x60 黑色電動升降桌 的優勢在Loctek 類型成熟，但仍建議把120x60 對多螢幕偏小納入取捨。",
    "score": 84,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "Loctek",
      "120x60",
      "記憶高度"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-extra-19-dcbb6oa900hsvt2",
    "category": "standingdesk",
    "rank": 19,
    "budget": "mid",
    "channel": "tw",
    "brand": "COUGAR",
    "model": "E-STAR 140",
    "name": "電競電動升降桌",
    "price": {
      "currency": "TWD",
      "amount": 13990,
      "converted": 13990,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBB6OA900HSVT2/000001_1782822944.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBB6O-A900HSVT2",
    "buyLabel": "PChome",
    "specs": [
      "140cm",
      "電競桌",
      "電動升降",
      "寬桌面",
      "桌板厚度：未標示"
    ],
    "description": "COUGAR E-STAR 140 補進本分類比較池，重點是140cm、電競桌、電動升降，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "桌寬適合多螢幕",
      "品牌電競定位明確"
    ],
    "cons": [
      "造型較電競",
      "不一定適合極簡辦公室"
    ],
    "bestFor": "居家辦公、雙螢幕或想久坐久站切換的人。",
    "recommendation": "補充推薦：電競電動升降桌 的優勢在桌寬適合多螢幕，但仍建議把造型較電競納入取捨。",
    "score": 83,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "140cm",
      "電競",
      "多螢幕"
    ],
    "releaseDate": "找不到"
  },
  {
    "id": "standingdesk-extra-20-dcbb6oa900frsk6",
    "category": "standingdesk",
    "rank": 20,
    "budget": "mid",
    "channel": "tw",
    "brand": "E-home",
    "model": "一片式鴨嘴斜沿雙節USB電動記憶升降桌",
    "name": "120cm USB 電動記憶升降桌",
    "price": {
      "currency": "TWD",
      "amount": 8980,
      "converted": 8980,
      "confidence": "可信通路查核價，擷取 2026-07-08"
    },
    "image": "https://cs-a.ecimg.tw/items/DCBB6OA900FRSK6/000001_1669107568.jpg",
    "buyUrl": "https://24h.pchome.com.tw/prod/DCBB6O-A900FRSK6",
    "buyLabel": "PChome",
    "specs": [
      "120cm",
      "USB",
      "記憶升降",
      "一片式桌面",
      "桌板厚度：未標示"
    ],
    "description": "E-home 一片式鴨嘴斜沿雙節USB電動記憶升降桌 補進本分類比較池，重點是120cm、USB、記憶升降，適合和同類 Top Pick 依預算、售後與規格一起比較。",
    "pros": [
      "桌面與升降一起到位",
      "USB 與記憶高度方便"
    ],
    "cons": [
      "桌板規格需看頁面",
      "承重不如高階雙馬達款明確"
    ],
    "bestFor": "居家辦公、雙螢幕或想久坐久站切換的人。",
    "recommendation": "補充推薦：120cm USB 電動記憶升降桌 的優勢在桌面與升降一起到位，但仍建議把桌板規格需看頁面納入取捨。",
    "score": 82,
    "voltage": "110V 台灣通路",
    "warranty": "依台灣通路/品牌保固",
    "tags": [
      "USB",
      "120cm",
      "記憶高度"
    ],
    "releaseDate": "找不到"
  }
]);
})();

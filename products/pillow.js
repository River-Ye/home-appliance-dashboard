(() => {
  const dashboard = globalThis.applianceDashboard;
  if (!dashboard || typeof dashboard.registerProducts !== "function") {
    throw new Error("appliance dashboard registry is not ready");
  }

  const issueSources = (model) => {
    const pttQuery = `site:ptt.cc "${model}" 枕頭`;
    const mobile01Query = `site:mobile01.com "${model}" 枕頭`;
    return [
      {
        platform: "PTT",
        targetHost: "ptt.cc",
        query: pttQuery,
        queryUrl: `https://www.google.com/search?q=${encodeURIComponent(pttQuery)}`,
      },
      {
        platform: "Mobile01",
        targetHost: "mobile01.com",
        query: mobile01Query,
        queryUrl: `https://www.google.com/search?q=${encodeURIComponent(mobile01Query)}`,
      },
    ];
  };

  const notFoundHistoricalLow = (model) => ({
    status: "not_found",
    amount: null,
    currency: "TWD",
    converted: null,
    sourceUrl: "",
    sourceTitle: "",
    evidenceSnippet: "",
    sourceKind: "not_found",
    confidence: "not_found",
    checkedAt: "2026-09-01",
    note: `已逐一查核 ${model} 的確切版本官方現價、品牌／通路頁與價格歷史查詢；沒有找到可回溯且排除會員、套裝、福利品與跨版本的可靠史低，因此不以現價或劃線價推定。`,
  });

  const makeProduct = (item) => ({
    category: "pillow",
    type: item.type,
    budget: item.budget,
    channel: "tw",
    installation: {
      status: "not_stated",
      note: "成人睡眠枕為非電器成品；拆封恢復後應依睡姿與床墊軟硬度試躺，不含到府安裝。",
    },
    id: item.id,
    variantFamily: item.variantFamily,
    brand: item.brand,
    model: item.model,
    name: item.name,
    rank: item.rank,
    score: item.score,
    topPick: item.topPick === true,
    price: {
      currency: "TWD",
      amount: item.price,
      converted: item.price,
      basis: "retailer_current",
      confidence: `2026-09-01 Chrome 已查核 ${item.model} 確切新品頁與所選版本，頁面現價為 NT$${item.price.toLocaleString("en-US")}；不把其他尺寸、包數或贈品價套用。`,
    },
    image: item.image,
    buyUrl: item.buyUrl,
    buyLabel: item.buyLabel,
    specs: [
      `類型：${item.typeSpec}`,
      `枕型／睡姿：${item.sleep}`,
      `表布材質：${item.cover}`,
      `填充／核心材質：${item.core}`,
      `高度／軟硬度：${item.height}`,
      `尺寸：${item.size}`,
      `重量：${item.weight}`,
      `透氣／溫控：${item.thermal}`,
      `認證／產地：${item.origin}`,
      `清潔保養：${item.care}`,
    ],
    description: item.description,
    pros: item.pros,
    cons: item.cons,
    bestFor: item.bestFor,
    recommendation: item.recommendation,
    releaseDate: "找不到",
    historicalLow: item.historicalLow || notFoundHistoricalLow(item.model),
    issueResearch: {
      status: "no_common_issue",
      checkedAt: "2026-09-01",
      summary: "截至查核日，查無達門檻的集中負評／災情",
      issues: [],
      checkedSources: item.issueSources || issueSources(item.model),
    },
    voltage: "不需供電。",
    warranty: item.warranty,
    tags: item.tags,
  });

  const products = [
    {
      id: "pillow-tempur-symphony-medium", variantFamily: "tempur-symphony", brand: "TEMPUR", model: "TPILSYMM", name: "丹普夢幻感溫枕 MEDIUM TPILSYMM", type: "memory_foam", typeSpec: "記憶泡棉完整成品枕", budget: "premium", rank: 1, score: 93, topPick: true, price: 8880,
      image: "https://shop.tw.tempur.com/cdn/shop/products/TEMPUR-Symphony-Pillow_1_736x471.jpg?v=1595266089", buyUrl: "https://shop.tw.tempur.com/products/symphony-pillow-%E5%A4%A2%E5%B9%BB%E6%84%9F%E6%BA%AB%E6%9E%95?variant=34660708909211", buyLabel: "TEMPUR 台灣官方商城（MEDIUM）",
      sleep: "雙面枕型，官方說明一面貼合側睡肩線、另一面微拱支援仰睡", cover: "低敏可拆洗布套；官方標示 Oeko-Tex Standard 100", core: "TEMPUR 感溫材質", height: "MEDIUM／適中支撐；台灣確切版本頁未列公分高度", size: "查不到", weight: "查不到", thermal: "感溫貼合；非主動冷卻", origin: "CE 第一類醫療設備標誌、Oeko-Tex Standard 100；產地查不到", care: "布套拆下、翻面並拉上拉鍊，以 60°C 以下水洗；核心不可依布套方式機洗",
      description: "台灣官方 MEDIUM 確切 SKU 的雙面感溫枕，兼顧側睡與仰睡，並提供三年台灣保固。", pros: ["雙面支撐不同睡姿", "三年台灣保固", "可拆洗認證布套"], cons: ["價格高", "台灣頁未列尺寸與淨重", "感溫泡棉對怕熱者仍需試睡"], bestFor: "想在台灣門市／官方售後體系內選擇側睡與仰睡兼用感溫枕者。", recommendation: "台灣 Top Pick；先到門市試躺確認 MEDIUM 高度，不以系列其他尺寸推算。", warranty: "TEMPUR 台灣官方 3 年保固；保留購買憑證並依官網條款申請。", tags: ["台灣 Top Pick", "側睡推薦", "仰睡", "三年保固", "台灣官方"],
    },
    {
      id: "pillow-3m-mz600", variantFamily: "3m-mz600", brand: "3M", model: "MZ600", name: "3M 防蟎可調式記憶枕 MZ600 側仰舒眠型", type: "memory_foam", typeSpec: "可調式記憶泡棉完整成品枕", budget: "premium", rank: 2, score: 91, price: 3290,
      image: "https://img.91app.com/webapi/imagesV3/Original/SalePage/6213493/0/639237917199230000?v=1", buyUrl: "https://shop.3m.com.tw/SalePage/Index/6213493", buyLabel: "3M 台灣官方商城（MZ600）",
      sleep: "左右高包覆、側睡／仰睡；含 2 cm 可拆墊片調高", cover: "3M 物理防蟎可拆洗枕套", core: "記憶泡棉枕心與可拆式墊片", height: "高 7.5–11.5 cm＋2 cm 墊片／可調支撐", size: "長 64 x 寬 38 x 高 11.5 cm", weight: "查不到", thermal: "官方主打防蟎與包覆，未標示涼感等級", origin: "BSMI M34661；台灣製造", care: "防蟎枕套可拆洗；官方確切頁未列泡棉枕心洗滌方式，核心勿逕行機洗",
      description: "超寬輪廓搭配可拆墊片，讓同一枕芯在側睡與仰睡間微調高度。", pros: ["高度可調", "台灣製造與官方通路", "附物理防蟎枕套"], cons: ["官方頁未明示淨重", "泡棉核心不可由枕套洗法推定", "需自行找出合適墊片組合"], bestFor: "希望用墊片微調高度的仰睡或側睡成人。", recommendation: "列為仰睡推薦；先從不加墊片試睡，再逐步加高避免頸部過度屈曲。", warranty: "3M 台灣官方通路與客服；耐用保固年限未標示，退換依官方商城條款。", tags: ["仰睡推薦", "高度可調", "防蟎枕套", "台灣製造"],
    },
    {
      id: "pillow-emma-black-diamond", variantFamily: "emma-black-diamond", brand: "Emma", model: "EPWCF040070RAB", name: "Emma 石墨烯黑鑽記憶枕 40x70 EPWCF040070RAB", type: "memory_foam", typeSpec: "三層記憶泡棉完整成品枕", budget: "premium", rank: 3, score: 90, price: 3199,
      image: "https://eu-images.contentstack.com/v3/assets/blt167b24547e5b1906/blt544d377e44af8545/67e680a37c440a8ddddc1448/Customizable_Cooling_Foam_Pillow_Layers_Gallery_(1).jpg", buyUrl: "https://www.emma-sleep.com.tw/black-diamond-pillow/", buyLabel: "Emma 台灣官網（EPWCF040070RAB）",
      sleep: "抽換一至三層對應趴睡、仰睡、側睡", cover: "高透氣可拆洗枕套", core: "Diamond Degree 黑鑽石棉、HRX 支撐棉、Hypergel 棉三層", height: "一至三層可調／軟硬隨層數與放置順序調整", size: "長 70 x 寬 40 cm", weight: "查不到", thermal: "Diamond Degree 石墨烯溫濕調節表層", origin: "官方台灣頁未標示產地與第三方認證", care: "布套可拆下機洗；泡棉層不可依布套方式水洗",
      description: "以三層可拆泡棉調整睡姿與高度，並把石墨烯溫控放在表層。", pros: ["三層可調", "30 天官方試睡", "涼感表層"], cons: ["無淨重與公分高度", "需要自行嘗試層數", "涼感受環境影響"], bestFor: "睡姿會改變、希望可拆層調整且重視散熱者。", recommendation: "收到後逐層試睡並保留完整包材；三層並不必然最適合每位側睡者。", warranty: "Emma 台灣官網售後與 30 天枕頭試睡；商品耐用保固年限依官網條款，頁面未另列。", tags: ["三層可調", "涼感", "30天試睡", "台灣官網"],
    },
    {
      id: "pillow-emma-airgrid", variantFamily: "emma-airgrid", brand: "Emma", model: "EPWGF040070RAB", name: "Emma 零重力 AirGrid 記憶枕 40x70 EPWGF040070RAB", type: "hybrid", typeSpec: "AirGrid 彈性網格＋泡棉混合完整成品枕", budget: "premium", rank: 4, score: 89, price: 5399,
      image: "https://eu-images.contentstack.com/v3/assets/blt167b24547e5b1906/blt20bd562e6395dace/69b7b2e6b1d3883dbdfc5d96/Oreiller_Original_Elite_Resized.avif?format=auto&quality=80&width=2048&disable=upscale&crop=16:9", buyUrl: "https://www.emma-sleep.com.tw/airgrid-pillow/", buyLabel: "Emma 台灣官網（EPWGF040070RAB）",
      sleep: "可調枕高，適用多睡姿；需依肩寬與床墊試躺", cover: "可拆洗布套，確切纖維比例未標示", core: "AirGrid 彈性網格與支撐泡棉層", height: "可調高度／彈性包覆；確切公分高度查不到", size: "長 70 x 寬 40 cm", weight: "查不到", thermal: "AirGrid 開放網格主打涼感透氣", origin: "官方台灣頁未標示產地與第三方認證", care: "布套可拆洗；網格與泡棉核心清潔方式依標籤，不整顆機洗",
      description: "本輪唯一 AirGrid 網格與泡棉混合枕，優先考量通風與可調支撐。", pros: ["開放網格透氣", "枕高可調", "台灣官網新品"], cons: ["價格高", "尺寸僅列平面大小", "重量與產地查不到"], bestFor: "怕熱又不想完全放棄泡棉承托的成人。", recommendation: "把網格觸感、枕套摩擦與實際床墊一起試，不只看涼感文案。", warranty: "Emma 台灣官網售後與枕頭試睡政策；耐用保固年限未在確切頁另列。", tags: ["混合枕", "AirGrid", "涼感", "台灣官網"],
    },
    {
      id: "pillow-hola-organic-latex-curve", variantFamily: "hola-sri-lanka-organic-latex-curve", brand: "HOLA", model: "014416047", name: "HOLA 斯里蘭卡有機乳膠枕 H12/14 曲線型 014416047", type: "latex", typeSpec: "有機天然乳膠完整成品枕", budget: "premium", rank: 5, score: 89, price: 2580,
      image: "https://pcm.trplus.com.tw/1000x1000/sys-master/productImages/h2e/hde/12572521267230/000000000014416047-gallery-01-20250919110548549.jpg", buyUrl: "https://www.hola.com.tw/p/014416047", buyLabel: "HOLA 和樂家居（014416047）",
      sleep: "曲線型，高低側貼合仰睡／側睡；官方特別說明側睡服貼肩頸", cover: "可拆式外枕套，纖維比例查不到", core: "100% 斯里蘭卡有機天然乳膠，Dunlop 工藝", height: "高 12／14 cm 曲線／柔彈支撐", size: "長 60 x 寬 40 x 高 14 cm", weight: "1.3 kg", thermal: "一體成型透氣孔促進通風", origin: "GOLS 全球有機乳膠標準；斯里蘭卡製", care: "枕套低溫柔洗、不可乾洗漂白烘乾熨燙；枕芯不可水洗、曝曬或熨燙",
      description: "GOLS 有機乳膠與 12／14 cm 曲線兼顧回彈及側睡肩頸空間。", pros: ["完整尺寸與淨重", "GOLS 有機乳膠", "HOLA 門市可試"], cons: ["乳膠氣味與彈性需親自確認", "核心不可水洗曝曬", "曲線高度不適合所有肩寬"], bestFor: "希望到台灣門市試躺、以側睡支撐為主的成人。", recommendation: "列為側睡推薦；先用較低側測仰睡、較高側測側睡，避免只依身高選枕。", warranty: "HOLA 台灣門市與官網售後；商品保固年限未標示，退換依寢具衛生與官網條款。", tags: ["側睡推薦", "GOLS", "有機乳膠", "門市試躺"],
    },
    {
      id: "pillow-ikea-bergven", variantFamily: "ikea-bergven-high", brand: "IKEA", model: "205.715.84", name: "IKEA BERGVEN 羽絨羽毛高枕 50x80 205.715.84", type: "down", typeSpec: "羽絨／羽毛完整成品枕", budget: "premium", rank: 6, score: 88, price: 2799,
      image: "https://www.ikea.com.tw/dairyfarm/tw/images/892/0789228_PE763866_S4.jpg", buyUrl: "https://www.ikea.com.tw/zh/products/duvets-pillows-and-protectors/pillows/bergven-art-20571584", buyLabel: "IKEA 台灣（205.715.84）",
      sleep: "雙層高枕，側睡／仰睡", cover: "棉質多臂織表布", core: "外層 90% 羽絨、枕芯 90% 羽毛的雙層結構", height: "高枕／外柔內穩；公分高度查不到", size: "長 50 x 寬 80 cm", weight: "1.445 kg", thermal: "棉表布與天然羽絨羽毛透氣排濕", origin: "產地與羽絨責任認證在所查頁未標示", care: "60°C 柔洗；使用少量溫和洗劑並低溫滾筒烘至填充完全乾燥",
      description: "外層羽絨柔軟、內層羽毛承托的雙層高枕。", pros: ["外柔內穩", "可 60°C 清洗", "官方列明總重量"], cons: ["天然羽絨羽毛可能有氣味", "需徹底烘乾", "沒有公分高度"], bestFor: "偏好蓬鬆天然填充且有烘衣設備的側睡／仰睡者。", recommendation: "天然填充需定期蓬鬆與完全乾燥；對羽毛敏感者先確認材質接受度。", warranty: "IKEA 台灣官方退換與品質政策；枕芯耐用保固年限未標示。", tags: ["羽絨羽毛", "高枕", "可機洗", "台灣官方"],
    },
    {
      id: "pillow-ikea-gulkavle", variantFamily: "ikea-gulkavle-high", brand: "IKEA", model: "605.329.44", name: "IKEA GULKAVLE 羽絨羽毛高枕 50x80 605.329.44", type: "down", typeSpec: "再生水禽羽絨／羽毛完整成品枕", budget: "premium", rank: 7, score: 87, price: 2499,
      image: "https://www.ikea.com.tw/dairyfarm/tw/images/892/0789265_PE763892_S4.webp", buyUrl: "https://www.ikea.com.tw/zh/products/duvets-pillows-and-protectors/pillows/gulkavle-art-60532944", buyLabel: "IKEA 台灣（605.329.44）",
      sleep: "高枕，側睡／仰睡", cover: "柔軟棉質表布", core: "再生水禽羽絨與羽毛，外層較高羽絨比例", height: "高枕／柔軟蓬鬆；公分高度查不到", size: "長 50 x 寬 80 cm", weight: "1.37 kg", thermal: "棉質透氣排濕，羽絨羽毛具保溫性", origin: "產地與第三方認證查不到", care: "60°C 機洗；低溫滾筒烘至填充物完全乾燥",
      description: "以棉表布搭配再生水禽羽絨羽毛，提供蓬鬆高枕睡感。", pros: ["蓬鬆高枕", "可 60°C 洗", "官方總重量明確"], cons: ["可能有天然氣味", "需滾筒烘乾", "高度沒有公分值"], bestFor: "喜歡羽絨蓬鬆感且側睡肩寬需要較高承托者。", recommendation: "入手前確認過敏與烘乾條件，潮濕環境不宜收納未全乾枕芯。", warranty: "IKEA 台灣官方退換與品質政策；枕芯耐用保固年限未標示。", tags: ["羽絨羽毛", "高枕", "再生填充", "台灣官方"],
    },
    {
      id: "pillow-ikea-hirsstarr", variantFamily: "ikea-hirsstarr", brand: "IKEA", model: "403.347.99", name: "IKEA HIRSSTARR 乳膠枕 45x70 403.347.99", type: "latex", typeSpec: "乳膠完整成品枕", budget: "premium", rank: 8, score: 86, price: 2299,
      image: "https://www.ikea.com.tw/dairyfarm/tw/images/699/0469919_PE612455_S4.webp", buyUrl: "https://www.ikea.com.tw/zh/products/duvets-pillows-and-protectors/pillows/hirsstarr-art-40334799", buyLabel: "IKEA 台灣（403.347.99）",
      sleep: "一般平面枕型；睡姿需依實際高度試躺", cover: "可拆洗表布，確切纖維比例依商品標籤", core: "乳膠核心", height: "未標示／彈性支撐", size: "長 70 x 寬 45 cm", weight: "查不到", thermal: "乳膠孔洞結構；確切涼感等級未標示", origin: "產地與第三方認證查不到", care: "表布可 60°C 機洗；乳膠核心不可由布套方式推定清洗",
      description: "IKEA 台灣在售的單一乳膠核心成人睡眠枕。", pros: ["彈性支撐", "45x70 大枕面", "官方台灣通路"], cons: ["本體高度查不到", "淨重查不到", "乳膠觸感與氣味需試"], bestFor: "想以較大枕面體驗乳膠回彈的成人。", recommendation: "高度未明，不應只看 45x70 平面尺寸判斷是否適合側睡。", warranty: "IKEA 台灣官方退換與品質政策；乳膠枕耐用保固年限未標示。", tags: ["乳膠", "大枕面", "台灣官方"],
    },
    {
      id: "pillow-tempur-original-smartcool-queen-s", variantFamily: "tempur-original-smartcool", brand: "TEMPUR", model: "0000559654", name: "丹普新原創感溫枕 SmartCool QUEEN S 0000559654", type: "memory_foam", typeSpec: "SmartCool 記憶泡棉完整成品枕", budget: "premium", rank: 9, score: 86, price: 11120,
      image: "https://shop.tw.tempur.com/cdn/shop/products/TEMPUR-Original-Pillow-with-SmartCool-Technology_4_736x471.jpg?v=1655461214", buyUrl: "https://shop.tw.tempur.com/products/original-pillow-with-smartcool-%E6%96%B0%E5%8E%9F%E5%89%B5%E6%84%9F%E6%BA%AB%E6%9E%95?variant=42452299939995", buyLabel: "TEMPUR 台灣官方商城（QUEEN S）",
      sleep: "波浪頸枕，側睡／仰睡", cover: "SmartCool 涼感可拆洗布套、Oeko-Tex Standard 100", core: "TEMPUR 感溫材質", height: "QUEEN S／穩固支撐；台灣頁未列公分高度", size: "查不到", weight: "查不到", thermal: "SmartCool 專利涼感布套", origin: "CE 第一類醫療設備標誌、Oeko-Tex Standard 100；產地查不到", care: "布套拆下翻面拉鍊後以 60°C 以下水洗；核心勿機洗",
      description: "原創波浪頸枕加入 SmartCool 布套的 QUEEN S 確切 SKU。", pros: ["官方涼感布套", "三年台灣保固", "側仰睡頸部輪廓"], cons: ["全類最高價", "尺寸與淨重查不到", "高低選錯會影響頸椎角度"], bestFor: "預算充足、已試過 QUEEN S 高度且重視涼感表布者。", recommendation: "務必試枕再買；不可用 QUEEN M／L／XL 尺寸資訊代替 S 版本。", warranty: "TEMPUR 台灣官方 3 年保固；保留購買憑證。", tags: ["SmartCool", "頸枕", "三年保固", "台灣官方"],
    },
    {
      id: "pillow-tempur-millennium-small", variantFamily: "tempur-millennium", brand: "TEMPUR", model: "0001209107", name: "丹普永恆千禧感溫枕 SMALL 0001209107", type: "memory_foam", typeSpec: "人體工學記憶泡棉完整成品枕", budget: "premium", rank: 10, score: 85, price: 6880,
      image: "https://shop.tw.tempur.com/cdn/shop/products/TEMPUR-Millennium-Pillow_1_736x471.jpg?v=1595266198", buyUrl: "https://shop.tw.tempur.com/products/ergoplus-pillow-%E6%B0%B8%E6%81%86%E5%8D%83%E7%A6%A7%E6%84%9F%E6%BA%AB%E6%9E%95?variant=47934674337947", buyLabel: "TEMPUR 台灣官方商城（SMALL）",
      sleep: "前傾側翼頸枕，官方定位仰睡", cover: "低敏可拆洗布套、Oeko-Tex Standard 100", core: "TEMPUR 感溫材質", height: "SMALL／穩固頸部支撐；公分高度查不到", size: "查不到", weight: "查不到", thermal: "感溫貼合；無 SmartCool 布套", origin: "CE 第一類醫療設備標誌、Oeko-Tex Standard 100；產地查不到", care: "布套拆下翻面拉鍊後以 60°C 以下水洗；核心勿機洗",
      description: "以前傾側翼承托頸部、主打仰睡的 SMALL 確切版本。", pros: ["仰睡導向枕型", "三年台灣保固", "可拆洗認證布套"], cons: ["側睡適配有限", "尺寸與淨重查不到", "價格高"], bestFor: "以仰睡為主且已在門市確認 SMALL 高度者。", recommendation: "側翼造型明確，不適合只因品牌選購；先確認頸部是否被過度推前。", warranty: "TEMPUR 台灣官方 3 年保固；保留購買憑證。", tags: ["仰睡", "人體工學", "三年保固", "台灣官方"],
    },
    {
      id: "pillow-tempur-original-xs", variantFamily: "tempur-original", brand: "TEMPUR", model: "0000348682", name: "丹普原創感溫枕 EXTRA SMALL 0000348682", type: "memory_foam", typeSpec: "波浪頸型記憶泡棉完整成品枕", budget: "premium", rank: 11, score: 84, price: 6240,
      image: "https://shop.tw.tempur.com/cdn/shop/products/TEMPUR-Original-Pillow_1_736x471.jpg?v=1595266147", buyUrl: "https://shop.tw.tempur.com/products/original-pillow-%E5%8E%9F%E5%89%B5%E6%84%9F%E6%BA%AB%E9%A0%B8%E6%9E%95?variant=45258873110683", buyLabel: "TEMPUR 台灣官方商城（EXTRA SMALL）",
      sleep: "波浪頸型，側睡／仰睡；EXTRA SMALL 為較低版本", cover: "低敏可拆洗布套、Oeko-Tex Standard 100", core: "TEMPUR 感溫材質", height: "EXTRA SMALL／較低穩固支撐；公分高度查不到", size: "查不到", weight: "查不到", thermal: "感溫貼合；無主動涼感", origin: "CE 第一類醫療設備標誌、Oeko-Tex Standard 100；產地查不到", care: "布套拆下翻面拉鍊後以 60°C 以下水洗；核心勿機洗",
      description: "原創波浪頸枕的 EXTRA SMALL 獨立 SKU，避免把其他 QUEEN 高度套用。", pros: ["低版頸型", "三年台灣保固", "確切 variant URL"], cons: ["可能過低", "尺寸與淨重查不到", "價格高"], bestFor: "窄肩、偏好低枕並能先試躺者。", recommendation: "EXTRA SMALL 不是一般萬用尺寸；沒有試躺時不建議以售價或名稱代替高度判斷。", warranty: "TEMPUR 台灣官方 3 年保固；保留購買憑證。", tags: ["低枕", "頸枕", "三年保固", "台灣官方"],
    },
    {
      id: "pillow-emma-original", variantFamily: "emma-original", brand: "Emma", model: "EPWAF040070RAB", name: "Emma 經典三層記憶枕 40x70 EPWAF040070RAB", type: "memory_foam", typeSpec: "三層記憶泡棉完整成品枕", budget: "premium", rank: 12, score: 84, price: 2099,
      image: "https://eu-images.contentstack.com/v3/assets/blt167b24547e5b1906/blt9036b39bf31bc71c/67e502fe9bf59529d571018d/Customizable_Foam_Pillow_Side_view_Gallery.jpg", buyUrl: "https://www.emma-sleep.com.tw/original-foam-pillow/", buyLabel: "Emma 台灣官網（EPWAF040070RAB）",
      sleep: "一至三層可調，趴睡／仰睡／側睡", cover: "高透氣可拆洗布套", core: "三層不同支撐與回彈泡棉", height: "一至三層可調／軟硬可調；確切公分高度查不到", size: "長 70 x 寬 40 cm", weight: "查不到", thermal: "透氣布套；非黑鑽石涼感版本", origin: "官方台灣頁未標示產地與第三方認證", care: "布套可拆下機洗；泡棉層勿整顆機洗",
      description: "以三層泡棉增減高度與軟硬度的經典款。", pros: ["三層可調", "台灣官網", "平面尺寸清楚"], cons: ["高度與重量查不到", "需反覆試層數", "不含黑鑽石涼感"], bestFor: "想以可拆層找出睡姿高度、預算低於同品牌涼感款者。", recommendation: "保留三層並分晚試睡，避免第一晚就把不適直接歸因於材質。", warranty: "Emma 台灣官網售後與枕頭試睡政策；耐用保固年限未另列。", tags: ["三層可調", "多睡姿", "台灣官網"],
    },
    {
      id: "pillow-ikea-rosenskarm", variantFamily: "ikea-rosenskarm", brand: "IKEA", model: "704.443.67", name: "IKEA ROSENSKÄRM 人體工學枕 33x50x11 704.443.67", type: "memory_foam", typeSpec: "雙密度記憶泡棉完整成品枕", budget: "value", rank: 13, score: 84, price: 499,
      image: "https://www.ikea.com.tw/dairyfarm/tw/images/225/0722542_PE733642_S4.webp", buyUrl: "https://www.ikea.com.tw/zh/products/duvets-pillows-and-protectors/pillows/rosenskarm-art-70444367", buyLabel: "IKEA 台灣（704.443.67）",
      sleep: "波浪雙面，側睡／仰睡；官方標示高側 11 cm、低側 9 cm", cover: "透氣可拆洗布套", core: "較軟與較密實兩種泡棉層", height: "高 11／低 9 cm／雙面支撐", size: "長 33 x 寬 50 x 高 11 cm", weight: "查不到", thermal: "透氣布套；無涼感膠層", origin: "產地與第三方認證查不到", care: "布套可 60°C 機洗；泡棉核心勿機洗",
      description: "小尺寸雙密度波浪枕，以極低入手價提供 9／11 cm 兩側高度。", pros: ["價格低", "雙面高度", "100 天人體工學枕試用政策"], cons: ["枕面較小", "淨重查不到", "沒有涼感層"], bestFor: "想低成本試人體工學記憶枕的側睡／仰睡成人。", recommendation: "CP 值高但枕面僅 33x50；翻身幅度大者先確認空間。", warranty: "IKEA 台灣人體工學枕 100 天試用依官網細則；耐用保固年限未標示。", tags: ["CP值", "雙面高度", "100天試用", "台灣官方"],
    },
    {
      id: "pillow-ikea-klubbsporre", variantFamily: "ikea-klubbsporre", brand: "IKEA", model: "804.460.97", name: "IKEA KLUBBSPORRE 涼感記憶枕 41x70x13 804.460.97", type: "memory_foam", typeSpec: "涼感膠層記憶泡棉完整成品枕", budget: "mid", rank: 14, score: 83, price: 1499,
      image: "https://www.ikea.com.tw/dairyfarm/tw/images/922/0792296_PE764700_S4.webp", buyUrl: "https://www.ikea.com.tw/zh/products/duvets-pillows-and-protectors/pillows/klubbsporre-art-80446097", buyLabel: "IKEA 台灣（804.460.97）",
      sleep: "人體工學輪廓，側睡／仰睡", cover: "可拆洗透氣布套", core: "記憶泡棉＋單面涼感膠層與通風孔", height: "高 13 cm／中高支撐", size: "長 41 x 寬 70 x 高 13 cm", weight: "查不到", thermal: "涼感膠層與通風孔；官方目錄涼感等級三星", origin: "產地與第三方認證查不到", care: "布套可機洗；泡棉核心與膠層不可機洗",
      description: "70 cm 寬枕面、13 cm 高與膠層通風設計，偏中高支撐。", pros: ["寬枕面", "涼感膠層", "100 天試用"], cons: ["13 cm 對窄肩可能過高", "淨重查不到", "膠層只能單面使用"], bestFor: "肩寬較大、想要側仰睡支撐與單面涼感者。", recommendation: "先比較 13 cm 與自己的肩頸落差；涼感層不等同整夜恆溫。", warranty: "IKEA 台灣人體工學枕 100 天試用依官網細則；耐用保固年限未標示。", tags: ["涼感", "側仰睡", "100天試用", "台灣官方"],
    },
    {
      id: "pillow-ikea-hargangel", variantFamily: "ikea-hargangel", brand: "IKEA", model: "404.947.83", name: "IKEA HÅRGÄNGEL 涼感記憶枕 41x71x13 404.947.83", type: "memory_foam", typeSpec: "涼感膠記憶泡棉完整成品枕", budget: "mid", rank: 15, score: 83, price: 1799,
      image: "https://www.ikea.com.tw/dairyfarm/tw/images/740/0974000_PE812248_S4.webp", buyUrl: "https://www.ikea.com.tw/zh/products/duvets-pillows-and-protectors/pillows/hargangel-art-40494783", buyLabel: "IKEA 台灣（404.947.83）",
      sleep: "人體工學輪廓，側睡／仰睡", cover: "可拆洗布套", core: "記憶泡棉＋涼感膠層與通風孔", height: "高 13 cm／中高支撐", size: "長 41 x 寬 71 x 高 13 cm", weight: "查不到", thermal: "涼感膠、通風孔；官方目錄涼感等級三星", origin: "產地與第三方認證查不到", care: "布套可機洗；泡棉核心與膠層勿機洗",
      description: "71 cm 寬的人體工學枕，官方頁同時標示 13 cm、涼感膠與通風孔。", pros: ["寬枕面", "涼感與通風", "官方頁明示再創低價"], cons: ["窄肩者可能過高", "淨重查不到", "涼感受環境影響"], bestFor: "偏高枕、希望增加散熱的側睡／仰睡成人。", recommendation: "現價已由官方明示為再創低價；仍以 13 cm 是否適合為首要條件。", warranty: "IKEA 台灣人體工學枕 100 天試用依官網細則；耐用保固年限未標示。", tags: ["涼感", "再創低價", "100天試用", "台灣官方"],
      historicalLow: { status: "found", amount: 1799, currency: "TWD", converted: 1799, sourceUrl: "https://www.ikea.com.tw/zh/products/duvets-pillows-and-protectors/pillows/hargangel-art-40494783", sourceTitle: "IKEA 台灣 HÅRGÄNGEL 404.947.83 人體工學枕", evidenceSnippet: "確切商品頁與官方目錄顯示『再創低價』，現價 NT$1,799、之前價格 NT$1,999。", sourceKind: "official_sale", confidence: "high", checkedAt: "2026-09-01", note: "採用 IKEA 台灣確切 SKU 404.947.83 的官方再創低價標示；僅代表本次可驗證的官方降價，不延伸為無限期全網最低。" },
    },
    {
      id: "pillow-ikea-kvarnven-side-back", variantFamily: "ikea-kvarnven", brand: "IKEA", model: "105.073.48", name: "IKEA KVARNVEN 側仰睡人體工學枕 39x69x13 105.073.48", type: "memory_foam", typeSpec: "蜂巢涼感記憶泡棉完整成品枕", budget: "mid", rank: 16, score: 82, price: 1899,
      image: "https://www.ikea.com.tw/dairyfarm/tw/images/240/1024081_PE833414_S4.webp", buyUrl: "https://www.ikea.com.tw/zh/products/duvets-pillows-and-protectors/pillows/kvarnven-art-10507348", buyLabel: "IKEA 台灣（側仰睡 105.073.48）",
      sleep: "側睡／仰睡版本", cover: "冰涼蜂巢織面可拆洗布套", core: "記憶泡棉層壓核心", height: "高 13 cm／側仰睡穩固支撐", size: "長 39 x 寬 69 x 高 13 cm", weight: "查不到", thermal: "蜂巢涼感織面、官方目錄涼感等級二星", origin: "產地與第三方認證查不到", care: "布套依標籤機洗；泡棉核心勿機洗",
      description: "KVARNVEN 的 13 cm 側仰睡獨立 SKU，不與 10 cm 趴睡版混用。", pros: ["13 cm 支撐", "蜂巢涼感面", "確切版本 URL"], cons: ["淨重查不到", "高枕不適合所有肩寬", "系列版本易買錯"], bestFor: "肩寬與床墊條件適合 13 cm 的側睡／仰睡者。", recommendation: "同系列兩版只差外觀不成立；本款以 13 cm 與側仰睡官方 SKU 計數。", warranty: "IKEA 台灣人體工學枕 100 天試用依官網細則；耐用保固年限未標示。", tags: ["側仰睡", "涼感", "13cm", "台灣官方"],
    },
    {
      id: "pillow-ikea-kvarnven-stomach", variantFamily: "ikea-kvarnven", brand: "IKEA", model: "805.132.18", name: "IKEA KVARNVEN 趴睡人體工學枕 39x69x10 805.132.18", type: "memory_foam", typeSpec: "蜂巢涼感記憶泡棉完整成品枕", budget: "mid", rank: 17, score: 81, price: 1699,
      image: "https://www.ikea.com.tw/dairyfarm/tw/images/240/1024077_PE833412_S4.webp", buyUrl: "https://www.ikea.com.tw/zh/products/duvets-pillows-and-protectors/pillows/kvarnven-art-80513218", buyLabel: "IKEA 台灣（趴睡 805.132.18）",
      sleep: "趴睡／偏低枕版本", cover: "冰涼蜂巢織面可拆洗布套", core: "記憶泡棉層壓核心", height: "高 10 cm／趴睡較低支撐", size: "長 39 x 寬 69 x 高 10 cm", weight: "查不到", thermal: "蜂巢涼感織面", origin: "產地與第三方認證查不到", care: "布套依標籤機洗；泡棉核心勿機洗",
      description: "KVARNVEN 的 10 cm 趴睡獨立 SKU，低於同系列側仰睡版。", pros: ["較低 10 cm", "蜂巢涼感面", "寬枕面"], cons: ["側睡可能支撐不足", "淨重查不到", "系列版本易買錯"], bestFor: "趴睡或明確偏好較低枕的成人。", recommendation: "列為趴睡候選；側睡肩寬大者不應因同系列評價直接選這版。", warranty: "IKEA 台灣人體工學枕 100 天試用依官網細則；耐用保固年限未標示。", tags: ["趴睡推薦", "低枕", "10cm", "台灣官方"],
    },
    {
      id: "pillow-ikea-bjorkpyrola", variantFamily: "ikea-bjorkpyrola", brand: "IKEA", model: "404.701.07", name: "IKEA BJÖRKPYROLA 涼感記憶枕 33x50 404.701.07", type: "memory_foam", typeSpec: "涼感粒子記憶泡棉完整成品枕", budget: "value", rank: 18, score: 81, price: 649,
      image: "https://www.ikea.com.tw/dairyfarm/tw/images/957/0795702_PE766161_S4.webp", buyUrl: "https://www.ikea.com.tw/zh/products/duvets-pillows-and-protectors/pillows/bjorkpyrola-art-40470107", buyLabel: "IKEA 台灣（404.701.07）",
      sleep: "人體工學輪廓，側睡／仰睡", cover: "尼龍可拆洗布套", core: "含涼感膠粒的記憶泡棉", height: "未標示／中等輪廓支撐", size: "長 33 x 寬 50 cm", weight: "查不到", thermal: "涼感膠粒；官方目錄涼感等級一星", origin: "產地與第三方認證查不到", care: "布套可 60°C 機洗；泡棉核心勿機洗",
      description: "小枕面記憶泡棉加入涼感膠粒，價格仍在入門帶。", pros: ["價格低", "涼感膠粒", "人體工學輪廓"], cons: ["高度查不到", "枕面較小", "淨重查不到"], bestFor: "想以低預算試涼感記憶枕且翻身幅度不大者。", recommendation: "缺少高度是主要風險；購前應現場量測或試躺，不用包裝 11 cm 代替本體高度。", warranty: "IKEA 台灣人體工學枕 100 天試用依官網細則；耐用保固年限未標示。", tags: ["入門", "涼感粒子", "小枕面", "台灣官方"],
    },
    {
      id: "pillow-ikea-isranunkel", variantFamily: "ikea-isranunkel", brand: "IKEA", model: "905.767.38", name: "IKEA ISRANUNKEL 蝴蝶型記憶枕 41x71x12 905.767.38", type: "memory_foam", typeSpec: "蝴蝶型記憶泡棉完整成品枕", budget: "mid", rank: 19, score: 80, price: 1299,
      image: "https://www.ikea.com.tw/dairyfarm/tw/images/681/1268133_PE928637_S4.webp", buyUrl: "https://www.ikea.com.tw/zh/products/duvets-pillows-and-protectors/pillows/isranunkel-art-90576738", buyLabel: "IKEA 台灣（905.767.38）",
      sleep: "蝴蝶型，高側適合側／仰睡、低側適合趴睡", cover: "可拆洗布套", core: "超柔軟記憶泡棉", height: "高 12／低 9 cm／柔軟多睡姿支撐", size: "長 41 x 寬 71 x 高 12 cm", weight: "查不到", thermal: "所查頁未標示涼感功能", origin: "產地與第三方認證查不到", care: "布套可拆下以 60°C 機洗；泡棉核心勿機洗",
      description: "蝴蝶輪廓同時保留 9／12 cm 高低側與手臂空間。", pros: ["多睡姿", "寬枕面", "雙高度"], cons: ["造型特殊需試躺", "淨重查不到", "沒有涼感標示"], bestFor: "夜間會換睡姿、希望可抱枕邊但仍是成人頭枕用途者。", recommendation: "這是成人睡眠枕而非抱枕；仍應確認手臂開口是否壓迫肩膀。", warranty: "IKEA 台灣人體工學枕 100 天試用依官網細則；耐用保固年限未標示。", tags: ["多睡姿", "蝴蝶枕型", "雙高度", "台灣官方"],
    },
    {
      id: "pillow-ikea-pilspinnare-high", variantFamily: "ikea-pilspinnare", brand: "IKEA", model: "505.871.16", name: "IKEA PILSPINNARE 羽絨羽毛高枕 50x80 505.871.16", type: "down", typeSpec: "鴨毛／鴨絨完整成品枕", budget: "mid", rank: 20, score: 79, price: 649,
      image: "https://www.ikea.com.tw/dairyfarm/tw/images/007/1300769_PE937182_S4.webp", buyUrl: "https://www.ikea.com.tw/zh/products/duvets-pillows-and-protectors/pillows/pilspinnare-art-50587116", buyLabel: "IKEA 台灣（高枕 505.871.16）",
      sleep: "高枕，側睡／仰睡", cover: "252 織棉質表布", core: "鴨毛與鴨絨，填充物羽毛比例 90%", height: "高枕／飽滿柔軟", size: "長 50 x 寬 80 cm", weight: "1.215 kg", thermal: "棉質透氣排濕", origin: "產地與第三方認證查不到", care: "60°C 機洗；低溫滾筒烘至羽絨羽毛完全乾燥",
      description: "PILSPINNARE 的高枕獨立 SKU，以高羽毛比例提供較飽滿承托。", pros: ["價格親民", "高枕版本明確", "可 60°C 洗"], cons: ["需烘乾設備", "天然填充可能有氣味", "高度沒有公分值"], bestFor: "想用低門檻嘗試天然羽毛高枕的側睡／仰睡者。", recommendation: "高低兩版不可只看相同圖片；購買連結與 SKU 已固定高枕版本。", warranty: "IKEA 台灣官方退換與品質政策；枕芯耐用保固年限未標示。", tags: ["羽絨羽毛", "高枕", "可機洗", "台灣官方"],
    },
    {
      id: "pillow-3m-anti-005", variantFamily: "3m-longlife-antibacterial-washable", brand: "3M", model: "ANTI 005", name: "3M 長效抗菌防蟎水洗枕 加高支撐型 ANTI 005", type: "fiber", typeSpec: "聚酯纖維可水洗完整成品枕", budget: "mid", rank: 21, score: 79, price: 1599,
      image: "https://img.91app.com/webapi/imagesV3/Original/SalePage/7759499/0/639171483716670000?v=1", buyUrl: "https://shop.3m.com.tw/SalePage/Index/7759499", buyLabel: "3M 台灣官方商城（ANTI 005）",
      sleep: "加高支撐型，偏高或偏硬枕需求", cover: "100% 聚酯纖維防蟎表布", core: "再生寶特瓶來源可水洗聚酯纖維棉", height: "高 17–23 cm／加高偏硬支撐", size: "長 70 x 寬 48 x 高 23 cm", weight: "查不到", thermal: "透氣纖維枕心，未標示涼感等級", origin: "BSMI M34661；台灣製造", care: "官方標示可水洗 36 次；依洗標完整乾燥",
      description: "三款同系列中最高且最硬的 ANTI 005，裸枕高度範圍 17–23 cm。", pros: ["加高支撐", "可水洗 36 次", "台灣製造"], cons: ["對多數仰睡者可能過高", "只有包裝重量、淨重查不到", "高度會因使用而變"], bestFor: "肩寬較大、明確偏好高硬枕的側睡成人。", recommendation: "17–23 cm 為可變形範圍，不應視為固定使用高度；先試躺再買。", warranty: "3M 台灣官方通路與客服；耐用保固年限未標示，退換依官方商城條款。", tags: ["加高", "偏硬", "可水洗", "台灣製造"],
    },
    {
      id: "pillow-3m-anti-004", variantFamily: "3m-longlife-antibacterial-washable", brand: "3M", model: "ANTI 004", name: "3M 長效抗菌防蟎水洗枕 加高型 ANTI 004", type: "fiber", typeSpec: "聚酯纖維可水洗完整成品枕", budget: "mid", rank: 22, score: 78, price: 1299,
      image: "https://img.91app.com/webapi/imagesV3/Original/SalePage/7759465/0/639183432440870000?v=1", buyUrl: "https://shop.3m.com.tw/SalePage/Index/7759465", buyLabel: "3M 台灣官方商城（ANTI 004）",
      sleep: "加高型，偏高枕需求", cover: "100% 聚酯纖維防蟎表布", core: "再生寶特瓶來源可水洗聚酯纖維棉", height: "高 15–21 cm／加高柔彈", size: "長 70 x 寬 48 x 高 21 cm", weight: "查不到", thermal: "透氣纖維枕心，未標示涼感等級", origin: "BSMI M34661；台灣製造", care: "官方標示可水洗 36 次；依洗標完整乾燥",
      description: "ANTI 004 是同系列的中間高度版本，適合喜歡較高但不需最硬支撐者。", pros: ["高度版本明確", "可水洗 36 次", "台灣製造"], cons: ["淨重查不到", "15–21 cm 仍偏高", "聚酯纖維會隨使用壓縮"], bestFor: "需要比標準型更高的側睡成人。", recommendation: "先與 ANTI 003／005 的裸枕高度範圍比較，不用包裝外觀選版本。", warranty: "3M 台灣官方通路與客服；耐用保固年限未標示，退換依官方商城條款。", tags: ["加高", "防蟎", "可水洗", "台灣製造"],
    },
    {
      id: "pillow-hola-malaysia-latex-side", variantFamily: "hola-malaysia-latex-side", brand: "HOLA", model: "016582346", name: "HOLA 馬來西亞乳膠枕 正側睡型 H8.5/12.5 016582346", type: "latex", typeSpec: "天然乳膠完整成品枕", budget: "mid", rank: 23, score: 78, price: 1608,
      image: "https://pcm.trplus.com.tw/1000x1000/sys-master/productImages/hd2/h53/12737724088350/000000000016582346-gallery-01-20260527140603838.jpg", buyUrl: "https://www.hola.com.tw/p/016582346", buyLabel: "HOLA 和樂家居（016582346）",
      sleep: "正側兩用，高低區對應仰睡／側睡", cover: "可拆式枕套，纖維比例查不到", core: "馬來西亞 100% 天然乳膠、Dunlop 工藝", height: "高 8.5／12.5 cm／柔 Q 支撐", size: "長 55 x 寬 37 x 高 12.5 cm", weight: "1.01 kg", thermal: "乳膠孔洞透氣", origin: "台灣製造；乳膠原料來自馬來西亞", care: "枕套低溫柔洗；枕芯不可水洗或曝曬",
      description: "55x37 的較小乳膠枕，用 8.5／12.5 cm 高低區支援正側睡。", pros: ["完整尺寸與重量", "高低區", "HOLA 門市可試"], cons: ["枕面較小", "核心不可水洗", "天然乳膠觸感需試"], bestFor: "想在台灣門市試高低區天然乳膠枕者。", recommendation: "官方規格高度以 12.5 cm 為整體高點；不要把名稱中的 8.5 cm 當成全枕高度。", warranty: "HOLA 台灣門市與官網售後；商品保固年限未標示。", tags: ["正側兩用", "天然乳膠", "台灣製造", "門市試躺"],
    },
    {
      id: "pillow-dunlopillo-classic-standard", variantFamily: "dunlopillo-comfort-classic-standard", brand: "Dunlopillo", model: "69e85a35bb09d03c8df9915c", name: "Dunlopillo 護頸經典乳膠枕 基本型 69e85a35bb09d03c8df9915c", type: "latex", typeSpec: "天然乳膠完整成品枕", budget: "mid", rank: 24, score: 77, price: 2299,
      image: "https://img.shoplineapp.com/media/image_clips/6a8ea5794f64309104193ad2/original.png?1787733367=&owner_id=5b0ba3cd8d1db934d500719a", buyUrl: "https://www.dunlopillo.com.tw/products/dunlopillo-natural-latex-pillow-classic-standard", buyLabel: "Dunlopillo 台灣官方（基本型）",
      sleep: "中間高、兩側低的弧面，適合睡中／中低枕與多睡姿", cover: "外枕套材質在確切頁未標示", core: "天然乳膠核心", height: "高 11.5 cm／中低柔彈支撐", size: "長 60 x 寬 40 x 高 11.5 cm", weight: "查不到", thermal: "乳膠彈性與孔洞；涼感等級未標示", origin: "產地與第三方認證在確切頁未標示", care: "確切頁未列清潔方式；乳膠核心避免機洗、曝曬，以產品洗標為準",
      description: "中間 11.5 cm、兩側較低的經典弧面乳膠枕。", pros: ["尺寸與高度清楚", "多睡姿弧面", "台灣代理客服"], cons: ["淨重查不到", "產地與認證未標示", "清潔資訊不足"], bestFor: "偏好中低枕與乳膠回彈、希望台灣官方代理售後者。", recommendation: "官方 JSON-LD SKU 已固定基本型；不要與工學型 2,499 元款混算。", warranty: "Dunlopillo 台灣代理客服；確切頁未列保固年限，依官方售後條款。", tags: ["中低枕", "天然乳膠", "台灣代理"],
    },
    {
      id: "pillow-ikea-senapsmott-high", variantFamily: "ikea-senapsmott-high", brand: "IKEA", model: "705.803.26", name: "IKEA SENAPSMOTT 涼感纖維高枕 50x80 705.803.26", type: "fiber", typeSpec: "嫘縈／聚酯纖維完整成品枕", budget: "mid", rank: 25, score: 77, price: 799,
      image: "https://www.ikea.com.tw/dairyfarm/tw/images/267/1026793_PE834527_S4.webp", buyUrl: "https://www.ikea.com.tw/zh/products/duvets-pillows-and-protectors/pillows/senapsmott-art-70580326", buyLabel: "IKEA 台灣（705.803.26）",
      sleep: "高枕，側睡／仰睡", cover: "聚酯纖維／嫘縈混紡表布，186 織", core: "嫘縈與聚酯纖維混合填充", height: "高枕／柔軟飽滿；公分高度查不到", size: "長 50 x 寬 80 cm", weight: "1.03 kg", thermal: "吸濕透氣散熱布料；官方涼感等級二星", origin: "產地與第三方認證查不到", care: "60°C 機洗並依洗標完全乾燥",
      description: "以吸濕散熱混紡表布與纖維填充，提供可洗的涼感高枕。", pros: ["可 60°C 洗", "官方總重量", "涼感表布"], cons: ["沒有公分高度", "涼感受氣候影響", "高枕需試"], bestFor: "希望整顆可洗、又想兼顧散熱的側睡／仰睡者。", recommendation: "散熱效果依環境不同；仍先以高度與清洗乾燥條件篩選。", warranty: "IKEA 台灣官方退換與品質政策；枕芯耐用保固年限未標示。", tags: ["涼感", "高枕", "可機洗", "台灣官方"],
    },
    {
      id: "pillow-ikea-gaffelklocka", variantFamily: "ikea-gaffelklocka-high", brand: "IKEA", model: "406.286.26", name: "IKEA GAFFELKLOCKA 高支撐纖維枕 50x80 406.286.26", type: "fiber", typeSpec: "空心聚酯纖維完整成品枕", budget: "mid", rank: 26, score: 76, price: 899,
      image: "https://www.ikea.com.tw/dairyfarm/tw/images/386/1438622_PE984835_S4.webp", buyUrl: "https://www.ikea.com.tw/zh/products/duvets-pillows-and-protectors/pillows/gaffelklocka-art-40628626", buyLabel: "IKEA 台灣（406.286.26）",
      sleep: "偏硬高枕，側睡／仰睡", cover: "棉／萊賽爾混紡表布＋側邊網眼布", core: "再生材料空心聚酯纖維", height: "高枕／偏硬支撐；公分高度查不到", size: "長 50 x 寬 80 cm", weight: "0.96 kg", thermal: "棉／萊賽爾排濕與側網眼通風", origin: "通過 CAN/CGSB 4.2 No.27.5 與 EN ISO 12952-1 耐燃測試；產地查不到", care: "60°C 機洗並依洗標完全乾燥",
      description: "偏硬高枕加入側邊網眼，取向是支撐、頻繁清洗與通風。", pros: ["偏硬支撐", "側網眼通風", "可 60°C 洗"], cons: ["高度沒有公分值", "偏硬不適合所有人", "新款使用者資料較少"], bestFor: "需要高硬纖維枕、重視可洗與通風的側睡者。", recommendation: "偏硬和高枕是明確取捨；仰睡者先測是否推高下巴。", warranty: "IKEA 台灣官方退換與品質政策；枕芯耐用保固年限未標示。", tags: ["偏硬", "高枕", "網眼透氣", "台灣官方"],
    },
    {
      id: "pillow-3m-anti-003", variantFamily: "3m-longlife-antibacterial-washable", brand: "3M", model: "ANTI 003", name: "3M 長效抗菌防蟎水洗枕 標準型 ANTI 003", type: "fiber", typeSpec: "聚酯纖維可水洗完整成品枕", budget: "value", rank: 27, score: 76, price: 1199,
      image: "https://img.91app.com/webapi/imagesV3/Original/SalePage/7759430/0/639222290967670000?v=1", buyUrl: "https://shop.3m.com.tw/SalePage/Index/7759430", buyLabel: "3M 台灣官方商城（ANTI 003）",
      sleep: "標準型，喜歡適中或偏軟枕心者", cover: "100% 聚酯纖維防蟎表布", core: "再生寶特瓶來源可水洗聚酯纖維棉", height: "高 13–19 cm／適中或偏軟", size: "長 70 x 寬 48 x 高 19 cm", weight: "查不到", thermal: "透氣纖維枕心，未標示涼感等級", origin: "BSMI M34661；台灣製造", care: "官方標示可水洗 36 次；依洗標完整乾燥",
      description: "同系列標準高度版本，以台灣製、長效抗菌防蟎與可洗為主。", pros: ["台灣製造", "可水洗 36 次", "標準高度家族"], cons: ["淨重查不到", "高度會隨壓縮改變", "聚酯纖維不等同天然填充"], bestFor: "過敏環境中重視整顆可洗與台灣製造的成人。", recommendation: "若肩寬大或習慣高硬枕，再比較 ANTI 004／005，不以包裝重量判斷支撐。", warranty: "3M 台灣官方通路與客服；耐用保固年限未標示。", tags: ["防蟎", "可水洗", "台灣製造", "標準型"],
    },
    {
      id: "pillow-nitori-n-hotel3-std", variantFamily: "nitori-n-hotel3-std", brand: "NITORI", model: "7550721", name: "NITORI 飯店式樣枕 N HOTEL3 STD 7550721", type: "fiber", typeSpec: "超極細聚酯纖維完整成品枕", budget: "value", rank: 28, score: 75, price: 549,
      image: "https://nitorimain.blob.core.windows.net/products/75/7550721_01.jpg", buyUrl: "https://www.nitori-net.tw/product/7550721s", buyLabel: "NITORI 宜得利台灣（7550721）",
      issueSources: [
        { platform: "PTT", targetHost: "ptt.cc", query: "site:ptt.cc \"7550721\" 枕頭", queryUrl: "https://tw.search.yahoo.com/search?p=site%3Aptt.cc%20%227550721%22%20%E6%9E%95%E9%A0%AD" },
        { platform: "Mobile01", targetHost: "mobile01.com", query: "site:mobile01.com \"7550721\" 枕頭", queryUrl: "https://tw.search.yahoo.com/search?p=site%3Amobile01.com%20%227550721%22%20%E6%9E%95%E9%A0%AD" },
      ],
      sleep: "標準尺寸中枕，官方定位適合仰睡", cover: "聚酯纖維 86%／尼龍 14% 緞面觸感表布", core: "100% 超極細聚酯纖維填充", height: "高約 15 cm／偏軟", size: "寬 40 x 深 60 x 高 15 cm", weight: "查不到", thermal: "未標示涼感；超細纖維著重柔順與彈性", origin: "越南製造；第三方認證查不到", care: "使用洗衣網機洗並完全乾燥；枕套另售",
      description: "標準尺寸的飯店式纖維枕，官方以中高度、偏軟與仰睡定位。", pros: ["標準尺寸", "可機洗", "台灣門市通路"], cons: ["只公布填充物重量，淨重查不到", "偏軟支撐因人而異", "未標示涼感"], bestFor: "預算有限、偏好中高度與柔軟飯店式觸感的仰睡成人。", recommendation: "官方 15 cm 是未承壓高度；仍需依肩寬、床墊軟硬與實際頸部對齊試躺。", warranty: "NITORI 宜得利台灣門市與官網售後；保固年限未標示。", tags: ["仰睡推薦", "飯店式", "標準尺寸", "可機洗", "台灣門市"],
    },
    {
      id: "pillow-ikea-bruksvara-high", variantFamily: "ikea-bruksvara-high", brand: "IKEA", model: "205.603.64", name: "IKEA BRUKSVARA 聚酯纖維高枕 50x80 205.603.64", type: "fiber", typeSpec: "聚酯纖維完整成品枕", budget: "value", rank: 29, score: 74, price: 399,
      image: "https://www.ikea.com.tw/dairyfarm/tw/images/816/1181647_PE896725_S4.webp", buyUrl: "https://www.ikea.com.tw/zh/products/duvets-pillows-and-protectors/pillows/bruksvara-art-20560364", buyLabel: "IKEA 台灣（205.603.64）",
      sleep: "高枕，側睡／仰睡", cover: "刷色微纖維表布，158 織", core: "聚酯纖維填充", height: "高枕／柔軟；公分高度查不到", size: "長 50 x 寬 80 cm", weight: "0.88 kg", thermal: "合成纖維透氣快乾，無涼感等級", origin: "產地與第三方認證查不到", care: "60°C 機洗並依洗標完全乾燥",
      description: "400 元內的大尺寸可洗高枕，核心賣點是易保養而不是長期定型。", pros: ["低價", "可 60°C 洗", "總重量明確"], cons: ["高度查不到", "纖維會逐漸壓縮", "無溫控功能"], bestFor: "租屋、備用房或需要經常清洗的成人。", recommendation: "適合低成本試高枕；需接受合成纖維蓬鬆度會隨時間變化。", warranty: "IKEA 台灣官方退換與品質政策；枕芯耐用保固年限未標示。", tags: ["入門", "高枕", "可機洗", "台灣官方"],
    },
    {
      id: "pillow-ikea-pilspinnare-low", variantFamily: "ikea-pilspinnare", brand: "IKEA", model: "905.871.38", name: "IKEA PILSPINNARE 羽絨羽毛低枕 50x80 905.871.38", type: "down", typeSpec: "鴨毛／鴨絨完整成品枕", budget: "value", rank: 30, score: 73, price: 549,
      image: "https://www.ikea.com.tw/dairyfarm/tw/images/007/1300769_PE937182_S4.webp", buyUrl: "https://www.ikea.com.tw/zh/products/duvets-pillows-and-protectors/pillows/pilspinnare-art-90587138", buyLabel: "IKEA 台灣（低枕 905.871.38）",
      sleep: "低枕，官方定位趴睡", cover: "252 織棉質表布", core: "鴨毛與鴨絨填充", height: "低枕／柔軟低支撐", size: "長 50 x 寬 80 cm", weight: "1.065 kg", thermal: "棉質透氣排濕", origin: "產地與第三方認證查不到", care: "60°C 機洗；低溫滾筒烘至羽絨羽毛完全乾燥",
      description: "PILSPINNARE 的低枕獨立 SKU，以趴睡頭頸對齊為主。", pros: ["低價天然填充", "趴睡版本明確", "可 60°C 洗"], cons: ["側睡支撐可能不足", "需烘乾設備", "天然填充可能有氣味"], bestFor: "明確習慣趴睡或偏好低柔枕的成人。", recommendation: "不要因與高枕版同圖而混買；購買網址與 SKU 已固定低枕。", warranty: "IKEA 台灣官方退換與品質政策；枕芯耐用保固年限未標示。", tags: ["趴睡推薦", "低枕", "羽絨羽毛", "台灣官方"],
    },
  ].map(makeProduct);

  dashboard.registerProducts("pillow", products);
})();

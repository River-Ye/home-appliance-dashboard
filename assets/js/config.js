(() => {
  const root = typeof window === "undefined" ? globalThis : window;
  const dashboard = root.applianceDashboard || {};

  const meta = {
    dataDate: "2026-08-31",
    costcoDate: "2026-08-31",
    expectedCategoryCount: 31,
    expectedProductCount: 943,
    cacheVersion: "20260831-110509-catalog",
    exchangeSummary: "USD 1 = TWD 31.649",
  };

  const exchange = {
    source: "ExchangeRate-API",
    date: "2026-08-31 00:02 UTC",
    USD_TWD: 31.649299,
    GBP_TWD: 42.87076447106599,
    EUR_TWD: 36.70356316573794,
    JPY_TWD: 0.19775241807359173,
    CNY_TWD: 4.698696851031383,
    HKD_TWD: 4.036684131717434,
    KRW_TWD: 0.022990974312124667,
  };

  const categories = [
    { id: "tv", label: "電視", group: "影音" },
    { id: "soundbar", label: "Soundbar", group: "影音" },
    { id: "fan", label: "電風扇", group: "空氣環境" },
    { id: "circulator", label: "循環扇", group: "空氣環境" },
    { id: "dehumidifier", label: "除濕機", group: "空氣環境" },
    { id: "purifier", label: "空氣清淨機", group: "空氣環境" },
    { id: "aircon", label: "冷氣", group: "空氣環境" },
    { id: "robot", label: "掃拖機器人", group: "清潔家務" },
    { id: "vacuum", label: "吸塵器", group: "清潔家務" },
    { id: "washer", label: "洗衣機", group: "洗衣家務" },
    { id: "dryer", label: "烘衣機", group: "洗衣家務" },
    { id: "washerdryer", label: "洗烘衣機(多功能型)", group: "洗衣家務" },
    { id: "garmentcare", label: "電子衣櫥（衣物護理機）", group: "洗衣家務" },
    { id: "refrigerator", label: "冰箱", group: "廚房餐飲" },
    { id: "cookware", label: "鍋具", group: "廚房餐飲" },
    { id: "knife", label: "刀具", group: "廚房餐飲" },
    { id: "blender", label: "破壁機", group: "廚房餐飲" },
    { id: "coffee", label: "咖啡機", group: "廚房餐飲" },
    { id: "oven", label: "多功能氣炸烤箱/微波爐", group: "廚房餐飲" },
    { id: "waterdispenser", label: "櫥下飲水機", group: "廚房餐飲" },
    { id: "dishwasher", label: "洗碗機", group: "廚房餐飲" },
    { id: "waterheater", label: "熱水器", group: "衛浴安全" },
    { id: "bidet", label: "免治馬桶", group: "衛浴安全" },
    { id: "smartlock", label: "電子鎖", group: "衛浴安全" },
    { id: "wifi", label: "無線路由器", group: "工作網路" },
    { id: "network-switch", label: "網路交換器", group: "工作網路" },
    { id: "standingdesk", label: "升降桌", group: "工作網路" },
    { id: "chair", label: "電腦椅", group: "工作網路" },
    { id: "monitor", label: "電腦螢幕", group: "工作網路" },
    { id: "monitor-light", label: "螢幕燈", group: "工作網路" },
    { id: "monitorarm", label: "懸臂支架", group: "工作網路" },
  ];

  const products = dashboard.products || [];
  const state = {
    category: "all",
    type: "all",
    brand: "all",
    budget: "all",
    channel: "all",
    sort: "rank",
    search: "",
    compare: new Set(),
    mobileFiltersOpen: false,
    renderLimit: 12,
  };

  const constants = {
    initialProductLimit: 12,
    loadMoreProductCount: 40,
    filterControlNames: ["category", "type", "brand", "budget", "channel", "sort"],
    cacheVersion: meta.cacheVersion,
  };

  function registerProducts(categoryId, items) {
    products.push(...items.map((product) => ({
      ...product,
      category: product.category || categoryId,
    })));
  }

  Object.assign(dashboard, {
    meta,
    exchange,
    categories,
    products,
    state,
    constants,
    categoryById: new Map(categories.map((category) => [category.id, category])),
    registerProducts,
  });

  root.applianceDashboard = dashboard;
})();

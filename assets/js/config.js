(() => {
  const root = typeof window === "undefined" ? globalThis : window;
  const dashboard = root.applianceDashboard || {};

  const exchange = {
    source: "ExchangeRate-API",
    date: "2026-07-07 00:02 UTC",
    USD_TWD: 32.078972,
    GBP_TWD: 42.888,
    EUR_TWD: 36.678,
    JPY_TWD: 0.198,
    CNY_TWD: 4.716,
  };

  const categories = [
    { id: "tv", label: "電視", group: "影音" },
    { id: "soundbar", label: "Soundbar", group: "影音" },
    { id: "fan", label: "電風扇", group: "空氣環境" },
    { id: "circulator", label: "循環扇", group: "空氣環境" },
    { id: "dehumidifier", label: "除濕機", group: "空氣環境" },
    { id: "purifier", label: "空氣清淨機", group: "空氣環境" },
    { id: "robot", label: "掃拖機器人", group: "清潔家務" },
    { id: "vacuum", label: "吸塵器", group: "清潔家務" },
    { id: "washer", label: "洗衣機", group: "洗衣家務" },
    { id: "dryer", label: "烘衣機", group: "洗衣家務" },
    { id: "washerdryer", label: "洗烘衣機(多功能型)", group: "洗衣家務" },
    { id: "refrigerator", label: "冰箱", group: "廚房餐飲" },
    { id: "cookware", label: "鍋具", group: "廚房餐飲" },
    { id: "knife", label: "刀具", group: "廚房餐飲" },
    { id: "blender", label: "破壁機", group: "廚房餐飲" },
    { id: "oven", label: "多功能氣炸烤箱/微波爐", group: "廚房餐飲" },
    { id: "waterdispenser", label: "櫥下飲水機", group: "廚房餐飲" },
    { id: "dishwasher", label: "洗碗機", group: "廚房餐飲" },
    { id: "bidet", label: "免治馬桶", group: "衛浴安全" },
    { id: "smartlock", label: "電子鎖", group: "衛浴安全" },
    { id: "wifi", label: "無線路由器", group: "工作網路" },
    { id: "standingdesk", label: "升降桌", group: "工作網路" },
    { id: "chair", label: "電腦椅", group: "工作網路" },
    { id: "monitor", label: "電腦螢幕", group: "工作網路" },
    { id: "monitorarm", label: "懸臂支架", group: "工作網路" },
  ];

  const products = dashboard.products || [];
  const state = {
    category: "all",
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
    filterControlNames: ["category", "brand", "budget", "channel", "sort"],
    cacheVersion: "20260708-refactor1",
  };

  function registerProducts(categoryId, items) {
    products.push(...items.map((product) => ({
      ...product,
      category: product.category || categoryId,
    })));
  }

  Object.assign(dashboard, {
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

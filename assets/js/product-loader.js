(() => {
  const dashboard = globalThis.applianceDashboard;
  const loadedCategoryIds = new Set();

  function productScriptUrl(category) {
    const version = encodeURIComponent(dashboard.meta.cacheVersion);
    return `./products/${encodeURIComponent(category.id)}.js?v=${version}`;
  }

  function productCountForCategory(categoryId) {
    return dashboard.products.filter((product) => product.category === categoryId).length;
  }

  function loadCategory(category) {
    if (loadedCategoryIds.has(category.id)) return Promise.resolve();

    return new Promise((resolve, reject) => {
      if (typeof document === "undefined") {
        reject(new Error("Product scripts can only be loaded in a browser document"));
        return;
      }

      const existingCategoryCount = productCountForCategory(category.id);
      const script = document.createElement("script");
      script.src = productScriptUrl(category);
      script.async = false;
      script.onload = () => {
        if (productCountForCategory(category.id) <= existingCategoryCount) {
          reject(new Error(`Product category did not register items: ${category.id}`));
          return;
        }
        loadedCategoryIds.add(category.id);
        resolve();
      };
      script.onerror = () => reject(new Error(`Unable to load product script: ${category.id}`));
      document.head.append(script);
    });
  }

  function loadAll() {
    return Promise.all(dashboard.categories.map((category) => loadCategory(category)))
      .then(() => undefined);
  }

  dashboard.productLoader = {
    productScriptUrl,
    loadCategory,
    loadAll,
  };
})();

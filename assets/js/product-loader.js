(() => {
  const dashboard = globalThis.applianceDashboard;
  const loadedCategoryIds = new Set();

  function productScriptUrl(category) {
    const version = encodeURIComponent(dashboard.meta.cacheVersion);
    return `./products/${encodeURIComponent(category.id)}.js?v=${version}`;
  }

  function loadCategory(category) {
    if (loadedCategoryIds.has(category.id)) return Promise.resolve();

    return new Promise((resolve, reject) => {
      if (typeof document === "undefined") {
        reject(new Error("Product scripts can only be loaded in a browser document"));
        return;
      }

      const existingCount = dashboard.products.length;
      const script = document.createElement("script");
      script.src = productScriptUrl(category);
      script.async = false;
      script.onload = () => {
        const categoryLoaded = dashboard.products.some((product) => product.category === category.id);
        if (!categoryLoaded || dashboard.products.length === existingCount) {
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
    return dashboard.categories.reduce(
      (promise, category) => promise.then(() => loadCategory(category)),
      Promise.resolve(),
    );
  }

  dashboard.productLoader = {
    productScriptUrl,
    loadCategory,
    loadAll,
  };
})();

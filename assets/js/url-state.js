(() => {
  const dashboard = globalThis.applianceDashboard;
  const {
    constants,
    filters,
    state,
  } = dashboard;

  const queryKeys = {
    search: "q",
    category: "category",
    type: "type",
    brand: "brand",
    budget: "budget",
    channel: "channel",
    sort: "sort",
  };

  function hasBrowserLocation() {
    return Boolean(globalThis.location && globalThis.history && globalThis.URLSearchParams);
  }

  function isValidFilterValue(name, value) {
    if (!value) return false;
    return filters.filterOptions(name).some((option) => option.value === value);
  }

  function applyFilterParam(params, name) {
    const value = params.get(queryKeys[name]);
    if (!isValidFilterValue(name, value)) return;
    filters.applyFilterValue(name, value);
  }

  function applyCategoryFromHash() {
    const hash = globalThis.location.hash || "";
    const params = new URLSearchParams(hash.replace(/^#/, ""));
    const currentValue = params.get(queryKeys.category);
    const value = currentValue || dashboard.initialCategoryFragment;
    dashboard.initialCategoryFragment = "";
    if (!isValidFilterValue("category", value)) return null;
    filters.applyFilterValue("category", value);
    return currentValue ? "current" : "bootstrap";
  }

  function applyFromQuery() {
    if (!hasBrowserLocation()) return;
    const params = new URLSearchParams(globalThis.location.search || "");
    const search = params.get(queryKeys.search);
    if (search !== null) {
      state.search = search.trim();
    }

    let categorySource = null;
    if (params.has(queryKeys.category)) {
      dashboard.initialCategoryFragment = "";
      applyFilterParam(params, "category");
    } else {
      categorySource = applyCategoryFromHash();
    }
    applyFilterParam(params, "budget");
    applyFilterParam(params, "channel");
    applyFilterParam(params, "sort");
    const requestedType = params.get(queryKeys.type);
    applyFilterParam(params, "type");
    applyFilterParam(params, "brand");
    filters.ensureSelectedBrandIsAvailable();
    filters.ensureSelectedTypeIsAvailable();
    const invalidType = params.has(queryKeys.type)
      && (state.type === "all" || state.type !== requestedType);
    if (categorySource === "bootstrap" || invalidType) {
      syncToQuery();
    }
  }

  function appendIfActive(params, name, defaultValue) {
    if (state[name] !== defaultValue) {
      params.set(queryKeys[name], state[name]);
    }
  }

  function syncToQuery() {
    if (!hasBrowserLocation()) return;
    const params = new URLSearchParams();
    const search = state.search.trim();
    if (search) {
      params.set(queryKeys.search, search);
    }
    appendIfActive(params, "category", "all");
    appendIfActive(params, "type", "all");
    appendIfActive(params, "brand", "all");
    appendIfActive(params, "budget", "all");
    appendIfActive(params, "channel", "all");
    appendIfActive(params, "sort", "rank");

    const nextUrl = new URL(globalThis.location.href);
    nextUrl.search = params.toString();
    const hashParams = new URLSearchParams(nextUrl.hash.replace(/^#/, ""));
    if (hashParams.has(queryKeys.category)) {
      nextUrl.hash = "";
    }
    const nextHref = nextUrl.href;
    if (nextHref !== globalThis.location.href) {
      globalThis.history.replaceState(null, "", nextHref);
    }
  }

  function preserveCategoryAcrossAnchorNavigation() {
    if (!hasBrowserLocation() || state.category === "all") return;

    const hashParams = new URLSearchParams((globalThis.location.hash || "").replace(/^#/, ""));
    if (!globalThis.location.hash || hashParams.has(queryKeys.category)) return;

    const queryParams = new URLSearchParams(globalThis.location.search || "");
    if (queryParams.get(queryKeys.category) === state.category) return;

    syncToQuery();
  }

  dashboard.urlState = {
    queryKeys,
    applyFromQuery,
    preserveCategoryAcrossAnchorNavigation,
    syncToQuery,
  };
})();

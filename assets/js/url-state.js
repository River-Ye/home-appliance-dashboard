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

  function applyFromQuery() {
    if (!hasBrowserLocation()) return;
    const params = new URLSearchParams(globalThis.location.search || "");
    const search = params.get(queryKeys.search);
    if (search !== null) {
      state.search = search.trim();
    }

    applyFilterParam(params, "category");
    applyFilterParam(params, "budget");
    applyFilterParam(params, "channel");
    applyFilterParam(params, "sort");
    applyFilterParam(params, "brand");
    filters.ensureSelectedBrandIsAvailable();
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
    appendIfActive(params, "brand", "all");
    appendIfActive(params, "budget", "all");
    appendIfActive(params, "channel", "all");
    appendIfActive(params, "sort", "rank");

    const nextUrl = new URL(globalThis.location.href);
    nextUrl.search = params.toString();
    const nextHref = nextUrl.href;
    if (nextHref !== globalThis.location.href) {
      globalThis.history.replaceState(null, "", nextHref);
    }
  }

  dashboard.urlState = {
    queryKeys,
    applyFromQuery,
    syncToQuery,
  };
})();

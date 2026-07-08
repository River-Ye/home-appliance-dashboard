(() => {
  const dashboard = globalThis.applianceDashboard;
  const currencyFormatter = new Intl.NumberFormat("zh-TW", {
    maximumFractionDigits: 0,
  });

  function formatTwd(value) {
    return `NT$${currencyFormatter.format(value)}`;
  }

  function formatOriginal(price) {
    if (price.currency === "TWD") {
      return `TWD ${currencyFormatter.format(price.amount)}`;
    }
    return `${price.currency} ${price.amount.toLocaleString(undefined, {
      minimumFractionDigits: price.amount % 1 ? 2 : 0,
      maximumFractionDigits: 2,
    })}`;
  }

  function budgetLabel(value) {
    return {
      value: "CP 值",
      mid: "均衡",
      premium: "旗艦",
    }[value] || value;
  }

  function channelLabel(value) {
    return value === "global" ? "海外通路" : "台灣通路";
  }

  function normalizeText(value) {
    return String(value || "").trim().toLowerCase();
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function productText(product) {
    return [
      product.brand,
      product.model,
      product.name,
      product.description,
      product.bestFor,
      product.recommendation,
      product.releaseDate,
      (product.specs || []).join(" "),
      (product.tags || []).join(" "),
    ].join(" ").toLowerCase();
  }

  dashboard.utils = {
    formatTwd,
    formatOriginal,
    budgetLabel,
    channelLabel,
    normalizeText,
    escapeHtml,
    productText,
  };
})();

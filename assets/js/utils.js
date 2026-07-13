(() => {
  const dashboard = globalThis.applianceDashboard;
  const currencyFormatter = new Intl.NumberFormat("zh-TW", {
    maximumFractionDigits: 0,
  });

  function formatTwd(value) {
    return `NT$${currencyFormatter.format(value)}`;
  }

  function formatCurrencyAmount(currency, amount) {
    if (amount === null || amount === undefined || amount === "") {
      return "找不到";
    }
    if (currency === "TWD") {
      return `TWD ${currencyFormatter.format(amount)}`;
    }
    return `${currency} ${amount.toLocaleString(undefined, {
      minimumFractionDigits: amount % 1 ? 2 : 0,
      maximumFractionDigits: 2,
    })}`;
  }

  function formatOriginal(price) {
    return formatCurrencyAmount(price.currency, price.amount);
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
    return String(value || "")
      .normalize("NFKC")
      .toLowerCase()
      .replace(/\bwi[\s\p{P}\p{S}]*fi\b/gu, "wifi")
      .replace(/(\d+(?:\.\d+)?)\s+(cm|mm|kg|hz|mah|wh|tb|gb|w|v|l|g)\b/gu, "$1$2")
      .replace(/(\d+(?:\.\d+)?)\s+(吋|公分|公斤|公升|克)/gu, "$1$2")
      .replace(/(\d)\.(?=\d)/g, "$1\uE000")
      .replace(/[\p{P}\p{S}]+/gu, " ")
      .replaceAll("\uE000", ".")
      .trim()
      .replace(/\s+/g, " ");
  }

  function searchTokens(value) {
    return normalizeText(value).split(" ").filter(Boolean);
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function safeHttpUrl(value) {
    try {
      const parsed = new URL(String(value || ""));
      return parsed.protocol === "http:" || parsed.protocol === "https:"
        ? parsed.href
        : "";
    } catch (_error) {
      return "";
    }
  }

  function issueResearchText(product) {
    const research = product.issueResearch || {};
    const issueText = Array.isArray(research.issues)
      ? research.issues.flatMap((issue) => [
        issue.title,
        issue.detail,
        `${issue.reportCount || 0} 位獨立使用者`,
        ...(issue.sources || []).flatMap((source) => [source.platform, source.title]),
      ])
      : [];
    return [research.status, research.summary, research.checkedAt, ...issueText]
      .filter(Boolean)
      .join(" ");
  }

  function productText(product) {
    const category = dashboard.categoryById.get(product.category) || {};
    return normalizeText([
      category.label,
      category.group,
      budgetLabel(product.budget),
      channelLabel(product.channel),
      product.brand,
      product.model,
      product.name,
      product.description,
      product.bestFor,
      product.recommendation,
      product.releaseDate,
      product.historicalLow?.status,
      product.historicalLow?.sourceTitle,
      product.historicalLow?.note,
      product.buyLabel,
      issueResearchText(product),
      (product.specs || []).join(" "),
      (product.tags || []).join(" "),
    ].join(" "));
  }

  dashboard.utils = {
    formatTwd,
    formatCurrencyAmount,
    formatOriginal,
    budgetLabel,
    channelLabel,
    normalizeText,
    searchTokens,
    escapeHtml,
    safeHttpUrl,
    issueResearchText,
    productText,
  };
})();

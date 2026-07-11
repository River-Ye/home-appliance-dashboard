const {
  EXPECTED_PRODUCT_COUNT,
} = require("./dashboard-contract");

const EXPECTED_PRODUCT_COUNT_TEXT = String(EXPECTED_PRODUCT_COUNT);

async function waitForImages(page) {
  await page.waitForFunction(() => {
    const images = Array.from(document.images).filter((image) => {
      const rect = image.getBoundingClientRect();
      return rect.bottom >= 0
        && rect.right >= 0
        && rect.top <= window.innerHeight
        && rect.left <= window.innerWidth;
    });
    return images.length > 0 && images.every((image) => image.complete);
  }, { timeout: 3000 });
}

async function visibleText(page, selector) {
  return page.locator(selector).innerText();
}

async function waitForProductCards(page, count) {
  await page.waitForFunction((expected) => {
    return document.querySelectorAll(".product-card").length === expected;
  }, count);
}

async function loadAllVisibleProducts(page) {
  const loadAllButton = page.locator("#loadAllProducts");
  if (await loadAllButton.isVisible()) {
    await loadAllButton.click();
  }
  await page.waitForFunction(() => {
    const matched = Number(document.querySelector("#visibleCount")?.textContent || 0);
    const rendered = document.querySelectorAll(".product-card").length;
    return matched === 0 ? rendered === 0 : rendered === matched;
  });
}

async function assertProductImagesStayInsideWrap(page, name) {
  const failures = await page.$$eval(".product-card", (cards) => {
    const tolerance = 1;
    const rectFor = (element) => {
      const rect = element.getBoundingClientRect();
      return {
        top: Math.round(rect.top),
        right: Math.round(rect.right),
        bottom: Math.round(rect.bottom),
        left: Math.round(rect.left),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      };
    };

    return cards.flatMap((card, index) => {
      const wrap = card.querySelector(".image-wrap");
      const image = wrap?.querySelector("img");
      if (!wrap || !image || getComputedStyle(image).display === "none") return [];

      const wrapRect = wrap.getBoundingClientRect();
      const imageRect = image.getBoundingClientRect();
      const outside = {
        top: imageRect.top < wrapRect.top - tolerance,
        right: imageRect.right > wrapRect.right + tolerance,
        bottom: imageRect.bottom > wrapRect.bottom + tolerance,
        left: imageRect.left < wrapRect.left - tolerance,
      };

      if (!Object.values(outside).some(Boolean)) return [];

      return [{
        index,
        title: card.querySelector("h3")?.textContent?.trim() || "unknown product",
        wrap: rectFor(wrap),
        image: rectFor(image),
        outside,
      }];
    });
  });

  if (failures.length) {
    throw new Error(`${name}: product image overflow ${JSON.stringify(failures.slice(0, 3))}`);
  }
}

async function assertHistoricalLowLayout(page, name) {
  const failures = await page.$$eval(".product-card", (cards) => {
    const tolerance = 1;
    const rectFor = (element) => {
      const rect = element.getBoundingClientRect();
      return {
        top: Math.round(rect.top),
        right: Math.round(rect.right),
        bottom: Math.round(rect.bottom),
        left: Math.round(rect.left),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      };
    };
    const overlaps = (a, b) => (
      a.left < b.right - tolerance
      && a.right > b.left + tolerance
      && a.top < b.bottom - tolerance
      && a.bottom > b.top + tolerance
    );

    return cards.flatMap((card, index) => {
      const priceRow = card.querySelector(".price-row");
      const currentPrice = priceRow?.firstElementChild;
      const insight = priceRow?.querySelector(".price-insight");
      const score = priceRow?.querySelector(".score");
      if (!priceRow || !currentPrice || !insight || !score) return [];

      const cardRect = card.getBoundingClientRect();
      const priceRect = priceRow.getBoundingClientRect();
      const currentRect = currentPrice.getBoundingClientRect();
      const insightRect = insight.getBoundingClientRect();
      const scoreRect = score.getBoundingClientRect();
      const issues = [];

      if (priceRow.scrollWidth > priceRow.clientWidth + tolerance) {
        issues.push("price-row horizontal overflow");
      }
      if (currentPrice.scrollWidth > currentPrice.clientWidth + tolerance) {
        issues.push("current price text overflow");
      }
      if (insight.scrollWidth > insight.clientWidth + tolerance) {
        issues.push("historical-low text overflow");
      }
      if (priceRect.right > cardRect.right + tolerance || priceRect.left < cardRect.left - tolerance) {
        issues.push("price-row outside card");
      }
      if (overlaps(currentRect, insightRect)) {
        issues.push("current price overlaps historical low");
      }
      if (overlaps(scoreRect, insightRect)) {
        issues.push("score overlaps historical low");
      }
      if (overlaps(currentRect, scoreRect)) {
        issues.push("current price overlaps score");
      }

      if (!issues.length) return [];
      return [{
        index,
        title: card.querySelector("h3")?.textContent?.trim() || "unknown product",
        issues,
        currentPrice: rectFor(currentPrice),
        historicalLow: rectFor(insight),
        score: rectFor(score),
        priceRow: rectFor(priceRow),
        card: rectFor(card),
      }];
    });
  });

  if (failures.length) {
    throw new Error(`${name}: historical low layout failures ${JSON.stringify(failures.slice(0, 3))}`);
  }
}

async function assertHistoricalLowCompareLayout(page, name) {
  const failures = await page.$$eval("#compareTable tr", (rows) => {
    const tolerance = 1;
    const historicalRow = rows.find((row) => row.textContent.includes("歷史最低價 / 入手時機"));
    if (!historicalRow) return [{ issue: "missing historical low compare row" }];

    return Array.from(historicalRow.children).flatMap((cell, index) => {
      if (cell.scrollWidth <= cell.clientWidth + tolerance) return [];
      const rect = cell.getBoundingClientRect();
      return [{
        index,
        issue: "historical low compare cell overflow",
        text: cell.textContent.trim().slice(0, 80),
        width: Math.round(rect.width),
        scrollWidth: cell.scrollWidth,
      }];
    });
  });

  if (failures.length) {
    throw new Error(`${name}: compare table historical low layout failures ${JSON.stringify(failures.slice(0, 3))}`);
  }
}

async function assertIssueResearchCards(page, name) {
  const failures = await page.$$eval(".product-card", (cards) => {
    const tolerance = 1;
    const safeProtocols = new Set(["http:", "https:"]);

    return cards.flatMap((card, index) => {
      const section = card.querySelector(".issue-research");
      if (!section) return [{ index, issue: "missing issue research block" }];

      const issues = [];
      const status = section.getAttribute("data-issue-status");
      const text = section.textContent || "";
      const links = [...section.querySelectorAll("a[href]")];
      if (!text.includes("負評／災情查核")) issues.push("missing visible issue research label");
      if (!/\d{4}-\d{2}-\d{2}/.test(text)) issues.push("missing checked date");
      if (!new Set(["common_issue", "no_common_issue"]).has(status)) issues.push(`invalid semantic status ${status}`);
      if (section.scrollWidth > section.clientWidth + tolerance) issues.push("issue block horizontal overflow");

      for (const link of links) {
        if (!safeProtocols.has(link.protocol)) issues.push(`unsafe source protocol ${link.protocol}`);
        if (link.scrollWidth > link.clientWidth + tolerance) issues.push("source link does not wrap");
      }

      if (status === "common_issue") {
        if (!/(?:⚠|注意|多人反映)/.test(text)) issues.push("warning status relies on color alone");
        if (!/6\s*(?:位|人)|[7-9]\s*(?:位|人)|\d{2,}\s*(?:位|人)/.test(text)) issues.push("missing report count of at least 6");
        if (links.length < 2) issues.push("common issue has fewer than two source links");
        const style = getComputedStyle(section);
        if (style.backgroundColor === "rgba(0, 0, 0, 0)" || style.backgroundColor === "transparent") {
          issues.push("warning block lacks visible background color");
        }
      }

      if (status === "no_common_issue") {
        if (!text.includes("截至查核日，查無達門檻的集中負評／災情")) issues.push("missing agreed no-common-issue wording");
        if (!text.includes("查核紀錄")) issues.push("missing checked-source label");
        if (links.length < 2) issues.push("no-common-issue state has fewer than two checked-source links");
      }

      return issues.length ? [{
        index,
        title: card.querySelector("h3")?.textContent?.trim() || "unknown product",
        issues,
      }] : [];
    });
  });

  if (failures.length) {
    throw new Error(`${name}: issue research card failures ${JSON.stringify(failures.slice(0, 5))}`);
  }
}

async function assertIssueResearchCompareRow(page, name) {
  const rows = page.locator("#compareTable tr", { hasText: "負評／災情" });
  if (await rows.count() !== 1) throw new Error(`${name}: compare table missing issue research row`);
  const row = rows.first();
  if (!/\d{4}-\d{2}-\d{2}/.test(await row.innerText())) {
    throw new Error(`${name}: compare issue research row missing checked date`);
  }
}

async function assertSingleCompareFitsViewport(page, name) {
  const failures = await page.$$eval("#compareTable .compare-table", (tables) => {
    const tolerance = 2;
    return tables.flatMap((table) => {
      const wrap = table.closest(".compare-table-wrap");
      const firstRow = table.querySelector("tr");
      const comparedItems = firstRow ? Math.max(0, firstRow.children.length - 1) : 0;
      if (window.innerWidth >= 700 || comparedItems !== 1) return [];

      const issues = [];
      if (wrap && table.scrollWidth > wrap.clientWidth + tolerance) {
        issues.push("single compare table requires horizontal scroll");
      }

      const overflowingCells = [...table.querySelectorAll("th, td")]
        .filter((cell) => cell.scrollWidth > cell.clientWidth + tolerance)
        .slice(0, 5)
        .map((cell) => ({
          text: cell.textContent.trim().slice(0, 80),
          clientWidth: cell.clientWidth,
          scrollWidth: cell.scrollWidth,
        }));

      if (overflowingCells.length) {
        issues.push({ overflowingCells });
      }

      return issues.length ? [{ issues }] : [];
    });
  });

  if (failures.length) {
    throw new Error(`${name}: mobile single compare layout failures ${JSON.stringify(failures.slice(0, 3))}`);
  }
}

async function assertProductDetailsDisclosure(page, name) {
  const details = page.locator(".product-card details.card-details").first();
  if (!await details.count()) throw new Error(`${name}: product cards missing details disclosure`);
  const initiallyOpen = await details.evaluate((node) => node.open);
  if (initiallyOpen) throw new Error(`${name}: product details should be collapsed by default`);

  await details.locator("summary").click();
  const opened = await details.evaluate((node) => node.open);
  if (!opened) throw new Error(`${name}: product details did not open`);
  await assertNoHorizontalOverflow(page, `${name} details open`);
  const stretchedPeers = await page.evaluate(() => {
    if (window.innerWidth < 700) return [];
    const cards = [...document.querySelectorAll(".product-card")];
    const openedCard = cards.find((card) => card.querySelector("details.card-details[open]"));
    if (!openedCard) return ["missing opened card"];
    const openedRect = openedCard.getBoundingClientRect();
    const peers = cards.filter((card) => {
      if (card === openedCard) return false;
      return Math.abs(card.getBoundingClientRect().top - openedRect.top) <= 2;
    });
    if (!peers.length) return [];
    return peers
      .filter((card) => card.getBoundingClientRect().height >= openedRect.height - 40)
      .map((card) => ({
        openedHeight: Math.round(openedRect.height),
        peerHeight: Math.round(card.getBoundingClientRect().height),
        peerId: card.dataset.productId,
      }));
  });
  if (stretchedPeers.length) {
    throw new Error(`${name}: collapsed cards stretched to opened-card height ${JSON.stringify(stretchedPeers.slice(0, 3))}`);
  }

  await details.locator("summary").click();
  const closed = await details.evaluate((node) => !node.open);
  if (!closed) throw new Error(`${name}: product details did not close`);
}

async function assertMobileDockClearance(page, name) {
  const result = await page.evaluate(() => {
    if (window.innerWidth > 620) return null;
    const dock = document.querySelector(".mobile-dock");
    if (!dock) return { issue: "missing mobile dock" };
    const dockRect = dock.getBoundingClientRect();
    const bodyPaddingBottom = Number.parseFloat(getComputedStyle(document.body).paddingBottom || "0");
    return {
      dockHeight: Math.round(dockRect.height),
      bodyPaddingBottom: Math.round(bodyPaddingBottom),
    };
  });

  if (!result) return;
  if (result.issue) throw new Error(`${name}: ${result.issue}`);
  if (result.bodyPaddingBottom < result.dockHeight + 16) {
    throw new Error(`${name}: mobile dock clearance too small ${JSON.stringify(result)}`);
  }
}

async function assertMobileFloatingControlsDoNotOverlap(page, name) {
  if (await page.evaluate(() => window.innerWidth > 620)) return;

  await page.locator(".pick-card").first().evaluate((card) => {
    const rect = card.getBoundingClientRect();
    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, Math.max(0, window.scrollY + rect.top - 48));
    html.style.scrollBehavior = previousScrollBehavior;
  });
  await page.waitForFunction(() => {
    const visiblePick = [...document.querySelectorAll(".pick-card")].some((card) => {
      const rect = card.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    });
    return visiblePick && !document.body.classList.contains("show-mobile-dock");
  });
  const earlyRecommendationState = await page.evaluate(() => ({
    dockVisible: document.body.classList.contains("show-mobile-dock"),
    visiblePick: [...document.querySelectorAll(".pick-card")].some((card) => {
      const rect = card.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    }),
  }));
  if (earlyRecommendationState.dockVisible || !earlyRecommendationState.visiblePick) {
    throw new Error(`${name}: mobile utility band should stay hidden over recommendation cards ${JSON.stringify(earlyRecommendationState)}`);
  }

  await page.locator(".result-toolbar").evaluate((toolbar) => {
    const rect = toolbar.getBoundingClientRect();
    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, Math.max(0, window.scrollY + rect.top - 72));
    html.style.scrollBehavior = previousScrollBehavior;
  });
  await page.waitForFunction(() => document.body.classList.contains("show-mobile-dock"));
  await page.waitForTimeout(220);

  const collisions = await page.evaluate(() => {
    const rectFor = (element) => {
      const rect = element.getBoundingClientRect();
      return {
        top: Math.round(rect.top),
        right: Math.round(rect.right),
        bottom: Math.round(rect.bottom),
        left: Math.round(rect.left),
      };
    };
    const overlaps = (a, b) => (
      a.left < b.right
      && a.right > b.left
      && a.top < b.bottom
      && a.bottom > b.top
    );
    const jumpButtons = [...document.querySelectorAll(".page-jump-button")]
      .filter((element) => getComputedStyle(element).visibility !== "hidden")
      .map((element) => ({ label: element.getAttribute("aria-label"), rect: rectFor(element) }));
    const dockRect = rectFor(document.querySelector(".mobile-dock"));
    const protectedControls = [
      ...document.querySelectorAll(".result-actions button:not([hidden]), .mobile-dock a"),
    ].filter((element) => getComputedStyle(element).visibility !== "hidden")
      .map((element) => ({ label: element.textContent.trim(), rect: rectFor(element) }));

    const controlCollisions = jumpButtons.flatMap((jump) => protectedControls
      .filter((control) => overlaps(jump.rect, control.rect))
      .map((control) => ({ jump, control })));
    const bandViolations = jumpButtons
      .filter((jump) => jump.rect.top < dockRect.top || jump.rect.bottom > dockRect.bottom)
      .map((jump) => ({ jump, control: { label: "mobile utility band", rect: dockRect } }));

    return [...controlCollisions, ...bandViolations];
  });

  if (collisions.length) {
    throw new Error(`${name}: mobile floating controls overlap ${JSON.stringify(collisions)}`);
  }
}

async function assertAccessibleStructure(page, name) {
  const result = await page.evaluate(() => {
    const headings = [...document.querySelectorAll("h1, h2, h3, h4, h5, h6")].map((heading) => ({
      level: Number(heading.tagName.slice(1)),
      text: heading.textContent.trim(),
    }));
    const jumps = headings.flatMap((heading, index) => {
      if (!index) return heading.level === 1 ? [] : [{ index, from: 0, to: heading.level, text: heading.text }];
      const previous = headings[index - 1];
      return heading.level > previous.level + 1
        ? [{ index, from: previous.level, to: heading.level, text: heading.text }]
        : [];
    });
    return {
      h1Count: headings.filter((heading) => heading.level === 1).length,
      h2Texts: headings.filter((heading) => heading.level === 2).map((heading) => heading.text),
      jumps,
      placeholdersWithoutEllipsis: [...document.querySelectorAll("input[placeholder]")]
        .map((input) => input.getAttribute("placeholder"))
        .filter((placeholder) => placeholder && !placeholder.endsWith("…")),
    };
  });

  if (result.h1Count !== 1) throw new Error(`${name}: expected one h1, got ${result.h1Count}`);
  for (const expected of ["每類推薦", "商品列表", "比較清單"]) {
    if (!result.h2Texts.includes(expected)) throw new Error(`${name}: missing h2 ${expected}`);
  }
  if (result.jumps.length) throw new Error(`${name}: heading hierarchy jumps ${JSON.stringify(result.jumps.slice(0, 5))}`);
  if (result.placeholdersWithoutEllipsis.length) {
    throw new Error(`${name}: placeholders missing ellipsis ${JSON.stringify(result.placeholdersWithoutEllipsis)}`);
  }
}

async function assertPremiumBadgeContrast(page, name) {
  const result = await page.evaluate(() => {
    const badge = document.querySelector(".badge.premium");
    if (!badge) return { issue: "missing premium badge" };
    const parse = (value) => {
      const channels = value.match(/[\d.]+/g)?.slice(0, 3).map(Number) || [];
      return channels.map((channel) => channel / 255);
    };
    const luminance = (channels) => channels
      .map((channel) => channel <= 0.04045
        ? channel / 12.92
        : ((channel + 0.055) / 1.055) ** 2.4)
      .reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
    const style = getComputedStyle(badge);
    const foreground = luminance(parse(style.color));
    const background = luminance(parse(style.backgroundColor));
    const ratio = (Math.max(foreground, background) + 0.05) / (Math.min(foreground, background) + 0.05);
    return { ratio, color: style.color, backgroundColor: style.backgroundColor };
  });

  if (result.issue) throw new Error(`${name}: ${result.issue}`);
  if (result.ratio < 4.5) throw new Error(`${name}: premium badge contrast below 4.5 ${JSON.stringify(result)}`);
}

async function assertCompareRowHeaders(page, name) {
  const invalidHeaders = await page.locator('#compareTable th:not([scope="row"])').count();
  if (invalidHeaders) throw new Error(`${name}: ${invalidHeaders} compare row headers missing scope=row`);
}


async function assertNoHorizontalOverflow(page, name) {
  const overflow = await page.evaluate(() => {
    const root = document.documentElement;
    return root.scrollWidth - window.innerWidth;
  });
  if (overflow > 2) throw new Error(`${name}: horizontal overflow ${overflow}px`);
}

async function resetFilters(page) {
  await page.getByRole("button", { name: "重設篩選" }).click();
  await page.waitForFunction((expected) => {
    return document.querySelector("#visibleCount")?.textContent?.trim() === expected;
  }, EXPECTED_PRODUCT_COUNT_TEXT);
  await waitForProductCards(page, 12);
}

async function selectComboboxOption(page, inputSelector, optionSelector, query) {
  await page.fill(inputSelector, query);
  await page.locator(optionSelector).click();
}


module.exports = {
  waitForImages,
  visibleText,
  waitForProductCards,
  loadAllVisibleProducts,
  assertProductImagesStayInsideWrap,
  assertHistoricalLowLayout,
  assertHistoricalLowCompareLayout,
  assertIssueResearchCards,
  assertIssueResearchCompareRow,
  assertSingleCompareFitsViewport,
  assertProductDetailsDisclosure,
  assertMobileDockClearance,
  assertMobileFloatingControlsDoNotOverlap,
  assertAccessibleStructure,
  assertPremiumBadgeContrast,
  assertCompareRowHeaders,
  assertNoHorizontalOverflow,
  resetFilters,
  selectComboboxOption,
};

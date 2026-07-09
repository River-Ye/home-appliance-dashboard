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
  assertSingleCompareFitsViewport,
  assertNoHorizontalOverflow,
  resetFilters,
  selectComboboxOption,
};

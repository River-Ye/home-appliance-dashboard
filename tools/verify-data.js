const fs = require("fs");
const path = require("path");
const {
  EXPECTED_CATEGORY_COUNT,
  EXPECTED_PRODUCT_COUNT,
  MIN_PRODUCTS_PER_CATEGORY,
  DATE_PATTERN,
  WASHER_DRYER_CAPACITY_PATTERN,
  DIMENSION_CATEGORY_COUNTS,
  DIMENSION_CATEGORIES,
  EXPECTED_DIMENSION_PRODUCT_COUNT,
  DIMENSION_PATTERN,
  DIMENSION_CONFIDENCE_VALUES,
  HISTORICAL_LOW_STATUSES,
  HISTORICAL_LOW_SOURCE_KINDS,
  HISTORICAL_LOW_CONFIDENCE_VALUES,
  REQUIRED_CATEGORY_TERMS,
  CATEGORY_TEXT_MATCH_COUNTS,
  REQUIRED_FIELDS,
} = require("./dashboard-contract");
const { readDashboardProducts } = require("./read-dashboard-products");

function normalize(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
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
    product.historicalLow?.status,
    product.historicalLow?.sourceTitle,
    product.historicalLow?.note,
    (product.specs || []).join(" "),
    (product.tags || []).join(" "),
  ].join(" ").toLowerCase();
}

function categoryProducts(products, categoryId) {
  return products.filter((product) => product.category === categoryId);
}

function textMatches(product, term) {
  return productText(product).includes(normalize(term));
}

function assert(condition, message, failures) {
  if (!condition) failures.push(message);
}

function validateHistoricalLow(product, failures) {
  const low = product.historicalLow;
  assert(low && typeof low === "object" && !Array.isArray(low), `${product.id} historicalLow must be an object`, failures);
  if (!low || typeof low !== "object" || Array.isArray(low)) return;

  assert(HISTORICAL_LOW_STATUSES.has(low.status), `${product.id} historicalLow has invalid status: ${low.status}`, failures);
  assert(HISTORICAL_LOW_SOURCE_KINDS.has(low.sourceKind), `${product.id} historicalLow has invalid sourceKind: ${low.sourceKind}`, failures);
  assert(HISTORICAL_LOW_CONFIDENCE_VALUES.has(low.confidence), `${product.id} historicalLow has invalid confidence: ${low.confidence}`, failures);
  assert(low.checkedAt, `${product.id} historicalLow requires checkedAt`, failures);
  assert(low.currency, `${product.id} historicalLow requires currency`, failures);
  assert(typeof low.note === "string" && low.note.trim(), `${product.id} historicalLow requires note`, failures);

  if (low.status === "found") {
    assert(typeof low.amount === "number" && low.amount > 0, `${product.id} found historicalLow requires positive amount`, failures);
    assert(typeof low.converted === "number" && low.converted > 0, `${product.id} found historicalLow requires positive converted`, failures);
    assert(low.sourceUrl && /^https?:\/\//.test(low.sourceUrl), `${product.id} found historicalLow requires sourceUrl`, failures);
    assert(low.sourceTitle, `${product.id} found historicalLow requires sourceTitle`, failures);
    assert(low.evidenceSnippet, `${product.id} found historicalLow requires evidenceSnippet`, failures);
    assert(low.sourceKind !== "not_found", `${product.id} found historicalLow cannot use not_found sourceKind`, failures);
    assert(low.confidence !== "not_found", `${product.id} found historicalLow cannot use not_found confidence`, failures);
  } else if (low.status === "not_found") {
    assert(low.amount === null, `${product.id} not_found historicalLow amount must be null`, failures);
    assert(low.converted === null, `${product.id} not_found historicalLow converted must be null`, failures);
    assert(low.sourceUrl === "", `${product.id} not_found historicalLow sourceUrl must be empty`, failures);
    assert(low.sourceTitle === "", `${product.id} not_found historicalLow sourceTitle must be empty`, failures);
    assert(low.evidenceSnippet === "", `${product.id} not_found historicalLow evidenceSnippet must be empty`, failures);
    assert(low.sourceKind === "not_found", `${product.id} not_found historicalLow sourceKind must be not_found`, failures);
    assert(low.confidence === "not_found", `${product.id} not_found historicalLow confidence must be not_found`, failures);
  }
}

function validateProduct(product, categoryIds, failures) {
  for (const field of REQUIRED_FIELDS) {
    assert(product[field] !== undefined && product[field] !== null && product[field] !== "", `${product.id || "(missing id)"} missing ${field}`, failures);
  }

  assert(categoryIds.has(product.category), `${product.id} has unknown category ${product.category}`, failures);
  assert(Array.isArray(product.specs) && product.specs.length > 0, `${product.id} must have specs`, failures);
  assert(Array.isArray(product.pros) && product.pros.length > 0, `${product.id} must have pros`, failures);
  assert(Array.isArray(product.cons) && product.cons.length > 0, `${product.id} must have cons`, failures);
  assert(Array.isArray(product.tags), `${product.id} tags must be an array`, failures);
  assert(product.price && typeof product.price.converted === "number" && product.price.converted > 0, `${product.id} must have positive TWD price`, failures);
  assert(product.buyUrl && /^https?:\/\//.test(product.buyUrl), `${product.id} buyUrl must be http(s)`, failures);
  assert(DATE_PATTERN.test(String(product.releaseDate || "")), `${product.id} releaseDate has invalid format: ${product.releaseDate}`, failures);
  validateHistoricalLow(product, failures);

  if (product.category === "washerdryer") {
    const capacitySpecs = product.specs.filter((spec) => WASHER_DRYER_CAPACITY_PATTERN.test(String(spec).trim()));
    assert(
      capacitySpecs.length === 1,
      `${product.id} must include exactly one washer/dryer capacity like 洗/乾容量：17kg / 10kg`,
      failures,
    );
  }

  if (DIMENSION_CATEGORIES.has(product.category)) {
    const dimensionSpecs = product.specs.filter((spec) => String(spec).trim().startsWith("尺寸："));
    assert(dimensionSpecs.length === 1, `${product.id} must include exactly one dimension spec`, failures);
    if (dimensionSpecs.length === 1) {
      assert(DIMENSION_PATTERN.test(String(dimensionSpecs[0]).trim()), `${product.id} has invalid dimension spec: ${dimensionSpecs[0]}`, failures);
    }
  }
}

function validateHistoricalPriceResearch(root, products, failures) {
  const researchFile = path.join(root, "historical_price_research.json");
  assert(fs.existsSync(researchFile), "historical_price_research.json is missing", failures);
  if (!fs.existsSync(researchFile)) return;

  const research = JSON.parse(fs.readFileSync(researchFile, "utf8"));
  const researchRows = Array.isArray(research.results) ? research.results : [];
  const researchById = new Map(researchRows.map((row) => [row.id, row]));
  const foundRows = researchRows.filter((row) => row.historicalLow?.status === "found");
  const missingRows = researchRows.filter((row) => row.historicalLow?.status === "not_found");

  assert(researchRows.length === products.length, `historical price research rows ${researchRows.length} does not match products ${products.length}`, failures);
  assert(researchById.size === products.length, `historical price research count ${researchById.size} does not match products ${products.length}`, failures);
  assert(research.summary && research.summary.total === products.length, "historical price research summary total mismatch", failures);
  assert(research.summary && research.summary.found === foundRows.length, "historical price research summary found mismatch", failures);
  assert(research.summary && research.summary.missing === missingRows.length, "historical price research summary missing mismatch", failures);

  for (const product of products) {
    const row = researchById.get(product.id);
    assert(row, `${product.id} missing historical price research row`, failures);
    if (!row) continue;

    assert(row.category === product.category, `${product.id} historical price research category mismatch`, failures);
    assert(row.brand === product.brand, `${product.id} historical price research brand mismatch`, failures);
    assert(row.model === product.model, `${product.id} historical price research model mismatch`, failures);
    assert(row.name === product.name, `${product.id} historical price research name mismatch`, failures);
    assert(row.currentPrice === product.price.converted, `${product.id} historical price research current price mismatch`, failures);
    assert(row.currentCurrency === product.price.currency, `${product.id} historical price research current currency mismatch`, failures);
    assert(row.currentBuyUrl === product.buyUrl, `${product.id} historical price research buyUrl mismatch`, failures);
    assert(row.currentBuyLabel === product.buyLabel, `${product.id} historical price research buyLabel mismatch`, failures);
    assert(JSON.stringify(row.historicalLow) === JSON.stringify(product.historicalLow), `${product.id} historicalLow research mismatch`, failures);
  }
}

function validateReleaseResearch(root, products, failures) {
  const researchFile = path.join(root, "release_date_research.json");
  assert(fs.existsSync(researchFile), "release_date_research.json is missing", failures);
  if (!fs.existsSync(researchFile)) return;

  const research = JSON.parse(fs.readFileSync(researchFile, "utf8"));
  const researchById = new Map((research.results || []).map((row) => [row.id, row]));
  assert(researchById.size === products.length, `release research count ${researchById.size} does not match products ${products.length}`, failures);

  for (const product of products) {
    const row = researchById.get(product.id);
    assert(row, `${product.id} missing release research row`, failures);
    if (!row) continue;
    assert(row.releaseDate === product.releaseDate, `${product.id} release research date mismatch`, failures);
    if (product.releaseDate !== "找不到") {
      assert(row.sourceUrl, `${product.id} non-empty releaseDate requires sourceUrl`, failures);
      assert(row.sourceTitle, `${product.id} non-empty releaseDate requires sourceTitle`, failures);
      assert(row.evidenceSnippet, `${product.id} non-empty releaseDate requires evidenceSnippet`, failures);
    }
  }
}

function validateDimensionResearch(root, products, failures) {
  const dimensionProducts = products.filter((product) => DIMENSION_CATEGORIES.has(product.category));
  assert(dimensionProducts.length === EXPECTED_DIMENSION_PRODUCT_COUNT, `expected ${EXPECTED_DIMENSION_PRODUCT_COUNT} dimension products, got ${dimensionProducts.length}`, failures);
  for (const [categoryId, expectedCount] of DIMENSION_CATEGORY_COUNTS) {
    const count = dimensionProducts.filter((product) => product.category === categoryId).length;
    assert(count === expectedCount, `${categoryId} must have ${expectedCount} dimension products, got ${count}`, failures);
  }

  const researchFile = path.join(root, "dimension_research.json");
  assert(fs.existsSync(researchFile), "dimension_research.json is missing", failures);
  if (!fs.existsSync(researchFile)) return;

  const research = JSON.parse(fs.readFileSync(researchFile, "utf8"));
  const researchRows = Array.isArray(research.results) ? research.results : [];
  const researchById = new Map(researchRows.map((row) => [row.id, row]));
  assert(researchRows.length === dimensionProducts.length, `dimension research rows ${researchRows.length} does not match dimension products ${dimensionProducts.length}`, failures);
  assert(researchById.size === dimensionProducts.length, `dimension research count ${researchById.size} does not match dimension products ${dimensionProducts.length}`, failures);

  for (const product of dimensionProducts) {
    const row = researchById.get(product.id);
    assert(row, `${product.id} missing dimension research row`, failures);
    if (!row) continue;

    const dimensionSpecs = product.specs.filter((spec) => String(spec).trim().startsWith("尺寸："));
    const dimensionSpec = dimensionSpecs[0];
    assert(row.dimension === dimensionSpec, `${product.id} dimension research mismatch`, failures);
    assert(DIMENSION_PATTERN.test(String(row.dimension || "").trim()), `${product.id} dimension research has invalid dimension: ${row.dimension}`, failures);
    assert(row.sourceUrl && /^https?:\/\//.test(row.sourceUrl), `${product.id} dimension research requires sourceUrl`, failures);
    assert(row.sourceTitle, `${product.id} dimension research requires sourceTitle`, failures);
    assert(row.evidenceSnippet, `${product.id} dimension research requires evidenceSnippet`, failures);
    assert(DIMENSION_CONFIDENCE_VALUES.has(row.confidence), `${product.id} dimension research has invalid confidence: ${row.confidence}`, failures);
    assert(typeof row.isOfficialSource === "boolean", `${product.id} dimension research requires boolean isOfficialSource`, failures);
    assert(row.checkedAt, `${product.id} dimension research requires checkedAt`, failures);
  }
}

function validateCategoryContent(products, failures) {
  for (const [categoryId, requiredTerms] of REQUIRED_CATEGORY_TERMS) {
    const productsInCategory = categoryProducts(products, categoryId);
    for (const term of requiredTerms) {
      const found = productsInCategory.some((product) => textMatches(product, term));
      assert(found, `${categoryId} missing required term ${term}`, failures);
    }
  }

  for (const rule of CATEGORY_TEXT_MATCH_COUNTS) {
    const count = categoryProducts(products, rule.category)
      .filter((product) => textMatches(product, rule.term))
      .length;
    if (rule.exact !== undefined) {
      assert(count === rule.exact, `${rule.category} expected exactly ${rule.exact} matches for ${rule.term}, got ${count}`, failures);
    } else {
      assert(count >= rule.min, `${rule.category} expected at least ${rule.min} matches for ${rule.term}, got ${count}`, failures);
    }
  }

  for (const product of categoryProducts(products, "wifi")) {
    assert(/wi-fi (6|6e|7)/.test(productText(product)), `${product.id} router missing Wi-Fi 6+ standard`, failures);
  }

  for (const product of categoryProducts(products, "tv")) {
    assert(productText(product).includes("手機投影："), `${product.id} TV missing mobile casting spec`, failures);
  }

  for (const product of categoryProducts(products, "monitor")) {
    assert(productText(product).includes("重量："), `${product.id} monitor missing weight spec`, failures);
  }

  for (const product of categoryProducts(products, "standingdesk")) {
    assert(productText(product).includes("桌板厚度："), `${product.id} standing desk missing desktop thickness spec`, failures);
  }
}

function main() {
  const root = path.resolve(__dirname, "..");
  const failures = [];
  const { categories, products } = readDashboardProducts(root);
  const categoryIds = new Set(categories.map((category) => category.id));

  assert(categories.length === EXPECTED_CATEGORY_COUNT, `expected ${EXPECTED_CATEGORY_COUNT} categories, got ${categories.length}`, failures);
  assert(products.length === EXPECTED_PRODUCT_COUNT, `expected ${EXPECTED_PRODUCT_COUNT} products, got ${products.length}`, failures);

  for (const category of categories) {
    const count = products.filter((product) => product.category === category.id).length;
    assert(count >= MIN_PRODUCTS_PER_CATEGORY, `${category.label} has only ${count} products`, failures);
  }

  const seenIds = new Set();
  const seenUrls = new Map();
  const seenCategoryBrandModels = new Map();

  for (const product of products) {
    validateProduct(product, categoryIds, failures);

    assert(!seenIds.has(product.id), `duplicate product id ${product.id}`, failures);
    seenIds.add(product.id);

    if (seenUrls.has(product.buyUrl)) {
      failures.push(`duplicate buyUrl: ${seenUrls.get(product.buyUrl)} and ${product.id}`);
    } else {
      seenUrls.set(product.buyUrl, product.id);
    }

    const duplicateKey = [
      normalize(product.category),
      normalize(product.brand),
      normalize(product.model),
    ].join("||");
    if (seenCategoryBrandModels.has(duplicateKey)) {
      failures.push(`duplicate category/brand/model: ${seenCategoryBrandModels.get(duplicateKey)} and ${product.id}`);
    } else {
      seenCategoryBrandModels.set(duplicateKey, product.id);
    }
  }

  validateReleaseResearch(root, products, failures);
  validateDimensionResearch(root, products, failures);
  validateHistoricalPriceResearch(root, products, failures);
  validateCategoryContent(products, failures);

  if (failures.length) {
    console.error(failures.map((failure) => `- ${failure}`).join("\n"));
    process.exit(1);
  }

  console.log(JSON.stringify({
    status: "passed",
    categories: categories.length,
    products: products.length,
    minProductsPerCategory: MIN_PRODUCTS_PER_CATEGORY,
    duplicateBuyUrls: 0,
    duplicateCategoryBrandModels: 0,
  }, null, 2));
}

main();

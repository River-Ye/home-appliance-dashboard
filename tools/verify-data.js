const fs = require("fs");
const path = require("path");
const { readDashboardProducts } = require("./read-dashboard-products");

const EXPECTED_CATEGORY_COUNT = 25;
const EXPECTED_PRODUCT_COUNT = 653;
const MIN_PRODUCTS_PER_CATEGORY = 20;
const DATE_PATTERN = /^(找不到|\d{4}(?:[-/.]\d{1,2}(?:[-/.]\d{1,2})?)?)$/;
const WASHER_DRYER_CAPACITY_PATTERN = /^洗\/乾容量：\d+(?:\.\d+)?kg \/ \d+(?:\.\d+)?kg$/;
const DIMENSION_CATEGORY_COUNTS = new Map([
  ["washer", 23],
  ["dryer", 21],
  ["washerdryer", 23],
  ["refrigerator", 23],
]);
const DIMENSION_CATEGORIES = new Set(DIMENSION_CATEGORY_COUNTS.keys());
const EXPECTED_DIMENSION_PRODUCT_COUNT = [...DIMENSION_CATEGORY_COUNTS.values()].reduce((sum, count) => sum + count, 0);
const DIMENSION_PATTERN = /^尺寸：(未標示|寬 \d+(?:\.\d+)? x 深 \d+(?:\.\d+)? x 高 \d+(?:\.\d+)? cm)$/;
const DIMENSION_CONFIDENCE_VALUES = new Set(["high", "medium", "low", "not_found"]);

const requiredFields = [
  "id",
  "category",
  "rank",
  "budget",
  "channel",
  "brand",
  "model",
  "name",
  "price",
  "image",
  "buyUrl",
  "buyLabel",
  "specs",
  "description",
  "pros",
  "cons",
  "bestFor",
  "recommendation",
  "releaseDate",
  "score",
  "voltage",
  "warranty",
  "tags",
];

function normalize(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function assert(condition, message, failures) {
  if (!condition) failures.push(message);
}

function validateProduct(product, categoryIds, failures) {
  for (const field of requiredFields) {
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

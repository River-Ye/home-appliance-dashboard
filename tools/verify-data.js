const fs = require("fs");
const path = require("path");
const { readDashboardProducts } = require("./read-dashboard-products");

const EXPECTED_CATEGORY_COUNT = 25;
const EXPECTED_PRODUCT_COUNT = 590;
const MIN_PRODUCTS_PER_CATEGORY = 20;
const DATE_PATTERN = /^(找不到|20\d{2}(?:[-/.]\d{1,2}(?:[-/.]\d{1,2})?)?)$/;

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

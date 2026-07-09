const path = require("path");
const { spawnSync } = require("child_process");

const researchScript = path.join(__dirname, "research-historical-low-prices.js");
const result = spawnSync(process.execPath, [researchScript, "--write"], {
  stdio: "inherit",
  env: process.env,
});

process.exit(result.status ?? 1);

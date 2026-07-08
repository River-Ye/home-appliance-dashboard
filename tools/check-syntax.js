const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const includeDirs = [
  path.join(root, "assets/js"),
  path.join(root, "products"),
  path.join(root, "tools"),
];

function listJsFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const file = path.join(dir, entry.name);
      if (entry.isDirectory()) return listJsFiles(file);
      return entry.isFile() && entry.name.endsWith(".js") ? [file] : [];
    });
}

const files = includeDirs.flatMap(listJsFiles).sort();
let failed = false;

for (const file of files) {
  const result = spawnSync(process.execPath, ["--check", file], { stdio: "inherit" });
  if (result.status !== 0) failed = true;
}

if (failed) {
  process.exitCode = 1;
} else {
  console.log(`syntax check passed (${files.length} files)`);
}

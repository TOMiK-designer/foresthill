const path = require("path");

const preload = path.join(__dirname, "readlink-fix.cjs").replace(/\\/g, "/");
const existingOptions = process.env.NODE_OPTIONS || "";
if (!existingOptions.includes(preload)) {
  process.env.NODE_OPTIONS = `${existingOptions} --require "${preload}"`.trim();
}

require(preload);

require("next/dist/bin/next");

/* Walks content/site.ts and lists every [SQUARE BRACKET] placeholder with its
 * key path, so TODO.md can never drift from the actual content file.
 * Run with: node tools/collect-placeholders.mjs */
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../content/site.ts", import.meta.url), "utf8");

/* Pull out the bracketed spans, handling nesting, from a single string. */
function placeholders(text) {
  const found = [];
  let buffer = "";
  let depth = 0;
  for (const char of text) {
    if (char === "[") { if (depth === 0) buffer = ""; depth++; }
    if (depth > 0) buffer += char;
    if (char === "]" && depth > 0) { depth--; if (depth === 0) found.push(buffer); }
  }
  return found;
}

/* Re-evaluate the file's two exports without a TS toolchain: strip types. */
const stripped = source
  .replace(/^import[\s\S]*?;$/gm, "")
  .replace(/\bexport\s+/g, "")
  .replace(/\bas const\b/g, "")
  .replace(/^type\s[\s\S]*?;$/gm, "");

const load = new Function(`${stripped}; return { CTA_URL, site };`);
const { CTA_URL, site } = load();

const rows = [];
function walk(node, path) {
  if (typeof node === "string") {
    for (const hit of placeholders(node)) rows.push({ path, hit });
    return;
  }
  if (Array.isArray(node)) return node.forEach((v, i) => walk(v, `${path}[${i}]`));
  if (node && typeof node === "object")
    return Object.entries(node).forEach(([k, v]) => walk(v, path ? `${path}.${k}` : k));
}

walk({ CTA_URL, ...{ site } }, "");
console.log(JSON.stringify(rows, null, 0));

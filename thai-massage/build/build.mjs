#!/usr/bin/env node
/**
 * Thai Health Massage single-file build.
 *
 * Inlines fonts + noise into template.html → ../index.html.
 * No vendor JS on this build — native scroll, IntersectionObserver only.
 *
 * Photo drop-in: save real photos as
 *   build/assets/studio-1.(webp|jpg|png)  — treatment room lead (Image 6)
 *   build/assets/studio-2.(webp|jpg|png)  — room/shelf (Image 7)
 *   build/assets/studio-3.(webp|jpg|png)  — plants (Image 9)
 *   build/assets/team.(webp|jpg|png)      — optional Nid & team candid
 * and rebuild — each replaces its art fallback automatically.
 *
 * Usage: node build/build.mjs   (no dependencies)
 */
import { readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, "..", "index.html");

const b64 = (p) => readFileSync(p).toString("base64");
let html = readFileSync(join(here, "template.html"), "utf8");

/* ---------- fonts ---------- */
const fontFaces = `
@font-face {
  font-family: "Fraunces";
  font-style: normal;
  font-weight: 400 600;
  font-display: swap;
  src: url(data:font/woff2;base64,${b64(join(here, "assets/fonts/fraunces-latin.woff2"))}) format("woff2");
}
@font-face {
  font-family: "Karla";
  font-style: normal;
  font-weight: 400 700;
  font-display: swap;
  src: url(data:font/woff2;base64,${b64(join(here, "assets/fonts/karla-latin.woff2"))}) format("woff2");
}`;
html = html.replace("/*@@FONTFACES@@*/", fontFaces);

/* ---------- noise tile (two occurrences) ---------- */
html = html.replaceAll("@@NOISE@@", `data:image/png;base64,${b64(join(here, "assets/noise.png"))}`);

/* ---------- optional real photos ---------- */
const slots = ["studio-1", "studio-2", "studio-3", "team"];
const alts = {
  "studio-1": "The treatment room at Thai Health Massage — massage table with fresh linens",
  "studio-2": "Inside the Thai Health Massage treatment room",
  "studio-3": "Plants in the studio at Thai Health Massage",
  "team": "Nid and the team at Thai Health Massage"
};
let dropped = [];
for (const slot of slots) {
  const src = ["webp", "jpg", "jpeg", "png"]
    .map((ext) => join(here, "assets", `${slot}.${ext}`))
    .find(existsSync);
  if (!src) continue;
  const mime = src.endsWith(".png") ? "image/png" : src.endsWith(".webp") ? "image/webp" : "image/jpeg";
  const img = `<img src="data:${mime};base64,${b64(src)}" alt="${alts[slot]}" loading="lazy">`;
  // replace the art fallback inside the matching figure with the real image
  const re = new RegExp(
    `(<figure class="ph-media[^"]*" data-photo="${slot}">)[\\s\\S]*?(<figcaption>)`
  );
  html = html.replace(re, `$1\n        ${img}\n        $2`);
  dropped.push(slot);
}

writeFileSync(out, html);

const size = statSync(out).size;
console.log(`index.html written — ${(size / 1024).toFixed(1)} KB`);
console.log(`photos dropped in: ${dropped.length ? dropped.join(", ") : "none — art fallbacks active"}`);

/* placeholder sweep (pre-delivery checklist) — template source */
const source = readFileSync(join(here, "template.html"), "utf8");
const flagged = ["TODO", "lorem", "XXX", "placeholder"].filter((w) =>
  source.toLowerCase().includes(w.toLowerCase())
);
console.log(flagged.length ? `⚠ flagged words in template: ${flagged.join(", ")}` : "placeholder sweep: clean");

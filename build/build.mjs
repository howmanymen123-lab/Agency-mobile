#!/usr/bin/env node
/**
 * Sparks single-file build.
 *
 * Reads template.html, inlines every asset (fonts, noise tile, GSAP,
 * ScrollTrigger, Lenis) and writes ../index.html as one self-contained
 * file per the delivery rules in docs/05_BUILD_NOTES.md.
 *
 * Photo drop-in: place the real respray shot at build/assets/hero.jpg
 * (or .png/.webp) and rebuild — the photographic hero + Ken Burns
 * activate automatically. Without it, the art-treatment hero ships.
 *
 * Usage: node build/build.mjs
 * No dependencies. (Optional: if "sharp" is resolvable and a hero photo
 * is present, it is recompressed to WebP and its blacks crushed toward
 * #0D0F12 per the design system; otherwise the file is embedded as-is.)
 */
import { readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, "..", "index.html");

const b64 = (p) => readFileSync(p).toString("base64");
const read = (p) => readFileSync(p, "utf8");

let html = read(join(here, "template.html"));

/* ---------- fonts ---------- */
const fontFaces = `
@font-face {
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
  src: url(data:font/woff2;base64,${b64(join(here, "assets/fonts/space-grotesk-latin.woff2"))}) format("woff2");
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(data:font/woff2;base64,${b64(join(here, "assets/fonts/inter-latin.woff2"))}) format("woff2");
}`;
html = html.replace("/*@@FONTFACES@@*/", fontFaces);

/* ---------- noise tile ---------- */
html = html.replace("@@NOISE@@", `data:image/png;base64,${b64(join(here, "assets/noise.png"))}`);

/* ---------- vendor JS (from npm, never CDN) ---------- */
const vendor = ["gsap.min.js", "ScrollTrigger.min.js", "lenis.min.js"]
  .map((f) => read(join(here, "vendor", f)))
  .join("\n;\n");
if (vendor.includes("</script>")) throw new Error("vendor JS contains </script>");
html = html.replace("/*@@VENDOR@@*/", () => vendor);

/* ---------- optional hero photo ---------- */
const heroCandidates = ["hero.webp", "hero.jpg", "hero.jpeg", "hero.png"]
  .map((f) => join(here, "assets", f))
  .filter(existsSync);

async function embedHero(html) {
  if (!heroCandidates.length) return html;
  const src = heroCandidates[0];
  let data, mime;
  try {
    const { default: sharp } = await import("sharp");
    // crush blacks toward #0D0F12 and recompress per design system
    const buf = await sharp(src)
      .resize({ width: 1600, withoutEnlargement: true })
      .linear(0.94, 6) // gentle lift of output floor toward ink
      .modulate({ saturation: 1.04 })
      .webp({ quality: 78 })
      .toBuffer();
    data = buf.toString("base64");
    mime = "image/webp";
  } catch {
    data = b64(src);
    mime = src.endsWith(".png") ? "image/png"
      : src.endsWith(".webp") ? "image/webp" : "image/jpeg";
  }
  return html
    .replace("<html lang=\"en-GB\">", "<html lang=\"en-GB\" class=\"has-photo\">")
    .replace(":root {", `:root {\n  --hero-img: url(data:${mime};base64,${data});`);
}

html = await embedHero(html);

/* ---------- optional work tiles ---------- */
const tiles = ["work-tile-1.webp", "work-tile-2.webp"].map((f) => join(here, "assets", f));
if (tiles.every(existsSync)) {
  html = html
    .replace("@@TILE1@@", `data:image/webp;base64,${b64(tiles[0])}`)
    .replace("@@TILE2@@", `data:image/webp;base64,${b64(tiles[1])}`);
} else {
  html = html.replace(/\s*<div class="work-tiles">[\s\S]*?<\/div>\n/, "\n");
}

writeFileSync(out, html);

const size = statSync(out).size;
console.log(`index.html written — ${(size / 1024).toFixed(1)} KB (budget ≤ 2048 KB)`);
console.log(`hero photo: ${heroCandidates.length ? heroCandidates[0] : "none — art treatment active"}`);

/* placeholder sweep per pre-delivery checklist item 10 —
   run against the template source (the built file is mostly base64,
   which trips substring checks with false positives) */
const source = read(join(here, "template.html"));
const flagged = ["TODO", "lorem", "XXX", "placeholder"].filter((w) =>
  source.toLowerCase().includes(w.toLowerCase())
);
console.log(flagged.length ? `⚠ flagged words present in template: ${flagged.join(", ")}` : "placeholder sweep: clean");

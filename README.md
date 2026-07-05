# Sparks Car Body Repair — tester site

Single-page, single-file website for **Sparks Car Body Repair, 29 Park Way,
Burnt Oak, Edgware HA8 5EY**. Built to the locked plan in `docs/`
(strategy → UX → design system → motion system → build notes).

**`index.html` is the deliverable** — one self-contained file: fonts,
noise texture, GSAP 3.12.5, ScrollTrigger and Lenis 1.0.42 are all inlined
(from npm, zero CDN). It opens perfectly from a local double-click and
deploys to Netlify as-is. 263KB total.

## ⛔ Before the client sees it
Remaining: photo drop-in + OG URL confirm — see **`docs/06_FINAL_REVIEW.md` → HANDOVER SWAPS**
(phone/WhatsApp number, real review quotes, real photography, OG URL).

## Editing and rebuilding

Source of truth is `build/template.html`. Never edit `index.html` directly.

```
build/
  template.html      ← edit this (copy, styles, script all readable here)
  build.mjs          ← node build/build.mjs  → writes ../index.html
  vendor/            gsap.min.js · ScrollTrigger.min.js · lenis.min.js (from npm)
  assets/fonts/      Space Grotesk + Inter (latin, variable woff2)
  assets/noise.png   1.4KB banding-kill tile
docs/                the locked plan + final review/test results
og.jpg               1200×630 WhatsApp/OG preview image
netlify.toml         publish root + security headers
```

Rebuild after any edit:

```
node build/build.mjs
```

No dependencies required. The script reports file size and runs the
placeholder-word sweep from the pre-delivery checklist on every build.

### Dropping in the real photography
Save the respray shot as `build/assets/hero.jpg` (or `.png`/`.webp`) and
rebuild. The photographic hero (with the locked focal point, bottom-up
gradient and Ken Burns) and the Our Work lead image activate automatically;
the art-treatment fallback disappears. If `sharp` is installed
(`npm i sharp` anywhere resolvable), the photo is auto-compressed to WebP
q78 with blacks crushed toward `#0D0F12` per the design system.

## Deploy
Netlify: connect the repo (publish directory `.`) or drag the folder into
the Netlify UI. Suggested subdomain per build notes:
`sparksbodyrepair.netlify.app`. Share only the public URL.

## Verification status
Browser-verified in this build: offline `file://` open, JS-disabled render,
reduced-motion, 390×844 / 360×800 / 1440×900 with zero horizontal overflow,
sticky action bar touch heights, carousel controls, zero console errors.
Full pass/fail table: `docs/06_FINAL_REVIEW.md`.

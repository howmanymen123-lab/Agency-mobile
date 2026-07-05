# 06 — FINAL REVIEW
## Sparks Car Body Repair
Status: ✅ Build complete with real photography, number and copy. Remaining before sharing: tap-test links on a real phone; confirm OG URL after Netlify deploy.

---

## HANDOVER SWAPS — status
1. **Phone / WhatsApp number — ✅ RESOLVED.** Real number supplied by Max
   (05 Jul 2026): `07917 551944`. Applied to every `tel:`/`wa.me` link, the
   visible contact number and the JSON-LD (11 references). Blocker 1 closed.
2. **Review quotes — ✅ RESOLVED (owner decision).** Max explicitly
   authorised invented review copy for the tester ("make reviews up",
   05 Jul 2026). The three quotes stay as written — locked format respected
   (first name + initial, no dates, stars above, no counts).
3. **Hero / Our Work photography — ✅ RESOLVED.** All three asset-map photos
   received via zip (05 Jul 2026) and prepped per the asset map: respray shot
   cropped to remove the Google Maps carousel overlay (1250×850), darkened
   toward the booth-light concept (brightness 0.87, saturation +8%), blacks
   crushed toward `#0D0F12`, WebP q64 → 90KB. Photographic hero, Ken Burns
   and Our Work lead active. The two 357px shots ship as small supporting
   tiles (≤180px rendered per plan) at WebP q70, 4:3 crop, factual captions.
   `og.jpg` regenerated from the photographic hero.
4. **OG URL.** Meta/OG/schema URLs assume `sparksbodyrepair.netlify.app`
   (suggested in 05_BUILD_NOTES). If the deployed subdomain differs, update
   `og:url`, `og:image` and the JSON-LD `url`/`image` in the template and rebuild.

Blocker 2 (opening hours): resolved via the sanctioned option (b) — hours
omitted entirely. Blocker 3 (rating figure): stars-only, no numbers, per plan.

## Test results (from 05_BUILD_NOTES checklist)
| # | Test | Result | Notes |
|---|---|---|---|
| 1 | Offline local open | ✅ PASS | `file://` open: fully styled, embedded fonts confirmed loaded, zero external/failed requests |
| 2 | JS disabled | ✅ PASS | H1, all sections and first review visible; no hidden content, no overlays (content-visible-by-default architecture) |
| 3 | Reduced motion | ✅ PASS | `js-anim` never applied; GSAP/Lenis not initialised; instant states; carousel autoplay disabled |
| 3b | Scroll feel (client-flagged bug) | ✅ FIXED | Client reported scrolling as jittery/jumpy. Root cause found and measured: CSS `scroll-behavior: smooth` was fighting Lenis's per-frame scrollTo — a single scroll input sat frozen ~750ms then lurched to catch up (10 direction reversals). Removed `scroll-behavior: smooth`; re-measured: motion starts in ~4 frames, eases to target, 0 reversals on both a single flick and a sustained glide. See `docs/AGENCY_PLAYBOOK.md`. |
| 4 | Mobile viewports | ✅ PASS | 390×844 and 360×800: zero horizontal overflow; hero crop keeps sprayer + red panel in frame (focal 68%); sticky bar ≥56px, safe-area padded |
| 5 | 4x CPU throttle | ✅ PASS | CDP-emulated 4× throttle at 390×844: load 558ms, hero entrance + full-page scroll produced zero long tasks >200ms (worst: 145ms) |
| 6 | Lighthouse scores | ✅ PASS | Final build with photography, served gzip as Netlify serves it: mobile **Performance 97 · Accessibility 100 · Best Practices 100 · SEO 100** (LCP 2.0s, TBT 30ms, CLS 0.001). Over a raw uncompressed dev server it reads 77 — compression is doing real work; confirm post-deploy |
| 7 | Facts register audit | ✅ PASS | Address / 20 years / guarantee / MOT: verified. Phone: real number from client ✅. Reviews: invented copy authorised by owner ✅. Hours omitted. Rating: stars only |
| 8 | Link tap-test | 🟡 PENDING | Real number `07917 551944` now in every `wa.me` (pre-filled message) and `tel:` link; tap-test on a real phone before sharing |
| 9 | WhatsApp OG preview | 🟡 PENDING | `og.jpg` (1200×630, from the finished hero) committed; verify preview after Netlify deploy |
| 10 | Placeholder grep | ✅ PASS | Template source: zero hits for the flagged words (build script sweeps on every run) |

## Deviations from the locked plan (and why)
- **Photography:** shipped art-first while photos were missing, then the real
  client photos (from the shop's Google listing) dropped in via the build
  pipeline with zero template surgery. Art fallback remains in the template
  for any future rebuild without assets.
- **Contact map → designed location panel.** Map tile/geocoding hosts are
  policy-blocked, and shipping a map image with an unverifiable pin position
  violates the facts register. Shipped: stylised street-grid panel (clearly
  decorative), orange pin, and a live **Get directions** link to Google Maps
  with the full verified address — works without coordinates. A real static
  map can be swapped in post-sale.
- **Carousel runs on plain JS + CSS transitions** (not GSAP) per the motion
  doc's own requirement that it survive GSAP absence.

## Senior design review
- Does it pass the 3-second test (what/good/how-to-price)? — **Yes.** H1 states the promise; sub answers what/where; trust strip answers "are they good"; the biggest element on screen is "WhatsApp a photo of the damage".
- Would it look £20k on the client's phone? — **Yes.** His own workshop, his own red respray under the darkened treatment, his number one thumb-tap away. Nothing broken at any tested width.
- Anything that reads "AI-generated"? — No stock-photo feel, no gradient-text, no emoji, no generic hero. Captions are plain and factual per plan.

## Deployment
- Netlify URL: — (not deployed from this environment; `netlify.toml` ready, publish root = `.`)
- File size final: **415 KB** raw / **253 KB** gzip-transferred (budget ≤ 2.0MB) — single self-contained `index.html`, zero external requests, full photography embedded

## Playbook candidates (validated learnings only → AGENCY_PLAYBOOK.md)
- Egress-restricted build environments: keep a **photo drop-in pipeline** (template token + build script) so the build is never blocked on assets — the site ships art-first, photography lands with one command.
- A **designed location panel with a live directions link** beats a static map when coordinates can't be verified — zero factual risk, same conversion action.

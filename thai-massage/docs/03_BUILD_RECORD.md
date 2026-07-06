# 03 — BUILD RECORD & FINAL REVIEW
## Thai Health Massage — THE SLOW HOUR
Status: ✅ Built, verified, packaged (`thai-massage-website.zip`). Ready for Netlify upload.

This document locks the Phase 3–5 decisions (design system, motion, build)
and records the pre-delivery test results, per agency process.

---

## DESIGN SYSTEM (locked at build)

| Token | Value | Use |
|---|---|---|
| `--aubergine` | `#2A1B33` | Hero, final band, footer, dark text |
| `--aubergine-deep` | `#211527` | Footer/band gradient base, call bar |
| `--gold` | `#C9A15C` | Buttons, rules, stars, decorative accents |
| `--gold-text` | `#83652C` | Gold TEXT on ivory — 4.9:1 WCAG AA |
| `--clay-text` | `#9A4E36` | Micro-labels on ivory — 5.4:1 WCAG AA |
| `--ivory` / `--ivory-raised` | `#F7F2EA` / `#FDFBF7` | Page base / cards |

The split between decorative gold and text gold exists because `#C9A15C`
fails AA on ivory (2.6:1) — audited and corrected during build; final
Lighthouse accessibility = 100.

**Type:** Fraunces (variable, 400–600 + optical size axis, latin subset,
67KB) for display; Karla (variable 400–700, 24KB) for UI/body. Both
embedded base64 — zero font requests. H1 `clamp(2.7rem → 5.5rem)`.

**Buttons:** pill (999px radius), gold with aubergine text (6.9:1),
≥52px tall. Wordmark: typeset Fraunces + gold rule (logo retirement per
strategy §8).

## MOTION (locked at build)

- **No scroll libraries. Native scrolling only.** No Lenis, no GSAP, no
  ScrollTrigger — nothing that can fight the browser (playbook lesson from
  Sparks, honoured in full). CSS `scroll-behavior: smooth` for anchor
  glides is safe *only because* no JS scroll library exists on the page.
- **One slowly moving element** (concept requirement): the hero candlelight
  glow — pure CSS `transform/opacity` keyframes, 14s cycle, GPU-composited,
  killed by `prefers-reduced-motion`.
- **Reveals:** IntersectionObserver + CSS transitions (0.9s, gentle).
  Content visible by default; `.js-anim` is added only after the observer
  is successfully constructed, so no script failure can ever hide content.
  Reduced-motion → class never added, everything instant.
- Hero video (strategy §9): **not shipped** — external hosting for the
  generated video doesn't exist yet. The CSS atmosphere IS the poster
  state; if the video is produced later it slots into `.hero` behind the
  existing overlay without structural change.

## BUILD

- Single self-contained `index.html` — **177KB raw / 109KB gzip-wire**.
  Zero external requests. Opens from a double-click.
- Source of truth: `build/template.html` → `node build/build.mjs`.
- **Photo drop-in ready:** save real photos as `build/assets/studio-1.jpg`
  (Image 6 — table), `studio-2.jpg` (Image 7 — room), `studio-3.jpg`
  (Image 9 — plants), optional `team.jpg`, rebuild — each replaces its
  art fallback automatically. Art fallbacks (linen/silk/botanical) ship
  deliberately styled until then.
- Open-status microlines + today's-hours highlight computed in
  Europe/London with static-safe fallback ("Open six days a week").
- JSON-LD `HealthAndBeautyBusiness` — verified facts only, **no
  aggregateRating markup** per 02 §5.
- Google reviews link uses a name+address Maps query URL (no place-ID
  needed, works universally).
- Map: designed location panel + live Google Maps directions link
  (per 02 §8 static-map intent; map-tile hosts are blocked from the build
  environment and a wrong pin would violate the facts register).

## PRE-DELIVERY TEST RESULTS (all runs on the final build)

| # | Test | Result | Detail |
|---|---|---|---|
| 1 | **Scroll feel — flick** | ✅ PASS | Movement starts in 1 frame (~17ms), **0 direction reversals**, settles exactly on target |
| 2 | **Scroll feel — sustained glide** | ✅ PASS | 60-tick glide: **0 reversals**, smooth monotonic motion |
| 3 | **Scroll frame timing** | ✅ PASS | 84 frames sampled mid-glide: **0 janky frames**, worst gap 16.8ms (60fps) |
| 4 | Anchor navigation | ✅ PASS | `#prices` click lands at 90px offset, native smooth glide |
| 5 | Viewports 320/360/390/768/1440 | ✅ PASS | Zero horizontal overflow at every width; price matrix reflows to stacked blocks below 760px |
| 6 | JS disabled | ✅ PASS | Everything visible, static status text intact, no hidden content |
| 7 | Reduced motion | ✅ PASS | `js-anim` never applied; glow animation off; instant states |
| 8 | Offline `file://` open | ✅ PASS | Fully styled, both fonts confirmed loaded, zero failed/external requests |
| 9 | Sticky call bar | ✅ PASS | Appears after hero, hides over hero, ≥56px target, safe-area padded, live status line |
| 10 | Open-status logic | ✅ PASS | Verified against Europe/London clock (Mon 22:36 → "Opens tomorrow at 9am"; Monday row highlighted) |
| 11 | 4× CPU throttle | ✅ PASS* | Zero jank during scroll/use. *One ~300ms task at parse time (before first paint — inherent to single-file format; Lighthouse TBT = 0ms confirms nothing user-facing blocks) |
| 12 | Lighthouse (gzip, mobile) | ✅ **100 / 100 / 100 / 100** | FCP/LCP 1.4s · CLS 0.002 · TBT 0ms |
| 13 | Lighthouse (desktop) | ✅ 100 | LCP 0.3s · CLS 0.008 |
| 14 | Deploy-zip end-to-end | ✅ PASS | Extracted zip served + browser-tested: 0 errors, 0 failed requests, fonts loaded, 0 scroll reversals |
| 15 | Placeholder sweep | ✅ PASS | Template source clean (checked every build) |
| 16 | Facts register audit | ✅ PASS | Every claim traced to 01 §11: phone, hours, prices, rating phrasing ("4.8★ · 240+"), quotes verbatim, no gift vouchers, no certifications, no parking claim, no "same week availability" |

## REVIEW CURATION NOTE
Five of the six curated quotes shipped (Mrs B, Linda D., C.K., Hana S.,
Marco P. + Jo O. in #pressure). **Anne W.'s couples quote is NOT on the
page** — her verbatim text was not included in the docs provided, and the
facts register forbids reconstructed quotes. The quote grid is designed to
take a sixth card without reflow: send Anne W.'s exact text and it drops in.
(Journey C is still served — the Couples/Four Hands "call for availability"
rows are the primary trigger.)

## REMAINING BEFORE/AFTER DEPLOY
1. Netlify site name assumed **thaihealthmassage** → og/canonical/JSON-LD
   point at `thaihealthmassage.netlify.app`. If the name differs — or when
   the real domain `thai-healthmassage.co.uk` is pointed at Netlify —
   update the four URLs in `build/template.html` head and rebuild.
2. Tap-test `tel:` link on a real phone.
3. WhatsApp-preview check after deploy (og.jpg is generated from the
   finished hero).
4. Real photos (Images 6/7/9 ± team candid) → drop-in per BUILD above.
5. Re-check the live Google review count on handover day (display already
   future-proofed as "240+").

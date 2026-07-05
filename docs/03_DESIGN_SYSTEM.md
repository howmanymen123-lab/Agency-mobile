# 03 — DESIGN SYSTEM (LOCKED)
## Sparks Car Body Repair — unique to this client, never reused
Status: ✅ Approved. Build must follow this exactly. No redesigns.

---

## Colour palette
| Token | Hex | Use |
|---|---|---|
| `--ink` | `#0D0F12` | Page background, nav solid state, gradient base |
| `--graphite` | `#16191E` | Cards, raised surfaces |
| `--steel` | `#8A919C` | Secondary text, labels, wordmark subline |
| `--white` | `#F4F5F7` | Headlines, body on dark (soft white, not pure) |
| `--spark` | `#FF5A1F` | CTAs, the "A" notch, underlines, focus rings — the ONLY accent |
| `--spark-deep` | `#D9430F` | Hover/active state of spark |

Rules: orange appears sparingly — CTAs, one wordmark detail, hover underlines, nothing else. Contrast: all text pairs must pass WCAG AA on their actual background (spot-check `--steel` on `--graphite` at small sizes; bump to `#98A0AB` if it fails).

## Typography
- **Display: Space Grotesk** (700 for H1/H2, 500 for card titles). All-caps only in the wordmark and micro-labels.
- **Body/UI: Inter** (400 body, 500 buttons/labels).
- Both subsetted (latin) and embedded as base64 WOFF2 — no Google Fonts request (single-file rule).

Scale (fluid, clamp-based):
- H1 hero: `clamp(2.6rem, 8vw, 6rem)`, line-height 1.02, letter-spacing -0.02em
- H2 section: `clamp(1.9rem, 4.5vw, 3.25rem)`
- Card title: 1.125–1.25rem, Space Grotesk 500
- Body: 1rem–1.0625rem, Inter 400, line-height 1.6, max-width 62ch
- Micro-label: 0.75rem, letter-spacing 0.14em, uppercase, `--steel`

## Wordmark
"SPARKS" in Space Grotesk Bold, all caps, tight tracking. The "A" crossbar cut with a small orange spark/chevron notch (angled, geometric — not a cartoon bolt). Subline: `CAR BODY REPAIR — EDGWARE` in 0.7rem letter-spaced `--steel` caps. Built as inline SVG (crisp at any size, one-colour capable). This is the only decoration in the identity.

## Spacing system
Base unit 8px. Section vertical padding: `clamp(96px, 14vh, 160px)` desktop, min 72px mobile. Card padding 32px. CTA row gap 16px. Whitespace is the luxury signal — when in doubt, add space, don't add elements.

## Grid
12-col CSS Grid, max-width 1240px, 24px gutters, 20px edge margin mobile. Services: `grid-template-columns: repeat(3, 1fr)` → 1fr under 720px. Hero and Work sections use asymmetric placement (content spanning cols 1–6 or 7–12), never centred-everything symmetry.

## UI patterns
- **Buttons:** primary = solid `--spark`, 14px 28px padding, 8px radius, WhatsApp glyph left; secondary = 1px `--steel` outline, transparent fill. Min touch target 48px. Focus-visible ring in `--spark`.
- **Cards:** `--graphite`, 1px border `rgba(255,255,255,0.06)`, 16px radius, no drop shadows heavier than `0 8px 24px rgba(0,0,0,0.35)`.
- **Trust strip:** single row, 0.8rem, `--steel`, star glyphs in `--spark`, dot separators.
- **Icons:** 1.5px stroke, single weight, 28px, `--steel` default / `--spark` on card hover.

## Visual depth
Bottom-up gradients on photography, faint noise texture (2–3% opacity PNG, tiled, base64 — a few KB max) over the ink background to kill banding, soft card shadows. No glassmorphism, no glow effects, no gradient text. The photography provides the richness; the UI stays matte.

## Imagery treatment
All photos get: slight contrast lift, blacks crushed toward `#0D0F12` so images sit IN the page rather than pasted on, and the gradient overlay where text overlaps. Never place text on untreated photography.

## Differentiation check (cross-portfolio)
Space Grotesk/Inter + charcoal/spark-orange is distinct from: SWSR (Marcellus, monochrome + tape blue), Ali & Sons (Instrument Serif, carbon + oxblood/gold), MB AutoFix (Archivo/IBM Plex Mono, carbon + brand orange — different orange family, different type voice, different layout system). ✅ No portfolio repetition.

# 02 — UX & STRUCTURE (LOCKED)
## Sparks Car Body Repair
Status: ✅ Approved. Do not reopen during build.

---

## Sitemap
**Single long-scroll page.** Anchored sections, no satellite pages. If the client signs, Services / Gallery / Contact expand into pages later without redesign.

```
/  (single page)
   ├─ #services      What we fix
   ├─ #work          Our work (photo proof)
   ├─ #why           Why Sparks (guarantee / MOT / 20 years)
   ├─ #reviews       What customers say
   └─ #contact       Find the shop / hours / map
```

## Persistent elements
- **Sticky nav** (desktop): SPARKS wordmark — Services — Our Work — Reviews — Contact — [WhatsApp] button always visible. Nav background transparent over hero, gains solid `#0D0F12` + subtle border after 80px scroll.
- **Mobile sticky action bar** (bottom, appears after hero scroll-out): Call · WhatsApp · Directions. Thumb-height (min 56px), safe-area padded.

## User journey (one funnel)
Land (hero answers "can you fix it?") → scroll = trust ladder → Services (relevance) → Work (visual proof) → Why (guarantee/credentials) → Reviews (social proof) → Contact (location legitimacy). WhatsApp reachable at every scroll position. Depth builds trust; the exit is always one thumb-tap away.

## Section breakdown & layout direction

### S1 — HERO (full viewport)
Red respray photo backdrop (1250×928 — see 05_BUILD_NOTES asset map), darkened bottom-up gradient (`#0D0F12` 90% → 30%) so the sprayer and red panel glow through. Content bottom-left (photo's action sits right, text takes the calm space).
- H1: "The damage was never there."
- Sub: "Accident repair, dents, scratches & resprays in Edgware. Twenty years at the bench. All work guaranteed."
- CTA row: [WhatsApp a photo of the damage] solid orange + WhatsApp glyph · [Call the shop] ghost.
- Trust strip pinned at hero base: ★ Google reviews · MOT approved · All work guaranteed. **No hours and no review count in the trust strip until verified** (see 05_BUILD_NOTES → facts register).
- Mobile crop: focal point locked to the red rear quarter + sprayer (right-of-centre). Test at 390×844.

### S2 — SERVICES — "What we fix"
Six services, 3×2 grid desktop / single column mobile. Graphite cards `#16191E`, thin-line single-weight icons, Space Grotesk titles, one line of copy each:
1. Accident & insurance repair — "Knocks, prangs and insurance jobs — handled start to finish."
2. Dent removal — "Car park dings to proper dents, pulled and perfected."
3. Scratch & scuff repair — "Key lines, pillar scrapes, trolley rash — gone."
4. Bumper repair — "Cracked, split or hanging off. Rebuilt, not just patched."
5. Resprays — "Single panels to full colour changes, booth-finished."
6. Machine polishing & paint correction — "Swirls and dull paint brought back to depth."

### S3 — OUR WORK
Photo proof section. With current assets: hero-quality red respray shot leads large (asymmetric split layout, text left / image right), the two 357px shots used ONLY as small supporting tiles (≤180px rendered) or dropped if they look soft on retina — build-time call, softness loses to omission. Caption style: plain, factual ("Rear quarter respray — booth finish").

### S4 — WHY SPARKS
Three-column stat/credential band: **20 years at the bench** · **All work guaranteed** · **MOT approved**. Short supporting line under each. This is the reassurance beat between visual proof and social proof.

### S5 — REVIEWS
Crossfading pull-quote carousel. Rules (locked in Phase 2): no dates shown, first-name + initial attribution, star row above quote. One quote visible at a time, generous whitespace — a quote wall reads cheap. **Display no total review count anywhere** unless verified against the live GBP on build day.

### S6 — CONTACT / FIND THE SHOP
Split: left = address (29 Park Way, Burnt Oak, Edgware HA8 5EY), hours (from facts register — placeholder until confirmed), phone, WhatsApp button repeated. Right = embedded static map image (not live iframe — single-file rule) linking out to Google Maps directions. Footer: wordmark, nav repeat, legal line.

## What was cut and why
- Loader/intro screen: **cut.** Highest defect risk on record (Massi `.loader-wipe` lockup) for zero conversion value on a one-pager. The hero entrance animation IS the intro.
- Before/after slider: not for this client — no before/after photo pair exists. Don't fake one.
- Contact form: cut. WhatsApp + call outperform forms for this trade and remove FormSubmit dependency from the tester.

# 05 — BUILD NOTES
## Sparks Car Body Repair — pre-build contract
Status: 🟡 Ready for build pending 3 blockers below. Build starts only on Max's explicit "build".

---

## ⛔ BLOCKERS — answer before code
1. **WhatsApp / phone number.** The primary CTA is a `wa.me` link — cannot build it without the real number. If unknown for the tester: build with `href="#"` + a visible `<!-- TODO -->`? NO — no placeholders rule. Instead use Max's own number for the tester (client sees a working demo) and swap on handover. **Max to confirm which.**
2. **Opening hours.** Phase 2 draft said "Mon–Sat 9:30–6" — unverified. Web search (05 Jul 2026) could not confirm Sparks' GBP listing. MB AutoFix lesson: unverified hours get flagged by clients instantly. Options: (a) Max checks the GBP, (b) omit hours from tester entirely. **Max to confirm.**
3. **Google rating figure.** Hero trust strip shows stars + "Google reviews" — no numeric rating or count until read off the live GBP on build day. If Max confirms the current figure, it goes in; otherwise stars-only.

## FACTS REGISTER — every claim on the page and its source
| Claim | Status |
|---|---|
| Address: 29 Park Way, Burnt Oak, Edgware HA8 5EY | ✅ From client |
| 20 years' experience | ✅ From client |
| All work guaranteed | ✅ Client confirmed (cold-call session) |
| MOT approved | ✅ Client confirmed |
| Google star rating / count | 🟡 Verify on GBP before adding numbers |
| Opening hours | 🔴 Unverified — blocker 2 |
| Phone / WhatsApp | 🔴 Missing — blocker 1 |
| Review quotes | 🟡 Use real GBP review text, dates stripped, first-name + initial |
Nothing ships outside this table. New claim = new row = new verification.

## ASSET MAP (verified 05 Jul 2026)
| Asset | Resolution | Use | Prep |
|---|---|---|---|
| Red respray (sprayer, wet floor, brick) | 1250×928 | Hero + Our Work lead | Convert to WebP q78 (JPEG q80 fallback), crush blacks toward #0D0F12, ~150–220KB before base64 |
| Silver panel masked | 357×255 | Small Our Work tile ≤180px rendered, or cut | WebP, decide at build against retina softness |
| Black rear quarter masked | 357×296 | Same as above | Same |
| Fonts: Space Grotesk 500/700, Inter 400/500 | — | Embedded | Latin subset WOFF2, base64 |
| Noise texture | tiny tile | Ink background | ≤3KB PNG |
| Map | static image | Contact | Static map image, links out to Google Maps |
**For the live site (post-sale): get originals at full resolution via WhatsApp.** The 357px shots will not survive a paying client's scrutiny.

## DELIVERY RULES
- **One self-contained HTML file.** Every asset base64/inlined: images, fonts, GSAP, ScrollTrigger, Lenis (from npm — never CDN). File must open perfectly from a local double-click and over WhatsApp-shared Netlify link.
- Target file size ≤ 2.0MB (base64 adds ~33% — budget images at ≤1.2MB combined pre-encoding).
- Deploy: Netlify, public subdomain only shared (never the admin URL). Suggested: `sparksbodyrepair.netlify.app`.
- Semantic HTML5, single H1, ARIA on nav/carousel, `AutoRepair` + `LocalBusiness` schema (only facts from the register), full meta/OG tags with an OG image so the WhatsApp link preview looks premium — that preview is the client's literal first impression of his own site.

## PRE-DELIVERY TEST CHECKLIST (all must pass — no exceptions)
1. Open file locally with network disabled → fully styled, all images, all fonts. ✅/❌
2. Open with JavaScript disabled → complete readable site, no invisible content, no locked overlays. ✅/❌
3. `prefers-reduced-motion` emulated → no Lenis, no tweens, instant states. ✅/❌
4. 390×844 (iPhone) and 360×800 (Android) → no horizontal overflow, hero crop keeps sprayer + red panel, sticky bar clears safe-area. ✅/❌
5. 4x CPU throttle → hero entrance and scroll stay smooth, no long tasks > 200ms. ✅/❌
6. Lighthouse (mobile): Performance ≥ 90 (95 desktop), Accessibility ≥ 95, SEO ≥ 95. ✅/❌
7. Every fact on page cross-checked against FACTS REGISTER. ✅/❌
8. wa.me and tel: links tap-tested on a real phone. ✅/❌
9. WhatsApp link preview shows correct OG title/image. ✅/❌
10. Grep the file for "TODO", "placeholder", "lorem", "XXX" → zero hits. ✅/❌
Results recorded in 06_FINAL_REVIEW.md with pass/fail per item.

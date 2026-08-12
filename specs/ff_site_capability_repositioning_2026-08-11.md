# Spec — fiftyandfive.com Capability-Led Repositioning
**v2 · Generated 2026-08-11 · Save as `specs/ff_site_capability_repositioning_2026-08-11.md` in the site repo**
> **Supersedes the BRAND LAYER of `ff_site_prompt_v2_2026-07-17.md` only.** Every KILL, PROTECT, schema, and out-of-scope rule in that file still stands unless explicitly overridden below. Read it before starting. Where the two disagree, this file wins; where this file is silent, the 7/17 spec governs.
>
> **Runs in the same pass as `ff_pricing_floor_4k_2026-08-11.md`.** Same branch. Pricing figures come from that file, not this one.
---
## WHAT THIS IS, AND WHAT IT IS NOT
**It is:** removing a *role label* from the brand layer so buyers who already employ a CMO are not filtered out at the front door.
**It is NOT a demotion of the Fractional CMO offer.** An earlier draft argued the seat should be demoted because it is capacity-capped at 3. That argument was wrong and is retracted: two unsold seats at $6,000–$9,500 represent $12,000–$19,000/mo of the highest-$/hr product in the business, against a ~$9,750 gap to the $20K trigger. **The seat stays a full-weight door.** The new H1 is neutral to both doors and routes through `/ways-to-work`; it does not front retainers over the seat.
---
## STEP 0 — PRIME AND DISCOVER. Do not edit anything yet.
1. Run `/prime`.
2. `git status`, `git log --oneline -10`. If the tree is dirty, stop and report.
3. `git checkout -b reposition/capability-led-2026-08-11`
4. Read `specs/ff_site_prompt_v2_2026-07-17.md` in full.
5. **Report the actual file structure**: which files contain the homepage hero, the nav component, the `<head>` meta block, and every JSON-LD block. Do not assume a framework.
🔴 **The 7/17 spec warned that the build and the spec disagreed about the hero. Assume that is still true. Read the component. Do not trust any document about it, including this one.**
---
## STEP 1 — MEASURE BASELINE. Report, then STOP.
Run against repo source. Report exact counts and file paths.
```bash
grep -rc "Fractional CMO"
grep -rc "Most CMOs have run one brand"
grep -rc "Fractional CMO + Senior-Led Social"
grep -rc "CMO strategy. Agency execution."     # PROTECTED
grep -rc "Fortune 500s call"                   # PROTECTED, expect 2
grep -rc "222"
grep -rc "3+ years"
grep -rn "jobTitle\|knowsAbout\|slogan"        # schema
```
**Also report every location stating a price, a client count, or a year.** Do not silently harmonize conflicts. Surface them.
🔴 **STOP. Report and wait for approval before Step 2.**
---
## STEP 2 — THE CHANGES
### 2.1 Homepage hero
**FROM:** `Fifty & Five — Fractional CMO + Senior-Led Social`
**TO:**
```
We've run marketing for 222 brands. Yours gets the senior team.
```
**Subhead:**
```
Lead the function, run the work, or both. 
```
*Why this exact line, so it does not get "improved": it is active, names a number, and makes a claim you can be held to. A rejected earlier draft read "Senior marketing, at whatever depth you need" — passive, hedged, and it hands scoping to the buyer, which contradicts the 7/17 voice lock ("a buyer evaluating a $6,500 seat wants to hear you'll own the number"). Do not reintroduce accommodating phrasing.*
**The subhead carries no receipt.** Proof goes in the strip below (§2.3). Three jobs in one breath is what made prior drafts flat.
### 2.2 Relocate the CMO hook. Do NOT delete it.
**FROM:** homepage section heading. **TO:** `/fractional-cmo`, verbatim:
```
Most CMOs have run one brand. We've led marketing for over 222.
```
Post-change: **0 on the homepage, ≥1 on `/fractional-cmo`.**
*Engineered deliberately to flank ex-CMO competitors. It works on `/fractional-cmo` where the competition is other fractional CMOs. On the homepage it hits buyers who ARE CMOs. Right weapon, wrong surface.*
### 2.3 Homepage replacement section + proof strip
Where the relocated hook sat, using existing section components:
```
Eighteen years. 222 brands. Five continents. Whatever's in front of you, we've seen its shape before, and we've seen how it goes wrong. That's what you're buying. Not a title. Pattern recognition.
```
Directly below the hero, as a proof strip:
```
Blaze Pizza, a ten-year national program. Gruppo Mezzacorona, ten years across five portfolio brands. Enterprise Holdings, six brands across the US and LATAM.
Most agencies sell projects. We sell durations.
```
🔴 **VERIFY BEFORE SHIPPING:** none of these are current clients. Copy must read as historical, never present-tense. If any phrasing implies an active engagement, fix it. **And confirm each name already appears on the live site before featuring it** — do not introduce a client name from a memory document. The 7/17 spec's measured PROTECT list is Microsoft, Hasbro, Warner Bros, Tupperware. Anything outside that list gets verified against the repo first, or dropped.
### 2.4 Navigation
`Work · Services · Fractional CMO · Blog · About · Let's Talk`
→
`Work · Services · Ways to Work · Blog · About · Let's Talk`
Global. Every page, header and footer.
### 2.5 New page `/ways-to-work`
Reuse existing layout components. No new design work.
**H1:** `Three ways to work with us.`
**Sub:** `Same senior team at every depth. The only difference is how much of the function we hold.`
| Door | Copy | Links to |
|---|---|---|
| **Run the work** | You have a marketing leader. They need senior capacity on named workstreams: social, content, paid, creative. Delivered by senior practitioners, scoped to specific programs, with no junior layer to manage. Retainers from $4,000/mo. | `/services` |
| **Lead the function** | No marketing leader in the building. Someone has to own the number, the budget, and the channel mix. | `/fractional-cmo` |
| **Both** | Strategy and the hands to execute it. | `/contact` |
🔴 **Do NOT write "a senior bench" or imply standing headcount.** F&F is a solo principal with a vetted specialist bench brought in per engagement. A CMO buying execution asks "who is on the team" as the first qualifying question, and "bench" breaks on that answer. **"Senior capacity on named workstreams" is the honest and stronger frame** — it sells scoped programs, not seats-in-chairs.
**Featured proof:** the §2.3 receipts, same historical framing and same verification rule.
Add to sitemap. Internal-link from the homepage.
### 2.6 Homepage title + meta
```
Title:  Fifty & Five | Senior Marketing Leadership + Execution | 222 Brands Since 2008
Meta:   CMO strategy. Agency execution. ROI you can defend. We've run marketing for 222 brands across five continents since 2008. Lead the function, run the work, or both. Retainers from $4,000/mo.
```
Mirror to `og:` and `twitter:` description.
⚠️ **`$4,000`, not `$3K`.** Per `ff_pricing_floor_4k_2026-08-11.md`, nothing under $4,000 is published anywhere. An earlier draft of this spec said `$3K/mo`. That is dead.
**`/fractional-cmo` title and meta are UNCHANGED.** That page is the search asset for the term.
---
## STEP 3 — SCHEMA: ADDITIVE ONLY 🔴
The site earns **~1,100 AI citations/quarter** against **4 organic clicks/3 months**. The entity graph is the moat. **Remove nothing.**
| Field | Action |
|---|---|
| `Person.jobTitle` | **KEEP** `["Founder", "Fractional CMO"]`. Do NOT drop "Fractional CMO". |
| `knowsAbout` | **APPEND ONLY.** Check baseline first — the 7/17 spec may already have added `Marketing Leadership`. Add only what is missing from: `Marketing Operations`, `Agency Management`, `Marketing Execution`. Strict superset. |
| `MarketingAgency.slogan` | **UNTOUCHED** |
| `MarketingAgency.description` | **UNTOUCHED** (contains `Fortune 500s call`) |
| `alternateName` | APPEND ONLY |
| `Service` nodes | ADD one for the execution offer, `provider` → the MarketingAgency entity. No `Offer`/price node. |
| FAQPage | Existing Q&A unchanged, Q6 verbatim. **Exception: Q5 changes per the pricing spec.** You may ADD one Q. |
Optional new FAQ (add, don't replace):
```
Q: We already have a CMO. What does Fifty & Five do for us?
A: Run the work. Fifty & Five operates as the senior execution arm behind an
in-house marketing leader: social, content, paid, and creative, delivered by
senior practitioners on named workstreams. Blaze Pizza ran as a ten-year
national program on this model, and Enterprise Holdings ran six brands across
the US and LATAM. Retainers start at $4,000/mo.
```
---
## OUT OF SCOPE — do not touch
- 🔴 **The Cloudflare proxy.** GPTBot / ClaudeBot / PerplexityBot pass at HTTP 200 and that is *why* the AI citations work. If Vercel surfaces "Proxy Detected," ignore it.
- Design tokens, layout, spacing, color, type scale.
- The tagline `CMO strategy. Agency execution. ROI you can defend.`
- `/fractional-cmo` copy and FAQ (only the relocated hook is added; pricing per the pricing spec).
- `/autopilot`.
- Client counts, years, brand names, testimonials, verticals.
---
## VERIFICATION — every check must pass
1. `grep -c "Fractional CMO + Senior-Led Social"` → **0**
2. `"Most CMOs have run one brand"` on homepage → **0**; on `/fractional-cmo` → **≥1** verbatim
3. `grep -c "Fortune 500s call"` → **still 2, verbatim, unmoved**
4. Tagline count unchanged from baseline
5. `Person.jobTitle` contains **both** `Founder` and `Fractional CMO`
6. `knowsAbout` is a **strict superset** of baseline
7. `slogan` and `description` byte-identical to baseline
8. All JSON-LD parses; FAQPage Q6 verbatim
9. `/fractional-cmo` title + meta byte-identical to baseline
10. `/ways-to-work` returns 200, in sitemap, internally linked
11. Nav shows `Ways to Work` on every page, header and footer
12. **No copy implies Blaze / Mezzacorona / Enterprise Holdings are current clients**
13. **No copy says "bench" or implies standing headcount**
14. **Zero em dashes in new copy.** Check `—`, `&mdash;`, and `—`. *(Note: the outgoing H1 contains one, so the 7/17 spec's check #14 did not actually pass. Treat all baseline assumptions as suspect.)*
15. `222` count unchanged; no year, price, or client count altered outside the pricing spec
16. Build passes; Lighthouse/CWV not regressed; no new 404s
---
## REPORT BACK
1. Diff per file
2. All 16 verification results with actual numbers
3. **What the hero actually contained before you edited it**
4. **Every place the site states a price, client count, or year**, with the value. Surface conflicts, do not harmonize.
5. Anything in the 7/17 PROTECT list you had to touch, and why
---
## THEN: BUILDER/VALIDATOR GATE 🔴
Do not merge on the builder's say-so. Open a **fresh context**, read-only validator, run all 16 checks independently plus an adversarial "find what's wrong with this" pass. 🔴 findings block the merge. Ask it specifically:
- Does any new copy diminish a CMO buyer?
- Does `/ways-to-work` carry real, verified proof, or is it decorative?
- Does any copy imply a former client is current, or imply standing headcount?
- Was any schema value removed or reordered?
- Any em dashes, in any encoding?

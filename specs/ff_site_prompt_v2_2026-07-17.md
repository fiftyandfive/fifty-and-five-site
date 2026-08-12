# Claude Code Prompt v2 — fiftyandfive.com Repositioning
**Generated 2026-07-17 · SUPERSEDES `ff_site_repositioning_prompt_2026-07-16.md`**
**Why v2:** Lucas killed the locked brand line and "That's the receipt" after v1 was written. v1's §2 said "DO NOT REPLACE the brand line." That is now inverted. Do not use v1.
**Live audit run 2026-07-17 05:19 UTC (cache-busted). Counts below are measured, not estimated.**
---
# TASK: Migrate fiftyandfive.com to the new positioning
## THE NEW POSITIONING (locked by Lucas 2026-07-16, already live on LinkedIn)
**Tagline:** `CMO strategy. Agency execution. ROI you can defend.`
**Hook:** `Most CMOs have run one brand. We've led marketing for over 222.`
**Why:** F&F sells fractional CMO seats ($4,000–6,500/mo) alongside social retainers (from $3,000/mo). The site sells only the retainer. Lucas has **never held a CMO title** (last non-founder role: Corporate Marketing Manager, 2007–2009), so competing on "CMO-ness" against ex-CMOs loses. The hook inverts it: a CMO gets one brand's reps per career; F&F has 222. Provable, uncopyable, explains the price.
**Voice shift:** clever → credible. Agency wordplay is out. Plain competence is in. A buyer evaluating a $6,500 seat wants to hear you'll own the number.
## PRONOUN RULE (load-bearing, not style)
- **"We"** on all site/agency surfaces. `We've led marketing for over 222.`
- **"I"** is reserved for Lucas's personal LinkedIn and MAY be used on `/fractional-cmo` where the buyer is purchasing his judgment.
- On `/fractional-cmo` **the "we" is the flex** — a solo fractional CMO cannot offer a team. Do not flatten.
---
## 🔴 KILL (verified counts, all must reach 0)
| String | Live count | Action |
|---|---|---|
| `We do the storytelling` | **12** | delete |
| `You build the business` | **12** | delete |
| `50,000` | **2** | delete (see below) |
| `Senior-Led Boutique Social` | **12** | replace |
| `Senior-Led Boutique Agency` | **6** | replace |
| `the receipt` | **2** | delete |
### The brand line — 12 instances, 6 surface types
`We do the storytelling. You build the business.` lives in:
- `<meta name="description">`, `og:description`, `twitter:description`
- **`"slogan"` property in the `MarketingAgency` JSON-LD** ← this is a **schema edit**, not a copy edit. It is the machine-readable canonical tagline.
- Homepage hero display text (`font-serif text-display text-graphite`)
- Footer block
**Replace all 12 with `CMO strategy. Agency execution. ROI you can defend.`** including `slogan`.
### The $50K tier is fiction — FAQ Q5
Currently: *"four retainer tiers from $3,000/mo (Growth) to $50,000+/mo (Enterprise)."*
**Zero clients above $4,000/mo.** Book averages ~$1,700 across six. One prospect question kills the page's credibility.
**Replace Q5's answer with exactly:**
```
New retainers start at $3,000/mo. Fractional CMO seats are priced separately and
scoped to the function, not the deliverable.
```
"New retainers" makes the floor true and grandfathers legacy clients below it.
### "Social" is the ceiling word
`Senior-Led Boutique Social` (12) and `Senior-Led Boutique Agency` (6) → **`Fractional CMO + Senior-Led Social`**.
"Social" alone caps perceived price at the $3K tier while the fCMO seat is $4–6.5K.
**Exception: keep "boutique social media agency" inside FAQ answers** (§PROTECT).
---
## 🟢 PROTECT — verbatim, verified live counts
| String | Count | Note |
|---|---|---|
| **`Fortune 500s call`** | **2** | 🔴 **The best line on the property.** Do not touch, move, or front. Append only. |
| `Microsoft` | 8 | |
| `Hasbro` | 8 | |
| `Warner Bros` | 8 | |
| `Tupperware` | 6 | |
| `Recommendation Engineering` | 4 | in `knowsAbout` |
| `222+` | 13 | canonical figure. **Body copy uses `222+`. The hook uses `222`.** |
**FAQPage schema (7 Q&A) is the AEO moat.** The site earns **~1,100 AI citations/quarter** (Bing Webmaster AI Performance report) vs **746 Bing web impressions / 4 clicks / 3 months.** AI citation is the channel that works; organic web search is effectively dead here.
**Q6 is the moat verbatim — do not reword:**
> *"Fifty & Five is one of the only boutique social media agencies with an enterprise client list including Microsoft, Hasbro, Warner Bros., Enterprise Holdings, and Tupperware. Every account is run with senior-led practices and an AI-leveraged operating model."*
Keep all 7 pairs, keep `boutique` / `senior-led` / `AI-leveraged operating model` and every brand name. You may ADD Q8. You may not delete Q1–Q4, Q6, Q7. Only Q5 changes.
---
## 🔴 ENTITY SCHEMA — highest-leverage change in this migration
Verified live. **This entity is 100% social agency and 0% fractional CMO.** Ask an LLM "is Lucas Vandenberg a fractional CMO?" and the canonical data says *Founder, knows about social media*. The $4–6.5K product is invisible at the exact layer that feeds AI answers.
```
MarketingAgency:
  slogan        We do the storytelling. You build the business.   ← REPLACE
  description   Senior-led boutique social media agency. 222+ brands across 5
                continents since 2008. The boutique agency Fortune 500s call.
                                                                  ← DO NOT TOUCH
  alternateName Fifty and Five | Fifty & Five Agency | Fifty & Five Social Media
                | Fifty & Five Orlando                            ← APPEND ONLY
  knowsAbout    Social Media Marketing | Wine and Spirits Marketing | Franchise
                Social Media | Hospitality Marketing | Recommendation Engineering
                                                                  ← APPEND ONLY
Person: Lucas Vandenberg → jobTitle: "Founder"                     ← ADD fCMO
```
1. **`slogan`** → `CMO strategy. Agency execution. ROI you can defend.`
2. **`Person.jobTitle`** → `["Founder", "Fractional CMO"]` (array; keep Founder)
3. **`knowsAbout`** → APPEND `Fractional CMO`, `Marketing Leadership`, `Marketing Strategy`, `Brand Strategy`. Strict superset.
4. **`alternateName`** → APPEND `Fifty & Five Fractional CMO`
5. **`description`** → 🔴 untouched. `Fortune 500s call` is the strongest asset here.
6. Add a `Service` node for the fCMO offering, `provider` → the MarketingAgency entity. **No `Offer`/price node.**
---
## THE CHANGES
### A. Title + meta
```
Title:  Fifty & Five | Fractional CMO + Senior-Led Social Since 2008
Meta:   CMO strategy. Agency execution. ROI you can defend. Most CMOs have run one
        brand. We've led marketing for over 222+, across five continents since 2008.
        Fractional CMO seats and senior-led social retainers from $3K/mo.
```
Meta now leads with the NEW line (it previously led with the dead one).
### B. Homepage hero
⚠️ **Audit found `Activity isn't an outcome` returns 0** — that punchline is NOT live despite being in `FF_Master_Spec_v3.md`'s locked hero sequence. **Do not assume the spec matches the build. Read the actual hero component first and report what's there before editing.**
Target sequence:
1. Existing typewriter setup (unchanged)
2. **`Most CMOs have run one brand. We've led marketing for over 222.`**
3. **`CMO strategy. Agency execution. ROI you can defend.`**
4. CTAs (unchanged)
### C. Homepage — new section after the stats counters
```
A CMO learns one brand's lessons over a career. We've watched 222 brands make
every mistake there is. You're not buying a title. You're buying the pattern
recognition.
```
Reuse existing section components.
### D. `/fractional-cmo` — the biggest lift
```
Most fractional CMOs hand you a strategy and leave. Most agencies execute without
one. We do both.
We run the function and own the number. The team runs the work. Strategy, budget,
channel mix, agency oversight, and a coach for you and your team, so they get
sharper instead of more dependent.
Most CMOs have run one brand. We've led marketing for over 222.
```
**No scarcity language.** No "limited seats." One seat is filled; unbacked scarcity is a credibility burn.
### E. New FAQ Q8 (schema + visible)
```
Q: Why hire Fifty & Five instead of a fractional CMO?
A: Most fractional CMOs hand you a strategy and leave. Most agencies execute
without one. Fifty & Five does both: senior marketing leadership that owns the
number, plus the team that runs the work. A CMO typically runs one brand over a
career. Fifty & Five has led marketing for 222+ brands across five continents
since 2008.
```
Engineered to be LLM-quotable: specific, falsifiable, entity-anchored. Highest-value AEO addition here.
### F. Global sweep
Grep and fix: `zero account managers`, `owner-led`, `Fifteen years`, `200+ brands` (correct: `18 years`, `222+ brands`).
---
## VERIFICATION — all must pass
1. `grep -c "You build the business"` → **0** (was 12)
2. `grep -c "We do the storytelling"` → **0** (was 12)
3. `grep -c "the receipt"` → **0** (was 2)
4. `grep -c "50,000"` → **0** (was 2)
5. `grep -c "Senior-Led Boutique Social"` → **0** (was 12)
6. `grep -c "CMO strategy. Agency execution. ROI you can defend."` → **≥12**
7. **`grep -c "Fortune 500s call"` → still 2, verbatim, unmoved**
8. `Microsoft`=8, `Hasbro`=8, `Warner Bros`=8, `Tupperware`=6, `Recommendation Engineering`=4 — all unchanged
9. FAQPage JSON-LD parses; **8 Q&A**; Q6 verbatim; only Q5 changed
10. `MarketingAgency.slogan` = the new line
11. `Person.jobTitle` includes **both** `Founder` and `Fractional CMO`
12. `knowsAbout` is a strict superset of the original 5
13. All JSON-LD blocks parse
14. Zero em dashes in new copy
15. `/fractional-cmo` has no scarcity language
16. Lighthouse/CWV not regressed
## OUT OF SCOPE — do not touch
- Layout, design system, tokens. Live: `#FFFEF7` bg, `#9B2335` primary, Inter 300/400/500/600. **Any memory citing `#C41E3A` on `#0A0A0C` is stale.**
- 🔴 **The Cloudflare proxy.** GPTBot / ClaudeBot / PerplexityBot pass at HTTP 200 and that is *why* AI citations work. **If Vercel surfaces "Proxy Detected," ignore it.** Removing that layer trades ~1,100 citations/quarter for better Vercel analytics.
- `/autopilot` (orphan, separate decision)
- Any pricing beyond Q5
## REPORT BACK
1. Diff per file
2. All 16 verification results
3. **What the hero actually contains** (see §B — the spec and the build disagree)
4. **Every other place the site states a price, a client count, or a year.** Do not silently harmonize a conflict. Surface it.

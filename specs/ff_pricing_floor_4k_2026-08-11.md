# F&F Pricing Reset — $4,000 Floor
**2026-08-11 · Decision doc + Claude Code addendum**
**Executes alongside `ff_site_capability_repositioning_2026-08-11.md`. Same branch, same pass.**
> **Decisions locked by Lucas 2026-08-11:** (1) nothing under $4,000 advertised on F&F, (2) high tiers stay as price anchors, (3) existing clients grandfathered quietly, no repricing conversations.
> **Open, held for Lucas:** the sister-brand question. See §6.
---
## 1. THE NEW LADDER
| Tier | Current | **New** | Defensible because |
|---|---|---|---|
| **Growth** | $3,000–$5,000 | **$4,000–$6,500** | Landmark closed at $4,000. Floor = a real close. |
| **Premium** | $6,000–$10,000 | **$7,500–$12,000** | Sits above the seat, below Scale. No overlap. |
| **Scale** | $15,000–$25,000 | **$15,000–$25,000** *(unchanged)* | Multi-unit franchise precedent. |
| **Enterprise** | $30,000–$50,000+ | **$30,000–$50,000+** *(unchanged, anchor)* | See §3, mandatory. |
| **The seat (fCMO)** | $4,000–$6,500 | **$6,000–$9,500** | Must sit above the retainer entry or the premium product reads as the cheap one. |
**Why the seat moves up:** at $4,000–$6,500 it now collides exactly with the new Growth tier, which makes the strategic product look like the entry product. The 7/7 plan already escalates (seat 2 at $5–5.5K, seat 3 at $6–6.5K); publishing $6,000–$9,500 sets the anchor above that and leaves room to close inside it. **Landmark stays at $4,000 forever. It is a proof case, not a benchmark.**
**Keep verbatim, it is load-bearing:** *"Projects (site rebuilds, ad management at scale) priced separately so the seat stays strategic."*
---
## 2. EVERY SUB-$4K NUMBER ON THE F&F SITE
Claude Code must find and fix each. **Measure counts first, report, then edit.**
| Surface | Current | Action |
|---|---|---|
| `/services` Retainer Ladder, Growth tier | `$3K–$5K` | → `$4,000–$6,500` |
| `/services` meta description | `Retainers from $3K to $50K+/mo` | → `Retainers from $4,000 to $50K+/mo` |
| Homepage meta / hero / CTA | `from $3K/mo`, `$3,000/mo` | → `from $4,000/mo` |
| **FAQ Q5** | `New retainers start at $3,000/mo.` | → see §4 |
| `/fractional-cmo` price block | `$4,000–$6,500/mo` | → `$6,000–$9,500/mo` |
| Paid social band | `brands spending $1K–$25K/mo` | → see §5 |
| Out-of-scope hourly | `$200/hr` | → **`$275/hr`** (seat economics run $250–433/hr; $200 undercuts your own product) |
| Project minimum | `$15,000` precedent, no stated floor | → add `Projects from $15,000.` |
| Care plan, if published | `$75–150/mo` | **Remove from site.** Quote inside the SOW. A $99/mo line item next to a $4,000 floor is the single loudest contradiction available. |
| `/audit` free brand audit | `Free` | **Keep, but anchor it:** `A $2,500 audit. Free for qualified businesses.` Free is a lead magnet, not a price — but unpriced free reads as low value next to a $4K floor. |
🔴 **Global grep required.** These figures also live in blog posts, JSON-LD, OG tags, and SEO landing pages (`/orlando-social-media-agency`, `/franchise-social-media-agency`, `/fractional-cmo-orlando`, `/press`). **A price fixed on one surface is not a price fixed.** Enumerate every surface before declaring done.
---
## 3. 🔴 MANDATORY: make the Enterprise tier defensible
Keeping $30,000–$50,000+ published is a deliberate anchoring choice. It carries one specific risk, flagged in `ff_site_prompt_v2_2026-07-17.md`: *"One prospect question — 'who's on your Enterprise tier?' — turns the whole site into marketing."*
**The mitigation is one sentence, and it must ship with the tier or the tier is a trap you set for yourself.** Add directly beneath the Enterprise tier:
```
Enterprise programs are scoped, not templated. Blaze Pizza ran as a ten-year
national program from day zero to 300+ locations. Enterprise Holdings ran six
brands across the US and LATAM.
```
This is historically true, it answers the killer question before it is asked, and it converts an unbacked number into a referenced one. **Do not ship the tier without it.**
*Separate structural note, recorded not argued: at ~100–110 solo hrs/mo, a single $50K client would require 100% of a month at $455–500/hr. The tier functions as an anchor. It is not currently deliverable as a sale. Revisit if the bench becomes real.*
---
## 4. GRANDFATHER LANGUAGE
Reuse the construction from the 7/17 spec — it was written for exactly this and it works.
**FAQ Q5, new answer, verbatim:**
```
New retainers start at $4,000/mo. Fractional CMO seats are priced separately and
scoped to the function, not the deliverable.
```
**"New retainers" is the whole trick.** It makes the floor true today without a single client conversation, and it grandfathers the existing book silently. No announcement, no email, no renegotiation.
⚠️ **What this does not do:** 7 of 8 current clients sit below the published floor, representing **$12,175 of $16,175 MRR (75%)**. The floor is true for new business and aspirational for the book. Per the decision above, no repricing this pass. Two accounts to revisit when the trigger clears: **Palmr** (26 hrs/mo at ~$115/hr, flagged as the biggest leak in your own state file) and **C2D** ($1,550 at ~$119/hr, already flagged "let it go"). Not touched today. Logged so it is not invisible.
---
## 5. PAID SOCIAL — disambiguate spend from fee
`for brands spending $1K–$25K/mo` is **ad spend**, not your fee. But a prospect scanning the page sees `$1K` next to your name, and that is exactly the anchor you are trying to remove.
**Replace with:**
```
Paid social management for brands running $10,000+/mo in media.
Management from $4,000/mo. No hidden fees on ad spend.
```
Coherent: a client paying $4,000 in fees is not spending $1,000 in media. Keep `No hidden fees on ad spend` — it is a genuine differentiator.
*Flagged as Lucas's call: this narrows the stated paid-social ICP from $1K to $10K minimum spend. That is a real ICP change, not just a copy edit.*
---
## 6. SISTER BRANDS — sever the credential, keep the prices ✅
**Decided by Lucas 2026-08-11: Option 1.** TradeCraft ($249–$499/mo), TalentReel ($199–$399), and Garage Flip ($600–$1,800) **keep all published pricing.** Each is a productized service whose mechanism depends on a published flat price, and each sells to an ICP that has no relationship to a $4,000 floor. Different domains, different buyers, no shared checkout.
**The anchoring leak was never the prices. It is one line, live on tradecraftbuilds.com:**
```
EST. ORLANDO 2008 · 222+ BRANDS · SENIOR-LED · 5.0★ Clutch
```
That is the F&F credential rendered inches from `$249/mo` — the only place in the portfolio where "222 brands" and a sub-$4K number appear in the same eyeline.
### 6.1 TradeCraft execution (separate repo, separate pass)
**Remove from every surface:**
- `222+ BRANDS` and any variant (`222`, `222 brands`)
- `EST. ORLANDO 2008` / `SINCE 2008` / any date inheriting F&F's founding
- Any reference to Fifty & Five, Lucas's 18-year record, or the F&F client list
**Replace the credential strip with TradeCraft's own proof:**
```
ORLANDO · SENIOR-LED · 5.0★ CLUTCH · LIVE IN 10 DAYS OR YOUR MONEY BACK
```
The guarantee is a stronger trust signal for a contractor than a borrowed brand count, and it is TradeCraft's actual differentiator.
**Check the same surfaces on TalentReel and Garage Flip.** If either cites 222 brands, EST. 2008, or F&F, sever it the same way. Per the surface-enumeration rule: check meta, OG tags, JSON-LD, and footer, not just visible body copy.
**Also fix while in there (known, unshipped, 5 minutes):** TradeCraft publishes a **(310) area code** — Los Angeles — while selling *local* SEO to Orlando contractors. Change to a 407. This has been open since 7/17 and it undercuts the pitch at the first trust signal.
### 6.2 Sister-site divergence rule still binds
F&F crimson-luxury · TradeCraft navy-amber · Garage Flip orange-industrial. **They must not converge visually.** Severing the credential should push them further apart, not closer. Do not "harmonize" anything while in these repos.
---
## 7. VERIFICATION
1. `grep -rn "\$3,000\|\$3K\|3,000/mo"` → **0** across all F&F surfaces
2. `grep -rn "\$200/hr"` → **0**
3. `grep -rn "\$75\|\$150/mo\|care plan"` → no published care-plan price
4. Growth tier reads `$4,000–$6,500` everywhere it appears
5. `/fractional-cmo` price block reads `$6,000–$9,500/mo`
6. FAQ Q5 matches §4 verbatim; FAQPage JSON-LD updated to match the visible answer
7. **Enterprise tier ships with the §3 defensibility sentence.** Blocking.
8. Paid social block matches §5
9. `/audit` reads `A $2,500 audit. Free for qualified businesses.`
10. **Every** SEO landing page, blog post, OG tag, and JSON-LD block re-grepped for stale figures
11. No client name, count, year, or testimonial altered
12. Zero em dashes in new copy (check `—`, `&mdash;`, `—`)
13. All JSON-LD parses
**Report every price the site states after the change, with file and line.** Do not harmonize a conflict silently. Surface it.
---
## 8. ⚠️ UNRESOLVED NUMBER — do not quote either value
Blended hourly rate has **two live values** in the source docs:
- `ff_fractional_cmo_business_plan_2026-07-07.md` §8: **$146.69/hr** (computed on a six-client book)
- Current 8-client roster at 83 hrs/mo: **~$195/hr**
Per the atomicity rule, load-bearing numbers get one home and change in one pass. **Recompute against the current roster and actual hours before either figure enters a proposal, a pitch, or a decision.** Both are currently quotable and they disagree by 33%.
---
## REVIEW
**WHAT WORKED.** Running the roster math before responding. "75% of MRR sits below the proposed floor" and "a $50K client needs 100% of a solo month at $455/hr" are both derived from Lucas's own numbers, and they turned a taste question into a structural one. The §3 mitigation is the highest-value item in this doc: it keeps the anchor Lucas wants while removing the exact failure mode his own prior spec identified, so he doesn't have to choose between them.
**WHAT WAS WEAK.** I could not verify a single live price string myself. WebFetch summarizes rather than returning raw HTML, and the fetch-by-other-means restriction is absolute, so every figure in §2 comes from prior specs and CLAUDE.md rather than from the live site or the repo. Those sources have already been proven stale twice this session. The §2 table is therefore a *hypothesis to verify*, not an inventory, and I marked it measure-first rather than dressing it up as measured. I also proposed `$10,000+/mo in media` for the paid-social band without any data on what his actual paid clients spend; that number is invented to be coherent with a $4K fee, not derived.
**WHAT TO ADD BEFORE NEXT RUN.** A canonical price file in the F&F repo at `ai_docs/pricing.md`, referenced from CLAUDE.md as the single home for every published figure:
```
**Published pricing lives in ONE file:** <site-repo>/ai_docs/pricing.md.
Every number on the site, in proposals, and in decks reads from it.
Prices appear on 10+ surfaces (services, homepage, meta, FAQ schema, 4 SEO
landing pages, blog, OG tags). Changing one is never changing the price.
Update the file, then grep every surface in the same pass.
```
Pricing drifted across CLAUDE.md, the live site, and two specs simultaneously this session ($4,000 vs $4,000–6,500 for the seat alone). One file, one pass, or it drifts again next month.

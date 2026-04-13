# Case study hero images

Each case study can have one hero image. When unset, the page falls back to a
gradient placeholder in the vertical's color.

## Format guidelines

- **Aspect ratio**: 16:9 works everywhere. The individual case study page
  crops to 21:9 — avoid framing critical content in the top/bottom 12%.
- **Resolution**: 2000px wide minimum, 2400px ideal. Next.js optimizes and
  serves responsive sizes automatically.
- **Format**: `.jpg` for photography, `.png` for screenshots with flat colors.
  Avoid pre-compressing — let Next.js handle that.
- **Weight**: keep source under 2MB. Anything heavier means you're shipping
  an already-compressed file through another compressor.

## Expected filenames

Filename = case study slug. Once dropped, add the `heroImage` field in
`lib/data/caseStudies.ts`:

```ts
{
  slug: 'kendall-jackson',
  heroImage: '/images/case-studies/kendall-jackson.jpg',
  // ...
}
```

| Case study                | Filename                          |
| ------------------------- | --------------------------------- |
| Kendall-Jackson           | `kendall-jackson.jpg`             |
| Mezzacorona               | `mezzacorona.jpg`                 |
| Blaze Pizza               | `blaze-pizza.jpg`                 |
| Enterprise Holdings       | `enterprise-holdings.jpg`         |
| Centennial Real Estate    | `centennial-real-estate.jpg`      |
| Resorts World             | `resorts-world.jpg`               |
| NETGEAR / Arlo            | `netgear-arlo.jpg`                |
| Tupperware                | `tupperware.jpg`                  |
| Axe / Unilever            | `axe-unilever.jpg`                |
| Polynesian Cultural Ctr   | `polynesian-cultural-center.jpg`  |
| Microsoft                 | `microsoft.jpg`                   |
| SelectQuote Insurance     | `selectquote-insurance.jpg`       |

## Content suggestions

- Actual campaign creative beats generic brand photography every time.
- Screenshots of the feed in context (device mockups) read as proof.
- Venue or product shots you personally art-directed → strong.
- Stock photography → avoid. It undercuts the whole "personal portfolio" vibe.

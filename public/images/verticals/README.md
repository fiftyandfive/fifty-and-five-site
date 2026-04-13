# Vertical hero images

Each vertical page can have a hero image. The Vertical type accepts a
`heroImage` field — when set, it renders in the page header; otherwise
the header stays gradient-only.

## Format guidelines

- **Aspect ratio**: 21:9 or 16:9 both work — the vertical header crops wide.
- **Resolution**: 2400px wide recommended.
- **Format**: `.jpg`. Use slightly darker/moodier grades — the headline
  overlays directly, and high-contrast light images hurt legibility.
- Include a bit of negative space on the left/center-left for text overlay.

## Expected filenames

Filename = vertical slug. Drop file → add `heroImage` to `lib/data/verticals.ts`:

```ts
{
  slug: 'wine-spirits',
  heroImage: '/images/verticals/wine-spirits.jpg',
  // ...
}
```

| Vertical              | Filename                     |
| --------------------- | ---------------------------- |
| Wine & Spirits        | `wine-spirits.jpg`           |
| Hospitality & Tourism | `hospitality.jpg`            |
| Restaurant & Food     | `restaurant.jpg`             |
| Fitness & Wellness    | `fitness.jpg`                |
| Tech & SaaS           | `tech.jpg`                   |
| Retail & CPG          | `retail-cpg.jpg`             |
| Healthcare            | `healthcare.jpg`             |
| Real Estate           | `real-estate.jpg`            |
| Automotive            | `automotive.jpg`             |
| Entertainment & Media | `entertainment.jpg`          |

**Note**: The vertical page template doesn't currently render `heroImage` —
only the type is wired. When you're ready to add real images, ping Claude
and we'll extend `app/verticals/[slug]/page.tsx` to render it.

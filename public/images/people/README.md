# People — headshots

Primarily for the About page portrait.

## Format guidelines

- **Aspect ratio**: 1:1 (square). The About page crops to square.
- **Resolution**: 1200×1200px minimum, 2000×2000px ideal.
- **Format**: `.jpg`, medium-warm grade, natural lighting.
- **Framing**: shoulders-up or 3/4 length. Avoid centered head-and-shoulders
  passport-style — read as LinkedIn default.
- **Background**: simple, uncluttered. A bookshelf, a painted wall, or
  environmental Orlando context works. Avoid busy city streetscapes.

## Expected filename

`lucas.jpg`

Once dropped, uncomment the `src` line in `app/about/page.tsx`:

```tsx
<PlaceholderImage
  aspect="1/1"
  colorKey="tech"
  label="Portrait — Lucas Vandenberg"
  className="rounded-[12px]"
  src="/images/people/lucas.jpg"
  alt="Lucas Vandenberg, Founder of Fifty & Five"
/>
```

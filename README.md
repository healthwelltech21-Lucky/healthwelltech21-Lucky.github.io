# healthwelltech21

Slow living, clean choices, gentle wellness.

A static blog built with Astro + Tailwind CSS, optimized for Amazon Associates affiliate revenue and Pinterest traffic.

## North-Star Metric

**Outbound Amazon clicks per week.** Not pageviews.

## Quick Start

```bash
npm install
npm run dev
```

## How to Add a New Post

1. Copy any existing post in `src/content/blog/`
2. Rename the file to your new slug (e.g., `my-new-post.md`)
3. Update the frontmatter (title, description, category, dates, keywords)
4. Write your content using the H2 structure:
   - Why I tried [X]
   - What [X] actually is (the no-BS version)
   - One H2 per product
   - Who this is for / who should skip it
   - What I'd buy first if I were starting today
   - FAQ (5 questions)
5. Add product placeholders: `<!-- PRODUCT: name="..." asin="B0XXXXXX" rating=X price="$XX" -->`
6. Drop your hero image in `public/images/posts/[slug]/hero.jpg` (1600×2000)
7. Run `npm run dev` to preview
8. Push to `main` — GitHub Actions deploys automatically

## How to Update Amazon Links After Approval

Find and replace placeholder ASINs:
```bash
grep -r "B0XXXXXX" src/content/blog/
```
Replace each `B0XXXXXX##` with your real ASIN. The affiliate tag `healthwelltech21-20` is already in the link template.

## How to Swap in Real Photos

1. Place photos in `public/images/posts/[slug]/`
2. Name the hero `hero.jpg` (1600×2000)
3. Update the `heroImage` path in the post frontmatter if needed

## Tech Stack

- **Astro** — Static site generator
- **Tailwind CSS v4** — Styling
- **Markdown** — Content via Astro Content Collections
- **GitHub Pages** — Free hosting
- **Plausible** — Analytics (uncomment after setup)
- **ConvertKit (Kit)** — Email capture

## Project Structure

```
src/
├── components/     # Astro components
├── content/blog/   # Markdown blog posts
├── layouts/        # Base layout
├── pages/          # Route pages
└── styles/         # CSS tokens + global styles
public/
├── images/         # Post images
├── lead-magnets/   # PDF downloads
└── svgs/           # Decorative botanicals
```

## Deployment

Pushes to `main` trigger GitHub Actions → builds Astro → deploys to GitHub Pages.

Custom domain: Add a `CNAME` file to `public/` with your domain.

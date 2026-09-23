# AppScoutHub

A modern, SEO-ready Astro blog for honest reviews of AI tools and software — built with Tailwind CSS v4, content collections, dark mode, RSS, and structured data.

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon.svg / favicon.ico
│   ├── og-default.svg      # fallback social share image
│   └── robots.txt
├── src/
│   ├── components/         # Header, Footer, ReviewCard, RatingStars, SEO
│   ├── content/
│   │   └── reviews/        # AI tool review markdown files (edit/add here)
│   ├── content.config.ts   # "reviews" content collection schema
│   ├── layouts/            # BaseLayout, ReviewLayout
│   ├── pages/
│   │   ├── index.astro          # homepage
│   │   ├── reviews/index.astro  # all reviews, filterable by category
│   │   ├── reviews/[...slug].astro
│   │   ├── categories/index.astro
│   │   ├── categories/[category].astro
│   │   ├── about.astro
│   │   └── rss.xml.js
│   └── styles/global.css   # Tailwind theme tokens, dark mode, utilities
└── astro.config.mjs
```

## ✍️ Adding a new review

Create a new `.md`/`.mdx` file in `src/content/reviews/` with frontmatter matching the schema in `src/content.config.ts` (title, description, toolName, category, rating, pricing, websiteUrl, pubDate, pros, cons, tags, featured). The page, card, RSS entry, and sitemap URL are generated automatically.

## 🔍 SEO features

- Per-page meta description, canonical URL, Open Graph & Twitter Card tags (`src/components/SEO.astro`)
- JSON-LD structured data: `WebSite` on the homepage, `Review` + `BreadcrumbList` on review pages
- Auto-generated `sitemap-index.xml` via `@astrojs/sitemap`
- `rss.xml` feed of all reviews
- `public/robots.txt` pointing to the sitemap
- Semantic HTML headings and `<time>` elements

**Before deploying**, update the `site` URL in `astro.config.mjs`, `SITE_URL`/`TWITTER_HANDLE` in `src/consts.ts`, and the sitemap URL in `public/robots.txt` to your real domain.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

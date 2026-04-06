# Roger Chappel's Personal Website

This is the source code for my personal website, built with [Astro](https://astro.build/) and deployed on [Vercel](https://vercel.com/).

## About

I'm Roger Chappel, a technical founder based in Australia. I build AI-powered products at [Axislabs](https://axislabs.dev) and I'm CTO of Thoroughbreds.ai. This website hosts my personal blog and information about my work.

## Project Structure

```
├── public/                # Static assets (images, favicon)
│   ├── favicon.svg
│   └── roger.jpg
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── PostCard.astro
│   ├── content/
│   │   └── blog/          # Blog posts in Markdown
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/             # Routes and pages
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── blog/
│   │   └── rss.xml.ts
│   ├── styles/
│   │   └── global.css     # CSS variables, dark mode, grid background
│   └── utils/
│       └── readingTime.ts
├── astro.config.mjs       # Astro configuration
├── vercel.json            # Vercel deployment config
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── LICENSE                # MIT License
```

## Features

- Dark/light/system theme toggle with localStorage persistence
- Subtle grid background
- JetBrains Mono headings with Inter body text
- GitHub contribution chart and live stats on About page
- Buttondown newsletter integration
- RSS feed
- Responsive design with Tailwind CSS 4
- SEO: Open Graph, Twitter cards, JSON-LD, sitemap

## Commands

| Command | Action |
|---------|--------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start local dev server at `localhost:4321` |
| `pnpm build` | Build the production site to `./dist/` |
| `pnpm preview` | Preview the build locally before deploying |

## Deployment

This site is deployed on Vercel. Connect your GitHub repo and it will automatically build and deploy on push to `main`.

## Tech Stack

- [Astro](https://astro.build/) 5.x
- [Tailwind CSS](https://tailwindcss.com/) 4
- TypeScript
- [Buttondown](https://buttondown.com/) for newsletter

## License

This project is licensed under the [MIT License](LICENSE).

Blog post content is © Roger Chappel. Feel free to reference or link, but please don't republish posts in full without permission.

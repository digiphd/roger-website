# CLAUDE.md — Agent Instructions for roger-website

This is a personal blog/website built with Astro, Tailwind CSS, and MDX. Use these instructions when creating or editing content.

## Stack

- **Framework:** Astro 6 with MDX
- **Styling:** Tailwind CSS 4 with `@tailwindcss/typography`
- **Fonts:** Inter (body), JetBrains Mono (code)
- **Newsletter:** Buttondown (`roger_creator`)
- **Deployment:** Vercel (auto-deploys from `main`)
- **OG Images:** Remotion (React-rendered, no API keys)

## Creating a Blog Post

1. Create `src/content/blog/<slug>.mdx`
2. Add frontmatter:

```yaml
---
title: "Your Post Title"
description: "A compelling one-line description for SEO and social."
pubDate: 2026-04-06
tags: ["tag1", "tag2"]
draft: false
---
```

3. Import and use MDX components to break up text (see below)
4. Generate the OG image: `pnpm og` (or `node scripts/generate-og-images.mjs <slug>`)
5. Commit both the post and the generated `public/og/<slug>.png`

## MDX Components

Import these at the top of any `.mdx` file to add visual variety:

```mdx
import Callout from "../../components/mdx/Callout.astro";
import Highlight from "../../components/mdx/Highlight.astro";
import Step from "../../components/mdx/Step.astro";
import CompareTable from "../../components/mdx/CompareTable.astro";
import StatBlock from "../../components/mdx/StatBlock.astro";
```

### Callout

Info boxes, warnings, tips, and quotes. Use to call attention to key details.

```mdx
<Callout type="info" title="Optional title">
Your content here. Supports **markdown** inside.
</Callout>
```

Types: `info` (💡), `warning` (⚠️), `tip` (✅), `quote` (💬)

### Highlight

Large pull-quote for key takeaways. Use 1-2 per post to break up long sections.

```mdx
<Highlight emoji="🔑">
Your standout statement goes here.
</Highlight>
```

### Step

Numbered steps for workflows or processes. Use in sequence.

```mdx
<Step number={1} title="Step title">
Description of this step.
</Step>
```

### StatBlock

Grid of stats/metrics. Use for data-driven emphasis.

```mdx
<StatBlock stats={[
  { label: "Users", value: "10k" },
  { label: "Uptime", value: "99.9%" },
  { label: "Cost", value: "$0" },
]} />
```

### CompareTable

Two-column comparison (do/don't, before/after, pros/cons).

```mdx
<CompareTable
  left={{ title: "Before", items: ["Problem 1", "Problem 2"] }}
  right={{ title: "After", items: ["Solution 1", "Solution 2"] }}
/>
```

Optional: `leftColor` and `rightColor` props (Tailwind text color classes).

## Content Guidelines

### Visual rhythm

A good post alternates between text and visual elements:

- Open with 1-2 paragraphs of text
- Add a `Highlight` for the key thesis
- Use `Step` components for any sequential process
- Use `Callout` for tips, warnings, or important asides
- Use `StatBlock` when you have numbers to show
- Use `CompareTable` for any before/after or trade-off discussion
- Aim for a visual element every 2-3 paragraphs

### Writing style

- Direct, no fluff. Short sentences mixed with longer ones.
- No em dashes (use commas, colons, semicolons instead)
- Avoid AI vocabulary: "delve", "tapestry", "landscape", "pivotal", "fostering", "crucial"
- No sycophancy or inflated significance
- Code examples should be practical and copy-pasteable
- End with a clear takeaway or call to action

### SEO

- Title: clear, searchable, under 60 chars
- Description: compelling, under 160 chars
- Tags: 2-4 relevant tags from existing set or create new ones
- Use H2s for main sections, H3s sparingly
- Target long-tail keywords a new site can rank for (KD% < 50), not head terms
- Back up all claims with legitimate research and link to sources
- Include internal links to other blog posts where relevant

### Author & Structured Data

The site automatically generates rich JSON-LD `BlogPosting` schema for every post, including:

- Author info (name, photo, job title, social links, organization)
- Headline, description, image, date published
- Word count, article section (from first tag), keywords

An `AuthorBio` component renders at the bottom of every blog post (between article content and the subscribe/share footer). This is critical for Google E-E-A-T signals. **Do not remove it.**

The author bio pulls from `src/consts.ts` for social links. If you fork this repo, update those constants.

### Research & Citations

Every blog post should include real, verifiable data to support claims:

- Link to primary sources (studies, surveys, official reports)
- Use specific numbers, not vague claims ("42% of startups" not "many startups")
- Acceptable sources: academic papers, industry reports (Gartner, McKinsey, CB Insights), official company blogs, government data, peer-reviewed research
- Avoid: random blog posts as sole sources, outdated stats (>3 years old), unverifiable claims

## OG Image Generation

```bash
# All posts
pnpm og

# Single post
node scripts/generate-og-images.mjs my-post-slug

# Preview/edit template
pnpm og:preview
```

Template is at `remotion/compositions/OGImage.tsx`. Customize colors, layout, and branding there.

Output goes to `public/og/<slug>.png` (1200×630). Blog layout auto-references these.

## Commands

```bash
pnpm dev        # Local dev server
pnpm build      # Production build
pnpm preview    # Preview production build
pnpm og         # Generate OG images
pnpm og:preview # Remotion Studio for OG template
```

## Project Structure

```
src/
  content/blog/       # MDX blog posts
  components/mdx/     # Reusable MDX components (Callout, Highlight, Step, etc.)
  components/         # Astro components (Header, Footer, PostCard, AuthorBio, etc.)
  layouts/            # BaseLayout (handles meta tags, JSON-LD, OG, theme)
  pages/              # Routes (index, blog, about)
  pages/blog/[id].astro  # Blog post template (renders MDX + AuthorBio + footer)
  styles/             # Global CSS with theme variables
  consts.ts           # Site title, description, URL, social links
remotion/             # OG image compositions
scripts/              # Build scripts (OG generator)
public/og/            # Generated OG images (committed to repo)
```

## Forking This Repo

If you're cloning this for your own site:

1. Update `src/consts.ts` with your name, social links, and site URL
2. Replace `public/roger.jpg` with your photo
3. Edit `remotion/compositions/OGImage.tsx` to match your brand colors
4. Update the Buttondown form action in `src/pages/index.astro` and `src/components/BlogPostFooter.astro`
5. Delete existing posts in `src/content/blog/` and write your own
6. Run `pnpm og` to generate fresh OG images
7. Deploy to Vercel (or any static host)

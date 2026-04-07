# OPENAI.md — Agent Instructions for roger-website

This file mirrors the practical rules from `CLAUDE.md` for agents using OpenAI models.

## Non-negotiable workflow for blog posts

When creating or editing a blog post in this repo, do all of the following:

1. Create or update `src/content/blog/<slug>.mdx`
2. Add valid frontmatter:

```yaml
---
title: "Your Post Title"
description: "A compelling one-line description for SEO and social."
pubDate: 2026-04-06
tags: ["tag1", "tag2"]
draft: false
---
```

3. Import and use the MDX components when helpful:

```mdx
import Callout from "../../components/mdx/Callout.astro";
import Highlight from "../../components/mdx/Highlight.astro";
import Step from "../../components/mdx/Step.astro";
import CompareTable from "../../components/mdx/CompareTable.astro";
import StatBlock from "../../components/mdx/StatBlock.astro";
```

4. Generate the OG image for every new post:

```bash
node scripts/generate-og-images.mjs <slug>
```

Or generate all:

```bash
pnpm og
```

5. Commit both:
   - the post file in `src/content/blog/`
   - the generated image in `public/og/<slug>.png`

## Important notes

- The site already generates blog post JSON-LD schema automatically in `src/pages/blog/[id].astro`.
- The layout automatically references `/og/<slug>.png`.
- If the OG image is missing, the post will render with a broken image in listings and the article page.
- Do not remove the author bio or the article schema wiring.

## Content rules

- Direct writing, no fluff
- No em dashes
- Use real citations for factual claims
- Prefer long-tail SEO angles over broad head terms
- Add internal links where relevant

## Pre-PR checklist

Before opening a PR for a blog post, confirm:

- [ ] MDX post exists in `src/content/blog/`
- [ ] Frontmatter is valid
- [ ] OG image exists in `public/og/`
- [ ] Title and description are SEO-friendly
- [ ] Claims are backed by real sources
- [ ] Both post and OG image are committed

If you skip the OG image step, the job is not complete.
# Scripts

## OG Image Generator

Generate Open Graph images for blog posts using Remotion. Pure React rendering, no API keys required.

### Usage

```bash
# Generate OG images for all published posts
pnpm og

# Generate for a single post
node scripts/generate-og-images.mjs my-post-slug

# Preview/edit the template in Remotion Studio
pnpm og:preview
```

### Output

Images are rendered to `public/og/<slug>.png` at 1200×630 (standard OG image size).

The blog layout automatically picks up OG images at `/og/<slug>.png` for social sharing meta tags.

### Customization

Edit `remotion/compositions/OGImage.tsx` to change the template:

- **Colors**: Modify the gradient background, accent colors, text colors
- **Layout**: Rearrange title, tags, author, date positioning
- **Typography**: Change font sizes, weights, line heights
- **Branding**: Update the avatar, site URL, accent line

The template auto-adjusts font size based on title length (64px → 56px → 48px for longer titles).

### For AI Agents

When creating a new blog post:

1. Add the `.mdx` file to `src/content/blog/` with frontmatter including `tags`
2. Run `pnpm og` to generate the OG image
3. The blog layout will automatically use `/og/<slug>.png` as the social share image
4. Commit both the post and the generated image

To create custom infographics, add new compositions to `remotion/compositions/` and register them in `remotion/Root.tsx`.

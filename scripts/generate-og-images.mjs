#!/usr/bin/env node
/**
 * Generate OG images for all blog posts using Remotion.
 *
 * Usage:
 *   node scripts/generate-og-images.mjs            # all posts
 *   node scripts/generate-og-images.mjs my-post-slug  # single post
 *
 * No API keys required. Pure React rendering.
 * Output: public/og/<slug>.png (1200x630)
 */

import { bundle } from "@remotion/bundler";
import { renderStill, selectComposition } from "@remotion/renderer";
import { readdir, readFile, mkdir } from "fs/promises";
import { join, basename } from "path";
import { existsSync } from "fs";

const BLOG_DIR = "src/content/blog";
const OUTPUT_DIR = "public/og";
const REMOTION_ENTRY = "remotion/index.ts";

async function parseFrontmatter(filePath) {
  const content = await readFile(filePath, "utf-8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const fm = {};
  for (const line of match[1].split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let val = line.slice(colonIdx + 1).trim();

    // Handle arrays like ["tag1", "tag2"]
    if (val.startsWith("[")) {
      try {
        val = JSON.parse(val);
      } catch {
        val = val.replace(/[\[\]"]/g, "").split(",").map((s) => s.trim());
      }
    }
    // Handle booleans
    if (val === "true") val = true;
    if (val === "false") val = false;
    // Strip quotes
    if (typeof val === "string") val = val.replace(/^["']|["']$/g, "");

    fm[key] = val;
  }

  return fm;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

async function main() {
  const targetSlug = process.argv[2];

  // Ensure output dir exists
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true });
  }

  // Get blog posts
  const files = (await readdir(BLOG_DIR)).filter(
    (f) => f.endsWith(".md") || f.endsWith(".mdx")
  );

  const posts = [];
  for (const file of files) {
    const slug = basename(file).replace(/\.mdx?$/, "");
    if (targetSlug && slug !== targetSlug) continue;

    const fm = await parseFrontmatter(join(BLOG_DIR, file));
    if (!fm || fm.draft === true) continue;

    posts.push({
      slug,
      title: fm.title || slug,
      tags: Array.isArray(fm.tags) ? fm.tags : [],
      date: fm.pubDate ? formatDate(fm.pubDate) : "",
    });
  }

  if (posts.length === 0) {
    console.log("No posts to generate OG images for.");
    return;
  }

  console.log(`Bundling Remotion project...`);
  const bundled = await bundle({ entryPoint: REMOTION_ENTRY });

  for (const post of posts) {
    const outputPath = join(OUTPUT_DIR, `${post.slug}.png`);
    console.log(`Rendering: ${post.slug}`);

    const inputProps = {
      title: post.title,
      tags: post.tags,
      date: post.date,
      author: "Roger Chappel",
      siteUrl: "rogerchappel.com",
    };

    const composition = await selectComposition({
      serveUrl: bundled,
      id: "OGImage",
      inputProps,
    });

    await renderStill({
      serveUrl: bundled,
      composition,
      output: outputPath,
      inputProps,
    });

    console.log(`  ✓ ${outputPath}`);
  }

  console.log(`\nDone! Generated ${posts.length} OG image(s).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

// ============================================================
// Site & Author Configuration
// ============================================================
// This is the SINGLE SOURCE OF TRUTH for all personal info,
// social links, and site metadata. Every component pulls from
// here. To personalize this site, edit this file only.
// ============================================================

export const SITE_TITLE = "Roger Chappel";
export const SITE_DESCRIPTION =
  "Technical founder building AI-powered products. Founder of Axislabs.dev. Writing about building, shipping, and the AI founder journey.";
export const SITE_URL = "https://rogerchappel.com";

export const AUTHOR = {
  name: "Roger Chappel",
  handle: "@roger_creator",
  photo: "/roger.jpg",
  jobTitle: "CTO & Founder",
  bio: "CTO and founder building AI-native SaaS at Axislabs.dev. Writing about shipping products, working with AI agents, and the solo founder grind.",
  aboutDescription:
    "Technical founder, full-stack engineer, and AI product builder based in Australia.",
  location: "Australia",
  organization: {
    name: "Axislabs",
    url: "https://axislabs.dev",
  },
  /** Short intro paragraphs for the About page (HTML allowed) */
  aboutIntro: [
    "I'm Roger. I build things with code, ship them fast, and write about what I learn along the way.",
    'I run <a href="https://axislabs.dev" target="_blank" rel="noopener noreferrer">Axislabs</a>, a portfolio of AI-powered SaaS products. I\'m also CTO & co-founder of <strong>Thoroughbreds.ai</strong>, where we\'re bringing AI to the thoroughbred racing industry.',
    "My background is full-stack engineering: Next.js, TypeScript, Python, and whatever else gets the job done. These days I spend most of my time at the intersection of AI and product development. I'm interested in what happens when you treat AI agents as first-class team members, not just tools.",
    "I'm based in Australia. When I'm not coding, I'm probably thinking about coding. Working on it.",
  ],
  /** Topics listed on the About page */
  writesAbout: [
    "Building AI-powered products (the real stuff, not the hype)",
    "Shipping SaaS as a solo/small-team founder",
    "Engineering decisions and trade-offs",
    "The founder journey, unfiltered",
  ],
} as const;

export const SOCIAL = {
  twitter: "https://x.com/roger_creator",
  github: "https://github.com/digiphd",
  linkedin: "https://www.linkedin.com/in/rogerchappel/",
  tiktok: "https://www.tiktok.com/@roger.chappel",
  email: "mailto:roger@axislabs.dev",
  axislabs: "https://axislabs.dev",
} as const;

/** GitHub username for contribution chart and API calls */
export const GITHUB_USERNAME = "digiphd";

/** Buttondown newsletter ID */
export const NEWSLETTER_ID = "roger_creator";

/** All social profile URLs for JSON-LD sameAs */
export const SOCIAL_PROFILES = [
  SOCIAL.twitter,
  SOCIAL.github,
  SOCIAL.linkedin,
  SOCIAL.tiktok,
] as const;

/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE COPY LIVES HERE.
 *  Edit text, links, and projects in this file only — the layout
 *  components read from it. Save and the local preview reloads.
 *
 *  Anything still marked TODO is a placeholder to fill in.
 *  See README.md → "Adding a new project card".
 * ─────────────────────────────────────────────────────────────
 */

// ── Shared links ─────────────────────────────────────────────
export const links = {
  email: 'LakeLocLam@gmail.com',
  linkedin: 'https://www.linkedin.com/in/loc-lam',
  youtube: 'https://www.youtube.com/@ScaleWithLoc',
  youtubeHandle: '@ScaleWithLoc',
  resume: '/resume.pdf', // file lives at public/resume.pdf
};

// ── SEO ──────────────────────────────────────────────────────
export const seo = {
  title: 'Loc Lam — Product Manager | AI & Growth',
  description:
    'Loc Lam is a Product Manager with 8+ years across fintech, healthcare, telecom, and services, building AI products that move acquisition, LTV, and retention.',
  ogImage: '/og-image.png', // regenerate with `npm run og`
};

// ── Navigation ───────────────────────────────────────────────
export const nav = [
  { label: 'Levers', href: '#levers' },
  { label: 'Work', href: '#work' },
  { label: 'Build', href: '#build' },
  { label: 'How I work', href: '#process' },
  { label: 'About', href: '#about' },
];

// ── 1. Hero ──────────────────────────────────────────────────
export const hero = {
  name: 'Loc Lam',
  badge: 'Open to full-time Product Manager & AI Growth roles',
  headline: 'Most teams pull one growth lever. I build AI products that pull all three.',
  subheadline:
    '8+ years in product across fintech, healthcare, telecom, and services. Proven results in acquisition, LTV, and retention, built with Claude, n8n, Voice AI, and agentic workflows.',
  primaryCta: { label: 'See the work', href: '#work' },
  secondaryCta: { label: "Let's talk", href: '#contact' },
  headshot: {
    src: '/images/headshot-640.jpg',
    alt: 'Headshot of Loc Lam smiling, wearing a light gray sweater',
  },
};

// ── 2. The three levers ──────────────────────────────────────
export const levers = {
  eyebrow: 'What I solve',
  title: 'The three levers',
  items: [
    {
      number: '01',
      title: 'Customer Acquisition',
      body: 'Win and convert high-intent users with lower CAC.',
    },
    {
      number: '02',
      title: 'Value Expansion (LTV)',
      body: 'Maximize account value and monetization depth through personalized lifecycle systems.',
    },
    {
      number: '03',
      title: 'Retention & Stickiness',
      body: 'Turn early users into long-term accounts via behavioral triggers and proactive support.',
    },
  ],
};

// ── 3. Case studies ──────────────────────────────────────────
// Each result is either a before → after pair, or a single `value`.
export type Result =
  | { label: string; before: string; after: string; period?: string }
  | { label: string; value: string; period?: string };

export type CaseStudy = {
  lever: string; // e.g. 'Lever 1'
  leverName: string; // e.g. 'Customer Acquisition'
  context: string; // industry / product
  company: string;
  problem: string;
  whatIDid: string;
  results: Result[];
  tags: string[];
};

export const caseStudies = {
  eyebrow: 'Proof',
  title: 'One lever at a time, measured',
  items: [
    {
      lever: 'Lever 1',
      leverName: 'Customer Acquisition',
      context: 'Freight fintech payments platform',
      company: 'Triumph Financial',
      problem:
        'New carriers stalled during onboarding, slowing adoption of a new payments platform.',
      whatIDid:
        'Led product discovery and delivery; introduced AI-assisted invoice parsing and automated verification prototypes; aligned Sales, Marketing, and Operations on launch.',
      results: [
        { label: 'Active adoption (user accounts)', before: '0', after: '22,000', period: 'in 12 months' },
        { label: 'Onboarding conversion', before: '10%', after: '25%', period: 'in 3 months' },
        { label: 'Day-1 adoption', value: '+30%' },
      ],
      tags: ['Product discovery', 'AI prototyping', 'GTM'],
    },
    {
      lever: 'Lever 2',
      leverName: 'Value Expansion (LTV)',
      context: 'Healthcare Services & Operations',
      company: 'FirstLight',
      problem:
        'Inbound prospect inquiries went cold due to slow triage, while existing client care updates remained manual, generic, and unscaled.',
      whatIDid:
        'Built autonomous lead nurture workflows via n8n and Claude that parsed intake transcripts into customized care proposals; deployed dynamic lifecycle touchpoints triggered by care milestones.',
      results: [
        { label: 'Customer LTV', before: '$9,000', after: '$17,000', period: 'in 6 months' },
        { label: '90-day retention', before: '60%', after: '90%', period: 'in 6 months' },
        { label: 'Lead-to-client conversion', before: '2%', after: '10%', period: 'in 3 months' },
      ],
      tags: ['Lifecycle Automation', 'n8n', 'Claude', 'RAG Workflows'],
    },
    {
      lever: 'Lever 3',
      leverName: 'Retention & Stickiness',
      context: 'Freight fintech payments platform',
      company: 'Triumph Financial',
      problem: "Too many users didn't come back after their first visits.",
      whatIDid:
        'Implemented contextual in-app behavioral analytics and event-driven triggers to reach users at the right moment.',
      results: [
        { label: '30-day returning users', before: '50%', after: '70%', period: 'in 6 months' },
      ],
      tags: ['Product analytics', 'Event-driven triggers', 'Engagement'],
    },
  ] satisfies CaseStudy[],
  supportingLine:
    'Earlier at Transamerica: drove user engagement up 35% and partnered with data engineering on predictive customer segmentation behind acquisition initiatives that generated $75M in cumulative revenue.',
};

// ── 4. Featured build ────────────────────────────────────────
export const featuredBuild = {
  eyebrow: 'Featured build · Working prototype',
  title: 'Inbound Lead Triage Agent',
  problem:
    'Sales reps lose buyer intent while they manually research and qualify each inbound lead.',
  whatIBuilt:
    'A webhook receives a new lead → Claude scores it 1–10 against an ideal customer profile, assigns a tier, writes a company summary and a personalized 3-sentence email → a JavaScript step validates the output → the record is logged to a Google Sheets pipeline.',
  builtWith: 'n8n + Claude',
  result:
    'In testing, a form submission becomes a scored, tiered lead with a draft email in about 3.8 seconds.',
  next:
    "Add a live company-data lookup so summaries aren't limited to the model's own knowledge, and flag low-confidence scores for human review.",
  flow: [
    { step: 'Webhook', detail: 'New lead arrives' },
    { step: 'Claude', detail: 'Score 1–10, tier, summary, email' },
    { step: 'Validate', detail: 'JavaScript checks the output' },
    { step: 'Google Sheets', detail: 'Logged to the pipeline' },
  ],
  screenshot: {
    src: '/images/n8n-workflow-1600.png',
    fullSrc: '/images/n8n-workflow.png',
    caption: 'The n8n workflow. Click to enlarge.',
    alt: 'Screenshot of the n8n workflow: Webhook node, Basic LLM Chain using the Anthropic Chat Model, a Code in JavaScript node, and an Append row in sheet node, connected left to right.',
  },
  // TODO: paste the YouTube link (e.g. 'https://www.youtube.com/watch?v=abc123').
  // Leave empty ('') to hide the video block.
  videoUrl: '',
  tags: ['n8n', 'Claude API', 'Webhooks', 'JSON Schema', 'Workflow Automation'],
};

// ── 5. How I work ────────────────────────────────────────────
export const process = {
  eyebrow: 'Process',
  title: 'How I work',
  steps: [
    { title: 'Discover', body: 'Talk to users and find the metric that matters.' },
    { title: 'Prototype with AI', body: 'Build a working version in days, not months.' },
    { title: 'Experiment', body: 'Test with real users and measure the result.' },
    { title: 'Scale', body: 'Automate what works and roll it out.' },
  ],
};

// ── 6. Teaching & content ────────────────────────────────────
export const teaching = {
  eyebrow: 'Teaching & content',
  title: 'Sharing what I learn',
  items: [
    {
      title: 'Contributor & Coach, TechCareers',
      body: 'Helping people move into PM and AI roles',
      href: '', // TODO: link
    },
    {
      title: 'Co-host, TechCareers live webinars',
      body: '',
      href: '', // TODO: link
    },
    {
      title: 'Guest, NEAT with Reshma podcast',
      body: 'PM panel',
      href: '', // TODO: link to the episode
    },
    {
      title: 'YouTube',
      body: '@ScaleWithLoc',
      href: 'https://www.youtube.com/@ScaleWithLoc',
    },
  ],
};

// ── 7. About ─────────────────────────────────────────────────
export const about = {
  eyebrow: 'About',
  title: 'Engineer turned product builder',
  paragraphs: [
    "I started in engineering (B.S. Electrical Engineering, UC San Diego) and moved into product. I've led products in fintech at Transamerica and Triumph Financial, and driven growth in healthcare services. Today I build with AI to move acquisition, customer value, and retention.",
  ],
};

// ── 8. Contact ───────────────────────────────────────────────
export const contact = {
  title: "Let's talk about your team.",
  resumeLabel: 'Download resume',
};

export const footer = {
  text: '© 2026 Loc Lam · @ScaleWithLoc',
};

# scalewithloc-site

Personal portfolio for Loc Lam — Product Manager, AI & Growth.
Built with [Astro](https://astro.build) (static output) and [Tailwind CSS](https://tailwindcss.com).
No server functions: `npm run build` produces plain files in `dist/` that any static host can serve.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321 — reloads as you edit
npm run build      # static site → dist/
npm run preview    # serve the built dist/ locally
```

## Where things live

| What | Where |
| --- | --- |
| **All copy, links, numbers, projects** | `src/data/content.ts` ← edit this |
| Section layouts | `src/components/*.astro` |
| Page order | `src/pages/index.astro` |
| Colors / fonts | `src/styles/global.css` (`--color-accent`) |
| Images | `public/images/` |
| Resume | `public/resume.pdf` |
| Social preview image | `public/og-image.png` (regenerate with `npm run og`) |

Search `content.ts` for `TODO` to find remaining placeholders.

## Adding a new project card

Case-study cards are generated from the `caseStudies.items` list in
`src/data/content.ts`. To add one, copy an existing entry and paste it at the
position where you want it to appear:

```ts
{
  lever: 'Lever 1',                       // small label above the title
  leverName: 'Customer Acquisition',
  context: 'Industry or product type',
  company: 'Company name',
  problem: 'One or two sentences on the problem.',
  whatIDid: 'What you did, in first person.',
  results: [
    // before → after (shown as big numbers)
    { label: 'Onboarding conversion', before: '10%', after: '25%', period: 'in 3 months' },
    // or a single number
    { label: 'Day-1 adoption', value: '+30%' },
  ],
  tags: ['Tag one', 'Tag two'],
},
```

Notes:

- Write numbers exactly as you want them shown (`'$17,000'`, `'22,000'`, `'+30%'`).
- `period` is optional.
- Any number of `results` and `tags` works.
- Save the file and the preview updates. If something is mistyped, the terminal
  running `npm run dev` shows which line.

### Other common edits

- **Featured build video:** set `featuredBuild.videoUrl` to a YouTube link.
  Leave it as `''` to hide the video block.
- **Teaching links:** fill in `href` for each item in `teaching.items`. An item
  with no link shows as a plain card.
- **Email:** set `links.email`. The Email card appears once it's set.
- **Resume:** put your PDF at `public/resume.pdf`.
- **Headline or name changed?** Run `npm run og` to rebuild the social preview image.
- **Domain:** update `site` in `astro.config.mjs` so social previews use absolute URLs.

## Deploying

Any static host works. On Vercel, import the repo and keep the defaults
(framework preset: Astro, build command `npm run build`, output `dist`).

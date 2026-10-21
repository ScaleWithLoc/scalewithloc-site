// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Fully static build — `npm run build` outputs plain HTML/CSS/JS to dist/.
// Set `site` to your final domain so the Open Graph image URL is absolute.
export default defineConfig({
  site: 'https://scalewithloc-site.vercel.app', // TODO: update if your Vercel URL / domain differs,
  output: 'static',
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});

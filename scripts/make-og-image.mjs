// Generates public/og-image.png (1200×630 social preview) and
// public/apple-touch-icon.png. Run with: npm run og
import sharp from 'sharp';
import { hero, seo } from '../src/data/content.ts';

const W = 1200, H = 630, PHOTO = 380, ACCENT = '#4338ca';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Wrap the headline into lines of ~26 characters.
function wrap(text, max) {
  const lines = [];
  let line = '';
  for (const word of text.split(' ')) {
    if ((line + ' ' + word).trim().length > max) { lines.push(line); line = word; }
    else line = (line + ' ' + word).trim();
  }
  return [...lines, line];
}

const photo = await sharp('public/images/headshot.jpg')
  .resize(PHOTO, PHOTO)
  .composite([{ input: Buffer.from(`<svg width="${PHOTO}" height="${PHOTO}"><circle cx="${PHOTO / 2}" cy="${PHOTO / 2}" r="${PHOTO / 2}"/></svg>`), blend: 'dest-in' }])
  .png()
  .toBuffer();

const lines = wrap(hero.headline, 27);
const textX = 80, lineH = 54;
const startY = 230;
const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <rect width="${W}" height="10" fill="${ACCENT}"/>
  <text x="${textX}" y="150" font-family="Helvetica Neue, Arial, sans-serif" font-size="44" font-weight="800" fill="${ACCENT}">${esc(hero.name)}</text>
  ${lines.map((l, i) => `<text x="${textX}" y="${startY + i * lineH}" font-family="Helvetica Neue, Arial, sans-serif" font-size="46" font-weight="800" fill="#0f172a">${esc(l)}</text>`).join('')}
  <text x="${textX}" y="545" font-family="Helvetica Neue, Arial, sans-serif" font-size="28" font-weight="500" fill="#475569">${esc(seo.title.split('—')[1].trim())}</text>
  <circle cx="${W - 80 - PHOTO / 2}" cy="${H / 2}" r="${PHOTO / 2 + 8}" fill="#eef2ff"/>
</svg>`;

await sharp(Buffer.from(svg))
  .composite([{ input: photo, left: W - 80 - PHOTO, top: (H - PHOTO) / 2 }])
  .png()
  .toFile('public/og-image.png');

await sharp('public/favicon.svg', { density: 300 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('Wrote public/og-image.png and public/apple-touch-icon.png');

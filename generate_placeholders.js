import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, 'src/assets/images');

const images = [
    { name: 'home-hero.svg', color: '#2e1065', text: 'Home Hero' }, // deep purple
    { name: 'vip-hero.svg', color: '#4c1d95', text: 'VIP Experience' },
    { name: 'cocktail-neon-demon.svg', color: '#172554', text: 'Neon Demon' }, // blue
    { name: 'cocktail-midnight-sour.svg', color: '#312e81', text: 'Midnight Sour' }, // indigo
    { name: 'cocktail-velvet-rope.svg', color: '#831843', text: 'Velvet Rope' }, // pink
    { name: 'event-neon-nights.svg', color: '#701a75', text: 'Neon Nights' },
    { name: 'event-saturday-social.svg', color: '#9d174d', text: 'Saturday Social' },
    { name: 'event-urban-jungle.svg', color: '#064e3b', text: 'Urban Jungle' },
    { name: 'event-default.svg', color: '#111827', text: 'Venue Event' },
    { name: 'gallery-1.svg', color: '#881337', text: 'Crowd' },
    { name: 'gallery-2.svg', color: '#4a044e', text: 'DJ' },
    { name: 'gallery-3.svg', color: '#1e3a8a', text: 'Drinks' },
    { name: 'gallery-4.svg', color: '#134e4a', text: 'Vibe' },
    { name: 'gallery-5.svg', color: '#312e81', text: 'Lights' },
];

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

images.forEach(img => {
    const content = `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad-${img.name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${img.color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad-${img.name})"/>
  <text x="50%" y="50%" font-family="sans-serif" font-weight="bold" font-size="48" fill="rgba(255,255,255,0.8)" dominant-baseline="middle" text-anchor="middle">${img.text}</text>
</svg>`;
    fs.writeFileSync(path.join(outDir, img.name), content);
    console.log(`Created ${img.name}`);
});

const fs = require('fs');
const path = require('path');

const pages = [
  'src/app/(site)/page.tsx',
  'src/app/(site)/puppies/page.tsx',
  'src/app/(site)/puppies/[slug]/page.tsx',
  'src/app/(site)/happy-families/page.tsx',
  'src/app/(site)/how-it-works/page.tsx',
  'src/app/(site)/faq/page.tsx',
  'src/app/(site)/contact/page.tsx',
  'src/app/(site)/gone-home/page.tsx'
];

pages.forEach(p => {
  if (fs.existsSync(p)) {
    console.log(`\n=== ${p} ===`);
    const content = fs.readFileSync(p, 'utf8');
    const metaMatch = content.match(/export const metadata[^{]*\{([\s\S]*?)\n\};/);
    if (metaMatch) {
      console.log(metaMatch[0]);
    } else {
      console.log('No static metadata match, looking for generateMetadata:');
      const genMeta = content.match(/export async function generateMetadata[\s\S]*?\n\}/);
      if (genMeta) console.log(genMeta[0]);
    }
  }
});

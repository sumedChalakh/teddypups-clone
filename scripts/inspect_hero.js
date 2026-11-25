const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('puppy.instabizweb.com/puppy.instabizweb.com');
const indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');

const heroIndex = indexHtml.indexOf('tp-hero');
const meetIndex = indexHtml.indexOf('tp-meet');
const heroHtml = indexHtml.slice(heroIndex, meetIndex);

fs.writeFileSync('scripts/hero_section.html', heroHtml);

// Find images in heroHtml
const imgs = [...heroHtml.matchAll(/<img[^>]+src="([^"]+)"[^>]*>/g)].map(m => m[1]);
console.log('Hero images:', imgs);

// Find svg or mascot in heroHtml
const svgs = [...heroHtml.matchAll(/<svg[^>]+class="([^"]+)"[^>]*>/g)].map(m => m[1]);
console.log('Hero svgs:', svgs);

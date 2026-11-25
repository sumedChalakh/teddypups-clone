const fs = require('fs');
const html = fs.readFileSync('scripts/hero_section.html', 'utf8');

// Print first 4000 characters of hero_section.html
console.log('Hero section length:', html.length);

// Look for where arches or images are
const imgIdx = html.indexOf('<img');
if (imgIdx !== -1) {
  console.log('Context around first img:');
  console.log(html.slice(imgIdx - 400, imgIdx + 1200));
}

// Find all tags with pup-buddy or mascot
const buddyIdx = html.indexOf('pup-buddy');
console.log('pup-buddy in hero:', buddyIdx);
if (buddyIdx !== -1) {
  console.log('Context around pup-buddy:');
  console.log(html.slice(buddyIdx - 300, buddyIdx + 600));
}

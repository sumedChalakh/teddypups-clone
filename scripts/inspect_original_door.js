const fs = require('fs');
const html = fs.readFileSync('scripts/meet_section_sample.html', 'utf8');

// Find the first door HTML in meet_section_sample
const liIdx = html.indexOf('<li');
const secondLiIdx = html.indexOf('<li', liIdx + 10);
console.log('Door 1 HTML:');
console.log(html.slice(liIdx, secondLiIdx));

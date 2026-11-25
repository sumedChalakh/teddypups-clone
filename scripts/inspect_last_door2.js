const fs = require('fs');
const html = fs.readFileSync('scripts/meet_section_sample.html', 'utf8');

const lastLiIdx = html.lastIndexOf('<li');
console.log('Last door in track:');
console.log(html.slice(lastLiIdx));

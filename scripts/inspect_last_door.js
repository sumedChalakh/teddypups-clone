const fs = require('fs');
const html = fs.readFileSync('scripts/meet_section_sample.html', 'utf8');

const lastDoorIdx = html.indexOf('/puppies"');
console.log('Last door snippet:');
console.log(html.slice(lastDoorIdx - 300, lastDoorIdx + 600));

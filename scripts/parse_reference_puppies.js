const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('puppy.instabizweb.com/puppy.instabizweb.com');

const p1 = fs.readFileSync(path.join(baseDir, 'puppies.html'), 'utf8');
console.log('puppies.html length:', p1.length);

// Let's search for all href="/puppies/..."
const hrefMatches = p1.match(/href="[^"]*"/g) || [];
console.log('Sample hrefs in puppies.html:', [...new Set(hrefMatches.filter(h => h.includes('puppi')))].slice(0, 20));

// Let's search for card structures in puppies.html
// Look for text around "Available" or "Reserved" or "months"
const textSnippets = [];
const lines = p1.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('Available') || lines[i].includes('month') || lines[i].includes('Maltipoo') || lines[i].includes('Poodle')) {
    textSnippets.push(`Line ${i}: ${lines[i].trim().slice(0, 150)}`);
  }
}
console.log('Found snippets count:', textSnippets.length);
console.log('First 20 snippets:', textSnippets.slice(0, 20));

// Also let's inspect index.html around "tp-meet"
const indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
const meetPos = indexHtml.indexOf('tp-meet');
console.log('index.html tp-meet position:', meetPos);
if (meetPos !== -1) {
  const meetSection = indexHtml.slice(meetPos - 200, meetPos + 15000);
  fs.writeFileSync('scripts/meet_section_sample.html', meetSection);
  console.log('Wrote scripts/meet_section_sample.html, length:', meetSection.length);
}

// Also let's extract all puppy cards from puppies.html and write to a file
fs.writeFileSync('scripts/puppies_html_sample.txt', lines.slice(0, 500).join('\n'));

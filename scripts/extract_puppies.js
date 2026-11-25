const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('puppy.instabizweb.com/puppy.instabizweb.com');
const puppiesHtml = fs.readFileSync(path.join(baseDir, 'puppies-9584c7472c68d8.html'), 'utf8');

// Also check index.html
const indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');

// Let's inspect the cards in puppies-9584c7472c68d8.html
// Search for href="/puppies/..."
const pupLinks = [...puppiesHtml.matchAll(/href="(\/puppies\/[^"]+)"/g)].map(m => m[1]);
console.log('Total /puppies/ links in puppies page:', pupLinks.length);
console.log('Unique /puppies/ links:', [...new Set(pupLinks)]);

// Let's write an extractor for cards in puppies-9584c7472c68d8.html
// Looking at how cards are structured
// Let's find snippets with href="/puppies/
const matches = [...puppiesHtml.matchAll(/<a[^>]*href="(\/puppies\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/g)];
console.log('Regex <a> matches count:', matches.length);

const puppies = [];
matches.forEach((m, idx) => {
  const href = m[1];
  const inner = m[2];
  // extract image src
  const imgMatch = inner.match(/src="([^"]+)"/) || inner.match(/srcSet="([^"]+)"/);
  // extract text content
  const cleanText = inner.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  puppies.push({
    index: idx + 1,
    href,
    img: imgMatch ? imgMatch[1] : null,
    text: cleanText
  });
});

console.log('Extracted puppies from puppies page:');
puppies.forEach(p => console.log(JSON.stringify(p, null, 2)));

fs.writeFileSync('scripts/extracted_puppies.json', JSON.stringify(puppies, null, 2));

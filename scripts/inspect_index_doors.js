const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('puppy.instabizweb.com/puppy.instabizweb.com');
const indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');

// Find tp-meet doors in index.html
// Let's find all doors in index.html
const meetIndex = indexHtml.indexOf('tp-meet');
const meetHtml = indexHtml.slice(meetIndex, indexHtml.indexOf('tp-paths', meetIndex));

// Find cards inside meetHtml
const doorRegex = /<li[^>]*>([\s\S]*?)<\/li>/g;
const doors = [];
let m;
while ((m = doorRegex.exec(meetHtml)) !== null) {
  const content = m[1];
  const href = (content.match(/href="([^"]+)"/) || [])[1];
  const img = (content.match(/src="([^"]+)"/) || [])[1];
  const nameMatch = content.match(/<h3[^>]*>([\s\S]*?)<\/h3>/) || content.match(/<strong[^>]*>([\s\S]*?)<\/strong>/);
  const name = nameMatch ? nameMatch[1].replace(/<[^>]+>/g, '').trim() : '';
  const text = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  doors.push({ href, img, name, text });
}

console.log('Total doors in index.html tp-meet:', doors.length);
doors.forEach((d, i) => {
  console.log(`Door ${i + 1}: ${d.name} | ${d.href} | img: ${d.img} | text: ${d.text.slice(0, 100)}`);
});

fs.writeFileSync('scripts/index_doors.json', JSON.stringify(doors, null, 2));

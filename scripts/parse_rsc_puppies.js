const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('puppy.instabizweb.com/puppy.instabizweb.com');
const rsc = fs.readFileSync(path.join(baseDir, 'puppies-9584c7472c68d8.html'), 'utf8');

// Find all aria-labels in the RSC stream
const ariaLabels = [...rsc.matchAll(/"aria-label":"([^"]+)"/g)].map(m => m[1]);
console.log('All aria-labels in puppies-9584c7472c68d8.html:');
ariaLabels.forEach((label, i) => console.log(`${i + 1}: ${label}`));

// Let's also look for hrefs
const hrefs = [...rsc.matchAll(/"href":"([^"]+)"/g)].map(m => m[1]);
console.log('\nAll hrefs in puppies-9584c7472c68d8.html:');
console.log([...new Set(hrefs)]);

// Let's also search for image src in rsc
const srcs = [...rsc.matchAll(/"src":"([^"]+)"/g)].map(m => m[1]);
console.log('\nAll srcs in puppies-9584c7472c68d8.html:');
console.log([...new Set(srcs)]);

// Now let's do the same for index.html!
const indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
const indexAriaLabels = [...indexHtml.matchAll(/aria-label="([^"]+)"/g)].map(m => m[1]);
console.log('\nAll aria-labels in index.html:');
const pupAria = indexAriaLabels.filter(l => l.includes('month') || l.includes('available') || l.includes('reserved'));
pupAria.forEach((label, i) => console.log(`${i + 1}: ${label}`));

const fs = require('fs');
const html = fs.readFileSync('puppy.instabizweb.com/puppy.instabizweb.com/index.html', 'utf8');

// Title
const titleMatch = html.match(/<title>([^<]+)<\/title>/);
console.log('Original <title>:', titleMatch ? titleMatch[1] : 'none');

// Meta tags
const metas = [...html.matchAll(/<meta\s+([^>]+)>/gi)].map(m => m[1]);
console.log('Meta tags count:', metas.length);
metas.forEach(m => {
  if (m.includes('description') || m.includes('title') || m.includes('og:') || m.includes('canonical')) {
    console.log('Meta:', m);
  }
});

// Canonical link
const canonicalMatch = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i) || html.match(/<link[^>]*href="([^"]+)"[^>]*rel="canonical"/i);
console.log('Original canonical:', canonicalMatch ? canonicalMatch[1] : 'none');

// Emails
const emails = [...html.matchAll(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g)].map(m => m[0]);
console.log('Emails found in index.html:', [...new Set(emails)]);

// Also check puppies-9584c7472c68d8.html
const rsc = fs.readFileSync('puppy.instabizweb.com/puppy.instabizweb.com/puppies-9584c7472c68d8.html', 'utf8');
const rscTitles = [...rsc.matchAll(/"title":"([^"]+)"/g)].map(m => m[1]);
console.log('Titles in puppies page RSC:', [...new Set(rscTitles)]);

const rscDescs = [...rsc.matchAll(/"description":"([^"]+)"/g)].map(m => m[1]);
console.log('Descriptions in puppies page RSC:', [...new Set(rscDescs)]);

// Check our current layout and pages metadata
console.log('\n--- Checking our current layout metadata ---');

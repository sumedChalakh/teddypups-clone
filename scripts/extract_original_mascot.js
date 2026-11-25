const fs = require('fs');
const html = fs.readFileSync('scripts/hero_section.html', 'utf8');

const buddyIdx = html.indexOf('<div class="pup-buddy');
if (buddyIdx !== -1) {
  const svgStart = html.indexOf('<svg', buddyIdx);
  const svgEnd = html.indexOf('</svg>', svgStart) + 6;
  const svg = html.slice(svgStart, svgEnd);
  fs.writeFileSync('scripts/original_mascot.svg', svg);
  console.log('Saved original_mascot.svg, length:', svg.length);
}

// Also check all occurrences of <svg in index.html with aria-label containing puppy or teddy
const indexHtml = fs.readFileSync('puppy.instabizweb.com/puppy.instabizweb.com/index.html', 'utf8');
const pupBuddies = [...indexHtml.matchAll(/<div class="pup-buddy[^"]*"[^>]*>([\s\S]*?)<\/div>/g)];
console.log('pup-buddy instances in index.html:', pupBuddies.length);
pupBuddies.forEach((pb, idx) => {
  const aria = pb[0].match(/aria-label="([^"]+)"/);
  console.log(`Pup buddy ${idx + 1}: ${aria ? aria[1] : 'no label'}`);
});

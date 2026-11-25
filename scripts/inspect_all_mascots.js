const fs = require('fs');
const indexHtml = fs.readFileSync('puppy.instabizweb.com/puppy.instabizweb.com/index.html', 'utf8');

const pupBuddies = [...indexHtml.matchAll(/<div class="pup-buddy[^"]*"[^>]*>([\s\S]*?)<\/div>/g)];
pupBuddies.forEach((pb, idx) => {
  const full = pb[0];
  const start = Math.max(0, indexHtml.indexOf(full) - 200);
  const context = indexHtml.slice(start, indexHtml.indexOf(full));
  const poseMatch = context.match(/data-pose="([^"]+)"/);
  console.log(`Pup ${idx + 1}: pose = ${poseMatch ? poseMatch[1] : 'none'}, length = ${full.length}`);
  fs.writeFileSync(`scripts/pup_${idx + 1}.html`, full);
});

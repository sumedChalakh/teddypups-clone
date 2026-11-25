const fs = require('fs');
const path = require('path');

function searchFiles(dir) {
  let res = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (item.name === 'node_modules' || item.name === '.next' || item.name === '.git') continue;
    const p = path.join(dir, item.name);
    if (item.isDirectory()) res = res.concat(searchFiles(p));
    else if (p.endsWith('.ts') || p.endsWith('.tsx')) {
      const content = fs.readFileSync(p, 'utf8');
      if (content.includes('metadata') || content.includes('canonical') || content.includes('email') || content.includes('siteConfig')) {
        res.push(p);
      }
    }
  }
  return res;
}

const files = searchFiles('src');
console.log('Files with metadata / config:');
files.forEach(f => console.log(' ', f));

// Check src/app/layout.tsx
if (fs.existsSync('src/app/layout.tsx')) {
  console.log('\n--- src/app/layout.tsx ---');
  console.log(fs.readFileSync('src/app/layout.tsx', 'utf8'));
}

// Check src/config/site.ts
if (fs.existsSync('src/config/site.ts')) {
  console.log('\n--- src/config/site.ts ---');
  console.log(fs.readFileSync('src/config/site.ts', 'utf8'));
}

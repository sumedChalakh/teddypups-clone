const fs = require('fs');
const path = require('path');

const mediaList = [
  '/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp',
  '/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg',
  '/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg',
  '/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg',
  '/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg',
  '/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg',
  '/media/3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg',
  '/media/O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg',
  '/media/qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg',
  '/media/crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg',
  '/media/wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg',
  '/media/lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg',
  '/media/EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg',
  '/media/vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg',
  '/media/nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg'
];

mediaList.forEach((m, idx) => {
  const p1 = path.join('puppy.instabizweb.com/puppy.instabizweb.com', m.slice(1));
  const p2 = path.join('public', m.slice(1));
  const exists1 = fs.existsSync(p1);
  const exists2 = fs.existsSync(p2);
  console.log('Pup ' + (idx + 1) + ': ' + path.basename(m) + ' -> in ref: ' + exists1 + ', in public: ' + exists2);
});

// Let's also check all files in puppy.instabizweb.com/puppy.instabizweb.com/media and public/
function findFiles(dir) {
  let res = [];
  if (!fs.existsSync(dir)) return res;
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, item.name);
    if (item.isDirectory()) res = res.concat(findFiles(p));
    else res.push(p);
  }
  return res;
}

const refMedia = findFiles('puppy.instabizweb.com/puppy.instabizweb.com/media');
console.log('Total ref media files:', refMedia.length);
refMedia.forEach(f => console.log('  ref: ' + f));

const pubPuppies = findFiles('public/puppies');
console.log('Total public/puppies files:', pubPuppies.length);
pubPuppies.forEach(f => console.log('  public: ' + f));

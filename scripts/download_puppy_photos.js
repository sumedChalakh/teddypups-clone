const fs = require('fs');
const path = require('path');
const https = require('https');

const puppies = [
  {
    index: 1,
    name: 'Max',
    breed: 'Maltipoo',
    gender: 'boy',
    age: '3 months',
    withVideo: true,
    slug: 'maltipoo-max-male',
    mediaPath: '/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp'
  },
  {
    index: 2,
    name: 'Korean Teacup Maltipoo',
    breed: 'Korean Teacup Maltipoo',
    gender: 'girl',
    age: '2 months',
    withVideo: true,
    slug: 'korean-teacup-maltipoo-female',
    mediaPath: '/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg'
  },
  {
    index: 3,
    name: 'Korean Teacup Poodle',
    breed: 'Korean Teacup Poodle',
    gender: 'girl',
    age: '2 months',
    withVideo: false,
    slug: 'korean-teacup-poodle-female',
    mediaPath: '/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg'
  },
  {
    index: 4,
    name: 'Maltipoo & Cavapoo',
    breed: 'Maltipoo & Cavapoo',
    gender: 'boy',
    age: '3 months Maltipoo & 2 months Cavapoo',
    withVideo: true,
    slug: 'maltipoo-cavapoo-male',
    mediaPath: '/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg'
  },
  {
    index: 5,
    name: 'Toy Poodle',
    breed: 'Toy Poodle',
    gender: 'boy & girl',
    age: '2 months',
    withVideo: false,
    slug: 'toy-poodle-male-female',
    mediaPath: '/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg'
  },
  {
    index: 6,
    name: 'Maltipoo',
    breed: 'Maltipoo',
    gender: 'girl',
    age: '3 months',
    withVideo: true,
    slug: 'maltipoo-female-2',
    mediaPath: '/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg'
  },
  {
    index: 7,
    name: 'Pomeranian',
    breed: 'Pomeranian',
    gender: 'girl',
    age: '3 months',
    withVideo: false,
    slug: 'pomeranian-female',
    mediaPath: '/media/3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg'
  },
  {
    index: 8,
    name: 'Copper',
    breed: 'Cavapoo',
    gender: 'boy',
    age: '2 months',
    withVideo: false,
    slug: 'copper-male',
    mediaPath: '/media/O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg'
  },
  {
    index: 9,
    name: 'Shih Tzu',
    breed: 'Shih Tzu',
    gender: 'girl',
    age: '2 months',
    withVideo: false,
    slug: 'shitzu-female',
    mediaPath: '/media/qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg'
  },
  {
    index: 10,
    name: 'Shih Tzu',
    breed: 'Shih Tzu',
    gender: 'boy',
    age: '2 months',
    withVideo: false,
    slug: 'shitzu-male',
    mediaPath: '/media/crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg'
  },
  {
    index: 11,
    name: 'Maltipoo',
    breed: 'Maltipoo',
    gender: 'girl',
    age: '2.5 months',
    withVideo: false,
    slug: 'maltipoo-female-1',
    mediaPath: '/media/wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg'
  },
  {
    index: 12,
    name: 'Maltipoo',
    breed: 'Maltipoo',
    gender: 'girl',
    age: '2 months',
    withVideo: false,
    slug: 'maltipoo-female',
    mediaPath: '/media/lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg'
  },
  {
    index: 13,
    name: 'Korean Teacup Pomeranian',
    breed: 'Korean Teacup Pomeranian',
    gender: 'girl',
    age: '2 months',
    withVideo: false,
    slug: 'korean-teacup-pomeranian-1',
    mediaPath: '/media/EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg'
  },
  {
    index: 14,
    name: 'Korean Teacup Pomeranian',
    breed: 'Korean Teacup Pomeranian',
    gender: 'girl',
    age: '2 months',
    withVideo: false,
    slug: 'korean-teacup-pomeranian',
    mediaPath: '/media/vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg'
  },
  {
    index: 15,
    name: 'Korean Teacup Pomeranian',
    breed: 'Korean Teacup Pomeranian',
    gender: 'boy',
    age: '2 months',
    withVideo: false,
    slug: 'korean-teacup-pomeranian-male',
    mediaPath: '/media/nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed with status ${res.statusCode} for ${url}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Starting download of 15 puppy images...');
  for (const p of puppies) {
    const ext = path.extname(p.mediaPath);
    const destDoor = path.join('public', 'puppies', 'doors', `door-${p.index}.jpg`);
    const destMedia = path.join('public', p.mediaPath.slice(1));
    const url = `https://puppy.instabizweb.com${p.mediaPath}`;
    
    try {
      console.log(`Downloading pup ${p.index} (${p.name}): ${url}`);
      await downloadFile(url, destDoor);
      // Also copy or download to media destination
      await downloadFile(url, destMedia);
      console.log(`  -> Saved to ${destDoor} and ${destMedia}`);
    } catch(e) {
      console.error(`  Error downloading pup ${p.index}:`, e.message);
    }
  }
  console.log('Finished downloads.');
}

run();

const fs = require('fs');
const path = require('path');

// Reference data
const referencePuppies = [
  {
    index: 1,
    name: 'Max',
    breed: 'Maltipoo',
    gender: 'boy',
    age: '3 months',
    withVideo: true,
    slug: 'maltipoo-max-male',
    image: '/puppies/doors/door-1.jpg'
  },
  {
    index: 2,
    name: 'Korean Teacup Maltipoo',
    breed: 'Korean Teacup Maltipoo',
    gender: 'girl',
    age: '2 months',
    withVideo: true,
    slug: 'korean-teacup-maltipoo-female',
    image: '/puppies/doors/door-2.jpg'
  },
  {
    index: 3,
    name: 'Korean Teacup Poodle',
    breed: 'Korean Teacup Poodle',
    gender: 'girl',
    age: '2 months',
    withVideo: false,
    slug: 'korean-teacup-poodle-female',
    image: '/puppies/doors/door-3.jpg'
  },
  {
    index: 4,
    name: 'Maltipoo & Cavapoo',
    breed: 'Maltipoo & Cavapoo',
    gender: 'boy',
    age: '3 months Maltipoo & 2 months Cavapoo',
    withVideo: true,
    slug: 'maltipoo-cavapoo-male',
    image: '/puppies/doors/door-4.jpg'
  },
  {
    index: 5,
    name: 'Toy Poodle',
    breed: 'Toy Poodle',
    gender: 'boy & girl',
    age: '2 months',
    withVideo: false,
    slug: 'toy-poodle-male-female',
    image: '/puppies/doors/door-5.jpg'
  },
  {
    index: 6,
    name: 'Maltipoo',
    breed: 'Maltipoo',
    gender: 'girl',
    age: '3 months',
    withVideo: true,
    slug: 'maltipoo-female-2',
    image: '/puppies/doors/door-6.jpg'
  },
  {
    index: 7,
    name: 'Pomeranian',
    breed: 'Pomeranian',
    gender: 'girl',
    age: '3 months',
    withVideo: false,
    slug: 'pomeranian-female',
    image: '/puppies/doors/door-7.jpg'
  },
  {
    index: 8,
    name: 'Copper',
    breed: 'Cavapoo',
    gender: 'boy',
    age: '2 months',
    withVideo: false,
    slug: 'copper-male',
    image: '/puppies/doors/door-8.jpg'
  },
  {
    index: 9,
    name: 'Shih Tzu',
    breed: 'Shih Tzu',
    gender: 'girl',
    age: '2 months',
    withVideo: false,
    slug: 'shitzu-female',
    image: '/puppies/doors/door-9.jpg'
  },
  {
    index: 10,
    name: 'Shih Tzu',
    breed: 'Shih Tzu',
    gender: 'boy',
    age: '2 months',
    withVideo: false,
    slug: 'shitzu-male',
    image: '/puppies/doors/door-10.jpg'
  },
  {
    index: 11,
    name: 'Maltipoo',
    breed: 'Maltipoo',
    gender: 'girl',
    age: '2.5 months',
    withVideo: false,
    slug: 'maltipoo-female-1',
    image: '/puppies/doors/door-11.jpg'
  },
  {
    index: 12,
    name: 'Maltipoo',
    breed: 'Maltipoo',
    gender: 'girl',
    age: '2 months',
    withVideo: false,
    slug: 'maltipoo-female',
    image: '/puppies/doors/door-12.jpg'
  },
  {
    index: 13,
    name: 'Korean Teacup Pomeranian',
    breed: 'Korean Teacup Pomeranian',
    gender: 'girl',
    age: '2 months',
    withVideo: false,
    slug: 'korean-teacup-pomeranian-1',
    image: '/puppies/doors/door-13.jpg'
  },
  {
    index: 14,
    name: 'Korean Teacup Pomeranian',
    breed: 'Korean Teacup Pomeranian',
    gender: 'girl',
    age: '2 months',
    withVideo: false,
    slug: 'korean-teacup-pomeranian',
    image: '/puppies/doors/door-14.jpg'
  },
  {
    index: 15,
    name: 'Korean Teacup Pomeranian',
    breed: 'Korean Teacup Pomeranian',
    gender: 'boy',
    age: '2 months',
    withVideo: false,
    slug: 'korean-teacup-pomeranian-male',
    image: '/puppies/doors/door-15.jpg'
  }
];

// Current puppies.ts
const tsContent = fs.readFileSync('src/data/puppies.ts', 'utf8');

console.log('| Door | Current Name in Code | Reference Name | Current Breed | Reference Breed | Current Age | Reference Age | Mismatch Found? |');
console.log('|---|---|---|---|---|---|---|---|');

// Match slugs and names in current puppies.ts
referencePuppies.forEach((ref) => {
  const slugRegex = new RegExp(`slug:\\s*'${ref.slug}'[\\s\\S]*?name:\\s*'([^']+)'[\\s\\S]*?breedName:\\s*'([^']+)'[\\s\\S]*?age:\\s*'([^']+)'`);
  const match = tsContent.match(slugRegex);
  const curName = match ? match[1] : 'NOT FOUND';
  const curBreed = match ? match[2] : 'NOT FOUND';
  const curAge = match ? match[3] : 'NOT FOUND';

  const nameMismatch = curName !== ref.name;
  const breedMismatch = curBreed !== ref.breed;
  const ageMismatch = curAge !== ref.age;
  const anyMismatch = nameMismatch || breedMismatch || ageMismatch;

  console.log(`| ${ref.index} | ${curName} | ${ref.name} | ${curBreed} | ${ref.breed} | ${curAge} | ${ref.age} | ${anyMismatch ? '**YES (FIXED)**' : 'Match'} |`);
});

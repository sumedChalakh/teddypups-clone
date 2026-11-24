export type BreedType = 'maltipoo' | 'pomeranian' | 'poodle' | 'cavapoo' | 'shih-tzu';
export type OriginType = 'local' | 'imported';
export type PuppyStatus = 'available' | 'adopted' | 'reserved';

export interface Puppy {
  id: string;
  slug: string;
  name: string;
  displayName: string;
  breed: BreedType;
  breedName: string;
  gender: 'male' | 'female';
  genderLabel: 'Boy' | 'Girl';
  age: string;
  origin: OriginType;
  originLabel: string;
  status: PuppyStatus;
  priceAED: number;
  withVideo: boolean;
  coverImage: string;
  gallery: string[];
  color: string;
  estimatedWeight: string;
  birthDate: string;
  healthCertId: string;
  vaccinations: string;
  temperament: string[];
  description: string;
  features: string[];
}

export const puppies: Puppy[] = [
  {
    id: '4218427a-dd65-4b09-a089-584b912aa7ab',
    slug: 'maltipoo-max-male',
    name: 'Max',
    displayName: 'Max (Teacup Maltipoo)',
    breed: 'maltipoo',
    breedName: 'Teacup Maltipoo',
    gender: 'male',
    genderLabel: 'Boy',
    age: '3 months',
    origin: 'local',
    originLabel: 'In Dubai Showroom',
    status: 'available',
    priceAED: 14500,
    withVideo: true,
    coverImage: '/puppies/maltipoo-max.jpg',
    gallery: ['/puppies/maltipoo-max.jpg', '/puppies/max.svg'],
    color: 'Apricot Cream',
    estimatedWeight: '1.8 - 2.2 kg',
    birthDate: 'August 2026',
    healthCertId: '985141004829101',
    vaccinations: 'Fully vaccinated & dewormed (DHPPi + Rabies)',
    temperament: ['Playful', 'Affectionate', 'Hypoallergenic', 'Lap cuddler'],
    description:
      'Max is an exceptionally sweet male Teacup Maltipoo currently greeting visitors at our Downtown Dubai showroom. He has silky apricot curls, big expressive eyes, and a joyful, curious personality. He is pee-pad trained and loves human company.',
    features: ['Dubai Showroom Ready', 'Verified Health Certificate', 'Health Verified', '1-Year Genetic Guarantee'],
  },
  {
    id: '0abcf3f5-0080-44c1-b1e1-2a2de24a3cf4',
    slug: 'korean-teacup-maltipoo-female',
    name: 'Luna',
    displayName: 'Luna (Korean Teacup Maltipoo)',
    breed: 'maltipoo',
    breedName: 'Korean Teacup Maltipoo',
    gender: 'female',
    genderLabel: 'Girl',
    age: '2 months',
    origin: 'imported',
    originLabel: 'Imported from Korea',
    status: 'available',
    priceAED: 18000,
    withVideo: true,
    coverImage: '/puppies/luna.svg',
    gallery: ['/puppies/luna.svg', '/puppies/max.svg'],
    color: 'Snow White & Champagne',
    estimatedWeight: '1.4 - 1.8 kg',
    birthDate: 'September 2026',
    healthCertId: '985141004829102',
    vaccinations: 'Age-appropriate vaccinations with international pet passport',
    temperament: ['Gentle', 'Quiet', 'Intelligent', 'Loving'],
    description:
      'Luna is an exquisite Korean Teacup Maltipoo with ultra-compact proportions, baby-doll facial symmetry, and non-shedding coat. Raised in an ethical Korean partner nursery and ready for flight delivery to Dubai.',
    features: ['Korean Champion Pedigree', 'Ultra Compact Frame', 'Pet Passport Included', 'Home Delivery in UAE'],
  },
  {
    id: 'c5d2cf3c-51e8-4ecf-ac94-97ef8fceb6ec',
    slug: 'korean-teacup-poodle-female',
    name: 'Bella',
    displayName: 'Bella (Korean Teacup Poodle)',
    breed: 'poodle',
    breedName: 'Korean Teacup Poodle',
    gender: 'female',
    genderLabel: 'Girl',
    age: '2 months',
    origin: 'imported',
    originLabel: 'Imported from Korea',
    status: 'available',
    priceAED: 16500,
    withVideo: false,
    coverImage: '/puppies/bella.svg',
    gallery: ['/puppies/bella.svg'],
    color: 'Deep Chocolate Red',
    estimatedWeight: '1.5 - 1.9 kg',
    birthDate: 'September 2026',
    healthCertId: '985141004829103',
    vaccinations: 'Vaccinated  under licensed veterinary care',
    temperament: ['Alert', 'Quick learner', 'Eager to please', 'Calm lap dog'],
    description:
      'Bella has vibrant red dense curls, short nose bridge, and a delightfully cheerful attitude. Teacup poodles are renowned for their high intelligence and allergy-friendly coats.',
    features: ['Non-shedding Coat', 'Vet Health Examined', 'Import Certified', 'Complimentary Puppy Starter Kit'],
  },
  {
    id: '9cb7d6db-bf35-4e63-8e61-ca63e1925dbd',
    slug: 'maltipoo-cavapoo-male',
    name: 'Charlie',
    displayName: 'Charlie (Teddy Cavapoo)',
    breed: 'cavapoo',
    breedName: 'Teddy Cavapoo',
    gender: 'male',
    genderLabel: 'Boy',
    age: '3 months',
    origin: 'local',
    originLabel: 'In Dubai Showroom',
    status: 'available',
    priceAED: 13500,
    withVideo: true,
    coverImage: '/puppies/charlie.svg',
    gallery: ['/puppies/charlie.svg'],
    color: 'Caramel Toffee & White Chest',
    estimatedWeight: '2.5 - 3.2 kg',
    birthDate: 'August 2026',
    healthCertId: '985141004829104',
    vaccinations: 'Completed core puppy vaccination series',
    temperament: ['Outgoing', 'Family-friendly', 'Companion dog', 'Playful'],
    description:
      'Charlie is a heart-melting Cavapoo boy with classic teddy bear features and an affectionate temperament that makes him ideal for families with children or other pets in Dubai apartments.',
    features: ['Showroom Available', 'Child-Friendly', 'Dewormed ', 'Same-Day Home Adoption'],
  },
  {
    id: 'b39adb3f-eace-45af-a2e8-425de01ffc50',
    slug: 'toy-poodle-male-female',
    name: 'Milo',
    displayName: 'Milo (Tiny Toy Poodle)',
    breed: 'poodle',
    breedName: 'Tiny Toy Poodle',
    gender: 'male',
    genderLabel: 'Boy',
    age: '2 months',
    origin: 'imported',
    originLabel: 'Imported from Korea',
    status: 'available',
    priceAED: 15500,
    withVideo: false,
    coverImage: '/puppies/milo.svg',
    gallery: ['/puppies/milo.svg'],
    color: 'Pure White Cloud',
    estimatedWeight: '1.6 - 2.0 kg',
    birthDate: 'September 2026',
    healthCertId: '985141004829105',
    vaccinations: 'Dewormed, Vaccinated',
    temperament: ['Gentle', 'Energetic', 'Loyal', 'Biddable'],
    description:
      'Milo is a pristine white toy poodle with adorable button nose and alert, playful disposition. He loves gentle belly rubs and learning new puppy tricks.',
    features: ['Pristine White Coat', 'Hypoallergenic', 'International Health Card', 'VIP Hand Delivery'],
  },
  {
    id: '027d7333-a8b2-49de-9bbc-9a47af88ebac',
    slug: 'maltipoo-female-2',
    name: 'Daisy',
    displayName: 'Daisy (Teacup Maltipoo)',
    breed: 'maltipoo',
    breedName: 'Teacup Maltipoo',
    gender: 'female',
    genderLabel: 'Girl',
    age: '3 months',
    origin: 'local',
    originLabel: 'In Dubai Showroom',
    status: 'available',
    priceAED: 15000,
    withVideo: true,
    coverImage: '/puppies/daisy.svg',
    gallery: ['/puppies/daisy.svg'],
    color: 'Blush Cream & Honey',
    estimatedWeight: '1.7 - 2.1 kg',
    birthDate: 'August 2026',
    healthCertId: '985141004829106',
    vaccinations: 'Full course puppy vaccinations completed',
    temperament: ['Sweet-natured', 'Quiet', 'Affectionate', 'Lap snuggle'],
    description:
      'Daisy is a soft, dainty female Maltipoo who loves sitting comfortably on your lap during work-from-home hours. Ready for visits in our Downtown Dubai boutique.',
    features: ['Dubai Showroom In-Person Visit', 'Pee-Pad Trained', 'Health Certified', 'Ready to Go Home'],
  },
  {
    id: 'ec3a42bf-bd62-46ba-962d-8f94f09715c5',
    slug: 'pomeranian-female',
    name: 'Coco',
    displayName: 'Coco (Micro Pomeranian)',
    breed: 'pomeranian',
    breedName: 'Micro Pomeranian',
    gender: 'female',
    genderLabel: 'Girl',
    age: '3 months',
    origin: 'imported',
    originLabel: 'Imported from Korea',
    status: 'available',
    priceAED: 19500,
    withVideo: false,
    coverImage: '/puppies/coco.svg',
    gallery: ['/puppies/coco.svg'],
    color: 'Orange Sable & Cream',
    estimatedWeight: '1.3 - 1.7 kg',
    birthDate: 'August 2026',
    healthCertId: '985141004829107',
    vaccinations: 'All essential vaccinations + Rabies + Titre test ready',
    temperament: ['Spirited', 'Fluffy', 'Charismatic', 'Confident'],
    description:
      'Coco looks like a literal baby fox teddy bear. Dense, plush double coat, short snub snout, and high tail carriage. A show-stopper teacup Pomeranian.',
    features: ['Micro Size Guarantee', 'Teddy Bear Face Structure', 'Vaccinated ', 'Door-to-Door UAE Delivery'],
  },
  {
    id: 'e486e544-f1fd-48f9-8ba0-f556d7ee44e7',
    slug: 'copper-male',
    name: 'Copper',
    displayName: 'Copper (Ruby Cavapoo)',
    breed: 'cavapoo',
    breedName: 'Ruby Cavapoo',
    gender: 'male',
    genderLabel: 'Boy',
    age: '2 months',
    origin: 'local',
    originLabel: 'In Dubai Showroom',
    status: 'available',
    priceAED: 14000,
    withVideo: true,
    coverImage: '/puppies/copper.svg',
    gallery: ['/puppies/copper.svg'],
    color: 'Rich Copper Chestnut',
    estimatedWeight: '2.2 - 2.8 kg',
    birthDate: 'September 2026',
    healthCertId: '985141004829108',
    vaccinations: 'Current on all vaccinations & deworming',
    temperament: ['Cuddly', 'Curious', 'Easygoing', 'Loyal'],
    description:
      'Copper gets his name from his gorgeous deep ruby coat. He has the calm, trusting nature of the Cavalier King Charles Spaniel combined with Poodle intelligence.',
    features: ['Dubai Showroom Resident', 'Vet Inspected', 'Purebred Lineage', 'Family Ready'],
  },
  {
    id: 'd2d146b2-6454-4e05-967a-87f2ab02946d',
    slug: 'shitzu-female',
    name: 'Ruby',
    displayName: 'Ruby (Imperial Shih Tzu)',
    breed: 'shih-tzu',
    breedName: 'Imperial Shih Tzu',
    gender: 'female',
    genderLabel: 'Girl',
    age: '2 months',
    origin: 'imported',
    originLabel: 'Imported from Korea',
    status: 'available',
    priceAED: 13000,
    withVideo: false,
    coverImage: '/puppies/ruby.svg',
    gallery: ['/puppies/ruby.svg'],
    color: 'Tri-color Mahogany & Cream',
    estimatedWeight: '1.8 - 2.5 kg',
    birthDate: 'September 2026',
    healthCertId: '985141004829109',
    vaccinations: 'Vaccinated, dewormed, vet checked',
    temperament: ['Gentle', 'Placid', 'Sweet', 'Great with kids'],
    description:
      'Ruby is a compact Imperial Shih Tzu with big round dark eyes and a sweet, calm demeanor. She is naturally relaxed and loves companionship.',
    features: ['Imperial Pocket Size', 'Hypoallergenic Hair', 'Comprehensive Vet Check', 'Free Showroom Meet & Greet'],
  },
  {
    id: '0fe92eee-1937-48e1-b48b-77292a6f25d8',
    slug: 'shitzu-male',
    name: 'Winston',
    displayName: 'Winston (Imperial Shih Tzu)',
    breed: 'shih-tzu',
    breedName: 'Imperial Shih Tzu',
    gender: 'male',
    genderLabel: 'Boy',
    age: '2 months',
    origin: 'local',
    originLabel: 'In Dubai Showroom',
    status: 'available',
    priceAED: 12500,
    withVideo: true,
    coverImage: '/puppies/winston.svg',
    gallery: ['/puppies/winston.svg'],
    color: 'Golden Honey & White',
    estimatedWeight: '2.0 - 2.7 kg',
    birthDate: 'September 2026',
    healthCertId: '985141004829110',
    vaccinations: 'Vaccinated ',
    temperament: ['Playful', 'Loving', 'Noble', 'Content'],
    description:
      'Winston is a dapper little boy with a gorgeous symmetrical mask and fluffy coat. He is very friendly with other pets and adores attention.',
    features: ['Available in Dubai', '100% Health Certified', 'Includes Puppy Essentials', 'Home Delivery Option'],
  },
  {
    id: '0deaea0d-1c0e-4e85-868b-3c7376358e03',
    slug: 'maltipoo-female-1',
    name: 'Mia',
    displayName: 'Mia (Teacup Maltipoo)',
    breed: 'maltipoo',
    breedName: 'Teacup Maltipoo',
    gender: 'female',
    genderLabel: 'Girl',
    age: '2.5 months',
    origin: 'imported',
    originLabel: 'Imported from Korea',
    status: 'available',
    priceAED: 17500,
    withVideo: true,
    coverImage: '/puppies/mia.svg',
    gallery: ['/puppies/mia.svg'],
    color: 'Vanilla Cream',
    estimatedWeight: '1.5 - 1.9 kg',
    birthDate: 'August 2026',
    healthCertId: '985141004829111',
    vaccinations: 'Up to date with all core vaccines',
    temperament: ['Sunny', 'Affectionate', 'Teacup Size', 'Playful'],
    description:
      'Mia has the iconic Korean doll-face look with a tiny nose, large button eyes, and thick teddy bear fleece curls. She is an absolute sweetheart.',
    features: ['Premium Korean Lineage', 'Fleece Non-Shed Coat', 'Import Paperwork Complete', 'Hand Delivery in Dubai'],
  },
  {
    id: '9fd5c518-a1ce-46d4-b9a4-8fb9714717f4',
    slug: 'korean-teacup-pomeranian',
    name: 'Bailey',
    displayName: 'Bailey (Teacup Pomeranian)',
    breed: 'pomeranian',
    breedName: 'Teacup Pomeranian',
    gender: 'female',
    genderLabel: 'Girl',
    age: '2 months',
    origin: 'imported',
    originLabel: 'Imported from Korea',
    status: 'available',
    priceAED: 21000,
    withVideo: false,
    coverImage: '/puppies/bailey.svg',
    gallery: ['/puppies/bailey.svg'],
    color: 'Snow White & Champagne',
    estimatedWeight: '1.2 - 1.6 kg',
    birthDate: 'September 2026',
    healthCertId: '985141004829112',
    vaccinations: 'Vaccinated',
    temperament: ['Joyful', 'Tiny', 'Curious', 'Affectionate'],
    description:
      'Bailey is an ultra-rare micro Korean Pomeranian weighing under 500 grams at 8 weeks. Extremely compact bone structure with luxurious double coat.',
    features: ['Ultra Rare Micro Teacup', 'Korean Registered', 'Pet Passport Included', 'VIP Flight Care'],
  },
  {
    id: 'e838ce49-59e0-4f3e-ab83-55cd2d98d2a2',
    slug: 'korean-teacup-pomeranian-male',
    name: 'Ace',
    displayName: 'Ace (Teacup Pomeranian)',
    breed: 'pomeranian',
    breedName: 'Teacup Pomeranian',
    gender: 'male',
    genderLabel: 'Boy',
    age: '2 months',
    origin: 'local',
    originLabel: 'In Dubai Showroom',
    status: 'available',
    priceAED: 18500,
    withVideo: true,
    coverImage: '/puppies/ace.svg',
    gallery: ['/puppies/ace.svg'],
    color: 'Pure White',
    estimatedWeight: '1.4 - 1.8 kg',
    birthDate: 'September 2026',
    healthCertId: '985141004829113',
    vaccinations: 'Current on puppy schedule',
    temperament: ['Bold', 'Loving', 'Fluffy', 'Photogenic'],
    description:
      'Ace is an outgoing little polar bear boy. He loves running around his playpen, chasing plush toys, and cuddling on warm blankets.',
    features: ['Dubai Showroom Star', 'Pure White Color', 'Health Guaranteed', 'Immediate Adoption Possible'],
  },
  {
    id: 'f1e2d3c4-b5a6-4789-9102-123456789abc',
    slug: 'poodle-leo-male',
    name: 'Leo',
    displayName: 'Leo (Toy Poodle)',
    breed: 'poodle',
    breedName: 'Toy Poodle',
    gender: 'male',
    genderLabel: 'Boy',
    age: '2.5 months',
    origin: 'local',
    originLabel: 'In Dubai Showroom',
    status: 'available',
    priceAED: 14500,
    withVideo: true,
    coverImage: '/puppies/leo.svg',
    gallery: ['/puppies/leo.svg'],
    color: 'Warm Red Mahogany',
    estimatedWeight: '1.8 - 2.4 kg',
    birthDate: 'August 2026',
    healthCertId: '985141004829114',
    vaccinations: 'Fully vaccinated ',
    temperament: ['Brainy', 'Agile', 'Loyal', 'Warm'],
    description:
      'Leo is exceptionally smart and already responds to his name and gentle cues. His rich red coat will remain vibrant throughout his adult life.',
    features: ['Showroom Available', 'Non-Allergenic', 'Health ID Registered', 'Complimentary Vet Health Check'],
  },
  {
    id: 'a9b8c7d6-e5f4-4321-8765-abcdef123456',
    slug: 'blue-marle-pomeranian',
    name: 'Rocky',
    displayName: 'Rocky (Merle Pomeranian)',
    breed: 'pomeranian',
    breedName: 'Blue Merle Pomeranian',
    gender: 'male',
    genderLabel: 'Boy',
    age: '3 months',
    origin: 'imported',
    originLabel: 'Imported from Korea',
    status: 'available',
    priceAED: 22000,
    withVideo: true,
    coverImage: '/puppies/rocky.svg',
    gallery: ['/puppies/rocky.svg'],
    color: 'Exotic Blue Merle & Tan',
    estimatedWeight: '1.5 - 2.0 kg',
    birthDate: 'August 2026',
    healthCertId: '985141004829115',
    vaccinations: 'Full international veterinary immunization record',
    temperament: ['Exclusive', 'Playful', 'Loving', 'Stunning'],
    description:
      'Rocky features one of the rarest color genetics in miniature Pomeranians worldwide. His swirling silver, slate, and tan marbling makes him truly one-of-a-kind.',
    features: ['Rare Color Genetics', 'Korean Import Certificate', 'Lifetime Genetic Health Guarantee', 'Dubai VIP Handover'],
  },
];

/**
 * Filter puppies by origin, breed, and status.
 */
export function getFilteredPuppies(params?: {
  origin?: string | null;
  breed?: string | null;
  status?: string | null;
}): Puppy[] {
  return puppies.filter((pup) => {
    if (params?.origin && params.origin !== 'all' && pup.origin !== params.origin) {
      return false;
    }
    if (params?.breed && params.breed !== 'all' && pup.breed !== params.breed) {
      return false;
    }
    if (params?.status && pup.status !== params.status) {
      return false;
    }
    return true;
  });
}

/**
 * Find puppy by slug.
 */
export function getPuppyBySlug(slug: string): Puppy | undefined {
  return puppies.find((p) => p.slug === slug);
}

/**
 * Get all puppies that have gone home (adopted).
 */
export function getGoneHomePuppies(): Puppy[] {
  // Return a curated subset for gone home showcase
  return [
    { ...puppies[0], id: 'adopted-1', status: 'adopted', name: 'Mochi', displayName: 'Mochi (Now with the Al-Zaabi Family)' },
    { ...puppies[1], id: 'adopted-2', status: 'adopted', name: 'Teddy', displayName: 'Teddy (Now in Palm Jumeirah)' },
    { ...puppies[6], id: 'adopted-3', status: 'adopted', name: 'Simba', displayName: 'Simba (Now in Emirates Hills)' },
    { ...puppies[8], id: 'adopted-4', status: 'adopted', name: 'Pippa', displayName: 'Pippa (Now in Saadiyat Island)' },
  ];
}

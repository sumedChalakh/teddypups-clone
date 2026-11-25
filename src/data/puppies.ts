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
    "id": "4218427a-dd65-4b09-a089-584b912aa7ab",
    "slug": "maltipoo-max-male",
    "name": "Max",
    "displayName": "Max (Maltipoo)",
    "breed": "maltipoo",
    "breedName": "Maltipoo",
    "gender": "male",
    "genderLabel": "Boy",
    "age": "3 months",
    "origin": "local",
    "originLabel": "In Dubai Showroom",
    "status": "available",
    "priceAED": 14500,
    "withVideo": true,
    "coverImage": "/puppies/doors/door-1.jpg",
    "gallery": [
      "/puppies/doors/door-1.jpg"
    ],
    "color": "Apricot Cream",
    "estimatedWeight": "1.8 - 2.2 kg",
    "birthDate": "August 2026",
    "healthCertId": "985141004829101",
    "vaccinations": "Fully vaccinated & dewormed (DHPPi + Rabies)",
    "temperament": [
      "Playful",
      "Affectionate",
      "Hypoallergenic",
      "Lap cuddler"
    ],
    "description": "Max is an exceptionally sweet male Maltipoo puppy currently greeting visitors at our Downtown Dubai showroom. He has silky apricot curls, big expressive eyes, and a joyful, curious personality.",
    "features": [
      "Dubai Showroom Ready",
      "Verified Health Certificate",
      "Health Verified",
      "1-Year Genetic Guarantee"
    ]
  },
  {
    "id": "0abcf3f5-0080-44c1-b1e1-2a2de24a3cf4",
    "slug": "korean-teacup-maltipoo-female",
    "name": "Korean Teacup Maltipoo",
    "displayName": "Korean Teacup Maltipoo",
    "breed": "maltipoo",
    "breedName": "Korean Teacup Maltipoo",
    "gender": "female",
    "genderLabel": "Girl",
    "age": "2 months",
    "origin": "imported",
    "originLabel": "Imported from Korea",
    "status": "available",
    "priceAED": 18000,
    "withVideo": true,
    "coverImage": "/puppies/doors/door-2.jpg",
    "gallery": [
      "/puppies/doors/door-2.jpg"
    ],
    "color": "Snow White & Champagne",
    "estimatedWeight": "1.4 - 1.8 kg",
    "birthDate": "September 2026",
    "healthCertId": "985141004829102",
    "vaccinations": "Age-appropriate vaccinations with international pet passport",
    "temperament": [
      "Gentle",
      "Quiet",
      "Intelligent",
      "Loving"
    ],
    "description": "An exquisite Korean Teacup Maltipoo girl with ultra-compact proportions, baby-doll facial symmetry, and non-shedding coat.",
    "features": [
      "Korean Pedigree",
      "Ultra Compact Frame",
      "Pet Passport Included",
      "Home Delivery in UAE"
    ]
  },
  {
    "id": "c5d2cf3c-51e8-4ecf-ac94-97ef8fceb6ec",
    "slug": "korean-teacup-poodle-female",
    "name": "Korean Teacup Poodle",
    "displayName": "Korean Teacup Poodle",
    "breed": "poodle",
    "breedName": "Korean Teacup Poodle",
    "gender": "female",
    "genderLabel": "Girl",
    "age": "2 months",
    "origin": "imported",
    "originLabel": "Imported from Korea",
    "status": "available",
    "priceAED": 16500,
    "withVideo": false,
    "coverImage": "/puppies/doors/door-3.jpg",
    "gallery": [
      "/puppies/doors/door-3.jpg"
    ],
    "color": "Deep Red",
    "estimatedWeight": "1.5 - 1.9 kg",
    "birthDate": "September 2026",
    "healthCertId": "985141004829103",
    "vaccinations": "Vaccinated under licensed veterinary care",
    "temperament": [
      "Alert",
      "Quick learner",
      "Eager to please",
      "Calm lap dog"
    ],
    "description": "Vibrant red dense curls, short nose bridge, and a delightfully cheerful attitude. Renowned for high intelligence and allergy-friendly coat.",
    "features": [
      "Non-shedding Coat",
      "Vet Health Examined",
      "Import Certified",
      "Pet Passport Included"
    ]
  },
  {
    "id": "9cb7d6db-bf35-4e63-8e61-ca63e1925dbd",
    "slug": "maltipoo-cavapoo-male",
    "name": "Maltipoo & Cavapoo",
    "displayName": "Maltipoo & Cavapoo",
    "breed": "cavapoo",
    "breedName": "Maltipoo & Cavapoo",
    "gender": "male",
    "genderLabel": "Boy",
    "age": "3 months Maltipoo & 2 months Cavapoo",
    "origin": "local",
    "originLabel": "In Dubai Showroom",
    "status": "available",
    "priceAED": 13500,
    "withVideo": true,
    "coverImage": "/puppies/doors/door-4.jpg",
    "gallery": [
      "/puppies/doors/door-4.jpg"
    ],
    "color": "Caramel Toffee & White Chest",
    "estimatedWeight": "2.5 - 3.2 kg",
    "birthDate": "August 2026",
    "healthCertId": "985141004829104",
    "vaccinations": "Completed core puppy vaccination series",
    "temperament": [
      "Outgoing",
      "Family-friendly",
      "Companion dog",
      "Playful"
    ],
    "description": "Heart-melting Maltipoo & Cavapoo boys with classic teddy bear features and affectionate temperament.",
    "features": [
      "Showroom Available",
      "Child-Friendly",
      "Dewormed",
      "Same-Day Home Adoption"
    ]
  },
  {
    "id": "b39adb3f-eace-45af-a2e8-425de01ffc50",
    "slug": "toy-poodle-male-female",
    "name": "Toy Poodle",
    "displayName": "Toy Poodle",
    "breed": "poodle",
    "breedName": "Toy Poodle",
    "gender": "male",
    "genderLabel": "Boy",
    "age": "2 months",
    "origin": "imported",
    "originLabel": "Imported from Korea",
    "status": "available",
    "priceAED": 15500,
    "withVideo": false,
    "coverImage": "/puppies/doors/door-5.jpg",
    "gallery": [
      "/puppies/doors/door-5.jpg"
    ],
    "color": "Pure White Cloud",
    "estimatedWeight": "1.6 - 2.0 kg",
    "birthDate": "September 2026",
    "healthCertId": "985141004829105",
    "vaccinations": "Dewormed, Vaccinated",
    "temperament": [
      "Gentle",
      "Energetic",
      "Loyal",
      "Biddable"
    ],
    "description": "Pristine white toy poodle with adorable button nose and alert, playful disposition.",
    "features": [
      "Pristine White Coat",
      "Hypoallergenic",
      "International Health Card",
      "VIP Hand Delivery"
    ]
  },
  {
    "id": "027d7333-a8b2-49de-9bbc-9a47af88ebac",
    "slug": "maltipoo-female-2",
    "name": "Maltipoo",
    "displayName": "Maltipoo (Girl, 3 months)",
    "breed": "maltipoo",
    "breedName": "Maltipoo",
    "gender": "female",
    "genderLabel": "Girl",
    "age": "3 months",
    "origin": "local",
    "originLabel": "In Dubai Showroom",
    "status": "available",
    "priceAED": 15000,
    "withVideo": true,
    "coverImage": "/puppies/doors/door-6.jpg",
    "gallery": [
      "/puppies/doors/door-6.jpg"
    ],
    "color": "Blush Cream & Honey",
    "estimatedWeight": "1.7 - 2.1 kg",
    "birthDate": "August 2026",
    "healthCertId": "985141004829106",
    "vaccinations": "Full course puppy vaccinations completed",
    "temperament": [
      "Sweet-natured",
      "Quiet",
      "Affectionate",
      "Lap snuggle"
    ],
    "description": "Soft, dainty female Maltipoo who loves sitting comfortably on your lap during work-from-home hours.",
    "features": [
      "Dubai Showroom In-Person Visit",
      "Pee-Pad Trained",
      "Health Certified",
      "Ready to Go Home"
    ]
  },
  {
    "id": "ec3a42bf-bd62-46ba-962d-8f94f09715c5",
    "slug": "pomeranian-female",
    "name": "Pomeranian",
    "displayName": "Pomeranian (Girl, 3 months)",
    "breed": "pomeranian",
    "breedName": "Pomeranian",
    "gender": "female",
    "genderLabel": "Girl",
    "age": "3 months",
    "origin": "imported",
    "originLabel": "Imported from Korea",
    "status": "available",
    "priceAED": 16000,
    "withVideo": false,
    "coverImage": "/puppies/doors/door-7.jpg",
    "gallery": [
      "/puppies/doors/door-7.jpg"
    ],
    "color": "Golden Orange Sable",
    "estimatedWeight": "1.5 - 1.8 kg",
    "birthDate": "August 2026",
    "healthCertId": "985141004829107",
    "vaccinations": "Vaccinated & microchipped under veterinary supervision",
    "temperament": [
      "Lively",
      "Friendly",
      "Fluffy",
      "Photogenic"
    ],
    "description": "Fluffy double coat, fox-like expression, and perky upright ears.",
    "features": [
      "Champion Lineage",
      "Luxurious Fluff Coat",
      "Health Card Included",
      "Dubai Delivery"
    ]
  },
  {
    "id": "8114be6d-2101-4475-874f-96a9ce0204aa",
    "slug": "copper-male",
    "name": "Copper",
    "displayName": "Copper (Cavapoo)",
    "breed": "cavapoo",
    "breedName": "Cavapoo",
    "gender": "male",
    "genderLabel": "Boy",
    "age": "2 months",
    "origin": "local",
    "originLabel": "In Dubai Showroom",
    "status": "available",
    "priceAED": 14000,
    "withVideo": false,
    "coverImage": "/puppies/doors/door-8.jpg",
    "gallery": [
      "/puppies/doors/door-8.jpg"
    ],
    "color": "Rich Copper Chestnut",
    "estimatedWeight": "2.4 - 3.0 kg",
    "birthDate": "September 2026",
    "healthCertId": "985141004829108",
    "vaccinations": "First veterinary vaccination round complete",
    "temperament": [
      "Curious",
      "Gentle",
      "Cuddle bug",
      "Easygoing"
    ],
    "description": "Copper is a warm-toned Cavapoo boy with soulful hazel eyes and velvety floppy ears.",
    "features": [
      "Showroom Visits Welcome",
      "Veterinary Exam Cleared",
      "Genetic Health Warranty",
      "Starter Kit Included"
    ]
  },
  {
    "id": "dfa2eb4b-ce93-4a65-b7f3-e522eb1f481c",
    "slug": "shitzu-female",
    "name": "Shih Tzu",
    "displayName": "Shih Tzu (Girl, 2 months)",
    "breed": "shih-tzu",
    "breedName": "Shih Tzu",
    "gender": "female",
    "genderLabel": "Girl",
    "age": "2 months",
    "origin": "imported",
    "originLabel": "Imported from Korea",
    "status": "available",
    "priceAED": 13000,
    "withVideo": false,
    "coverImage": "/puppies/doors/door-9.jpg",
    "gallery": [
      "/puppies/doors/door-9.jpg"
    ],
    "color": "Tricolor Gold, White & Black",
    "estimatedWeight": "2.0 - 2.6 kg",
    "birthDate": "September 2026",
    "healthCertId": "985141004829109",
    "vaccinations": "Vaccinated & fully checked",
    "temperament": [
      "Calm",
      "Affectionate",
      "Dignified",
      "Companion dog"
    ],
    "description": "Beautiful tri-color coat, flat baby-doll muzzle, and peaceful disposition.",
    "features": [
      "Import Certified",
      "Purebred Pedigree",
      "Complimentary Vet Check",
      "UAE Home Delivery"
    ]
  },
  {
    "id": "1a54fae8-132d-4519-aa57-4ea3f1d866a4",
    "slug": "shitzu-male",
    "name": "Shih Tzu",
    "displayName": "Shih Tzu (Boy, 2 months)",
    "breed": "shih-tzu",
    "breedName": "Shih Tzu",
    "gender": "male",
    "genderLabel": "Boy",
    "age": "2 months",
    "origin": "local",
    "originLabel": "In Dubai Showroom",
    "status": "available",
    "priceAED": 13000,
    "withVideo": false,
    "coverImage": "/puppies/doors/door-10.jpg",
    "gallery": [
      "/puppies/doors/door-10.jpg"
    ],
    "color": "Black Mask Gold",
    "estimatedWeight": "2.2 - 2.8 kg",
    "birthDate": "September 2026",
    "healthCertId": "985141004829110",
    "vaccinations": "First round vaccinations completed",
    "temperament": [
      "Stately",
      "Playful",
      "Cuddle-loving",
      "Quiet"
    ],
    "description": "Charming Shih Tzu boy with silky flowing coat and affectionate companion temperament.",
    "features": [
      "Showroom Available",
      "Health Certified",
      "Dewormed",
      "Family Friendly"
    ]
  },
  {
    "id": "503fbdf7-5110-4660-8451-9fb9b0ce39bb",
    "slug": "maltipoo-female-1",
    "name": "Maltipoo",
    "displayName": "Maltipoo (Girl, 2.5 months)",
    "breed": "maltipoo",
    "breedName": "Maltipoo",
    "gender": "female",
    "genderLabel": "Girl",
    "age": "2.5 months",
    "origin": "imported",
    "originLabel": "Imported from Korea",
    "status": "available",
    "priceAED": 15500,
    "withVideo": false,
    "coverImage": "/puppies/doors/door-11.jpg",
    "gallery": [
      "/puppies/doors/door-11.jpg"
    ],
    "color": "Warm Butterscotch",
    "estimatedWeight": "1.6 - 2.0 kg",
    "birthDate": "September 2026",
    "healthCertId": "985141004829111",
    "vaccinations": "Vaccinated & microchipped under veterinary care",
    "temperament": [
      "Gentle",
      "Lap cuddler",
      "Smart",
      "Social"
    ],
    "description": "Lovely apricot Maltipoo girl with soft curly fleece coat and button eyes.",
    "features": [
      "Korean Pedigree Lineage",
      "Non-Shedding Coat",
      "Pet Passport Included",
      "Home Delivery in UAE"
    ]
  },
  {
    "id": "f9d123e4-8841-4b12-911a-123456789abc",
    "slug": "maltipoo-female",
    "name": "Maltipoo",
    "displayName": "Maltipoo (Girl, 2 months)",
    "breed": "maltipoo",
    "breedName": "Maltipoo",
    "gender": "female",
    "genderLabel": "Girl",
    "age": "2 months",
    "origin": "local",
    "originLabel": "In Dubai Showroom",
    "status": "available",
    "priceAED": 14800,
    "withVideo": false,
    "coverImage": "/puppies/doors/door-12.jpg",
    "gallery": [
      "/puppies/doors/door-12.jpg"
    ],
    "color": "Apricot Honey",
    "estimatedWeight": "1.7 - 2.2 kg",
    "birthDate": "September 2026",
    "healthCertId": "985141004829112",
    "vaccinations": "Dewormed & vaccinated",
    "temperament": [
      "Friendly",
      "Sweet",
      "Snuggly",
      "Bright"
    ],
    "description": "Playful and bright Maltipoo girl looking for a warm, loving home in the UAE.",
    "features": [
      "Showroom Available",
      "Health Card Included",
      "Ready to Go Home",
      "1-Year Guarantee"
    ]
  },
  {
    "id": "e8c234f5-9952-4c23-822b-234567890bcd",
    "slug": "korean-teacup-pomeranian-1",
    "name": "Korean Teacup Pomeranian",
    "displayName": "Korean Teacup Pomeranian (Girl 1)",
    "breed": "pomeranian",
    "breedName": "Korean Teacup Pomeranian",
    "gender": "female",
    "genderLabel": "Girl",
    "age": "2 months",
    "origin": "imported",
    "originLabel": "Imported from Korea",
    "status": "available",
    "priceAED": 17500,
    "withVideo": false,
    "coverImage": "/puppies/doors/door-13.jpg",
    "gallery": [
      "/puppies/doors/door-13.jpg"
    ],
    "color": "Pure Snow White",
    "estimatedWeight": "1.3 - 1.7 kg",
    "birthDate": "September 2026",
    "healthCertId": "985141004829113",
    "vaccinations": "Full international veterinary health certificate",
    "temperament": [
      "Bouncy",
      "Joyful",
      "Loving",
      "Bold"
    ],
    "description": "Compact micro Pomeranian girl from top Korean bloodlines with lush white coat.",
    "features": [
      "Korean Champion Pedigree",
      "Pure Snow Coat",
      "International Passport",
      "VIP Delivery"
    ]
  },
  {
    "id": "439a38eb-9d11-477d-bb62-094fa5f884b2",
    "slug": "korean-teacup-pomeranian",
    "name": "Korean Teacup Pomeranian",
    "displayName": "Korean Teacup Pomeranian (Girl 2)",
    "breed": "pomeranian",
    "breedName": "Korean Teacup Pomeranian",
    "gender": "female",
    "genderLabel": "Girl",
    "age": "2 months",
    "origin": "imported",
    "originLabel": "Imported from Korea",
    "status": "available",
    "priceAED": 17000,
    "withVideo": false,
    "coverImage": "/puppies/doors/door-14.jpg",
    "gallery": [
      "/puppies/doors/door-14.jpg"
    ],
    "color": "Cream Pearl",
    "estimatedWeight": "1.4 - 1.8 kg",
    "birthDate": "September 2026",
    "healthCertId": "985141004829114",
    "vaccinations": "Vaccinated & examined by Korean nursery vet",
    "temperament": [
      "Playful",
      "Sweet-tempered",
      "Cuddle bug",
      "Fluffy"
    ],
    "description": "Pearl cream coat, short muzzle, and sparkling dark eyes.",
    "features": [
      "Import Certified",
      "Korean Nursery Born",
      "Passport & Health Guarantee",
      "Doorstep Hand-Off"
    ]
  },
  {
    "id": "7b830d12-bf9e-4c81-a67b-1175654c6020",
    "slug": "korean-teacup-pomeranian-male",
    "name": "Korean Teacup Pomeranian",
    "displayName": "Korean Teacup Pomeranian (Boy)",
    "breed": "pomeranian",
    "breedName": "Korean Teacup Pomeranian",
    "gender": "male",
    "genderLabel": "Boy",
    "age": "2 months",
    "origin": "imported",
    "originLabel": "Imported from Korea",
    "status": "available",
    "priceAED": 17000,
    "withVideo": false,
    "coverImage": "/puppies/doors/door-15.jpg",
    "gallery": [
      "/puppies/doors/door-15.jpg"
    ],
    "color": "Ice White Cloud",
    "estimatedWeight": "1.4 - 1.7 kg",
    "birthDate": "September 2026",
    "healthCertId": "985141004829115",
    "vaccinations": "Age-appropriate vaccinations with international passport",
    "temperament": [
      "Confident",
      "Friendly",
      "Alert",
      "Affectionate"
    ],
    "description": "Gorgeous teacup Pomeranian boy with bear-like face and thick plush white fur.",
    "features": [
      "Teacup Bloodline",
      "Vet Certified Healthy",
      "Flight Ready to Dubai",
      "24/7 Puppy Care Support"
    ]
  }
];

export function getPuppyBySlug(slug: string): Puppy | undefined {
  return puppies.find((p) => p.slug === slug);
}

export function getAvailablePuppies(): Puppy[] {
  return puppies.filter((p) => p.status === 'available');
}

export function getPuppiesByBreed(breed: BreedType): Puppy[] {
  return puppies.filter((p) => p.breed === breed);
}

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

export function getGoneHomePuppies(): Puppy[] {
  return [
    { ...puppies[0], id: 'adopted-1', status: 'adopted', name: 'Ace', displayName: 'Ace (Pomeranian, boy, 3 months)' },
    { ...puppies[4], id: 'adopted-2', status: 'adopted', name: 'Leo', displayName: 'Leo (Poodle, boy, 3 months)' },
    { ...puppies[5], id: 'adopted-3', status: 'adopted', name: 'Mia', displayName: 'Mia (Maltipoo, girl, 3 months)' },
    { ...puppies[10], id: 'adopted-4', status: 'adopted', name: 'Sadie', displayName: 'Sadie (Maltipoo, girl, 3 months)' },
  ];
}


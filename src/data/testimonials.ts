export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  quote: string;
  caption: string;
  puppyName: string;
  puppyBreed: string;
  image: string;
  date: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Sarah & Tariq Al-Nuaimi',
    location: 'Dubai Marina',
    quote:
      'Lulu has transformed our apartment into pure joy. The TeddyPups team made the adoption so peaceful—her vet check was immaculate and she arrived happy and confident!',
    caption: 'Lulu with her new mummy',
    puppyName: 'Lulu',
    puppyBreed: 'Teacup Maltipoo',
    image: '/families/family-1.svg',
    date: 'October 2026',
    rating: 5,
  },
  {
    id: 't-2',
    clientName: 'The Al-Maktoum Family',
    location: 'Palm Jumeirah',
    quote:
      'We were initially nervous about importing a puppy from Korea, but TeddyPups took care of every single permit and flight arrangement. Our little boy is breathtaking.',
    caption: 'Adorable baby with the Al-Maktoum family',
    puppyName: 'Teddy',
    puppyBreed: 'Korean Teacup Poodle',
    image: '/families/family-2.svg',
    date: 'September 2026',
    rating: 5,
  },
  {
    id: 't-3',
    clientName: 'Elena Rostova',
    location: 'Downtown Dubai',
    quote:
      'Visiting the showroom in Downtown was such a warm experience. We got to hold Coco, sit on the couch with her, and take her home that very evening.',
    caption: 'Precious moments at home',
    puppyName: 'Coco',
    puppyBreed: 'Micro Pomeranian',
    image: '/families/family-3.svg',
    date: 'November 2026',
    rating: 5,
  },
  {
    id: 't-4',
    clientName: 'Dr. James & Layla Sterling',
    location: 'Emirates Hills',
    quote:
      'As a physician, hygiene and health checks were my top priorities. TeddyPups exceeded all medical standards. Our Cavapoo Charlie is healthy, playful, and so gentle with our toddler.',
    caption: 'Sweetest little prince',
    puppyName: 'Charlie',
    puppyBreed: 'Teddy Cavapoo',
    image: '/families/family-4.svg',
    date: 'August 2026',
    rating: 5,
  },
  {
    id: 't-5',
    clientName: 'Fatima & Mansoor',
    location: 'Arabian Ranches',
    quote:
      'Bella is the most affectionate companion. Everyone at Arabian Ranches asks where we found such a tiny, well-socialized Shih Tzu!',
    caption: 'Welcome home baby Bella',
    puppyName: 'Bella',
    puppyBreed: 'Imperial Shih Tzu',
    image: '/families/family-5.svg',
    date: 'July 2026',
    rating: 5,
  },
  {
    id: 't-6',
    clientName: 'Noura Al-Suwaidi',
    location: 'Saadiyat Island, Abu Dhabi',
    quote:
      'VIP delivery straight to our villa in Abu Dhabi was prompt and stress-free. The puppy starter kit had everything we needed for her first week.',
    caption: 'Our newest family member',
    puppyName: 'Mochi',
    puppyBreed: 'Teacup Maltipoo',
    image: '/families/family-6.svg',
    date: 'September 2026',
    rating: 5,
  },
  {
    id: 't-7',
    clientName: 'Marcus & Chloe Vance',
    location: 'Jumeirah Islands',
    quote:
      '10/10 customer care. Even weeks after adoption, their team checked in on WhatsApp to give advice on puppy nutrition and crate training.',
    caption: 'Pure happiness and puppy kisses',
    puppyName: 'Ollie',
    puppyBreed: 'Toy Poodle',
    image: '/families/family-7.svg',
    date: 'October 2026',
    rating: 5,
  },
  {
    id: 't-8',
    clientName: 'The Al-Falasi Family',
    location: 'Dubai Hills Estate',
    quote:
      'Milo is the sweetest little fluffball. True Korean teacup size, healthy joints, and full of bubbly energy.',
    caption: 'Best day ever with Milo',
    puppyName: 'Milo',
    puppyBreed: 'Pomeranian',
    image: '/families/family-8.svg',
    date: 'November 2026',
    rating: 5,
  },
];

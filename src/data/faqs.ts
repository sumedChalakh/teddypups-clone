export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'health' | 'import' | 'delivery';
}

export const faqs: FAQItem[] = [
  {
    id: 'health-check',
    question: 'Are your puppies vaccinated and health-checked?',
    answer:
      'Yes. All our puppies come with a verified health certificate from licensed veterinarians. Every puppy is fully vaccinated, dewormed, and undergoes a comprehensive physical examination before joining your family.',
    category: 'health',
  },
  {
    id: 'meet-before-decide',
    question: 'Can I meet a puppy before I decide?',
    answer:
      'Yes! We warmly invite you to visit our private boutique showroom in Downtown Dubai. You can meet our locally available puppies in a sanitized, stress-free environment and spend time bonding before making your decision.',
    category: 'general',
  },
  {
    id: 'same-day-take-home',
    question: 'Can I take my puppy home the same day?',
    answer:
      'Local puppies residing in our Dubai showroom are ready for immediate adoption, meaning you can complete the paperwork and take your puppy home the very same day. For puppies imported from Korea, delivery takes between 7 to 14 days.',
    category: 'delivery',
  },
  {
    id: 'korea-import-process',
    question: 'How does the Korean puppy import process work?',
    answer:
      'We partner exclusively with certified, ethical Korean nurseries celebrated for champion bloodlines and baby-doll facial genetics. Your chosen puppy receives health testing, international travel certificates, and is escorted in a climate-controlled pet cabin directly to Dubai Airport, where our team clears customs and brings them straight to you.',
    category: 'import',
  },
  {
    id: 'hypoallergenic-breeds',
    question: 'Are teacup Maltipoos and Poodles hypoallergenic?',
    answer:
      'Yes! Both Maltipoos and Toy Poodles have single-layer hair coats rather than double fur coats, which means they do not shed and produce minimal dander. They are widely regarded as the most allergy-friendly dog breeds for families.',
    category: 'health',
  },
  {
    id: 'uae-delivery',
    question: 'Do you deliver to Abu Dhabi, Sharjah, and other Emirates?',
    answer:
      'Yes. We provide VIP door-to-door hand delivery across all seven Emirates (Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain, and Fujairah). Your puppy travels comfortably with an experienced handler right to your doorstep.',
    category: 'delivery',
  },
  {
    id: 'what-comes-with-puppy',
    question: 'What is included with my puppy adoption package?',
    answer:
      'Every TeddyPups adoption includes: an official veterinary health passport, up-to-date vaccination record, starter premium food supply, comfort blanket carrying the scent of their littermates, favorite toy, and a 1-year genetic health guarantee.',
    category: 'general',
  },
  {
    id: 'payment-methods',
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank wire transfers, credit/debit cards, and payment upon showroom visit or delivery in Dubai. Transparent pricing with no hidden import duties or surprise fees.',
    category: 'general',
  },
];

export const siteConfig = {
  name: 'TeddyPups U.A.E.',
  tagline: 'Premium teacup puppies in Dubai',
  description:
    'Teddy bear and teacup puppies in Dubai. Meet local puppies in our Downtown Dubai showroom or bring home a rare breed imported from trusted breeders.',
  url: 'https://teddypups-clone-eta.vercel.app',
  phone: '+971 50 000 0000',
  whatsappNumber: '971500000000',
  whatsappMessage: 'Hello TeddyPups UAE! I am interested in inquiring about your available puppies.',
  email: 'info@instabizweb.com',
  address: 'Downtown Dubai, UAE',
  openingHours: 'Mon - Sun: 10:00 AM - 9:00 PM',
  navLinks: [
    { label: 'Puppies', href: '/puppies' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Happy Families', href: '/happy-families' },
    { label: 'Gone Home', href: '/gone-home' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  socials: {
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
    facebook: 'https://facebook.com',
  },
  whatsappUrl: (message?: string) =>
    `https://wa.me/971500000000?text=${encodeURIComponent(
      message || 'Hello TeddyPups UAE! I am interested in inquiring about your available puppies.'
    )}`,
};

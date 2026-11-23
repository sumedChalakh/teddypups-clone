import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

const heroPuppies = [
  { img: '/puppies/real/hero-pup-1.jpg', label: 'Teacup Maltipoo', tag: 'Available' },
  { img: '/puppies/real/hero-pup-2.jpg', label: 'Korean Teacup Pomeranian', tag: 'With video' },
  { img: '/puppies/real/hero-pup-3.jpg', label: 'Cavapoo Baby', tag: 'Ready to fly' },
  { img: '/puppies/real/hero-pup-4.jpg', label: 'Cream Teacup Pom', tag: 'Available' },
  { img: '/puppies/real/hero-pup-5.jpg', label: 'Toy Poodle Pair', tag: 'Loved' },
  { img: '/puppies/real/hero-pup-6.jpg', label: 'Mini Maltipoo', tag: 'Available' },
];

export function HeroScene() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-10 md:pt-16 pb-0 overflow-hidden">
      {/* Floating decorative paw prints */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="absolute top-12 left-10 text-2xl text-teddy-amber/30 animate-pulse">🐾</span>
        <span className="absolute top-28 right-16 text-xl text-teddy-rust/20">🐾</span>
        <span className="absolute top-1/3 left-1/4 text-lg text-teddy-gold/25">🐾</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center z-10">
        {/* Curving subtitle tag matching recording */}
        <div className="inline-block mb-3">
          <span className="font-hand text-xl md:text-2xl text-teddy-rust tracking-wide relative">
            every puppy is family
            <svg
              className="absolute -bottom-1.5 left-0 w-full h-2 text-teddy-gold/60"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0 5 Q 50 0 100 5" fill="none" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          </span>
        </div>

        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-teddy-brown leading-[1.08] tracking-tight max-w-4xl mx-auto mb-6">
          Premium teacup <br className="hidden sm:inline" /> puppies in Dubai
        </h1>

        <p className="font-sans text-base sm:text-lg md:text-xl text-teddy-brown/80 max-w-2xl mx-auto leading-relaxed mb-8">
          Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.
        </p>

        {/* 2 Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/puppies"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-teddy-rust hover:bg-teddy-rust-deep text-teddy-cream font-medium shadow-md hover:shadow-lg transition-all duration-200"
          >
            View available puppies
          </Link>
          <a
            href={siteConfig.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-teddy-brown text-teddy-brown hover:bg-teddy-brown/5 font-medium transition-colors"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      {/* Hero Scalloped Quilted Fence with Puppy Arches & Peeking Mascot */}
      <div className="relative mt-8 sm:mt-12 w-full">
        {/* Quilted diamond grid background behind arches */}
        <div className="relative mx-auto max-w-6xl px-4 flex items-end justify-center gap-2 sm:gap-4 overflow-hidden pt-8">
          {heroPuppies.slice(0, 3).map((pup, i) => (
            <div
              key={i}
              className="relative w-28 sm:w-40 md:w-48 h-36 sm:h-52 md:h-60 rounded-t-full border-4 border-teddy-brown bg-teddy-sand/40 overflow-hidden shadow-inner flex-shrink-0 group"
            >
              <Image
                src={pup.img}
                alt={pup.label}
                fill
                sizes="(max-width: 640px) 112px, 192px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 right-2 bg-teddy-cream/90 text-teddy-brown text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full shadow">
                {pup.tag}
              </span>
            </div>
          ))}

          {/* Center mascot dog face peeking over the fence */}
          <div className="relative -mb-1 w-24 sm:w-36 md:w-44 h-32 sm:h-44 md:h-52 flex-shrink-0 z-20 flex flex-col items-center justify-end">
            <div className="relative w-full h-full">
              <Image
                src="/brand/real/mascot-face.png"
                alt="TeddyPups Mascot"
                fill
                sizes="176px"
                className="object-contain animate-bounce-gentle"
              />
            </div>
          </div>

          {heroPuppies.slice(3, 6).map((pup, i) => (
            <div
              key={i}
              className="relative w-28 sm:w-40 md:w-48 h-36 sm:h-52 md:h-60 rounded-t-full border-4 border-teddy-brown bg-teddy-sand/40 overflow-hidden shadow-inner flex-shrink-0 group"
            >
              <Image
                src={pup.img}
                alt={pup.label}
                fill
                sizes="(max-width: 640px) 112px, 192px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 right-2 bg-teddy-cream/90 text-teddy-brown text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full shadow">
                {pup.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Quilted scalloped fence hem */}
        <div className="w-full bg-[#fbe3b4] border-t-4 border-teddy-brown/20 py-4 text-center">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center text-xs font-medium text-teddy-brown/60">
            <span>🐾 Dubai Showroom Available</span>
            <span className="hidden sm:inline">✨ Korea Direct Import with Health Guarantee</span>
            <span>✈️ Worldwide Safe Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Mascot } from '@/components/ui/Mascot';

const heroLineup = [
  { img: '/puppies/hero/hero-1.jpg', breed: 'Korean Teacup Pomeranian', tag: 'Available' },
  { img: '/puppies/hero/hero-2.jpg', breed: 'Korean Teacup Pomeranian', tag: 'Available' },
  { img: '/puppies/hero/hero-3.jpg', breed: 'Maltipoo', tag: 'Available' },
  { img: '/puppies/hero/hero-4.jpg', breed: 'Korean Teacup Pomeranian', tag: 'Available' },
  { img: '/puppies/hero/hero-5.jpg', breed: 'Toy Poodle', tag: 'Available' },
  { img: '/puppies/hero/hero-6.jpg', breed: 'Maltipoo', tag: 'Available' },
];

export function HeroScene() {
  return (
    <section
      data-section="hero"
      className="relative min-h-[90vh] flex flex-col justify-between pt-8 sm:pt-14 pb-0 overflow-hidden bg-gradient-to-b from-[#fffdf8] to-[#fff1d8] text-[#2a170e]"
    >
      {/* Subtle decorative paw prints */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="absolute top-10 left-8 text-2xl text-[#f2be6b]/35 animate-pulse">🐾</span>
        <span className="absolute top-24 right-12 text-xl text-[#a24a1a]/25">🐾</span>
        <span className="absolute top-1/3 left-1/4 text-lg text-[#f2be6b]/30">🐾</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center z-10 w-full">
        {/* Curving subtitle tag */}
        <div className="inline-block mb-3">
          <span className="font-hand text-xl sm:text-2xl text-[#a24a1a] tracking-wide relative inline-block">
            every puppy is family
            <svg
              className="absolute -bottom-1.5 left-0 w-full h-2 text-[#f2be6b]/70"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0 5 Q 50 0 100 5" fill="none" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          </span>
        </div>

        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-[#2a170e] leading-[1.08] tracking-tight max-w-4xl mx-auto mb-5">
          Premium teacup <br className="hidden sm:inline" /> puppies in Dubai
        </h1>

        <p className="font-sans text-base sm:text-lg md:text-xl text-[#2a170e]/80 max-w-2xl mx-auto leading-relaxed mb-8">
          Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.
        </p>

        {/* 2 Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/puppies"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#a24a1a] hover:bg-[#853c15] text-[#fffdf8] font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200"
          >
            View available puppies
          </Link>
          <a
            href={siteConfig.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-[#2a170e] text-[#2a170e] hover:bg-[#2a170e]/5 font-semibold text-base transition-colors"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      {/* Row of Equal-Sized Arched Windows */}
      <div className="relative mt-8 sm:mt-12 w-full">
        <div className="w-full overflow-x-auto no-scrollbar px-4 sm:px-6">
          <div className="flex items-end justify-center min-w-max sm:min-w-0 sm:max-w-7xl mx-auto gap-3 sm:gap-4 pb-2">
            
            {/* Left 3 Arches */}
            {heroLineup.slice(0, 3).map((pup, i) => (
              <div key={i} className="flex flex-col items-center group flex-shrink-0">
                <div className="mb-2 bg-[#fffdf8] border border-[#2a170e]/20 text-[#2a170e] text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity">
                  {pup.breed}
                </div>
                
                <div className="relative w-28 sm:w-36 md:w-44 lg:w-48 h-40 sm:h-52 md:h-64 rounded-t-full border-4 border-[#2a170e] bg-[#fbe3b4]/60 overflow-hidden shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                  <img
                    src={pup.img}
                    alt={pup.breed}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <span className="absolute top-2 right-2 bg-[#fffdf8]/95 text-[#2a170e] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                    {pup.tag}
                  </span>
                </div>
              </div>
            ))}

            {/* Mascot: Peeking over the quilt in center */}
            <div className="flex flex-col items-center flex-shrink-0 z-20 pb-1">
              <div className="relative w-28 sm:w-36 md:w-40 flex items-end justify-center">
                <Mascot state="peeking" size={140} className="drop-shadow-sm" />
              </div>
            </div>

            {/* Right 3 Arches */}
            {heroLineup.slice(3, 6).map((pup, i) => (
              <div key={i} className="flex flex-col items-center group flex-shrink-0">
                <div className="mb-2 bg-[#fffdf8] border border-[#2a170e]/20 text-[#2a170e] text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity">
                  {pup.breed}
                </div>
                
                <div className="relative w-28 sm:w-36 md:w-44 lg:w-48 h-40 sm:h-52 md:h-64 rounded-t-full border-4 border-[#2a170e] bg-[#fbe3b4]/60 overflow-hidden shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                  <img
                    src={pup.img}
                    alt={pup.breed}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <span className="absolute top-2 right-2 bg-[#fffdf8]/95 text-[#2a170e] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                    {pup.tag}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

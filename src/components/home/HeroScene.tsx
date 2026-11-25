import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Mascot } from '@/components/ui/Mascot';

const heroLineup = [
  { img: '/puppies/doors/door-1.jpg', breed: 'Maltipoo', tag: 'Available', pos: '53.8% 44.3%', slug: 'maltipoo-max-male' },
  { img: '/puppies/doors/door-2.jpg', breed: 'Korean Teacup Maltipoo', tag: 'Available', pos: '50% 45%', slug: 'korean-teacup-maltipoo-female' },
  { img: '/puppies/doors/door-3.jpg', breed: 'Korean Teacup Poodle', tag: 'Available', pos: '50% 40%', slug: 'korean-teacup-poodle-female' },
  { img: '/puppies/doors/door-4.jpg', breed: 'Maltipoo & Cavapoo', tag: 'Available', pos: '50% 45%', slug: 'maltipoo-cavapoo-male' },
  { img: '/puppies/doors/door-5.jpg', breed: 'Toy Poodle', tag: 'Available', pos: '50% 40%', slug: 'toy-poodle-male-female' },
  { img: '/puppies/doors/door-6.jpg', breed: 'Maltipoo', tag: 'Available', pos: '50% 45%', slug: 'maltipoo-female-2' },
];

export function HeroScene() {
  return (
    <section
      data-section="hero"
      className="relative h-screen max-h-[968px] min-h-[600px] flex flex-col justify-between pt-2 sm:pt-4 pb-0 overflow-hidden bg-gradient-to-b from-[#fffdf8] to-[#fff1d8] text-[#2a170e]"
    >
      {/* Subtle decorative paw prints */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="absolute top-6 left-8 text-xl text-[#f2be6b]/35 animate-pulse">🐾</span>
        <span className="absolute top-16 right-12 text-lg text-[#a24a1a]/25">🐾</span>
        <span className="absolute top-1/3 left-1/4 text-base text-[#f2be6b]/30">🐾</span>
      </div>

      {/* Main Content: Tag, Heading, Subtitle, CTAs */}
      <div className="max-w-5xl mx-auto px-4 text-center z-10 w-full flex-shrink-0">
        {/* Curving subtitle tag */}
        <div className="inline-block mb-1 sm:mb-2">
          <span className="font-hand text-lg sm:text-2xl text-[#a24a1a] tracking-wide relative inline-block">
            every puppy is family
            <svg
              className="absolute -bottom-1 left-0 w-full h-2 text-[#f2be6b]/70"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0 5 Q 50 0 100 5" fill="none" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          </span>
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#2a170e] leading-[1.06] tracking-tight max-w-4xl mx-auto mb-1.5 sm:mb-2.5">
          Premium teacup <br className="hidden sm:inline" /> puppies in Dubai
        </h1>

        <p className="font-sans text-xs sm:text-base text-[#2a170e]/80 max-w-xl mx-auto leading-relaxed mb-2.5 sm:mb-3.5">
          Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.
        </p>

        {/* 2 Primary CTAs */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-1 sm:mb-2">
          <Link
            href="/puppies"
            className="inline-flex items-center justify-center px-5 sm:px-7 py-2 sm:py-2.5 rounded-full bg-[#a24a1a] hover:bg-[#853c15] text-[#fffdf8] font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200"
          >
            View available puppies
          </Link>
          <a
            href={siteConfig.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 sm:px-7 py-2 sm:py-2.5 rounded-full border-2 border-[#2a170e] text-[#2a170e] hover:bg-[#2a170e]/5 font-semibold text-xs sm:text-sm transition-colors"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      {/* Row of Equal-Sized Arched Windows + One Taller Full-Body Center Mascot */}
      <div className="relative w-full flex-shrink-0 mt-auto pb-1 sm:pb-2">
        <div className="w-full overflow-x-auto no-scrollbar px-2 sm:px-4">
          <div className="flex items-end justify-center min-w-max mx-auto gap-2 sm:gap-3 lg:gap-4">
            
            {/* Left 3 Arches */}
            {heroLineup.slice(0, 3).map((pup, i) => (
              <Link
                key={i}
                href={`/puppies/${pup.slug}`}
                className="flex flex-col items-center group flex-shrink-0 cursor-pointer"
              >
                <div className="mb-1.5 bg-[#fffdf8] border border-[#2a170e]/20 text-[#2a170e] text-[9px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity">
                  {pup.breed}
                </div>
                
                <div
                  className="relative rounded-t-full border-3 sm:border-4 border-[#2a170e] bg-[#fbe3b4]/60 overflow-hidden shadow-md transition-transform duration-300 group-hover:-translate-y-1"
                  style={{
                    width: 'clamp(76px, 9vw, 136px)',
                    height: 'clamp(115px, 20.5vh, 205px)',
                  }}
                >
                  <Image
                    src={pup.img}
                    alt={pup.breed}
                    fill
                    sizes="(max-width: 640px) 90px, (max-width: 1024px) 120px, 140px"
                    className="object-cover"
                    style={{ objectPosition: pup.pos }}
                    priority
                  />
                  <span className="absolute top-1.5 right-1.5 bg-[#fffdf8]/95 text-[#2a170e] text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow z-10">
                    {pup.tag}
                  </span>
                </div>
              </Link>
            ))}

            {/* Center: ONE Full-Body Mascot standing proud, taller than the arched windows */}
            <div className="flex flex-col items-center flex-shrink-0 z-20 px-1 sm:px-2">
              <div
                className="flex items-end justify-center"
                style={{
                  height: 'clamp(135px, 23.5vh, 235px)',
                  width: 'clamp(115px, 15vw, 180px)',
                }}
              >
                <Mascot
                  state="sitting"
                  size="100%"
                  className="drop-shadow-md"
                />
              </div>
            </div>

            {/* Right 3 Arches */}
            {heroLineup.slice(3, 6).map((pup, i) => (
              <Link
                key={i + 3}
                href={`/puppies/${pup.slug}`}
                className="flex flex-col items-center group flex-shrink-0 cursor-pointer"
              >
                <div className="mb-1.5 bg-[#fffdf8] border border-[#2a170e]/20 text-[#2a170e] text-[9px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity">
                  {pup.breed}
                </div>
                
                <div
                  className="relative rounded-t-full border-3 sm:border-4 border-[#2a170e] bg-[#fbe3b4]/60 overflow-hidden shadow-md transition-transform duration-300 group-hover:-translate-y-1"
                  style={{
                    width: 'clamp(76px, 9vw, 136px)',
                    height: 'clamp(115px, 20.5vh, 205px)',
                  }}
                >
                  <Image
                    src={pup.img}
                    alt={pup.breed}
                    fill
                    sizes="(max-width: 640px) 90px, (max-width: 1024px) 120px, 140px"
                    className="object-cover"
                    style={{ objectPosition: pup.pos }}
                    priority
                  />
                  <span className="absolute top-1.5 right-1.5 bg-[#fffdf8]/95 text-[#2a170e] text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow z-10">
                    {pup.tag}
                  </span>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

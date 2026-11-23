import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { puppies } from '@/data/puppies';
import { PawIcon } from '@/components/ui/PawIcon';
import { QuiltDivider } from './QuiltDivider';

export function HeroScene() {
  const featuredPups = puppies.slice(0, 4);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <section
      data-section="hero"
      className="relative min-h-[90vh] bg-gradient-to-b from-[#fffdf8] to-[#fff1d8] pt-12 sm:pt-16 pb-16 overflow-hidden flex flex-col justify-between"
    >
      {/* Background Accent Graphics */}
      <div className="absolute top-12 left-10 text-brand-gold/30 pointer-events-none animate-float">
        <Sparkles className="w-12 h-12" />
      </div>
      <div className="absolute top-24 right-12 text-brand-blush/40 pointer-events-none animate-pulse">
        <Heart className="w-14 h-14" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        {/* Scrawl Accent Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sand border border-brand-dark/10 shadow-xs mb-6 transform -rotate-1 hover:rotate-0 transition-transform">
          <PawIcon className="w-4 h-4 text-brand-rust" />
          <span className="font-hand text-sm sm:text-base font-bold text-brand-rust">
            every puppy is family
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-dark max-w-4xl mx-auto leading-[1.12]">
          Premium teacup puppies in Dubai
        </h1>

        {/* Subhead / Lede */}
        <p className="mt-6 text-base sm:text-xl text-brand-dark/80 max-w-2xl mx-auto font-sans leading-relaxed">
          Ethically raised, certified teacup companions. Meet our puppies in our Downtown Dubai showroom or reserve your imported baby from Korea with full concierge delivery.
        </p>

        {/* 2 Primary CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/puppies"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-brand-rust text-white font-semibold text-base shadow-md hover:bg-brand-rustDark hover:scale-105 active:scale-95 transition-all"
          >
            <span>Meet available puppies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] text-white font-semibold text-base shadow-xs hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp us</span>
          </a>
        </div>

        {/* Featured Puppy Lineup Slider Cards */}
        <div className="mt-14 max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-brand-rust/80 font-semibold mb-4 flex items-center justify-center gap-2">
            <PawIcon className="w-3.5 h-3.5" />
            <span>Featured Pups Ready For Loving Homes</span>
            <PawIcon className="w-3.5 h-3.5" />
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {featuredPups.map((pup, idx) => {
              const tiltAngles = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2'];
              const tilt = tiltAngles[idx % tiltAngles.length];

              return (
                <Link
                  key={pup.id}
                  href={`/puppies/${pup.slug}`}
                  className={`group relative bg-brand-cream/80 rounded-2xl p-3 border border-brand-dark/10 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md ${tilt} hover:rotate-0`}
                >
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-brand-sand/30 border border-brand-dark/5">
                    <Image
                      src={pup.coverImage}
                      alt={`${pup.name}, ${pup.breedName}`}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold bg-brand-sand/95 text-brand-dark uppercase tracking-wider shadow-xs">
                      {pup.age}
                    </span>
                    {pup.withVideo && (
                      <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded-md text-[9px] font-semibold bg-brand-rust text-white flex items-center gap-1 shadow-xs">
                        <span>▶</span> video
                      </span>
                    )}
                  </div>

                  <div className="mt-2.5 text-center">
                    <h3 className="font-display font-bold text-base text-brand-dark group-hover:text-brand-rust transition-colors">
                      {pup.name}
                    </h3>
                    <p className="text-xs text-brand-dark/70 font-sans">
                      {pup.breedName}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scalloped Stitched Quilt Divider transitioning to Scene 2 */}
      <div className="relative z-30 pt-10">
        <QuiltDivider fillColor="#fff1d8" />
      </div>
    </section>
  );
}

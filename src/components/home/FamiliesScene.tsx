import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight, Heart } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { QuiltDivider } from './QuiltDivider';

export function FamiliesScene() {
  const showcase = testimonials.slice(0, 4);

  return (
    <section
      data-section="families"
      className="relative min-h-[90vh] bg-gradient-to-b from-[#a65a30] to-[#4d2b19] pt-14 pb-16 text-brand-cream flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-cream/15 border border-brand-cream/20 text-xs font-bold text-brand-sand uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-brand-sand text-brand-sand" />
            <span>Adoption Stories</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Happy families & puppies
          </h2>

          <p className="mt-4 text-base sm:text-lg text-brand-cream/80 font-sans leading-relaxed">
            We are truly honored to see our puppies become cherished members of loving homes. Here are heartwarming moments shared by our clients across Dubai and Abu Dhabi.
          </p>
        </div>

        {/* Polaroid Photowall Carousel */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcase.map((t, idx) => {
            const tilts = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2'];
            const tilt = tilts[idx % tilts.length];

            return (
              <div
                key={t.id}
                className={`relative bg-[#fffdf8] text-brand-dark p-4 rounded-xl shadow-lg border border-brand-dark/10 transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 ${tilt}`}
              >
                {/* Washi Tape Strip on Top */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-brand-sand/80 opacity-90 rounded-xs shadow-2xs rotate-1 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Polaroid Photo Frame */}
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-brand-sand/30 border border-brand-dark/10">
                  <Image
                    src={t.image}
                    alt={t.caption}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                {/* Handwritten Style Caption */}
                <div className="mt-3 text-center">
                  <p className="font-hand font-bold text-sm sm:text-base text-brand-dark leading-snug">
                    {t.caption}
                  </p>

                  <p className="text-[11px] font-semibold text-brand-rust font-sans mt-1">
                    {t.puppyBreed} &bull; {t.location}
                  </p>

                  {/* 5 Stars */}
                  <div className="flex items-center justify-center gap-1 mt-2 text-brand-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="mt-2 text-xs text-brand-dark/75 italic line-clamp-3 font-sans">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA to Happy Families Page */}
        <div className="mt-12 text-center">
          <Link
            href="/happy-families"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-gold text-brand-dark font-bold text-sm shadow-md hover:bg-brand-sand transition-all hover:scale-105 active:scale-95"
          >
            <span>See every happy family</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Quilt transition to Scene 7 */}
      <div className="relative z-30 pt-10">
        <QuiltDivider fillColor="#4d2b19" />
      </div>
    </section>
  );
}

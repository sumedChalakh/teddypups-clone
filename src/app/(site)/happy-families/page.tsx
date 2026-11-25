import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Heart, ArrowRight, MessageCircle } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { PawIcon } from '@/components/ui/PawIcon';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Happy Families',
  description:
    'Heartwarming adoption stories and genuine photos shared by families who welcomed a Teddy Pup into their homes across Dubai, Abu Dhabi, and the UAE.',
  alternates: {
    canonical: 'https://teddypups-clone-eta.vercel.app/happy-families',
  },
};

export default function HappyFamiliesPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hi TeddyPups UAE! I would love to share photos/updates of my adopted puppy.'
  )}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fffdf8] via-[#fff1d8] to-[#fbe3b4] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-sand border border-brand-dark/10 text-xs font-bold text-brand-rust uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 fill-brand-rust text-brand-rust" />
            <span>Adoption Memories Across the Emirates</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-brand-dark tracking-tight">
            Happy families & puppies
          </h1>

          <p className="mt-4 text-base sm:text-lg text-brand-dark/80 font-sans leading-relaxed">
            We are truly honored to see our puppies become cherished members of loving homes. These heartwarming moments have been shared by our valued clients across Dubai and Abu Dhabi.
          </p>
        </div>

        {/* Photowall Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, idx) => {
            const tilts = ['-rotate-1', 'rotate-2', '-rotate-2', 'rotate-1', 'rotate-1', '-rotate-1', 'rotate-2', '-rotate-2'];
            const tilt = tilts[idx % tilts.length];

            return (
              <div
                key={t.id}
                className={`relative bg-[#fffdf8] text-brand-dark p-5 rounded-2xl shadow-md border border-brand-dark/10 transition-all duration-300 hover:scale-105 hover:rotate-0 hover:shadow-xl ${tilt}`}
              >
                {/* Washi Tape Strip */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-brand-sand/80 opacity-90 rounded-xs shadow-2xs rotate-1 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Photo */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-brand-sand/30 border border-brand-dark/10">
                  <Image
                    src={t.image}
                    alt={t.caption}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                {/* Caption & Review */}
                <div className="mt-4 text-center">
                  <h3 className="font-hand font-bold text-lg text-brand-dark leading-snug">
                    {t.caption}
                  </h3>

                  <p className="text-xs font-semibold text-brand-rust font-sans mt-1">
                    {t.puppyBreed} &bull; {t.location}
                  </p>

                  <div className="flex items-center justify-center gap-1 mt-2 text-brand-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="mt-3 text-xs text-brand-dark/80 italic leading-relaxed font-sans">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <p className="mt-3 pt-3 border-t border-brand-dark/10 text-[11px] font-semibold text-brand-dark/50 font-sans">
                    {t.clientName} &bull; {t.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Share your story callout banner */}
        <div className="mt-16 p-8 rounded-3xl bg-brand-cream border-2 border-brand-dark/10 shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-1 text-xs font-bold text-brand-rust uppercase tracking-wider mb-1">
              <PawIcon className="w-3.5 h-3.5" />
              <span>TeddyPups Parents Community</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-brand-dark">
              Are you already a TeddyPups parent?
            </h2>
            <p className="text-sm text-brand-dark/70 font-sans mt-1">
              We love seeing our babies grow! Send us photos of your pup on WhatsApp to be featured on our family wall.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-xs hover:bg-[#20ba5a] transition"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Share your photo</span>
          </a>
        </div>
      </div>
    </main>
  );
}

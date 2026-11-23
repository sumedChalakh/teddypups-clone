import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ArrowRight } from 'lucide-react';
import { getGoneHomePuppies } from '@/data/puppies';
import { PawIcon } from '@/components/ui/PawIcon';

export const metadata: Metadata = {
  title: 'Gone Home Puppies | TeddyPups U.A.E.',
  description:
    'Celebrate our adopted puppies who have found their forever homes across Dubai, Abu Dhabi, and the UAE.',
};

export default function GoneHomePage() {
  const adoptedPups = getGoneHomePuppies();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fffdf8] via-[#fff1d8] to-[#fbe3b4] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-sand border border-brand-dark/10 text-xs font-bold text-brand-rust uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 fill-brand-rust text-brand-rust" />
            <span>Forever Loving Homes</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-brand-dark tracking-tight">
            Puppies gone home
          </h1>

          <p className="mt-4 text-base sm:text-lg text-brand-dark/80 font-sans leading-relaxed">
            Every puppy shown here has been happily adopted and is now living with their loving family in the UAE. Take a look at these cuties, or explore our currently available puppies!
          </p>

          <div className="mt-8">
            <Link
              href="/puppies"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-rust text-white font-semibold text-sm shadow-md hover:bg-brand-rustDark transition-all hover:scale-105 active:scale-95"
            >
              <span>View currently available puppies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Adopted Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {adoptedPups.map((pup) => (
            <article
              key={pup.id}
              className="bg-brand-cream/80 rounded-3xl p-4 border border-brand-dark/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-brand-sand/30 border border-brand-dark/5">
                  <Image
                    src={pup.coverImage}
                    alt={`${pup.name}, ${pup.breedName}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale-30"
                  />
                  {/* Gone Home Stamp Badge */}
                  <div className="absolute inset-0 bg-brand-dark/20 flex items-center justify-center">
                    <span className="px-4 py-1.5 rounded-full bg-brand-dark text-white text-xs font-bold uppercase tracking-widest shadow-md rotate-[-6deg] border border-white/20">
                      Gone Home ❤️
                    </span>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="font-display font-bold text-xl text-brand-dark">
                    {pup.displayName}
                  </h3>
                  <p className="text-xs text-brand-dark/70 font-sans mt-0.5">
                    {pup.breedName} &bull; {pup.genderLabel}
                  </p>
                  <p className="mt-2 text-xs text-brand-dark/65 italic line-clamp-2">
                    &ldquo;Happily settled and thriving with our wonderful adoptive parents.&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-brand-dark/10 text-center">
                <span className="text-[11px] font-semibold text-brand-rust flex items-center justify-center gap-1">
                  <PawIcon className="w-3 h-3" />
                  <span>Adopted & Loved</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

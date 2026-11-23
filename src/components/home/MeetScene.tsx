'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Video, Sparkles } from 'lucide-react';
import { puppies, type BreedType } from '@/data/puppies';
import { PawIcon } from '@/components/ui/PawIcon';
import { QuiltDivider } from './QuiltDivider';

const filterCategories: { label: string; breed: BreedType | 'all' }[] = [
  { label: 'All Breeds', breed: 'all' },
  { label: 'Maltipoo', breed: 'maltipoo' },
  { label: 'Pomeranian', breed: 'pomeranian' },
  { label: 'Poodle', breed: 'poodle' },
  { label: 'Cavapoo', breed: 'cavapoo' },
  { label: 'Shih Tzu', breed: 'shih-tzu' },
];

export function MeetScene() {
  const [selectedBreed, setSelectedBreed] = useState<BreedType | 'all'>('all');

  const filtered = selectedBreed === 'all'
    ? puppies.slice(0, 6)
    : puppies.filter((p) => p.breed === selectedBreed).slice(0, 6);

  return (
    <section
      data-section="meet"
      className="relative min-h-[90vh] bg-gradient-to-b from-[#fff1d8] to-[#fbe3b4] pt-14 pb-16 flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-sand border border-brand-dark/10 text-xs font-bold text-brand-rust uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Available in Dubai & Korea</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-brand-dark tracking-tight">
            Meet the pups
          </h2>

          <p className="mt-4 text-base sm:text-lg text-brand-dark/80 font-sans">
            Real puppies, real photos, looking for their families right now. Every pup is vet-checked and microchipped.
          </p>

          {/* Quick Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.breed}
                type="button"
                onClick={() => setSelectedBreed(cat.breed)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedBreed === cat.breed
                    ? 'bg-brand-rust text-white shadow-xs scale-105'
                    : 'bg-brand-cream/70 text-brand-dark/80 hover:bg-brand-cream hover:text-brand-dark'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Puppies Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((pup) => (
            <div
              key={pup.id}
              className="group bg-brand-cream rounded-3xl p-4 border border-brand-dark/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo & Badges */}
                <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-brand-sand/30 border border-brand-dark/5">
                  <Image
                    src={pup.coverImage}
                    alt={`${pup.name}, ${pup.breedName}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Origin Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-brand-cream/95 text-brand-dark shadow-xs backdrop-blur-xs flex items-center gap-1">
                    <PawIcon className="w-3 h-3 text-brand-rust" />
                    <span>{pup.originLabel}</span>
                  </span>

                  {/* Video Tag */}
                  {pup.withVideo && (
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-brand-rust text-white shadow-xs flex items-center gap-1">
                      <Video className="w-3 h-3" />
                      <span>with video</span>
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="mt-4 px-1">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display font-bold text-2xl text-brand-dark group-hover:text-brand-rust transition-colors">
                      {pup.name}
                    </h3>
                    <span className="text-sm font-semibold text-brand-rust">
                      AED {pup.priceAED.toLocaleString()}
                    </span>
                  </div>

                  <p className="text-xs text-brand-dark/70 font-sans mt-0.5">
                    {pup.breedName} &bull; {pup.genderLabel} &bull; {pup.age}
                  </p>

                  <p className="mt-3 text-xs text-brand-dark/75 line-clamp-2 leading-relaxed">
                    {pup.description}
                  </p>
                </div>
              </div>

              {/* View Card Action */}
              <div className="mt-5 pt-3 border-t border-brand-dark/10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Available Now
                </span>

                <Link
                  href={`/puppies/${pup.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-rust hover:text-brand-rustDark transition-colors group/link"
                >
                  <span>Meet {pup.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/puppies"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-dark text-white font-semibold text-sm shadow-md hover:bg-brand-rust transition-all hover:scale-105 active:scale-95"
          >
            <span>See all available puppies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Quilt transition to Scene 3 */}
      <div className="relative z-30 pt-10">
        <QuiltDivider fillColor="#fbe3b4" />
      </div>
    </section>
  );
}

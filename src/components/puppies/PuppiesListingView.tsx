'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { PuppyFilterBar } from './PuppyFilterBar';
import { PuppyCard } from './PuppyCard';
import { getFilteredPuppies } from '@/data/puppies';
import { PawIcon } from '@/components/ui/PawIcon';
import { RotateCcw } from 'lucide-react';

export function PuppiesListingView() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const origin = searchParams.get('origin');
  const breed = searchParams.get('breed');

  const filteredPups = getFilteredPuppies({ origin, breed });

  const resetFilters = () => {
    router.push('/puppies');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-sand border border-brand-dark/10 text-xs font-bold text-brand-rust uppercase tracking-wider mb-4">
          <PawIcon className="w-3.5 h-3.5" />
          <span>Curated Boutique Collection</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-bold text-brand-dark tracking-tight">
          Available puppies
        </h1>

        <p className="mt-4 text-base sm:text-lg text-brand-dark/80 font-sans">
          Teacup and teddy bear puppies available now in Dubai and imported from trusted breeders — every listing shows real photos of the puppy.
        </p>

        {/* Filter Controls */}
        <div className="mt-8">
          <PuppyFilterBar />
        </div>
      </div>

      {/* Listing Results Count */}
      <div className="mt-10 flex items-center justify-between border-b border-brand-dark/10 pb-4 text-xs sm:text-sm text-brand-dark/70 font-semibold">
        <span>
          Showing {filteredPups.length} {filteredPups.length === 1 ? 'puppy' : 'puppies'}
        </span>
        {(origin || breed) && (
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center gap-1.5 text-brand-rust hover:text-brand-rustDark font-bold transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset filters</span>
          </button>
        )}
      </div>

      {/* Grid or Empty State */}
      {filteredPups.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPups.map((pup) => (
            <PuppyCard key={pup.id} puppy={pup} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="mt-16 text-center py-16 px-4 bg-brand-cream/60 rounded-3xl border border-dashed border-brand-dark/20 max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-brand-sand flex items-center justify-center text-brand-rust mx-auto mb-4">
            <PawIcon className="w-8 h-8 opacity-80" />
          </div>
          <h2 className="font-display text-2xl font-bold text-brand-dark">
            No puppies match your criteria
          </h2>
          <p className="mt-2 text-sm text-brand-dark/70 font-sans max-w-md mx-auto">
            We regularly update our showroom and Korean nursery litters. Try resetting your breed or origin filters to discover other available pups.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-rust text-white font-semibold text-sm shadow-xs hover:bg-brand-rustDark transition"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Show all available puppies</span>
          </button>
        </div>
      )}
    </div>
  );
}

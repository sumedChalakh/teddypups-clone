'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Store, Plane, Sparkles } from 'lucide-react';
import { type BreedType } from '@/data/puppies';

const origins = [
  { label: 'All Origins', value: 'all', icon: Sparkles },
  { label: 'In Dubai Showroom', value: 'local', icon: Store },
  { label: 'Imported from Korea', value: 'imported', icon: Plane },
];

const breeds: { label: string; value: BreedType | 'all' }[] = [
  { label: 'All Breeds', value: 'all' },
  { label: 'Maltipoo', value: 'maltipoo' },
  { label: 'Pomeranian', value: 'pomeranian' },
  { label: 'Poodle', value: 'poodle' },
  { label: 'Cavapoo', value: 'cavapoo' },
  { label: 'Shih Tzu', value: 'shih-tzu' },
];

export function PuppyFilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentOrigin = searchParams.get('origin') || 'all';
  const currentBreed = searchParams.get('breed') || 'all';

  const updateFilters = (key: 'origin' | 'breed', value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    const query = params.toString();
    router.push(`/puppies${query ? `?${query}` : ''}`, { scroll: false });
  };

  return (
    <div className="space-y-4">
      {/* Origin Toggle Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {origins.map((o) => {
          const Icon = o.icon;
          const isActive = currentOrigin === o.value;

          return (
            <button
              key={o.value}
              type="button"
              onClick={() => updateFilters('origin', o.value)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-brand-rust text-white shadow-sm scale-105'
                  : 'bg-brand-sand/60 text-brand-dark/80 hover:bg-brand-sand hover:text-brand-dark'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{o.label}</span>
            </button>
          );
        })}
      </div>

      {/* Breed Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
        {breeds.map((b) => {
          const isActive = currentBreed === b.value;

          return (
            <button
              key={b.value}
              type="button"
              onClick={() => updateFilters('breed', b.value)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-brand-dark text-brand-gold shadow-xs font-bold'
                  : 'bg-brand-cream border border-brand-dark/10 text-brand-dark/70 hover:border-brand-rust hover:text-brand-rust'
              }`}
            >
              {b.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

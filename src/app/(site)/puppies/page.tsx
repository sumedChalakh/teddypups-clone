import { Suspense } from 'react';
import type { Metadata } from 'next';
import { PuppiesListingView } from '@/components/puppies/PuppiesListingView';

export const metadata: Metadata = {
  title: 'Available Puppies in Dubai',
  description:
    'Teacup and teddy bear puppies available now in Dubai and imported from trusted Korean breeders. Every listing features verified health records and genuine puppy photos.',
};

export default function PuppiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fffdf8] via-[#fff1d8] to-[#fbe3b4]">
      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto px-4 py-24 text-center">
            <p className="font-display text-xl text-brand-dark">Loading puppies gallery...</p>
          </div>
        }
      >
        <PuppiesListingView />
      </Suspense>
    </main>
  );
}

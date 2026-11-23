import type { Metadata } from 'next';
import { FaqPageView } from '@/components/faq/FaqPageView';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | TeddyPups U.A.E.',
  description:
    'Answers to common questions about teacup puppies in Dubai, veterinary health checks, Korean flight arrival, microchipping, and same-day showroom adoption.',
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fffdf8] via-[#fff1d8] to-[#fbe3b4]">
      <FaqPageView />
    </main>
  );
}

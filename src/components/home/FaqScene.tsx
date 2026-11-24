'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mascot } from '@/components/ui/Mascot';

const originalFaqs = [
  {
    q: 'Are your puppies vaccinated and health-checked?',
    a: 'Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.',
  },
  {
    q: 'Can I meet a puppy before I decide?',
    a: 'Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.',
  },
  {
    q: 'Can I take my puppy home the same day?',
    a: 'Local puppies are available immediately, so you can take your puppy home the same day.',
  },
];

export function FaqScene() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      data-section="questions"
      className="relative min-h-[75vh] bg-gradient-to-b from-[#4d2b19] to-[#2f1a10] pt-14 pb-16 text-[#fffdf8] flex flex-col justify-between"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-20 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-[#fffdf8] tracking-tight">
              Questions, answered
            </h2>
          </div>
          <Link
            href="/faq"
            className="self-start sm:self-auto inline-flex items-center px-5 py-2.5 rounded-full border border-[#fffdf8]/30 hover:bg-[#fffdf8]/10 text-sm font-semibold transition-colors"
          >
            Read all questions
          </Link>
        </div>

        {/* Accordion Component with exact 3 questions from reference */}
        <div className="space-y-4">
          {originalFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-xs rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                >
                  <span className="font-display text-lg sm:text-xl font-bold text-[#fffdf8] group-hover:text-[#f2be6b] transition-colors flex items-center gap-3">
                    <span className="text-[#f2be6b] text-sm">✦</span>
                    {faq.q}
                  </span>
                  <span className="text-[#f2be6b] text-lg font-bold ml-4">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-[#fffdf8]/85 font-sans text-sm sm:text-base leading-relaxed pl-12">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mascot: Under FAQ with curious posture */}
        <div className="mt-10 flex justify-center">
          <Mascot state="sitting" size={115} facing="right" />
        </div>
      </div>
    </section>
  );
}

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

const nightStars = [
  { left: '8%', top: '12%', size: 16, delay: '0s' },
  { left: '22%', top: '30%', size: 9, delay: '0.4s' },
  { left: '41%', top: '8%', size: 13, delay: '0.8s' },
  { left: '57%', top: '22%', size: 8, delay: '1.2s' },
  { left: '72%', top: '6%', size: 14, delay: '1.6s' },
  { left: '88%', top: '18%', size: 11, delay: '2.0s' },
  { left: '95%', top: '42%', size: 9, delay: '2.4s' },
  { left: '4%', top: '58%', size: 11, delay: '2.8s' },
  { left: '34%', top: '70%', size: 7, delay: '3.2s' },
  { left: '63%', top: '84%', size: 10, delay: '3.6s' },
  { left: '83%', top: '66%', size: 13, delay: '4.0s' },
];

export function FaqScene() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      data-section="questions"
      className="relative min-h-[75vh] bg-gradient-to-b from-[#4d2b19] to-[#2f1a10] py-16 sm:py-24 text-[#fffdf8] overflow-hidden"
    >
      {/* Night Sky Twinkling Stars */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {nightStars.map((star, idx) => (
          <svg
            key={idx}
            viewBox="0 0 40 40"
            className="absolute text-[#f2be6b] animate-pulse"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
              animationDuration: '3.2s',
            }}
          >
            <path
              d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
              fill="currentColor"
            />
          </svg>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* 2-Column Grid: Heading on left, Questions Accordion on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT COLUMN: Heading, CTA, Mascot with Question Mark */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[#fffdf8] tracking-tight leading-tight mb-6">
              Questions, answered
            </h2>

            <Link
              href="/faq"
              className="inline-flex items-center px-6 py-3 rounded-full border-2 border-[#fffdf8]/30 hover:border-[#f2be6b] hover:bg-[#fffdf8]/10 text-sm sm:text-base font-bold text-[#fffdf8] transition-all mb-8 shadow-sm"
            >
              Read all questions
            </Link>

            {/* Mascot with Floating Question Mark */}
            <div className="relative mt-2 flex flex-col items-center">
              <span
                className="font-display font-black text-4xl text-[#f2be6b] mb-1 animate-bounce"
                aria-hidden="true"
              >
                ?
              </span>
              <Mascot state="sitting" size={125} facing="right" />
            </div>
          </div>

          {/* RIGHT COLUMN: Accordion Questions */}
          <div className="lg:col-span-7 space-y-4">
            {originalFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;

              return (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-xs rounded-2xl border border-white/10 hover:border-white/20 transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-start justify-between text-left group gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg sm:text-xl font-bold text-[#fffdf8] group-hover:text-[#f2be6b] transition-colors flex items-start gap-3">
                      {/* Golden 4-pointed Star Bullet */}
                      <svg
                        viewBox="0 0 40 40"
                        className="w-4 h-4 text-[#f2be6b] flex-none mt-1.5"
                        aria-hidden="true"
                      >
                        <path
                          d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                          fill="currentColor"
                        />
                      </svg>
                      {faq.q}
                    </span>
                    <span
                      className="text-[#f2be6b] text-2xl font-bold flex-none transition-transform duration-200"
                      aria-hidden="true"
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-[#fffdf8]/85 font-sans text-sm sm:text-base leading-relaxed pl-13 border-t border-white/5 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

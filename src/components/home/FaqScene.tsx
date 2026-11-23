'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { faqs } from '@/data/faqs';
import { QuiltDivider } from './QuiltDivider';

export function FaqScene() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);
  const previewFaqs = faqs.slice(0, 4);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      data-section="questions"
      className="relative min-h-[85vh] bg-gradient-to-b from-[#4d2b19] to-[#2f1a10] pt-14 pb-16 text-brand-cream flex flex-col justify-between"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-cream/15 border border-brand-cream/20 text-xs font-bold text-brand-sand uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Frequently asked questions
          </h2>

          <p className="mt-4 text-base sm:text-lg text-brand-cream/80 font-sans">
            Everything you need to know about visiting our showroom, health certifications, and welcoming your puppy home.
          </p>
        </div>

        {/* Accordion Component */}
        <div className="mt-12 space-y-4">
          {previewFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-brand-cream/10 backdrop-blur-xs rounded-2xl border border-brand-cream/15 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full flex items-center justify-between p-5 text-left text-base sm:text-lg font-display font-semibold text-white hover:text-brand-gold transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className="px-5 pb-5 pt-1 text-sm sm:text-base text-brand-cream/80 font-sans leading-relaxed border-t border-brand-cream/10 animate-in fade-in duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View all FAQ button */}
        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand-cream/20 hover:bg-brand-cream text-white hover:text-brand-dark font-semibold text-sm transition-all"
          >
            <span>View all questions & answers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Quilt transition to Scene 8 */}
      <div className="relative z-30 pt-10">
        <QuiltDivider fillColor="#2f1a10" />
      </div>
    </section>
  );
}

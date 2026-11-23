'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';
import { faqs, type FAQItem } from '@/data/faqs';
import { siteConfig } from '@/config/site';

const categories: { label: string; value: 'all' | 'general' | 'health' | 'import' | 'delivery' }[] = [
  { label: 'All Questions', value: 'all' },
  { label: 'General & Visits', value: 'general' },
  { label: 'Health & Vet', value: 'health' },
  { label: 'Korean Imports', value: 'import' },
  { label: 'UAE Delivery', value: 'delivery' },
];

export function FaqPageView() {
  const [selectedCat, setSelectedCat] = useState<'all' | 'general' | 'health' | 'import' | 'delivery'>('all');
  const [openIds, setOpenIds] = useState<string[]>(['health-check']);

  const filteredFaqs = selectedCat === 'all'
    ? faqs
    : faqs.filter((f) => f.category === selectedCat);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello TeddyPups UAE! I have a question about adoption that was not listed on your FAQ.'
  )}`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-sand border border-brand-dark/10 text-xs font-bold text-brand-rust uppercase tracking-wider mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Knowledge & Advice</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-bold text-brand-dark tracking-tight">
          Frequently asked questions
        </h1>

        <p className="mt-4 text-base sm:text-lg text-brand-dark/80 font-sans leading-relaxed">
          Everything you need to know about our teacup puppies, veterinary standards, Korean flight concierge, and visiting our Downtown Dubai showroom.
        </p>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.value}
              type="button"
              onClick={() => setSelectedCat(c.value)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCat === c.value
                  ? 'bg-brand-rust text-white shadow-xs scale-105'
                  : 'bg-brand-sand/60 text-brand-dark/80 hover:bg-brand-sand hover:text-brand-dark'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="mt-12 space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);

          return (
            <div
              key={faq.id}
              className="bg-brand-cream rounded-2xl border border-brand-dark/10 shadow-xs overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggle(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                className="w-full flex items-center justify-between p-5 text-left text-base sm:text-lg font-display font-semibold text-brand-dark hover:text-brand-rust transition-colors"
              >
                <span className="pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-rust shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  className="px-5 pb-5 pt-1 text-sm sm:text-base text-brand-dark/80 font-sans leading-relaxed border-t border-brand-dark/10 animate-in fade-in duration-200"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still have questions WhatsApp Box */}
      <div className="mt-16 p-8 rounded-3xl bg-brand-cream border-2 border-brand-dark/10 shadow-sm text-center max-w-xl mx-auto space-y-4">
        <div className="w-14 h-14 rounded-full bg-brand-sand flex items-center justify-center text-brand-rust mx-auto">
          <MessageCircle className="w-7 h-7" />
        </div>
        <h2 className="font-display text-2xl font-bold text-brand-dark">
          Still have questions?
        </h2>
        <p className="text-sm text-brand-dark/70 font-sans">
          Our Dubai puppy specialists are online 7 days a week to assist with health inquiries, breed recommendations, and showroom appointments.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-xs hover:bg-[#20ba5a] transition"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Ask us directly on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

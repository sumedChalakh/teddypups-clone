'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Mascot } from '@/components/ui/Mascot';

const breeds = [
  { name: 'Maltipoo', filter: 'maltipoo' },
  { name: 'Pomeranian', filter: 'pomeranian' },
  { name: 'Poodle', filter: 'poodle' },
  { name: 'Cavapoo', filter: 'cavapoo' },
  { name: 'Shih Tzu', filter: 'shih-tzu' },
];

export function JourneyScene() {
  const [selectedBreed, setSelectedBreed] = useState('Maltipoo');

  return (
    <section
      data-section="journey"
      className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-[#f7d18d] to-[#f0b866] text-[#2a170e]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Numbered 3-Step Journey */}
          <div>
            <span className="font-hand text-lg sm:text-xl text-[#a24a1a]">step-by-step care</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#2a170e] leading-tight mt-1 mb-4">
              Your puppy journey
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#2a170e]/80 leading-relaxed mb-8">
              A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.
            </p>

            <ol className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#a24a1a] text-[#fffdf8] font-bold flex items-center justify-center font-display text-lg shadow">
                  1
                </span>
                <div>
                  <h3 className="font-display font-bold text-xl text-[#2a170e]">
                    Choose your breed
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#2a170e]/75 mt-1">
                    Select your preferred breed or tell us what you are looking for. We will guide you based on availability and your lifestyle.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#a24a1a]/90 text-[#fffdf8] font-bold flex items-center justify-center font-display text-lg shadow">
                  2
                </span>
                <div>
                  <h3 className="font-display font-bold text-xl text-[#2a170e]">
                    Get photos & details
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#2a170e]/75 mt-1">
                    Our team will share real photos, health details, and all necessary information directly on WhatsApp.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#a24a1a]/80 text-[#fffdf8] font-bold flex items-center justify-center font-display text-lg shadow">
                  3
                </span>
                <div>
                  <h3 className="font-display font-bold text-xl text-[#2a170e]">
                    Meet & welcome home
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#2a170e]/75 mt-1">
                    Meet your pup at our showroom or receive safe VIP doorstep delivery across all 7 UAE Emirates.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Right Column: Authentic WhatsApp Phone Mockup from Video */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-full max-w-sm bg-[#2a170e] rounded-[40px] p-3 shadow-2xl border-4 border-[#2a170e]">
              {/* Phone Screen Container */}
              <div className="bg-[#fff9ee] rounded-[32px] overflow-hidden flex flex-col h-[520px]">
                {/* Chat Header */}
                <div className="bg-[#fffdf8] border-b border-[#fbe3b4] px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f2be6b]/40 border border-[#2a170e]/20 flex items-center justify-center text-lg">
                    🐾
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#2a170e] leading-tight">
                      TeddyPups U.A.E.
                    </h4>
                    <span className="text-[11px] text-green-700 font-medium flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      online
                    </span>
                  </div>
                </div>

                {/* Chat Messages Body */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#fdf6e7]">
                  <div className="bg-[#f0c27b]/40 border border-[#e4a352]/30 text-[#2a170e] rounded-2xl rounded-tl-sm p-3 max-w-[85%] text-xs leading-relaxed shadow-sm">
                    Hi TeddyPups! I’d love to know more about your available puppies.
                  </div>

                  <div className="bg-white border border-[#fbe3b4] text-[#2a170e] rounded-2xl rounded-tl-sm p-3 max-w-[95%] text-xs leading-relaxed shadow-sm">
                    <p className="font-semibold mb-2">
                      Select your preferred breed or tell us what you’re looking for. We’ll guide you based on availability:
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {breeds.map((b) => (
                        <button
                          key={b.name}
                          type="button"
                          onClick={() => setSelectedBreed(b.name)}
                          className={`px-2.5 py-1 rounded-full text-[11px] font-medium border transition-colors ${
                            selectedBreed === b.name
                              ? 'bg-[#a24a1a] text-[#fffdf8] border-[#a24a1a] shadow-sm'
                              : 'bg-[#fffdf8] text-[#2a170e] border-[#2a170e]/20 hover:bg-[#fbe3b4]'
                          }`}
                        >
                          {b.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="self-end ml-auto bg-[#e2f7cb] border border-[#c4e89e] text-[#2a170e] rounded-2xl rounded-tr-sm p-3 max-w-[80%] text-xs leading-relaxed shadow-sm">
                    I am interested in a {selectedBreed}! Can you send recent photos and prices?
                  </div>
                </div>

                {/* Chat Input Bar with CTA */}
                <div className="p-3 bg-white border-t border-[#fbe3b4] flex items-center gap-2">
                  <a
                    href={siteConfig.whatsappUrl(`Hi TeddyPups, I am interested in ${selectedBreed} puppies.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-full bg-[#fffdf8] border border-[#2a170e]/20 hover:border-[#a24a1a] text-[#2a170e] text-xs font-semibold transition-colors"
                  >
                    <span>Say hello on WhatsApp</span>
                    <span className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xs font-bold">
                      ➔
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mascot: Sitting beside the phone */}
            <div className="absolute -bottom-6 -left-8 sm:-left-12">
              <Mascot state="sitting" size={115} facing="right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

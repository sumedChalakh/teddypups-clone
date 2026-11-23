'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

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
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Numbered 3-Step Journey */}
          <div>
            <span className="font-hand text-lg sm:text-xl text-teddy-rust">step-by-step care</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-teddy-brown leading-tight mt-1 mb-4">
              Your puppy journey
            </h2>
            <p className="font-sans text-base sm:text-lg text-teddy-brown/80 leading-relaxed mb-8">
              A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.
            </p>

            <ol className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-teddy-rust text-teddy-cream font-bold flex items-center justify-center font-display text-lg shadow">
                  1
                </span>
                <div>
                  <h3 className="font-display font-bold text-xl text-teddy-brown">
                    Choose your breed
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-teddy-brown/75 mt-1">
                    Select your preferred breed or tell us what you are looking for. We will guide you based on availability and your lifestyle.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-teddy-rust/90 text-teddy-cream font-bold flex items-center justify-center font-display text-lg shadow">
                  2
                </span>
                <div>
                  <h3 className="font-display font-bold text-xl text-teddy-brown">
                    Get photos & details
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-teddy-brown/75 mt-1">
                    Our team will share real photos, health details, and all necessary information directly on WhatsApp.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-teddy-rust/80 text-teddy-cream font-bold flex items-center justify-center font-display text-lg shadow">
                  3
                </span>
                <div>
                  <h3 className="font-display font-bold text-xl text-teddy-brown">
                    Meet & welcome home
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-teddy-brown/75 mt-1">
                    Meet your pup at our showroom or receive safe VIP doorstep delivery across all 7 UAE Emirates.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Right Column: Authentic WhatsApp Phone Mockup from Video */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-full max-w-sm bg-teddy-brown rounded-[40px] p-3 shadow-2xl border-4 border-teddy-brown">
              {/* Phone Screen Container */}
              <div className="bg-[#fff9ee] rounded-[32px] overflow-hidden flex flex-col h-[520px]">
                {/* Chat Header */}
                <div className="bg-teddy-cream border-b border-teddy-sand px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teddy-gold/40 border border-teddy-brown/20 flex items-center justify-center text-lg">
                    🐾
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-teddy-brown leading-tight">
                      TeddyPups U.A.E.
                    </h4>
                    <span className="text-[11px] text-green-700 font-medium flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      online
                    </span>
                  </div>
                </div>

                {/* Chat Messages Body with Paw Wallpaper Pattern */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#fdf6e7]">
                  {/* Incoming greeting bubble */}
                  <div className="bg-[#f0c27b]/40 border border-teddy-amber/30 text-teddy-brown rounded-2xl rounded-tl-sm p-3 max-w-[85%] text-xs leading-relaxed shadow-sm">
                    Hi TeddyPups! I’d love to know more about your available puppies.
                  </div>

                  {/* Incoming interactive guide bubble */}
                  <div className="bg-white border border-teddy-sand text-teddy-brown rounded-2xl rounded-tl-sm p-3 max-w-[95%] text-xs leading-relaxed shadow-sm">
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
                              ? 'bg-teddy-rust text-teddy-cream border-teddy-rust shadow-sm'
                              : 'bg-teddy-cream text-teddy-brown border-teddy-brown/20 hover:bg-teddy-sand'
                          }`}
                        >
                          {b.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Outgoing selection bubble */}
                  <div className="self-end ml-auto bg-[#e2f7cb] border border-[#c4e89e] text-teddy-brown rounded-2xl rounded-tr-sm p-3 max-w-[80%] text-xs leading-relaxed shadow-sm">
                    I am interested in a {selectedBreed}! Can you send recent photos and prices?
                  </div>
                </div>

                {/* Chat Input Bar with CTA */}
                <div className="p-3 bg-white border-t border-teddy-sand flex items-center gap-2">
                  <a
                    href={siteConfig.whatsappUrl(`Hi TeddyPups, I am interested in ${selectedBreed} puppies.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-full bg-teddy-cream border border-teddy-brown/20 hover:border-teddy-rust text-teddy-brown text-xs font-medium transition-colors"
                  >
                    <span>Say hello on WhatsApp</span>
                    <span className="w-6 h-6 rounded-full bg-teddy-whatsapp text-white flex items-center justify-center text-xs font-bold">
                      ➔
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Standing Mascot beside phone */}
            <div className="absolute -bottom-4 -left-6 sm:-left-10 w-24 h-20">
              <Image
                src="/brand/real/mascot-standing.png"
                alt="TeddyPups Mascot"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

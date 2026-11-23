'use client';

import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 sm:right-6 z-40 flex items-center gap-2 group">
      {/* Speech bubble indicator (desktop) */}
      <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-cream/95 text-brand-dark text-xs font-semibold shadow-md border border-brand-dark/10 transition-transform duration-200 group-hover:scale-105">
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>Ask us anything</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with TeddyPups UAE"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200"
      >
        {/* Subtle breathing glow */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-white" />
      </a>
    </div>
  );
}

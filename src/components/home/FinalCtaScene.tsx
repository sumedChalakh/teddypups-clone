import Link from 'next/link';
import { MessageCircle, MapPin, Calendar, HeartHandshake } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { PawIcon } from '@/components/ui/PawIcon';

export function FinalCtaScene() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <section
      data-section="cta"
      className="relative min-h-[75vh] bg-gradient-to-b from-[#2f1a10] to-[#24130b] pt-16 pb-20 text-brand-cream flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-xs font-bold text-brand-gold uppercase tracking-wider mb-6">
          <PawIcon className="w-4 h-4 text-brand-gold" />
          <span>Your Puppy Is Waiting</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight leading-tight">
          Ready to meet your new best friend?
        </h2>

        <p className="mt-6 text-base sm:text-xl text-brand-cream/80 max-w-2xl mx-auto font-sans leading-relaxed">
          Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE.
        </p>

        {/* 2 Primary CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-base shadow-lg hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-brand-cream text-brand-dark font-bold text-base shadow-md hover:bg-brand-sand hover:scale-105 active:scale-95 transition-all"
          >
            <Calendar className="w-5 h-5 text-brand-rust" />
            <span>Book a showroom visit</span>
          </Link>
        </div>

        {/* Showroom Summary Pill */}
        <div className="mt-12 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-6 py-3.5 rounded-2xl bg-brand-cream/5 border border-brand-cream/10 text-xs sm:text-sm text-brand-cream/70 font-sans">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-gold" />
            <span>{siteConfig.address}</span>
          </div>
          <span className="hidden sm:inline-block text-brand-cream/30">&bull;</span>
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-brand-gold" />
            <span>{siteConfig.openingHours}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

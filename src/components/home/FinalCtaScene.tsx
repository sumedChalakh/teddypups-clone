import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function FinalCtaScene() {
  return (
    <section
      data-section="home"
      className="relative min-h-[75vh] bg-gradient-to-b from-[#2f1a10] to-[#24130b] pt-16 pb-20 text-[#fffdf8] flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <h2 className="font-display text-4xl sm:text-6xl font-black text-[#fffdf8] tracking-tight leading-tight">
          Ready to meet your new best friend?
        </h2>

        <p className="mt-6 text-base sm:text-xl text-[#fffdf8]/85 max-w-2xl mx-auto font-sans leading-relaxed">
          Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE.
        </p>

        {/* 2 Primary CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#1e8a4a] text-white font-bold text-base shadow-lg hover:bg-[#16703b] hover:scale-105 active:scale-95 transition-all"
          >
            Chat on WhatsApp
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#fffdf8] text-[#2a170e] font-bold text-base shadow-md hover:bg-[#fbe3b4] hover:scale-105 active:scale-95 transition-all"
          >
            Book a showroom visit
          </Link>
        </div>
      </div>
    </section>
  );
}

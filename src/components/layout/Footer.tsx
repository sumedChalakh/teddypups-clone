import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Mascot } from '@/components/ui/Mascot';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#24130b] text-[#fffdf8] overflow-hidden pt-16 pb-12 select-none border-t border-[#4d2b19]/40">
      {/* Night Sky: Stars & Crescent Moon */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Crescent Moon */}
        <div className="absolute top-8 right-12 md:right-28 w-14 h-14 opacity-90">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_0_12px_rgba(242,190,107,0.3)]">
            <path
              d="M75 10 C45 15 25 40 30 72 C35 90 48 98 62 100 C30 95 10 65 20 35 C25 20 40 10 75 10 Z"
              fill="#fbe3b4"
            />
          </svg>
        </div>

        {/* Twinkling Golden Stars */}
        <span className="absolute top-10 left-16 text-[#f2be6b] text-xs animate-pulse opacity-80">✦</span>
        <span className="absolute top-24 left-1/3 text-[#fbe3b4] text-sm animate-pulse opacity-60">✦</span>
        <span className="absolute top-16 right-1/3 text-[#f2be6b] text-xs animate-pulse opacity-75">✦</span>
        <span className="absolute top-36 right-16 text-[#fbe3b4] text-xs opacity-50">✦</span>
        <span className="absolute top-48 left-20 text-[#f2be6b] text-sm animate-pulse opacity-70">✦</span>
        <span className="absolute top-12 left-1/2 text-[#fbe3b4] text-xs opacity-60">✦</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          
          {/* Column 1: Brand & Puppy in Basket SVG using Mascot component */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-[#fffdf8] tracking-tight leading-tight">
                Home, at last.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#fbe3b4]/90 max-w-sm leading-relaxed font-sans">
                TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium services and worldwide shipping.
              </p>
            </div>

            {/* Mascot snug in basket in footer */}
            <div className="mt-6 relative w-48 h-36">
              <Mascot state="basket" size={150} facing="right" />
            </div>
          </div>

          {/* Column 2: Explore Navigation Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-[#f2be6b] mb-4">
              Explore
            </h3>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <Link href="/puppies" className="text-[#fffdf8] hover:text-[#f2be6b] transition-colors">
                  Available puppies
                </Link>
              </li>
              <li>
                <Link href="/gone-home" className="text-[#fffdf8] hover:text-[#f2be6b] transition-colors">
                  Gone home
                </Link>
              </li>
              <li>
                <Link href="/happy-families" className="text-[#fffdf8] hover:text-[#f2be6b] transition-colors">
                  Happy families
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-[#fffdf8] hover:text-[#f2be6b] transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/how-it-works#delivery" className="text-[#fffdf8] hover:text-[#f2be6b] transition-colors">
                  Delivery & collection
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#fffdf8] hover:text-[#f2be6b] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#fffdf8] hover:text-[#f2be6b] transition-colors">
                  Visit & contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Say Hello & Contact Details */}
          <div className="md:col-span-3">
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-[#f2be6b] mb-4">
              Say hello
            </h3>
            <div className="space-y-4 font-sans text-sm">
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#f2be6b]/80 mb-0.5">
                  WhatsApp
                </span>
                <a
                  href={siteConfig.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fffdf8] font-bold text-base hover:text-[#f2be6b] transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-wider text-[#f2be6b]/80 mb-0.5">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#fffdf8] hover:text-[#f2be6b] transition-colors underline-offset-2 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-wider text-[#f2be6b]/80 mb-0.5">
                  Showroom
                </span>
                <span className="text-[#fffdf8]/90 leading-snug block">
                  {siteConfig.address}
                </span>
              </div>

              {/* Social Media Pills */}
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full border border-[#f2be6b]/40 text-xs font-medium text-[#fffdf8] bg-white/5 hover:bg-[#f2be6b]/20 hover:border-[#f2be6b] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={siteConfig.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full border border-[#f2be6b]/40 text-xs font-medium text-[#fffdf8] bg-white/5 hover:bg-[#f2be6b]/20 hover:border-[#f2be6b] transition-colors"
                >
                  TikTok
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full border border-[#f2be6b]/40 text-xs font-medium text-[#fffdf8] bg-white/5 hover:bg-[#f2be6b]/20 hover:border-[#f2be6b] transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 border-t border-[#4d2b19]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#fbe3b4]/70">
          <p>© {currentYear} TeddyPups U.A.E. All rights reserved.</p>
          <div className="flex items-center gap-2 font-hand text-sm text-[#f2be6b]">
            <span>🐾</span>
            <span>every puppy is family</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

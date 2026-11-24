import Link from 'next/link';
import { siteConfig } from '@/config/site';

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
          
          {/* Column 1: Brand & Puppy in Basket SVG */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-[#fffdf8] tracking-tight leading-tight">
                Home, at last.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#fbe3b4]/90 max-w-sm leading-relaxed font-sans">
                TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium services and worldwide shipping.
              </p>
            </div>

            {/* Cute Puppy in a Woven Basket SVG matching reference vector */}
            <div className="mt-8 relative w-56 h-40">
              <svg viewBox="0 0 240 180" className="w-full h-full overflow-visible" role="img" aria-label="Puppy cozy in a woven basket">
                {/* Woven Basket Body */}
                <ellipse cx="120" cy="140" rx="75" ry="18" fill="#2a170e" opacity="0.3" />
                
                {/* Puppy Mascot Peeking */}
                <g transform="translate(120, 95)">
                  {/* Fluffy ears */}
                  <ellipse cx="-42" cy="-10" rx="18" ry="26" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.5" transform="rotate(-15 -42 -10)" />
                  <ellipse cx="42" cy="-10" rx="18" ry="26" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.5" transform="rotate(15 42 -10)" />
                  
                  {/* Fluffy head */}
                  <circle cx="0" cy="-6" r="42" fill="#fbe3b4" stroke="#2a170e" strokeWidth="4" />
                  
                  {/* Curls top */}
                  <circle cx="-16" cy="-44" r="14" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.5" />
                  <circle cx="0" cy="-48" r="16" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.5" />
                  <circle cx="16" cy="-44" r="14" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.5" />
                  
                  {/* Cheerful Eyes */}
                  <circle cx="-14" cy="-8" r="5" fill="#2a170e" />
                  <circle cx="-12" cy="-10" r="1.8" fill="#ffffff" />
                  <circle cx="14" cy="-8" r="5" fill="#2a170e" />
                  <circle cx="16" cy="-10" r="1.8" fill="#ffffff" />
                  
                  {/* Cute Muzzle & Nose */}
                  <ellipse cx="0" cy="8" rx="16" ry="12" fill="#ffffff" />
                  <path d="M-6 4 Q0 1 6 4 Q0 10 -6 4 Z" fill="#2a170e" />
                  <path d="M0 6 Q0 12 -4 14 M0 12 Q4 14 4 12" stroke="#2a170e" strokeWidth="2" fill="none" strokeLinecap="round" />
                  
                  {/* Blushing cheeks */}
                  <ellipse cx="-24" cy="4" rx="6" ry="3.5" fill="#f9b9a6" opacity="0.8" />
                  <ellipse cx="24" cy="4" rx="6" ry="3.5" fill="#f9b9a6" opacity="0.8" />
                  
                  {/* Paws over basket edge */}
                  <ellipse cx="-22" cy="38" rx="10" ry="8" fill="#fbe3b4" stroke="#2a170e" strokeWidth="3" />
                  <ellipse cx="22" cy="38" rx="10" ry="8" fill="#fbe3b4" stroke="#2a170e" strokeWidth="3" />
                </g>

                {/* Basket Front with weave pattern */}
                <path
                  d="M45 125 C45 165 75 175 120 175 C165 175 195 165 195 125 C195 115 45 115 45 125 Z"
                  fill="#c27b38"
                  stroke="#2a170e"
                  strokeWidth="4"
                />
                <ellipse cx="120" cy="122" rx="75" ry="12" fill="#e4a352" stroke="#2a170e" strokeWidth="4" />
                
                {/* Basket weave line accents */}
                <path d="M70 135 Q120 150 170 135" stroke="#8b4a22" strokeWidth="2.5" fill="none" />
                <path d="M80 152 Q120 162 160 152" stroke="#8b4a22" strokeWidth="2.5" fill="none" />
                <path d="M90 125 L85 165 M120 125 L120 172 M150 125 L155 165" stroke="#8b4a22" strokeWidth="2.5" fill="none" />
              </svg>
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

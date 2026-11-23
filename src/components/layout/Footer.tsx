import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#24130b] text-teddy-cream overflow-hidden">
      {/* Curved Hill Top Divider */}
      <div className="w-full overflow-hidden leading-none" aria-hidden="true">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-[#24130b] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 items-start">
          {/* Brand Col with Cozy Basket Mascot from recording */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src="/brand/real/mascot-basket.png"
                  alt="TeddyPups Mascot in Basket"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-display font-black text-3xl text-teddy-cream">
                  Home, at last.
                </h3>
                <span className="font-hand text-sm text-teddy-gold">
                  {siteConfig.tagline}
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-teddy-cream/70 max-w-md leading-relaxed mb-6">
              {siteConfig.description}
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-white/10 text-teddy-sand">
                Downtown Dubai showroom
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-teddy-sand">
                Safe UAE & worldwide delivery
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-teddy-gold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-teddy-cream/75">
              <li>
                <Link href="/puppies" className="hover:text-teddy-gold transition-colors">
                  Available puppies
                </Link>
              </li>
              <li>
                <Link href="/gone-home" className="hover:text-teddy-gold transition-colors">
                  Gone home
                </Link>
              </li>
              <li>
                <Link href="/happy-families" className="hover:text-teddy-gold transition-colors">
                  Happy families
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-teddy-gold transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/how-it-works#delivery" className="hover:text-teddy-gold transition-colors">
                  Delivery & collection
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-teddy-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teddy-gold transition-colors">
                  Visit & contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details from siteConfig */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-teddy-gold mb-4">
              Say hello
            </h4>
            <div className="space-y-3 font-sans text-sm text-teddy-cream/75">
              <p>
                <span className="block text-xs uppercase tracking-wider text-teddy-gold/70">
                  WhatsApp
                </span>
                <a
                  href={siteConfig.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teddy-gold transition-colors font-semibold"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <span className="block text-xs uppercase tracking-wider text-teddy-gold/70">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-teddy-gold transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <span className="block text-xs uppercase tracking-wider text-teddy-gold/70">
                  Showroom
                </span>
                <span>{siteConfig.address}</span>
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <a
                href={siteConfig.socials.instagram}
                className="px-3 py-1 rounded-full border border-white/20 text-xs text-teddy-cream/80 hover:bg-white/10"
              >
                Instagram
              </a>
              <a
                href={siteConfig.socials.tiktok}
                className="px-3 py-1 rounded-full border border-white/20 text-xs text-teddy-cream/80 hover:bg-white/10"
              >
                TikTok
              </a>
              <a
                href={siteConfig.socials.facebook}
                className="px-3 py-1 rounded-full border border-white/20 text-xs text-teddy-cream/80 hover:bg-white/10"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teddy-cream/50">
          <p>© {currentYear} TeddyPups U.A.E. All rights reserved.</p>
          <div className="flex items-center gap-2 font-hand text-sm text-teddy-gold/80">
            <span>🐾</span>
            <span>every puppy is family</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

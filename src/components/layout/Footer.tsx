import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { PawIcon } from '@/components/ui/PawIcon';

export function Footer() {
  return (
    <footer className="relative bg-[#24130b] text-brand-cream/90 pt-8 pb-28 md:pb-12 transition-colors">
      {/* Decorative Wavy Hill Wave Edge */}
      <div className="absolute -top-10 inset-x-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-10 text-[#24130b] fill-current block"
          aria-hidden="true"
        >
          <path d="M0 80V44c120-30 240-44 360-30s240 46 360 34 240-58 360-46 240 40 360 26v52z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-brand-cream/10">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-brand-sand/20 border border-brand-gold/40 flex items-center justify-center">
                <Image
                  src="/brand/icon.png"
                  alt="TeddyPups Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
                TeddyPups
                <PawIcon className="w-4 h-4 text-brand-gold" />
              </span>
            </Link>
            <p className="text-sm text-brand-cream/70 leading-relaxed font-sans">
              Dubai&apos;s premier boutique for ethically raised, certified teacup and toy puppies. Hand-delivered with love across the United Arab Emirates.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cream/5 border border-brand-cream/10 text-xs text-brand-gold font-medium">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>100% Health Guarantee</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-base font-semibold text-white tracking-wide uppercase mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-cream/70 hover:text-brand-gold transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber/40 group-hover:bg-brand-gold transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Breeds Collection */}
          <div>
            <h3 className="font-display text-base font-semibold text-white tracking-wide uppercase mb-4">
              Our Breeds
            </h3>
            <ul className="space-y-2.5 text-sm text-brand-cream/70">
              <li>
                <Link
                  href="/puppies?breed=maltipoo"
                  className="hover:text-brand-gold transition-colors"
                >
                  Teacup Maltipoo
                </Link>
              </li>
              <li>
                <Link
                  href="/puppies?breed=pomeranian"
                  className="hover:text-brand-gold transition-colors"
                >
                  Micro Pomeranian
                </Link>
              </li>
              <li>
                <Link
                  href="/puppies?breed=poodle"
                  className="hover:text-brand-gold transition-colors"
                >
                  Tiny Toy Poodle
                </Link>
              </li>
              <li>
                <Link
                  href="/puppies?breed=cavapoo"
                  className="hover:text-brand-gold transition-colors"
                >
                  Teddy Cavapoo
                </Link>
              </li>
              <li>
                <Link
                  href="/puppies?breed=shih-tzu"
                  className="hover:text-brand-gold transition-colors"
                >
                  Imperial Shih Tzu
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit & Contact */}
          <div className="space-y-3">
            <h3 className="font-display text-base font-semibold text-white tracking-wide uppercase mb-4">
              Dubai Showroom
            </h3>
            <p className="flex items-start gap-2.5 text-sm text-brand-cream/70">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span>{siteConfig.address}</span>
            </p>
            <p className="flex items-center gap-2.5 text-sm text-brand-cream/70">
              <Phone className="w-4 h-4 text-brand-gold shrink-0" />
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="hover:text-brand-gold transition-colors"
              >
                {siteConfig.phone}
              </a>
            </p>
            <p className="flex items-center gap-2.5 text-sm text-brand-cream/70">
              <Mail className="w-4 h-4 text-brand-gold shrink-0" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-brand-gold transition-colors"
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="flex items-center gap-2.5 text-sm text-brand-cream/70">
              <Clock className="w-4 h-4 text-brand-gold shrink-0" />
              <span>{siteConfig.openingHours}</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-cream/50 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-brand-rose fill-brand-rose" />
            <span>for puppy lovers across UAE</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

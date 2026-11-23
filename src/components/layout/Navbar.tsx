'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { MobileMenu } from './MobileMenu';
import { PawIcon } from '@/components/ui/PawIcon';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-cream/90 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="TeddyPups U.A.E. Home"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-brand-sand border border-brand-gold/50 flex items-center justify-center transition-transform group-hover:scale-105">
                <Image
                  src="/brand/icon.png"
                  alt="TeddyPups Logo"
                  width={44}
                  height={44}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-brand-dark leading-tight flex items-center gap-1">
                  TeddyPups
                  <PawIcon className="w-3.5 h-3.5 text-brand-rust opacity-80" />
                </span>
                <span className="text-[10px] tracking-widest text-brand-rust uppercase font-semibold">
                  U.A.E. &bull; Dubai
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-1 xl:gap-2 bg-brand-sand/60 px-4 py-1.5 rounded-full border border-brand-dark/10 backdrop-blur-sm"
            >
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-brand-cream text-brand-rust shadow-xs font-semibold'
                        : 'text-brand-dark/80 hover:text-brand-dark hover:bg-brand-cream/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-sm font-semibold shadow-xs hover:bg-[#20ba5a] transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp us</span>
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
                className="inline-flex lg:hidden items-center justify-center p-2.5 rounded-full bg-brand-cream/90 border border-brand-dark/15 text-brand-dark hover:bg-brand-sand transition"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

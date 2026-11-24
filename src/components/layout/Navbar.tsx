'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Puppies', href: '/puppies' },
  { label: 'Happy families', href: '/happy-families' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Visit & contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#fffdf8] border-b border-[#2a170e]/10 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
        
        {/* Brand: Logo + "TeddyPups" (No "U.A.E. · DUBAI" subtext) */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0">
            <Image
              src="/brand/logo.png"
              alt="TeddyPups Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-display font-black text-2xl sm:text-[26px] text-[#2a170e] tracking-tight">
            TeddyPups
          </span>
        </Link>

        {/* Desktop Navigation Links in exact order */}
        <nav className="hidden lg:flex items-center gap-7 font-sans text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors flex flex-col items-center ${
                  isActive
                    ? 'text-[#a24a1a]'
                    : 'text-[#2a170e]/80 hover:text-[#2a170e]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-2 text-[10px] text-[#a24a1a] leading-none" aria-hidden="true">
                    🐾
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Green "WhatsApp us" Button */}
        <div className="hidden lg:flex items-center">
          <a
            href={siteConfig.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#1e8a4a] hover:bg-[#16703b] text-white font-bold text-sm shadow-sm transition-all hover:scale-105"
          >
            WhatsApp us
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href={siteConfig.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#1e8a4a] text-white font-bold text-xs"
          >
            WhatsApp us
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#2a170e] hover:bg-black/5"
            aria-label="Toggle navigation menu"
          >
            <span className="text-2xl">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fffdf8] border-b border-[#2a170e]/15 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 font-sans text-base font-semibold">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 border-b border-black/5 ${
                    isActive ? 'text-[#a24a1a] font-bold' : 'text-[#2a170e]/80'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span>🐾</span>}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

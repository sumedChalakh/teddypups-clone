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
    <header className="fixed inset-x-0 top-0 z-50 bg-[#fffdf8] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand: Logo + "TeddyPups" */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0">
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
                className={`group relative py-1 transition-colors flex flex-col items-center ${
                  isActive
                    ? 'text-[#a24a1a]'
                    : 'text-[#2a170e]/80 hover:text-[#2a170e]'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {link.label}
                  {/* Subtle Brown Paw Icon for Active/Hover state */}
                  <svg
                    viewBox="0 0 64 64"
                    className={`w-3.5 h-3.5 transition-all duration-200 fill-current ${
                      isActive
                        ? 'opacity-100 scale-100 text-[#a24a1a]'
                        : 'opacity-0 scale-75 group-hover:opacity-40 text-[#2a170e]'
                    }`}
                    aria-hidden="true"
                  >
                    <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                  </svg>
                </span>
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

      {/* Decorative Scalloped Hem Border at bottom of Header matching original */}
      <div className="w-full h-2.5 overflow-hidden leading-none block -mb-2 pointer-events-none text-[#fffdf8]">
        <svg
          aria-hidden="true"
          className="w-full h-full text-[#fffdf8]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 14"
        >
          <defs>
            <pattern id="navbar-hem-pattern" width="44" height="14" patternUnits="userSpaceOnUse">
              <path d="M0 0H44V2A22 11 0 0 1 0 2Z" fill="#fffdf8" />
              <path d="M0 2A22 11 0 0 0 44 2" fill="none" stroke="#2a170e" strokeOpacity="0.12" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="14" fill="url(#navbar-hem-pattern)" />
        </svg>
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
                  {isActive && (
                    <svg viewBox="0 0 64 64" className="w-4 h-4 fill-current text-[#a24a1a]" aria-hidden="true">
                      <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                    </svg>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

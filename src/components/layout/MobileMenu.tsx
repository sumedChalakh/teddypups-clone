'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, MessageCircle, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { PawIcon } from '@/components/ui/PawIcon';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuLinks = [
  { label: 'Home', href: '/' },
  { label: 'Puppies', href: '/puppies' },
  { label: 'Happy Families', href: '/happy-families' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Gone Home', href: '/gone-home' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock background scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-brand-sand text-brand-dark animate-in fade-in duration-200"
    >
      {/* Menu Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-brand-dark/10">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-brand-dark"
        >
          <PawIcon className="w-6 h-6 text-brand-rust" />
          <span>TeddyPups</span>
        </Link>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-brand-dark/20 bg-brand-cream text-brand-dark hover:border-brand-rust hover:text-brand-rust transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Menu Links */}
      <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-center">
        <ul className="space-y-4">
          {menuLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`group flex items-center justify-between text-3xl sm:text-4xl font-display font-semibold transition-colors py-2 ${
                    isActive
                      ? 'text-brand-rust font-bold'
                      : 'text-brand-dark hover:text-brand-rust'
                  }`}
                >
                  <span>{item.label}</span>
                  <PawIcon
                    className={`w-7 h-7 transition-transform group-hover:scale-125 ${
                      isActive ? 'text-brand-rust opacity-100' : 'opacity-0 group-hover:opacity-100 text-brand-amber'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Quick Contact Box in Mobile Menu */}
        <div className="mt-8 pt-6 border-t border-brand-dark/10 space-y-3">
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#25D366] text-white font-semibold shadow-sm hover:brightness-105 transition"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-brand-cream border border-brand-dark/20 text-brand-dark font-semibold hover:bg-brand-sand transition"
          >
            <Phone className="w-5 h-5" />
            <span>Call {siteConfig.phone}</span>
          </a>
          <p className="flex items-center justify-center gap-1.5 text-xs text-brand-dark/70 text-center pt-1 font-sans">
            <MapPin className="w-3.5 h-3.5 text-brand-rust" />
            <span>{siteConfig.address} &bull; {siteConfig.openingHours}</span>
          </p>
        </div>
      </nav>
    </div>
  );
}

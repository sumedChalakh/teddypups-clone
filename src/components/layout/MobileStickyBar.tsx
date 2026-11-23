import { MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function MobileStickyBar() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <aside
      aria-label="Mobile Quick Actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-brand-cream/95 backdrop-blur-md border-t border-brand-dark/10 p-3 shadow-[0_-4px_12px_rgba(42,23,14,0.08)]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-xs hover:brightness-105 transition active:scale-[0.98]"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Us</span>
        </a>

        <a
          href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
          className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full bg-brand-sand border border-brand-dark/15 text-brand-dark font-semibold text-sm hover:bg-brand-gold/40 transition active:scale-[0.98]"
        >
          <Phone className="w-4 h-4" />
          <span>Call</span>
        </a>
      </div>
    </aside>
  );
}

import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { PawIcon } from '@/components/ui/PawIcon';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Visit & Contact Our Dubai Showroom | TeddyPups U.A.E.',
  description:
    'Visit TeddyPups in Downtown Dubai to meet our ethically raised teacup puppies. View showroom location, opening hours, and direct WhatsApp contact details.',
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello TeddyPups UAE! I would like to schedule a visit to your Downtown Dubai showroom.'
  )}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fffdf8] via-[#fff1d8] to-[#fbe3b4] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-sand border border-brand-dark/10 text-xs font-bold text-brand-rust uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Dubai Boutique Showroom</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-brand-dark tracking-tight">
            Visit & Contact Us
          </h1>

          <p className="mt-4 text-base sm:text-lg text-brand-dark/80 font-sans leading-relaxed">
            Come meet our playful teacup puppies in a private, sanitized playpen environment in Downtown Dubai, or reach out to our team 7 days a week.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column: Showroom Details & Direct Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-brand-cream border border-brand-dark/10 shadow-sm space-y-6">
              <h2 className="font-display text-2xl font-bold text-brand-dark flex items-center gap-2">
                <span>Downtown Showroom</span>
                <PawIcon className="w-5 h-5 text-brand-rust" />
              </h2>

              <div className="space-y-4 text-sm text-brand-dark/80">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-sand flex items-center justify-center text-brand-rust shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark">Address</p>
                    <p className="text-brand-dark/70">{siteConfig.address}</p>
                    <p className="text-xs text-brand-rust mt-1 font-semibold flex items-center gap-1">
                      <Navigation className="w-3 h-3" />
                      <span>Complimentary valet parking available</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-sand flex items-center justify-center text-brand-rust shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark">Direct Phone</p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                      className="text-brand-rust hover:underline font-semibold"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-sand flex items-center justify-center text-brand-rust shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark">Email Inquiries</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-brand-dark/80 hover:text-brand-rust"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-sand flex items-center justify-center text-brand-rust shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark">Showroom Hours</p>
                    <p className="text-brand-dark/70">{siteConfig.openingHours}</p>
                    <p className="text-xs text-brand-dark/60 mt-0.5">
                      Private appointments recommended for puppy bonding
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-xs hover:bg-[#20ba5a] transition"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Chat directly on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Hygiene & Sanitization Note */}
            <div className="p-5 rounded-2xl bg-brand-sand/40 border border-brand-dark/10 flex items-center gap-3 text-xs text-brand-dark/80">
              <ShieldCheck className="w-7 h-7 text-brand-rust shrink-0" />
              <p>
                Our showroom is UV-sanitized twice daily to ensure the highest health protection for both our teacup puppies and visiting families.
              </p>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}

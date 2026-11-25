import type { Metadata } from 'next';
import Link from 'next/link';
import {
  HeartHandshake,
  Stethoscope,
  Plane,
  Truck,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  MessageCircle,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { PawIcon } from '@/components/ui/PawIcon';

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'Learn how our ethical teacup puppy adoption process works in Dubai. From showroom bonding to VIP door-to-door hand delivery across all UAE Emirates.',
  alternates: {
    canonical: 'https://teddypups-clone-eta.vercel.app/how-it-works',
  },
};

export default function HowItWorksPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fffdf8] via-[#fff1d8] to-[#fbe3b4] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-sand border border-brand-dark/10 text-xs font-bold text-brand-rust uppercase tracking-wider mb-4">
            <PawIcon className="w-3.5 h-3.5" />
            <span>Adoption Concierge Guide</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-brand-dark tracking-tight">
            How adoption works
          </h1>

          <p className="mt-4 text-base sm:text-lg text-brand-dark/80 font-sans leading-relaxed">
            From your very first enquiry to the moment your puppy steps into your home, we provide a transparent, loving, and stress-free adoption journey.
          </p>
        </div>

        {/* 3 Step Adoption Process */}
        <div className="mt-14 max-w-4xl mx-auto space-y-8">
          <div className="bg-brand-cream rounded-3xl p-8 border-2 border-brand-dark/10 shadow-sm flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-sand flex items-center justify-center text-brand-rust shrink-0 font-display font-extrabold text-2xl border border-brand-dark/10">
              01
            </div>
            <div className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-brand-dark">
                Choose Your Puppy (Showroom or Korean Nursery)
              </h2>
              <p className="text-sm sm:text-base text-brand-dark/80 font-sans leading-relaxed">
                You can visit our private Downtown Dubai showroom to cuddle and play with our locally available puppies in person. If you are seeking a specific micro-teacup breed or rare coat color, we share real-time high-definition video calls directly with our certified Korean nursery partners.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-brand-rust">
                <span className="bg-brand-sand/60 px-3 py-1 rounded-full">&bull; Private showroom playpens</span>
                <span className="bg-brand-sand/60 px-3 py-1 rounded-full">&bull; Live HD video calls</span>
                <span className="bg-brand-sand/60 px-3 py-1 rounded-full">&bull; Transparent pricing</span>
              </div>
            </div>
          </div>

          <div className="bg-brand-cream rounded-3xl p-8 border-2 border-brand-dark/10 shadow-sm flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-sand flex items-center justify-center text-brand-rust shrink-0 font-display font-extrabold text-2xl border border-brand-dark/10">
              02
            </div>
            <div className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-brand-dark">
                Health Certification & Travel Preparation
              </h2>
              <p className="text-sm sm:text-base text-brand-dark/80 font-sans leading-relaxed">
                Before any puppy leaves for their new home, our licensed veterinary partners conduct a thorough head-to-tail physical exam. The puppy receives core vaccinations, preventative deworming, an ISO standard microchip, and an official international pet passport complying with UAE MOCCAE regulations.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-brand-rust">
                <span className="bg-brand-sand/60 px-3 py-1 rounded-full">&bull; 100% Vet Health Certificate</span>
                <span className="bg-brand-sand/60 px-3 py-1 rounded-full">&bull; ISO Microchip Registered</span>
                <span className="bg-brand-sand/60 px-3 py-1 rounded-full">&bull; 1-Year Genetic Guarantee</span>
              </div>
            </div>
          </div>

          <div className="bg-brand-cream rounded-3xl p-8 border-2 border-brand-dark/10 shadow-sm flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-sand flex items-center justify-center text-brand-rust shrink-0 font-display font-extrabold text-2xl border border-brand-dark/10">
              03
            </div>
            <div className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-brand-dark">
                Welcoming Your Puppy Home
              </h2>
              <p className="text-sm sm:text-base text-brand-dark/80 font-sans leading-relaxed">
                For local showroom adoptions, you can complete the adoption documentation and take your puppy home the same day! For Korean imports, we arrange VIP climate-controlled escort flights into Dubai Airport, clear all customs paperwork, and hand-deliver your puppy right to your door.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-brand-rust">
                <span className="bg-brand-sand/60 px-3 py-1 rounded-full">&bull; Same-day Dubai take home</span>
                <span className="bg-brand-sand/60 px-3 py-1 rounded-full">&bull; Airport customs cleared</span>
                <span className="bg-brand-sand/60 px-3 py-1 rounded-full">&bull; Free puppy starter kit</span>
              </div>
            </div>
          </div>
        </div>

        {/* DELIVERY SECTION ANCHOR (#delivery) */}
        <section id="delivery" className="mt-20 pt-10 scroll-mt-24">
          <div className="bg-brand-cream/95 rounded-3xl p-8 sm:p-12 border-2 border-brand-rust/20 shadow-md max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-bold text-brand-rust uppercase tracking-wider mb-2">
              <Truck className="w-4 h-4" />
              <span>Door-to-Door UAE Concierge</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark">
              VIP Delivery Across All 7 Emirates
            </h2>

            <p className="mt-3 text-base text-brand-dark/80 font-sans leading-relaxed">
              We understand that pet transportation requires the highest standard of care, hygiene, and calmness. We offer direct hand-delivery to Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-brand-dark/85">
              <div className="p-4 rounded-2xl bg-brand-sand/40 border border-brand-dark/10 space-y-2">
                <h3 className="font-bold text-brand-dark flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-rust" />
                  <span>Climate-Controlled Luxury Vehicles</span>
                </h3>
                <p className="text-xs text-brand-dark/70 font-sans">
                  Puppies travel in sanitized, temperature-regulated cabins with fresh water, soft bedding, and an experienced pet handler.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-sand/40 border border-brand-dark/10 space-y-2">
                <h3 className="font-bold text-brand-dark flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-rust" />
                  <span>Complimentary Starter Package</span>
                </h3>
                <p className="text-xs text-brand-dark/70 font-sans">
                  Each delivery includes premium transition food, comforting scented blanket, chew toy, pee pads, and health records binder.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-dark/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-brand-dark/70">
                Have specific delivery questions or scheduling requests?
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-xs sm:text-sm hover:brightness-105 transition"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Discuss delivery on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/puppies"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-rust text-white font-semibold text-sm shadow-md hover:bg-brand-rustDark transition"
          >
            <span>Browse available puppies now</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

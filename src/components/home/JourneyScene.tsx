import Link from 'next/link';
import { MessageCircle, HeartHandshake, Stethoscope, Home, Send, CheckCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { QuiltDivider } from './QuiltDivider';

export function JourneyScene() {
  const steps = [
    {
      num: '01',
      title: 'Choose your puppy',
      desc: 'Browse our available showroom puppies in Downtown Dubai or consult our team to match your ideal teacup breed from Korea.',
      icon: HeartHandshake,
    },
    {
      num: '02',
      title: 'Health check & travel',
      desc: 'Every puppy undergoes a comprehensive veterinary exam, core vaccinations, microchip registration, and flight clearance.',
      icon: Stethoscope,
    },
    {
      num: '03',
      title: 'Hand-delivered to your home',
      desc: 'We personally deliver your puppy right to your doorstep anywhere in the UAE, complete with luxury starter essentials.',
      icon: Home,
    },
  ];

  const quickBreeds = [
    { name: 'Maltipoo', query: 'maltipoo' },
    { name: 'Pomeranian', query: 'pomeranian' },
    { name: 'Toy Poodle', query: 'poodle' },
    { name: 'Cavapoo', query: 'cavapoo' },
    { name: 'Shih Tzu', query: 'shih-tzu' },
  ];

  return (
    <section
      data-section="journey"
      className="relative min-h-[90vh] bg-gradient-to-b from-[#f7d18d] to-[#f0b866] pt-14 pb-16 flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-cream/80 border border-brand-dark/10 text-xs font-bold text-brand-rust uppercase tracking-wider mb-3">
            <span>The TeddyPups Experience</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-brand-dark tracking-tight">
            Your puppy journey
          </h2>

          <p className="mt-4 text-base sm:text-lg text-brand-dark/80 font-sans">
            A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="relative bg-brand-cream/90 rounded-3xl p-7 border border-brand-dark/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display text-4xl font-extrabold text-brand-gold/60">
                      {s.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-brand-sand flex items-center justify-center text-brand-rust">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-brand-dark">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-sm text-brand-dark/75 leading-relaxed font-sans">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp-Style Chat Interactive Preview */}
        <div className="mt-14 max-w-2xl mx-auto bg-brand-cream rounded-3xl border-2 border-brand-dark/10 shadow-lg overflow-hidden">
          {/* Chat Window Header */}
          <div className="bg-[#075E54] text-white px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-brand-sand flex items-center justify-center text-brand-dark font-bold font-display text-base border border-white/20">
                TP
              </div>
              <div>
                <p className="font-semibold text-sm leading-tight">TeddyPups Concierge</p>
                <p className="text-[11px] text-white/80">Online &bull; Instant Response in Dubai</p>
              </div>
            </div>
            <MessageCircle className="w-5 h-5 text-white/80" />
          </div>

          {/* Chat Messages Body */}
          <div className="p-5 space-y-3 bg-[#E5DDD5]/40 text-xs sm:text-sm font-sans">
            {/* Incoming message */}
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl rounded-tl-xs p-3.5 shadow-xs max-w-[85%] text-brand-dark">
                <p className="leading-relaxed">
                  Hello! Welcome to TeddyPups UAE 🐾 Are you looking to meet available puppies in our Downtown showroom, or inquiring about an imported Korean teacup?
                </p>
                <div className="flex items-center justify-end gap-1 text-[10px] text-brand-dark/50 mt-1">
                  <span>10:42 AM</span>
                </div>
              </div>
            </div>

            {/* Outgoing user response mock */}
            <div className="flex justify-end">
              <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-xs p-3.5 shadow-xs max-w-[85%] text-brand-dark">
                <p className="leading-relaxed">
                  Hi! I would love to see small teacup puppies with hypoallergenic coats. What breeds do you have ready?
                </p>
                <div className="flex items-center justify-end gap-1 text-[10px] text-brand-dark/50 mt-1">
                  <span>10:43 AM</span>
                  <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
                </div>
              </div>
            </div>

            {/* Quick Breed Filter Links in Chat */}
            <div className="pt-2">
              <p className="text-[11px] font-bold text-brand-dark/60 uppercase tracking-wider mb-2">
                Tap to explore available breeds:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {quickBreeds.map((b) => (
                  <Link
                    key={b.name}
                    href={`/puppies?breed=${b.query}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-brand-dark/15 text-xs font-semibold text-brand-dark hover:bg-brand-rust hover:text-white transition-colors shadow-2xs"
                  >
                    <span>{b.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Action Footer */}
          <div className="p-3 bg-white border-t border-brand-dark/10 flex items-center gap-2">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                siteConfig.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-xs sm:text-sm hover:brightness-105 transition"
            >
              <Send className="w-4 h-4" />
              <span>Start live chat with our puppy concierge</span>
            </a>
          </div>
        </div>
      </div>

      {/* Quilt transition to Scene 5 */}
      <div className="relative z-30 pt-10">
        <QuiltDivider fillColor="#f0b866" />
      </div>
    </section>
  );
}

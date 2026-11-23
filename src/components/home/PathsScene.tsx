import Link from 'next/link';
import { Store, Plane, CheckCircle2, ArrowRight } from 'lucide-react';
import { PawIcon } from '@/components/ui/PawIcon';
import { QuiltDivider } from './QuiltDivider';

export function PathsScene() {
  return (
    <section
      data-section="paths"
      className="relative min-h-[85vh] bg-gradient-to-b from-[#fbe3b4] to-[#f7d18d] pt-14 pb-16 flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-cream/80 border border-brand-dark/10 text-xs font-bold text-brand-rust uppercase tracking-wider mb-3">
            <PawIcon className="w-3.5 h-3.5" />
            <span>Adoption Options</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-brand-dark tracking-tight">
            Two ways to meet your puppy
          </h2>

          <p className="mt-4 text-base sm:text-lg text-brand-dark/80 font-sans">
            Choose the adoption journey that suits your family best: visit us locally in Downtown Dubai or reserve an exclusive Korean champion teacup.
          </p>
        </div>

        {/* 2 Path Comparison Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Path 1: Dubai Showroom */}
          <div className="bg-brand-cream/90 backdrop-blur-xs rounded-3xl p-8 border-2 border-brand-dark/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-sand flex items-center justify-center text-brand-rust mb-6 border border-brand-dark/10 group-hover:scale-110 transition-transform">
                <Store className="w-7 h-7" />
              </div>

              <span className="text-xs uppercase font-bold tracking-widest text-brand-rust">
                Local Availability
              </span>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-dark mt-1">
                Dubai Showroom
              </h3>

              <p className="mt-3 text-sm sm:text-base text-brand-dark/80 leading-relaxed font-sans">
                See them, love them, take them home. Come meet our locally available puppies in our private Downtown Dubai showroom and spend time bonding before you decide.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-brand-dark/85">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-rust shrink-0" />
                  <span>Private sanitized playpens in Downtown Dubai</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-rust shrink-0" />
                  <span>Same-day adoption & take-home paperwork</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-rust shrink-0" />
                  <span>Live veterinary health check on-site</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-dark/10">
              <Link
                href="/puppies?origin=local"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-brand-rust text-white font-semibold text-sm shadow-xs hover:bg-brand-rustDark transition"
              >
                <span>Meet local puppies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Path 2: Imported from Korea */}
          <div className="bg-brand-cream/90 backdrop-blur-xs rounded-3xl p-8 border-2 border-brand-dark/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-gold/30 flex items-center justify-center text-brand-rust mb-6 border border-brand-dark/10 group-hover:scale-110 transition-transform">
                <Plane className="w-7 h-7" />
              </div>

              <span className="text-xs uppercase font-bold tracking-widest text-brand-amber">
                Exclusive Concierge
              </span>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-dark mt-1">
                Imported from Korea
              </h3>

              <p className="mt-3 text-sm sm:text-base text-brand-dark/80 leading-relaxed font-sans">
                Direct from Korea’s most celebrated ethical nurseries with full flight care, health certificates, international pet passport, and VIP hand delivery across the UAE.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-brand-dark/85">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-amber shrink-0" />
                  <span>Rare doll-face teacup facial proportions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-amber shrink-0" />
                  <span>Temperature-monitored direct flight escort</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-amber shrink-0" />
                  <span>Delivery to your door in 7–14 business days</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-dark/10">
              <Link
                href="/puppies?origin=imported"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-brand-sand border border-brand-dark/15 text-brand-dark font-semibold text-sm shadow-xs hover:bg-brand-gold/40 transition"
              >
                <span>Explore Korean imports</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quilt transition to Scene 4 */}
      <div className="relative z-30 pt-10">
        <QuiltDivider fillColor="#f7d18d" />
      </div>
    </section>
  );
}

import { ShieldCheck, Award, FileCheck, Users } from 'lucide-react';
import { PawIcon } from '@/components/ui/PawIcon';
import { QuiltDivider } from './QuiltDivider';

export function TrustScene() {
  const trustPoints = [
    {
      title: 'Health Guarantee & Vet Certified',
      desc: 'Every puppy comes with an official veterinary health certificate, complete vaccination history, and 1-year genetic health guarantee.',
      icon: ShieldCheck,
      stampColor: '#c2622b',
      tilt: '-rotate-2',
    },
    {
      title: 'Ethical Nursery Standards',
      desc: 'We never source from puppy mills. All puppies are raised under nurturing, stress-free home conditions with continuous maternal care.',
      icon: Award,
      stampColor: '#a24a1a',
      tilt: 'rotate-1',
    },
    {
      title: 'Official Pet Passport & Microchip',
      desc: 'Compliant with UAE Ministry of Climate Change & Environment (MOCCAE) standards, with permanent ISO microchip registration.',
      icon: FileCheck,
      stampColor: '#6b2a1c',
      tilt: '-rotate-1',
    },
    {
      title: 'Trusted by Families Across UAE',
      desc: 'Hundreds of happy families in Palm Jumeirah, Downtown Dubai, and Saadiyat Island trust our concierge service for healthy teacup companions.',
      icon: Users,
      stampColor: '#c2622b',
      tilt: 'rotate-2',
    },
  ];

  return (
    <section
      data-section="trust"
      className="relative min-h-[85vh] bg-gradient-to-b from-[#f0b866] to-[#a65a30] pt-14 pb-16 text-brand-cream flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-cream/20 border border-brand-cream/20 text-xs font-bold text-white uppercase tracking-wider mb-3 backdrop-blur-xs">
            <PawIcon className="w-3.5 h-3.5" />
            <span>Puppy Passport Standards</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Why families trust TeddyPups
          </h2>

          <p className="mt-4 text-base sm:text-lg text-brand-cream/90 font-sans">
            Our unwavering commitment to veterinary ethics, transparent bloodlines, and lifelong client support sets us apart in the UAE.
          </p>
        </div>

        {/* 4 Trust Stamps Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`bg-brand-cream text-brand-dark rounded-3xl p-6 border-2 border-dashed border-brand-dark/20 shadow-md transition-all duration-300 hover:scale-105 hover:rotate-0 ${item.tilt} flex flex-col justify-between`}
              >
                <div>
                  {/* Passport Stamp Edge */}
                  <div className="w-14 h-14 rounded-full border-2 border-brand-rust flex items-center justify-center text-brand-rust mb-5 bg-brand-sand/30">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-brand-dark leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-brand-dark/80 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-brand-dark/10 flex items-center justify-between text-[11px] font-semibold text-brand-rust">
                  <span>VERIFIED VET APPROVED</span>
                  <PawIcon className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quilt transition to Scene 6 */}
      <div className="relative z-30 pt-10">
        <QuiltDivider fillColor="#a65a30" />
      </div>
    </section>
  );
}

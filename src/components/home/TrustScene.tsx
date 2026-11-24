import { Mascot } from '@/components/ui/Mascot';

const passportPoints = [
  {
    title: 'Vet-checked & healthy',
    desc: 'Every puppy comes vaccinated, dewormed, and with a verified health certificate.',
    icon: '❤️',
    stampColor: '#8b3a20',
  },
  {
    title: 'Korea to Dubai, safely',
    desc: 'Trusted breeders, safe travel, and premium care from start to finish.',
    icon: '✈️',
    stampColor: '#2b583e',
  },
  {
    title: 'Support 24/7',
    desc: 'Always here to help, from choosing your puppy to post-delivery support.',
    icon: '💬',
    stampColor: '#4d2b19',
  },
  {
    title: 'Trusted by families worldwide',
    desc: 'Puppies delivered to loving homes all around the world.',
    icon: '🌐',
    stampColor: '#a24a1a',
  },
];

export function TrustScene() {
  return (
    <section
      data-section="trust"
      className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-[#f0b866] to-[#a65a30] text-[#2a170e]"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Open Leather Passport Booklet Design Matching Recording */}
        <div className="relative bg-[#fcf6e8] border-8 border-[#522b15] rounded-[36px] shadow-2xl p-6 sm:p-12 overflow-hidden">
          {/* Passport stitch spine down center */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 border-r-2 border-dashed border-[#2a170e]/20 -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {/* Left Page: Header & Mascot */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="font-hand text-lg sm:text-xl text-[#a24a1a] tracking-wider">
                  puppy passport
                </span>
                <h2 className="font-display font-black text-4xl sm:text-5xl text-[#2a170e] leading-tight mt-1 mb-4">
                  Why families trust TeddyPups
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#2a170e]/80 leading-relaxed">
                  We guarantee the lineage, health, and welfare of every single puppy. Our international passport certification ensures your peace of mind.
                </p>
              </div>

              {/* Point 1: Vet Checked */}
              <div className="mt-8 p-6 rounded-2xl border-2 border-dashed border-[#8b3a20]/40 bg-white/70 shadow-sm transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{passportPoints[0].icon}</span>
                  <h3 className="font-display font-bold text-lg text-[#2a170e]">
                    {passportPoints[0].title}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#2a170e]/75 leading-relaxed">
                  {passportPoints[0].desc}
                </p>
              </div>

              {/* Point 3: Support 24/7 */}
              <div className="mt-6 p-6 rounded-2xl border-2 border-dashed border-[#4d2b19]/40 bg-white/70 shadow-sm transform rotate-1 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{passportPoints[2].icon}</span>
                  <h3 className="font-display font-bold text-lg text-[#2a170e]">
                    {passportPoints[2].title}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#2a170e]/75 leading-relaxed">
                  {passportPoints[2].desc}
                </p>
              </div>
            </div>

            {/* Right Page: Safe Flights & Worldwide Stamp */}
            <div className="flex flex-col justify-between">
              {/* Point 2: Korea to Dubai flight */}
              <div className="p-6 rounded-2xl border-2 border-dashed border-[#2b583e]/40 bg-white/70 shadow-sm transform rotate-2 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{passportPoints[1].icon}</span>
                  <h3 className="font-display font-bold text-lg text-[#2a170e]">
                    {passportPoints[1].title}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#2a170e]/75 leading-relaxed">
                  {passportPoints[1].desc}
                </p>
              </div>

              {/* Point 4: Circular World Stamp */}
              <div className="mt-6 p-6 rounded-full border-4 border-dashed border-[#a24a1a]/50 bg-white/80 shadow-sm text-center flex flex-col items-center justify-center aspect-square max-w-[280px] mx-auto transform -rotate-2 hover:rotate-0 transition-transform">
                <span className="text-3xl mb-1">{passportPoints[3].icon}</span>
                <h3 className="font-display font-bold text-base text-[#2a170e] mb-1">
                  {passportPoints[3].title}
                </h3>
                <p className="font-sans text-[11px] text-[#2a170e]/70 max-w-[180px] leading-tight">
                  {passportPoints[3].desc}
                </p>
              </div>

              {/* Mascot: Beside the passport book */}
              <div className="mt-4 flex justify-end">
                <Mascot state="blinking" size={100} facing="left" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

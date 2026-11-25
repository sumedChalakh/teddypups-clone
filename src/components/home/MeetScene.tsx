import Link from 'next/link';
import Image from 'next/image';
import { puppies } from '@/data/puppies';
import { Mascot } from '@/components/ui/Mascot';

const doorColors = [
  '#a24a1a',
  '#3e2723',
  '#c27b38',
  '#8c4a2a',
  '#7a4a2e',
  '#a24a1a',
  '#5d3a24',
  '#7a3e20',
  '#6b2a1c',
  '#4a2511',
  '#9c5a33',
  '#542a18',
  '#b26639',
  '#3a1d0f',
  '#7c4021',
];

export function MeetScene() {
  return (
    <section className="relative py-14 sm:py-20 overflow-hidden bg-gradient-to-b from-[#fff1d8] to-[#fbe3b4]">
      {/* Header with clear z-index isolation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-20">
        <div>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#2a170e] leading-tight tracking-tight">
            Meet the pups
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#2a170e]/80 mt-2 max-w-xl">
            Real puppies, real photos, looking for their families right now.
          </p>
        </div>

        <Link
          href="/puppies"
          className="self-start md:self-auto inline-flex items-center px-6 py-2.5 rounded-full bg-[#a24a1a] hover:bg-[#853c15] text-[#fffdf8] font-semibold text-sm shadow transition-all duration-200"
        >
          See all available puppies
        </Link>
      </div>

      {/* Horizontal Scroll Track containing all 15 Puppies + "Meet them all" Arch */}
      <div className="relative w-full z-10">
        <div className="overflow-x-auto no-scrollbar pb-6 px-4 sm:px-8">
          <div className="flex items-end gap-4 sm:gap-6 min-w-max">
            {puppies.map((pup, idx) => {
              const doorColor = doorColors[idx % doorColors.length];
              const doorImage = `/puppies/doors/door-${idx + 1}.jpg`;

              return (
                <div
                  key={pup.id}
                  className="group flex flex-col items-center w-44 sm:w-52 lg:w-56 flex-shrink-0 cursor-pointer"
                >
                  {/* Top Door Plate: Puppy breed, gender and age */}
                  <div className="text-center mb-3 h-14 flex flex-col justify-end w-full px-2">
                    <span className="font-display font-bold text-sm sm:text-base text-[#2a170e] truncate leading-tight">
                      {pup.name}
                    </span>
                    <span className="font-sans text-[11px] text-[#2a170e]/75 mt-0.5 truncate">
                      {pup.breedName !== pup.name ? `${pup.breedName}, ` : ''}
                      {pup.genderLabel.toLowerCase()}, {pup.age}
                      {pup.withVideo && ', with video'}
                    </span>
                  </div>

                  {/* Arched Door Frame with unique photo inside */}
                  <div className="relative w-full">
                    <Link
                      href={`/puppies/${pup.slug}`}
                      className="relative w-full aspect-[3/4.2] rounded-t-full border-4 border-[#2a170e] bg-[#fbe3b4]/60 overflow-hidden shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl block"
                    >
                      {/* Real distinct puppy photo */}
                      <Image
                        src={doorImage}
                        alt={`${pup.name} - ${pup.breedName}`}
                        fill
                        sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 224px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Half-open wooden door panel with paw peephole and gold knob */}
                      <div
                        className="absolute top-0 bottom-0 left-0 w-8 sm:w-9 border-r-2 border-[#2a170e]/40 shadow-md flex flex-col items-center justify-between py-4"
                        style={{ backgroundColor: doorColor }}
                        aria-hidden="true"
                      >
                        <span className="text-xs text-white/70">🐾</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#f2be6b] border border-[#2a170e] shadow" />
                      </div>
                    </Link>

                    {/* "Available" tag placed outside clipping boundary so it is 100% fully visible */}
                    <div className="absolute top-2 right-2 z-20 pointer-events-none">
                      <span className="inline-block bg-[#fffdf8] border border-[#2a170e]/40 text-[#2a170e] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md whitespace-nowrap">
                        {pup.status === 'available' ? 'Available' : 'Reserved'}
                      </span>
                    </div>
                  </div>

                  {/* Puppy details below door */}
                  <div className="mt-3 text-center">
                    <span className="font-display font-bold text-sm text-[#2a170e] block">
                      {pup.name}
                    </span>
                    <Link
                      href={`/puppies/${pup.slug}`}
                      className="font-sans text-xs font-semibold text-[#a24a1a] group-hover:underline inline-flex items-center gap-1 mt-0.5"
                    >
                      <span>View details</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Ending "Meet them all" Arch */}
            <div className="flex flex-col items-center w-44 sm:w-52 lg:w-56 flex-shrink-0">
              <div className="text-center mb-3 h-14 flex flex-col justify-end w-full">
                <span className="font-display font-bold text-xs text-[#2a170e]/60 uppercase tracking-wider">
                  Full Collection
                </span>
              </div>

              <Link
                href="/puppies"
                className="relative w-full aspect-[3/4.2] rounded-t-full border-4 border-dashed border-[#2a170e]/50 bg-white/40 hover:bg-white/80 transition-colors shadow-lg flex flex-col items-center justify-center p-4 text-center group cursor-pointer"
              >
                <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">🐾</span>
                <span className="font-display font-black text-lg sm:text-xl text-[#2a170e] border-b-2 border-[#a24a1a] pb-0.5 whitespace-nowrap">
                  Meet them all
                </span>
                <span className="font-sans text-xs text-[#2a170e]/75 mt-2">
                  Browse all 15 pups
                </span>
              </Link>

              <div className="mt-3 text-center">
                <Link
                  href="/puppies"
                  className="font-sans text-xs font-bold text-[#a24a1a] hover:underline"
                >
                  Explore showroom →
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Floor runner with running mascot under "Meet the pups" */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Mascot state="running" size={120} facing="right" />
            <span className="font-hand text-[#2a170e] text-sm sm:text-base hidden sm:inline">
              Follow along to meet your match!
            </span>
          </div>

          <Link
            href="/puppies"
            className="font-sans text-xs sm:text-sm font-semibold text-[#a24a1a] hover:underline flex items-center gap-1.5"
          >
            <span>Browse all puppies by breed</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

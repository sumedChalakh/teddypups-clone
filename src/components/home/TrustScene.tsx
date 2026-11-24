import { Mascot } from '@/components/ui/Mascot';

interface PassportStamp {
  title: string;
  desc: string;
  ink: string;
  tilt: string;
  icon: (color: string) => JSX.Element;
}

const trustPoints: PassportStamp[] = [
  {
    title: 'Vet-checked & healthy',
    desc: 'Every puppy comes vaccinated, dewormed, and with a verified health certificate.',
    ink: '#a24a1a',
    tilt: '-6deg',
    icon: (c) => (
      <svg viewBox="0 0 64 64" className="w-9 h-9" fill="none" stroke={c} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M32 54C16 43 8 34 8 24c0-7 5.4-12 12-12 5 0 9 3 12 7 3-4 7-7 12-7 6.6 0 12 5 12 12 0 10-8 19-24 30z" />
        <path d="M22 30h7l3-7 4 13 3-6h7" />
      </svg>
    ),
  },
  {
    title: 'Korea to Dubai, safely',
    desc: 'Trusted breeders, safe travel, and premium care from start to finish.',
    ink: '#1f6b45',
    tilt: '5deg',
    icon: (c) => (
      <svg viewBox="0 0 64 64" className="w-9 h-9" fill="none" stroke={c} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 36l22-3 12-17h6l-6 17 12-1 6-7h3l-2 10 2 10h-3l-6-7-12-1 6 17h-6L28 37 6 36z" />
        <path d="M8 50c10 4 20 4 30 0" strokeDasharray="3 5" />
      </svg>
    ),
  },
  {
    title: 'Support 24/7',
    desc: 'Always here to help, from choosing your puppy to post-delivery support.',
    ink: '#5a3a28',
    tilt: '-4deg',
    icon: (c) => (
      <svg viewBox="0 0 64 64" className="w-9 h-9" fill="none" stroke={c} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 14h44v28H30l-12 10v-10h-8z" />
        <circle cx="22" cy="28" r="2.5" fill={c} />
        <circle cx="32" cy="28" r="2.5" fill={c} />
        <circle cx="42" cy="28" r="2.5" fill={c} />
      </svg>
    ),
  },
  {
    title: 'Trusted by families worldwide',
    desc: 'Puppies delivered to loving homes all around the world.',
    ink: '#c2622b',
    tilt: '6deg',
    icon: (c) => (
      <svg viewBox="0 0 64 64" className="w-9 h-9" fill="none" stroke={c} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="32" cy="32" r="22" strokeDasharray="4 2" />
        <path d="M10 32h44M32 10c-8 8-8 36 0 44M32 10c8 8 8 36 0 44" />
      </svg>
    ),
  },
];

export function TrustScene() {
  return (
    <section
      data-section="trust"
      className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-[#f0b866] to-[#a65a30] text-[#2a170e]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Open Passport Booklet Container */}
        <div
          className="relative mx-auto max-w-5xl rounded-[32px] p-2 sm:p-3 shadow-2xl transition-transform"
          style={{
            backgroundColor: '#4a2614',
            filter: 'drop-shadow(10px 16px 24px rgba(42, 23, 14, 0.35))',
          }}
        >
          {/* Inner Two-Page Booklet */}
          <div className="relative bg-[#fff8ea] rounded-[24px] border-2 border-[#2a170e] overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[520px]">
            {/* Center Stitched Spine Crease down the middle */}
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 z-20 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to right, rgba(0,0,0,0.15), transparent 40%, transparent 60%, rgba(0,0,0,0.15))',
                borderRight: '1px dashed rgba(42, 23, 14, 0.35)',
              }}
              aria-hidden="true"
            />

            {/* LEFT PAGE: Kicker, Heading, Mascot */}
            <div className="md:col-span-5 p-6 sm:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#2a170e]/15 relative">
              {/* Subtle background security pattern */}
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 18px 18px, rgba(194,98,43,0.08) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <span className="font-hand font-bold text-xl sm:text-2xl text-[#a24a1a] block mb-2">
                  puppy passport
                </span>
                <h2 className="font-display font-black text-3xl sm:text-5xl text-[#2a170e] leading-tight tracking-tight mb-4">
                  Why families trust TeddyPups
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#2a170e]/80 leading-relaxed">
                  We guarantee the lineage, health, and welfare of every single puppy. Our international passport certification ensures complete peace of mind.
                </p>
              </div>

              {/* Mascot puppy sitting on the left passport page */}
              <div className="relative z-10 mt-8 sm:mt-12 flex justify-start pl-2">
                <Mascot state="sitting" size={130} facing="right" />
              </div>
            </div>

            {/* RIGHT PAGE: 4 Circular Rubber Stamps */}
            <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-center relative">
              {/* Subtle background security pattern */}
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 18px 18px, rgba(194,98,43,0.08) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 relative z-10">
                {trustPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center sm:items-start text-center sm:text-left group"
                  >
                    {/* Circular Rubber Stamp Icon */}
                    <div
                      className="relative w-28 h-28 rounded-full border-[3px] border-dashed p-2 flex flex-col items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:rotate-0 mb-3"
                      style={{
                        borderColor: point.ink,
                        color: point.ink,
                        transform: `rotate(${point.tilt})`,
                        backgroundColor: 'rgba(255, 253, 248, 0.75)',
                      }}
                    >
                      {/* Inner solid border ring */}
                      <div
                        className="absolute inset-1 rounded-full border border-current opacity-60 pointer-events-none"
                        aria-hidden="true"
                      />
                      {point.icon(point.ink)}
                      <span className="font-display font-extrabold text-[10px] uppercase tracking-wider mt-1 text-center line-clamp-1">
                        Verified
                      </span>
                    </div>

                    {/* Stamp Title & Description */}
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#2a170e] mb-1">
                      {point.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#2a170e]/75 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* City Skyline Horizon Silhouette at Bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 overflow-hidden pointer-events-none text-[#a65a30]"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="w-full h-full fill-current opacity-70"
        >
          <path d="M0 160V118h34v-14h22v-22h30v34h18V96h26v30h22v-18h16v-30h34v40h20V70h28v56h24V98h18v-26h30v54h20v-38h26v-40l14-6 14 6v40h22v46h18V84h26v-30h22v50h24V76h36v50h20V96h18v-58h30v44h14V96h22v-30h16v22h26v-52l6-8v-24l4-6v-30l3-18 3 18v30l4 6v24l6 8v52h26v30h22V82h30v-20h24v48h20V90h28v-36h26v56h18V74h30v36h22V94h26v-24h30v62h20V102h26v20h34v38z" />
        </svg>
      </div>
    </section>
  );
}

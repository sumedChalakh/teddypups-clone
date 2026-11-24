import Link from 'next/link';

const polaroids = [
  { img: '/families/family-1.jpg', name: 'Lulu & Mum', breed: 'Teacup Maltipoo', rot: '-rotate-2', tapeColor: '#f6d79a' },
  { img: '/families/family-2.jpg', name: 'Bella & Family', breed: 'Korean Teacup Pom', rot: 'rotate-1', tapeColor: '#fbe3b4' },
  { img: '/families/family-3.jpg', name: 'Maya & Milo', breed: 'Cream Teacup Pom', rot: '-rotate-1', tapeColor: '#f6d79a' },
  { img: '/families/family-4.jpg', name: 'Chloe & Leo', breed: 'Toy Poodle Pair', rot: 'rotate-2', tapeColor: '#fbe3b4' },
];

export function FamiliesScene() {
  return (
    <section className="relative py-20 sm:py-28 text-[#fffdf8] overflow-hidden bg-gradient-to-b from-[#a65a30] to-[#4d2b19]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-hand text-lg text-[#fbe3b4]">heartwarming moments</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#fffdf8] leading-tight mt-1">
              Happy families & puppies
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#fbe3b4]/90 max-w-xl mt-3 leading-relaxed">
              We are truly honored to see our puppies become cherished members of loving families. These moments are shared by our valued clients across Dubai and worldwide.
            </p>
          </div>

          <Link
            href="/happy-families"
            className="self-start md:self-auto inline-flex items-center px-6 py-3 rounded-full bg-[#fffdf8] text-[#2a170e] hover:bg-[#fbe3b4] font-semibold text-sm shadow-md transition-all hover:scale-105"
          >
            See every happy family
          </Link>
        </div>

        {/* Testimonial Quote Banner matching reference note */}
        <div className="max-w-3xl mx-auto mb-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 text-center shadow-lg relative">
          <p className="font-display italic text-base sm:text-lg text-[#fffdf8] leading-relaxed">
            “TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.”
          </p>
          <span className="block font-hand text-base sm:text-lg text-[#f2be6b] font-semibold mt-3">
            — Sarah M., Dubai, UAE
          </span>
        </div>

        {/* Wood Shelf Wall with Taped Polaroid Photos */}
        <div className="relative bg-[#2e190e] border-t-8 border-b-8 border-[#1f1008] rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Wood grain plank texture line */}
          <div className="absolute inset-x-0 top-1/2 h-0.5 bg-[#1f1008]/40" aria-hidden="true" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {polaroids.map((item, idx) => (
              <div
                key={idx}
                className={`relative bg-white p-3 pt-4 pb-8 rounded-sm shadow-2xl transform ${item.rot} hover:rotate-0 hover:scale-105 transition-all duration-300 group`}
              >
                {/* Authentic beige masking tape on top center */}
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 h-6 border-t border-b border-black/10 rotate-1 shadow-sm z-20 opacity-90"
                  style={{ backgroundColor: item.tapeColor }}
                  aria-hidden="true"
                />

                {/* Photo container using standard img for absolute reliability */}
                <div className="relative aspect-square w-full bg-[#f0e6d2] overflow-hidden mb-3 border border-black/5">
                  <img
                    src={item.img}
                    alt={`TeddyPups happy family - ${item.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="text-center px-1">
                  <span className="font-hand text-sm sm:text-base font-bold text-[#2a170e] block leading-tight">
                    {item.name}
                  </span>
                  <span className="font-sans text-[11px] text-[#2a170e]/70 mt-0.5 block">
                    {item.breed}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom shelf highlight with paw print note */}
          <div className="mt-8 flex items-center justify-center gap-3 relative z-10">
            <span className="text-lg">🐾</span>
            <span className="font-hand text-[#fbe3b4] text-sm sm:text-base">
              Over 350+ happy families welcomed home their teacup puppies!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

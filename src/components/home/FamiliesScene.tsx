import Link from 'next/link';
import Image from 'next/image';

const polaroids = [
  { img: '/families/real/family-1.jpg', name: 'Sarah & Luna', breed: 'Cream Pomeranian', rot: '-rotate-2' },
  { img: '/families/real/family-2.jpg', name: 'Alina & Coco', breed: 'Teacup Maltipoo', rot: 'rotate-1' },
  { img: '/families/real/family-3.jpg', name: 'Layla & Milo', breed: 'Pomeranian Pup', rot: '-rotate-1' },
  { img: '/families/real/family-4.jpg', name: 'Maya & Twins', breed: 'Maltipoo & Cavapoo', rot: 'rotate-2' },
];

export function FamiliesScene() {
  return (
    <section className="relative py-16 sm:py-24 text-teddy-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-hand text-lg text-teddy-sand">forever homes</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-teddy-cream leading-tight mt-1">
              Happy families & puppies
            </h2>
            <p className="font-sans text-base sm:text-lg text-teddy-cream/80 max-w-xl mt-2 leading-relaxed">
              We are truly honored to see our puppies become cherished members of loving families in Dubai and worldwide.
            </p>
          </div>

          <Link
            href="/happy-families"
            className="self-start md:self-auto inline-flex items-center px-6 py-3 rounded-full bg-teddy-cream text-teddy-brown hover:bg-teddy-sand font-medium shadow transition-colors"
          >
            See every happy family
          </Link>
        </div>

        {/* Testimonial speech bubble banner */}
        <div className="max-w-3xl mx-auto mb-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-center shadow-lg relative">
          <p className="font-display italic text-base sm:text-lg text-teddy-cream/95 leading-relaxed">
            “Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 concierge support throughout the entire process gave us complete peace of mind.”
          </p>
          <span className="block font-sans text-xs sm:text-sm text-teddy-gold font-semibold mt-3">
            — Sarah M., Downtown Dubai, UAE
          </span>
        </div>

        {/* Wood Shelf Wall with Taped Polaroid Photos from Recording */}
        <div className="relative bg-[#3e2417] border-4 border-[#24130b] rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {polaroids.map((item, idx) => (
              <div
                key={idx}
                className={`relative bg-white p-3 pt-4 pb-8 rounded-sm shadow-xl transform ${item.rot} hover:rotate-0 hover:scale-105 transition-all duration-300 group`}
              >
                {/* Masking tape on top corner matching recording */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#f3e5ab]/80 border-t border-b border-black/10 rotate-1 shadow-sm z-10"
                  aria-hidden="true"
                />

                <div className="relative aspect-[4/5] w-full bg-teddy-sand/30 overflow-hidden mb-3">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 160px, 260px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="text-center">
                  <span className="font-hand text-sm font-bold text-teddy-brown block leading-tight">
                    {item.name}
                  </span>
                  <span className="font-sans text-[11px] text-teddy-brown/60">
                    {item.breed}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Cute mascot on the wooden shelf */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="relative w-16 h-14">
              <Image
                src="/brand/real/mascot-standing.png"
                alt="TeddyPups Mascot"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-hand text-teddy-sand text-sm">
              Over 350+ happy families welcomed home their teacup puppies!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

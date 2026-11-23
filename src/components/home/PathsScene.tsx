import Link from 'next/link';
import Image from 'next/image';

export function PathsScene() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Central Signpost Concept Matching Video Recording */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Vertical wooden post down center for large screens */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-4 bg-[#7a3e20] -translate-x-1/2 rounded shadow-inner z-0"
            aria-hidden="true"
          />

          {/* Left Branch: Puppies in Dubai */}
          <div className="relative z-10 bg-teddy-cream/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border-2 border-teddy-brown/20 shadow-xl flex flex-col justify-between">
            {/* Wooden directional arrow */}
            <div className="inline-block bg-[#a24a1a] text-teddy-cream px-6 py-2.5 rounded-l-full font-display font-bold text-lg sm:text-xl shadow mb-6 self-start">
              Puppies in Dubai ➔
            </div>

            <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border-2 border-teddy-brown/20 bg-teddy-sand/30 mb-6">
              <Image
                src="/brand/real/showroom-window.png"
                alt="Dubai Showroom Puppy"
                fill
                className="object-contain"
              />
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl text-teddy-brown mb-2">
                In our Dubai showroom
              </h3>
              <p className="font-sans text-sm sm:text-base text-teddy-brown/80 leading-relaxed mb-6">
                See them, love them, take them home. Come meet our locally available puppies in our Downtown Dubai showroom before you decide.
              </p>
              <Link
                href="/puppies?origin=local"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teddy-rust hover:bg-teddy-rust-deep text-teddy-cream font-medium shadow transition-colors"
              >
                Meet local puppies
              </Link>
            </div>
          </div>

          {/* Right Branch: Imported for you */}
          <div className="relative z-10 bg-teddy-cream/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border-2 border-teddy-brown/20 shadow-xl flex flex-col justify-between">
            {/* Wooden directional arrow */}
            <div className="inline-block bg-[#8b5a3c] text-teddy-cream px-6 py-2.5 rounded-r-full font-display font-bold text-lg sm:text-xl shadow mb-6 self-end">
              ⮜ Imported for you
            </div>

            {/* Flight Arc and Flying Plane */}
            <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border-2 border-teddy-brown/20 bg-teddy-sand/30 mb-6 flex flex-col justify-center items-center">
              <Image
                src="/brand/real/airplane-pup.png"
                alt="Korea to Dubai safe flight"
                fill
                className="object-contain animate-float"
              />
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl text-teddy-brown mb-2">
                Imported from Korea
              </h3>
              <p className="font-sans text-sm sm:text-base text-teddy-brown/80 leading-relaxed mb-6">
                Exclusive Korean teacup puppies, delivered. Order from the world’s most reputable breeders and let us handle the import safely.
              </p>
              <Link
                href="/puppies?origin=imported"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teddy-rust hover:bg-teddy-rust-deep text-teddy-cream font-medium shadow transition-colors"
              >
                See imported puppies
              </Link>
            </div>
          </div>
        </div>

        {/* Mascot standing at base of signpost */}
        <div className="relative mt-8 flex flex-col items-center">
          <div className="relative w-24 h-20">
            <Image
              src="/brand/real/mascot-standing.png"
              alt="TeddyPups Mascot"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-hand text-teddy-brown text-sm mt-1">
            Choose your way — showroom visit or global concierge!
          </span>
        </div>
      </div>
    </section>
  );
}

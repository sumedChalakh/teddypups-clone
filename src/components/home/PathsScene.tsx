'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mascot } from '@/components/ui/Mascot';

export function PathsScene() {
  return (
    <section
      data-section="paths"
      className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-[#fbe3b4] to-[#f7d18d] text-[#2a170e]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Title */}
        <h2 className="font-display font-black text-3xl sm:text-5xl text-[#2a170e] text-center tracking-tight mb-12 sm:mb-16">
          Two ways to meet your puppy
        </h2>

        {/* Central Signpost + 2 Ways Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          {/* Vertical Wooden Post down center for large screens */}
          <div
            className="hidden lg:block absolute left-1/2 top-4 bottom-8 w-5 -translate-x-1/2 rounded-sm border-2 border-[#2a170e] shadow-md z-0"
            style={{
              background:
                'repeating-linear-gradient(90deg, transparent 0 5px, rgba(42,23,14,0.12) 5px 6px), linear-gradient(90deg, #d38f45, #b86f2b)',
            }}
            aria-hidden="true"
          />

          {/* LEFT BRANCH: Puppies in Dubai */}
          <article className="relative z-10 flex flex-col items-center lg:items-end text-center lg:text-right">
            {/* Wooden Sign Plank pointing Left */}
            <div className="relative inline-flex items-center mb-6 lg:mr-[-2.5rem] z-20">
              <div
                className="relative px-6 py-2.5 rounded-l-md font-display font-bold text-lg sm:text-xl text-[#2a170e] shadow-md border-2 border-r-0 border-[#2a170e] transform -rotate-1"
                style={{
                  background:
                    'repeating-linear-gradient(0deg, transparent 0 9px, rgba(42,23,14,0.1) 9px 10px), linear-gradient(#e4a85b, #d38f45)',
                }}
              >
                {/* Arrow Point on the left */}
                <span
                  className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[18px] border-y-transparent border-r-[15px] border-r-[#d38f45]"
                  aria-hidden="true"
                />
                <span
                  className="absolute left-[-18px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[20px] border-y-transparent border-r-[17px] border-r-[#2a170e] -z-10"
                  aria-hidden="true"
                />
                Puppies in Dubai
              </div>
            </div>

            {/* Shop Illustration & Skyline Container */}
            <div className="relative w-full max-w-md h-56 sm:h-64 rounded-3xl overflow-hidden border-2 border-[#2a170e]/25 bg-[#fffdf8]/60 backdrop-blur-xs shadow-inner flex flex-col justify-end p-4 mb-6">
              {/* Dubai Skyline SVG Silhouette */}
              <svg
                viewBox="0 0 300 120"
                className="absolute inset-x-0 bottom-0 w-full h-32 text-[#2a170e]/25 pointer-events-none"
                aria-hidden="true"
              >
                <path
                  d="M4 116h292M20 116V78h16v38M44 116V60h18v56M70 116V84h12v32M150 116V36l4-6v-14l3-4 3 4v14l4 6v80M118 116V70l12-8v54M174 116V64l14 8v44M200 116V82h18v34M226 116V56h14v60M248 116V88h22v28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Shop Window with Striped Awning & Puppy Photo */}
              <figure className="relative z-10 mx-auto w-36 sm:w-44 flex flex-col items-center">
                {/* Awning */}
                <div
                  className="w-full h-6 border-2 border-[#2a170e] rounded-t-md shadow-sm"
                  style={{
                    background:
                      'repeating-linear-gradient(90deg, #c2622b 0 14px, #fffdf8 14px 28px)',
                  }}
                />
                {/* Window glass with puppy inside */}
                <div className="relative w-[90%] h-28 sm:h-32 border-2 border-t-0 border-[#2a170e] rounded-b-lg overflow-hidden bg-[#fbe3b4] shadow-inner">
                  <Image
                    src="/brand/real/showroom-window.png"
                    alt="Puppy in Dubai showroom window"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <figcaption className="font-hand text-sm text-[#2a170e] mt-1.5 font-bold">
                  In our showroom
                </figcaption>
              </figure>
            </div>

            {/* Description & Action */}
            <p className="font-sans text-sm sm:text-base text-[#2a170e]/85 leading-relaxed max-w-sm mb-6">
              See them, love them, take them home. Come meet our locally available puppies before you decide.
            </p>
            <Link
              href="/puppies?origin=local"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#a24a1a] hover:bg-[#853c15] text-[#fffdf8] font-bold text-sm sm:text-base shadow-md transition-all hover:scale-105"
            >
              Meet local puppies
            </Link>
          </article>

          {/* RIGHT BRANCH: Imported for you */}
          <article className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Wooden Sign Plank pointing Right */}
            <div className="relative inline-flex items-center mb-6 lg:ml-[-2.5rem] z-20">
              <div
                className="relative px-6 py-2.5 rounded-r-md font-display font-bold text-lg sm:text-xl text-[#2a170e] shadow-md border-2 border-l-0 border-[#2a170e] transform rotate-1"
                style={{
                  background:
                    'repeating-linear-gradient(0deg, transparent 0 9px, rgba(42,23,14,0.1) 9px 10px), linear-gradient(#e4a85b, #d38f45)',
                }}
              >
                Imported for you
                {/* Arrow Point on the right */}
                <span
                  className="absolute right-[-15px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[18px] border-y-transparent border-l-[15px] border-l-[#d38f45]"
                  aria-hidden="true"
                />
                <span
                  className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[20px] border-y-transparent border-l-[17px] border-l-[#2a170e] -z-10"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Flight Route & Animating Plane Container */}
            <div className="relative w-full max-w-md h-56 sm:h-64 rounded-3xl overflow-hidden border-2 border-[#2a170e]/25 bg-[#fffdf8]/60 backdrop-blur-xs shadow-inner flex flex-col justify-center items-center p-2 mb-6">
              <svg
                viewBox="0 0 660 300"
                className="w-full h-full overflow-visible"
                role="img"
                aria-label="A plane bringing a puppy safely from Korea to Dubai"
              >
                <defs>
                  <clipPath id="flight-porthole-clip">
                    <circle cx="0" cy="0" r="22" />
                  </clipPath>
                </defs>

                {/* Dotted Flight Path Curve */}
                <path
                  id="korea-dubai-arc"
                  d="M50 240 C 180 50, 480 30, 610 180"
                  fill="none"
                  stroke="#a65a30"
                  strokeWidth="3.5"
                  strokeDasharray="4 11"
                  strokeLinecap="round"
                />

                {/* Korea Pin & Label */}
                <circle cx="50" cy="240" r="7" fill="#a65a30" />
                <text
                  x="50"
                  y="275"
                  textAnchor="middle"
                  className="font-hand font-bold text-lg fill-[#2a170e]"
                >
                  Korea
                </text>

                {/* Dubai Pin & Label */}
                <circle cx="610" cy="180" r="7" fill="#a65a30" />
                <text
                  x="610"
                  y="215"
                  textAnchor="middle"
                  className="font-hand font-bold text-lg fill-[#2a170e]"
                >
                  Dubai
                </text>

                {/* Animated Airplane traveling smoothly along path */}
                <g className="animate-flight-arc">
                  {/* Plane Graphics */}
                  <g transform="translate(-80 -50) scale(0.65)">
                    {/* Far Wing */}
                    <path
                      d="M108 112 L142 156 L172 156 L158 112 Z"
                      fill="#8b4a22"
                      stroke="#2a170e"
                      strokeWidth="4"
                      strokeLinejoin="round"
                    />
                    {/* Fuselage / Body */}
                    <path
                      d="M20 80 C20 52 52 44 80 44 L168 44 C200 44 224 60 232 80 C224 100 200 112 168 112 L80 112 C52 112 20 104 20 80 Z"
                      fill="#fffdf8"
                      stroke="#2a170e"
                      strokeWidth="4"
                      strokeLinejoin="round"
                    />
                    {/* Near Wing */}
                    <path
                      d="M28 60 L8 26 L34 26 L60 54 Z"
                      fill="#e4a352"
                      stroke="#2a170e"
                      strokeWidth="4"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M104 44 L138 2 L168 2 L154 44 Z"
                      fill="#e4a352"
                      stroke="#2a170e"
                      strokeWidth="4"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M206 64 C215 67 221 73 224 80"
                      fill="none"
                      stroke="#2a170e"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Window Porthole with puppy peek */}
                    <g transform="translate(130, 78)">
                      <image
                        href="/brand/real/airplane-pup.png"
                        x="-22"
                        y="-22"
                        width="44"
                        height="44"
                        clipPath="url(#flight-porthole-clip)"
                        preserveAspectRatio="xMidYMid slice"
                      />
                      <circle
                        r="22"
                        fill="none"
                        stroke="#2a170e"
                        strokeWidth="3.5"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>

            {/* Description & Action */}
            <p className="font-sans text-sm sm:text-base text-[#2a170e]/85 leading-relaxed max-w-sm mb-6">
              Exclusive Korean teacup puppies, delivered. Order from the world&apos;s most reputable breeders and let us handle the import.
            </p>
            <Link
              href="/puppies?origin=imported"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#a24a1a] hover:bg-[#853c15] text-[#fffdf8] font-bold text-sm sm:text-base shadow-md transition-all hover:scale-105"
            >
              See imported puppies
            </Link>
          </article>
        </div>

        {/* Mascot sitting at the base of the central signpost */}
        <div className="relative mt-8 sm:mt-12 flex flex-col items-center">
          <Mascot state="sitting" size={110} facing="right" />
        </div>
      </div>
    </section>
  );
}

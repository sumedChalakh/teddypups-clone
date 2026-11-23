'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const doors = [
  {
    name: 'Max',
    breed: 'Maltipoo',
    details: 'boy, 3 months, with video',
    img: '/puppies/real/meet-pup-1.jpg',
    color: '#8b5a3c',
    href: '/puppies/maltipoo-max-male',
  },
  {
    name: 'Bella',
    breed: 'Korean Teacup Maltipoo',
    details: 'girl, 2 months, with video',
    img: '/puppies/real/meet-pup-2.jpg',
    color: '#3e2723',
    href: '/puppies/maltipoo-bella-female',
  },
  {
    name: 'Coco',
    breed: 'Korean Teacup Poodle',
    details: 'girl, 2 months',
    img: '/puppies/real/meet-pup-3.jpg',
    color: '#c27b38',
    href: '/puppies/poodle-coco-female',
  },
  {
    name: 'Milo & Leo',
    breed: 'Maltipoo & Cavapoo',
    details: 'boy & girl, 2 months, with video',
    img: '/puppies/real/meet-pup-4.jpg',
    color: '#a34828',
    href: '/puppies/cavapoo-teddy-male',
  },
  {
    name: 'Luna',
    breed: 'Korean Teacup Pomeranian',
    details: 'girl, 2 months',
    img: '/puppies/real/meet-pup-5.jpg',
    color: '#5d3a24',
    href: '/puppies/pomeranian-luna-female',
  },
  {
    name: 'Charlie',
    breed: 'Korean Teacup Pomeranian',
    details: 'boy, 2 months',
    img: '/puppies/real/meet-pup-6.jpg',
    color: '#7a3e20',
    href: '/puppies/pomeranian-teddy-male',
  },
];

export function MeetScene() {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-teddy-brown leading-tight">
            Meet the pups
          </h2>
          <p className="font-sans text-base sm:text-lg text-teddy-brown/75 mt-2">
            Real puppies, real photos, looking for their families right now.
          </p>
        </div>

        <Link
          href="/puppies"
          className="self-start md:self-auto inline-flex items-center px-6 py-3 rounded-full bg-teddy-rust hover:bg-teddy-rust-deep text-teddy-cream font-medium shadow transition-all duration-200"
        >
          See all available puppies
        </Link>
      </div>

      {/* Row of Wooden Arched Doors */}
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-end">
          {doors.map((pup, idx) => {
            const isOpen = openedIndex === idx;

            return (
              <div
                key={pup.name}
                className="group flex flex-col items-center cursor-pointer"
                onMouseEnter={() => setOpenedIndex(idx)}
                onMouseLeave={() => setOpenedIndex(null)}
                onClick={() => setOpenedIndex(isOpen ? null : idx)}
              >
                {/* Breed title above door */}
                <div className="text-center mb-3 h-16 flex flex-col justify-end">
                  <span className="font-display font-bold text-sm sm:text-base text-teddy-brown line-clamp-2 leading-tight">
                    {pup.breed}
                  </span>
                  <span className="font-sans text-[11px] text-teddy-brown/60 mt-0.5">
                    {pup.details}
                  </span>
                </div>

                {/* Arched Door Frame */}
                <div className="relative w-full aspect-[3/4.5] rounded-t-full border-4 border-teddy-brown bg-teddy-sand/50 overflow-hidden shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                  {/* Real puppy photo revealed inside */}
                  <Image
                    src={pup.img}
                    alt={pup.name}
                    fill
                    sizes="(max-width: 640px) 150px, 200px"
                    className="object-cover"
                  />

                  {/* Wooden Door that opens on hover / click */}
                  <div
                    className="absolute inset-0 rounded-t-full origin-left transition-transform duration-500 ease-out flex flex-col items-center justify-center p-3 border-r-2 border-black/20"
                    style={{
                      backgroundColor: pup.color,
                      transform: isOpen ? 'perspective(600px) rotateY(-80deg)' : 'perspective(600px) rotateY(0deg)',
                    }}
                  >
                    {/* Wood panel carving */}
                    <div className="w-full h-full rounded-t-full border border-white/20 flex flex-col items-center justify-between py-6">
                      <span className="text-xl text-white/50">🐾</span>
                      {/* Brass doorknob */}
                      <span className="w-3.5 h-3.5 rounded-full bg-teddy-gold shadow-md self-end mr-3 border border-amber-800" />
                    </div>
                  </div>

                  {/* Available bubble tag */}
                  <span className="absolute top-2 right-2 z-10 bg-teddy-cream border border-teddy-brown/30 text-teddy-brown text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                    Available
                  </span>
                </div>

                <Link
                  href={pup.href}
                  className="mt-3 font-sans text-xs font-semibold text-teddy-rust group-hover:underline"
                >
                  View details →
                </Link>
              </div>
            );
          })}
        </div>

        {/* Floorboard runner with standing mascot */}
        <div className="relative mt-6 pt-4 border-t-8 border-[#8b5a3c] bg-[#e4a352]/20 rounded-b-xl flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="relative w-16 h-14">
              <Image
                src="/brand/real/mascot-standing.png"
                alt="TeddyPups Mascot"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-hand text-teddy-brown text-sm sm:text-base">
              Every pup gets a full health guarantee & international microchip!
            </span>
          </div>

          <Link
            href="/puppies"
            className="hidden sm:inline-block font-sans text-xs font-bold text-teddy-brown hover:text-teddy-rust underline"
          >
            Meet them all ➔
          </Link>
        </div>
      </div>
    </section>
  );
}

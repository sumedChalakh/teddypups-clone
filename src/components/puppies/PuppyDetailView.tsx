'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MessageCircle,
  Calendar,
  ShieldCheck,
  Award,
  Video,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { type Puppy } from '@/data/puppies';
import { siteConfig } from '@/config/site';
import { PawIcon } from '@/components/ui/PawIcon';
import { PuppyCard } from '@/components/puppies/PuppyCard';

interface PuppyDetailViewProps {
  puppy: Puppy;
  relatedPuppies: Puppy[];
}

export function PuppyDetailView({ puppy, relatedPuppies }: PuppyDetailViewProps) {
  const [activePhoto, setActivePhoto] = useState(puppy.coverImage);

  const whatsappMessage = `Hello TeddyPups UAE! I am interested in inquiring about ${puppy.name} (${puppy.breedName}, ${puppy.genderLabel}, ref: ${puppy.slug}). Is this puppy currently available?`;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-brand-dark/70 mb-6 font-medium">
        <Link href="/" className="hover:text-brand-rust transition">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 opacity-40" />
        <Link href="/puppies" className="hover:text-brand-rust transition">
          Available Puppies
        </Link>
        <ChevronRight className="w-3.5 h-3.5 opacity-40" />
        <span className="text-brand-dark font-bold">{puppy.name}</span>
      </nav>

      {/* Main Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Media Gallery */}
        <div className="lg:col-span-7 space-y-4">
          {/* Active Photo Container */}
          <div className="relative aspect-4/3 sm:aspect-square w-full rounded-3xl overflow-hidden bg-brand-sand/30 border-2 border-brand-dark/10 shadow-lg">
            <Image
              src={activePhoto}
              alt={`${puppy.name}, ${puppy.breedName}`}
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-all duration-300"
            />

            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-cream/95 text-brand-dark shadow-xs backdrop-blur-xs">
                <PawIcon className="w-3.5 h-3.5 text-brand-rust" />
                <span>{puppy.originLabel}</span>
              </span>

              {puppy.withVideo && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-rust text-white shadow-xs">
                  <Video className="w-3.5 h-3.5" />
                  <span>Video available</span>
                </span>
              )}
            </div>

            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#25D366] text-white shadow-xs">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>Available for Adoption</span>
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          {puppy.gallery.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {puppy.gallery.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActivePhoto(img)}
                  className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                    activePhoto === img
                      ? 'border-brand-rust scale-105 shadow-sm'
                      : 'border-brand-dark/15 opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Trust Guarantee Box */}
          <div className="p-5 rounded-2xl bg-brand-cream/70 border border-brand-dark/10 flex items-center gap-4 text-xs sm:text-sm text-brand-dark/80">
            <ShieldCheck className="w-8 h-8 text-brand-rust shrink-0" />
            <div>
              <p className="font-bold text-brand-dark">100% Health Certified & Guarantee</p>
              <p className="text-brand-dark/70">
                Includes international pet passport, veterinary inspection certificate, microchip registration, and 1-year genetic warranty.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Puppy Info & Enquire CTAs */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-brand-rust uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Certified Teacup Puppy</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark mt-1">
              {puppy.name}
            </h1>

            <p className="font-display text-xl sm:text-2xl font-bold text-brand-rust mt-2">
              AED {puppy.priceAED.toLocaleString()}
            </p>

            {/* Specifications Grid */}
            <dl className="mt-6 grid grid-cols-2 gap-4 p-5 rounded-2xl bg-brand-sand/50 border border-brand-dark/10 text-xs sm:text-sm">
              <div>
                <dt className="text-brand-dark/60 font-sans">Breed</dt>
                <dd className="font-semibold text-brand-dark mt-0.5">{puppy.breedName}</dd>
              </div>

              <div>
                <dt className="text-brand-dark/60 font-sans">Gender</dt>
                <dd className="font-semibold text-brand-dark mt-0.5">{puppy.genderLabel}</dd>
              </div>

              <div>
                <dt className="text-brand-dark/60 font-sans">Age</dt>
                <dd className="font-semibold text-brand-dark mt-0.5">{puppy.age}</dd>
              </div>

              <div>
                <dt className="text-brand-dark/60 font-sans">Location</dt>
                <dd className="font-semibold text-brand-dark mt-0.5">{puppy.originLabel}</dd>
              </div>

              <div>
                <dt className="text-brand-dark/60 font-sans">Estimated Adult Size</dt>
                <dd className="font-semibold text-brand-dark mt-0.5">{puppy.estimatedWeight}</dd>
              </div>

              <div>
                <dt className="text-brand-dark/60 font-sans">Coat Color</dt>
                <dd className="font-semibold text-brand-dark mt-0.5">{puppy.color}</dd>
              </div>

              <div className="col-span-2 pt-2 border-t border-brand-dark/10">
                <dt className="text-brand-dark/60 font-sans">Health Certificate ID</dt>
                <dd className="font-mono text-xs font-semibold text-brand-dark mt-0.5">
                  {puppy.healthCertId}
                </dd>
              </div>

              <div className="col-span-2">
                <dt className="text-brand-dark/60 font-sans">Vaccination Status</dt>
                <dd className="font-semibold text-brand-dark mt-0.5">{puppy.vaccinations}</dd>
              </div>
            </dl>

            {/* Story / About */}
            <div className="mt-6 p-5 rounded-2xl bg-brand-cream border border-brand-dark/10 shadow-2xs">
              <div className="inline-flex items-center gap-1 text-xs font-hand font-bold text-brand-rust mb-2">
                <PawIcon className="w-3.5 h-3.5" />
                <span>hello, it&apos;s me!</span>
              </div>
              <p className="text-sm text-brand-dark/85 leading-relaxed font-sans">
                {puppy.description}
              </p>

              {/* Temperament Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {puppy.temperament.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-brand-sand text-brand-dark border border-brand-dark/5"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-full bg-[#25D366] text-white font-bold text-base shadow-md hover:bg-[#20ba5a] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Ask about {puppy.name} on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-brand-sand text-brand-dark font-bold text-sm border border-brand-dark/15 hover:bg-brand-gold/40 transition active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-brand-rust" />
              <span>Book a Showroom Visit to Meet {puppy.name}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Related Puppies Carousel */}
      {relatedPuppies.length > 0 && (
        <div className="mt-20 pt-12 border-t border-brand-dark/10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-brand-rust">
                More Loving Companions
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-dark mt-1">
                Other puppies you might love
              </h2>
            </div>
            <Link
              href="/puppies"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-brand-rust hover:underline"
            >
              <span>View all</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPuppies.map((p) => (
              <PuppyCard key={p.id} puppy={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

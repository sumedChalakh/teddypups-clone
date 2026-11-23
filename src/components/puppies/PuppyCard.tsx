import Link from 'next/link';
import Image from 'next/image';
import { Video, ArrowRight } from 'lucide-react';
import { type Puppy } from '@/data/puppies';
import { PawIcon } from '@/components/ui/PawIcon';

interface PuppyCardProps {
  puppy: Puppy;
}

export function PuppyCard({ puppy }: PuppyCardProps) {
  const isAvailable = puppy.status === 'available';

  return (
    <article className="group bg-brand-cream rounded-3xl p-4 border border-brand-dark/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Cover Image & Tags */}
        <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-brand-sand/30 border border-brand-dark/5">
          <Image
            src={puppy.coverImage}
            alt={`${puppy.name}, ${puppy.breedName}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Origin Badge */}
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-brand-cream/95 text-brand-dark shadow-xs backdrop-blur-xs flex items-center gap-1">
            <PawIcon className="w-3 h-3 text-brand-rust" />
            <span>{puppy.originLabel}</span>
          </span>

          {/* Video Indicator */}
          {puppy.withVideo && (
            <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-brand-rust text-white shadow-xs flex items-center gap-1">
              <Video className="w-3 h-3" />
              <span>with video</span>
            </span>
          )}
        </div>

        {/* Info */}
        <div className="mt-4 px-1">
          <div className="flex items-baseline justify-between">
            <h3 className="font-display font-bold text-2xl text-brand-dark group-hover:text-brand-rust transition-colors">
              {puppy.name}
            </h3>
            <span className="text-sm font-semibold text-brand-rust">
              AED {puppy.priceAED.toLocaleString()}
            </span>
          </div>

          <p className="text-xs text-brand-dark/70 font-sans mt-0.5">
            {puppy.breedName} &bull; {puppy.genderLabel} &bull; {puppy.age}
          </p>

          <p className="mt-3 text-xs text-brand-dark/75 line-clamp-2 leading-relaxed">
            {puppy.description}
          </p>
        </div>
      </div>

      {/* Footer / Link */}
      <div className="mt-5 pt-3 border-t border-brand-dark/10 flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
            isAvailable
              ? 'text-[#25D366] bg-[#25D366]/10'
              : 'text-brand-dark/60 bg-brand-sand'
          }`}
        >
          {isAvailable && <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />}
          <span>{isAvailable ? 'Available Now' : 'Adopted'}</span>
        </span>

        <Link
          href={`/puppies/${puppy.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-rust hover:text-brand-rustDark transition-colors group/link"
        >
          <span>Meet {puppy.name}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

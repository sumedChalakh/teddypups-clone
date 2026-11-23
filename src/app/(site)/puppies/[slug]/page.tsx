import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { puppies, getPuppyBySlug } from '@/data/puppies';
import { PuppyDetailView } from '@/components/puppies/PuppyDetailView';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return puppies.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const puppy = getPuppyBySlug(params.slug);

  if (!puppy) {
    return {
      title: 'Puppy Not Found | TeddyPups U.A.E.',
    };
  }

  return {
    title: `${puppy.name}, ${puppy.breedName} puppy`,
    description: `Meet ${puppy.name}: ${puppy.breedName}, ${puppy.genderLabel}, ${puppy.age} old, ${puppy.originLabel}. Verified health records and genuine photos from TeddyPups U.A.E.`,
    openGraph: {
      title: `${puppy.name}, ${puppy.breedName} puppy | TeddyPups U.A.E.`,
      description: `Meet ${puppy.name}: ${puppy.breedName}, ${puppy.genderLabel}, ${puppy.age} old. Verified health records and genuine photos from TeddyPups U.A.E.`,
      images: [
        {
          url: puppy.coverImage,
          alt: `${puppy.name}, ${puppy.breedName} puppy`,
        },
      ],
    },
  };
}

export default function PuppyPage({ params }: PageProps) {
  const puppy = getPuppyBySlug(params.slug);

  if (!puppy) {
    notFound();
  }

  const relatedPuppies = puppies
    .filter((p) => p.slug !== puppy.slug && (p.breed === puppy.breed || p.origin === puppy.origin))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fffdf8] via-[#fff1d8] to-[#fbe3b4]">
      <PuppyDetailView puppy={puppy} relatedPuppies={relatedPuppies} />
    </main>
  );
}

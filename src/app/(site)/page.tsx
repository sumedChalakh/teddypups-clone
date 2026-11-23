import { HeroScene } from '@/components/home/HeroScene';
import { MeetScene } from '@/components/home/MeetScene';
import { PathsScene } from '@/components/home/PathsScene';
import { JourneyScene } from '@/components/home/JourneyScene';
import { TrustScene } from '@/components/home/TrustScene';
import { FamiliesScene } from '@/components/home/FamiliesScene';
import { FaqScene } from '@/components/home/FaqScene';
import { FinalCtaScene } from '@/components/home/FinalCtaScene';

export const metadata = {
  title: 'TeddyPups U.A.E. | Premium Teacup Puppies in Dubai',
  description:
    'Ethically raised teacup and toy puppies in Dubai. Health certified, home-raised, and hand-delivered across the UAE.',
};

export default function HomePage() {
  return (
    <main className="w-full flex flex-col">
      {/* Scene 1: Hero (Morning Dawn) */}
      <HeroScene />

      {/* Scene 2: Meet the Pups */}
      <MeetScene />

      {/* Scene 3: Two Ways to Meet */}
      <PathsScene />

      {/* Scene 4: Your Puppy Journey & Concierge Chat */}
      <JourneyScene />

      {/* Scene 5: Puppy Passport & Why Families Trust TeddyPups */}
      <TrustScene />

      {/* Scene 6: Happy Families Testimonials & Photowall (Dusk) */}
      <FamiliesScene />

      {/* Scene 7: Frequently Asked Questions (Night) */}
      <FaqScene />

      {/* Scene 8: Final Call to Action */}
      <FinalCtaScene />
    </main>
  );
}

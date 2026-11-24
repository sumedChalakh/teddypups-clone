import { HeroScene } from '@/components/home/HeroScene';
import { MeetScene } from '@/components/home/MeetScene';
import { PathsScene } from '@/components/home/PathsScene';
import { JourneyScene } from '@/components/home/JourneyScene';
import { TrustScene } from '@/components/home/TrustScene';
import { FamiliesScene } from '@/components/home/FamiliesScene';
import { FaqScene } from '@/components/home/FaqScene';
import { FinalCtaScene } from '@/components/home/FinalCtaScene';
import { QuiltDivider } from '@/components/home/QuiltDivider';

export const metadata = {
  title: 'TeddyPups U.A.E. | Premium Teacup Puppies in Dubai',
  description:
    'Ethically raised teacup and toy puppies in Dubai. Health certified, home-raised, and hand-delivered across the UAE.',
};

export default function HomePage() {
  return (
    <main className="w-full flex flex-col bg-[#fffdf8]">
      {/* Scene 1: Hero (#fffdf8 to #fff1d8) */}
      <HeroScene />
      
      {/* Divider 1 -> 2: fill matches Meet top (#fff1d8) */}
      <QuiltDivider fillColor="#fff1d8" />

      {/* Scene 2: Meet (#fff1d8 to #fbe3b4) */}
      <MeetScene />

      {/* Divider 2 -> 3: fill matches Paths top (#fbe3b4) */}
      <QuiltDivider fillColor="#fbe3b4" />

      {/* Scene 3: Paths (#fbe3b4 to #f7d18d) */}
      <PathsScene />

      {/* Divider 3 -> 4: fill matches Journey top (#f7d18d) */}
      <QuiltDivider fillColor="#f7d18d" />

      {/* Scene 4: Journey (#f7d18d to #f0b866) */}
      <JourneyScene />

      {/* Divider 4 -> 5: fill matches Passport/Trust top (#f0b866) */}
      <QuiltDivider fillColor="#f0b866" />

      {/* Scene 5: Passport / Trust (#f0b866 to #a65a30) */}
      <TrustScene />

      {/* Divider 5 -> 6: fill matches Happy Families top (#a65a30) */}
      <QuiltDivider fillColor="#a65a30" />

      {/* Scene 6: Happy Families (#a65a30 to #4d2b19) */}
      <FamiliesScene />

      {/* Divider 6 -> 7: fill matches FAQ top (#4d2b19) */}
      <QuiltDivider fillColor="#4d2b19" />

      {/* Scene 7: FAQ (#4d2b19 to #2f1a10) */}
      <FaqScene />

      {/* Divider 7 -> 8: fill matches Final CTA top (#2f1a10) */}
      <QuiltDivider fillColor="#2f1a10" />

      {/* Scene 8: Final Call to Action (#2f1a10 to #24130b) */}
      <FinalCtaScene />
    </main>
  );
}

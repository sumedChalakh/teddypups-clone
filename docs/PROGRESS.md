# Project Progress

## Done
- [x] **P1 Scaffold**:
  - Initialized Next.js 14 App Router project with TypeScript and ESLint.
  - Configured Tailwind CSS with full color tokens, fonts, and 8 scene gradient definitions.
  - Setup next/font/google with Fraunces, Figtree, and Shantell Sans.
  - Git repository initialized with first commit (`5703151`).
- [x] **P2 Layout**:
  - Built sticky `Navbar` with scroll-triggered backdrop blur and mobile drawer toggle.
  - Built full-screen `MobileMenu` with animated drawer, paw accents, Esc key handling, and background scroll locking.
  - Built `Footer` featuring top wavy hill SVG edge, brand story, quick links, breed collections, and Dubai showroom contacts.
  - Built `FloatingWhatsApp` button with pulse animation and pre-filled inquiry.
  - Built `MobileStickyBar` fixed at mobile viewport bottom with direct WhatsApp and Call actions.
  - Integrated `SmoothScroll` with Lenis respecting `prefers-reduced-motion`.
  - Git commit: `f600915`.
- [x] **P3 Data**:
  - Created typed puppy models in `src/data/puppies.ts` with 15 complete puppy profiles covering all required breeds and origins.
  - Implemented query filter helper functions (`getFilteredPuppies`, `getPuppyBySlug`, `getGoneHomePuppies`).
  - Created structured FAQ data in `src/data/faqs.ts`.
  - Created client adoption testimonials in `src/data/testimonials.ts`.
  - Generated and organized optimized SVG puppy portraits and polaroid family moments in `public/puppies/` and `public/families/`.
  - Git commit: `cc7804c`.
- [x] **P4 Home Page**:
  - Built `QuiltDivider.tsx` implementing the scalloped stitched quilt SVG edge divider.
  - Built `HeroScene.tsx` (Scene 1, `#fffdf8` to `#fff1d8`) with headline, 2 CTAs, featured puppy lineup, and peeking teddy.
  - Built `MeetScene.tsx` (Scene 2, `#fff1d8` to `#fbe3b4`) with live interactive breed filter tabs, available badges, and video tags.
  - Built `PathsScene.tsx` (Scene 3, `#fbe3b4` to `#f7d18d`) contrasting Dubai showroom walk-ins against Korean imports.
  - Built `JourneyScene.tsx` (Scene 4, `#f7d18d` to `#f0b866`) with 3 concierge steps and an interactive WhatsApp chat preview with breed quick links.
  - Built `TrustScene.tsx` (Scene 5, `#f0b866` to `#a65a30`) with 4 passport verification stamps.
  - Built `FamiliesScene.tsx` (Scene 6, `#a65a30` to `#4d2b19`) with washi-taped polaroid photowall and 5-star ratings.
  - Built `FaqScene.tsx` (Scene 7, `#4d2b19` to `#2f1a10`) with keyboard-accessible accordion in night atmosphere.
  - Built `FinalCtaScene.tsx` (Scene 8, `#2f1a10` to `#24130b`) with final adoption conversion CTAs and showroom pill.
  - Verified `npm run lint` and `npm run build` (0 warnings, 0 errors).

## In Progress
- [ ] Waiting for user go-ahead ("next") to begin Phase P5 (Puppies listing with query-param filters, then the [slug] detail page).

## Next
- [ ] **P5 Puppies Listing & Detail**:
  - `/puppies` page with URL query parameter filters (`?origin=local|imported` and `?breed=maltipoo|pomeranian|poodle|cavapoo|shih-tzu`).
  - Empty state with reset filters button.
  - `/puppies/[slug]` detail page with gallery, breed, age, gender, origin, status badge, microchip ID, vaccination details, and direct WhatsApp enquiry pre-filled with the puppy's name.

## Missing Assets
- None.

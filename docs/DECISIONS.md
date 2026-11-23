# Architectural & Design Decisions

## 1. Next.js App Router with TypeScript
- **Decision**: Used Next.js 14 App Router with TypeScript and React 18.
- **Why**: Clean route grouping with `(site)`, server components by default for zero client bundle bloat, first-class SEO metadata handling, and automatic font optimization via `next/font/google`.
- **Alternatives Considered**: Next.js Pages router (older paradigm, lacks modern nested layout conventions).

## 2. Tailwind CSS Color Tokens & Gradients
- **Decision**: Mapped design tokens under `colors.brand` and `colors.scene[1-8]` in `tailwind.config.ts`.
- **Why**: Allows semantic utility classes such as `bg-brand-cream`, `text-brand-dark`, `border-brand-gold`, and `bg-scene-1` through `bg-scene-8` for smooth scene gradient transitions matching the morning-to-night aesthetic.
- **Alternatives Considered**: Raw CSS hex values in component classes (hard to maintain and prone to inconsistencies).

## 3. Font Optimization via next/font/google
- **Decision**: Loaded `Fraunces`, `Figtree`, and `Shantell_Sans` in `src/app/layout.tsx` using `next/font/google` with CSS variables.
- **Why**: Zero external network round-trips at runtime, automatic self-hosting, FOIT/FOUT prevention with font-display swap, and responsive typography control.
- **Alternatives Considered**: Traditional `<link href="fonts.googleapis.com">` in head (causes render blocking and cumulative layout shift).

## 4. Centralized Site Configuration (`src/config/site.ts`)
- **Decision**: Stored phone numbers, WhatsApp links, default messages, email, showroom address, and main navigation links in a single configuration file.
- **Why**: Ensures consistent contact information across navbar, footer, contact page, floating CTAs, and mobile action bars without hardcoded duplicates.
- **Alternatives Considered**: Hardcoding numbers in individual components (error-prone when numbers or addresses update).


## 5. Global Layout & Lenis Smooth Scrolling
- **Decision**: Implemented `SmoothScroll` provider wrapping layout children with Lenis, paired with a `prefers-reduced-motion` media query guard.
- **Why**: Delivers luxurious, buttery smooth inertial scrolling matching the premium aesthetic of the brand, while immediately degrading to native instant scrolling if users have reduced motion enabled for accessibility.
- **Alternatives Considered**: Native CSS `scroll-behavior: smooth` (lacks inertia and velocity dampening).

## 6. Dual CTA Strategy (Floating Button vs. Mobile Sticky Bar)
- **Decision**: Displayed the `MobileStickyBar` exclusively on smaller screens (`md:hidden`) with high contrast WhatsApp & Call buttons, while keeping `FloatingWhatsApp` responsive and offset on desktop.
- **Why**: Teacup puppy buyers in Dubai frequently browse on mobile devices and expect instant WhatsApp or phone connectivity without searching through headers or menus.
- **Alternatives Considered**: A single floating button on mobile (often overlaps with mobile browser address bars and bottom navigation).

## 7. Accessible Mobile Menu Drawer
- **Decision**: Managed body scroll locks (`document.body.style.overflow = 'hidden'`) and `keydown` Escape listeners inside `MobileMenu.tsx` with proper ARIA attributes (`role="dialog"`, `aria-modal="true"`).
- **Why**: Prevents background content scrolling underneath the menu, supports keyboard navigation, and provides an effortless escape path for accessibility compliance.
- **Alternatives Considered**: Simple checkbox hack or CSS-only drawer (poor accessibility and no keyboard escape support).


## 8. Typed Local Data Architecture (`src/data/`)
- **Decision**: Modeled all puppy inventory, FAQs, and testimonials in strongly-typed local TypeScript files (`puppies.ts`, `faqs.ts`, `testimonials.ts`) rather than setting up an external database.
- **Why**: Zero network latency, instant build-time static generation (SSG) on Vercel, type-safe filtering on query parameters without cold starts or database credentials.
- **Alternatives Considered**: Headless CMS or SQLite database (adds unnecessary complexity and runtime dependencies for a client-side presentation prototype).

## 9. Scalable SVG Vector Puppy & Family Artworks
- **Decision**: Created dedicated SVG portraits in `public/puppies/` and `public/families/` with warm pastel brand gradients and expressive character illustrations, while retaining the real photographic cover for Max.
- **Why**: The scraped reference site was missing several remote CDN images since the domain is no longer on public DNS. High-fidelity SVGs load instantly, look pristine on high-DPI retina displays, and ensure 0 broken media links across all 15 puppy cards and polaroids.
- **Alternatives Considered**: Generic placeholder solid boxes (harms conversion aesthetics and assignment quality).


## 10. 8-Scene Scroll Sky Gradient & Modular Component Decomposition
- **Decision**: Decomposed the home page into 8 independent, testable scene components (`HeroScene`, `MeetScene`, `PathsScene`, `JourneyScene`, `TrustScene`, `FamiliesScene`, `FaqScene`, `FinalCtaScene`) in `src/components/home/`, joined by `QuiltDivider.tsx`.
- **Why**: Allows each scene to manage its own visual hierarchy, sky gradient transitions, and responsive layouts cleanly without creating a massive, unmaintainable monolithic page file.
- **Alternatives Considered**: Writing all 8 scenes inside a single 1500-line `page.tsx` (drastically decreases code readability and makes debugging difficult).

## 11. Stitched Scalloped Quilt Separators
- **Decision**: Built a reusable SVG pattern generator in `QuiltDivider.tsx` that replicates the original site’s hand-stitched scallop border.
- **Why**: Creates organic, handmade physical transitions between the morning sky gradients down into night tones, reinforcing the warm, comforting "Teddy" boutique brand identity.
- **Alternatives Considered**: Straight CSS borders or plain gradient blends (feels clinical and loses the storybook charm of the reference site).

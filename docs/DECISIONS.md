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

# TeddyPups U.A.E. Clone

A premium teacup puppy boutique website clone for TeddyPups U.A.E. (Dubai), built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Smooth Scroll**: Lenis
- **Fonts**: Fraunces (display), Figtree (sans), Shantell Sans (handwritten accents)
- **Icons**: Lucide React
- **Target Deployment**: Vercel

## Project Structure
```
├── docs/                 # Assignment logs, progress tracking & architectural decisions
├── public/               # Static assets (brand, puppies, families, cursor)
└── src/
    ├── app/              # Next.js App Router pages and root layout
    │   └── (site)/       # Main site route group
    ├── components/       # Modular UI components
    │   ├── home/         # 8 home scenes and interactive features
    │   ├── layout/       # Navbar, Footer, Mobile Menu, Floating CTAs
    │   ├── puppies/      # Puppy cards, filters, and gallery
    │   └── ui/           # Buttons, badges, accordions, dialogs
    ├── config/           # Centralized site & contact configuration
    ├── data/             # Typed puppies, FAQs, and testimonials
    └── lib/              # Utility functions and helpers
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run local development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

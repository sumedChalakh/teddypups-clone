# TeddyPups U.A.E. — Premium Teacup Puppy Boutique Clone

A pixel-faithful, responsive, and performance-optimized clone of [TeddyPups U.A.E.](https://puppy.instabizweb.com/), Dubai's premier boutique for ethically raised teacup and toy puppies.

Built from scratch using **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, featuring custom morning-to-night scroll sky gradients, interactive paw-print cursors, Lenis inertial smooth scrolling, typed local databases, and zero-CLS typography.

---

## 🌟 Key Features

1. **8 Full-Height Home Page Scenes with Sky Gradient**:
   - **Scene 1 (Dawn Hero)**: Headline *"Premium teacup puppies in Dubai"*, 2 primary CTAs, 4-puppy interactive lineup carousel, and peeking Teddy animation.
   - **Scene 2 (Meet the Pups)**: Client-side interactive breed category filter tabs (`All`, `Maltipoo`, `Pomeranian`, `Poodle`, `Cavapoo`, `Shih Tzu`), available badges, and video tags.
   - **Scene 3 (Two Pathways)**: Downtown Dubai showroom walk-ins vs. exclusive Korean teacup flight import concierge.
   - **Scene 4 (Concierge Journey & Chat)**: 3-step adoption breakdown with an authentic interactive WhatsApp chat window preview with clickable breed quick-filter pills.
   - **Scene 5 (Puppy Passport)**: 4 verification stamps (Veterinary Health Certification, Ethical Nursery Standards, MOCCAE-compliant Passport, UAE Family Trust).
   - **Scene 6 (Dusk Photowall)**: Washi-tape polaroid adoption stories and 5-star verified reviews from Dubai Marina, Palm Jumeirah, and Abu Dhabi.
   - **Scene 7 (Night FAQ)**: Accessible, keyboard-navigable question accordion in deep night tones.
   - **Scene 8 (Final Call to Action)**: Conversion closing section with direct WhatsApp link, showroom appointment booking, and operating hours.

2. **Scalloped Stitched Quilt Transitions**:
   - Custom SVG scallop pattern dividers (`QuiltDivider`) with dotted thread stitch paths connecting each gradient scene.

3. **Complete Subpage Suite**:
   - **`/puppies`**: Full listing with active URL search parameter filters (`?origin=local|imported` and `?breed=...`), responsive cards, and an empty state with an instant reset button.
   - **`/puppies/[slug]`**: Dynamic detail pages with SSG pre-rendering across all 15 puppies, image thumbnail switcher, specifications list, microchip/vaccine verification, and pre-filled WhatsApp inquiry links.
   - **`/happy-families`**: Community photowall with client adoption moments and photo submission callout.
   - **`/how-it-works`**: Step-by-step guide with `#delivery` anchor detailing climate-controlled hand-delivery across all 7 Emirates.
   - **`/faq`**: Full categorized accordion database with instant category switching.
   - **`/contact`**: Downtown Dubai showroom directions, valet parking info, operating hours, and interactive appointment booking form.
   - **`/gone-home`**: Gallery celebrating previously adopted puppies settled in UAE homes.

4. **Boutique User Experience & Micro-Interactions**:
   - Custom paw-print SVG cursor with normal hover (`paw.svg`) and active pressed state (`paw-press.svg`).
   - Sticky frosted glass navbar with automatic scroll backdrop blur.
   - Full-screen animated mobile menu with background scroll lock and Escape key dismissal.
   - Dual CTA strategy: Mobile sticky action bar (`WhatsApp` + `Call`) docked on mobile screens + breathing floating WhatsApp badge on desktop.
   - Buttery smooth inertia scroll powered by Lenis, automatically disabled when `prefers-reduced-motion` is detected.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React Server Components, SSG)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing throughout)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) with custom design tokens
- **Typography**: `next/font/google` (`Fraunces` luxury serif display, `Figtree` clean sans-serif body, `Shantell Sans` handwritten scrawl accents)
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Paw Graphics
- **SEO & Social**: Next.js Metadata API, `metadataBase`, dynamic `sitemap.xml`, and `robots.txt`
- **Target Deployment**: [Vercel](https://vercel.com/)

---

## 🎨 Design Tokens & Palette

| Token | Hex Value | Role |
| :--- | :--- | :--- |
| **Dark Brown** | `#2a170e` | Main headings, primary typography, deep contrast |
| **Gold** | `#f2be6b` | Accent highlights, star ratings, warm badges |
| **Amber** | `#e4a352` | Secondary buttons, borders, warm mid-tones |
| **Cream** | `#fffdf8` | Clean surface background, card containers |
| **Sand** | `#fbe3b4` | Tag pills, badge backdrops, washi tape |
| **Blush** | `#f9b9a6` | Soft cheek blush, pastel accents |
| **Rose** | `#e98c8c` | Heart accents, tongue details |
| **Rust** | `#c2622b` / `#a24a1a` | Primary CTA buttons, link hovers |
| **Deep Brown** | `#6b2a1c` / `#24130b` | Night scene gradients, luxury footer |

### 8 Sky Gradients (Morning Dawn to Night)
1. **Hero**: `#fffdf8` &rarr; `#fff1d8`
2. **Meet**: `#fff1d8` &rarr; `#fbe3b4`
3. **Paths**: `#fbe3b4` &rarr; `#f7d18d`
4. **Journey/Chat**: `#f7d18d` &rarr; `#f0b866`
5. **Passport/Trust**: `#f0b866` &rarr; `#a65a30`
6. **Dusk/Families**: `#a65a30` &rarr; `#4d2b19`
7. **Night/FAQ**: `#4d2b19` &rarr; `#2f1a10`
8. **Home/CTA**: `#2f1a10` &rarr; `#24130b`

---

## 📁 Project Structure

```
├── docs/                             # Assignment audit logs & documentation
│   ├── DECISIONS.md                  # Architectural rationales & trade-offs
│   ├── PROGRESS.md                   # Live progress checklists across all phases
│   └── PROMPTS.md                    # Verbatim user prompts & action summaries
├── public/                           # Static assets & vectors
│   ├── brand/                        # Brand logo & icon
│   ├── cursor/                       # Custom paw & paw-press SVGs
│   ├── families/                     # Polaroid adoption memories
│   ├── puppies/                      # 15 puppy portraits & covers
│   └── favicon.ico                   # Site favicon
└── src/
    ├── app/                          # Next.js App Router
    │   ├── (site)/                   # Site route group
    │   │   ├── contact/              # /contact page
    │   │   ├── faq/                  # /faq page
    │   │   ├── gone-home/            # /gone-home page
    │   │   ├── happy-families/       # /happy-families page
    │   │   ├── how-it-works/         # /how-it-works (with #delivery)
    │   │   ├── puppies/              # /puppies listing (URL filterable)
    │   │   │   └── [slug]/           # /puppies/[slug] dynamic detail
    │   │   └── page.tsx              # / 8-scene home page
    │   ├── globals.css               # Tailored cursors, scrollbars, animations
    │   ├── layout.tsx                # Root layout with fonts, Lenis, and nav/footer
    │   ├── robots.ts                 # Dynamic robots.txt
    │   └── sitemap.ts                # Dynamic sitemap.xml (all 27 routes)
    ├── components/
    │   ├── contact/                  # Contact & booking form
    │   ├── faq/                      # Categorized FAQ view
    │   ├── home/                     # 8 modular home scene components & QuiltDivider
    │   ├── layout/                   # Navbar, MobileMenu, Footer, WhatsApp CTAs
    │   ├── puppies/                  # PuppyCard, PuppyFilterBar, PuppyDetailView
    │   └── ui/                       # PawIcon and shared primitives
    ├── config/
    │   └── site.ts                   # Centralized contact numbers, addresses & links
    ├── data/
    │   ├── faqs.ts                   # 8 categorized FAQ items
    │   ├── puppies.ts                # 15 strongly typed puppies & filter helpers
    │   └── testimonials.ts           # 8 UAE adoption testimonials
    └── lib/
        └── utils.ts                  # Class merger (clsx + tailwind-merge)
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.17+ or v20+ recommended (built and verified on Node v24)
- **Package Manager**: npm, pnpm, or yarn

### Installation
```bash
# 1. Clone repository
git clone <repository-url>
cd clone-assignment

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts
| Script | Command | Purpose |
| :--- | :--- | :--- |
| **`dev`** | `npm run dev` | Starts local Next.js development server with hot-reload |
| **`build`** | `npm run build` | Compiles production bundle and pre-renders all 27 static routes |
| **`start`** | `npm run start` | Serves production build locally |
| **`lint`** | `npm run lint` | Runs ESLint and TypeScript type checking |

---

## 🤖 AI Tools & Pair-Programming Workflow

This project was built following a structured, paired development methodology using the **Google DeepMind Antigravity** agentic pair-programmer:
- **Strict Phase Discipline**: Each phase (Scaffold &rarr; Layout &rarr; Data &rarr; Home Page &rarr; Listing/Detail &rarr; Subpages &rarr; Polish &rarr; Finish) was planned, verified against `npm run lint` and `npm run build`, and committed with conventional git messages.
- **Auditable Records**: Maintained [PROMPTS.md](docs/PROMPTS.md) (verbatim instructions log), [PROGRESS.md](docs/PROGRESS.md) (deliverable tracking), and [DECISIONS.md](docs/DECISIONS.md) (technical trade-offs and architectural reasoning).
- **Zero Hallucinated Dependencies**: No bloated packages or unused UI libraries; built strictly with Next.js 14, Tailwind, and lightweight utility primitives.

---

## 🚢 Vercel Deployment Checklist

Deploying this Next.js App Router project to Vercel takes under 2 minutes:

1. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/<your-username>/teddypups-uae.git
   git push -u origin main
   ```

2. **Import into Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New" &rarr; "Project"**.
   - Select your `teddypups-uae` repository.

3. **Configure Build Settings**:
   - **Framework Preset**: `Next.js` (automatically detected).
   - **Root Directory**: `./` (leave default).
   - **Build Command**: `next build` (or leave default).
   - **Output Directory**: `.next` (leave default).
   - **Install Command**: `npm install` (leave default).

4. **Environment Variables**:
   - No database or backend secrets are required! All 15 puppies, FAQs, and testimonials are local and static.
   - *(Optional)*: `NEXT_PUBLIC_SITE_URL` if overriding the production domain for canonical URLs.

5. **Deploy**:
   - Click **"Deploy"**.
   - Vercel will compile all 27 static pages in ~45 seconds and provide a production `.vercel.app` URL.

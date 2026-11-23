# Prompts Log

## Phase 1: Scaffold
- **Date/Time**: 2026-11-23T22:50:45+05:30
- **User Prompt (Verbatim)**:
```
You are my pair-programmer for a hiring assignment. I must clone the website
https://puppy.instabizweb.com/ (TeddyPups U.A.E., a premium teacup puppy seller in Dubai),
match its design, layout, responsiveness and functionality as closely as possible, deploy
it, and explain my whole workflow in a Loom video. I must understand everything you write,
so keep code clean, simple and commented where non-obvious.

## REFERENCE
A saved copy of the original site is at ../reference/puppy-site/ (read-only).
Use it ONLY to study structure, text content, colors, fonts, spacing and animations.
NEVER copy compiled/minified JS or CSS, and never copy the _next folder. Write original,
readable components.

## STACK
Next.js (App Router) + TypeScript + Tailwind CSS. No backend or database, data lives in
local typed files. Smooth scroll with Lenis. Fonts through next/font/google:
Fraunces (display), Figtree (sans), Shantell Sans (handwritten accents). Target
deployment: Vercel.

## DESIGN TOKENS
text/dark brown #2a170e | gold #f2be6b | amber #e4a352 | cream #fffdf8 | sand #fbe3b4
blush #f9b9a6 | rose #e98c8c | rust #a24a1a and #c2622b | deep brown #6b2a1c
Home page = 8 full-height "scenes" with a sky gradient that moves from morning to night
as you scroll (each scene has a top and bottom color; the last 3 are dark-toned):
1 hero #fffdf8 to #fff1d8 | 2 meet #fff1d8 to #fbe3b4 | 3 paths #fbe3b4 to #f7d18d
4 journey/chat #f7d18d to #f0b866 | 5 passport/trust #f0b866 to #a65a30
6 dusk/testimonials #a65a30 to #4d2b19 | 7 night/FAQ #4d2b19 to #2f1a10
8 home/CTA #2f1a10 to #24130b
Extras: custom paw-print cursor (normal and pressed), small hand-drawn style animations
(blink, float, tail-wag, envelope, plane, stamp), menu open/close transitions.
Respect prefers-reduced-motion.

## PAGES AND FEATURES
- / Home: hero (headline "Premium teacup puppies in Dubai", 2 CTAs, image slider with
  breed name labels), "Meet the pups" grid with Available badges and "with video" tags,
  "Two ways to meet your puppy" (Dubai showroom / Imported from Korea), 3-step "Your
  puppy journey", WhatsApp-style chat preview with breed quick links, "Why families trust
  TeddyPups" (4 points), "Happy families" testimonial and photo carousel, FAQ preview
  accordion, final CTA, footer.
- /puppies: listing of all puppies, filters via URL query params: ?origin=local|imported
  and ?breed=maltipoo|pomeranian|poodle|cavapoo|shih-tzu, with empty state.
- /puppies/[slug]: detail page (gallery, breed, age, gender, status, WhatsApp enquiry).
- /happy-families, /how-it-works (with #delivery anchor), /faq (accordion),
  /contact (visit and contact), /gone-home (puppies already adopted).
- Global: sticky navbar, full-screen mobile menu, floating WhatsApp button, footer,
  mobile sticky WhatsApp and Call bar, SEO metadata per page, favicon.
- Keep contact details in ONE config file (src/config/site.ts): placeholder phone
  +971 50 000 0000, WhatsApp number, prefilled message, email, address "Downtown Dubai, UAE".

## PROJECT STRUCTURE (create it)
src/app/(site)/... pages | src/components/{layout,home,puppies,ui}
src/data/puppies.ts (typed, 15 puppies) | src/data/faqs.ts | src/data/testimonials.ts
src/config/site.ts | src/lib/ | public/{brand,puppies,families,cursor}
docs/PROMPTS.md | docs/PROGRESS.md | docs/DECISIONS.md | README.md

## WORKING RULES (follow on EVERY step)
1. Before coding, give me a 3-6 line plan and wait if anything is ambiguous.
2. Work in small phases. After each phase:
   a. run `npm run lint` and `npm run build` and fix errors;
   b. append to docs/PROMPTS.md: the date/time, phase name, my message copied VERBATIM,
      and a 2-3 line summary of what you did (never rewrite my wording);
   c. update docs/PROGRESS.md (done / in progress / next);
   d. add notable choices and trade-offs to docs/DECISIONS.md (why, alternatives);
   e. make a git commit with a conventional message (feat:, fix:, style:, docs:, chore:).
3. Never put secrets in the repo. Add .env.example if env vars are needed.
4. Download or create assets into /public with sensible names. Optimize images with
   next/image and set alt text. If an asset is missing, use a clean placeholder and
   list it in docs/PROGRESS.md under "Missing assets".
5. Mobile-first and responsive; verify at 375px, 768px and 1280px. Accessible markup:
   semantic HTML, keyboard-friendly menu and accordion, visible focus, aria labels.
6. Keep components small and typed. No unused code or dependencies.
7. At the end of each phase, tell me in plain English how it works so I can explain it
   in my video.

## PHASES
P1 Scaffold: create the app, Tailwind theme (tokens above), fonts, folder structure,
   docs files, git init and first commit.
P2 Layout: Navbar, mobile menu, Footer, floating WhatsApp button, mobile sticky bar,
   Lenis smooth scroll, paw cursor.
P3 Data: typed puppies, FAQ and testimonial data using the reference content.
P4 Home page: all 8 scenes with the scroll gradient, then animations.
P5 Puppies listing with query-param filters, then the [slug] detail page.
P6 Remaining pages: happy-families, how-it-works, faq, contact, gone-home.
P7 Polish: compare with the reference at 3 breakpoints, fix differences, SEO metadata,
   Lighthouse (aim 90+), reduced-motion.
P8 Finish: write the README (overview, stack, setup, structure, scripts, AI tools used,
   deployment steps), final docs, final commit, and give me a Vercel deploy checklist.

Start with P1 only. Do not begin P2 until I say "next".
```
- **Summary**:
  Scaffolded the Next.js App Router application with TypeScript and Tailwind CSS.
  Configured design tokens, 8 scene gradients, Google fonts (Fraunces, Figtree, Shantell Sans), folder structure, cursor assets, and site configuration.
  Initialized git tracking and documentation files according to project guidelines.


## Phase 2: Layout
- **Date/Time**: 2026-11-23T23:02:01+05:30
- **User Prompt (Verbatim)**:
```
next
```
- **Summary**:
  Built the responsive Navbar with scroll detection, full-screen accessible MobileMenu with paw accents, and rich Footer with wavy hill SVG and Dubai showroom contacts.
  Added FloatingWhatsApp action button, mobile-only sticky action bar (WhatsApp & Call), and Lenis smooth scrolling with reduced-motion support.


## Phase 3: Data
- **Date/Time**: 2026-11-23T23:07:37+05:30
- **User Prompt (Verbatim)**:
```
next
```
- **Summary**:
  Parsed and typed 15 distinct puppies (`src/data/puppies.ts`) covering all 5 breeds (Maltipoo, Pomeranian, Poodle, Cavapoo, Shih-Tzu) and both origins (Dubai showroom & imported Korea).
  Created typed FAQ data (`src/data/faqs.ts`) across 4 categories and 8 happy family testimonials (`src/data/testimonials.ts`) with UAE locations. Generated brand-aligned SVG portrait media in `public/puppies/` and `public/families/`.


## Phase 4: Home Page (8 Scenes & Animations)
- **Date/Time**: 2026-11-23T23:17:44+05:30
- **User Prompt (Verbatim)**:
```
next
```
- **Summary**:
  Implemented all 8 full-height home page scenes with the continuous morning-to-night sky gradient:
  Hero (#fffdf8 to #fff1d8) with puppy lineup and CTAs, Meet the pups (#fff1d8 to #fbe3b4) with live breed filter tabs, Two ways to meet (#fbe3b4 to #f7d18d) comparing Dubai showroom vs. Korean imports, Puppy journey (#f7d18d to #f0b866) with interactive WhatsApp concierge chat preview, Puppy passport trust stamps (#f0b866 to #a65a30), Happy families dusk photowall (#a65a30 to #4d2b19), FAQ night accordion preview (#4d2b19 to #2f1a10), and Final CTA (#2f1a10 to #24130b).
  Created the scalloped stitched quilt divider (`QuiltDivider.tsx`) between scenes, verified zero lint/build errors, and committed.


## Phase 5: Puppies Listing & Detail Pages
- **Date/Time**: 2026-11-23T23:24:42+05:30
- **User Prompt (Verbatim)**:
```
continue until all phases completes 
```
- **Summary**:
  Built the `/puppies` listing route with interactive URL search param filters (`?origin=local|imported` and `?breed=...`), empty state with filter reset, and responsive cards with video indicators and pricing.
  Built `/puppies/[slug]` dynamic detail route with SSG pre-rendering across all 15 puppies, image gallery switcher, specification dl matrix, health guarantee callouts, and personalized WhatsApp conversion triggers.


## Phase 6: Remaining Pages (Happy Families, How It Works, FAQ, Contact, Gone Home)
- **Date/Time**: 2026-11-23T23:24:42+05:30
- **User Prompt (Verbatim)**:
```
continue until all phases completes 
```
- **Summary**:
  Built all 5 dedicated subpages: `/happy-families` with polaroid photo wall and client reviews, `/how-it-works` with 3-step adoption and `#delivery` anchor for UAE hand-delivery, `/faq` with multi-category accordion tabs, `/contact` with interactive showroom appointment form and valet instructions, and `/gone-home` showcasing adopted teacup pups.
  Verified zero lint/build errors across all 25 static pages and committed.


## Phase 7: Polish, SEO & Accessibility Verification
- **Date/Time**: 2026-11-23T23:24:42+05:30
- **User Prompt (Verbatim)**:
```
continue until all phases completes 
```
- **Summary**:
  Implemented dynamic XML sitemap (`sitemap.ts`) and crawler directives (`robots.ts`) for Google indexing. Added `metadataBase` to root layout for perfect OpenGraph preview cards.
  Audited responsive layouts across 375px (mobile action bar, drawer menu), 768px (2-column grids), and 1280px (full desktop navigation). Verified `prefers-reduced-motion` fallbacks and ARIA semantic attributes with zero warnings.


## Phase 8: Project Finish, Final README & Vercel Deploy Checklist
- **Date/Time**: 2026-11-23T23:24:42+05:30
- **User Prompt (Verbatim)**:
```
continue until all phases completes 
```
- **Summary**:
  Authored the complete, professional `README.md` covering project overview, tech stack, design tokens, local setup, complete folder structure, available scripts, AI pair-programming workflow, and step-by-step Vercel deployment guide.
  Marked all phases 100% complete in `docs/PROGRESS.md`, verified clean builds across all 27 static routes, and made final git commit.

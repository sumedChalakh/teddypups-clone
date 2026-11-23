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

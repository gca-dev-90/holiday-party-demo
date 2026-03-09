# 🎄 Holiday Party Invitation — 

 
Built with the 2026 stack: Next.js 15 · Tailwind CSS v4 · Framer Motion · TypeScript.

## Quick Start

```bash
npm install
npm run dev
```

Open **http://localhost:3000**

## What's Inside

```
src/
├── app/
│   ├── layout.tsx              # Cormorant SC + Cormorant Garamond fonts, metadata
│   ├── page.tsx                # Assembles all 4 sections
│   └── globals.css             # Tailwind v4, animations, reveal styles
├── components/
│   ├── Hero.tsx                # Sage bg, rotating snowflake, title, RSVP
│   ├── Snowflake.tsx           # SVG snowflake with gradients + sparkles
│   ├── SparkleCanvas.tsx       # Canvas particle system (animated glitter)
│   ├── InfoGrid.tsx            # 3×2 alternating navy/white grid
│   ├── SectionLabel.tsx        # WHAT / WHEN / WHERE label + vertical line
│   ├── ReindeerIllustration.tsx # Wire-light reindeer SVG
│   ├── DrinksIllustration.tsx  # Champagne glasses clinking SVG
│   ├── BokehLeafIllustration.tsx # Bokeh circles + maple leaf SVG
│   ├── CtaStrip.tsx            # Sage strip with "Get Tipsy" + RSVP Now
│   └── Contact.tsx             # Navy footer with form
└── lib/
    └── useScrollReveal.ts      # IntersectionObserver scroll-reveal hook
```

## Design Tokens

Edit colours in `globals.css` under `@theme`:

| Token           | Value     | Use              |
|-----------------|-----------|------------------|
| `--color-sage`  | `#b8cbc5` | Hero + CTA strip |
| `--color-navy`  | `#2c3e6b` | Grid + footer    |
| `--color-cream` | `#f8faf9` | White cells      |

## Deploy

```bash
npx vercel
```

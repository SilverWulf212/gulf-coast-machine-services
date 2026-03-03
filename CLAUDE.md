# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for **Gulf Coast Machine Services, LLC** — an API Licensed machine shop servicing the oil field for 25+ years. Two certified locations: Broussard, LA and Spring, TX.

**Real business info (source of truth: https://gulfcoastmachineservices.com):**
- Broussard, LA: 436 North Eola, Broussard, LA 70570 | Phone: (337) 837-3175 | Fax: (337) 837-6044
- Spring, TX: 5053 FM 2920 Road, Spring, TX 77388 | Phone: (281) 907-0430 | Fax: (281) 907-0648
- Services: Mud motor components, oil field machining (fishing tools, drilling tools, packers, completion, MWD, LWD, cementing tools), welding & fabrication, stabilizer grinding
- Capabilities: 36" OD max swing, 180" between centers, spindle holes 3" to 12 1/4", 4-axis mill, stabilizer grinding up to 30" OD and 15 ft long, steady rest up to 18" OD
- 24/7 rush job capability, API Licensed Shop, Facebook presence

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

- **Framework**: Next.js 16 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS v4 with custom CSS variables in `globals.css`
- **Design system**: Industrial dark theme with `--warning` (red #dc2626) as accent, custom fonts (Bebas Neue, JetBrains Mono, Space Grotesk)

### Key Patterns

- All page components are `"use client"` with inline `useScrollReveal` hooks for scroll-triggered animations
- Custom CSS classes: `btn-industrial`, `btn-outline`, `card-premium`, `reveal`, `stagger-children`, `hover-lift`
- Reusable UI components in `src/components/ui/` with barrel export via `index.ts`
- Layout applies `Header`, `Footer`, `SparkEffect`, `DustEffect`, and `StickyQuoteCTA` globally
- JSON-LD structured data in `src/app/layout.tsx` for SEO
- Contact form uses React 19 `useActionState` with server action in `src/app/contact/actions.ts`
- Images stored in both `/img/` (source) and `/public/images/` (served)

### Route Structure

`/` (home), `/about`, `/services`, `/services/[slug]`, `/contact`, `/service-areas`, `/service-areas/[city]`, `/case-studies`, `/blog`, `/faq`, `/privacy`, `/terms`

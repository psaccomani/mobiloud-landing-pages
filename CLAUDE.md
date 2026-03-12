# MobiLoud Landing Pages

Astro-based landing pages rebuilt from Webflow export. Static site with React components, Tailwind CSS, and Calendly integration.

## Stack

- Astro 5 (static output)
- React 19 (interactive components via `client:load`)
- Tailwind CSS 3
- TypeScript

## Development

- `npm install` - Install dependencies
- `npm run dev` - Dev server at localhost:4321
- `npm run build` - Production build to ./dist/
- `npm run preview` - Preview production build

## Architecture

```
src/
  components/
    sections/    # Page sections (Hero, Features, Testimonials, Calendly, FAQ, etc.)
    ui/          # Reusable UI components (Container, Header, Button, etc.)
  layouts/       # Layout wrappers
  pages/         # File-based routing (each .astro file = a page)
  styles/        # Global CSS with Tailwind directives
  content/       # Structured data (testimonials, FAQs, pricing, etc.)
  assets/        # Images, icons
public/          # Static assets served as-is
webflow-export/  # Raw Webflow export files for reference
```

## Workflow

1. Place Webflow export in `webflow-export/`
2. Extract content, structure, and assets from the export
3. Rebuild each page as an Astro page using section components
4. Match the Webflow design using Tailwind, pulling exact colors/fonts/spacing from the export
5. Wire up Calendly via env var (`PUBLIC_CALENDLY_URL`)

## Calendly Integration

Uses the same pattern as MixBloom landing pages: form collects lead info, then redirects to Calendly with prefilled params. See `src/components/sections/CalendlySection.astro`.

Environment variable: `PUBLIC_CALENDLY_URL`

## Key Rules

- Never run dev server automatically
- Brand colors in `tailwind.config.js` should be updated from the actual Webflow export
- All customer references must be verified against `../_shared/case-studies.md`
- Keep pages lightweight, static HTML, minimal JS

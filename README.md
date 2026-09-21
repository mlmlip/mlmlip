# mlmlip.com — Custom Lip Cosmetics Site

Astro site for **MLM Lip** (mlmlip.com): custom lip cosmetics OEM/ODM — packaging, formulation
and logo customization with a **500 pcs** minimum per SKU.

## Stack

- Astro 5 (static output) + `@astrojs/sitemap`
- Deployed on Vercel (auto-deploy on push to `main`)

## Commands

```sh
npm install     # install dependencies
npm run dev     # local dev server (http://localhost:4321)
npm run build   # production build to dist/
npm run preview # preview the production build
```

## Structure

```
src/
├── data/site.ts          ← single source of truth: brand, contact, products, pillars, steps
├── layouts/BaseLayout.astro
├── pages/
│   ├── index.astro         hero + pillars + products preview + process + CTA
│   ├── products.astro      full product range (100% focused on 6 core lip categories)
│   ├── customization.astro packaging / formulation / logo details + process
│   ├── about.astro         positioning: low minimums, in-house customization
│   └── contact.astro       inquiry form (opens WhatsApp with the brief pre-filled)
├── styles/global.css
public/favicon.svg
```

## To review before launch

1. **Contact details** in `src/data/site.ts` — WhatsApp number and email are placeholders taken from the
   sibling business; confirm they are correct for mlmlip.
2. **Company wording** — currently "Beautychain Limited". Confirm the legal name you want shown.
3. **Product list** — add or remove SKUs as needed.
4. **Inquiry form** — the form opens WhatsApp with a pre-filled message. When the n8n inquiry workflow is
   ready, switch it to POST to that endpoint instead.
5. **Imagery** — no product photos are included yet; add real product/lifestyle images before launch.
6. **Domain** — point `mlmlip.com` (and `www`) to Vercel once the project is imported.

## Context

This project is one of several independent sites. Business context lives in the parent folder's
`SITE.md`; do not mix content or keywords with other sites.

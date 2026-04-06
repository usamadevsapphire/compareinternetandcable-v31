# compareinternetandcable.com — Next.js Static Site for Cloudflare Pages

Data-driven by Google Sheets / Excel. Update the sheet, redeploy, site updates automatically.

## How the sheet drives the site

Place `provider_data_requirements.xlsx` in `/data/` folder.
Every provider plan, price, promo, and config is read from it at build time.

**To update:** Download your Google Sheet as .xlsx → replace `/data/provider_data_requirements.xlsx` → run `npm run build` → deploy `/out/`

## Cloudflare Pages Deployment

1. Push repo to GitHub
2. Cloudflare Pages → Create project → Connect GitHub repo
3. Build command: `npm run build`
4. Build output directory: `out`
5. Add custom domain: compareinternetandcable.com

## Auto-sync with Google Sheet (CI/CD)

Add env vars in Cloudflare Pages dashboard:
- GOOGLE_SHEET_ID = 1m2TVOF93kGsDbn26FH7i1GEcf-EFT4HF
- GOOGLE_API_KEY = your Google Sheets API key

Then change build command to:
`node scripts/fetch-sheet.js && npm run build`

## Local dev

```bash
npm install
npm run dev        # dev server
npm run build      # static export to /out
npx serve out      # preview static build
```

## Key files

- `lib/sheet-data.ts` — reads xlsx, returns typed data for all pages
- `data/provider_data_requirements.xlsx` — your data source
- `app/providers/[slug]/page.tsx` — dynamic provider pages
- `app/internet/[type]/page.tsx` — fiber, cable, 5g, cheap pages
- `components/ZipWidget.tsx` — ZIP availability widget

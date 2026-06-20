# Waratha (وراثة)

Saudi-native AI platform for clinical genomic variant interpretation. Waratha helps clinical geneticists in Saudi hospitals turn exome sequencing results into clinical decisions — calibrated to Saudi population data, PDPL-compliant, and Arabic-first.

## Tech stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4**
- **shadcn/ui** (New York style)
- **framer-motion** for scroll animations
- **next-themes** for dark mode
- Bilingual routing: `/ar` (default) and `/en`

## Local setup

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/ar` by default.

## Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Public site URL for Open Graph and canonical links |
| `CONTACT_EMAIL` | Contact email shown on the site |
| `RESEND_API_KEY` | Resend API key for sending contact form emails (optional) |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deploy

**Live site:** [https://warathaai.netlify.app](https://warathaai.netlify.app)  
**GitHub:** [github.com/Drkyoju/waratha](https://github.com/Drkyoju/waratha)

Every push to the `main` branch automatically deploys to Netlify (usually within 1–2 minutes).

```bash
git add .
git commit -m "Your change description"
git push origin main
```

### Netlify

1. Site is connected to `Drkyoju/waratha` on GitHub.
2. Set these in **Netlify → Site configuration → Environment variables**:
   - `NEXT_PUBLIC_SITE_URL` → `https://warathaai.netlify.app`
   - `CONTACT_EMAIL` → your contact email
   - `RESEND_API_KEY` → optional, for contact form emails
3. After changing env vars, use **Deploys → Trigger deploy → Deploy project without cache**.

### Vercel (alternative)

1. Push the repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Set environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_SITE_URL` → your production URL (e.g. `https://waratha.sa`)
   - `CONTACT_EMAIL` → your contact email
   - `RESEND_API_KEY` → when email integration is enabled
4. Deploy. Vercel auto-detects Next.js — no extra config needed.

### Docker (standalone)

The project is configured with `output: "standalone"` in `next.config.ts`.

```bash
npm run build
docker build -t waratha .
docker run -p 3000:3000 waratha
```

## Project structure

```
src/
├── app/
│   ├── [locale]/          # Localized pages (ar, en)
│   └── api/contact/       # Contact form API route
├── components/
│   ├── hero/              # Hero section
│   ├── sections/          # Page sections
│   └── ui/                # shadcn/ui components
├── i18n/
│   ├── dictionaries.ts    # All UI strings (AR + EN)
│   └── config.ts          # Locale configuration
└── lib/                   # Utilities, fonts, formatting
```

## License

Proprietary — Waratha © 2026

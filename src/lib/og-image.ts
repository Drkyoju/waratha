import { type Locale } from "@/i18n/config"

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
}

export function getOgImageDataUri(locale: Locale) {
  const brand = locale === "ar" ? "وراثة" : "Waratha"
  const tagline =
    locale === "ar"
      ? "الذكاء الاصطناعي الجيني للسعودية"
      : "AI Genomics for Saudi Arabia"

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${brand}">
  <rect width="1200" height="630" fill="#0B1F3A"/>
  <rect x="80" y="200" width="72" height="72" rx="14" fill="#0D5C40"/>
  <path d="M104 224c8 8 24 8 32 0M104 248c8-8 24-8 32 0M116 224v24" stroke="#C8973A" stroke-width="3" fill="none" stroke-linecap="round"/>
  <text x="180" y="255" fill="#F5F7F2" font-family="Arial, sans-serif" font-size="64" font-weight="700">${brand}</text>
  <text x="80" y="340" fill="#C8973A" font-family="Arial, sans-serif" font-size="34">${tagline}</text>
</svg>`

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

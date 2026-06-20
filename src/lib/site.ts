export const PRODUCTION_SITE_URL = "https://warathaai.netlify.app"

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? PRODUCTION_SITE_URL
}

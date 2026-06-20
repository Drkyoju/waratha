import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google"

export const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
})

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-english",
  display: "swap",
})

export function getFontClassName(locale: "ar" | "en") {
  return locale === "ar"
    ? `${ibmPlexSansArabic.variable} font-arabic`
    : `${inter.variable} font-english`
}

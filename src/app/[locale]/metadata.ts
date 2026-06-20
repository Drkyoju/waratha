import type { Metadata } from "next"

import { defaultLocale, isLocale, type Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { getOgImageDataUri } from "@/lib/og-image"
import { getSiteUrl } from "@/lib/site"

type MetadataProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale: localeParam } = await params
  const locale: Locale = isLocale(localeParam) ? localeParam : defaultLocale
  const dict = getDictionary(locale)
  const siteUrl = getSiteUrl()
  const ogImage = getOgImageDataUri(locale)

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ar: "/ar",
        en: "/en",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${siteUrl}/${locale}`,
      siteName: dict.brand.name,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_SA"],
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: dict.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [ogImage],
    },
  }
}

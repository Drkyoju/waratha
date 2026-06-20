import { notFound } from "next/navigation"

import { LegalPage } from "@/components/legal/legal-page"
import { getDictionary } from "@/i18n/get-dictionary"
import { isLocale, type Locale } from "@/i18n/config"

type PageProps = {
  params: Promise<{ locale: string }>
}

export default async function PdplPage({ params }: PageProps) {
  const { locale: localeParam } = await params
  if (!isLocale(localeParam)) notFound()

  const locale = localeParam as Locale
  const dict = getDictionary(locale)

  return (
    <LegalPage
      content={dict.legalPages.pdpl}
      backHref={`/${locale}`}
      backLabel={dict.footer.backToHome}
    />
  )
}

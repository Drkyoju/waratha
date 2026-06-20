import { notFound } from "next/navigation"

import { HomePageClient } from "@/components/home-page-client"
import { isLocale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"

type HomePageProps = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const dict = getDictionary(locale)

  return (
    <HomePageClient
      locale={locale}
      dict={dict}
      contactEmail={dict.contactSection.email}
    />
  )
}

import { notFound } from "next/navigation"

import { HomePageClient } from "@/components/home-page-client"
import { getPublicContactEmail } from "@/lib/email"
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
  const contactEmail = getPublicContactEmail(dict.contactSection.email)

  return (
    <HomePageClient
      locale={locale}
      dict={dict}
      contactEmail={contactEmail}
    />
  )
}

import { notFound } from "next/navigation"

import { LocaleShell } from "@/components/locale-shell"
import { isLocale, type Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"

import { generateMetadata } from "./metadata"

type LocaleLayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export { generateMetadata }

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }]
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const dict = getDictionary(locale)

  return (
    <LocaleShell locale={locale as Locale} dict={dict}>
      {children}
    </LocaleShell>
  )
}

"use client"

import { Footer } from "@/components/footer"
import { LocaleDocumentSync } from "@/components/locale-document-sync"
import { Navbar } from "@/components/navbar"
import { RequestAccessProvider } from "@/components/providers/request-access-provider"
import { type Locale } from "@/i18n/config"
import { type Dictionary } from "@/i18n/dictionaries"

type LocaleShellProps = {
  children: React.ReactNode
  locale: Locale
  dict: Dictionary
}

export function LocaleShell({ children, locale, dict }: LocaleShellProps) {
  return (
    <RequestAccessProvider locale={locale} dict={dict}>
      <LocaleDocumentSync locale={locale} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-waratha-primary focus:px-4 focus:py-2 focus:text-white"
      >
        {dict.nav.skipToContent}
      </a>
      <Navbar locale={locale} dict={dict} />
      {children}
      <Footer locale={locale} dict={dict} />
    </RequestAccessProvider>
  )
}

"use client"

import { useEffect } from "react"

import { getDirection, type Locale } from "@/i18n/config"

type LocaleDocumentSyncProps = {
  locale: Locale
}

export function LocaleDocumentSync({ locale }: LocaleDocumentSyncProps) {
  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    const dir = getDirection(locale)

    html.lang = locale
    html.dir = dir

    body.classList.remove("font-arabic", "font-english")
    body.classList.add(locale === "ar" ? "font-arabic" : "font-english")
  }, [locale])

  return null
}

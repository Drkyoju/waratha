"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState, useTransition } from "react"

import { type Locale } from "@/i18n/config"
import { type Dictionary } from "@/i18n/dictionaries"
import { cn } from "@/lib/utils"

type LanguageSwitcherProps = {
  locale: Locale
  labels: Dictionary["nav"]
  inverted?: boolean
  compact?: boolean
}

function buildLocalizedHref(pathname: string, nextLocale: Locale, hash = "") {
  const segments = pathname.split("/").filter(Boolean)

  if (segments.length === 0) {
    return `/${nextLocale}${hash}`
  }

  segments[0] = nextLocale
  return `/${segments.join("/")}${hash}`
}

export function LanguageSwitcher({
  locale,
  labels,
  inverted,
  compact,
}: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [hash, setHash] = useState("")

  useEffect(() => {
    setHash(window.location.hash)
  }, [pathname])

  function switchLocale(nextLocale: Locale) {
    if (nextLocale === locale || isPending) return

    const currentHash = window.location.hash
    const href = buildLocalizedHref(pathname, nextLocale, currentHash)

    startTransition(() => {
      router.push(href, { scroll: false })
    })
  }

  return (
    <div
      role="group"
      aria-label={`${labels.languageArabic} / ${labels.languageEnglish}`}
      aria-busy={isPending}
      className={cn(
        "inline-flex items-center rounded-full border transition-opacity",
        compact ? "p-0.5" : "p-1",
        isPending && "pointer-events-none opacity-60",
        inverted
          ? "border-white/20 bg-white/10"
          : "border-border bg-muted/60"
      )}
    >
      {(["ar", "en"] as const).map((code) => {
        const isActive = locale === code
        const label = code === "ar" ? labels.languageArabic : labels.languageEnglish
        const href = buildLocalizedHref(pathname, code, hash)

        return (
          <Link
            key={code}
            href={href}
            prefetch
            scroll={false}
            onClick={(event) => {
              event.preventDefault()
              switchLocale(code)
            }}
            aria-pressed={isActive}
            className={cn(
              "rounded-full font-medium transition-colors",
              compact
                ? "min-h-8 px-2.5 py-1 text-xs"
                : "touch-target min-h-10 px-3 py-1.5 text-sm sm:min-h-11 sm:py-2",
              isActive
                ? inverted
                  ? "bg-white text-waratha-secondary shadow-sm"
                  : "bg-primary text-primary-foreground shadow-sm"
                : inverted
                  ? "text-white/70 hover:text-white"
                  : "text-muted-foreground hover:text-foreground"
            )}
          >
            {code === "ar" ? "AR" : "EN"}
            <span className="sr-only">{label}</span>
          </Link>
        )
      })}
    </div>
  )
}

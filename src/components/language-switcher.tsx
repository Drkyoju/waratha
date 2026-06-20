"use client"

import { usePathname, useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { type Locale } from "@/i18n/config"
import { type Dictionary } from "@/i18n/dictionaries"

type LanguageSwitcherProps = {
  locale: Locale
  labels: Dictionary["nav"]
  inverted?: boolean
}

export function LanguageSwitcher({ locale, labels, inverted }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  function switchLocale(nextLocale: Locale) {
    if (nextLocale === locale) return

    const segments = pathname.split("/")
    segments[1] = nextLocale
    router.push(segments.join("/") || `/${nextLocale}`)
  }

  return (
    <div
      role="group"
      aria-label={`${labels.languageArabic} / ${labels.languageEnglish}`}
      className={cn(
        "inline-flex items-center rounded-full border p-1",
        inverted
          ? "border-white/20 bg-white/10"
          : "border-border bg-muted/60"
      )}
    >
      {(["ar", "en"] as const).map((code) => {
        const isActive = locale === code
        const label = code === "ar" ? labels.languageArabic : labels.languageEnglish

        return (
          <button
            key={code}
            type="button"
            onClick={() => switchLocale(code)}
            aria-pressed={isActive}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium transition-colors",
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
          </button>
        )
      })}
    </div>
  )
}

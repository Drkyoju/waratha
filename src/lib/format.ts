import { type Locale } from "@/i18n/config"

export function formatLocaleNumber(
  value: number,
  locale: Locale,
  decimals = 0
) {
  const localeTag = locale === "ar" ? "ar-SA" : "en-US"

  if (decimals > 0) {
    return value.toLocaleString(localeTag, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  }

  return Math.round(value).toLocaleString(localeTag)
}

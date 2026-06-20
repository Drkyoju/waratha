import { type Locale } from "@/i18n/config"
import { dictionaries, type Dictionary } from "@/i18n/dictionaries"

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

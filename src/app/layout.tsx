import { headers } from "next/headers"

import { ThemeProvider } from "@/components/providers/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { defaultLocale, getDirection, isLocale, type Locale } from "@/i18n/config"
import { getFontClassName, ibmPlexSansArabic, inter } from "@/lib/fonts"

import "./globals.css"

function resolveLocale(headerValue: string | null): Locale {
  if (headerValue && isLocale(headerValue)) {
    return headerValue
  }
  return defaultLocale
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = await headers()
  const locale = resolveLocale(headersList.get("x-locale"))
  const dir = getDirection(locale)
  const fontClass = getFontClassName(locale)

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={`${ibmPlexSansArabic.variable} ${inter.variable} h-full overflow-x-hidden`}
    >
      <body className={`min-h-full flex flex-col overflow-x-hidden ${fontClass}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

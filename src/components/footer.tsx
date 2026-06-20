"use client"

import Link from "next/link"

import { DnaHelixIcon } from "@/components/icons/dna-helix"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Container } from "@/components/layout/container"
import { Separator } from "@/components/ui/separator"
import { type Locale } from "@/i18n/config"
import { type Dictionary } from "@/i18n/dictionaries"

type FooterProps = {
  locale: Locale
  dict: Dictionary
}

const footerLinks = [
  { key: "product" as const, hash: "#product" },
  { key: "howItWorks" as const, hash: "#how-it-works" },
  { key: "forHospitals" as const, hash: "#hospitals" },
  { key: "research" as const, hash: "#research" },
  { key: "contact" as const, hash: "#contact" },
] as const

const legalLinks = [
  { key: "privacy" as const, path: "privacy" },
  { key: "terms" as const, path: "terms" },
  { key: "pdpl" as const, path: "pdpl" },
] as const

export function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="bg-waratha-secondary text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2.5 font-semibold"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-waratha-primary text-primary-foreground">
                <DnaHelixIcon size={18} />
              </span>
              <span className="text-lg">{dict.brand.name}</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              {dict.footer.tagline}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide text-waratha-accent uppercase">
              {dict.footer.linksTitle}
            </h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.key}
                  href={`/${locale}${link.hash}`}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {dict.nav[link.key]}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide text-waratha-accent uppercase">
              {dict.footer.legalTitle}
            </h3>
            <nav className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.key}
                  href={`/${locale}/${link.path}`}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {dict.footer[link.key]}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="my-8 bg-white/15" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm text-white/60 sm:text-start">
            {dict.footer.copyright}
          </p>
          <LanguageSwitcher locale={locale} labels={dict.nav} inverted />
        </div>
      </Container>
    </footer>
  )
}

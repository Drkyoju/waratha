"use client"

import { ContactSection } from "@/components/sections/contact-section"
import { FaqSection } from "@/components/sections/faq-section"
import { HeroSection } from "@/components/hero/hero-section"
import { HospitalsSection } from "@/components/sections/hospitals-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { StatsBar } from "@/components/sections/stats-bar"
import { type Locale } from "@/i18n/config"
import { type Dictionary } from "@/i18n/dictionaries"

type HomePageClientProps = {
  locale: Locale
  dict: Dictionary
  contactEmail: string
}

export function HomePageClient({
  locale,
  dict,
  contactEmail,
}: HomePageClientProps) {
  return (
    <main id="main-content" className="overflow-x-hidden">
      <HeroSection dict={dict} />
      <ProblemSection dict={dict.problem} />
      <StatsBar locale={locale} dict={dict.statsBar} />
      <HowItWorksSection dict={dict.howItWorks} />
      <SolutionSection dict={dict.solution} />
      <HospitalsSection dict={dict.hospitals} />
      <PricingSection dict={dict.pricing} />
      <FaqSection dict={dict.faqSection} />
      <ContactSection dict={dict.contactSection} contactEmail={contactEmail} />
    </main>
  )
}

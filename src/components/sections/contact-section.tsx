"use client"

import { Container } from "@/components/layout/container"
import { useRequestAccess } from "@/components/providers/request-access-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { type Dictionary } from "@/i18n/dictionaries"

type ContactSectionProps = {
  dict: Dictionary["contactSection"]
  contactEmail: string
}

export function ContactSection({ dict, contactEmail }: ContactSectionProps) {
  const { openRequestAccess } = useRequestAccess()

  return (
    <section id="contact" className="bg-waratha-bg py-16 sm:py-20 md:py-28">
      <Container size="narrow">
        <div className="mx-auto max-w-2xl space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-waratha-text sm:text-3xl md:text-4xl">
              {dict.title}
            </h2>
            <p className="text-lg leading-relaxed text-waratha-muted">
              {dict.description}
            </p>
          </div>

          <a
            href={`mailto:${contactEmail}`}
            className="inline-block text-xl font-medium text-waratha-primary transition-colors hover:text-waratha-primary/80"
          >
            {contactEmail}
          </a>

          <Button
            size="lg"
            className="bg-waratha-primary hover:bg-waratha-primary/90"
            onClick={() => openRequestAccess()}
          >
            {dict.cta}
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {dict.badges.map((badge) => (
              <Badge
                key={badge}
                variant="outline"
                className="border-waratha-primary/20 bg-white px-3 py-1.5 text-sm text-waratha-text"
              >
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

"use client"

import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { type Dictionary } from "@/i18n/dictionaries"

type FaqSectionProps = {
  dict: Dictionary["faqSection"]
}

export function FaqSection({ dict }: FaqSectionProps) {
  return (
    <section id="research" className="bg-waratha-bg py-20 md:py-28">
      <Container size="narrow">
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={dict.title}
          align="center"
          className="mb-10 max-w-2xl"
        />

        <Accordion type="single" collapsible className="w-full">
          {dict.items.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="text-base font-medium text-waratha-text hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-waratha-muted leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"

import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { type Dictionary } from "@/i18n/dictionaries"
import {
  fadeUpItemVariants,
  scrollViewport,
  staggerContainerVariants,
} from "@/lib/motion"
import { cn } from "@/lib/utils"

type FaqSectionProps = {
  dict: Dictionary["faqSection"]
}

export function FaqSection({ dict }: FaqSectionProps) {
  return (
    <section className="overflow-x-hidden bg-waratha-bg py-20 md:py-28">
      <Container size="narrow">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="space-y-10"
        >
          <motion.div variants={fadeUpItemVariants}>
            <SectionHeading
              eyebrow={dict.eyebrow}
              title={dict.title}
              align="center"
              className="max-w-2xl"
            />
          </motion.div>

          <motion.div variants={fadeUpItemVariants}>
            <Accordion type="single" collapsible className="w-full">
              {dict.items.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${index}`}
                  className={cn(
                    "border-s-4 border-transparent transition-colors",
                    "data-[state=open]:border-waratha-primary data-[state=open]:ps-4"
                  )}
                >
                  <AccordionTrigger className="text-base font-medium text-waratha-text hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-waratha-muted">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

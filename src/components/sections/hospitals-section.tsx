"use client"

import { motion } from "framer-motion"
import { Building2, Quote } from "lucide-react"

import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { useRequestAccess } from "@/components/providers/request-access-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { type Dictionary } from "@/i18n/dictionaries"
import { cn } from "@/lib/utils"

type HospitalsSectionProps = {
  dict: Dictionary["hospitals"]
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

export function HospitalsSection({ dict }: HospitalsSectionProps) {
  const { openRequestAccess } = useRequestAccess()

  return (
    <section id="hospitals" className="bg-waratha-bg py-16 sm:py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={dict.title}
          description={dict.description}
          align="center"
          className="mb-12 max-w-3xl"
        />

        <div
          className={cn(
            "-mx-4 mb-10 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory sm:mx-0 sm:px-0",
            "lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0"
          )}
        >
          {dict.cards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="w-[min(100%,280px)] shrink-0 snap-start sm:min-w-[280px] lg:min-w-0"
            >
              <Card className="flex h-full flex-col border-border/60 bg-white shadow-waratha">
                <CardContent className="flex flex-1 flex-col gap-5 pt-6">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-waratha-primary/10 text-waratha-primary">
                    <Building2 className="size-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-waratha-text">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-waratha-muted">
                      {card.description}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="mt-auto w-fit px-0 text-waratha-primary hover:bg-transparent hover:text-waratha-primary/80"
                    onClick={openRequestAccess}
                  >
                    {dict.learnMore}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-waratha-primary/20 bg-white shadow-waratha">
            <CardContent className="flex flex-col items-start gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-4">
                <Quote
                  className="size-8 shrink-0 text-waratha-accent opacity-80"
                  aria-hidden="true"
                />
                <p className="text-base leading-relaxed font-medium text-waratha-text sm:text-lg md:text-xl">
                  {dict.quote.text}
                </p>
              </div>
              <Button
                className="w-full shrink-0 bg-waratha-primary hover:bg-waratha-primary/90 sm:w-auto"
                onClick={openRequestAccess}
              >
                {dict.quote.cta}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Clock, Database, type LucideIcon } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Card, CardContent } from "@/components/ui/card"
import { type Dictionary } from "@/i18n/dictionaries"
import {
  fadeUpItemVariants,
  scrollViewport,
  staggerContainerVariants,
} from "@/lib/motion"
import { cn } from "@/lib/utils"

type ProblemSectionProps = {
  dict: Dictionary["problem"]
}

const iconMap: Record<string, LucideIcon> = {
  clock: Clock,
  database: Database,
  "alert-triangle": AlertTriangle,
}

export function ProblemSection({ dict }: ProblemSectionProps) {
  return (
    <Section
      id="problem"
      className="bg-[#0F1A12] py-20 text-white md:py-28"
    >
      <Container>
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <motion.div
            variants={fadeUpItemVariants}
            className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
          >
            <p className="mb-4 text-sm font-medium tracking-wide text-waratha-accent uppercase">
              {dict.eyebrow}
            </p>
            <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
              {dict.title}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            className="grid gap-6 md:grid-cols-3"
          >
            {dict.cards.map((card) => {
              const Icon = iconMap[card.icon]

              return (
                <motion.div key={card.title} variants={fadeUpItemVariants}>
                  <Card
                    className={cn(
                      "h-full border-white/10 bg-white/5 text-white shadow-waratha backdrop-blur-sm",
                      "transition-colors hover:border-waratha-accent/30 hover:bg-white/[0.07]"
                    )}
                  >
                    <CardContent className="space-y-5 pt-6">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-waratha-primary/20 text-waratha-accent">
                        {Icon ? (
                          <Icon className="size-5" aria-hidden="true" />
                        ) : null}
                      </div>

                      <div className="space-y-2">
                        <p className="text-2xl font-semibold tracking-tight text-waratha-accent sm:text-3xl">
                          {card.stat}
                        </p>
                        <h3 className="text-lg font-semibold leading-snug">
                          {card.title}
                        </h3>
                      </div>

                      <p className="text-sm leading-relaxed text-white/70">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

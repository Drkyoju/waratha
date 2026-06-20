"use client"

import { motion } from "framer-motion"
import {
  BarChart3,
  Database,
  FileText,
  Users,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { type Dictionary } from "@/i18n/dictionaries"
import {
  fadeUpItemVariants,
  scrollViewport,
  staggerContainerVariants,
} from "@/lib/motion"

type ResearchSectionProps = {
  dict: Dictionary["researchSection"]
}

const iconMap: Record<string, LucideIcon> = {
  "file-text": FileText,
  "bar-chart": BarChart3,
  users: Users,
  database: Database,
}

export function ResearchSection({ dict }: ResearchSectionProps) {
  return (
    <section id="research" className="bg-waratha-bg py-16 sm:py-20 md:py-28">
      <Container>
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <motion.div variants={fadeUpItemVariants} className="mb-12">
            <SectionHeading
              eyebrow={dict.eyebrow}
              title={dict.title}
              description={dict.description}
              align="center"
              className="mx-auto max-w-3xl"
            />
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            className="grid gap-6 md:grid-cols-2"
          >
            {dict.cards.map((card) => {
              const Icon = iconMap[card.icon]

              return (
                <motion.div key={card.title} variants={fadeUpItemVariants}>
                  <Card className="flex h-full flex-col border-border/60 bg-white shadow-waratha">
                    <CardContent className="flex flex-1 flex-col gap-4 pt-6">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex size-11 items-center justify-center rounded-xl bg-waratha-primary/10 text-waratha-primary">
                          {Icon ? (
                            <Icon className="size-5" aria-hidden="true" />
                          ) : null}
                        </div>
                        <Badge
                          variant="outline"
                          className="shrink-0 border-waratha-primary/20 bg-waratha-bg text-waratha-primary"
                        >
                          {card.statBadge}
                        </Badge>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm font-medium tracking-wide text-waratha-muted uppercase">
                          {card.source}
                        </p>
                        <h3 className="text-lg font-semibold leading-snug text-waratha-text">
                          {card.title}
                        </h3>
                      </div>

                      <p className="flex-1 text-sm leading-relaxed text-waratha-muted">
                        {card.description}
                      </p>

                      <Link
                        href="#"
                        className="text-sm font-medium text-waratha-primary transition-colors hover:text-waratha-primary/80"
                      >
                        {card.linkLabel}
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

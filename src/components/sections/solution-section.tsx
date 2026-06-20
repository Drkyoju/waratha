"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type Dictionary } from "@/i18n/dictionaries"
import {
  fadeUpItemVariants,
  scrollViewport,
  staggerContainerVariants,
} from "@/lib/motion"
import { cn } from "@/lib/utils"

type SolutionSectionProps = {
  dict: Dictionary["solution"]
}

const toneStyles = {
  warning:
    "border-amber-400/40 bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200",
  danger:
    "border-red-400/40 bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-200",
  info: "border-sky-400/40 bg-sky-50 text-sky-900 dark:bg-sky-950/40 dark:text-sky-200",
}

export function SolutionSection({ dict }: SolutionSectionProps) {
  const { columns, rows } = dict.mockup

  return (
    <section
      id="product"
      className="overflow-hidden bg-waratha-secondary py-16 text-white sm:py-20 md:py-28"
    >
      <Container>
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div
            variants={fadeUpItemVariants}
            className="order-1 min-w-0 space-y-6 sm:space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-wide text-waratha-accent uppercase">
                {dict.eyebrow}
              </p>
              <h2 className="type-h2 font-semibold leading-tight tracking-tight text-white">
                {dict.title}
              </h2>
            </div>

            <ul className="space-y-4">
              {dict.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-waratha-primary/30 text-waratha-accent">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="leading-relaxed text-white/85">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUpItemVariants}
            className="order-2 min-w-0 lg:order-2"
          >
            <Card className="overflow-hidden border-white/10 bg-white/95 text-foreground shadow-2xl shadow-black/25">
              <CardHeader className="border-b border-border/60 bg-muted/30 pb-4">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {dict.mockup.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
                  <table className="w-full min-w-[36rem] text-start text-sm">
                    <thead>
                      <tr className="border-b border-border/60 bg-muted/20">
                        <th className="px-4 py-3 font-medium text-muted-foreground">
                          {columns.variant}
                        </th>
                        <th className="px-4 py-3 font-medium text-muted-foreground">
                          {columns.gene}
                        </th>
                        <th className="px-4 py-3 font-medium text-muted-foreground">
                          {columns.saudiFreq}
                        </th>
                        <th className="px-4 py-3 font-medium text-muted-foreground">
                          {columns.classification}
                        </th>
                        <th className="px-4 py-3 font-medium text-muted-foreground">
                          {columns.confidence}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row) => (
                        <tr
                          key={row.variant}
                          className="border-b border-border/40 last:border-b-0"
                        >
                          <td className="font-dashboard-mono px-4 py-3 text-sm">
                            {row.variant}
                          </td>
                          <td className="px-4 py-3 font-medium">{row.gene}</td>
                          <td className="px-4 py-3 text-waratha-primary">
                            {row.saudiFreq}
                          </td>
                          <td className="px-4 py-3">
                            <Badge
                              variant="outline"
                              className={cn(
                                "rounded-md text-sm",
                                toneStyles[row.tone as keyof typeof toneStyles]
                              )}
                            >
                              {row.classification}
                            </Badge>
                          </td>
                          <td className="px-4 py-3 font-semibold">
                            {row.confidence}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

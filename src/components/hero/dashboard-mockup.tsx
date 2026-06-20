"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type Dictionary } from "@/i18n/dictionaries"
import { cn } from "@/lib/utils"

type DashboardMockupProps = {
  dict: Dictionary["hero"]["dashboard"]
}

export function DashboardMockup({ dict }: DashboardMockupProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const stats = [
    dict.stats.variants,
    dict.stats.consanguinity,
    dict.stats.odyssey,
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-w-0"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-3xl bg-waratha-accent/10 blur-2xl"
      />
      <Card className="relative border-white/10 bg-white/95 shadow-2xl shadow-black/20 backdrop-blur-sm dark:bg-waratha-secondary/90">
        <CardHeader className="border-b border-border/60 pb-4">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {dict.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 pt-5">
          <p className="font-mono text-xs leading-relaxed text-foreground sm:text-sm">
            {dict.patientEntry}
          </p>

          <Badge
            variant="outline"
            className="border-amber-400/50 bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200"
          >
            {dict.statusBadge}
          </Badge>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{dict.confidenceLabel}</span>
              <span className="font-semibold text-waratha-primary">
                {dict.confidenceValue}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full bg-waratha-primary"
                initial={{ width: 0 }}
                animate={inView ? { width: "94%" } : { width: 0 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.35,
                }}
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat}
                className={cn(
                  "rounded-xl border border-border/60 bg-muted/40 px-3 py-3 text-center",
                  "text-xs leading-snug font-medium text-foreground sm:text-[0.7rem]"
                )}
              >
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  className="block"
                >
                  {stat}
                </motion.span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

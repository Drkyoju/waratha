"use client"

import { motion, useInView } from "framer-motion"
import { Clock, Dna, Users } from "lucide-react"
import { useRef } from "react"

import { type Dictionary } from "@/i18n/dictionaries"
import { cn } from "@/lib/utils"

type DashboardMockupProps = {
  dict: Dictionary["hero"]["dashboard"]
}

const statIcons = [Dna, Users, Clock]

export function DashboardMockup({ dict }: DashboardMockupProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    dict.stats.variants,
    dict.stats.consanguinity,
    dict.stats.odyssey,
  ]

  return (
    <div ref={ref} className="relative hidden min-w-0 md:block">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        className="relative"
      >
        <div className="hero-dashboard-float">
          <div
            className={cn(
              "overflow-hidden rounded-2xl border border-[#0D5C40]/40 bg-[#0F1A12]",
              "shadow-[0_0_0_1px_rgba(13,92,64,0.4),0_20px_60px_rgba(0,0,0,0.5)]"
            )}
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-[#FF5F57]" />
                <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="size-2.5 rounded-full bg-[#28C840]" />
              </div>
              <p className="font-dashboard-mono flex-1 text-center text-sm tracking-wide text-white/50">
                {dict.panelTitle}
              </p>
              <div className="w-[52px]" aria-hidden="true" />
            </div>

            <div className="space-y-5 p-5">
              <p className="font-dashboard-mono rounded-lg bg-black/35 px-3 py-2.5 text-sm leading-relaxed text-[#00FF94]/70">
                {dict.patientEntry}
              </p>

              <span className="hero-status-pulse inline-flex rounded-md bg-amber-400/90 px-3 py-1.5 text-sm font-semibold text-[#0F1A12]">
                {dict.statusBadge}
              </span>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/55">{dict.confidenceLabel}</span>
                  <span className="font-semibold text-[#00FF94]/80">
                    {dict.confidenceValue}
                  </span>
                </div>
                <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#0D5C40] to-[#00FF94]"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "94%" } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {stats.map((stat, index) => {
                  const Icon = statIcons[index] ?? Dna

                  return (
                    <div
                      key={stat}
                      className="flex flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-2 py-3 text-center"
                    >
                      <Icon
                        className="size-4 text-waratha-accent"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-snug font-medium text-white/75">
                        {stat}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

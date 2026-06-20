"use client"

import { animate, motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { Container } from "@/components/layout/container"
import { type Locale } from "@/i18n/config"
import { type Dictionary } from "@/i18n/dictionaries"
import { formatLocaleNumber } from "@/lib/format"
import { cn } from "@/lib/utils"

type StatsBarProps = {
  locale: Locale
  dict: Dictionary["statsBar"]
}

type StatItem = Dictionary["statsBar"]["items"][number]

function AnimatedStatValue({
  item,
  locale,
  className,
}: {
  item: StatItem
  locale: Locale
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [display, setDisplay] = useState(0)
  const decimals = item.decimals ?? 0

  useEffect(() => {
    if (!inView) return

    const controls = animate(0, item.value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(latest),
    })

    return () => controls.stop()
  }, [inView, item.value])

  return (
    <span ref={ref} className={className}>
      {formatLocaleNumber(display, locale, decimals)}
      {item.suffix}
      {"unit" in item && item.unit ? (
        <span className="text-xl font-medium md:text-3xl"> {item.unit}</span>
      ) : null}
    </span>
  )
}

export function StatsBar({ locale, dict }: StatsBarProps) {
  return (
    <section className="bg-waratha-primary py-10 text-white sm:py-12 md:py-14">
      <Container size="wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-6"
        >
          {dict.items.map((item, index) => (
            <div
              key={item.label}
              className={cn(
                "text-center",
                index < dict.items.length - 1 &&
                  "lg:border-e lg:border-white/20"
              )}
            >
              <p className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                <AnimatedStatValue item={item} locale={locale} />
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/80 sm:text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

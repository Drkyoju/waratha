"use client"

import { animate, motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { Container } from "@/components/layout/container"
import { type Locale } from "@/i18n/config"
import { type Dictionary } from "@/i18n/dictionaries"
import { formatLocaleNumber } from "@/lib/format"
import {
  fadeUpItemVariants,
  scrollViewport,
  staggerContainerVariants,
} from "@/lib/motion"
import { cn } from "@/lib/utils"

type StatsBarProps = {
  locale: Locale
  dict: Dictionary["statsBar"]
}

type StatItem = Dictionary["statsBar"]["items"][number]

function AnimatedStatValue({
  item,
  locale,
  inView,
}: {
  item: StatItem
  locale: Locale
  inView: boolean
}) {
  const [display, setDisplay] = useState(0)
  const decimals = item.decimals ?? 0

  useEffect(() => {
    if (!inView) return

    setDisplay(0)
    const controls = animate(0, item.value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(latest),
    })

    return () => controls.stop()
  }, [inView, item.value, locale])

  return (
    <>
      {formatLocaleNumber(display, locale, decimals)}
      {item.suffix}
      {"unit" in item && item.unit ? (
        <span className="text-xl font-medium md:text-3xl"> {item.unit}</span>
      ) : null}
    </>
  )
}

export function StatsBar({ locale, dict }: StatsBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      className="bg-waratha-primary py-10 text-white sm:py-12 md:py-14"
    >
      <Container size="wide">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-6"
        >
          {dict.items.map((item, index) => (
            <motion.div
              key={item.label}
              variants={fadeUpItemVariants}
              className={cn(
                "text-center",
                index < dict.items.length - 1 &&
                  "lg:border-e lg:border-white/20"
              )}
            >
              <p className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                <AnimatedStatValue item={item} locale={locale} inView={inView} />
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

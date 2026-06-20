"use client"

import { animate, motion } from "framer-motion"
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

function useStatsActivation() {
  const ref = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || started) return

    const activate = () => setStarted(true)

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      activate()
      return
    }

    const isVisible = () => {
      const rect = el.getBoundingClientRect()
      return rect.top < window.innerHeight * 0.92 && rect.bottom > 0
    }

    if (isVisible()) {
      activate()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          activate()
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  return { ref, started }
}

function AnimatedStatValue({
  item,
  locale,
  started,
}: {
  item: StatItem
  locale: Locale
  started: boolean
}) {
  const [display, setDisplay] = useState(0)
  const decimals = item.decimals ?? 0

  useEffect(() => {
    if (!started) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReduced) {
      setDisplay(item.value)
      return
    }

    setDisplay(0)
    const controls = animate(0, item.value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(latest),
    })

    return () => controls.stop()
  }, [started, item.value, locale])

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
  const { ref, started } = useStatsActivation()

  return (
    <section
      ref={ref}
      className="scroll-mt-header bg-gradient-to-br from-waratha-primary via-[#0b5238] to-[#094a32] py-10 text-white sm:py-12 md:py-14"
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
              <p className="text-2xl font-bold tracking-tight tabular-nums sm:text-3xl md:text-4xl">
                <AnimatedStatValue
                  item={item}
                  locale={locale}
                  started={started}
                />
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

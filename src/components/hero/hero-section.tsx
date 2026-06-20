"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

import { DashboardMockup } from "@/components/hero/dashboard-mockup"
import { DnaPattern } from "@/components/hero/dna-pattern"
import { Container } from "@/components/layout/container"
import { useRequestAccess } from "@/components/providers/request-access-provider"
import { Button } from "@/components/ui/button"
import { type Dictionary } from "@/i18n/dictionaries"
import { cn } from "@/lib/utils"

type HeroSectionProps = {
  dict: Dictionary
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

export function HeroSection({ dict }: HeroSectionProps) {
  const { openRequestAccess, openDemoModal } = useRequestAccess()

  return (
    <section className="relative -mt-16 flex min-h-screen flex-col bg-waratha-secondary pt-16 text-white">
      <DnaPattern />

      <div className="relative z-10 flex flex-1 items-center py-16 sm:py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-1 space-y-6 sm:space-y-8"
            >
              <motion.h1
                custom={0}
                variants={fadeUp}
                className="type-h1 font-semibold tracking-tight text-white"
              >
                {dict.hero.title}
              </motion.h1>

              <motion.p
                custom={1}
                variants={fadeUp}
                className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
              >
                {dict.hero.subtitle}
              </motion.p>

              <motion.div
                custom={2}
                variants={fadeUp}
                className="flex flex-col gap-3"
              >
                <Button
                  size="lg"
                  className="touch-target w-full bg-waratha-primary text-primary-foreground hover:bg-waratha-primary/90"
                  onClick={() => openRequestAccess()}
                >
                  {dict.hero.primaryCta}
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className={cn(
                    "touch-target w-full border border-white/20 text-white hover:bg-white/10 hover:text-white"
                  )}
                  onClick={openDemoModal}
                >
                  {dict.hero.secondaryCta}
                </Button>
              </motion.div>
            </motion.div>

            <div className="order-2 w-full min-w-0">
              <DashboardMockup dict={dict.hero.dashboard} />
            </div>
          </div>
        </Container>
      </div>

      <motion.a
        href="#product"
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        aria-label={dict.hero.scrollHint}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50 transition-colors hover:text-white/80"
      >
        <ChevronDown className="size-6 animate-bounce" />
      </motion.a>
    </section>
  )
}

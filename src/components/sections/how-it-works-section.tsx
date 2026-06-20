"use client"

import { motion } from "framer-motion"
import { Cpu, FileCheck, UploadCloud, type LucideIcon } from "lucide-react"

import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { type Dictionary } from "@/i18n/dictionaries"
import {
  fadeUpItemVariants,
  scrollViewport,
  staggerContainerVariants,
} from "@/lib/motion"

type HowItWorksSectionProps = {
  dict: Dictionary["howItWorks"]
}

const iconMap: Record<string, LucideIcon> = {
  "upload-cloud": UploadCloud,
  cpu: Cpu,
  "file-check": FileCheck,
}

export function HowItWorksSection({ dict }: HowItWorksSectionProps) {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-header overflow-hidden bg-waratha-bg py-16 sm:py-20 md:py-28"
    >
      <Container>
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <motion.div variants={fadeUpItemVariants}>
            <SectionHeading
              eyebrow={dict.eyebrow}
              title={dict.title}
              description={dict.description}
              align="center"
              className="mb-12 max-w-3xl sm:mb-16"
            />
          </motion.div>

          <motion.ol
            variants={staggerContainerVariants}
            className="relative grid list-none grid-cols-1 gap-12 p-0 lg:grid-cols-3 lg:gap-8"
          >
            <div
              aria-hidden="true"
              className="absolute top-7 bottom-7 start-7 w-px bg-waratha-primary/25 lg:hidden"
            />
            <div
              aria-hidden="true"
              className="absolute top-7 hidden h-px bg-waratha-primary/25 lg:block lg:start-[calc(16.67%)] lg:end-[calc(16.67%)]"
            />

            {dict.steps.map((step) => {
              const Icon = iconMap[step.icon]

              return (
                <motion.li
                  key={step.number}
                  variants={fadeUpItemVariants}
                  className="relative flex gap-5 ps-2 lg:flex-col lg:items-center lg:gap-0 lg:ps-0 lg:text-center"
                >
                  <div className="relative z-10 mb-0 flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-waratha-primary bg-white shadow-waratha lg:mb-5">
                    <span className="absolute -top-1 -end-1 flex size-6 items-center justify-center rounded-full bg-waratha-primary text-xs font-bold text-white">
                      {step.number}
                    </span>
                    {Icon ? (
                      <Icon
                        className="size-6 text-waratha-primary"
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>

                  <div className="pt-2 lg:pt-0">
                    <h3 className="mb-2 text-lg font-semibold text-waratha-text lg:mb-3">
                      {step.title}
                    </h3>
                    <p className="max-w-sm text-sm leading-relaxed text-waratha-muted lg:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              )
            })}
          </motion.ol>
        </motion.div>
      </Container>
    </section>
  )
}

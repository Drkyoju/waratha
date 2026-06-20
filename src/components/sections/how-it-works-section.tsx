"use client"

import { motion } from "framer-motion"
import { Cpu, FileCheck, UploadCloud, type LucideIcon } from "lucide-react"

import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { type Dictionary } from "@/i18n/dictionaries"

type HowItWorksSectionProps = {
  dict: Dictionary["howItWorks"]
}

const iconMap: Record<string, LucideIcon> = {
  "upload-cloud": UploadCloud,
  cpu: Cpu,
  "file-check": FileCheck,
}

const stepVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

function StepContent({
  step,
  index,
}: {
  step: Dictionary["howItWorks"]["steps"][number]
  index: number
}) {
  const Icon = iconMap[step.icon]

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stepVariants}
      className="relative flex flex-col items-center text-center lg:items-start lg:text-start"
    >
      <div className="relative z-10 mb-5 flex size-14 items-center justify-center rounded-full border-2 border-waratha-primary bg-white shadow-waratha">
        <span className="absolute -top-1 -end-1 flex size-6 items-center justify-center rounded-full bg-waratha-primary text-xs font-bold text-white">
          {step.number}
        </span>
        {Icon ? (
          <Icon className="size-6 text-waratha-primary" aria-hidden="true" />
        ) : null}
      </div>

      <h3 className="mb-3 text-lg font-semibold text-waratha-text">{step.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-waratha-muted">
        {step.description}
      </p>
    </motion.div>
  )
}

export function HowItWorksSection({ dict }: HowItWorksSectionProps) {
  return (
    <section
      id="how-it-works"
      className="overflow-hidden bg-waratha-bg py-16 sm:py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={dict.title}
          description={dict.description}
          align="center"
          className="mb-12 max-w-3xl sm:mb-16"
        />

        {/* Mobile: vertical stepper */}
        <div className="relative lg:hidden">
          <div
            aria-hidden="true"
            className="absolute top-7 bottom-7 start-7 w-px bg-waratha-primary/25"
          />
          <div className="space-y-12">
            {dict.steps.map((step, index) => {
              const Icon = iconMap[step.icon]

              return (
                <motion.div
                  key={step.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={stepVariants}
                  className="relative flex gap-5 ps-2"
                >
                  <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-waratha-primary bg-white shadow-waratha">
                    <span className="absolute -top-1 -end-1 flex size-6 items-center justify-center rounded-full bg-waratha-primary text-xs font-bold text-white">
                      {step.number}
                    </span>
                    {Icon ? (
                      <Icon className="size-6 text-waratha-primary" aria-hidden="true" />
                    ) : null}
                  </div>
                  <div className="pt-2">
                    <h3 className="mb-2 text-lg font-semibold text-waratha-text">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-waratha-muted">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="relative hidden lg:block">
          <div
            aria-hidden="true"
            className="absolute top-7 start-[calc(16.67%)] end-[calc(16.67%)] h-px bg-waratha-primary/25"
          />
          <div className="grid grid-cols-3 gap-8">
            {dict.steps.map((step, index) => (
              <StepContent key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

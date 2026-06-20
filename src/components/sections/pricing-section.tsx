"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

import { Container } from "@/components/layout/container"
import { useRequestAccess } from "@/components/providers/request-access-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type Dictionary } from "@/i18n/dictionaries"
import { cn } from "@/lib/utils"

type PricingSectionProps = {
  dict: Dictionary["pricing"]
}

export function PricingSection({ dict }: PricingSectionProps) {
  const { openRequestAccess } = useRequestAccess()

  return (
    <section className="bg-waratha-secondary py-20 text-white md:py-28">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wide text-waratha-accent uppercase">
            {dict.eyebrow}
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-white/70">{dict.description}</p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {dict.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card
                className={cn(
                  "relative flex h-full flex-col border-white/10 bg-white/5 text-white backdrop-blur-sm",
                  plan.highlighted &&
                    "border-waratha-accent/50 bg-white/10 shadow-lg shadow-waratha-accent/10"
                )}
              >
                {plan.highlighted ? (
                  <Badge className="absolute -top-3 start-1/2 -translate-x-1/2 bg-waratha-accent text-waratha-secondary hover:bg-waratha-accent">
                    {dict.popularBadge}
                  </Badge>
                ) : null}

                <CardHeader className="space-y-3 pb-4 text-center">
                  <CardTitle className="text-lg font-medium text-white/80">
                    {plan.name}
                  </CardTitle>
                  <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {plan.price}
                  </p>
                  <p className="text-sm text-white/65">{plan.subtitle}</p>
                </CardHeader>

                <CardContent className="flex-1 space-y-3 px-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-waratha-accent"
                          aria-hidden="true"
                        />
                        <span className="text-white/85">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-4">
                  <Button
                    className={cn(
                      "w-full",
                      plan.highlighted
                        ? "bg-waratha-accent text-waratha-secondary hover:bg-waratha-accent/90"
                        : "bg-white/10 text-white hover:bg-white/20"
                    )}
                    variant={plan.highlighted ? "default" : "secondary"}
                    onClick={openRequestAccess}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

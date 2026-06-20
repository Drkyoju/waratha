import { cn } from "@/lib/utils"

type SectionProps = React.ComponentProps<"section"> & {
  variant?: "default" | "muted" | "hero"
}

const variantClasses = {
  default: "bg-background",
  muted: "bg-muted/40",
  hero: "hero-grain bg-background",
}

export function Section({
  className,
  variant = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-16 md:py-24", variantClasses[variant], className)}
      {...props}
    />
  )
}

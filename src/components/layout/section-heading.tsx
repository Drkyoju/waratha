import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "start" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl space-y-4",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "inline-flex w-fit items-center rounded-full border border-waratha-accent/30 bg-waratha-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-waratha-accent uppercase",
            align === "center" && "mx-auto"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="type-h2 font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {description ? (
        <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}

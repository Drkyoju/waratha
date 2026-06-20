import { type Locale } from "@/i18n/config"
import { cn } from "@/lib/utils"

function WarathaLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <path
        d="M9 2 C6.5 5.5, 6.5 9.5, 9 13 C11.5 16.5, 11.5 20.5, 9 24 C7 26.5, 7 27, 9 27"
        stroke="#0D5C40"
        strokeWidth="1.75"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M19 2 C21.5 5.5, 21.5 9.5, 19 13 C16.5 16.5, 16.5 20.5, 19 24 C21 26.5, 21 27, 19 27"
        stroke="#C8973A"
        strokeWidth="1.75"
        strokeLinecap="round"
        fill="none"
      />
      <line x1="9.5" y1="5" x2="18.5" y2="5" stroke="#E8EDE6" strokeWidth="1.25" strokeLinecap="round" />
      <line x1="7.5" y1="10" x2="20.5" y2="10" stroke="#D5DDD0" strokeWidth="1.25" strokeLinecap="round" />
      <line x1="9.5" y1="14" x2="18.5" y2="14" stroke="#E8EDE6" strokeWidth="1.25" strokeLinecap="round" />
      <line x1="7.5" y1="18" x2="20.5" y2="18" stroke="#D5DDD0" strokeWidth="1.25" strokeLinecap="round" />
      <line x1="9.5" y1="23" x2="18.5" y2="23" stroke="#E8EDE6" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}

type WarathaLogoProps = {
  locale: Locale
  className?: string
  wordmarkClassName?: string
}

export function WarathaLogo({
  locale,
  className,
  wordmarkClassName,
}: WarathaLogoProps) {
  const wordmark = locale === "ar" ? "وراثة" : "Waratha"

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <WarathaLogoIcon />
      <span
        className={cn(
          "text-lg font-bold tracking-tight",
          locale === "ar" ? "font-arabic" : "font-english",
          wordmarkClassName
        )}
      >
        {wordmark}
      </span>
    </span>
  )
}

export { WarathaLogoIcon }

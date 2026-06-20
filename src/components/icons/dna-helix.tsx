import { cn } from "@/lib/utils"

type DnaHelixIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number
}

export function DnaHelixIcon({
  className,
  size = 20,
  ...props
}: DnaHelixIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...props}
    >
      <path
        d="M7 3C9.5 3 11 5.5 11 8C11 10.5 9.5 13 7 13C4.5 13 3 10.5 3 8C3 5.5 4.5 3 7 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17 11C19.5 11 21 13.5 21 16C21 18.5 19.5 21 17 21C14.5 21 13 18.5 13 16C13 13.5 14.5 11 17 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 5L15 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15 5L9 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 8H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M7 16H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}

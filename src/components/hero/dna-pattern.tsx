export function DnaPattern() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.14]"
    >
      <svg
        className="dna-pattern absolute -inset-1/4 h-[150%] w-[150%]"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="dna-strand"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M20 10 C40 30, 80 30, 100 10"
              stroke="#C8973A"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M20 110 C40 90, 80 90, 100 110"
              stroke="#1A8A5E"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />
            <line
              x1="30"
              y1="25"
              x2="90"
              y2="95"
              stroke="#ffffff"
              strokeWidth="0.75"
              opacity="0.25"
            />
            <line
              x1="90"
              y1="25"
              x2="30"
              y2="95"
              stroke="#ffffff"
              strokeWidth="0.75"
              opacity="0.25"
            />
            <circle cx="30" cy="25" r="3" fill="#C8973A" opacity="0.8" />
            <circle cx="90" cy="25" r="3" fill="#1A8A5E" opacity="0.8" />
            <circle cx="30" cy="95" r="3" fill="#1A8A5E" opacity="0.8" />
            <circle cx="90" cy="95" r="3" fill="#C8973A" opacity="0.8" />
          </pattern>
        </defs>
        <rect width="800" height="800" fill="url(#dna-strand)" />
        <path
          className="dna-flow-path"
          d="M0 400 C200 300, 400 500, 600 400 S1000 300, 1200 400"
          stroke="#C8973A"
          strokeWidth="2"
          fill="none"
          opacity="0.35"
        />
        <path
          className="dna-flow-path-reverse"
          d="M0 480 C200 580, 400 380, 600 480 S1000 580, 1200 480"
          stroke="#1A8A5E"
          strokeWidth="2"
          fill="none"
          opacity="0.35"
        />
      </svg>
    </div>
  )
}

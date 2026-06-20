function buildSinePath(
  centerX: number,
  amplitude: number,
  wavelength: number,
  phase: number,
  height: number,
  step = 6
) {
  const points: string[] = []

  for (let y = 0; y <= height; y += step) {
    const x =
      centerX + amplitude * Math.sin((y / wavelength) * Math.PI * 2 + phase)
    points.push(`${x.toFixed(1)},${y}`)
  }

  return `M ${points.join(" L ")}`
}

function buildRungs(
  centerX: number,
  amplitude: number,
  wavelength: number,
  phase: number,
  height: number,
  spacing: number
) {
  const rungs: { x1: number; y: number; x2: number }[] = []

  for (let y = spacing; y < height; y += spacing) {
    const x1 =
      centerX + amplitude * Math.sin((y / wavelength) * Math.PI * 2 + phase)
    const x2 =
      centerX +
      amplitude * Math.sin((y / wavelength) * Math.PI * 2 + phase + Math.PI)
    rungs.push({ x1, y, x2 })
  }

  return rungs
}

type StrandConfig = {
  centerX: number
  amplitude: number
  wavelength: number
  phase: number
  color: string
  opacity: number
  animationClass: string
}

const STRANDS: StrandConfig[] = [
  {
    centerX: 120,
    amplitude: 28,
    wavelength: 140,
    phase: 0,
    color: "#ffffff",
    opacity: 0.08,
    animationClass: "hero-dna-strand-25",
  },
  {
    centerX: 320,
    amplitude: 32,
    wavelength: 160,
    phase: 0.8,
    color: "#0D5C40",
    opacity: 0.1,
    animationClass: "hero-dna-strand-30",
  },
  {
    centerX: 520,
    amplitude: 26,
    wavelength: 130,
    phase: 1.6,
    color: "#ffffff",
    opacity: 0.07,
    animationClass: "hero-dna-strand-35",
  },
  {
    centerX: 720,
    amplitude: 30,
    wavelength: 150,
    phase: 2.4,
    color: "#1A8A5E",
    opacity: 0.09,
    animationClass: "hero-dna-strand-25",
  },
]

const SVG_HEIGHT = 900

function DnaStrand({ strand }: { strand: StrandConfig }) {
  const strandA = buildSinePath(
    strand.centerX,
    strand.amplitude,
    strand.wavelength,
    strand.phase,
    SVG_HEIGHT
  )
  const strandB = buildSinePath(
    strand.centerX,
    strand.amplitude,
    strand.wavelength,
    strand.phase + Math.PI,
    SVG_HEIGHT
  )
  const rungs = buildRungs(
    strand.centerX,
    strand.amplitude,
    strand.wavelength,
    strand.phase,
    SVG_HEIGHT,
    40
  )

  return (
    <g className={strand.animationClass} opacity={strand.opacity}>
      <path
        d={strandA}
        stroke={strand.color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={strandB}
        stroke={strand.color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {rungs.map((rung) => (
        <line
          key={`${strand.centerX}-${rung.y}`}
          x1={rung.x1}
          y1={rung.y}
          x2={rung.x2}
          y2={rung.y}
          stroke={strand.color}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.65"
        />
      ))}
    </g>
  )
}

export function DnaPattern() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <svg
        className="h-[120%] w-full min-w-[900px] -translate-y-[8%]"
        viewBox="0 0 900 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {STRANDS.map((strand) => (
          <DnaStrand key={strand.centerX} strand={strand} />
        ))}
      </svg>
    </div>
  )
}

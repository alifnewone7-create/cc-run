import Image from 'next/image'

const CELLS = [
  { key: 'feed', label: 'Market feed' },
  { key: 'core', label: 'Coco AI core' },
  { key: 'models', label: 'AI models' },
  { key: 'device', label: 'Your device' },
  { key: 'ledger', label: 'Signal ledger' },
  { key: 'events', label: 'Live events' },
] as const

const LINKS = [
  'M 50 24 C 34 24 28 18 17 21',
  'M 50 24 C 66 24 72 18 83 21',
  'M 38 33 C 31 44 27 60 17 70',
  'M 50 41 C 50 52 50 60 50 70',
  'M 62 33 C 69 44 73 60 83 70',
]

export function CocoEngine() {
  return (
    <div className="coco-engine relative mx-auto w-full max-w-[940px]" data-testid="engine-diagram">
      <div className="coco-engine-panel relative overflow-hidden rounded-[28px] px-4 py-6 sm:px-8 sm:py-9">
        <div className="relative z-10 mb-6 flex items-center justify-between">
          <span className="coco-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
            coco-engine · system map
          </span>
          <span className="flex items-center gap-1.5">
            <span className="coco-pulse h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
            <span className="coco-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
              syncing
            </span>
          </span>
        </div>

        <div className="relative">
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="cocoWire" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8fb2ff" stopOpacity="0" />
                <stop offset="50%" stopColor="#e4edff" stopOpacity="1" />
                <stop offset="100%" stopColor="#8fb2ff" stopOpacity="0" />
              </linearGradient>
            </defs>
            {LINKS.map((d, i) => (
              <g key={d}>
                <path
                  d={d}
                  pathLength={100}
                  fill="none"
                  stroke="rgba(255,255,255,0.16)"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  className="coco-dash"
                  d={d}
                  pathLength={100}
                  fill="none"
                  stroke="url(#cocoWire)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="16 84"
                  vectorEffect="non-scaling-stroke"
                  style={{ animationDelay: `${i * 520}ms` }}
                />
              </g>
            ))}
          </svg>

          <div className="relative grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 md:grid-cols-3 md:gap-x-12 md:gap-y-10">
            {CELLS.map((cell, i) => (
              <figure key={cell.key} className="coco-cell" style={{ '--d': `${i * 120}ms` } as React.CSSProperties}>
                <div className={`coco-frame ${cell.key === 'core' ? 'coco-frame-core' : ''}`}>
                  <span className="coco-corner coco-corner-tl" />
                  <span className="coco-corner coco-corner-tr" />
                  <span className="coco-corner coco-corner-bl" />
                  <span className="coco-corner coco-corner-br" />
                  <Visual kind={cell.key} />
                </div>
                <figcaption className="coco-mono mt-3 text-center text-[10px] uppercase tracking-[0.12em] text-white/55">
                  {cell.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Visual({ kind }: { kind: (typeof CELLS)[number]['key'] }) {
  if (kind === 'core') {
    return (
      <div className="relative grid h-full w-full place-items-center">
        <span className="coco-core-ring" aria-hidden="true" />
        <span className="coco-core-glow" aria-hidden="true" />
        <Image
          src="/coco-ai.jpg"
          alt="Coco AI"
          width={54}
          height={54}
          className="relative z-10 rounded-2xl ring-1 ring-white/25"
        />
        <span className="coco-core-lights" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </div>
    )
  }

  if (kind === 'feed') {
    return (
      <div className="flex h-full items-end justify-center gap-1.5 px-4 pb-5">
        {[0.35, 0.6, 0.45, 0.9, 0.55, 0.75, 0.4].map((h, i) => (
          <span
            key={i}
            className="coco-bar w-1.5 rounded-sm bg-[linear-gradient(180deg,#a9c4ff,rgba(169,196,255,0.15))]"
            style={{ height: `${h * 100}%`, animationDelay: `${i * 130}ms` }}
          />
        ))}
      </div>
    )
  }

  if (kind === 'models') {
    return (
      <div className="relative grid h-full w-full place-items-center">
        <span className="coco-radar" aria-hidden="true" />
        <span className="coco-radar-ring" style={{ inset: '22%' }} aria-hidden="true" />
        <span className="coco-radar-ring" style={{ inset: '36%' }} aria-hidden="true" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#e4edff]" />
      </div>
    )
  }

  if (kind === 'device') {
    return (
      <div className="flex h-full flex-col justify-center gap-2 px-5">
        {[0, 1].map((row) => (
          <div key={row} className="flex gap-1">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className="coco-seg h-2 flex-1 rounded-[3px]"
                style={{ animationDelay: `${row * 700 + i * 110}ms` }}
              />
            ))}
          </div>
        ))}
        <span className="coco-seg-btn mt-1 h-3.5 rounded-[4px]" />
      </div>
    )
  }

  if (kind === 'ledger') {
    return (
      <div className="flex h-full items-end justify-center gap-1 px-4 pb-5">
        {[0.5, 0.8, 0.4, 0.35, 0.2, 0.75, 0.62, 0.55, 0.3].map((h, i) => (
          <span
            key={i}
            className="coco-bar w-1 rounded-sm bg-white/45"
            style={{ height: `${h * 100}%`, animationDelay: `${i * 90}ms` }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="relative grid h-full w-full place-items-center">
      <span className="coco-spin" aria-hidden="true" />
      <span className="coco-pulse h-2 w-2 rounded-full bg-[#8fb2ff]" />
    </div>
  )
}

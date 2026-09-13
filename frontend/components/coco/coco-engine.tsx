const CELLS = [
  { key: 'feed', label: 'Market feed' },
  { key: 'core', label: 'Coco AI core' },
  { key: 'models', label: 'AI models' },
  { key: 'device', label: 'Your device' },
  { key: 'ledger', label: 'Signal ledger' },
  { key: 'events', label: 'Live events' },
] as const

// chained loop: feed -> core -> models -> events -> ledger -> device -> feed, plus core -> ledger
const LINKS = [
  'M 25 21 C 33 16 40 16 44 21',
  'M 56 21 C 62 16 69 16 76 21',
  'M 89 30 C 94 42 94 54 89 62',
  'M 76 70 C 69 75 62 75 56 70',
  'M 44 70 C 38 75 31 75 25 70',
  'M 11 62 C 6 50 6 38 11 30',
  'M 50 41 C 50 52 50 58 50 62',
]

export function CocoEngine() {
  return (
    <div className="coco-engine relative mx-auto w-full max-w-[940px]" data-testid="engine-diagram">
      <div className="coco-engine-panel relative overflow-hidden rounded-[28px] px-4 py-6 sm:px-8 sm:py-9">
        <span className="coco-pcb" aria-hidden="true" />

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
                <stop offset="50%" stopColor="#e8f0ff" stopOpacity="1" />
                <stop offset="100%" stopColor="#8fb2ff" stopOpacity="0" />
              </linearGradient>
            </defs>
            {LINKS.map((d, i) => (
              <g key={d}>
                <path
                  d={d}
                  pathLength={100}
                  fill="none"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  className="coco-dash"
                  d={d}
                  pathLength={100}
                  fill="none"
                  stroke="url(#cocoWire)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeDasharray="18 82"
                  vectorEffect="non-scaling-stroke"
                  style={{ animationDelay: `${i * 420}ms` }}
                />
              </g>
            ))}
          </svg>

          <span className="coco-vline md:hidden" aria-hidden="true" />

          <div className="relative grid grid-cols-2 gap-x-5 gap-y-7 sm:gap-x-10 md:grid-cols-3 md:gap-x-14 md:gap-y-12">
            {CELLS.map((cell, i) => (
              <figure
                key={cell.key}
                className="coco-cell flex flex-col items-center"
                style={{ '--d': `${i * 120}ms` } as React.CSSProperties}
              >
                <div className={`coco-chip ${cell.key === 'core' ? 'coco-chip-core' : ''}`}>
                  <span className="coco-pins coco-pins-l" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="coco-pins coco-pins-r" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="coco-notch" aria-hidden="true" />
                  <Glyph kind={cell.key} />
                </div>
                <figcaption className="coco-tag">{cell.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Glyph({ kind }: { kind: (typeof CELLS)[number]['key'] }) {
  if (kind === 'core') {
    return (
      <div className="relative grid h-full w-full place-items-center">
        <span className="coco-core-ring" aria-hidden="true" />
        <span className="coco-core-glow" aria-hidden="true" />
        <svg viewBox="0 0 48 48" className="coco-glyph coco-glyph-core" aria-hidden="true">
          <rect
            x="12"
            y="12"
            width="24"
            height="24"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.6"
            fill="none"
          />
          <path
            d="M24 17 L29.5 24 L24 31 L18.5 24 Z"
            fill="currentColor"
            className="coco-core-diamond"
          />
          <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" strokeLinecap="round">
            <path d="M18 12 V7 M24 12 V6 M30 12 V7 M18 36 V41 M24 36 V42 M30 36 V41" />
            <path d="M12 18 H7 M12 24 H6 M12 30 H7 M36 18 H41 M36 24 H42 M36 30 H41" />
          </g>
        </svg>
      </div>
    )
  }

  if (kind === 'feed') {
    return (
      <svg viewBox="0 0 64 48" className="coco-glyph" aria-hidden="true">
        <path d="M2 44 H62" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1" />
        {[
          { x: 10, y: 26, h: 12 },
          { x: 22, y: 16, h: 20 },
          { x: 34, y: 22, h: 15 },
          { x: 46, y: 10, h: 26 },
        ].map((c, i) => (
          <g key={c.x} className="coco-candle" style={{ animationDelay: `${i * 180}ms` }}>
            <line
              x1={c.x + 3}
              x2={c.x + 3}
              y1={c.y - 5}
              y2={c.y + c.h + 4}
              stroke="currentColor"
              strokeWidth="1.2"
              strokeOpacity="0.5"
            />
            <rect x={c.x} y={c.y} width="6" height={c.h} rx="1.5" fill="currentColor" />
          </g>
        ))}
      </svg>
    )
  }

  if (kind === 'models') {
    return (
      <svg viewBox="0 0 64 48" className="coco-glyph" aria-hidden="true">
        <g stroke="currentColor" strokeOpacity="0.3" strokeWidth="1">
          <path d="M32 10 L14 20 M32 10 L50 20 M14 20 L32 38 M50 20 L32 38 M14 20 L50 20 M32 10 L32 38" />
        </g>
        {[
          [32, 10],
          [14, 20],
          [50, 20],
          [32, 38],
        ].map(([cx, cy], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="3.4"
            fill="currentColor"
            className="coco-node-dot"
            style={{ animationDelay: `${i * 260}ms` }}
          />
        ))}
      </svg>
    )
  }

  if (kind === 'device') {
    return (
      <svg viewBox="0 0 64 48" className="coco-glyph" aria-hidden="true">
        <rect
          x="6"
          y="6"
          width="52"
          height="36"
          rx="4"
          stroke="currentColor"
          strokeOpacity="0.3"
          fill="none"
        />
        <circle cx="13" cy="14" r="1.6" fill="currentColor" fillOpacity="0.7" />
        <circle cx="13" cy="22" r="1.6" fill="currentColor" fillOpacity="0.7" />
        {[0, 1].map((row) => (
          <g key={row}>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect
                key={i}
                x={20 + i * 6}
                y={12 + row * 8}
                width="4"
                height="4"
                rx="1"
                fill="currentColor"
                className="coco-seg-dot"
                style={{ animationDelay: `${row * 600 + i * 110}ms` }}
              />
            ))}
          </g>
        ))}
        <rect x="13" y="31" width="38" height="6" rx="3" fill="currentColor" className="coco-seg-bar" />
      </svg>
    )
  }

  if (kind === 'ledger') {
    return (
      <svg viewBox="0 0 64 48" className="coco-glyph" aria-hidden="true">
        <path d="M8 42 H56" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1" />
        {[16, 26, 12, 32, 20, 36, 24].map((h, i) => (
          <rect
            key={i}
            x={10 + i * 6.6}
            y={40 - h}
            width="3.4"
            height={h}
            rx="1.2"
            fill="currentColor"
            className="coco-ledger-bar"
            style={{ animationDelay: `${i * 120}ms`, transformOrigin: `center ${40}px` }}
          />
        ))}
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 64 48" className="coco-glyph" aria-hidden="true">
      <rect
        x="12"
        y="14"
        width="40"
        height="20"
        rx="10"
        stroke="currentColor"
        strokeOpacity="0.35"
        fill="none"
      />
      <rect
        x="12"
        y="14"
        width="40"
        height="20"
        rx="10"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray="22 78"
        className="coco-orbit-dash"
      />
      <circle cx="32" cy="24" r="3" fill="currentColor" className="coco-node-dot" />
    </svg>
  )
}

import { Radio, Waves, BrainCircuit, ShieldHalf, Send } from 'lucide-react'

const LEFT_NODES = [
  { icon: Radio, label: 'Market feed', meta: '42 pairs' },
  { icon: Waves, label: 'Volatility map', meta: '1m · 5m · 15m' },
]

const RIGHT_NODES = [
  { icon: ShieldHalf, label: 'Risk filter', meta: 'confluence 3/3' },
  { icon: Send, label: 'Signal out', meta: 'BUY · 96.4%' },
]

export function CocoEngine() {
  return (
    <div className="coco-engine relative mx-auto w-full max-w-[880px]" data-testid="engine-diagram">
      <div className="coco-engine-panel relative overflow-hidden rounded-[26px] p-5 sm:p-8">
        <div className="relative z-10 flex items-center justify-between">
          <span className="coco-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
            coco-engine · pipeline
          </span>
          <span className="flex items-center gap-1.5">
            <span className="coco-pulse h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
            <span className="coco-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
              running
            </span>
          </span>
        </div>

        {/* Nodes + connectors */}
        <div className="relative z-10 mt-6">
          {/* Mobile vertical connector */}
          <span className="coco-vline md:hidden" aria-hidden="true" />

          <div className="relative grid items-center gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-10">
            <div className="flex flex-col gap-4">
              {LEFT_NODES.map((n, i) => (
                <Node key={n.label} {...n} delay={i * 300} />
              ))}
            </div>

            <EngineCore />

            <div className="flex flex-col gap-4">
              {RIGHT_NODES.map((n, i) => (
                <Node key={n.label} {...n} delay={600 + i * 300} align="right" />
              ))}
            </div>
          </div>
        </div>

        {/* Cycle progress */}
        <div className="relative z-10 mt-7">
          <div className="flex items-center justify-between">
            <span className="coco-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
              scan cycle
            </span>
            <span className="coco-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
              verdict ready
            </span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="coco-fill h-full rounded-full bg-[linear-gradient(90deg,#3f6bff,#9db8ff)]" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Node({
  icon: Icon,
  label,
  meta,
  delay,
  align = 'left',
}: {
  icon: React.ElementType
  label: string
  meta: string
  delay: number
  align?: 'left' | 'right'
}) {
  return (
    <div
      className={`coco-node relative flex items-center gap-3 rounded-2xl p-3.5 ${
        align === 'right' ? 'md:flex-row-reverse md:text-right' : ''
      }`}
    >
      <span
        className={align === 'right' ? 'coco-link coco-link-in' : 'coco-link coco-link-out'}
        aria-hidden="true"
      >
        <span className="coco-link-pulse" style={{ animationDelay: `${delay}ms` }} />
      </span>
      <span className="coco-node-icon">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="truncate text-[13px] font-semibold text-white">{label}</p>
        <p className="coco-mono truncate text-[10px] uppercase tracking-[0.1em] text-white/45">
          {meta}
        </p>
      </div>
      <span
        className={`coco-node-track ml-auto ${align === 'right' ? 'md:ml-0 md:mr-auto' : ''}`}
        aria-hidden="true"
      >
        <span className="coco-node-fill" style={{ animationDelay: `${delay}ms` }} />
      </span>
    </div>
  )
}

function EngineCore() {
  return (
    <div className="relative mx-auto grid h-[168px] w-[168px] place-items-center">
      <div className="coco-core relative grid h-[132px] w-[132px] place-items-center rounded-[22px]">
        <span className="coco-core-ring" aria-hidden="true" />
        <BrainCircuit className="h-7 w-7 text-[#bcd4ff]" />
        <p className="coco-mono mt-2 text-[9px] uppercase tracking-[0.16em] text-white/55">
          ai core
        </p>
        <div className="mt-3 flex h-6 items-end gap-1">
          {[0.45, 0.85, 0.6, 1, 0.5, 0.75].map((h, i) => (
            <span
              key={i}
              className="coco-bar w-1 rounded-sm bg-[linear-gradient(180deg,#9db8ff,rgba(157,184,255,0.2))]"
              style={{ height: `${h * 100}%`, animationDelay: `${i * 110}ms` }}
            />
          ))}
        </div>
        <span className="coco-core-lights" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </div>
    </div>
  )
}

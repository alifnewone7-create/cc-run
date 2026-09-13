import {
  ChartCandlestick,
  SlidersHorizontal,
  RadioTower,
  CalendarClock,
  BrainCircuit,
  ShieldHalf,
  Cpu,
} from 'lucide-react'

const FEATURES = [
  {
    icon: ChartCandlestick,
    title: 'Deep chart reading',
    desc: 'Structure, momentum and volume decoded across OTC and real pairs to surface only high probability setups.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Instant trade control',
    desc: 'Open, monitor and adjust live positions from a single compact console built for speed.',
  },
  {
    icon: RadioTower,
    title: 'Live 24/7 signals',
    desc: 'The engine broadcasts the moment an opportunity forms, so a sleeping chart never costs you a move.',
  },
  {
    icon: CalendarClock,
    title: 'Forward signals',
    desc: 'Scheduled, forward looking calls timed to upcoming sessions and trend shifts before they print.',
  },
  {
    icon: BrainCircuit,
    title: 'Model verified accuracy',
    desc: 'Multiple proprietary models must agree before a verdict is released, cutting noise from the feed.',
  },
  {
    icon: ShieldHalf,
    title: 'Capital guardrails',
    desc: 'Confidence scoring and position sizing hints keep your balance protected on every entry.',
  },
]

export function CocoFeatures() {
  return (
    <section id="features" className="coco-light scroll-mt-24 border-t border-[var(--hairline)]">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <span className="coco-eyebrow">
            <Cpu className="h-3 w-3" />
            Engine capabilities
          </span>
          <h2 className="coco-display coco-title-gradient mt-5 text-[2rem] sm:text-[2.6rem] lg:text-[3rem]">
            A full trading desk,
            <br />
            compressed into one engine.
          </h2>
          <p className="coco-muted mt-4 text-sm sm:text-base">
            Six systems running in parallel. Each one handles a job a trading desk would normally
            hire a person for.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="coco-card p-6"
              data-testid={`feature-card-${f.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <span className="coco-icon">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="coco-sub mt-5 text-[19px]">{f.title}</h3>
              <p className="coco-muted mt-2 text-sm leading-relaxed">{f.desc}</p>
            </article>
          ))}
        </div>

        {/* Gradient stat band */}
        <div
          className="coco-pastel mt-6 grid gap-8 rounded-[32px] p-8 sm:grid-cols-3 sm:p-10"
          data-testid="stat-band"
        >
          {[
            { k: 'signal accuracy', v: '96.4%' },
            { k: 'pairs monitored', v: '42' },
            { k: 'engine uptime', v: '24 / 7' },
          ].map((s) => (
            <div key={s.k}>
              <p className="coco-mono text-[10px] uppercase text-[var(--dim)]">{s.k}</p>
              <p className="coco-display mt-2 bg-[linear-gradient(140deg,#0036ff,#6d3bff)] bg-clip-text text-[2.4rem] text-transparent">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

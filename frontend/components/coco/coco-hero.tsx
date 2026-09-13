import Link from 'next/link'
import { ArrowRight, Radar, Activity, ShieldHalf, Timer, ChartCandlestick } from 'lucide-react'

const STATS = [
  {
    icon: Activity,
    title: 'Real time scan',
    desc: 'Every tick read as it prints',
  },
  {
    icon: ShieldHalf,
    title: 'Risk aware',
    desc: 'Confidence scored entries',
  },
  {
    icon: Timer,
    title: 'Always awake',
    desc: 'Signals around the clock',
  },
]

const TERMINAL_LINES = [
  { p: 'coco@engine', c: 'scan --pairs 42 --tf 1m' },
  { p: 'engine', c: 'momentum grid built . volatility mapped' },
  { p: 'engine', c: 'confluence 3/3 . liquidity clean' },
]

export function CocoHero() {
  return (
    <section id="about" className="coco-dark relative overflow-hidden scroll-mt-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <span className="coco-eyebrow coco-rise" style={{ '--d': '40ms' } as React.CSSProperties}>
            <Radar className="coco-orbit h-3 w-3" />
            Autonomous market engine
          </span>

          <h1
            className="coco-display coco-rise mt-6 max-w-[16ch] text-balance text-[2.6rem] text-white sm:text-[3.4rem] lg:text-[4.1rem]"
            style={{ '--d': '110ms' } as React.CSSProperties}
            data-testid="hero-heading"
          >
            The market never sleeps. Neither does{' '}
            <span className="coco-accent">Coco AI</span>.
          </h1>

          <p
            className="coco-rise mt-6 max-w-xl text-sm leading-relaxed text-white/64 sm:text-base"
            style={{ '--d': '180ms' } as React.CSSProperties}
          >
            Coco AI is an autonomous trading engine. It reads price action, volume and momentum
            across OTC and real pairs, then hands you a clean, data driven call. No guesswork, no
            emotion, no missed windows.
          </p>

          <div
            className="coco-rise mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ '--d': '250ms' } as React.CSSProperties}
          >
            <Link href="/login" className="coco-btn coco-btn-primary" data-testid="hero-cta-primary">
              Launch Coco AI
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#pricing" className="coco-btn coco-btn-ghost" data-testid="hero-cta-secondary">
              <ChartCandlestick className="h-4 w-4" />
              See access plans
            </a>
          </div>

          <div
            className="coco-rise mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-0"
            style={{ '--d': '320ms' } as React.CSSProperties}
          >
            {STATS.map((s, i) => (
              <div
                key={s.title}
                className={`flex items-start gap-3 sm:px-5 ${i > 0 ? 'sm:border-l sm:border-white/10' : 'sm:pl-0'}`}
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-white/6 text-[#7fb6ff]">
                  <s.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{s.title}</p>
                  <p className="text-[13px] leading-snug text-white/55">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal + signal mockup */}
        <div
          className="coco-rise relative"
          style={{ '--d': '380ms' } as React.CSSProperties}
          data-testid="hero-mockup"
        >
          <div className="coco-window relative">
            <div className="coco-sweep z-10" aria-hidden="true" />
            <div className="coco-window-bar">
              <span className="coco-dot" style={{ background: '#ff5f57' }} />
              <span className="coco-dot" style={{ background: '#febc20' }} />
              <span className="coco-dot" style={{ background: '#28c840' }} />
              <span className="coco-mono ml-2 text-[11px] text-white/50">coco-engine — live</span>
              <span className="ml-auto flex items-center gap-1.5">
                <span className="coco-pulse h-1.5 w-1.5 rounded-full bg-[#28c840]" />
                <span className="coco-mono text-[10px] uppercase text-white/45">online</span>
              </span>
            </div>

            <div className="coco-window-body">
              <div className="coco-mono space-y-2 text-[11.5px] leading-relaxed sm:text-xs">
                {TERMINAL_LINES.map((l) => (
                  <p key={l.c} className="text-white/70">
                    <span className="text-[#7f8cff]">{l.p}</span>
                    <span className="text-white/30"> $ </span>
                    {l.c}
                  </p>
                ))}
                <p className="text-white/70">
                  <span className="text-[#7f8cff]">engine</span>
                  <span className="text-white/30"> $ </span>
                  verdict ready
                  <span className="coco-ticker text-[#0093ff]">▊</span>
                </p>
              </div>

              {/* signal readout */}
              <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="coco-mono text-[10px] uppercase tracking-[0.12em] text-white/45">
                      EUR / USD · 1M
                    </p>
                    <p className="coco-sub mt-1 text-2xl text-white">BUY</p>
                  </div>
                  <div className="text-right">
                    <p className="coco-mono text-[10px] uppercase tracking-[0.12em] text-white/45">
                      confidence
                    </p>
                    <p className="coco-sub mt-1 text-2xl text-[#28c840]">96.4%</p>
                  </div>
                </div>

                <div className="mt-4 flex h-14 items-end gap-1.5">
                  {[0.4, 0.7, 0.35, 0.9, 0.55, 1, 0.62, 0.82, 0.45, 0.95, 0.6, 0.75].map((h, i) => (
                    <span
                      key={i}
                      className="coco-bar flex-1 rounded-sm"
                      style={{
                        height: `${h * 100}%`,
                        animationDelay: `${i * 90}ms`,
                        background:
                          i % 3 === 0
                            ? 'linear-gradient(180deg,#0093ff,rgba(0,147,255,0.25))'
                            : 'linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,255,255,0.08))',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(0,147,255,0.28),transparent)] blur-2xl" />
        </div>
      </div>
    </section>
  )
}

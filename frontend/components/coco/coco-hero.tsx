import Link from 'next/link'
import { ArrowRight, Radar, Activity, ShieldHalf, Timer, ChartCandlestick } from 'lucide-react'

const STATS = [
  { icon: Activity, title: 'Real time scan', desc: 'Every tick read as it prints' },
  { icon: ShieldHalf, title: 'Risk aware', desc: 'Confidence scored entries' },
  { icon: Timer, title: 'Always awake', desc: 'Signals around the clock' },
]

const TERMINAL_LINES = [
  { p: 'coco@engine', c: 'scan --pairs 42 --tf 1m' },
  { p: 'engine', c: 'momentum grid built . volatility mapped' },
  { p: 'engine', c: 'confluence 3/3 . liquidity clean' },
]

export function CocoHero() {
  return (
    <section id="about" className="relative overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-[1000px] px-4 pb-20 pt-14 text-center sm:px-6 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
        <span className="coco-eyebrow coco-rise" style={{ '--d': '40ms' } as React.CSSProperties}>
          <Radar className="coco-orbit h-3 w-3" />
          Autonomous market engine
        </span>

        <h1
          className="coco-display coco-title-gradient coco-rise mx-auto mt-7 max-w-[18ch] text-balance text-[2.5rem] sm:text-[3.4rem] lg:text-[4.2rem]"
          style={{ '--d': '110ms' } as React.CSSProperties}
          data-testid="hero-heading"
        >
          The market never sleeps. Neither does{' '}
          <span className="coco-accent-gradient">Coco AI</span>.
        </h1>

        <p
          className="coco-rise mx-auto mt-6 max-w-[54ch] text-pretty text-sm leading-relaxed text-white/64 sm:text-base"
          style={{ '--d': '180ms' } as React.CSSProperties}
        >
          Coco AI reads price action, volume and momentum across OTC and real pairs, then hands you
          a clean, data driven call. No guesswork, no emotion, no missed windows.
        </p>

        <div
          className="coco-rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ '--d': '250ms' } as React.CSSProperties}
        >
          <Link
            href="/login"
            className="coco-btn coco-btn-primary w-full sm:w-auto"
            data-testid="hero-cta-primary"
          >
            Launch Coco AI
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#pricing"
            className="coco-btn coco-btn-ghost w-full sm:w-auto"
            data-testid="hero-cta-secondary"
          >
            <ChartCandlestick className="h-4 w-4" />
            See access plans
          </a>
        </div>

        {/* Terminal + signal mockup */}
        <div
          className="coco-rise relative mx-auto mt-14 max-w-[720px]"
          style={{ '--d': '330ms' } as React.CSSProperties}
          data-testid="hero-mockup"
        >
          <div className="coco-window relative text-left">
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
                    <span className="text-[#8ea2ff]">{l.p}</span>
                    <span className="text-white/30"> $ </span>
                    {l.c}
                  </p>
                ))}
                <p className="text-white/70">
                  <span className="text-[#8ea2ff]">engine</span>
                  <span className="text-white/30"> $ </span>
                  verdict ready
                  <span className="coco-ticker text-[#69a8ff]">▊</span>
                </p>
              </div>

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
                    <p className="coco-sub mt-1 text-2xl text-[#4ade80]">96.4%</p>
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
                            ? 'linear-gradient(180deg,#6ea8ff,rgba(110,168,255,0.22))'
                            : 'linear-gradient(180deg,rgba(255,255,255,0.46),rgba(255,255,255,0.07))',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-[radial-gradient(closest-side,rgba(90,140,255,0.32),transparent)] blur-2xl" />
        </div>

        <div
          className="coco-rise mx-auto mt-14 grid max-w-[860px] grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3 sm:gap-0"
          style={{ '--d': '400ms' } as React.CSSProperties}
        >
          {STATS.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col items-center gap-2 px-6 ${
                i > 0 ? 'sm:border-l sm:border-white/10' : ''
              }`}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] text-[#9db8ff]">
                <s.icon className="h-4 w-4" />
              </span>
              <p className="mt-1 text-sm font-semibold text-white">{s.title}</p>
              <p className="text-[13px] leading-snug text-white/55">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

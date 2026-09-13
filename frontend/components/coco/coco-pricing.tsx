import {
  UserRoundPlus,
  CircleDollarSign,
  BadgeCheck,
  KeyRound,
  Headset,
  Layers,
  Check,
  ArrowRight,
} from 'lucide-react'

const FREE_STEPS = [
  {
    icon: UserRoundPlus,
    title: 'Create account',
    desc: 'Register your trading account through our exclusive partner link.',
  },
  {
    icon: CircleDollarSign,
    title: 'Fund balance',
    desc: 'A minimum of $50 in trading capital activates your access.',
  },
  {
    icon: BadgeCheck,
    title: 'Verify UID',
    desc: 'Send your UID to the support desk for instant verification.',
  },
]

const LICENSE_PERKS = [
  'Skip broker registration entirely',
  'Direct, unrestricted engine access',
  'One month full license, instant activation',
  'Priority support channel included',
]

export function CocoPricing() {
  return (
    <section id="pricing" className="coco-light scroll-mt-24 border-t border-[var(--hairline)]">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <span className="coco-eyebrow">
            <Layers className="h-3 w-3" />
            Access paths
          </span>
          <h2 className="coco-display mt-5 text-[2rem] sm:text-[2.6rem] lg:text-[3rem]">
            Two ways in.
            <br />
            Same engine.
          </h2>
          <p className="coco-muted mt-4 text-sm sm:text-base">
            Earn free access through our partner broker, or take a direct license and skip the setup
            completely.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* Free access */}
          <div className="coco-card p-6 sm:p-8" data-testid="pricing-free">
            <div className="flex items-center justify-between gap-4">
              <h3 className="coco-sub text-2xl">Partner access</h3>
              <span className="coco-mono rounded-full border border-[#b9f3dd] bg-[#e6fff7] px-3 py-1 text-[10px] uppercase text-[#0f7a5a]">
                $0
              </span>
            </div>
            <p className="coco-muted mt-2 text-sm">
              Three steps and the engine unlocks at no cost.
            </p>

            <ol className="mt-7 flex flex-col">
              {FREE_STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-4 border-t border-[var(--hairline)] py-4 first:border-t-0 first:pt-0"
                >
                  <span className="coco-icon shrink-0">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="coco-mono text-[10px] uppercase tracking-[0.12em] text-[var(--dim)]">
                      Step {i + 1}
                    </p>
                    <p className="coco-sub mt-1 text-[17px]">{step.title}</p>
                    <p className="coco-muted mt-1 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://market-qx.pro/sign-up/?lid=619650"
                target="_blank"
                rel="noopener noreferrer"
                className="coco-btn coco-btn-ghost w-full sm:w-auto"
                data-testid="pricing-broker-cta"
              >
                <UserRoundPlus className="h-4 w-4" />
                Create broker account
              </a>
              <a
                href="https://t.me/Ayan_sx"
                target="_blank"
                rel="noopener noreferrer"
                className="coco-btn w-full border border-[#cfe0ff] bg-[#e1ecff] text-[var(--iris)] hover:bg-[#d3e3ff] sm:w-auto"
                data-testid="pricing-support-cta"
              >
                <Headset className="h-4 w-4" />
                Contact desk
              </a>
            </div>
          </div>

          {/* License */}
          <div
            className="coco-dark relative overflow-hidden rounded-[20px] p-6 sm:p-8"
            data-testid="pricing-license"
          >
            <div className="relative z-10 flex items-center justify-between gap-4">
              <h3 className="coco-sub text-2xl text-white">Direct license</h3>
              <span className="coco-mono rounded-full border border-white/18 bg-white/8 px-3 py-1 text-[10px] uppercase text-white/75">
                instant
              </span>
            </div>
            <p className="relative z-10 mt-2 text-sm text-white/60">
              No broker, no waiting. One month of unrestricted engine access.
            </p>

            <div className="relative z-10 mt-7 flex items-end gap-2">
              <span className="coco-display text-[3.2rem] text-white">$99</span>
              <span className="coco-mono mb-2 text-[11px] uppercase text-white/50">/ month</span>
            </div>

            <ul className="relative z-10 mt-7 flex flex-col gap-3">
              {LICENSE_PERKS.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--cyan)]/18 text-[#7fc9ff]">
                    <Check className="h-3 w-3" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>

            <a
              href="https://t.me/Ayan_sx"
              target="_blank"
              rel="noopener noreferrer"
              className="coco-btn coco-btn-primary relative z-10 mt-8 w-full"
              data-testid="pricing-license-cta"
            >
              <KeyRound className="h-4 w-4" />
              Activate license
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

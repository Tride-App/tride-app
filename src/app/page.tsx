import {
  trideHealthHref,
  trideHighlights,
  tridePrinciples,
  trideRoutes,
  trideSteps,
} from './content'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-10 lg:px-12">
        <header className="mb-10 flex items-center justify-between rounded-full border border-[var(--line)] bg-[var(--panel)] px-5 py-3 shadow-[0_12px_40px_rgba(20,38,29,0.06)] backdrop-blur">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Tride
            </p>
            <p className="text-sm text-[var(--muted)]">
              Intercity Carpooling on Stellar
            </p>
          </div>
          <nav className="hidden gap-6 text-sm text-[var(--muted)] md:flex">
            <a href="#how">How it works</a>
            <a href="#trust">Trust model</a>
            <a href="#launch">Launch corridor</a>
          </nav>
        </header>

        <section className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div className="relative rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-8 shadow-[0_24px_80px_rgba(20,38,29,0.08)] backdrop-blur md:p-10">
            <div className="mb-8 inline-flex rounded-full border border-[var(--line)] bg-white/65 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-[var(--accent-deep)]">
              Escrow-first mobility
            </div>
            <h1 className="max-w-3xl text-5xl leading-[0.95] font-semibold tracking-[-0.05em] text-[var(--foreground)] md:text-7xl">
              Intercity rides with payout rules nobody can bend.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              Tride turns empty seats into verified inventory and puts every
              booking into Stellar-based USDC escrow, so riders and drivers know
              exactly how a trip settles before it starts.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#launch"
                className="rounded-full bg-[var(--foreground)] px-6 py-3 text-center text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 !text-white"
              >
                See the MVP corridor
              </a>
              <a
                href={trideHealthHref}
                className="rounded-full border border-[var(--line)] bg-white/60 px-6 py-3 text-center text-sm font-medium text-[var(--foreground)] transition-colors duration-200 hover:bg-white"
              >
                Inspect API health
              </a>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-3">
              {trideHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--line)] bg-white/60 p-4 text-sm leading-6 text-[var(--muted)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="grid gap-5">
            <div className="rounded-[2rem] border border-[var(--line)] bg-[#17382b] p-6 text-[#f8f4ea] shadow-[0_18px_50px_rgba(20,38,29,0.14)]">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#f2b59b]">
                Launch routes
              </p>
              <ul className="mt-5 space-y-3 text-lg">
                {trideRoutes.map((route) => (
                  <li
                    key={route}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    {route}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_18px_50px_rgba(20,38,29,0.08)]">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent-deep)]">
                Commercial logic
              </p>
              <div className="mt-5 grid gap-4">
                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="text-3xl font-semibold tracking-[-0.04em]">
                    10%
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Take rate on completed rides with automatic payout split.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="text-3xl font-semibold tracking-[-0.04em]">
                    0 admin
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    No discretionary settlement key required for cancellation or
                    completion rules.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="how" className="mt-12 grid gap-5 lg:grid-cols-3">
          {trideSteps.map((step) => (
            <article
              key={step.label}
              className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_18px_50px_rgba(20,38,29,0.06)]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent-deep)]">
                {step.label}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                {step.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {step.body}
              </p>
            </article>
          ))}
        </section>

        <section
          id="trust"
          className="mt-12 grid gap-6 rounded-[2.25rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(239,232,214,0.92))] p-8 shadow-[0_20px_60px_rgba(20,38,29,0.08)] lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent-deep)]">
              Trust without custody
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              On-chain money. Off-chain coordination. Clear boundaries.
            </h2>
          </div>
          <div className="grid gap-3">
            {tridePrinciples.map((principle) => (
              <div
                key={principle}
                className="rounded-2xl border border-[var(--line)] bg-white/70 px-5 py-4 text-sm leading-7 text-[var(--muted)]"
              >
                {principle}
              </div>
            ))}
          </div>
        </section>

        <section
          id="launch"
          className="mt-12 rounded-[2.25rem] border border-[var(--line)] bg-[#e8662f] px-8 py-10 text-[#fff7ed] shadow-[0_24px_70px_rgba(200,79,28,0.22)]"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#ffe0d1]">
            First corridor
          </p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                Kaduna to Abuja is the proving ground for deterministic trip
                settlement.
              </h2>
              <p className="mt-4 text-base leading-8 text-[#fff0e7]">
                Start with one high-frequency route, prove reliable boarding and
                payout flows, then expand across repeatable intercity corridors.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-black/10 px-6 py-5 font-mono text-sm uppercase tracking-[0.2em] text-[#fff3eb]">
              Web app + API + Soroban contracts
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

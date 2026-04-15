import React, { useMemo, useRef, useState } from 'react'

type WaitlistFormState = {
  fullName: string
  instagram: string
  whatsapp: string
}

function IconCheckCircle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 4 12 14.01l-3-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconPin({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 22s7-4.5 7-12a7 7 0 1 0-14 0c0 7.5 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconWallet({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 7h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M3 7V6a2 2 0 0 1 2-2h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17 13h4v4h-4a2 2 0 0 1 0-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconWhatsapp({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20.52 11.02A8.5 8.5 0 0 1 7.03 18.5L4 19l.6-2.9A8.5 8.5 0 1 1 20.52 11.02Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 9.2c.2-.4.5-.4.8-.4.2 0 .5 0 .7.1.2.1.3.4.5.8.1.3.2.6.1.8-.1.2-.3.3-.5.5-.2.2-.3.3-.2.6.1.3.4.8.9 1.3.6.6 1.2 1 1.5 1.1.3.1.5.1.7-.1.2-.2.3-.4.5-.6.2-.2.4-.2.7-.1.3.1 1 .5 1.2.6.2.1.3.2.3.4 0 .2-.1.7-.4 1-.3.3-.7.7-1.6.6-.9-.1-2.1-.7-3.5-2.1-1.4-1.4-2.1-2.7-2.2-3.6-.1-.9.3-1.3.6-1.6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconBolt({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M13 2 3 14h7l-1 8 12-14h-7l-1-6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const clamp = (minPx: number, preferredVw: number, maxPx: number) =>
  `clamp(${minPx}px, ${preferredVw}vw, ${maxPx}px)`

const WaitlistPage: React.FC = () => {
  const waitlistRef = useRef<HTMLElement | null>(null)

  const [form, setForm] = useState<WaitlistFormState>({
    fullName: '',
    instagram: '',
    whatsapp: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const onScrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const pillBadges = useMemo(
    () => ['✕ No PayPal', '✕ No Gumroad', '✕ No middlemen', '✓ Just you and your buyers'],
    [],
  )

  const socialProof = useMemo(
    () => [
      { label: 'Built in South Africa', Icon: IconPin },
      { label: 'Payments in Rands', Icon: IconWallet },
      { label: 'WhatsApp delivery', Icon: IconWhatsapp },
      { label: 'Set up in 5 minutes', Icon: IconBolt },
    ],
    [],
  )

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-white">
      {/* 1) FIXED NAVIGATION */}
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-surface-2"
        style={{ backgroundColor: 'rgba(18,18,18,0.92)', backdropFilter: 'blur(10px)' }}
      >
        <div className="mx-auto flex max-w-[1080px] items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div
              className="grid h-9 w-9 place-items-center font-bold text-white"
              style={{ backgroundColor: '#FF3B30', borderRadius: 8 }}
              aria-label="NextOne"
            >
              N1
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold tracking-[2px]">NEXTONE</span>
              <span className="text-[12px] text-muted">Built for SA Creatives</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onScrollToWaitlist}
            className="inline-flex items-center justify-center border px-4 py-2 text-sm font-semibold transition-colors"
            style={{ borderColor: '#FF3B30', color: '#FF3B30', borderRadius: 12 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FF3B30'
              e.currentTarget.style.color = '#FFFFFF'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#FF3B30'
            }}
          >
            Get Early Access
          </button>
        </div>
      </header>

      <main className="pt-[72px]">
        {/* 2) HERO SECTION */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-hero-gradient" />
          <div className="mx-auto max-w-[1080px] px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20">
            <div className="max-w-[720px]">
              <div
                className="mb-4 inline-flex items-center gap-2 uppercase"
                style={{
                  color: '#00E0FF',
                  letterSpacing: '2.5px',
                  fontSize: 12,
                }}
              >
                Built for SA Creatives
              </div>

              <h1
                className="font-bold leading-[1.05]"
                style={{
                  fontSize: clamp(34, 5.2, 60),
                  letterSpacing: '-0.025em',
                }}
              >
                <span className="text-white">Your followers already love your work.</span>
                <br />
                <span style={{ color: '#FF3B30' }}>It&apos;s time they paid for it.</span>
              </h1>

              <p
                className="mt-5 max-w-[620px]"
                style={{ color: '#B3B3B3', fontSize: clamp(15, 2.1, 18), lineHeight: 1.6 }}
              >
                NextOne is the platform SA creatives have been waiting for — sell your digital products, get paid
                in Rands, own your audience.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {pillBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full border px-3 py-1 text-[12px] sm:text-[13px]"
                    style={{ backgroundColor: '#1E1E1E', borderColor: '#2A2A2A', color: '#FFFFFF' }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={onScrollToWaitlist}
                  className="btn-primary rounded-[12px] px-5 py-3"
                  style={{ borderRadius: 12 }}
                >
                  I want early access <span aria-hidden="true">→</span>
                </button>
                <div className="mt-3 text-[13px]" style={{ color: '#B3B3B3' }}>
                  Free early access · Lifetime reduced fees · No spam
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3) SOCIAL PROOF BAR */}
        <section className="border-y border-surface-2 bg-surface">
          <div className="mx-auto grid max-w-[1080px] grid-cols-2 gap-3 px-4 py-6 sm:grid-cols-4 sm:px-6 sm:py-8">
            {socialProof.map(({ label, Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-[12px] border border-surface-2 bg-background">
                  <Icon className="text-white" />
                </div>
                <div className="text-[13px] text-muted sm:text-[14px]">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 4) VALUE PROPS */}
        <section className="mx-auto max-w-[1080px] px-4 py-14 sm:px-6 sm:py-24">
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            <div className="rounded-[16px] border border-surface-2 bg-surface p-6 sm:p-8">
              <div
                className="mb-4 grid h-11 w-11 place-items-center rounded-[12px]"
                style={{ backgroundColor: 'rgba(255,59,48,0.12)' }}
              >
                <IconWallet className="text-primary" />
              </div>
              <h3 className="text-[18px] font-semibold" style={{ fontSize: clamp(16, 2.0, 20) }}>
                Sell in Rands. No PayPal required.
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">
                Upload your templates, presets, eBooks or illustrations and set your own price. Your buyers pay in
                Rands, directly to you — no currency conversion, no blocked accounts.
              </p>
            </div>

            <div className="rounded-[16px] border border-surface-2 bg-surface p-6 sm:p-8">
              <div
                className="mb-4 grid h-11 w-11 place-items-center rounded-[12px]"
                style={{ backgroundColor: 'rgba(0,224,255,0.10)' }}
              >
                <IconWhatsapp className="text-accent" />
              </div>
              <h3 className="text-[18px] font-semibold" style={{ fontSize: clamp(16, 2.0, 20) }}>
                Delivery straight to WhatsApp.
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">
                The moment someone buys your work, they get their download link on WhatsApp. No Google Drive links.
                No chasing EFTs. No awkward DMs.
              </p>
            </div>

            <div className="rounded-[16px] border border-surface-2 bg-surface p-6 sm:p-8">
              <div
                className="mb-4 grid h-11 w-11 place-items-center rounded-[12px]"
                style={{ backgroundColor: 'rgba(0,200,83,0.10)' }}
              >
                <IconCheckCircle className="text-success" />
              </div>
              <h3 className="text-[18px] font-semibold" style={{ fontSize: clamp(16, 2.0, 20) }}>
                Your audience belongs to you.
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">
                Know exactly who your buyers are, what they love, and how to reach them. Your fans. Your data. Your
                business. Always.
              </p>
            </div>
          </div>
        </section>

        {/* 5) INSIGHT SECTION */}
        <section className="mx-auto max-w-[1080px] px-4 pb-14 sm:px-6 sm:pb-24">
          <div className="rounded-[16px] border border-surface-2 bg-surface p-6 sm:p-8">
            <div className="border-l-[4px] pl-5" style={{ borderLeftColor: '#FF3B30' }}>
              <p className="text-[15px] leading-relaxed text-white sm:text-[16px]">
                I&apos;ve been sending people to my Behance for two years and never earned a cent from it. I didn&apos;t
                even know I could.
              </p>
              <div className="mt-3 text-[13px] font-semibold" style={{ color: '#00E0FF' }}>
                — SA Graphic Designer, Johannesburg
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {[
                {
                  number: 'R0',
                  label: 'earned from Behance views by most SA creatives',
                },
                {
                  number: '3+',
                  label: 'platforms needed just to sell one digital product in SA',
                },
                {
                  number: '1',
                  label: 'link is all you need on NextOne to start earning today',
                },
              ].map((s) => (
                <div key={s.number} className="rounded-[16px] border border-surface-2 bg-background p-5">
                  <div className="font-bold" style={{ color: '#FF3B30', fontSize: 32, lineHeight: 1.1 }}>
                    {s.number}
                  </div>
                  <div className="mt-2 text-[13px] leading-relaxed text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6) HOW IT WORKS */}
        <section className="mx-auto max-w-[1080px] px-4 pb-14 sm:px-6 sm:pb-24">
          <div className="mb-8">
            <h2 className="font-bold" style={{ fontSize: clamp(22, 3.2, 30) }}>
              How it works
            </h2>
            <p className="mt-2 max-w-[720px] text-[14px] leading-relaxed text-muted">
              Everything you need to sell digital products in SA, without the workarounds.
            </p>
          </div>

          <div className="overflow-hidden rounded-[16px] border border-surface-2 bg-surface">
            {[
              {
                n: '01',
                title: 'Create your NextOne page',
                body:
                  'Sign up and set up your creator profile in under 5 minutes. Our AI writes your bio for you — just answer 3 quick questions. You get a clean link: nextone.co.za/yourname',
              },
              {
                n: '02',
                title: 'Upload your first product',
                body:
                  'Templates, presets, eBooks, illustrations, photography packs — if it is a file, you can sell it. Set your price in Rands.',
              },
              {
                n: '03',
                title: 'Share your link',
                body:
                  'Put your NextOne link in your Instagram bio, TikTok, WhatsApp status. Everywhere you already have an audience — now they can actually pay you.',
              },
              {
                n: '04',
                title: 'Wake up to a WhatsApp notification',
                body:
                  "'You just made R150 on NextOne.' Your buyer gets their file instantly on WhatsApp. You get paid directly. That is it.",
              },
            ].map((step, idx, arr) => (
              <div
                key={step.n}
                className={`flex gap-4 p-6 sm:gap-5 sm:p-8 ${idx !== arr.length - 1 ? 'border-b border-surface-2' : ''}`}
              >
                <div
                  className="shrink-0 border px-3 py-2 font-bold"
                  style={{
                    borderColor: '#2A2A2A',
                    backgroundColor: '#1E1E1E',
                    color: '#FF3B30',
                    borderRadius: 12,
                  }}
                >
                  {step.n}
                </div>
                <div>
                  <div className="text-[16px] font-semibold sm:text-[17px]">{step.title}</div>
                  <div className="mt-2 text-[14px] leading-relaxed text-muted">{step.body}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7) WAITLIST FORM */}
        <section ref={waitlistRef} id="waitlist" className="mx-auto max-w-[1080px] px-4 pb-16 sm:px-6 sm:pb-28">
          <div className="rounded-[24px] border border-surface-2 bg-surface p-7 sm:p-12">
            <div className="max-w-[720px]">
              <div className="text-[12px] font-semibold uppercase tracking-[2.5px]" style={{ color: '#00E0FF' }}>
                Early Access
              </div>
              <h2 className="mt-3 font-bold" style={{ fontSize: clamp(22, 3.4, 32) }}>
                Be among the first.
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">
                SA creatives on the waitlist get free early access and a lifetime reduced platform fee. We will
                WhatsApp you personally when we are ready for you.
              </p>
            </div>

            <div className="mt-8">
              {!submitted ? (
                <form onSubmit={onSubmit} className="grid gap-4">
                  <label className="grid gap-2">
                    <span className="text-[13px] font-medium text-white">Full name</span>
                    <input
                      className="w-full border px-4 py-3.5 text-white outline-none transition-colors placeholder:text-[#555]"
                      style={{
                        backgroundColor: '#121212',
                        borderColor: '#2A2A2A',
                        borderRadius: 10,
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#00E0FF')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#2A2A2A')}
                      value={form.fullName}
                      onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
                      placeholder="Lerato Dlamini"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-[13px] font-medium text-white">Instagram handle</span>
                    <input
                      className="w-full border px-4 py-3.5 text-white outline-none transition-colors placeholder:text-[#555]"
                      style={{
                        backgroundColor: '#121212',
                        borderColor: '#2A2A2A',
                        borderRadius: 10,
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#00E0FF')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#2A2A2A')}
                      value={form.instagram}
                      onChange={(e) => setForm((p) => ({ ...p, instagram: e.target.value }))}
                      placeholder="@yourhandle"
                      autoComplete="off"
                      required
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-[13px] font-medium text-white">WhatsApp number</span>
                    <input
                      className="w-full border px-4 py-3.5 text-white outline-none transition-colors placeholder:text-[#555]"
                      style={{
                        backgroundColor: '#121212',
                        borderColor: '#2A2A2A',
                        borderRadius: 10,
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#00E0FF')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#2A2A2A')}
                      value={form.whatsapp}
                      onChange={(e) => setForm((p) => ({ ...p, whatsapp: e.target.value }))}
                      placeholder="+27 82 000 0000"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="btn-primary mt-2 w-full rounded-[12px] px-5 py-3"
                    style={{ borderRadius: 12 }}
                  >
                    I want early access <span aria-hidden="true">→</span>
                  </button>

                  <div className="text-center text-[13px]" style={{ color: '#B3B3B3' }}>
                    No spam. No nonsense. Just NextOne.
                  </div>
                </form>
              ) : (
                <div className="rounded-[16px] border border-surface-2 bg-background p-6 sm:p-7">
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-background">
                      <div className="grid h-10 w-10 place-items-center rounded-full" style={{ color: '#00C853' }}>
                        <IconCheckCircle className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <div className="text-[16px] font-semibold text-white">You are on the list.</div>
                      <div className="mt-1 text-[14px] leading-relaxed text-muted">
                        We will WhatsApp you personally when NextOne is ready for you.
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 text-[13px] text-muted">No spam. No nonsense. Just NextOne.</div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* 8) FOOTER */}
      <footer className="border-t border-surface-2">
        <div className="mx-auto flex max-w-[1080px] flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <div
              className="grid h-9 w-9 place-items-center font-bold text-white"
              style={{ backgroundColor: '#FF3B30', borderRadius: 8 }}
              aria-label="NextOne"
            >
              N1
            </div>
            <div className="font-bold tracking-[2px]">NEXTONE</div>
          </div>
          <div className="text-[13px]" style={{ color: '#B3B3B3' }}>
            Built in South Africa 🇿🇦 · For SA creatives. By SA creatives.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default WaitlistPage

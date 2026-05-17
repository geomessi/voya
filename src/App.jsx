import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CircleDollarSign,
  Clock3,
  MapPinned,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
} from 'lucide-react'

const tabs = [
  'Second Opinion?',
  "You've Earned This",
  'While You Recover',
  'Your Friend Already Did It',
  'Holiday, Handled',
]

const campaignData = {
  'Second Opinion?': {
    headline: 'Question the quote. Not the care.',
    audience: 'Cambodia, Laos, India',
    insight: 'Sticker shock becomes the entry point.',
    heroCopy: 'Your doctor may be right. Your hospital’s price tag is a separate decision.',
    socialCopy: 'Compare the pathway, the credentials, and the full trip cost, not just one number.',
    visualDirection: 'Crisp, editorial, high-stakes.',
    cta: 'Get a free second opinion',
    mockupTitle: 'Comparison view',
    mockupBody: 'Vietnam vs Bangkok vs Australia package comparison, with verified clinic notes and estimated trip total.',
  },
  "You've Earned This": {
    headline: 'Self-investment, beautifully handled.',
    audience: 'Indonesia, Malaysia, Singapore',
    insight: 'Travel desire softens care friction.',
    heroCopy: 'The trip you meant to take. The treatment you’ve been putting off.',
    socialCopy: 'Added one appointment to a Vietnam trip I already wanted. That was the whole point.',
    visualDirection: 'Warm, wellness-led, quietly luxurious.',
    cta: 'Plan your Voya itinerary',
    mockupTitle: 'Voya itinerary',
    mockupBody: 'Arrival, spa hotel check-in, clinic consultation, treatment day, and a recovery stay paced around comfort.',
  },
  'While You Recover': {
    headline: 'Recovery becomes part of the product.',
    audience: 'Travel-first patients',
    insight: 'The days after matter as much as the appointment.',
    heroCopy: 'Most recoveries are something to get through. This one is planned properly.',
    socialCopy: 'A calmer hotel, better pacing, and the right amount of support after the procedure.',
    visualDirection: 'Coastal, calm, destination-led.',
    cta: 'Build a recovery-aware trip',
    mockupTitle: 'Recovery timeline',
    mockupBody: 'Procedure day, hotel transfer, room-service recovery, follow-up check, and departure support in one view.',
  },
  'Your Friend Already Did It': {
    headline: 'Recommendation is the channel.',
    audience: 'Peer-driven markets',
    insight: 'Trust is passed along, not announced.',
    heroCopy: 'The best recommendations rarely arrive as advertisements.',
    socialCopy: 'Forwarded posts, private questions, and one story from someone who already did it.',
    visualDirection: 'Chat-inspired, social-proof, still polished.',
    cta: 'Join the Voya patient community',
    mockupTitle: 'Community thread',
    mockupBody: 'Verified patient Q&A, concierge follow-up, and one-tap access to real treatment stories.',
  },
  'Holiday, Handled': {
    headline: 'The trusted VNTrip account, now for life beyond work.',
    audience: 'VNTrip corporate users',
    insight: 'Owned channels make this fast and practical.',
    heroCopy: 'Your next family trip is sitting in the same account you already use for work.',
    socialCopy: 'Points, hotels, flights, and support already exist. The use case just changes.',
    visualDirection: 'Friendly utility with premium travel polish.',
    cta: 'See where your points can take you',
    mockupTitle: 'Points dashboard',
    mockupBody: 'Corporate points balance translated into real destination options, hotel nights, and family-trip bundles.',
  },
}

const productCards = [
  {
    title: 'Verified clinics',
    body: 'Voya curates and presents trusted clinic options with clearer procedure framing, visible credentials, and pricing context.',
    icon: BadgeCheck,
  },
  {
    title: 'Dedicated local guide',
    body: 'Patients get a named concierge who coordinates scheduling, airport arrival, local movement, and practical support on the ground.',
    icon: UserRound,
  },
  {
    title: 'Recovery-aware trip plan',
    body: 'Travel timing, hotel choice, follow-up visits, and departure logistics are built around the treatment itself, not bolted on afterward.',
    icon: CalendarDays,
  },
]

const trustCards = [
  {
    question: 'How do I know the clinic is safe?',
    answer: 'Verified clinic selection, visible credentials, procedure-specific framing, and trust signals that make the shortlist intelligible.',
    icon: ShieldCheck,
  },
  {
    question: 'Who coordinates my appointments?',
    answer: 'A Voya concierge manages clinic timing, travel sequencing, and in-country communication so the patient does not need to orchestrate vendors.',
    icon: MessageSquare,
  },
  {
    question: 'What happens after the procedure?',
    answer: 'Recovery-aware hotel selection, follow-up planning, transport logic, and one coordinated support thread for the days that matter most.',
    icon: Clock3,
  },
  {
    question: 'What does the full trip cost?',
    answer: 'Voya frames the full package: procedure, flights, hotel, local transfers, support, and the practical trip logic around all of it.',
    icon: CircleDollarSign,
  },
]

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111827]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-4 md:px-8">
        <div className="text-[17px] font-semibold tracking-[0.08em] text-white">Voya by VNTrip</div>
        <nav className="hidden items-center gap-6 text-sm text-white/60 lg:flex">
          <a href="#hero" className="transition hover:text-white">
            Story
          </a>
          <a href="#experience" className="transition hover:text-white">
            Product
          </a>
          <a href="#trust" className="transition hover:text-white">
            Trust
          </a>
          <a href="#campaign-lab" className="transition hover:text-white">
            Campaigns
          </a>
        </nav>
      </div>
    </header>
  )
}

function Eyebrow({ children, light = false }) {
  return <p className={cn('text-[11px] font-semibold uppercase tracking-[0.28em]', light ? 'text-[#9CA3AF]' : 'text-[#9CA3AF]')}>{children}</p>
}

function SectionTitle({ children, light = false, className = '' }) {
  return (
    <h2 className={cn('text-[42px] font-semibold leading-[0.9] tracking-[-0.05em] md:text-[72px]', light ? 'text-[#F9FAFB]' : 'text-[#F9FAFB]', className)}>
      {children}
    </h2>
  )
}

function Body({ children, light = false, className = '' }) {
  return <p className={cn('text-[16px] leading-7 md:text-[18px]', light ? 'text-[#9CA3AF]' : 'text-[#9CA3AF]', className)}>{children}</p>}

function CTAButton({ children, dark = false }) {
  return (
    <button
      className={cn(
        'inline-flex items-center gap-3 rounded-full px-8 py-4 text-[16px] font-bold transition md:px-10 md:py-5 md:text-[18px]',
        dark ? 'bg-[#1F2937] text-[#F9FAFB] hover:bg-[#283243]' : 'bg-[#F5A623] text-[#111827] hover:bg-[#C9943A]',
      )}
    >
      {children}
      <ArrowRight className="h-5 w-5" />
    </button>
  )
}

function PhoneFrame({ children, className = '' }) {
  return (
    <div className={cn('w-[290px] rounded-[40px] border border-white/12 bg-[#0e1627] p-3 shadow-[0_40px_100px_rgba(0,0,0,0.42)]', className)}>
      <div className="rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,#f6f1e8_0%,#ffffff_100%)] p-5">{children}</div>
    </div>
  )
}

function AppMockups() {
  return (
    <div className="relative flex min-h-[680px] items-center justify-center">
      <PhoneFrame className="absolute left-0 top-14 rotate-[-11deg]">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-[#89837a]">
          <span>Browse clinics</span>
          <span>Voya</span>
        </div>
        <div className="mt-4 rounded-[20px] bg-[#121826] p-4 text-white">
          <div className="text-xs uppercase tracking-[0.22em] text-white/50">Kim Dental</div>
          <div className="mt-2 flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-[#f5a623]" />
            <span className="text-sm text-white/84">Voya Verified</span>
          </div>
          <div className="mt-4 rounded-[16px] bg-white/8 p-3">
            <div className="text-sm">Dental implant package</div>
            <div className="mt-1 text-xs text-white/56">Recovery-friendly hotel options included</div>
            <div className="mt-3 text-lg font-semibold text-[#f5a623]">From $1,400</div>
          </div>
          <div className="mt-3 rounded-[16px] bg-white/8 p-3">
            <div className="text-sm">Veneers package</div>
            <div className="mt-1 text-xs text-white/56">Consultation + transfer support</div>
            <div className="mt-3 text-lg font-semibold text-[#f5a623]">From $1,900</div>
          </div>
        </div>
      </PhoneFrame>

      <PhoneFrame className="relative z-10 scale-[1.06]">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-[#89837a]">
          <span>Concierge chat</span>
          <span>Linh</span>
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex justify-start">
            <div className="max-w-[86%] rounded-[18px] rounded-bl-md bg-[#eef1f6] px-4 py-3 text-[14px] leading-6 text-[#273140]">
              I’ve shortlisted 3 clinics for your consultation. Want to see them?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[82%] rounded-[18px] rounded-br-md bg-[#f5a623] px-4 py-3 text-[14px] leading-6 text-[#141923]">
              Yes, and can you keep them close to Da Nang?
            </div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[86%] rounded-[18px] rounded-bl-md bg-[#eef1f6] px-4 py-3 text-[14px] leading-6 text-[#273140]">
              Absolutely. I’ll filter for recovery-friendly hotels and the shortest transfer time too.
            </div>
          </div>
        </div>
      </PhoneFrame>

      <PhoneFrame className="absolute right-0 top-16 rotate-[11deg]">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-[#89837a]">
          <span>Trip timeline</span>
          <span>6 days</span>
        </div>
        <div className="mt-4 space-y-3">
          {[
            'Arrival in Ho Chi Minh City',
            'Consultation and clinic transfer',
            'Procedure day',
            'Recovery hotel stay',
            'Follow-up appointment',
            'Departure',
          ].map((item, index) => (
            <div key={item} className="flex items-start gap-3 rounded-[16px] bg-[#f5f2eb] px-3 py-3">
              <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#141923] text-[11px] font-semibold text-white">
                {index + 1}
              </div>
              <div className="text-[14px] leading-6 text-[#273140]">{item}</div>
            </div>
          ))}
        </div>
      </PhoneFrame>
    </div>
  )
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="overflow-hidden rounded-[40px] bg-[radial-gradient(circle_at_top_right,#14213A_0%,#111827_38%,#0f172a_76%)] px-6 py-16 text-white shadow-[0_30px_80px_rgba(0,0,0,0.28)] md:px-12 md:py-24 lg:px-16"
    >
      <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div className="max-w-2xl py-4 md:py-8">
          <Eyebrow light>VOYA BY VNTRIP</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-[64px] font-semibold leading-[0.88] tracking-[-0.06em] text-[#F9FAFB] md:text-[102px]">
            Your medical trip to Vietnam, handled.
          </h1>
          <Body light className="mt-7 max-w-lg text-[18px] md:text-[20px]">
            Voya combines verified clinics, travel booking, local concierge support, and recovery-aware itineraries into one managed experience.
          </Body>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTAButton>Talk to a Voya concierge</CTAButton>
            <a href="#campaign-lab" className="text-sm font-medium text-white/72 underline-offset-4 transition hover:text-white hover:underline">
              Explore campaign directions
            </a>
          </div>
        </div>
        <AppMockups />
      </div>
    </section>
  )
}

function ProductExperience() {
  return (
    <section id="experience" className="grid gap-12 py-4">
      <div className="max-w-3xl">
        <Eyebrow>PRODUCT EXPERIENCE</Eyebrow>
        <SectionTitle className="mt-4">Not a clinic directory. A concierge layer.</SectionTitle>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {productCards.map(({ title, body, icon: Icon }) => (
          <div key={title} className="rounded-[34px] border border-white/8 bg-[#1F2937] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.20)] md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#14213A] text-[#F9FAFB]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-8 text-[32px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#F9FAFB]">{title}</h3>
            <p className="mt-4 max-w-[18rem] text-[16px] leading-7 text-[#9CA3AF]">{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function TrustLayer() {
  return (
    <section
      id="trust"
      className="overflow-hidden rounded-[40px] bg-[linear-gradient(140deg,#111827_0%,#14213A_100%)] px-6 py-16 text-white shadow-[0_30px_80px_rgba(0,0,0,0.28)] md:px-12 md:py-20 lg:px-16"
    >
      <div className="max-w-3xl">
        <Eyebrow light>TRUST LAYER</Eyebrow>
        <SectionTitle light className="mt-4">
          Designed around the questions patients actually ask.
        </SectionTitle>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {trustCards.map(({ question, answer, icon: Icon }) => (
          <div key={question} className="rounded-[30px] border border-white/8 bg-[#1F2937] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
            <Icon className="h-5 w-5 text-[#F5A623]" />
            <h3 className="mt-6 max-w-[12rem] text-[28px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#F9FAFB]">{question}</h3>
            <p className="mt-4 max-w-[15rem] text-[15px] leading-7 text-[#9CA3AF]">{answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProductTieCard({ title, body }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[#1F2937] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#9CA3AF]">
        <Sparkles className="h-3.5 w-3.5 text-[#F5A623]" />
        <span>Voya product tie-in</span>
      </div>
      <div className="mt-4 text-[24px] font-semibold leading-tight tracking-[-0.03em] text-[#F9FAFB]">{title}</div>
      <p className="mt-3 text-[15px] leading-7 text-[#9CA3AF]">{body}</p>
    </div>
  )
}

function CampaignLab() {
  const [active, setActive] = useState(tabs[0])
  const [displayed, setDisplayed] = useState(tabs[0])
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (active === displayed) return
    setVisible(false)
    const timer = window.setTimeout(() => {
      setDisplayed(active)
      setVisible(true)
    }, 280)
    return () => window.clearTimeout(timer)
  }, [active, displayed])

  const data = useMemo(() => campaignData[displayed], [displayed])

  return (
    <section id="campaign-lab" className="grid gap-12 py-4">
      <div className="max-w-4xl">
        <Eyebrow>CAMPAIGN LAB</Eyebrow>
        <SectionTitle className="mt-4">Five ways travelers discover Voya.</SectionTitle>
        <Body className="mt-5 max-w-2xl">
          Each campaign speaks to a different emotional entry point, but all roads lead back to the same concierge product.
        </Body>
      </div>

      <div className="flex overflow-x-auto pb-2">
        <div className="mx-auto flex min-w-max gap-2 rounded-full border border-white/8 bg-[#1F2937] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
          {tabs.map((tab) => {
            const selected = tab === active
            return (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={cn(
                  'rounded-full px-4 py-3 text-sm transition md:px-5',
                  selected ? 'bg-[#F5A623] text-[#111827]' : 'text-[#9CA3AF] hover:text-[#F9FAFB]',
                )}
              >
                {tab}
              </button>
            )
          })}
        </div>
      </div>

      <div className={cn('overflow-hidden rounded-[40px] border border-white/8 bg-[#111827] shadow-[0_30px_80px_rgba(0,0,0,0.24)] transition-all duration-300', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2')}>
        <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="px-6 py-10 text-white md:px-10 md:py-12">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#9CA3AF]">{displayed}</div>
            <h3 className="mt-5 max-w-[14ch] text-[40px] font-semibold leading-[0.94] tracking-[-0.05em] text-[#F9FAFB] md:text-[60px]">{data.headline}</h3>
            <p className="mt-6 max-w-[18rem] text-[18px] leading-8 text-[#F5A623]">{data.heroCopy}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                ['Targets', data.audience],
                ['Insight', data.insight],
                ['Sample ad', data.socialCopy],
                ['Visual direction', data.visualDirection],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[24px] border border-white/8 bg-[#1F2937] p-5">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-[#9CA3AF]">{label}</div>
                  <p className="mt-3 text-[15px] leading-7 text-[#F9FAFB]">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CTAButton>{data.cta}</CTAButton>
            </div>
          </div>

          <div className="flex flex-col justify-between border-t border-white/10 bg-[linear-gradient(180deg,#14213A_0%,#111827_100%)] px-6 py-10 text-white md:px-10 md:py-12 lg:border-l lg:border-t-0">
            <div className="grid gap-6">
              <ProductTieCard title={data.mockupTitle} body={data.mockupBody} />
              <div className="grid gap-4">
                {[
                  'Verified clinic shortlist',
                  'Named concierge',
                  'Trip + treatment + recovery in one flow',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[20px] border border-white/8 bg-[#1F2937] px-4 py-4">
                    <MapPinned className="mt-1 h-4 w-4 shrink-0 text-[#F5A623]" />
                    <p className="text-[15px] leading-7 text-[#F9FAFB]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 rounded-[30px] border border-white/10 bg-[#1F2937] p-6">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#9CA3AF]">Master product promise</div>
              <p className="mt-3 max-w-[18rem] text-[28px] font-semibold leading-[1] tracking-[-0.04em] text-[#F9FAFB]">
                Same concierge product underneath every acquisition story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ClosingSection() {
  return (
    <section className="overflow-hidden rounded-[40px] bg-[linear-gradient(140deg,#14213A_0%,#111827_100%)] px-6 py-16 text-white shadow-[0_30px_80px_rgba(0,0,0,0.24)] md:px-12 md:py-20 lg:px-16">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="max-w-3xl">
          <Eyebrow>CLOSING</Eyebrow>
          <SectionTitle className="mt-4">Vietnam’s health and travel package.</SectionTitle>
          <Body light className="mt-6 max-w-xl">
            VNTrip already owns the travel infrastructure. Voya adds the trust, care, and coordination layer.
          </Body>
          <div className="mt-9">
            <CTAButton>Prototype the Voya journey</CTAButton>
          </div>
        </div>
        <div className="grid gap-4">
          {[
            'Verified clinics, clearly framed',
            'Named local concierge support',
            'Recovery-aware trip planning',
            'A premium product VNTrip can own',
          ].map((item) => (
            <div key={item} className="rounded-[24px] border border-white/10 bg-[#1F2937] px-5 py-5 text-[16px] leading-7 text-[#F9FAFB]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="mx-auto max-w-[1280px] px-4 pb-12 text-center text-sm text-white/54 md:px-8">
      Voya by VNTrip · Vietnam&apos;s health and travel package · © 2026
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#111827] font-sans">
      <Header />
      <main className="px-4 pb-8 pt-[92px] md:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-12 md:gap-16">
          <HeroSection />
          <ProductExperience />
          <TrustLayer />
          <CampaignLab />
          <ClosingSection />
        </div>
        <Footer />
      </main>
    </div>
  )
}

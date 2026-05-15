import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  CircleDollarSign,
  HeartHandshake,
  MapPinned,
  Plane,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  SunMedium,
  Ticket,
} from 'lucide-react'

const tabs = [
  'Second Opinion?',
  "You've Earned This",
  'While You Recover',
  'Your Friend Already Did It',
  'Holiday, Handled',
]

const tabThemes = {
  'Second Opinion?': 'bg-[#faf8f2]',
  "You've Earned This": 'bg-[#f4eadc]',
  'While You Recover': 'bg-[#e7f1f0]',
  'Your Friend Already Did It': 'bg-[#f3f4f7]',
  'Holiday, Handled': 'bg-[#f4ebd8]',
}

const consultationStats = [
  { label: 'IVM pathway', value: 'Vietnam leads ASEAN on access' },
  { label: 'Doctor training', value: 'Singapore, Australia, Europe' },
  { label: 'Booking support', value: 'Flights, hotel, clinic, aftercare' },
]

const heroTitleClass = 'font-display text-[56px] font-extrabold leading-none md:text-[96px]'

const priceChartRows = [
  {
    procedure: 'IVF',
    markets: [
      { country: 'Australia', price: '$15,000', width: '100%' },
      { country: 'Bangkok', price: '$10,000', width: '67%' },
      { country: 'India', price: '$5,000', width: '33%' },
      { country: 'Vietnam', price: '$5,500', width: '37%', highlight: true },
    ],
  },
  {
    procedure: 'Dental Implants',
    markets: [
      { country: 'Singapore', price: '$7,500', width: '100%' },
      { country: 'Malaysia', price: '$5,200', width: '69%' },
      { country: 'Bangkok', price: '$4,800', width: '64%' },
      { country: 'Vietnam', price: '$3,100', width: '41%', highlight: true },
    ],
  },
  {
    procedure: 'Knee Replacement',
    markets: [
      { country: 'Australia', price: '$28,000', width: '100%' },
      { country: 'Bangkok', price: '$18,500', width: '66%' },
      { country: 'India', price: '$14,000', width: '50%' },
      { country: 'Vietnam', price: '$11,500', width: '41%', highlight: true },
    ],
  },
  {
    procedure: 'Full-Body Health Scan',
    markets: [
      { country: 'Singapore', price: '$2,300', width: '100%' },
      { country: 'Malaysia', price: '$1,500', width: '65%' },
      { country: 'Bangkok', price: '$1,250', width: '54%' },
      { country: 'Vietnam', price: '$780', width: '34%', highlight: true },
    ],
  },
]

const itineraryDays = [
  { day: 'Day 1', title: 'Arrive in Da Nang', body: 'Airport fast-track, private transfer, quiet hotel check-in.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80' },
  { day: 'Day 2', title: 'Free day', body: 'Light meals, beach air, an easy evening by the water.', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80' },
  { day: 'Day 3', title: 'Procedure day', body: 'Minimal schedule, chauffeur, clinic coordination, no stress.', muted: true },
  { day: 'Day 4', title: 'Poolside recovery', body: 'Breakfast in room, shade, sea breeze, zero logistics.', image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80' },
  { day: 'Day 5', title: 'Hoi An at golden hour', body: 'Lantern light, gentle walking, early dinner, back to rest.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=80' },
  { day: 'Day 6', title: 'Procedure follow-up', body: 'Quick check-in, then straight back to the coast.', muted: true },
  { day: 'Day 7', title: 'Quiet cultural day', body: 'Tea, tailoring, old town, tailored pace.', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80' },
  { day: 'Day 8', title: 'Fly home', body: 'Documentation packed, aftercare plan confirmed, car waiting.', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80' },
]

const chatMessages = [
  { side: 'left', author: 'AN', initials: 'AN', text: 'Wait. You got your veneers in Da Nang?' },
  { side: 'right', author: 'ME', initials: 'ME', text: 'Yes. Flights, hotel, clinic. I booked it through Voya and barely had to think.' },
  { side: 'left', author: 'AN', initials: 'AN', text: 'Was it actually good or are you being nice?' },
  { side: 'right', author: 'ME', initials: 'ME', text: 'I am being annoyingly serious. Just DM Voya. They explained everything before I paid anything.' },
]

const holidayDestinations = [
  { place: 'Phu Quoc', note: 'Beach reset with points-friendly resorts' },
  { place: 'Da Nang', note: 'Easy flights, family hotels, fast weekends' },
  { place: 'Da Lat', note: 'Cool air, slower days, coffee and pine forests' },
  { place: 'Ha Long Bay', note: 'Big scenery, boat nights, easy school-break win' },
]

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

function SectionTitle({ eyebrow, title, body, className = '', dark = false }) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className={cn('mb-3 text-xs font-semibold uppercase tracking-[0.28em]', dark ? 'text-white/60' : 'text-[#7e6a48]')}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn('font-display text-3xl leading-tight md:text-5xl', dark ? 'text-white' : 'text-[#1A1A2E]')}>{title}</h2>
      {body && <p className={cn('mt-4 max-w-3xl text-sm leading-7 md:text-base', dark ? 'text-white/75' : 'text-[#49464d]')}>{body}</p>}
    </div>
  )
}

function CTAButton({ children }) {
  return (
    <button className="inline-flex items-center gap-3 rounded-full bg-gold px-10 py-5 text-lg font-bold text-navy transition hover:bg-[#C9943A]">
      {children}
      <ArrowRight className="h-5 w-5" />
    </button>
  )
}

function Header({ activeTab, onTabClick }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-gold/80 bg-navy">
      <div className="mx-auto flex h-[60px] max-w-[1400px] items-center gap-4 px-4 md:px-6">
        <div className="min-w-fit text-base font-semibold tracking-[0.08em] text-white md:text-lg">Voya by VNTrip</div>
        <div className="flex-1 overflow-x-auto">
          <div className="mx-auto flex min-w-max items-center justify-center gap-2 px-1">
            {tabs.map((tab) => {
              const active = tab === activeTab
              return (
                <button
                  key={tab}
                  onClick={() => onTabClick(tab)}
                  className={cn(
                    'relative whitespace-nowrap rounded-full px-4 py-2 text-sm transition md:text-[15px]',
                    active ? 'text-white' : 'text-white/55 hover:text-white/80',
                  )}
                >
                  {tab}
                  <span
                    className={cn(
                      'absolute inset-x-4 -bottom-[8px] h-[3px] rounded-full bg-gold transition-opacity',
                      active ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}

function PriceComparisonChart() {
  return (
    <div className="space-y-14 rounded-[2rem] bg-navy p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.22)] md:p-12">
      {priceChartRows.map((row) => (
        <div key={row.procedure}>
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="font-display text-2xl text-white md:text-3xl">{row.procedure}</h3>
            <span className="text-xs uppercase tracking-[0.24em] text-white/55">illustrative package pricing</span>
          </div>
          <div className="space-y-6">
            {row.markets.map((market) => (
              <div
                key={`${row.procedure}-${market.country}`}
                className={cn(
                  'rounded-2xl px-4 py-4 transition md:px-5',
                  market.highlight ? 'bg-[#2b2843]' : 'bg-white/5',
                )}
              >
                <div className="mb-3 flex items-center justify-between text-sm text-white md:text-base">
                  <span className="font-medium">{market.country}</span>
                  <span>{market.price}</span>
                </div>
                <div className="h-3 rounded-full bg-white/10">
                  <div
                    className={cn('h-3 rounded-full', market.highlight ? 'bg-gold' : 'bg-[#4A6A8A]')}
                    style={{ width: market.width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function ChatBubble({ message, index, animateKey }) {
  const delay = `${index * 400}ms`
  return (
    <div
      key={`${animateKey}-${index}`}
      className={cn('flex items-end gap-3 opacity-0', message.side === 'right' ? 'justify-end' : 'justify-start')}
      style={{ animation: `bubbleIn 500ms ease forwards`, animationDelay: delay }}
    >
      {message.side === 'left' && (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d7dde8] text-xs font-bold text-[#31405f]">
          {message.initials}
        </div>
      )}
      <div
        className={cn(
          'max-w-[75%] rounded-[22px] px-4 py-3 text-sm leading-6 shadow-sm md:text-base',
          message.side === 'right' ? 'rounded-br-md bg-[#DCF8C6] text-[#17301b]' : 'rounded-bl-md bg-white text-[#2b2f37]',
        )}
      >
        <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/35">{message.author}</div>
        {message.text}
      </div>
      {message.side === 'right' && (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f8f5f] text-xs font-bold text-white">
          {message.initials}
        </div>
      )}
    </div>
  )
}

function TabOne() {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-[#faf8f2] shadow-warm">
      <section className="relative bg-white px-6 py-16 md:px-16 md:py-[120px]">
        <div className="flex min-h-[55vh] flex-col items-center justify-center text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#7f7a72]">Specialist seeker concept</p>
          <h1 className={cn(heroTitleClass, 'text-black')}>
            Second Opinion<span className="align-top text-[1.05em]">?</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#2f2f34] md:text-[22px]">
            Your doctor is right about what you need. Your hospital&apos;s price tag is a different conversation. IVF in Australia costs
            $15,000. The same procedure, with comparable accreditation and success rates, costs $5,500 in Vietnam. Voya handles the rest.
          </p>
          <div className="mt-10">
            <CTAButton>Get your free second opinion - 30-minute call, no obligation</CTAButton>
          </div>
        </div>
        <div className="mt-14">
          <img
            src="https://images.unsplash.com/photo-1584820927498-0e507e52f09e?w=1600&q=80"
            alt="Medical invoice"
            className="h-[420px] w-full rounded-[2rem] object-cover shadow-[0_24px_80px_rgba(0,0,0,0.12)] md:h-[620px]"
          />
        </div>
      </section>

      <section className="bg-[#f8f2df] px-6 py-16 md:px-16 md:py-[120px]">
        <SectionTitle
          eyebrow="Data confidence"
          title="Vietnam wins when price transparency meets specialist care."
          body="This concept starts cold and clinical, then warms the moment the economics become undeniable. Vietnam is framed as the rational decision first, the beautiful one second."
        />
        <div className="mt-10">
          <PriceComparisonChart />
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f8f2df_0%,#f4e3bd_18%,#eecb88_100%)] px-6 py-16 md:px-16 md:py-[120px]">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-10 shadow-[0_20px_60px_rgba(46,32,4,0.14)] md:p-10">
            <h3 className="font-display text-3xl text-[#1A1A2E]">What changes.</h3>
            <ul className="mt-5 space-y-4 text-base leading-8 text-[#414049]">
              <li>Price drops meaningfully versus Bangkok, Singapore, Australia, or premium Indian hospital groups.</li>
              <li>Recovery happens in a warmer, more restorative setting than a domestic city apartment.</li>
              <li>One concierge arranges flights, hotel, procedure, transfers, and follow-up support.</li>
            </ul>
          </div>
          <div className="rounded-[2rem] bg-[#1A1A2E] p-10 text-[#F5A623] shadow-[0_20px_60px_rgba(46,32,4,0.14)] md:p-10">
            <h3 className="font-display text-3xl text-[#F5A623]">What doesn&apos;t.</h3>
            <ul className="mt-5 space-y-4 text-base leading-8 text-[#F5A623]">
              <li>Accreditation standards, internationally trained physicians, and modern equipment.</li>
              <li>Published success-rate scrutiny for fertility and specialist procedures.</li>
              <li>The ability to ask hard questions before committing to anything.</li>
            </ul>
          </div>
        </div>

          <div className="mt-10 grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(46,32,4,0.14)]">
            <div className="flex flex-wrap gap-3">
              {consultationStats.map((stat) => (
                <div key={stat.label} className="rounded-full bg-[#f4ead3] px-4 py-2 text-sm text-[#2b2e32]">
                  <span className="font-semibold">{stat.label}:</span> {stat.value}
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { icon: BadgeCheck, heading: 'JCI-aligned partners', copy: 'Clinic shortlist built for outcome certainty.' },
                { icon: Stethoscope, heading: 'Doctor profiles', copy: 'Specialists with cross-border patient experience.' },
                { icon: ShieldCheck, heading: 'Transparent packages', copy: 'Itemized pricing before any commitment.' },
              ].map(({ icon: Icon, heading, copy }) => (
                <div key={heading} className="rounded-[1.5rem] border border-[#ead8b5] p-5">
                  <Icon className="h-6 w-6 text-[#b57d21]" />
                  <div className="mt-4 text-lg font-semibold text-[#1A1A2E]">{heading}</div>
                  <p className="mt-2 text-sm leading-6 text-[#4f4d56]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(46,32,4,0.14)]">
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1600&q=80"
              alt="Modern Vietnamese clinic interior"
              className="h-72 w-full object-cover"
            />
            <div className="p-8">
              <div className="text-xs uppercase tracking-[0.28em] text-[#8b7a58]">Priya and Sai archetype</div>
              <h3 className="mt-3 font-display text-3xl text-[#1A1A2E]">They weren&apos;t chasing cheaper IVF. They were chasing IVM.</h3>
              <p className="mt-4 text-sm leading-7 text-[#49464d] md:text-base">
                Indian-origin, Dubai-based, six months of research, one decisive trip. The emotional proof point is not bargain hunting. It&apos;s access to a protocol that changed the quality of the decision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function TabTwo() {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-[#f4eadc] shadow-warm">
      <section
        className="relative min-h-[680px] bg-cover bg-center px-6 py-20 md:px-16 md:py-[120px]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(36,30,18,0.66), rgba(68,54,35,0.26)), url('https://images.unsplash.com/photo-1540555700478-4be290a303f4?w=1600&q=80')",
        }}
      >
        <div className="mx-auto max-w-3xl text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">Opportunistic vacationer concept</p>
          <h1 className={cn(heroTitleClass, 'mt-6 italic text-white')}>You&apos;ve Earned This.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-xl">
            The procedure you&apos;ve been putting off. The trip to Vietnam you&apos;ve been meaning to take. Voya combines them, because taking care of yourself should never feel like a compromise.
          </p>
          <div className="mt-10">
            <CTAButton>Tell us what you need - we&apos;ll build your itinerary</CTAButton>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 md:py-[120px]">
        <SectionTitle
          eyebrow="Self-investment frame"
          title="A trip itinerary disguised as a service package."
          body="Every detail is designed to feel invitational rather than clinical. Indonesia gets proximity and better travel texture. Malaysia gets friction removal. Singapore gets premium convenience."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            { day: 'Day 1', title: 'Arrive Da Nang', body: 'Airport pickup, boutique hotel, easy dinner.' },
            { day: 'Day 2', title: 'Consultation', body: 'Quiet appointment, no waiting-room chaos.' },
            { day: 'Day 3', title: 'Procedure', body: 'Handled discreetly, then back to your room.' },
            { day: 'Days 4-8', title: 'Recover beautifully', body: 'Pool, beach walks, Vietnamese meals, slow mornings.' },
          ].map((item) => (
            <div key={item.day} className="rounded-[1.75rem] bg-[#fff9f0] p-6 shadow-sm">
              <div className="text-xs uppercase tracking-[0.24em] text-[#a6844b]">{item.day}</div>
              <div className="mt-3 font-display text-2xl text-[#3f2f24]">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-[#6a5a4d]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#ead7bf] px-6 py-16 md:px-16 md:py-[120px]">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: 'Dental refresh', copy: 'Veneers, whitening, aligners, rebuilt as warm menu cards rather than medical SKUs.' },
            { name: 'Skin and aesthetics', copy: 'Low-anxiety treatments that fit naturally into a Vietnam trip already on the calendar.' },
            { name: 'Wellness screening', copy: 'Premium check-ups and diagnostic packages for Singaporeans who value convenience over discounting.' },
          ].map((item) => (
            <div key={item.name} className="rounded-[2rem] bg-[#fff8ef] p-7 shadow-sm">
              <Sparkles className="h-6 w-6 text-[#b76e33]" />
              <h3 className="mt-4 font-display text-3xl italic text-[#523527]">{item.name}</h3>
              <p className="mt-3 text-sm leading-7 text-[#70594d]">{item.copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { flag: 'Indonesia', quote: 'Added one appointment to a Vietnam trip I was already planning. The rest of the week felt like a reward.' },
            { flag: 'Malaysia', quote: 'I already knew Vietnam was good for dental. I just did not want to coordinate flights, hotel, clinic, and transfers myself.' },
            { flag: 'Singapore', quote: 'This was not about saving money. It was about finally doing the thing and pairing it with a trip I wanted anyway.' },
          ].map((item) => (
            <div key={item.flag} className="rounded-[1.75rem] border border-white/50 bg-white/60 p-6 backdrop-blur">
              <div className="text-xs uppercase tracking-[0.28em] text-[#8e7d67]">{item.flag}</div>
              <p className="mt-4 font-display text-2xl leading-snug text-[#3d3029]">&ldquo;{item.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function TabThree() {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-[#e7f1f0] shadow-warm">
      <section
        className="relative min-h-[620px] bg-cover bg-center px-6 py-20 md:px-16 md:py-[120px]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(14,45,62,0.62), rgba(37,104,96,0.20)), url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1600&q=80')",
        }}
      >
        <div className="max-w-3xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">Travel-first recovery concept</p>
          <h1 className={cn(heroTitleClass, 'mt-6 text-white')}>While You Recover.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-xl">
            Most people spend their post-procedure days on the sofa. Voya patients spend theirs here.
          </p>
          <div className="mt-10">
            <CTAButton>Build your recovery itinerary - free to plan</CTAButton>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 md:py-[120px]">
        <SectionTitle
          eyebrow="A different kind of recovery"
          title="Lead with Phu Quoc, Da Nang, or Hoi An. Let the procedure be the quiet middle."
          body="For Indonesia, Malaysia, and Singapore, this is a specific Vietnam trip done in a smarter way. For Cambodia and Laos, it compresses into a restorative long weekend."
        />
        <div className="mt-10 overflow-x-auto pb-4">
          <div className="flex min-w-max gap-5">
            {itineraryDays.map((item) => (
              <div
                key={item.day}
                className={cn(
                  'relative h-[300px] w-[200px] shrink-0 overflow-hidden rounded-[1.75rem]',
                  item.muted ? 'bg-[#cad8d5]' : 'bg-slate-300',
                )}
              >
                {item.image && <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />}
                <div className={cn('absolute inset-0', item.muted ? 'bg-[#cad8d5]' : 'bg-gradient-to-t from-black/70 via-black/20 to-transparent')} />
                <div className={cn('absolute inset-x-0 bottom-0 p-5', item.muted ? 'text-[#183135]' : 'text-white')}>
                  <div className="text-xs uppercase tracking-[0.24em] opacity-80">{item.day}</div>
                  <div className="mt-2 font-display text-2xl leading-tight">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 opacity-90">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#d7ebe8] px-6 py-16 md:px-16 md:py-[120px]">
        <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h3 className="font-display text-3xl text-[#17353f]">What Voya arranges</h3>
            <div className="mt-6 grid gap-4">
              {[
                ['Flights', 'Timed around procedure and follow-up windows'],
                ['Hotel', 'Minimum 4-star, recovery-appropriate room setup'],
                ['Clinic', 'Appointment coordination and translator support'],
                ['Transfers', 'Airport, clinic, and easy day-trip movement'],
                ['In-country contact', 'One WhatsApp or Zalo thread for everything'],
              ].map(([title, copy]) => (
                <div key={title} className="flex gap-4 rounded-2xl bg-[#eef6f5] p-4">
                  <BadgeCheck className="mt-1 h-5 w-5 text-[#2e7b76]" />
                  <div>
                    <div className="font-semibold text-[#17353f]">{title}</div>
                    <div className="text-sm leading-6 text-[#4b6462]">{copy}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { place: 'Phu Quoc', mood: 'Soft reset', note: 'Private resort energy and total disconnection.' },
              { place: 'Da Nang', mood: 'Easy balance', note: 'Urban enough for logistics, coastal enough for recovery.' },
              { place: 'Hoi An', mood: 'Golden-hour calm', note: 'A slower, more atmospheric kind of healing.' },
            ].map((item) => (
              <div key={item.place} className="rounded-[1.75rem] bg-[#17353f] p-6 text-white shadow-sm">
                <MapPinned className="h-5 w-5 text-[#b9ded7]" />
                <div className="mt-4 text-xs uppercase tracking-[0.24em] text-white/60">{item.mood}</div>
                <div className="mt-2 font-display text-3xl">{item.place}</div>
                <p className="mt-3 text-sm leading-7 text-white/75">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function TabFour({ animateKey }) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-[#f3f4f7] shadow-warm">
      <section className="px-6 py-16 md:px-16 md:py-[120px]">
        <div className="grid gap-10 md:grid-cols-[1fr_0.95fr] md:items-center">
          <div className="rounded-[2rem] bg-[#e9efe7] p-5 shadow-sm md:p-8">
            <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-[#6b766b]">
              <span>WhatsApp thread</span>
              <span>11:24 PM</span>
            </div>
            <div className="space-y-4">
              {chatMessages.map((message, index) => (
                <ChatBubble key={`${animateKey}-${index}`} message={message} index={index} animateKey={animateKey} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#68718b]">Social proof concept</p>
            <h1 className={cn(heroTitleClass, 'mt-5 text-[#232b3b]')}>Your Friend Already Did It.</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#525968] md:text-lg">
              She just didn&apos;t tell you where she booked. This page borrows the visual language of forwarded screenshots, DMs, and group posts because trust is the medium as much as the message.
            </p>
            <div className="mt-8">
              <CTAButton>Join the Voya community - ask real patients your questions before you decide</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-16 md:py-[120px]">
        <SectionTitle
          eyebrow="What they&apos;re saying"
          title="Each market gets its own native trust aesthetic."
          body="Indonesia leans WhatsApp and TikTok honesty. Malaysia leans Facebook group depth. Singapore needs named, professional specificity. Cambodia and Laos rely on tighter community nodes."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { market: 'Indonesia', platform: 'TikTok honesty', quote: 'okay so I have been dodging these teeth questions and I should probably just tell the whole story properly' },
            { market: 'Malaysia', platform: 'Facebook group depth', quote: 'Long post incoming. Full breakdown of clinic, hotel, cost, what I wish I knew, and whether I would do it again.' },
            { market: 'Singapore', platform: 'Professional trust', quote: 'I am a fairly private person, but enough colleagues have asked that I thought I should write down what I actually did.' },
            { market: 'Cambodia and Laos', platform: 'Community referral', quote: 'Someone in my family circle had already done it. That was the only reason I listened in the first place.' },
          ].map((item, idx) => (
            <div key={item.market} className="rounded-[2rem] border border-[#e5e8ef] bg-[#f9fafc] p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.24em] text-[#7d869c]">{item.market}</div>
                <div
                  className={cn(
                    'rounded-full px-3 py-1 text-xs font-semibold',
                    idx === 0 && 'bg-[#dff5e7] text-[#1b6e48]',
                    idx === 1 && 'bg-[#e9eefc] text-[#3657b0]',
                    idx === 2 && 'bg-[#eef0f4] text-[#47505e]',
                    idx === 3 && 'bg-[#f6ead7] text-[#8b5b18]',
                  )}
                >
                  {item.platform}
                </div>
              </div>
              <p className="mt-5 font-display text-2xl leading-snug text-[#293245]">&ldquo;{item.quote}&rdquo;</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { creator: 'Indonesian beauty creator', followers: '84k followers' },
            { creator: 'Malaysian mothers group admin', followers: '21k members' },
            { creator: 'Singapore wellness micro-influencer', followers: '16k followers' },
          ].map((item) => (
            <div key={item.creator} className="rounded-[2rem] bg-[#111827] p-5 text-white shadow-sm">
              <div className="flex h-44 items-center justify-center rounded-[1.5rem] bg-[radial-gradient(circle_at_top,#ff8f70_0%,#f05d85_35%,#845ef7_70%,#111827_100%)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur">
                  <div className="ml-1 h-0 w-0 border-y-[12px] border-y-transparent border-l-[18px] border-l-white" />
                </div>
              </div>
              <div className="mt-4 text-sm font-semibold">{item.creator}</div>
              <div className="mt-1 text-sm text-white/60">{item.followers}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function TabFive() {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-[#f4ebd8] shadow-warm">
      <section
        className="relative min-h-[620px] bg-cover bg-center px-6 py-20 md:px-16 md:py-[120px]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(27,49,36,0.58), rgba(165,28,48,0.18)), url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80')",
        }}
      >
        <div className="max-w-3xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">VNTrip consumer holiday concept</p>
          <h1 className={cn(heroTitleClass, 'mt-6 text-white')}>Holiday, Handled.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-xl">
            You use VNTrip every time you travel for work. The flights, the hotels, the points. Your family&apos;s next holiday is the same app, same account, and the points are already waiting.
          </p>
          <div className="mt-10">
            <CTAButton>See your points balance - you might be closer to a holiday than you think</CTAButton>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 md:py-[120px]">
        <SectionTitle
          eyebrow="Owned-channel growth"
          title="Not a new audience. Just a new use case."
          body="This tab intentionally breaks away from Voya medical tourism. It is a lower-ambition, faster-conversion consumer holiday message aimed at VNTrip&apos;s existing corporate-user base."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            { icon: Plane, title: 'Flights', copy: 'Domestic and regional routes users already trust for work.' },
            { icon: Ticket, title: 'Hotels', copy: 'Family-ready stays surfaced with practical filters.' },
            { icon: CircleDollarSign, title: 'Points', copy: 'Make invisible loyalty balances suddenly tangible.' },
            { icon: HeartHandshake, title: 'Support', copy: 'Same account, same service relationship, lower anxiety.' },
          ].map(({ icon: Icon, title, copy }) => (
            <div key={title} className="rounded-[1.75rem] bg-white/80 p-6 shadow-sm">
              <Icon className="h-6 w-6 text-[#a51c30]" />
              <div className="mt-4 font-display text-2xl text-[#1f3427]">{title}</div>
              <p className="mt-2 text-sm leading-7 text-[#5d615a]">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#e5d7b4] px-6 py-16 md:px-16 md:py-[120px]">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[#1f3427] p-8 text-white shadow-sm">
            <div className="text-xs uppercase tracking-[0.3em] text-white/55">Points callout</div>
            <h3 className="mt-3 font-display text-4xl">You&apos;ve earned points on work trips. Most users have no idea how many.</h3>
            <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">
              This concept makes the hidden balance visible and emotionally legible: a family flight, a resort night, a school-break trip that suddenly feels within reach.
            </p>
            <div className="mt-8 rounded-[1.5rem] bg-white/10 p-5">
              <div className="text-sm text-white/60">In-app notification concept</div>
              <p className="mt-3 text-lg leading-8">
                You&apos;ve earned 18,400 points on work trips this year. That&apos;s a return flight to Da Nang for your family, and a night at a 4-star hotel.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {holidayDestinations.map((item) => (
              <div key={item.place} className="rounded-[1.75rem] bg-white/80 p-6 shadow-sm">
                <SunMedium className="h-5 w-5 text-[#b57f24]" />
                <div className="mt-4 font-display text-3xl text-[#1f3427]">{item.place}</div>
                <p className="mt-3 text-sm leading-7 text-[#5d615a]">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function Footer() {
  return (
    <footer className="mx-auto mt-10 max-w-[900px] px-4 pb-12 text-center text-sm text-white/65">
      Voya by VNTrip · Vietnam&apos;s health and travel package · © 2026
    </footer>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [displayedTab, setDisplayedTab] = useState(tabs[0])
  const [visible, setVisible] = useState(true)
  const [animateKey, setAnimateKey] = useState(0)

  useEffect(() => {
    if (activeTab === displayedTab) return
    setVisible(false)
    const switchTimer = window.setTimeout(() => {
      setDisplayedTab(activeTab)
      setAnimateKey((key) => key + 1)
      setVisible(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 300)

    return () => window.clearTimeout(switchTimer)
  }, [activeTab, displayedTab])

  const content = useMemo(() => {
    switch (displayedTab) {
      case 'Second Opinion?':
        return <TabOne />
      case "You've Earned This":
        return <TabTwo />
      case 'While You Recover':
        return <TabThree />
      case 'Your Friend Already Did It':
        return <TabFour animateKey={animateKey} />
      case 'Holiday, Handled':
        return <TabFive />
      default:
        return null
    }
  }, [displayedTab, animateKey])

  return (
    <div className="min-h-screen bg-navy text-[#1A1A2E]">
      <Header activeTab={activeTab} onTabClick={setActiveTab} />
      <main className="px-4 pb-6 pt-[84px] md:px-16">
        <div className="mx-auto max-w-[1100px]">
          <div
            className={cn(
              'transition-all duration-300',
              visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
              tabThemes[displayedTab],
            )}
          >
            {content}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

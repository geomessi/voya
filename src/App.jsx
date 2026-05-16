import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  CircleDollarSign,
  HeartHandshake,
  MapPinned,
  Plane,
  Quote,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  SunMedium,
  Ticket,
} from 'lucide-react'

const tabs = [
  'Second Opinion?',
  'At Last.',
  'Stay A Little Longer.',
  'Word Travels.',
  'Holiday, Handled.',
]

const themeShell = {
  'Second Opinion?': 'bg-[#f7f4ee]',
  'At Last.': 'bg-[#efe4d2]',
  'Stay A Little Longer.': 'bg-[#dfeceb]',
  'Word Travels.': 'bg-[#f2f2ef]',
  'Holiday, Handled.': 'bg-[#efe3cc]',
}

const priceRows = [
  {
    procedure: 'IVF',
    items: [
      { market: 'Australia', price: '$15,000', width: '100%' },
      { market: 'Bangkok', price: '$10,000', width: '67%' },
      { market: 'India', price: '$5,000', width: '33%' },
      { market: 'Vietnam', price: '$5,500', width: '37%', vietnam: true },
    ],
  },
  {
    procedure: 'Dental Implants',
    items: [
      { market: 'Singapore', price: '$7,500', width: '100%' },
      { market: 'Malaysia', price: '$5,200', width: '69%' },
      { market: 'Bangkok', price: '$4,800', width: '64%' },
      { market: 'Vietnam', price: '$3,100', width: '41%', vietnam: true },
    ],
  },
  {
    procedure: 'Knee Replacement',
    items: [
      { market: 'Australia', price: '$28,000', width: '100%' },
      { market: 'Bangkok', price: '$18,500', width: '66%' },
      { market: 'India', price: '$14,000', width: '50%' },
      { market: 'Vietnam', price: '$11,500', width: '41%', vietnam: true },
    ],
  },
  {
    procedure: 'Full-Body Health Scan',
    items: [
      { market: 'Singapore', price: '$2,300', width: '100%' },
      { market: 'Malaysia', price: '$1,500', width: '65%' },
      { market: 'Bangkok', price: '$1,250', width: '54%' },
      { market: 'Vietnam', price: '$780', width: '34%', vietnam: true },
    ],
  },
]

const recoveryDays = [
  { label: 'Day 1', title: 'Arrive in Da Nang', body: 'Airport meet-and-greet, quiet check-in, dinner sent up.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80' },
  { label: 'Day 3', title: 'Procedure day', body: 'Minimal schedule. Chauffeur. No loose ends.', muted: true },
  { label: 'Day 4', title: 'Poolside recovery', body: 'Breakfast in room, shade, sea air, nothing urgent.', image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80' },
  { label: 'Day 6', title: 'Hoi An at dusk', body: 'Short walk, lantern light, early return, easy evening.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=80' },
]

const socialTiles = [
  {
    market: 'Indonesia',
    platform: 'TikTok honesty',
    quote: 'I was not planning to tell anyone, and then everyone asked where I got it done.',
    accent: 'from-[#f59b7a] to-[#f05d85]',
  },
  {
    market: 'Malaysia',
    platform: 'Facebook group depth',
    quote: 'Long post incoming. The clinic, the hotel, the costs, and the part I was most nervous about.',
    accent: 'from-[#6ea1ff] to-[#3657b0]',
  },
  {
    market: 'Singapore',
    platform: 'Professional trust',
    quote: 'I am not usually public about things like this, but enough friends asked that I wrote it all down.',
    accent: 'from-[#9aa1ac] to-[#515866]',
  },
]

const holidayDestinations = [
  { place: 'Phu Quoc', note: 'Beach weekends, easy points burn, family-resort logic.' },
  { place: 'Da Nang', note: 'Fast flights, good hotels, school-break friendly.' },
  { place: 'Da Lat', note: 'Cooler air, coffee, pine trees, slower family pace.' },
  { place: 'Ha Long Bay', note: 'Big scenery, one dramatic trip, little planning friction.' },
]

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header({ activeTab, onTabChange }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#f5a623]/70 bg-[#121625]/95 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center gap-6 px-4 md:px-8">
        <div className="shrink-0 text-[17px] font-semibold tracking-[0.08em] text-white">Voya by VNTrip</div>
        <div className="flex-1 overflow-x-auto">
          <div className="mx-auto flex min-w-max items-center justify-center gap-2">
            {tabs.map((tab) => {
              const active = activeTab === tab
              return (
                <button
                  key={tab}
                  onClick={() => onTabChange(tab)}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm transition md:px-5 md:text-[15px]',
                    active ? 'text-white' : 'text-white/55 hover:text-white/85',
                  )}
                >
                  {tab}
                  <span
                    className={cn(
                      'absolute inset-x-4 -bottom-[11px] h-[3px] rounded-full bg-[#f5a623] transition-opacity',
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

function CTAButton({ children, dark = false }) {
  return (
    <button
      className={cn(
        'inline-flex items-center gap-3 rounded-full px-10 py-5 text-lg font-bold transition',
        dark ? 'bg-[#1a1a2e] text-white hover:bg-[#23233c]' : 'bg-[#f5a623] text-[#1a1a2e] hover:bg-[#d79729]',
      )}
    >
      {children}
      <ArrowRight className="h-5 w-5" />
    </button>
  )
}

function Shell({ children, tone = 'bg-white' }) {
  return <div className={cn('overflow-hidden rounded-[32px] shadow-[0_28px_80px_rgba(16,20,32,0.16)]', tone)}>{children}</div>
}

function HeroKicker({ children, light = false }) {
  return (
    <p className={cn('text-xs font-semibold uppercase tracking-[0.34em]', light ? 'text-white/60' : 'text-[#8a7757]')}>
      {children}
    </p>
  )
}

function HeroTitle({ children, light = false, italic = false }) {
  return (
    <h1 className={cn('font-display text-[56px] font-extrabold leading-none md:text-[96px]', light ? 'text-white' : 'text-[#17181f]', italic && 'italic')}>
      {children}
    </h1>
  )
}

function BodyCopy({ children, light = false, className = '' }) {
  return <p className={cn('text-[18px] leading-8 md:text-[21px]', light ? 'text-white/80' : 'text-[#4e5059]', className)}>{children}</p>
}

function SectionHeading({ eyebrow, title, body, light = false }) {
  return (
    <div className="max-w-3xl">
      <HeroKicker light={light}>{eyebrow}</HeroKicker>
      <h2 className={cn('mt-4 font-display text-[38px] leading-tight md:text-[56px]', light ? 'text-white' : 'text-[#17181f]')}>{title}</h2>
      {body && <p className={cn('mt-5 text-[17px] leading-8 md:text-[19px]', light ? 'text-white/75' : 'text-[#50525b]')}>{body}</p>}
    </div>
  )
}

function PriceChart() {
  return (
    <div className="rounded-[28px] bg-[#1a1a2e] px-8 py-10 text-white md:px-12 md:py-12">
      <div className="space-y-14">
        {priceRows.map((row) => (
          <div key={row.procedure}>
            <div className="mb-6 flex items-center justify-between gap-6">
              <h3 className="font-display text-[28px] md:text-[34px]">{row.procedure}</h3>
              <span className="text-xs uppercase tracking-[0.28em] text-white/45">illustrative package pricing</span>
            </div>
            <div className="space-y-6">
              {row.items.map((item) => (
                <div key={`${row.procedure}-${item.market}`}>
                  <div className="mb-3 flex items-center justify-between text-sm text-white/92 md:text-base">
                    <span>{item.market}</span>
                    <span>{item.price}</span>
                  </div>
                  <div className="h-[14px] rounded-full bg-white/10">
                    <div
                      className={cn('h-[14px] rounded-full', item.vietnam ? 'bg-[#f5a623]' : 'bg-[#4a6a8a]')}
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SplitStatement({ leftTitle, leftItems, rightTitle, rightItems }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-[28px] bg-white p-10 md:p-[40px]">
        <h3 className="font-display text-[30px] text-[#1a1a2e] md:text-[38px]">{leftTitle}</h3>
        <div className="mt-6 space-y-4">
          {leftItems.map((item) => (
            <p key={item} className="text-[17px] leading-8 text-[#44474f]">
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="rounded-[28px] bg-[#1a1a2e] p-10 text-[#f5a623] md:p-[40px]">
        <h3 className="font-display text-[30px] md:text-[38px]">{rightTitle}</h3>
        <div className="mt-6 space-y-4">
          {rightItems.map((item) => (
            <p key={item} className="text-[17px] leading-8 text-[#f3d18d]">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

function TabSecondOpinion() {
  return (
    <Shell tone="bg-[#f7f4ee]">
      <section className="bg-white px-6 py-16 md:px-16 md:py-[120px]">
        <div className="mx-auto flex min-h-[55vh] max-w-4xl flex-col items-center justify-center text-center">
          <HeroKicker>Specialist seeker concept</HeroKicker>
          <HeroTitle>Second Opinion?</HeroTitle>
          <BodyCopy className="mt-8 max-w-3xl">
            Your doctor may be right about what you need. Your hospital&apos;s price tag is a different conversation. IVF in Australia costs
            $15,000. A comparable pathway in Vietnam can land around $5,500. Voya handles the rest.
          </BodyCopy>
          <div className="mt-10">
            <CTAButton>Get your free second opinion</CTAButton>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 md:py-[120px]">
        <SectionHeading
          eyebrow="Decision intelligence"
          title="A smarter answer to specialist sticker shock."
          body="This concept should feel like expensive information: precise, restrained, and quietly confident. The argument lands first. The warmth arrives later."
        />
        <div className="mt-14">
          <PriceChart />
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f7f4ee_0%,#efdec1_28%,#d1aa63_100%)] px-6 py-16 md:px-16 md:py-[120px]">
        <SplitStatement
          leftTitle="What changes."
          leftItems={[
            'Price drops versus Bangkok, Singapore, Australia, or premium Indian hospital groups.',
            'Recovery shifts from a domestic city apartment to a better physical setting.',
            'One concierge handles flights, hotel, clinic coordination, transfers, and follow-up.',
          ]}
          rightTitle="What does not."
          rightItems={[
            'Doctor credentials, accreditation standards, and modern equipment.',
            'The expectation of transparent clinical answers before any commitment.',
            'The seriousness of the decision, or the scrutiny the patient should bring to it.',
          ]}
        />

        <div className="mt-16 grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <HeroKicker>Why it earns trust</HeroKicker>
            <h3 className="mt-4 font-display text-[38px] leading-tight text-[#17181f] md:text-[56px]">They were not chasing cheaper IVF. They were chasing IVM.</h3>
            <p className="mt-5 text-[18px] leading-8 text-[#32343c]">
              The Priya-and-Sai archetype is powerful because the story is not about bargain hunting. It is about access, clarity, and one
              decisive trip for a protocol their home market could not offer well.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#272932]">
              {['JCI-aligned partners', 'Doctor profiles with cross-border experience', 'Itemized packages before commitment'].map((item) => (
                <span key={item} className="rounded-full border border-[#8c6b35]/20 bg-white/70 px-4 py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1600&q=80"
            alt="Modern clinic interior"
            className="h-[540px] w-full rounded-[28px] object-cover"
          />
        </div>
      </section>
    </Shell>
  )
}

function TabAtLast() {
  return (
    <Shell tone="bg-[#efe4d2]">
      <section
        className="relative overflow-hidden px-6 py-16 md:px-16 md:py-[120px]"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(32,24,18,0.52), rgba(32,24,18,0.08)), url('https://images.unsplash.com/photo-1540555700478-4be290a303f4?w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-3xl">
          <HeroKicker light>Premium self-investment concept</HeroKicker>
          <HeroTitle light italic>
            At Last.
          </HeroTitle>
          <BodyCopy light className="mt-8 max-w-2xl">
            The trip you meant to take. The appointment you&apos;ve been putting off. Voya brings them together with just enough structure to let the whole thing feel easy.
          </BodyCopy>
          <div className="mt-10">
            <CTAButton>Tell us what you need</CTAButton>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 md:py-[120px]">
        <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <SectionHeading
            eyebrow="For once, for you"
            title="A beauty-editorial mood with travel underneath it."
            body="This tab should feel softer and slower than the others. Not clinical. Not performatively luxurious. Just considered, warm, and emotionally resolved."
          />
          <div className="grid gap-8">
            {[
              {
                title: 'What you have been putting off',
                body: 'Dental refreshes, skin work, and low-anxiety aesthetic procedures presented with the calm of a luxury beauty brochure rather than a medical menu.',
              },
              {
                title: 'The trip you meant to take',
                body: 'Da Nang mornings, lantern-lit evenings, one beautiful hotel room, and a schedule that leaves enough space to enjoy the decision you made.',
              },
              {
                title: 'Make room for yourself',
                body: 'The value is not only cost. It is how gracefully the whole experience comes together, especially for travelers who want care without chaos.',
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-[#b49769]/35 pt-6">
                <h3 className="font-display text-[28px] italic text-[#382920] md:text-[38px]">{item.title}</h3>
                <p className="mt-3 text-[17px] leading-8 text-[#675447]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
        <img
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1600&q=80"
          alt="Elegant hotel interior"
          className="h-[520px] w-full object-cover md:h-[720px]"
        />
        <div className="flex flex-col justify-between bg-[#d7bf99] px-6 py-16 md:px-16 md:py-[120px]">
          <div>
            <HeroKicker>What women are really buying</HeroKicker>
            <h3 className="mt-4 font-display text-[38px] leading-tight text-[#231b16] md:text-[56px]">Not a discount procedure. A better-composed decision.</h3>
            <p className="mt-5 text-[18px] leading-8 text-[#47392f]">
              Indonesia gets proximity and a more textured trip than Bangkok. Malaysia gets friction removed. Singapore gets self-investment with hospitality polish instead of administrative drag.
            </p>
          </div>
          <div className="mt-12">
            <CTAButton dark>Start planning your Voya</CTAButton>
          </div>
        </div>
      </section>
    </Shell>
  )
}

function TabStayLonger() {
  return (
    <Shell tone="bg-[#dfeceb]">
      <section
        className="relative overflow-hidden px-6 py-16 md:px-16 md:py-[120px]"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(15,52,66,0.60), rgba(15,52,66,0.14)), url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-3xl">
          <HeroKicker light>Recovery-as-destination concept</HeroKicker>
          <HeroTitle light>Stay A Little Longer.</HeroTitle>
          <BodyCopy light className="mt-8 max-w-2xl">
            Most recoveries are something to get through. This one is something to plan well, with sea air, slower mornings, and every practical detail already taken care of.
          </BodyCopy>
          <div className="mt-10">
            <CTAButton>Build your recovery itinerary</CTAButton>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 md:py-[120px]">
        <SectionHeading
          eyebrow="Rest, arranged"
          title="Lead with the destination. Let the procedure stay in the quiet middle."
          body="For Indonesia, Malaysia, and Singapore, this is a more thoughtful Vietnam trip. For Cambodia and Laos, it compresses into a restorative long weekend with very little wasted motion."
        />
        <div className="mt-14 overflow-x-auto pb-2">
          <div className="flex min-w-max gap-6">
            {recoveryDays.map((day) => (
              <div key={day.label} className="relative h-[360px] w-[250px] overflow-hidden rounded-[26px] bg-[#c9d9d8]">
                {day.image && <img src={day.image} alt={day.title} className="absolute inset-0 h-full w-full object-cover" />}
                <div className={cn('absolute inset-0', day.muted ? 'bg-[#c9d9d8]' : 'bg-gradient-to-t from-black/70 via-black/15 to-transparent')} />
                <div className={cn('absolute inset-x-0 bottom-0 p-6', day.muted ? 'text-[#17353f]' : 'text-white')}>
                  <div className="text-xs uppercase tracking-[0.28em] opacity-75">{day.label}</div>
                  <div className="mt-3 font-display text-[28px] leading-tight">{day.title}</div>
                  <p className="mt-3 text-sm leading-7 opacity-90">{day.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#103845] px-6 py-16 text-white md:px-16 md:py-[120px]">
        <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Where recovery begins"
            title="Voya handles the practical details so the atmosphere can do its job."
            body="Ground-floor rooms if needed. Quiet hotel choices. Translator support. Transfers that run on time. A single contact thread that prevents little anxieties from multiplying."
            light
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { icon: Plane, title: 'Flights timed well', copy: 'Scheduled around procedure windows and follow-up constraints.' },
              { icon: BadgeCheck, title: 'Hotels chosen for recovery', copy: 'Not just beautiful. Quiet, easy, and physically sensible.' },
              { icon: MapPinned, title: 'Destinations that help', copy: 'Da Nang, Hoi An, and Phu Quoc chosen for tone as much as logistics.' },
              { icon: ShieldCheck, title: 'One thread for everything', copy: 'WhatsApp or Zalo support without scattered vendor coordination.' },
            ].map(({ icon: Icon, title, copy }) => (
              <div key={title} className="border-t border-white/20 pt-5">
                <Icon className="h-5 w-5 text-[#a8d7cf]" />
                <h3 className="mt-4 font-display text-[28px]">{title}</h3>
                <p className="mt-2 text-[16px] leading-7 text-white/72">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  )
}

function TabWordTravels() {
  return (
    <Shell tone="bg-[#f2f2ef]">
      <section className="overflow-hidden px-6 py-16 md:px-16 md:py-[120px]">
        <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <div>
            <HeroKicker>Designed-native social proof concept</HeroKicker>
            <HeroTitle>Word Travels.</HeroTitle>
            <BodyCopy className="mt-8 max-w-2xl">
              The best recommendations rarely arrive as advertisements. They arrive in screenshots, voice notes, forwarded posts, and messages from someone whose opinion you already trust.
            </BodyCopy>
            <div className="mt-10">
              <CTAButton>Join the Voya community</CTAButton>
            </div>
          </div>

          <div className="rotate-[-2deg] rounded-[28px] border border-[#d7d7d2] bg-white p-6 shadow-[0_20px_50px_rgba(16,20,32,0.10)]">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-[#7d817d]">
              <span>WhatsApp thread</span>
              <span>11:24 PM</span>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { right: false, text: 'Wait. You got your veneers in Da Nang?' },
                { right: true, text: 'Yes. Flights, hotel, clinic. I booked it through Voya and barely had to think.' },
                { right: false, text: 'Was it actually good or are you being nice?' },
                { right: true, text: 'Being annoyingly serious. Before you ask them, ask the people who have done it.' },
              ].map((item, index) => (
                <div key={index} className={cn('flex', item.right ? 'justify-end' : 'justify-start')}>
                  <div className={cn('max-w-[78%] rounded-[22px] px-4 py-3 text-[15px] leading-7', item.right ? 'rounded-br-md bg-[#DCF8C6] text-[#203024]' : 'rounded-bl-md bg-[#f3f4f5] text-[#2f3340]')}>
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-16 md:py-[120px]">
        <SectionHeading
          eyebrow="Before you ask us, ask them"
          title="The page should feel passed around, not hard-sold."
          body="Indonesia gets TikTok candor. Malaysia gets fuller Facebook-group detail. Singapore gets named professional specificity. Cambodia and Laos rely on tighter trust networks."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {socialTiles.map((tile) => (
            <div key={tile.market} className="overflow-hidden rounded-[26px] border border-[#e5e6e2] bg-[#fafaf8]">
              <div className={cn('h-3 bg-gradient-to-r', tile.accent)} />
              <div className="p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-[#8a8d94]">{tile.platform}</div>
                <h3 className="mt-4 font-display text-[30px] leading-tight text-[#23262f]">{tile.market}</h3>
                <div className="mt-5 flex items-start gap-3">
                  <Quote className="mt-1 h-5 w-5 shrink-0 text-[#b4b7bd]" />
                  <p className="text-[16px] leading-8 text-[#494d57]">{tile.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#191d28] px-6 py-16 text-white md:px-16 md:py-[120px]">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <SectionHeading
            eyebrow="Why this works"
            title="Trust moves faster when the brand steps back."
            body="Micro and nano creators should not sound briefed. The campaign should feel like an accumulation of real stories, surfaced elegantly and given just enough structure by Voya."
            light
          />
          <div className="space-y-8">
            {['TikTok and Reels for candid reveal stories', 'Facebook groups for detailed breakdowns and reassurance', 'Community-led referrals in Cambodia and Laos', 'A named, more polished testimonial mode for Singapore'].map((item) => (
              <div key={item} className="border-t border-white/15 pt-5 text-[17px] leading-8 text-white/78">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  )
}

function TabHolidayHandled() {
  return (
    <Shell tone="bg-[#efe3cc]">
      <section
        className="relative overflow-hidden px-6 py-16 md:px-16 md:py-[120px]"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(27,49,36,0.54), rgba(27,49,36,0.16)), url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-3xl">
          <HeroKicker light>Warm consumer holiday concept</HeroKicker>
          <HeroTitle light>Holiday, Handled.</HeroTitle>
          <BodyCopy light className="mt-8 max-w-2xl">
            You already trust VNTrip for work. The flights, the hotels, the points. Your family&apos;s next trip is sitting in the same account, waiting for someone to remember it is there.
          </BodyCopy>
          <div className="mt-10">
            <CTAButton>See your points balance</CTAButton>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 md:py-[120px]">
        <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Owned-channel growth"
            title="Not a new audience. Just a warmer, more joyful use case."
            body="This page should feel practical and friendly, but still polished. The key emotional unlock is not luxury. It is the pleasant surprise that work travel has already earned something fun."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: Plane, title: 'Flights', copy: 'Domestic and regional routes users already book with VNTrip.' },
              { icon: Ticket, title: 'Hotels', copy: 'Family-ready stays surfaced with easier decision making.' },
              { icon: CircleDollarSign, title: 'Points', copy: 'A hidden balance turned into a visible weekend.' },
              { icon: HeartHandshake, title: 'Support', copy: 'Same account, same service relationship, less planning stress.' },
            ].map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-[26px] bg-white/70 p-6">
                <Icon className="h-5 w-5 text-[#a51c30]" />
                <h3 className="mt-4 font-display text-[30px] text-[#203124]">{title}</h3>
                <p className="mt-2 text-[16px] leading-7 text-[#596258]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#dabc86] px-6 py-16 md:px-16 md:py-[120px]">
        <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <HeroKicker>Where your points take you</HeroKicker>
            <h3 className="mt-4 font-display text-[38px] leading-tight text-[#1e281f] md:text-[56px]">A family trip should feel closer than people think.</h3>
            <p className="mt-5 text-[18px] leading-8 text-[#3f473d]">
              This is the tab that can be warmer, simpler, and a little more fun. The message is not aspirational reinvention. It is useful delight.
            </p>
            <div className="mt-10 rounded-[28px] bg-[#1f3427] p-7 text-white">
              <div className="text-sm uppercase tracking-[0.24em] text-white/55">Notification concept</div>
              <p className="mt-3 text-[20px] leading-8">
                You&apos;ve earned 18,400 points on work trips this year. That&apos;s a return flight to Da Nang for your family, plus a night at a 4-star hotel.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {holidayDestinations.map((item) => (
              <div key={item.place} className="border-t border-[#856632]/35 pt-5">
                <SunMedium className="h-5 w-5 text-[#8c641a]" />
                <h3 className="mt-4 font-display text-[30px] text-[#1f3427]">{item.place}</h3>
                <p className="mt-2 text-[16px] leading-7 text-[#495248]">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  )
}

function Footer() {
  return (
    <footer className="mx-auto mt-10 max-w-[1100px] px-4 pb-12 text-center text-sm text-white/60">
      Voya by VNTrip · Vietnam&apos;s health and travel package · © 2026
    </footer>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [displayedTab, setDisplayedTab] = useState(tabs[0])
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (activeTab === displayedTab) return
    setVisible(false)
    const timer = window.setTimeout(() => {
      setDisplayedTab(activeTab)
      setVisible(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 300)

    return () => window.clearTimeout(timer)
  }, [activeTab, displayedTab])

  const content = useMemo(() => {
    switch (displayedTab) {
      case 'Second Opinion?':
        return <TabSecondOpinion />
      case 'At Last.':
        return <TabAtLast />
      case 'Stay A Little Longer.':
        return <TabStayLonger />
      case 'Word Travels.':
        return <TabWordTravels />
      case 'Holiday, Handled.':
        return <TabHolidayHandled />
      default:
        return null
    }
  }, [displayedTab])

  return (
    <div className="min-h-screen bg-[#121625]">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="px-4 pb-6 pt-[92px] md:px-8">
        <div className="mx-auto max-w-[1100px]">
          <div className={cn('transition-all duration-300', visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0', themeShell[displayedTab])}>
            {content}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

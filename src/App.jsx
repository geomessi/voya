import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  CheckCheck,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  HeartHandshake,
  Hotel,
  MapPinned,
  MessageSquare,
  Plane,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
} from 'lucide-react'

const campaignTabs = [
  'Second Opinion?',
  'At Last.',
  'Stay A Little Longer.',
  'Word Travels.',
  'Holiday, Handled',
]

const entryOptions = [
  {
    label: 'I need a second opinion',
    tab: 'Second Opinion?',
    slogan: 'Question the quote. Not the care.',
    traveler: 'Specialist seeker',
    insight: 'The patient trusts the diagnosis, but wants a smarter path to the outcome.',
    cta: 'Get a free second opinion',
    treatment: 'Crisp comparison card',
  },
  {
    label: "I've been putting something off",
    tab: 'At Last.',
    slogan: 'Self-investment, beautifully handled.',
    traveler: 'Opportunistic vacationer',
    insight: 'Travel desire lowers the emotional friction around finally doing the thing.',
    cta: 'Plan your Voya itinerary',
    treatment: 'Warm itinerary preview',
  },
  {
    label: 'I want to recover somewhere beautiful',
    tab: 'Stay A Little Longer.',
    slogan: 'Recovery becomes part of the product.',
    traveler: 'Recovery-first traveler',
    insight: 'The days after matter as much as the appointment itself.',
    cta: 'Build a recovery-aware trip',
    treatment: 'Coastal recovery timeline',
  },
  {
    label: 'My friend already did it',
    tab: 'Word Travels.',
    slogan: 'Recommendation is the channel.',
    traveler: 'Peer-led decision maker',
    insight: 'Private proof often works better than polished brand persuasion.',
    cta: 'Join the Voya patient community',
    treatment: 'Chat-native social proof',
  },
  {
    label: 'I just want it handled',
    tab: 'Holiday, Handled',
    slogan: 'The trusted VNTrip account, now for life beyond work.',
    traveler: 'Utility-first planner',
    insight: 'One account, one operator, fewer moving parts, less cognitive load.',
    cta: 'See where your points can take you',
    treatment: 'Handled end-to-end dashboard',
  },
]

const campaignData = {
  'Second Opinion?': {
    segment: 'Specialist seeker',
    headline: 'Question the quote. Not the care.',
    insight: 'Sticker shock becomes the entry point.',
    sloganStack: [
      'Second Opinion?',
      "Your doctor's advice. A different price tag.",
      'What changes is the cost. Not the care.',
      'Before you say yes, ask Vietnam.',
    ],
    adMoment: 'A clean comparison screen that shows Bangkok, Australia, and Vietnam side by side, with Voya highlighting the total managed trip cost.',
    productTieBack: 'Voya turns quote anxiety into a managed comparison flow with verified clinics, trip totals, and consultation support.',
    cta: 'Get a free second opinion',
    accent: 'bg-[#182234]',
  },
  'At Last.': {
    segment: 'Opportunistic vacationer',
    headline: 'Self-investment, beautifully handled.',
    insight: 'Travel desire softens care friction.',
    sloganStack: [
      'At Last.',
      'For once, for you.',
      'The trip you wanted anyway.',
      'Make room for yourself.',
    ],
    adMoment: 'A warm hotel-room moment in Da Nang, with one line of copy over it and the treatment only revealed in the details.',
    productTieBack: 'Voya packages the clinic visit inside a better-feeling trip, so the product lands as hospitality plus care.',
    cta: 'Plan your Voya itinerary',
    accent: 'bg-[#2a241f]',
  },
  'Stay A Little Longer.': {
    segment: 'Recovery-first traveler',
    headline: 'Recovery becomes part of the product.',
    insight: 'The days after matter as much as the appointment.',
    sloganStack: [
      'Stay A Little Longer.',
      'Rest, arranged.',
      'Recovery does not have to feel clinical.',
      'Where recovery begins.',
    ],
    adMoment: 'A destination-led carousel where the procedure is a quiet middle slide and the recovery setting does most of the persuasion.',
    productTieBack: 'Voya differentiates by designing the hotel, pacing, follow-up, and departure around recovery, not just booking around the procedure.',
    cta: 'Build a recovery-aware trip',
    accent: 'bg-[#162733]',
  },
  'Word Travels.': {
    segment: 'Peer-led decision maker',
    headline: 'Recommendation is the channel.',
    insight: 'Trust is passed along, not announced.',
    sloganStack: [
      'Word Travels.',
      'Before you ask us, ask them.',
      "Ask someone who's been.",
      'Forwarded from someone you trust.',
    ],
    adMoment: 'A forwarded message thread, a saved highlight, and a creator confession post that all point back to the same Voya concierge flow.',
    productTieBack: 'Voya becomes the verified operator behind stories that feel personal, not the loudest voice in the room.',
    cta: 'Join the Voya patient community',
    accent: 'bg-[#1d2432]',
  },
  'Holiday, Handled': {
    segment: 'Owned-channel VNTrip user',
    headline: 'The trusted VNTrip account, now for life beyond work.',
    insight: 'Owned channels make this fast and practical.',
    sloganStack: [
      'Handled from hello.',
      'You recover. We coordinate.',
      'From airport pickup to post-op.',
      'One guide. One plan. One trip.',
    ],
    adMoment: 'A points-led card that turns corporate travel history into a family trip or personal-care itinerary in one tap.',
    productTieBack: 'This lens shows how VNTrip can extend from infrastructure into concierge operating system, with Voya as the care layer.',
    cta: 'See where your points can take you',
    accent: 'bg-[#203021]',
  },
}

const messagingCategories = {
  'Price confidence': [
    'Second Opinion?',
    "Your doctor's advice. A different price tag.",
    'What changes is the cost. Not the care.',
    'Before you say yes, ask Vietnam.',
  ],
  'Self-investment': [
    'At Last.',
    'For once, for you.',
    'The trip you wanted anyway.',
    'Make room for yourself.',
  ],
  'Recovery travel': [
    'Stay A Little Longer.',
    'Rest, arranged.',
    'Recovery does not have to feel clinical.',
    'Where recovery begins.',
  ],
  'Social proof': [
    'Word Travels.',
    'Before you ask us, ask them.',
    "Ask someone who's been.",
    'Forwarded from someone you trust.',
  ],
  'Concierge handled': [
    'Handled from hello.',
    'You recover. We coordinate.',
    'From airport pickup to post-op.',
    'One guide. One plan. One trip.',
  ],
}

const productCards = [
  {
    title: 'Verified clinics',
    body: 'Trusted providers, clearer framing, visible credentials, and procedure context.',
    icon: BadgeCheck,
  },
  {
    title: 'Dedicated local guide',
    body: 'A named concierge who coordinates your plan before, during, and after arrival.',
    icon: UserRound,
  },
  {
    title: 'Recovery-aware trip plan',
    body: 'Flights, hotel, follow-up, and departure logic shaped around the procedure itself.',
    icon: CalendarCheck2,
  },
]

const trustCards = [
  {
    question: 'How do I know the clinic is safe?',
    answer: 'Verified clinic cards, visible credentials, and shortlists that actually make sense.',
    icon: ShieldCheck,
  },
  {
    question: 'Who coordinates my appointments?',
    answer: 'A Voya concierge sequences the care plan, transfers, and communication.',
    icon: MessageSquare,
  },
  {
    question: 'What happens after the procedure?',
    answer: 'Recovery-aware hotel planning, follow-up support, and one contact thread.',
    icon: Clock3,
  },
  {
    question: 'What does the full trip cost?',
    answer: 'Voya shows the total managed journey, not only one clinic line item.',
    icon: CircleDollarSign,
  },
]

const artifacts = [
  { title: 'Verified clinic card', type: 'clinic' },
  { title: 'Concierge intro from Linh', type: 'chat' },
  { title: 'Quote comparison sheet', type: 'price' },
  { title: 'Consultation summary', type: 'summary' },
  { title: 'Airport pickup confirmation', type: 'pickup' },
  { title: 'Recovery itinerary', type: 'itinerary' },
  { title: 'Post-procedure checklist', type: 'checklist' },
  { title: 'WhatsApp support thread', type: 'whatsapp' },
]

const journeySteps = [
  { title: 'Upload or share your quote', body: 'Start with the care question, not the booking flow.', type: 'price' },
  { title: 'Linh shortlists verified clinics', body: 'A human guide turns the search into a real shortlist.', type: 'chat' },
  { title: 'Compare prices and consultation options', body: 'See care, logistics, and trip total in one view.', type: 'comparison' },
  { title: 'VNTrip books flights and hotel', body: 'Travel infrastructure shifts from background to advantage.', type: 'itinerary' },
  { title: 'Arrive in Ho Chi Minh City', body: 'Airport pickup and arrival support are already arranged.', type: 'pickup' },
  { title: 'Attend consultation', body: 'Clinic timing, local transport, and translation are coordinated.', type: 'summary' },
  { title: 'Complete procedure', body: 'The treatment sits inside one managed journey.', type: 'clinic' },
  { title: 'Recover in Da Nang, Hoi An, or Phu Quoc', body: 'Recovery becomes a designed setting, not an afterthought.', type: 'destination' },
  { title: 'Fly home with follow-up support', body: 'The trip ends with a plan, not a handoff into silence.', type: 'checklist' },
]

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111827]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-4 md:px-8">
        <div className="text-[17px] font-semibold tracking-[0.08em] text-[#F9FAFB]">VNTrip</div>
        <nav className="hidden items-center gap-6 text-sm text-[#9CA3AF] lg:flex">
          <a href="#entry-selector" className="transition hover:text-white">
            Journey
          </a>
          <a href="#artifacts" className="transition hover:text-white">
            Artifacts
          </a>
          <a href="#messaging-lab" className="transition hover:text-white">
            Messaging
          </a>
          <a href="#campaign-lab" className="transition hover:text-white">
            Campaigns
          </a>
        </nav>
      </div>
    </header>
  )
}

function Eyebrow({ children }) {
  return <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9CA3AF]">{children}</p>
}

function SectionTitle({ children, className = '' }) {
  return <h2 className={cn('text-[42px] font-semibold leading-[0.9] tracking-[-0.05em] text-[#F9FAFB] md:text-[72px]', className)}>{children}</h2>
}

function Body({ children, className = '' }) {
  return <p className={cn('text-[16px] leading-7 text-[#9CA3AF] md:text-[18px]', className)}>{children}</p>}

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
    <div className={cn('w-[310px] rounded-[42px] border border-white/12 bg-[#0c1320] p-[10px] shadow-[0_40px_100px_rgba(0,0,0,0.45)]', className)}>
      <div className="relative overflow-hidden rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,#07111f_0%,#0b1628_100%)] p-5">
        <div className="mb-4 flex items-center justify-between text-white">
          <span className="text-[11px] font-semibold">9:41</span>
          <div className="h-7 w-28 rounded-full bg-black/70" />
          <div className="flex items-center gap-1 text-[10px] text-white/80">
            <span className="h-2 w-2 rounded-full bg-white/80" />
            <span className="h-2 w-2 rounded-full bg-white/80" />
            <span className="h-2 w-5 rounded-sm bg-white/80" />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

function MockClinicThumbnail({ variant = 0 }) {
  const variants = [
    {
      shell: 'from-[#d8d0c5] via-[#f7f3ec] to-[#b89f81]',
      accent: '#b58c56',
      sign: 'KIM DENTAL',
    },
    {
      shell: 'from-[#ddd6cb] via-[#faf7f1] to-[#c8b49c]',
      accent: '#8f816f',
      sign: 'VIETMED',
    },
    {
      shell: 'from-[#d1c4b1] via-[#f5ede0] to-[#a99072]',
      accent: '#8f7a56',
      sign: 'ALPHA',
    },
  ]
  const current = variants[variant % variants.length]

  return (
    <div className={cn('relative aspect-[4/3] overflow-hidden rounded-[18px] bg-gradient-to-br', current.shell)}>
      <div className="absolute inset-x-0 top-0 h-[62%] bg-[linear-gradient(180deg,rgba(255,255,255,0.66),rgba(255,255,255,0.18))]" />
      <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(180deg,#c8b398_0%,#b79f83_100%)]" />
      <div className="absolute left-0 top-[58%] h-px w-full bg-white/45" />
      <div className="absolute left-4 right-4 top-4 h-3 rounded-full bg-white/55" />
      <div className="absolute left-5 top-10 h-16 w-20 rounded-[14px] bg-white/48 shadow-[0_12px_20px_rgba(0,0,0,0.06)]" />
      <div className="absolute right-5 top-10 h-24 w-28 rounded-[16px] bg-white/38 shadow-[0_14px_28px_rgba(0,0,0,0.08)]" />
      <div className="absolute left-1/2 top-[52%] h-12 w-28 -translate-x-1/2 rounded-[14px] bg-white/82 shadow-[0_10px_24px_rgba(0,0,0,0.12)]" />
      <div className="absolute left-1/2 top-[58%] h-5 w-14 -translate-x-1/2 rounded-full bg-black/12" />
      <div className="absolute left-8 top-[60%] h-10 w-8 rounded-t-[14px] bg-[#3c6d46]/85" />
      <div className="absolute left-[30px] top-[56%] h-6 w-12 rounded-full bg-[#4d8657]" />
      <div className="absolute right-8 top-[60%] h-10 w-8 rounded-t-[14px] bg-[#3c6d46]/85" />
      <div className="absolute right-[30px] top-[56%] h-6 w-12 rounded-full bg-[#4d8657]" />
      <div className="absolute left-1/2 top-[18%] -translate-x-1/2 text-[11px] font-semibold tracking-[0.18em]" style={{ color: current.accent }}>
        {current.sign}
      </div>
      <div className="absolute left-1/2 top-[28%] h-8 w-8 -translate-x-1/2 rounded-full border border-white/70" style={{ backgroundColor: `${current.accent}20` }} />
      <div className="absolute left-1/2 top-[30.5%] h-3 w-3 -translate-x-1/2 rounded-full" style={{ backgroundColor: current.accent }} />
      <div className="absolute bottom-5 right-5 h-8 w-16 rounded-[12px] bg-white/55 shadow-[0_8px_18px_rgba(0,0,0,0.08)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_36%)]" />
    </div>
  )
}

function MiniArtifact({ type, title, compact = false }) {
  const wrapper = compact ? 'rounded-[22px] p-4' : 'rounded-[26px] p-5'

  if (type === 'clinic') {
    return (
      <div className={cn('border border-white/10 bg-[#1F2937] shadow-[0_16px_36px_rgba(0,0,0,0.16)]', wrapper)}>
        <div className="flex items-center justify-between">
          <div className="text-[11px] uppercase tracking-[0.24em] text-[#9CA3AF]">Clinic</div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#112518] px-3 py-1 text-[11px] text-[#22C55E]">
            <BadgeCheck className="h-3.5 w-3.5" />
            Voya Verified
          </div>
        </div>
        <div className="mt-4 text-[22px] font-semibold tracking-[-0.03em] text-[#F9FAFB]">Kim Dental</div>
        <div className="mt-2 text-[14px] leading-6 text-[#9CA3AF]">Dental implant package with consultation and transfer support.</div>
        <div className="mt-4 text-[18px] font-semibold text-[#F5A623]">From $1,400</div>
      </div>
    )
  }

  if (type === 'chat' || type === 'whatsapp') {
    return (
      <div className={cn('border border-white/10 bg-[#1F2937] shadow-[0_16px_36px_rgba(0,0,0,0.16)]', wrapper)}>
        <div className="text-[11px] uppercase tracking-[0.24em] text-[#9CA3AF]">{type === 'chat' ? 'Concierge chat' : 'WhatsApp support'}</div>
        <div className="mt-4 space-y-3">
          <div className="max-w-[86%] rounded-[18px] rounded-bl-md bg-white/8 px-4 py-3 text-[14px] leading-6 text-[#F9FAFB]">
            {type === 'chat'
              ? 'Hi, I’m Linh. I’ve shortlisted 3 clinics for your consultation. Want to see them?'
              : 'Checking in after your follow-up. Do you want me to move your airport transfer later?'}
          </div>
          <div className="ml-auto max-w-[80%] rounded-[18px] rounded-br-md bg-[#F5A623] px-4 py-3 text-[14px] leading-6 text-[#111827]">
            Yes, please send me the options.
          </div>
        </div>
      </div>
    )
  }

  if (type === 'price' || type === 'comparison') {
    return (
      <div className={cn('border border-white/10 bg-[#1F2937] shadow-[0_16px_36px_rgba(0,0,0,0.16)]', wrapper)}>
        <div className="text-[11px] uppercase tracking-[0.24em] text-[#9CA3AF]">{type === 'price' ? 'Quote comparison' : 'Comparison view'}</div>
        <div className="mt-4 space-y-3">
          {[
            ['Bangkok', '$10,000'],
            ['Australia', '$15,000'],
            ['Vietnam', '$5,500'],
          ].map(([market, price]) => (
            <div key={market} className="rounded-[16px] bg-white/6 px-4 py-3">
              <div className="flex items-center justify-between text-[14px] text-[#F9FAFB]">
                <span>{market}</span>
                <span className={market === 'Vietnam' ? 'text-[#F5A623]' : 'text-[#F9FAFB]'}>{price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'itinerary') {
    return (
      <div className={cn('border border-white/10 bg-[#1F2937] shadow-[0_16px_36px_rgba(0,0,0,0.16)]', wrapper)}>
        <div className="text-[11px] uppercase tracking-[0.24em] text-[#9CA3AF]">Recovery itinerary</div>
        <div className="mt-4 space-y-3">
          {['Arrival', 'Consultation', 'Procedure', 'Recovery hotel', 'Follow-up', 'Departure'].map((item, index) => (
            <div key={item} className="flex items-center gap-3 rounded-[16px] bg-white/6 px-4 py-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#14213A] text-[11px] text-[#F9FAFB]">{index + 1}</div>
              <div className="text-[14px] text-[#F9FAFB]">{item}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'summary') {
    return (
      <div className={cn('border border-white/10 bg-[#1F2937] shadow-[0_16px_36px_rgba(0,0,0,0.16)]', wrapper)}>
        <div className="text-[11px] uppercase tracking-[0.24em] text-[#9CA3AF]">Consultation summary</div>
        <div className="mt-4 rounded-[18px] bg-white/6 p-4">
          <div className="text-[16px] font-semibold text-[#F9FAFB]">Recommended pathway</div>
          <div className="mt-2 text-[14px] leading-6 text-[#9CA3AF]">Consultation complete. Two verified clinic options. One preferred recovery hotel.</div>
        </div>
      </div>
    )
  }

  if (type === 'pickup') {
    return (
      <div className={cn('border border-white/10 bg-[#1F2937] shadow-[0_16px_36px_rgba(0,0,0,0.16)]', wrapper)}>
        <div className="text-[11px] uppercase tracking-[0.24em] text-[#9CA3AF]">Airport pickup</div>
        <div className="mt-4 rounded-[18px] bg-white/6 p-4">
          <div className="flex items-center gap-3">
            <Plane className="h-4 w-4 text-[#F5A623]" />
            <div className="text-[15px] text-[#F9FAFB]">Driver confirmed for SGN arrival</div>
          </div>
          <div className="mt-3 text-[14px] leading-6 text-[#9CA3AF]">Meet-and-greet, clinic transfer, hotel check-in support.</div>
        </div>
      </div>
    )
  }

  if (type === 'checklist') {
    return (
      <div className={cn('border border-white/10 bg-[#1F2937] shadow-[0_16px_36px_rgba(0,0,0,0.16)]', wrapper)}>
        <div className="text-[11px] uppercase tracking-[0.24em] text-[#9CA3AF]">Post-procedure checklist</div>
        <div className="mt-4 space-y-3">
          {['Medication timing confirmed', 'Follow-up appointment booked', 'Airport transfer held', 'Support thread active'].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-[16px] bg-white/6 px-4 py-3">
              <CheckCheck className="h-4 w-4 text-[#22C55E]" />
              <div className="text-[14px] text-[#F9FAFB]">{item}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'destination') {
    return (
      <div className={cn('border border-white/10 bg-[#1F2937] shadow-[0_16px_36px_rgba(0,0,0,0.16)]', wrapper)}>
        <div className="text-[11px] uppercase tracking-[0.24em] text-[#9CA3AF]">Recovery destination</div>
        <div className="mt-4 rounded-[18px] bg-[linear-gradient(140deg,#1c3442_0%,#2b5567_100%)] p-4">
          <div className="text-[18px] font-semibold text-[#F9FAFB]">Da Nang, Hoi An, Phu Quoc</div>
          <div className="mt-2 text-[14px] leading-6 text-white/78">Recovery pacing, hotel comfort, and gentle follow-up flow built in.</div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('border border-white/10 bg-[#1F2937] shadow-[0_16px_36px_rgba(0,0,0,0.16)]', wrapper)}>
      <div className="text-[16px] text-[#F9FAFB]">{title}</div>
    </div>
  )
}

function AppMockups() {
  return (
    <div className="relative flex min-h-[540px] items-start justify-center pt-6 lg:min-h-[600px]">
      <PhoneFrame className="absolute left-0 top-10 rotate-[-10deg]">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">Curated clinics</div>
            <div className="mt-2 text-[17px] leading-tight text-[#F9FAFB]">Clinics in</div>
            <div className="text-[17px] leading-tight text-[#F9FAFB]">Ho Chi Minh City</div>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-[#F5A623]">
            <Sparkles className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-5 space-y-3">
          {[
            ['Kim Dental', 'Dental implants', '$1,400'],
            ['VietMed Aesthetics', 'Rhinoplasty', '$2,450'],
            ['Alpha Wellness Clinic', 'Weight loss surgery', '$3,900'],
          ].map(([name, specialty, price], index) => (
            <div key={name} className="overflow-hidden rounded-[22px] border border-white/10 bg-white/5">
              <div className="p-3 pb-0">
                <MockClinicThumbnail variant={index} />
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-4 p-4">
                <div>
                  <div className="text-[18px] leading-tight text-[#F9FAFB]">{name}</div>
                  <div className="mt-1 text-[14px] text-white/70">{specialty}</div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#112518] px-3 py-1 text-[11px] text-[#22C55E]">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Voya Verified
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/38">from</div>
                  <div className="mt-1 text-[18px] font-semibold text-[#F5A623]">{price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2 border-t border-white/8 pt-4 text-center text-[11px] text-white/56">
          {['Clinics', 'Concierge', 'Trip', 'Profile'].map((item, index) => (
            <div key={item} className={cn('rounded-[14px] px-2 py-2', index === 0 && 'bg-white/6 text-[#F5A623]')}>
              {item}
            </div>
          ))}
        </div>
      </PhoneFrame>

      <PhoneFrame className="relative z-10 mt-2 scale-[1.08]">
        <div className="text-center">
          <div className="text-[13px] text-[#F9FAFB]">Voya Concierge</div>
          <div className="mt-1 text-[12px] text-[#22C55E]">● Online</div>
        </div>
        <div className="mt-5 rounded-[24px] border border-white/8 bg-[#091325] px-4 py-5">
          <div className="rounded-full bg-white/8 px-3 py-1 text-center text-[11px] text-white/54">Today</div>
          <div className="mt-5 flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A623] text-[18px] text-[#111827]">L</div>
            <div className="max-w-[82%] rounded-[22px] rounded-tl-md bg-white/10 px-4 py-4 text-[16px] leading-7 text-[#F9FAFB]">
              <div className="mb-1 text-[14px] text-[#F5A623]">Linh, your Voya guide</div>
              I&apos;ve shortlisted 3 clinics for your consultation. Want to see them?
              <div className="mt-2 text-right text-[12px] text-white/38">9:41 AM</div>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <div className="max-w-[72%] rounded-[22px] rounded-tr-md bg-[#E8F7C7] px-4 py-4 text-[16px] leading-7 text-[#111827]">
              Yes, show me.
              <div className="mt-2 text-right text-[12px] text-[#53604b]">9:41 AM</div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {['View clinics', 'See availability', 'Ask a question'].map((item, index) => (
              <div key={item} className={cn('rounded-full border border-white/10 bg-white/8 px-4 py-3 text-center text-[13px] text-[#F9FAFB]', index === 2 && 'col-span-2')}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 flex items-center gap-3 rounded-full bg-white/8 px-4 py-3">
          <div className="flex-1 text-[14px] text-white/42">Type a message</div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A623] text-[#111827]">
            <MessageSquare className="h-4 w-4" />
          </div>
        </div>
      </PhoneFrame>

      <PhoneFrame className="absolute right-0 top-10 rotate-[11deg]">
        <div>
          <div className="text-[15px] text-[#F9FAFB]">Your Voya trip — 8 nights</div>
          <div className="mt-1 text-[13px] text-white/58">Ho Chi Minh City, Vietnam</div>
        </div>
        <div className="mt-6 space-y-5">
          {[
            ['Flight Arrival', 'Sat, Jun 1, 2024', "We'll pick you up at the airport.", Plane],
            ['Consultation Day 1', 'Sun, Jun 2, 2024', 'Meet your doctor and review your plan.', Stethoscope],
            ['Procedure Day 2', 'Mon, Jun 3, 2024', 'Your procedure is scheduled in the morning.', HeartHandshake],
            ['Recovery Stay (Days 3–7)', 'Tue, Jun 4 – Sat, Jun 8, 2024', 'Rest, recover, and follow-up care with our team.', Hotel],
            ['Departure Day 8', 'Sun, Jun 9, 2024', "We'll take you to the airport. Safe travels!", Plane],
          ].map(([title, date, body, Icon], index) => (
            <div key={title} className="grid grid-cols-[36px_1fr] gap-4">
              <div className="relative flex justify-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/6 text-[#F5A623]">
                  <Icon className="h-4 w-4" />
                </div>
                {index < 4 && <div className="absolute top-10 h-[54px] w-px bg-white/16" />}
              </div>
              <div>
                <div className="text-[15px] text-[#F9FAFB]">{title}</div>
                <div className="mt-1 text-[12px] text-white/46">{date}</div>
                <div className="mt-2 text-[13px] leading-6 text-white/70">{body}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[18px] bg-[#F5A623] px-5 py-4 text-center text-[15px] font-medium text-[#111827]">View trip details</div>
      </PhoneFrame>
    </div>
  )
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="overflow-hidden rounded-[40px] bg-[radial-gradient(circle_at_top_right,#14213A_0%,#111827_38%,#0f172a_76%)] px-6 py-12 text-white shadow-[0_30px_80px_rgba(0,0,0,0.28)] md:px-12 md:py-14 lg:px-16"
    >
      <div className="flex flex-col items-center text-center">
        <div className="max-w-[42rem] pt-2">
          <Eyebrow>VNTRIP PRESENTS</Eyebrow>
          <h1 className="mt-4 text-[72px] font-semibold leading-[0.88] tracking-[-0.06em] text-[#F9FAFB] md:text-[116px]">
            Voya
          </h1>
        </div>
        <div className="mt-8 w-full">
          <AppMockups />
        </div>
      </div>
    </section>
  )
}

function EntrySelectorSection() {
  const [selected, setSelected] = useState(entryOptions[0])

  return (
    <section id="entry-selector" className="grid gap-10 py-4">
      <div className="max-w-4xl">
        <Eyebrow>INTERACTIVE ENTRY SELECTOR</Eyebrow>
        <SectionTitle className="mt-4">What brings you to Vietnam?</SectionTitle>
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="grid gap-3">
          {entryOptions.map((option) => {
            const active = selected.label === option.label
            return (
              <button
                key={option.label}
                onClick={() => setSelected(option)}
                className={cn(
                  'rounded-[26px] border px-5 py-5 text-left transition',
                  active
                    ? 'border-[#F5A623] bg-[#1F2937] shadow-[0_18px_40px_rgba(0,0,0,0.20)]'
                    : 'border-white/8 bg-[#1F2937] hover:border-white/18 hover:bg-[#243040]',
                )}
              >
                <div className={cn('text-[16px] font-medium', active ? 'text-[#F9FAFB]' : 'text-[#D1D5DB]')}>{option.label}</div>
              </button>
            )
          })}
        </div>

        <div className="overflow-hidden rounded-[34px] border border-white/8 bg-[#111827] shadow-[0_24px_60px_rgba(0,0,0,0.22)]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="px-6 py-8 md:px-8 md:py-9">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#9CA3AF]">Chosen Voya journey</div>
              <div className="mt-4 text-[36px] font-semibold leading-[0.96] tracking-[-0.05em] text-[#F9FAFB]">{selected.slogan}</div>
              <div className="mt-6 inline-flex rounded-full bg-[#14213A] px-3 py-1 text-[12px] text-[#F5A623]">{selected.traveler}</div>
              <p className="mt-6 max-w-md text-[16px] leading-7 text-[#9CA3AF]">{selected.insight}</p>
              <div className="mt-8">
                <CTAButton>{selected.cta}</CTAButton>
              </div>
            </div>
            <div className="border-t border-white/8 bg-[linear-gradient(180deg,#14213A_0%,#111827_100%)] p-6 lg:border-l lg:border-t-0">
              {selected.treatment === 'Crisp comparison card' && <MiniArtifact type="comparison" title="" />}
              {selected.treatment === 'Warm itinerary preview' && <MiniArtifact type="itinerary" title="" />}
              {selected.treatment === 'Coastal recovery timeline' && <MiniArtifact type="destination" title="" />}
              {selected.treatment === 'Chat-native social proof' && <MiniArtifact type="whatsapp" title="" />}
              {selected.treatment === 'Handled end-to-end dashboard' && <MiniArtifact type="summary" title="" />}
            </div>
          </div>
        </div>
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

function ProductTieCard({ title, body }) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-[#1F2937] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#9CA3AF]">
        <Sparkles className="h-3.5 w-3.5 text-[#F5A623]" />
        <span>{title}</span>
      </div>
      <p className="mt-4 text-[18px] leading-8 text-[#F9FAFB]">{body}</p>
    </div>
  )
}

function TrustLayer() {
  return (
    <section
      id="trust"
      className="overflow-hidden rounded-[40px] bg-[linear-gradient(140deg,#111827_0%,#14213A_100%)] px-6 py-16 text-white shadow-[0_30px_80px_rgba(0,0,0,0.28)] md:px-12 md:py-20 lg:px-16"
    >
      <div className="max-w-3xl">
        <Eyebrow>TRUST LAYER</Eyebrow>
        <SectionTitle className="mt-4">Designed around the questions patients actually ask.</SectionTitle>
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

function ArtifactsSection() {
  return (
    <section id="artifacts" className="grid gap-10 py-4">
      <div className="max-w-4xl">
        <Eyebrow>VOYA ARTIFACTS</Eyebrow>
        <SectionTitle className="mt-4">The Voya experience, made tangible.</SectionTitle>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {artifacts.map((artifact) => (
          <div key={artifact.title} className="rounded-[30px] border border-white/8 bg-[#111827] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.20)]">
            <div className="mb-3 text-[11px] uppercase tracking-[0.24em] text-[#9CA3AF]">{artifact.title}</div>
            <MiniArtifact type={artifact.type} title={artifact.title} compact />
          </div>
        ))}
      </div>
    </section>
  )
}

function MessagingLab() {
  const categories = Object.keys(messagingCategories)
  const [activeCategory, setActiveCategory] = useState(categories[0])

  return (
    <section id="messaging-lab" className="grid gap-10 py-4">
      <div className="max-w-4xl">
        <Eyebrow>MESSAGING LAB</Eyebrow>
        <SectionTitle className="mt-4">Messaging lab.</SectionTitle>
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="grid gap-3">
          {categories.map((category) => {
            const active = category === activeCategory
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'rounded-[24px] border px-5 py-4 text-left transition',
                  active ? 'border-[#F5A623] bg-[#1F2937]' : 'border-white/8 bg-[#1F2937] hover:border-white/18',
                )}
              >
                <div className={cn('text-[16px] font-medium', active ? 'text-[#F9FAFB]' : 'text-[#D1D5DB]')}>{category}</div>
              </button>
            )
          })}
        </div>
        <div className="rounded-[34px] border border-white/8 bg-[#111827] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.20)] md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            {messagingCategories[activeCategory].map((line) => (
              <div key={line} className="rounded-[24px] border border-white/8 bg-[#1F2937] px-5 py-5 text-[20px] font-medium leading-tight tracking-[-0.03em] text-[#F9FAFB]">
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function JourneySection() {
  return (
    <section id="journey" className="grid gap-10 py-4">
      <div className="max-w-4xl">
        <Eyebrow>VOYA JOURNEY</Eyebrow>
        <SectionTitle className="mt-4">A Voya trip, step by step.</SectionTitle>
      </div>
      <div className="relative rounded-[36px] border border-white/8 bg-[#111827] px-6 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.22)] md:px-8 md:py-10">
        <div className="absolute bottom-8 left-[26px] top-8 w-px bg-white/10 md:left-[35px]" />
        <div className="grid gap-5">
          {journeySteps.map((step, index) => (
            <div
              key={step.title}
              className="grid gap-4 rounded-[28px] border border-white/8 bg-[#1F2937] p-5 transition duration-300 hover:translate-x-1 hover:border-white/14 md:grid-cols-[auto_1fr_280px] md:items-center"
            >
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A623] text-[13px] font-semibold text-[#111827]">
                {index + 1}
              </div>
              <div>
                <div className="text-[24px] font-semibold leading-tight tracking-[-0.03em] text-[#F9FAFB]">{step.title}</div>
                <div className="mt-2 max-w-xl text-[15px] leading-7 text-[#9CA3AF]">{step.body}</div>
              </div>
              <div className="md:justify-self-end md:w-[260px]">
                <MiniArtifact type={step.type} title={step.title} compact />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CampaignLab() {
  const [active, setActive] = useState(campaignTabs[0])
  const [displayed, setDisplayed] = useState(campaignTabs[0])
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (active === displayed) return
    setVisible(false)
    const timer = window.setTimeout(() => {
      setDisplayed(active)
      setVisible(true)
    }, 260)
    return () => window.clearTimeout(timer)
  }, [active, displayed])

  const data = useMemo(() => campaignData[displayed], [displayed])

  return (
    <section id="campaign-lab" className="grid gap-12 py-4">
      <div className="max-w-4xl">
        <Eyebrow>CAMPAIGN LAB</Eyebrow>
        <SectionTitle className="mt-4">Five ways travelers discover Voya.</SectionTitle>
        <Body className="mt-5 max-w-2xl">Each campaign speaks to a different emotional entry point, but all roads lead back to the same concierge product.</Body>
      </div>

      <div className="flex overflow-x-auto pb-2">
        <div className="mx-auto flex min-w-max gap-2 rounded-full border border-white/8 bg-[#1F2937] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
          {campaignTabs.map((tab) => {
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

      <div className={cn('overflow-hidden rounded-[40px] border border-white/8 bg-[#111827] shadow-[0_30px_80px_rgba(0,0,0,0.24)] transition-all duration-300', visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0')}>
        <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="px-6 py-10 text-white md:px-10 md:py-12">
            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-full bg-[#14213A] px-3 py-1 text-[12px] text-[#F5A623]">{data.segment}</div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#9CA3AF]">{displayed}</div>
            </div>
            <h3 className="mt-5 max-w-[14ch] text-[40px] font-semibold leading-[0.94] tracking-[-0.05em] text-[#F9FAFB] md:text-[60px]">{data.headline}</h3>
            <p className="mt-6 max-w-[18rem] text-[18px] leading-8 text-[#F5A623]">{data.insight}</p>
            <div className="mt-8 grid gap-3">
              {data.sloganStack.map((line) => (
                <div key={line} className="rounded-[22px] border border-white/8 bg-[#1F2937] px-4 py-4 text-[18px] font-medium leading-tight text-[#F9FAFB]">
                  {line}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CTAButton>{data.cta}</CTAButton>
            </div>
          </div>

          <div className={cn('flex flex-col justify-between border-t border-white/10 px-6 py-10 text-white md:px-10 md:py-12 lg:border-l lg:border-t-0', data.accent)}>
            <div className="grid gap-5">
              <div className="rounded-[30px] border border-white/10 bg-[#1F2937] p-6">
                <div className="text-[11px] uppercase tracking-[0.24em] text-[#9CA3AF]">Sample ad moment</div>
                <p className="mt-4 text-[18px] leading-8 text-[#F9FAFB]">{data.adMoment}</p>
              </div>
              <ProductTieCard title="Product tie-back" body={data.productTieBack} />
              <div className="grid gap-4 md:grid-cols-2">
                <MiniArtifact type="clinic" title="" compact />
                <MiniArtifact
                  type={
                    displayed === 'Second Opinion?'
                      ? 'comparison'
                      : displayed === 'At Last.'
                        ? 'itinerary'
                        : displayed === 'Stay A Little Longer.'
                          ? 'destination'
                          : displayed === 'Word Travels.'
                            ? 'whatsapp'
                            : 'summary'
                  }
                  title=""
                  compact
                />
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
          <Body className="mt-6 max-w-xl">VNTrip already owns the travel infrastructure. Voya adds the trust, care, and coordination layer.</Body>
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
          <EntrySelectorSection />
          <ProductExperience />
          <TrustLayer />
          <ArtifactsSection />
          <MessagingLab />
          <JourneySection />
          <CampaignLab />
          <ClosingSection />
        </div>
        <Footer />
      </main>
    </div>
  )
}

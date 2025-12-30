export const landingContent = {
  seo: {
    title: 'Second Brain - Never Forget Again',
    description:
      'An AI-powered second brain that captures your thoughts, reminds you at the right moment, and recalls anything instantly.',
    ogImage: '/favicon.ico',
    url: 'https://secondbrain.app',
  },
  nav: {
    logo: 'Second Brain',
    ctaLabel: 'Join Beta',
    ctaHref: 'https://testflight.apple.com/join/secondbrain',
    links: [
      { label: 'How it Works', href: '#how-it-works' },
      { label: 'Features', href: '#capture' },
      { label: 'Why', href: '#why' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  hero: {
    label: 'FOR BUSY BRAINS',
    headline: ['Dump your thoughts.', "We'll sort them out."],
    subheadline: 'Capture by voice. Get reminded at the right time. Ask in plain English. No organizing required.',
    primaryCta: { label: 'Join the Beta', href: 'https://testflight.apple.com/join/secondbrain' },
    secondaryCta: { label: 'See how it works', href: '#how-it-works' },
    phones: {
      capture: {
        label: 'Capture',
        gif: 'https://i.imgur.com/o58ORok.gif',
      },
      recall: {
        label: 'Recall',
        gif: 'https://i.imgur.com/o58ORok.gif',
      },
    },
  },
  howItWorks: {
    label: 'HOW IT WORKS',
    headline: 'Dump it in.',
    accent: 'Get it back.',
    rememberLabel: 'REMEMBER FOR ME',
    recallLabel: 'RECALL FOR ME',
    remember: {
      input: {
        icon: 'mic',
        title: 'Capture',
        subtitle: 'in Voice or Text',
        example: '"Mom\'s birthday is Saturday, she mentioned wanting that garden tool set from the podcast she listens to"',
      },
      outputs: [
        {
          icon: 'bell',
          title: 'Nudge',
          subtitle: 'Right time, right tone',
          example: '"Mom\'s birthday Saturday — got her gift yet?"',
        },
        {
          icon: 'brain',
          title: 'Memory',
          subtitle: 'Well organized',
          example: '"Family · Mom · Birthday · Gift ideas"',
        },
      ],
    },
    recall: {
      input: {
        icon: 'search',
        title: 'Ask',
        subtitle: 'in Plain English',
        example: '"What did mom want for her birthday?"',
      },
      output: {
        icon: 'message',
        title: 'Answer',
        subtitle: 'Instant recall',
        example: '"Garden tool set from the podcast she listens to"\n🎂 Birthday Saturday',
      },
    },
    brain: {
      icon: 'brain',
      label: 'Second Brain',
      sublabel: 'Memory + AI',
    },
  },
  features: {
    label: 'FEATURES',
    headline: 'Designed for how your',
    accent: 'brain actually works',
    cards: [
      {
        id: 'voice',
        icon: 'mic',
        title: 'Voice-first',
        description: 'Get thoughts out before they vanish. Just talk - messy, half-formed, whatever.',
        span: 'col-span-1 lg:col-span-2',
        tone: 'hero',
      },
      {
        id: 'decisions',
        icon: 'brain',
        title: 'Zero decisions',
        description: 'No folders. No tags. No categories. Just talk - AI figures out the rest.',
        span: 'col-span-1',
        tone: 'light',
      },
      {
        id: 'nudges',
        icon: 'messageCircle',
        title: 'Gentle nudges',
        description: 'Human reminders, not robot alerts. No guilt, no shame.',
        span: 'col-span-1',
        tone: 'light',
      },
      {
        id: 'chaos',
        icon: 'refreshCw',
        title: 'Works for your chaos',
        description: "Disappear for weeks. Come back. No guilt trip - just 'welcome back.'",
        span: 'col-span-1 lg:col-span-2',
        tone: 'light',
      },
      {
        id: 'privacy',
        icon: 'lock',
        title: 'Private by default',
        description: 'Your thoughts stay yours. Private by design.',
        span: 'col-span-1 lg:col-span-3',
        tone: 'dark',
      },
    ],
    demos: {
      voice: {
        status: 'Recording...',
        transcription: '"Ran into Jake at lunch... book about habits... changed his life"',
      },
      zeroDecisions: {
        placeholder: '???',
        destinationTags: ['Action', 'Friday'],
      },
      gentle: {
        badExample: '⚠️ OVERDUE: Call dentist',
        goodExample: '✅ Still want to do this?',
      },
      chaos: {
        caption: 'Still works ✓',
      },
      privacy: {
        subtitle: 'On-device storage. No cloud sync. No ads. Your second brain stays yours.',
      },
    },
  },
  useCases: {
    label: 'USE CASES',
    headline: 'Real things people hand to their second brain',
    ui: {
      inputLabel: 'Input',
      outputLabel: 'Output',
      listeningLabel: 'Listening',
    },
    cases: [
      {
        id: 'memory',
        type: 'voice',
        input:
          'I ran into Jake at lunch, he recommended a book about habits, said it changed his life.',
        output: {
          title: 'Book recommendation from Jake',
          context: '"Atomic Habits" - changed his life',
          labels: ['📚 Books', '👤 Jake'],
          meta: 'Captured today',
        },
      },
      {
        id: 'action',
        type: 'voice',
        input:
          'I need to call the dentist tomorrow morning to reschedule that appointment I missed.',
        output: {
          title: 'Call dentist to reschedule',
          context: 'Will nudge at 9am',
          labels: ['📞 Call', '⚡ Quick'],
          meta: 'Tomorrow morning',
        },
      },
      {
        id: 'search',
        type: 'search',
        input: 'What was that book Jake mentioned?',
        output: {
          title: 'Atomic Habits by James Clear',
          context: 'Jake recommended at lunch',
          labels: ['📚 Books'],
          meta: 'From Dec 15',
        },
      },
    ],
  },
  socialProof: {
    label: 'BETA LOVE',
    headline: 'People feel seen when they try it',
    testimonials: [
      {
        quote:
          'I stopped feeling guilty about missed reminders. It nudges me like the friend who just gets it.',
        name: 'Tara, 32',
        role: 'ADHD coach',
      },
      {
        quote: 'It remembered the dentist story after two weeks of silence. That felt unreal.',
        name: 'Marcus, 41',
        role: 'Product lead',
      },
      {
        quote:
          'I dumped chaos in and it sent back one thing that actually mattered. That is the magic.',
        name: 'Selene, 28',
        role: 'Founder',
      },
    ],
  },
  painPoints: {
    label: 'SOUND FAMILIAR?',
    headline: "If you've ever...",
    items: [
      'Forgotten something important the moment you got distracted',
      'Opened a notes app and felt overwhelmed before typing anything',
      'Set a reminder that popped up at the worst possible time',
      'Tried a productivity system that made you feel worse about yourself',
      'Had a great idea in the shower and lost it by the time you dried off',
      "Known you wrote something down somewhere but couldn't find it",
    ],
    reassurance: "You're not broken. Your tools are.",
  },
  faq: {
    label: 'FAQ',
    headline: 'Questions? Answers.',
    items: [
      {
        question: 'Is my data private?',
        answer:
          "Yes. Your data stays private. We don't sell your information. Your second brain is yours alone.",
      },
      {
        question: 'Is this just another todo app?',
        answer:
          'No. Todo apps require you to organize, categorize, and remember to check them. Second Brain captures your raw thoughts, figures out what is actionable, and reminds you at the right moment. You just talk - it does the rest.',
      },
      {
        question: 'How does the AI work?',
        answer:
          'When you capture a thought, AI extracts what matters: is it an action or just information? What is the deadline? Who is involved? It does this in under 2 seconds, then uses that to decide when and how to remind you.',
      },
      {
        question: 'What platforms is it available on?',
        answer:
          'Second Brain is currently available on iOS (iPhone and iPad). Android and web versions are on our roadmap.',
      },
      {
        question: 'Can I use it on Apple Watch?',
        answer:
          "Yes! You can capture thoughts directly from your Apple Watch — perfect for those moments when pulling out your phone isn't convenient.",
      },
      {
        question: 'How do I search my memories?',
        answer:
          'Just ask in plain English. Type or say something like "What did mom want for her birthday?" and Second Brain will find it instantly. No folders or tags to remember.',
      },
      {
        question: 'When can I try it?',
        answer:
          "We're currently in beta on iOS. Click 'Join the Beta' to get access via TestFlight and start using it today.",
      },
      {
        question: 'Is it free?',
        answer:
          'During beta, yes. We are figuring out pricing but expect a simple model: free tier for basics, paid for power features.',
      },
    ],
  },
  finalCta: {
    headline: 'Ready to',
    accent: 'never forget again?',
    subtext: 'Join the beta. Your second brain is waiting.',
    ctaLabel: 'Join the Beta',
    ctaHref: 'https://testflight.apple.com/join/secondbrain',
    helper: 'Free during beta, no credit card required',
  },
  footer: {
    logo: 'Second Brain',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Contact', href: 'mailto:hello@secondbrain.app' },
      { label: 'Twitter', href: 'https://twitter.com/secondbrainapp' },
    ],
    copyright: 'Copyright 2025 Second Brain. All rights reserved.',
  },
} as const

export type LandingContent = typeof landingContent

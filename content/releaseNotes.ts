// Release notes shown on /changelog. Add new entries to the TOP of `releases`.
// Mirror the markdown source at ../../release-notes.md so both stay in sync.
//
// Schema rules:
// - `version` is a semver string ("v0.7.0"). Used as the visible badge.
// - `date` is human-readable ("December 27, 2025"). Keep ISO-ordered in array.
// - `headline` is one short sentence (≤ 80 chars). Optional, but improves scan.
// - `groups` are categorized buckets. Order doesn't matter; the page sorts them.
// - `credit` is for releases inspired by a named user (per CLAUDE.md power-user policy).

export type ReleaseGroupType = 'features' | 'improvements' | 'fixes' | 'technical'

export interface ReleaseGroup {
  type: ReleaseGroupType
  items: string[]
}

export interface Release {
  version: string
  date: string
  headline?: string
  credit?: string
  groups: ReleaseGroup[]
}

export const releases: Release[] = [
  {
    version: 'v0.2.0',
    date: 'May 1, 2026',
    groups: [
      {
        type: 'features',
        items: [
          'Daily Reminder times are now editable — tap a slot to open a time picker and pick any hour and minute, with an explicit "Off" label when a slot is disabled. Section copy explains the feature ("gentle pings to remind you to dump your brain into the app") and a "Reset times to defaults" button restores 9 AM / 12 PM / 6 PM / 9 PM. Thanks reddit user Damoet.',
          'Tapping Actions or Memory in the floating tab bar now closes Settings and returns to the chosen tab, instead of leaving Settings stuck open inside the tab\'s navigation stack.',
          'Action detail now shows the full schedule of upcoming reminders, with sent history collapsed underneath.',
          'New sort options for Actions: Smart, By deadline, By criticality, By effort, and By date added. The criticality and effort sorts group items into clear sections (Critical / Normal / Low and Quick / Medium / Deep). Pick from the Actions-tab dropdown or Settings → Behavior — same control, both stay in sync, your pick persists across launches. Thanks reddit user Damoet.',
          'Type, Priority, Effort, and Deadline can be corrected inline from the action detail sheet — taps persist immediately, no save button needed.',
          'Capture placeholder hints alternate between action examples and note examples, shuffle on every appearance, and demonstrate specific times in numeric form (e.g., "10am tomorrow", "3:00 pm") so voice capture parses them more reliably. Thanks reddit user Damoet.',
          'Ask AI search bar shows rotating question-style placeholder examples to demonstrate what you can ask.',
          'Voice ↔ text round-trip in capture: tap the mic icon while typing to resume recording, and typed text is preserved. Thanks reddit user Damoet.',
          'Particle burst celebration animation when completing a task (respects Reduce Motion). Thanks reddit user Damoet.',
          'First-launch-of-day affirmation overlay with rotating warm copy that auto-dismisses. Thanks reddit user Damoet.',
        ],
      },
      {
        type: 'improvements',
        items: [
          'Effort indicators swapped from emoji to flat SF Symbols (bolt / clock / brain) with Quick / Medium / Deep labels alongside, and chips are now fixed-width so icons align across cards, the widget, and detail sheets.',
          'Critical items now stand out across the whole stack — a "🔴 Critical" chip on cards (deduped against the overdue red dot), a red triangle / red border / red-tinted background in the widget, a ⚠ prefix on notification titles for Apple Watch and lock-screen glanceability, and a tighter classifier prompt that catches more of them in the first place. Thanks reddit user Damoet.',
          'Action and Memory detail sheets redesigned — Actions get a clearer top-down hierarchy (title → content → labels → primary actions → corrections → delete); Memories get a focal-content treatment so they read like reference material, not tasks.',
          'Type correction redesigned as a verb-led link ("Mark as Memory →" / "Mark as Action →"), replacing the ambiguous "This is not an action" footer toggle that users mistook for a status indicator. Thanks reddit user Damoet.',
          'Deadline picker simplified to a single calendar button, with the full date + time picker visible (no more cut-off time wheel).',
        ],
      },
      {
        type: 'fixes',
        items: [
          'Voice capture is more reliable on launch and when switching modes — no more first-tap dud after a cold start, no more crash on first launch, and no more "microphone not ready" hiccup when toggling back to voice from text.',
          'Reminders are more reliable end-to-end — they stay in sync when you edit a task (priority, deadline, effort, type, or your daily reminder times), and they fire at the time you actually said. "By 8pm" now pings at 8pm, not at noon or at the start of the evening.',
          'Lockscreen widget no longer crams content at smaller sizes. Thanks reddit user broccoliqueen_72.',
        ],
      },
    ],
  },
  {
    version: 'v0.1.0',
    date: 'December 27, 2025',
    headline: 'The marketing site goes live, hand-built end to end.',
    groups: [
      {
        type: 'features',
        items: [
          'Shipped the full Second Brain marketing landing page — hero mockups, state-machine explainer, feature bento, carousel use cases, social proof, FAQ, and final CTA.',
        ],
      },
      {
        type: 'technical',
        items: [
          'Centralized all marketing copy and metadata in a single typed source so updates stay one-line edits.',
          'Custom motion utilities — magnetic CTA, custom cursor, scroll progress — built once and reused across sections.',
        ],
      },
    ],
  },
]

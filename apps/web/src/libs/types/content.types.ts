import type {
  ExperienceItem,
  NavItem,
  Profile,
  Project,
  SkillGroup,
  SocialLink,
  Stat,
} from '@/libs/types/portfolio.types'

// Shared heading block that opens most sections.
export interface SectionCopy {
  eyebrow: string
  title: string
  subtitle: string
}

// The translatable half of the site. Language-invariant data (names, tech
// stacks, URLs, images) lives in portfolio.ts; only these strings change per
// language, keyed by the same ids so the two halves can be merged.
export interface LocalizedStrings {
  nav: Record<string, string>
  hero: {
    availability: string
    tagline: string
    viewWork: string
    askAI: string
  }
  profile: {
    role: string
    location: string
  }
  stats: string[]
  about: SectionCopy & { bio: string[] }
  skills: SectionCopy & { groups: Record<string, string> }
  work: SectionCopy & {
    projects: Record<string, { tagline: string; description: string }>
  }
  journey: SectionCopy & {
    items: Record<string, { role: string; location: string; bullets: string[] }>
  }
  assistant: SectionCopy & { points: string[]; hintPrefix: string }
  contact: {
    eyebrow: string
    title: string
    lead: string
    footerBuilt: string
    socials: Record<string, string>
  }
}

// The fully-localized, ready-to-render shape the components consume.
export interface LocalizedPortfolio {
  profile: Profile
  stats: Stat[]
  navItems: NavItem[]
  skillGroups: SkillGroup[]
  projects: Project[]
  experience: ExperienceItem[]
  socials: SocialLink[]
  sections: {
    hero: { availability: string; tagline: string; viewWork: string; askAI: string }
    about: SectionCopy & { bio: string[] }
    skills: SectionCopy
    work: SectionCopy
    journey: SectionCopy
    assistant: SectionCopy & { points: string[]; hintPrefix: string }
    contact: { eyebrow: string; title: string; lead: string; footerBuilt: string }
  }
}

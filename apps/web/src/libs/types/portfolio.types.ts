// Content model for the portfolio screen. Keeping every section's shape here
// means the data file stays declarative and the components stay dumb.

export type SocialIcon =
  | 'email'
  | 'github'
  | 'linkedin'
  | 'telegram'
  | 'kakao'
  | 'phone'

export interface Profile {
  name: string
  alias: string
  role: string
  location: string
  // one-liner under the name in the hero
  tagline: string
  // longer intro, split into paragraphs for the About section
  bio: string[]
  availability: string
  email: string
  photo: string
  resumeUrl?: string
}

export interface Stat {
  value: string
  label: string
}

export interface SkillGroup {
  id: string
  title: string
  // short glyph shown in the card header
  glyph: string
  skills: string[]
}

export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  stack: string[]
  // relative path under /public — swapped for the real screenshots later
  image: string
  year: string
  liveUrl?: string
  repoUrl?: string
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  location: string
  bullets: string[]
}

export interface SocialLink {
  id: SocialIcon
  label: string
  handle: string
  href: string
}

export interface NavItem {
  id: string
  label: string
}

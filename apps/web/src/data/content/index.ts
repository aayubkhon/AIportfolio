import type { Language } from '@/libs/types/translations'
import type { LocalizedPortfolio, LocalizedStrings } from '@/libs/types/content.types'
import {
  baseProfile,
  statValues,
  navOrder,
  skillGroupsBase,
  projectsBase,
  experienceBase,
  socialsBase,
} from '@/data/portfolio'
import { en } from './en'
import { ko } from './ko'
import { ru } from './ru'
import { uz } from './uz'

const STRINGS: Record<Language, LocalizedStrings> = { en, ko, ru, uz }

// Merge the language-invariant base data with the chosen language's strings into
// one ready-to-render object. English is the fallback for any missing key.
export function getLocalizedPortfolio(language: Language): LocalizedPortfolio {
  const s = STRINGS[language] ?? en

  return {
    profile: {
      name: baseProfile.name,
      alias: baseProfile.alias,
      email: baseProfile.email,
      photo: baseProfile.photo,
      role: s.profile.role,
      location: s.profile.location,
      tagline: s.hero.tagline,
      bio: s.about.bio,
      availability: s.hero.availability,
    },
    stats: statValues.map((value, i) => ({ value, label: s.stats[i] ?? '' })),
    navItems: navOrder.map((id) => ({ id, label: s.nav[id] ?? id })),
    skillGroups: skillGroupsBase.map((g) => ({ ...g, title: s.skills.groups[g.id] ?? g.id })),
    projects: projectsBase.map((p) => ({
      ...p,
      tagline: s.work.projects[p.id]?.tagline ?? '',
      description: s.work.projects[p.id]?.description ?? '',
    })),
    experience: experienceBase.map((e) => ({
      ...e,
      role: s.journey.items[e.id]?.role ?? '',
      location: s.journey.items[e.id]?.location ?? '',
      bullets: s.journey.items[e.id]?.bullets ?? [],
    })),
    socials: socialsBase.map((soc) => ({ ...soc, label: s.contact.socials[soc.id] ?? soc.id })),
    sections: {
      hero: {
        availability: s.hero.availability,
        tagline: s.hero.tagline,
        viewWork: s.hero.viewWork,
        askAI: s.hero.askAI,
      },
      about: { eyebrow: s.about.eyebrow, title: s.about.title, subtitle: s.about.subtitle, bio: s.about.bio },
      skills: { eyebrow: s.skills.eyebrow, title: s.skills.title, subtitle: s.skills.subtitle },
      work: { eyebrow: s.work.eyebrow, title: s.work.title, subtitle: s.work.subtitle },
      journey: { eyebrow: s.journey.eyebrow, title: s.journey.title, subtitle: s.journey.subtitle },
      assistant: {
        eyebrow: s.assistant.eyebrow,
        title: s.assistant.title,
        subtitle: s.assistant.subtitle,
        points: s.assistant.points,
        hintPrefix: s.assistant.hintPrefix,
      },
      contact: { eyebrow: s.contact.eyebrow, title: s.contact.title, lead: s.contact.lead, footerBuilt: s.contact.footerBuilt },
    },
  }
}

// Pick the best UI language from the visitor's browser locale. Falls back to
// English when nothing matches. Runs client-side only.
export function detectBrowserLanguage(): Language {
  if (typeof navigator === 'undefined') return 'en'
  const locales = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const locale of locales) {
    const code = locale.toLowerCase().split('-')[0]
    if (code === 'ko' || code === 'ru' || code === 'uz' || code === 'en') return code
  }
  return 'en'
}

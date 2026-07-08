import { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import type { ChatMessage } from '@repo/types'
import { Section } from '@repo/ui'
import type { Language } from '@/libs/types/translations'
import { navOrder } from '@/data/portfolio'
import { getLocalizedPortfolio, detectBrowserLanguage } from '@/data/content'
import { useScrollSpy } from '@/libs/hooks/useScrollSpy'
import AuroraBackground from '@/libs/components/AuroraBackground/AuroraBackground'
import SiteNav from '@/libs/components/SiteNav/SiteNav'
import Hero from '@/libs/components/Hero/Hero'
import About from '@/libs/components/About/About'
import Skills from '@/libs/components/Skills/Skills'
import Work from '@/libs/components/Work/Work'
import Journey from '@/libs/components/Journey/Journey'
import Assistant from '@/libs/components/Assistant/Assistant'
import Contact from '@/libs/components/Contact/Contact'
import styles from '@/scss/screen/PortfolioScreen.module.scss'

const SECTION_IDS = [...navOrder]

export default function PortfolioScreen() {
  const [language, setLanguage] = useState<Language>('en')
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  // Only the real conversation lives here — the welcome line is derived inside
  // the Assistant from the current language, so no effect has to re-seed it.
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [loading, setLoading] = useState(false)

  const activeId = useScrollSpy(SECTION_IDS)

  // Everything the sections render, already resolved to the current language.
  const data = useMemo(() => getLocalizedPortfolio(language), [language])
  const { profile } = data

  // Reflect the theme on the root element so the CSS variables switch.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Keep the document language in sync for accessibility and screen readers.
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  // Post-hydration: restore saved preferences, else fall back to the visitor's
  // browser language and OS colour scheme. Runs after mount because neither
  // localStorage nor navigator is available during the static prerender.
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-shot sync from storage
    setTheme(savedTheme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))

    const savedLang = localStorage.getItem('language') as Language | null
    setLanguage(savedLang ?? detectBrowserLanguage())
  }, [])

  function handleThemeChange(next: 'light' | 'dark') {
    setTheme(next)
    localStorage.setItem('theme', next)
  }

  function handleLanguageChange(next: Language) {
    setLanguage(next)
    localStorage.setItem('language', next)
  }

  async function handleSend(text: string) {
    const userMsg: ChatMessage = { role: 'user', content: text }
    // messages already excludes the derived welcome line, so send it as-is
    const history = messages

    setMessages((prev) => [...prev, userMsg])
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history, language }),
      })
      const payload = await res.json()
      if (!res.ok) throw new Error(payload.error)
      setMessages((prev) => [...prev, { role: 'model', content: payload.message }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'model', content: 'Something went wrong. Please try again.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        {/* next/head needs a single string child here, not interpolated parts */}
        <title>{`${profile.name} — ${profile.role}`}</title>
        <meta
          name="description"
          content={`${profile.name}, ${profile.role} based in ${profile.location}. ${profile.tagline}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AuroraBackground />

      <SiteNav
        items={data.navItems}
        activeId={activeId}
        language={language}
        theme={theme}
        onChangeLanguage={handleLanguageChange}
        onChangeTheme={handleThemeChange}
      />

      <main className={styles.page}>
        <Section id="home" className={styles.hero} ariaLabel="Introduction">
          <div className={styles.container}>
            <Hero profile={profile} t={data.sections.hero} />
          </div>
        </Section>

        <Section id="about" className={styles.section} ariaLabel="About">
          <div className={styles.container}>
            <About stats={data.stats} t={data.sections.about} />
          </div>
        </Section>

        <Section id="skills" className={styles.section} ariaLabel="Skills">
          <div className={styles.container}>
            <Skills groups={data.skillGroups} t={data.sections.skills} />
          </div>
        </Section>

        <Section id="work" className={styles.section} ariaLabel="Selected work">
          <div className={styles.container}>
            <Work projects={data.projects} t={data.sections.work} />
          </div>
        </Section>

        <Section id="journey" className={styles.section} ariaLabel="Experience">
          <div className={styles.container}>
            <Journey experience={data.experience} t={data.sections.journey} />
          </div>
        </Section>

        <Section id="assistant" className={styles.section} ariaLabel="AI assistant">
          <div className={styles.container}>
            <Assistant
              language={language}
              messages={messages}
              loading={loading}
              onSend={handleSend}
              t={data.sections.assistant}
            />
          </div>
        </Section>

        <Section id="contact" className={styles.section} ariaLabel="Contact">
          <div className={styles.container}>
            <Contact profile={profile} socials={data.socials} t={data.sections.contact} />
          </div>
        </Section>
      </main>
    </>
  )
}

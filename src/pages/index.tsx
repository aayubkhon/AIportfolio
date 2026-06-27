import { useState, useEffect } from 'react'
import type { ChatMessage } from '@/libs/types/chat.types'
import Navbar from '@/libs/components/Navbar/Navbar'
import ProfilePanel from '@/libs/components/ProfilePanel/ProfilePanel'
import ChatHeader from '@/libs/components/ChatHeader/ChatHeader'
import MessageList from '@/libs/components/MessageList/MessageList'
import ChatInput from '@/libs/components/ChatInput/ChatInput'
import SuggestionList from '@/libs/components/SuggestionList/SuggestionList'
import { translations, type Language } from '@/libs/types/translations'
import styles from '@/scss/screen/ChatScreen.module.scss'

export default function ChatScreen() {
  const [language, setLanguage] = useState<Language>('uz') // Uzbek by default based on request language
  const [theme, setTheme] = useState<'light' | 'dark'>('dark') // Dark mode default as approved prior
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [loading, setLoading] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  // Initialize and update the welcome message dynamically when the language changes
  useEffect(() => {
    setMessages((prev) => {
      const welcomeContent = translations[language].welcomeMessage
      if (prev.length === 0) {
        return [{ role: 'model', content: welcomeContent }]
      }
      // If we already have messages, translate the very first message if it's the welcome message
      const updated = [...prev]
      if (updated[0]?.role === 'model') {
        updated[0] = { ...updated[0], content: welcomeContent }
      }
      return updated
    })
  }, [language])

  // Synchronize HTML theme attribute when state changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Detect user preference on first mount (system default fallback)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }

    const savedLang = localStorage.getItem('language') as Language | null
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [])

  function handleThemeChange(newTheme: 'light' | 'dark') {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  function handleLanguageChange(newLang: Language) {
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  async function handleSend(text: string) {
    const userMsg: ChatMessage = { role: 'user', content: text }
    // exclude the static welcome message from history sent to API
    const history = messages.slice(1)

    setMessages((prev) => [...prev, userMsg])
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history, language }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error)

      setMessages((prev) => [
        ...prev,
        { role: 'model', content: data.message },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'model', content: 'Something went wrong. Please try again.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  const trans = translations[language]

  return (
    <div className={styles.screen}>
      {/* Background ambient glow bubbles */}
      <div className={styles.ambientGlow1} />
      <div className={styles.ambientGlow2} />

      {/* Top Navbar */}
      <Navbar
        language={language}
        onChangeLanguage={handleLanguageChange}
        theme={theme}
        onChangeTheme={handleThemeChange}
        onToggleProfile={() => setProfileOpen(!profileOpen)}
      />

      <div className={styles.appContainer}>
        {/* Profile drawer/sidebar */}
        <ProfilePanel
          language={language}
          isOpen={profileOpen}
          onClose={() => setProfileOpen(false)}
        />
        
        {/* Backdrop overlay for mobile drawer */}
        {profileOpen && (
          <div className={styles.overlay} onClick={() => setProfileOpen(false)} />
        )}

        {/* Chat screen section */}
        <div className={styles.chatContainer}>
          <ChatHeader
            language={language}
            onToggleProfile={() => setProfileOpen(!profileOpen)}
          />
          <MessageList messages={messages} loading={loading} />
          {messages.length === 1 && (
            <SuggestionList
              language={language}
              onSelect={handleSend}
            />
          )}
          <ChatInput
            placeholder={trans.inputPlaceholder}
            onSend={handleSend}
            disabled={loading}
          />
        </div>
      </div>
    </div>
  )
}

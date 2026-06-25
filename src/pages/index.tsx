import { useState } from 'react'
import type { ChatMessage } from '@/libs/types/chat.types'
import ChatHeader from '@/libs/components/ChatHeader/ChatHeader'
import MessageList from '@/libs/components/MessageList/MessageList'
import ChatInput from '@/libs/components/ChatInput/ChatInput'
import SuggestionList from '@/libs/components/SuggestionList/SuggestionList'
import ProfilePanel from '@/libs/components/ProfilePanel/ProfilePanel'
import styles from '@/scss/screen/ChatScreen.module.scss'

const WELCOME: ChatMessage = {
  role: 'model',
  content:
    "Hello! I'm **Leo's AI Assistant**. Ask me anything about Leo's experience, skills, or projects. 😊",
}

export default function ChatScreen() {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME])
  const [loading, setLoading] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

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
        body: JSON.stringify({ message: text, history }),
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

  return (
    <div className={styles.screen}>
      {/* Background ambient glow bubbles */}
      <div className={styles.ambientGlow1} />
      <div className={styles.ambientGlow2} />

      <div className={styles.appContainer}>
        {/* Profile drawer/sidebar */}
        <ProfilePanel isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
        
        {/* Backdrop overlay for mobile drawer */}
        {profileOpen && (
          <div className={styles.overlay} onClick={() => setProfileOpen(false)} />
        )}

        {/* Chat screen section */}
        <div className={styles.chatContainer}>
          <ChatHeader onToggleProfile={() => setProfileOpen(!profileOpen)} />
          <MessageList messages={messages} loading={loading} />
          {messages.length === 1 && <SuggestionList onSelect={handleSend} />}
          <ChatInput onSend={handleSend} disabled={loading} />
        </div>
      </div>
    </div>
  )
}

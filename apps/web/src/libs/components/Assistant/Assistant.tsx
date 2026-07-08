import { useMemo } from 'react'
import type { ChatMessage } from '@repo/types'
import { Reveal } from '@repo/ui'
import { translations, type Language } from '@/libs/types/translations'
import type { SectionCopy } from '@/libs/types/content.types'
import MessageList from '@/libs/components/MessageList/MessageList'
import SuggestionList from '@/libs/components/SuggestionList/SuggestionList'
import ChatInput from '@/libs/components/ChatInput/ChatInput'
import { SparkleIcon } from '@/libs/components/Icons/Icons'
import styles from '@/scss/components/Assistant.module.scss'

interface Props {
  language: Language
  messages: ChatMessage[]
  loading: boolean
  onSend: (text: string) => void
  t: SectionCopy & { points: string[]; hintPrefix: string }
}

// Sits right under the hero: a single, centred chat dock — deliberately simple.
export default function Assistant({ language, messages, loading, onSend, t }: Props) {
  const chat = translations[language]
  // Welcome line is derived from the language (memoised for a stable identity).
  const display = useMemo<ChatMessage[]>(
    () => [{ role: 'model', content: chat.welcomeMessage }, ...messages],
    [chat.welcomeMessage, messages]
  )
  const showSuggestions = messages.length === 0

  return (
    <div className={styles.simple}>
      <Reveal className={styles.head} visibleClassName={styles.in}>
        <span className={styles.kicker}>
          <SparkleIcon width={16} height={16} /> {t.title}
        </span>
        <p className={styles.sub}>{t.subtitle}</p>
      </Reveal>

      <Reveal className={styles.dock} visibleClassName={styles.in}>
        <header className={styles.dockHead}>
          <span className={styles.avatar}><SparkleIcon width={18} height={18} /></span>
          <div className={styles.dockMeta}>
            <strong>{chat.assistantTitle}</strong>
            <span>{chat.assistantSubtitle}</span>
          </div>
          <span className={styles.status}>
            <span className={styles.statusDot} /> {chat.activeStatus}
          </span>
        </header>

        <MessageList messages={display} loading={loading} />

        {showSuggestions && <SuggestionList language={language} onSelect={onSend} />}

        <ChatInput
          placeholder={chat.inputPlaceholder}
          onSend={onSend}
          disabled={loading}
        />
      </Reveal>
    </div>
  )
}

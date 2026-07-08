import { useMemo } from 'react'
import type { ChatMessage } from '@repo/types'
import { Reveal } from '@repo/ui'
import { translations, type Language } from '@/libs/types/translations'
import type { SectionCopy } from '@/libs/types/content.types'
import SectionHeading from '@/libs/components/SectionHeading/SectionHeading'
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

// The live demo: a RAG assistant wired to the same knowledge base the rest of
// the page is built from. Chat state lives in the screen; this is presentation.
export default function Assistant({ language, messages, loading, onSend, t }: Props) {
  const chat = translations[language]
  // The welcome line is derived from the current language rather than stored, so
  // switching languages retranslates it for free. Memoised so the list keeps a
  // stable identity across unrelated re-renders (e.g. the nav scroll-spy).
  const display = useMemo<ChatMessage[]>(
    () => [{ role: 'model', content: chat.welcomeMessage }, ...messages],
    [chat.welcomeMessage, messages]
  )
  // only surface the starter chips before the first real exchange
  const showSuggestions = messages.length === 0

  return (
    <>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <div className={styles.layout}>
        <Reveal className={styles.intro} visibleClassName={styles.in}>
          <ul className={styles.points}>
            {t.points.map((point, i) => (
              <li key={i}><span>◆</span> {point}</li>
            ))}
          </ul>
          <p className={styles.hint}>
            {t.hintPrefix} <em>&ldquo;{chat.suggestions[1]}&rdquo;</em>
          </p>
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
    </>
  )
}

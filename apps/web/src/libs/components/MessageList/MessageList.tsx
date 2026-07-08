import { useEffect, useRef } from 'react'
import type { ChatMessage } from '@repo/types'
import MessageBubble from '@/libs/components/MessageBubble/MessageBubble'
import TypingIndicator from '@/libs/components/TypingIndicator/TypingIndicator'
import styles from '@/scss/components/MessageList.module.scss'

interface Props {
  messages: ChatMessage[]
  loading: boolean
}

export default function MessageList({ messages, loading }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Pin to the newest message, but scroll only THIS panel. scrollIntoView would
  // drag the whole page down to the embedded chat, so we nudge scrollTop instead.
  useEffect(() => {
    const el = containerRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, loading])

  return (
    <main ref={containerRef} className={styles.container}>
      <div className={styles.inner}>
        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}
        {loading && <TypingIndicator />}
      </div>
    </main>
  )
}

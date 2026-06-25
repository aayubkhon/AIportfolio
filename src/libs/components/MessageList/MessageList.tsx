import { useEffect, useRef } from 'react'
import type { ChatMessage } from '@/libs/types/chat.types'
import MessageBubble from '@/libs/components/MessageBubble/MessageBubble'
import TypingIndicator from '@/libs/components/TypingIndicator/TypingIndicator'
import styles from '@/scss/components/MessageList.module.scss'

interface Props {
  messages: ChatMessage[]
  loading: boolean
}

export default function MessageList({ messages, loading }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null)

  // scroll to bottom whenever new message or loading state changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  return (
    <main className={styles.container}>
      <div className={styles.inner}>
        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}
        {loading && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>
    </main>
  )
}

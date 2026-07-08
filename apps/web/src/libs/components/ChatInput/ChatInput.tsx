import { useState, type FormEvent, type KeyboardEvent } from 'react'
import styles from '@/scss/components/ChatInput.module.scss'

interface Props {
  placeholder?: string
  onSend: (text: string) => void
  disabled: boolean
}

export default function ChatInput({ placeholder, onSend, disabled }: Props) {
  const [value, setValue] = useState('')

  function submit() {
    const text = value.trim()
    if (!text || disabled) return
    onSend(text)
    setValue('')
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    submit()
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    // send on Enter, new line on Shift+Enter
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submit()
    }
  }

  return (
    <footer className={styles.footer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || "Ask something about Leo..."}
          rows={1}
          disabled={disabled}
          className={styles.input}
        />
        <button
          type="submit"
          disabled={!value.trim() || disabled}
          className={styles.sendBtn}
          aria-label="Send message"
        >
          <SendIcon />
        </button>
      </form>
    </footer>
  )
}

function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={18}
      height={18}
    >
      <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
    </svg>
  )
}

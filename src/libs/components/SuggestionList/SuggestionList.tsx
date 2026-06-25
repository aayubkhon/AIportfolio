import styles from '@/scss/components/SuggestionList.module.scss'

const SUGGESTIONS = [
  "What are Leo's main skills?",
  'Tell me about the Nimora project',
  "What's Leo's work experience?",
  'How can I contact Leo?',
] as const

interface Props {
  onSelect: (text: string) => void
}

export default function SuggestionList({ onSelect }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {SUGGESTIONS.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => onSelect(suggestion)}
            className={styles.chip}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  )
}

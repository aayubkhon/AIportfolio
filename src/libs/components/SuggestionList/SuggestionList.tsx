import { translations, type Language } from '@/libs/types/translations'
import styles from '@/scss/components/SuggestionList.module.scss'

interface Props {
  language: Language
  onSelect: (text: string) => void
}

export default function SuggestionList({ language, onSelect }: Props) {
  const list = translations[language].suggestions

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {list.map((suggestion) => (
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

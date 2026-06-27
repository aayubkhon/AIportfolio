import { translations, type Language } from '@/libs/types/translations'
import styles from '@/scss/components/ChatHeader.module.scss'

interface Props {
  language: Language
  onToggleProfile: () => void
}

export default function ChatHeader({ language, onToggleProfile }: Props) {
  const trans = translations[language]

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Hamburger/Menu Button to toggle Profile Drawer */}
        <button onClick={onToggleProfile} className={styles.toggleBtn} aria-label="Toggle Profile details">
          <MenuIcon />
        </button>

        <div className={styles.avatar}>L</div>

        <div className={styles.info}>
          <h1 className={styles.name}>{trans.assistantTitle}</h1>
          <p className={styles.sub}>{trans.assistantSubtitle}</p>
        </div>

        <div className={styles.status}>
          <span className={styles.dot} />
          <span className={styles.statusText}>{trans.activeStatus}</span>
        </div>
      </div>
    </header>
  )
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width={22} height={22}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}

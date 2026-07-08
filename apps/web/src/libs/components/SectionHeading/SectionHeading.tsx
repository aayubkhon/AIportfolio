import { Reveal } from '@repo/ui'
import styles from '@/scss/components/SectionHeading.module.scss'

interface Props {
  // small uppercase tag, e.g. "02 · Skills"
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

// Shared heading block so every section opens with the same rhythm.
export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }: Props) {
  return (
    <Reveal
      className={`${styles.head} ${align === 'center' ? styles.center : ''}`}
      visibleClassName={styles.isVisible}
    >
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </Reveal>
  )
}

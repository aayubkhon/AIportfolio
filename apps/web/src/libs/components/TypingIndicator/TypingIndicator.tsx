import styles from '@/scss/components/TypingIndicator.module.scss'

export default function TypingIndicator() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>L</div>
      <div className={styles.bubble}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
    </div>
  )
}

import styles from '@/scss/components/AuroraBackground.module.scss'

// Fixed, non-interactive layer behind everything: a few slow-drifting colour
// blobs plus a faint grain so the glass panels have something to refract.
export default function AuroraBackground() {
  return (
    <div className={styles.stage} aria-hidden="true">
      <span className={`${styles.blob} ${styles.blobA}`} />
      <span className={`${styles.blob} ${styles.blobB}`} />
      <span className={`${styles.blob} ${styles.blobC}`} />
      <div className={styles.grid} />
      <div className={styles.grain} />
    </div>
  )
}

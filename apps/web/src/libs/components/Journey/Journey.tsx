import { Reveal } from '@repo/ui'
import type { ExperienceItem } from '@/libs/types/portfolio.types'
import type { SectionCopy } from '@/libs/types/content.types'
import SectionHeading from '@/libs/components/SectionHeading/SectionHeading'
import styles from '@/scss/components/Journey.module.scss'

interface Props {
  experience: ExperienceItem[]
  t: SectionCopy
}

export default function Journey({ experience, t }: Props) {
  return (
    <>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <div className={styles.timeline}>
        {experience.map((item, i) => (
          <Reveal
            key={item.id}
            className={styles.row}
            visibleClassName={styles.rowIn}
            delay={i * 90}
          >
            <div className={styles.marker} aria-hidden="true">
              <span className={styles.dot} />
            </div>

            <div className={styles.card}>
              <div className={styles.top}>
                <h3>{item.role}</h3>
                <span className={styles.period}>{item.period}</span>
              </div>
              <p className={styles.company}>
                {item.company} <span className={styles.sep}>·</span> {item.location}
              </p>
              <ul className={styles.bullets}>
                {item.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  )
}

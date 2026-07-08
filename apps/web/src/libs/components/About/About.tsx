import { Reveal } from '@repo/ui'
import type { Stat } from '@/libs/types/portfolio.types'
import type { SectionCopy } from '@/libs/types/content.types'
import SectionHeading from '@/libs/components/SectionHeading/SectionHeading'
import styles from '@/scss/components/About.module.scss'

interface Props {
  stats: Stat[]
  t: SectionCopy & { bio: string[] }
}

export default function About({ stats, t }: Props) {
  return (
    <>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <div className={styles.grid}>
        <Reveal className={styles.bio} visibleClassName={styles.in}>
          {t.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </Reveal>

        <div className={styles.stats}>
          {stats.map((stat, i) => (
            <Reveal
              key={stat.value}
              className={styles.stat}
              visibleClassName={styles.in}
              delay={i * 80}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}

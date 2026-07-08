import { Reveal } from '@repo/ui'
import type { SkillGroup } from '@/libs/types/portfolio.types'
import type { SectionCopy } from '@/libs/types/content.types'
import SectionHeading from '@/libs/components/SectionHeading/SectionHeading'
import styles from '@/scss/components/Skills.module.scss'

interface Props {
  groups: SkillGroup[]
  t: SectionCopy
}

export default function Skills({ groups, t }: Props) {
  return (
    <>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <div className={styles.grid}>
        {groups.map((group, i) => (
          <Reveal
            key={group.id}
            className={styles.card}
            visibleClassName={styles.cardIn}
            delay={i * 90}
          >
            <div className={styles.head}>
              <span className={styles.glyph} aria-hidden="true">{group.glyph}</span>
              <h3>{group.title}</h3>
            </div>
            <ul className={styles.tags}>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </>
  )
}

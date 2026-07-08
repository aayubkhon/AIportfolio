import { Reveal } from '@repo/ui'
import type { Project } from '@/libs/types/portfolio.types'
import type { SectionCopy } from '@/libs/types/content.types'
import SectionHeading from '@/libs/components/SectionHeading/SectionHeading'
import ProjectCard from '@/libs/components/ProjectCard/ProjectCard'
import styles from '@/scss/components/Work.module.scss'

interface Props {
  projects: Project[]
  t: SectionCopy
}

export default function Work({ projects, t }: Props) {
  return (
    <>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <Reveal
            key={project.id}
            className={`${styles.cell} ${i === 0 ? styles.wide : ''}`}
            visibleClassName={styles.cellIn}
            delay={(i % 2) * 90}
          >
            <ProjectCard project={project} featured={i === 0} />
          </Reveal>
        ))}
      </div>
    </>
  )
}

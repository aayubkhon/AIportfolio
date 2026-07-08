import Image from 'next/image'
import type { Project } from '@/libs/types/portfolio.types'
import { ExternalIcon, GithubIcon } from '@/libs/components/Icons/Icons'
import styles from '@/scss/components/ProjectCard.module.scss'

interface Props {
  project: Project
  // makes the first card span two columns for a bit of editorial rhythm
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: Props) {
  const href = project.liveUrl

  const media = (
    <>
      <Image
        src={project.image}
        alt={`${project.name} preview`}
        fill
        sizes={featured ? '(max-width: 860px) 100vw, 760px' : '(max-width: 860px) 100vw, 380px'}
        className={styles.image}
      />
      {href && (
        <span className={styles.visit}>
          Visit site <ExternalIcon width={16} height={16} />
        </span>
      )}
    </>
  )

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.media}>
        {/* the whole thumbnail is the primary link to the live site */}
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={styles.mediaLink}
            aria-label={`${project.name} — open live site`}
          >
            {media}
          </a>
        ) : (
          media
        )}
        <span className={styles.year}>{project.year}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3>
            {href ? (
              <a href={href} target="_blank" rel="noreferrer" className={styles.titleLink}>
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </h3>
          <div className={styles.links}>
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`${project.name} source`}>
                <GithubIcon width={18} height={18} />
              </a>
            )}
            {href && (
              <a href={href} target="_blank" rel="noreferrer" aria-label={`${project.name} live site`}>
                <ExternalIcon width={18} height={18} />
              </a>
            )}
          </div>
        </div>

        <p className={styles.tagline}>{project.tagline}</p>
        <p className={styles.desc}>{project.description}</p>

        <ul className={styles.stack}>
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

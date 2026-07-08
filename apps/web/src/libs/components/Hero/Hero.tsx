import Image from 'next/image'
import { GradientText, Reveal } from '@repo/ui'
import type { Profile } from '@/libs/types/portfolio.types'
import { ArrowRightIcon, SparkleIcon } from '@/libs/components/Icons/Icons'
import styles from '@/scss/components/Hero.module.scss'

interface Props {
  profile: Profile
  t: { availability: string; tagline: string; viewWork: string; askAI: string }
}

export default function Hero({ profile, t }: Props) {
  const [firstName, ...rest] = profile.name.split(' ')

  return (
    <div className={styles.hero}>
      <Reveal className={styles.copy} visibleClassName={styles.copyIn}>
        <span className={styles.badge}>
          <span className={styles.pulse} aria-hidden="true" />
          {t.availability}
        </span>

        <h1 className={styles.name}>
          {firstName}{' '}
          <GradientText className={styles.grad}>{rest.join(' ')}</GradientText>
        </h1>

        <p className={styles.role}>
          {profile.role} · <span className={styles.loc}>{profile.location}</span>
        </p>

        <p className={styles.tagline}>{t.tagline}</p>

        <div className={styles.actions}>
          <a href="#work" className={styles.primary}>
            {t.viewWork} <ArrowRightIcon width={18} height={18} />
          </a>
          <a href="#assistant" className={styles.secondary}>
            <SparkleIcon width={18} height={18} /> {t.askAI}
          </a>
        </div>
      </Reveal>

      <Reveal className={styles.visual} visibleClassName={styles.visualIn}>
        <div className={styles.frame}>
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            fill
            sizes="(max-width: 900px) 70vw, 380px"
            className={styles.photo}
            priority
          />
          <div className={styles.ring} aria-hidden="true" />
        </div>
      </Reveal>
    </div>
  )
}

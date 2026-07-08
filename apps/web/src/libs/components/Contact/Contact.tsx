import type { JSX } from 'react'
import { Reveal } from '@repo/ui'
import type { Profile, SocialLink, SocialIcon } from '@/libs/types/portfolio.types'
import {
  EmailIcon,
  GithubIcon,
  TelegramIcon,
  KakaoIcon,
  PhoneIcon,
  LinkedinIcon,
  ArrowRightIcon,
} from '@/libs/components/Icons/Icons'
import styles from '@/scss/components/Contact.module.scss'

interface Props {
  profile: Profile
  socials: SocialLink[]
  t: { eyebrow: string; title: string; lead: string; footerBuilt: string }
}

// Map the data's icon key to the actual glyph component.
const ICONS: Record<SocialIcon, (p: { width?: number; height?: number }) => JSX.Element> = {
  email: EmailIcon,
  github: GithubIcon,
  telegram: TelegramIcon,
  kakao: KakaoIcon,
  phone: PhoneIcon,
  linkedin: LinkedinIcon,
}

export default function Contact({ profile, socials, t }: Props) {
  const year = new Date().getFullYear()

  return (
    <>
      <Reveal className={styles.cta} visibleClassName={styles.in}>
        <span className={styles.eyebrow}>{t.eyebrow}</span>
        <h2 className={styles.title}>{t.title}</h2>
        <p className={styles.lead}>{t.lead}</p>
        <a href={`mailto:${profile.email}`} className={styles.mailBtn}>
          {profile.email} <ArrowRightIcon width={18} height={18} />
        </a>

        <ul className={styles.links}>
          {socials.map((s) => {
            const Icon = ICONS[s.id]
            return (
              <li key={s.id}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <span className={styles.linkIcon}><Icon width={18} height={18} /></span>
                  <span className={styles.linkText}>
                    <strong>{s.label}</strong>
                    <em>{s.handle}</em>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </Reveal>

      <footer className={styles.footer}>
        <span>© {year} {profile.name}</span>
        <span className={styles.built}>{t.footerBuilt}</span>
      </footer>
    </>
  )
}

import { useState } from 'react'
import { translations, type Language } from '@/libs/types/translations'
import styles from '@/scss/components/ProfilePanel.module.scss'

interface Props {
  language: Language
  isOpen: boolean
  onClose: () => void
}

const SKILL_CATEGORIES = [
  {
    name: 'Frontend',
    skills: ['TypeScript', 'React', 'Next.js', 'Redux', 'React Query', 'Tailwind CSS', 'SCSS', 'Framer Motion'],
  },
  {
    name: 'Backend & Databases',
    skills: ['Node.js', 'NestJS', 'Express.js', 'GraphQL', 'MongoDB', 'MySQL', 'Python'],
  },
  {
    name: 'AI & OpenCV',
    skills: ['RAG Systems', 'Intelligent Agents', 'OpenCV (CV)', 'NLP', 'Prompt Engineering', 'PyTorch'],
  },
  {
    name: 'DevOps & Server',
    skills: ['Docker / Compose', 'NGINX', 'PM2 Plus', 'Linux Ubuntu', 'VPS / VPC'],
  },
]

export default function ProfilePanel({ language, isOpen, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<'about' | 'skills'>('about')
  const trans = translations[language]

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      {/* Header Close button for Mobile */}
      <div className={styles.mobileHeader}>
        <button onClick={onClose} className={styles.closeBtn} aria-label="Close Profile">
          <CloseIcon />
        </button>
      </div>

      <div className={styles.scrollableContent}>
        {/* Avatar & Basic Info */}
        <div className={styles.profileHero}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarGlow} />
            <div className={styles.avatar}>L</div>
            <div className={styles.statusDot} />
          </div>
          <h2 className={styles.name}>Ayubkhon Akramov</h2>
          <p className={styles.title}>Fullstack & AI Engineer</p>
          <div className={styles.location}>
            <LocationIcon />
            <span>{trans.locationValue} ({trans.visaValue})</span>
          </div>
        </div>

        {/* Action Quick Links */}
        <div className={styles.contactsGrid}>
          <a href="mailto:akramov.ayubkhan@gmail.com" className={styles.contactCard} title="Email Me">
            <MailIcon />
            <span>Email</span>
          </a>
          <a href="https://github.com/aayubkhon" target="_blank" rel="noopener noreferrer" className={styles.contactCard} title="GitHub Profile">
            <GithubIcon />
            <span>GitHub</span>
          </a>
          <a href="https://open.kakao.com/o/s/ayub701" target="_blank" rel="noopener noreferrer" className={styles.contactCard} title="KakaoTalk: ayub701">
            <KakaoIcon />
            <span>Kakao</span>
          </a>
        </div>

        {/* Tab System */}
        <div className={styles.tabBar}>
          <button
            className={`${styles.tab} ${activeTab === 'about' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('about')}
          >
            {trans.aboutTab}
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'skills' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            {trans.skillsTab}
          </button>
        </div>

        {/* Tab Contents */}
        <div className={styles.tabContent}>
          {activeTab === 'about' ? (
            <div className={styles.aboutTab}>
              <div className={styles.section}>
                <h3>{trans.bioTitle}</h3>
                <p>{trans.bioText1}</p>
                <p>{trans.bioText2}</p>
              </div>

              <div className={styles.section}>
                <h3>{trans.eduTitle}</h3>
                <div className={styles.eduItem}>
                  <div className={styles.eduHeader}>
                    <h4>{trans.eduUni}</h4>
                    <span className={styles.eduDate}>{trans.eduDate}</span>
                  </div>
                  <p className={styles.eduSub}>{trans.eduLocation}</p>
                  <p className={styles.eduMajor}>{trans.eduMajor}</p>
                </div>
              </div>

              <div className={styles.section}>
                <h3>{trans.langTitle}</h3>
                <div className={styles.langGrid}>
                  <div className={styles.langItem}>
                    <span className={styles.langName}>{trans.langEn}</span>
                    <span className={styles.langBar}><span className={styles.langLevel} style={{ width: '90%' }} /></span>
                  </div>
                  <div className={styles.langItem}>
                    <span className={styles.langName}>{trans.langKo}</span>
                    <span className={styles.langBar}><span className={styles.langLevel} style={{ width: '80%' }} /></span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.skillsTab}>
              {SKILL_CATEGORIES.map((category) => (
                <div key={category.name} className={styles.skillCategory}>
                  <h4>{category.name}</h4>
                  <div className={styles.tags}>
                    {category.skills.map((skill) => (
                      <span key={skill} className={styles.tag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}

// Icons
function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width={20} height={20}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width={14} height={14}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width={20} height={20}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width={20} height={20}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}

function KakaoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width={20} height={20}>
      <path d="M12 3c-4.97 0-9 3.185-9 7.11 0 2.535 1.69 4.757 4.256 5.952-.187.697-.674 2.52-.773 2.9-.12.47.172.46.36.33.15-.097 2.383-1.62 3.35-2.28.583.076 1.18.118 1.807.118 4.97 0 9-3.185 9-7.11S16.97 3 12 3z" />
    </svg>
  )
}

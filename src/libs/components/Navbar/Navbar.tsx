import type { Language } from '@/libs/types/translations'
import styles from '@/scss/components/Navbar.module.scss'

interface Props {
  language: Language
  onChangeLanguage: (lang: Language) => void
  theme: 'light' | 'dark'
  onChangeTheme: (theme: 'light' | 'dark') => void
  onToggleProfile: () => void
}

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'uz', name: 'O\'zbekcha', flag: '🇺🇿' },
] as const

export default function Navbar({
  language,
  onChangeLanguage,
  theme,
  onChangeTheme,
  onToggleProfile,
}: Props) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        {/* Left Side: Brand Logo and Mobile Drawer Toggle */}
        <div className={styles.brandGroup}>
          <button
            onClick={onToggleProfile}
            className={styles.sidebarBtn}
            aria-label="Toggle profile details"
          >
            <MenuIcon />
          </button>
          
          <div className={styles.logo}>
            <span className={styles.logoIcon}>⚡</span>
            <span className={styles.logoText}>LEO<span className={styles.logoDot}>.</span>AI</span>
          </div>
        </div>

        {/* Right Side: Language select & Theme toggle */}
        <div className={styles.controls}>
          {/* Language Selector Selector */}
          <div className={styles.languageWrapper}>
            <select
              value={language}
              onChange={(e) => onChangeLanguage(e.target.value as Language)}
              className={styles.langSelect}
              aria-label="Select Language"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} &nbsp;{lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={() => onChangeTheme(theme === 'light' ? 'dark' : 'light')}
            className={styles.themeToggleBtn}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle Color Theme"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </nav>
  )
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width={20} height={20}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width={20} height={20}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M5.036 5.036l1.591 1.591M17.373 17.373l1.591 1.591M3 12h2.25m13.5 0H21M5.036 18.964l1.591-1.591M17.373 6.627l1.591-1.591M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width={20} height={20}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  )
}

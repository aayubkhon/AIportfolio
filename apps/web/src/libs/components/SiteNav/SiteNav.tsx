import { useState } from "react";
import type { NavItem } from "@/libs/types/portfolio.types";
import type { Language } from "@/libs/types/translations";
import {
  MenuIcon,
  CloseIcon,
  SunIcon,
  MoonIcon,
} from "@/libs/components/Icons/Icons";
import styles from "@/scss/components/SiteNav.module.scss";

interface Props {
  items: NavItem[];
  activeId: string;
  language: Language;
  theme: "light" | "dark";
  onChangeLanguage: (lang: Language) => void;
  onChangeTheme: (theme: "light" | "dark") => void;
}

const LANGS: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ko", label: "한" },
  { code: "ru", label: "РУ" },
  { code: "uz", label: "UZ" },
];

export default function SiteNav({
  items,
  activeId,
  language,
  theme,
  onChangeLanguage,
  onChangeTheme,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Let the browser's smooth scroll-behavior handle the actual movement; we just
  // close the mobile drawer after a tap.
  function handleNav() {
    setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.bar} aria-label="Primary">
        <a href="#home" className={styles.brand} onClick={handleNav}>
          <span className={styles.mark}>A</span>
          <span className={styles.brandText}>
            leo<span className={styles.brandDot}>.dev</span>
          </span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}>
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={handleNav}
                className={activeId === item.id ? styles.active : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.controls}>
          <div className={styles.langGroup} role="group" aria-label="Language">
            {LANGS.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => onChangeLanguage(lang.code)}
                className={
                  language === lang.code ? styles.langActive : styles.langBtn
                }
                aria-pressed={language === lang.code}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className={styles.iconBtn}
            onClick={() => onChangeTheme(theme === "light" ? "dark" : "light")}
            aria-label={
              theme === "light"
                ? "Switch to dark theme"
                : "Switch to light theme"
            }
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>

          <button
            type="button"
            className={`${styles.iconBtn} ${styles.menuBtn}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
}

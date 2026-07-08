import type { SVGProps } from 'react'

// One small icon set shared across the site. All icons inherit currentColor and
// a 1.7 stroke so they sit consistently next to text.
type IconProps = SVGProps<SVGSVGElement>

function base(props: IconProps) {
  return {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    ...props,
  }
}

export const MenuIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
)

export const CloseIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M6 6l12 12M18 6L6 18" /></svg>
)

export const SunIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
)

export const MoonIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" /></svg>
)

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)

export const ArrowDownIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 5v14M6 13l6 6 6-6" /></svg>
)

export const ExternalIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M14 4h6v6M20 4l-8 8M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" /></svg>
)

export const SparkleIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" /></svg>
)

export const EmailIcon = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
)

export const GithubIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 00-6.3 0C6.6 3.7 5.5 4 5.5 4a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 10.4c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22" /></svg>
)

export const TelegramIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M21.5 4.3L2.9 11.4c-.9.3-.9 1.5 0 1.8l4.6 1.5 1.8 5.5c.2.7 1.1.9 1.6.3l2.5-2.6 4.6 3.4c.6.4 1.4.1 1.6-.6L23 5.4c.2-.9-.6-1.5-1.5-1.1z" /><path d="M8 14.5l9-6-6.5 7" /></svg>
)

export const KakaoIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 4C7 4 3 7.3 3 11.3c0 2.6 1.8 4.9 4.4 6.1-.2.7-.7 2.6-.8 3-.1.5.2.5.4.4.2-.1 2.7-1.8 3.7-2.5.4 0 .9.1 1.3.1 5 0 9-3.3 9-7.3S17 4 12 4z" /></svg>
)

export const PhoneIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M5 4h3l1.5 5-2 1.5a12 12 0 006 6l1.5-2 5 1.5v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></svg>
)

export const LinkedinIcon = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4" /></svg>
)

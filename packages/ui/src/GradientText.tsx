import type { ElementType, ReactNode } from 'react'

interface Props {
  children: ReactNode
  as?: ElementType
  className?: string
}

// Thin semantic wrapper so the aurora gradient headline treatment is a single
// import rather than a repeated span. Styling comes from the app's SCSS.
export function GradientText({ children, as, className = '' }: Props) {
  const Tag = (as ?? 'span') as ElementType
  return <Tag className={className}>{children}</Tag>
}

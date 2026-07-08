import type { ElementType, HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: ElementType
  className?: string
}

// Structural wrapper for the frosted-glass panels used all over the site.
// It carries no styling of its own — the app decides how the glass looks —
// so the same primitive works for cards, the nav pill, the chat dock, etc.
export function GlassCard({ children, as, className = '', ...rest }: Props) {
  const Tag = (as ?? 'div') as ElementType
  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  )
}

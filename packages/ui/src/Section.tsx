import type { ReactNode } from 'react'

interface Props {
  id: string
  children: ReactNode
  className?: string
  // exposed so the navbar scroll-spy can label sections for a11y
  ariaLabel?: string
}

// Every page section shares this shell: a stable id for anchor navigation and
// a landmark role. Keeps the screen component free of repetitive boilerplate.
export function Section({ id, children, className = '', ariaLabel }: Props) {
  return (
    <section id={id} aria-label={ariaLabel} className={className}>
      {children}
    </section>
  )
}

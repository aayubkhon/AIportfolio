import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useReveal } from './useReveal'

interface Props {
  children: ReactNode
  as?: ElementType
  className?: string
  // class the app applies once the element scrolls into view
  visibleClassName?: string
  // stagger children by nudging the transition-delay
  delay?: number
  once?: boolean
}

// Wraps content and toggles a class when it enters the viewport. The actual
// animation lives in the consumer's SCSS — we only flip the flag.
export function Reveal({
  children,
  as,
  className = '',
  visibleClassName = '',
  delay = 0,
  once = true,
}: Props) {
  const Tag = (as ?? 'div') as ElementType
  const { ref, visible } = useReveal<HTMLElement>({ once })

  const style: CSSProperties | undefined =
    delay > 0 ? { transitionDelay: `${delay}ms` } : undefined

  // When on screen we add the global `is-visible` flag (which the SCSS keys off)
  // plus any optional module class the caller passed.
  const classes = [className, visible && 'is-visible', visible && visibleClassName]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} style={style} className={classes}>
      {children}
    </Tag>
  )
}

import { useEffect, useRef, useState } from 'react'

interface Options {
  // fire once and then stop observing (default) vs. re-trigger on every enter
  once?: boolean
  // portion of the element that must be visible before it counts
  threshold?: number
  // shrink the viewport so things reveal a touch before they hit the edge
  rootMargin?: string
}

// Tiny IntersectionObserver hook — powers the scroll-in animations without
// pulling in a whole animation library. Returns a ref + whether it's on screen.
export function useReveal<T extends HTMLElement = HTMLDivElement>({
  once = true,
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
}: Options = {}) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respect users who asked the OS to cut down on motion.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, threshold, rootMargin])

  return { ref, visible }
}

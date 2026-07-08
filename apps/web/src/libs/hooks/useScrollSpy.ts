import { useEffect, useState } from 'react'

// Watches the section anchors and reports whichever one is currently centred in
// the viewport, so the nav can highlight the matching link as you scroll.
export function useScrollSpy(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible section among those intersecting right now.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActiveId(visible.target.id)
      },
      // The band sits around the upper-middle of the screen so a section counts
      // as "active" a little before it reaches the very top.
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}

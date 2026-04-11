'use client'

import { useLayoutEffect } from 'react'

/**
 * Runs once when /home mounts so client navigations to `/home#…` scroll to the target.
 * Same-page hash clicks are handled in HeroNavLink (no duplicate work on remount).
 */
export default function HomeHashScroll() {
  useLayoutEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    const id = decodeURIComponent(hash.slice(1))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const run = () => {
      const el = document.getElementById(id)
      if (!el) return
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    }

    run()
    const raf = requestAnimationFrame(run)
    return () => cancelAnimationFrame(raf)
  }, [])

  return null
}

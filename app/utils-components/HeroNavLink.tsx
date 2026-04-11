'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { MouseEvent, ReactNode } from 'react'

function scrollToSectionId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}

export function HeroNavLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: ReactNode
}) {
  const pathname = usePathname()
  const hashIdx = href.indexOf('#')
  const basePath = hashIdx >= 0 ? href.slice(0, hashIdx) : href
  const hash = hashIdx >= 0 ? href.slice(hashIdx + 1) : ''

  if (!hash) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== basePath) return
    e.preventDefault()
    const id = decodeURIComponent(hash)
    if (window.location.hash !== `#${hash}`) {
      window.history.replaceState(null, '', `${basePath}#${hash}`)
    }
    scrollToSectionId(id)
  }

  return (
    <Link href={href} scroll={false} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}

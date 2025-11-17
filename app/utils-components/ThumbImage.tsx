"use client"
import React, { useEffect, useState } from "react"

interface HeroInterface {
  main: string
  thumbnail: string
  alt: string
  className?: string
}

const ThumbImage = ({ main, thumbnail, alt, className = "" }: HeroInterface) => {
  const [loaded, setLoaded] = useState(false)

  // Preload main image
  useEffect(() => {
    const img = new Image()
    img.src = main
    img.onload = () => setLoaded(true)
  }, [main])

  return (
    <div
      className={`w-full h-full bg-center bg-cover transition-opacity duration-700 ${className}`}
      style={{
        backgroundImage: `url(${loaded ? main : thumbnail})`,
      }}
      aria-label={alt}
    />
  )
}

export default ThumbImage

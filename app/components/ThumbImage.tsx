"use client"
import React, { useEffect, useRef, useState } from "react"

interface HeroInterface {
  main: string
  thumbnail: string
  alt: string
  className?: string
}

const ThumbImage = ({ main, thumbnail, alt, className = "" }: HeroInterface) => {
  const [loaded, setLoaded] = useState(false)
  const mainImgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    if (mainImgRef.current?.complete) {
      // if already cached, mark as loaded
      setLoaded(true)
    }
  }, [])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={`${alt} thumbnail`}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Main image */}
      <img
        ref={mainImgRef}
        src={main}
        alt={alt}
        className="w-full h-full object-cover"
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export default ThumbImage

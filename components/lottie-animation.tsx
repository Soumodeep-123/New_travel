"use client"

import { useEffect, useRef } from "react"

interface LottieAnimationProps {
  animationData?: any
  width?: number
  height?: number
  loop?: boolean
  autoplay?: boolean
  className?: string
}

export default function LottieAnimation({
  animationData,
  width = 100,
  height = 100,
  loop = true,
  autoplay = true,
  className = "",
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !animationData) return

    // Simple animation fallback using CSS animations
    // In production, you would use the actual Lottie library
    const element = containerRef.current
    element.style.animation = "float 3s ease-in-out infinite"

    return () => {
      element.style.animation = ""
    }
  }, [animationData])

  // Fallback animated icon when no Lottie data is provided
  if (!animationData) {
    return (
      <div ref={containerRef} className={`inline-block ${className}`} style={{ width, height }}>
        <div className="w-full h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse" />
      </div>
    )
  }

  return <div ref={containerRef} className={className} style={{ width, height }} />
}

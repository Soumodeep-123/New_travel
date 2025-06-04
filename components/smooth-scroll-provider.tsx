"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
//import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollTrigger } from "gsap/all"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface SmoothScrollProviderProps {
  children: React.ReactNode
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Smooth scroll implementation
      const smoother = gsap.to(scrollRef.current, {
        duration: 1,
        ease: "power2.out",
      })

      // Initialize scroll animations
      ScrollTrigger.batch(".fade-in", {
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.2,
              ease: "power2.out",
            },
          )
        },
        once: true,
      })

      ScrollTrigger.batch(".slide-up", {
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            {
              opacity: 0,
              y: 100,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              stagger: 0.15,
              ease: "power3.out",
            },
          )
        },
        once: true,
      })

      // Parallax effects
      gsap.utils.toArray(".parallax").forEach((element: any) => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })

      // Background zoom effects
      gsap.utils.toArray(".bg-zoom").forEach((element: any) => {
        gsap.fromTo(
          element,
          {
            scale: 1.2,
          },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        )
      })
    }, scrollRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={scrollRef} className="smooth-scroll-container">
      {children}
    </div>
  )
}

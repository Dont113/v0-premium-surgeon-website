'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface FadeInOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  once?: boolean
}

export function FadeInOnScroll({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  y = 30,
  once = true,
}: FadeInOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      // Skip animation for users who prefer reduced motion
      gsap.set(element, { opacity: 1, y: 0 })
      return
    }

    // Set initial state
    gsap.set(element, { opacity: 0, y })

    // Create scroll trigger animation
    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom-=100',
        toggleActions: once ? 'play none none none' : 'play reverse play reverse',
      },
    })

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [delay, duration, y, once])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

// Stagger animation for multiple children
interface StaggerFadeInProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  duration?: number
  y?: number
}

export function StaggerFadeIn({
  children,
  className = '',
  staggerDelay = 0.1,
  duration = 0.6,
  y = 30,
}: StaggerFadeInProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const items = container.children

    if (prefersReducedMotion) {
      gsap.set(items, { opacity: 1, y: 0 })
      return
    }

    gsap.set(items, { opacity: 0, y })

    const animation = gsap.to(items, {
      opacity: 1,
      y: 0,
      duration,
      stagger: staggerDelay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom-=100',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill()
        }
      })
    }
  }, [staggerDelay, duration, y])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

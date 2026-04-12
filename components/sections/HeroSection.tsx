'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ChevronDown } from 'lucide-react'
import { heroContent } from '@/lib/demo-content'

interface HeroSectionProps {
  onOpenModal: () => void
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadlineRef = useRef<HTMLParagraphElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLButtonElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Initial state
    gsap.set([headlineRef.current, subheadlineRef.current, taglineRef.current, ctaRef.current], {
      opacity: 0,
      y: 30,
    })
    gsap.set(scrollIndicatorRef.current, { opacity: 0 })

    // Staggered animation
    tl.to(headlineRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.3)
      .to(subheadlineRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.6)
      .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.9)
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5 }, 1.2)
      .to(scrollIndicatorRef.current, { opacity: 1, duration: 0.5 }, 1.5)

    // Floating scroll indicator animation
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })

    return () => {
      tl.kill()
    }
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Subtle decorative element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent-gold/3 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container-wide mx-auto px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-4 text-balance"
          >
            {heroContent.headline}
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className="text-xl md:text-2xl lg:text-3xl text-gold mb-6 tracking-wide"
          >
            {heroContent.subheadline}
          </p>

          {/* Tagline */}
          <p
            ref={taglineRef}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {heroContent.tagline}
          </p>

          {/* CTA Button */}
          <button
            ref={ctaRef}
            onClick={onOpenModal}
            className="btn-gold text-base md:text-lg px-8 md:px-12 py-4 md:py-5"
          >
            {heroContent.cta}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-muted-foreground hover:text-gold transition-colors"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  )
}

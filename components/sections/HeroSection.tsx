'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
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
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Initial state
    gsap.set([headlineRef.current, subheadlineRef.current, taglineRef.current, ctaRef.current], {
      opacity: 0,
      y: 30,
    })

    // Staggered animation
    tl.to(headlineRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.3)
      .to(subheadlineRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.6)
      .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.9)
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5 }, 1.2)

    // Animate floating particles
    if (particlesRef.current) {
      const particles = particlesRef.current.querySelectorAll('.particle')
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: -20 + Math.random() * 40,
          x: -10 + Math.random() * 20,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2,
        })
      })
    }

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 bg-background">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, var(--color-gold) 1px, transparent 1px),
                             linear-gradient(to bottom, var(--color-gold) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }} />
        </div>

        {/* Floating particles */}
        <div ref={particlesRef} className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 rounded-full bg-gold/20"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
            />
          ))}
        </div>

        {/* Soft glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide mx-auto px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-gold-gradient mb-4 text-balance"
          >
            {heroContent.headline}
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className="text-lg md:text-xl lg:text-2xl text-gold-gradient mb-6 tracking-wide"
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
    </section>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll'
import { beforeAfterCases } from '@/lib/demo-content'

export function BeforeAfterSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Autoplay slider
  useEffect(() => {
    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        if (!isPaused) {
          setActiveIndex((prev) => (prev + 1) % beforeAfterCases.length)
        }
      }, 4000)
    }

    startAutoplay()

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [isPaused])

  // Animate on index change
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    if (sliderRef.current) {
      gsap.fromTo(
        sliderRef.current,
        { opacity: 0.5 },
        { opacity: 1, duration: 0.4, ease: 'power2.out' }
      )
    }
  }, [activeIndex])

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
    // Reset autoplay timer
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = setInterval(() => {
        if (!isPaused) {
          setActiveIndex((prev) => (prev + 1) % beforeAfterCases.length)
        }
      }, 4000)
    }
  }

  return (
    <section id="results" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        {/* Header */}
        <FadeInOnScroll className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
            Real Results
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 text-balance">
            Transformations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See the natural, refined results achieved by our patients. 
            Each transformation is uniquely tailored to enhance individual beauty.
          </p>
        </FadeInOnScroll>

        {/* Grid Layout */}
        <FadeInOnScroll>
          <div
            ref={sliderRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {beforeAfterCases.map((caseItem, index) => (
              <div
                key={caseItem.id}
                className={`group relative bg-card border border-border rounded-lg overflow-hidden hover-scale transition-opacity duration-300 ${
                  activeIndex === index ? 'ring-2 ring-gold' : ''
                }`}
              >
                {/* Before/After Images Container */}
                <div className="aspect-[3/4] relative">
                  {/* Before Image Placeholder */}
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 bg-secondary flex items-center justify-center border-r border-border/50">
                      <div className="text-center p-2">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Before</span>
                        <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
                          <span className="text-muted-foreground text-xs">Photo</span>
                        </div>
                      </div>
                    </div>
                    {/* After Image Placeholder */}
                    <div className="w-1/2 bg-secondary/80 flex items-center justify-center">
                      <div className="text-center p-2">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">After</span>
                        <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
                          <span className="text-muted-foreground text-xs">Photo</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gold text-sm font-medium">{caseItem.procedure}</span>
                    <span className="text-xs text-muted-foreground">Age {caseItem.age}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{caseItem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInOnScroll>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {beforeAfterCases.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-gold w-6'
                  : 'bg-border hover:bg-muted-foreground'
              }`}
              aria-label={`View case ${index + 1}`}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          Results may vary. Images are for illustrative purposes only.
        </p>
      </div>
    </section>
  )
}

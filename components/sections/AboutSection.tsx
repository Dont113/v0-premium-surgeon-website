'use client'

import { Check } from 'lucide-react'
import { FadeInOnScroll, StaggerFadeIn } from '@/components/animations/FadeInOnScroll'
import { aboutContent, siteConfig } from '@/lib/demo-content'

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <FadeInOnScroll className="order-2 lg:order-1">
            <div className="relative">
              {/* Placeholder image container */}
              <div className="aspect-[4/5] bg-secondary rounded-lg overflow-hidden relative">
                {/* Decorative border */}
                <div className="absolute inset-0 border border-border rounded-lg" />
                
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-4xl font-heading text-muted-foreground">AV</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Professional Portrait</p>
                    <p className="text-muted-foreground/60 text-xs mt-1">Placeholder Image</p>
                  </div>
                </div>

                {/* Gold accent corner */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/30 rounded-lg -z-10" />
              </div>
            </div>
          </FadeInOnScroll>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <FadeInOnScroll>
              <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
                About {siteConfig.name}
              </span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
                {aboutContent.headline}
              </h2>
            </FadeInOnScroll>

            <div className="space-y-4 mb-8">
              {aboutContent.bio.map((paragraph, index) => (
                <FadeInOnScroll key={index} delay={0.1 * (index + 1)}>
                  <p className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                </FadeInOnScroll>
              ))}
            </div>

            {/* Highlights */}
            <StaggerFadeIn className="grid sm:grid-cols-2 gap-3">
              {aboutContent.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                    <Check size={12} className="text-gold" />
                  </div>
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </StaggerFadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

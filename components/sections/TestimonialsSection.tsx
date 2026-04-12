'use client'

import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { FadeInOnScroll, StaggerFadeIn } from '@/components/animations/FadeInOnScroll'
import { testimonials } from '@/lib/demo-content'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container-wide mx-auto">
        {/* Header */}
        <FadeInOnScroll className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
            Patient Stories
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 text-balance">
            Words of Trust
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hear from patients who have experienced the exceptional care and 
            transformative results at our clinic.
          </p>
        </FadeInOnScroll>

        {/* Testimonials Grid */}
        <StaggerFadeIn className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-card border border-border rounded-lg p-6 hover-lift relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-gold/20">
                <Quote size={32} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground text-sm leading-relaxed mb-6 relative z-10">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gold/20 flex items-center justify-center relative">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.procedure}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </StaggerFadeIn>
      </div>
    </section>
  )
}

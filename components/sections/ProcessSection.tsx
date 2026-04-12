'use client'

import { FadeInOnScroll, StaggerFadeIn } from '@/components/animations/FadeInOnScroll'
import { processSteps } from '@/lib/demo-content'

interface ProcessSectionProps {
  onOpenModal: () => void
}

export function ProcessSection({ onOpenModal }: ProcessSectionProps) {
  return (
    <section id="process" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        {/* Header */}
        <FadeInOnScroll className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
            Your Journey
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 text-balance">
            The Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From initial consultation to final follow-up, experience a seamless journey 
            with personalised care at every step.
          </p>
        </FadeInOnScroll>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <StaggerFadeIn className="space-y-8 md:space-y-0">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-card border border-border rounded-lg p-6 hover-lift">
                    <span className="text-gold text-sm font-medium mb-2 block">
                      Step {step.step}
                    </span>
                    <h3 className="font-heading text-xl text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-background font-semibold">{step.step}</span>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </StaggerFadeIn>
        </div>

        {/* CTA */}
        <FadeInOnScroll className="text-center mt-16">
          <button onClick={onOpenModal} className="btn-gold">
            Start Your Journey
          </button>
        </FadeInOnScroll>
      </div>
    </section>
  )
}

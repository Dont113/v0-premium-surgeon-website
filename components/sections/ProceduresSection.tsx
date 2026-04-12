'use client'

import { FadeInOnScroll, StaggerFadeIn } from '@/components/animations/FadeInOnScroll'
import { procedures } from '@/lib/demo-content'

interface ProceduresSectionProps {
  onOpenModal: () => void
}

// Custom SVG icons that look professional and medical-themed
const ProcedureIcons: Record<string, React.ReactNode> = {
  nose: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M12 2C12 2 9 6 9 10C9 14 12 18 12 22" />
      <path d="M12 2C12 2 15 6 15 10C15 14 12 18 12 22" />
      <path d="M7 16C7 16 9 18 12 18C15 18 17 16 17 16" />
      <circle cx="9" cy="19" r="1.5" />
      <circle cx="15" cy="19" r="1.5" />
    </svg>
  ),
  face: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <ellipse cx="12" cy="12" rx="9" ry="11" />
      <path d="M8 9C8 9 8.5 8 9.5 8C10.5 8 11 9 11 9" />
      <path d="M13 9C13 9 13.5 8 14.5 8C15.5 8 16 9 16 9" />
      <path d="M12 12V14.5" />
      <path d="M9 17C9 17 10.5 18.5 12 18.5C13.5 18.5 15 17 15 17" />
    </svg>
  ),
  breast: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M4 8C4 8 4 16 8 18C10 19 12 19 12 19" />
      <path d="M20 8C20 8 20 16 16 18C14 19 12 19 12 19" />
      <path d="M4 8C4 6 6 4 8 4C10 4 12 6 12 8" />
      <path d="M20 8C20 6 18 4 16 4C14 4 12 6 12 8" />
      <circle cx="8" cy="12" r="1" />
      <circle cx="16" cy="12" r="1" />
    </svg>
  ),
  body: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" />
      <path d="M12 6V10" />
      <path d="M8 10H16C16 10 17 10 17 12C17 14 16 22 14 22" />
      <path d="M8 10C8 10 7 10 7 12C7 14 8 22 10 22" />
      <path d="M10 14H14" />
    </svg>
  ),
}

export function ProceduresSection({ onOpenModal }: ProceduresSectionProps) {
  return (
    <section id="procedures" className="section-padding bg-secondary/30">
      <div className="container-wide mx-auto">
        {/* Header */}
        <FadeInOnScroll className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 text-balance">
            Signature Procedures
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each procedure is tailored to your unique anatomy and aesthetic goals, 
            delivering natural results that enhance your individual beauty.
          </p>
        </FadeInOnScroll>

        {/* Procedure Cards */}
        <StaggerFadeIn className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {procedures.map((procedure) => (
            <div
              key={procedure.id}
              className="group bg-card border border-border rounded-lg p-6 hover-lift cursor-pointer"
              onClick={onOpenModal}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-5 text-gold group-hover:bg-gold group-hover:text-background transition-colors duration-300">
                {ProcedureIcons[procedure.icon]}
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl text-foreground mb-3">
                {procedure.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {procedure.description}
              </p>

              {/* Learn More Link */}
              <span className="inline-flex items-center text-sm text-gold group-hover:underline">
                Learn more
                <svg
                  className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          ))}
        </StaggerFadeIn>
      </div>
    </section>
  )
}

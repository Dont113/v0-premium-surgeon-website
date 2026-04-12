'use client'

import { Sparkles, Heart, User, Activity } from 'lucide-react'
import { FadeInOnScroll, StaggerFadeIn } from '@/components/animations/FadeInOnScroll'
import { procedures } from '@/lib/demo-content'

interface ProceduresSectionProps {
  onOpenModal: () => void
}

const iconMap: Record<string, React.ReactNode> = {
  nose: <Sparkles size={28} />,
  face: <User size={28} />,
  breast: <Heart size={28} />,
  body: <Activity size={28} />,
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
                {iconMap[procedure.icon]}
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

'use client'

import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll'
import { ctaContent } from '@/lib/demo-content'

interface CTASectionProps {
  onOpenModal: () => void
}

export function CTASection({ onOpenModal }: CTASectionProps) {
  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container-narrow mx-auto relative z-10">
        <FadeInOnScroll className="text-center">
          {/* Headline */}
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
            {ctaContent.headline}
          </h2>

          {/* Subheadline */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {ctaContent.subheadline}
          </p>

          {/* CTA Button */}
          <button
            onClick={onOpenModal}
            className="btn-gold text-lg px-10 py-5"
          >
            {ctaContent.buttonText}
          </button>

          {/* Trust Note */}
          <p className="text-xs text-muted-foreground mt-8">
            Consultations are completely confidential. No obligation to proceed.
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  )
}

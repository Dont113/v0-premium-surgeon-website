'use client'

import { Check } from 'lucide-react'
import { FadeInOnScroll, StaggerFadeIn } from '@/components/animations/FadeInOnScroll'
import { pricingData } from '@/lib/demo-content'

interface PricingSectionProps {
  onOpenModal: () => void
}

export function PricingSection({ onOpenModal }: PricingSectionProps) {
  return (
    <section id="pricing" className="section-padding bg-secondary/30">
      <div className="container-wide mx-auto">
        {/* Header */}
        <FadeInOnScroll className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
            Investment
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 text-balance">
            Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We believe in complete transparency. All prices include consultation, surgery, 
            anaesthesia, facility fees, and comprehensive aftercare.
          </p>
        </FadeInOnScroll>

        {/* Pricing Cards */}
        <StaggerFadeIn className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {pricingData.map((item) => (
            <div
              key={item.id}
              className={`relative bg-card border rounded-lg p-6 hover-lift ${
                item.highlighted
                  ? 'border-gold ring-1 ring-gold'
                  : 'border-border'
              }`}
            >
              {/* Highlighted Badge */}
              {item.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-background text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="font-heading text-lg text-foreground mb-2">
                  {item.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold text-foreground">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.note}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                      <Check size={10} className="text-gold" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={onOpenModal}
                className={`w-full py-3 rounded-md text-sm font-medium transition-colors ${
                  item.highlighted
                    ? 'btn-gold'
                    : 'btn-outline-gold'
                }`}
              >
                Book Consultation
              </button>
            </div>
          ))}
        </StaggerFadeIn>

        {/* Note */}
        <FadeInOnScroll className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Financing options available. Final pricing confirmed during consultation based on individual requirements.
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  )
}

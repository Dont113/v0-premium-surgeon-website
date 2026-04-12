'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll'
import { faqs } from '@/lib/demo-content'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <FadeInOnScroll className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
            Questions
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 text-balance">
            Frequently Asked
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our procedures, consultations, 
            and what to expect throughout your journey.
          </p>
        </FadeInOnScroll>

        {/* FAQ Accordion */}
        <FadeInOnScroll>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-secondary/50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-gold transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}

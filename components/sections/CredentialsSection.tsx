'use client'

import { Shield, Award, Clock } from 'lucide-react'
import { FadeInOnScroll, StaggerFadeIn } from '@/components/animations/FadeInOnScroll'
import { credentials, siteConfig } from '@/lib/demo-content'

export function CredentialsSection() {
  return (
    <section id="credentials" className="section-padding bg-secondary/30">
      <div className="container-wide mx-auto">
        {/* Header */}
        <FadeInOnScroll className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
            Credentials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 text-balance">
            Trusted Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {siteConfig.name} maintains the highest professional standards, 
            holding memberships with the UK&apos;s leading medical associations.
          </p>
        </FadeInOnScroll>

        {/* Credentials Grid */}
        <StaggerFadeIn className="grid md:grid-cols-3 gap-8 mb-16">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-gold transition-colors">
                <Shield size={32} className="text-gold" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">
                {credential.abbreviation}
              </h3>
              <p className="text-sm text-muted-foreground mb-1">
                {credential.name}
              </p>
              <p className="text-xs text-muted-foreground/70">
                {credential.description}
              </p>
            </div>
          ))}
        </StaggerFadeIn>

        {/* Stats Row */}
        <FadeInOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-border">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock size={20} className="text-gold" />
                <span className="text-3xl font-heading text-foreground">15+</span>
              </div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award size={20} className="text-gold" />
                <span className="text-3xl font-heading text-foreground">3,000+</span>
              </div>
              <p className="text-sm text-muted-foreground">Procedures</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield size={20} className="text-gold" />
                <span className="text-3xl font-heading text-foreground">98%</span>
              </div>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award size={20} className="text-gold" />
                <span className="text-3xl font-heading text-foreground">5.0</span>
              </div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}

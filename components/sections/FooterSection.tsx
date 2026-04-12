'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { footerContent, siteConfig, navigation } from '@/lib/demo-content'

interface FooterSectionProps {
  onOpenModal: () => void
}

export function FooterSection({ onOpenModal }: FooterSectionProps) {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container-wide mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-heading text-2xl text-foreground mb-1">
                {siteConfig.name}
              </h3>
              <p className="text-sm text-gold">
                {siteConfig.title}
              </p>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              {footerContent.tagline}
            </p>
            <button
              onClick={onOpenModal}
              className="btn-gold text-sm"
            >
              Book Consultation
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  {footerContent.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a
                  href={`tel:${footerContent.phone.replace(/\s/g, '')}`}
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  {footerContent.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a
                  href={`mailto:${footerContent.email}`}
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  {footerContent.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-gold flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {footerContent.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-wide mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              {footerContent.copyright}
            </p>
            <div className="flex items-center gap-6">
              <a
                href={footerContent.links.privacy}
                className="text-xs text-muted-foreground hover:text-gold transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href={footerContent.links.terms}
                className="text-xs text-muted-foreground hover:text-gold transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

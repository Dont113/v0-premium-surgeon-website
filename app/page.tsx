'use client'

import { useState } from 'react'

// Common Components
import { Header } from '@/components/common/Header'
import { ContactModal } from '@/components/common/ContactModal'
import { GDPRConsent } from '@/components/common/GDPRConsent'
import { BackToTopButton } from '@/components/common/BackToTopButton'

// Section Components
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProceduresSection } from '@/components/sections/ProceduresSection'
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CredentialsSection } from '@/components/sections/CredentialsSection'
import { CTASection } from '@/components/sections/CTASection'
import { FooterSection } from '@/components/sections/FooterSection'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      {/* Fixed Header */}
      <Header onOpenModal={openModal} />

      {/* Main Content */}
      <main className="w-full">
        {/* Section 1: Hero */}
        <HeroSection onOpenModal={openModal} />

        {/* Section 2: About */}
        <AboutSection />

        {/* Section 3: Procedures */}
        <ProceduresSection onOpenModal={openModal} />

        {/* Section 4: Before/After Gallery */}
        <BeforeAfterSection />

        {/* Section 5: Testimonials */}
        <TestimonialsSection />

        {/* Section 6: Process */}
        <ProcessSection onOpenModal={openModal} />

        {/* Section 7: Pricing */}
        <PricingSection onOpenModal={openModal} />

        {/* Section 8: FAQ */}
        <FAQSection />

        {/* Section 9: Credentials */}
        <CredentialsSection />

        {/* Section 10: Final CTA */}
        <CTASection onOpenModal={openModal} />

        {/* Section 11: Footer */}
        <FooterSection onOpenModal={openModal} />
      </main>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* GDPR Consent Banner */}
      <GDPRConsent />

      {/* Back to Top Button */}
      <BackToTopButton />
    </>
  )
}

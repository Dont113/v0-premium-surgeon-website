'use client'

import { useState } from 'react'
import { X, CheckCircle } from 'lucide-react'
import { contactForm, siteConfig } from '@/lib/demo-content'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  gdprConsent: boolean
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  gdprConsent?: string
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    gdprConsent: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }

    if (!formData.gdprConsent) {
      newErrors.gdprConsent = 'You must consent to data processing'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Frontend only - simulate successful submission
      setIsSubmitted(true)
    }
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      gdprConsent: false,
    })
    setErrors({})
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="modal-overlay"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {isSubmitted ? (
          /* Success State */
          <div className="text-center py-6">
            <div className="flex justify-center mb-3">
              <CheckCircle className="w-14 h-14 text-gold" />
            </div>
            <h3 className="font-heading text-xl text-foreground mb-3">
              Thank You
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              {contactForm.successMessage}
            </p>
            <button
              onClick={handleClose}
              className="btn-gold"
            >
              Close
            </button>
          </div>
        ) : (
          /* Form */
          <>
            <div className="mb-4">
              <h2
                id="modal-title"
                className="font-heading text-xl md:text-2xl text-foreground mb-1"
              >
                Book Private Consultation
              </h2>
              <p className="text-muted-foreground text-xs">
                {siteConfig.consultationFee} consultation fee ({siteConfig.consultationNote.toLowerCase()})
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-0.5"
                >
                  {contactForm.fields.name.label}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={contactForm.fields.name.placeholder}
                  className={`w-full px-3 py-2.5 bg-secondary border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold text-sm ${
                    errors.name ? 'border-destructive' : 'border-border'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-0.5"
                >
                  {contactForm.fields.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={contactForm.fields.email.placeholder}
                  className={`w-full px-3 py-2.5 bg-secondary border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold text-sm ${
                    errors.email ? 'border-destructive' : 'border-border'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-0.5"
                >
                  {contactForm.fields.phone.label}
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={contactForm.fields.phone.placeholder}
                  className={`w-full px-3 py-2.5 bg-secondary border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold text-sm ${
                    errors.phone ? 'border-destructive' : 'border-border'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-0.5"
                >
                  {contactForm.fields.message.label}
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={contactForm.fields.message.placeholder}
                  className="w-full px-3 py-2.5 bg-secondary border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold resize-none text-sm"
                />
              </div>

              {/* GDPR Consent */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="gdprConsent"
                  checked={formData.gdprConsent}
                  onChange={(e) => setFormData({ ...formData, gdprConsent: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-border bg-secondary text-gold focus:ring-gold"
                />
                <label
                  htmlFor="gdprConsent"
                  className={`text-sm ${errors.gdprConsent ? 'text-destructive' : 'text-muted-foreground'}`}
                >
                  {contactForm.gdprText}
                </label>
              </div>
              {errors.gdprConsent && (
                <p className="text-sm text-destructive">{errors.gdprConsent}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full btn-gold py-3 text-sm font-medium"
              >
                {contactForm.submitText}
              </button>
            </form>
          </>
        )}
      </div>
    </>
  )
}

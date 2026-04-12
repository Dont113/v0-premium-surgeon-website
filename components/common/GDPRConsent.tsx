'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export function GDPRConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('gdpr-consent')
    if (consent === null) {
      // Delay showing the banner for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('gdpr-consent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('gdpr-consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="gdpr-banner animate-in slide-in-from-bottom duration-500">
      <div className="container-wide mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-8">
            <h3 className="font-medium text-foreground mb-1">
              We Value Your Privacy
            </h3>
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience and analyse site traffic. 
              By clicking &quot;Accept&quot;, you consent to our use of cookies. 
              Read our{' '}
              <a href="/privacy-policy" className="text-gold hover:underline">
                Privacy Policy
              </a>{' '}
              for more information.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="btn-gold text-sm px-6 py-2"
            >
              Accept
            </button>
          </div>
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 md:hidden p-1 text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

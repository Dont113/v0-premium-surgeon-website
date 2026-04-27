import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aesthetic Surgery | Premium Plastic Surgery',
  description: 'Expert cosmetic surgery. Rhinoplasty, facelift, breast augmentation by board-certified surgeons. Book your private consultation today.',
  keywords: ['plastic surgeon', 'cosmetic surgery', 'rhinoplasty specialist', 'facelift surgery', 'breast augmentation'],
  authors: [{ name: 'Aesthetic Surgery' }],
  openGraph: {
    title: 'Aesthetic Surgery | Premium Plastic Surgery',
    description: 'Expert cosmetic surgery. Rhinoplasty, facelift, breast augmentation by board-certified surgeons.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              name: 'Aesthetic Surgery',
              specialty: 'Plastic Surgery',
              description: 'Premium plastic surgery and cosmetic procedures',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Medical District, Suite 100',
                addressLocality: 'Your City',
                postalCode: '00000',
                addressCountry: 'US',
              },
              telephone: '+1 (555) 123-4567',
              priceRange: '$$$$',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

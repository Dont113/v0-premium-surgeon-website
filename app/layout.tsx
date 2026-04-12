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
  title: 'Dr. Alexander Vance | Premium Plastic Surgery London',
  description: 'Expert cosmetic surgery in London. Rhinoplasty, facelift, breast augmentation by Dr. Alexander Vance. Book your private consultation today.',
  keywords: ['plastic surgeon London', 'cosmetic surgery UK', 'rhinoplasty specialist London', 'facelift surgery London', 'breast augmentation UK'],
  authors: [{ name: 'Dr. Alexander Vance' }],
  openGraph: {
    title: 'Dr. Alexander Vance | Premium Plastic Surgery London',
    description: 'Expert cosmetic surgery in London. Rhinoplasty, facelift, breast augmentation by Dr. Alexander Vance.',
    type: 'website',
    locale: 'en_GB',
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
              '@type': 'Physician',
              name: 'Dr. Alexander Vance',
              specialty: 'Plastic Surgery',
              description: 'Premium plastic surgery and cosmetic procedures in London',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Harley Street',
                addressLocality: 'London',
                postalCode: 'W1G 7JU',
                addressCountry: 'UK',
              },
              telephone: '+44 20 7123 4567',
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

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BR Cargo Solutions Pvt. Ltd. | International Freight & Logistics',
  description:
    'Premier international logistics partner specializing in seamless cross-border freight management — air, ocean, and land. Customs clearance, DGFT documentation, door-to-door delivery.',
  keywords: [
    'freight forwarding',
    'international logistics',
    'air cargo',
    'ocean freight',
    'customs clearance',
    'DGFT',
    'supply chain',
    'BR Cargo',
    'India logistics',
  ],
  authors: [{ name: 'BR Cargo Solutions Pvt. Ltd.' }],
  creator: 'BR Cargo Solutions Pvt. Ltd.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://brcargo.co.in',
    title: 'BR Cargo Solutions Pvt. Ltd. | International Freight & Logistics',
    description:
      'Seamless global logistics & end-to-end freight solutions. Air, ocean, and land freight forwarding with full customs clearance.',
    siteName: 'BR Cargo Solutions',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0F2C59',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} bg-background`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

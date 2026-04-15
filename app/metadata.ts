import { Metadata } from 'next'

export const siteMetadata: Metadata = {
  title: 'Khyathi Logistics Solutions - Driving Connections. Delivering Success.',
  description: 'Comprehensive end-to-end logistics solutions with real-time tracking, pan India connectivity, and flexible shipping options. PTL, FTL, and heavy transport services.',
  keywords: ['logistics', 'transportation', 'freight', 'PTL', 'FTL', 'tracking', 'Andhra Pradesh', 'Tirupati'],
  openGraph: {
    title: 'Khyathi Logistics Solutions - Driving Connections. Delivering Success.',
    description: 'Comprehensive end-to-end logistics solutions with real-time tracking, pan India connectivity, and flexible shipping options. PTL, FTL, and heavy transport services.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Khyathi Logistics Solutions',
    images: [
      {
        url: '/assets/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'Khyathi Logistics Solutions - Professional Transportation Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khyathi Logistics Solutions - Driving Connections. Delivering Success.',
    description: 'Comprehensive end-to-end logistics solutions with real-time tracking, pan India connectivity, and flexible shipping options.',
    images: ['/assets/hero-image.png'],
  },
}

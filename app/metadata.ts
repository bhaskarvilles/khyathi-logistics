import { Metadata } from 'next'

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://khyathilogistics.com'), // Update with your actual domain
  title: {
    default: 'Khyathi Logistics Solutions Private Limited - Driving Connections. Delivering Success.',
    template: '%s | Khyathi Logistics Solutions'
  },
  description: 'Comprehensive end-to-end logistics solutions with real-time tracking, pan India connectivity, and flexible shipping options. PTL, FTL, and heavy transport services. CIN: U52290AP2025PTC118981',
  keywords: [
    'logistics',
    'transportation',
    'freight',
    'PTL',
    'FTL',
    'tracking',
    'Andhra Pradesh',
    'Tirupati',
    'Tada',
    'Nellore',
    'express delivery',
    'heavy machinery transport',
    'logistics aggregator',
    'pan India logistics',
    'real-time tracking',
    'supply chain',
    'cargo transport',
    'freight forwarding'
  ],
  authors: [{ name: 'Khyathi Logistics Solutions Private Limited' }],
  creator: 'Khyathi Logistics Solutions Private Limited',
  publisher: 'Khyathi Logistics Solutions Private Limited',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Khyathi Logistics Solutions Private Limited - Driving Connections. Delivering Success.',
    description: 'Comprehensive end-to-end logistics solutions with real-time tracking, pan India connectivity, and flexible shipping options. PTL, FTL, and heavy transport services.',
    type: 'website',
    locale: 'en_US',
    url: 'https://khyathilogistics.com',
    siteName: 'Khyathi Logistics Solutions Private Limited',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Khyathi Logistics Solutions - Professional Transportation Services',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khyathi Logistics Solutions Private Limited - Driving Connections. Delivering Success.',
    description: 'Comprehensive end-to-end logistics solutions with real-time tracking, pan India connectivity, and flexible shipping options.',
    images: ['/og-image.png'],
    creator: '@khyathilogistics', // Update with actual Twitter handle
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://khyathilogistics.com',
  },
  category: 'Logistics & Transportation',
}

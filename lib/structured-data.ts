// JSON-LD Structured Data for SEO

export interface OrganizationSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  logo: string
  description: string
  address: {
    '@type': string
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  contactPoint: {
    '@type': string
    telephone: string
    contactType: string
    email: string
    availableLanguage: string[]
  }
  sameAs: string[]
}

export function getOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Khyathi Logistics Solutions Private Limited',
    url: 'https://khyathilogistics.com',
    logo: 'https://khyathilogistics.com/assets/logo-kh.png',
    description: 'Comprehensive end-to-end logistics solutions with real-time tracking, pan India connectivity, and flexible shipping options.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No. 408, 5th Floor, Akshara Apartments, Tada',
      addressLocality: 'Nellore',
      addressRegion: 'Andhra Pradesh',
      postalCode: '524401',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9701557906',
      contactType: 'Customer Service',
      email: 'info.khyathilogistics@gmail.com',
      availableLanguage: ['English', 'Hindi', 'Telugu'],
    },
    sameAs: [
      // Add social media URLs when available
      // 'https://www.facebook.com/khyathilogistics',
      // 'https://www.linkedin.com/company/khyathi-logistics',
      // 'https://twitter.com/khyathilogistics',
    ],
  }
}

export interface ServiceSchema {
  '@context': string
  '@type': string
  serviceType: string
  provider: {
    '@type': string
    name: string
  }
  areaServed: {
    '@type': string
    name: string
  }
  description: string
}

export function getServiceSchema(serviceType: string, description: string): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    provider: {
      '@type': 'Organization',
      name: 'Khyathi Logistics Solutions Private Limited',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description,
  }
}

export interface BreadcrumbSchema {
  '@context': string
  '@type': string
  itemListElement: Array<{
    '@type': string
    position: number
    name: string
    item: string
  }>
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export interface FAQSchema {
  '@context': string
  '@type': string
  mainEntity: Array<{
    '@type': string
    name: string
    acceptedAnswer: {
      '@type': string
      text: string
    }
  }>
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>): FAQSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://khyathilogistics.com' // Update with your actual domain
  
  const routes = [
    '',
    '/about',
    '/services',
    '/gallery',
    '/contact',
    '/get-quote',
    '/testimonials',
    '/partners',
    '/faq',
    '/blog',
    '/careers',
    '/track-shipment',
    '/terms',
    '/privacy',
    '/damage-policy',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : route.includes('blog') ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/services' || route === '/contact' ? 0.9 : 0.8,
  }))
}

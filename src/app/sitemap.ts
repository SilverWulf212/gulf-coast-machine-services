import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gulfcoastmachineservices.com'
  const lastModified = new Date()

  // Service slugs
  const services = [
    'hvac-repair',
    'generator-repair',
    'machinery-repair',
    'emergency-services',
    'preventive-maintenance',
  ]

  // City slugs
  const cities = [
    'houston',
    'galveston',
    'corpus-christi',
    'beaumont',
    'port-arthur',
    'texas-city',
  ]

  return [
    // Main pages
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Individual service pages
    ...services.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Individual city pages
    ...cities.map((slug) => ({
      url: `${baseUrl}/service-areas/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}

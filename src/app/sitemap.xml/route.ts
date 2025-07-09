export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inboxtales.com'
  
  const urls = [
    // Main Page
    { url: '/', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    
    // Core Services
    { url: '/services/whatsapp-automation', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: '/web-app-development', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: '/digital-marketing', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: '/sap-enterprise-integration', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: '/cybersecurity-audits', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: '/design-multimedia', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    
    // Supporting Pages
    { url: '/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: '/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: '/faq', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    
    // Additional Pages
    { url: '/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: '/industries', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: '/engagement-models', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: '/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: '/case-studies', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(({ url, lastModified, changeFrequency, priority }) => `
    <url>
      <loc>${baseUrl}${url}</loc>
      <lastmod>${lastModified.toISOString()}</lastmod>
      <changefreq>${changeFrequency}</changefreq>
      <priority>${priority}</priority>
    </url>
  `).join('')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
} 
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blog",
  description: "Stay updated with the latest insights, trends, and expert analysis in digital transformation, technology innovation, and business solutions from InboxTales.",
  keywords: ["blog", "digital transformation", "technology insights", "industry trends", "expert analysis", "business solutions"],
  openGraph: {
    title: "Blog | InboxTales",
    description: "Stay updated with the latest insights, trends, and expert analysis in digital transformation, technology innovation, and business solutions from InboxTales.",
    images: ["/images/logos/logo.png"],
  },
}

export default function BlogIndexPage() {
  const blogPosts = [
    {
      slug: 'digital-transformation-trends-2024',
      title: 'Digital Transformation Trends 2024',
      excerpt: 'Explore the key digital transformation trends that will shape business strategy in 2024.',
      date: '2024-01-15'
    },
    {
      slug: 'ai-in-business-automation',
      title: 'AI in Business Automation',
      excerpt: 'How artificial intelligence is revolutionizing business automation and operational efficiency.',
      date: '2024-01-10'
    },
    {
      slug: 'cloud-migration-strategies',
      title: 'Cloud Migration Strategies',
      excerpt: 'Best practices and strategies for successful cloud migration and digital transformation.',
      date: '2024-01-05'
    }
  ]

  return (
    <main>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-5">Blog</h1>
            <p className="lead text-center mb-5">
              Latest insights and expert analysis in digital transformation
            </p>
            <div className="row">
              {blogPosts.map((post) => (
                <div key={post.slug} className="col-lg-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h3 className="card-title">{post.title}</h3>
                      <p className="card-text">{post.excerpt}</p>
                      <p className="text-muted">
                        <small>{new Date(post.date).toLocaleDateString()}</small>
                      </p>
                      <a href={`/blog/${post.slug}`} className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
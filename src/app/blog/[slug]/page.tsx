import type { Metadata } from 'next'

interface BlogPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const slug = params.slug
  
  return {
    title: `Blog - ${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
    description: `Read our latest insights on ${slug.replace(/-/g, ' ')} and digital transformation trends. Expert analysis and industry perspectives from InboxTales.`,
    keywords: [slug.replace(/-/g, ' '), "blog", "digital transformation", "technology insights", "industry trends"],
    openGraph: {
      title: `Blog - ${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | InboxTales`,
      description: `Read our latest insights on ${slug.replace(/-/g, ' ')} and digital transformation trends. Expert analysis and industry perspectives from InboxTales.`,
      images: ["/images/logos/logo.png"],
    },
  }
}

export default function BlogPage({ params }: BlogPageProps) {
  const slug = params.slug
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  
  return (
    <main>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-5">{title}</h1>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="card">
                  <div className="card-body">
                    <p className="text-muted mb-3">
                      <small>Published on {new Date().toLocaleDateString()}</small>
                    </p>
                    <p className="lead">
                      This is a sample blog post about {slug.replace(/-/g, ' ')}. 
                      In a real implementation, this content would be loaded from a CMS or markdown files.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
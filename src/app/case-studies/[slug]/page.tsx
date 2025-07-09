import type { Metadata } from 'next'

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const slug = params.slug
  
  return {
    title: `Case Study - ${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
    description: `Explore how InboxTales delivered exceptional results for ${slug.replace(/-/g, ' ')}. Real-world case study showcasing our digital transformation expertise.`,
    keywords: [slug.replace(/-/g, ' '), "case study", "success story", "digital transformation", "client results", "project showcase"],
    openGraph: {
      title: `Case Study - ${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | InboxTales`,
      description: `Explore how InboxTales delivered exceptional results for ${slug.replace(/-/g, ' ')}. Real-world case study showcasing our digital transformation expertise.`,
      images: ["/images/logos/logo.png"],
    },
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const slug = params.slug
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  
  return (
    <main>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-5">Case Study: {title}</h1>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="card">
                  <div className="card-body">
                    <div className="row mb-4">
                      <div className="col-md-6">
                        <h5>Client</h5>
                        <p className="text-muted">Sample Client Name</p>
                      </div>
                      <div className="col-md-6">
                        <h5>Industry</h5>
                        <p className="text-muted">Technology</p>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-6">
                        <h5>Project Duration</h5>
                        <p className="text-muted">6 months</p>
                      </div>
                      <div className="col-md-6">
                        <h5>Services</h5>
                        <p className="text-muted">Custom Software Development</p>
                      </div>
                    </div>
                    <h3>Challenge</h3>
                    <p>
                      The client needed a comprehensive digital solution to streamline their operations 
                      and improve customer engagement. They were facing challenges with manual processes 
                      and outdated systems that were hindering their growth.
                    </p>
                    <h3>Solution</h3>
                    <p>
                      InboxTales developed a custom software solution that automated key business processes, 
                      integrated with existing systems, and provided real-time analytics and reporting capabilities.
                    </p>
                    <h3>Results</h3>
                    <ul>
                      <li>50% reduction in manual processing time</li>
                      <li>30% improvement in customer satisfaction</li>
                      <li>25% increase in operational efficiency</li>
                      <li>ROI achieved within 8 months</li>
                    </ul>
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
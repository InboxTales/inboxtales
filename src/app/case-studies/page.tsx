import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Explore real-world success stories and case studies showcasing InboxTales' digital transformation expertise and the measurable results we've delivered for our clients.",
  keywords: ["case studies", "success stories", "client results", "digital transformation", "project showcase", "business outcomes"],
  openGraph: {
    title: "Case Studies | InboxTales",
    description: "Explore real-world success stories and case studies showcasing InboxTales' digital transformation expertise and the measurable results we've delivered for our clients.",
    images: ["/images/logos/logo.png"],
  },
}

export default function CaseStudiesIndexPage() {
  const caseStudies = [
    {
      slug: 'healthcare-automation-success',
      title: 'Healthcare Automation Success',
      client: 'Leading Healthcare Provider',
      industry: 'Healthcare',
      results: '50% reduction in processing time',
      excerpt: 'How we helped a healthcare provider automate patient management and improve care delivery.'
    },
    {
      slug: 'retail-digital-transformation',
      title: 'Retail Digital Transformation',
      client: 'National Retail Chain',
      industry: 'Retail',
      results: '30% increase in online sales',
      excerpt: 'Complete digital transformation of a national retail chain\'s e-commerce platform.'
    },
    {
      slug: 'fintech-payment-solution',
      title: 'Fintech Payment Solution',
      client: 'Financial Services Company',
      industry: 'Financial Services',
      results: '40% improvement in transaction speed',
      excerpt: 'Development of a cutting-edge payment processing system for a fintech startup.'
    }
  ]

  return (
    <main>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-5">Case Studies</h1>
            <p className="lead text-center mb-5">
              Real-world success stories and measurable results
            </p>
            <div className="row">
              {caseStudies.map((study) => (
                <div key={study.slug} className="col-lg-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h3 className="card-title">{study.title}</h3>
                      <p className="text-muted mb-2">
                        <strong>Client:</strong> {study.client}
                      </p>
                      <p className="text-muted mb-2">
                        <strong>Industry:</strong> {study.industry}
                      </p>
                      <p className="text-success mb-3">
                        <strong>Results:</strong> {study.results}
                      </p>
                      <p className="card-text">{study.excerpt}</p>
                      <a href={`/case-studies/${study.slug}`} className="btn btn-primary">
                        View Case Study
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
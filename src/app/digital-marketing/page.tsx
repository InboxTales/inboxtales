import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Digital Marketing",
  description: "Comprehensive digital marketing services by InboxTales. From SEO and PPC to social media marketing and content strategy, we help businesses grow their online presence.",
  keywords: ["digital marketing", "SEO services", "PPC advertising", "social media marketing", "content marketing", "online advertising"],
  openGraph: {
    title: "Digital Marketing | InboxTales",
    description: "Comprehensive digital marketing services by InboxTales. From SEO and PPC to social media marketing and content strategy, we help businesses grow their online presence.",
    images: ["/images/logos/logo.png"],
  },
}

export default function DigitalMarketingPage() {
  return (
    <main>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-5">Digital Marketing</h1>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <p className="lead text-center mb-5">
                  Comprehensive digital marketing solutions to grow your online presence
                </p>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Search Engine Optimization (SEO)</h3>
                        <p>Improve your website's visibility in search results with our comprehensive SEO services. We optimize for both on-page and off-page factors.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Pay-Per-Click (PPC) Advertising</h3>
                        <p>Targeted advertising campaigns on Google Ads, Facebook, and other platforms. We manage your campaigns to maximize ROI and drive conversions.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Social Media Marketing</h3>
                        <p>Engage with your audience across all major social media platforms. We create compelling content and manage your social media presence.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Content Marketing</h3>
                        <p>Create valuable, relevant content that attracts and engages your target audience. From blog posts to videos, we help you tell your story.</p>
                      </div>
                    </div>
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
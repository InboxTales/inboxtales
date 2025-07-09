import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "InboxTales serves diverse industries with tailored digital solutions. From healthcare to finance, retail to manufacturing, we transform businesses across sectors.",
  keywords: ["industry solutions", "healthcare technology", "financial services", "retail automation", "manufacturing digitalization", "sector-specific solutions"],
  openGraph: {
    title: "Industries We Serve | InboxTales",
    description: "InboxTales serves diverse industries with tailored digital solutions. From healthcare to finance, retail to manufacturing, we transform businesses across sectors.",
    images: ["/images/logos/logo.png"],
  },
}

export default function IndustriesPage() {
  return (
    <main>
      <section className="py-20 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="section-title-brand mb-8">Industries We Serve</h1>
              <p className="brand-text mb-12">Tailored digital solutions for diverse industry sectors</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-8">
              <div className="brandCard text-center h-full">
                <h3 className="brand-heading mb-2">Healthcare</h3>
                <p className="brand-text">Digital health solutions, patient management systems, and telemedicine platforms that improve care delivery and patient outcomes.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-8">
              <div className="brandCard text-center h-full">
                <h3 className="brand-heading mb-2">Financial Services</h3>
                <p className="brand-text">Fintech solutions, payment processing systems, and digital banking platforms that enhance financial operations and customer experience.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-8">
              <div className="brandCard text-center h-full">
                <h3 className="brand-heading mb-2">Retail & E-commerce</h3>
                <p className="brand-text">Omnichannel retail solutions, inventory management systems, and customer engagement platforms that drive sales and loyalty.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-8">
              <div className="brandCard text-center h-full">
                <h3 className="brand-heading mb-2">Manufacturing</h3>
                <p className="brand-text">Industry 4.0 solutions, IoT integration, and smart manufacturing systems that optimize production and reduce costs.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-8">
              <div className="brandCard text-center h-full">
                <h3 className="brand-heading mb-2">Education</h3>
                <p className="brand-text">Edtech platforms, learning management systems, and digital education tools that enhance learning experiences and outcomes.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-8">
              <div className="brandCard text-center h-full">
                <h3 className="brand-heading mb-2">Logistics & Transportation</h3>
                <p className="brand-text">Supply chain optimization, fleet management systems, and logistics automation that streamline operations and improve efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "SAP Enterprise Integration",
  description: "SAP enterprise integration services by InboxTales. We help businesses integrate SAP systems with other enterprise applications for seamless data flow and improved efficiency.",
  keywords: ["SAP integration", "enterprise integration", "SAP consulting", "business process integration", "ERP integration", "SAP implementation"],
  openGraph: {
    title: "SAP Enterprise Integration | InboxTales",
    description: "SAP enterprise integration services by InboxTales. We help businesses integrate SAP systems with other enterprise applications for seamless data flow and improved efficiency.",
    images: ["/images/logos/logo.png"],
  },
}

export default function SAPEnterpriseIntegrationPage() {
  return (
    <main>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-5">SAP Enterprise Integration</h1>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <p className="lead text-center mb-5">
                  Seamless integration of SAP systems with your enterprise applications
                </p>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>SAP Implementation</h3>
                        <p>Complete SAP implementation services including system design, configuration, testing, and deployment. We ensure smooth transition and minimal disruption.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>System Integration</h3>
                        <p>Integrate SAP with your existing enterprise systems, third-party applications, and cloud services. We ensure data consistency and real-time synchronization.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Custom Development</h3>
                        <p>Custom SAP development services including ABAP programming, SAP Fiori applications, and custom workflows tailored to your business processes.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Support & Maintenance</h3>
                        <p>Ongoing SAP support and maintenance services including system monitoring, performance optimization, and regular updates to keep your system running smoothly.</p>
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
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Cybersecurity Audits",
  description: "Comprehensive cybersecurity audit services by InboxTales. We assess your security posture, identify vulnerabilities, and provide actionable recommendations to protect your business.",
  keywords: ["cybersecurity audits", "security assessment", "vulnerability assessment", "penetration testing", "security consulting", "IT security"],
  openGraph: {
    title: "Cybersecurity Audits | InboxTales",
    description: "Comprehensive cybersecurity audit services by InboxTales. We assess your security posture, identify vulnerabilities, and provide actionable recommendations to protect your business.",
    images: ["/images/logos/logo.png"],
  },
}

export default function CybersecurityAuditsPage() {
  return (
    <main>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-5">Cybersecurity Audits</h1>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <p className="lead text-center mb-5">
                  Comprehensive security assessments to protect your business from cyber threats
                </p>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Security Assessment</h3>
                        <p>Comprehensive evaluation of your IT infrastructure, applications, and security policies. We identify potential vulnerabilities and security gaps.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Penetration Testing</h3>
                        <p>Simulated cyber attacks to test your security defenses. We identify real-world vulnerabilities and provide detailed remediation plans.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Compliance Audits</h3>
                        <p>Ensure your organization meets industry standards and regulatory requirements including GDPR, HIPAA, SOX, and PCI DSS compliance.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Security Consulting</h3>
                        <p>Expert guidance on security strategy, risk management, and incident response planning. We help you build a robust security framework.</p>
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
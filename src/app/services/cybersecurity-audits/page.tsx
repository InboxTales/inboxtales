import type { Metadata } from 'next'
import styles from '../../industries/startups-smes/startups-smes.module.css';

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
    <div className={styles.startupsSmesPage}>
      {/* Hero Section with AI-style gradients */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb1}></div>
          <div className={styles.gradientOrb2}></div>
          <div className={styles.gradientOrb3}></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className={styles.heroBadge}>
                <span>🔍</span> Security Assessment
              </div>
              <h1 className={styles.heroTitle}>
                Cybersecurity <span className={styles.highlight}>Audits</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Comprehensive security assessments to protect your business from cyber threats and ensure compliance
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Thorough Assessment</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Monitoring</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>Compliant</div>
                  <div className={styles.statLabel}>Standards</div>
                </div>
              </div>
              <div className={styles.heroCTA}>
                <a href="/contact" className={styles.primaryButton}>
                  Get Security Audit
                  <span className={styles.buttonIcon}>→</span>
                </a>
                <a href="#services" className={styles.secondaryButton}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.solutionsSection} id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className={styles.sectionBadge}>Audit Services</div>
              <h2 className={styles.sectionTitle}>
                Comprehensive <span className={styles.highlight}>Security</span> Audits
              </h2>
              <p className={styles.sectionSubtitle}>
                We assess your security posture, identify vulnerabilities, and provide actionable recommendations
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-shield-check-line"></i>
                </div>
                <h3>Security Assessment</h3>
                <p>
                  Comprehensive evaluation of your current security infrastructure, policies, and procedures
                </p>
                <div className={styles.cardFeatures}>
                  <span>Infrastructure Review</span>
                  <span>Policy Analysis</span>
                  <span>Risk Assessment</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-bug-line"></i>
                </div>
                <h3>Vulnerability Assessment</h3>
                <p>
                  Systematic identification and analysis of security vulnerabilities in your systems
                </p>
                <div className={styles.cardFeatures}>
                  <span>System Scanning</span>
                  <span>Vulnerability Analysis</span>
                  <span>Risk Prioritization</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-lock-line"></i>
                </div>
                <h3>Penetration Testing</h3>
                <p>
                  Simulated cyber attacks to test your security defenses and identify potential weaknesses
                </p>
                <div className={styles.cardFeatures}>
                  <span>Simulated Attacks</span>
                  <span>Defense Testing</span>
                  <span>Weakness Detection</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-file-list-3-line"></i>
                </div>
                <h3>Compliance Audits</h3>
                <p>
                  Ensure compliance with industry regulations like GDPR, HIPAA, PCI DSS, and ISO standards
                </p>
                <div className={styles.cardFeatures}>
                  <span>GDPR Compliance</span>
                  <span>HIPAA Standards</span>
                  <span>ISO Certification</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-eye-line"></i>
                </div>
                <h3>Security Monitoring</h3>
                <p>
                  Continuous monitoring and analysis of your security systems for real-time threat detection
                </p>
                <div className={styles.cardFeatures}>
                  <span>Real-time Monitoring</span>
                  <span>Threat Detection</span>
                  <span>Alert Systems</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-report-line"></i>
                </div>
                <h3>Detailed Reporting</h3>
                <p>
                  Comprehensive reports with actionable recommendations and remediation strategies
                </p>
                <div className={styles.cardFeatures}>
                  <span>Detailed Reports</span>
                  <span>Actionable Insights</span>
                  <span>Remediation Plans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className={styles.sectionBadge}>Why Choose Us</div>
              <h2 className={styles.sectionTitle}>
                Benefits of <span className={styles.highlight}>Security Audits</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Protect your business with comprehensive security assessments
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-shield-star-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Expert Assessment</h4>
                  <p>Certified security professionals with deep expertise in identifying and mitigating threats</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Certified</span>
                    <span className={styles.metricLabel}>Professionals</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-time-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Quick Turnaround</h4>
                  <p>Rapid assessment and reporting to address security concerns before they become threats</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Fast</span>
                    <span className={styles.metricLabel}>Assessment</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-tools-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Advanced Tools</h4>
                  <p>State-of-the-art security tools and technologies for comprehensive vulnerability detection</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Advanced</span>
                    <span className={styles.metricLabel}>Technology</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-customer-service-2-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Ongoing Support</h4>
                  <p>Continuous support and guidance to implement security improvements and maintain compliance</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Continuous</span>
                    <span className={styles.metricLabel}>Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground}>
          <div className={styles.ctaGradient}></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className={styles.ctaTitle}>
                Secure Your <span className={styles.highlight}>Digital Assets</span>
              </h2>
              <p className={styles.ctaSubtitle}>
                Don't wait for a security breach. Get a comprehensive cybersecurity audit today.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaPrimaryButton}>
                  Get Security Audit
                  <span className={styles.buttonIcon}>→</span>
                </a>
                <a href="/contact" className={styles.ctaSecondaryButton}>
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
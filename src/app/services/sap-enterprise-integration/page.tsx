import type { Metadata } from 'next'
import styles from '../../industries/startups-smes/startups-smes.module.css';

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
                <span>🔗</span> Enterprise Integration
              </div>
              <h1 className={styles.heroTitle}>
                SAP <span className={styles.highlight}>Enterprise</span> Integration
              </h1>
              <p className={styles.heroSubtitle}>
                Seamless integration of SAP systems with your enterprise applications for unified workflows and improved efficiency
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>50+</div>
                  <div className={styles.statLabel}>SAP Integrations</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>99.9%</div>
                  <div className={styles.statLabel}>Data Accuracy</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Support</div>
                </div>
              </div>
              <div className={styles.heroCTA}>
                <a href="/contact" className={styles.primaryButton}>
                  Start Integration
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
              <div className={styles.sectionBadge}>Integration Services</div>
              <h2 className={styles.sectionTitle}>
                Comprehensive <span className={styles.highlight}>SAP</span> Integration
              </h2>
              <p className={styles.sectionSubtitle}>
                Connect your SAP systems with other enterprise applications for seamless data flow
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-link"></i>
                </div>
                <h3>SAP to Non-SAP Integration</h3>
                <p>
                  Connect SAP with CRM, ERP, HR, and other business systems for unified workflows
                </p>
                <div className={styles.cardFeatures}>
                  <span>CRM Integration</span>
                  <span>ERP Systems</span>
                  <span>HR Platforms</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-exchange-line"></i>
                </div>
                <h3>Data Migration & Sync</h3>
                <p>
                  Seamless migration and real-time data synchronization between SAP and external platforms
                </p>
                <div className={styles.cardFeatures}>
                  <span>Data Migration</span>
                  <span>Real-time Sync</span>
                  <span>Data Validation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-settings-3-line"></i>
                </div>
                <h3>Custom API Development</h3>
                <p>
                  Build and manage APIs for secure, scalable SAP integrations with external systems
                </p>
                <div className={styles.cardFeatures}>
                  <span>Custom APIs</span>
                  <span>Secure Integration</span>
                  <span>Scalable Solutions</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-shuffle-line"></i>
                </div>
                <h3>Process Automation</h3>
                <p>
                  Automate business processes across SAP and third-party applications for efficiency
                </p>
                <div className={styles.cardFeatures}>
                  <span>Workflow Automation</span>
                  <span>Process Optimization</span>
                  <span>Efficiency Gains</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-bar-chart-grouped-line"></i>
                </div>
                <h3>Analytics & Reporting</h3>
                <p>
                  Integrate SAP data with BI tools for actionable insights and comprehensive reporting
                </p>
                <div className={styles.cardFeatures}>
                  <span>BI Integration</span>
                  <span>Data Analytics</span>
                  <span>Insight Generation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-customer-service-2-line"></i>
                </div>
                <h3>Ongoing Support</h3>
                <p>
                  Continuous monitoring, support, and optimization for your SAP integrations
                </p>
                <div className={styles.cardFeatures}>
                  <span>24/7 Monitoring</span>
                  <span>Technical Support</span>
                  <span>Performance Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className={styles.sectionBadge}>Our Process</div>
              <h2 className={styles.sectionTitle}>
                SAP Integration <span className={styles.highlight}>Methodology</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                A proven approach for seamless SAP integration and implementation
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-search-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Assessment & Planning</h4>
                  <p>Analyze your current systems and define integration requirements and architecture</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>01</span>
                    <span className={styles.metricLabel}>Planning Phase</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-tools-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Design & Development</h4>
                  <p>Architect and build integration solutions tailored to your business needs</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>02</span>
                    <span className={styles.metricLabel}>Development</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-check-double-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Testing & Validation</h4>
                  <p>Thorough testing to ensure data accuracy, security, and optimal performance</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>03</span>
                    <span className={styles.metricLabel}>Quality Assurance</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-rocket-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Deployment & Support</h4>
                  <p>Go live with ongoing monitoring, support, and continuous optimization</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>04</span>
                    <span className={styles.metricLabel}>Launch & Support</span>
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
                Ready to <span className={styles.highlight}>Integrate SAP</span> Seamlessly?
              </h2>
              <p className={styles.ctaSubtitle}>
                Let us help you unlock the full potential of your SAP systems with seamless enterprise integration.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaPrimaryButton}>
                  Start SAP Integration
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
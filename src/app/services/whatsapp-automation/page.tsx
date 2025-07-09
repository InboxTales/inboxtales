import type { Metadata } from 'next'
import styles from '../../industries/startups-smes/startups-smes.module.css';

export const metadata: Metadata = {
  title: "WhatsApp Automation",
  description: "Transform your business communication with InboxTales' WhatsApp automation solutions. Streamline customer engagement and boost productivity with intelligent automation.",
  keywords: ["WhatsApp automation", "business communication", "customer engagement", "chat automation", "messaging solutions", "business automation"],
  openGraph: {
    title: "WhatsApp Automation | InboxTales",
    description: "Transform your business communication with InboxTales' WhatsApp automation solutions. Streamline customer engagement and boost productivity with intelligent automation.",
    images: ["/images/logos/logo.png"],
  },
}

export default function WhatsAppAutomationPage() {
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
                <span>💬</span> Messaging Automation
              </div>
              <h1 className={styles.heroTitle}>
                WhatsApp <span className={styles.highlight}>Automation</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Transform your business communication with intelligent WhatsApp automation and streamline customer engagement
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>10K+</div>
                  <div className={styles.statLabel}>Automated Conversations</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>99.5%</div>
                  <div className={styles.statLabel}>Delivery Rate</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Automated Support</div>
                </div>
              </div>
              <div className={styles.heroCTA}>
                <a href="/contact" className={styles.primaryButton}>
                  Start Automation
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
              <div className={styles.sectionBadge}>Automation Services</div>
              <h2 className={styles.sectionTitle}>
                Intelligent <span className={styles.highlight}>WhatsApp</span> Solutions
              </h2>
              <p className={styles.sectionSubtitle}>
                Comprehensive automation solutions for business messaging and customer engagement
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-robot-2-line"></i>
                </div>
                <h3>Chatbot Development</h3>
                <p>
                  Intelligent chatbots for instant customer support and lead generation
                </p>
                <div className={styles.cardFeatures}>
                  <span>AI-Powered Bots</span>
                  <span>Instant Support</span>
                  <span>Lead Generation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-flow-chart"></i>
                </div>
                <h3>Workflow Automation</h3>
                <p>
                  Automate repetitive tasks and business processes for maximum efficiency
                </p>
                <div className={styles.cardFeatures}>
                  <span>Process Automation</span>
                  <span>Task Optimization</span>
                  <span>Efficiency Gains</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-database-2-line"></i>
                </div>
                <h3>CRM Integration</h3>
                <p>
                  Integrate WhatsApp with your CRM for seamless data flow and customer management
                </p>
                <div className={styles.cardFeatures}>
                  <span>CRM Sync</span>
                  <span>Data Flow</span>
                  <span>Customer Management</span>
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
                  Track engagement, performance, and ROI with detailed analytics and insights
                </p>
                <div className={styles.cardFeatures}>
                  <span>Performance Tracking</span>
                  <span>Engagement Analytics</span>
                  <span>ROI Measurement</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-settings-3-line"></i>
                </div>
                <h3>Custom Integrations</h3>
                <p>
                  Build custom integrations with third-party tools and platforms
                </p>
                <div className={styles.cardFeatures}>
                  <span>Third-party Tools</span>
                  <span>Custom APIs</span>
                  <span>Platform Integration</span>
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
                  Continuous monitoring, support, and optimization for your automation workflows
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
                WhatsApp Automation <span className={styles.highlight}>Methodology</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                A proven approach for successful WhatsApp automation implementation
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
                  <h4>Discovery & Planning</h4>
                  <p>Understand your business needs and define automation goals and requirements</p>
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
                  <p>Build and test automation workflows and intelligent chatbots</p>
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
                  <h4>Integration & Testing</h4>
                  <p>Integrate with your systems and ensure flawless performance and reliability</p>
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
                Ready to <span className={styles.highlight}>Automate</span> Your WhatsApp?
              </h2>
              <p className={styles.ctaSubtitle}>
                Let us help you transform your business communication with intelligent WhatsApp automation.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaPrimaryButton}>
                  Start WhatsApp Automation
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
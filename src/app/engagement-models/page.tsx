import type { Metadata } from 'next'
import styles from '../industries/startups-smes/startups-smes.module.css'

export const metadata: Metadata = {
  title: "Engagement Models",
  description: "Choose from InboxTales' flexible engagement models - project-based, dedicated teams, or ongoing support. Find the perfect collaboration model for your business needs.",
  keywords: ["engagement models", "project-based development", "dedicated teams", "ongoing support", "collaboration models", "development services"],
  openGraph: {
    title: "Engagement Models | InboxTales",
    description: "Choose from InboxTales' flexible engagement models - project-based, dedicated teams, or ongoing support. Find the perfect collaboration model for your business needs.",
    images: ["/images/logos/logo.png"],
  },
}

export default function EngagementModelsPage() {
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
                <span>🤝</span> Flexible Collaboration
              </div>
              <h1 className={styles.heroTitle}>
                Engagement <span className={styles.highlight}>Models</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Choose the perfect collaboration model that fits your project requirements and business goals
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>4</div>
                  <div className={styles.statLabel}>Models Available</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Flexible</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Support</div>
                </div>
              </div>
              <div className={styles.heroCTA}>
                <a href="/contact" className={styles.primaryButton}>
                  Get Started
                  <span className={styles.buttonIcon}>→</span>
                </a>
                <a href="#models" className={styles.secondaryButton}>
                  Explore Models
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className={styles.solutionsSection} id="models">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className={styles.sectionBadge}>Collaboration Models</div>
              <h2 className={styles.sectionTitle}>
                Choose Your <span className={styles.highlight}>Engagement Style</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                From fixed-scope projects to ongoing partnerships, we have the right model for you
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-6 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-file-list-3-line"></i>
                </div>
                <h3>Fixed Scope Projects</h3>
                <p>
                  Clear deliverables, transparent pricing, and guaranteed results with defined timelines
                </p>
                <div className={styles.cardFeatures}>
                  <span>Fixed Pricing</span>
                  <span>Clear Milestones</span>
                  <span>Guaranteed Delivery</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-team-line"></i>
                </div>
                <h3>Staff Augmentation</h3>
                <p>
                  Scale your development team quickly with skilled professionals on demand
                </p>
                <div className={styles.cardFeatures}>
                  <span>Flexible Scaling</span>
                  <span>Skilled Professionals</span>
                  <span>Quick Onboarding</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-user-star-line"></i>
                </div>
                <h3>CTO-as-a-Service</h3>
                <p>
                  Executive technology leadership without the full-time commitment and overhead
                </p>
                <div className={styles.cardFeatures}>
                  <span>Strategic Guidance</span>
                  <span>Cost Effective</span>
                  <span>Expert Leadership</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-refresh-line"></i>
                </div>
                <h3>Monthly Retainers</h3>
                <p>
                  Ongoing digital support and development with flexible hours and predictable costs
                </p>
                <div className={styles.cardFeatures}>
                  <span>Predictable Costs</span>
                  <span>Ongoing Support</span>
                  <span>Flexible Hours</span>
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
                The <span className={styles.highlight}>InboxTales</span> Advantage
              </h2>
              <p className={styles.sectionSubtitle}>
                We adapt to your needs, not the other way around
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-shield-check-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Proven Track Record</h4>
                  <p>Successfully delivered hundreds of projects across all engagement models</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>500+</span>
                    <span className={styles.metricLabel}>Projects Delivered</span>
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
                  <h4>Flexible & Scalable</h4>
                  <p>Scale up or down based on your project requirements and business growth</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>100%</span>
                    <span className={styles.metricLabel}>Flexible Scaling</span>
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
                  <h4>Dedicated Support</h4>
                  <p>Direct communication with your team and priority support for all your needs</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>24/7</span>
                    <span className={styles.metricLabel}>Support Available</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-money-dollar-circle-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Cost-Effective</h4>
                  <p>Optimize your budget with transparent pricing and no hidden costs</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>0</span>
                    <span className={styles.metricLabel}>Hidden Costs</span>
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
                Ready to <span className={styles.highlight}>Collaborate</span>?
              </h2>
              <p className={styles.ctaSubtitle}>
                Let's discuss your project requirements and find the perfect engagement model for your business
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaPrimaryButton}>
                  Start Your Project
                  <span className={styles.buttonIcon}>→</span>
                </a>
                <a href="/contact" className={styles.ctaSecondaryButton}>
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
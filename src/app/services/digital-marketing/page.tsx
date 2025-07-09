import type { Metadata } from 'next'
import styles from '../../industries/startups-smes/startups-smes.module.css';

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
                <span>📢</span> Digital Marketing
              </div>
              <h1 className={styles.heroTitle}>
                Digital <span className={styles.highlight}>Marketing</span> Solutions
              </h1>
              <p className={styles.heroSubtitle}>
                Comprehensive digital marketing services to grow your online presence and drive business growth
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>500%</div>
                  <div className={styles.statLabel}>Traffic Growth</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>200%</div>
                  <div className={styles.statLabel}>Lead Generation</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Campaign Monitoring</div>
                </div>
              </div>
              <div className={styles.heroCTA}>
                <a href="/contact" className={styles.primaryButton}>
                  Start Marketing
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
              <div className={styles.sectionBadge}>Marketing Services</div>
              <h2 className={styles.sectionTitle}>
                Comprehensive <span className={styles.highlight}>Digital</span> Marketing
              </h2>
              <p className={styles.sectionSubtitle}>
                From SEO and PPC to social media marketing and content strategy
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-search-line"></i>
                </div>
                <h3>Search Engine Optimization</h3>
                <p>
                  Improve your website's visibility in search engines and drive organic traffic
                </p>
                <div className={styles.cardFeatures}>
                  <span>Keyword Research</span>
                  <span>On-Page SEO</span>
                  <span>Technical SEO</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-advertisement-line"></i>
                </div>
                <h3>Pay-Per-Click Advertising</h3>
                <p>
                  Targeted PPC campaigns to drive immediate traffic and conversions
                </p>
                <div className={styles.cardFeatures}>
                  <span>Google Ads</span>
                  <span>Facebook Ads</span>
                  <span>Retargeting</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-share-line"></i>
                </div>
                <h3>Social Media Marketing</h3>
                <p>
                  Build brand awareness and engage with your audience across social platforms
                </p>
                <div className={styles.cardFeatures}>
                  <span>Content Strategy</span>
                  <span>Community Management</span>
                  <span>Paid Social</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-article-line"></i>
                </div>
                <h3>Content Marketing</h3>
                <p>
                  Create valuable, engaging content that attracts and converts your audience
                </p>
                <div className={styles.cardFeatures}>
                  <span>Blog Writing</span>
                  <span>Video Content</span>
                  <span>Infographics</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-mail-line"></i>
                </div>
                <h3>Email Marketing</h3>
                <p>
                  Nurture leads and drive sales with targeted email campaigns
                </p>
                <div className={styles.cardFeatures}>
                  <span>Automation</span>
                  <span>Segmentation</span>
                  <span>A/B Testing</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-bar-chart-line"></i>
                </div>
                <h3>Analytics & Reporting</h3>
                <p>
                  Track performance and optimize campaigns with detailed analytics
                </p>
                <div className={styles.cardFeatures}>
                  <span>Performance Tracking</span>
                  <span>ROI Analysis</span>
                  <span>Optimization</span>
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
                Benefits of <span className={styles.highlight}>Digital Marketing</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Drive growth and achieve your business goals with data-driven marketing
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-target-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Targeted Reach</h4>
                  <p>Reach your ideal customers with precision targeting and personalized campaigns</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Precise</span>
                    <span className={styles.metricLabel}>Targeting</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-line-chart-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Measurable Results</h4>
                  <p>Track every campaign with detailed analytics and measure ROI accurately</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Data</span>
                    <span className={styles.metricLabel}>Driven</span>
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
                  <h4>Quick Results</h4>
                  <p>See immediate results with PPC campaigns and rapid optimization strategies</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Fast</span>
                    <span className={styles.metricLabel}>Results</span>
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
                  <h4>Expert Team</h4>
                  <p>Work with certified marketing professionals with proven track records</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Expert</span>
                    <span className={styles.metricLabel}>Team</span>
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
                Ready to <span className={styles.highlight}>Grow</span> Your Business?
              </h2>
              <p className={styles.ctaSubtitle}>
                Let us help you achieve your marketing goals with comprehensive digital marketing solutions.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaPrimaryButton}>
                  Start Digital Marketing
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
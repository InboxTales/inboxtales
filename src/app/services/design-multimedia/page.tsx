import type { Metadata } from 'next'
import styles from '../../industries/startups-smes/startups-smes.module.css';

export const metadata: Metadata = {
  title: "Design & Multimedia",
  description: "Creative design and multimedia services by InboxTales. From graphic design and branding to video production and 3D animation, we bring your vision to life.",
  keywords: ["graphic design", "multimedia design", "branding", "video production", "3D animation", "creative design services"],
  openGraph: {
    title: "Design & Multimedia | InboxTales",
    description: "Creative design and multimedia services by InboxTales. From graphic design and branding to video production and 3D animation, we bring your vision to life.",
    images: ["/images/logos/logo.png"],
  },
}

export default function DesignMultimediaPage() {
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
                <span>🎨</span> Creative Design
              </div>
              <h1 className={styles.heroTitle}>
                Design & <span className={styles.highlight}>Multimedia</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Creative design solutions that bring your brand to life with stunning visuals and engaging multimedia content
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>500+</div>
                  <div className={styles.statLabel}>Designs Created</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Client Satisfaction</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>Fast</div>
                  <div className={styles.statLabel}>Turnaround</div>
                </div>
              </div>
              <div className={styles.heroCTA}>
                <a href="/contact" className={styles.primaryButton}>
                  Start Design Project
                  <span className={styles.buttonIcon}>→</span>
                </a>
                <a href="#services" className={styles.secondaryButton}>
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={styles.solutionsSection} id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className={styles.sectionBadge}>Creative Solutions</div>
              <h2 className={styles.sectionTitle}>
                Creative Design & <span className={styles.highlight}>Multimedia</span> Solutions
              </h2>
              <p className={styles.sectionSubtitle}>
                We transform your ideas into visually stunning designs and engaging multimedia content
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-palette-line"></i>
                </div>
                <h3>Graphic Design</h3>
                <p>
                  Professional graphic design services including logos, brochures, business cards, 
                  and marketing materials that reflect your brand identity.
                </p>
                <div className={styles.cardFeatures}>
                  <span>Logos & Branding</span>
                  <span>Marketing Materials</span>
                  <span>Print Design</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-brand-line"></i>
                </div>
                <h3>Brand Identity</h3>
                <p>
                  Complete brand identity design including logos, color schemes, typography, 
                  and brand guidelines for consistent visual communication.
                </p>
                <div className={styles.cardFeatures}>
                  <span>Color Schemes</span>
                  <span>Typography</span>
                  <span>Brand Guidelines</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-video-line"></i>
                </div>
                <h3>Video Production</h3>
                <p>
                  Professional video production services including corporate videos, 
                  promotional content, and social media videos that engage your audience.
                </p>
                <div className={styles.cardFeatures}>
                  <span>Corporate Videos</span>
                  <span>Promotional Content</span>
                  <span>Social Media</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-cube-line"></i>
                </div>
                <h3>3D Animation</h3>
                <p>
                  High-quality 3D animation and modeling services for product visualization, 
                  architectural walkthroughs, and creative storytelling.
                </p>
                <div className={styles.cardFeatures}>
                  <span>Product Visualization</span>
                  <span>Architectural</span>
                  <span>Creative Storytelling</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-layout-line"></i>
                </div>
                <h3>UI/UX Design</h3>
                <p>
                  User interface and user experience design for websites and applications 
                  that are both beautiful and functional.
                </p>
                <div className={styles.cardFeatures}>
                  <span>User Interface</span>
                  <span>User Experience</span>
                  <span>Web & Mobile</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-image-line"></i>
                </div>
                <h3>Digital Art</h3>
                <p>
                  Custom digital artwork and illustrations for websites, 
                  marketing materials, and creative projects.
                </p>
                <div className={styles.cardFeatures}>
                  <span>Custom Artwork</span>
                  <span>Illustrations</span>
                  <span>Creative Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Features */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className={styles.sectionBadge}>Why Choose Us</div>
              <h2 className={styles.sectionTitle}>
                Why Choose Our <span className={styles.highlight}>Design</span> Services?
              </h2>
              <p className={styles.sectionSubtitle}>
                We combine creativity with strategy to deliver designs that not only look great but also drive results
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-artboard-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Creative Excellence</h4>
                  <p>Talented designers with years of experience creating stunning visuals that capture attention</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Talented</span>
                    <span className={styles.metricLabel}>Designers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-customer-service-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Collaborative Process</h4>
                  <p>We work closely with you throughout the design process to ensure your vision is perfectly realized</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Collaborative</span>
                    <span className={styles.metricLabel}>Process</span>
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
                  <h4>Fast Turnaround</h4>
                  <p>Quick delivery without compromising quality, meeting your deadlines and project requirements</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Fast</span>
                    <span className={styles.metricLabel}>Delivery</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-file-copy-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Multiple Formats</h4>
                  <p>Deliver designs in all necessary formats for print, web, and multimedia applications</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Multiple</span>
                    <span className={styles.metricLabel}>Formats</span>
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
                Bring Your <span className={styles.highlight}>Vision to Life</span>
              </h2>
              <p className={styles.ctaSubtitle}>
                Ready to transform your ideas into stunning visual content? Let's create something amazing together.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaPrimaryButton}>
                  Start Your Design Project
                  <span className={styles.buttonIcon}>→</span>
                </a>
                <a href="/contact" className={styles.ctaSecondaryButton}>
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
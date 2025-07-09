import React from 'react';
import { Metadata } from 'next';
import styles from './startups-smes.module.css';

export const metadata: Metadata = {
  title: 'Startups & SMEs | InboxTales - Digital Agency',
  description: 'We help startups and small to medium enterprises scale their digital presence and achieve sustainable growth through innovative solutions.',
  keywords: 'startups, SMEs, small business, digital transformation, business growth',
};

export default function StartupsSmesPage() {
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
                <span>🚀</span> Empowering Growth
              </div>
              <h1 className={styles.heroTitle}>
                Startups & <span className={styles.highlight}>SMEs</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Transform your business with AI-powered digital solutions that scale with your growth
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>500+</div>
                  <div className={styles.statLabel}>Startups Supported</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>85%</div>
                  <div className={styles.statLabel}>Growth Rate</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Support</div>
                </div>
              </div>
              <div className={styles.heroCTA}>
                <a href="/contact" className={styles.primaryButton}>
                  Start Your Journey
                  <span className={styles.buttonIcon}>→</span>
                </a>
                <a href="#services" className={styles.secondaryButton}>
                  Explore Solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Solutions Section */}
      <section className={styles.solutionsSection} id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className={styles.sectionBadge}>AI-Powered Solutions</div>
              <h2 className={styles.sectionTitle}>
                Solutions Tailored for <span className={styles.highlight}>Growing Businesses</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Leverage cutting-edge technology to accelerate your business growth
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-rocket-line"></i>
                </div>
                <h3>MVP Development</h3>
                <p>
                  Rapid development of minimum viable products to test your ideas and get to market quickly
                </p>
                <div className={styles.cardFeatures}>
                  <span>Fast Prototyping</span>
                  <span>Market Validation</span>
                  <span>Cost Effective</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-global-line"></i>
                </div>
                <h3>Website Development</h3>
                <p>
                  Professional, responsive websites that establish credibility and drive conversions
                </p>
                <div className={styles.cardFeatures}>
                  <span>Responsive Design</span>
                  <span>SEO Optimized</span>
                  <span>High Performance</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-megaphone-line"></i>
                </div>
                <h3>Digital Marketing</h3>
                <p>
                  Cost-effective marketing strategies to build brand awareness and generate leads
                </p>
                <div className={styles.cardFeatures}>
                  <span>Data Driven</span>
                  <span>ROI Focused</span>
                  <span>Scalable</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-settings-3-line"></i>
                </div>
                <h3>Process Automation</h3>
                <p>
                  Streamline operations and reduce costs with intelligent automation solutions
                </p>
                <div className={styles.cardFeatures}>
                  <span>AI Powered</span>
                  <span>Time Saving</span>
                  <span>Error Free</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-bar-chart-line"></i>
                </div>
                <h3>Analytics & Insights</h3>
                <p>
                  Data-driven insights to make informed decisions and optimize performance
                </p>
                <div className={styles.cardFeatures}>
                  <span>Real Time Data</span>
                  <span>Predictive Analytics</span>
                  <span>Actionable Insights</span>
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
                  Continuous support and maintenance to ensure your digital assets perform optimally
                </p>
                <div className={styles.cardFeatures}>
                  <span>24/7 Support</span>
                  <span>Proactive Monitoring</span>
                  <span>Regular Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Interactive Cards */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className={styles.sectionBadge}>Why Choose Us</div>
              <h2 className={styles.sectionTitle}>
                The <span className={styles.highlight}>InboxTales</span> Advantage
              </h2>
              <p className={styles.sectionSubtitle}>
                We're committed to helping small businesses succeed in the digital age
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-money-dollar-circle-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Cost-Effective Solutions</h4>
                  <p>Flexible pricing models and scalable solutions that fit your budget and growth plans</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>40%</span>
                    <span className={styles.metricLabel}>Cost Reduction</span>
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
                  <p>Quick delivery times to help you launch faster and stay ahead of the competition</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>50%</span>
                    <span className={styles.metricLabel}>Faster Delivery</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-team-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Dedicated Team</h4>
                  <p>Personal attention from experienced professionals who understand your business needs</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>100%</span>
                    <span className={styles.metricLabel}>Dedicated Support</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-shield-check-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Future-Proof Technology</h4>
                  <p>Modern, scalable solutions that grow with your business and adapt to changing needs</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>99.9%</span>
                    <span className={styles.metricLabel}>Uptime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient Background */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground}>
          <div className={styles.ctaGradient}></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className={styles.ctaTitle}>Ready to Scale Your Business?</h2>
              <p className={styles.ctaSubtitle}>
                Let's discuss how we can help your startup or SME achieve digital success. 
                Get in touch for a free consultation.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaPrimaryButton}>
                  Start Your Growth Journey
                  <span className={styles.buttonIcon}>🚀</span>
                </a>
                <a href="/case-studies" className={styles.ctaSecondaryButton}>
                  View Success Stories
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
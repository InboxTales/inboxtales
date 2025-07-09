import React from 'react';
import { Metadata } from 'next';
import styles from '../startups-smes/startups-smes.module.css';

export const metadata: Metadata = {
  title: 'Fintech & E-commerce | InboxTales - Digital Agency',
  description: 'We help fintech companies and e-commerce businesses build secure, scalable digital platforms that drive growth and customer satisfaction.',
  keywords: 'fintech, e-commerce, digital payments, online retail, financial technology, ecommerce solutions',
};

export default function FintechEcommercePage() {
  return (
    <div className={styles.startupsSmesPage}>
      {/* Hero Section */}
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
                <span>💳</span> Empowering Commerce
              </div>
              <h1 className={styles.heroTitle}>
                Fintech & <span className={styles.highlight}>E-commerce</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Building secure, scalable digital platforms for the future of commerce and finance
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100+</div>
                  <div className={styles.statLabel}>Fintech Clients</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>500+</div>
                  <div className={styles.statLabel}>E-commerce Stores</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>99.9%</div>
                  <div className={styles.statLabel}>Uptime Guarantee</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Security Monitoring</div>
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

      {/* Solutions Section */}
      <section className={styles.solutionsSection} id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className={styles.sectionBadge}>Digital Solutions</div>
              <h2 className={styles.sectionTitle}>
                Solutions for <span className={styles.highlight}>Modern Commerce</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                End-to-end solutions for fintech and e-commerce businesses
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-bank-card-line"></i>
                </div>
                <h3>Payment Systems</h3>
                <p>
                  Secure payment gateways and processing systems with multi-currency support
                </p>
                <div className={styles.cardFeatures}>
                  <span>Multi-Currency</span>
                  <span>PCI DSS</span>
                  <span>Fraud Detection</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-shopping-cart-line"></i>
                </div>
                <h3>E-commerce Platforms</h3>
                <p>
                  Custom e-commerce solutions with advanced features and seamless user experience
                </p>
                <div className={styles.cardFeatures}>
                  <span>Custom Features</span>
                  <span>Seamless UX</span>
                  <span>Scalable</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-shield-check-line"></i>
                </div>
                <h3>Security Solutions</h3>
                <p>
                  Advanced security measures including encryption, fraud detection, and compliance
                </p>
                <div className={styles.cardFeatures}>
                  <span>Encryption</span>
                  <span>Compliance</span>
                  <span>Real-Time Alerts</span>
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
                  Comprehensive analytics to track transactions, user behavior, and business performance
                </p>
                <div className={styles.cardFeatures}>
                  <span>Transaction Data</span>
                  <span>User Insights</span>
                  <span>Performance</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-customer-service-2-line"></i>
                </div>
                <h3>Customer Support</h3>
                <p>
                  Integrated customer support systems with chatbots and help desk solutions
                </p>
                <div className={styles.cardFeatures}>
                  <span>Chatbots</span>
                  <span>Help Desk</span>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-mobile-line"></i>
                </div>
                <h3>Mobile Applications</h3>
                <p>
                  Native mobile apps for iOS and Android with seamless payment integration
                </p>
                <div className={styles.cardFeatures}>
                  <span>iOS & Android</span>
                  <span>Payment Integration</span>
                  <span>Push Notifications</span>
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
                We understand the critical requirements of financial and commercial platforms
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
                  <h4>Bank-Grade Security</h4>
                  <p>Enterprise-level security measures that meet industry standards and regulations</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>99.9%</span>
                    <span className={styles.metricLabel}>Uptime</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-settings-3-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Scalable Architecture</h4>
                  <p>Platforms designed to handle high transaction volumes and rapid growth</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>100%</span>
                    <span className={styles.metricLabel}>Scalability</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-file-list-3-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Compliance Ready</h4>
                  <p>Built-in compliance features for PCI DSS, GDPR, and other regulatory requirements</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>100%</span>
                    <span className={styles.metricLabel}>Compliance</span>
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
                  <h4>24/7 Support</h4>
                  <p>Always-on support for your business and customers to ensure smooth operations</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>24/7</span>
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
              <h2 className={styles.ctaTitle}>Ready to Scale Your Business?</h2>
              <p className={styles.ctaSubtitle}>
                Let's discuss how we can help your fintech or e-commerce business achieve digital success. 
                Get in touch for a free consultation.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaPrimaryButton}>
                  Start Your Digital Journey
                  <span className={styles.buttonIcon}>💳</span>
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
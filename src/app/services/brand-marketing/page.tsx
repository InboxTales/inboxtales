import React from 'react';
import { Metadata } from 'next';
import styles from '../../industries/startups-smes/startups-smes.module.css';

export const metadata: Metadata = {
  title: 'Brand Marketing Services | InboxTales - Digital Agency',
  description: 'Transform your brand with our comprehensive brand marketing services. From strategy to execution, we help businesses build strong, memorable brands.',
  keywords: 'brand marketing, brand strategy, digital branding, brand identity, marketing services',
};

export default function BrandMarketingPage() {
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
                <span>🎨</span> Brand Transformation
              </div>
              <h1 className={styles.heroTitle}>
                Brand <span className={styles.highlight}>Marketing</span> Services
              </h1>
              <p className={styles.heroSubtitle}>
                Build a powerful, memorable brand that resonates with your audience and drives business growth
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>150+</div>
                  <div className={styles.statLabel}>Brands Elevated</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>98%</div>
                  <div className={styles.statLabel}>Client Retention</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>10+</div>
                  <div className={styles.statLabel}>Industries Served</div>
                </div>
              </div>
              <div className={styles.heroCTA}>
                <a href="/contact" className={styles.primaryButton}>
                  Transform Your Brand
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

      {/* Services Section */}
      <section className={styles.solutionsSection} id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className={styles.sectionBadge}>Brand Services</div>
              <h2 className={styles.sectionTitle}>
                Our <span className={styles.highlight}>Brand Marketing</span> Services
              </h2>
              <p className={styles.sectionSubtitle}>
                Everything you need to build, launch, and grow your brand
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-palette-line"></i>
                </div>
                <h3>Brand Strategy</h3>
                <p>Comprehensive brand strategy to define your value proposition, audience, and positioning</p>
                <div className={styles.cardFeatures}>
                  <span>Value Proposition</span>
                  <span>Audience Definition</span>
                  <span>Market Positioning</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-eye-line"></i>
                </div>
                <h3>Visual Identity</h3>
                <p>Logos, color palettes, typography, and brand guidelines that reflect your values</p>
                <div className={styles.cardFeatures}>
                  <span>Logo Design</span>
                  <span>Color Palette</span>
                  <span>Typography</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-message-3-line"></i>
                </div>
                <h3>Brand Messaging</h3>
                <p>Taglines, messaging, and content that communicate your brand story across all channels</p>
                <div className={styles.cardFeatures}>
                  <span>Taglines</span>
                  <span>Brand Story</span>
                  <span>Content Strategy</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-global-line"></i>
                </div>
                <h3>Digital Presence</h3>
                <p>Website design, social media branding, and online marketing campaigns</p>
                <div className={styles.cardFeatures}>
                  <span>Website Design</span>
                  <span>Social Media</span>
                  <span>Online Campaigns</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-bar-chart-line"></i>
                </div>
                <h3>Brand Analytics</h3>
                <p>Analytics and reporting to track and optimize your brand performance</p>
                <div className={styles.cardFeatures}>
                  <span>Performance Tracking</span>
                  <span>Analytics Reports</span>
                  <span>Optimization</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-customer-service-2-line"></i>
                </div>
                <h3>Brand Management</h3>
                <p>Ongoing management to maintain consistency and evolve your brand as you grow</p>
                <div className={styles.cardFeatures}>
                  <span>Consistency</span>
                  <span>Brand Evolution</span>
                  <span>Ongoing Support</span>
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
                Our Brand Marketing <span className={styles.highlight}>Process</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                A proven methodology to create powerful brands that drive results
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <span className="text-2xl font-bold">01</span>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Discovery</h4>
                  <p>Research your market, competitors, and audience to understand your unique position</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Research</span>
                    <span className={styles.metricLabel}>Phase</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <span className="text-2xl font-bold">02</span>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Strategy</h4>
                  <p>Develop a comprehensive brand strategy that defines your identity and messaging</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Strategy</span>
                    <span className={styles.metricLabel}>Development</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <span className="text-2xl font-bold">03</span>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Design</h4>
                  <p>Create visual elements and brand assets that bring your strategy to life</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Visual</span>
                    <span className={styles.metricLabel}>Creation</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <span className="text-2xl font-bold">04</span>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Launch</h4>
                  <p>Execute your brand across all channels and provide ongoing management support</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Launch</span>
                    <span className={styles.metricLabel}>Execution</span>
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
                Ready to <span className={styles.highlight}>Transform Your Brand</span>?
              </h2>
              <p className={styles.ctaSubtitle}>
                Let's work together to create a powerful brand that drives your business forward
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaPrimaryButton}>
                  Start Your Brand Journey
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
  );
}
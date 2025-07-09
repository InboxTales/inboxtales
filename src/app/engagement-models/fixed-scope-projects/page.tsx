import React from 'react';
import { Metadata } from 'next';
import styles from '../../industries/startups-smes/startups-smes.module.css';

export const metadata: Metadata = {
  title: 'Fixed Scope Projects | InboxTales - Digital Agency',
  description: 'Get your project delivered on time and within budget with our fixed scope project model. Clear deliverables, transparent pricing, and guaranteed results.',
  keywords: 'fixed scope projects, project management, fixed price, guaranteed delivery, transparent pricing',
};

export default function FixedScopeProjectsPage() {
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
                <span>📦</span> Project Delivery
              </div>
              <h1 className={styles.heroTitle}>
                Fixed Scope <span className={styles.highlight}>Projects</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Clear deliverables, transparent pricing, and guaranteed results with defined timelines
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>On-Time Delivery</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>95%</div>
                  <div className={styles.statLabel}>Client Satisfaction</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>0</div>
                  <div className={styles.statLabel}>Hidden Costs</div>
                </div>
              </div>
              <div className={styles.heroCTA}>
                <a href="/contact" className={styles.primaryButton}>
                  Start Project
                  <span className={styles.buttonIcon}>→</span>
                </a>
                <a href="#process" className={styles.secondaryButton}>
                  Learn Process
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.solutionsSection} id="process">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className={styles.sectionBadge}>Our Process</div>
              <h2 className={styles.sectionTitle}>
                Our Fixed Scope <span className={styles.highlight}>Process</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                A proven methodology that ensures successful project delivery
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-search-line"></i>
                </div>
                <h3>01. Discovery & Planning</h3>
                <p>
                  We work closely with you to understand your requirements and create a detailed project plan
                </p>
                <div className={styles.cardFeatures}>
                  <span>Requirements Analysis</span>
                  <span>Project Planning</span>
                  <span>Detailed Scope</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-file-list-3-line"></i>
                </div>
                <h3>02. Scope Definition</h3>
                <p>
                  Clear definition of deliverables, timelines, and costs with no surprises
                </p>
                <div className={styles.cardFeatures}>
                  <span>Clear Deliverables</span>
                  <span>Fixed Timeline</span>
                  <span>Transparent Costs</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-code-line"></i>
                </div>
                <h3>03. Development & Testing</h3>
                <p>
                  Expert development with regular updates and thorough testing throughout
                </p>
                <div className={styles.cardFeatures}>
                  <span>Expert Development</span>
                  <span>Regular Updates</span>
                  <span>Thorough Testing</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-rocket-line"></i>
                </div>
                <h3>04. Delivery & Support</h3>
                <p>
                  On-time delivery with comprehensive documentation and ongoing support
                </p>
                <div className={styles.cardFeatures}>
                  <span>On-Time Delivery</span>
                  <span>Documentation</span>
                  <span>Ongoing Support</span>
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
                Why Choose <span className={styles.highlight}>Fixed Scope</span> Projects?
              </h2>
              <p className={styles.sectionSubtitle}>
                Benefits that make this model ideal for many businesses
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
                  <h4>Predictable Costs</h4>
                  <p>Fixed pricing with no hidden costs or unexpected expenses</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Fixed</span>
                    <span className={styles.metricLabel}>Pricing</span>
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
                  <h4>Guaranteed Timeline</h4>
                  <p>Clear project timeline with guaranteed delivery dates</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Guaranteed</span>
                    <span className={styles.metricLabel}>Delivery</span>
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
                  <h4>Clear Deliverables</h4>
                  <p>Detailed scope document with exact deliverables and acceptance criteria</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Clear</span>
                    <span className={styles.metricLabel}>Deliverables</span>
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
                  <h4>Quality Assurance</h4>
                  <p>Comprehensive testing and quality assurance included in the scope</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Quality</span>
                    <span className={styles.metricLabel}>Assurance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className={styles.solutionsSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className={styles.sectionBadge}>Perfect For</div>
              <h2 className={styles.sectionTitle}>
                Projects That Work Best with <span className={styles.highlight}>Fixed Scope</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Ideal project types for our fixed scope model
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-global-line"></i>
                </div>
                <h3>Website Development</h3>
                <p>
                  Corporate websites, e-commerce platforms, and web applications with clear requirements
                </p>
                <div className={styles.cardFeatures}>
                  <span>Corporate Websites</span>
                  <span>E-commerce</span>
                  <span>Web Applications</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-apps-line"></i>
                </div>
                <h3>Mobile Applications</h3>
                <p>
                  iOS and Android applications with well-defined features and functionality
                </p>
                <div className={styles.cardFeatures}>
                  <span>iOS Apps</span>
                  <span>Android Apps</span>
                  <span>Cross-Platform</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-settings-3-line"></i>
                </div>
                <h3>System Integration</h3>
                <p>
                  Integration projects with clear requirements and defined APIs
                </p>
                <div className={styles.cardFeatures}>
                  <span>API Integration</span>
                  <span>System Connectors</span>
                  <span>Data Migration</span>
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
                Ready for <span className={styles.highlight}>Guaranteed Delivery</span>?
              </h2>
              <p className={styles.ctaSubtitle}>
                Let's discuss your project requirements and create a fixed scope plan that works for you
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaPrimaryButton}>
                  Start Project
                  <span className={styles.buttonIcon}>→</span>
                </a>
                <a href="/contact" className={styles.ctaSecondaryButton}>
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
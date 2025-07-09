import React from 'react';
import { Metadata } from 'next';
import styles from '../startups-smes/startups-smes.module.css';

export const metadata: Metadata = {
  title: 'Real Estate Agencies | InboxTales - Digital Agency',
  description: 'We help real estate agencies digitize their operations with custom platforms, property management systems, and digital marketing solutions.',
  keywords: 'real estate, property management, real estate technology, property listings, real estate marketing',
};

export default function RealEstateAgenciesPage() {
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
                <span>🏠</span> Empowering Real Estate
              </div>
              <h1 className={styles.heroTitle}>
                Real Estate <span className={styles.highlight}>Agencies</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Digitizing real estate operations for better efficiency and client satisfaction
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>150+</div>
                  <div className={styles.statLabel}>Real Estate Clients</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>10K+</div>
                  <div className={styles.statLabel}>Properties Listed</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>85%</div>
                  <div className={styles.statLabel}>Lead Conversion</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Platform Access</div>
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
                Solutions for <span className={styles.highlight}>Modern Real Estate</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                End-to-end digital solutions for modern real estate agencies
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-home-line"></i>
                </div>
                <h3>Property Listing Platforms</h3>
                <p>
                  Custom property listing websites with advanced search, filtering, and virtual tour features
                </p>
                <div className={styles.cardFeatures}>
                  <span>Advanced Search</span>
                  <span>Virtual Tours</span>
                  <span>Filtering</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-user-line"></i>
                </div>
                <h3>Client Management Systems</h3>
                <p>
                  Comprehensive CRM systems to manage leads, clients, and property transactions
                </p>
                <div className={styles.cardFeatures}>
                  <span>Lead Management</span>
                  <span>CRM</span>
                  <span>Transactions</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-calculator-line"></i>
                </div>
                <h3>Mortgage Calculators</h3>
                <p>
                  Interactive mortgage calculators and financial tools to help clients make informed decisions
                </p>
                <div className={styles.cardFeatures}>
                  <span>Financial Tools</span>
                  <span>Calculators</span>
                  <span>Decision Support</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-camera-line"></i>
                </div>
                <h3>Virtual Tours</h3>
                <p>
                  360-degree virtual tours and interactive property showcases to enhance client engagement
                </p>
                <div className={styles.cardFeatures}>
                  <span>360° Tours</span>
                  <span>Interactive</span>
                  <span>Showcase</span>
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
                  Targeted digital marketing campaigns to generate leads and promote properties
                </p>
                <div className={styles.cardFeatures}>
                  <span>Lead Generation</span>
                  <span>Campaigns</span>
                  <span>Promotion</span>
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
                  Native mobile apps for agents and clients to access property information on the go
                </p>
                <div className={styles.cardFeatures}>
                  <span>iOS & Android</span>
                  <span>Agent Tools</span>
                  <span>Client Access</span>
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
                We understand the unique needs of the real estate industry
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-search-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Advanced Search</h4>
                  <p>Powerful search and filtering capabilities to help clients find their perfect property</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>10K+</span>
                    <span className={styles.metricLabel}>Properties</span>
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
                  <h4>Secure Platform</h4>
                  <p>Bank-level security to protect sensitive client and property information</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>100%</span>
                    <span className={styles.metricLabel}>Security</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-bar-chart-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Analytics & Reporting</h4>
                  <p>Comprehensive analytics to track property performance and client engagement</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>85%</span>
                    <span className={styles.metricLabel}>Conversion</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-user-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Client Management</h4>
                  <p>Tools to manage client relationships and streamline property transactions</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>24/7</span>
                    <span className={styles.metricLabel}>Access</span>
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
              <h2 className={styles.ctaTitle}>Ready to Digitize Your Agency?</h2>
              <p className={styles.ctaSubtitle}>
                Let's discuss how we can help your real estate agency achieve digital success. 
                Get in touch for a free consultation.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaPrimaryButton}>
                  Start Your Digital Journey
                  <span className={styles.buttonIcon}>🏠</span>
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
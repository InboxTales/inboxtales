import React from 'react';
import { Metadata } from 'next';
import styles from '../startups-smes/startups-smes.module.css';

export const metadata: Metadata = {
  title: 'Government & NGOs | InboxTales - Digital Agency',
  description: 'We help government agencies and NGOs build secure, scalable digital platforms that improve service delivery and citizen engagement.',
  keywords: 'government, NGOs, public sector, digital government, citizen services, nonprofit technology',
};

export default function GovernmentNgosPage() {
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
                <span>🏛️</span> Empowering Public Sector
              </div>
              <h1 className={styles.heroTitle}>
                Government & <span className={styles.highlight}>NGOs</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Empowering public sector organizations with secure, scalable digital solutions
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>50+</div>
                  <div className={styles.statLabel}>Government Clients</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100+</div>
                  <div className={styles.statLabel}>NGO Partners</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>1M+</div>
                  <div className={styles.statLabel}>Citizens Served</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Security Compliant</div>
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
                Solutions for <span className={styles.highlight}>Public Service</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                End-to-end digital solutions for government agencies and NGOs
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-user-line"></i>
                </div>
                <h3>Citizen Portals</h3>
                <p>
                  User-friendly portals for citizens to access government services and information
                </p>
                <div className={styles.cardFeatures}>
                  <span>Service Access</span>
                  <span>Information</span>
                  <span>Self-Service</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-file-list-3-line"></i>
                </div>
                <h3>Document Management</h3>
                <p>
                  Secure document management systems for efficient record keeping and compliance
                </p>
                <div className={styles.cardFeatures}>
                  <span>Records</span>
                  <span>Compliance</span>
                  <span>Security</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-calendar-line"></i>
                </div>
                <h3>Service Scheduling</h3>
                <p>
                  Intelligent scheduling systems for appointments and service delivery
                </p>
                <div className={styles.cardFeatures}>
                  <span>Appointments</span>
                  <span>Reminders</span>
                  <span>Automation</span>
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
                  Comprehensive analytics to track service delivery and citizen satisfaction
                </p>
                <div className={styles.cardFeatures}>
                  <span>Service Data</span>
                  <span>Citizen Insights</span>
                  <span>Performance</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-team-line"></i>
                </div>
                <h3>Internal Management</h3>
                <p>
                  Internal systems for staff management, workflow automation, and collaboration
                </p>
                <div className={styles.cardFeatures}>
                  <span>Staff</span>
                  <span>Workflow</span>
                  <span>Collaboration</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-shield-check-line"></i>
                </div>
                <h3>Security & Compliance</h3>
                <p>
                  Enterprise-grade security measures that meet government compliance requirements
                </p>
                <div className={styles.cardFeatures}>
                  <span>Security</span>
                  <span>Compliance</span>
                  <span>Audit</span>
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
                We understand the unique requirements of public sector organizations
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
                  <h4>Security First</h4>
                  <p>Enterprise-level security measures that meet government compliance standards</p>
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
                  <i className="ri-user-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Accessibility Focus</h4>
                  <p>Platforms designed to be accessible to all citizens, including those with disabilities</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>1M+</span>
                    <span className={styles.metricLabel}>Citizens</span>
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
                  <h4>Scalable Solutions</h4>
                  <p>Platforms that can handle large-scale operations and growing citizen demands</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>50+</span>
                    <span className={styles.metricLabel}>Gov Clients</span>
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
                  <p>Comprehensive analytics to track service delivery and citizen satisfaction</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>100+</span>
                    <span className={styles.metricLabel}>NGOs</span>
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
              <h2 className={styles.ctaTitle}>Ready to Transform Public Service?</h2>
              <p className={styles.ctaSubtitle}>
                Let's discuss how we can help your government agency or NGO achieve digital success. 
                Get in touch for a free consultation.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaPrimaryButton}>
                  Start Your Digital Journey
                  <span className={styles.buttonIcon}>🏛️</span>
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
import React from 'react';
import { Metadata } from 'next';
import styles from '../startups-smes/startups-smes.module.css';

export const metadata: Metadata = {
  title: 'Healthcare & Wellness | InboxTales - Digital Agency',
  description: 'We help healthcare providers and wellness businesses build secure, compliant digital platforms that improve patient care and operational efficiency.',
  keywords: 'healthcare, wellness, medical technology, patient care, health platforms, HIPAA compliance',
};

export default function HealthcareWellnessPage() {
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
                <span>🩺</span> Empowering Healthcare
              </div>
              <h1 className={styles.heroTitle}>
                Healthcare & <span className={styles.highlight}>Wellness</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Secure, compliant digital solutions for modern healthcare and wellness businesses
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100+</div>
                  <div className={styles.statLabel}>Healthcare Clients</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>50K+</div>
                  <div className={styles.statLabel}>Patients Served</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>HIPAA Compliant</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Platform Security</div>
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
                Solutions for <span className={styles.highlight}>Healthcare Excellence</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                End-to-end digital solutions for healthcare and wellness providers
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-user-heart-line"></i>
                </div>
                <h3>Patient Portals</h3>
                <p>
                  Secure patient portals for appointment scheduling, medical records, and communication
                </p>
                <div className={styles.cardFeatures}>
                  <span>Scheduling</span>
                  <span>Records</span>
                  <span>Messaging</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-video-line"></i>
                </div>
                <h3>Telemedicine Platforms</h3>
                <p>
                  HIPAA-compliant telemedicine solutions for remote consultations and care delivery
                </p>
                <div className={styles.cardFeatures}>
                  <span>Remote Care</span>
                  <span>Video Consults</span>
                  <span>HIPAA</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-file-list-3-line"></i>
                </div>
                <h3>Electronic Health Records</h3>
                <p>
                  Secure EHR systems with advanced features for patient data management
                </p>
                <div className={styles.cardFeatures}>
                  <span>Data Management</span>
                  <span>Security</span>
                  <span>Compliance</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-calendar-line"></i>
                </div>
                <h3>Appointment Scheduling</h3>
                <p>
                  Intelligent scheduling systems with automated reminders and calendar integration
                </p>
                <div className={styles.cardFeatures}>
                  <span>Reminders</span>
                  <span>Calendar</span>
                  <span>Automation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-bar-chart-line"></i>
                </div>
                <h3>Health Analytics</h3>
                <p>
                  Advanced analytics and reporting for patient outcomes and operational efficiency
                </p>
                <div className={styles.cardFeatures}>
                  <span>Outcomes</span>
                  <span>Reporting</span>
                  <span>Efficiency</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-mobile-line"></i>
                </div>
                <h3>Mobile Health Apps</h3>
                <p>
                  Native mobile applications for patients and healthcare providers
                </p>
                <div className={styles.cardFeatures}>
                  <span>iOS & Android</span>
                  <span>Patient Apps</span>
                  <span>Provider Apps</span>
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
                We understand the critical requirements of the healthcare industry
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
                  <h4>HIPAA Compliant</h4>
                  <p>All solutions built with HIPAA compliance and security best practices</p>
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
                  <h4>Patient-Centric Design</h4>
                  <p>Intuitive interfaces designed for both patients and healthcare providers</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>50K+</span>
                    <span className={styles.metricLabel}>Patients</span>
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
                  <p>Platforms that grow with your practice and adapt to changing healthcare needs</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>100+</span>
                    <span className={styles.metricLabel}>Clients</span>
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
                  <h4>Health Analytics</h4>
                  <p>Advanced analytics and reporting for patient outcomes and operational efficiency</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>24/7</span>
                    <span className={styles.metricLabel}>Security</span>
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
              <h2 className={styles.ctaTitle}>Ready to Transform Healthcare?</h2>
              <p className={styles.ctaSubtitle}>
                Let's discuss how we can help your healthcare or wellness business achieve digital success. 
                Get in touch for a free consultation.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaPrimaryButton}>
                  Start Your Digital Journey
                  <span className={styles.buttonIcon}>🩺</span>
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
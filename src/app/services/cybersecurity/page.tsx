import React from 'react';
import { Metadata } from 'next';
import styles from '../../industries/startups-smes/startups-smes.module.css';

export const metadata: Metadata = {
  title: 'Cybersecurity Services | InboxTales - Digital Agency',
  description: 'Protect your digital assets with our comprehensive cybersecurity services. From security audits to threat monitoring, we keep your business safe.',
  keywords: 'cybersecurity, security services, digital security, threat protection, security audits',
};

export default function CybersecurityPage() {
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
                <span>🛡️</span> Digital Protection
              </div>
              <h1 className={styles.heroTitle}>
                Cybersecurity <span className={styles.highlight}>Services</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Protect your digital assets and maintain customer trust with our comprehensive cybersecurity solutions
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>99.9%</div>
                  <div className={styles.statLabel}>Threat Blocked</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Monitoring</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Compliance</div>
                </div>
              </div>
              <div className={styles.heroCTA}>
                <a href="/contact" className={styles.primaryButton}>
                  Secure Your Business
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
              <div className={styles.sectionBadge}>Security Solutions</div>
              <h2 className={styles.sectionTitle}>
                Comprehensive <span className={styles.highlight}>Cybersecurity</span> Solutions
              </h2>
              <p className={styles.sectionSubtitle}>
                We provide end-to-end cybersecurity services to protect your business from evolving threats
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-shield-check-line"></i>
                </div>
                <h3>Security Audits</h3>
                <p>
                  Comprehensive security assessments to identify vulnerabilities and provide 
                  actionable recommendations for improvement.
                </p>
                <div className={styles.cardFeatures}>
                  <span>Vulnerability Assessment</span>
                  <span>Actionable Reports</span>
                  <span>Compliance Check</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-lock-line"></i>
                </div>
                <h3>Penetration Testing</h3>
                <p>
                  Simulated cyber attacks to test your security defenses and identify potential 
                  weaknesses before they can be exploited.
                </p>
                <div className={styles.cardFeatures}>
                  <span>Simulated Attacks</span>
                  <span>Weakness Detection</span>
                  <span>Defense Testing</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-eye-line"></i>
                </div>
                <h3>Threat Monitoring</h3>
                <p>
                  24/7 monitoring of your systems to detect and respond to security threats 
                  in real-time before they cause damage.
                </p>
                <div className={styles.cardFeatures}>
                  <span>24/7 Monitoring</span>
                  <span>Real-time Detection</span>
                  <span>Immediate Response</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-settings-3-line"></i>
                </div>
                <h3>Security Implementation</h3>
                <p>
                  Implementation of security measures including firewalls, encryption, 
                  access controls, and security policies.
                </p>
                <div className={styles.cardFeatures}>
                  <span>Firewall Setup</span>
                  <span>Encryption</span>
                  <span>Access Controls</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-file-list-3-line"></i>
                </div>
                <h3>Compliance Management</h3>
                <p>
                  Ensure compliance with industry regulations like GDPR, HIPAA, PCI DSS, 
                  and other security standards.
                </p>
                <div className={styles.cardFeatures}>
                  <span>GDPR Compliance</span>
                  <span>HIPAA Standards</span>
                  <span>PCI DSS</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-team-line"></i>
                </div>
                <h3>Security Training</h3>
                <p>
                  Employee security awareness training to prevent social engineering attacks 
                  and promote security best practices.
                </p>
                <div className={styles.cardFeatures}>
                  <span>Awareness Training</span>
                  <span>Best Practices</span>
                  <span>Social Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className={styles.sectionBadge}>Why Choose Us</div>
              <h2 className={styles.sectionTitle}>
                Why Choose Our <span className={styles.highlight}>Cybersecurity</span> Services?
              </h2>
              <p className={styles.sectionSubtitle}>
                We provide comprehensive protection with proven expertise and cutting-edge technology
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
                  <h4>Expert Team</h4>
                  <p>Certified cybersecurity professionals with years of experience in protecting businesses of all sizes</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Certified</span>
                    <span className={styles.metricLabel}>Professionals</span>
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
                  <h4>24/7 Monitoring</h4>
                  <p>Round-the-clock security monitoring to detect and respond to threats immediately</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>24/7</span>
                    <span className={styles.metricLabel}>Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-tools-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Advanced Tools</h4>
                  <p>State-of-the-art security tools and technologies to provide comprehensive protection</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Advanced</span>
                    <span className={styles.metricLabel}>Technology</span>
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
                  <p>Personalized support and guidance to ensure your security needs are met</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Dedicated</span>
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
              <h2 className={styles.ctaTitle}>
                Secure Your <span className={styles.highlight}>Digital Future</span>
              </h2>
              <p className={styles.ctaSubtitle}>
                Don't wait until it's too late. Protect your business with our comprehensive cybersecurity services today.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaPrimaryButton}>
                  Get Security Assessment
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
  );
} 
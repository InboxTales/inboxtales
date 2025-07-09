import React from 'react';
import { Metadata } from 'next';
import styles from '../../industries/startups-smes/startups-smes.module.css';

export const metadata: Metadata = {
  title: 'Monthly Retainers | InboxTales - Digital Agency',
  description: 'Get ongoing digital support and development with our monthly retainer model. Flexible, scalable, and cost-effective for growing businesses.',
  keywords: 'monthly retainers, ongoing support, digital maintenance, continuous development, retainer services',
};

export default function MonthlyRetainersPage() {
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
                <span>🔄</span> Ongoing Support
              </div>
              <h1 className={styles.heroTitle}>
                Monthly <span className={styles.highlight}>Retainers</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Ongoing digital support and development for growing businesses with predictable costs
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Support Available</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>Flexible</div>
                  <div className={styles.statLabel}>Hours & Services</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>Scalable</div>
                  <div className={styles.statLabel}>As You Grow</div>
                </div>
              </div>
              <div className={styles.heroCTA}>
                <a href="/contact" className={styles.primaryButton}>
                  Get Started
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
              <div className={styles.sectionBadge}>Retainer Services</div>
              <h2 className={styles.sectionTitle}>
                What's Included in Your <span className={styles.highlight}>Retainer</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Comprehensive digital services to keep your business running smoothly
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-tools-line"></i>
                </div>
                <h3>Website Maintenance</h3>
                <p>
                  Regular updates, security patches, and performance optimization for your digital platforms
                </p>
                <div className={styles.cardFeatures}>
                  <span>Regular Updates</span>
                  <span>Security Patches</span>
                  <span>Performance Optimization</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-bug-line"></i>
                </div>
                <h3>Bug Fixes & Support</h3>
                <p>
                  Quick resolution of technical issues and ongoing support for your digital systems
                </p>
                <div className={styles.cardFeatures}>
                  <span>Quick Resolution</span>
                  <span>Technical Support</span>
                  <span>System Maintenance</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-add-line"></i>
                </div>
                <h3>Feature Development</h3>
                <p>
                  Continuous development of new features and improvements for your platforms
                </p>
                <div className={styles.cardFeatures}>
                  <span>New Features</span>
                  <span>Continuous Development</span>
                  <span>Platform Improvements</span>
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
                  Regular performance reports and analytics to track your digital success
                </p>
                <div className={styles.cardFeatures}>
                  <span>Performance Reports</span>
                  <span>Analytics Tracking</span>
                  <span>Success Metrics</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-megaphone-line"></i>
                </div>
                <h3>Content Updates</h3>
                <p>
                  Regular content updates, SEO optimization, and digital marketing support
                </p>
                <div className={styles.cardFeatures}>
                  <span>Content Updates</span>
                  <span>SEO Optimization</span>
                  <span>Marketing Support</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-customer-service-2-line"></i>
                </div>
                <h3>Priority Support</h3>
                <p>
                  Dedicated support team with priority response times for urgent issues
                </p>
                <div className={styles.cardFeatures}>
                  <span>Dedicated Team</span>
                  <span>Priority Response</span>
                  <span>Urgent Support</span>
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
                Benefits of <span className={styles.highlight}>Monthly Retainers</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Why businesses choose our retainer model for ongoing digital support
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
                  <p>Fixed monthly pricing with no surprise bills or hidden costs</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Fixed</span>
                    <span className={styles.metricLabel}>Monthly Pricing</span>
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
                  <p>Consistent team members who understand your business and systems</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Consistent</span>
                    <span className={styles.metricLabel}>Team Members</span>
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
                  <h4>Flexible Hours</h4>
                  <p>Use your allocated hours for any digital services you need</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Flexible</span>
                    <span className={styles.metricLabel}>Hour Allocation</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-rocket-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Scalable Growth</h4>
                  <p>Scale your services up or down as your business grows</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Scalable</span>
                    <span className={styles.metricLabel}>Growth Support</span>
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
                Ready for <span className={styles.highlight}>Ongoing Support</span>?
              </h2>
              <p className={styles.ctaSubtitle}>
                Let's discuss how our monthly retainer can provide continuous digital support for your business
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaPrimaryButton}>
                  Get Started
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
import React from 'react';
import { Metadata } from 'next';
import styles from '../../industries/startups-smes/startups-smes.module.css';

export const metadata: Metadata = {
  title: 'Staff Augmentation | InboxTales - Digital Agency',
  description: 'Scale your development team quickly with our staff augmentation services. Access skilled developers, designers, and technical experts on demand.',
  keywords: 'staff augmentation, team scaling, remote developers, technical talent, development team extension',
};

export default function StaffAugmentationPage() {
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
                <span>👥</span> Team Scaling
              </div>
              <h1 className={styles.heroTitle}>
                Staff <span className={styles.highlight}>Augmentation</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Scale your development team quickly with skilled professionals on demand
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100+</div>
                  <div className={styles.statLabel}>Skilled Professionals</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>Flexible</div>
                  <div className={styles.statLabel}>Engagement Terms</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Availability</div>
                </div>
              </div>
              <div className={styles.heroCTA}>
                <a href="/contact" className={styles.primaryButton}>
                  Scale Your Team
                  <span className={styles.buttonIcon}>→</span>
                </a>
                <a href="#services" className={styles.secondaryButton}>
                  Explore Talent
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
              <div className={styles.sectionBadge}>Team Services</div>
              <h2 className={styles.sectionTitle}>
                Our Staff <span className={styles.highlight}>Augmentation</span> Services
              </h2>
              <p className={styles.sectionSubtitle}>
                Comprehensive team scaling solutions for all your technical needs
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-code-line"></i>
                </div>
                <h3>Full-Stack Developers</h3>
                <p>
                  Experienced developers proficient in frontend and backend technologies
                </p>
                <div className={styles.cardFeatures}>
                  <span>Frontend & Backend</span>
                  <span>Multiple Technologies</span>
                  <span>End-to-End Development</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-palette-line"></i>
                </div>
                <h3>UI/UX Designers</h3>
                <p>
                  Creative designers focused on user experience and interface design
                </p>
                <div className={styles.cardFeatures}>
                  <span>User Experience</span>
                  <span>Interface Design</span>
                  <span>Creative Solutions</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-mobile-line"></i>
                </div>
                <h3>Mobile Developers</h3>
                <p>
                  Specialized developers for iOS and Android application development
                </p>
                <div className={styles.cardFeatures}>
                  <span>iOS Development</span>
                  <span>Android Development</span>
                  <span>Cross-Platform</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-database-2-line"></i>
                </div>
                <h3>DevOps Engineers</h3>
                <p>
                  Infrastructure and deployment specialists for scalable solutions
                </p>
                <div className={styles.cardFeatures}>
                  <span>Infrastructure</span>
                  <span>Deployment</span>
                  <span>Scalable Solutions</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-shield-check-line"></i>
                </div>
                <h3>Security Specialists</h3>
                <p>
                  Cybersecurity experts for secure application development and testing
                </p>
                <div className={styles.cardFeatures}>
                  <span>Cybersecurity</span>
                  <span>Secure Development</span>
                  <span>Testing & Auditing</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-test-tube-line"></i>
                </div>
                <h3>QA Engineers</h3>
                <p>
                  Quality assurance specialists for comprehensive testing and validation
                </p>
                <div className={styles.cardFeatures}>
                  <span>Quality Assurance</span>
                  <span>Comprehensive Testing</span>
                  <span>Validation</span>
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
                Benefits of <span className={styles.highlight}>Staff Augmentation</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Why companies choose our team scaling services
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-time-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Quick Scaling</h4>
                  <p>Scale your team up or down quickly based on project requirements</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Quick</span>
                    <span className={styles.metricLabel}>Team Scaling</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-money-dollar-circle-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Cost-Effective</h4>
                  <p>No recruitment costs, benefits, or long-term commitments</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>No</span>
                    <span className={styles.metricLabel}>Recruitment Costs</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-user-star-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Skilled Professionals</h4>
                  <p>Access to pre-vetted, experienced professionals with proven track records</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Pre-vetted</span>
                    <span className={styles.metricLabel}>Professionals</span>
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
                  <h4>Accelerated Development</h4>
                  <p>Speed up your development timeline with additional skilled resources</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Faster</span>
                    <span className={styles.metricLabel}>Development</span>
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
                Ready to <span className={styles.highlight}>Scale Your Team</span>?
              </h2>
              <p className={styles.ctaSubtitle}>
                Let's discuss your team scaling needs and find the perfect professionals for your project
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
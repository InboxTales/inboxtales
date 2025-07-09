import React from 'react';
import { Metadata } from 'next';
import styles from '../../industries/startups-smes/startups-smes.module.css';

export const metadata: Metadata = {
  title: 'CTO-as-a-Service | InboxTales - Digital Agency',
  description: 'Get executive-level technology leadership without the full-time commitment. Our CTO-as-a-Service provides strategic technology guidance and oversight.',
  keywords: 'CTO as a service, fractional CTO, technology leadership, strategic technology consulting, executive technology services',
};

export default function CtoAsAServicePage() {
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
                <span>👑</span> Executive Leadership
              </div>
              <h1 className={styles.heroTitle}>
                CTO-as-a-<span className={styles.highlight}>Service</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Executive technology leadership without the full-time commitment and overhead costs
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>15+</div>
                  <div className={styles.statLabel}>Years Experience</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>50+</div>
                  <div className={styles.statLabel}>Companies Served</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>Flexible</div>
                  <div className={styles.statLabel}>Engagement</div>
                </div>
              </div>
              <div className={styles.heroCTA}>
                <a href="/contact" className={styles.primaryButton}>
                  Get Leadership
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
              <div className={styles.sectionBadge}>Strategic Services</div>
              <h2 className={styles.sectionTitle}>
                What Our <span className={styles.highlight}>CTO Service</span> Includes
              </h2>
              <p className={styles.sectionSubtitle}>
                Comprehensive technology leadership and strategic guidance for your business
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-strategy-line"></i>
                </div>
                <h3>Technology Strategy</h3>
                <p>
                  Develop comprehensive technology roadmaps aligned with your business objectives
                </p>
                <div className={styles.cardFeatures}>
                  <span>Strategic Planning</span>
                  <span>Roadmap Development</span>
                  <span>Business Alignment</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-team-line"></i>
                </div>
                <h3>Team Leadership</h3>
                <p>
                  Guide and mentor your development team, conduct code reviews, and establish best practices
                </p>
                <div className={styles.cardFeatures}>
                  <span>Team Mentoring</span>
                  <span>Code Reviews</span>
                  <span>Best Practices</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-settings-3-line"></i>
                </div>
                <h3>Architecture Design</h3>
                <p>
                  Design scalable, secure, and maintainable technology architectures
                </p>
                <div className={styles.cardFeatures}>
                  <span>Scalable Design</span>
                  <span>Security Focus</span>
                  <span>Maintainable</span>
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
                  Establish security policies, ensure compliance, and implement best practices
                </p>
                <div className={styles.cardFeatures}>
                  <span>Security Policies</span>
                  <span>Compliance</span>
                  <span>Best Practices</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-money-dollar-circle-line"></i>
                </div>
                <h3>Budget Planning</h3>
                <p>
                  Technology budget planning, vendor management, and cost optimization
                </p>
                <div className={styles.cardFeatures}>
                  <span>Budget Planning</span>
                  <span>Vendor Management</span>
                  <span>Cost Optimization</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-presentation-line"></i>
                </div>
                <h3>Board Reporting</h3>
                <p>
                  Regular technology updates and reporting to stakeholders and board members
                </p>
                <div className={styles.cardFeatures}>
                  <span>Regular Updates</span>
                  <span>Stakeholder Reports</span>
                  <span>Board Communication</span>
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
                Benefits of <span className={styles.highlight}>CTO-as-a-Service</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Why companies choose our fractional CTO services
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
                  <h4>Cost-Effective</h4>
                  <p>Access to executive-level expertise at a fraction of the cost of a full-time CTO</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>60%</span>
                    <span className={styles.metricLabel}>Cost Savings</span>
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
                  <h4>Flexible Commitment</h4>
                  <p>Scale up or down based on your needs without long-term commitments</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>Flexible</span>
                    <span className={styles.metricLabel}>Engagement</span>
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
                  <h4>Proven Expertise</h4>
                  <p>Access to experienced technology leaders with proven track records</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>15+</span>
                    <span className={styles.metricLabel}>Years Experience</span>
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
                  <h4>Strategic Focus</h4>
                  <p>Focus on strategic technology decisions while we handle the execution</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>100%</span>
                    <span className={styles.metricLabel}>Strategic Focus</span>
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
                Ready for <span className={styles.highlight}>Technology Leadership</span>?
              </h2>
              <p className={styles.ctaSubtitle}>
                Let's discuss how our CTO-as-a-Service can transform your technology strategy
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
import React from 'react';
import { Metadata } from 'next';
import styles from '../startups-smes/startups-smes.module.css';

export const metadata: Metadata = {
  title: 'Coaching & Education | InboxTales - Digital Agency',
  description: 'We help coaching businesses and educational institutions leverage digital technology to reach more students and deliver better learning experiences.',
  keywords: 'coaching, education, e-learning, online courses, digital learning, educational technology',
};

export default function CoachingEducationPage() {
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
                <span>🎓</span> Empowering Education
              </div>
              <h1 className={styles.heroTitle}>
                Coaching & <span className={styles.highlight}>Education</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Transforming learning experiences through innovative digital solutions
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>200+</div>
                  <div className={styles.statLabel}>Educational Clients</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>50K+</div>
                  <div className={styles.statLabel}>Students Reached</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>95%</div>
                  <div className={styles.statLabel}>Engagement Rate</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Platform Availability</div>
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
                Solutions for <span className={styles.highlight}>Modern Learning</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Enhance learning experiences and student engagement with technology
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-book-open-line"></i>
                </div>
                <h3>Learning Management Systems</h3>
                <p>
                  Custom LMS platforms to manage courses, track progress, and deliver content effectively
                </p>
                <div className={styles.cardFeatures}>
                  <span>Course Tracking</span>
                  <span>Progress Analytics</span>
                  <span>Content Delivery</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-video-line"></i>
                </div>
                <h3>Video Learning Platforms</h3>
                <p>
                  Interactive video platforms with features like live streaming, recording, and analytics
                </p>
                <div className={styles.cardFeatures}>
                  <span>Live Streaming</span>
                  <span>Recording</span>
                  <span>Analytics</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-apps-line"></i>
                </div>
                <h3>Mobile Learning Apps</h3>
                <p>
                  Native mobile applications for on-the-go learning and better student engagement
                </p>
                <div className={styles.cardFeatures}>
                  <span>iOS & Android</span>
                  <span>Push Notifications</span>
                  <span>Gamification</span>
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
                  Comprehensive analytics to track student progress and optimize learning outcomes
                </p>
                <div className={styles.cardFeatures}>
                  <span>Progress Reports</span>
                  <span>Student Insights</span>
                  <span>Outcome Tracking</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <i className="ri-customer-service-2-line"></i>
                </div>
                <h3>Student Support Systems</h3>
                <p>
                  Integrated support systems including chatbots, help desks, and communication tools
                </p>
                <div className={styles.cardFeatures}>
                  <span>Chatbots</span>
                  <span>Help Desk</span>
                  <span>Comms Tools</span>
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
                  Secure platforms that comply with educational data protection regulations
                </p>
                <div className={styles.cardFeatures}>
                  <span>Data Security</span>
                  <span>Compliance</span>
                  <span>Privacy</span>
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
                We understand the unique needs of the education sector
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className="ri-user-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h4>Student-Centric Design</h4>
                  <p>Platforms designed with students in mind, ensuring intuitive and engaging learning experiences</p>
                  <div className={styles.benefitMetric}>
                    <span className={styles.metricValue}>95%</span>
                    <span className={styles.metricLabel}>Engagement</span>
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
                  <p>Platforms that grow with your institution and adapt to changing educational needs</p>
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
                  <p>Built-in compliance features for educational data protection and privacy regulations</p>
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
                  <p>Always-on support for students and educators to ensure smooth learning experiences</p>
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
              <h2 className={styles.ctaTitle}>Ready to Transform Learning?</h2>
              <p className={styles.ctaSubtitle}>
                Let's discuss how we can help your institution or coaching business achieve digital success. 
                Get in touch for a free consultation.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.ctaPrimaryButton}>
                  Start Your Digital Journey
                  <span className={styles.buttonIcon}>🎓</span>
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
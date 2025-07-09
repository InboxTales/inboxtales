import React from 'react';
import { Metadata } from 'next';
import styles from './web-app-development.module.css';

export const metadata: Metadata = {
  title: 'Web App Development Services | InboxTales - Digital Agency',
  description: 'Custom web application development services by InboxTales. We build scalable, secure, and high-performance web applications using modern technologies and best practices.',
  keywords: 'web app development, custom web applications, web development services, full-stack development, web application design, modern web apps',
};

export default function WebAppDevelopmentPage() {
  return (
    <div className={styles.webAppPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className={styles.heroTitle}>Web App Development</h1>
              <p className={styles.heroSubtitle}>
                Custom web applications built with modern technologies and best practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.section}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className={styles.sectionTitle}>Transform Your Business with Custom Web Applications</h2>
              <p>
                We specialize in building custom web applications that drive business growth 
                and improve operational efficiency. Our development team creates scalable, 
                secure, and user-friendly applications using cutting-edge technologies.
              </p>
              <p>
                From simple web apps to complex enterprise solutions, we deliver applications 
                that meet your specific business needs and exceed user expectations.
              </p>
            </div>
            <div className="col-lg-6">
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <h3>200+</h3>
                  <p>Web Apps Built</p>
                </div>
                <div className={styles.statCard}>
                  <h3>99.9%</h3>
                  <p>Uptime Guarantee</p>
                </div>
                <div className={styles.statCard}>
                  <h3>24/7</h3>
                  <p>Support Available</p>
                </div>
                <div className={styles.statCard}>
                  <h3>95%</h3>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Services Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className={styles.sectionTitle}>Our Web App Development Services</h2>
              <p className={styles.sectionSubtitle}>Comprehensive web application development solutions for all your needs</p>
            </div>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><i className="ri-global-line"></i></div>
              <h3>Custom Web Applications</h3>
              <p>Tailored web applications designed specifically for your business requirements and user needs</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><i className="ri-shopping-cart-line"></i></div>
              <h3>E-commerce Platforms</h3>
              <p>Full-featured e-commerce solutions with payment processing, inventory management, and customer portals</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><i className="ri-user-line"></i></div>
              <h3>Customer Portals</h3>
              <p>Secure customer portals for account management, service access, and personalized experiences</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><i className="ri-dashboard-line"></i></div>
              <h3>Admin Dashboards</h3>
              <p>Powerful admin dashboards with analytics, reporting, and management tools for business operations</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><i className="ri-database-2-line"></i></div>
              <h3>API Development</h3>
              <p>RESTful APIs and microservices for seamless integration with existing systems and third-party services</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><i className="ri-settings-3-line"></i></div>
              <h3>System Integration</h3>
              <p>Integration with existing business systems, databases, and third-party applications for seamless workflows</p>
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Technologies Section */}
      <section className={styles.section}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className={styles.sectionTitle}>Technologies We Use</h2>
              <p className={styles.sectionSubtitle}>Modern, reliable technologies for building robust web applications</p>
            </div>
          </div>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <div className={styles.techIcon}><i className="ri-reactjs-line"></i></div>
              <h4>React & Next.js</h4>
              <p>Modern frontend frameworks for dynamic, responsive user interfaces</p>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}><i className="ri-nodejs-line"></i></div>
              <h4>Node.js</h4>
              <p>Scalable backend development with JavaScript runtime environment</p>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}><i className="ri-database-2-line"></i></div>
              <h4>Databases</h4>
              <p>MongoDB, PostgreSQL, MySQL for reliable data storage and management</p>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}><i className="ri-cloud-line"></i></div>
              <h4>Cloud Platforms</h4>
              <p>AWS, Azure, Google Cloud for scalable hosting and infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Process Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className={styles.sectionTitle}>Our Development Process</h2>
              <p className={styles.sectionSubtitle}>A proven methodology that ensures successful project delivery</p>
            </div>
          </div>
          <div className={styles.processFlow}>
            <div className={styles.processCard}>
              <div className={styles.processStepCircle}>01</div>
              <h4>Discovery & Planning</h4>
              <p>Understanding your requirements and creating a detailed project roadmap</p>
            </div>
            <div className={styles.processArrow}>&rarr;</div>
            <div className={styles.processCard}>
              <div className={styles.processStepCircle}>02</div>
              <h4>Design & Prototyping</h4>
              <p>Creating wireframes, mockups, and interactive prototypes for user feedback</p>
            </div>
            <div className={styles.processArrow}>&rarr;</div>
            <div className={styles.processCard}>
              <div className={styles.processStepCircle}>03</div>
              <h4>Development & Testing</h4>
              <p>Building the application with regular testing and quality assurance</p>
            </div>
            <div className={styles.processArrow}>&rarr;</div>
            <div className={styles.processCard}>
              <div className={styles.processStepCircle}>04</div>
              <h4>Deployment & Support</h4>
              <p>Launching the application and providing ongoing maintenance and support</p>
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Features Section */}
      <section className={styles.section}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className={styles.sectionTitle}>Why Choose Our Web App Development?</h2>
              <p className={styles.sectionSubtitle}>Benefits that set us apart from the competition</p>
            </div>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><i className="ri-shield-check-line"></i></div>
              <div className={styles.featureContent}>
                <h4>Security First</h4>
                <p>Built-in security measures and best practices to protect your data and users</p>
              </div>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><i className="ri-settings-3-line"></i></div>
              <div className={styles.featureContent}>
                <h4>Scalable Architecture</h4>
                <p>Applications designed to grow with your business and handle increased traffic</p>
              </div>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><i className="ri-user-line"></i></div>
              <div className={styles.featureContent}>
                <h4>User-Centric Design</h4>
                <p>Intuitive interfaces and seamless user experiences that drive engagement</p>
              </div>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><i className="ri-customer-service-2-line"></i></div>
              <div className={styles.featureContent}>
                <h4>Ongoing Support</h4>
                <p>Continuous support, maintenance, and updates to keep your application running smoothly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className={styles.ctaTitle}>Ready to Build Your Web Application?</h2>
              <p className={styles.ctaSubtitle}>
                Let&apos;s discuss your web app requirements and create a solution that drives 
                your business forward. Get in touch to start your project.
              </p>
              <a href="/contact" className={styles.ctaButton}>
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
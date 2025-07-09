import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../industries/startups-smes/startups-smes.module.css';

const services = [
  {
    id: 'web-app-development',
    title: 'Web App Development',
    subheading: 'Transform your ideas into powerful, scalable web applications that delight users and drive business growth.',
    cta: 'Let\'s Build It',
    offer: [
      { icon: 'ri-rocket-line', title: 'Rapid Prototyping', desc: 'Get your MVP to market fast with agile, iterative development.' },
      { icon: 'ri-code-s-slash-line', title: 'Custom UI/UX', desc: 'Beautiful, accessible interfaces tailored to your brand and users.' },
      { icon: 'ri-shield-check-line', title: 'Enterprise Security', desc: 'Best-in-class security practices to protect your data and users.' },
      { icon: 'ri-flashlight-line', title: 'Performance & Scalability', desc: 'Apps built to handle growth, spikes, and global audiences.' },
      { icon: 'ri-settings-3-line', title: 'API & System Integration', desc: 'Seamless integration with third-party services and internal tools.' },
      { icon: 'ri-customer-service-2-line', title: 'Ongoing Support', desc: 'Continuous improvement, maintenance, and support post-launch.' },
    ],
    why: [
      'Fast, reliable delivery with transparent communication',
      'Custom UI/UX design for every project',
      'Deep experience with complex integrations',
      'Dedicated support from discovery to launch and beyond',
      'Proven results across industries and use cases',
    ],
    process: [
      { step: 'Discover', desc: 'We learn your goals, users, and requirements.' },
      { step: 'Plan', desc: 'We architect, design, and schedule your project.' },
      { step: 'Build', desc: 'We develop, test, and iterate rapidly.' },
      { step: 'Launch', desc: 'We deploy, monitor, and support your app.' },
    ],
    projects: [
      { name: 'E-Commerce Platform', desc: 'Scalable online store with advanced inventory management and payment processing.' },
      { name: 'SaaS Dashboard', desc: 'Real-time analytics dashboard with custom reporting and user management.' },
      { name: 'Mobile-First Web App', desc: 'Progressive web app with offline capabilities and push notifications.' },
    ],
    testimonials: [
      {
        text: 'InboxTales delivered our web app ahead of schedule and exceeded our expectations. The team was responsive and truly cared about our success.',
        name: 'Priya S.',
        title: 'Product Lead, Fintech Startup',
      },
      {
        text: 'The custom UI/UX and seamless integrations made a huge difference for our users. Highly recommend InboxTales!',
        name: 'Arjun M.',
        title: 'CTO, SaaS Company',
      },
    ],
    faqs: [
      {
        q: 'How long does it take to build a custom web app?',
        a: 'Timelines vary by project scope, but most MVPs launch in 6–12 weeks. We provide a detailed schedule after discovery.',
      },
      {
        q: 'Can you integrate with our existing systems?',
        a: 'Absolutely! We have deep experience with APIs, CRMs, ERPs, and custom integrations.',
      },
      {
        q: 'Do you provide ongoing support?',
        a: 'Yes, we offer maintenance, feature updates, and support packages tailored to your needs.',
      },
      {
        q: 'Is my data secure?',
        a: 'Security is a top priority. We use best practices for encryption, authentication, and compliance.',
      },
    ],
    finalCta: {
      heading: 'Your idea deserves better than a template.',
      subheading: 'Let\'s build something remarkable together. Get a free consultation today.',
      button: 'Start Your Project',
    },
  },
];

function ServiceSection({ service }: { service: typeof services[0] }) {
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
                <span>🛠️</span> Digital Solutions
              </div>
              <h1 className={styles.heroTitle}>
                {service.title}
              </h1>
              <p className={styles.heroSubtitle}>
                {service.subheading}
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100+</div>
                  <div className={styles.statLabel}>Projects Delivered</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>98%</div>
                  <div className={styles.statLabel}>Client Satisfaction</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Support</div>
                </div>
              </div>
              <div className={styles.heroCTA}>
                <Link href="/contact" className={styles.primaryButton}>
                  Start Your Story
                  <span className={styles.buttonIcon}>→</span>
                </Link>
                <Link href="#offerings" className={styles.secondaryButton}>
                  View Offerings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="offerings" className={styles.solutionsSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className={styles.sectionBadge}>What We Offer</div>
              <h2 className={styles.sectionTitle}>
                Complete <span className={styles.highlight}>Web App Solutions</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                From concept to deployment, we handle every aspect of your web application
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {service.offer.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className={styles.solutionCard}>
                  <div className={styles.cardIcon}>
                    <i className={item.icon}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className={styles.cardFeatures}>
                    <span>Custom Solution</span>
                    <span>Expert Team</span>
                    <span>Quality Assured</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose InboxTales */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className={styles.sectionBadge}>Why Choose Us</div>
              <h2 className={styles.sectionTitle}>
                Why Choose <span className={styles.highlight}>InboxTales?</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                We don't just build web apps—we craft digital experiences that drive real business results
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {service.why.map((point, i) => (
              <div key={i} className="col-lg-6">
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>
                    <i className="ri-check-line"></i>
                  </div>
                  <div className={styles.benefitContent}>
                    <h4>Quality Assurance</h4>
                    <p>{point}</p>
                    <div className={styles.benefitMetric}>
                      <span className={styles.metricValue}>✓</span>
                      <span className={styles.metricLabel}>Guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className={styles.solutionsSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className={styles.sectionBadge}>Our Process</div>
              <h2 className={styles.sectionTitle}>
                How We Bring Your <span className={styles.highlight}>Ideas to Life</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                A proven methodology that ensures success at every step
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {service.process.map((step, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className={styles.solutionCard}>
                  <div className={styles.cardIcon}>
                    <span className="text-2xl font-bold">{i + 1}</span>
                  </div>
                  <h3>{step.step}</h3>
                  <p>{step.desc}</p>
                  <div className={styles.cardFeatures}>
                    <span>Step {i + 1}</span>
                    <span>Proven Method</span>
                    <span>Clear Process</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className={styles.sectionBadge}>Recent Work</div>
              <h2 className={styles.sectionTitle}>
                Project <span className={styles.highlight}>Highlights</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                See how we've helped businesses transform their digital presence
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {service.projects.map((project, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className={styles.solutionCard}>
                  <div className={styles.cardIcon}>
                    <i className="ri-folder-line"></i>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.desc}</p>
                  <div className={styles.cardFeatures}>
                    <span>Custom Solution</span>
                    <span>Scalable Design</span>
                    <span>User Focused</span>
                  </div>
                </div>
              </div>
            ))}
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
                {service.finalCta.heading}
              </h2>
              <p className={styles.ctaSubtitle}>
                {service.finalCta.subheading}
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimaryButton}>
                  {service.finalCta.button}
                  <span className={styles.buttonIcon}>→</span>
                </Link>
                <Link href="/contact" className={styles.ctaSecondaryButton}>
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main>
      {services.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}
    </main>
  );
} 
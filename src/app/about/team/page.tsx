import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import styles from './team.module.css';

export const metadata: Metadata = {
  title: 'Our Team | InboxTales - Digital Agency',
  description: 'Meet the talented team behind InboxTales. Our experts are passionate about creating innovative digital solutions that drive business growth.',
  keywords: 'team, about us, digital agency team, experts, professionals, InboxTales team',
};

export default function TeamPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className={styles.heroTitle}>Meet Our Team</h1>
              <p className={styles.heroSubtitle}>
                Passionate experts dedicated to creating innovative digital solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <p className={styles.sectionSubtitle}>
                At InboxTales, we believe that great digital solutions come from great teams. 
                Our diverse group of experts brings together years of experience in technology, 
                design, and business strategy to deliver exceptional results for our clients.
              </p>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
                <div className={styles.memberImage}>
                  <Image src="/images/about/founder.png" alt="John Smith" width={160} height={160} />
                </div>
                <div>
                  <h3 className={styles.memberName}>John Smith</h3>
                  <p className={styles.position}>CEO & Founder</p>
                  <p className={styles.bio}>
                    15+ years of experience in digital transformation and technology leadership. 
                    Passionate about helping businesses leverage technology for growth.
                  </p>
                </div>
            </div>
            
            <div className={styles.card}>
                <div className={styles.memberImage}>
                  <Image src="/images/about/founder.png" alt="Sarah Johnson" width={160} height={160} />
                </div>
                <div>
                  <h3 className={styles.memberName}>Sarah Johnson</h3>
                  <p className={styles.position}>CTO</p>
                  <p className={styles.bio}>
                    Technology expert with deep expertise in scalable architecture and 
                    emerging technologies. Leads our technical strategy and innovation.
                  </p>
                </div>
            </div>
            
            <div className={styles.card}>
                <div className={styles.memberImage}>
                  <Image src="/images/about/founder.png" alt="Mike Chen" width={160} height={160} />
                </div>
                <div>
                  <h3 className={styles.memberName}>Mike Chen</h3>
                  <p className={styles.position}>Lead Developer</p>
                  <p className={styles.bio}>
                    Full-stack developer with expertise in modern web technologies. 
                    Passionate about clean code and user experience.
                  </p>
                </div>
            </div>
            
            <div className={styles.card}>
                <div className={styles.memberImage}>
                  <Image src="/images/about/founder.png" alt="Emily Davis" width={160} height={160} />
                </div>
                <div>
                  <h3 className={styles.memberName}>Emily Davis</h3>
                  <p className={styles.position}>UX/UI Designer</p>
                  <p className={styles.bio}>
                    Creative designer focused on creating intuitive and beautiful user experiences. 
                    Expert in user research and design systems.
                  </p>
                </div>
            </div>
            
            <div className={styles.card}>
                <div className={styles.memberImage}>
                  <Image src="/images/about/founder.png" alt="David Wilson" width={160} height={160} />
                </div>
                <div>
                  <h3 className={styles.memberName}>David Wilson</h3>
                  <p className={styles.position}>DevOps Engineer</p>
                  <p className={styles.bio}>
                    Infrastructure specialist with expertise in cloud platforms and automation. 
                    Ensures our solutions are scalable and secure.
                  </p>
                </div>
            </div>
            
            <div className={styles.card}>
                <div className={styles.memberImage}>
                  <Image src="/images/about/founder.png" alt="Lisa Brown" width={160} height={160} />
                </div>
                <div>
                  <h3 className={styles.memberName}>Lisa Brown</h3>
                  <p className={styles.position}>Project Manager</p>
                  <p className={styles.bio}>
                    Experienced project manager who ensures smooth delivery and client satisfaction. 
                    Expert in agile methodologies and team coordination.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5" style={{background:'#F9FAFB'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className={styles.sectionTitle}>Our Values</h2>
              <p className={styles.sectionSubtitle}>The principles that guide everything we do</p>
            </div>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <i className="ri-heart-line"></i>
                </div>
                <h4>Passion</h4>
                <p>We're passionate about technology and its power to transform businesses</p>
            </div>
            
            <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <i className="ri-shield-check-line"></i>
                </div>
                <h4>Quality</h4>
                <p>We never compromise on quality and always deliver our best work</p>
            </div>
            
            <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <i className="ri-team-line"></i>
                </div>
                <h4>Collaboration</h4>
                <p>We believe in the power of teamwork and close collaboration with clients</p>
            </div>
            
            <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <i className="ri-lightbulb-line"></i>
                </div>
                <h4>Innovation</h4>
                <p>We constantly explore new technologies and approaches to solve problems</p>
            </div>
            
            <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <i className="ri-user-line"></i>
                </div>
                <h4>Client Focus</h4>
                <p>Our clients' success is our success - we're committed to their growth</p>
            </div>
            
            <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <i className="ri-time-line"></i>
                </div>
                <h4>Reliability</h4>
                <p>We deliver on our promises and maintain the highest standards of reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2>Ready to Work with Our Team?</h2>
              <p>
                Let's discuss your project and see how our team can help you achieve your goals. 
                Get in touch to start the conversation.
              </p>
              <a href="/contact" className="btn btn-primary btn-lg">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
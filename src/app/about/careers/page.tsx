import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | InboxTales - Digital Agency',
  description: 'Join our team at InboxTales. We\'re looking for passionate professionals who want to create innovative digital solutions and grow with us.',
  keywords: 'careers, jobs, employment, work at InboxTales, digital agency careers, technology jobs',
};

export default function CareersPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="section-title-brand mb-4">Join Our Team</h1>
              <p className="brand-text mb-8">Build amazing digital solutions with passionate professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="brand-heading mb-4">Why Work at InboxTales?</h2>
              <p className="brand-text mb-4">
                At InboxTales, we believe in creating an environment where talented professionals can thrive, innovate, and grow. We're passionate about technology and its power to transform businesses.
              </p>
              <p className="brand-text mb-4">
                Join a team that values creativity, collaboration, and continuous learning. Work on exciting projects that challenge you and make a real impact.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="statsGrid">
                <div className="statCard"><h3>Flexible</h3><p>Work Environment</p></div>
                <div className="statCard"><h3>Growth</h3><p>Opportunities</p></div>
                <div className="statCard"><h3>Innovative</h3><p>Projects</p></div>
                <div className="statCard"><h3>Collaborative</h3><p>Team Culture</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-8">
              <h2 className="section-title-brand mb-2">Benefits & Perks</h2>
              <p className="brand-text">What makes working at InboxTales special</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="benefitCard">
                <div className="benefitIcon"><i className="ri-home-line"></i></div>
                <h4 className="brand-heading">Remote Work</h4>
                <p className="brand-text">Work from anywhere with our flexible remote work policy</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="benefitCard">
                <div className="benefitIcon"><i className="ri-time-line"></i></div>
                <h4 className="brand-heading">Flexible Hours</h4>
                <p className="brand-text">Work when you're most productive with flexible scheduling</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="benefitCard">
                <div className="benefitIcon"><i className="ri-book-open-line"></i></div>
                <h4 className="brand-heading">Learning Budget</h4>
                <p className="brand-text">Annual budget for courses, conferences, and professional development</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="benefitCard">
                <div className="benefitIcon"><i className="ri-team-line"></i></div>
                <h4 className="brand-heading">Team Events</h4>
                <p className="brand-text">Regular team building events and social activities</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="benefitCard">
                <div className="benefitIcon"><i className="ri-heart-line"></i></div>
                <h4 className="brand-heading">Health Benefits</h4>
                <p className="brand-text">Comprehensive health insurance and wellness programs</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="benefitCard">
                <div className="benefitIcon"><i className="ri-money-dollar-circle-line"></i></div>
                <h4 className="brand-heading">Competitive Pay</h4>
                <p className="brand-text">Attractive compensation packages with performance bonuses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-8">
              <h2 className="section-title-brand mb-2">Open Positions</h2>
              <p className="brand-text">Current opportunities to join our team</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="positionCard">
                <h3 className="brand-heading">Senior Full-Stack Developer</h3>
                <p className="brand-text location">Remote / Full-time</p>
                <p className="brand-text description">
                  We're looking for an experienced full-stack developer to join our team. You'll work on exciting projects using modern technologies like React, Node.js, and cloud platforms.
                </p>
                <div className="requirements">
                  <h5 className="brand-heading">Requirements:</h5>
                  <ul className="brand-text">
                    <li>5+ years of experience in full-stack development</li>
                    <li>Proficiency in React, Node.js, and modern web technologies</li>
                    <li>Experience with cloud platforms (AWS, Azure, or GCP)</li>
                    <li>Strong problem-solving and communication skills</li>
                  </ul>
                </div>
                <a href="/contact" className="theme-btn btn-brand">Apply Now</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="positionCard">
                <h3 className="brand-heading">UX/UI Designer</h3>
                <p className="brand-text location">Remote / Full-time</p>
                <p className="brand-text description">
                  Join our design team to create beautiful and intuitive user experiences. You'll work on web and mobile applications, collaborating closely with developers and product managers.
                </p>
                <div className="requirements">
                  <h5 className="brand-heading">Requirements:</h5>
                  <ul className="brand-text">
                    <li>3+ years of experience in UX/UI design</li>
                    <li>Proficiency in Figma, Sketch, or similar tools</li>
                    <li>Strong portfolio showcasing web and mobile designs</li>
                    <li>Experience with user research and testing</li>
                  </ul>
                </div>
                <a href="/contact" className="theme-btn btn-brand">Apply Now</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="positionCard">
                <h3 className="brand-heading">DevOps Engineer</h3>
                <p className="brand-text location">Remote / Full-time</p>
                <p className="brand-text description">
                  Join our engineering team to build and maintain scalable infrastructure. You'll automate deployments, monitor systems, and ensure high availability.
                </p>
                <div className="requirements">
                  <h5 className="brand-heading">Requirements:</h5>
                  <ul className="brand-text">
                    <li>3+ years of experience in DevOps or SRE roles</li>
                    <li>Experience with CI/CD, Docker, and Kubernetes</li>
                    <li>Cloud experience (AWS, Azure, or GCP)</li>
                    <li>Strong scripting and automation skills</li>
                  </ul>
                </div>
                <a href="/contact" className="theme-btn btn-brand">Apply Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 
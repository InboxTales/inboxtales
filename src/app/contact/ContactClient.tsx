"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { SparklesText } from "@/components/ui/SparklesText";
import styles from "./contact.module.css";

const CalWidget = dynamic(() => import("./CalWidget"), { ssr: false });

const services = [
  "Web Development",
  "Digital Marketing",
  "Software Development",
  "UI/UX Design",
  "Content Creation",
  "SEO Services",
  "Social Media Management",
];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Let’s&nbsp;<SparklesText className={styles.heroHighlight} colors={{first:'#FA4616',second:'#FF7A4E'}} sparklesCount={12}>Talk</SparklesText>
        </h1>
        <p className={styles.heroSubtitle}>
          We love turning ambitious ideas into stunning digital experiences. Pick a
          slot or drop us a message—your journey starts here.
        </p>
      </section>

      {/* Contact Form FIRST */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Send Us a Message</h2>
        <div className="container">
          {submitted ? (
            <p className={styles.success}>
              🎉 Thank you! We'll get back to you shortly.
            </p>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div>
                  <label className={styles.formLabel} htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    className={styles.formInput}
                    id="first-name"
                    type="text"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className={styles.formLabel} htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    className={styles.formInput}
                    id="last-name"
                    type="text"
                    placeholder="Doe"
                    required
                  />
                </div>
                <div>
                  <label className={styles.formLabel} htmlFor="email">
                    Email
                  </label>
                  <input
                    className={styles.formInput}
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className={styles.formLabel} htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className={styles.formInput}
                    id="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <label className={styles.formLabel} htmlFor="company">
                  Company Name
                </label>
                <input
                  className={styles.formInput}
                  id="company"
                  type="text"
                  placeholder="Awesome Inc."
                />
              </div>

              <div style={{ marginTop: 24 }}>
                <label className={styles.formLabel} htmlFor="service">
                  Select a Service
                </label>
                <select id="service" className={styles.formSelect} required>
                  <option value="">Choose...</option>
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginTop: 24 }}>
                <label className={styles.formLabel} htmlFor="message">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  className={styles.formTextarea}
                  rows={5}
                  placeholder="The more details you share, the better we can help!"
                  required
                ></textarea>
              </div>

              <div style={{ marginTop: 32, textAlign: "center" }}>
                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Cal.com Scheduler */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Or Book a 15-Minute Call</h2>
        <div className="container">
          <CalWidget />
        </div>
      </section>

      {/* Contact Info */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact Information</h2>
        <div className="container">
          <div className={styles.card} style={{ maxWidth: 600, margin: "0 auto" }}>
            <ul>
              <li>
                <strong>Email:</strong> info@inboxtales.com
              </li>
              <li>
                <strong>Phone:</strong> +91 9640470432
              </li>
              <li>
                <strong>Address:</strong> Western Enclave #102,<br /> Ameerpet, Nagarjuna
                Nagar Colony, Yella Reddy Guda, Hyderabad, Telangana 500073
              </li>
            </ul>
            <h3 style={{ marginTop: 24 }}>Working Hours</h3>
            <ul>
              <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
              <li>Saturday: 10:00 AM – 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* End */}
    </main>
  );
} 
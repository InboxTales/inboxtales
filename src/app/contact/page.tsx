import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with InboxTales for your digital transformation needs. Contact us for web development, digital marketing, SAP integration, and more.",
  keywords: ["contact InboxTales", "get quote", "digital transformation consulting", "web development contact", "business inquiry"],
  openGraph: {
    title: "Contact Us | InboxTales",
    description: "Get in touch with InboxTales for your digital transformation needs. Contact us for web development, digital marketing, SAP integration, and more.",
    images: ["/images/logos/logo.png"],
  },
}

export default function ContactPage() {
  return (
    <main>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-5">Contact Us</h1>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <p className="lead text-center mb-5">
                  Ready to start your digital transformation journey? Get in touch with us today.
                </p>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Get in Touch</h3>
                        <p>Ready to discuss your project? We'd love to hear from you.</p>
                        <ul className="list-unstyled">
                          <li><strong>Email:</strong> info@inboxtales.com</li>
                          <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                          <li><strong>Address:</strong> 123 Business St, Suite 100<br/>City, State 12345</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Business Hours</h3>
                        <p>We're here to help during these hours:</p>
                        <ul className="list-unstyled">
                          <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</li>
                          <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM</li>
                          <li><strong>Sunday:</strong> Closed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        <h3>Send us a Message</h3>
                        <form>
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="firstName" className="form-label">First Name</label>
                              <input type="text" className="form-control" id="firstName" required />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label htmlFor="lastName" className="form-label">Last Name</label>
                              <input type="text" className="form-control" id="lastName" required />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" required />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="company" className="form-label">Company</label>
                            <input type="text" className="form-control" id="company" />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="service" className="form-label">Service Interest</label>
                            <select className="form-select" id="service">
                              <option value="">Select a service</option>
                              <option value="web-development">Web App Development</option>
                              <option value="digital-marketing">Digital Marketing</option>
                              <option value="sap-integration">SAP Enterprise Integration</option>
                              <option value="cybersecurity">Cybersecurity Audits</option>
                              <option value="design-multimedia">Design & Multimedia</option>
                              <option value="whatsapp-automation">WhatsApp Automation</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows={5} required></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
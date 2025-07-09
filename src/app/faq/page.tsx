import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about InboxTales services including web development, digital marketing, SAP integration, and cybersecurity audits.",
  keywords: ["FAQ", "frequently asked questions", "InboxTales services", "web development FAQ", "digital marketing questions"],
  openGraph: {
    title: "Frequently Asked Questions | InboxTales",
    description: "Find answers to common questions about InboxTales services including web development, digital marketing, SAP integration, and cybersecurity audits.",
    images: ["/images/logos/logo.png"],
  },
}

export default function FAQPage() {
  const faqs = [
    {
      question: "What services does InboxTales offer?",
      answer: "InboxTales offers a comprehensive range of digital transformation services including web app development, digital marketing, SAP enterprise integration, cybersecurity audits, design & multimedia, and WhatsApp automation."
    },
    {
      question: "How long does a typical web development project take?",
      answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during the planning phase."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer various support and maintenance packages to ensure your digital solutions continue to perform optimally. This includes regular updates, monitoring, and technical support."
    },
    {
      question: "What technologies do you use for web development?",
      answer: "We use modern, industry-standard technologies including React, Vue.js, Angular for frontend; Node.js, Python, PHP, Java for backend; and cloud platforms like AWS, Azure, and Google Cloud."
    },
    {
      question: "How do you ensure the security of our data?",
      answer: "We implement industry best practices for data security including encryption, secure coding practices, regular security audits, and compliance with relevant data protection regulations."
    },
    {
      question: "Can you help with existing systems integration?",
      answer: "Absolutely! We specialize in integrating new solutions with existing systems. Our team has extensive experience with various enterprise systems and can ensure seamless integration."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on the scope, complexity, and requirements. We provide detailed quotes after understanding your specific needs and project requirements."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we work with clients globally and have experience in managing international projects. We can accommodate different time zones and provide remote collaboration tools."
    }
  ]

  return (
    <main>
      <section className="py-20 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="section-title-brand mb-8">Frequently Asked Questions</h1>
              <p className="brand-text mb-12">Find answers to common questions about our services</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="brandAccordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="brandAccordionItem mb-4">
                    <button 
                      className="brandAccordionButton brand-text-medium text-left w-full py-4 px-6 bg-neutral-50 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                      type="button"
                      aria-expanded="false"
                      aria-controls={`faq-content-${index}`}
                      data-faq-toggle={`faq-content-${index}`}
                    >
                      {faq.question}
                    </button>
                    <div 
                      id={`faq-content-${index}`}
                      className="brandAccordionContent hidden px-6 py-4 bg-white rounded-b-lg border-t border-neutral-200"
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <div className="brand-text">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="brand-text">Still have questions? We're here to help!</p>
                <a href="/contact" className="theme-btn btn-brand mt-2">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 
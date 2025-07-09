'use client'
import { useState } from "react"
import Image from "next/image"
import SectionTitle from "@/components/ui/sectionTitle"
import SlideUp from "@/utils/animations/slideUp"

const services = [
  {
    id: 1,
    name: "Web App Development",
    icon: "ri-code-s-slash-line",
    content: "Custom web applications that scale with your business. From MVPs to enterprise solutions, we build robust platforms that drive growth and efficiency.",
    features: ["React/Next.js Development", "Full-Stack Solutions", "API Integration", "Performance Optimization"],
    img: "/images/services/service1.jpg"
  },
  {
    id: 2,
    name: "Brand & Performance Marketing",
    icon: "ri-megaphone-line",
    content: "Strategic marketing that builds your brand and drives measurable results. We create campaigns that connect with your audience and convert.",
    features: ["SEO & Content Strategy", "Social Media Marketing", "PPC & Google Ads", "Brand Identity"],
    img: "/images/services/service2.jpg"
  },
  {
    id: 3,
    name: "WhatsApp Automation",
    icon: "ri-message-3-line",
    content: "Intelligent automation solutions that streamline customer engagement and boost productivity. Transform your communication with smart workflows.",
    features: ["Chatbot Development", "Workflow Automation", "CRM Integration", "Analytics & Reporting"],
    img: "/images/services/service3.jpg"
  },
  {
    id: 4,
    name: "Enterprise Integrations",
    icon: "ri-settings-3-line",
    content: "Seamless SAP/CRM integrations that connect your systems and optimize workflows. We bridge the gap between your existing tools and new possibilities.",
    features: ["SAP Implementation", "CRM Integration", "Data Migration", "Custom APIs"],
    img: "/images/services/service1.jpg"
  }
]

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0])

  return (
    <section id="service" className="info-service-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <SectionTitle>
              <SectionTitle.Name>Services</SectionTitle.Name>
              <SectionTitle.Title>What We Do Best</SectionTitle.Title>
              <SectionTitle.Description>From MVPs to CRM integrations, we make it work beautifully.</SectionTitle.Description>
            </SectionTitle>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="services-tabs">
              {services.map((service) => (
                <SlideUp key={service.id} delay={service.id}>
                  <div 
                    className={`service-tab ${selectedService.id === service.id ? 'active' : ''}`}
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="tab-icon">
                      <i className={service.icon}></i>
                    </div>
                    <div className="tab-content">
                      <h4>{service.name}</h4>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>
          
          <div className="col-lg-8 col-md-12">
            <SlideUp delay={selectedService.id + 10}>
              <div className="service-details">
                {/* <div className="service-image">
                  <Image 
                    width={300} 
                    height={180} 
                    src={selectedService.img} 
                    style={{width:"100%", height:"140px", objectFit:"cover"}} 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                    alt={selectedService.name} 
                  />
                </div> */}
                <div className="service-info">
                  <h3>{selectedService.name}</h3>
                  <p>{selectedService.content}</p>
                  <div className="service-features">
                    <h5>What&apos;s included:</h5>
                    <ul>
                      {selectedService.features.map((feature, index) => (
                        <li key={index}>
                          <i className="ri-check-line"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href="/contact" className="theme-btn">Get Started</a>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .info-service-area {
          background: #1f2328;
          color: #fafafa;
          padding: 72px 0 56px 0;
        }
        .services-tabs {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .service-tab {
          display: flex;
          align-items: center;
          padding: 1.5rem;
          border: 2px solid transparent;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          background: #23262a;
          color: #fafafa;
        }
        
        .service-tab:hover {
          border-color: var(--color-brand-primary);
          transform: translateX(8px);
        }
        
        .service-tab.active {
          border-color: #fa4616;
          background: linear-gradient(135deg, #fa4616 0%, #e03d12 100%);
          color: #fafafa;
          transform: translateX(8px);
        }
        
        .tab-icon {
          font-size: 2rem;
          margin-right: 1rem;
          color: #fa4616;
        }
        
        .service-tab.active .tab-icon {
          color: #fafafa;
        }
        
        .tab-content h4 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: inherit;
        }
        
        .service-details {
          background: #23262a;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          height: 100%;
        }
        
        .service-image {
          position: relative;
          overflow: hidden;
          height: 140px;
        }
        
        .service-info {
          padding: 1.5rem;
        }
        
        .service-info h3 {
          color: #fafafa;
          margin-bottom: 0.75rem;
          font-size: 1.5rem;
        }
        
        .service-info p {
          color: #e0e0e0;
          line-height: 1.5;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }
        
        .service-features {
          margin-bottom: 1.5rem;
        }
        
        .service-features h5 {
          color: #fafafa;
          margin-bottom: 0.75rem;
          font-size: 1rem;
        }
        
        .service-features ul {
          list-style: none;
          padding: 0;
        }
        
        .service-features li {
          display: flex;
          align-items: center;
          margin-bottom: 0.4rem;
          color: #e0e0e0;
          font-size: 0.9rem;
        }
        
        .service-features li i {
          color: #fa4616;
          margin-right: 0.5rem;
          font-size: 1rem;
        }
        
        .theme-btn {
          background: #fa4616;
          color: #fff;
          border: none;
        }
        
        .theme-btn:hover {
          background: #e03d12;
          color: #fff;
        }
        
        @media (max-width: 991px) {
          .services-tabs {
            flex-direction: row;
            overflow-x: auto;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
          }
          
          .service-tab {
            min-width: 200px;
            flex-shrink: 0;
            padding: 1rem;
          }
          
          .tab-content h4 {
            font-size: 1rem;
          }
          
          .tab-icon {
            font-size: 1.5rem;
            margin-right: 0.75rem;
          }
        }
        
        @media (max-width: 767px) {
          .service-tab {
            min-width: 160px;
            padding: 0.75rem;
          }
          
          .tab-content h4 {
            font-size: 0.9rem;
          }
          
          .tab-icon {
            font-size: 1.25rem;
            margin-right: 0.5rem;
          }
          
          .service-info {
            padding: 1.25rem;
          }
          
          .service-info h3 {
            font-size: 1.3rem;
          }
          
          .service-image {
            height: 120px;
          }
        }
        
        @media (max-width: 575px) {
          .service-tab {
            min-width: 140px;
            padding: 0.5rem;
          }
          
          .tab-content h4 {
            font-size: 0.8rem;
          }
          
          .tab-icon {
            font-size: 1rem;
            margin-right: 0.25rem;
          }
          
          .service-info {
            padding: 1rem;
          }
          
          .service-info h3 {
            font-size: 1.2rem;
          }
          
          .service-image {
            height: 100px;
          }
        }
      `}</style>
    </section>
  )
}

export default Services
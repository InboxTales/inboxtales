import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Web App Development",
  description: "Custom web application development services by InboxTales. We build scalable, secure, and high-performance web applications using modern technologies and best practices.",
  keywords: ["web app development", "custom web applications", "web development services", "full-stack development", "web application design", "modern web apps"],
  openGraph: {
    title: "Web App Development | InboxTales",
    description: "Custom web application development services by InboxTales. We build scalable, secure, and high-performance web applications using modern technologies and best practices.",
    images: ["/images/logos/logo.png"],
  },
}

export default function WebAppDevelopmentPage() {
  return (
    <main>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-5">Web App Development</h1>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <p className="lead text-center mb-5">
                  Custom web applications built with modern technologies and best practices
                </p>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Frontend Development</h3>
                        <p>Modern, responsive user interfaces built with React, Vue.js, and Angular. We focus on performance, accessibility, and user experience.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Backend Development</h3>
                        <p>Robust server-side applications using Node.js, Python, PHP, and Java. Scalable architecture with secure APIs and database design.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Full-Stack Solutions</h3>
                        <p>End-to-end web applications with seamless frontend and backend integration. Complete solutions from concept to deployment.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Cloud Deployment</h3>
                        <p>Deploy your web applications on AWS, Azure, or Google Cloud. We handle infrastructure setup, CI/CD pipelines, and monitoring.</p>
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
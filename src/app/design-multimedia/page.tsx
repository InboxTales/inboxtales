import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Design & Multimedia",
  description: "Creative design and multimedia services by InboxTales. From graphic design and branding to video production and 3D animation, we bring your vision to life.",
  keywords: ["graphic design", "multimedia design", "branding", "video production", "3D animation", "creative design services"],
  openGraph: {
    title: "Design & Multimedia | InboxTales",
    description: "Creative design and multimedia services by InboxTales. From graphic design and branding to video production and 3D animation, we bring your vision to life.",
    images: ["/images/logos/logo.png"],
  },
}

export default function DesignMultimediaPage() {
  return (
    <main>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-5">Design & Multimedia</h1>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <p className="lead text-center mb-5">
                  Creative design solutions that bring your brand to life
                </p>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Graphic Design</h3>
                        <p>Professional graphic design services including logos, brochures, business cards, and marketing materials. We create visually appealing designs that represent your brand.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Branding & Identity</h3>
                        <p>Complete branding solutions including brand strategy, visual identity design, and brand guidelines. We help you establish a strong, memorable brand presence.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>Video Production</h3>
                        <p>Professional video production services including corporate videos, promotional content, and social media videos. We handle everything from concept to final delivery.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>3D Animation</h3>
                        <p>High-quality 3D animation and visualization services. From product demonstrations to architectural walkthroughs, we create engaging 3D content.</p>
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
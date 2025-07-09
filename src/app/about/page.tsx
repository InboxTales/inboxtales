import type { Metadata } from 'next'
import About from '@/components/sections/about'

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about InboxTales - a leading digital transformation company dedicated to delivering innovative solutions and exceptional results for businesses worldwide.",
  keywords: ["about InboxTales", "digital transformation company", "technology innovation", "custom solutions", "business transformation"],
  openGraph: {
    title: "About Us | InboxTales",
    description: "Learn about InboxTales - a leading digital transformation company dedicated to delivering innovative solutions and exceptional results for businesses worldwide.",
    images: ["/images/logos/logo.png"],
  },
}

export default function AboutPage() {
  return (
    <main>
      <section className="py-20 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="section-title-brand mb-8">About InboxTales</h1>
            </div>
          </div>
        </div>
        <About />
      </section>
    </main>
  )
} 
import About from '@/components/sections/about'
import Booking from '@/components/sections/booking'
import Faqs from '@/components/sections/faqs'
import Features from '@/components/sections/features'
import Hero from '@/components/sections/hero'
import Partners from '@/components/sections/partners'
import Projects from '@/components/sections/projects'
import RecentProjects from '@/components/sections/recentProjects'
import Services from '@/components/sections/services'
// import Testimonials from '@/components/sections/testimonials'
import WorkingProcess from '@/components/sections/workingProcess'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "InboxTales - Turn Ideas into Digital Success Stories",
  description: "Build websites, apps & marketing systems that spark business growth. Every inbox is the start of a success story with InboxTales.",
  keywords: ["web app development", "digital marketing", "WhatsApp automation", "SAP integration", "UI/UX design", "digital transformation", "business solutions"],
  openGraph: {
    title: "InboxTales - Turn Ideas into Digital Success Stories",
    description: "Build websites, apps & marketing systems that spark business growth. Every inbox is the start of a success story with InboxTales.",
    images: ["/images/logos/logo.png"],
  },
}

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      {/* <WorkingProcess /> */}
      <Services />
      {/* <Projects /> */}
      {/* <RecentProjects /> */}
      {/* <Partners /> */}
      {/* <Features /> */}
      <Faqs />
      {/* <Booking /> */}
    </main>
  )
}

export default Home
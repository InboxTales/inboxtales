import type { Metadata } from "next";
import "./globals.css";
import Preloader from "@/components/ui/preloader";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ScrollToTop from "@/components/sections/scrollToTop";
import BootstrapForBrowser from "@/components/sections/bootstrapForBrowser";
import ScrollToTopHandler from "@/components/sections/scrollToTopHandler";
import LenisProvider from "@/components/sections/LenisProvider";

export const metadata: Metadata = {
  title: {
    default: "InboxTales - Digital Transformation & Custom Solutions",
    template: "%s | InboxTales"
  },
  description: "InboxTales delivers cutting-edge digital transformation solutions, custom software development, and innovative technology services to drive your business forward.",
  keywords: ["InboxTales", "digital transformation", "custom solutions", "software development", "technology services", "innovation"],
  authors: [{ name: "InboxTales" }],
  creator: "InboxTales",
  publisher: "InboxTales",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inboxtales.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'InboxTales - Digital Transformation & Custom Solutions',
    description: 'InboxTales delivers cutting-edge digital transformation solutions, custom software development, and innovative technology services to drive your business forward.',
    siteName: 'InboxTales',
    images: [
      {
        url: '/images/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'InboxTales Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InboxTales - Digital Transformation & Custom Solutions',
    description: 'InboxTales delivers cutting-edge digital transformation solutions, custom software development, and innovative technology services to drive your business forward.',
    images: ['/images/logos/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "InboxTales",
              "url": "https://www.inboxtales.com",
              "logo": "https://www.inboxtales.com/images/logos/logo.png",
              "description": "InboxTales delivers cutting-edge digital transformation solutions, custom software development, and innovative technology services to drive your business forward.",
              "foundingDate": "2024",
              "sameAs": [
                "https://www.linkedin.com/company/inboxtales",
                "https://twitter.com/inboxtales",
                "https://www.facebook.com/inboxtales"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@inboxtales.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <LenisProvider>
          <BootstrapForBrowser />
          <Preloader />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <ScrollToTopHandler />
        </LenisProvider>
      </body>
    </html>
  );
}

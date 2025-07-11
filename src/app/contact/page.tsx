import type { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamically import client component to avoid SSR issues
const ContactClient = dynamic(() => import("./ContactClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Contact Us | InboxTales",
  description:
    "Get in touch with InboxTales for web development, digital marketing, and more. Let's craft your next success story together!",
};

export default function ContactPage() {
  return <ContactClient />;
} 
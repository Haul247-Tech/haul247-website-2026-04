import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { ContactPageHero } from "@/components/contact-page-hero";

export const metadata: Metadata = {
  title: "Contact Us — Speak to a Logistics Advisor",
  description:
    "Get in touch with the Haul247 team. Call 09010003247, email service@haul247.co, or complete our contact form to discuss your haulage and warehousing needs.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Haul247 — Speak to a Logistics Advisor",
    description:
      "Get in touch with the Haul247 team. Call 09010003247, email service@haul247.co, or complete our contact form.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#FFFFFF]">
      <ContactPageHero />
      <section className="mx-auto py-10 w-full max-w-6xl px-6 bg-[#FFFFFF]">
        <ContactForm />
      </section>
    </main>
  );
}

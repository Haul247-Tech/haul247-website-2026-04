import type { Metadata } from "next";
import PortClient from "./_client";

export const metadata: Metadata = {
  title: "Port Operations — Structured Container & Cargo Logistics",
  description:
    "Haul247 delivers structured port logistics for containerized goods, bulk cargo, and break-bulk across Apapa, Tin Can, and Onne ports in Nigeria.",
  alternates: { canonical: "/solutions/port" },
  openGraph: {
    title: "Haul247 Port Operations — Structured Container & Cargo Logistics",
    description:
      "Structured port logistics for containerized goods, bulk cargo, and break-bulk across Apapa, Tin Can, and Onne ports.",
    url: "/solutions/port",
    images: [{ url: "/images/po01.jpg", width: 1200, height: 630, alt: "Port operations and container logistics" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://haul247.co" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://haul247.co/solutions" },
    { "@type": "ListItem", position: 3, name: "Port Operations", item: "https://haul247.co/solutions/port" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Port Operations Services",
  provider: { "@type": "Organization", name: "Haul247", url: "https://haul247.co" },
  description:
    "Structured port logistics for containerized goods, bulk cargo, and break-bulk across major Nigerian ports.",
  areaServed: { "@type": "Country", name: "Nigeria" },
  serviceType: "Port Logistics",
};

export default function PortPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PortClient />
    </>
  );
}

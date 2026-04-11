import type { Metadata } from "next";
import HaulageClient from "./_client";

export const metadata: Metadata = {
  title: "Haulage Services — Structured Road Freight Across Nigeria",
  description:
    "Reliable haulage through a vetted truck network with real-time tracking, controlled dispatch, secure handling, and insurance coverage from dispatch to delivery.",
  alternates: { canonical: "/solutions/haulage" },
  openGraph: {
    title: "Haul247 Haulage Services — Structured Road Freight",
    description:
      "Reliable haulage through a vetted truck network with real-time tracking, controlled dispatch, and insurance coverage.",
    url: "/solutions/haulage",
    images: [{ url: "/images/hu02.jpg", width: 1200, height: 630, alt: "Trucks operating on a highway" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://haul247.co" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://haul247.co/solutions" },
    { "@type": "ListItem", position: 3, name: "Haulage Services", item: "https://haul247.co/solutions/haulage" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Haulage Services",
  provider: { "@type": "Organization", name: "Haul247", url: "https://haul247.co" },
  description:
    "Reliable road freight haulage through a coordinated network of vetted trucks with real-time tracking, controlled dispatch, and insurance coverage.",
  areaServed: { "@type": "Country", name: "Nigeria" },
  serviceType: "Road Freight Haulage",
};

export default function HaulagePage() {
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
      <HaulageClient />
    </>
  );
}

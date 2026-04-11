import type { Metadata } from "next";
import DedicatedClient from "./_client";

export const metadata: Metadata = {
  title: "Dedicated Assets — Long-Term Fleet & Warehouse Deployment",
  description:
    "Haul247 provides dedicated trucks and warehouse space under long-term structured agreements, giving businesses reliable, exclusive logistics capacity.",
  alternates: { canonical: "/solutions/dedicated" },
  openGraph: {
    title: "Haul247 Dedicated Assets — Long-Term Fleet & Warehouse Deployment",
    description:
      "Dedicated trucks and warehouse space under long-term structured agreements for reliable, exclusive logistics capacity.",
    url: "/solutions/dedicated",
    images: [{ url: "/images/da01.jpg", width: 1200, height: 630, alt: "Dedicated assets fleet deployment" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://haul247.co" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://haul247.co/solutions" },
    { "@type": "ListItem", position: 3, name: "Dedicated Assets", item: "https://haul247.co/solutions/dedicated" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dedicated Assets Services",
  provider: { "@type": "Organization", name: "Haul247", url: "https://haul247.co" },
  description:
    "Dedicated trucks and warehouse space under long-term structured agreements for businesses requiring exclusive logistics capacity.",
  areaServed: { "@type": "Country", name: "Nigeria" },
  serviceType: "Dedicated Logistics Assets",
};

export default function DedicatedPage() {
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
      <DedicatedClient />
    </>
  );
}

import type { Metadata } from "next";
import WarehouseClient from "./_client";

export const metadata: Metadata = {
  title: "Warehouse Services — Managed Storage Solutions Across Nigeria",
  description:
    "Haul247 provides warehousing solutions tailored to different cargo requirements with structured inventory management, real-time visibility, and operational oversight.",
  alternates: { canonical: "/solutions/warehouse" },
  openGraph: {
    title: "Haul247 Warehouse Services — Managed Storage Solutions",
    description:
      "Warehousing solutions tailored to different cargo requirements with structured inventory management and real-time visibility.",
    url: "/solutions/warehouse",
    images: [{ url: "/images/wh01.jpg", width: 1200, height: 630, alt: "Organised warehouse with inventory aisles" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://haul247.co" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://haul247.co/solutions" },
    { "@type": "ListItem", position: 3, name: "Warehouse Services", item: "https://haul247.co/solutions/warehouse" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Warehouse Services",
  provider: { "@type": "Organization", name: "Haul247", url: "https://haul247.co" },
  description:
    "Warehousing solutions tailored to different cargo requirements with structured inventory management and real-time operational visibility.",
  areaServed: { "@type": "Country", name: "Nigeria" },
  serviceType: "Warehouse Management",
};

export default function WarehousePage() {
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
      <WarehouseClient />
    </>
  );
}

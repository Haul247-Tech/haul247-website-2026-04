import type { Metadata } from "next";
import SolutionsClient from "./_client";

export const metadata: Metadata = {
  title: "Our Solutions — Haulage, Warehousing, Port & Dedicated Assets",
  description:
    "Explore Haul247's full logistics suite: structured haulage, warehouse management, dedicated assets, and port operations across Nigeria.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Haul247 Solutions — Haulage, Warehousing, Port & Dedicated Assets",
    description:
      "Explore Haul247's full logistics suite: structured haulage, warehouse management, dedicated assets, and port operations.",
    url: "/solutions",
    images: [{ url: "/images/solHr1.jpg", width: 1200, height: 630, alt: "Haul247 logistics solutions" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://haul247.co" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://haul247.co/solutions" },
  ],
};

export default function SolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SolutionsClient />
    </>
  );
}

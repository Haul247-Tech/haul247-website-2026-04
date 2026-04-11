import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { AppToaster } from "@/components/app-toaster";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFab } from "@/components/whatsapp-fab";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-plex-sans"
});

const SITE_URL = "https://haul247.co";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1C4863",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Haul247",
    default: "Haul247 — Africa's Leading Logistics & Haulage Platform",
  },
  description:
    "Haul247 connects businesses to vetted trucks, managed warehouses, and port operations across Africa. Structured logistics, real-time tracking, and 97.99% on-time delivery.",
  keywords: [
    "haulage",
    "logistics",
    "warehousing",
    "truck haulage Nigeria",
    "port operations",
    "supply chain Africa",
    "freight logistics",
    "dedicated assets",
    "Haul247",
    "Lagos logistics",
  ],
  openGraph: {
    siteName: "Haul247",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/solHr1.jpg",
        width: 1200,
        height: 630,
        alt: "Haul247 — Africa's Leading Logistics & Haulage Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@haul247",
    creator: "@haul247",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Haul247",
  url: SITE_URL,
  logo: `${SITE_URL}/images/whiteLogo.png`,
  description:
    "Haul247 is Africa's leading provider of enabling infrastructure powering the sourcing and distribution of physical goods and commodities.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Engineering Close",
    addressLocality: "Victoria Island",
    addressRegion: "Lagos",
    postalCode: "106104",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+2349010003247",
    contactType: "customer service",
    email: "service@haul247.co",
    areaServed: "NG",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.instagram.com/haul247",
    "https://twitter.com/haul247",
    "https://www.facebook.com/haul247",
    "https://www.linkedin.com/company/haul247",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        <AppToaster />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFab />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SparkEffect from "../components/SparkEffect";
import DustEffect from "../components/DustEffect";
import { StickyQuoteCTA } from "../components/ui";

export const metadata: Metadata = {
  metadataBase: new URL("https://gulfcoastmachineservices.com"),
  title: {
    default: "Gulf Coast Machine Services | 24/7 Industrial Equipment Repair",
    template: "%s | Gulf Coast Machine Services",
  },
  description:
    "Industrial machine repair specialists serving the Gulf Coast region. 24/7 emergency response for HVAC, generators, and industrial machinery in Houston, Galveston, and surrounding areas.",
  keywords: [
    "industrial machine repair",
    "Gulf Coast",
    "emergency repair",
    "HVAC repair",
    "generator repair",
    "Houston",
    "Galveston",
    "industrial HVAC",
    "24/7 emergency service",
    "equipment maintenance",
  ],
  authors: [{ name: "Gulf Coast Machine Services" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gulfcoastmachineservices.com",
    siteName: "Gulf Coast Machine Services",
    title: "Gulf Coast Machine Services | 24/7 Industrial Equipment Repair",
    description:
      "Industrial machine repair specialists serving the Gulf Coast region. 24/7 emergency response for HVAC, generators, and industrial machinery.",
    images: [
      {
        url: "/images/Hero1.png",
        width: 1200,
        height: 630,
        alt: "Gulf Coast Machine Services - Industrial Equipment Repair",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gulf Coast Machine Services | 24/7 Industrial Equipment Repair",
    description:
      "Industrial machine repair specialists serving the Gulf Coast region. 24/7 emergency response.",
    images: ["/images/Hero1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://gulfcoastmachineservices.com/#organization",
  name: "Gulf Coast Machine Services",
  description:
    "Industrial machine repair specialists serving the Gulf Coast region with 24/7 emergency response for HVAC, generators, and industrial machinery.",
  url: "https://gulfcoastmachineservices.com",
  telephone: "+1-555-123-4567",
  email: "info@gulfcoastmachines.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Industrial Blvd",
    addressLocality: "Gulf City",
    addressRegion: "TX",
    postalCode: "12345",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.7604,
    longitude: -95.3698,
  },
  areaServed: [
    { "@type": "City", name: "Houston", addressRegion: "TX" },
    { "@type": "City", name: "Galveston", addressRegion: "TX" },
    { "@type": "City", name: "Corpus Christi", addressRegion: "TX" },
    { "@type": "City", name: "Beaumont", addressRegion: "TX" },
    { "@type": "City", name: "Port Arthur", addressRegion: "TX" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  image: "https://gulfcoastmachineservices.com/images/Hero1.png",
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Industrial Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Industrial HVAC Repair",
          description: "Complete repair and maintenance for industrial heating, ventilation, and air conditioning systems.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Generator Repair & Maintenance",
          description: "Commercial and industrial generator installation, repair, and preventive maintenance.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "24/7 Emergency Response",
          description: "Round-the-clock emergency repair services with rapid response times.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <DustEffect />
        <SparkEffect />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyQuoteCTA />
      </body>
    </html>
  );
}

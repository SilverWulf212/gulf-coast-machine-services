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
    default: "Gulf Coast Machine Services, LLC | Oil Field Machining & Mud Motor Components",
    template: "%s | Gulf Coast Machine Services",
  },
  description:
    "Gulf Coast Machine Services has been servicing the oil field for 25+ years in the machining industry. API Licensed Shop with locations in Broussard, LA and Spring, TX. Mud motor components, fishing tools, drilling tools, welding & fabrication.",
  keywords: [
    "oil field machining",
    "mud motor components",
    "API licensed machine shop",
    "fishing tools",
    "drilling tools",
    "stabilizer grinding",
    "Broussard LA",
    "Spring TX",
    "welding fabrication",
    "oil field repair",
  ],
  authors: [{ name: "Gulf Coast Machine Services" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gulfcoastmachineservices.com",
    siteName: "Gulf Coast Machine Services",
    title: "Gulf Coast Machine Services, LLC | Oil Field Machining & Mud Motor Components",
    description:
      "Servicing the oil field for 25+ years. API Licensed Shop in Broussard, LA and Spring, TX. Mud motor components, fishing tools, drilling tools, welding & fabrication.",
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
    title: "Gulf Coast Machine Services, LLC | Oil Field Machining",
    description:
      "Servicing the oil field for 25+ years. API Licensed Shop in Broussard, LA and Spring, TX.",
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
  name: "Gulf Coast Machine Services, LLC",
  description:
    "Servicing the oil field for 25+ years in the machining industry. API Licensed Shop specializing in mud motor components, oil field machining, welding and fabrication.",
  url: "https://gulfcoastmachineservices.com",
  telephone: "+1-337-837-3175",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "436 North Eola",
      addressLocality: "Broussard",
      addressRegion: "LA",
      postalCode: "70570",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "5053 FM 2920 Road",
      addressLocality: "Spring",
      addressRegion: "TX",
      postalCode: "77388",
      addressCountry: "US",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.1462,
    longitude: -91.9587,
  },
  areaServed: [
    { "@type": "City", name: "Broussard", addressRegion: "LA" },
    { "@type": "City", name: "Lafayette", addressRegion: "LA" },
    { "@type": "City", name: "Spring", addressRegion: "TX" },
    { "@type": "City", name: "Houston", addressRegion: "TX" },
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
  sameAs: ["https://www.facebook.com/gulfcoastmachineservices"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Oil Field Machining Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mud Motor Component Repair & Manufacturing",
          description: "Repair and manufacturing of mud motor components for oil field applications.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Oil Field Machining",
          description: "Machining for fishing tools, drilling tools, packers, completion, MWD, LWD, and cementing tools.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Welding & Fabrication",
          description: "Full welding and fabrication services for oil field applications.",
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

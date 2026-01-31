import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Industrial Equipment Repair Questions",
  description:
    "Frequently asked questions about Gulf Coast Machine Services: 24/7 emergency response, service areas, pricing, warranties, and preventive maintenance programs.",
  openGraph: {
    title: "FAQ - Industrial Equipment Repair Questions | Gulf Coast Machine Services",
    description:
      "Frequently asked questions about our industrial equipment repair services, response times, and coverage areas.",
    url: "https://gulfcoastmachineservices.com/faq",
  },
};

// FAQPage Schema for rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you offer 24/7 emergency services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Gulf Coast Machine Services provides 24/7 emergency repair services. We understand that equipment failures can happen at any time, so our team is always ready to respond quickly to minimize your downtime.",
      },
    },
    {
      "@type": "Question",
      name: "What types of equipment do you service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in industrial HVAC systems, commercial generators, industrial machinery, and related equipment. Our technicians are trained to handle a wide range of industrial and commercial equipment repairs and maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you respond to an emergency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For emergency situations, we aim to arrive within 1-2 hours in most Gulf Coast areas. Response times may vary based on location and traffic conditions. We prioritize critical breakdowns to get your operations back online as quickly as possible.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve the entire Gulf Coast region, including Houston, Galveston, Corpus Christi, Beaumont, Port Arthur, and surrounding communities. If you're unsure if we service your specific location, please contact us to confirm.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide estimates before starting work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide detailed estimates for all repair work. For emergency situations, we'll provide an estimate as quickly as possible. We believe in transparent pricing with no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer warranties on your repairs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our repairs come with a comprehensive warranty. The specific warranty terms depend on the type of repair and equipment, but we stand behind our work and want you to be completely satisfied with our services.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide preventive maintenance services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We offer comprehensive preventive maintenance programs designed to keep your equipment running efficiently and prevent costly breakdowns. Regular maintenance can extend equipment life and reduce overall operating costs.",
      },
    },
  ],
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}

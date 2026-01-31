import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial HVAC & Generator Repair Services",
  description:
    "Expert industrial HVAC repair, generator maintenance, and machinery services. 24/7 emergency response across the Gulf Coast. Licensed, insured, and certified technicians.",
  openGraph: {
    title: "Industrial HVAC & Generator Repair Services | Gulf Coast Machine Services",
    description:
      "Expert industrial HVAC repair, generator maintenance, and machinery services with 24/7 emergency response.",
    url: "https://gulfcoastmachineservices.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

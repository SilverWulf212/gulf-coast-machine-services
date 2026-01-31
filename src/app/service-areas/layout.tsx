import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas - Houston, Galveston & Gulf Coast",
  description:
    "Industrial equipment repair across the Gulf Coast: Houston, Galveston, Corpus Christi, Beaumont, Port Arthur. Under 2-hour response time. 50+ cities served.",
  openGraph: {
    title: "Service Areas - Houston, Galveston & Gulf Coast | Gulf Coast Machine Services",
    description:
      "Industrial equipment repair across the Gulf Coast with under 2-hour response time. 50+ cities served.",
    url: "https://gulfcoastmachineservices.com/service-areas",
  },
};

export default function ServiceAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

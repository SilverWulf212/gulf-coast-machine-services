import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - 15+ Years Industrial Expertise",
  description:
    "Gulf Coast Machine Services: 15+ years of industrial equipment expertise. Meet our certified technicians and learn about our commitment to minimizing your downtime.",
  openGraph: {
    title: "About Us - 15+ Years Industrial Expertise | Gulf Coast Machine Services",
    description:
      "Learn about Gulf Coast Machine Services - 15+ years of industrial equipment expertise and certified technicians.",
    url: "https://gulfcoastmachineservices.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

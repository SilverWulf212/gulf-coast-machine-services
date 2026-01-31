import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies - Industrial Repair Success Stories",
  description:
    "Real results from Gulf Coast Machine Services: emergency repairs completed in hours, not days. See how we've helped manufacturing plants, refineries, and industrial facilities.",
  openGraph: {
    title: "Case Studies - Industrial Repair Success Stories | Gulf Coast Machine Services",
    description:
      "Real results: emergency industrial repairs completed in hours. See our success stories.",
    url: "https://gulfcoastmachineservices.com/case-studies",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

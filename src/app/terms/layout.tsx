import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Gulf Coast Machine Services terms of service. Understand our service agreements, warranties, and policies.",
  openGraph: {
    title: "Terms of Service | Gulf Coast Machine Services",
    description: "Understand our service agreements, warranties, and policies.",
    url: "https://gulfcoastmachineservices.com/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

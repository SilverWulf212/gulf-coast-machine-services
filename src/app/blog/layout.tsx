import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Industrial Maintenance Tips & Insights",
  description:
    "Expert insights on industrial equipment maintenance, HVAC systems, generator care, and emergency repair best practices from Gulf Coast Machine Services.",
  openGraph: {
    title: "Blog - Industrial Maintenance Tips & Insights | Gulf Coast Machine Services",
    description:
      "Expert insights on industrial equipment maintenance, HVAC systems, and generator care.",
    url: "https://gulfcoastmachineservices.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

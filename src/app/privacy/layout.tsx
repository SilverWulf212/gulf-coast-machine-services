import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Gulf Coast Machine Services privacy policy. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Gulf Coast Machine Services",
    description: "Learn how we collect, use, and protect your personal information.",
    url: "https://gulfcoastmachineservices.com/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

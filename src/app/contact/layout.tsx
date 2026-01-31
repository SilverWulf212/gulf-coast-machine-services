import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - 24/7 Emergency Response",
  description:
    "Contact Gulf Coast Machine Services for industrial equipment repair. 24/7 emergency hotline: (555) 123-4567. Serving Houston, Galveston, and the Gulf Coast region.",
  openGraph: {
    title: "Contact Us - 24/7 Emergency Response | Gulf Coast Machine Services",
    description:
      "Contact Gulf Coast Machine Services for industrial equipment repair. 24/7 emergency hotline available.",
    url: "https://gulfcoastmachineservices.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

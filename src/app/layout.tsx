import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SparkEffect from "../components/SparkEffect";
import DustEffect from "../components/DustEffect";

export const metadata: Metadata = {
  title: "Gulf Coast Machine Services | 24/7 Industrial Equipment Repair",
  description: "Industrial machine repair specialists serving the Gulf Coast region. 24/7 emergency response for HVAC, generators, and industrial machinery.",
  keywords: "industrial machine repair, Gulf Coast, emergency repair, HVAC, generators, Houston, Galveston",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <DustEffect />
        <SparkEffect />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

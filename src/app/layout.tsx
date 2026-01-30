import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gulf Coast Machine Services - 24/7 Emergency Machine Repair",
  description: "Providing rapid, reliable, and expert machine services to the Gulf Coast region, 24/7. Emergency machine repair, industrial HVAC, commercial generators, and more.",
  keywords: "emergency machine repair Gulf Coast, 24/7 HVAC services, industrial machine maintenance Gulf Coast, commercial equipment repair near me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

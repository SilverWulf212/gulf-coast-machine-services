"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/ui";

export default function Privacy() {
  return (
    <div className="bg-[var(--black)] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-1/2 h-full gradient-glow" />

        <div className="relative max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-[var(--warning)]" />
            <span className="text-mono text-xs text-[var(--warning)] uppercase tracking-widest">
              Legal
            </span>
          </div>
          <h1 className="text-display text-5xl sm:text-6xl text-[var(--cream)] leading-[0.9] mb-6">
            Privacy<br />
            <span className="text-[var(--warning)]">Policy</span>
          </h1>
          <p className="text-[var(--cream)]/60 text-sm">
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-invert max-w-none space-y-12">
            <div>
              <h2 className="text-display text-2xl text-[var(--cream)] mb-4">
                Information We Collect
              </h2>
              <div className="text-[var(--cream)]/80 leading-relaxed space-y-4">
                <p>
                  Gulf Coast Machine Services (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects information
                  you provide directly when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request a quote or service through our contact form</li>
                  <li>Call our emergency hotline</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
                <p>
                  This information may include your name, email address, phone number,
                  company name, and details about your equipment or service needs.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-display text-2xl text-[var(--cream)] mb-4">
                How We Use Your Information
              </h2>
              <div className="text-[var(--cream)]/80 leading-relaxed space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your service requests and inquiries</li>
                  <li>Provide quotes and schedule service appointments</li>
                  <li>Send service reminders and maintenance recommendations</li>
                  <li>Improve our services and customer experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-display text-2xl text-[var(--cream)] mb-4">
                Information Sharing
              </h2>
              <div className="text-[var(--cream)]/80 leading-relaxed space-y-4">
                <p>
                  We do not sell, trade, or rent your personal information to third parties.
                  We may share information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers who assist in our operations (under strict confidentiality)</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-display text-2xl text-[var(--cream)] mb-4">
                Data Security
              </h2>
              <div className="text-[var(--cream)]/80 leading-relaxed">
                <p>
                  We implement appropriate security measures to protect your personal
                  information from unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the internet is 100% secure.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-display text-2xl text-[var(--cream)] mb-4">
                Your Rights
              </h2>
              <div className="text-[var(--cream)]/80 leading-relaxed space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-display text-2xl text-[var(--cream)] mb-4">
                Cookies
              </h2>
              <div className="text-[var(--cream)]/80 leading-relaxed">
                <p>
                  Our website may use cookies to enhance your browsing experience.
                  You can control cookie settings through your browser preferences.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-display text-2xl text-[var(--cream)] mb-4">
                Contact Us
              </h2>
              <div className="text-[var(--cream)]/80 leading-relaxed">
                <p>
                  If you have questions about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 p-6 bg-[var(--charcoal)] border border-[var(--steel)]">
                  <p className="text-[var(--cream)]">Gulf Coast Machine Services</p>
                  <p>Email: info@gulfcoastmachines.com</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Address: 123 Industrial Blvd, Gulf City, TX 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--warning)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-display text-3xl text-[var(--black)] mb-2">
                Have Questions?
              </h2>
              <p className="text-[var(--black)]/80">
                Contact us if you need clarification on our privacy practices.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-[var(--black)] text-[var(--cream)] text-display text-lg px-8 py-4 uppercase tracking-wider hover:bg-[var(--charcoal)] transition-colors hover-lift"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

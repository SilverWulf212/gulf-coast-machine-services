"use client";

import Link from "next/link";

export default function Terms() {
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
            Terms of<br />
            <span className="text-[var(--warning)]">Service</span>
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
                Agreement to Terms
              </h2>
              <div className="text-[var(--cream)]/80 leading-relaxed">
                <p>
                  By accessing or using the services provided by Gulf Coast Machine Services
                  (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these
                  Terms of Service. If you do not agree to these terms, please do not use
                  our services.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-display text-2xl text-[var(--cream)] mb-4">
                Services Provided
              </h2>
              <div className="text-[var(--cream)]/80 leading-relaxed space-y-4">
                <p>
                  Gulf Coast Machine Services provides industrial and commercial equipment
                  repair, maintenance, and related services including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Industrial HVAC repair and maintenance</li>
                  <li>Commercial generator repair and installation</li>
                  <li>Industrial machinery repair</li>
                  <li>24/7 emergency response services</li>
                  <li>Preventive maintenance programs</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-display text-2xl text-[var(--cream)] mb-4">
                Service Estimates & Pricing
              </h2>
              <div className="text-[var(--cream)]/80 leading-relaxed space-y-4">
                <p>
                  We provide estimates for all repair work before beginning service.
                  Estimates are based on our initial assessment and may be adjusted if
                  additional issues are discovered during repair.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All estimates are provided in writing</li>
                  <li>Additional work requires customer approval before proceeding</li>
                  <li>Emergency services may have different pricing structures</li>
                  <li>Payment is due upon completion of service unless otherwise agreed</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-display text-2xl text-[var(--cream)] mb-4">
                Warranties
              </h2>
              <div className="text-[var(--cream)]/80 leading-relaxed space-y-4">
                <p>
                  Gulf Coast Machine Services warrants all repair work for a period specified
                  at the time of service. This warranty covers:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Labor and workmanship</li>
                  <li>Parts installed by our technicians (manufacturer warranty applies)</li>
                </ul>
                <p>
                  Warranties do not cover damage caused by misuse, accidents, modifications,
                  or failure to follow recommended maintenance schedules.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-display text-2xl text-[var(--cream)] mb-4">
                Limitation of Liability
              </h2>
              <div className="text-[var(--cream)]/80 leading-relaxed">
                <p>
                  To the maximum extent permitted by law, Gulf Coast Machine Services
                  shall not be liable for any indirect, incidental, special, consequential,
                  or punitive damages, including but not limited to loss of profits, data,
                  or business opportunities, arising from the use of our services.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-display text-2xl text-[var(--cream)] mb-4">
                Customer Responsibilities
              </h2>
              <div className="text-[var(--cream)]/80 leading-relaxed space-y-4">
                <p>Customers agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate information about equipment and service needs</li>
                  <li>Ensure safe access to equipment requiring service</li>
                  <li>Notify us of any hazardous conditions on-site</li>
                  <li>Make timely payments as agreed</li>
                  <li>Follow recommended maintenance schedules</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-display text-2xl text-[var(--cream)] mb-4">
                Cancellation Policy
              </h2>
              <div className="text-[var(--cream)]/80 leading-relaxed">
                <p>
                  Scheduled service appointments may be cancelled or rescheduled with at
                  least 24 hours notice. Cancellations with less than 24 hours notice may
                  be subject to a cancellation fee.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-display text-2xl text-[var(--cream)] mb-4">
                Governing Law
              </h2>
              <div className="text-[var(--cream)]/80 leading-relaxed">
                <p>
                  These Terms of Service shall be governed by and construed in accordance
                  with the laws of the State of Texas, without regard to its conflict of
                  law provisions.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-display text-2xl text-[var(--cream)] mb-4">
                Changes to Terms
              </h2>
              <div className="text-[var(--cream)]/80 leading-relaxed">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be
                  effective immediately upon posting to our website. Continued use of our
                  services constitutes acceptance of modified terms.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-display text-2xl text-[var(--cream)] mb-4">
                Contact Information
              </h2>
              <div className="text-[var(--cream)]/80 leading-relaxed">
                <p>
                  For questions about these Terms of Service, please contact us:
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
                Ready to Get Started?
              </h2>
              <p className="text-[var(--black)]/80">
                Contact us for a free consultation and quote.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-[var(--black)] text-[var(--cream)] text-display text-lg px-8 py-4 uppercase tracking-wider hover:bg-[var(--charcoal)] transition-colors hover-lift"
            >
              Get a Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

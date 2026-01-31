"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { SectionHeader, FAQAccordion } from "@/components/ui";

function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function FAQ() {
  const heroReveal = useScrollReveal(0.1);
  const faqReveal = useScrollReveal(0.1);
  const ctaReveal = useScrollReveal(0.2);

  const faqCategories = [
    {
      title: "Services & Equipment",
      faqs: [
        {
          question: "Do you offer 24/7 emergency services?",
          answer:
            "Yes, Gulf Coast Machine Services provides 24/7 emergency repair services. We understand that equipment failures can happen at any time, so our team is always ready to respond quickly to minimize your downtime.",
        },
        {
          question: "What types of equipment do you service?",
          answer:
            "We specialize in industrial HVAC systems, commercial generators, industrial machinery, and related equipment. Our technicians are trained to handle a wide range of industrial and commercial equipment repairs and maintenance.",
        },
        {
          question: "Can you work on equipment while it's in operation?",
          answer:
            "In many cases, yes. Our technicians are trained to perform repairs with minimal disruption to your operations. However, for safety reasons, some repairs may require temporary shutdowns. We'll always discuss the best approach with you.",
        },
      ],
    },
    {
      title: "Response & Coverage",
      faqs: [
        {
          question: "How quickly can you respond to an emergency?",
          answer:
            "For emergency situations, we aim to arrive within 1-2 hours in most Gulf Coast areas. Response times may vary based on location and traffic conditions. We prioritize critical breakdowns to get your operations back online as quickly as possible.",
        },
        {
          question: "What areas do you serve?",
          answer:
            "We serve the entire Gulf Coast region, including Houston, Galveston, Corpus Christi, Beaumont, Port Arthur, and surrounding communities. If you're unsure if we service your specific location, please contact us to confirm.",
        },
      ],
    },
    {
      title: "Pricing & Warranties",
      faqs: [
        {
          question: "Do you provide estimates before starting work?",
          answer:
            "Yes, we provide detailed estimates for all repair work. For emergency situations, we'll provide an estimate as quickly as possible. We believe in transparent pricing with no hidden fees.",
        },
        {
          question: "Do you offer warranties on your repairs?",
          answer:
            "Yes, all our repairs come with a comprehensive warranty. The specific warranty terms depend on the type of repair and equipment, but we stand behind our work and want you to be completely satisfied with our services.",
        },
        {
          question: "Do you provide preventive maintenance services?",
          answer:
            "Absolutely. We offer comprehensive preventive maintenance programs designed to keep your equipment running efficiently and prevent costly breakdowns. Regular maintenance can extend equipment life and reduce overall operating costs.",
        },
      ],
    },
  ];

  return (
    <div className="bg-[var(--black)] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-1/2 h-full gradient-glow" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div
            ref={heroReveal.ref}
            className={`max-w-3xl mx-auto text-center reveal ${
              heroReveal.isVisible ? "visible" : ""
            }`}
          >
            <div className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="w-8 h-[2px] bg-[var(--warning)]" />
              <span className="text-mono text-xs text-[var(--warning)] uppercase tracking-widest">
                FAQ
              </span>
              <span className="w-8 h-[2px] bg-[var(--warning)]" />
            </div>
            <h1 className="text-display text-5xl sm:text-6xl lg:text-7xl text-[var(--cream)] leading-[0.9] mb-6">
              Common<br />
              <span className="text-[var(--warning)]">Questions</span>
            </h1>
            <p className="text-lg text-[var(--cream)]/80 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about our services, response
              times, and how we can help keep your industrial and commercial
              equipment running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-4xl mx-auto px-4">
          <div
            ref={faqReveal.ref}
            className={`space-y-16 reveal ${faqReveal.isVisible ? "visible" : ""}`}
          >
            {faqCategories.map((category, index) => (
              <div key={category.title}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-display text-4xl text-[var(--warning)]/20">
                    0{index + 1}
                  </span>
                  <h2 className="text-display text-2xl text-[var(--cream)]">
                    {category.title}
                  </h2>
                </div>
                <FAQAccordion items={category.faqs} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Answers */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Quick Facts"
            title="At a Glance"
            align="center"
          />

          <div className="grid md:grid-cols-4 gap-px bg-[var(--steel)]">
            {[
              {
                icon: (
                  <svg
                    className="size-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                label: "Response Time",
                value: "Under 2 Hours",
              },
              {
                icon: (
                  <svg
                    className="size-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                label: "Warranty",
                value: "All Repairs",
              },
              {
                icon: (
                  <svg
                    className="size-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                label: "Coverage",
                value: "Gulf Coast",
              },
              {
                icon: (
                  <svg
                    className="size-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                label: "Pricing",
                value: "Transparent",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[var(--charcoal)] p-8 text-center group hover:bg-[var(--steel)] transition-colors"
              >
                <div className="text-[var(--warning)] flex justify-center mb-4">
                  {item.icon}
                </div>
                <p className="text-display text-xl text-[var(--cream)] mb-1">
                  {item.value}
                </p>
                <p className="text-mono text-xs text-[var(--cream)]/60 uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 warning-stripes opacity-5" />

        <div
          ref={ctaReveal.ref}
          className={`relative max-w-7xl mx-auto px-4 reveal-scale ${
            ctaReveal.isVisible ? "visible" : ""
          }`}
        >
          <div className="bg-[var(--charcoal)] border border-[var(--steel)] p-8 lg:p-16 text-center">
            <span className="badge-warning mb-6 inline-flex">
              <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              Need More Help?
            </span>
            <h2 className="text-display text-4xl sm:text-5xl text-[var(--cream)] mb-6">
              Still Have<br />
              <span className="text-[var(--warning)]">Questions?</span>
            </h2>
            <p className="text-[var(--cream)]/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Can&apos;t find the answer you&apos;re looking for? Our team is
              here to help with any questions about your equipment or our
              services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="btn-industrial hover-lift hover-glow"
              >
                Contact Us
              </Link>
              <a
                href="tel:+15551234567"
                className="btn-outline hover-lift flex items-center gap-2"
              >
                <svg
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="square"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[var(--warning)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-display text-3xl text-[var(--black)] mb-2">
                Ready to Get Started?
              </h2>
              <p className="text-[var(--black)]/80">
                Contact us today for a free consultation and quote.
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

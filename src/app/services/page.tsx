"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { SectionHeader, ServiceCard } from "@/components/ui";

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

export default function Services() {
  const heroReveal = useScrollReveal(0.1);
  const gridReveal = useScrollReveal(0.1);
  const ctaReveal = useScrollReveal(0.2);

  const services = [
    {
      id: "01",
      title: "Industrial HVAC Repair & Maintenance",
      description:
        "Complete repair and preventive maintenance for industrial heating, ventilation, and air conditioning systems. We handle everything from routine tune-ups to emergency repairs.",
      image: "/images/Google_AI_Studio_2025-08-29T14_37_43.625Z.png",
      features: [
        "Emergency repairs",
        "Preventive maintenance",
        "System upgrades",
        "Energy efficiency audits",
      ],
    },
    {
      id: "02",
      title: "Commercial Generator Services",
      description:
        "Expert installation, repair, and maintenance of commercial generators. Keep your business running during power outages with reliable backup power solutions.",
      image: "/images/Google_AI_Studio_2025-08-29T14_37_52.840Z.png",
      features: [
        "Generator repair",
        "Installation services",
        "Load testing",
        "Fuel system maintenance",
      ],
    },
    {
      id: "03",
      title: "Industrial Machinery Maintenance",
      description:
        "Comprehensive maintenance and repair services for all types of industrial machinery and equipment. Minimize downtime with our expert technicians.",
      image: "/images/Google_AI_Studio_2025-08-29T14_38_13.992Z.png",
      features: [
        "Diagnostic services",
        "Parts replacement",
        "Performance optimization",
        "Safety inspections",
      ],
    },
    {
      id: "04",
      title: "24/7 Emergency Services",
      description:
        "When equipment fails, every minute counts. Our emergency response team is available 24/7 to get your operations back online as quickly as possible.",
      image: "/images/Google_AI_Studio_2025-08-29T14_38_29.720Z.png",
      features: [
        "24/7 availability",
        "Rapid response",
        "On-site repairs",
        "Temporary solutions",
      ],
      popular: true,
    },
  ];

  return (
    <div className="bg-[var(--black)] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-1/2 h-full gradient-glow" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div
            ref={heroReveal.ref}
            className={`max-w-3xl reveal ${heroReveal.isVisible ? "visible" : ""}`}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[var(--warning)]" />
              <span className="text-mono text-xs text-[var(--warning)] uppercase tracking-widest">
                Our Services
              </span>
            </div>
            <h1 className="text-display text-5xl sm:text-6xl lg:text-7xl text-[var(--cream)] leading-[0.9] mb-6">
              Industrial<br />
              <span className="text-[var(--warning)]">Solutions</span>
            </h1>
            <p className="text-lg text-[var(--cream)]/80 max-w-2xl leading-relaxed">
              Gulf Coast Machine Services provides comprehensive industrial and
              commercial equipment repair and maintenance. From emergency repairs
              to preventive maintenance, we&apos;re your trusted partner for all
              your machinery needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={gridReveal.ref}
            className={`grid md:grid-cols-2 gap-8 stagger-children ${
              gridReveal.isVisible ? "visible" : ""
            }`}
          >
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                features={service.features}
                image={service.image}
                popular={service.popular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="How We Work"
            title="Our Process"
            description="We follow a proven methodology to ensure every job is completed efficiently and to the highest standards."
          />

          <div className="grid md:grid-cols-4 gap-px bg-[var(--steel)]">
            {[
              {
                num: "01",
                title: "Assessment",
                desc: "We evaluate your equipment and identify issues quickly.",
              },
              {
                num: "02",
                title: "Quote",
                desc: "Transparent pricing with no hidden fees or surprises.",
              },
              {
                num: "03",
                title: "Repair",
                desc: "Expert technicians get your equipment running fast.",
              },
              {
                num: "04",
                title: "Follow-up",
                desc: "We ensure everything works perfectly after the job.",
              },
            ].map((step, index) => (
              <div
                key={step.num}
                className="bg-[var(--charcoal)] p-8 group hover:bg-[var(--steel)] transition-colors"
              >
                <span className="text-display text-5xl text-[var(--warning)]/20 group-hover:text-[var(--warning)]/40 transition-colors block mb-4">
                  {step.num}
                </span>
                <h3 className="text-display text-xl text-[var(--cream)] mb-2">
                  {step.title}
                </h3>
                <p className="text-[var(--cream)]/70 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Service CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 warning-stripes opacity-5" />

        <div
          ref={ctaReveal.ref}
          className={`relative max-w-7xl mx-auto px-4 reveal-scale ${
            ctaReveal.isVisible ? "visible" : ""
          }`}
        >
          <div className="bg-[var(--charcoal)] border border-[var(--steel)] p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="badge-warning mb-6 inline-flex">
                  <svg
                    className="size-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Custom Solutions
                </span>
                <h2 className="text-display text-4xl sm:text-5xl text-[var(--cream)] mb-6">
                  Need a Service<br />
                  <span className="text-[var(--warning)]">Not Listed?</span>
                </h2>
                <p className="text-[var(--cream)]/80 max-w-md mb-8 leading-relaxed">
                  We provide custom solutions for unique equipment and machinery
                  needs. Our team can handle specialized repairs, custom
                  installations, and one-off projects.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-industrial hover-lift hover-glow">
                    Discuss Your Project
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
                    Call Us
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video bg-[var(--black)] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="size-20 mx-auto mb-4 border-2 border-[var(--warning)] flex items-center justify-center">
                        <svg
                          className="size-10 text-[var(--warning)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-mono text-xs text-[var(--cream)]/60 uppercase tracking-widest">
                        Custom Engineering
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-4 border border-[var(--steel)]" />
                </div>
              </div>
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

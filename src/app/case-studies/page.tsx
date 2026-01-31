"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { SectionHeader } from "@/components/ui";

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

export default function CaseStudies() {
  const heroReveal = useScrollReveal(0.1);
  const casesReveal = useScrollReveal(0.1);
  const ctaReveal = useScrollReveal(0.2);

  const caseStudies = [
    {
      id: "01",
      title: "Emergency Generator Repair",
      subtitle: "Manufacturing Plant",
      client: "ABC Manufacturing",
      location: "Houston, TX",
      challenge:
        "A critical generator failure during peak production hours threatened to shut down the entire manufacturing operation.",
      solution:
        "Our emergency response team arrived within 30 minutes, diagnosed a faulty fuel pump, and had the system back online in under 2 hours.",
      results: [
        "Minimized downtime to 2 hours",
        "Avoided $50,000+ in lost production",
        "Implemented preventive maintenance plan",
      ],
      image: "/images/Google_AI_Studio_2025-08-29T14_38_33.947Z.png",
      stats: { response: "30 min", downtime: "2 hrs", saved: "$50K+" },
    },
    {
      id: "02",
      title: "HVAC System Overhaul",
      subtitle: "Warehouse Facility",
      client: "Gulf Coast Distribution",
      location: "Galveston, TX",
      challenge:
        "Inefficient industrial HVAC system causing temperature fluctuations and high energy costs.",
      solution:
        "Complete system audit, replacement of outdated components, and implementation of preventive maintenance schedule.",
      results: [
        "30% reduction in energy costs",
        "Improved temperature control",
        "Extended equipment lifespan by 5+ years",
      ],
      image: "/images/Google_AI_Studio_2025-08-29T14_39_21.706Z.png",
      stats: { response: "Same day", downtime: "1 week", saved: "30% energy" },
    },
    {
      id: "03",
      title: "Conveyor System Emergency",
      subtitle: "Port Operations",
      client: "Port Logistics Inc.",
      location: "Port Arthur, TX",
      challenge:
        "Critical conveyor belt failure at busy port facility, halting container operations.",
      solution:
        "Rapid on-site repair using specialized equipment and temporary bypass solutions while permanent fix was implemented.",
      results: [
        "Operations resumed within 4 hours",
        "Full repair completed off-hours",
        "No further container delays",
      ],
      image: "/images/Google_AI_Studio_2025-08-29T14_39_39.680Z.png",
      stats: { response: "45 min", downtime: "4 hrs", saved: "$80K+" },
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
            className={`max-w-3xl reveal ${heroReveal.isVisible ? "visible" : ""}`}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[var(--warning)]" />
              <span className="text-mono text-xs text-[var(--warning)] uppercase tracking-widest">
                Our Work
              </span>
            </div>
            <h1 className="text-display text-5xl sm:text-6xl lg:text-7xl text-[var(--cream)] leading-[0.9] mb-6">
              Case<br />
              <span className="text-[var(--warning)]">Studies</span>
            </h1>
            <p className="text-lg text-[var(--cream)]/80 max-w-2xl leading-relaxed">
              Real results from real clients. See how Gulf Coast Machine Services
              has helped businesses across the Gulf Coast overcome equipment
              challenges and maintain operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={casesReveal.ref}
            className={`space-y-16 reveal ${casesReveal.isVisible ? "visible" : ""}`}
          >
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid lg:grid-cols-2 gap-0 ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] lg:aspect-auto ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--black)]/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="text-display text-6xl text-[var(--warning)]/30">
                      {study.id}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-[var(--charcoal)] p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="badge-steel mb-4 inline-flex">
                      {study.location}
                    </span>
                    <h2 className="text-display text-3xl text-[var(--cream)] mb-2">
                      {study.title}
                    </h2>
                    <p className="text-mono text-sm text-[var(--warning)] uppercase tracking-wider">
                      {study.subtitle} — {study.client}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-[var(--black)] border border-[var(--steel)]">
                    <div className="text-center">
                      <p className="text-display text-xl text-[var(--warning)]">
                        {study.stats.response}
                      </p>
                      <p className="text-mono text-[10px] text-[var(--cream)]/50 uppercase tracking-wider">
                        Response
                      </p>
                    </div>
                    <div className="text-center border-x border-[var(--steel)]">
                      <p className="text-display text-xl text-[var(--warning)]">
                        {study.stats.downtime}
                      </p>
                      <p className="text-mono text-[10px] text-[var(--cream)]/50 uppercase tracking-wider">
                        Downtime
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-display text-xl text-[var(--warning)]">
                        {study.stats.saved}
                      </p>
                      <p className="text-mono text-[10px] text-[var(--cream)]/50 uppercase tracking-wider">
                        Saved
                      </p>
                    </div>
                  </div>

                  {/* Challenge/Solution/Results */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-mono text-xs text-[var(--warning)] uppercase tracking-wider mb-2 flex items-center gap-2">
                        <span className="size-1.5 bg-[var(--warning)]" />
                        Challenge
                      </h3>
                      <p className="text-[var(--cream)]/80 text-sm leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-mono text-xs text-[var(--cream)]/60 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <span className="size-1.5 bg-[var(--cream)]/60" />
                        Solution
                      </h3>
                      <p className="text-[var(--cream)]/80 text-sm leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-mono text-xs text-green-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <span className="size-1.5 bg-green-500" />
                        Results
                      </h3>
                      <ul className="space-y-1">
                        {study.results.map((result, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-[var(--cream)]/80 text-sm"
                          >
                            <svg
                              className="size-4 text-green-500 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeader
            tag="Client Feedback"
            title="What They Say"
            align="center"
          />

          <div className="bg-[var(--charcoal)] border border-[var(--steel)] p-8 lg:p-12">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="size-6 text-[var(--warning)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-xl lg:text-2xl text-[var(--cream)] leading-relaxed mb-8">
              &ldquo;Gulf Coast Machine Services saved us from what could have
              been a catastrophic production shutdown. Their response time and
              expertise are unmatched. They&apos;re now our go-to for all
              equipment maintenance.&rdquo;
            </blockquote>
            <div>
              <p className="text-display text-lg text-[var(--cream)]">
                Robert Chen
              </p>
              <p className="text-mono text-xs text-[var(--cream)]/60 uppercase tracking-wider">
                Operations Director, ABC Manufacturing
              </p>
            </div>
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
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Join Our Success Stories
            </span>
            <h2 className="text-display text-4xl sm:text-5xl text-[var(--cream)] mb-6">
              Ready to Be Our Next<br />
              <span className="text-[var(--warning)]">Success Story?</span>
            </h2>
            <p className="text-[var(--cream)]/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Don&apos;t let equipment issues slow down your business. Contact
              us today for expert repair services and join the hundreds of
              satisfied Gulf Coast businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="btn-industrial hover-lift hover-glow"
              >
                Get Started
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
                Need Emergency Repair?
              </h2>
              <p className="text-[var(--black)]/80">
                We respond within 2 hours across the Gulf Coast.
              </p>
            </div>
            <a
              href="tel:+15551234567"
              className="bg-[var(--black)] text-[var(--cream)] text-display text-lg px-8 py-4 uppercase tracking-wider hover:bg-[var(--charcoal)] transition-colors hover-lift flex items-center gap-3"
            >
              <svg
                className="size-5"
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
              (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

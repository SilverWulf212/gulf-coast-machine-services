"use client";

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

export default function ServiceAreas() {
  const heroReveal = useScrollReveal(0.1);
  const citiesReveal = useScrollReveal(0.1);
  const ctaReveal = useScrollReveal(0.2);

  const majorCities = [
    { name: "Houston", state: "TX", response: "<1 hr" },
    { name: "Galveston", state: "TX", response: "<1.5 hr" },
    { name: "Corpus Christi", state: "TX", response: "<2 hr" },
    { name: "Beaumont", state: "TX", response: "<1.5 hr" },
    { name: "Port Arthur", state: "TX", response: "<1.5 hr" },
    { name: "Texas City", state: "TX", response: "<1 hr" },
  ];

  const additionalCities = [
    "League City",
    "Baytown",
    "Pasadena",
    "La Porte",
    "Deer Park",
    "Channelview",
    "Manvel",
    "Alvin",
    "Pearland",
    "Friendswood",
    "Kemah",
    "Seabrook",
    "Clear Lake Shores",
    "El Lago",
  ];

  const benefits = [
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
      title: "Faster Response Times",
      description:
        "Local technicians mean quicker arrival for emergency repairs. Average response under 2 hours.",
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
      title: "Regional Expertise",
      description:
        "We understand local industries, weather conditions, and equipment types specific to the Gulf Coast.",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Community Support",
      description:
        "Supporting local businesses and contributing to our community's success since 2010.",
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
                Coverage Area
              </span>
            </div>
            <h1 className="text-display text-5xl sm:text-6xl lg:text-7xl text-[var(--cream)] leading-[0.9] mb-6">
              Service<br />
              <span className="text-[var(--warning)]">Areas</span>
            </h1>
            <p className="text-lg text-[var(--cream)]/80 max-w-2xl leading-relaxed">
              Gulf Coast Machine Services proudly serves the Gulf Coast region
              with fast, reliable industrial and commercial equipment repair. Our
              local expertise ensures we understand the unique needs of your area.
            </p>
          </div>
        </div>
      </section>

      {/* Why Local Section */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Local Advantage"
            title="Why Choose Local Service?"
            align="center"
          />

          <div className="grid md:grid-cols-3 gap-px bg-[var(--steel)]">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[var(--charcoal)] p-8 lg:p-10 group hover:bg-[var(--steel)] transition-colors"
              >
                <div className="text-[var(--warning)] mb-6">{benefit.icon}</div>
                <h3 className="text-display text-xl text-[var(--cream)] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[var(--cream)]/70 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Primary Coverage"
            title="Major Cities We Serve"
            description="Fast response times across the Gulf Coast's major metropolitan areas."
          />

          <div
            ref={citiesReveal.ref}
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${
              citiesReveal.isVisible ? "visible" : ""
            }`}
          >
            {majorCities.map((city) => (
              <div
                key={city.name}
                className="group bg-[var(--charcoal)] border border-[var(--steel)] p-6 hover:border-[var(--warning)] transition-all hover-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-display text-2xl text-[var(--cream)] group-hover:text-[var(--warning)] transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-mono text-xs text-[var(--cream)]/50 uppercase tracking-wider">
                      {city.state}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-display text-lg text-[var(--warning)]">
                      {city.response}
                    </p>
                    <p className="text-mono text-[10px] text-[var(--cream)]/50 uppercase tracking-wider">
                      Response
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-[var(--steel)]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-mono text-xs text-[var(--warning)] uppercase tracking-wider group-hover:gap-4 transition-all"
                  >
                    Schedule Service
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Cities */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Extended Coverage"
            title="Additional Areas"
            align="center"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {additionalCities.map((city) => (
              <div
                key={city}
                className="bg-[var(--charcoal)] border border-[var(--steel)] p-4 text-center hover:border-[var(--warning)] transition-colors group"
              >
                <span className="text-sm text-[var(--cream)] group-hover:text-[var(--warning)] transition-colors">
                  {city}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Placeholder */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                tag="Coverage Zone"
                title="The Gulf Coast Region"
              />
              <p className="text-[var(--cream)]/80 leading-relaxed mb-6">
                From Houston to Corpus Christi, Beaumont to Galveston, we cover
                the entire Gulf Coast industrial corridor. Our strategically
                positioned team ensures rapid response anywhere in our service
                area.
              </p>
              <ul className="space-y-3">
                {[
                  "24/7 emergency response",
                  "Under 2-hour average arrival time",
                  "Coverage across 50+ cities",
                  "Dedicated Gulf Coast team",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[var(--cream)]/80"
                  >
                    <svg
                      className="size-5 text-[var(--warning)] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="square"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video bg-[var(--charcoal)] border border-[var(--steel)] flex items-center justify-center">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-mono text-xs text-[var(--cream)]/60 uppercase tracking-widest">
                    Gulf Coast Region
                  </p>
                </div>
              </div>
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
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              Not Listed?
            </span>
            <h2 className="text-display text-4xl sm:text-5xl text-[var(--cream)] mb-6">
              Don&apos;t See<br />
              <span className="text-[var(--warning)]">Your City?</span>
            </h2>
            <p className="text-[var(--cream)]/80 max-w-xl mx-auto mb-8 leading-relaxed">
              We may still be able to serve your area. Contact us to discuss
              your specific location and we&apos;ll work out a solution.
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
                Ready for Fast Response?
              </h2>
              <p className="text-[var(--black)]/80">
                Schedule your service today—we&apos;ll be there within hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-[var(--black)] text-[var(--cream)] text-display text-lg px-8 py-4 uppercase tracking-wider hover:bg-[var(--charcoal)] transition-colors hover-lift"
            >
              Get Started →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

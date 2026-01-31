"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { SectionHeader, TeamMemberCard, AnimatedCounter } from "@/components/ui";

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

export default function About() {
  const heroReveal = useScrollReveal(0.1);
  const storyReveal = useScrollReveal(0.1);
  const teamReveal = useScrollReveal(0.1);
  const commitmentReveal = useScrollReveal(0.1);

  const team = [
    {
      name: "John Smith",
      role: "Lead Technician",
      image: "/images/ChatGPT Image Jan 6, 2026, 05_42_43 PM.png",
      bio: "15+ years experience in industrial HVAC systems",
    },
    {
      name: "Sarah Johnson",
      role: "Generator Specialist",
      image: "/images/ChatGPT Image Jan 6, 2026, 05_42_45 PM.png",
      bio: "Certified in commercial generator repair and maintenance",
    },
    {
      name: "Mike Davis",
      role: "Machinery Expert",
      image: "/images/ChatGPT Image Jan 6, 2026, 05_42_46 PM.png",
      bio: "Specializes in industrial machinery diagnostics and repair",
    },
  ];

  const commitments = [
    "24/7 emergency response for critical breakdowns",
    "Certified technicians with industry expertise",
    "Comprehensive warranties on all repairs",
    "Preventive maintenance programs to avoid future issues",
    "Transparent pricing with no hidden fees",
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "50+", label: "Industrial Clients" },
    { value: "98%", label: "Client Satisfaction" },
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
                About Us
              </span>
            </div>
            <h1 className="text-display text-5xl sm:text-6xl lg:text-7xl text-[var(--cream)] leading-[0.9] mb-6">
              Built For<br />
              <span className="text-[var(--warning)]">Industry</span>
            </h1>
            <p className="text-lg text-[var(--cream)]/80 max-w-2xl leading-relaxed">
              Since 2010, Gulf Coast Machine Services has been the trusted
              partner for industrial and commercial equipment repair across the
              Gulf Coast region.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-t border-b border-[var(--steel)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--steel)]">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-8 text-center hover-lift"
              >
                <span className="text-display text-4xl text-[var(--warning)] block mb-2">
                  <AnimatedCounter value={stat.value} />
                </span>
                <span className="text-mono text-xs text-[var(--cream)]/60 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={storyReveal.ref}
            className={`grid lg:grid-cols-2 gap-16 items-center reveal ${
              storyReveal.isVisible ? "visible" : ""
            }`}
          >
            <div>
              <SectionHeader
                tag="Our Story"
                title="From Small Shop to Industry Leader"
              />
              <div className="space-y-6 text-[var(--cream)]/80 leading-relaxed">
                <p>
                  What started as a small operation has grown into a
                  comprehensive service provider, but our commitment to quality
                  and reliability remains unchanged. We understand that
                  equipment failure can mean lost revenue and operational
                  headaches.
                </p>
                <p>
                  That&apos;s why we prioritize fast response times, expert
                  diagnostics, and lasting solutions. Our team of certified
                  technicians brings decades of combined experience to every
                  job, ensuring your equipment runs at peak performance.
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-10 space-y-6">
                {[
                  { year: "2010", event: "Founded in Houston, TX" },
                  { year: "2015", event: "Expanded to 24/7 emergency services" },
                  { year: "2020", event: "Reached 500+ completed projects" },
                  { year: "2024", event: "Serving entire Gulf Coast region" },
                ].map((item, index) => (
                  <div key={item.year} className="flex items-center gap-6">
                    <span className="text-display text-2xl text-[var(--warning)] w-20">
                      {item.year}
                    </span>
                    <div className="flex-1 border-l-2 border-[var(--steel)] pl-6">
                      <span className="text-[var(--cream)]">{item.event}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] bg-[var(--charcoal)] overflow-hidden">
                <Image
                  src="/images/team.jpg"
                  alt="Our Team at Work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-4 border-b-4 border-[var(--warning)]" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-4 border-r-4 border-[var(--warning)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="The Team"
            title="Meet Our Experts"
            description="Our certified technicians bring decades of combined experience to every job."
            align="center"
          />

          <div
            ref={teamReveal.ref}
            className={`grid md:grid-cols-3 gap-8 stagger-children ${
              teamReveal.isVisible ? "visible" : ""
            }`}
          >
            {team.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={commitmentReveal.ref}
            className={`grid lg:grid-cols-2 gap-16 items-center reveal ${
              commitmentReveal.isVisible ? "visible" : ""
            }`}
          >
            <div>
              <SectionHeader
                tag="Our Promise"
                title="Our Commitment to You"
              />
              <ul className="space-y-4">
                {commitments.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 p-4 bg-[var(--charcoal)] border border-[var(--steel)] hover:border-[var(--warning)] transition-colors group"
                  >
                    <div className="size-6 bg-[var(--warning)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="size-4 text-[var(--black)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="square"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-[var(--cream)] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-[var(--charcoal)] border border-[var(--steel)] p-8 lg:p-12">
                <div className="text-center">
                  <div className="size-24 mx-auto mb-6 border-2 border-[var(--warning)] flex items-center justify-center">
                    <svg
                      className="size-12 text-[var(--warning)]"
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
                  </div>
                  <h3 className="text-display text-2xl text-[var(--cream)] mb-4">
                    Quality Guaranteed
                  </h3>
                  <p className="text-[var(--cream)]/70 leading-relaxed mb-6">
                    Every repair comes with our comprehensive warranty. We stand
                    behind our work because we know the quality we deliver.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-industrial inline-flex hover-lift"
                  >
                    Work With Us
                  </Link>
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
                Ready to Work Together?
              </h2>
              <p className="text-[var(--black)]/80">
                Get a free consultation and quote for your project.
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

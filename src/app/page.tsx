"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
}

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
          const duration = 1500;
          const steps = 40;
          const increment = numericValue / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              setDisplay(value);
              clearInterval(timer);
            } else {
              setDisplay(Math.floor(current).toString() + (value.includes("+") ? "+" : ""));
            }
          }, duration / steps);

          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function Home() {
  const heroParallax = useParallax(0.4);
  const servicesReveal = useScrollReveal(0.1);
  const ctaReveal = useScrollReveal(0.2);
  const whyReveal = useScrollReveal(0.1);
  const finalReveal = useScrollReveal(0.3);

  const services = [
    {
      id: "01",
      title: "Industrial HVAC",
      desc: "Climate control for heavy industry. Repair, maintenance, optimization.",
      icon: (
        <svg className="size-8 icon-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="square" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      id: "02",
      title: "Generator Systems",
      desc: "Backup power you can trust. Installation, repair, load testing.",
      icon: (
        <svg className="size-8 icon-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="square" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "03",
      title: "Machinery Repair",
      desc: "Production line down? We diagnose fast, fix faster.",
      icon: (
        <svg className="size-8 icon-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="square" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="square" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: "04",
      title: "24/7 Emergency",
      desc: "Round-the-clock response. Minimum downtime guaranteed.",
      icon: (
        <svg className="size-8 icon-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="square" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "<2hr", label: "Avg Response Time" },
    { value: "24/7", label: "Availability" },
  ];

  return (
    <div className="bg-[var(--black)]">
      {/* Hero Section */}
      <section className="relative min-h-dvh flex items-center pt-32 pb-20 overflow-hidden">
        {/* Parallax Background */}
        <div ref={heroParallax} className="absolute inset-0 grid-pattern opacity-30" />

        {/* Diagonal Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--warning)] opacity-5 -skew-x-12 translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 w-full z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Tag */}
              <div className="inline-flex items-center gap-3 mb-8 animate-slide-up">
                <span className="w-12 h-[2px] bg-[var(--warning)]" />
                <span className="text-mono text-xs text-[var(--warning)] uppercase tracking-widest">
                  Gulf Coast Region
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-display text-5xl sm:text-6xl lg:text-7xl text-[var(--cream)] leading-[0.9] mb-6 animate-slide-up delay-100">
                Industrial<br />
                Machine<br />
                <span className="text-[var(--warning)]">Specialists</span>
              </h1>

              {/* Subhead */}
              <p className="text-lg text-[var(--cream)]/80 max-w-md mb-10 leading-relaxed animate-slide-up delay-200">
                When your equipment fails, production stops. We get you running again—fast.
                24/7 emergency response across the Gulf Coast.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 animate-slide-up delay-300">
                <a href="tel:+15551234567" className="btn-industrial animate-pulse-glow hover-lift">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="square" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <Link href="/services" className="btn-outline hover-lift">
                  View Services
                </Link>
              </div>
            </div>

            {/* Right - Hero Image with Parallax */}
            <div className="relative animate-slide-in-right delay-200">
              <div className="relative aspect-[4/3] bg-[var(--charcoal)] overflow-hidden shimmer">
                <Image
                  src="/images/Hero1.png"
                  alt="Industrial machinery"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Corner Accents */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-4 border-b-4 border-[var(--warning)]" />
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-[var(--warning)]" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 right-8 bg-[var(--warning)] px-6 py-4 hover-glow">
                <span className="text-display text-3xl text-[var(--white)] block">24/7</span>
                <span className="text-mono text-xs text-[var(--white)] uppercase tracking-wider">Response</span>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 border border-[var(--steel)] divide-x divide-y sm:divide-y-0 divide-[var(--steel)]">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 text-center animate-slide-up hover-lift"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <span className="text-display text-3xl text-[var(--warning)] block">
                  <AnimatedCounter value={stat.value} />
                </span>
                <span className="text-mono text-xs text-[var(--cream)]/70 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div
            ref={servicesReveal.ref}
            className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal ${servicesReveal.isVisible ? 'visible' : ''}`}
          >
            <div>
              <span className="text-mono text-xs text-[var(--warning)] uppercase tracking-widest block mb-4">
                What We Do
              </span>
              <h2 className="text-display text-4xl sm:text-5xl text-[var(--cream)]">
                Core Services
              </h2>
            </div>
            <Link href="/services" className="btn-outline text-sm py-3 px-6 hover-lift">
              All Services →
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-px bg-[var(--steel)]">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-[var(--charcoal)] p-8 lg:p-12 group hover:bg-[var(--steel)] transition-colors duration-200 border-draw"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-mono text-xs text-[var(--cream)]/70">{service.id}</span>
                  <div className="text-[var(--cream)]/80 group-hover:text-[var(--warning)] transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-display text-2xl text-[var(--cream)] mb-3">{service.title}</h3>
                <p className="text-[var(--cream)]/80 text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link
                  href="/services"
                  className="text-mono text-xs text-[var(--warning)] uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  Learn More
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Warning Stripes */}
        <div className="absolute inset-0 warning-stripes opacity-10" />

        <div
          ref={ctaReveal.ref}
          className={`relative max-w-7xl mx-auto px-4 reveal-scale ${ctaReveal.isVisible ? 'visible' : ''}`}
        >
          <div className="bg-[var(--charcoal)] border border-[var(--steel)] p-8 lg:p-16 shimmer">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-mono text-xs text-[var(--danger)] uppercase tracking-widest block mb-4 flex items-center gap-2">
                  <span className="size-2 bg-[var(--danger)] rounded-full animate-pulse" />
                  Equipment Down?
                </span>
                <h2 className="text-display text-4xl sm:text-5xl text-[var(--cream)] mb-6">
                  We Respond<br />
                  <span className="text-[var(--warning)]">Within Hours</span>
                </h2>
                <p className="text-[var(--cream)]/80 max-w-md mb-8">
                  Don&apos;t let equipment failure cost you thousands in lost production.
                  Our emergency team is standing by 24/7.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+15551234567" className="btn-industrial hover-lift hover-glow">
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="square" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (555) 123-4567
                  </a>
                  <Link href="/contact" className="btn-outline hover-lift">
                    Request Quote
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video bg-[var(--black)] relative overflow-hidden">
                  <Image
                    src="/images/hero2.png"
                    alt="Emergency repair team"
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 border-4 border-[var(--warning)] m-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={whyReveal.ref}
            className={`grid lg:grid-cols-3 gap-16 ${whyReveal.isVisible ? '' : ''}`}
          >
            {/* Left Column - Header */}
            <div className={`reveal-left ${whyReveal.isVisible ? 'visible' : ''}`}>
              <span className="text-mono text-xs text-[var(--warning)] uppercase tracking-widest block mb-4">
                Why Gulf Coast
              </span>
              <h2 className="text-display text-4xl text-[var(--cream)] mb-6">
                Built For<br />Industry
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-[var(--cream)]/80 leading-relaxed">
                We understand that in industrial operations, every minute of downtime costs money.
                That&apos;s why we&apos;ve built our entire operation around speed, reliability, and expertise.
              </p>
            </div>

            {/* Right Columns - Features */}
            <div className={`lg:col-span-2 grid sm:grid-cols-2 gap-8 stagger-children ${whyReveal.isVisible ? 'visible' : ''}`}>
              {[
                {
                  title: "Rapid Response",
                  desc: "Average on-site arrival under 2 hours for emergency calls within our coverage area.",
                },
                {
                  title: "Certified Techs",
                  desc: "Factory-trained specialists with decades of combined industrial experience.",
                },
                {
                  title: "Local Expertise",
                  desc: "Deep knowledge of Gulf Coast industries—oil & gas, manufacturing, logistics.",
                },
                {
                  title: "No Hidden Fees",
                  desc: "Transparent pricing. Detailed estimates before work begins. No surprises.",
                },
              ].map((feature) => (
                <div key={feature.title} className="border-l-2 border-[var(--steel)] pl-6 hover:border-[var(--warning)] transition-colors hover-lift">
                  <h3 className="text-display text-xl text-[var(--cream)] mb-3">{feature.title}</h3>
                  <p className="text-[var(--cream)]/80 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        ref={finalReveal.ref}
        className={`py-16 bg-[var(--warning)] reveal ${finalReveal.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-display text-3xl text-[var(--white)] mb-2">
                Ready to Work Together?
              </h2>
              <p className="text-[var(--white)]">
                Get a free consultation and quote for your project.
              </p>
            </div>
            <Link href="/contact" className="bg-[var(--black)] text-[var(--cream)] text-display text-lg px-8 py-4 uppercase tracking-wider hover:bg-[var(--charcoal)] transition-colors hover-lift">
              Start Now →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

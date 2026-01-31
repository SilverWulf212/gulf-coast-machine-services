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

export default function Blog() {
  const heroReveal = useScrollReveal(0.1);
  const postsReveal = useScrollReveal(0.1);
  const ctaReveal = useScrollReveal(0.2);

  const featuredPost = {
    title: "The Importance of Regular Generator Maintenance",
    excerpt:
      "Learn why scheduled maintenance is crucial for commercial generators and how it can prevent costly breakdowns. Regular inspections can identify potential issues before they become emergencies.",
    date: "January 15, 2026",
    category: "Maintenance",
    image: "/images/Google_AI_Studio_2025-08-29T14_40_03.454Z.png",
    slug: "generator-maintenance-importance",
    readTime: "5 min read",
  };

  const posts = [
    {
      title: "Common Industrial HVAC Problems and Solutions",
      excerpt:
        "Discover the most frequent issues affecting industrial HVAC systems and how our experts address them.",
      date: "January 10, 2026",
      category: "HVAC",
      image: "/images/Google_AI_Studio_2025-08-29T14_40_32.509Z.png",
      slug: "industrial-hvac-problems-solutions",
      readTime: "4 min read",
    },
    {
      title: "Emergency Response: What to Do When Equipment Fails",
      excerpt:
        "A guide for facility managers on handling equipment emergencies and minimizing operational downtime.",
      date: "January 5, 2026",
      category: "Emergency",
      image: "/images/Google_AI_Studio_2025-08-29T14_40_42.666Z.png",
      slug: "equipment-failure-emergency-response",
      readTime: "6 min read",
    },
    {
      title: "The Benefits of Preventive Maintenance Programs",
      excerpt:
        "Explore how regular maintenance schedules can extend equipment life and reduce overall operating costs.",
      date: "December 28, 2025",
      category: "Maintenance",
      image: "/images/Google_AI_Studio_2025-08-29T14_41_48.058Z.png",
      slug: "preventive-maintenance-benefits",
      readTime: "5 min read",
    },
  ];

  const categories = ["All", "Maintenance", "HVAC", "Emergency", "Industry News"];

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
                Insights
              </span>
              <span className="w-8 h-[2px] bg-[var(--warning)]" />
            </div>
            <h1 className="text-display text-5xl sm:text-6xl lg:text-7xl text-[var(--cream)] leading-[0.9] mb-6">
              Industry<br />
              <span className="text-[var(--warning)]">Blog</span>
            </h1>
            <p className="text-lg text-[var(--cream)]/80 max-w-2xl mx-auto leading-relaxed">
              Stay informed with the latest insights on industrial equipment
              maintenance, repair tips, and industry best practices from the
              experts at Gulf Coast Machine Services.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader tag="Featured" title="Latest Article" />

          <article className="grid lg:grid-cols-2 gap-0">
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--black)]/50 to-transparent lg:hidden" />
              <div className="absolute top-6 left-6">
                <span className="badge-warning">{featuredPost.category}</span>
              </div>
            </div>
            <div className="bg-[var(--charcoal)] p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-mono text-xs text-[var(--cream)]/60 uppercase tracking-wider">
                  {featuredPost.date}
                </span>
                <span className="size-1 bg-[var(--cream)]/40 rounded-full" />
                <span className="text-mono text-xs text-[var(--cream)]/60 uppercase tracking-wider">
                  {featuredPost.readTime}
                </span>
              </div>
              <h2 className="text-display text-3xl lg:text-4xl text-[var(--cream)] mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-[var(--cream)]/80 leading-relaxed mb-8">
                {featuredPost.excerpt}
              </p>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 text-mono text-xs text-[var(--warning)] uppercase tracking-wider hover:gap-4 transition-all"
              >
                Read Full Article
                <span>→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 text-mono text-xs uppercase tracking-wider transition-colors ${
                  index === 0
                    ? "bg-[var(--warning)] text-[var(--black)]"
                    : "bg-[var(--charcoal)] text-[var(--cream)] border border-[var(--steel)] hover:border-[var(--warning)] hover:text-[var(--warning)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={postsReveal.ref}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children ${
              postsReveal.isVisible ? "visible" : ""
            }`}
          >
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-[var(--charcoal)] border border-[var(--steel)] hover:border-[var(--warning)] transition-all hover-lift"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="badge-steel">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-mono text-xs text-[var(--cream)]/50 uppercase tracking-wider">
                      {post.date}
                    </span>
                    <span className="size-1 bg-[var(--cream)]/30 rounded-full" />
                    <span className="text-mono text-xs text-[var(--cream)]/50 uppercase tracking-wider">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-display text-xl text-[var(--cream)] mb-3 group-hover:text-[var(--warning)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[var(--cream)]/70 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-mono text-xs text-[var(--warning)] uppercase tracking-wider group-hover:gap-4 transition-all"
                  >
                    Read More
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeader
            tag="Stay Updated"
            title="Subscribe to Our Newsletter"
            description="Get the latest industry insights and maintenance tips delivered to your inbox."
            align="center"
          />

          <div className="bg-[var(--charcoal)] border border-[var(--steel)] p-8">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-industrial flex-1"
              />
              <button
                type="submit"
                className="btn-industrial whitespace-nowrap hover-lift"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[var(--cream)]/50 text-xs mt-4">
              No spam, unsubscribe anytime.
            </p>
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
              Expert Advice
            </span>
            <h2 className="text-display text-4xl sm:text-5xl text-[var(--cream)] mb-6">
              Need Expert<br />
              <span className="text-[var(--warning)]">Advice?</span>
            </h2>
            <p className="text-[var(--cream)]/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Have questions about your equipment or maintenance needs? Our team
              of experienced technicians is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="btn-industrial hover-lift hover-glow"
              >
                Contact Our Experts
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

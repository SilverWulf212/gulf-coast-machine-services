"use client";

import { useActionState } from "react";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { submitContactForm, type ContactFormState } from "./actions";
import { FormInput, FormTextarea, FormSelect } from "@/components/ui";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

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

export default function Contact() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );
  const heroReveal = useScrollReveal(0.1);
  const formReveal = useScrollReveal(0.1);

  const contactInfo = [
    {
      label: "Phone",
      value: "(555) 123-4567",
      href: "tel:+15551234567",
      icon: (
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
      ),
    },
    {
      label: "Email",
      value: "info@gulfcoastmachines.com",
      href: "mailto:info@gulfcoastmachines.com",
      icon: (
        <svg
          className="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="square"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      label: "Address",
      value: "123 Industrial Blvd, Gulf City, TX 12345",
      href: null,
      icon: (
        <svg
          className="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="square"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="square"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      label: "Hours",
      value: "24/7 Emergency Services",
      href: null,
      icon: (
        <svg
          className="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="square"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[var(--black)] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-1/2 h-full gradient-glow" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div
            ref={heroReveal.ref}
            className={`max-w-3xl reveal ${heroReveal.isVisible ? "visible" : ""}`}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[var(--warning)]" />
              <span className="text-mono text-xs text-[var(--warning)] uppercase tracking-widest">
                Get In Touch
              </span>
            </div>
            <h1 className="text-display text-5xl sm:text-6xl lg:text-7xl text-[var(--cream)] leading-[0.9] mb-6">
              Contact<br />
              <span className="text-[var(--warning)]">Us</span>
            </h1>
            <p className="text-lg text-[var(--cream)]/80 max-w-2xl leading-relaxed">
              Need emergency repair or have questions about our services? Get in
              touch with Gulf Coast Machine Services today. We&apos;re here to
              help keep your operations running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div>
              {/* Emergency Alert */}
              <div className="relative mb-12 overflow-hidden">
                <div className="absolute inset-0 warning-stripes opacity-20" />
                <div className="relative bg-[var(--charcoal)] border-l-4 border-[var(--warning)] p-6">
                  <div className="flex items-start gap-4">
                    <div className="size-10 bg-[var(--warning)] flex items-center justify-center flex-shrink-0 animate-pulse-ring">
                      <svg
                        className="size-5 text-[var(--black)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="square"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-display text-xl text-[var(--warning)] mb-2">
                        Emergency Services
                      </h3>
                      <p className="text-[var(--cream)]/80 text-sm leading-relaxed mb-4">
                        For urgent repairs that can&apos;t wait, call our
                        emergency line immediately. We prioritize critical
                        breakdowns to minimize your downtime.
                      </p>
                      <a
                        href="tel:+15551234567"
                        className="btn-industrial text-sm py-2 px-4 inline-flex"
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
              </div>

              {/* Contact Info Grid */}
              <div className="grid gap-6 mb-12">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-4 bg-[var(--charcoal)] border border-[var(--steel)] hover:border-[var(--warning)] transition-colors group"
                  >
                    <div className="text-[var(--cream)]/60 group-hover:text-[var(--warning)] transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-mono text-xs text-[var(--cream)]/60 uppercase tracking-wider block mb-1">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[var(--cream)] hover:text-[var(--warning)] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-[var(--cream)]">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Areas */}
              <div className="bg-[var(--charcoal)] border border-[var(--steel)] p-6">
                <h3 className="text-display text-xl text-[var(--cream)] mb-4">
                  Service Areas
                </h3>
                <p className="text-[var(--cream)]/70 text-sm mb-4">
                  We serve the entire Gulf Coast region including:
                </p>
                <ul className="space-y-2">
                  {[
                    "Houston and surrounding areas",
                    "Galveston and coastal communities",
                    "Corpus Christi and South Texas",
                    "Beaumont and Port Arthur",
                    "All Gulf Coast industrial zones",
                  ].map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-3 text-sm text-[var(--cream)]/80"
                    >
                      <svg
                        className="size-4 text-[var(--warning)] flex-shrink-0"
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
                      {area}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/service-areas"
                  className="inline-flex items-center gap-2 text-mono text-xs text-[var(--warning)] uppercase tracking-wider mt-4 hover:gap-4 transition-all"
                >
                  View All Areas
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Column - Form */}
            <div
              ref={formReveal.ref}
              className={`reveal ${formReveal.isVisible ? "visible" : ""}`}
            >
              <div className="bg-[var(--charcoal)] border border-[var(--steel)] p-8 lg:p-10">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-display text-2xl text-[var(--cream)]">
                    Send a Message
                  </h2>
                  <span className="badge-steel">
                    <svg
                      className="size-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="square"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    24hr Response
                  </span>
                </div>

                {state.message && (
                  <div
                    className={`p-4 mb-6 border ${
                      state.success
                        ? "bg-green-900/20 border-green-500 text-green-400"
                        : "bg-[var(--warning)]/10 border-[var(--warning)] text-[var(--warning)]"
                    }`}
                    role="alert"
                  >
                    {state.message}
                  </div>
                )}

                <form action={formAction} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormInput
                      label="Name"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      error={state.errors?.name}
                    />
                    <FormInput
                      label="Email"
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      error={state.errors?.email}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormInput
                      label="Phone"
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(555) 123-4567"
                    />
                    <FormSelect label="Service Needed" id="service" name="service">
                      <option value="">Select a service</option>
                      <option value="hvac">Industrial HVAC Repair</option>
                      <option value="generator">
                        Commercial Generator Services
                      </option>
                      <option value="machinery">
                        Industrial Machinery Maintenance
                      </option>
                      <option value="emergency">Emergency Services</option>
                      <option value="other">Other</option>
                    </FormSelect>
                  </div>

                  <FormTextarea
                    label="Message"
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project or issue..."
                    error={state.errors?.message}
                  />

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full btn-industrial justify-center hover-lift hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPending ? (
                      <>
                        <svg
                          className="animate-spin size-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg
                          className="size-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="square"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
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
                Prefer to Talk?
              </h2>
              <p className="text-[var(--black)]/80">
                Call us directly for immediate assistance.
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

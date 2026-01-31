import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const services = {
  "hvac-repair": {
    title: "Industrial HVAC Repair",
    subtitle: "Climate Control Specialists",
    description:
      "Complete repair and preventive maintenance for industrial heating, ventilation, and air conditioning systems across the Gulf Coast region.",
    heroImage: "/images/Google_AI_Studio_2025-08-29T14_37_43.625Z.png",
    features: [
      "24/7 emergency HVAC repair",
      "Preventive maintenance programs",
      "System efficiency audits",
      "Commercial chiller repair",
      "Rooftop unit service",
      "Ductwork inspection and repair",
    ],
    benefits: [
      {
        title: "Minimize Downtime",
        description:
          "Our rapid response team gets your HVAC systems running quickly, reducing production losses.",
      },
      {
        title: "Energy Savings",
        description:
          "Properly maintained systems operate more efficiently, reducing your energy costs by up to 30%.",
      },
      {
        title: "Extended Equipment Life",
        description:
          "Regular maintenance extends the lifespan of your HVAC equipment by years.",
      },
    ],
    faq: [
      {
        question: "How quickly can you respond to HVAC emergencies?",
        answer:
          "We typically arrive within 1-2 hours for emergency HVAC calls in our primary service areas.",
      },
      {
        question: "Do you service all HVAC brands?",
        answer:
          "Yes, our technicians are trained to repair and maintain all major commercial and industrial HVAC brands.",
      },
    ],
    metaTitle: "Industrial HVAC Repair Services - 24/7 Emergency Response",
    metaDescription:
      "Expert industrial HVAC repair and maintenance in Houston, Galveston & Gulf Coast. 24/7 emergency service, certified technicians. Call (555) 123-4567.",
  },
  "generator-repair": {
    title: "Generator Repair & Maintenance",
    subtitle: "Backup Power Specialists",
    description:
      "Commercial and industrial generator installation, repair, and preventive maintenance to ensure your backup power is always ready.",
    heroImage: "/images/Google_AI_Studio_2025-08-29T14_40_03.454Z.png",
    features: [
      "Emergency generator repair",
      "Scheduled maintenance programs",
      "Load bank testing",
      "Transfer switch service",
      "Fuel system maintenance",
      "Battery testing and replacement",
    ],
    benefits: [
      {
        title: "Reliable Backup Power",
        description:
          "Never worry about power outages disrupting your operations with properly maintained generators.",
      },
      {
        title: "Compliance Ready",
        description:
          "Meet all regulatory requirements with documented maintenance and testing records.",
      },
      {
        title: "Cost Prevention",
        description:
          "Prevent costly emergency repairs with regular preventive maintenance.",
      },
    ],
    faq: [
      {
        question: "How often should generators be serviced?",
        answer:
          "We recommend monthly inspections and annual comprehensive maintenance for commercial generators.",
      },
      {
        question: "Do you provide load bank testing?",
        answer:
          "Yes, we offer complete load bank testing services to verify your generator can handle full capacity.",
      },
    ],
    metaTitle: "Commercial Generator Repair - Installation & Maintenance",
    metaDescription:
      "Commercial generator repair, installation & maintenance in the Gulf Coast. Load testing, transfer switches, 24/7 emergency service. Call (555) 123-4567.",
  },
  "machinery-repair": {
    title: "Industrial Machinery Repair",
    subtitle: "Production Line Specialists",
    description:
      "Expert diagnosis and repair for industrial machinery and production equipment. We get your lines running again—fast.",
    heroImage: "/images/Google_AI_Studio_2025-08-29T14_38_33.947Z.png",
    features: [
      "Production line troubleshooting",
      "Motor and pump repair",
      "Conveyor system maintenance",
      "Hydraulic system service",
      "PLC and controls repair",
      "Vibration analysis",
    ],
    benefits: [
      {
        title: "Rapid Diagnosis",
        description:
          "Our experienced technicians quickly identify issues to minimize diagnostic time.",
      },
      {
        title: "Reduced Downtime",
        description:
          "Get back to production faster with our efficient repair processes.",
      },
      {
        title: "Preventive Insights",
        description:
          "We identify potential failures before they cause unplanned downtime.",
      },
    ],
    faq: [
      {
        question: "What types of machinery do you repair?",
        answer:
          "We service a wide range of industrial equipment including motors, pumps, conveyors, compressors, and more.",
      },
      {
        question: "Can you work on equipment while production is running?",
        answer:
          "In many cases, yes. We work to minimize disruption while maintaining safety standards.",
      },
    ],
    metaTitle: "Industrial Machinery Repair - Production Equipment Service",
    metaDescription:
      "Industrial machinery repair across the Gulf Coast. Motors, pumps, conveyors, hydraulics. Minimize downtime with our expert technicians. Call (555) 123-4567.",
  },
  "emergency-services": {
    title: "24/7 Emergency Services",
    subtitle: "Always Ready When You Need Us",
    description:
      "Round-the-clock emergency response for critical equipment failures. Our team is standing by 24/7 to minimize your downtime.",
    heroImage: "/images/hero2.png",
    features: [
      "24/7/365 availability",
      "Under 2-hour response time",
      "Fully equipped service vehicles",
      "Certified emergency technicians",
      "Real-time communication",
      "Priority scheduling",
    ],
    benefits: [
      {
        title: "Immediate Response",
        description:
          "Our emergency team is dispatched immediately upon your call, day or night.",
      },
      {
        title: "Experienced Crews",
        description:
          "Emergency calls are handled by our most experienced technicians.",
      },
      {
        title: "Complete Solutions",
        description:
          "We carry common parts and tools to resolve most issues on the first visit.",
      },
    ],
    faq: [
      {
        question: "What qualifies as an emergency?",
        answer:
          "Any equipment failure that stops production or creates safety concerns qualifies for emergency response.",
      },
      {
        question: "Is there an extra charge for emergency services?",
        answer:
          "Emergency rates apply for after-hours calls, but we always provide transparent pricing before beginning work.",
      },
    ],
    metaTitle: "24/7 Emergency Industrial Equipment Repair - Gulf Coast",
    metaDescription:
      "24/7 emergency industrial equipment repair across the Gulf Coast. Under 2-hour response time. HVAC, generators, machinery. Call (555) 123-4567 now.",
  },
  "preventive-maintenance": {
    title: "Preventive Maintenance Programs",
    subtitle: "Keep Equipment Running Smoothly",
    description:
      "Customized preventive maintenance programs designed to extend equipment life, reduce breakdowns, and lower operating costs.",
    heroImage: "/images/Google_AI_Studio_2025-08-29T14_41_48.058Z.png",
    features: [
      "Customized maintenance schedules",
      "Comprehensive inspections",
      "Performance monitoring",
      "Detailed reporting",
      "Parts management",
      "Priority emergency response",
    ],
    benefits: [
      {
        title: "Reduced Breakdowns",
        description:
          "Regular maintenance catches issues before they become costly failures.",
      },
      {
        title: "Lower Operating Costs",
        description:
          "Well-maintained equipment runs more efficiently and costs less to operate.",
      },
      {
        title: "Budget Predictability",
        description:
          "Fixed monthly costs make budgeting easier and eliminate surprise repair bills.",
      },
    ],
    faq: [
      {
        question: "How do you customize maintenance programs?",
        answer:
          "We assess your equipment, operating conditions, and requirements to create a tailored maintenance schedule.",
      },
      {
        question: "What's included in a maintenance visit?",
        answer:
          "Visits include inspections, cleaning, lubrication, adjustments, and a detailed condition report.",
      },
    ],
    metaTitle: "Preventive Maintenance Programs - Industrial Equipment",
    metaDescription:
      "Customized preventive maintenance for industrial equipment. Reduce breakdowns, extend equipment life, lower costs. Gulf Coast region. Call (555) 123-4567.",
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = services[params.slug as keyof typeof services];
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: `${service.metaTitle} | Gulf Coast Machine Services`,
      description: service.metaDescription,
      url: `https://gulfcoastmachineservices.com/services/${params.slug}`,
      images: [{ url: service.heroImage }],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-[var(--black)] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-1/2 h-full gradient-glow" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-mono text-xs text-[var(--cream)]/60 uppercase tracking-wider mb-6 hover:text-[var(--warning)] transition-colors"
              >
                ← Back to Services
              </Link>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-[var(--warning)]" />
                <span className="text-mono text-xs text-[var(--warning)] uppercase tracking-widest">
                  {service.subtitle}
                </span>
              </div>
              <h1 className="text-display text-5xl sm:text-6xl text-[var(--cream)] leading-[0.9] mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-[var(--cream)]/80 leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+15551234567"
                  className="btn-industrial hover-lift hover-glow"
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
                  Call Now
                </a>
                <Link href="/contact" className="btn-outline hover-lift">
                  Request Quote
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-4 border-b-4 border-[var(--warning)]" />
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-[var(--warning)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <span className="text-mono text-xs text-[var(--warning)] uppercase tracking-widest block mb-4">
              What We Offer
            </span>
            <h2 className="text-display text-4xl text-[var(--cream)]">
              Service Features
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-4 p-6 bg-[var(--charcoal)] border border-[var(--steel)] hover:border-[var(--warning)] transition-colors"
              >
                <svg
                  className="size-6 text-[var(--warning)] flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="square" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--cream)]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <span className="text-mono text-xs text-[var(--warning)] uppercase tracking-widest block mb-4">
              Why Choose Us
            </span>
            <h2 className="text-display text-4xl text-[var(--cream)]">
              Key Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[var(--steel)]">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[var(--charcoal)] p-8 hover:bg-[var(--steel)] transition-colors"
              >
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

      {/* FAQ Section */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-mono text-xs text-[var(--warning)] uppercase tracking-widest block mb-4">
              Questions
            </span>
            <h2 className="text-display text-4xl text-[var(--cream)]">
              Frequently Asked
            </h2>
          </div>

          <div className="space-y-4">
            {service.faq.map((item) => (
              <div
                key={item.question}
                className="bg-[var(--charcoal)] border border-[var(--steel)] p-6"
              >
                <h3 className="text-display text-lg text-[var(--cream)] mb-3">
                  {item.question}
                </h3>
                <p className="text-[var(--cream)]/70 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const cities = {
  houston: {
    name: "Houston",
    state: "TX",
    responseTime: "Under 1 hour",
    description:
      "Gulf Coast Machine Services provides 24/7 industrial equipment repair throughout the Houston metropolitan area. From downtown Houston to the Energy Corridor, our certified technicians are ready to respond.",
    areas: [
      "Downtown Houston",
      "Energy Corridor",
      "The Woodlands",
      "Sugar Land",
      "Katy",
      "Pearland",
      "Pasadena",
      "Baytown",
    ],
    industries: [
      "Oil & Gas",
      "Petrochemical",
      "Manufacturing",
      "Logistics & Warehousing",
      "Healthcare Facilities",
      "Commercial Real Estate",
    ],
    stats: {
      customers: "200+",
      responseTime: "<1 hr",
      yearsServing: "15+",
    },
  },
  galveston: {
    name: "Galveston",
    state: "TX",
    responseTime: "Under 1.5 hours",
    description:
      "Serving Galveston Island and the surrounding coastal communities with industrial and commercial equipment repair. We understand the unique challenges of coastal industrial operations.",
    areas: [
      "Galveston Island",
      "Texas City",
      "La Marque",
      "Hitchcock",
      "Dickinson",
      "League City",
      "Kemah",
      "Clear Lake",
    ],
    industries: [
      "Port Operations",
      "Shipping & Logistics",
      "Hospitality",
      "Healthcare",
      "Manufacturing",
      "Marine Services",
    ],
    stats: {
      customers: "75+",
      responseTime: "<1.5 hr",
      yearsServing: "12+",
    },
  },
  "corpus-christi": {
    name: "Corpus Christi",
    state: "TX",
    responseTime: "Under 2 hours",
    description:
      "Industrial equipment repair services for the Corpus Christi area. Supporting the region's petrochemical, manufacturing, and port operations with fast, reliable service.",
    areas: [
      "Corpus Christi",
      "Portland",
      "Ingleside",
      "Rockport",
      "Aransas Pass",
      "Gregory",
      "Taft",
      "Sinton",
    ],
    industries: [
      "Petrochemical",
      "Port Operations",
      "Oil & Gas",
      "Wind Energy",
      "Manufacturing",
      "Tourism & Hospitality",
    ],
    stats: {
      customers: "50+",
      responseTime: "<2 hr",
      yearsServing: "10+",
    },
  },
  beaumont: {
    name: "Beaumont",
    state: "TX",
    responseTime: "Under 1.5 hours",
    description:
      "Serving the Golden Triangle with industrial equipment repair services. From refineries to manufacturing plants, we keep Beaumont's industries running.",
    areas: [
      "Beaumont",
      "Port Arthur",
      "Orange",
      "Vidor",
      "Nederland",
      "Groves",
      "Port Neches",
      "Bridge City",
    ],
    industries: [
      "Refining",
      "Petrochemical",
      "Manufacturing",
      "Shipbuilding",
      "Port Operations",
      "Lumber & Paper",
    ],
    stats: {
      customers: "60+",
      responseTime: "<1.5 hr",
      yearsServing: "11+",
    },
  },
  "port-arthur": {
    name: "Port Arthur",
    state: "TX",
    responseTime: "Under 1.5 hours",
    description:
      "24/7 industrial equipment repair in Port Arthur and the surrounding refinery corridor. We specialize in the heavy industrial equipment that powers this region's economy.",
    areas: [
      "Port Arthur",
      "Groves",
      "Port Neches",
      "Nederland",
      "Bridge City",
      "Orange",
      "Beaumont",
      "Sabine Pass",
    ],
    industries: [
      "Refining",
      "Petrochemical",
      "LNG Facilities",
      "Port Operations",
      "Manufacturing",
      "Marine Services",
    ],
    stats: {
      customers: "45+",
      responseTime: "<1.5 hr",
      yearsServing: "11+",
    },
  },
  "texas-city": {
    name: "Texas City",
    state: "TX",
    responseTime: "Under 1 hour",
    description:
      "Fast industrial equipment repair services for Texas City's major industrial facilities. Our proximity ensures rapid response for this critical industrial hub.",
    areas: [
      "Texas City",
      "La Marque",
      "Hitchcock",
      "Galveston",
      "Dickinson",
      "Santa Fe",
      "Kemah",
      "League City",
    ],
    industries: [
      "Refining",
      "Petrochemical",
      "Port Operations",
      "Manufacturing",
      "Logistics",
      "Marine Services",
    ],
    stats: {
      customers: "40+",
      responseTime: "<1 hr",
      yearsServing: "14+",
    },
  },
};

export function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }));
}

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const city = cities[params.city as keyof typeof cities];
  if (!city) return {};

  return {
    title: `Industrial Equipment Repair in ${city.name}, ${city.state}`,
    description: `24/7 industrial equipment repair in ${city.name}. HVAC, generators, machinery repair with ${city.responseTime} response time. Serving ${city.areas.slice(0, 3).join(", ")} and more.`,
    openGraph: {
      title: `Industrial Equipment Repair in ${city.name} | Gulf Coast Machine Services`,
      description: `24/7 industrial equipment repair in ${city.name}. ${city.responseTime} response time.`,
      url: `https://gulfcoastmachineservices.com/service-areas/${params.city}`,
    },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = cities[params.city as keyof typeof cities];

  if (!city) {
    notFound();
  }

  const services = [
    "Industrial HVAC Repair",
    "Generator Repair & Maintenance",
    "Industrial Machinery Repair",
    "24/7 Emergency Services",
    "Preventive Maintenance",
  ];

  return (
    <div className="bg-[var(--black)] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-1/2 h-full gradient-glow" />

        <div className="relative max-w-7xl mx-auto px-4">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 text-mono text-xs text-[var(--cream)]/60 uppercase tracking-wider mb-6 hover:text-[var(--warning)] transition-colors"
          >
            ← All Service Areas
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[var(--warning)]" />
              <span className="text-mono text-xs text-[var(--warning)] uppercase tracking-widest">
                {city.state} Service Area
              </span>
            </div>
            <h1 className="text-display text-5xl sm:text-6xl lg:text-7xl text-[var(--cream)] leading-[0.9] mb-6">
              Industrial Repair in<br />
              <span className="text-[var(--warning)]">{city.name}</span>
            </h1>
            <p className="text-lg text-[var(--cream)]/80 leading-relaxed mb-8">
              {city.description}
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-px bg-[var(--steel)]">
            <div className="bg-[var(--charcoal)] p-8 text-center">
              <span className="text-display text-4xl text-[var(--warning)] block">
                {city.stats.customers}
              </span>
              <span className="text-mono text-xs text-[var(--cream)]/60 uppercase tracking-wider">
                Local Customers
              </span>
            </div>
            <div className="bg-[var(--charcoal)] p-8 text-center">
              <span className="text-display text-4xl text-[var(--warning)] block">
                {city.stats.responseTime}
              </span>
              <span className="text-mono text-xs text-[var(--cream)]/60 uppercase tracking-wider">
                Response Time
              </span>
            </div>
            <div className="bg-[var(--charcoal)] p-8 text-center">
              <span className="text-display text-4xl text-[var(--warning)] block">
                {city.stats.yearsServing}
              </span>
              <span className="text-mono text-xs text-[var(--cream)]/60 uppercase tracking-wider">
                Years Serving
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-mono text-xs text-[var(--warning)] uppercase tracking-widest block mb-4">
                Coverage
              </span>
              <h2 className="text-display text-4xl text-[var(--cream)] mb-6">
                Areas We Serve in {city.name}
              </h2>
              <p className="text-[var(--cream)]/80 leading-relaxed mb-8">
                Our technicians provide service throughout {city.name} and the
                surrounding communities. We know the area and can reach you
                quickly when you need us.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {city.areas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3 p-3 bg-[var(--charcoal)] border border-[var(--steel)]"
                  >
                    <svg
                      className="size-4 text-[var(--warning)] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                    <span className="text-sm text-[var(--cream)]">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-mono text-xs text-[var(--warning)] uppercase tracking-widest block mb-4">
                Industries
              </span>
              <h2 className="text-display text-4xl text-[var(--cream)] mb-6">
                Industries We Serve
              </h2>
              <p className="text-[var(--cream)]/80 leading-relaxed mb-8">
                We have experience working with a wide range of industries in
                the {city.name} area, understanding the unique requirements of
                each sector.
              </p>
              <div className="space-y-3">
                {city.industries.map((industry) => (
                  <div
                    key={industry}
                    className="flex items-center gap-3 p-4 bg-[var(--charcoal)] border border-[var(--steel)] hover:border-[var(--warning)] transition-colors"
                  >
                    <svg
                      className="size-5 text-[var(--warning)] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="square" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--cream)]">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-20 border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-mono text-xs text-[var(--warning)] uppercase tracking-widest block mb-4">
              Our Services
            </span>
            <h2 className="text-display text-4xl text-[var(--cream)]">
              Services Available in {city.name}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service}
                href={`/services/${service.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                className="group p-6 bg-[var(--charcoal)] border border-[var(--steel)] hover:border-[var(--warning)] transition-all hover-lift"
              >
                <h3 className="text-display text-xl text-[var(--cream)] mb-2 group-hover:text-[var(--warning)] transition-colors">
                  {service}
                </h3>
                <span className="text-mono text-xs text-[var(--warning)] uppercase tracking-wider flex items-center gap-2">
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </Link>
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
                Need Service in {city.name}?
              </h2>
              <p className="text-[var(--black)]/80">
                Contact us today—we&apos;ll be there within {city.responseTime.toLowerCase()}.
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

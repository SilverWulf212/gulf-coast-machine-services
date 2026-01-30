import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Gulf Coast Machine Services",
  description: "Industrial HVAC repair, commercial generator services, machinery maintenance, and 24/7 emergency services across the Gulf Coast region.",
};

export default function Services() {
  const services = [
    {
      title: "Industrial HVAC Repair & Maintenance",
      description: "Complete repair and preventive maintenance for industrial heating, ventilation, and air conditioning systems. We handle everything from routine tune-ups to emergency repairs.",
      image: "/images/Google_AI_Studio_2025-08-29T14_37_43.625Z.png",
      features: ["Emergency repairs", "Preventive maintenance", "System upgrades", "Energy efficiency audits"]
    },
    {
      title: "Commercial Generator Services",
      description: "Expert installation, repair, and maintenance of commercial generators. Keep your business running during power outages with reliable backup power solutions.",
      image: "/images/Google_AI_Studio_2025-08-29T14_37_52.840Z.png",
      features: ["Generator repair", "Installation services", "Load testing", "Fuel system maintenance"]
    },
    {
      title: "Industrial Machinery Maintenance",
      description: "Comprehensive maintenance and repair services for all types of industrial machinery and equipment. Minimize downtime with our expert technicians.",
      image: "/images/Google_AI_Studio_2025-08-29T14_38_13.992Z.png",
      features: ["Diagnostic services", "Parts replacement", "Performance optimization", "Safety inspections"]
    },
    {
      title: "24/7 Emergency Services",
      description: "When equipment fails, every minute counts. Our emergency response team is available 24/7 to get your operations back online as quickly as possible.",
      image: "/images/Google_AI_Studio_2025-08-29T14_38_29.720Z.png",
      features: ["24/7 availability", "Rapid response", "On-site repairs", "Temporary solutions"]
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Gulf Coast Machine Services provides comprehensive industrial and commercial equipment repair and maintenance. 
          From emergency repairs to preventive maintenance, we're your trusted partner for all your machinery needs.
        </p>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="rounded-lg w-full"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
                <p className="text-lg mb-6">{service.description}</p>
                <h3 className="text-xl font-semibold mb-3">Key Services:</h3>
                <ul className="list-disc list-inside space-y-1 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Request Service
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Service Not Listed?</h2>
          <p className="text-xl mb-6">We provide custom solutions for unique equipment and machinery needs.</p>
          <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Contact Us for Custom Services
          </Link>
        </div>
      </div>
    </div>
  );
}
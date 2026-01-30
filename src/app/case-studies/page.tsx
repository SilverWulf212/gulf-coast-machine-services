import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Gulf Coast Machine Services",
  description: "Real success stories from Gulf Coast businesses. See how we've helped clients overcome equipment challenges and maintain operations.",
};

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Emergency Generator Repair - Manufacturing Plant",
      client: "ABC Manufacturing",
      location: "Houston, TX",
      challenge: "A critical generator failure during peak production hours threatened to shut down the entire manufacturing operation.",
      solution: "Our emergency response team arrived within 30 minutes, diagnosed a faulty fuel pump, and had the system back online in under 2 hours.",
      results: "Minimized downtime to just 2 hours instead of potentially days. Client avoided $50,000+ in lost production.",
      image: "/images/Google_AI_Studio_2025-08-29T14_38_33.947Z.png"
    },
    {
      title: "HVAC System Overhaul - Warehouse Facility",
      client: "Gulf Coast Distribution",
      location: "Galveston, TX",
      challenge: "Inefficient industrial HVAC system causing temperature fluctuations and high energy costs.",
      solution: "Complete system audit, replacement of outdated components, and implementation of preventive maintenance schedule.",
      results: "30% reduction in energy costs, improved temperature control, and extended equipment lifespan by 5+ years.",
      image: "/images/Google_AI_Studio_2025-08-29T14_39_21.706Z.png"
    },
    {
      title: "Conveyor System Emergency Repair",
      client: "Port Logistics Inc.",
      location: "Port Arthur, TX",
      challenge: "Critical conveyor belt failure at busy port facility, halting container operations.",
      solution: "Rapid on-site repair using specialized equipment and temporary bypass solutions while permanent fix was implemented.",
      results: "Operations resumed within 4 hours. Full repair completed during off-hours to avoid further disruption.",
      image: "/images/Google_AI_Studio_2025-08-29T14_39_39.680Z.png"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Case Studies</h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Real results from real clients. See how Gulf Coast Machine Services has helped businesses across the Gulf Coast 
          overcome equipment challenges and maintain operational efficiency.
        </p>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <Image src={study.image} alt={study.title} width={400} height={300} className="w-full h-48 md:h-full object-cover" />
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-semibold mb-2">{study.title}</h2>
                  <p className="text-blue-600 mb-4">{study.client} - {study.location}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold text-red-600 mb-2">Challenge</h3>
                      <p>{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-600 mb-2">Solution</h3>
                      <p>{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-600 mb-2">Results</h3>
                      <p>{study.results}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl mb-6">Don't let equipment issues slow down your business. Contact us today for expert repair services.</p>
          <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
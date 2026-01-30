import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Gulf Coast Machine Services",
  description: "Meet our expert team of certified technicians providing 24/7 industrial machine repair across the Gulf Coast since 2010.",
};

export default function About() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Gulf Coast Machine Services</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg mb-4">
              Founded in 2010, Gulf Coast Machine Services has been the trusted partner for industrial and commercial 
              equipment repair across the Gulf Coast region. What started as a small operation has grown into a 
              comprehensive service provider, but our commitment to quality and reliability remains unchanged.
            </p>
            <p className="text-lg mb-4">
              We understand that equipment failure can mean lost revenue and operational headaches. That's why 
              we prioritize fast response times, expert diagnostics, and lasting solutions.
            </p>
          </div>
          <div>
            <Image src="/images/team.jpg" alt="Our Team" width={500} height={300} className="rounded-lg" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Expert Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/ChatGPT Image Jan 6, 2026, 05_42_43 PM.png" alt="John Smith" width={150} height={150} className="rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">John Smith</h3>
            <p className="text-blue-600 mb-2">Lead Technician</p>
            <p>15+ years experience in industrial HVAC systems</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/ChatGPT Image Jan 6, 2026, 05_42_45 PM.png" alt="Sarah Johnson" width={150} height={150} className="rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Sarah Johnson</h3>
            <p className="text-blue-600 mb-2">Generator Specialist</p>
            <p>Certified in commercial generator repair and maintenance</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/ChatGPT Image Jan 6, 2026, 05_42_46 PM.png" alt="Mike Davis" width={150} height={150} className="rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Mike Davis</h3>
            <p className="text-blue-600 mb-2">Machinery Expert</p>
            <p>Specializes in industrial machinery diagnostics and repair</p>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>24/7 emergency response for critical breakdowns</li>
            <li>Certified technicians with industry expertise</li>
            <li>Comprehensive warranties on all repairs</li>
            <li>Preventive maintenance programs to avoid future issues</li>
            <li>Transparent pricing with no hidden fees</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
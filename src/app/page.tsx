import Image from "next/image";
import Link from "next/link";
import Carousel from "../components/Carousel";

export default function Home() {
  const heroImages = ["/images/Hero1.png", "/images/hero2.png", "/images/hero3.png"];

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Carousel */}
      <section className="relative">
        <Carousel images={heroImages} alt="Gulf Coast Machine Services" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              24/7 Emergency Machine Repair Gulf Coast
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Providing rapid, reliable, and expert machine services to the Gulf Coast region. 
              When equipment fails, we're here to get you back up and running fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold text-lg">
                Call Now: (555) 123-4567
              </Link>
              <Link href="/services" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image src="/images/Google_AI_Studio_2025-08-29T14_36_39.434Z.png" alt="Industrial HVAC" width={100} height={100} className="mx-auto mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">Industrial HVAC Repair</h3>
              <p>Expert repair and maintenance for industrial heating and cooling systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image src="/images/Google_AI_Studio_2025-08-29T14_36_59.118Z.png" alt="Commercial Generator" width={100} height={100} className="mx-auto mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">Commercial Generator Services</h3>
              <p>Reliable generator repair, maintenance, and emergency services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image src="/images/Google_AI_Studio_2025-08-29T14_37_10.073Z.png" alt="Industrial Machinery" width={100} height={100} className="mx-auto mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">Industrial Machinery Maintenance</h3>
              <p>Comprehensive maintenance and repair for all industrial equipment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image src="/images/Google_AI_Studio_2025-08-29T14_37_39.851Z.png" alt="24/7 Emergency" width={100} height={100} className="mx-auto mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency Services</h3>
              <p>Round-the-clock emergency repair services when you need us most.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Gulf Coast Machine Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Expert Technicians</h3>
              <p>Our certified technicians have years of experience in industrial equipment repair and maintenance.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">24/7 Availability</h3>
              <p>Emergency breakdowns don't wait for business hours. We're available around the clock.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
              <p>Serving the Gulf Coast region with deep knowledge of local industries and equipment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Emergency Repair?</h2>
          <p className="text-xl mb-8">Don't let equipment failure disrupt your business. Contact us now for fast, reliable service.</p>
          <Link href="/contact" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100">
            Get Help Now
          </Link>
        </div>
      </section>
    </div>
  );
}

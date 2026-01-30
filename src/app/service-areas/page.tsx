import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | Gulf Coast Machine Services",
  description: "Serving Houston, Galveston, Corpus Christi, Beaumont, Port Arthur and the entire Gulf Coast region with 24/7 emergency machine repair.",
};

export default function ServiceAreas() {
  const cities = [
    "Houston, TX", "Galveston, TX", "Corpus Christi, TX", "Beaumont, TX", 
    "Port Arthur, TX", "Texas City, TX", "League City, TX", "Baytown, TX",
    "Pasadena, TX", "La Porte, TX", "Deer Park, TX", "Channelview, TX",
    "Manvel, TX", "Alvin, TX", "Pearland, TX", "Friendswood, TX",
    "Kemah, TX", "Seabrook, TX", "Clear Lake Shores, TX", "El Lago, TX"
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Service Areas</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Gulf Coast Machine Services proudly serves the Gulf Coast region with fast, reliable industrial and commercial equipment repair. 
          Our local expertise ensures we understand the unique needs of your area.
        </p>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-6">Why Choose Local Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Faster Response Times</h3>
              <p>Local technicians mean quicker arrival for emergency repairs.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Regional Expertise</h3>
              <p>We understand local industries, weather conditions, and equipment types.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Community Support</h3>
              <p>Supporting local businesses and contributing to our community's success.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">Cities We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {cities.map((city, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <Link href={`/service-areas/${city.toLowerCase().replace(/, tx/g, '').replace(/ /g, '-')}`} className="text-blue-600 hover:text-blue-800">
                {city}
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your City?</h2>
          <p className="text-xl mb-6">We may still be able to serve your area. Contact us to discuss your specific location.</p>
          <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
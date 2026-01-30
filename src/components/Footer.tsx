import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Gulf Coast Machine Services</h3>
            <p>Providing rapid, reliable machine services to the Gulf Coast region, 24/7.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p>
              Phone:{' '}
              <a href="tel:+15551234567" className="hover:text-blue-300 transition-colors">
                (555) 123-4567
              </a>
            </p>
            <p>
              Email:{' '}
              <a href="mailto:info@gulfcoastmachines.com" className="hover:text-blue-300 transition-colors">
                info@gulfcoastmachines.com
              </a>
            </p>
            <address className="not-italic">
              123 Industrial Blvd, Gulf City, TX 12345
            </address>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="hover:text-blue-300 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/service-areas" className="hover:text-blue-300 transition-colors">
                    Service Areas
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-300 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-8">
          <p>&copy; {new Date().getFullYear()} Gulf Coast Machine Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

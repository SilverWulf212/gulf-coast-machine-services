import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] border-t-4 border-[var(--warning)]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-12 bg-[var(--warning)] flex items-center justify-center">
                <span className="text-display text-2xl text-[var(--black)] font-bold">GC</span>
              </div>
              <div>
                <span className="text-display text-xl text-[var(--cream)] tracking-wide block">
                  Gulf Coast
                </span>
                <span className="text-mono text-[10px] text-[var(--cream)]/70 tracking-widest uppercase">
                  Machine Services
                </span>
              </div>
            </div>
            <p className="text-[var(--cream)]/80 text-sm leading-relaxed mb-6">
              Industrial machine repair specialists serving the Gulf Coast region.
              24/7 emergency response. Zero downtime tolerance.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="size-10 border border-[var(--steel)] flex items-center justify-center text-[var(--cream)]/80 hover:text-[var(--warning)] hover:border-[var(--warning)] transition-colors"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-display text-lg text-[var(--cream)] mb-6 tracking-wide">Services</h3>
            <ul className="space-y-3">
              {['Industrial HVAC', 'Generator Repair', 'Machinery Maintenance', 'Emergency Response', 'Preventive Care'].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-mono text-sm text-[var(--cream)]/80 hover:text-[var(--warning)] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-2 h-[2px] bg-[var(--steel)] group-hover:bg-[var(--warning)] group-hover:w-4 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-display text-lg text-[var(--cream)] mb-6 tracking-wide">Coverage</h3>
            <ul className="space-y-3">
              {['Houston', 'Galveston', 'Corpus Christi', 'Beaumont', 'Port Arthur'].map((item) => (
                <li key={item}>
                  <Link
                    href="/service-areas"
                    className="text-mono text-sm text-[var(--cream)]/80 hover:text-[var(--warning)] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-2 h-[2px] bg-[var(--steel)] group-hover:bg-[var(--warning)] group-hover:w-4 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-display text-lg text-[var(--cream)] mb-6 tracking-wide">Contact</h3>
            <div className="space-y-4">
              <div>
                <span className="text-mono text-[10px] text-[var(--cream)]/70 uppercase tracking-widest block mb-1">
                  Emergency Line
                </span>
                <a
                  href="tel:+15551234567"
                  className="text-display text-2xl text-[var(--warning)] hover:underline"
                >
                  (555) 123-4567
                </a>
              </div>
              <div>
                <span className="text-mono text-[10px] text-[var(--cream)]/70 uppercase tracking-widest block mb-1">
                  Email
                </span>
                <a
                  href="mailto:info@gulfcoastmachines.com"
                  className="text-mono text-sm text-[var(--cream)]/80 hover:text-[var(--warning)] transition-colors"
                >
                  info@gulfcoastmachines.com
                </a>
              </div>
              <div>
                <span className="text-mono text-[10px] text-[var(--cream)]/70 uppercase tracking-widest block mb-1">
                  Address
                </span>
                <address className="text-mono text-sm text-[var(--cream)]/80 not-italic">
                  123 Industrial Blvd<br />
                  Gulf City, TX 12345
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-mono text-xs text-[var(--cream)]/70">
              © {new Date().getFullYear()} Gulf Coast Machine Services. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/faq" className="text-mono text-xs text-[var(--cream)]/70 hover:text-[var(--warning)] transition-colors">
                FAQ
              </Link>
              <Link href="/blog" className="text-mono text-xs text-[var(--cream)]/70 hover:text-[var(--warning)] transition-colors">
                Blog
              </Link>
              <Link href="/privacy" className="text-mono text-xs text-[var(--cream)]/70 hover:text-[var(--warning)] transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-mono text-xs text-[var(--cream)]/70 hover:text-[var(--warning)] transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
              Servicing the oil field for 25+ years in the machining industry.
              API Licensed Shop. 24/7 rush job capabilities.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/gulfcoastmachineservices"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="size-10 border border-[var(--steel)] flex items-center justify-center text-[var(--cream)]/80 hover:text-[var(--warning)] hover:border-[var(--warning)] transition-colors"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-display text-lg text-[var(--cream)] mb-6 tracking-wide">Services</h3>
            <ul className="space-y-3">
              {['Mud Motor Components', 'Oil Field Machining', 'Welding & Fabrication', 'Stabilizer Grinding', '24/7 Rush Jobs'].map((item) => (
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
              {['Broussard, LA', 'Lafayette, LA', 'Spring, TX', 'Houston, TX', 'Gulf Coast Region'].map((item) => (
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
                  Broussard, LA
                </span>
                <a
                  href="tel:+13378373175"
                  className="text-display text-xl text-[var(--warning)] hover:underline"
                >
                  (337) 837-3175
                </a>
                <address className="text-mono text-xs text-[var(--cream)]/60 not-italic mt-1">
                  436 North Eola<br />
                  Broussard, LA 70570
                </address>
              </div>
              <div>
                <span className="text-mono text-[10px] text-[var(--cream)]/70 uppercase tracking-widest block mb-1">
                  Spring, TX
                </span>
                <a
                  href="tel:+12819070430"
                  className="text-display text-xl text-[var(--warning)] hover:underline"
                >
                  (281) 907-0430
                </a>
                <address className="text-mono text-xs text-[var(--cream)]/60 not-italic mt-1">
                  5053 FM 2920 Road<br />
                  Spring, TX 77388
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

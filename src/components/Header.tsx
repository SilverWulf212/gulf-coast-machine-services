"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/service-areas', label: 'Areas' },
  { href: '/case-studies', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-[var(--black)]/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      {/* Top Bar - Emergency Line */}
      <div className="bg-[var(--warning)] text-[var(--black)]">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <span className="text-mono text-xs font-medium tracking-wide">
            24/7 EMERGENCY RESPONSE
          </span>
          <a
            href="tel:+15551234567"
            className="text-display text-sm font-bold hover:underline flex items-center gap-2"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="square" strokeLinejoin="miter" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (555) 123-4567
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-[var(--steel)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="size-10 bg-[var(--warning)] flex items-center justify-center">
                <span className="text-display text-xl text-[var(--black)] font-bold">GC</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-display text-lg text-[var(--cream)] tracking-wide">
                  Gulf Coast
                </span>
                <span className="block text-mono text-[10px] text-[var(--cream)]/70 tracking-widest uppercase">
                  Machine Services
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block" aria-label="Main navigation">
              <ul className="flex items-center">
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative px-4 py-6 text-mono text-sm text-[var(--cream)]/90 hover:text-[var(--cream)] transition-colors duration-150 uppercase tracking-wider group"
                    >
                      <span className="relative z-10">{link.label}</span>
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--warning)] scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left" />
                    </Link>
                  </li>
                ))}
                <li className="ml-4">
                  <Link href="/contact" className="btn-industrial text-sm py-3 px-5">
                    Get Quote
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden size-12 flex items-center justify-center border border-[var(--steel)] hover:border-[var(--warning)] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="relative size-5">
                <span
                  className={`absolute left-0 w-full h-0.5 bg-[var(--cream)] transition-all duration-200 ${
                    isMenuOpen ? 'top-2 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 w-full h-0.5 bg-[var(--cream)] transition-opacity duration-200 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 w-full h-0.5 bg-[var(--cream)] transition-all duration-200 ${
                    isMenuOpen ? 'top-2 -rotate-45' : 'top-4'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className={`lg:hidden bg-[var(--charcoal)] border-b border-[var(--steel)] overflow-hidden transition-all duration-200 ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-label="Mobile navigation"
      >
        <ul className="px-4 py-4 space-y-1">
          {navLinks.map((link, index) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-3 px-4 text-mono text-sm text-[var(--cream)]/90 hover:text-[var(--cream)] hover:bg-[var(--steel)] transition-colors uppercase tracking-wider border-l-2 border-transparent hover:border-[var(--warning)]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              href="/contact"
              className="btn-industrial w-full justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

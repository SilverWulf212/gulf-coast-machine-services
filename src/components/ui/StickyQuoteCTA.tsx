"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface StickyQuoteCTAProps {
  phone?: string;
  showAfterScroll?: number;
}

export function StickyQuoteCTA({
  phone = "+15551234567",
  showAfterScroll = 500,
}: StickyQuoteCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfterScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfterScroll]);

  return (
    <div
      className={`sticky-cta lg:hidden ${isVisible ? "visible" : ""}`}
    >
      <div className="bg-[var(--charcoal)] border-t border-[var(--steel)] p-4 flex gap-3">
        <a
          href={`tel:${phone}`}
          className="flex-1 btn-industrial justify-center text-sm py-3"
        >
          <svg
            className="size-4"
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
        <Link
          href="/contact"
          className="flex-1 btn-outline justify-center text-sm py-3"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}

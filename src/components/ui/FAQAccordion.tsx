"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`divide-y divide-[var(--steel)] ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-trigger text-[var(--cream)] hover:text-[var(--warning)] transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="text-display text-lg text-left pr-4">
              {item.question}
            </span>
            <svg
              className={`accordion-icon size-5 flex-shrink-0 text-[var(--warning)] transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 pb-6" : "max-h-0"
            }`}
          >
            <p className="text-[var(--cream)]/80 leading-relaxed pl-0">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

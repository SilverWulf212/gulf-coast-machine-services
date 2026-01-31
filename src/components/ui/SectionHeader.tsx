"use client";

import { useRef, useEffect, useState } from "react";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  tag,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`mb-12 lg:mb-16 reveal ${isVisible ? "visible" : ""} ${
        align === "center" ? "text-center" : ""
      } ${className}`}
    >
      <div
        className={`inline-flex items-center gap-3 mb-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="w-8 h-[2px] bg-[var(--warning)]" />
        <span className="text-mono text-xs text-[var(--warning)] uppercase tracking-widest">
          {tag}
        </span>
        {align === "center" && (
          <span className="w-8 h-[2px] bg-[var(--warning)]" />
        )}
      </div>
      <h2 className="text-display text-4xl sm:text-5xl text-[var(--cream)] mb-4">
        {title}
      </h2>
      <div
        className={`section-divider ${align === "center" ? "mx-auto" : ""} mb-6`}
      />
      {description && (
        <p
          className={`text-[var(--cream)]/80 max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

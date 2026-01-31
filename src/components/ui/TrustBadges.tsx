"use client";

import { useRef, useEffect, useState } from "react";

interface TrustBadge {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface TrustBadgesProps {
  badges: TrustBadge[];
  className?: string;
}

export function TrustBadges({ badges, className = "" }: TrustBadgesProps) {
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
      className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--steel)] ${className}`}
    >
      {badges.map((badge, index) => (
        <div
          key={badge.label}
          className={`bg-[var(--charcoal)] p-6 text-center transition-all duration-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="flex justify-center mb-3 text-[var(--warning)]">
            {badge.icon}
          </div>
          <p className="text-display text-2xl text-[var(--cream)] mb-1">
            {badge.value}
          </p>
          <p className="text-mono text-xs text-[var(--cream)]/60 uppercase tracking-wider">
            {badge.label}
          </p>
        </div>
      ))}
    </div>
  );
}

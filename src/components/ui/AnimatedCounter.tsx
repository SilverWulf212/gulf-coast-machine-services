"use client";

import { useRef, useState, useEffect } from "react";

interface AnimatedCounterProps {
  value: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
          const duration = 1500;
          const steps = 40;
          const increment = numericValue / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              setDisplay(value);
              clearInterval(timer);
            } else {
              setDisplay(
                Math.floor(current).toString() +
                  (value.includes("+") ? "+" : "")
              );
            }
          }, duration / steps);

          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

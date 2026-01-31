"use client";

import { ReactNode } from "react";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  hover3d?: boolean;
  accentPosition?: "top" | "left" | "none";
}

export function PremiumCard({
  children,
  className = "",
  hover3d = false,
  accentPosition = "left",
}: PremiumCardProps) {
  return (
    <div
      className={`card-premium ${hover3d ? "card-3d" : ""} p-6 lg:p-8 ${className}`}
    >
      {accentPosition === "left" && (
        <div className="absolute top-0 left-0 w-1 h-full bg-[var(--warning)]" />
      )}
      {children}
    </div>
  );
}

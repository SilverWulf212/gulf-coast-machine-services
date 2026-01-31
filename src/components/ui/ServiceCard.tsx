"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  image?: string;
  icon?: ReactNode;
  href?: string;
  popular?: boolean;
}

export function ServiceCard({
  id,
  title,
  description,
  features,
  image,
  icon,
  href = "/contact",
  popular = false,
}: ServiceCardProps) {
  return (
    <div className="card-premium card-3d group relative">
      {popular && (
        <div className="absolute -top-3 right-6 z-10">
          <span className="badge-warning">
            <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Most Popular
          </span>
        </div>
      )}

      {image && (
        <div className="relative aspect-video mb-6 overflow-hidden -mx-6 -mt-6 lg:-mx-8 lg:-mt-8">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] to-transparent" />
          <span className="absolute bottom-4 left-4 lg:left-6 text-mono text-xs text-[var(--cream)]/60">
            {id}
          </span>
        </div>
      )}

      {!image && (
        <div className="flex items-start justify-between mb-6">
          <span className="text-mono text-xs text-[var(--cream)]/60">{id}</span>
          {icon && (
            <div className="text-[var(--cream)]/80 group-hover:text-[var(--warning)] transition-colors">
              {icon}
            </div>
          )}
        </div>
      )}

      <div className={image ? "px-6 pb-6 lg:px-8 lg:pb-8" : ""}>
        <h3 className="text-display text-2xl text-[var(--cream)] mb-3">
          {title}
        </h3>
        <p className="text-[var(--cream)]/80 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm text-[var(--cream)]/70"
              >
                <svg
                  className="size-4 text-[var(--warning)] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-mono text-xs text-[var(--warning)] uppercase tracking-wider group-hover:gap-4 transition-all"
        >
          Request Service
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}

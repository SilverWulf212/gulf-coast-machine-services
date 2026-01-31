"use client";

import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export function TeamMemberCard({
  name,
  role,
  image,
  bio,
}: TeamMemberCardProps) {
  return (
    <div className="team-card group">
      <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-[var(--charcoal)]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover team-card-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="border-l-2 border-[var(--steel)] group-hover:border-[var(--warning)] pl-4 transition-colors">
        <h3 className="text-display text-xl text-[var(--cream)] mb-1">
          {name}
        </h3>
        <p className="text-mono text-xs text-[var(--warning)] uppercase tracking-wider mb-2">
          {role}
        </p>
        {bio && (
          <p className="text-[var(--cream)]/70 text-sm leading-relaxed">
            {bio}
          </p>
        )}
      </div>
    </div>
  );
}

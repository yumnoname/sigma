"use client";

import { useMemo } from "react";

interface Star {
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
}

/** Deterministic pseudo-random so the star layout doesn't shift between renders. */
function makeStars(count: number): Star[] {
  let seed = 42;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  return Array.from({ length: count }, () => ({
    top: `${(rand() * 100).toFixed(2)}%`,
    left: `${(rand() * 100).toFixed(2)}%`,
    size: rand() > 0.85 ? 2 : 1,
    delay: rand() * 4,
    duration: 2.5 + rand() * 3,
  }));
}

export function StarField({ count = 140 }: { count?: number }) {
  const stars = useMemo(() => makeStars(count), [count]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

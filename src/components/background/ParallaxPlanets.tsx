"use client";

import { useMotion } from "@/hooks/useMotion";
import { useMouseParallax } from "@/hooks/useMouseParallax";

interface PlanetConfig {
  top: string;
  left: string;
  size: number;
  palette: [string, string];
  depth: number; // how strongly it reacts to the pointer — background = subtle
  floatDelay: number;
}

const PLANETS: PlanetConfig[] = [
  { top: "14%", left: "4%", size: 120, palette: ["#c98a52", "#4a2f18"], depth: 14, floatDelay: 0 },
  { top: "55%", left: "1%", size: 70, palette: ["#7fb3c9", "#20404a"], depth: 22, floatDelay: 1.2 },
  { top: "78%", left: "9%", size: 150, palette: ["#4a7fb8", "#0f2436"], depth: 10, floatDelay: 0.6 },
  { top: "8%", left: "92%", size: 40, palette: ["#9cd6a0", "#204a26"], depth: 26, floatDelay: 2 },
  { top: "38%", left: "95%", size: 90, palette: ["#c9c0f2", "#3a3260"], depth: 16, floatDelay: 0.9 },
  { top: "70%", left: "90%", size: 60, palette: ["#e0e0e0", "#4a4a4a"], depth: 20, floatDelay: 1.6 },
];

export function ParallaxPlanets() {
  const { motionOn } = useMotion();
  const tilt = useMouseParallax(motionOn);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Oversized ghost-text of the owner's name, drifting opposite the planets */}
      <div
        className="absolute left-[-2%] top-[18%] select-none font-display text-[9rem] font-semibold leading-none text-white/[0.04] transition-transform duration-300 ease-out sm:text-[12rem]"
        style={{ transform: `translate3d(${tilt.x * -12}px, ${tilt.y * -8}px, 0)` }}
      >
        Thành
      </div>
      <div
        className="absolute bottom-[6%] left-[2%] select-none font-display text-[7rem] font-semibold leading-none text-white/[0.035] transition-transform duration-300 ease-out sm:text-[9rem]"
        style={{ transform: `translate3d(${tilt.x * -8}px, ${tilt.y * -6}px, 0)` }}
      >
        Minh
      </div>

      {PLANETS.map((planet, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-80 shadow-glow animate-float-slow"
          style={{
            top: planet.top,
            left: planet.left,
            width: planet.size,
            height: planet.size,
            background: `radial-gradient(circle at 32% 28%, ${planet.palette[0]}, ${planet.palette[1]})`,
            animationDelay: `${planet.floatDelay}s`,
            transform: `translate3d(${tilt.x * planet.depth}px, ${tilt.y * planet.depth}px, 0)`,
            transition: "transform 300ms ease-out",
          }}
        />
      ))}
    </div>
  );
}

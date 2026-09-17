"use client";

import { Sparkles, PauseCircle, PlayCircle } from "lucide-react";
import { useMotion } from "@/hooks/useMotion";

export function SiteHeader({ onExploreGalaxy }: { onExploreGalaxy: () => void }) {
  const { motionOn, toggleMotion } = useMotion();

  return (
    <header className="relative z-20 mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-6 sm:px-10">
      <div className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-sm font-bold text-black">
          S
        </span>
        <span className="font-display text-lg font-semibold tracking-tight">senni.</span>
      </div>

      <p className="hidden font-mono text-[11px] tracking-[0.3em] text-mist-400 md:block">
        A SMALL CORNER OF MY UNIVERSE
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={onExploreGalaxy}
          className="flex items-center gap-2 rounded-full bg-nebula-500/90 px-4 py-2 text-sm font-medium text-white shadow-glow transition hover:bg-nebula-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nebula-300"
        >
          <Sparkles size={15} />
          Explore galaxy
        </button>
        <button
          onClick={toggleMotion}
          aria-pressed={motionOn}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-mist-300 transition hover:border-white/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nebula-300"
        >
          {motionOn ? <PauseCircle size={15} /> : <PlayCircle size={15} />}
          Motion
        </button>
      </div>
    </header>
  );
}

"use client";

import { ArrowUpRight } from "lucide-react";
import { storyTeaser } from "@/data/profile";

export function StorySection({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="mb-8">
      <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-mist-500">
        02 · {storyTeaser.eyebrow}
      </p>
      <div className="border-l-2 border-nebula-500/60 pl-4">
        <h2 className="font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
          {storyTeaser.heading[0]}
          <br />
          <span className="bg-gradient-to-r from-nebula-300 to-nebula-500 bg-clip-text text-transparent">
            {storyTeaser.heading[1]}
          </span>
        </h2>
      </div>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-mist-400">{storyTeaser.teaser}</p>
      <button
        onClick={onOpen}
        className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-sm text-mist-200 transition hover:border-nebula-400/50 hover:text-white"
      >
        Read my story
        <ArrowUpRight size={14} />
      </button>
    </div>
  );
}

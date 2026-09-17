"use client";

import { useState } from "react";
import { Pause, Play, SkipBack, SkipForward, Volume2, X } from "lucide-react";
import { useMusicPlayer } from "@/hooks/useMusicPlayer";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

export function MusicPlayer({
  title = "Cũng Đành Thôi",
  artist = "Senni Nguyễn",
  src = "/audio/track.mp3",
}: {
  title?: string;
  artist?: string;
  src?: string;
}) {
  const [visible, setVisible] = useState(true);
  const { isPlaying, toggle, progress, duration, seek, volume, setVol, skip } =
    useMusicPlayer(src);

  if (!visible) return null;

  return (
    <div className="glass-panel fixed bottom-5 right-5 z-30 w-[300px] rounded-2xl p-4 shadow-glow">
      <div className="mb-3 flex items-center gap-3">
        <div
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-gradient-to-br from-nebula-500/60 to-black ${
            isPlaying ? "animate-spin-slower" : ""
          }`}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-white">{title}</p>
          <p className="truncate text-xs text-mist-500">{artist}</p>
        </div>
        <button
          onClick={() => setVisible(false)}
          aria-label="Close player"
          className="text-mist-500 transition hover:text-white"
        >
          <X size={15} />
        </button>
      </div>

      <div className="mb-2 flex items-center gap-2 text-[10px] text-mist-500">
        <span className="w-8 shrink-0 font-mono">{formatTime(progress)}</span>
        <input
          type="range"
          className="scrub w-full"
          min={0}
          max={duration || 0}
          step={0.1}
          value={progress}
          onChange={(e) => seek(Number(e.target.value))}
        />
        <span className="w-8 shrink-0 text-right font-mono">{formatTime(duration)}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => skip(-10)} aria-label="Back 10s" className="text-mist-400 hover:text-white">
            <SkipBack size={16} />
          </button>
          <button
            onClick={toggle}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="grid h-8 w-8 place-items-center rounded-full bg-white text-black transition hover:scale-105"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
          </button>
          <button onClick={() => skip(10)} aria-label="Forward 10s" className="text-mist-400 hover:text-white">
            <SkipForward size={16} />
          </button>
        </div>
        <div className="flex items-center gap-1.5">
          <Volume2 size={14} className="text-mist-500" />
          <input
            type="range"
            className="scrub w-16"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVol(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}

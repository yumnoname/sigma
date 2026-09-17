"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { StarField } from "@/components/background/StarField";
import { galaxyBodies, galaxyTags } from "@/data/profile";
import { GalaxyBodyView } from "./GalaxyBodyView";
import { GalaxyTagView } from "./GalaxyTagView";
import { GalaxyControls } from "./GalaxyControls";

const MIN_SCALE = 0.5;
const MAX_SCALE = 2.6;

export function GalaxyExplorer({ onClose }: { onClose: () => void }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [autoOrbit, setAutoOrbit] = useState(true);
  const [paused, setPaused] = useState(false);

  const dragging = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });
  const orbitAngle = useRef(0);
  const rafId = useRef<number>();

  // Auto-orbit: gently drifts the camera in a slow circle around the black hole.
  useEffect(() => {
    if (!autoOrbit || paused) return;

    const tick = () => {
      orbitAngle.current += 0.0018;
      setOffset({
        x: Math.cos(orbitAngle.current) * 40,
        y: Math.sin(orbitAngle.current) * 24,
      });
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [autoOrbit, paused]);

  function handlePointerDown(e: React.PointerEvent) {
    dragging.current = true;
    lastPointer.current = { x: e.clientX, y: e.clientY };
    setAutoOrbit(false); // taking manual control stops the orbit drift
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!dragging.current) return;
    const dx = e.clientX - lastPointer.current.x;
    const dy = e.clientY - lastPointer.current.y;
    lastPointer.current = { x: e.clientX, y: e.clientY };
    setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
  }

  function handlePointerUp() {
    dragging.current = false;
  }

  function handleWheel(e: React.WheelEvent) {
    e.preventDefault();
    setScale((s) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, s - e.deltaY * 0.0012)));
  }

  function focusBlackHole() {
    setAutoOrbit(false);
    setOffset({ x: 0, y: 0 });
    setScale(1.8);
  }

  function wideView() {
    setAutoOrbit(false);
    setOffset({ x: 0, y: 0 });
    setScale(MIN_SCALE);
  }

  return (
    <div
      className="fixed inset-0 z-50 cursor-grab overflow-hidden bg-[#05060a] active:cursor-grabbing"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onWheel={handleWheel}
    >
      <StarField count={220} />

      {/* World layer — pan (offset) + zoom (scale) applied here */}
      <div
        className="absolute left-1/2 top-1/2 transition-transform"
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${scale})`,
          transitionDuration: dragging.current ? "0ms" : "600ms",
        }}
      >
        {/* Black hole + accretion disk, centred at the world origin */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2">
          <div
            className={`h-16 w-52 rounded-[50%] bg-gradient-to-r from-ember-600 via-ember-400 to-ember-600 opacity-80 shadow-glow-ember ${
              paused ? "" : "animate-spin-slow"
            }`}
          />
          <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-[0_0_60px_20px_rgba(0,0,0,0.9)]" />
        </div>

        {galaxyBodies.map((body) => (
          <GalaxyBodyView key={body.id} body={body} paused={paused} />
        ))}
        {galaxyTags.map((tag) => (
          <GalaxyTagView key={tag.id} tag={tag} />
        ))}
      </div>

      {/* HUD */}
      <div className="pointer-events-none fixed left-6 top-6 z-40">
        <p className="text-[11px] uppercase tracking-[0.3em] text-mist-500">A universe of our own</p>
        <h2 className="font-display text-2xl font-semibold text-white">
          Senni Nguyễn <span className="text-nebula-400">✦</span>
        </h2>
        <p className="mt-1 text-xs text-mist-500">Drag to explore · Scroll to move closer</p>
      </div>

      <button
        onClick={onClose}
        className="fixed right-6 top-6 z-40 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-mist-300 transition hover:border-white/25 hover:text-white"
      >
        <X size={13} />
        Back to profile
      </button>

      <GalaxyControls
        autoOrbit={autoOrbit}
        onToggleOrbit={() => setAutoOrbit((v) => !v)}
        onFocusBlackHole={focusBlackHole}
        onWideView={wideView}
        paused={paused}
        onTogglePause={() => setPaused((v) => !v)}
      />
    </div>
  );
}

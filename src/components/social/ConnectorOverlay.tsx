"use client";

import { useEffect, useState } from "react";
import { useConnector } from "@/hooks/useConnector";
import { useMotion } from "@/hooks/useMotion";

export function ConnectorOverlay() {
  const { containerRef, sourceRef, activeTarget } = useConnector();
  const { motionOn } = useMotion();
  const [path, setPath] = useState<string | null>(null);

  useEffect(() => {
    if (!activeTarget || !motionOn) {
      setPath(null);
      return;
    }

    let frame: number;
    const update = () => {
      const container = containerRef.current;
      const source = sourceRef.current;
      if (!container || !source) return;

      const containerBox = container.getBoundingClientRect();
      const from = source.getBoundingClientRect();
      const to = activeTarget.getBoundingClientRect();

      const x1 = from.left + from.width / 2 - containerBox.left;
      const y1 = from.top + from.height / 2 - containerBox.top;
      const x2 = to.left - containerBox.left;
      const y2 = to.top + to.height / 2 - containerBox.top;

      const midX = (x1 + x2) / 2;
      setPath(`M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`);
      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [activeTarget, containerRef, sourceRef, motionOn]);

  if (!path) return null;

  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden>
      <path
        d={path}
        fill="none"
        stroke="url(#connector-gradient)"
        strokeWidth={1.5}
        strokeDasharray="6 5"
        className="animate-dash-draw"
        style={{ strokeDashoffset: 0 }}
      />
      <defs>
        <linearGradient id="connector-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8b7cf3" stopOpacity="0" />
          <stop offset="100%" stopColor="#c6bdfb" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

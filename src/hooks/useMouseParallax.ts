"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks the pointer position relative to the viewport centre and returns a
 * normalized [-1, 1] value on each axis. Consumers multiply this by however
 * many pixels/degrees of parallax they want for a given layer — background
 * planets move a little, foreground ones move more.
 */
export function useMouseParallax(enabled = true) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const frame = useRef<number>();

  useEffect(() => {
    if (!enabled) {
      setTilt({ x: 0, y: 0 });
      return;
    }

    function handlePointerMove(event: PointerEvent) {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const nx = (event.clientX / window.innerWidth) * 2 - 1;
        const ny = (event.clientY / window.innerHeight) * 2 - 1;
        setTilt({ x: nx, y: ny });
      });
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [enabled]);

  return tilt;
}

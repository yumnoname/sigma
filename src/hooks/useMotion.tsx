"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface MotionContextValue {
  motionOn: boolean;
  toggleMotion: () => void;
}

const MotionContext = createContext<MotionContextValue | null>(null);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [motionOn, setMotionOn] = useState(true);

  // Reflect the toggle onto <html data-motion="on|off"> so plain CSS
  // (see globals.css) can freeze every animation/transition at once —
  // no need to thread a prop through every animated component.
  useEffect(() => {
    document.documentElement.dataset.motion = motionOn ? "on" : "off";
  }, [motionOn]);

  const value = useMemo(
    () => ({ motionOn, toggleMotion: () => setMotionOn((v) => !v) }),
    [motionOn]
  );

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

export function useMotion() {
  const ctx = useContext(MotionContext);
  if (!ctx) throw new Error("useMotion must be used within a MotionProvider");
  return ctx;
}

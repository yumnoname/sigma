"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react";

interface ConnectorContextValue {
  containerRef: RefObject<HTMLDivElement>;
  sourceRef: RefObject<HTMLDivElement>;
  activeTarget: HTMLElement | null;
  setActiveTarget: (el: HTMLElement | null) => void;
}

const ConnectorContext = createContext<ConnectorContextValue | null>(null);

/**
 * Wraps the whole hero card. Exposes a `containerRef` (mount on the card's
 * outer div) and `sourceRef` (mount on the avatar) so any descendant — e.g.
 * each social-link button — can register itself as the current hover target
 * and have <ConnectorOverlay /> draw a glowing curve to it.
 */
export function ConnectorProvider({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sourceRef = useRef<HTMLDivElement>(null);
  const [activeTarget, setActiveTargetState] = useState<HTMLElement | null>(null);

  const setActiveTarget = useCallback((el: HTMLElement | null) => setActiveTargetState(el), []);

  const value = useMemo(
    () => ({ containerRef, sourceRef, activeTarget, setActiveTarget }),
    [activeTarget, setActiveTarget]
  );

  return <ConnectorContext.Provider value={value}>{children}</ConnectorContext.Provider>;
}

export function useConnector() {
  const ctx = useContext(ConnectorContext);
  if (!ctx) throw new Error("useConnector must be used within a ConnectorProvider");
  return ctx;
}

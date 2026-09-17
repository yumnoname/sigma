"use client";

import { useEffect, useState } from "react";

interface Options {
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseAfterTypeMs?: number;
  pauseAfterDeleteMs?: number;
  /** When false, freezes on the first full string (respects the Motion toggle). */
  enabled?: boolean;
}

/**
 * Cycles through `phrases`, typing each one out, holding, deleting, then
 * moving to the next — matches the looping "Cheats for all games…" caret
 * effect seen in the reference video.
 */
export function useTypewriter(phrases: string[], options: Options = {}) {
  const {
    typingSpeedMs = 45,
    deletingSpeedMs = 28,
    pauseAfterTypeMs = 1600,
    pauseAfterDeleteMs = 300,
    enabled = true,
  } = options;

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    if (!enabled) {
      setText(phrases[0] ?? "");
      return;
    }
    if (phrases.length === 0) return;

    const current = phrases[phraseIndex % phrases.length]!;
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeedMs);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), pauseAfterTypeMs);
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), deletingSpeedMs);
      } else {
        timeout = setTimeout(() => {
          setPhraseIndex((i) => (i + 1) % phrases.length);
          setPhase("typing");
        }, pauseAfterDeleteMs);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    phase,
    phraseIndex,
    phrases,
    enabled,
    typingSpeedMs,
    deletingSpeedMs,
    pauseAfterTypeMs,
    pauseAfterDeleteMs,
  ]);

  return text;
}

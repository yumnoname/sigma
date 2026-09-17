"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { storyModal } from "@/data/profile";

export function StoryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-modal-title"
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-panel animate-modal-in max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl p-8 shadow-glow"
      >
        <div className="mb-6 flex items-start justify-between">
          <h2 id="story-modal-title" className="font-display text-2xl font-semibold text-white">
            {storyModal.title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-mist-400 transition hover:text-white"
          >
            <X size={16} />
          </button>
        </div>

        <div className="space-y-4">
          {storyModal.paragraphs.map((p, i) => (
            <p
              key={i}
              className={
                p.emphasis
                  ? "font-display text-lg font-medium text-nebula-200"
                  : "text-sm leading-relaxed text-mist-300"
              }
            >
              {p.text}
            </p>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4 text-sm">
          <span className="font-display italic text-mist-200">{storyModal.signature}</span>
          <span className="font-mono text-xs text-mist-500">24322</span>
        </div>
      </div>
    </div>,
    document.body
  );
}

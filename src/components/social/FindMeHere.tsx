"use client";

import {
  ArrowUpRight,
  Facebook,
  Gamepad2,
  Github,
  Link2,
  MessageCircle,
  Music2,
  type LucideIcon,
} from "lucide-react";
import { socialLinks } from "@/data/profile";
import { useConnector } from "@/hooks/useConnector";

const ICONS: Record<string, LucideIcon> = {
  "message-circle": MessageCircle,
  "music-2": Music2,
  github: Github,
  facebook: Facebook,
  "link-2": Link2,
  "gamepad-2": Gamepad2,
};

export function FindMeHere() {
  const { setActiveTarget } = useConnector();

  return (
    <div>
      <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-mist-500">03 · Find me here</p>
      <div className="grid grid-cols-2 gap-3">
        {socialLinks.map((link) => {
          const Icon = ICONS[link.icon] ?? Link2;
          return (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={(e) => setActiveTarget(e.currentTarget)}
              onMouseLeave={() => setActiveTarget(null)}
              onFocus={(e) => setActiveTarget(e.currentTarget)}
              onBlur={() => setActiveTarget(null)}
              className="group flex items-center gap-2.5 rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-3 text-sm text-mist-200 transition hover:border-nebula-400/50 hover:bg-white/[0.06]"
            >
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/5 text-nebula-300">
                <Icon size={15} />
              </span>
              <span className="flex-1">{link.label}</span>
              <ArrowUpRight
                size={14}
                className="text-mist-500 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

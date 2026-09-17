import { Heart, MessageCircle, Music2, Sparkle } from "lucide-react";
import type { GalaxyTag } from "@/types";

const ICONS = {
  discord: MessageCircle,
  tiktok: Music2,
  heart: Heart,
  sparkle: Sparkle,
};

export function GalaxyTagView({ tag }: { tag: GalaxyTag }) {
  const Icon = tag.icon ? ICONS[tag.icon] : null;
  const scale = 0.7 + tag.depth * 0.5;

  return (
    <div
      className="absolute flex items-center gap-1.5 whitespace-nowrap"
      style={{
        left: tag.x,
        top: tag.y,
        transform: `scale(${scale})`,
        opacity: tag.muted ? 0.35 : 0.6 + tag.depth * 0.4,
      }}
    >
      {Icon && (
        <span className="grid h-5 w-5 place-items-center rounded-full border border-white/15 bg-black/50">
          <Icon size={11} />
        </span>
      )}
      <span
        className={`font-display font-semibold text-white ${tag.muted ? "text-sm" : "text-base"}`}
      >
        {tag.label}
      </span>
    </div>
  );
}

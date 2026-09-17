export interface SkillItem {
  label: string;
  icon: string; // lucide icon name, resolved in SkillBadge
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface CommunityItem {
  id: string;
  name: string;
  kind: string; // e.g. "Discord community"
  description: string;
  href: string;
  bannerClassName: string; // gradient/utility classes standing in for the banner art
}

export interface StoryParagraph {
  text: string;
  emphasis?: boolean;
}

/** A single floating "memory" label scattered across the galaxy scene. */
export interface GalaxyTag {
  id: string;
  label: string;
  icon?: "discord" | "tiktok" | "heart" | "sparkle";
  x: number; // world-space position, arbitrary units
  y: number;
  depth: number; // 0 = far/background, 1 = near/foreground — drives parallax + size
  muted?: boolean;
}

export interface GalaxyBody {
  id: string;
  x: number;
  y: number;
  depth: number;
  radius: number;
  ringed?: boolean;
  palette: [string, string]; // gradient stops
}

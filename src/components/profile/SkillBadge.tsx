import {
  Hash,
  Plus,
  Code,
  Code2,
  Braces,
  Database,
  FileCode,
  LayoutPanelLeft,
  Server,
  type LucideIcon,
} from "lucide-react";
import type { SkillItem } from "@/types";

const ICONS: Record<string, LucideIcon> = {
  hash: Hash,
  plus: Plus,
  code: Code,
  "code-2": Code2,
  braces: Braces,
  database: Database,
  "file-code": FileCode,
  "layout-panel-left": LayoutPanelLeft,
  server: Server,
};

export function SkillBadge({ label, icon }: SkillItem) {
  const Icon = ICONS[icon] ?? Code;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-mist-300 transition hover:border-white/20 hover:text-white">
      <Icon size={13} className="text-nebula-300" />
      {label}
    </span>
  );
}

import { ArrowUpRight, Users } from "lucide-react";
import { communities } from "@/data/profile";

export function CommunitiesSection() {
  return (
    <section className="p-6 lg:col-span-4 lg:border-l lg:border-white/5 lg:p-8">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-[0.2em] text-mist-500">04 · Communities</p>
        <p className="text-[11px] uppercase tracking-[0.2em] text-mist-500">My circles</p>
      </div>

      <div className="space-y-4">
        {communities.map((c) => (
          <a
            key={c.id}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-xl border border-white/8 bg-white/[0.02] transition hover:border-nebula-400/40"
          >
            <div className={`h-16 w-full bg-gradient-to-br ${c.bannerClassName}`} />
            <div className="p-4">
              <div className="mb-1 flex items-center gap-2">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 bg-void-800">
                  <Users size={13} className="text-nebula-300" />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{c.name}</p>
                  <p className="text-xs text-mist-500">{c.kind}</p>
                </div>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-mist-400">{c.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs text-nebula-300 opacity-0 transition group-hover:opacity-100">
                Join community
                <ArrowUpRight size={12} />
              </span>
            </div>
          </a>
        ))}
      </div>

      <p className="mt-6 text-xs italic text-mist-500">A shared passion. A place to belong.</p>
    </section>
  );
}

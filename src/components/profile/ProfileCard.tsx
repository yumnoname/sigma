"use client";

import Image from "next/image";
import { Copy, MapPin, Plus } from "lucide-react";
import { useMotion } from "@/hooks/useMotion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useClock } from "@/hooks/useClock";
import { profile, skills } from "@/data/profile";
import { SkillBadge } from "./SkillBadge";

export function ProfileCard() {
  const { motionOn } = useMotion();
  const typed = useTypewriter(profile.taglines, { enabled: motionOn });
  const { time, label } = useClock(7);

  return (
    <section className="flex flex-col justify-between border-b border-white/5 p-6 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-8">
      <div>
        {/* Floating "I love you!" badge, sits above the avatar */}
        <div className="relative mb-4 flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-mist-500">
          <span>Vietnam / Personal archive</span>
        </div>

        <div className="relative mb-6 h-16 w-16">
          <span className="absolute -top-8 left-6 animate-float rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-nebula-200 shadow-glow">
            I love you!
          </span>
          <div className="h-16 w-16 overflow-hidden rounded-full border border-white/15 shadow-glow">
            <Image
              src="/images/avatar.jpg"
              alt={profile.name}
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          <button
            aria-label="Add"
            className="absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full border border-white/10 bg-void-800 text-mist-300 transition hover:text-white"
          >
            <Plus size={12} />
          </button>
        </div>

        <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-mist-500">
          {profile.memberSince}
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-white">
          {profile.name} <span className="text-nebula-400">*</span>
        </h1>

        <div className="mt-2 flex items-center gap-2 text-sm text-mist-400">
          <span>{profile.handle}</span>
          <button aria-label="Copy handle" className="text-mist-500 transition hover:text-white">
            <Copy size={13} />
          </button>
        </div>
        <div className="mt-1 flex items-center gap-1.5 text-sm text-mist-400">
          <MapPin size={13} />
          {profile.location}
        </div>

        <p className="type-caret mt-4 min-h-[2.5rem] font-mono text-sm text-mist-300">
          <span className="mr-1 text-nebula-400">{">"}</span>
          {typed}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {profile.roles.map((role) => (
            <span
              key={role.label}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-mist-300"
            >
              {role.label}
            </span>
          ))}
        </div>

        <div className="my-6 h-px w-full bg-white/5" />

        <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-mist-500">
          01 · Skills &amp; languages
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBadge key={skill.label} {...skill} />
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4 text-[11px] text-mist-500">
        <span className="font-mono">
          {time} {label}
        </span>
        <span className="hidden font-mono uppercase tracking-widest sm:inline">
          Senni Nguyễn / {profile.identityNo}
        </span>
      </div>
    </section>
  );
}

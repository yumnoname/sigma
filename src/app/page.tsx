"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ParallaxPlanets } from "@/components/background/ParallaxPlanets";
import { StarField } from "@/components/background/StarField";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { StorySection } from "@/components/story/StorySection";
import { StoryModal } from "@/components/story/StoryModal";
import { FindMeHere } from "@/components/social/FindMeHere";
import { ConnectorOverlay } from "@/components/social/ConnectorOverlay";
import { ConnectorProvider, useConnector } from "@/hooks/useConnector";
import { CommunitiesSection } from "@/components/communities/CommunitiesSection";
import { MusicPlayer } from "@/components/player/MusicPlayer";
import { GalaxyExplorer } from "@/components/galaxy/GalaxyExplorer";
import { profile } from "@/data/profile";

/**
 * Thin wrapper so the hero card can mount the ConnectorOverlay + register its
 * own outer div as the connector's containerRef (needs to run inside the
 * ConnectorProvider, hence the split from the main page component).
 */
function HeroCard({ onOpenStory }: { onOpenStory: () => void }) {
  const { containerRef } = useConnector();

  return (
    <div
      ref={containerRef}
      className="glass-panel relative mx-auto grid w-full max-w-[1200px] grid-cols-1 overflow-hidden rounded-2xl shadow-glow lg:grid-cols-12"
    >
      <ConnectorOverlay />
      <ProfileCard />

      <section className="p-6 lg:col-span-4 lg:p-8">
        <StorySection onOpen={onOpenStory} />
        <FindMeHere />
      </section>

      <CommunitiesSection />
    </div>
  );
}

export default function HomePage() {
  const [storyOpen, setStoryOpen] = useState(false);
  const [galaxyOpen, setGalaxyOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-void bg-radial-fade">
      <StarField />
      <ParallaxPlanets />

      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader onExploreGalaxy={() => setGalaxyOpen(true)} />

        <div className="flex flex-1 items-center px-4 py-6 sm:px-6">
          <ConnectorProvider>
            <HeroCard onOpenStory={() => setStoryOpen(true)} />
          </ConnectorProvider>
        </div>

        <SiteFooter />
      </div>

      <StoryModal open={storyOpen} onClose={() => setStoryOpen(false)} />
      <MusicPlayer title="Cũng Đành Thôi" artist={profile.name} src="/audio/track.mp3" />

      {galaxyOpen && <GalaxyExplorer onClose={() => setGalaxyOpen(false)} />}
    </main>
  );
}

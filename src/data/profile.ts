import type {
  CommunityItem,
  GalaxyBody,
  GalaxyTag,
  SkillItem,
  SocialLink,
  StoryParagraph,
} from "@/types";

export const profile = {
  name: "Thành Trung",
  handle: "@_thanh.trunq",
  location: "Quảng Ngãi, Vietnam",
  memberSince: "Creating since 2024",
  identityNo: "24322",
  taglines: [
    "Cheats for all games & digital services.",
    "Co-founder @ TxH Store.",
    "Building small tools for a big community.",
  ],
  roles: [
    { label: "Developer", icon: "code-2" },
    { label: "Co-founder @ TxH Store", icon: "sparkles" },
  ],
  footerNote: "A little code. A lot of memories.",
};

export const skills: SkillItem[] = [
  { label: "C#", icon: "hash" },
  { label: "C++", icon: "plus" },
  { label: "Python", icon: "code" },
  { label: "HTML", icon: "code-2" },
  { label: "JavaScript", icon: "braces" },
  { label: "SQL", icon: "database" },
  { label: "TypeScript", icon: "file-code" },
  { label: "Frontend", icon: "layout-panel-left" },
  { label: "Backend", icon: "server" },
];

export const storyTeaser = {
  eyebrow: "Behind the code",
  heading: ["Some decisions change", "everything."],
  teaser:
    "I found my way into the cheat community around mid-2024. Even now, I still think it was one of the craziest things I have ever done.",
};

export const storyModal: {
  title: string;
  paragraphs: StoryParagraph[];
  signature: string;
} = {
  title: "A little more human.",
  paragraphs: [
    {
      text: "I found my way into the cheat community around mid-2024. Even now, I still think it was one of the craziest things I have ever done.",
    },
    {
      text: "That decision gave me more than I ever expected. I developed skills I once thought were beyond me, earned money through my own work, mentored talented students, and made so many new friends. Along the way, I built memories through code — especially through a game that became a huge part of my life: Free Fire.",
    },
    {
      text: "I love this work. I love the life I have built. I love where I am today.",
      emphasis: true,
    },
    { text: "But there is still one thing I have never been able to do…" },
    { text: "I'm sorry, N.", emphasis: true },
    { text: "I'm truly sorry." },
  ],
  signature: "Senni Nguyễn",
};

export const socialLinks: SocialLink[] = [
  { id: "discord", label: "Discord", href: "https://discord.gg/", icon: "message-circle" },
  { id: "tiktok", label: "TikTok", href: "https://tiktok.com/@_thanh.trunq", icon: "music-2" },
  { id: "github", label: "GitHub", href: "https://github.com/", icon: "github" },
  { id: "facebook", label: "Facebook", href: "https://facebook.com/", icon: "facebook" },
  { id: "zalo", label: "Zalo", href: "https://zalo.me/", icon: "link-2" },
  { id: "steam", label: "Steam", href: "https://steamcommunity.com/", icon: "gamepad-2" },
];

export const communities: CommunityItem[] = [
  {
    id: "txh",
    name: "TxH Corporation",
    kind: "Discord community",
    description: "Game tools, digital services, and the people behind TxH.",
    href: "https://discord.gg/",
    bannerClassName: "from-zinc-700 via-zinc-800 to-black",
  },
  {
    id: "wonderland",
    name: "WonderLand Store",
    kind: "Discord community",
    description: "Explore digital services. Find your next connection.",
    href: "https://discord.gg/",
    bannerClassName: "from-rose-950 via-red-950 to-black",
  },
];

export const galaxyTags: GalaxyTag[] = [
  { id: "t1", label: "_thanh.trunq", icon: "discord", x: -420, y: -60, depth: 0.9 },
  { id: "t2", label: "_thanh.trunq", icon: "tiktok", x: 40, y: -180, depth: 0.7 },
  { id: "t3", label: "_thanh.trunq", icon: "discord", x: 520, y: 40, depth: 0.85 },
  { id: "t4", label: "Quảng Ngãi", x: -300, y: 60, depth: 0.6, muted: true },
  { id: "t5", label: "Chỉ Yêu Minh Em", x: -60, y: -120, depth: 0.5, muted: true },
  { id: "t6", label: "Nhất Định Sẽ Tìm Em", x: -360, y: 160, depth: 0.55, muted: true },
  { id: "t7", label: "Senni Nguyễn", x: -160, y: -40, depth: 0.65 },
  { id: "t8", label: "Thành Trung", x: -20, y: 30, depth: 0.9 },
  { id: "t9", label: "Nguyễn Thành Trung", x: 220, y: -80, depth: 0.6, muted: true },
  { id: "t10", label: "Thành Trung", x: 320, y: 100, depth: 0.7 },
  { id: "t11", label: "Senni Nguyễn", x: 460, y: 180, depth: 0.5, muted: true },
  { id: "t12", label: "Quảng Ngãi", x: 260, y: 220, depth: 0.55, muted: true },
];

export const galaxyBodies: GalaxyBody[] = [
  { id: "p1", x: -520, y: -140, depth: 0.4, radius: 22, palette: ["#e8b27a", "#7a4a24"] },
  { id: "p2", x: -260, y: -220, depth: 0.5, radius: 14, palette: ["#8fb7c9", "#2e4a56"] },
  { id: "p3", x: 40, y: -260, depth: 0.6, radius: 16, palette: ["#c9c0f2", "#4a4270"] },
  { id: "p4", x: 560, y: -100, depth: 0.8, radius: 46, ringed: true, palette: ["#d9a15c", "#5c3a1a"] },
  { id: "p5", x: -560, y: 120, depth: 0.7, radius: 26, palette: ["#7fd0c9", "#204542"] },
  { id: "p6", x: 620, y: 260, depth: 0.5, radius: 30, ringed: true, palette: ["#e2793a", "#5c2b12"] },
  { id: "p7", x: -140, y: 280, depth: 0.45, radius: 18, palette: ["#6fb3e0", "#1f3a54"] },
  { id: "p8", x: 180, y: 320, depth: 0.65, radius: 12, palette: ["#c9c9c9", "#4a4a4a"] },
];

# senni. — a small corner of my universe

Trang hồ sơ cá nhân chủ đề không gian, được tái dựng lại (recreate) từ bản ghi màn hình
gốc: card hồ sơ 3 cột, hiệu ứng typewriter, đường nối hover động (SVG), modal "câu chuyện",
music player nổi, và chế độ toàn màn hình "Explore Galaxy" (kéo để xoay, cuộn để zoom).

## Cài đặt & chạy thử

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Trước khi chạy, thêm 2 file media của bạn

| Vị trí | Mô tả |
|---|---|
| `public/images/avatar.jpg` | Ảnh đại diện hình vuông, ≥256×256px |
| `public/audio/track.mp3` | Bài nhạc phát trong widget góc dưới phải |

(Có sẵn file `README.txt` nhắc lại trong từng thư mục — xoá đi sau khi thêm ảnh/nhạc thật.)

## Cấu trúc thư mục

```
senni-portfolio/
├── package.json              # Next.js 14 + React 18 + Tailwind + lucide-react
├── tailwind.config.ts         # bảng màu "deep space" (void/nebula/ember/mist) + keyframes
├── src/
│   ├── app/
│   │   ├── layout.tsx         # fonts (Space Grotesk/Inter/JetBrains Mono) + MotionProvider
│   │   ├── page.tsx           # lắp ráp toàn bộ trang chủ
│   │   └── globals.css        # design tokens + class .glass-panel, .type-caret, .scrub…
│   ├── types/index.ts         # kiểu dữ liệu dùng chung (SkillItem, SocialLink, GalaxyTag…)
│   ├── data/profile.ts         # ★ TOÀN BỘ NỘI DUNG THẬT nằm ở đây — sửa ở 1 chỗ duy nhất
│   ├── hooks/
│   │   ├── useTypewriter.ts    # hiệu ứng gõ/xoá vòng lặp cho dòng tagline
│   │   ├── useMouseParallax.ts # tilt nền theo con trỏ chuột
│   │   ├── useMotion.tsx       # context bật/tắt toàn bộ animation (nút "Motion")
│   │   ├── useClock.ts         # đồng hồ realtime UTC+7 trong footer card
│   │   ├── useConnector.tsx    # context tính toạ độ cho đường nối hover
│   │   └── useMusicPlayer.ts   # state + <audio> cho music player
│   └── components/
│       ├── background/         # StarField (sao lấp lánh) + ParallaxPlanets (hành tinh trôi)
│       ├── layout/              # SiteHeader (logo, tagline, nút Explore/Motion), SiteFooter
│       ├── profile/             # ProfileCard (cột trái) + SkillBadge
│       ├── story/                # StorySection (teaser) + StoryModal (modal đầy đủ)
│       ├── social/                # FindMeHere (lưới social) + ConnectorOverlay (SVG động)
│       ├── communities/            # CommunitiesSection (cột phải)
│       ├── player/                 # MusicPlayer (widget nổi góc dưới phải)
│       └── galaxy/                  # GalaxyExplorer + GalaxyControls + GalaxyBodyView/TagView
└── public/
    ├── images/avatar.jpg        # (bạn tự thêm)
    └── audio/track.mp3          # (bạn tự thêm)
```

## Ghi chú triển khai

- **Toàn bộ nội dung** (tên, bio, kỹ năng, link mạng xã hội, cộng đồng, nội dung modal, nhãn
  trong vũ trụ…) tách riêng ở `src/data/profile.ts`. Muốn đổi nội dung, chỉ cần sửa file này —
  không cần đụng vào component.
- **Nút "Motion"** ở header set `document.documentElement.dataset.motion = "on"/"off"`; CSS
  trong `globals.css` sẽ khoá `animation-play-state` toàn trang khi tắt — không cần truyền
  props xuống từng component.
- **Đường nối khi hover** vào một link mạng xã hội (`ConnectorOverlay`) được vẽ lại mỗi
  frame bằng `getBoundingClientRect()` từ avatar đến nút đang hover, dùng `requestAnimationFrame`
  để mượt khi cửa sổ resize/scroll.
- **Explore Galaxy** dùng DOM/CSS transform (translate + scale) thay vì WebGL để giữ dự án nhẹ,
  không phụ thuộc three.js — vẫn đủ để tái hiện hiệu ứng kéo/pan, cuộn/zoom, auto-orbit,
  "focus vào hố đen", "wide view" và "pause" quan sát được trong video gốc. Nếu muốn nâng cấp
  lên hiệu ứng 3D thật (parallax theo chiều sâu, gravitational lensing…), có thể thay
  `GalaxyExplorer.tsx` bằng một scene `react-three-fiber` — cấu trúc dữ liệu (`galaxyBodies`,
  `galaxyTags` trong `data/profile.ts`) đã tách sẵn để tái sử dụng.
- Toàn bộ animation tôn trọng `prefers-reduced-motion` ở tầng CSS lẫn nút "Motion" thủ công.

## Gợi ý bước tiếp theo

1. Thay ảnh/nhạc mẫu bằng nội dung thật.
2. Nếu muốn deploy: `npm run build && npm run start`, hoặc đẩy lên Vercel.
3. Cân nhắc thêm `next/dynamic` cho `GalaxyExplorer` (`ssr: false`) nếu sau này chuyển sang
   canvas/WebGL để tránh lỗi hydration.

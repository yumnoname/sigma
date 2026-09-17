export function SiteFooter() {
  return (
    <footer className="relative z-20 mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-6 text-xs text-mist-500 sm:px-10">
      <span>© {new Date().getFullYear()} Thành Trung</span>
      <span className="hidden sm:inline">Move your mouse to tilt · Drag the space to explore</span>
    </footer>
  );
}

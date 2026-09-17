import { Compass, Orbit, Pause, Play, Telescope } from "lucide-react";

interface Props {
  autoOrbit: boolean;
  onToggleOrbit: () => void;
  onFocusBlackHole: () => void;
  onWideView: () => void;
  paused: boolean;
  onTogglePause: () => void;
}

function ControlButton({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active?: boolean;
  onClick: () => void;
  icon: typeof Orbit;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs transition ${
        active
          ? "border-nebula-400/60 bg-nebula-500/20 text-white"
          : "border-white/10 bg-black/40 text-mist-300 hover:border-white/25 hover:text-white"
      }`}
    >
      <Icon size={13} />
      {label}
    </button>
  );
}

export function GalaxyControls({
  autoOrbit,
  onToggleOrbit,
  onFocusBlackHole,
  onWideView,
  paused,
  onTogglePause,
}: Props) {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-wrap gap-2">
      <ControlButton active={autoOrbit} onClick={onToggleOrbit} icon={Orbit} label="Auto orbit" />
      <ControlButton active={false} onClick={onFocusBlackHole} icon={Compass} label="Black hole" />
      <ControlButton active={false} onClick={onWideView} icon={Telescope} label="Wide view" />
      <ControlButton
        active={paused}
        onClick={onTogglePause}
        icon={paused ? Play : Pause}
        label={paused ? "Resume" : "Pause"}
      />
    </div>
  );
}

import type { GalaxyBody } from "@/types";

export function GalaxyBodyView({ body, paused }: { body: GalaxyBody; paused: boolean }) {
  return (
    <div
      className="absolute"
      style={{ left: body.x, top: body.y, width: body.radius * 2, height: body.radius * 2 }}
    >
      {body.ringed && (
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 opacity-60 ${
            paused ? "" : "animate-spin-slower"
          }`}
          style={{
            width: body.radius * 3.4,
            height: body.radius * 1.1,
            borderColor: body.palette[0],
          }}
        />
      )}
      <div
        className={`relative rounded-full shadow-glow ${paused ? "" : "animate-float-slow"}`}
        style={{
          width: body.radius * 2,
          height: body.radius * 2,
          background: `radial-gradient(circle at 32% 28%, ${body.palette[0]}, ${body.palette[1]})`,
        }}
      />
    </div>
  );
}

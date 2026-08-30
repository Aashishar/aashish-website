"use client";

import Wave from "react-wavify";

export default function LiquidWave() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[120px] overflow-hidden pointer-events-none z-20">

      {/* Layer 1: Accent-secondary glow (slowest) */}
      <div className="absolute bottom-0 left-0 w-full h-full opacity-40 blur-[2px]">
        <Wave
          fill="#4D7CFF"
          paused={false}
          options={{ height: 20, amplitude: 30, speed: 0.15, points: 3 }}
        />
      </div>

      {/* Layer 2: Accent glow (medium) */}
      <div className="absolute bottom-0 left-0 w-full h-full opacity-50 blur-[1px]">
        <Wave
          fill="#0052FF"
          paused={false}
          options={{ height: 40, amplitude: 40, speed: 0.2, points: 4 }}
        />
      </div>

      {/* Layer 3: Foreground fill, blends into the inverted section below */}
      <div className="absolute bottom-0 left-0 w-full h-full">
        <Wave
          fill="#0F172A"
          paused={false}
          options={{ height: 60, amplitude: 25, speed: 0.25, points: 5 }}
        />
      </div>

    </div>
  );
}
"use client";

import Wave from "react-wavify";

export default function LiquidWave() {
  return (
    // This container sits exactly at the bottom of your Hero section
    <div className="absolute bottom-0 left-0 w-full h-[120px] overflow-hidden pointer-events-none z-20">
      
      {/* Layer 1: Purple Glow (Slowest) */}
      <div className="absolute bottom-0 left-0 w-full h-full opacity-50 blur-[2px]">
        <Wave 
          fill="#9333ea" // tailwind purple-600
          paused={false} 
          options={{ height: 20, amplitude: 30, speed: 0.15, points: 3 }} 
        />
      </div>

      {/* Layer 2: Blue Glow (Medium) */}
      <div className="absolute bottom-0 left-0 w-full h-full opacity-60 blur-[1px]">
        <Wave 
          fill="#3b82f6" // tailwind blue-500
          paused={false} 
          options={{ height: 40, amplitude: 40, speed: 0.2, points: 4 }} 
        />
      </div>

      {/* Layer 3: Main Dark Background (Fastest) */}
      <div className="absolute bottom-0 left-0 w-full h-full">
        <Wave 
          fill="#020617" // IMPORTANT: This is the exact hex code for tailwind 'slate-950'
          paused={false} 
          options={{ height: 60, amplitude: 25, speed: 0.25, points: 5 }} 
        />
      </div>

    </div>
  );
}
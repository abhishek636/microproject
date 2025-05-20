"use client";

import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export function BackgroundEffects() {
  // Grid configuration
  const columns = 60;  // Number of columns
  const rows = 50;     // Number of rows
  const dotSize = 0.5; // Size of each dot in pixels (h-0.5 w-0.5)

  // Calculate spacing to ensure equal gaps on all sides
  const horizontalSpacing = 100 / (columns - 1);
  const verticalSpacing = 100 / (rows - 1);

  // Pre-calculate the grid dots with perfect edge spacing
  const gridDots = Array.from({ length: columns * rows }).map((_, i) => ({
    id: i,
    left: `${(i % columns) * horizontalSpacing}%`,
    top: `${Math.floor(i / columns) * verticalSpacing}%`
  }));

  return (
    <div 
      className="fixed inset-0 -z-50 overflow-hidden bg-black"
      style={{
        backgroundImage: `
          radial-gradient(circle at center, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <BackgroundBeamsWithCollision>
        <></>
      </BackgroundBeamsWithCollision>

      <div className="absolute inset-0 opacity-30">
        {gridDots.map((dot) => (
          <div
            key={`grid-dot-${dot.id}`}
            className="absolute rounded-full bg-white"
            style={{
              height: `${dotSize}px`,
              width: `${dotSize}px`,
              left: dot.left,
              top: dot.top,
              transform: 'translate(-50%, -50%)' // Centers the dots perfectly
            }}
          />
        ))}
      </div>
    </div>
  );
}
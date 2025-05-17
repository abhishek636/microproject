"use client";

import { useRef } from "react";

export function BackgroundEffects() {
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
      {/* Falling gradient lines */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-32 w-0.5 animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              background: "linear-gradient(to bottom,rgba(78, 70, 229, 0.42),rgba(236, 72, 154, 0.58),rgba(245, 159, 11, 0.53))",
              animationDuration: `${2 + Math.random() * 3}s`,
              transform: `scaleY(${0.5 + Math.random() * 0.5}) translateZ(0)`
            }}
          >
            <div className="absolute inset-0 bg-white/20 blur-[2px]" />
          </div>
        ))}
      </div>

      {/* Floating animated dots */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute h-1 w-1 animate-float rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Grid intersection dots */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 400 }).map((_, i) => (
          <div
            key={`grid-dot-${i}`}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              left: `${(i % 20) * 5}%`,
              top: `${Math.floor(i / 20) * 5}%`
            }}
          />
        ))}
      </div>
    </div>
  );
}
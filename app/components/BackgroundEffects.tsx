"use client";

import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export function BackgroundEffects() {
  // Pre-calculate the random dots for better performance
  const floatingDots = Array.from({ length: 200 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${3 + Math.random() * 7}s`
  }));

  // Pre-calculate the grid dots for better performance
  const gridDots = Array.from({ length: 400 }).map((_, i) => ({
    id: i,
    left: `${(i % 20) * 5}%`,
    top: `${Math.floor(i / 20) * 5}%`
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
        {floatingDots.map((dot) => (
          <div
            key={`dot-${dot.id}`}
            className="absolute h-1 w-1 animate-float rounded-full bg-white"
            style={{
              left: dot.left,
              top: dot.top,
              animationDelay: dot.delay,
              animationDuration: dot.duration
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-10">
        {gridDots.map((dot) => (
          <div
            key={`grid-dot-${dot.id}`}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              left: dot.left,
              top: dot.top
            }}
          />
        ))}
      </div>
    </div>
  );
}
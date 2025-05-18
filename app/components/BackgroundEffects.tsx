"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

import { useState } from "react";
import { useId } from "react";

type CSSPropertiesWithVars = React.CSSProperties & {
  '--angle'?: string;
  '--distance'?: string;
};

export function BackgroundEffects() {
  const id = useId();
  const [explodingLines, setExplodingLines] = useState<number[]>([]);

  const seededRandom = (seed: string, index: number) => {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = (hash << 5) - hash + seed.charCodeAt(i);
      hash |= 0;
    }
    const x = Math.sin(hash + index) * 10000;
    return x - Math.floor(x);
  };

  const handleAnimationEnd = (i: number) => {
    setExplodingLines(prev => [...prev, i]);
    setTimeout(() => {
      setExplodingLines(prev => prev.filter(item => item !== i));
    }, 1000);
  };

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
        <>
        </>
      </BackgroundBeamsWithCollision>

      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute h-1 w-1 animate-float rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 7}s`
            }}
          />
        ))}
      </div>

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
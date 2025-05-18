"use client";

import { useEffect, useState } from "react";
import LogoAnimation from "./LogoAnimation";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minDuration = 3000; // Minimum loader time in ms
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 1, 100));
    }, 30);

    const timer = setTimeout(() => {
      setLoading(false);
    }, minDuration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center text-white z-50">
        <div className="relative px-1 py-1 rounded-xl bg-black flex items-center">
            <div className="absolute inset-0 overflow-hidden rounded-xl p-[1px]">
                <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#0ff_0%,#f0f_50%,#0ff_100%)] animate-spin-slow"></div>
            </div>
            
            <div className="relative z-10 bg-black rounded-lg w-full h-full flex items-center px-4 py-1">
                <LogoAnimation text="PHI PROTOCOL" />
            </div>
        </div>

      <div className="w-[300px] mt-8">
        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
          <div
            className="bg-white h-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-right text-sm mt-2">{progress}%</div>
      </div>
    </div>
  );
}
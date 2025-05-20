"use client";

import React, { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

interface LogoAnimationProps {
  text?: string;
  className?: string;
  delay?: number;
  duration?: number;
  loopDelay?: number;
  textAlign?: React.CSSProperties["textAlign"];
}

export default function LogoAnimation({ 
  text = "PHI PROTOCOL", 
  className = "",
  delay = 50,
  duration = 500, // Increased duration for smoother whole-text animation
  loopDelay = 300,
  textAlign = "center" 
}: LogoAnimationProps) {
  const [spring, api] = useSpring(() => ({
    from: { opacity: 0, transform: "translate3d(0,30px,0)" },
  }));

  useEffect(() => {
    let animationRunning = true;
    const timeoutIds: NodeJS.Timeout[] = [];

    const runAnimation = async () => {
      while (animationRunning) {
        // Animate in
        await new Promise<void>((resolve) => {
          api.start({
            to: { opacity: 1, transform: "translate3d(0,0px,0)" },
            config: { duration },
            delay,
            onRest: () => resolve()
          });
        });

        // Pause
        await new Promise<void>((resolve) => {
          timeoutIds.push(setTimeout(resolve, loopDelay));
        });

        // Animate out
        await new Promise<void>((resolve) => {
          api.start({
            to: { opacity: 0, transform: "translate3d(0,-30px,0)" },
            config: { duration },
            delay,
            onRest: () => resolve()
          });
        });

        // Pause
        await new Promise<void>((resolve) => {
          timeoutIds.push(setTimeout(resolve, loopDelay));
        });

        // Reset
        api.start({
          to: { opacity: 0, transform: "translate3d(0,30px,0)" },
          immediate: true,
        });
      }
    };

    runAnimation();

    return () => {
      animationRunning = false;
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [api, delay, duration, loopDelay]);

  return (
    <div className={`relative inline-block h-[5.6rem] overflow-hidden ${className}`}>
      <animated.p
        style={{
          ...spring,
          textAlign,
          whiteSpace: "nowrap",
          fontSize: "5rem",
          fontWeight: 600,
          display: 'inline-flex',
          alignItems: 'center',
          lineHeight: '1.2',
          willChange: 'transform, opacity'
        }}
      >
        {text}
      </animated.p>
    </div>
  );
}
"use client";

import React, { useEffect } from "react";
import { useSprings, animated, SpringRef } from "@react-spring/web";

interface LogoAnimationProps {
  text?: string;
  className?: string;
  delay?: number;
  duration?: number;
  loopDelay?: number;
  textAlign?: React.CSSProperties["textAlign"];
}

export default function LogoAnimation({ 
  text = "MECRO", 
  className = "",
  delay = 100,
  duration = 40,
  loopDelay = 1200,
  textAlign = "center" 
}: LogoAnimationProps) {
  const words = text.split(" ").map((word) => word.split(""));
  const letters = words.flat();

  const [springs, api] = useSprings(letters.length, (index) => ({
    from: { opacity: 0, transform: "translate3d(0,30px,0)" },
  }));

  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];
    let animationRunning = true;

    const runAnimation = async () => {
      while (animationRunning) {
        // Animate in
        await api.start((index) => ({
          to: {
            opacity: 1,
            transform: "translate3d(0,0px,0)",
            config: { duration },
          },
          delay: index * delay,
        }));

        // Pause
        await new Promise<void>((resolve) => {
          timeoutIds.push(setTimeout(resolve, loopDelay));
        });

        // Animate out
        await api.start((index) => ({
          to: {
            opacity: 0,
            transform: "translate3d(0,-30px,0)",
            config: { duration },
          },
          delay: index * delay,
        }));

        // Pause
        await new Promise<void>((resolve) => {
          timeoutIds.push(setTimeout(resolve, loopDelay));
        });

        // Reset
        api.start({
          to: { opacity: 0, transform: "translate3d(0,33px,0)" },
          immediate: true,
        });
      }
    };

    runAnimation();

    return () => {
      animationRunning = false;
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [api, delay, duration, loopDelay, letters.length]);

  return (
    <div className={`relative inline-block h-[3.6rem] overflow-hidden ${className}`}>
      <p
        className="split-parent"
        style={{
          textAlign,
          whiteSpace: "normal" as const,
          wordWrap: "break-word" as const,
          fontSize: "3rem",
          fontWeight: 600,
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        {words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            style={{ 
              display: "inline-block", 
              whiteSpace: "nowrap" as const,
              lineHeight: '1.2'
            }}
          >
            {word.map((letter, letterIndex) => {
              const index =
                words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) +
                letterIndex;

              return (
                <animated.span
                  key={index}
                  style={springs[index]}
                  className="inline-block will-change-transform"
                >
                  {letter}
                </animated.span>
              );
            })}
          </span>
        ))}
      </p>
    </div>
  );
}
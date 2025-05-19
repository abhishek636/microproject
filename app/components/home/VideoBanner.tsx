"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

export function VideoBanner() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress into circle scale and opacities
  // const circleScale = useTransform(scrollYProgress, [0, 1], [0.1, 5]); // Start from 0.1 instead of 0
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Fixed Vimeo Background */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ opacity: videoOpacity }}
      >
        <iframe
          src="https://player.vimeo.com/video/1063634108?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="absolute inset-0 w-full h-full p-10"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </motion.div>

      {/* Circular Window */}
      {/* <div className="fixed inset-0 z-10 flex items-center justify-center">
        <motion.div
          className="absolute bg-transparent border-white rounded-full"
          style={{
            width: '130px',
            height: '200px',
            scale: circleScale,
            opacity: contentOpacity,
            boxShadow: '0 0 0 100vmax rgba(0,0,0,0.7)',
            visibility: scrollYProgress.get() === 1 ? 'visible' : 'visible' // Force visibility
          }}
        />
      </div> */}
    </div>
  );
}
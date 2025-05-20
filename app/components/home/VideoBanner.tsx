"use client";
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import React, { useRef, useState } from 'react';
 
export function VideoBanner() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
 
  const circleScale = useTransform(scrollYProgress, [0, 0.8], [0.1, 5]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
 
  const [showCircle, setShowCircle] = useState(true);
 
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setShowCircle(latest < 0.95); // Hide when near the end of scroll
  });
 
  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Fixed Vimeo Background */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ opacity: videoOpacity }}
      >
        <iframe
          src="https://player.vimeo.com/video/1063634108?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </motion.div>
 
      {/* Circular Window - now with smooth transitions */}
      <motion.div
        className="fixed test-circle inset-0 z-10 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: showCircle ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute rounded-full border-white bg-transparent"
          style={{
            width: '130px',
            height: '200px',
            scale: circleScale,
            opacity: contentOpacity,
            boxShadow: '10px 10px 10px 100vmax rgba(0,0,0)',
            mixBlendMode: 'hard-light'
          }}
        />
      </motion.div>
    </div>
  );
}
 
// components/ScrollFadeWrapper.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollFadeWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.4, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.4, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      className="sticky top-0 min-h-screen flex flex-col justify-center"
    >
      {children}
    </motion.section>
  );
}

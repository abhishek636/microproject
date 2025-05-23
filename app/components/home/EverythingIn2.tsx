"use client";
import Image from "next/image";
import ScrollFadeWrapper from "../ScrollFadeWrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function EverythingIn2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Define all transforms at the top level
  const transforms = [
    {
      x: useTransform(scrollYProgress, [0, 1], [0, -200]),
      opacity: useTransform(scrollYProgress, [0.3, 0.7], [1, 0])
    },
    {
      x: useTransform(scrollYProgress, [0, 1], [0, 0]),
      opacity: useTransform(scrollYProgress, [0.3, 0.7], [1, 1])
    },
    {
      x: useTransform(scrollYProgress, [0, 1], [0, 200]),
      opacity: useTransform(scrollYProgress, [0.3, 0.7], [1, 0])
    }
  ];

  return (
    <ScrollFadeWrapper>
      <div ref={ref} className="max-w-[1180px] mx-auto">
        <h1 className="font-500 text-white leading-none pt-5">Automatically Updated</h1>
        <p className="max-w-[450px] text-white text-sm pt-1">
          Everything - companies, people, and more - is enriched...
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 px-2 pt-10 text-center">
        {transforms.map(({ x, opacity }, i) => (
          <motion.div key={i} style={{ x, opacity }}>
            <Image
              src="/images/Person.webp"
              alt=""
              width={400}
              height={400}
              className="rounded-xl"
            />
          </motion.div>
        ))}
      </div>
    </ScrollFadeWrapper>
  );
}
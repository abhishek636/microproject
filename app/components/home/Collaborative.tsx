"use client";
import Image from "next/image";
import ScrollFadeWrapper from "../ScrollFadeWrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Collaborative() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <ScrollFadeWrapper>
      <div ref={ref} className="max-w-[1180px] mx-auto">
        <h1 className="font-500 text-white leading-none pt-5">Collaborative by default</h1>
        <p className="max-w-[450px] text-white text-sm pt-1">
          Create custom apps, objects, properties and more...
        </p>
      </div>

      <motion.div className="grid place-items-center pt-10" style={{ scale }}>
        <Image
          src="/images/Person.webp"
          alt=""
          width={400}
          height={400}
          className="rounded-xl"
        />
      </motion.div>
    </ScrollFadeWrapper>
  );
}

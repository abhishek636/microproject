"use client";
import Image from "next/image";
import ScrollFadeWrapper from "../ScrollFadeWrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function EverythingIn() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const totalCards = 7;
  const center = Math.floor(totalCards / 2);

  // Create reusable transforms for each priority level
  const priorityTransforms = Array.from({ length: center + 1 }).map((_, priority) => {
    const step = 0.1;
    const start = 0.2 + priority * step;
    const end = start + 0.25;

    return {
      y: useTransform(scrollYProgress, [start, end], [0, priority > 0 ? 80 : 0]),
      opacity: useTransform(scrollYProgress, [start, end], [1, priority > 0 ? 0 : 1]),
      scale: useTransform(scrollYProgress, [start, end], [1, priority > 0 ? 0.85 : 1]),
      blur: useTransform(scrollYProgress, [start, end], ["blur(0px)", priority > 0 ? "blur(6px)" : "blur(0px)"])
    };
  });

  return (
    <ScrollFadeWrapper>
      <div ref={ref} className="max-w-[1180px] mx-auto">
        <h1 className="font-500 text-white leading-none pt-5">Everything in one place</h1>
        <p className="max-w-[450px] text-white text-sm pt-1">
          Fully-featured email client, CRM, task manager and more integrated...
        </p>
      </div>

      <div className="grid grid-cols-7 gap-2 px-2 pt-10">
        {[...Array(totalCards)].map((_, i) => {
          const distance = Math.abs(i - center);
          const priority = center - distance;
          const transforms = priorityTransforms[priority];
          const direction = i < center ? -1 : i > center ? 1 : 0;

          return (
            <motion.div
              key={i}
              style={{
                x: direction * 100 * (distance + 1),
                ...transforms
              }}
              className="transition-all duration-300"
            >
              <Image
                src="/images/Person.webp"
                alt=""
                width={400}
                height={400}
                className="rounded-xl"
              />
            </motion.div>
          );
        })}
      </div>
    </ScrollFadeWrapper>
  );
}
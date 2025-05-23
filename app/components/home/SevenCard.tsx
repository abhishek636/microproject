"use client";
import Image from "next/image";
import ScrollFadeWrapper from "../ScrollFadeWrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const imagePaths = [
  "/images/person.webp",
  "/images/person.webp",
  "/images/person.webp",
  "/images/person.webp",
  "/images/person.webp",
  "/images/person.webp",
  "/images/person.webp",
];

export function SevenCard() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"], // Trigger when content block is centered
  });

  const totalCards = 7;
  const center = Math.floor(totalCards / 2);

  const textStates = [
    {
      heading: "Everything in one place",
      description:
        "Fully-featured email client, CRM, task manager and more integrated with Gmail, Calendar, Linkedin, WhatsApp and other tools. Plus the ability to create pipeline trackers, project management tools and more on top of this data.",
      showAt: 0,
    },
    {
      heading: "Automatically Updated",
      description: "Everything - companies, people, and more - is enriched with hundreds of datapoints from a rich global and personal knowledge graph. Plus any property can be updated automatically when there's new email or meeting activity.",
      showAt: 0.5,
    },
    {
      heading: "Collaborative by default",
      description: "Create custom apps, objects, properties and more to power any kind of experience you can imagine or use Micro AI to generate it from your description.",
      showAt: 0.8,
    },
  ];

  const activeState = useTransform(
    scrollYProgress,
    textStates.map((state) => state.showAt),
    textStates.map((_, i) => i)
  );

  return (
    <ScrollFadeWrapper>
      <div className="relative min-h-[100vh] w-full bg-black"> {/* Enough height for scroll */}
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div ref={ref} className="max-w-[1600px] w-full px-4">
            {/* Text Transition Block */}
            <div className="relative h-[150px] max-w-[1180px] mx-auto mb-12 overflow-hidden">
                {textStates.map((text, index) => {
                    const opacity = useTransform(
                    activeState,
                    [index - 0.5, index, index + 0.5],
                    [0, 1, 0]
                    );

                    const x = useTransform(
                    activeState,
                    [index - 0.5, index, index + 0.5],
                    [100, 0, -100] // Comes in from right, leaves to left
                    );

                    return (
                    <motion.div
                        key={index}
                        style={{ opacity, x }}
                        className="absolute top-0 left-0 w-full"
                    >
                        <h2 className="font-semibold text-white leading-tight pt-5">
                        {text.heading}
                        </h2>
                        <p className="max-w-[450px] text-white text-sm pt-1">
                        {text.description}
                        </p>
                    </motion.div>
                    );
                })}
                </div>

            {/* Cards */}
            <div className="grid grid-cols-7 gap-2 px-2">
              {[...Array(totalCards)].map((_, i) => {
                const distance = Math.abs(i - center);
                const isOuter = distance >= 2;
                const isMid = distance === 1;
                const isCenter = distance === 0;

                const outerStart = 0.4;
                const outerEnd = 0.6;
                const midStart = 0.6;
                const midEnd = 0.8;
                const centerStart = 0.8;
                const centerEnd = 0.9;

                const x = useTransform(
                  scrollYProgress,
                  [
                    isOuter ? outerStart : isMid ? midStart : centerStart,
                    isOuter ? outerEnd : isMid ? midEnd : centerEnd,
                  ],
                  [
                    0,
                    i < center
                      ? -100 * (distance + 1)
                      : i > center
                      ? 100 * (distance + 1)
                      : 0,
                  ]
                );

                const y = useTransform(
                  scrollYProgress,
                  [
                    isOuter ? outerStart : isMid ? midStart : centerStart,
                    isOuter ? outerEnd : isMid ? midEnd : centerEnd,
                  ],
                  [0, isCenter ? 0 : 80]
                );

                const opacity = useTransform(
                  scrollYProgress,
                  [
                    isOuter ? outerStart : isMid ? midStart : centerStart,
                    isOuter ? outerEnd : isMid ? midEnd : centerEnd,
                  ],
                  [1, isCenter ? 1 : 0]
                );

                const scale = useTransform(
                  scrollYProgress,
                  [
                    isOuter ? outerStart : isMid ? midStart : centerStart,
                    isOuter ? outerEnd : isMid ? midEnd : centerEnd,
                  ],
                  [1, isCenter ? 1 : 0.85]
                );

                const blur = useTransform(
                  scrollYProgress,
                  [
                    isOuter ? outerStart : isMid ? midStart : centerStart,
                    isOuter ? outerEnd : isMid ? midEnd : centerEnd,
                  ],
                  ["blur(0px)", isCenter ? "blur(0px)" : "blur(6px)"]
                );

                return (
                  <motion.div
                    key={i}
                    style={{ x, y, opacity, scale, filter: blur }}
                    className="transition-all duration-300"
                  >
                    <Image
                      src={imagePaths[i]}
                      alt={`Person ${i + 1}`}
                      width={400}
                      height={400}
                      className="rounded-xl"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ScrollFadeWrapper>
  );
}

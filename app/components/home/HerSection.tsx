'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [falling, setFalling] = useState(false); // Trigger fall after delay
  const prevScrollY = useRef(0);

  const fallingWords = ['work', 'CRM', 'triaged', 'documents'];

  const [displayedH1, setDisplayedH1] = useState('');
  const [displayedH2, setDisplayedH2] = useState('');

  useEffect(() => {
    // Show headings immediately
    setDisplayedH1("Working hard just got easy");
    setDisplayedH2("The era of Brute Force Productivity™ is over and a new one has begun.");

    // Trigger initial fall after delay
    const timeout = setTimeout(() => {
      setFalling(true);
    }, 2500);

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const goingUp = currentScroll < prevScrollY.current;
      setFalling(goingUp); // Fall again on scroll up, rise on scroll down
      prevScrollY.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderText = (text: string) => {
    return text.split(' ').map((word, index) => {
      const isFallingWord = fallingWords.some(fw =>
        word.toLowerCase().includes(fw.toLowerCase())
      );

      if (isFallingWord) {
        return (
          <span key={index} className="inline-block pr-1">
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block text-blue-400"
                initial={false}
                animate={{
                  y: falling ? window.innerHeight * 0.8 : 0,
                  opacity: falling ? 0.3 : 1,
                  rotate: falling ? Math.random() * 80 - 40 : 0,
                  x: falling ? Math.random() * 100 - 50 : 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 80,
                  damping: 14,
                  delay: charIndex * 0.05,
                }}
              >
                {char}
              </motion.span>
            ))}
            {' '}
          </span>
        );
      }

      return <span key={index} className="text-white pr-1">{word} </span>;
    });
  };

  return (
    <div className="relative w-full max-w-[707px] mx-auto h-screen overflow-hidden ">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-8">
        <div className="text-left">
          <h1 className="text-white mb-4">{displayedH1}</h1>
          <h2 className="text-white mb-8">{displayedH2}</h2>

          <p className="text-white  mb-4">
            {renderText("Everything is centralized - one place to catch up on all your messages, check in on a project or prep for a meeting with a customer or investor.")}
          </p>
          <p className="text-white ">
            {renderText("Where your work is done for you - CRM records are updated, emails are triaged and documents are drafted automatically.")}
          </p>
        </div>
      </div>
    </div>
  );
}

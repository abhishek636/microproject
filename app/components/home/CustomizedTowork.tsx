'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function CustomizedTowork() {
  const [displayedText, setDisplayedText] = useState('');
  const [showAsImage, setShowAsImage] = useState(false);
  const fullText = "Help me organize our celebratory team offsite!";
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      // After typing completes, wait 3 seconds then convert to image
      const imageTimeout = setTimeout(() => {
        setShowAsImage(true);
      }, 3000);

      return () => clearTimeout(imageTimeout);
    }
  }, [currentIndex, fullText]);

  return (
    <>
      <div className="max-w-[1180px] font-500 mx-auto">
        <h2 className="font-500 text-white leading-none">Customized to work the way you do</h2>
        <p className="max-w-[450px] text-white text-sm pt-1">Create custom apps, objects, properties and more to power any kind of experience you can imagine or use Micro AI to generate it from your description.</p>
        <div className="relative py-8 flex items-center justify-start bg-black text-white">
          {showAsImage ? (
            // This is the image version
            <div>
                <Image
                src='/images/CustomizedUI.webp'
                alt='CustomizedUI'
                width={1180}
                height={100}
            />
            </div>
          ) : (
            // This is the typing animation version
            <div className="relative flex items-center bg-black rounded-full border border-cyan-400 px-3 py-2 backdrop-blur-md shadow-[0_0_10px_rgba(0,255,255,0.4)]">
              <div className="w-10 h-10 mr-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
              <p className="text-white whitespace-nowrap">
                {displayedText}
                {currentIndex < fullText.length && (
                  <span className="animate-pulse">|</span> // Cursor while typing
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
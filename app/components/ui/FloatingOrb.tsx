// components/FloatingOrb.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

export default function FloatingOrb({ baseSize = 0.1, speed = 1 }) {
  const orbRef = useRef<HTMLDivElement>(null);
  const [calculatedSize, setCalculatedSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth * baseSize;
      setCalculatedSize(newSize);
    };

    // Initial size calculation
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [baseSize]);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb || calculatedSize <= 0) return;

    // Random starting position (ensure it's within bounds)
    let x = Math.random() * (window.innerWidth - calculatedSize);
    let y = Math.random() * (window.innerHeight - calculatedSize);
    
    // Random speed and direction
    let xSpeed = (Math.random() * 2 - 1) * speed;
    let ySpeed = (Math.random() * 2 - 1) * speed;

    function animate() {
      const maxX = window.innerWidth - calculatedSize;
      const maxY = window.innerHeight - calculatedSize;
      
      x += xSpeed;
      y += ySpeed;
      
      // Bounce off edges with proper boundary checks
      if (x > maxX) {
        x = maxX;
        xSpeed *= -1;
        ySpeed += (Math.random() * 0.4 - 0.2);
      } else if (x < 0) {
        x = 0;
        xSpeed *= -1;
        ySpeed += (Math.random() * 0.4 - 0.2);
      }
      
      if (y > maxY) {
        y = maxY;
        ySpeed *= -1;
        xSpeed += (Math.random() * 0.4 - 0.2);
      } else if (y < 0) {
        y = 0;
        ySpeed *= -1;
        xSpeed += (Math.random() * 0.4 - 0.2);
      }
      
      if (orb) {
        orb.style.transform = `translate(${x}px, ${y}px)`;
      }
      requestAnimationFrame(animate);
    }

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [calculatedSize, speed]);

  return (
    <div 
      ref={orbRef}
      className="absolute w-full h-full will-change-transform z-50 pointer-events-none"
      style={{
        width: `${calculatedSize}px`,
        height: `${calculatedSize}px`,
        display: calculatedSize > 0 ? 'block' : 'none',
        // Prevent the orb from being interactive
        pointerEvents: 'none'
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" className="w-full h-full">
        {/* Keep your existing SVG markup exactly as is */}
        <g filter="url(#DarkOrb_svg__a)">
          <circle cx="115.91" cy="135.003" r="93.184" fill="black" fillOpacity="0.04" />
        </g>
        <circle cx="100.002" cy="100.002" r="100.002" fill="url(#DarkOrb_svg__b)" fillOpacity="0.2" />
        <mask id="DarkOrb_svg__d" width="202" height="201" x="-1" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
          <circle cx="100" cy="100.002" r="100.002" fill="url(#DarkOrb_svg__c)" />
        </mask>
        <g mask="url(#DarkOrb_svg__d)">
          <g filter="url(#DarkOrb_svg__e)">
            <circle cx="71.363" cy="73.638" r="44.092" fill="white" />
          </g>
          <g filter="url(#DarkOrb_svg__f)">
            <path fill="white" fillRule="evenodd" d="M74.4342 200.458C129.664 200.458 174.436 155.686 174.436 100.456C174.436 74.7892 164.767 51.3806 148.871 33.6748C175.279 51.6752 192.619 81.9956 192.619 116.366C192.619 171.595 147.846 216.368 92.6165 216.368C63.054 216.368 36.4875 203.54 18.1797 183.147C34.207 194.072 53.5748 200.458 74.4342 200.458Z" clipRule="evenodd" />
          </g>
        </g>
        <defs>
          <filter id="DarkOrb_svg__a" width="291.824" height="291.824" x="-30.002" y="-10.91" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1016_7067" stdDeviation="26.364" />
          </filter>
          <filter id="DarkOrb_svg__e" width="157.276" height="157.276" x="-7.275" y="-5" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1016_7067" stdDeviation="17.273" />
          </filter>
          <filter id="DarkOrb_svg__f" width="243.532" height="251.786" x="-16.366" y="-0.871" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1016_7067" stdDeviation="17.273" />
          </filter>
          <linearGradient id="DarkOrb_svg__b" x1="77.489" x2="229.811" y1="58.897" y2="183.752" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EAEAEA" />
            <stop offset="1" stopColor="#969696" />
          </linearGradient>
          <linearGradient id="DarkOrb_svg__c" x1="77.487" x2="229.809" y1="58.897" y2="183.752" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EAEAEA" />
            <stop offset="1" stopColor="#C4C4C4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
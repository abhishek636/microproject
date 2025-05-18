'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    THREE?: typeof import('three'); // More specific type
  }
}

type VantaEffect = {
  destroy: () => void;
};

export default function VantaBirds() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    let effect: VantaEffect | null = null;
    let mounted = true;

    const initVanta = async () => {
      try {
        // Load THREE.js first
        const THREE = await import('three');
        window.THREE = THREE;
        
        // Then load Vanta
        const BIRDS = (await import('vanta/dist/vanta.birds.min')).default;

        if (!mounted || !vantaRef.current) return;

        effect = BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          color: 0x3a86ff,
          backgroundColor: 0x000000,
          birdSize: 0.8,
          wingSpan: 15.0,
          speedLimit: 3.0,
          separation: 30.0,
          alignment: 25.0,
          cohesion: 25.0,
          quantity: 4.0,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
        }) as VantaEffect;

      } catch (error) {
        console.error('Vanta.js initialization failed:', error);
      }
    };

    initVanta();

    return () => {
      mounted = false;
      if (effect) {
        effect.destroy();
        effect = null;
      }
      if (window.THREE) {
        delete window.THREE;
      }
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className="fixed inset-0 -z-50 w-full h-full"
    />
  );
}
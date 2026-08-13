
import React, { useState, useEffect } from 'react';
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn.js';

const ParallaxBars = () => {
  const [scrollY, setScrollY] = useState(0);
  
  // We use the useScrollFadeIn hook to drive the initial fade transition.
  const [fadeRef, fadeOpacity] = useScrollFadeIn();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initialize position and add listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Configuration for parallax and fade
  const baseOffset = 600;
  const scrollSpeed = 0.6;
  const meetPoint = baseOffset / scrollSpeed; // The scrollY value where bars exactly meet (1000px)
  const fadeOutDistance = 400; // How many pixels to scroll before opacity hits 0% after meeting

  // Calculate dynamic offset based on scroll
  let offset = baseOffset - scrollY * scrollSpeed;
  let maxContainerOpacity = 0.15; // Max opacity 15% for the container

  if (offset <= 0) {
    // Prevent bars from overlapping by clamping the offset
    offset = 0;
    
    // Calculate fade out as user scrolls past the meeting point
    const overScroll = scrollY - meetPoint;
    maxContainerOpacity = Math.max(0, 0.15 * (1 - overScroll / fadeOutDistance));
  }

  // Calculate scroll fade-in using the hook's returned value.
  // By placing the fadeRef on a 500px tall invisible div at the top of the page,
  // fadeOpacity (intersection ratio) is 1.0 when fully visible at the top,
  // and goes to 0.0 as the user scrolls down 500px and the div leaves the viewport.
  // We invert this (1 - fadeOpacity) to get a 0 -> 1 fade-in effect.
  // The scrollY check prevents a 1-frame flash on initial load before the observer ticks.
  const scrollFadeInMultiplier = scrollY < 10 ? 0 : (1 - fadeOpacity);
  
  // Combine the scroll fade-in with the final fade-out logic
  const finalOpacity = maxContainerOpacity * scrollFadeInMultiplier;

  return (
    <>
      {/* 
        Invisible tracking element positioned at the very top. 
        As we scroll down, it leaves the viewport, decreasing the hook's opacity value. 
      */}
      <div 
        ref={fadeRef}
        className="absolute top-0 left-0 w-full h-[500px] pointer-events-none opacity-0 -z-50"
        aria-hidden="true"
      />

      {/* Main Parallax Background Container */}
      <div 
        className="fixed inset-0 -z-10 pointer-events-none flex items-center justify-center overflow-hidden transition-opacity duration-300 ease-out"
        style={{ opacity: finalOpacity }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 2000 2000"
          className="w-[150vw] h-[150vh] min-w-[2000px] min-h-[2000px] text-[#555555]"
          preserveAspectRatio="xMidYMid slice"
        >
          <g transform="translate(1000, 1000) rotate(45)">
            {/* Bar 1: Comes from Top-Left toward center */}
            <rect
              x="-2000"
              y="-300"
              width="2000"
              height="600"
              rx="300"
              fill="currentColor"
              style={{ 
                transform: `translateX(-${offset}px)`,
                willChange: 'transform'
              }}
            />
            
            {/* Bar 2: Comes from Bottom-Right toward center */}
            <rect
              x="0"
              y="-300"
              width="2000"
              height="600"
              rx="300"
              fill="currentColor"
              style={{ 
                transform: `translateX(${offset}px)`,
                willChange: 'transform'
              }}
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default ParallaxBars;

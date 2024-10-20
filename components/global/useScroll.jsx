"use client";

import { useState, useEffect } from 'react';

const useScrollProgress = (threshold) => {
  const [scrollY, setScrollY] = useState(0);
  const [isThresholdReached, setIsThresholdReached] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Check if the scroll position has crossed the threshold
      if (currentScrollY >= threshold) {
        setIsThresholdReached(true);
      } else {
        setIsThresholdReached(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { scrollY, isThresholdReached };
};

export default useScrollProgress;

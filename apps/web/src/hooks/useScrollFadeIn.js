
import { useState, useEffect, useRef } from 'react';

export function useScrollFadeIn() {
  const [opacity, setOpacity] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const buildThresholdList = () => {
      let thresholds = [];
      let numSteps = 100;
      for (let i = 1; i <= numSteps; i++) {
        thresholds.push(i / numSteps);
      }
      thresholds.push(0);
      return thresholds;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // entry.intersectionRatio goes from 0 to 1
        setOpacity(entry.intersectionRatio);
      },
      {
        threshold: buildThresholdList(),
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return [ref, opacity];
}

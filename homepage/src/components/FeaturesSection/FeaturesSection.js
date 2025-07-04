// src/components/FeaturesSection/FeaturesSection.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './FeaturesSection.module.css';

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const [boxGap, setBoxGap] = useState(40); // Initial gap in px, matches CSS default
  const rafId = useRef(null);

  const handleScroll = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate scroll progress within this section
        // Progress will go from 0 (section enters viewport) to 1 (section exits viewport)
        // Adjust these values to control when the animation starts/ends
        const startScrollPoint = viewportHeight * 0.8; // Start animation when 80% of viewport is scrolled
        const endScrollPoint = -sectionRect.height * 0.2; // End animation when 20% of section has left top of viewport

        const scrollDistanceFromStart = startScrollPoint - sectionRect.top;
        
        let progress = 0;
        if (scrollDistanceFromStart > 0) {
            progress = Math.min(1, scrollDistanceFromStart / (startScrollPoint - endScrollPoint));
        }

        // Define min and max gap values
        const minGap = 40; // Corresponds to initial gap in CSS
        const maxGap = 200; // Maximum gap when fully "distant"
        
        // Linearly interpolate the gap based on scroll progress
        const newGap = minGap + (maxGap - minGap) * progress;
        
        setBoxGap(newGap);
      }
      rafId.current = null;
    });
  }, []); // No dependencies for useCallback

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set gap on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll]);

  return (
    <section ref={sectionRef} className={styles.featuresSection}>
      <h2 className={styles.featuresHeading}>
        Software <span className={styles.featuresBlue}>Features</span>
      </h2>
      {/* Apply dynamic gap to the container */}
      <div className={styles.featureBoxesContainer} style={{ gap: `${boxGap}px` }}>
        {/* Render 3 feature boxes */}
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            // No individual refs needed if gap is controlled on container
            className={styles.featureBox}
            // Individual box style not needed as gap is on container
          ></div>
        ))}
      </div>
      <div className={styles.keepScrolling}>
        <span>KEEP SCROLLING</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20L10.59 18.59L16.17 13H4V11H16.17L10.59 5.41L12 4L20 12L12 20Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
};

export default FeaturesSection;
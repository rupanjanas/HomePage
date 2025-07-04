// src/components/AnalyticsSection/AnalyticsSection.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './AnalyticsCard.module.css';

const analyticsData = [
  { id: 1, value: 32, color: 'blue' },
  { id: 2, value: 44, color: 'blue' },
  { id: 3, value: 53, color: 'blue' },
  { id: 4, value: 21, color: 'red' },
  { id: 5, value: 27, color: 'blue' },
];

const AnalyticsSection = () => {
  const sectionRef = useRef(null);
  // State to track animation progress (0 to 1)
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // Flag for active animation
  const scrollAccumulator = useRef(0); // Accumulate scroll delta
  const animationFrameId = useRef(null);

  const handleWheel = useCallback((event) => {
    // Check if the section is currently in the viewport and animation isn't finished
    const rect = sectionRef.current?.getBoundingClientRect();
    const isSectionInView = rect && rect.top < window.innerHeight && rect.bottom > 0;

    if (isSectionInView && animationProgress < 1 && animationProgress > 0) { // Only capture if mid-animation
        event.preventDefault(); // Stop default page scrolling
        // Accumulate scroll delta (e.g., from mouse wheel)
        scrollAccumulator.current += event.deltaY;

        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }

        animationFrameId.current = requestAnimationFrame(() => {
            // Adjust sensitivity
            const sensitivity = 0.002;
            let newProgress = animationProgress + (scrollAccumulator.current * sensitivity);
            newProgress = Math.max(0, Math.min(1, newProgress)); // Clamp between 0 and 1
            setAnimationProgress(newProgress);
            scrollAccumulator.current = 0; // Reset accumulator
            animationFrameId.current = null;
        });
    }
  }, [animationProgress]);

  useEffect(() => {
    // Use IntersectionObserver to determine when to 'activate' scroll hijacking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section is in view, prepare for animation
            setIsAnimating(true);
            // Optionally, set initial progress here if you want it to start from 0
            // setAnimationProgress(0); // If you want it to reset or start animating from the beginning each time
            window.addEventListener('wheel', handleWheel, { passive: false }); // Needs passive: false for preventDefault
            // Add touch event listeners for mobile if needed
          } else {
            // Section is out of view, stop animation and release scroll
            setIsAnimating(false);
            window.removeEventListener('wheel', handleWheel);
            // setAnimationProgress(entry.boundingClientRect.bottom > 0 ? 0 : 1); // Reset or finalize progress based on direction
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // When 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Initial check for when component mounts already in view
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
      setIsAnimating(true);
      window.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('wheel', handleWheel);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleWheel]); // handleWheel is a dependency due to useCallback

  return (
    <section ref={sectionRef} className={styles.analyticsSection}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.sectionNumber}>01</span> Advanced Reporting & Analytics
      </h2>

      <div className={styles.contentWrapper}>
        <p className={styles.descriptionText}>
          This is the space to describe the service and explain how customers or clients can benefit from it.
          It's an opportunity to add a short description that includes relevant details, like pricing,
          duration, location and how to book the service.
        </p>

        <div className={styles.analyticsBarsContainer}>
          {analyticsData.map((data, index) => (
            <div key={data.id} className={styles.barItem}>
              <span className={styles.barPercentage} style={{ color: data.color === 'blue' ? 'rgb(66, 133, 244)' : 'red' }}>
                {data.value}%
              </span>
              <div
                className={`${styles.bar} ${data.color === 'blue' ? styles.barBlue : styles.barRed}`}
                style={{
                  // Calculate width based on original value and current animation progress
                  width: `${(data.value * animationProgress)}%`, // Animate width
                  opacity: animationProgress > 0 ? 1 : 0, // Show once animation starts
                  transition: isAnimating ? 'none' : 'opacity 0.8s ease-out' // Disable CSS transition during manual scroll update
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
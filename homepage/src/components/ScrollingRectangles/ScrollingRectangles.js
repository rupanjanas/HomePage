// src/components/ScrollingRectangles/ScrollingRectangles.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './ScrollingRectangles.module.css';

const NUM_RECTANGLES = 50;
const ROTATABLE_CHANCE = 0.3;
const SCROLL_SPEED_FACTOR = 0.2; // How fast rectangles scroll horizontally relative to vertical scroll

const ScrollingRectangles = () => {
  const rectanglesInnerRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const rafId = useRef(null);

  const handleScroll = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      if (rectanglesInnerRef.current) {
        const scrollY = window.scrollY;
        const innerWidth = rectanglesInnerRef.current.scrollWidth / 2; // Get width of one set of duplicated rectangles

        // Calculate horizontal scroll based on vertical scroll
        // The - (minus) sign makes it scroll left when scrolling down
        let newTranslateX = -(scrollY * SCROLL_SPEED_FACTOR);

        // Implement infinite looping:
        // When it scrolls past the width of one set of rectangles,
        // "reset" it by adding the width back, creating a seamless loop.
        newTranslateX = newTranslateX % innerWidth; // Use modulo to keep it within bounds

        setTranslateX(newTranslateX);
      }
      rafId.current = null;
    });
  }, []); // No dependencies for useCallback, as SCROLL_SPEED_FACTOR is constant

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set position on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current); // Clean up pending RAF on unmount
      }
    };
  }, [handleScroll]);

  const rectangles = Array.from({ length: NUM_RECTANGLES }).map((_, index) => {
    const isRotatable = Math.random() < ROTATABLE_CHANCE;
    return (
      <div
        key={index}
        className={`${styles.rectangle} ${isRotatable ? styles.rotatableRectangle : ''}`}
      ></div>
    );
  });

  return (
    <div className={styles.rectanglesContainer}>
      <div
        ref={rectanglesInnerRef}
        className={styles.rectanglesInner}
        style={{ transform: `translateX(${translateX}px)` }} // Apply dynamic transform
      >
        {rectangles}
        {rectangles} {/* Duplicate for seamless looping */}
      </div>
    </div>
  );
};

export default ScrollingRectangles;
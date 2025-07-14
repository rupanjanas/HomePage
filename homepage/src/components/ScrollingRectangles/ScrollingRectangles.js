// src/components/ScrollingRectangles/ScrollingRectangles.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './ScrollingRectangles.module.css';

const NUM_RECTANGLES = 50;
const ROTATABLE_CHANCE = 0.3;
const SCROLL_SPEED_FACTOR = 0.6; // How fast rectangles scroll horizontally relative to vertical scroll

const ScrollingRectangles = () => {
  const rectanglesInnerRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const rafId = useRef(null);

  // Initialize fixed set of random indices that will remain consistent across renders
  const blueIndicesRef = useRef(
    Array.from({ length: NUM_RECTANGLES }).map(() => Math.random() < ROTATABLE_CHANCE)
  );

  const handleScroll = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      if (rectanglesInnerRef.current) {
        const scrollY = window.scrollY;
        const innerWidth = rectanglesInnerRef.current.scrollWidth / 2;

        let newTranslateX = -(scrollY * SCROLL_SPEED_FACTOR);
        newTranslateX = newTranslateX % innerWidth;

        setTranslateX(newTranslateX);
      }
      rafId.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll]);

  const renderRectangles = () => {
    const scrollY = window.scrollY;
    return Array.from({ length: NUM_RECTANGLES }).map((_, index) => {
      const isRotatable = blueIndicesRef.current[index];
      const rotationProgress = (scrollY % 1000) / 1000; // 0 to 1
      const rotation = isRotatable ? Math.sin(rotationProgress * Math.PI) * 90 : 0;

      return (
        <div
          key={index}
          className={`${styles.rectangle} ${isRotatable ? styles.rotatableRectangle : ''}`}
          style={{
            transform: isRotatable ? `rotateY(${rotation}deg)` : undefined,
            transition: 'transform 0.2s ease-out',
          }}
        ></div>
      );
    });
  };

  return (
    <div className={styles.rectanglesContainer}>
      <div
        ref={rectanglesInnerRef}
        className={styles.rectanglesInner}
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {renderRectangles()}
        {renderRectangles()}
      </div>
    </div>
  );
};

export default ScrollingRectangles;

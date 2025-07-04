// src/components/DarkHeroSection/DarkHeroSection.jsx
import React from 'react';
import styles from './DarkHeroSection.module.css';
import { ArrowRight } from 'lucide-react'; // Assuming you still use ArrowRight
import ScrollingRectangles from '../ScrollingRectangles/ScrollingRectangles'; // Import the new component

const DarkHeroSection = () => {
  return (
    <div className={styles.heroContainer}>

      {/* Place ScrollingRectangles COMPONENT HERE: */}
      {/* It must be a direct child of .heroContainer to cover its full height, */}
      {/* and its CSS (ScrollingRectangles.module.css) should have z-index: -1 */}
      {/* to place it behind the text content. */}
      <ScrollingRectangles /> 

      {/* Main Hero Content Section - This content will appear on top of the rectangles */}
      <main className={styles.heroMainContent}>
        <h1 className={styles.heroMainHeading}>
          <span className={styles.heroLine + ' ' + styles.heroLine1}>Build Stronger Customer Relationships</span>
          <span className={styles.heroLine + ' ' + styles.heroLine2}>Simplify Interactions & Gain Valuable Insights</span>
          <span className={styles.heroLine + ' ' + styles.heroLine3}>with Keenect Customer Relations Management Software</span>
        </h1>
        <button className={styles.heroTryItOutButton}>
          TRY IT OUT NOW <ArrowRight size={16} />
        </button>
      </main>

    </div>
  );
};

export default DarkHeroSection;
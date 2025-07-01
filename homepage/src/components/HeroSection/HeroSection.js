import React from 'react';
import ThreeDBackground from '../ThreeDbg/ThreeDbg';
import ScrollDownIndicator from '../ScrollDownIndicator/ScrollDownIndicator';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundContainer}>
        <ThreeDBackground />
      </div>
      <div className={styles.overlayContent}>
        <h1 className={styles.heroTitle}>KEENECT-SOFTWARE</h1>
        <ScrollDownIndicator />
      </div>
    </section>
  );
}

export default HeroSection;
import React from 'react';
import styles from './ScrollDownIndicator.module.css';

function ScrollDownIndicator() {
  return (
    <div className={styles.scrollDown}>
      <span>SCROLL DOWN</span>
      <span className={styles.arrow}>&#9660;</span> {/* Unicode down arrow */}
    </div>
  );
}

export default ScrollDownIndicator;
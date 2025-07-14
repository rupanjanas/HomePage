import React from 'react';
import styles from './Partners.module.css';

const Partners = () => {
  return (
    <section className={styles.partnersSection}>
      <h2 className={styles.title}>
  Trusted by  <br />
  <span className={styles.blueText}>Our Partners</span>
</h2>

      <div className={styles.logoGrid}>
        <img src="/image.png" className={styles.partnerLogo} />
      </div>
    </section>
  );
};

export default Partners;

// src/components/Empowering/Empowering.jsx
import React from 'react';
import styles from './Empowering.module.css';

const Empowering = () => {
  return (
    <section className={styles.empoweringSection}>
      <h2 className={styles.empoweringHeading}>
        Empowering Your Business with <span className={styles.keenectBlue}>Keenect CRM Software</span>
      </h2>
      
      <p className={styles.empoweringDescription}>
        This is the space to introduce the Services section. Briefly describe the types of
        services offered and highlight any special benefits or features.
      </p>
    </section>
  );
};

export default Empowering;
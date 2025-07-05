// src/components/Partners/Partners.jsx
import React from 'react';
import styles from './Partners.module.css';

// Placeholder data for partner logos. Replace with your actual image paths.
// You'll need to import these images if you're using a module bundler like Webpack/Vite
// import lionGroupLogo from '../../assets/logos/lion-group.png'; // Example
// import silverPipelineLogo from '../../assets/logos/silver-pipeline.png'; // Example
// ... and so on for all your partners

const partnersData = [
  { id: 1, name: 'LION GROUP', logo: '/path/to/lion-group-logo.png' }, // Replace with actual path
  { id: 2, name: 'SILVER PIPELINE', logo: '/path/to/silver-pipeline-logo.png' }, // Replace with actual path
  { id: 3, name: 'BGS Biotech', logo: '/path/to/bgs-biotech-logo.png' }, // Replace with actual path
  { id: 4, name: 'Goldfield', logo: '/path/to/goldfield-logo.png' }, // Replace with actual path
  { id: 5, name: 'H2O Technologies', logo: '/path/to/h2o-technologies-logo.png' }, // Replace with actual path
  // Add more partners as needed
];

const Partners = () => {
  return (
    <section className={styles.partnersSection}>
      <h2 className={styles.title}>
        Trusted by Our <span className={styles.blueText}>Partners</span>
      </h2>
      <div className={styles.logoGrid}>
        {partnersData.map(partner => (
          <div key={partner.id} className={styles.logoItem}>
            <img src={partner.logo} alt={partner.name} className={styles.partnerLogo} />
            <p className={styles.partnerName}>{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
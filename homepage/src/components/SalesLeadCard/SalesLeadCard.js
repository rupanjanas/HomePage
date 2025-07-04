// src/components/SalesLeadSection/SalesLeadSection.jsx
import React from 'react';
import styles from './SalesLeadCard.module.css';

const salesLeadData = [
  { id: 1, number1: 2, number2: 2, color: 'blue' },
  { id: 2, number1: '', operator: '+', number2: '', color: 'red' }, // Plus sign circle
  { id: 3, number1: 4, number2: 4, color: 'blue' },
  { id: 4, number1: '', operator: '+', number2: '', color: 'red' },
  { id: 5, number1: 8, number2: 8, color: 'blue' },
  { id: 6, number1: '', operator: '+', number2: '', color: 'red' },
  { id: 7, number1: 16, number2: 16, color: 'blue' },
  { id: 8, number1: '', operator: '+', number2: '', color: 'red' },
];

const SalesLeadSection = () => {
  return (
    <section className={styles.salesLeadSection}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.sectionNumber}>02</span> Sales & Lead Management Tools
      </h2>

      <div className={styles.contentWrapper}>
        {/* Left side: Description */}
        <p className={styles.descriptionText}>
          This is the space to describe the service and explain how customers or clients can benefit from it.
          It's an opportunity to add a short description that includes relevant details, like pricing,
          duration, location and how to book the service.
        </p>

        {/* Right side: Circles Grid */}
        <div className={styles.circlesGridContainer}>
          {salesLeadData.map((item) => (
            <div
              key={item.id}
              className={`${styles.circle} ${item.color === 'blue' ? styles.circleBlue : styles.circleRed}`}
            >
              {item.number1 && <span>{item.number1}</span>}
              {item.operator && <span className={styles.operator}>{item.operator}</span>}
              {item.number2 && <span>{item.number2}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesLeadSection;
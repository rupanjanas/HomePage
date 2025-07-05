// src/components/MobileCRMSection/MobileCRMSection.jsx
import React from 'react';
import styles from './MobileCRMCard.module.css';

const mobileCRMData = [
  { id: 1, type: 'square', text: '87K', color: 'light-blue' }, // Trapezoid with text
  { id: 2, type: 'square', icon: 'line-graph', color: 'red' },      // Red square with icon
  { id: 3, type: 'rectangle-vertical', icon: 'person', color: 'light-blue' }, // Vertical rectangle with person icon
  { id: 4, type: 'square', text: '27%', color: 'blue' }, // Trapezoid with rotated text
];

const MobileCRMSection = () => {
  return (
    <section className={styles.mobileCRMSection}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.sectionNumber}>03</span> Mobile CRM App
      </h2>

      <div className={styles.contentWrapper}>
        {/* Left side: Description */}
        <p className={styles.descriptionText}>
          This is the space to describe the service and explain how customers or clients can benefit from it.
          It's an opportunity to add a short description that includes relevant details, like pricing,
          duration, location and how to book the service.
        </p>

        {/* Right side: App Feature Cards Grid */}
        <div className={styles.appFeaturesGridContainer}>
          {mobileCRMData.map((item) => (
            <div
              key={item.id}
              className={`${styles.featureCard} ${styles[item.type]} ${styles[item.color]}`}
            >
              {item.text && <span className={styles.cardText}>{item.text}</span>}
              {/* Placeholder for actual SVG icons - you'd replace these with actual SVG components */}
              {item.icon === 'line-graph' && (
                <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 13.5V11.5H6.5L9.5 16L14.5 8L17.5 13.5H22V11.5H18L15 6L10 14L7 9L2 13.5Z" fill="currentColor"/>
                </svg>
              )}
              {item.icon === 'person' && (
                <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileCRMSection;
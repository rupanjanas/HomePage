// src/components/OurValuesSection/OurValuesSection.jsx
import React from 'react';
import styles from './OurValuesSection.module.css';

const valuesData = [
  {
    id: 1,
    number: '01',
    title: 'Business Empowering',
    description: 'Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it.',
    bottomVisual: null,
  },
  {
    id: 2,
    number: '02',
    title: 'Customer Centricity',
    description: 'Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it.',
    bottomVisual: 'circles',
  },
  {
    id: 3,
    number: '03',
    title: 'Data-Driven Decisions',
    description: 'Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it.',
    bottomVisual: 'triangles',
  },
];

const OurValuesSection = () => {
  return (
    <section className={styles.ourValuesSection}>
      <div className={styles.mainTitleContainer}>
        <h2 className={styles.mainTitle}>
          Our <span className={styles.mainTitleBlue}>Values</span>
        </h2>
        <div className={styles.topRightRectangles}>
            {[...Array(5)].map((_, i) => <div key={i} className={styles.topRightRectangle}></div>)}
        </div>
      </div>

      <div className={styles.valuesCardsContainer}>
        {valuesData.map((value, index) => (
          <div
            key={value.id}
            className={styles.valueCardStickyWrapper}
            style={{
              top: `${index * 20}px`,
              // The card appearing later in the DOM (higher index) should have a higher z-index
              // so it overlaps the previous cards.
              zIndex: index + 1, // Example: card 0 gets z-index 1, card 1 gets z-index 2, etc.
            }}
          >
            <div className={styles.valueCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>{value.number}</span>
                <span className={styles.cardDot}></span>
              </div>
              <h3 className={styles.cardTitle}>
                {value.title.split(' ')[0]} <br />
                <span className={styles.cardTitleBlue}>{value.title.split(' ')[1]}</span>
              </h3>
              <p className={styles.cardDescription}>{value.description}</p>

              {value.bottomVisual === 'circles' && (
                <div className={styles.bottomVisualCircles}>
                  <svg width="40" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" stroke="#777" strokeWidth="2" fill="none"/>
                    <circle cx="40" cy="20" r="18" stroke="#777" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              )}
              {value.bottomVisual === 'triangles' && (
                <div className={styles.bottomVisualTriangles}>
                  <svg width="60" height="25" viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,0 0,20 20,20" stroke="#777" strokeWidth="2" fill="none"/>
                    <polygon points="30,0 20,20 40,20" stroke="#777" strokeWidth="2" fill="none"/>
                    <polygon points="50,0 40,20 60,20" stroke="#777" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValuesSection;
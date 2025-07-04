// src/components/ServicesCards/ServicesCards.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './ServicesCards.module.css';

// Data for the 6 service cards
const services = [
  { id: 1, title: 'CRM Implementation & Onboarding' },
  { id: 2, title: 'Ongoing Support & Training' },
  { id: 3, title: 'CRM Customization & Integrations' },
  { id: 4, title: 'Advanced Reporting & Analytics' },
  { id: 5, title: 'CSM Platform' }, 
  { id: 6, title: 'Data Migration' },      
];

const ServicesCards = () => {
  const cardRefs = useRef([]); // A ref to hold individual card elements
  const [visibleCards, setVisibleCards] = useState({}); // State to track which cards are visible

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Mark card as visible when it enters the viewport
            setVisibleCards((prev) => ({
              ...prev,
              [entry.target.dataset.id]: true,
            }));
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.4, // Trigger when 20% of the item is visible
      }
    );

    // Observe each card
    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      // Cleanup observer on unmount
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []); // Run once on mount

  return (
    <section className={styles.servicesSection}>
      <div className={styles.cardsGrid}>
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (cardRefs.current[index] = el)} // Assign ref to each card
            data-id={service.id} // Store ID for state tracking
            className={`${styles.card} ${visibleCards[service.id] ? styles.cardVisible : ''}`}
            // Add a delay to each card for staggered animation
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className={styles.cardNumber}>
              <span className={styles.dot}></span>
              {String(service.id).padStart(2, '0')} {/* Formats to 01, 02, etc. */}
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCards;
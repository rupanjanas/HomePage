// src/components/Form/Form.jsx
import React from 'react';
import styles from './Form.module.css';

const Form = () => {
  return (
    <section className={styles.formSection}>
      {/* Main title and subtitle for the entire section */}
      <div className={styles.introContent}>
        <h2 className={styles.introTitle}>
          Are You Ready to <br />
          Transform Your <br />
          <span className={styles.blueText}>Customer Relationships?</span>
        </h2>
        <p className={styles.introSubtitle}>
          Contact us and request a free demo today!
        </p>
      </div>

      {/* NEW: This is the main card that contains BOTH the SVG and the form. */}
      {/* It will have the lighter background color. */}
      <div className={styles.mainFormCard}>
        {/* Visual Circle SVG - NOW INSIDE THE CARD */}
        <div className={styles.visualCircle}>
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" stroke="rgb(66, 133, 244)" strokeWidth="2" />
            <circle cx="100" cy="100" r="60" stroke="rgb(66, 133, 244)" strokeWidth="2" />
          </svg>
        </div>

        {/* The form itself - also inside the card */}
        <form className={styles.contactForm}>
          <div className={styles.nameFields}>
            <div className={styles.inputGroup}>
              <label htmlFor="firstName" className={styles.label}>First name *</label>
              <input type="text" id="firstName" name="firstName" className={styles.inputField} required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="lastName" className={styles.label}>Last name *</label>
              <input type="text" id="lastName" name="lastName" className={styles.inputField} required />
            </div>
          </div>

          <div className={styles.emailPhoneFields}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email *</label>
              <input type="email" id="email" name="email" className={styles.inputField} required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="phone" className={styles.label}>Phone</label>
              <input type="tel" id="phone" name="phone" className={styles.inputField} />
              <span className={styles.phoneDropdownArrow}>&#9660;</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea id="message" name="message" className={`${styles.inputField} ${styles.messageField}`} rows="4"></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
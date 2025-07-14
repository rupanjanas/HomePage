import React, { useEffect, useRef } from 'react';
import styles from './Form.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Form = () => {
  const circlesRef = useRef([]);

  useEffect(() => {
    gsap.to(circlesRef.current, {
      x: 0,
      ease: "power2.out",
      scrollTrigger: {
  trigger: circlesRef.current[0].parentNode,
  start: "top bottom",    // when top of element hits bottom of viewport
  end: "top center",      // ends when it reaches center
  scrub: 2,
}

    });
  }, []);

  return (
    <section className={styles.formSection}>
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

      <div className={styles.mainFormCard}>
        {/* 🔵 Visual Circle Area with 3 animated circles */}
        <div className={styles.visualCircle}>
          {[0, 1, 2].map((_, i) => (
            <div
              key={i}
              ref={el => circlesRef.current[i] = el}
              style={{ position: "absolute", transform: `translateX(${(i - 1) * 220}px)` }}
            >
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="70" stroke="rgb(66, 133, 244)" strokeWidth="2" />
              </svg>
            </div>
          ))}
        </div>

        {/* ✅ Form stays exactly the same */}
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

// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.topContent}>
        <div className={styles.brandInfo}>
          <div className={styles.logo}>KEENECT-SOFTWARE</div>
        </div>

        <div className={styles.subscribeSection}>
          <h3 className={styles.sectionTitle}>SUBSCRIBE</h3>
          <p className={styles.subscribeText}>Join the newsletter for relevant updates and inquiries</p>
          <div className={styles.emailInputGroup}>
            <label htmlFor="newsletterEmail" className="sr-only">Email</label>
            <input
              type="email"
              id="newsletterEmail"
              placeholder="Email *"
              className={styles.newsletterEmailInput}
              required
            />
          </div>
          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="subscribeConsent" className={styles.checkbox} required />
            <label htmlFor="subscribeConsent" className={styles.checkboxLabel}>Yes, subscribe me to your newsletter. *</label>
          </div>
          <button type="submit" className={styles.subscribeButton}>SUBSCRIBE</button>
        </div>

        <div className={styles.contactSection}>
          <h3 className={styles.sectionTitle}>CONTACT</h3>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">in</a>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">f</a>
            <a href="#" className={styles.socialIcon} aria-label="X (Twitter)">X</a>
          </div>
          <p className={styles.contactDetail}>info@mysite.com</p>
          <p className={styles.contactDetail}>123-456-7890</p>
        </div>

        <div className={styles.menuSection}>
          <h3 className={styles.sectionTitle}>MENU</h3>
          <ul className={styles.menuList}>
            <li><a href="#" className={styles.menuLink}>Company</a></li>
            <li><a href="#" className={styles.menuLink}>Support</a></li>
            <li><a href="#" className={styles.menuLink}>Accessibility statement</a></li>
            <li><a href="#" className={styles.menuLink}>Privacy policy</a></li>
          </ul>
        </div>
      </div>

      {/* This bottomBar already exists and is where the line is applied via CSS */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>© 2035 by Keenect-Software. Built on <a href="https://www.wix.com/studio" target="_blank" rel="noopener noreferrer" className={styles.wixStudioLink}>Wix Studio</a></p>
      </div>
    </footer>
  );
};

export default Footer;
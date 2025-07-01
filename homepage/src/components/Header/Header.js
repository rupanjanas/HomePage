import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* You can use an img tag for a logo image, or just text */}
        {/* <img src="/logo.png" alt="Keenect Software Logo" /> */}
        KEENECT-SOFTWARE
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#company">COMPANY</a></li>
          <li><a href="#support">SUPPORT</a></li>
        </ul>
      </nav>
      <button className={styles.requestDemoButton}>REQUEST A DEMO</button>
    </header>
  );
}

export default Header;
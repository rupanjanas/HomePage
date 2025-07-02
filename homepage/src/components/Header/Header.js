import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>KEENECT-SOFTWARE</span>
      </div>

     <div className={styles.rightSection}>
    <nav className={styles.nav}>
      <ul>
        <li><a href="#company">COMPANY</a></li>
        <li><a href="#support">SUPPORT</a></li>
      </ul>
    </nav>
    <button className={styles.requestDemoButton}>REQUEST A DEMO</button>
  </div>
</header>
  );
}

export default Header;

// components/Header.js
import React from 'react';
import styles from './styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="SpeakEase Logo" />
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><a className={styles.joinUsBtn} href="#join">Join us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
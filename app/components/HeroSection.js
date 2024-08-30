// components/HeroSection.js
import React from 'react';
import styles from './styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1><span>Speak</span> with <span>ease.</span><br />Connect with confidence.</h1>
        <p>Caption or small blurb about our product!</p>
        <button className={styles.ctaButton}>Join the Waitlist</button>
      </div>
      <div className={styles.heroImage}>
        <img src="/hero-image.png" alt="Illustration" />
      </div>
    </section>
  );
};

export default HeroSection;
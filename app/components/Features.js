// components/Features.js
import React from 'react';
import styles from './styles/Features.module.css';

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <h2>What makes us stand out</h2>
      <p>Caption or small blurb about our product!</p>
      <div className={styles.featureCards}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
    </section>
  );
};

export default Features;
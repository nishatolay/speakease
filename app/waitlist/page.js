// app/waitlist/page.js
import React from 'react';
import Header from '../components/Header'; // Ensure path is correct
import HeroSection from '../components/HeroSection'; // Ensure path is correct
import Features from '../components/Features'; // Ensure path is correct
import styles from '../components/styles/Waitlist.module.css'; // Check this path as well

const Waitlist = () => {
  return (
    <div className={styles.waitlistContainer}>
      <Header />
      <HeroSection />
      <Features />
    </div>
  );
};

export default Waitlist;
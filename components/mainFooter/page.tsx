// components/Footer.tsx

import React from "react";
import styles from "./page.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <h3>Contact Us</h3>
        <p>Dummy content for Contact Us column</p>
      </div>
      <div className={styles.column}>
        <h3>About Us</h3>
        <p>Dummy content for About Us column</p>
      </div>
      <div className={styles.column}>
        <h3>Community</h3>
        <p>Dummy content for Community column</p>
      </div>
      <div className={styles.column}>
        <h3>Social</h3>
        <p>Dummy content for Social column</p>
      </div>
    </footer>
  );
};

export default Footer;

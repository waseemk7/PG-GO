import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from "./page.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <h3>Contact Us</h3>
        <p>+91 9123456789</p>
        <p>support@pggo.com</p>
      </div>
      <div className={styles.column}>
        <h3>About Us</h3>
        <p>Blogs</p>
        <p>Our Story</p>
        <p>Career</p>
        <p>Contact Us</p>
        <p>FAQs</p>
      </div>
      <div className={styles.column}>
        <h3>Community</h3>
        <p>Terms and Conditions</p>
        <p>Service Terms</p>
        <p>Privacy Policy</p>
        <p>Guest Refund Policy</p>
        <p>Non Discrimination Policy</p>
        <p>Booking Policy</p>
      </div>
      <div className={styles.column}>
        <h3>Social</h3>
        <div className={styles.socialIcons}>
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

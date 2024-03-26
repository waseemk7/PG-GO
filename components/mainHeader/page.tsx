import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import styles from "./page.module.css";

interface HeaderProps {}

const MainHeader: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logoContainer}>
          {/* <Image
            src="/vercel.svg"
            alt="PGGO Logo"
            className={styles.pggoLogo}
            width={100}
            height={24}
            priority
          /> */}
          <h1>PgGo.com</h1>
        </div>
      </Link>

      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="tel:+9604491933">
              <span>Call Us </span>
              <FaPhone size={14} />
            </a>
          </li>
          <li>
            <Link href="/listYourProperty">List your property</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

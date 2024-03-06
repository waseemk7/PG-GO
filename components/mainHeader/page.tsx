// MainHeader.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
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

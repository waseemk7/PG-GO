import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

interface HeaderProps {}

const MainHeader: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      {/* <Image
        src="/vercel.svg"
        alt="PGGO Logo"
        className={styles.pggoLogo}
        width={100}
        height={24}
        priority
      /> */}
      <h1>PG GO</h1>

      <Link href="/login">Login</Link>
    </header>
  );
};

export default MainHeader;

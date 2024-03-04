import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <Image
        src="/vercel.svg"
        alt="PGGO Logo"
        className={styles.pggoLogo}
        width={100}
        height={24}
        priority
      />
      <h1>{title}</h1>
    </header>
  );
};

export default Header;

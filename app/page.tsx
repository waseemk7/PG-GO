import Header from "@/components/header/page";
import Image from "next/image";
import styles from "./page.module.css";

import heroImage from "@/assets/hero.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contentWrapper}>
        <Header title={"PGGO"} />
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                India Ka Apna Hostel Booking Platform
              </h1>
              <p className={styles.subtitle}>
                100% Refund On Cancellation. Zero Brokerage. No Hidden Charges.
              </p>
            </div>
          </div>
          <div className={styles.rightSection}>
            <Image
              src={heroImage}
              alt="Right Section Image"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

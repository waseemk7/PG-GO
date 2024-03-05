import Header from "@/components/header/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contentWrapper}>
        <Header title={"PGGO"} />
        <p className={styles.description}>
          Welcome back! Let’s continue your search
        </p>
      </div>
    </main>
  );
}

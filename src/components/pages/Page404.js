import React from "react";
import styles from "./Page404.module.css";

export default function Page404() {
  return (
    <main className={styles["l-page-404"]}>
      <h2 className={styles["l-page-404__title"]}>Error 404</h2>
      <p className={styles["l-page-404__text"]}>
        We didn&apos;t find the page you are trying to reach.
      </p>
    </main>
  );
}

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles["l-footer"]}>
      <div className={styles["l-footer__item"]}>
        <p className={styles["l-footer__text"]}>
          Image source{" "}
          <a
            href="https://starwas-visualguide.com"
            target="_blank"
            rel="noreferrer"
          >
            Star Wars Visual Guide
          </a>
        </p>
      </div>
      <div className={styles["l-footer-item"]}>
        <p className={styles["l-footer__text"]}>
          Images{" "}
          <a
            href="https://starwas-visualguide.com"
            target="_blank"
            rel="noreferrer"
          >
            Star Wars Visual Guide
          </a>
        </p>
      </div>
    </div>
  );
}

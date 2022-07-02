import React from "react";
import styles from "./Footer.module.css";
import { Link, GitHub } from "react-feather";

export default function Footer() {
  return (
    <div className={styles["l-footer"]}>
      <div className={styles["l-footer__item"]}>
        <p className={styles["l-footer__text"]}>
          Images -{" "}
          <a
            href="https://starwars-visualguide.com"
            target="_blank"
            rel="noreferrer"
          >
            <Link size={12} /> Star Wars Visual Guide
          </a>
        </p>
      </div>
      <div className={styles["l-footer__item"]}>
        <p className={styles["l-footer__text"]}>
          Source code -{" "}
          <a
            href="https://github.com/EduarDG09/star-wars-encyclopedia"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub size={12} /> Github
          </a>
        </p>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./GridLoading.module.css";

function GridLoading() {
  return (
    <section className={styles["c-grid-loading"]}>
      <article className={styles["c-grid-loading__item"]}></article>
      <article className={styles["c-grid-loading__item"]}></article>
      <article className={styles["c-grid-loading__item"]}></article>
      <article className={styles["c-grid-loading__item"]}></article>
      <article className={styles["c-grid-loading__item"]}></article>
    </section>
  );
}

export default GridLoading;

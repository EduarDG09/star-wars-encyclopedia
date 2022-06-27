import SearchBar from "../SearchBar/SearchBar";
import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles["l-home-layout"]}>
      <div className={styles["l-home-layout__item"]}>
        <SearchBar />
      </div>
      <div className={styles["l-home-layout__item"]}>
        <div className={styles["c-welcome"]}>
          <p className={styles["c-welcome__text"]}>
            Welcome to <a href="/">Star Wars Encyclopedia</a>, a WebApp inspired
            by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/mouredev/Monthly-App-Challenge-2022/blob/main/README.md"
            >
              MoureDev Monthly Challenge&apos;s Star Wars App
            </a>
            ; where we provide to you a little bit of information about this
            amazing world,
            <br />
            using{" "}
            <a target="_blank" rel="noreferrer " href="https://swapi.dev">
              SWAPI
            </a>{" "}
            as a source of data.
            <br />
            <br />
            Feel free to try things out by using our search field above, or
            moving around with our nav bar. Have fun, and may the force be with
            you :)
          </p>
        </div>
      </div>
    </main>
  );
}

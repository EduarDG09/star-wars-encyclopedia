import React from "react";
import { Menu } from "react-feather";
import styles from "./Header.module.css";

const menuOptions = [
  {
    value: "Characters",
    link: "/#",
  },
  {
    value: "Films",
    link: "/#",
  },
  {
    value: "Species",
    link: "/#",
  },
  {
    value: "Starships",
    link: "/#",
  },
  {
    value: "Vehicles",
    link: "/#",
  },
  {
    value: "Planets",
    link: "/#",
  },
];
export default function Header() {
  return (
    <header className={styles["l-header"]}>
      <div className={styles["l-header__item"]}>
        <div className={styles["c-logo"]}>
          <img src="/assets/img/logo.png" />
        </div>
      </div>
      <div className={styles["l-header__item"]}>
        <input
          type="checkbox"
          id="burger-toggle"
          className={styles["c-burger-toggle"]}
        ></input>
        <label className={styles["c-burger"]} htmlFor="burger-toggle">
          <Menu />
        </label>
        <nav className={styles["c-main-nav"]}>
          <ul className={styles["c-main-nav__menu"]}>
            {menuOptions.map((option, i) => (
              <li key={i} className={styles["c-main-nav__item"]}>
                <a href={option.link}>{option.value}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

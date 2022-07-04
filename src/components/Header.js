import React, { useRef } from "react";
import { Menu } from "react-feather";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const menuOptions = [
  {
    value: "Characters",
    link: "/characters",
  },
  {
    value: "Films",
    link: "/films",
  },
  {
    value: "Species",
    link: "/species",
  },
  {
    value: "Starships",
    link: "/starships",
  },
  {
    value: "Vehicles",
    link: "/vehicles",
  },
  {
    value: "Planets",
    link: "/planets",
  },
];
export default function Header() {
  const burgerToggle = useRef();
  return (
    <header className={styles["l-header"]}>
      <div className={styles["l-header__item"]}>
        <div className={styles["c-logo"]}>
          <NavLink to="/">
            <img src="/assets/img/logo.png" />
          </NavLink>
        </div>
      </div>
      <div className={styles["l-header__item"]}>
        <input
          type="checkbox"
          id="burger-toggle"
          ref={burgerToggle}
          className={styles["c-burger-toggle"]}
        ></input>
        <label className={styles["c-burger"]} htmlFor="burger-toggle">
          <Menu />
        </label>
        <nav className={styles["c-main-nav"]}>
          <ul className={styles["c-main-nav__menu"]}>
            {menuOptions.map((option, i) => (
              <li key={i} className={styles["c-main-nav__item"]}>
                <NavLink
                  // @ts-ignore
                  onClick={() => (burgerToggle.current.checked = false)}
                  to={`/list${option.link}`}
                  className={({ isActive }) =>
                    `${styles["c-main-nav__link"]} ${
                      isActive ? styles["c-main-nav__link--selected"] : ""
                    }`
                  }
                >
                  {option.value}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

import React from "react";
import styles from "./SearchBar.module.css";
import { Search } from "react-feather";

export default function SearchBar() {
  return (
    <div className={styles["c-search-bar"]}>
      <input
        type="text"
        id="search-input"
        placeholder="Search"
        className={styles["c-search-bar__input"]}
      ></input>
      <Search className={styles["c-search-bar__icon"]} />
    </div>
  );
}

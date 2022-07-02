import React from "react";
import styles from "./SearchBar.module.css";
import { Search } from "react-feather";
import PropTypes from "prop-types";

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export default function SearchBar(props) {
  const { onSearch } = props;

  return (
    <div className={styles["c-search-bar"]}>
      <p className={styles["c-search-bar__title"]}>Search:</p>
      <input
        type="text"
        autoComplete="new-password"
        required={true}
        onChange={onSearch}
        id="search-input"
        placeholder="Find characters, films, species and planets..."
        className={styles["c-search-bar__input"]}
      ></input>
      <Search className={styles["c-search-bar__icon"]} />
    </div>
  );
}

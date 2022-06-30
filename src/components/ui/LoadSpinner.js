import React from "react";
import { Loader } from "react-feather";
import styles from "./LoadSpinner.module.css";

export default function LoadSpinner() {
  return (
    <i className={styles["c-load-spinner"]}>
      <Loader />
    </i>
  );
}

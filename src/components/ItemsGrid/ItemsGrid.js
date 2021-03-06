import React from "react";
import Item from "./Item";
import styles from "./ItemsGrid.module.css";
import PropTypes from "prop-types";
import { Meh } from "react-feather";

ItemsGrid.propTypes = {
  items: PropTypes.array,
  moreData: PropTypes.func,
  typeLabel: PropTypes.bool,
};

export default function ItemsGrid(props) {
  const { items, typeLabel } = props;
  let classStr = styles["l-items-grid__item--auto-justify"];
  if (!items || items.length === 0) {
    return (
      <section className={styles["c-items-not-found"]}>
        <i className={styles["c-items-not-found__icon"]}>
          <Meh size={48} />
        </i>
        <p className={styles["c-items-not-found__text"]}>
          We didn&apos;t find anything.
          <br /> Try something else.
        </p>
      </section>
    );
  }

  if (items.length <= 4)
    classStr = styles["l-items-grid__item--auto-justify-min"];
  const delay = 50;

  return (
    <section className={styles["l-items-grid"]}>
      <div className={`${styles["l-items-grid__item"]} ${classStr}`}>
        {items.map((item, i) => (
          <Item
            key={i}
            item={item}
            typeLabel={typeLabel}
            style={{ "--anim-delay": `${delay * (i + 1)}ms` }}
          />
        ))}
      </div>
    </section>
  );
}

import React from "react";
import styles from "./Item.module.css";
import PropTypes from "prop-types";

Item.propTypes = {
  item: PropTypes.object,
  typeLabel: PropTypes.bool,
  style: PropTypes.object,
};

export default function Item(props) {
  const { style, item, typeLabel } = props;
  const itemNumber = item.url.split("/")[5];
  let type = item.url.split("/")[4];
  if (type === "people") type = "characters";
  return (
    <article style={style} className={styles["c-item"]}>
      <img
        className={styles["c-item__img"]}
        src={`https://starwars-visualguide.com/assets/img/${type}/${itemNumber}.jpg`}
        onError={(e) => e.target.remove()}
      />
      <h3 className={styles["c-item__text"]}>{item.name || item.title}</h3>
      {typeLabel && (
        <p className={styles["c-item__type"]}>{`${type
          .charAt(0)
          .toUpperCase()}${type.substring(1)}`}</p>
      )}
    </article>
  );
}

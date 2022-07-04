import React, { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemsGrid from "../ItemsGrid/ItemsGrid";
import GridLoading from "../ui/GridLoading";
import styles from "./List.module.css";

const itemsAllowed = [
  "characters",
  "films",
  "species",
  "starships",
  "vehicles",
  "planets",
];
export default function List() {
  const [items, setItems] = useState([]);
  const [requestState, setRequestState] = useState("LOADING");
  const [currentPage, setCurrentPage] = useState(1);
  const [stillMoreData, setStillMoreData] = useState(true);
  const { listItem } = useParams();
  let navigate = useNavigate();

  const getData = useCallback(
    async (page) => {
      if (!itemsAllowed.includes(listItem))
        return navigate("/404", { replace: true });
      let item = listItem;
      if (item === "characters") item = "people";
      let url = `https://swapi.dev/api/${item}/?page=${page}`;
      const response = await fetch(url);
      return await response.json();
    },
    [listItem]
  );

  const getItems = async (page) => {
    if (requestState !== "LOADING") setRequestState("LOADING");
    const data = await getData(page);
    if (data.next === null) setStillMoreData(false);
    else {
      if (!stillMoreData) setStillMoreData(true);
    }
    setItems(data.results);
    setRequestState("COMPLETED");
  };

  const handleNextPage = () => {
    getItems(currentPage + 1);
    setCurrentPage((page) => page + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePrevPage = () => {
    getItems(currentPage - 1);
    setCurrentPage((page) => page - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    try {
      getItems(1);
      setCurrentPage(1);
    } catch (err) {
      console.log(err);
    }
  }, [listItem]);

  return (
    <section className={styles["l-page-list-layout"]}>
      {requestState === "LOADING" && <GridLoading />}
      {requestState === "COMPLETED" && (
        <>
          <h2
            className={styles["l-page-list-layout__title"]}
          >{`${listItem[0].toUpperCase()}${listItem.substring(1)}`}</h2>
          <ItemsGrid items={items} />
          <div className={styles["l-page-list-layout__pagination"]}>
            <button
              type="button"
              disabled={!(currentPage > 1)}
              onClick={handlePrevPage}
              className={styles["l-page-list-layout__button"]}
            >
              Previous
            </button>
            <p className={styles["l-page-list-layout__page-num"]}>
              {currentPage}
            </p>
            <button
              type="button"
              onClick={handleNextPage}
              disabled={!stillMoreData}
              className={styles["l-page-list-layout__button"]}
            >
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
}

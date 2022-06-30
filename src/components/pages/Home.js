import SearchBar from "../SearchBar/SearchBar";
import React, { useMemo, useState } from "react";
import styles from "./Home.module.css";
import { debounce } from "lodash";
import ItemsGrid from "../ItemsGrid/ItemsGrid.js";
import LoadSpinner from "../ui/LoadSpinner";

export default function Home() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [requestStatus, setRequestStatus] = useState("");
  const onSearchHandler = (e) => {
    if (requestStatus !== "LOADING") setRequestStatus("LOADING");
    debounceHandler(e.target.value);
  };

  const genData = useMemo(
    async function* () {
      let nextUrls = [
        `https://swapi.dev/api/people/?search=${searchInput}`,
        `https://swapi.dev/api/films/?search=${searchInput}`,
        `https://swapi.dev/api/species/?search=${searchInput}`,
      ];
      while (nextUrls.some((url) => url !== null)) {
        const allRequests = [];
        for (const url of nextUrls) {
          if (url) allRequests.push(fetch(url).then((data) => data.json()));
        }
        const allData = await Promise.all(allRequests);
        nextUrls = allData.map((data) => data.next);
        yield allData.reduce((arr, data) => arr.concat(data.results), []);
      }
    },
    [searchInput]
  );

  const handleData = async () => {
    const data = await genData.next();
    setRequestStatus("COMPLETED");
    setSearchInput("");
    setSearchResult(data.value);
  };

  if (requestStatus === "LOADING" && searchInput !== "") {
    handleData();
  }

  const debounceHandler = useMemo(
    () =>
      debounce((string) => {
        if (string !== "") {
          setSearchInput(string);
        } else {
          setRequestStatus("");
        }
      }, 800),
    []
  );

  return (
    <main className={styles["l-home-layout"]}>
      <div className={styles["l-home-layout__item"]}>
        <SearchBar onSearch={onSearchHandler} />
      </div>
      <div className={styles["l-home-layout__item"]}>
        {requestStatus === "" && (
          <div className={styles["c-welcome"]}>
            <p className={styles["c-welcome__text"]}>
              Welcome to <a href="/">Star Wars Encyclopedia</a>, a WebApp
              inspired by{" "}
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
              moving around with our nav bar. Have fun, and may the force be
              with you :)
            </p>
          </div>
        )}
        {requestStatus === "LOADING" && <LoadSpinner />}
        {requestStatus === "COMPLETED" && (
          <ItemsGrid items={searchResult} moreData={handleData} />
        )}
      </div>
    </main>
  );
}

import React from "react";
import "./Home.styles.css";
import { SearchBar } from "./SearchBar";
import { useContainerThemeChange } from "../hooks/useContainerThemeChange.hook";
import { DropList } from "./DropList";
import { Cards } from "./Cards";
import { useCountriesContext } from "../context/countries.context";
import { Modal } from "./Modal";

export function Home() {
  useContainerThemeChange("home__container");

  const { isOpen } = useCountriesContext();

  return (
    <main id="home__container" className={`home__container`}>
      {!isOpen && (
        <>
          <div className="home__filters">
            <SearchBar />
            <DropList />
          </div>
          <Cards />
        </>
      )}

      {isOpen && (
        <>
          <Modal></Modal>
        </>
      )}
    </main>
  );
}

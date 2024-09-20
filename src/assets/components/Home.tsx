import React from "react";
import "./Home.styles.css";
import { SearchBar } from "./SearchBar";
import { useContainerThemeChange } from "../hooks/useContainerThemeChange.hook";
import { DropList } from "./DropList";
import { Cards } from "./Cards";

export function Home() {
  useContainerThemeChange("home__container");

  return (
    <main id="home__container" className={`home__container`}>
      <SearchBar />
      <DropList />
      <Cards />
    </main>
  );
}

import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import "./SearchBar.styles.css";
import LensComponent from "./icons/lens.icon";
import { useThemeContext } from "../context/theme.contex";
import { FilterType, useCountriesContext } from "../context/countries.context";

export function SearchBar() {
  const [value, setValue] = useState("");
  const { theme } = useThemeContext();
  const { filter, filterValue, changeFilter } = useCountriesContext();

  useEffect(() => {
    if (filter !== FilterType.NAME) {
      setValue("");
    } else {
      setValue(filterValue);
    }
  }, [filter]);

  const handleChange = (e: BaseSyntheticEvent) => {
    setValue(e.target.value);
    changeFilter(
      e.target.value === "" ? FilterType.NONE : FilterType.NAME,
      e.target.value
    );
  };

  return (
    <div className={`search__container ${theme}`}>
      <LensComponent />
      <input
        type="text"
        className={`textbox ${theme}`}
        placeholder="Search for a country..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

import React, { BaseSyntheticEvent, useState } from "react";
import "./SearchBar.styles.css";
import LensComponent from "./icons/lens.icon";
import { useThemeContext } from "../context/theme.contex";

export function SearchBar() {
  const [value, setValue] = useState("");
  const { theme } = useThemeContext();

  const handleChange = (e: BaseSyntheticEvent) => {
    setValue(e.target.value);
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

import React, { BaseSyntheticEvent, useState } from "react";
import "./SearchBar.styles.css";
import { useThemeContext } from "../context/theme.contex";
import { regions } from "../constants/api.references";
import "./DropList.styles.css";

export function DropList() {
  const [selectedOption, setSelectedOption] = useState("");
  const { theme } = useThemeContext();

  const handleChange = (e: BaseSyntheticEvent) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <select
        name="regionFilter"
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
        className={`select ${theme}`}
      >
        <option value={""}>Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}

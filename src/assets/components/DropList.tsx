import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import "./SearchBar.styles.css";
import { useThemeContext } from "../context/theme.contex";
import { regions } from "../constants/api.references";
import "./DropList.styles.css";
import { FilterType, useCountriesContext } from "../context/countries.context";

export function DropList() {
  const [selectedOption, setSelectedOption] = useState("");
  const { theme } = useThemeContext();
  const { filter, filterValue, changeFilter } = useCountriesContext();

  useEffect(() => {
    if (filter !== FilterType.REGION) {
      setSelectedOption("");
    } else {
      setSelectedOption(filterValue);
    }
  }, [filter]);

  const handleChange = (e: BaseSyntheticEvent) => {
    setSelectedOption(e.target.value);
    changeFilter(
      e.target.value === "" ? FilterType.NONE : FilterType.REGION,
      e.target.value
    );
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

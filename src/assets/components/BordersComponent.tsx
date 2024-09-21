import React, { BaseSyntheticEvent } from "react";
import { Countries, Country } from "../types/countries.types";
import { DefaultBtn } from "./DefaultBtn";
import "./BordersComponent.styles.css";
import { useCountriesContext } from "../context/countries.context";

interface BordersComponentProps {
  borders: Countries;
}

export function BordersComponent(props: BordersComponentProps) {
  const { borders } = props;
  const { changeSelected } = useCountriesContext();

  const handleClick = (border: Country) => (e: BaseSyntheticEvent) => {
    changeSelected(border);
  };

  return (
    <div className="container">
      <h1>Border Countries:</h1>
      <div className="borders__container">
        {borders.map((border, index) => (
          <DefaultBtn
            key={index}
            onClick={handleClick(border)}
            title={border.name.common}
          />
        ))}
      </div>
    </div>
  );
}

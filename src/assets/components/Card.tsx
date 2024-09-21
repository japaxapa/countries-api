import React from "react";
import { useThemeContext } from "../context/theme.contex";
import "./Card.styles.css";
import { useCountriesContext } from "../context/countries.context";
import { Country } from "../types/countries.types";

interface CardProps {
  country: Country;
}

export function Card({ country }: CardProps) {
  const { theme } = useThemeContext();

  const { changeOpen, changeSelected } = useCountriesContext();

  const handleClick = () => {
    changeSelected(country);
    changeOpen();
  };

  return (
    <div onClick={handleClick} className={`card__container ${theme}`}>
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      <div className="card__container--info">
        <h1>{country.name.common}</h1>
        <p>Population: {country.population.toLocaleString("en-GB")}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital ? country.capital[0] : "undefined"}</p>
      </div>
    </div>
  );
}

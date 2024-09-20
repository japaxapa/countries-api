import React from "react";
import { useThemeContext } from "../context/theme.contex";
import "./Card.styles.css";

interface CardProps {
  url: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

export function Card({ url, name, population, region, capital }: CardProps) {
  const { theme } = useThemeContext();

  return (
    <div className={`card__container ${theme}`}>
      <img src={url} alt={`${name} flag`} />
      <div className="card__container--info">
        <h1>{name}</h1>
        <p>Population: {population.toLocaleString("en-GB")}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
}

import React from "react";
import { Card } from "./Card";
import "./Cards.styles.css";
import { Spinner } from "./Spinner";
import { useGetRandomElements } from "../hooks/useGetRandomElements.hook";
import { FilterType, useCountriesContext } from "../context/countries.context";
export function Cards() {
  const { countries, isLoading, filter } = useCountriesContext();

  const randomCountries =
    filter === FilterType.NONE
      ? useGetRandomElements(countries, 10)
      : countries;

  return (
    <div className="cards__container">
      {isLoading && <Spinner />}
      {!isLoading &&
        randomCountries?.map((country, index) => (
          <Card key={index} country={country} />
        ))}
    </div>
  );
}

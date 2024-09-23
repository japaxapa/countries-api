import React from "react";
import { Card } from "./Card";
import "./Cards.styles.css";
import { Spinner } from "./Spinner";
import { useGetRandomElements } from "../hooks/useGetRandomElements.hook";
import { FilterType, useCountriesContext } from "../context/countries.context";
import useWindowDimensions from "../hooks/useWindowsDimension";
export function Cards() {
  const { countries, isLoading, filter } = useCountriesContext();

  const num = useWindowDimensions();

  const randomCountries =
    filter === FilterType.NONE
      ? useGetRandomElements(countries, num)
      : countries;

  return (
    <>
      {isLoading && (
        <div className="loading__container">
          <Spinner />
        </div>
      )}
      {!isLoading && (
        <div className="cards__container">
          {randomCountries?.map((country, index) => (
            <Card key={index} country={country} />
          ))}
        </div>
      )}
    </>
  );
}

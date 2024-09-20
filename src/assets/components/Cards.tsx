import React from "react";
import { Card } from "./Card";
import { useAllCountries } from "../hooks/useCountries.hook";
import "./Cards.styles.css";
import { Spinner } from "./Spinner";
import { useGetRandomElements } from "../hooks/useGetRandomElements.hook";

export function Cards() {
  const { data, loading, error } = useAllCountries();

  const countries = useGetRandomElements(data, 10);

  return (
    <div className="cards__container">
      {loading && <Spinner />}
      {!loading &&
        countries?.map((country, index) => (
          <Card
            key={index}
            url={country.flags.png}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital[0]}
          />
        ))}
    </div>
  );
}

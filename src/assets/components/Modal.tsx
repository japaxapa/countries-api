import React from "react";
import { DefaultBtn } from "./DefaultBtn";
import { useCountriesContext } from "../context/countries.context";
import "./Modal.styles.css";
import { useBorderCountries } from "../hooks/useBorderCountries.hook";
import { Spinner } from "./Spinner";
import { BordersComponent } from "./BordersComponent";

export function Modal() {
  const { changeOpen, selected } = useCountriesContext();
  const {
    data: borders,
    loading,
    error,
  } = useBorderCountries(selected?.borders || []);

  const handleClick = () => {
    changeOpen();
  };

  return (
    <>
      {loading && (
        <div className={`loading__container`}>
          <Spinner />
        </div>
      )}
      {!loading && (
        <div className={`modal__container`}>
          <DefaultBtn onBack={handleClick}></DefaultBtn>
          <img src={selected?.flags.png} alt={`${selected?.name} flag`} />

          <h1>{selected?.name.common}</h1>

          <div className="modal__info">
            <p>
              <strong>Native Name: </strong>
              {selected?.altSpellings[1]}
            </p>
            <p>
              <strong>Population: </strong>
              {selected?.population.toLocaleString("en-GB")}
            </p>
            <p>
              <strong>Region: </strong>
              {selected?.region}
            </p>
            <p>
              <strong>Sub Region: </strong>
              {selected?.subregion}
            </p>
            <p>
              <strong>Capital: </strong>
              {selected?.capital ? selected.capital[0] : "undefined"}
            </p>
          </div>

          <div className="modal__sub-info">
            <p>
              <strong>Top level Domain: </strong>
              {selected?.tld
                ? Object.entries(selected?.tld).map(([key, value], index) => {
                    const text = index === 0 ? value : `, ${value}`;
                    return <span key={index}>{text}</span>;
                  })
                : "undefined"}
            </p>
            <p>
              <strong>Currencies: </strong>
              {selected?.currencies
                ? Object.entries(selected?.currencies).map(
                    ([key, value], index) => {
                      const text = index === 0 ? value.name : `, ${value.name}`;
                      return <span key={index}>{text}</span>;
                    }
                  )
                : "undefined"}
            </p>
            <p>
              <strong>Languages: </strong>
              {selected?.languages
                ? Object.entries(selected?.languages).map(
                    ([key, value], index) => {
                      const text = index === 0 ? value : `, ${value}`;
                      return <span key={index}>{text}</span>;
                    }
                  )
                : "none"}
            </p>
          </div>

          {selected?.borders && <BordersComponent borders={borders} />}
        </div>
      )}
    </>
  );
}

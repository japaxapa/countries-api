import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Countries, Country } from "../types/countries.types";
import { useAllCountries } from "../hooks/useAllCountries.hook";
import { useFilterCountries } from "../hooks/useCountriesByRegion";

export enum FilterType {
  NAME = "name",
  REGION = "region",
  NONE = "none",
}

interface CountriesContextType {
  countries: Countries;
  isLoading: boolean;
  changeFilter: (type: FilterType, value: string) => void;
  filter: FilterType;
  filterValue: string;
  selected: Country | undefined;
  changeSelected: (country) => void;
  isOpen: boolean;
  changeOpen: () => void;
}

const CountriesContext = createContext<CountriesContextType | undefined>(
  undefined
);

export const useCountriesContext = () => {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error(
      "useCountriesContext must be used within a CountriesProvider"
    );
  }
  return context;
};

export const CountriesProvider = ({ children }: { children: ReactNode }) => {
  const [countries, setCountries] = useState<Countries>([]);
  const [filter, setFilter] = useState<FilterType>(FilterType.NONE);
  const [filterValue, setFilterValue] = useState("");
  const [loading, setLoading] = useState(true);

  const [selected, setSelected] = useState<Country | undefined>(undefined);
  const [isOpen, toggleOpen] = useState(false);

  const {
    data: allCountries,
    loading: allCountriesLoading,
    error: allCountriesError,
  } = useAllCountries();

  const {
    data: filteredCountries,
    loading: filterCountriesLoading,
    error: filterCountriesError,
  } = useFilterCountries({
    type: filter,
    value: filterValue,
  });

  useEffect(() => {
    const noFilter = !filter || !filterValue;

    if (!allCountries.length || noFilter) {
      setCountries(allCountries);
      return;
    }

    setCountries(filteredCountries);
  }, [filteredCountries, allCountriesLoading, filterCountriesLoading]);

  useEffect(() => {
    setLoading(true);
    if (!allCountriesLoading && !filterCountriesLoading) {
      setLoading(false);
    }
  }, [allCountriesLoading, filterCountriesLoading]);

  const changeFilter = (type: FilterType, value: string) => {
    if (!value) {
      setFilter(FilterType.NONE);
      setFilterValue("");
      return;
    }

    setFilter(type);
    setFilterValue(value);
  };

  const changeOpen = () => {
    toggleOpen((prev) => !prev);
  };

  const changeSelected = (country: Country) => {
    setSelected(country);
  };

  return (
    <CountriesContext.Provider
      value={{
        countries,
        isLoading: loading,
        changeFilter,
        filter,
        filterValue,
        isOpen,
        changeOpen,
        selected,
        changeSelected,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

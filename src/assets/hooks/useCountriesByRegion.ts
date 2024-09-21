import axios from "axios";
import { useEffect, useState } from "react";
import { Countries } from "../types/countries.types";
import { FilterType } from "../context/countries.context";

export interface FilterProps {
  type: FilterType;
  value: string;
}

export function useFilterCountries(props: FilterProps) {
  const [data, setData] = useState<Countries>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { type, value } = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          type === FilterType.REGION
            ? `https://restcountries.com/v3.1/region/${value}`
            : `https://restcountries.com/v3.1/name/${value}`
        );
        setData(response.data);
      } catch (e) {
        setData([]);
        setError(
          e.message || "Something went wrong in useFitlerCountries hook"
        );
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    if (!value) {
      setLoading(false);
      setData([]);
      return;
    }

    setLoading(true);

    fetchData();
  }, [type, value]);

  return { data, loading, error };
}

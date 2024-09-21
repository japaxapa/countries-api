import axios from "axios";
import { useEffect, useState } from "react";
import { Countries } from "../types/countries.types";

export function useAllCountries() {
  const [data, setData] = useState<Countries>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setData(response.data);
      } catch (e) {
        setError(e.message || "Something went wrong in useAllCountries hook");
      } finally {
        setTimeout(() => {
          [setLoading(false)];
        }, 1000);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

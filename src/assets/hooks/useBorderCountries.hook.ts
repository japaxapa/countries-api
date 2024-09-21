import { useEffect, useState } from "react";
import { Countries } from "../types/countries.types";
import axios from "axios";

export function useBorderCountries(codes: string[]) {
  const [data, setData] = useState<Countries>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (codeList: string[]) => {
      const codeString = codeList.join(",");

      try {
        if (codes.length) {
          const response = await axios.get(
            `https://restcountries.com/v3.1/alpha?codes=${codeString}`
          );
          setData(response.data);
        }
      } catch (e) {
        setError(
          e.message || "Something went wrong in useBordercountries hook"
        );
      } finally {
        setTimeout(() => {
          [setLoading(false)];
        }, 1000);
      }
    };

    if (codes.length) {
      setLoading(true);
      fetchData(codes);
    } else {
      setLoading(false);
    }
  }, [codes]);

  return { data, loading, error };
}

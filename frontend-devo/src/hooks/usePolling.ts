import axios from "axios";
import { useEffect, useState } from "react";

export const usePolling = <T>(url: string, interval: number) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });

      if (response.status === 200) {
        setData(response.data);
      }
    } catch (err) {
      setError(err as Error);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, interval);
    return () => clearInterval(intervalId);
  }, [url, interval]);

  return { data, error };
};

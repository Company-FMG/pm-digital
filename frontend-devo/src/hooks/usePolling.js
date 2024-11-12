import { useEffect, useState } from "react";
import axios from "axios";

const usePolling = (url, interval) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        
        console.log("Response Data:", response.data);
        
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
    const id = setInterval(fetchData, interval);

    return () => clearInterval(id);
  }, [url, interval]);

  return { data, error };
};

export default usePolling;

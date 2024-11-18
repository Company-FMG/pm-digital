import { useEffect, useState } from "react";
import axios from "axios";

const usePolling = (url, interval) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try{
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("authToken")}`
        }
      });
      
      if(response.status === 200) {
        setData(response.data);
        console.log(response.data);
      }
    } catch (err) {
      setError(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url, interval]);

  return { data, error };
};

export default usePolling;

import { useState, useEffect } from "react";
import axios from "axios";

const StoreList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          "http://busbuddy.rkenterprises.asia/api/v1/stores/get-stores/all",
          {
            params: {
              limit: 12,
              offset: 1,
              store_type: "all",
            },
            headers: {
              "Content-Type": "application/json",
              zoneId: "[2]",
              longitude: "77.5946",
              latitude: "12.9716",
            }
          }
        );

        setData(response.data.stores || []);
        setError(null);
      } catch (err) {
        setError(err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };
 
    fetchData();
  }, []);

  return { data, loading, error };
};

export default StoreList;

import React, { useState, useEffect } from "react";
import axios from "axios";

const HodlInfo = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.wazirx.com/api/v2/tickers"); // Replace with actual backend URL
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="hodlinfo-container">
      {isLoading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last</th>
              <th>Buy</th>
              <th>Sell</th>
              <th>Volume</th>
              <th>Base Unit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.last}</td>
                <td>{item.buy}</td>
                <td>{item.sell}</td>
                <td>{item.volume}</td>
                <td>{item.base_unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HodlInfo;

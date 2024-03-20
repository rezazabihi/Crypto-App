/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

const CoinChart = ({ marketCapRank }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (marketCapRank) {
        const response = await fetch(
          `https://www.coingecko.com/coins/${marketCapRank}/sparkline.svg`
        );
        const data = await response.text();
        setChartData(data);
      }
    };

    fetchData();
  }, [marketCapRank]);

  return (
    <div>
      {chartData && <img loading="lazy" alt="7d chart" src={chartData} />}
    </div>
  );
};

export default CoinChart;

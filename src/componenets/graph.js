import React, { useState, useEffect } from "react";
import { Line, Chart } from "react-chartjs-2";

function Graph() {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.thingspeak.com/channels/2076000/feeds.json?api_key=NRWO2V3YRD3CMNDF&results=2"
      );
      const data = await response.json();
      console.log(data.feeds);
      if (!data.feeds || data.feeds.length === 0) {
        return;
      }

      const values1 = data.feeds.map((feed) => feed.field1);
      const values2 = data.feeds.map((feed) => feed.field2);
      const values3 = data.feeds.map((feed) => feed.field3);
      const labels = data.feeds.map((feed) => feed.created_at);

      setData({
        labels: labels,
        datasets: [
          {
            label: "Field 1",
            data: values1,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
          {
            label: "Field 2",
            data: values2,
            fill: false,
            borderColor: "rgb(192, 75, 192)",
            tension: 0.1,
          },
          {
            label: "Field 3",
            data: values3,
            fill: false,
            borderColor: "rgb(192, 192, 75)",
            tension: 0.1,
          },
        ],
      });
    };
    fetchData();
  }, []);

  return <div>{`data: ${JSON.stringify(data.datasets)}`}</div>;
}

export default Graph;

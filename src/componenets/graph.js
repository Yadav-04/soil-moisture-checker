// import React from 'react'

// function graph() {
//     return(
//         <div>
//             <h4>graph</h4>
//         </div>
//     )
// }

// export default graph

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function Graph() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.thingspeak.com/channels/2076000/feeds.json?api_key=NRWO2V3YRD3CMNDF&results=2');
      const data = await response.json();
      const values = data.feeds.map(feed => feed.field1);
      const labels = data.feeds.map(feed => feed.created_at);
      setData({
        labels: labels,
        datasets: [
          {
            label: 'Data from ThingSpeak',
            data: values,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <Line data={data} />
    </div>
  );
}

export default Graph;

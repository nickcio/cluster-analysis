import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LinearScale, PointElement, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LinearScale, PointElement, CategoryScale);

const MdsDisplay = ({ clusterData, mdsName}) => {

  const pointRadius = mdsName === 'cluster' ? 10 : 3
  const data = {
    datasets: [
      {
        label: 'Clusters',
        data: clusterData.map(cluster => ({
          x: cluster[0],
          y: cluster[1] 
        })),
        backgroundColor: 'rgba(255, 99, 132, 1)',
        pointRadius: pointRadius,
      }
    ]
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Dimension One'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Dimension Two'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'MDS'
      }
    }
  };

  return <Scatter data={data} options={options} />;
};

export default MdsDisplay;

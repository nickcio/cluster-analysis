import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LinearScale, PointElement, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LinearScale, PointElement, CategoryScale);

const MdsDisplay = ({ clusterData }) => {
  const data = {
    datasets: [
      {
        label: 'Clusters',
        data: clusterData.map(cluster => ({
          x: cluster.percentDemocratic,
          y: Math.sqrt(cluster.percentDemocratic)
        })),
        backgroundColor: 'rgba(255, 99, 132, 1)',
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
          text: 'Deminsion Two'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Demension One'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'MDS-like Display of Clusters'
      }
    }
  };

  return <Scatter data={data} options={options} />;
};

export default MdsDisplay;

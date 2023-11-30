import React, { useRef, useEffect, useContext } from 'react';
import Chart from 'chart.js/auto';
import { GlobalStoreContext } from '../store'

function BubbleChart() {
  const { store } = useContext(GlobalStoreContext);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const canvas = chartRef.current;
    if (canvas) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy the existing chart
      }

      // Define your chart configuration
      const chartConfig = {
        type: 'bubble',
        data: {
          datasets: [
            {
              label: 'Cluster #1',
              data: [{x:Math.random()*25+20,y:Math.random()*125+15,r:Math.random()*17+5}],
              backgroundColor: 'rgba(175, 92, 132, 0.6)',
              borderColor: 'rgba(175, 92, 132, 1)'
            },
            {
              label: 'Cluster #2',
              data: [{x:Math.random()*25+50,y:Math.random()*25+155,r:Math.random()*55+5}],
              backgroundColor: 'rgba(92, 175, 132, 0.6)',
              borderColor: 'rgba(92, 175, 132, 1)'
            },
            {
              label: 'Cluster #3',
              data: [{x:Math.random()*25+20,y:Math.random()*125+150,r:Math.random()*25+20}],
              backgroundColor: 'rgba(62, 75, 172, 0.6)',
              borderColor: 'rgba(62, 75, 172, 1)'
            },
            {
              label: 'Cluster #4',
              data: [{x:Math.random()*25+70,y:Math.random()*125+70,r:Math.random()*17+5}],
              backgroundColor: 'rgba(75, 200, 233, 0.6)',
              borderColor: 'rgba(75, 200, 233, 1)'
            },
            {
              label: 'Cluster #5',
              data: [{x:Math.random()*25+25,y:Math.random()*25+25,r:Math.random()*17+5}],
              backgroundColor: 'rgba(205, 200, 33, 0.6)',
              borderColor: 'rgba(205, 200, 33, 1)'
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              title: {
                display: true,
                text: "# of districts w/ African-American pop. > 50%"
              },
              suggestedMin: 0, // Set the minimum value for the y-axis
              suggestedMax: 300
            },
            x: {
              title: {
                display: true,
                text: "Avg. African-American pop. %"
              },
                suggestedMin: 0, // Set the minimum value for the y-axis
                suggestedMax: 100
              },
          },
        },
      };

      chartInstance.current = new Chart(canvas, chartConfig);
      // Add a click event listener to the chart
      canvas.addEventListener('click', (event) => {
        // Determine the clicked data points
        const clickedPoints = chartInstance.current.getElementsAtEventForMode(event, 'point', chartConfig);
        if (clickedPoints.length > 0) {
          const clickedPoint = clickedPoints[0];
          const datasetIndex = clickedPoint.datasetIndex;
          const dataIndex = clickedPoint.index;
          const dataPoint = chartConfig.data.datasets[datasetIndex].data[dataIndex];
        
          // Do something with the clicked data point
          //Set the store stuff here
          store.setCluster("Cluster");
          console.log('Clicked data point:', dataPoint);
        }
      });
    }
  }, []);



  return <canvas ref={chartRef} width={'15vh'} height={'15vh'} />;
}

export default BubbleChart;
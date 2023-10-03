import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function PlanScatterPlot() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  let fakeData = [{x:1,y:1}]
      for (let i = 0; i < 1000; i++) {
        let x = Math.random()*30
        let y = Math.random()*29.9+0.1
        fakeData.push({x,y})
      }
    
  useEffect(() => {
    const canvas = chartRef.current;
    if (canvas) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy the existing chart
      }

      

      // Define your chart configuration
      const chartConfig = {
        type: 'scatter',
        data: {
          datasets: [
            {
                label: 'District Plans',
              data: fakeData,
              backgroundColor: 'rgba(12, 12, 12, 0.6)',
              borderColor: 'rgba(12, 12, 13, 1)'
            },
            {
                label: 'Current Plan',
                data: [{x:15,y:15}],
                backgroundColor: 'rgba(255, 0, 0, 0.6)',
                borderColor: 'rgba(255, 0, 0, 1)'
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              suggestedMin: 0, // Set the minimum value for the y-axis
              suggestedMax: 30
            },
            x: {
                suggestedMin: 0, // Set the minimum value for the y-axis
                suggestedMax: 30
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
          
          console.log('Clicked data point:', dataPoint);
        }
      });
    }
  }, []);



  return <canvas ref={chartRef} width={'15vh'} height={'15vh'} />;
}

export default PlanScatterPlot;
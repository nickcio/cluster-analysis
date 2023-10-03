import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function PlanScatterPlot() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  let fakeData = [{x:1,y:1}]
      for (let i = 0; i < 700; i++) {
        let x = Math.random()*30
        let y = Math.random()*29.9+0.1
        fakeData.push({x,y})
      }

  let fakeData2 = [{x:1,y:1}]
      for (let i = 0; i < 300; i++) {
        let x = Math.random()*30
        let y = Math.random()*29.9+0.1
        fakeData2.push({x,y})
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
              backgroundColor: 'rgba(12, 12, 230, 0.6)',
              borderColor: 'rgba(12, 12, 230, 1)'
            },
            {
                label: 'Current Plan',
                data: [{x:15,y:15}],
                backgroundColor: 'rgba(160, 255, 100, 0.6)',
                borderColor: 'rgba(10, 25, 25, 1)'
            },
            {
              label: 'Unavailable Plans',
            data: fakeData2,
            backgroundColor: 'rgba(200, 20, 20, 0.3)',
            borderColor: 'rgba(200, 20, 20, 0.6)'
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
                label: "Avg. Household Income",
                text: "# of districts w/ African-American pop. > 50%"
              },
              suggestedMin: 0, // Set the minimum value for the y-axis
              suggestedMax: 30
            },
            x: {
              title: {
                display: true,
                label: "% African-American Pop.",
                text: "Avg. African-American pop. %"
                
              },
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
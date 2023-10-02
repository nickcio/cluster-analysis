const bubbleChartOptions = {
    chart: {
      type: 'bubble',
        zoom: {
            enabled: true,
            type: 'x',
            autoScaleYaxis: true,  
            zoomedArea: {
            fill: {
                 color: '#90CAF9',
                opacity: 0.4
            },
            stroke: {
                color: '#0D47A1',
                opacity: 0.4,
                width: 1
            }
            }
        }
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#008FFB', '#00E396', '#FEB019'],
    xaxis: {
      type: 'numeric',
      title: {
        text: 'Distance',
      },
    },
    yaxis: {
      title: {
        text: 'State Range',
      },
    },
  };

  const bubbleChartData = [
    {
      name: 'Testing the cluster here in Arizona #1',
      label: 'Arizona Cluster #123132', 
      data: [
        { x: 5, y: 15, z: 10 },
        { x: 12, y: 10, z: 25 },
        { x: 20, y: 15, z: 10 },
      ],
    },
    {
      name: 'Testing the cluster here in Arizona #2',
      data: [
        { x: 2, y: 10, z: 20 },
      ],
    },
    // Add more series if needed
  ];


  <ReactApexChart options={bubbleChartOptions} series={bubbleChartData} type="bubble" height={300} />
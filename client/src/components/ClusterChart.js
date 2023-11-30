import { Scatter } from 'react-chartjs-2';
import 'chart.js/auto';
import { GlobalStoreContext } from '../store'
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';



const ClusterChart = ({ data, SizeKey }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [xAxisKey, setXAxisKey] = useState('percentDemocratic');
    const [yAxisKey, setYAxisKey] = useState('percentRepublican');

    // Get all possible keys for the axes, assuming all data objects have the same keys
    const axisKeys = Object.keys(data[0]).filter(key => key !== 'name' && key !== 'clusterSize');

    // Handlers for changing axis keys
    const handleXAxisChange = (event) => {
        setXAxisKey(event.target.value);
    };

    const handleYAxisChange = (event) => {
        setYAxisKey(event.target.value);
    };

    const chartData = {
    datasets: [
        {
        label: 'Cluster Data',
        data: data.map(item => ({
            x: item[xAxisKey],
            y: item[yAxisKey],
        })),
        pointRadius: data.map(item => Math.sqrt(item.clusterSize) * 0.9),
        backgroundColor: 'rgba(75,192,192,1)',
        },
    ],
    };

    const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
        title: {
            display: true,
            text: xAxisKey,
        },
        beginAtZero: true,
        },
        y: {
        title: {
            display: true,
            text: yAxisKey,
        },
        beginAtZero: true,
        },
    },
    layout: {
        padding: 20
    },

    plugins: {
        tooltip: {
        callbacks: {
            label: function(context) {
            var label = context.dataset.label || '';
            if (label) {
                label += ': ';
            }
            label += `(${context.raw.x}, ${context.raw.y}) Size: ${context.raw.r}`;
            return label;
            }
        }
        }
    },

    onClick: (event, elements) => {
        if (elements.length > 0) {
            const elementIndex = elements[0].index; 
            const datasetIndex = elements[0].datasetIndex; 
            const clickedElementData = data[elementIndex];
        
            navigate(`${location.pathname}/cluster/${clickedElementData.id}`);
        }
        }
    };

    return (
        <div>
        <div style={{ height: '50vh', width: '50vw', top:90, position:'fixed'}}>
            <Scatter data={chartData} options={chartOptions} />
          </div>
          <FormControl variant="standard" sx={{ marginLeft: 10, top:70, left:750, position:'fixed', minWidth: 180 }}>
            <InputLabel id="x-axis-select-label">X Axis</InputLabel>
            <Select
              labelId="x-axis-select-label"
              value={xAxisKey}
              onChange={handleXAxisChange}
              label="X Axis"
            >
              {axisKeys.map((key) => (
                <MenuItem key={key} value={key}>
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ marginLeft: 10, top:70, left:1150, position:'fixed', minWidth: 180 }}>
            <InputLabel id="y-axis-select-label">Y Axis</InputLabel>
            <Select
              labelId="y-axis-select-label"
              value={yAxisKey}
              onChange={handleYAxisChange}
              label="Y Axis"
            >
              {axisKeys.map((key) => (
                <MenuItem key={key} value={key}>
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      );
};


export default ClusterChart;

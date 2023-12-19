import { Scatter } from 'react-chartjs-2';
import 'chart.js/auto';
import { GlobalStoreContext } from '../store'
import React, { useState, useEffect, useContext} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';



const ClusterChart = ({ data }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const value = useContext(data);

    const [xAxisKey, setXAxisKey] = useState('id');
    const [yAxisKey, setYAxisKey] = useState('num_district_plans');

    console.log("data", data);

    const axisKeys = ["id", "num_district_plans", "average_euclidean_distance", "dem_votes_percent", "rep_votes_percent", "average_margin_of_victory", "average_opportunity_districts", "average_population_margin", "pop_white", "pop_hisp", "pop_black", "pop_other"];

    const handleXAxisChange = (event) => {
        setXAxisKey(event.target.value);
    };

    const handleYAxisChange = (event) => {
        setYAxisKey(event.target.value);
    };

    let multiplyBy = 5;
    if(location.pathname.includes("657fcafa2ffc37508d16a27f")){
      multiplyBy = .95;

    }

    const chartData = {
    datasets: [
        {
        label: 'Cluster Data',
        data: data.map(item => ({
            x: item[xAxisKey],
            y: item[yAxisKey],
        })),
        pointRadius: data.map(item => Math.sqrt(item.num_district_plans) * multiplyBy),
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
            const index = context.dataIndex;
            const dataset = context.dataset;
            const item = dataset.data[index];
            const clusterDetails = data[index];
  
            const labels = [];
              labels.push(`ID: ${clusterDetails.id}`);
              labels.push(`# of District Plans: ${clusterDetails.num_district_plans}`);
              labels.push(`Avg. Euclidean Distance: ${clusterDetails.average_euclidean_distance}`);
              labels.push(`Avg. Dem Votes %: ${clusterDetails.dem_votes_percent}`);
              labels.push(`Avg. Rep Votes %: ${clusterDetails.dem_votes_percent}`);
            return labels;
          }
        }
      }
    },

    onClick: (event, elements) => {
        if (elements.length > 0) {
            const elementIndex = elements[0].index; 
            const datasetIndex = elements[0].datasetIndex; 
            const clickedElementData = data[elementIndex];
        
            console.log(clickedElementData)
            navigate(`${location.pathname}/cluster/${clickedElementData.backendId}`);
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

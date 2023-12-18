import { Scatter } from 'react-chartjs-2';
import 'chart.js/auto';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const DistrictPlansChart = ({ data }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [xAxisKey, setXAxisKey] = useState('id');
    const [yAxisKey, setYAxisKey] = useState('availability');

    const axisKeys = ["id", "availability", "dem_percentages", "rep_percentages", "rep_dem_splits",];

    const handleXAxisChange = (event) => {
        setXAxisKey(event.target.value);
    };

    const handleYAxisChange = (event) => {
        setYAxisKey(event.target.value);
    };


    const availabilitySettings = {
        0: { color: 'rgba(255, 99, 132, 1)', label: 'Unavailable' },
        1: { color: 'rgba(54, 162, 235, 1)', label: 'Available' }
    };
    
    const datasets = Object.keys(availabilitySettings).map(availabilityKey => {
        const setting = availabilitySettings[availabilityKey];
        return {
            label: setting.label,
            data: data.filter(item => item['availability'] === (availabilityKey === '1')).map(item => ({
                x: item[xAxisKey],
                y: item[yAxisKey],
            })),
            backgroundColor: setting.color,
        };
    });
    
    const chartData = {
        datasets: datasets
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
            },
            y: {
                title: {
                    display: true,
                    text: yAxisKey,
                },
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
                    const planDetails = data[index];
          
                    const labels = [];
                      labels.push(`ID: ${planDetails.id}`);
                      labels.push(`Availability: ${planDetails.availability}`);
                      labels.push(`Dem %: ${planDetails.dem_percentages}`);
                      labels.push(`Rep %: ${planDetails.rep_percentages}`);
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
            
                //navigate(`${location.pathname}/district/${clickedElementData['District Plan']}`);
            }
        }
    };

    return (
        <div>
            <div style={{ height: '50vh', width: '50vw', top:'12%', left:'50%', position:'fixed'}}>
                <Scatter data={chartData} options={chartOptions} />
            </div>
            <FormControl variant="standard" sx={{ marginLeft: 10, top:'10%', left:'50%', position:'fixed', minWidth: 120 }}>
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
            <FormControl variant="standard" sx={{ marginLeft: 10, top:'10%', left:'80%', position:'fixed', minWidth: 120 }}>
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

export default DistrictPlansChart;

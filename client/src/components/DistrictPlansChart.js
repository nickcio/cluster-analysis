import { Scatter } from 'react-chartjs-2';
import 'chart.js/auto';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const DistrictPlansChart = ({ data }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [xAxisKey, setXAxisKey] = useState('Voting Age Pop.');
    const [yAxisKey, setYAxisKey] = useState('African-American Pop.');

    const axisKeys = Object.keys(data[0]).filter(key => key !== 'District Plan' && key !== 'Size (km2)');

    const handleXAxisChange = (event) => {
        setXAxisKey(event.target.value);
    };

    const handleYAxisChange = (event) => {
        setYAxisKey(event.target.value);
    };

    const getDotColor = (availability) => {
        switch (availability) {
            case 0:
                return 'rgba(255, 99, 132, 1)'; 
            case 1:
                return 'rgba(54, 162, 235, 1)'; 
            default:
                return 'rgba(201, 203, 207, 1)'; 
        }
    };

    const availabilitySettings = {
        0: { color: 'rgba(255, 99, 132, 1)', label: 'Unavailable' },
        1: { color: 'rgba(54, 162, 235, 1)', label: 'Available' }
    };

    const datasets = Object.keys(availabilitySettings).map(availability => {
        const setting = availabilitySettings[availability];
        return {
            label: setting.label,
            data: data.filter(item => item.Availabity.toString() === availability).map(item => ({
                x: item[xAxisKey],
                y: item[yAxisKey],
            })),
            backgroundColor: setting.color,
        };
    });

    const chartData = { datasets };

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
            
                //navigate(`${location.pathname}/district/${clickedElementData['District Plan']}`);
            }
        }
    };

    return (
        <div>
            <div style={{ height: '50vh', width: '50vw', top:90, left:710, position:'fixed'}}>
                <Scatter data={chartData} options={chartOptions} />
            </div>
            <FormControl variant="standard" sx={{ marginLeft: 10, top:70, left:720, position:'fixed', minWidth: 120 }}>
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
            <FormControl variant="standard" sx={{ marginLeft: 10, top:70, left:1100, position:'fixed', minWidth: 120 }}>
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

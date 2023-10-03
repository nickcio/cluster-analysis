import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'
import PlanScatterPlot from './PlanScatterPlot';
import ReactApexChart from 'react-apexcharts';
import {Box, List, ListItem, TextField, Table, TableBody, TableCell, TableContainer, TableHead,
        TableRow, Paper} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'id', headerName: 'District', width: 60 },
    { field: 'vap', headerName: 'Voting Age Pop.', type: 'number', width: 140 },
    { field: 'pop', headerName: 'African-American Pop.', type: 'number', width: 160 },
    { field: 'size', headerName: 'Size (km²)', type: 'number', width: 100 },
    {
      field: 'dens',
      headerName: 'Pop. Density',
      description: 'Population density per square kilometer',
      type: 'number',
      width: 130,
    },
    {
      field: 'income',
      headerName: 'Avg. Income USD',
      description: 'Average Income in USD',
      type: 'number',
      width: 140,
    },
  ];
  

  const rows = [];

  for (let i = 1; i < 25; i++) {
    let pop = Math.floor(Math.random()*100000+1000000)+Math.floor(Math.random()*100000000)
    let size = Math.floor(Math.random()*100000+5000)
    let income = Math.floor(Math.random()*100000+50000)
    let row = {id: String(i), pop:Math.floor(pop*Math.random()), vap:Math.floor(pop*0.78), size:size, dens:pop/size, income:income}
    rows.push(row)
  }
  
    
export default function Plans() {


    /*
       Here we make the table for the cluster data with the scatter plot above where when we open it opns the individualized district
       plans within the cluster

       Makes different clusters based off the ensemble that it is in

       Make a bubble graph first of the different plans, Make the table for different values we need

       Table includes:
		Republicans'/Democratic splits
		Percentage of Republican Voters
		Percentage of Democratic Voters,
		Percentage of Demographic groups,
		Etc
    */

    // const bubbleChartOptions = {
    //     chart: {
    //         type: 'bubble',
    //         zoom: {
    //             enabled: false,
    //             type: 'x',
    //             autoScaleYaxis: true,  
    //             zoomedArea: {
    //             fill: {
    //                     color: '#90CAF9',
    //                 opacity: 0.4
    //             },
    //             stroke: {
    //                 color: '#0D47A1',
    //                 opacity: 0.4,
    //                 width: 1
    //             },
    //             }
    //         }
    //     },
    //     dataLabels: {
    //         enabled: false,
    //     },
    //     colors: ['white', '#008FFB', '#00E396', '#FEB019', '#A65FEC', 'white'],
    //     xaxis: {
    //         type: 'numeric',
    //         title: {
    //         forceNiceScale: false,
    //         min: 0,            
    //         max: 15,
    //         },
    //     },
    //     yaxis: {
    //     },
    //     };
    
    //     const bubbleChartData = [
    //     {
    //         name: "",
    //         data: [
    //         { x: 0, y: 0, z: 0 },
    //         ],
    //     },
    //     {
    //         name: 'Cluster #1',
    //         label: 'Arizona Cluster #123132', 
    //         data: [
    //         { x: 4, y: 12, z: 500 },
    //         ],
    //     },
    //     {
    //         name: 'Cluster #2',
    //         data: [
    //         { x: 7, y: 5, z: 300 },
    //         ],
    //     },
    //     {
    //         name: 'Cluster #3',
    //         data: [
    //         { x: 12, y: 10, z: 250},
    //         ],
    //     },
    //     {
    //         name: 'Cluster #4',
    //         data: [
    //         { x: 8, y: 6, z: 200 },
    //         ],
    //     },
    //     {
    //         name: "",
    //         data: [
    //         { x: 15, y: 15, z: 0 },
    //         ],
    //     },
    //     // Add more series if needed
    //     ];
   

    return (
        <Box style={{width: "50vw", height: "85vh", }} sx={{bgcolor: "white"}}>
            <Box style={{width: "50vw", height: "35vh", }}>
                 <PlanScatterPlot/>
            </Box>
            
            {/* <ReactApexChart options={bubbleChartOptions} series={bubbleChartData} type="bubble" height={"45%"} width={"99%"}/> */}
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 15},
                },
                }}
                sx ={{height:"55%", fontSize: "1.5vh", fontWeight: 550}}
                getRowHeight={() => 'auto'}
                getRowClassName={(params) =>
                  params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
                }

            />
        </Box>      
    )
}   